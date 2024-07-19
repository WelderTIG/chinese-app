import data from './data.json';
import publicData from './data.json';


export enum Tone {
    ZERO = 0, // нулевой
    ONE = 1, // первый
    TWO = 2, // второй
    THREE = 3, // третий
    FOUR = 4, // четвертый
}

export interface IWord {
    id?: string;
    hieroglyphCode: string[];
    pinyin: string;
    tone: number[],
    translation: string;
    wordType: string;
    weight?: number;
    creationDate?: string;
    lastProposalDate?: string;
    description: string;
}

export interface IDict {
    pronounces: IWord[];
    verbs: IWord[];
    nouns: IWord[];
    adjectives: IWord[];
    phrases: IWord[];
    techWords: IWord[];
    numbers: IWord[];
    colors: IWord[];
}

export const dict = {
    pronounces: data.pronounces,
    verbs: data.verbs,
    nouns: data.nouns,
    adjectives: data.adjectives,
    phrases: data.phrases,
    techWords: data.techWords,
    numbers: data.numbers,
    colors: data.colors,
}

export const publicDict = {
    pronounces: publicData.pronounces,
    verbs: publicData.verbs,
    nouns: publicData.nouns,
    adjectives: publicData.adjectives,
    phrases: publicData.phrases,
    techWords: publicData.techWords,
    numbers: publicData.numbers,
    colors: publicData.colors,
}

export const words: IWord[] = [
    ...data.pronounces,
    ...data.verbs,
    ...data.nouns,
    ...data.adjectives,
    ...data.phrases,
    ...data.techWords,
    ...data.numbers,
    ...data.colors,
]

export const publicWords: IWord[] = [
    ...publicData.pronounces,
    ...publicData.verbs,
    ...publicData.nouns,
    ...publicData.adjectives,
    ...publicData.phrases,
    ...publicData.techWords,
    ...publicData.numbers,
    ...publicData.colors,
]