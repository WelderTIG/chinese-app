
import React, { useState } from 'react';
import './App.css';
import { getExample, getWords } from './generator';

function App() {
    const [exampleType, setExampleType] = useState("Pronouns")
    const [tumbler, setTumbler] = useState(false)
    const [isColored, setIsColored] = useState(true)
    const [isPublic, setIsPublic] = useState(true)
    const [isDictVisible, setIsDictVisible] = useState(false)
    
    const onOptionChange = (e: any) => {
        setExampleType(e.target.value)
    }

    let ex = getExample(exampleType, isColored, isPublic);

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
    const dict = getWords(isPublic).map((word) => {
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
        ex = getExample(exampleType, isColored, isPublic);
        setTumbler(!tumbler)
    }
    const handleIsColoredChange = () => {
        setIsColored(!isColored)
    }
    const handleIsPublicChange = () => {
        setIsPublic(!isPublic)
    }
    const handleIsDictVisibleChange = () => {
        setIsDictVisible(!isDictVisible)
    }
    
    return (
        <>
            <div style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignContent: 'center',
                    alignItems: 'center'
                }}>
                <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignContent: 'center',
                        width: 300,
                        height: 300
                    }}>
                    <div style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center"
                        }}>
                        {phrase}
                    </div>

                    <div style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center"
                        }}>
                        <p>Color</p>
                        <input type="checkbox" checked={isColored} onChange={handleIsColoredChange} />
                        <button
                            onClick={generate}
                            style={{
                                height: 50,
                                width: 250
                            }}>Generate
                        </button>
                        <input type="checkbox" checked={isDictVisible} onChange={handleIsDictVisibleChange} />
                        <p>Dictionary</p>
                    </div>

                    <div style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignContent: 'center',
                            marginTop: 15
                        }}>
                        <input
                            type="radio"
                            name="exampleType"
                            value="Definition"
                            id="definition"
                            checked={exampleType === "Definition"}
                            onChange={onOptionChange}
                        />
                        <label htmlFor="definition">Definition</label>

                        <input
                            type="radio"
                            name="exampleType"
                            value="GenQuest"
                            id="genQuest"
                            checked={exampleType === "GenQuest"}
                            onChange={onOptionChange}
                        />
                        <label htmlFor="genQuest">GenQuest</label>

                        <input
                            type="radio"
                            name="exampleType"
                            value="Pronouns"
                            id="pronouns"
                            checked={exampleType === "Pronouns"}
                            onChange={onOptionChange}
                        />
                        <label htmlFor="pronouns">Pronouns</label>

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

                    {isPublic && (
                        <div style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center",
                                alignContent: 'center',
                                marginTop: 15
                            }}>
                            <input
                                type="radio"
                                name="exampleType"
                                value="Phrases"
                                id="phrases"
                                checked={exampleType === "Phrases"}
                                onChange={onOptionChange}
                            />
                            <label htmlFor="phrases">Phrases</label>
                        </div>
                    )}

                    {!isPublic && (
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignContent: 'center',
                            marginTop: 15
                        }}>
                            <input
                                type="radio"
                                name="exampleType"
                                value="Phrases"
                                id="phrases"
                                checked={exampleType === "Phrases"}
                                onChange={onOptionChange}
                            />
                            <label htmlFor="phrases">Phrases</label>

                            <input
                                    type="radio"
                                    name="exampleType"
                                    value="PPF"
                                    id="ppf"
                                    checked={exampleType === "PPF"}
                                    onChange={onOptionChange}
                                />
                            <label htmlFor="ppf">PPF</label>

                            <input
                                type="radio"
                                name="exampleType"
                                value="InMoment"
                                id="inMoment"
                                checked={exampleType === "InMoment"}
                                onChange={onOptionChange}
                            />
                            <label htmlFor="inMoment">InMoment</label>
                        </div>
                    )}


                </div>
                {isDictVisible && (
                    <div>
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

                        <table
                            border={1}
                            bgcolor="#edddaf"
                            width={350}
                            >
                            <caption>Весь словарь</caption>
                            <tr>
                                <td>Иероглиф</td>
                                <td>Пиньинь</td>
                                <td>Тон</td>
                                <td>Перевод</td>
                            </tr>
                            {dict}
                        </table>


                        <div style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center"
                            }}>
                            <p>Dictionary</p>
                            <input type="checkbox" checked={isPublic} onChange={handleIsPublicChange} />
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default App;
