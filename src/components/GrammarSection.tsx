
import React, { useState, useEffect } from 'react';
import MarkdownViewer from './MarkdownViewer';
import { loadMarkdownContent } from '../utils/loadMarkdown';

const grammarFiles = [
    { name: 'Основы грамматики', file: 'grammar.md' },
    { name: 'Прилагательные и притяжательные конструкции', file: 'grammar2.md' },
    { name: 'Модальные глаголы', file: 'modalVerbs.md' },
    { name: 'Таблица ключей', file: 'radicals.md' },
];

const GrammarSection: React.FC = () => {
    const [selectedFile, setSelectedFile] = useState<string | null>('grammar.md');
    const [markdownContent, setMarkdownContent] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (selectedFile) {
            const loadContent = async () => {
                setIsLoading(true);
                setError(null);
                try {
                    const content = await loadMarkdownContent(selectedFile);
                    setMarkdownContent(content);
                } catch (err) {
                    console.error('Error loading markdown:', err);
                    setError('Не удалось загрузить содержимое');
                    setMarkdownContent('# Ошибка загрузки\nПопробуйте позже');
                } finally {
                    setIsLoading(false);
                }
            };

            loadContent();
        }
    }, [selectedFile]);

    return (
        <div className="grammar-section">
            <h2>Грамматика</h2>
            <div className="grammar-files">
                {grammarFiles.map((file) => (
                    <button
                        key={file.file}
                        onClick={() => setSelectedFile(file.file)}
                        className={selectedFile === file.file ? 'active' : ''}
                        disabled={isLoading}
                    >
                        {file.name}
                    </button>
                ))}
            </div>
            <div className="grammar-content">
                {isLoading && <p>Загрузка...</p>}
                {error && <p className="error">{error}</p>}
                {markdownContent && <MarkdownViewer content={markdownContent} />}
            </div>
        </div>
    );
};

export default GrammarSection;