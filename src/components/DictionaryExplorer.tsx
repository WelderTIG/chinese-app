import React, { useState, useEffect } from 'react';
import { DictItem } from '../types/types';

// Импортируем все блоки
import { newVerbs } from '../newVerbs';
import { newAdjectives } from '../newAdjectives';
import { newAdverbs } from '../newAdverbs';
import { newClassifiers } from '../newClassifiers';
import { newOther } from '../newOther';
import { newNouns1 } from '../newNouns1';
import { newNouns2 } from '../newNouns2';

// Тип для блока слов
type BlockGroup = Record<string, Record<number, DictItem>>;

// Структура категорий
const DICTIONARY_CATEGORIES = {
    verbs: { label: 'Глаголы', blocks: newVerbs as BlockGroup },
    nouns: { label: 'Существительные', blocks: { ...newNouns1, ...newNouns2 } as BlockGroup },
    adjectives: { label: 'Прилагательные', blocks: newAdjectives as BlockGroup },
    adverbs: { label: 'Наречия', blocks: newAdverbs as BlockGroup },
    classifiers: { label: 'Счётные слова', blocks: newClassifiers as BlockGroup },
    other: { label: 'Прочее', blocks: newOther as BlockGroup },
};

type CategoryKey = keyof typeof DICTIONARY_CATEGORIES;

