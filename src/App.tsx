
import React, { useState } from 'react';
import './App.css';
import { getExample } from './utils';
// import { words } from './mockWords';

function App() {
    const [exampleType, setExampleType] = useState("Numbers")
    const [tumbler, setTumbler] = useState(false)
    const [isColored, setIsColored] = useState(true)

    const onOptionChange = (e: any) => {
        setExampleType(e.target.value)
    }

    let ex = getExample(exampleType, isColored);

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
    // const dict = words.map((word) => {
    //     return (
    //         <tr>
    //             <td>{word.hieroglyphCode}</td>
    //             <td>{word.pinyin}</td>
    //             <td>{word.tone}</td>
    //             <td>{word.translation}</td>
    //         </tr>
    //     )
    // });

    const generate = () => {
        ex = getExample(exampleType, isColored);
        setTumbler(!tumbler)
    }
    const handleIsColoredChange = () => {
        setIsColored(!isColored)
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
                            value="Pronounces"
                            id="pronounces"
                            checked={exampleType === "Pronounces"}
                            onChange={onOptionChange}
                        />
                        <label htmlFor="pronounces">Pronounces</label>

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
                    {/* {dict} */}
                </table>
            </div>
        </>
    );
}

export default App;
