import React, { useState } from 'react';
import DictionaryTable from './DictionaryTable';
import DictionarySelector from './DictionarySelector';
import { ChineseDictionary } from '../words';
import { DictItem } from '../types/types';

const VocabularySection: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');

    const getData = (): DictItem[] => {
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

    return (
        <div className="vocabulary-section">
            <div className="dictionary-table-container">
                <div className="dictionary-controls">
                    <h2>Лексика</h2>
                    <DictionarySelector
                        selectedCategory={selectedCategory}
                        onCategoryChange={setSelectedCategory}
                    />
                </div>
                <DictionaryTable data={getData()} />
            </div>
        </div>
    );
};

export default VocabularySection;