import { DictItem } from "./types/types";

const particles: { [key: number]: DictItem } = {
    1: {
        glyph: '了',
        pinyin: 'le',
        translation: 'частица завершённости действия или изменения состояния',
        examples: [
            '我吃了饭。 (Wǒ chī le fàn.) — Я поел.',
            '他来了。 (Tā lái le.) — Он пришёл.',
            '天冷了。 (Tiān lěng le.) — Стало холодно.'
        ]
    },
    2: {
        glyph: '着',
        pinyin: 'zhe',
        translation: 'частица непрерывного состояния или сопутствующего действия',
        examples: [
            '门开着。 (Mén kāi zhe.) — Дверь открыта.',
            '他站着看书。 (Tā zhàn zhe kàn shū.) — Он читает, стоя.',
            '妈妈笑着说话。 (Māma xiào zhe shuōhuà.) — Мама говорит, улыбаясь.'
        ]
    },
    3: {
        glyph: '过',
        pinyin: 'guo',
        translation: 'частица опыта (уже делал когда-то)',
        examples: [
            '我去过中国。 (Wǒ qù guo Zhōngguó.) — Я бывал в Китае.',
            '你吃过北京烤鸭吗？ (Nǐ chī guo Běijīng kǎoyā ma?) — Ты пробовал пекинскую утку?',
            '他没看过这部电影。 (Tā méi kàn guo zhè bù diànyǐng.) — Он не смотрел этот фильм.'
        ]
    },
    4: {
        glyph: '的',
        pinyin: 'de',
        translation: 'структурная частица: прилагательное → существительное; притяжание',
        examples: [
            '红色的花。 (Hóngsè de huā.) — Красный цветок.',
            '我的书。 (Wǒ de shū.) — Моя книга.',
            '唱歌的人。 (Chànggē de rén.) — Человек, который поёт.'
        ]
    },
    5: {
        glyph: '地',
        pinyin: 'de',
        translation: 'структурная частица: прилагательное → наречие',
        examples: [
            '慢慢地走。 (Mànmàn de zǒu.) — Иди медленно.',
            '认真地学习。 (Rènzhēn de xuéxí.) — Учись внимательно.',
            '高兴地笑了。 (Gāoxìng de xiào le.) — Радостно засмеялся.'
        ]
    },
    6: {
        glyph: '得',
        pinyin: 'de',
        translation: 'структурная частица: глагол → дополнение степени/результата',
        examples: [
            '跑得快。 (Pǎo de kuài.) — Бегает быстро.',
            '说得清楚。 (Shuō de qīngchu.) — Говорит чётко.',
            '高兴得跳起来。 (Gāoxìng de tiào qǐlái.) — Так рад, что подпрыгнул.'
        ]
    },
    7: {
        glyph: '吗',
        pinyin: 'ma',
        translation: 'вопросительная частица (общий вопрос)',
        examples: [
            '你好吗？ (Nǐ hǎo ma?) — Как дела?',
            '你要去吗？ (Nǐ yào qù ma?) — Ты пойдёшь?',
            '这是你的书吗？ (Zhè shì nǐ de shū ma?) — Это твоя книга?'
        ]
    },
    8: {
        glyph: '呢',
        pinyin: 'ne',
        translation: 'частица для уточнения, продолжения темы или вопроса с контекстом',
        examples: [
            '你呢？ (Nǐ ne?) — А ты?',
            '他在看书呢。 (Tā zài kàn shū ne.) — Он как раз читает.',
            '我的书呢？ (Wǒ de shū ne?) — Где моя книга?'
        ]
    },
    9: {
        glyph: '吧',
        pinyin: 'ba',
        translation: 'частица предложения, смягчения или предположения',
        examples: [
            '我们走吧。 (Wǒmen zǒu ba.) — Пойдём.',
            '可能是吧。 (Kěnéng shì ba.) — Наверное, да.',
            '别担心吧！ (Bié dānxīn ba!) — Не волнуйся!'
        ]
    },
    10: {
        glyph: '啊',
        pinyin: 'a',
        translation: 'восклицательная частица (эмоция, подчёркивание)',
        examples: [
            '真好啊！ (Zhēn hǎo a!) — Как здорово!',
            '快看啊！ (Kuài kàn a!) — Смотри скорее!',
            '下雨了啊。 (Xiàyǔ le a.) — Дождь пошёл (вот же!).'
        ]
    },
    11: {
        glyph: '嘛',
        pinyin: 'ma',
        translation: 'частица "ведь", "же" (указание на очевидность)',
        examples: [
            '你不是知道嘛！ (Nǐ bú shì zhīdào ma!) — Ты же знаешь!',
            '大家都这样嘛。 (Dàjiā dōu zhèyàng ma.) — Все же так делают.',
            '早点睡嘛。 (Zǎodiǎn shuì ma.) — Ложись же пораньше.'
        ]
    },
    12: {
        glyph: '呗',
        pinyin: 'bei',
        translation: 'частица "ну так", "разве не" (неофиц., логическое следствие)',
        examples: [
            '想去就去呗。 (Xiǎng qù jiù qù bei.) — Хочешь — иди.',
            '你不说，我怎么知道呗？ (Nǐ bú shuō, wǒ zěnme zhīdào bei?) — Если ты не скажешь, откуда мне знать?',
            '他不听，那就算呗。 (Tā bú tīng, nà jiù suàn bei.) — Он не слушает — ну и ладно.'
        ]
    },
    13: {
        glyph: '啦',
        pinyin: 'la',
        translation: 'разг. вариант 了+啊 (эмоциональное завершение)',
        examples: [
            '走啦！ (Zǒu la!) — Пошли уже!',
            '我知道啦！ (Wǒ zhīdào la!) — Я уже знаю!',
            '太好吃啦！ (Tài hǎochī la!) — Очень вкусно!'
        ]
    },
    14: {
        glyph: '哦',
        pinyin: 'o',
        translation: 'частица понимания, смягчения',
        examples: [
            '原来是这样哦。 (Yuánlái shì zhèyàng o.) — Значит, так вот как.',
            '我明白了哦。 (Wǒ míngbái le o.) — Я понял.',
            '小心哦！ (Xiǎoxīn o!) — Осторожнее!'
        ]
    }
};

