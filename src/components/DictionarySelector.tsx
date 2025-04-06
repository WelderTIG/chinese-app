import React from 'react';
import { ChineseDictionary } from '../words';

interface DictionarySelectorProps {
    selectedCategory: string;
    onCategoryChange: (category: string) => void;
}

const DictionarySelector: React.FC<DictionarySelectorProps> = ({
    selectedCategory,
    onCategoryChange,
}) => {
    const categories = [
        { value: 'all', label: 'Весь словарь' },
        { value: 'pronouns', label: 'Местоимения' },
        { value: 'verbsBasic', label: 'Глаголы (основные)' },
        { value: 'verbsAction', label: 'Глаголы (действия)' },
        { value: 'questionWords', label: 'Вопросы' },
        { value: 'adverbs', label: 'Наречия' },
        { value: 'phrases', label: 'Фразы' },
        { value: 'adjectives', label: 'Прилагательные' },
        { value: 'possessive', label: 'Притяжательные формы' },
        { value: 'pronounsCases', label: 'Местоимения (падежи)' },
        { value: 'expressions', label: 'Выражения' },
        { value: 'politePhrases', label: 'Вежливые фразы' },
        { value: 'prepositions', label: 'Предлоги' },
        { value: 'weekDays', label: 'Дни недели' },
        { value: 'months', label: 'Месяцы' },
        { value: 'numbers', label: 'Числа' },
        { value: 'modalVerbs', label: 'Модальные глаголы' },
        { value: 'nouns', label: 'Существительные' },
        { value: 'colors', label: 'Цвета' },
        { value: 'measureWords', label: 'Счетные слова' },
    ];

    return (
        <div className="dictionary-selector">
            <label htmlFor="dictionary-category">Выберите раздел: </label>
            <select
                id="dictionary-category"
                value={selectedCategory}
                onChange={(e) => onCategoryChange(e.target.value)}
                className="dictionary-select"
            >
                {categories.map((category) => (
                    <option key={category.value} value={category.value}>
                        {category.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default DictionarySelector;