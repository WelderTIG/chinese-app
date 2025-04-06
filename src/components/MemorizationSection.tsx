import React, { useState } from 'react';
import FlashCard from './FlashCard';
import DictionarySelector from './DictionarySelector';
import { ChineseDictionary } from '../words';
import { DictItem } from '../types/types';

type DisplayMode = 'glyph' | 'pinyin' | 'translation';

const MemorizationSection: React.FC = () => {
    const [displayMode, setDisplayMode] = useState<DisplayMode>('glyph');
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [showAll, setShowAll] = useState<boolean>(false);
    const [selectedCategory, setSelectedCategory] = useState<string>('all');

    const getAllWords = (): DictItem[] => {
        if (selectedCategory === 'all') {
            return Object.values(ChineseDictionary)
                .flatMap((category) => Object.values(category))
                .map((item) => ({
                    glyph: item.glyph,
                    pinyin: item.pinyin,
                    translation: item.translation,
                    examples: 'examples' in item ? item.examples : undefined,
                }));
        }
        return Object.values(ChineseDictionary[selectedCategory as keyof typeof ChineseDictionary]).map(
            (item) => ({
                glyph: item.glyph,
                pinyin: item.pinyin,
                translation: item.translation,
                examples: 'examples' in item ? item.examples : undefined,
            })
        );
    };

    const allWords = getAllWords();
    const currentWord = allWords[currentIndex];

    const handleCardClick = () => {
        if (!showAll) {
            setShowAll(true);
        } else {
            setShowAll(false);
            setCurrentIndex(Math.floor(Math.random() * allWords.length));
        }
    };

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
        setCurrentIndex(0);
        setShowAll(false);
    };

    return (
        <div className="memorization-section">
            <h2>Запоминание слов</h2>
            <div className="controls">
                <DictionarySelector
                    selectedCategory={selectedCategory}
                    onCategoryChange={handleCategoryChange}
                />
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