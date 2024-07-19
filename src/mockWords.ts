import data from './data.json';

export enum WordType {
    DEFAULT = 0,
    NOUN = 1, // существительное
    PRONOUN = 2, // местоимение
    VERB = 3, // глагол
    ADJECTIVE = 4, // прилагательное
    ADVERB = 5, // наречие
    PREPOSITION = 6, // предлог
    CONJUNCTION = 7, // союз
    INTERJECTION = 8, // междометия
}

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

export const pronounces = data.pronounces;
export const verbs = data.verbs;
export const nouns = data.nouns;
export const adjectives = data.adjectives;
export const phrases = data.phrases;
export const techWords = data.techWords;
export const numbers = data.numbers;
export const colors = data.colors;

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