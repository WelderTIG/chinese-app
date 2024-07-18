import { Tone, IWord, pronounces, verbs, nouns, techWords, numbers } from "./mockWords"

export function randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export const getColor = (color: Tone) => {
    switch (color) {
      case 1:
        return "red"
      case 2:
        return "blue"
      case 3:
        return "orange"
      case 4:
        return "green"
      default:
        return "black"
    }
}

export const getPart = (word: IWord) => {
    let res = [];
    for (let i = 0; i < word.hieroglyphCode.length; i++) {
        const w = word.hieroglyphCode[i];
        const t = word.tone[i];
        res.push(<div style={{
            color: getColor(t),
            fontSize: 24
        }}>{w}</div>)
    }
    return res;
};

export const getNumber = () => {
    const rndInt = randomIntFromInterval(1, 99);
    const units = rndInt%10;
    const tens = Math.floor(rndInt/10);

    if (units !== 0 && tens === 0) {
        return [
            ...getPart(numbers[units-1]),
        ]
    }
    if (units === 0 && tens === 1) {
        return [...getPart(numbers[9])]
    }
    if (units === 0 && tens > 1) {
        return [
            ...getPart(numbers[tens-1]),
            ...getPart(numbers[9]),
        ]
    }
    if (units !== 0 && tens === 1) {
        return [
            ...getPart(numbers[9]),
            ...getPart(numbers[units-1]),
        ]
    }
    if (units !== 0 && tens > 1) {
        return [
            ...getPart(numbers[tens-1]),
            ...getPart(numbers[9]),
            ...getPart(numbers[units-1]),
        ]
    }
    
    return [...getPart(numbers[0])]
}

export const getExample = (exampleType: string) => {
    const pr1 = pronounces[randomIntFromInterval(1, pronounces.length) - 1];
    const pr2 = pronounces[randomIntFromInterval(1, pronounces.length) - 1];
    switch (exampleType) {
        case 'Base':
            return {
                sentence: [
                    ...getPart(pr1),
                    ...getPart(verbs[0]),
                    ...getPart(pr2),
                    ...getPart(techWords[2]),
                    ...getPart(nouns[1]),
                ],
                words: [
                    pr1,
                    verbs[0],
                    pr2,
                    techWords[2],
                    nouns[1],
                ]
            }
        case 'Question':
            if(randomIntFromInterval(1, 99)%10%2) {
                return {
                    sentence: [
                        ...getPart(pr1),
                        ...getPart(verbs[0]),
                        ...getPart(nouns[0]),
                        ...getPart(techWords[1]),
                        <div style={{
                            fontSize: 30
                        }}>?</div>
                    ],
                    words: [
                        pr1,
                        verbs[0],
                        nouns[0],
                        techWords[1],
                    ]
                }
            } else {
                return {
                    sentence: [
                        ...getPart(pr1),
                        ...getPart(verbs[0]),
                        ...getPart(techWords[0]),
                        ...getPart(verbs[0]),
                        ...getPart(nouns[0]),
                    ],
                    words: [
                        pr1,
                        verbs[0],
                        nouns[0],
                        techWords[0],
                    ]
                }
            }
        case 'Negative':
            return {
                sentence: [
                    ...getPart(pr1),
                    ...getPart(techWords[0]),
                    ...getPart(verbs[0]),
                    ...getPart(nouns[0]),
                ],
                words: [
                    pr1,
                    techWords[0],
                    verbs[0],
                    nouns[0],
                ]
            }
        case 'Numbers':
            return {
                sentence: [
                    ...getNumber(),
                ],
                words: [
                    ...numbers,
                ]
            }
        default:
            return {
                sentence: [],
                words: []
            }
    }
}