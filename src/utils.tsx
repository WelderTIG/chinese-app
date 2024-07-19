import { Tone, IWord, pronounces, verbs, nouns, techWords, numbers, adjectives, colors } from "./mockWords"

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

export const getNumber = (isColored: boolean) => {
    const rndInt = randomIntFromInterval(1, 99);
    const units = rndInt%10;
    const tens = Math.floor(rndInt/10);

    if (units !== 0 && tens === 0) {
        return [
            ...getPart(numbers[units-1], isColored),
        ]
    }
    if (units === 0 && tens === 1) {
        return [...getPart(numbers[9], isColored)]
    }
    if (units === 0 && tens > 1) {
        return [
            ...getPart(numbers[tens-1], isColored),
            ...getPart(numbers[9], isColored),
        ]
    }
    if (units !== 0 && tens === 1) {
        return [
            ...getPart(numbers[9], isColored),
            ...getPart(numbers[units-1], isColored),
        ]
    }
    if (units !== 0 && tens > 1) {
        return [
            ...getPart(numbers[tens-1], isColored),
            ...getPart(numbers[9], isColored),
            ...getPart(numbers[units-1], isColored),
        ]
    }
    
    return [...getPart(numbers[0], isColored)]
}

export const genZheShiNoun = (isColored: boolean) => {
    const pr1 = randomIntFromInterval(1, 99)%10%2 ? techWords[4] : techWords[3];
    const pr2 = pronounces[randomIntFromInterval(1, pronounces.length) - 1];
    const n2 = nouns[randomIntFromInterval(1, nouns.length) - 1];
    const adj1 = adjectives[randomIntFromInterval(1, adjectives.length) - 1];
    const adj2 = colors[randomIntFromInterval(1, colors.length) - 1];

    if (randomIntFromInterval(1, 99)%10%2) {
        return {
            sentence: [
                ...getPart(pr1, isColored),
                ...getPart(verbs[0], isColored),
                ...getPart(pr2, isColored),
                ...getPart(techWords[2], isColored),
                ...getPart(adj1, isColored),
                ...getPart(adj2, isColored),
                ...getPart(n2, isColored),
            ],
            words: [
                pr1,
                verbs[0],
                pr2,
                techWords[2],
                adj1,
                adj2,
                n2,
            ]
        }
    } else {
        return {
            sentence: [
                ...getPart(pr1, isColored),
                ...getPart(techWords[0], isColored),
                ...getPart(verbs[0], isColored),
                ...getPart(pr2, isColored),
                ...getPart(techWords[2], isColored),
                ...getPart(adj1, isColored),
                ...getPart(adj2, isColored),
                ...getPart(n2, isColored),
            ],
            words: [
                pr1,
                techWords[0],
                verbs[0],
                pr2,
                techWords[2],
                adj1,
                adj2,
                n2,
            ]
        }
    }
}

export const genGeneralQuestion = (isColored: boolean) => {
    const pr1 = pronounces[randomIntFromInterval(1, pronounces.length) - 1];
    const n = nouns[randomIntFromInterval(1, nouns.length) - 1];
    const v = verbs[randomIntFromInterval(1, verbs.length) - 1];

    if(randomIntFromInterval(1, 99)%10%2) {
        return {
            sentence: [
                ...getPart(pr1, isColored),
                ...getPart(v, isColored),
                ...getPart(n, isColored),
                ...getPart(techWords[1], isColored),
                <div style={{
                    fontSize: 30
                }}>?</div>
            ],
            words: [
                pr1,
                v,
                n,
                techWords[1],
            ]
        }
    } else {
        return {
            sentence: [
                ...getPart(pr1, isColored),
                ...getPart(v, isColored),
                ...getPart(techWords[0], isColored),
                ...getPart(v, isColored),
                ...getPart(nouns[0], isColored),
            ],
            words: [
                pr1,
                v,
                nouns[0],
                techWords[0],
            ]
        }
    }
}

export const genNumbers = (isColored: boolean) => {
    return {
        sentence: [
            ...getNumber(isColored),
        ],
        words: [
            ...numbers,
        ]
    }
}
export const genPronounces = (isColored: boolean) => {
    const pr1 = pronounces[randomIntFromInterval(1, pronounces.length) - 1];
    const pr2 = pronounces[randomIntFromInterval(1, pronounces.length) - 1];
    const v = verbs[randomIntFromInterval(1, verbs.length) - 1];
    const n = nouns[randomIntFromInterval(1, nouns.length) - 1];

    if(randomIntFromInterval(1, 99)%10%2) {
        return {
            sentence: [
                ...getPart(pr1, isColored),
                ...getPart(techWords[0], isColored),
                ...getPart(v, isColored),
                ...getPart(pr2, isColored),
                ...getPart(techWords[2], isColored),
                ...getPart(adjectives[0], isColored),
                ...getPart(nouns[1], isColored),
            ],
            words: [
                pr1,
                techWords[0],
                v,
                pr2,
                techWords[2],
                adjectives[0],
                nouns[1],
            ]
        }
    } else {
        return {
            sentence: [
                ...getPart(pr1, isColored),
                ...getPart(v, isColored),
                ...getPart(pr2, isColored),
                ...getPart(techWords[2], isColored),
                ...getPart(adjectives[0], isColored),
                ...getPart(nouns[1], isColored),
            ],
            words: [
                pr1,
                v,
                pr2,
                techWords[2],
                adjectives[0],
                nouns[1],
            ]
        }
    }
}
export const getExample = (exampleType: string, isColored: boolean) => {
    switch (exampleType) {
        case 'Definition':
            return genZheShiNoun(isColored);
        case 'GenQuest':
            return genGeneralQuestion(isColored);
        case 'Pronouns':
            return genPronounces(isColored);
        case 'Numbers':
            return genNumbers(isColored);
        default:
            return {
                sentence: [],
                words: []
            }
    }
}