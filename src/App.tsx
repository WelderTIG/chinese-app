
import React, { useEffect, useState } from 'react';
import './App.css';
import { getExample, getWords } from './generator';
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken } from 'firebase/messaging';

function App() {
    const [exampleType, setExampleType] = useState("Pronouns")
    const [tumbler, setTumbler] = useState(false)
    const [isColored, setIsColored] = useState(true)
    const [isPublic, setIsPublic] = useState(false)
    const [isDictVisible, setIsDictVisible] = useState(false)


    const FirebaseConfig = {
        apiKey: "AIzaSyAdXIm_mAmUiR0m1ahG5w7mtTOEGpcZlgY",
        authDomain: "testproj-b2617.firebaseapp.com",
        databaseURL: "https://testproj-b2617-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "testproj-b2617",
        storageBucket: "testproj-b2617.firebasestorage.app",
        messagingSenderId: "790248812944",
        appId: "1:790248812944:web:e4321d7bee54f59e76c315",
        measurementId: "G-2TBCVYX081"
    };
    const vKey = {
        vapidKeyFCM: 'BD_iZ3yFiON_An7KYlBc7CwT32EKUCeMOH9b4NrXxB6F8yIqwlBWkf3C_qKMQre7WZXkUvW9bBpd3CTLCMeuOCA'
    }



    useEffect(() => {
        console.log('==== 1 ====', 1);

        if ('serviceWorker' in navigator) {

            const fetchData = async () => {
                console.log('==== 2 ====', 2);
                await navigator.serviceWorker.register('./firebase-messaging-sw.js');
                console.log('==== 3 ====', 3);
                const appFirebase = initializeApp(FirebaseConfig);
                console.log('==== 4 ====', 4);
                const messagingFirebase = getMessaging(appFirebase);
                console.log('==== 5 ====', 5);
                const currentToken = await getToken(messagingFirebase, { vapidKey: vKey.vapidKeyFCM });
                console.log("🚀 ~ App ~ currentToken:", currentToken)
            }

            fetchData()
        }
    }, [])

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
                        justifyContent: "center",
                        marginBottom: 50
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