const DictionaryExplorer: React.FC = () => {
    const [view, setView] = useState<'categories' | 'blocks' | 'words'>('categories');
    const [selectedCategory, setSelectedCategory] = useState<CategoryKey | null>(null);
    const [selectedBlock, setSelectedBlock] = useState<string | null>(null);
    const [flippedWords, setFlippedWords] = useState<Set<string>>(new Set());
    const [showPinyin, setShowPinyin] = useState<boolean>(true);
    const [displayMode, setDisplayMode] = useState<'chinese' | 'russian'>('chinese');
    const [modalExamples, setModalExamples] = useState<string[] | null>(null);

    // Загрузка настроек при старте
    useEffect(() => {
        const savedPinyin = localStorage.getItem('dictionary-show-pinyin');
        const savedMode = localStorage.getItem('dictionary-display-mode');
        if (savedPinyin !== null) {
            setShowPinyin(savedPinyin === 'true');
        }
        if (savedMode === 'chinese' || savedMode === 'russian') {
            setDisplayMode(savedMode);
        }
    }, []);

    // Сохранение настроек
    useEffect(() => {
        localStorage.setItem('dictionary-show-pinyin', String(showPinyin));
        localStorage.setItem('dictionary-display-mode', displayMode);
    }, [showPinyin, displayMode]);

    const goBack = () => {
        if (view === 'words') {
            setSelectedBlock(null);
            setView('blocks');
        } else if (view === 'blocks') {
            setSelectedCategory(null);
            setView('categories');
        }
    };

    const toggleWord = (glyph: string) => {
        setFlippedWords((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(glyph)) {
                newSet.delete(glyph);
            } else {
                newSet.add(glyph);
            }
            return newSet;
        });
    };

    const openExampleModal = (examples: string[], e: React.MouseEvent) => {
        e.stopPropagation();
        setModalExamples(examples);
    };

    const closeModal = () => setModalExamples(null);

    // === Вид: категории ===
    if (view === 'categories') {
        return (
            <div className="dictionary-explorer">
                <div className="explorer-header">
                    <h2>Словарь</h2>
                    <div className="toggles">
                        <label className="pinyin-toggle">
                            <input
                                type="checkbox"
                                checked={showPinyin}
                                onChange={(e) => setShowPinyin(e.target.checked)}
                            />
                            Пиньинь
                        </label>
                        <label className="mode-toggle">
                            <input
                                type="radio"
                                name="display-mode"
                                checked={displayMode === 'chinese'}
                                onChange={() => setDisplayMode('chinese')}
                            />
                            简
                        </label>
                        <label className="mode-toggle">
                            <input
                                type="radio"
                                name="display-mode"
                                checked={displayMode === 'russian'}
                                onChange={() => setDisplayMode('russian')}
                            />
                            Рус
                        </label>
                    </div>
                </div>
                <div className="icon-grid">
                    {Object.entries(DICTIONARY_CATEGORIES).map(([key, { label }]) => (
                        <div
                            key={key}
                            className="icon-item"
                            onClick={() => {
                                setSelectedCategory(key as CategoryKey);
                                setView('blocks');
                            }}
                        >
                            <div className="icon">{label[0]}</div>
                            <div className="icon-label">{label}</div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    // === Вид: блоки ===
    if (view === 'blocks' && selectedCategory) {
        const blocks = DICTIONARY_CATEGORIES[selectedCategory].blocks;
        const blockList = Object.keys(blocks);

        return (
            <div className="dictionary-explorer">
                <div className="explorer-header">
                    <h2>
                        <button onClick={goBack} className="back-button">
                            ←
                        </button>
                        {DICTIONARY_CATEGORIES[selectedCategory].label}
                    </h2>
                    <div className="toggles">
                        <label className="pinyin-toggle">
                            <input
                                type="checkbox"
                                checked={showPinyin}
                                onChange={(e) => setShowPinyin(e.target.checked)}
                            />
                            Пиньинь
                        </label>
                        <label className="mode-toggle">
                            <input
                                type="radio"
                                name="display-mode"
                                checked={displayMode === 'chinese'}
                                onChange={() => setDisplayMode('chinese')}
                            />
                            简
                        </label>
                        <label className="mode-toggle">
                            <input
                                type="radio"
                                name="display-mode"
                                checked={displayMode === 'russian'}
                                onChange={() => setDisplayMode('russian')}
                            />
                            Рус
                        </label>
                    </div>
                </div>
                <div className="icon-grid">
                    {blockList.map((blockKey) => (
                        <div
                            key={blockKey}
                            className="icon-item"
                            onClick={() => {
                                setSelectedBlock(blockKey);
                                setView('words');
                            }}
                        >
                            <div className="icon">📚</div>
                            <div className="icon-label">{blockKey}</div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    // === Вид: слова ===
    if (view === 'words' && selectedCategory && selectedBlock) {
        const blocks = DICTIONARY_CATEGORIES[selectedCategory].blocks;
        const block = blocks[selectedBlock as keyof typeof blocks];
        const words: DictItem[] = Object.values(block);

        return (
            <div className="dictionary-explorer">
                <div className="explorer-header">
                    <h2>
                        <button onClick={goBack} className="back-button">
                            ←
                        </button>
                        {selectedBlock}
                    </h2>
                    <div className="toggles">
                        <label className="pinyin-toggle">
                            <input
                                type="checkbox"
                                checked={showPinyin}
                                onChange={(e) => setShowPinyin(e.target.checked)}
                            />
                            Пиньинь
                        </label>
                        <label className="mode-toggle">
                            <input
                                type="radio"
                                name="display-mode"
                                checked={displayMode === 'chinese'}
                                onChange={() => setDisplayMode('chinese')}
                            />
                            简
                        </label>
                        <label className="mode-toggle">
                            <input
                                type="radio"
                                name="display-mode"
                                checked={displayMode === 'russian'}
                                onChange={() => setDisplayMode('russian')}
                            />
                            Рус
                        </label>
                    </div>
                </div>
                <div className="words-grid">
                    {words.map((word) => {
                        const isFlipped = flippedWords.has(word.glyph);
                        return (
                            <div
                                key={word.glyph}
                                className={`word-card ${isFlipped ? 'flipped' : ''}`}
                                onClick={() => toggleWord(word.glyph)}
                            >
                                {/* Исходное состояние */}
                                {displayMode === 'chinese' ? (
                                    <>
                                        <div className="word-glyph">{word.glyph}</div>
                                        {showPinyin && <div className="word-pinyin">({word.pinyin})</div>}
                                    </>
                                ) : (
                                    <div className="word-translation-russian">{word.translation}</div>
                                )}

                                {/* Развёрнутое состояние */}
                                {isFlipped && (
                                    <>
                                        {displayMode === 'russian' && (
                                            <>
                                                <div className="word-glyph">{word.glyph}</div>
                                                {showPinyin && <div className="word-pinyin">({word.pinyin})</div>}
                                            </>
                                        )}
                                        <div className="word-translation">{word.translation}</div>
                                        {word.classifier && (
                                            <div className="word-classifier">Счётное: {word.classifier}</div>
                                        )}
                                        {/* Кнопка примеров */}
                                        {word.examples && word.examples.length > 0 && (
                                            <button
                                                className="examples-button"
                                                onClick={(e) => openExampleModal(word.examples!, e)}
                                            >
                                                ℹ️
                                            </button>
                                        )}
                                    </>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Модальное окно с примером */}
                {modalExamples && (
                    <div className="modal-overlay" onClick={closeModal}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <ul className="examples-list">
                                {modalExamples.map((example, idx) => {
                                    const parts = example.split(' — ');
                                    const chinesePinyin = parts[0] || example;
                                    const translation = parts[1] || '';
                                    return (
                                        <li key={idx} className="example-item">
                                            <div className="example-chinese">{chinesePinyin}</div>
                                            {translation && <em className="example-translation">{translation}</em>}
                                        </li>
                                    );
                                })}
                            </ul>
                            <button className="modal-close-button" onClick={closeModal}>×</button>
                        </div>
                    </div>
                )}
            </div>
        );
    }

    return <div className="dictionary-explorer">Загрузка...</div>;
};

export default DictionaryExplorer;