const conjunctions: { [key: number]: DictItem } = {
    1: {
        glyph: '和',
        pinyin: 'hé',
        translation: 'и (соединяет существительные)',
        examples: [
            '我和你。 (Wǒ hé nǐ.) — Я и ты.',
            '茶和咖啡。 (Chá hé kāfēi.) — Чай и кофе.',
            '他喜欢唱歌和跳舞。 (Tā xǐhuan chànggē hé tiàowǔ.) — Ему нравится петь и танцевать.'
        ]
    },
    2: {
        glyph: '跟',
        pinyin: 'gēn',
        translation: 'с / вместе с (о людях); и (разг.)',
        examples: [
            '我跟他去。 (Wǒ gēn tā qù.) — Я пойду с ним.',
            '这个问题跟那个有关。 (Zhège wèntí gēn nàge yǒuguān.) — Этот вопрос связан с тем.',
            '你跟他说了吗？ (Nǐ gēn tā shuō le ma?) — Ты ему сказал?'
        ]
    },
    3: {
        glyph: '或者',
        pinyin: 'huòzhě',
        translation: 'или (нейтральное)',
        examples: [
            '茶或者咖啡？ (Chá huòzhě kāfēi?) — Чай или кофе?',
            '你可以走，或者留下。 (Nǐ kěyǐ zǒu, huòzhě liú xià.) — Ты можешь уйти или остаться.',
            'A或者B？ (A huòzhě B?) — A или B?'
        ]
    },
    4: {
        glyph: '还是',
        pinyin: 'háishì',
        translation: 'или (в вопросах выбора)',
        examples: [
            '你喝茶还是咖啡？ (Nǐ hē chá háishì kāfēi?) — Ты будешь чай или кофе?',
            '坐车还是走路？ (Zuò chē háishì zǒulù?) — Поедем на машине или пойдём пешком?',
            '要这个还是那个？ (Yào zhège háishì nàge?) — Этот или тот?'
        ]
    },
    5: {
        glyph: '因为...所以...',
        pinyin: 'yīnwèi... suǒyǐ...',
        translation: 'потому что... поэтому...',
        examples: [
            '因为下雨，所以我们不出去。 (Yīnwèi xiàyǔ, suǒyǐ wǒmen bù chūqù.) — Потому что дождь, мы не выходим.',
            '他努力学习，所以成绩很好。 (Tā nǔlì xuéxí, suǒyǐ chéngjì hěn hǎo.) — Он усердно учится, поэтому у него хорошие оценки.',
            '因为堵车，所以我迟到了。 (Yīnwèi dǔchē, suǒyǐ wǒ chídào le.) — Из-за пробки я опоздал.'
        ]
    },
    6: {
        glyph: '虽然...但是...',
        pinyin: 'suīrán... dànshì...',
        translation: 'хотя... но...',
        examples: [
            '虽然贵，但是值得。 (Suīrán guì, dànshì zhídé.) — Хотя дорого, но стоит того.',
            '他虽然小，但是很聪明。 (Tā suīrán xiǎo, dànshì hěn cōngmíng.) — Он маленький, но очень умный.',
            '虽然下雨，但是我不怕。 (Suīrán xiàyǔ, dànshì wǒ bú pà.) — Хотя дождь, я не боюсь.'
        ]
    },
    7: {
        glyph: '如果...就...',
        pinyin: 'rúguǒ... jiù...',
        translation: 'если... то...',
        examples: [
            '如果你去，我就去。 (Rúguǒ nǐ qù, wǒ jiù qù.) — Если ты пойдёшь, я пойду.',
            '如果明天下雨，我们就不去了。 (Rúguǒ míngtiān xiàyǔ, wǒmen jiù bù qù le.) — Если завтра пойдёт дождь, мы не пойдём.',
            '如果饿了，就吃点东西。 (Rúguǒ è le, jiù chī diǎn dōngxi.) — Если голоден — поешь что-нибудь.'
        ]
    },
    8: {
        glyph: '不但...而且...',
        pinyin: 'búdàn... érqiě...',
        translation: 'не только... но и...',
        examples: [
            '他不但会唱歌，而且会跳舞。 (Tā búdàn huì chànggē, érqiě huì tiàowǔ.) — Он не только умеет петь, но и танцевать.',
            '这个手机不但便宜，而且好用。 (Zhège shǒujī búdàn piányi, érqiě hǎo yòng.) — Этот телефон не только дешёвый, но и удобный.',
            '她不但聪明，而且勤奋。 (Tā búdàn cōngmíng, érqiě qínfèn.) — Она не только умна, но и трудолюбива.'
        ]
    },
    9: {
        glyph: '只有...才...',
        pinyin: 'zhǐyǒu... cái...',
        translation: 'только... тогда...',
        examples: [
            '只有努力，才能成功。 (Zhǐyǒu nǔlì, cái néng chénggōng.) — Только усердствуя, можно добиться успеха.',
            '只有你才知道。 (Zhǐyǒu nǐ cái zhīdào.) — Только ты знаешь.',
            '只有现在行动，才有未来。 (Zhǐyǒu xiànzài xíngdòng, cái yǒu wèilái.) — Только действуя сейчас, можно получить будущее.'
        ]
    },
    10: {
        glyph: '只要...就...',
        pinyin: 'zhǐyào... jiù...',
        translation: 'лишь бы... сразу...',
        examples: [
            '只要你来，我就高兴。 (Zhǐyào nǐ lái, wǒ jiù gāoxìng.) — Лишь бы ты пришёл — я буду рад.',
            '只要下雨，花就开。 (Zhǐyào xiàyǔ, huā jiù kāi.) — Как только пойдёт дождь — цветы распустятся.',
            '只要坚持，就能学会。 (Zhǐyào jiānchí, jiù néng xuéhuì.) — Лишь бы не сдаваться — научишься.'
        ]
    },
    11: {
        glyph: '于是',
        pinyin: 'yúshì',
        translation: 'поэтому / тогда (результат)',
        examples: [
            '下雨了，于是我们回家了。 (Xiàyǔ le, yúshì wǒmen huí jiā le.) — Пошёл дождь, поэтому мы пошли домой.',
            '他没带伞，于是淋湿了。 (Tā méi dài sǎn, yúshì lín shī le.) — Он не взял зонт, поэтому промок.',
            '问题解决了，于是大家放心了。 (Wèntí jiějué le, yúshì dàjiā fàngxīn le.) — Проблема решена — все успокоились.'
        ]
    },
    12: {
        glyph: '然后',
        pinyin: 'ránhòu',
        translation: 'затем / потом',
        examples: [
            '先吃饭，然后睡觉。 (Xiān chīfàn, ránhòu shuìjiào.) — Сначала поешь, потом ложись спать.',
            '我起床，然后刷牙。 (Wǒ qǐchuáng, ránhòu shuā yá.) — Я встаю, потом чищу зубы.',
            '他来了，然后又走了。 (Tā lái le, ránhòu yòu zǒu le.) — Он пришёл, а потом ушёл.'
        ]
    },
    13: {
        glyph: '不管...都...',
        pinyin: 'bùguǎn... dōu...',
        translation: 'независимо от... всё равно...',
        examples: [
            '不管天气怎么样，我都去。 (Bùguǎn tiānqì zěnmeyàng, wǒ dōu qù.) — Независимо от погоды, я пойду.',
            '不管多难，都要坚持。 (Bùguǎn duō nán, dōu yào jiānchí.) — Как бы трудно ни было, нужно продолжать.',
            '不管你是谁，都要遵守规则。 (Bùguǎn nǐ shì shéi, dōu yào zūnshǒu guīzé.) — Кто бы ты ни был, соблюдай правила.'
        ]
    },
    14: {
        glyph: '既然...就...',
        pinyin: 'jìrán... jiù...',
        translation: 'раз уж... то...',
        examples: [
            '既然来了，就多坐一会儿。 (Jìrán lái le, jiù duō zuò yīhuǐr.) — Раз уж пришёл, посиди подольше.',
            '既然答应了，就要做到。 (Jìrán dāyìng le, jiù yào zuò dào.) — Раз пообещал, нужно выполнить.',
            '既然下雨，就别出门了。 (Jìrán xiàyǔ, jiù bié chūmén le.) — Раз идёт дождь, не выходи.'
        ]
    }
};

