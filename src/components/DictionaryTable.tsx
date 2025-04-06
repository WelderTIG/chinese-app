import React, { useState } from 'react';
import { DictItem } from '../types/types';

interface DictionaryTableProps {
    data: DictItem[];
}

const DictionaryTable: React.FC<DictionaryTableProps> = ({ data }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterColumn, setFilterColumn] = useState<'glyph' | 'pinyin' | 'translation'>('glyph');

    const filteredData = data.filter((item) => {
        const searchText = searchTerm.toLowerCase();
        switch (filterColumn) {
            case 'glyph':
                return item.glyph.toLowerCase().includes(searchText);
            case 'pinyin':
                return item.pinyin.toLowerCase().includes(searchText);
            case 'translation':
                return item.translation.toLowerCase().includes(searchText);
            default:
                return true;
        }
    });

    return (
        <div className="dictionary-table">
            <div className="search-controls">
                <input
                    type="text"
                    placeholder="Поиск..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <select
                    value={filterColumn}
                    onChange={(e) => setFilterColumn(e.target.value as 'glyph' | 'pinyin' | 'translation')}
                >
                    <option value="glyph">Иероглиф</option>
                    <option value="pinyin">Пиньинь</option>
                    <option value="translation">Перевод</option>
                </select>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Иероглиф</th>
                        <th>Пиньинь</th>
                        <th>Перевод</th>
                        <th>Примеры</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.glyph}</td>
                            <td>{item.pinyin}</td>
                            <td>{item.translation}</td>
                            <td>
                                {item.examples && (
                                    <ul>
                                        {item.examples.map((example, idx) => (
                                            <li key={idx}>{example}</li>
                                        ))}
                                    </ul>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DictionaryTable;