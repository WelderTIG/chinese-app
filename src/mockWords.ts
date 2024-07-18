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
    id: string;
    hieroglyphCode: string[];
    pinyin: string;
    tone: Tone[],
    translation: string;
    wordType: WordType;
    weight: number;
    creationDate: string;
    lastProposalDate: string;
    description: string;
}

// Числа
export const numbers: IWord[] = [
    {
        id: 'u4E00',
        hieroglyphCode: ['\u4E00'],
        pinyin: 'yi',
        tone: [Tone.ONE],
        translation: 'Один',
        wordType: WordType.DEFAULT,
        weight: 0,
        creationDate: '',
        lastProposalDate: '',
        description: '',
    },
    {
        id: 'u4E8C',
        hieroglyphCode: ['\u4E8C'],
        pinyin: 'er',
        tone: [Tone.FOUR],
        translation: 'Четыре',
        wordType: WordType.DEFAULT,
        weight: 0,
        creationDate: '',
        lastProposalDate: '',
        description: '',
    },
    {
        id: 'u4E09',
        hieroglyphCode: ['\u4E09'],
        pinyin: 'san',
        tone: [Tone.ONE],
        translation: 'Три',
        wordType: WordType.DEFAULT,
        weight: 0,
        creationDate: '',
        lastProposalDate: '',
        description: '',
    },
    {
        id: 'u56DB',
        hieroglyphCode: ['\u56DB'],
        pinyin: 'si',
        tone: [Tone.FOUR],
        translation: 'Четыре',
        wordType: WordType.DEFAULT,
        weight: 0,
        creationDate: '',
        lastProposalDate: '',
        description: '',
    },
    {
        id: 'u4E94',
        hieroglyphCode: ['\u4E94'],
        pinyin: 'wu',
        tone: [Tone.THREE],
        translation: 'Пять',
        wordType: WordType.DEFAULT,
        weight: 0,
        creationDate: '',
        lastProposalDate: '',
        description: '',
    },
    {
        id: 'u516D',
        hieroglyphCode: ['\u516D'],
        pinyin: 'liu',
        tone: [Tone.FOUR],
        translation: 'Шесть',
        wordType: WordType.DEFAULT,
        weight: 0,
        creationDate: '',
        lastProposalDate: '',
        description: '',
    },
    {
        id: 'u4E03',
        hieroglyphCode: ['\u4E03'],
        pinyin: 'qi',
        tone: [Tone.ONE],
        translation: 'Семь',
        wordType: WordType.DEFAULT,
        weight: 0,
        creationDate: '',
        lastProposalDate: '',
        description: '',
    },
    {
        id: 'u516B',
        hieroglyphCode: ['\u516B'],
        pinyin: 'ba',
        tone: [Tone.ONE],
        translation: 'Восемь',
        wordType: WordType.DEFAULT,
        weight: 0,
        creationDate: '',
        lastProposalDate: '',
        description: '',
    },
    {
        id: 'u4E5D',
        hieroglyphCode: ['\u4E5D'],
        pinyin: 'jiu',
        tone: [Tone.THREE],
        translation: 'Девять',
        wordType: WordType.DEFAULT,
        weight: 0,
        creationDate: '',
        lastProposalDate: '',
        description: '',
    },
    {
        id: 'u5341',
        hieroglyphCode: ['\u5341'],
        pinyin: 'shi',
        tone: [Tone.TWO],
        translation: 'Десять',
        wordType: WordType.DEFAULT,
        weight: 0,
        creationDate: '',
        lastProposalDate: '',
        description: '',
    },
]