const pronouns: { [key: number]: DictItem } = {
    1: {
        glyph: '我',
        pinyin: 'wǒ',
        translation: 'я',
        examples: [
            '我喜欢中文。 (Wǒ xǐhuan Zhōngwén.) — Мне нравится китайский.',
            '我住在北京。 (Wǒ zhù zài Běijīng.) — Я живу в Пекине.',
            '我不明白。 (Wǒ bù míngbái.) — Я не понимаю.'
        ]
    },
    2: {
        glyph: '你',
        pinyin: 'nǐ',
        translation: 'ты / вы (неформальное)',
        examples: [
            '你好吗？ (Nǐ hǎo ma?) — Как дела?',
            '你去哪里？ (Nǐ qù nǎlǐ?) — Куда ты идёшь?',
            '你真聪明。 (Nǐ zhēn cōngmíng.) — Ты очень умный.'
        ]
    },
    3: {
        glyph: '他',
        pinyin: 'tā',
        translation: 'он',
        examples: [
            '他是老师。 (Tā shì lǎoshī.) — Он учитель.',
            '他喜欢音乐。 (Tā xǐhuan yīnyuè.) — Ему нравится музыка.',
            '他在看书。 (Tā zài kàn shū.) — Он читает.'
        ]
    },
    4: {
        glyph: '她',
        pinyin: 'tā',
        translation: 'она',
        examples: [
            '她是医生。 (Tā shì yīshēng.) — Она врач.',
            '她很漂亮。 (Tā hěn piàoliang.) — Она очень красивая.',
            '她在做饭。 (Tā zài zuò fàn.) — Она готовит.'
        ]
    },
    5: {
        glyph: '它',
        pinyin: 'tā',
        translation: 'оно (о предметах, животных)',
        examples: [
            '这本书很有趣。 (Zhè běn shū hěn yǒuqù.) — Эта книга очень интересная.',
            '猫在追它。 (Māo zài zhuī tā.) — Кот гоняется за ним (за мышью).',
            '这个机器很好用。 (Zhège jīqì hěn hǎo yòng.) — Этот прибор очень удобен.'
        ]
    },
    6: {
        glyph: '我们',
        pinyin: 'wǒmen',
        translation: 'мы',
        examples: [
            '我们一起去吧。 (Wǒmen yīqǐ qù ba.) — Пойдём вместе.',
            '我们是朋友。 (Wǒmen shì péngyou.) — Мы друзья.',
            '我们学习中文。 (Wǒmen xuéxí Zhōngwén.) — Мы изучаем китайский.'
        ]
    },
    7: {
        glyph: '你们',
        pinyin: 'nǐmen',
        translation: 'вы (мн. ч.)',
        examples: [
            '你们好！ (Nǐmen hǎo!) — Привет (всем вам)!',
            '你们去哪里？ (Nǐmen qù nǎlǐ?) — Куда вы идёте?',
            '你们真棒！ (Nǐmen zhēn bàng!) — Вы молодцы!'
        ]
    },
    8: {
        glyph: '他们',
        pinyin: 'tāmen',
        translation: 'они (о людях)',
        examples: [
            '他们在吃饭。 (Tāmen zài chīfàn.) — Они едят.',
            '他们来自不同国家。 (Tāmen láizì bùtóng guójiā.) — Они из разных стран.',
            '他们很高兴。 (Tāmen hěn gāoxìng.) — Они рады.'
        ]
    },
    9: {
        glyph: '她们',
        pinyin: 'tāmen',
        translation: 'они (только женщины)',
        examples: [
            '她们是姐妹。 (Tāmen shì jiěmèi.) — Они сёстры.',
            '她们在跳舞。 (Tāmen zài tiàowǔ.) — Они танцуют.',
            '她们都学中文。 (Tāmen dōu xué Zhōngwén.) — Все они учат китайский.'
        ]
    },
    10: {
        glyph: '它们',
        pinyin: 'tāmen',
        translation: 'они (о предметах, животных)',
        examples: [
            '这些书是它们的。 (Zhèxiē shū shì tāmen de.) — Эти книги их.',
            '鸟儿们在唱歌，它们很开心。 (Niǎor men zài chànggē, tāmen hěn kāixīn.) — Птицы поют — им весело.',
            '机器人都在工作，它们很忙。 (Jīqìrén men dōu zài gōngzuò, tāmen hěn máng.) — Роботы работают — они заняты.'
        ]
    },
    11: {
        glyph: '这个',
        pinyin: 'zhège',
        translation: 'этот',
        examples: [
            '这个苹果很好吃。 (Zhège píngguǒ hěn hǎochī.) — Это яблоко очень вкусное.',
            '你喜欢这个吗？ (Nǐ xǐhuan zhège ma?) — Тебе нравится это?',
            '这个主意不错。 (Zhège zhǔyi búcuò.) — Эта идея неплоха.'
        ]
    },
    12: {
        glyph: '那个',
        pinyin: 'nàge',
        translation: 'тот',
        examples: [
            '那个房子很大。 (Nàge fángzi hěn dà.) — Тот дом очень большой.',
            '我要那个。 (Wǒ yào nàge.) — Я хочу тот.',
            '那个问题很难。 (Nàge wèntí hěn nán.) — Тот вопрос сложный.'
        ]
    },
    13: {
        glyph: '谁',
        pinyin: 'shéi',
        translation: 'кто',
        examples: [
            '谁在敲门？ (Shéi zài qiāo mén?) — Кто стучит в дверь?',
            '这是谁的书？ (Zhè shì shéi de shū?) — Чья это книга?',
            '谁想去？ (Shéi xiǎng qù?) — Кто хочет пойти?'
        ]
    },
    14: {
        glyph: '什么',
        pinyin: 'shénme',
        translation: 'что',
        examples: [
            '你在说什么？ (Nǐ zài shuō shénme?) — Что ты говоришь?',
            '这是什么？ (Zhè shì shénme?) — Что это?',
            '你想吃什么？ (Nǐ xiǎng chī shénme?) — Что ты хочешь поесть?'
        ]
    },
    15: {
        glyph: '哪',
        pinyin: 'nǎ',
        translation: 'какой / который (с числительным или мерой)',
        examples: [
            '你住**哪**里？ (Nǐ zhù **nǎ** lǐ?) — Где ты живёшь?',
            '这是**哪**本书？ (Zhè shì **nǎ** běn shū?) — Какая это книга?',
            '**哪**个好？ (**Nǎ** gè hǎo?) — Какой лучше?'
        ]
    },
    16: {
        glyph: '自己',
        pinyin: 'zìjǐ',
        translation: 'сам / себя',
        examples: [
            '你自己做吧。 (Nǐ zìjǐ zuò ba.) — Сделай сам.',
            '他照顾自己。 (Tā zhàogù zìjǐ.) — Он заботится о себе.',
            '我相信我自己。 (Wǒ xiāngxìn wǒ zìjǐ.) — Я верю в себя.'
        ]
    },
    25: {
        glyph: '关于',
        pinyin: 'guānyú',
        translation: 'относительно / о / касательно',
        examples: [
            '关于这个问题，我有不同看法。 (Guānyú zhège wèntí, wǒ yǒu bùtóng kànfǎ.) — Относительно этого вопроса у меня другое мнение.',
            '这是一本关于中国历史的书。 (Zhè shì yī běn guānyú Zhōngguó lìshǐ de shū.) — Это книга о китайской истории.',
            '关于会议的时间，我们会通知你。 (Guānyú huìyì de shíjiān, wǒmen huì tōngzhī nǐ.) — О времени собрания мы сообщим.'
        ]
    },
    26: {
        glyph: '对于',
        pinyin: 'duìyú',
        translation: 'по отношению к / для / в отношении',
        examples: [
            '对于这件事，我很抱歉。 (Duìyú zhè jiàn shì, wǒ hěn bàoqiàn.) — По поводу этого случая, я извиняюсь.',
            '对于学生来说，学习最重要。 (Duìyú xuéshēng lái shuō, xuéxí zuì zhòngyào.) — Для студентов учёба важнее всего.',
            '对于环保，人人有责。 (Duìyú huánbǎo, rénrén yǒu zé.) — В отношении защиты окружающей среды каждый ответственен.'
        ]
    }
};

