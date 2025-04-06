import React from 'react';
import DictionaryTable from './DictionaryTable';
import { ChineseDictionary } from '../words';

const VocabularySection: React.FC = () => {
    return (
        <div className="vocabulary-section">
            <h2>Лексика</h2>
            <DictionaryTable data={Object.values(ChineseDictionary.nouns)} />
        </div>
    );
};

export default VocabularySection;