// Личные местоимения
export const pronounces: IWord[] = [
    {
        id: 'u6211',
        hieroglyphCode: ['\u6211'],
        pinyin: 'wo',
        tone: [Tone.THREE],
        translation: 'Я',
        wordType: WordType.DEFAULT,
        weight: 0,
        creationDate: '',
        lastProposalDate: '',
        description: '',
    },
    {
        id: 'u4F60',
        hieroglyphCode: ['\u4F60'],
        pinyin: 'ni',
        tone: [Tone.THREE],
        translation: 'Ты',
        wordType: WordType.DEFAULT,
        weight: 0,
        creationDate: '',
        lastProposalDate: '',
        description: '',
    },
    {
        id: 'u4ED6',
        hieroglyphCode: ['\u4ED6'],
        pinyin: 'ta',
        tone: [Tone.ONE],
        translation: 'Он',
        wordType: WordType.DEFAULT,
        weight: 0,
        creationDate: '',
        lastProposalDate: '',
        description: '',
    },
    {
        id: 'u5979',
        hieroglyphCode: ['\u5979'],
        pinyin: 'ta',
        tone: [Tone.ONE],
        translation: 'Она',
        wordType: WordType.DEFAULT,
        weight: 0,
        creationDate: '',
        lastProposalDate: '',
        description: '',
    },
    {
        id: 'u5B83',
        hieroglyphCode: ['\u5B83'],
        pinyin: 'ta',
        tone: [Tone.ONE],
        translation: 'Оно',
        wordType: WordType.DEFAULT,
        weight: 0,
        creationDate: '',
        lastProposalDate: '',
        description: '',
    },
    {
        id: 'u60A8',
        hieroglyphCode: ['\u60A8'],
        pinyin: 'nin',
        tone: [Tone.TWO],
        translation: 'Вы (уваж)',
        wordType: WordType.DEFAULT,
        weight: 0,
        creationDate: '',
        lastProposalDate: '',
        description: '',
    },
    {
        id: 'u6211u4EEC',
        hieroglyphCode: ['\u6211', '\u4EEC'],
        pinyin: 'women',
        tone: [Tone.THREE, Tone.ZERO],
        translation: 'Мы',
        wordType: WordType.DEFAULT,
        weight: 0,
        creationDate: '',
        lastProposalDate: '',
        description: '',
    },
    {
        id: 'u4F60u4EEC',
        hieroglyphCode: ['\u4F60', '\u4EEC'],
        pinyin: 'nimen',
        tone: [Tone.THREE, Tone.ZERO],
        translation: 'Вы (множ)',
        wordType: WordType.DEFAULT,
        weight: 0,
        creationDate: '',
        lastProposalDate: '',
        description: '',
    },
    {
        id: 'u4ED6u4EEC',
        hieroglyphCode: ['\u4ED6', '\u4EEC'],
        pinyin: 'tamen',
        tone: [Tone.ONE, Tone.ZERO],
        translation: 'Они',
        wordType: WordType.DEFAULT,
        weight: 0,
        creationDate: '',
        lastProposalDate: '',
        description: '',
    },
    {
        id: 'u5979u4EEC',
        hieroglyphCode: ['\u5979', '\u4EEC'],
        pinyin: 'tamen',
        tone: [Tone.ONE, Tone.ZERO],
        translation: 'Они',
        wordType: WordType.DEFAULT,
        weight: 0,
        creationDate: '',
        lastProposalDate: '',
        description: '',
    },
    {
        id: 'u5B83u4EEC',
        hieroglyphCode: ['\u5B83', '\u4EEC'],
        pinyin: 'tamen',
        tone: [Tone.ONE, Tone.ZERO],
        translation: 'Они',
        wordType: WordType.DEFAULT,
        weight: 0,
        creationDate: '',
        lastProposalDate: '',
        description: '',
    },
]
// Глаголы
export const verbs: IWord[] = [
    {
        id: 'u662F',
        hieroglyphCode: ['\u662F'],
        pinyin: 'shi',
        tone: [Tone.FOUR],
        translation: 'Быть, являться',
        wordType: WordType.DEFAULT,
        weight: 0,
        creationDate: '',
        lastProposalDate: '',
        description: '',
    },
]
// Существительные
export const nouns: IWord[] = [
    {
        id: 'u4EBA',
        hieroglyphCode: ['\u4EBA'],
        pinyin: 'ren',
        tone: [Tone.TWO],
        translation: 'Человек',
        wordType: WordType.DEFAULT,
        weight: 0,
        creationDate: '',
        lastProposalDate: '',
        description: '',
    },
    {
        id: 'u670Bu53CB',
        hieroglyphCode: ['\u670B', '\u53CB'],
        pinyin: 'pengyou',
        tone: [Tone.TWO, Tone.ZERO],
        translation: 'Друг',
        wordType: WordType.DEFAULT,
        weight: 0,
        creationDate: '',
        lastProposalDate: '',
        description: '',
    },
]
// Прилагательные
export const adjectives: IWord[] = [
    {
        id: 'u597D',
        hieroglyphCode: ['\u597D'],
        pinyin: 'hao',
        tone: [Tone.THREE],
        translation: 'Хорошо',
        wordType: WordType.DEFAULT,
        weight: 0,
        creationDate: '',
        lastProposalDate: '',
        description: '',
    },
]
// Фразы
export const phrases: IWord[] = [
    {
        id: 'u4F60u597D',
        hieroglyphCode: ['\u4F60', '\u597D'],
        pinyin: 'nihao',
        tone: [Tone.THREE, Tone.THREE],
        translation: 'привет',
        wordType: WordType.DEFAULT,
        weight: 0,
        creationDate: '',
        lastProposalDate: '',
        description: '',
    },
]
// Связки, частицы и другое
export const techWords: IWord[] = [
    {
        id: 'u4E0D',
        hieroglyphCode: ['\u4E0D'],
        pinyin: 'bu',
        tone: [Tone.FOUR],
        translation: 'Частица не',
        wordType: WordType.DEFAULT,
        weight: 0,
        creationDate: '',
        lastProposalDate: '',
        description: '',
    },
    {
        id: 'u5417',
        hieroglyphCode: ['\u5417'],
        pinyin: 'ma',
        tone: [Tone.ZERO],
        translation: 'Вопросительная частица',
        wordType: WordType.DEFAULT,
        weight: 0,
        creationDate: '',
        lastProposalDate: '',
        description: '',
    },
    {
        id: 'u7684',
        hieroglyphCode: ['\u7684'],
        pinyin: 'de',
        tone: [Tone.ZERO],
        translation: 'Притяжательная частица',
        wordType: WordType.DEFAULT,
        weight: 0,
        creationDate: '',
        lastProposalDate: '',
        description: '',
    },
]

export const words: IWord[] = [
    ...pronounces,
    ...verbs,
    ...nouns,
    ...adjectives,
    ...phrases,
    ...techWords,
    ...numbers,
]