const prepositionsLocalizers: { [key: number]: DictItem } = {
    1: {
        glyph: '在',
        pinyin: 'zài',
        translation: 'в / на / при (место, время)',
        examples: [
            '我在家。 (Wǒ zài jiā.) — Я дома.',
            '书在桌子上。 (Shū zài zhuōzi shàng.) — Книга на столе.',
            '我们在九点见面。 (Wǒmen zài jiǔ diǎn jiànmiàn.) — Встретимся в девять.'
        ]
    },
    2: {
        glyph: '从',
        pinyin: 'cóng',
        translation: 'с / из / от (исходная точка)',
        examples: [
            '我从中国来。 (Wǒ cóng Zhōngguó lái.) — Я из Китая.',
            '从早上工作到晚上。 (Cóng zǎoshang gōngzuò dào wǎnshang.) — Работаю с утра до вечера.',
            '从这里到那里很远。 (Cóng zhèlǐ dào nàlǐ hěn yuǎn.) — Отсюда туда далеко.'
        ]
    },
    3: {
        glyph: '到',
        pinyin: 'dào',
        translation: 'до / в (конечная точка)',
        examples: [
            '我走到学校。 (Wǒ zǒu dào xuéxiào.) — Я дошёл до школы.',
            '飞机到北京了。 (Fēijī dào Běijīng le.) — Самолёт прибыл в Пекин.',
            '工作到十点。 (Gōngzuò dào shí diǎn.) — Работаю до десяти.'
        ]
    },
    4: {
        glyph: '向',
        pinyin: 'xiàng',
        translation: 'в направлении',
        examples: [
            '他向我走来。 (Tā xiàng wǒ zǒu lái.) — Он идёт ко мне.',
            '飞机飞向北京。 (Fēijī fēi xiàng Běijīng.) — Самолёт летит в Пекин.',
            '向左转。 (Xiàng zuǒ zhuǎn.) — Поверни налево.'
        ]
    },
    5: {
        glyph: '离',
        pinyin: 'lí',
        translation: 'на расстоянии от',
        examples: [
            '学校离我家很近。 (Xuéxiào lí wǒ jiā hěn jìn.) — Школа близко от моего дома.',
            '离成功只差一步。 (Lí chénggōng zhǐ chā yī bù.) — До успеха остался один шаг.',
            '这里离地铁站五分钟。 (Zhèlǐ lí dìtiě zhàn wǔ fēnzhōng.) — Отсюда до станции метро пять минут.'
        ]
    },

    6: {
        glyph: '上',
        pinyin: 'shàng',
        translation: 'сверху / на поверхности',
        examples: [
            '书在桌子上。 (Shū zài zhuōzi shàng.) — Книга на столе.',
            '墙上挂着画。 (Qiáng shàng guà zhe huà.) — На стене висит картина.',
            '飞机在天上飞。 (Fēijī zài tiān shàng fēi.) — Самолёт летает в небе.'
        ]
    },
    7: {
        glyph: '下',
        pinyin: 'xià',
        translation: 'внизу / под / с поверхности',
        examples: [
            '猫在桌子下。 (Māo zài zhuōzi xià.) — Кот под столом.',
            '下雨了。 (Xià yǔ le.) — Пошёл дождь.',
            '他从楼上下来。 (Tā cóng lóu shàng xià lái.) — Он сошёл с верхнего этажа.'
        ]
    },
    8: {
        glyph: '里',
        pinyin: 'lǐ',
        translation: 'внутри',
        examples: [
            '他在房间里。 (Tā zài fángjiān lǐ.) — Он в комнате.',
            '书包里有书。 (Shūbāo lǐ yǒu shū.) — В портфеле есть книги.',
            '心里很难过。 (Xīn lǐ hěn nánguò.) — В душе грустно.'
        ]
    },
    9: {
        glyph: '外',
        pinyin: 'wài',
        translation: 'снаружи / вне',
        examples: [
            '他在门外。 (Tā zài mén wài.) — Он за дверью.',
            '国外生活很有趣。 (Guówài shēnghuó hěn yǒuqù.) — Жизнь за границей интересна.',
            '外表不重要。 (Wàibiǎo bù zhòngyào.) — Внешность не важна.'
        ]
    },
    10: {
        glyph: '中',
        pinyin: 'zhōng',
        translation: 'внутри (группы, процесса, страны)',
        examples: [
            '他在中国。 (Tā zài Zhōngguó zhōng.) — Он в Китае.',
            '读书中。 (Dúshū zhōng.) — В процессе чтения.',
            '人群中他最矮。 (Rénqún zhōng tā zuì ǎi.) — Среди людей он самый низкий.'
        ]
    },
    11: {
        glyph: '左边',
        pinyin: 'zuǒbian',
        translation: 'слева',
        examples: [
            '学校在左边。 (Xuéxiào zài zuǒbian.) — Школа слева.',
            '他坐在我的左边。 (Tā zuò zài wǒ de zuǒbian.) — Он сидит слева от меня.',
            '左边有商店。 (Zuǒbian yǒu shāngdiàn.) — Слева магазин.'
        ]
    },
    12: {
        glyph: '右边',
        pinyin: 'yòubian',
        translation: 'справа',
        examples: [
            '银行在右边。 (Yínháng zài yòubian.) — Банк справа.',
            '她站在我的右边。 (Tā zhàn zài wǒ de yòubian.) — Она стоит справа от меня.',
            '右边是公园。 (Yòubian shì gōngyuán.) — Справа парк.'
        ]
    },
    13: {
        glyph: '中间',
        pinyin: 'zhōngjiān',
        translation: 'посередине / между',
        examples: [
            '他在两个朋友中间。 (Tā zài liǎng gè péngyou zhōngjiān.) — Он между двумя друзьями.',
            '桌子在房间中间。 (Zhuōzi zài fángjiān zhōngjiān.) — Стол посередине комнаты.',
            '中间有条路。 (Zhōngjiān yǒu tiáo lù.) — Посередине дорога.'
        ]
    },
    14: {
        glyph: '对面',
        pinyin: 'duìmiàn',
        translation: 'напротив',
        examples: [
            '超市在马路对面。 (Chāoshì zài mǎlù duìmiàn.) — Супермаркет напротив дороги.',
            '他坐在我对面。 (Tā zuò zài wǒ duìmiàn.) — Он сидит напротив меня.',
            '对面是图书馆。 (Duìmiàn shì túshūguǎn.) — Напротив — библиотека.'
        ]
    },
    15: {
        glyph: '旁边',
        pinyin: 'pángbiān',
        translation: 'рядом / сбоку',
        examples: [
            '学校在银行旁边。 (Xuéxiào zài yínháng pángbiān.) — Школа рядом с банком.',
            '他坐在我旁边。 (Tā zuò zài wǒ pángbiān.) — Он сидит рядом со мной.',
            '车停在房子旁边。 (Chē tíng zài fángzi pángbiān.) — Машина стоит у дома.'
        ]
    },
    16: {
        glyph: '前面',
        pinyin: 'qiánmiàn',
        translation: 'впереди / спереди',
        examples: [
            '他在前面走。 (Tā zài qiánmiàn zǒu.) — Он идёт впереди.',
            '书店在前面。 (Shūdiàn zài qiánmiàn.) — Книжный магазин впереди.',
            '前面有危险！ (Qiánmiàn yǒu wēixiǎn!) — Впереди опасность!'
        ]
    },
    17: {
        glyph: '后面',
        pinyin: 'hòumiàn',
        translation: 'сзади / позади',
        examples: [
            '猫在椅子后面。 (Māo zài yǐzi hòumiàn.) — Кот сзади стула.',
            '他在后面跟着。 (Tā zài hòumiàn gēnzhe.) — Он идёт сзади.',
            '后面有出口。 (Hòumiàn yǒu chūkǒu.) — Сзади выход.'
        ]
    },
    18: {
        glyph: '之间',
        pinyin: 'zhī jiān',
        translation: 'между (двумя объектами)',
        examples: [
            '问题出在你和他之间。 (Wèntí chū zài nǐ hé tā zhī jiān.) — Проблема между тобой и ним.',
            '两栋楼之间有个花园。 (Liǎng dòng lóu zhī jiān yǒu gè huāyuán.) — Между двумя зданиями сад.',
            '之间不要有误会。 (Zhī jiān búyào yǒu wùhuì.) — Между вами не должно быть недоразумений.'
        ]
    },

    19: {
        glyph: '穿过',
        pinyin: 'chuān guò',
        translation: 'проходить сквозь',
        examples: [
            '穿过森林。 (Chuān guò sēnlín.) — Пройти сквозь лес.',
            '光线穿过窗户。 (Guāngxiàn chuān guò chuānghù.) — Свет проходит сквозь окно.',
            '我们穿过隧道。 (Wǒmen chuān guò suìdào.) — Мы прошли через тоннель.'
        ]
    },
    20: {
        glyph: '绕',
        pinyin: 'rào',
        translation: 'обходить вокруг',
        examples: [
            '绕过障碍物。 (Rào guò zhàng\'ài wù.) — Обойди препятствие.',
            '他绕着操场跑。 (Tā rào zhe cāochǎng pǎo.) — Он бегает вокруг стадиона.',
            '绕路走。 (Rào lù zǒu.) — Иди в объезд.'
        ]
    },
    21: {
        glyph: '沿着',
        pinyin: 'yánzhe',
        translation: 'вдоль',
        examples: [
            '沿着河走。 (Yánzhe hé zǒu.) — Иди вдоль реки.',
            '房子沿着街道排列。 (Fángzi yánzhe jiēdào páiliè.) — Дома выстроены вдоль улицы.',
            '沿着海岸线开车。 (Yánzhe hǎi\'àn xiàn kāichē.) — Езжай вдоль береговой линии.'
        ]
    },
    22: {
        glyph: '附近',
        pinyin: 'fùjìn',
        translation: 'поблизости / рядом',
        examples: [
            '附近有医院吗？ (Fùjìn yǒu yīyuàn ma?) — Рядом есть больница?',
            '我住在学校附近。 (Wǒ zhù zài xuéxiào fùjìn.) — Я живу рядом со школой.',
            '超市在地铁站附近。 (Chāoshì zài dìtiě zhàn fùjìn.) — Супермаркет рядом со станцией метро.'
        ]
    },
    23: {
        glyph: '深处',
        pinyin: 'shēn chù',
        translation: 'в глубине',
        examples: [
            '森林深处很安静。 (Sēnlín shēn chù hěn ānjìng.) — В глубине леса очень тихо.',
            '问题的深处是什么？ (Wèntí de shēn chù shì shénme?) — В чём суть проблемы?',
            '他住在大山深处。 (Tā zhù zài dàshān shēn chù.) — Он живёт в глубине гор.'
        ]
    },
    24: {
        glyph: '顶端',
        pinyin: 'dǐngduān',
        translation: 'на вершине / на самом верху',
        examples: [
            '旗子在旗杆顶端。 (Qízi zài qígān dǐngduān.) — Флаг на верхушке флагштока.',
            '站在山的顶端。 (Zhàn zài shān de dǐngduān.) — Стоять на вершине горы.',
            '成功的顶端。 (Chénggōng de dǐngduān.) — Вершина успеха.'
        ]
    }
};

// Общий словарь
export const newOther = {
    particles,
    conjunctions,
    pronouns,
    prepositionsLocalizers
};
