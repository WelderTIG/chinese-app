import React, { useState } from 'react';
import FlashCard from './FlashCard';
import { ChineseDictionary } from '../words';

type DisplayMode = 'glyph' | 'pinyin' | 'translation';

const MemorizationSection: React.FC = () => {
    const [displayMode, setDisplayMode] = useState<DisplayMode>('glyph');
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [showAll, setShowAll] = useState<boolean>(false);

    // Объединяем все слова из словаря в один массив
    const allWords = [
        ...Object.values(ChineseDictionary.pronouns),
        ...Object.values(ChineseDictionary.verbsBasic),
        ...Object.values(ChineseDictionary.verbsAction),
        ...Object.values(ChineseDictionary.adjectives),
        ...Object.values(ChineseDictionary.nouns),
    ];

    const currentWord = allWords[currentIndex];

    const handleCardClick = () => {
        if (!showAll) {
            setShowAll(true);
        } else {
            setShowAll(false);
            setCurrentIndex(Math.floor(Math.random() * allWords.length));
        }
    };

    return (
        <div className="memorization-section">
            <h2>Запоминание слов</h2>
            <div className="mode-selector">
                <label>
                    <input
                        type="radio"
                        checked={displayMode === 'glyph'}
                        onChange={() => setDisplayMode('glyph')}
                    />
                    Иероглиф
                </label>
                <label>
                    <input
                        type="radio"
                        checked={displayMode === 'pinyin'}
                        onChange={() => setDisplayMode('pinyin')}
                    />
                    Пиньинь
                </label>
                <label>
                    <input
                        type="radio"
                        checked={displayMode === 'translation'}
                        onChange={() => setDisplayMode('translation')}
                    />
                    Перевод
                </label>
            </div>
            <div className="flash-card-container">
                <FlashCard
                    word={currentWord}
                    displayMode={displayMode}
                    showAll={showAll}
                    onClick={handleCardClick}
                />
            </div>
        </div>
    );
};

export default MemorizationSection;