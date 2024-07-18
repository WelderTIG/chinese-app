
import React, { useState } from 'react';
import './App.css';
import { getExample } from './utils';
import { IWord } from './mockWords';

function App() {
    const [exampleType, setExampleType] = useState("Base")
    const [count, setCount] = useState(0)

    const onOptionChange = (e: any) => {
        setExampleType(e.target.value)
    }

    let ex = getExample(exampleType);

    const phrase = ex.sentence
    const allWords = ex.words.map((word) => {
        return (
            <tr>
                <td>{word.hieroglyphCode}</td>
                <td>{word.pinyin}</td>
                <td>{word.tone}</td>
                <td>{word.translation}</td>
            </tr>
        )
    });

    const generate = () => {
        ex = getExample(exampleType);
        setCount(count + 1)
    }

    return (
        <>
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignContent: 'center',
                alignItems: 'center'
            }}>
            <div 
                style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignContent: 'center',
                width: 300,
                height: 300
                }}
            >
            <div 
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center"
            }}>
            {phrase}
            </div>

            <button
                onClick={generate}
                style={{
                    height: 50
                }}>Generate
            </button>

            <div
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignContent: 'center',
                marginTop: 15
            }}>
                <input
                    type="radio"
                    name="exampleType"
                    value="Base"
                    id="base"
                    checked={exampleType === "Base"}
                    onChange={onOptionChange}
                />
                <label htmlFor="base">Base</label>

                <input
                    type="radio"
                    name="exampleType"
                    value="Question"
                    id="question"
                    checked={exampleType === "Question"}
                    onChange={onOptionChange}
                />
                <label htmlFor="question">Question</label>

                <input
                    type="radio"
                    name="exampleType"
                    value="Negative"
                    id="negative"
                    checked={exampleType === "Negative"}
                    onChange={onOptionChange}
                />
                <label htmlFor="negative">Negative</label>

                <input
                    type="radio"
                    name="exampleType"
                    value="Numbers"
                    id="numbers"
                    checked={exampleType === "Numbers"}
                    onChange={onOptionChange}
                />
                <label htmlFor="numbers">Numbers</label>
            </div>

            </div>
                <table
                border={1}
                bgcolor="#d6d5f5"
                width={350}
                >
                <caption>Используемые слова</caption>
                <tr>
                    <td>Иероглиф</td>
                    <td>Пиньинь</td>
                    <td>Тон</td>
                    <td>Перевод</td>
                </tr>
                {allWords}
                </table>
            </div>
        </>
    );
}

export default App;
