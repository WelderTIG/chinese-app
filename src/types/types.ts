export type DictItem = {
    glyph: string;
    pinyin: string;
    translation: string;
    classifier?: string;
    examples?: string[];
};

export type ChineseDictionaryType = {
    pronouns: { [key: number]: DictItem };
    verbsBasic: { [key: number]: DictItem & { examples: string[] } };
    verbsAction: { [key: number]: DictItem & { examples: string[] } };
    questionWords: { [key: number]: DictItem & { examples: string[] } };
    adverbs: { [key: number]: DictItem & { examples: string[] } };
    phrases: { [key: number]: DictItem & { examples: string[] } };
    adjectives: { [key: number]: DictItem };
    possessive: { [key: number]: DictItem };
    pronounsCases: { [key: number]: DictItem };
    expressions: { [key: number]: DictItem };
    politePhrases: { [key: number]: DictItem };
    prepositions: { [key: number]: DictItem & { examples: string[] } };
    weekDays: { [key: number]: DictItem };
    months: { [key: number]: DictItem };
    numbers: { [key: number]: DictItem };
    modalVerbs: { [key: number]: DictItem };
    nouns: { [key: number]: DictItem & { examples: string[] } };
    colors: { [key: number]: DictItem & { examples: string[] } };
};
