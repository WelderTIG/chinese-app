import { Tone, IWord, IDict, words, publicWords, dict, publicDict } from "./words"

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

export const getDictionary = (isPublic: boolean) => {
    //TODO get words from DB
    if(isPublic) {
        return publicDict;
    } else {
        return dict;
    }
}

export const getWords = (isPublic: boolean) => {
    //TODO get words from DB
    if(isPublic) {
        return publicWords;
    } else {
        return words;
    }
}

export const getPart = (word: IWord, isColored: boolean) => {
    let res = [];
    for (let i = 0; i < word.hieroglyphCode.length; i++) {
        const w = word.hieroglyphCode[i];
        const t = word.tone[i];
        res.push(<div style={{
            color: isColored ? getColor(t) : "black",
            fontSize: 24
        }}>{w}</div>)
    }
    return res;
};

export const getNumber = (isColored: boolean, dict: IDict) => {
    const rndInt = randomIntFromInterval(1, 99);
    const units = rndInt%10;
    const tens = Math.floor(rndInt/10);

    if (units !== 0 && tens === 0) {
        return [
            ...getPart(dict.numbers[units-1], isColored),
        ]
    }
    if (units === 0 && tens === 1) {
        return [...getPart(dict.numbers[9], isColored)]
    }
    if (units === 0 && tens > 1) {
        return [
            ...getPart(dict.numbers[tens-1], isColored),
            ...getPart(dict.numbers[9], isColored),
        ]
    }
    if (units !== 0 && tens === 1) {
        return [
            ...getPart(dict.numbers[9], isColored),
            ...getPart(dict.numbers[units-1], isColored),
        ]
    }
    if (units !== 0 && tens > 1) {
        return [
            ...getPart(dict.numbers[tens-1], isColored),
            ...getPart(dict.numbers[9], isColored),
            ...getPart(dict.numbers[units-1], isColored),
        ]
    }
    
    return [...getPart(dict.numbers[0], isColored)]
}

export const genZheShiNoun = (isColored: boolean, dict: IDict) => {
    const pr1 = randomIntFromInterval(1, 99)%10%2 ? dict.techWords[4] : dict.techWords[3];
    const pr2 = dict.pronounces[randomIntFromInterval(1, dict.pronounces.length) - 1];
    const n2 = dict.nouns[randomIntFromInterval(1, dict.nouns.length) - 1];
    const adj1 = dict.adjectives[randomIntFromInterval(1, dict.adjectives.length) - 1];
    const adj2 = dict.colors[randomIntFromInterval(1, dict.colors.length) - 1];

    if (randomIntFromInterval(1, 99)%10%2) {
        return {
            sentence: [
                ...getPart(pr1, isColored),
                ...getPart(dict.verbs[0], isColored),
                ...getPart(pr2, isColored),
                ...getPart(dict.techWords[2], isColored),
                ...getPart(adj1, isColored),
                ...getPart(adj2, isColored),
                ...getPart(n2, isColored),
            ],
            words: [
                pr1,
                dict.verbs[0],
                pr2,
                dict.techWords[2],
                adj1,
                adj2,
                n2,
            ]
        }
    } else {
        return {
            sentence: [
                ...getPart(pr1, isColored),
                ...getPart(dict.techWords[0], isColored),
                ...getPart(dict.verbs[0], isColored),
                ...getPart(pr2, isColored),
                ...getPart(dict.techWords[2], isColored),
                ...getPart(adj1, isColored),
                ...getPart(adj2, isColored),
                ...getPart(n2, isColored),
            ],
            words: [
                pr1,
                dict.techWords[0],
                dict.verbs[0],
                pr2,
                dict.techWords[2],
                adj1,
                adj2,
                n2,
            ]
        }
    }
}

export const genGeneralQuestion = (isColored: boolean, dict: IDict) => {
    const pr1 = dict.pronounces[randomIntFromInterval(1, dict.pronounces.length) - 1];
    const n = dict.nouns[randomIntFromInterval(1, dict.nouns.length) - 1];
    const v = dict.verbs[randomIntFromInterval(1, dict.verbs.length) - 1];

    if(randomIntFromInterval(1, 99)%10%2) {
        return {
            sentence: [
                ...getPart(pr1, isColored),
                ...getPart(v, isColored),
                ...getPart(n, isColored),
                ...getPart(dict.techWords[1], isColored),
                <div style={{
                    fontSize: 30
                }}>?</div>
            ],
            words: [
                pr1,
                v,
                n,
                dict.techWords[1],
            ]
        }
    } else {
        return {
            sentence: [
                ...getPart(pr1, isColored),
                ...getPart(v, isColored),
                ...getPart(dict.techWords[0], isColored),
                ...getPart(v, isColored),
                ...getPart(dict.nouns[0], isColored),
            ],
            words: [
                pr1,
                v,
                dict.nouns[0],
                dict.techWords[0],
            ]
        }
    }
}

export const genNumbers = (isColored: boolean, dict: IDict) => {
    return {
        sentence: [
            ...getNumber(isColored, dict),
        ],
        words: [
            ...dict.numbers,
        ]
    }
}

export const genPronounces = (isColored: boolean, dict: IDict) => {
    const pr1 = dict.pronounces[randomIntFromInterval(1, dict.pronounces.length) - 1];
    const pr2 = dict.pronounces[randomIntFromInterval(1, dict.pronounces.length) - 1];
    const v = dict.verbs[randomIntFromInterval(1, dict.verbs.length) - 1];

    if(randomIntFromInterval(1, 99)%10%2) {
        return {
            sentence: [
                ...getPart(pr1, isColored),
                ...getPart(dict.techWords[0], isColored),
                ...getPart(v, isColored),
                ...getPart(pr2, isColored),
                ...getPart(dict.techWords[2], isColored),
                ...getPart(dict.adjectives[0], isColored),
                ...getPart(dict.nouns[1], isColored),
            ],
            words: [
                pr1,
                dict.techWords[0],
                v,
                pr2,
                dict.techWords[2],
                dict.adjectives[0],
                dict.nouns[1],
            ]
        }
    } else {
        return {
            sentence: [
                ...getPart(pr1, isColored),
                ...getPart(v, isColored),
                ...getPart(pr2, isColored),
                ...getPart(dict.techWords[2], isColored),
                ...getPart(dict.adjectives[0], isColored),
                ...getPart(dict.nouns[1], isColored),
            ],
            words: [
                pr1,
                v,
                pr2,
                dict.techWords[2],
                dict.adjectives[0],
                dict.nouns[1],
            ]
        }
    }
}

export const getExample = (exampleType: string, isColored: boolean, isPublic: boolean) => {
    switch (exampleType) {
        case 'Definition':
            return genZheShiNoun(isColored, getDictionary(isPublic));
        case 'GenQuest':
            return genGeneralQuestion(isColored, getDictionary(isPublic));
        case 'Pronouns':
            return genPronounces(isColored, getDictionary(isPublic));
        case 'Numbers':
            return genNumbers(isColored, getDictionary(isPublic));
        default:
            return {
                sentence: [],
                words: []
            }
    }
}