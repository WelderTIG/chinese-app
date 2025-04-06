import React from 'react';
import { DictItem } from '../types/types';

interface FlashCardProps {
    word: DictItem;
    displayMode: 'glyph' | 'pinyin' | 'translation';
    showAll: boolean;
    onClick: () => void;
}

const FlashCard: React.FC<FlashCardProps> = ({ word, displayMode, showAll, onClick }) => {
    const getDisplayText = () => {
        if (showAll) {
            return (
                <div className="full-card">
                    <div className="glyph">{word.glyph}</div>
                    <div className="pinyin">{word.pinyin}</div>
                    <div className="translation">{word.translation}</div>
                    {word.examples && (
                        <div className="examples">
                            {word.examples.map((example, index) => (
                                <div key={index} className="example">{example}</div>
                            ))}
                        </div>
                    )}
                </div>
            );
        }

        switch (displayMode) {
            case 'glyph':
                return <div className="glyph">{word.glyph}</div>;
            case 'pinyin':
                return <div className="pinyin">{word.pinyin}</div>;
            case 'translation':
                return <div className="translation">{word.translation}</div>;
            default:
                return <div className="glyph">{word.glyph}</div>;
        }
    };

    return (
        <div className="flash-card" onClick={onClick}>
            {getDisplayText()}
        </div>
    );
};

export default FlashCard;