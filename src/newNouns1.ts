import { DictItem } from "./types/types";

const nounsBody: { [key: number]: DictItem } = {
    // === ВНЕШНИЕ ЧАСТИ ТЕЛА ===
    1: {
        glyph: '身体',
        pinyin: 'shēntǐ',
        translation: 'тело',
        classifier: '个',
        examples: [
            '我的身体很健康。 (Wǒ de shēntǐ hěn jiànkāng.) — Моё тело очень здорово.',
            '锻炼身体很重要。 (Duànliàn shēntǐ hěn zhòngyào.) — Очень важно укреплять тело.',
            '注意保护身体。 (Zhùyì bǎohù shēntǐ.) — Обращай внимание на защиту тела.'
        ]
    },
    2: {
        glyph: '头',
        pinyin: 'tóu',
        translation: 'голова',
        classifier: '个',
        examples: [
            '他头疼。 (Tā tóuténg.) — У него болит голова.',
            '摸摸孩子的头。 (Mōmo háizi de tóu.) — Погладь ребёнка по голове.',
            '头上戴帽子。 (Tóu shàng dài màozi.) — На голове шляпа.'
        ]
    },
    3: {
        glyph: '头发',
        pinyin: 'tóufa',
        translation: 'волосы (на голове)',
        classifier: '根',
        examples: [
            '她的头发很长。 (Tā de tóufa hěn cháng.) — Её волосы очень длинные.',
            '洗头发。 (Xǐ tóufa.) — Мыть голову.',
            '黑头发很健康。 (Hēi tóufa hěn jiànkāng.) — Чёрные волосы очень здоровые.'
        ]
    },
    4: {
        glyph: '脸',
        pinyin: 'liǎn',
        translation: 'лицо',
        classifier: '张',
        examples: [
            '他的脸很红。 (Tā de liǎn hěn hóng.) — Его лицо очень красное.',
            '洗脸。 (Xǐ liǎn.) — Умываться.',
            '脸上有笑容。 (Liǎn shàng yǒu xiàoróng.) — На лице улыбка.'
        ]
    },
    5: {
        glyph: '眼睛',
        pinyin: 'yǎnjing',
        translation: 'глаза',
        classifier: '双',
        examples: [
            '她的眼睛很大。 (Tā de yǎnjing hěn dà.) — Её глаза очень большие.',
            '保护眼睛。 (Bǎohù yǎnjing.) — Береги глаза.',
            '眼睛是心灵的窗户。 (Yǎnjing shì xīnlíng de chuānghù.) — Глаза — зеркало души.'
        ]
    },
    6: {
        glyph: '鼻子',
        pinyin: 'bízi',
        translation: 'нос',
        classifier: '个',
        examples: [
            '他鼻子很高。 (Tā bízi hěn gāo.) — У него высокий нос.',
            '鼻子出血了。 (Bízi chū xuè le.) — Из носа пошла кровь.',
            '用鼻子呼吸。 (Yòng bízi hūxī.) — Дышать носом.'
        ]
    },
    7: {
        glyph: '嘴',
        pinyin: 'zuǐ',
        translation: 'рот',
        classifier: '张',
        examples: [
            '闭上你的嘴。 (Bì shàng nǐ de zuǐ.) — Закрой рот.',
            '嘴很干。 (Zuǐ hěn gān.) — Рот очень сухой.',
            '用嘴吃饭。 (Yòng zuǐ chīfàn.) — Есть ртом.'
        ]
    },
    8: {
        glyph: '耳朵',
        pinyin: 'ěrduo',
        translation: 'уши',
        classifier: '双',
        examples: [
            '他的耳朵很大。 (Tā de ěrduo hěn dà.) — У него большие уши.',
            '注意听，用耳朵。 (Zhùyì tīng, yòng ěrduo.) — Слушай внимательно, ушами.',
            '耳朵很灵敏。 (Ěrduo hěn língmǐn.) — Уши очень чуткие.'
        ]
    },
    9: {
        glyph: '脖子',
        pinyin: 'bózi',
        translation: 'шея',
        classifier: '个',
        examples: [
            '脖子疼。 (Bózi téng.) — Болит шея.',
            '长脖子。 (Cháng bózi.) — Длинная шея.',
            '围巾绕在脖子上。 (Wéijīn rào zài bózi shàng.) — Шарф обмотан вокруг шеи.'
        ]
    },
    10: {
        glyph: '肩膀',
        pinyin: 'jiānbǎng',
        translation: 'плечи',
        classifier: '双',
        examples: [
            '他的肩膀很宽。 (Tā de jiānbǎng hěn kuān.) — У него широкие плечи.',
            '背包在肩膀上。 (Bēibāo zài jiānbǎng shàng.) — Рюкзак на плечах.',
            '耸肩膀。 (Sǒng jiānbǎng.) — Пожать плечами.'
        ]
    },
    11: {
        glyph: '手臂',
        pinyin: 'shǒubì',
        translation: 'рука (от плеча до кисти)',
        classifier: '条',
        examples: [
            '手臂受伤了。 (Shǒubì shòushāng le.) — Рука травмирована.',
            '强壮的手臂。 (Qiángzhuàng de shǒubì.) — Сильные руки.',
            '手臂很长。 (Shǒubì hěn cháng.) — Руки очень длинные.'
        ]
    },
    12: {
        glyph: '手',
        pinyin: 'shǒu',
        translation: 'кисть, рука (в разговорной речи)',
        classifier: '只',
        examples: [
            '洗手。 (Xǐ shǒu.) — Мыть руки.',
            '他有一双巧手。 (Tā yǒu yī shuāng qiǎo shǒu.) — У него золотые руки.',
            '举手。 (Jǔ shǒu.) — Поднять руку.'
        ]
    },
    13: {
        glyph: '手指',
        pinyin: 'shǒuzhǐ',
        translation: 'пальцы (руки)',
        classifier: '根',
        examples: [
            '十个手指。 (Shí gè shǒuzhǐ.) — Десять пальцев.',
            '手指很灵活。 (Shǒuzhǐ hěn líng huó.) — Пальцы очень ловкие.',
            '用手指指。 (Yòng shǒuzhǐ zhǐ.) — Указать пальцем.'
        ]
    },
    14: {
        glyph: '指甲',
        pinyin: 'zhǐjia',
        translation: 'ногти (на руках)',
        classifier: '个',
        examples: [
            '剪指甲。 (Jiǎn zhǐjia.) — Стричь ногти.',
            '指甲很长。 (Zhǐjia hěn cháng.) — Ногти очень длинные.',
            '涂指甲油。 (Tú zhǐjia yóu.) — Накрасить ногти лаком.'
        ]
    },
    15: {
        glyph: '胸部',
        pinyin: 'xiōngbù',
        translation: 'грудь (внешняя часть)',
        classifier: '个',
        examples: [
            '胸部疼痛。 (Xiōngbù téngtòng.) — Боль в груди.',
            '强壮的胸部。 (Qiángzhuàng de xiōngbù.) — Сильная грудная клетка.',
            '胸部受伤了。 (Xiōngbù shòushāng le.) — Грудь травмирована.'
        ]
    },
    16: {
        glyph: '肚子',
        pinyin: 'dùzi',
        translation: 'живот (разг.)',
        classifier: '个',
        examples: [
            '肚子饿了。 (Dùzi è le.) — Живот голодный.',
            '肚子疼。 (Dùzi téng.) — Болит живот.',
            '大肚子。 (Dà dùzi.) — Большой живот.'
        ]
    },
    17: {
        glyph: '背部',
        pinyin: 'bèibù',
        translation: 'спина',
        classifier: '个',
        examples: [
            '背部酸痛。 (Bèibù suāntòng.) — Спина ноет.',
            '挺直背部。 (Tǐngzhí bèibù.) — Держи спину прямо.',
            '背部有纹身。 (Bèibù yǒu wénshēn.) — На спине татуировка.'
        ]
    },
    18: {
        glyph: '腰',
        pinyin: 'yāo',
        translation: 'поясница, талия',
        classifier: '个',
        examples: [
            '腰很细。 (Yāo hěn xì.) — Талия очень тонкая.',
            '腰疼。 (Yāo téng.) — Болит поясница.',
            '系腰带。 (Jì yāodài.) — Привязать ремень к пояснице.'
        ]
    },
    19: {
        glyph: '腿',
        pinyin: 'tuǐ',
        translation: 'нога (от бедра до стопы)',
        classifier: '条',
        examples: [
            '他的腿很长。 (Tā de tuǐ hěn cháng.) — У него длинные ноги.',
            '腿受伤了。 (Tuǐ shòushāng le.) — Нога травмирована.',
            '跑步用腿。 (Pǎobù yòng tuǐ.) — Бегать ногами.'
        ]
    },
    20: {
        glyph: '脚',
        pinyin: 'jiǎo',
        translation: 'ступня, нога (в разговорной речи)',
        classifier: '只',
        examples: [
            '洗脚。 (Xǐ jiǎo.) — Мыть ноги.',
            '脚很臭。 (Jiǎo hěn chòu.) — Ноги очень воняют.',
            '穿袜子在脚上。 (Chuān wàzi zài jiǎo shàng.) — Надеть носки на ноги.'
        ]
    },
    21: {
        glyph: '脚趾',
        pinyin: 'jiǎozhǐ',
        translation: 'пальцы ног',
        classifier: '根',
        examples: [
            '十个脚趾。 (Shí gè jiǎozhǐ.) — Десять пальцев на ногах.',
            '脚趾受伤了。 (Jiǎozhǐ shòushāng le.) — Палец ноги травмирован.',
            '涂脚趾甲油。 (Tú jiǎozhǐ jiǎ yóu.) — Накрасить ногти на ногах.'
        ]
    },
    22: {
        glyph: '皮肤',
        pinyin: 'pífū',
        translation: 'кожа',
        classifier: '层',
        examples: [
            '她的皮肤很白。 (Tā de pífū hěn bái.) — Её кожа очень белая.',
            '保护皮肤。 (Bǎohù pífū.) — Береги кожу.',
            '皮肤很敏感。 (Pífū hěn mǐngǎn.) — Кожа очень чувствительная.'
        ]
    },

    // === ВНУТРЕННИЕ ОРГАНЫ И СТРУКТУРЫ ===
    23: {
        glyph: '大脑',
        pinyin: 'dànǎo',
        translation: 'мозг',
        classifier: '个',
        examples: [
            '大脑控制身体。 (Dànǎo kòngzhì shēntǐ.) — Мозг управляет телом.',
            '用大脑思考。 (Yòng dànǎo sīkǎo.) — Думать мозгом.',
            '大脑很复杂。 (Dànǎo hěn fùzá.) — Мозг очень сложный.'
        ]
    },
    24: {
        glyph: '心脏',
        pinyin: 'xīnzàng',
        translation: 'сердце',
        classifier: '颗',
        examples: [
            '心脏在跳动。 (Xīnzàng zài tiàodòng.) — Сердце бьётся.',
            '他有一颗善良的心。 (Tā yǒu yī kē shànliáng de xīn.) — У него доброе сердце.',
            '心脏手术。 (Xīnzàng shǒushù.) — Операция на сердце.'
        ]
    },
    25: {
        glyph: '肺',
        pinyin: 'fèi',
        translation: 'лёгкие',
        classifier: '个',
        examples: [
            '肺呼吸空气。 (Fèi hūxī kōngqì.) — Лёгкие дышат воздухом.',
            '吸烟伤害肺。 (Xīyān shānghài fèi.) — Курение вредит лёгким.',
            '肺部感染。 (Fèibù gǎnrǎn.) — Инфекция лёгких.'
        ]
    },
    26: {
        glyph: '胃',
        pinyin: 'wèi',
        translation: 'желудок',
        classifier: '个',
        examples: [
            '胃疼。 (Wèi téng.) — Болит желудок.',
            '胃消化食物。 (Wèi xiāohuà shíwù.) — Желудок переваривает пищу.',
            '不要空腹喝咖啡。 (Búyào kōngfù hē kāfēi.) — Не пей кофе на пустой желудок.'
        ]
    },
    27: {
        glyph: '肝脏',
        pinyin: 'gānzàng',
        translation: 'печень',
        classifier: '个',
        examples: [
            '肝脏解毒。 (Gānzàng jiědú.) — Печень детоксифицирует.',
            '保护肝脏。 (Bǎohù gānzàng.) — Береги печень.',
            '肝炎。 (Gānyán.) — Гепатит.'
        ]
    },
    28: {
        glyph: '肾脏',
        pinyin: 'shènzàng',
        translation: 'почки',
        classifier: '个',
        examples: [
            '肾脏过滤血液。 (Shènzàng guòlǜ xuèyè.) — Почки фильтруют кровь.',
            '肾衰竭。 (Shèn shuāijié.) — Почечная недостаточность.',
            '多喝水保护肾脏。 (Duō hē shuǐ bǎohù shènzàng.) — Пей больше воды для защиты почек.'
        ]
    },
    29: {
        glyph: '骨骼',
        pinyin: 'gǔgé',
        translation: 'скелет, кости',
        classifier: '副',
        examples: [
            '人类骨骼有206块骨头。 (Rénlèi gǔgé yǒu 206 kuài gútou.) — В скелете человека 206 костей.',
            '骨骼支撑身体。 (Gǔgé zhīchēng shēntǐ.) — Скелет поддерживает тело.',
            '补钙强健骨骼。 (Bǔ gài qiángjiàn gǔgé.) — Кальций укрепляет кости.'
        ]
    },
    30: {
        glyph: '肌肉',
        pinyin: 'jīròu',
        translation: 'мышцы',
        classifier: '块',
        examples: [
            '锻炼肌肉。 (Duànliàn jīròu.) — Укреплять мышцы.',
            '他的肌肉很发达。 (Tā de jīròu hěn fādá.) — Его мышцы очень развиты.',
            '肌肉疼痛。 (Jīròu téngtòng.) — Болят мышцы.'
        ]
    },
    31: {
        glyph: '血液',
        pinyin: 'xuèyè',
        translation: 'кровь',
        classifier: '滴',
        examples: [
            '血液输送氧气。 (Xuèyè shūsòng yǎngqì.) — Кровь переносит кислород.',
            '献血。 (Xiàn xuè.) — Сдавать кровь.',
            '血液很红。 (Xuèyè hěn hóng.) — Кровь очень красная.'
        ]
    },
    32: {
        glyph: '神经',
        pinyin: 'shénjīng',
        translation: 'нервы',
        classifier: '根',
        examples: [
            '神经传递信号。 (Shénjīng chuándì xìnhào.) — Нервы передают сигналы.',
            '神经紧张。 (Shénjīng jǐnzhāng.) — Нервы напряжены.',
            '神经系统。 (Shénjīng xìtǒng.) — Нервная система.'
        ]
    },
    33: {
        glyph: '牙齿',
        pinyin: 'yáchǐ',
        translation: 'зубы',
        classifier: '颗',
        examples: [
            '刷牙齿。 (Shuā yáchǐ.) — Чистить зубы.',
            '牙齿很白。 (Yáchǐ hěn bái.) — Зубы очень белые.',
            '拔牙齿。 (Bá yáchǐ.) — Вырвать зуб.'
        ]
    },
    34: {
        glyph: '舌头',
        pinyin: 'shétou',
        translation: 'язык',
        classifier: '条',
        examples: [
            '舌头尝味道。 (Shétou cháng wèidào.) — Язык ощущает вкус.',
            '咬到舌头了。 (Yǎo dào shétou le.) — Прикусил язык.',
            '舌头很灵活。 (Shétou hěn líng huó.) — Язык очень подвижен.'
        ]
    },
    35: {
        glyph: '脊柱',
        pinyin: 'jǐzhù',
        translation: 'позвоночник',
        classifier: '根',
        examples: [
            '脊柱支撑身体。 (Jǐzhù zhīchēng shēntǐ.) — Позвоночник поддерживает тело.',
            '脊柱侧弯。 (Jǐzhù cè wān.) — Сколиоз.',
            '保护脊柱。 (Bǎohù jǐzhù.) — Береги позвоночник.'
        ]
    },
    36: {
        glyph: '喉咙',
        pinyin: 'hóulóng',
        translation: 'горло',
        classifier: '个',
        examples: [
            '喉咙痛。 (Hóulóng tòng.) — Болит горло.',
            '大声喊，伤喉咙。 (Dàshēng hǎn, shāng hóulóng.) — Кричать громко — вредить горлу.',
            '吞药片要小心喉咙。 (Tūn yàopiàn yào xiǎoxīn hóulóng.) — Глотая таблетки, береги горло.'
        ]
    },
    37: {
        glyph: '肠',
        pinyin: 'cháng',
        translation: 'кишечник',
        classifier: '条',
        examples: [
            '小肠和大肠。 (Xiǎocháng hé dàcháng.) — Тонкий и толстый кишечник.',
            '肠消化食物。 (Cháng xiāohuà shíwù.) — Кишечник переваривает пищу.',
            '肠炎。 (Cháng yán.) — Воспаление кишечника.'
        ]
    },
    38: {
        glyph: '膀胱',
        pinyin: 'pángguāng',
        translation: 'мочевой пузырь',
        classifier: '个',
        examples: [
            '膀胱储存尿液。 (Pángguāng chǔcún niàoyè.) — Мочевой пузырь хранит мочу.',
            '膀胱感染。 (Pángguāng gǎnrǎn.) — Инфекция мочевого пузыря.',
            '不要憋尿，伤膀胱。 (Búyào biē niào, shāng pángguāng.) — Не терпи мочу — вредишь пузырю.'
        ]
    },
    39: {
        glyph: '脾',
        pinyin: 'pí',
        translation: 'селезёнка',
        classifier: '个',
        examples: [
            '脾过滤血液。 (Pí guòlǜ xuèyè.) — Селезёнка фильтрует кровь.',
            '脾脏在左上腹。 (Pízàng zài zuǒ shàng fù.) — Селезёнка находится в левом верхнем квадранте живота.',
            '脾切除。 (Pí qiēchú.) — Удаление селезёнки.'
        ]
    },
    40: {
        glyph: '胰腺',
        pinyin: 'yíxiàn',
        translation: 'поджелудочная железа',
        classifier: '个',
        examples: [
            '胰腺分泌胰岛素。 (Yíxiàn fēnmì yídǎosù.) — Поджелудочная железа вырабатывает инсулин.',
            '胰腺炎。 (Yíxiàn yán.) — Панкреатит.',
            '保护胰腺。 (Bǎohù yíxiàn.) — Береги поджелудочную железу.'
        ]
    }
};

const nounsOrgansSystems: { [key: number]: DictItem } = {
    // === НЕРВНАЯ СИСТЕМА ===
    1: {
        glyph: '神经系统',
        pinyin: 'shénjīng xìtǒng',
        translation: 'нервная система',
        classifier: '个',
        examples: [
            '神经系统控制身体反应。 (Shénjīng xìtǒng kòngzhì shēntǐ fǎnyìng.) — Нервная система управляет реакциями тела.',
            '压力影响神经系统。 (Yālì yǐngxiǎng shénjīng xìtǒng.) — Стресс влияет на нервную систему.',
            '神经系统疾病。 (Shénjīng xìtǒng jíbìng.) — Заболевания нервной системы.'
        ]
    },
    2: {
        glyph: '中枢神经系统',
        pinyin: 'zhōngshū shénjīng xìtǒng',
        translation: 'центральная нервная система',
        classifier: '个',
        examples: [
            '中枢神经系统包括脑和脊髓。 (Zhōngshū shénjīng xìtǒng bāokuò nǎo hé jǐsuǐ.) — ЦНС включает мозг и спинной мозг.',
            '脊髓是中枢神经系统的一部分。 (Jǐsuǐ shì zhōngshū shénjīng xìtǒng de yī bùfèn.) — Спинной мозг — часть ЦНС.',
            '中枢神经系统受损很危险。 (Zhōngshū shénjīng xìtǒng shòusǔn hěn wēixiǎn.) — Повреждение ЦНС очень опасно.'
        ]
    },
    3: {
        glyph: '周围神经系统',
        pinyin: 'zhōuwéi shénjīng xìtǒng',
        translation: 'периферическая нервная система',
        classifier: '个',
        examples: [
            '周围神经系统连接中枢和四肢。 (Zhōuwéi shénjīng xìtǒng liánjiē zhōngshū hé sìzhī.) — ПНС соединяет ЦНС с конечностями.',
            '手脚麻木是周围神经系统问题。 (Shǒujiǎo mámù shì zhōuwéi shénjīng xìtǒng wèntí.) — Онемение — проблема ПНС.',
            '周围神经系统负责感觉。 (Zhōuwéi shénjīng xìtǒng fùzé gǎnjué.) — ПНС отвечает за чувствительность.'
        ]
    },

    // === КРОВЕНОСНАЯ СИСТЕМА ===
    4: {
        glyph: '心血管系统',
        pinyin: 'xīnxuèguǎn xìtǒng',
        translation: 'сердечно-сосудистая система',
        classifier: '个',
        examples: [
            '运动有益心血管系统。 (Yùndòng yǒuyì xīnxuèguǎn xìtǒng.) — Физическая активность полезна для ССС.',
            '高血压损害心血管系统。 (Gāo xuèyā sǔnhài xīnxuèguǎn xìtǒng.) — Высокое давление вредит ССС.',
            '心血管系统输送氧气。 (Xīnxuèguǎn xìtǒng shūsòng yǎngqì.) — ССС доставляет кислород.'
        ]
    },
    5: {
        glyph: '心脏',
        pinyin: 'xīnzàng',
        translation: 'сердце',
        classifier: '颗',
        examples: [
            '心脏是心血管系统的核心。 (Xīnzàng shì xīnxuèguǎn xìtǒng de héxīn.) — Сердце — ядро ССС.',
            '心肌。 (Xīnjī.) — Миокард.',
            '心脏瓣膜。 (Xīnzàng bànmó.) — Клапаны сердца.'
        ]
    },
    6: {
        glyph: '血管',
        pinyin: 'xuèguǎn',
        translation: 'сосуды',
        classifier: '条',
        examples: [
            '动脉和静脉都是血管。 (Dòngmài hé jìngmài dōu shì xuèguǎn.) — Артерии и вены — типы сосудов.',
            '血管硬化。 (Xuèguǎn yìnghuà.) — Атеросклероз.',
            '血管扩张。 (Xuèguǎn kuòzhāng.) — Расширение сосудов.'
        ]
    },
    7: {
        glyph: '动脉',
        pinyin: 'dòngmài',
        translation: 'артерия',
        classifier: '条',
        examples: [
            '主动脉是最大的动脉。 (Zhǔdòngmài shì zuì dà de dòngmài.) — Аорта — самая крупная артерия.',
            '动脉输送含氧血液。 (Dòngmài shūsòng hányǎng xuèyè.) — Артерии несут кровь с кислородом.',
            '动脉破裂很危险。 (Dòngmài pòliè hěn wēixiǎn.) — Разрыв артерии опасен.'
        ]
    },
    8: {
        glyph: '静脉',
        pinyin: 'jìngmài',
        translation: 'вена',
        classifier: '条',
        examples: [
            '静脉输送缺氧血液。 (Jìngmài shūsòng quēyǎng xuèyè.) — Вены несут кровь без кислорода.',
            '静脉曲张。 (Jìngmài qūzhāng.) — Варикозное расширение вен.',
            '抽静脉血。 (Chōu jìngmài xuè.) — Брать кровь из вены.'
        ]
    },
    9: {
        glyph: '毛细血管',
        pinyin: 'máoxì xuèguǎn',
        translation: 'капилляры',
        classifier: '条',
        examples: [
            '毛细血管连接动脉和静脉。 (Máoxì xuèguǎn liánjiē dòngmài hé jìngmài.) — Капилляры соединяют артерии и вены.',
            '氧气通过毛细血管进入细胞。 (Yǎngqì tōngguò máoxì xuèguǎn jìnrù xìbāo.) — Кислород через капилляры попадает в клетки.',
            '毛细血管很细。 (Máoxì xuèguǎn hěn xì.) — Капилляры очень тонкие.'
        ]
    },

    // === ДЫХАТЕЛЬНАЯ СИСТЕМА ===
    10: {
        glyph: '呼吸系统',
        pinyin: 'hūxī xìtǒng',
        translation: 'дыхательная система',
        classifier: '个',
        examples: [
            '呼吸系统包括鼻、喉、气管、肺。 (Hūxī xìtǒng bāokuò bí, hóu, qìguǎn, fèi.) — ДС включает нос, горло, трахею, лёгкие.',
            '吸烟损害呼吸系统。 (Xīyān sǔnhài hūxī xìtǒng.) — Курение вредит дыхательной системе.',
            '呼吸系统交换气体。 (Hūxī xìtǒng jiāohuàn qìtǐ.) — ДС осуществляет газообмен.'
        ]
    },
    11: {
        glyph: '气管',
        pinyin: 'qìguǎn',
        translation: 'трахея',
        classifier: '条',
        examples: [
            '气管连接喉和支气管。 (Qìguǎn liánjiē hóu hé zhīqìguǎn.) — Трахея соединяет гортань и бронхи.',
            '气管炎。 (Qìguǎn yán.) — Трахеит.',
            '异物卡在气管。 (Yìwù kǎ zài qìguǎn.) — Инородное тело застряло в трахее.'
        ]
    },
    12: {
        glyph: '支气管',
        pinyin: 'zhīqìguǎn',
        translation: 'бронхи',
        classifier: '条',
        examples: [
            '支气管分支进入肺。 (Zhīqìguǎn fēnzhī jìnrù fèi.) — Бронхи разветвляются в лёгких.',
            '支气管炎。 (Zhīqìguǎn yán.) — Бронхит.',
            '支气管扩张。 (Zhīqìguǎn kuòzhāng.) — Бронхоэктазия.'
        ]
    },
    13: {
        glyph: '肺泡',
        pinyin: 'fèipào',
        translation: 'альвеолы',
        classifier: '个',
        examples: [
            '肺泡是气体交换的场所。 (Fèipào shì qìtǐ jiāohuàn de chǎngsuǒ.) — Альвеолы — места газообмена.',
            '氧气进入肺泡。 (Yǎngqì jìnrù fèipào.) — Кислород попадает в альвеолы.',
            '肺泡壁很薄。 (Fèipào bì hěn báo.) — Стенки альвеол очень тонкие.'
        ]
    },

    // === ПИЩЕВАРИТЕЛЬНАЯ СИСТЕМА ===
    14: {
        glyph: '消化系统',
        pinyin: 'xiāohuà xìtǒng',
        translation: 'пищеварительная система',
        classifier: '个',
        examples: [
            '消化系统包括口腔、食道、胃、肠。 (Xiāohuà xìtǒng bāokuò kǒuqiāng, shídào, wèi, cháng.) — ПС включает рот, пищевод, желудок, кишечник.',
            '消化系统分解食物。 (Xiāohuà xìtǒng fēnjiě shíwù.) — ПС расщепляет пищу.',
            '消化系统疾病很常见。 (Xiāohuà xìtǒng jíbìng hěn chángjiàn.) — Заболевания ПС очень распространены.'
        ]
    },
    15: {
        glyph: '食道',
        pinyin: 'shídào',
        translation: 'пищевод',
        classifier: '条',
        examples: [
            '食道连接咽和胃。 (Shídào liánjiē yān hé wèi.) — Пищевод соединяет глотку и желудок.',
            '食物通过食道进入胃。 (Shíwù tōngguò shídào jìnrù wèi.) — Пища проходит по пищеводу в желудок.',
            '食道癌。 (Shídào ái.) — Рак пищевода.'
        ]
    },
    16: {
        glyph: '小肠',
        pinyin: 'xiǎocháng',
        translation: 'тонкий кишечник',
        classifier: '条',
        examples: [
            '小肠吸收营养。 (Xiǎocháng xīshōu yíngyǎng.) — Тонкий кишечник всасывает питательные вещества.',
            '十二指肠是小肠的一部分。 (Shí\'èr zhǐcháng shì xiǎocháng de yī bùfèn.) — Двенадцатиперстная кишка — часть тонкого кишечника.',
            '小肠很长。 (Xiǎocháng hěn cháng.) — Тонкий кишечник очень длинный.'
        ]
    },
    17: {
        glyph: '大肠',
        pinyin: 'dàcháng',
        translation: 'толстый кишечник',
        classifier: '条',
        examples: [
            '大肠吸收水分。 (Dàcháng xīshōu shuǐfèn.) — Толстый кишечник всасывает воду.',
            '结肠是大肠的主要部分。 (Jiécháng shì dàcháng de zhǔyào bùfèn.) — Ободочная кишка — основная часть толстого кишечника.',
            '大肠储存粪便。 (Dàcháng chǔcún fènbiàn.) — Толстый кишечник хранит кал.'
        ]
    },
    18: {
        glyph: '直肠',
        pinyin: 'zhícháng',
        translation: 'прямая кишка',
        classifier: '条',
        examples: [
            '直肠连接大肠和肛门。 (Zhícháng liánjiē dàcháng hé gāngmén.) — Прямая кишка соединяет толстый кишечник и анус.',
            '直肠癌。 (Zhícháng ái.) — Рак прямой кишки.',
            '直肠指检。 (Zhícháng zhǐ jiǎn.) — Ректальный осмотр.'
        ]
    },
    19: {
        glyph: '肛门',
        pinyin: 'gāngmén',
        translation: 'анус',
        classifier: '个',
        examples: [
            '肛门是消化道的末端。 (Gāngmén shì xiāohuàdào de mòduān.) — Анус — конец пищеварительного тракта.',
            '肛门瘙痒。 (Gāngmén sàoyǎng.) — Зуд в анусе.',
            '注意肛门卫生。 (Zhùyì gāngmén wèishēng.) — Следи за гигиеной ануса.'
        ]
    },
    20: {
        glyph: '肝脏',
        pinyin: 'gānzàng',
        translation: 'печень',
        classifier: '个',
        examples: [
            '肝脏解毒并产生胆汁。 (Gānzàng jiědú bìng chǎnshēng dǎnzhī.) — Печень детоксифицирует и вырабатывает желчь.',
            '肝功能。 (Gān gōngnéng.) — Функции печени.',
            '脂肪肝。 (Zhīfáng gān.) — Жировой гепатоз.'
        ]
    },
    21: {
        glyph: '胆囊',
        pinyin: 'dǎnnáng',
        translation: 'желчный пузырь',
        classifier: '个',
        examples: [
            '胆囊储存胆汁。 (Dǎnnáng chǔcún dǎnzhī.) — Желчный пузырь хранит желчь.',
            '胆结石。 (Dǎn jiéshí.) — Желчнокаменная болезнь.',
            '切除胆囊。 (Qiēchú dǎnnáng.) — Удалить желчный пузырь.'
        ]
    },
    22: {
        glyph: '胰腺',
        pinyin: 'yíxiàn',
        translation: 'поджелудочная железа',
        classifier: '个',
        examples: [
            '胰腺分泌消化酶和胰岛素。 (Yíxiàn fēnmì xiāohuà méi hé yídǎosù.) — Поджелудочная железа вырабатывает ферменты и инсулин.',
            '胰腺炎。 (Yíxiàn yán.) — Панкреатит.',
            '胰腺癌。 (Yíxiàn ái.) — Рак поджелудочной железы.'
        ]
    },

    // === ВЫДЕЛИТЕЛЬНАЯ СИСТЕМА ===
    23: {
        glyph: '泌尿系统',
        pinyin: 'mìniào xìtǒng',
        translation: 'мочевыделительная система',
        classifier: '个',
        examples: [
            '泌尿系统包括肾、输尿管、膀胱、尿道。 (Mìniào xìtǒng bāokuò shèn, shūniàoguǎn, pángguāng, niàodào.) — МВС включает почки, мочеточники, пузырь, уретру.',
            '泌尿系统排出废物。 (Mìniào xìtǒng páichū fèiwù.) — МВС выводит отходы.',
            '泌尿系统感染。 (Mìniào xìtǒng gǎnrǎn.) — Инфекция мочевыделительной системы.'
        ]
    },
    24: {
        glyph: '输尿管',
        pinyin: 'shūniàoguǎn',
        translation: 'мочеточник',
        classifier: '条',
        examples: [
            '输尿管连接肾和膀胱。 (Shūniàoguǎn liánjiē shèn hé pángguāng.) — Мочеточник соединяет почку и пузырь.',
            '肾结石堵塞输尿管。 (Shèn jiéshí dǔsè shūniàoguǎn.) — Почечный камень блокирует мочеточник.',
            '输尿管炎。 (Shūniàoguǎn yán.) — Уретерит.'
        ]
    },
    25: {
        glyph: '尿道',
        pinyin: 'niàodào',
        translation: 'уретра',
        classifier: '条',
        examples: [
            '尿道排出尿液。 (Niàodào páichū niàoyè.) — Уретра выводит мочу.',
            '尿道炎。 (Niàodào yán.) — Уретрит.',
            '男性尿道比女性长。 (Nánxìng niàodào bǐ nǚxìng zhǎng.) — У мужчин уретра длиннее, чем у женщин.'
        ]
    },

    // === ЭНДОКРИННАЯ СИСТЕМА ===
    26: {
        glyph: '内分泌系统',
        pinyin: 'nèifēnmì xìtǒng',
        translation: 'эндокринная система',
        classifier: '个',
        examples: [
            '内分泌系统调节激素。 (Nèifēnmì xìtǒng tiáojié jìsù.) — ЭС регулирует гормоны.',
            '甲状腺是内分泌器官。 (Jiǎzhuàngxiàn shì nèifēnmì qìguān.) — Щитовидная железа — эндокринный орган.',
            '内分泌失调。 (Nèifēnmì shītiáo.) — Гормональный дисбаланс.'
        ]
    },
    27: {
        glyph: '甲状腺',
        pinyin: 'jiǎzhuàngxiàn',
        translation: 'щитовидная железа',
        classifier: '个',
        examples: [
            '甲状腺分泌甲状腺素。 (Jiǎzhuàngxiàn fēnmì jiǎzhuàngxiàn sù.) — ЩЖ вырабатывает тироксин.',
            '甲状腺肿大。 (Jiǎzhuàngxiàn zhǒngdà.) — Зоб.',
            '甲状腺功能亢进。 (Jiǎzhuàngxiàn gōngnéng kàngjìn.) — Гипертиреоз.'
        ]
    },
    28: {
        glyph: '肾上腺',
        pinyin: 'shènshàngxiàn',
        translation: 'надпочечники',
        classifier: '个',
        examples: [
            '肾上腺分泌肾上腺素。 (Shènshàngxiàn fēnmì shènshàngxiàn sù.) — Надпочечники вырабатывают адреналин.',
            '肾上腺位于肾脏上方。 (Shènshàngxiàn wèiyú shènzàng shàngfāng.) — Надпочечники расположены над почками.',
            '肾上腺疲劳。 (Shènshàngxiàn píláo.) — Адrenal fatigue.'
        ]
    },
    29: {
        glyph: '垂体',
        pinyin: 'chuítǐ',
        translation: 'гипофиз',
        classifier: '个',
        examples: [
            '垂体是内分泌系统的总指挥。 (Chuítǐ shì nèifēnmì xìtǒng de zǒng zhǐhuī.) — Гипофиз — главный регулятор ЭС.',
            '垂体分泌生长激素。 (Chuítǐ fēnmì shēngzhǎng jìsù.) — Гипофиз вырабатывает гормон роста.',
            '垂体瘤。 (Chuítǐ liú.) — Аденома гипофиза.'
        ]
    },

    // === ИММУННАЯ СИСТЕМА ===
    30: {
        glyph: '免疫系统',
        pinyin: 'miǎnyì xìtǒng',
        translation: 'иммунная система',
        classifier: '个',
        examples: [
            '免疫系统抵抗病毒。 (Miǎnyì xìtǒng dǐkàng bìngdú.) — ИС сопротивляется вирусам.',
            '疫苗增强免疫系统。 (Yìmiáo zēngqiáng miǎnyì xìtǒng.) — Вакцины укрепляют ИС.',
            '免疫系统缺陷。 (Miǎnyì xìtǒng quēxiàn.) — Иммунодефицит.'
        ]
    },
    31: {
        glyph: '淋巴系统',
        pinyin: 'línbā xìtǒng',
        translation: 'лимфатическая система',
        classifier: '个',
        examples: [
            '淋巴系统是免疫系统的一部分。 (Línbā xìtǒng shì miǎnyì xìtǒng de yī bùfèn.) — ЛС — часть ИС.',
            '淋巴结过滤淋巴液。 (Línbā jié guòlǜ línbā yè.) — Лимфоузлы фильтруют лимфу.',
            '淋巴水肿。 (Línbā shuǐzhǒng.) — Лимфедема.'
        ]
    },
    32: {
        glyph: '脾脏',
        pinyin: 'pízàng',
        translation: 'селезёнка',
        classifier: '个',
        examples: [
            '脾脏过滤血液并储存血小板。 (Pízàng guòlǜ xuèyè bìng chǔcún xuèxiǎobǎn.) — Селезёнка фильтрует кровь и хранит тромбоциты.',
            '脾脏是淋巴器官。 (Pízàng shì línbā qìguān.) — Селезёнка — лимфоидный орган.',
            '脾切除后免疫力下降。 (Pí qiēchú hòu miǎnyìlì xiàjiàng.) — После спленэктомии иммунитет снижается.'
        ]
    },

    // === ОПОРНО-ДВИГАТЕЛЬНАЯ СИСТЕМА ===
    33: {
        glyph: '运动系统',
        pinyin: 'yùndòng xìtǒng',
        translation: 'опорно-двигательная система',
        classifier: '个',
        examples: [
            '运动系统包括骨骼和肌肉。 (Yùndòng xìtǒng bāokuò gǔgé hé jīròu.) — ОДС включает кости и мышцы.',
            '运动系统使人活动。 (Yùndòng xìtǒng shǐ rén huódòng.) — ОДС позволяет человеку двигаться.',
            '运动系统损伤影响行动。 (Yùndòng xìtǒng sǔnshāng yǐngxiǎng xíngdòng.) — Травма ОДС влияет на подвижность.'
        ]
    },
    34: {
        glyph: '骨骼系统',
        pinyin: 'gǔgé xìtǒng',
        translation: 'скелет',
        classifier: '副',
        examples: [
            '骨骼系统支撑身体并保护内脏。 (Gǔgé xìtǒng zhīchēng shēntǐ bìng bǎohù nèizàng.) — Скелет поддерживает тело и защищает внутренности.',
            '人体有206块骨头。 (Rén tǐ yǒu 206 kuài gútou.) — В теле человека 206 костей.',
            '骨骼系统储存钙。 (Gǔgé xìtǒng chǔcún gài.) — Скелет хранит кальций.'
        ]
    },
    35: {
        glyph: '肌肉系统',
        pinyin: 'jīròu xìtǒng',
        translation: 'мышечная система',
        classifier: '个',
        examples: [
            '肌肉系统产生运动。 (Jīròu xìtǒng chǎnshēng yùndòng.) — Мышечная система создаёт движение.',
            '骨骼肌受意识控制。 (Gǔjījī shòu yìshí kòngzhì.) — Скелетные мышцы подконтрольны сознанию.',
            '心肌是不随意肌。 (Xīnjī shì bù suíyì jī.) — Сердечная мышца — непроизвольная.'
        ]
    },

    // === РЕПРОДУКТИВНАЯ СИСТЕМА ===
    36: {
        glyph: '生殖系统',
        pinyin: 'shēngzhí xìtǒng',
        translation: 'репродуктивная система',
        classifier: '个',
        examples: [
            '男性和女性生殖系统不同。 (Nánxìng hé nǚxìng shēngzhí xìtǒng bù tóng.) — Репродуктивные системы мужчин и женщин различаются.',
            '生殖系统负责繁衍后代。 (Shēngzhí xìtǒng fùzé fányǎn hòudài.) — РС отвечает за продолжение рода.',
            '生殖系统健康很重要。 (Shēngzhí xìtǒng jiànkāng hěn zhòngyào.) — Здоровье РС очень важно.'
        ]
    },
    37: {
        glyph: '卵巢',
        pinyin: 'luǎncháo',
        translation: 'яичники',
        classifier: '个',
        examples: [
            '卵巢产生卵子和雌激素。 (Luǎncháo chǎnshēng luǎnzǐ hé cí jìsù.) — Яичники производят яйцеклетки и эстроген.',
            '多囊卵巢综合征。 (Duō náng luǎncháo zōng hé zhèng.) — Синдром поликистозных яичников.',
            '卵巢癌。 (Luǎncháo ái.) — Рак яичников.'
        ]
    },
    38: {
        glyph: '子宫',
        pinyin: 'zǐgōng',
        translation: 'матка',
        classifier: '个',
        examples: [
            '子宫是胎儿发育的地方。 (Zǐgōng shì tāiér fāyù de dìfāng.) — Матка — место развития плода.',
            '子宫肌瘤。 (Zǐgōng jīliú.) — Миома матки.',
            '子宫切除术。 (Zǐgōng qiēchú shù.) — Гистерэктомия.'
        ]
    },
    39: {
        glyph: '睾丸',
        pinyin: 'gāowán',
        translation: 'яички',
        classifier: '个',
        examples: [
            '睾丸产生精子和睾酮。 (Gāowán chǎnshēng jīngzǐ hé gāotóng.) — Яички производят сперму и тестостерон.',
            '隐睾症。 (Yǐn gāo zhèng.) — Крипторхизм.',
            '睾丸癌。 (Gāowán ái.) — Рак яичек.'
        ]
    },
    40: {
        glyph: '前列腺',
        pinyin: 'qiánlièxiàn',
        translation: 'предстательная железа',
        classifier: '个',
        examples: [
            '前列腺位于膀胱下方。 (Qiánlièxiàn wèiyú pángguāng xiàfāng.) — Предстательная железа расположена под пузырём.',
            '前列腺炎。 (Qiánlièxiàn yán.) — Простатит.',
            '前列腺肥大。 (Qiánlièxiàn féidà.) — Аденома простаты.'
        ]
    }
};

const nounsBodySubstances: { [key: number]: DictItem } = {
    // === ОСНОВНЫЕ ЖИДКОСТИ ===
    1: {
        glyph: '血液',
        pinyin: 'xuèyè',
        translation: 'кровь',
        classifier: '滴',
        examples: [
            '血液输送氧气和养分。 (Xuèyè shūsòng yǎngqì hé yǎngfèn.) — Кровь доставляет кислород и питательные вещества.',
            '献血救人性命。 (Xiàn xuè jiù rén xìngmìng.) — Сдача крови спасает жизни.',
            '血液由血浆和血细胞组成。 (Xuèyè yóu xuèjiāng hé xuè xìbāo zǔchéng.) — Кровь состоит из плазмы и клеток.'
        ]
    },
    2: {
        glyph: '血浆',
        pinyin: 'xuèjiāng',
        translation: 'плазма крови',
        classifier: '滴',
        examples: [
            '血浆是血液的液体部分。 (Xuèjiāng shì xuèyè de yètǐ bùfèn.) — Плазма — жидкая часть крови.',
            '血浆含有蛋白质和激素。 (Xuèjiāng hán yǒu dànbáizhì hé jìsù.) — Плазма содержит белки и гормоны.',
            '输血浆治疗烧伤。 (Shū xuèjiāng zhìliáo shāoshāng.) — Плазма используется для лечения ожогов.'
        ]
    },
    3: {
        glyph: '淋巴液',
        pinyin: 'línbā yè',
        translation: 'лимфа',
        classifier: '滴',
        examples: [
            '淋巴液在淋巴管中流动。 (Línbā yè zài línbā guǎn zhōng liúdòng.) — Лимфа течёт по лимфатическим сосудам.',
            '淋巴液含有免疫细胞。 (Línbā yè hán yǒu miǎnyì xìbāo.) — Лимфа содержит иммунные клетки.',
            '淋巴液帮助清除废物。 (Línbā yè bāngzhù qīngchú fèiwù.) — Лимфа помогает выводить отходы.'
        ]
    },
    4: {
        glyph: '组织液',
        pinyin: 'zǔzhī yè',
        translation: 'межклеточная жидкость',
        classifier: '滴',
        examples: [
            '组织液包围细胞。 (Zǔzhī yè bāowéi xìbāo.) — Межклеточная жидкость окружает клетки.',
            '组织液输送营养物质。 (Zǔzhī yè shūsòng yíngyǎng wùzhì.) — МЖ доставляет питательные вещества.',
            '组织液过多导致水肿。 (Zǔzhī yè guòduō dǎozhì shuǐzhǒng.) — Избыток МЖ вызывает отёки.'
        ]
    },
    5: {
        glyph: '脑脊液',
        pinyin: 'nǎojǐ yè',
        translation: 'спинномозговая жидкость',
        classifier: '滴',
        examples: [
            '脑脊液保护大脑和脊髓。 (Nǎojǐ yè bǎohù dànǎo hé jǐsuǐ.) — СМЖ защищает мозг и спинной мозг.',
            '腰椎穿刺抽取脑脊液。 (Yāozhuī chuāncì chōuqǔ nǎojǐ yè.) — Люмбальная пункция для забора СМЖ.',
            '脑脊液循环障碍导致脑积水。 (Nǎojǐ yè xúnhuán zhàng\'ài dǎozhì nǎo jīshuǐ.) — Нарушение циркуляции СМЖ вызывает гидроцефалию.'
        ]
    },

    // === ПИЩЕВАРИТЕЛЬНЫЕ СОКИ ===
    6: {
        glyph: '唾液',
        pinyin: 'tuòyè',
        translation: 'слюна',
        classifier: '滴',
        examples: [
            '唾液帮助消化淀粉。 (Tuòyè bāngzhù xiāohuà diànfěn.) — Слюна помогает расщеплять крахмал.',
            '看到美食分泌唾液。 (Kàn dào měishí fēnmì tuòyè.) — При виде вкусной еды выделяется слюна.',
            '唾液含有溶菌酶。 (Tuòyè hán yǒu róngjūn méi.) — Слюна содержит лизоцим.'
        ]
    },
    7: {
        glyph: '胃液',
        pinyin: 'wèiyè',
        translation: 'желудочный сок',
        classifier: '滴',
        examples: [
            '胃液含有盐酸和胃蛋白酶。 (Wèiyè hán yǒu yánsuān hé wèidànbáiméi.) — Желудочный сок содержит соляную кислоту и пепсин.',
            '胃液消化蛋白质。 (Wèiyè xiāohuà dànbáizhì.) — ЖС переваривает белки.',
            '胃液过多引起胃溃疡。 (Wèiyè guòduō yǐnqǐ wèi kuìyáng.) — Избыток ЖС вызывает язву.'
        ]
    },
    8: {
        glyph: '胆汁',
        pinyin: 'dǎnzhī',
        translation: 'желчь',
        classifier: '滴',
        examples: [
            '胆汁由肝脏产生，储存在胆囊。 (Dǎnzhī yóu gānzàng chǎnshēng, chǔcún zài dǎnnáng.) — Желчь вырабатывается печенью и хранится в жёлчном пузыре.',
            '胆汁帮助消化脂肪。 (Dǎnzhī bāngzhù xiāohuà zhīfáng.) — Жёлчь помогает переваривать жиры.',
            '胆汁反流导致口苦。 (Dǎnzhī fǎnliú dǎozhì kǒu kǔ.) — Заброс жёлчи вызывает горечь во рту.'
        ]
    },
    9: {
        glyph: '胰液',
        pinyin: 'yíyè',
        translation: 'панкреатический сок',
        classifier: '滴',
        examples: [
            '胰液含有多种消化酶。 (Yíyè hán yǒu duō zhǒng xiāohuà méi.) — Панкреатический сок содержит множество ферментов.',
            '胰液进入十二指肠。 (Yíyè jìnrù shí\'èr zhǐcháng.) — ПС поступает в двенадцатиперстную кишку.',
            '胰液不足导致消化不良。 (Yíyè bùzú dǎozhì xiāohuà bùliáng.) — Недостаток ПС вызывает диспепсию.'
        ]
    },
    10: {
        glyph: '肠液',
        pinyin: 'chángyè',
        translation: 'кишечный сок',
        classifier: '滴',
        examples: [
            '肠液完成食物的最终消化。 (Chángyè wánchéng shíwù de zuìzhōng xiāohuà.) — Кишечный сок завершает переваривание пищи.',
            '肠液含有肠激酶。 (Chángyè hán yǒu cháng jī méi.) — КС содержит энтерокиназу.',
            '肠液帮助吸收营养。 (Chángyè bāngzhù xīshōu yíngyǎng.) — КС помогает всасыванию питательных веществ.'
        ]
    },

    // === ВЫДЕЛЯЕМЫЕ ВЕЩЕСТВА ===
    11: {
        glyph: '尿液',
        pinyin: 'niàoyè',
        translation: 'моча',
        classifier: '滴',
        examples: [
            '尿液由肾脏产生。 (Niàoyè yóu shènzàng chǎnshēng.) — Моча вырабатывается почками.',
            '尿液排出代谢废物。 (Niàoyè páichū dàixiè fèiwù.) — Моча выводит продукты метаболизма.',
            '验尿检查健康状况。 (Yàn niào jiǎnchá jiànkāng zhuàngkuàng.) — Анализ мочи проверяет состояние здоровья.'
        ]
    },
    12: {
        glyph: '汗液',
        pinyin: 'hànyè',
        translation: 'пот',
        classifier: '滴',
        examples: [
            '汗液调节体温。 (Hànyè tiáojié tǐwēn.) — Пот регулирует температуру тела.',
            '运动时分泌汗液。 (Yùndòng shí fēnmì hànyè.) — При физической нагрузке выделяется пот.',
            '汗液含有盐分。 (Hànyè hán yǒu yánfèn.) — Пот содержит соль.'
        ]
    },
    13: {
        glyph: '粪便',
        pinyin: 'fènbiàn',
        translation: 'кал',
        classifier: '堆',
        examples: [
            '粪便是消化后的残渣。 (Fènbiàn shì xiāohuà hòu de cánzhā.) — Кал — остатки переваренной пищи.',
            '观察粪便了解肠道健康。 (Guānchá fènbiàn liǎojiě chángdào jiànkāng.) — Наблюдение за калом даёт представление о здоровье кишечника.',
            '粪便含有大量细菌。 (Fènbiàn hán yǒu dàliàng xìjūn.) — Кал содержит множество бактерий.'
        ]
    },
    14: {
        glyph: '眼泪',
        pinyin: 'yǎnlèi',
        translation: 'слёзы',
        classifier: '滴',
        examples: [
            '情绪激动时流眼泪。 (Qíngxù jīdòng shí liú yǎnlèi.) — Слёзы текут при сильных эмоциях.',
            '眼泪润滑眼球。 (Yǎnlèi rùnhuá yǎnqiú.) — Слёзы увлажняют глазное яблоко.',
            '洋葱刺激眼泪分泌。 (Yángcōng cìjī yǎnlèi fēnmì.) — Лук вызывает слезоточивость.'
        ]
    },
    15: {
        glyph: '精液',
        pinyin: 'jīngyè',
        translation: 'сперма',
        classifier: '滴',
        examples: [
            '精液含有精子。 (Jīngyè hán yǒu jīngzǐ.) — Сперма содержит сперматозоиды.',
            '精液分析检查生育能力。 (Jīngyè fēnxī jiǎnchá shēngyù nénglì.) — Анализ спермы проверяет фертильность.',
            '精液由睾丸和附属腺体产生。 (Jīngyè yóu gāowán hé fùshǔ xiàntǐ chǎnshēng.) — Сперма вырабатывается яичками и придаточными железами.'
        ]
    },

    // === СТРУКТУРНЫЕ КОМПОНЕНТЫ ===
    16: {
        glyph: '骨骼',
        pinyin: 'gǔgé',
        translation: 'кости (как вещество)',
        classifier: '块',
        examples: [
            '骨骼主要由钙和磷组成。 (Gǔgé zhǔyào yóu gài hé lín zǔchéng.) — Кости состоят в основном из кальция и фосфора.',
            '骨骼提供身体支撑。 (Gǔgé tígōng shēntǐ zhīchēng.) — Кости обеспечивают опору телу.',
            '骨质疏松症是骨骼变脆。 (Gǔzhì shūsōng zhèng shì gǔgé biàn cuì.) — Остеопороз — хрупкость костей.'
        ]
    },
    17: {
        glyph: '软骨',
        pinyin: 'ruǎngǔ',
        translation: 'хрящ',
        classifier: '块',
        examples: [
            '软骨连接骨头并减少摩擦。 (Ruǎngǔ liánjiē gútou bìng jiǎnshǎo mócā.) — Хрящ соединяет кости и уменьшает трение.',
            '关节软骨退化导致关节炎。 (Guānjié ruǎngǔ tuìhuà dǎozhì guānjié yán.) — Дегенерация хряща вызывает артрит.',
            '耳朵和鼻子由软骨支撑。 (Ěrduo hé bízi yóu ruǎngǔ zhīchēng.) — Уши и нос поддерживаются хрящом.'
        ]
    },
    18: {
        glyph: '肌肉',
        pinyin: 'jīròu',
        translation: 'мышечная ткань',
        classifier: '块',
        examples: [
            '肌肉由肌纤维组成。 (Jīròu yóu jī xiānwéi zǔchéng.) — Мышцы состоят из мышечных волокон.',
            '肌肉收缩产生运动。 (Jīròu shōusuō chǎnshēng yùndòng.) — Сокращение мышц создаёт движение.',
            '心肌是特殊的肌肉。 (Xīnjī shì tèshū de jīròu.) — Сердечная мышца — особая ткань.'
        ]
    },
    19: {
        glyph: '脂肪',
        pinyin: 'zhīfáng',
        translation: 'жировая ткань',
        classifier: '层',
        examples: [
            '脂肪储存能量。 (Zhīfáng chǔcún néngliàng.) — Жир хранит энергию.',
            '皮下脂肪保温。 (Píxià zhīfáng bǎowēn.) — Подкожный жир сохраняет тепло.',
            '内脏脂肪过多有害健康。 (Nèizàng zhīfáng guòduō yǒuhài jiànkāng.) — Избыток висцерального жира вредит здоровью.'
        ]
    },
    20: {
        glyph: '皮肤',
        pinyin: 'pífū',
        translation: 'кожа (как ткань)',
        classifier: '层',
        examples: [
            '皮肤由表皮和真皮组成。 (Pífū yóu biǎopí hé zhēnpí zǔchéng.) — Кожа состоит из эпидермиса и дермы.',
            '皮肤是最大的器官。 (Pífū shì zuì dà de qìguān.) — Кожа — самый большой орган.',
            '皮肤保护身体免受感染。 (Pífū bǎohù shēntǐ miǎn shòu gǎnrǎn.) — Кожа защищает от инфекций.'
        ]
    },
    21: {
        glyph: '头发',
        pinyin: 'tóufa',
        translation: 'волосы (в структурном смысле)',
        classifier: '根',
        examples: [
            '头发由角蛋白组成。 (Tóufa yóu jiǎodànbái zǔchéng.) — Волосы состоят из кератина.',
            '头发保护头皮。 (Tóufa bǎohù tóupí.) — Волосы защищают кожу головы.',
            '头发颜色由黑色素决定。 (Tóufa yánsè yóu hēisèsù juédìng.) — Цвет волос определяется меланином.'
        ]
    },
    22: {
        glyph: '指甲',
        pinyin: 'zhǐjia',
        translation: 'ногти',
        classifier: '个',
        examples: [
            '指甲也由角蛋白组成。 (Zhǐjia yě yóu jiǎodànbái zǔchéng.) — Ногти тоже состоят из кератина.',
            '指甲保护指尖。 (Zhǐjia bǎohù zhǐjiān.) — Ногти защищают кончики пальцев.',
            '指甲生长速度因人而异。 (Zhǐjia shēngzhǎng sùdù yīn rén ér yì.) — Скорость роста ногтей индивидуальна.'
        ]
    },

    // === БИОХИМИЧЕСКИЕ ВЕЩЕСТВА ===
    23: {
        glyph: '水',
        pinyin: 'shuǐ',
        translation: 'вода (в организме)',
        classifier: '滴',
        examples: [
            '人体70%是水。 (Rén tǐ 70% shì shuǐ.) — Тело человека на 70% состоит из воды.',
            '水调节体温和代谢。 (Shuǐ tiáojié tǐwēn hé dàixiè.) — Вода регулирует температуру и метаболизм.',
            '脱水影响身体功能。 (Tuōshuǐ yǐngxiǎng shēntǐ gōngnéng.) — Обезвоживание нарушает функции тела.'
        ]
    },
    24: {
        glyph: '蛋白质',
        pinyin: 'dànbáizhì',
        translation: 'белки',
        classifier: '种',
        examples: [
            '蛋白质是生命的基础。 (Dànbáizhì shì shēngmìng de jīchǔ.) — Белки — основа жизни.',
            '肌肉主要由蛋白质构成。 (Jīròu zhǔyào yóu dànbáizhì gòuchéng.) — Мышцы в основном состоят из белков.',
            '酶是功能性蛋白质。 (Méi shì gōngnéng xìng dànbáizhì.) — Ферменты — функциональные белки.'
        ]
    },
    25: {
        glyph: '脂肪',
        pinyin: 'zhīfáng',
        translation: 'жиры (биохимически)',
        classifier: '种',
        examples: [
            '脂肪是重要的能量来源。 (Zhīfáng shì zhòngyào de néngliàng láiyuán.) — Жиры — важный источник энергии.',
            '必需脂肪酸必须从食物中获取。 (Bìxū zhīfángsuān bìxū cóng shíwù zhōng huòqǔ.) — Незаменимые жирные кислоты поступают с пищей.',
            '胆固醇是一种脂质。 (Dǎngùchún shì yī zhǒng zhīzhì.) — Холестерин — липид.'
        ]
    },
    26: {
        glyph: '碳水化合物',
        pinyin: 'tànshuǐ huàhéwù',
        translation: 'углеводы',
        classifier: '种',
        examples: [
            '碳水化合物是主要能量来源。 (Tànshuǐ huàhéwù shì zhǔyào néngliàng láiyuán.) — Углеводы — основной источник энергии.',
            '葡萄糖是单糖。 (Pútáotáng shì dāntáng.) — Глюкоза — моносахарид.',
            '纤维素是不可消化的碳水化合物。 (Xiānwéisù shì bù kě xiāohuà de tànshuǐ huàhéwù.) — Целлюлоза — неперевариваемый углевод.'
        ]
    },
    27: {
        glyph: '维生素',
        pinyin: 'wéishēngsù',
        translation: 'витамины',
        classifier: '种',
        examples: [
            '维生素C增强免疫力。 (Wéishēngsù C zēngqiáng miǎnyìlì.) — Витамин C укрепляет иммунитет.',
            '维生素D帮助钙吸收。 (Wéishēngsù D bāngzhù gài xīshōu.) — Витамин D способствует усвоению кальция.',
            '缺乏维生素导致疾病。 (Quēfá wéishēngsù dǎozhì jíbìng.) — Дефицит витаминов вызывает болезни.'
        ]
    },
    28: {
        glyph: '矿物质',
        pinyin: 'kuàngwùzhì',
        translation: 'минералы',
        classifier: '种',
        examples: [
            '钙是骨骼的主要矿物质。 (Gài shì gǔgé de zhǔyào kuàngwùzhì.) — Кальций — главный минерал костей.',
            '铁是血红蛋白的成分。 (Tiě shì xuèhóngdànbái de chéngfèn.) — Железо — компонент гемоглобина.',
            '电解质包括钠、钾、氯。 (Diànjiězhì bāokuò nà, jiǎ, lǜ.) — Электролиты включают натрий, калий, хлор.'
        ]
    },
    29: {
        glyph: '激素',
        pinyin: 'jìsù',
        translation: 'гормоны',
        classifier: '种',
        examples: [
            '胰岛素调节血糖。 (Yídǎosù tiáojié xuètáng.) — Инсулин регулирует уровень сахара в крови.',
            '肾上腺素应对压力。 (Shènshàngxiàn sù yìngduì yālì.) — Адреналин помогает справляться со стрессом.',
            '激素失衡影响情绪。 (Jìsù shīhéng yǐngxiǎng qíngxù.) — Гормональный дисбаланс влияет на настроение.'
        ]
    },
    30: {
        glyph: '酶',
        pinyin: 'méi',
        translation: 'ферменты',
        classifier: '种',
        examples: [
            '消化酶分解食物。 (Xiāohuà méi fēnjiě shíwù.) — Пищеварительные ферменты расщепляют пищу.',
            'DNA聚合酶复制DNA。 (DNA jùhé méi fùzhì DNA.) — ДНК-полимераза копирует ДНК.',
            '酶是生物催化剂。 (Méi shì shēngwù cuīhuàjì.) — Ферменты — биологические катализаторы.'
        ]
    },
    31: {
        glyph: '抗体',
        pinyin: 'kàngtǐ',
        translation: 'антитела',
        classifier: '种',
        examples: [
            '抗体识别并中和病原体。 (Kàngtǐ shíbié bìng zhōnghé bìngyuán tǐ.) — Антитела распознают и нейтрализуют патогены.',
            '疫苗刺激抗体产生。 (Yìmiáo cìjī kàngtǐ chǎnshēng.) — Вакцины стимулируют выработку антител.',
            'IgG是最常见的抗体。 (IgG shì zuì chángjiàn de kàngtǐ.) — IgG — самый распространённый тип антител.'
        ]
    },
    32: {
        glyph: '抗原',
        pinyin: 'kàngyuán',
        translation: 'антигены',
        classifier: '种',
        examples: [
            '抗原触发免疫反应。 (Kàngyuán chùfā miǎnyì fǎnyìng.) — Антигены запускают иммунный ответ.',
            '病毒表面有抗原。 (Bìngdú biǎomiàn yǒu kàngyuán.) — На поверхности вирусов есть антигены.',
            '血型由红细胞抗原决定。 (Xuèxíng yóu hóng xìbāo kàngyuán juédìng.) — Группа крови определяется антигенами эритроцитов.'
        ]
    },
    33: {
        glyph: 'DNA',
        pinyin: 'DNA',
        translation: 'ДНК',
        classifier: '条',
        examples: [
            'DNA携带遗传信息。 (DNA xiédài yíchuán xìnxī.) — ДНК несёт генетическую информацию.',
            'DNA双螺旋结构。 (DNA shuāng luóxuán jiégòu.) — ДНК имеет двойную спиральную структуру.',
            '基因是DNA的片段。 (Jīyīn shì DNA de piànduàn.) — Гены — участки ДНК.'
        ]
    },
    34: {
        glyph: 'RNA',
        pinyin: 'RNA',
        translation: 'РНК',
        classifier: '条',
        examples: [
            'RNA参与蛋白质合成。 (RNA cānyù dànbáizhì héchéng.) — РНК участвует в синтезе белков.',
            'mRNA传递遗传信息。 (mRNA chuándì yíchuán xìnxī.) — мРНК передаёт генетическую информацию.',
            '病毒可能含有RNA。 (Bìngdú kěnéng hán yǒu RNA.) — Вирусы могут содержать РНК.'
        ]
    },
    35: {
        glyph: '细胞',
        pinyin: 'xìbāo',
        translation: 'клетки',
        classifier: '个',
        examples: [
            '人体由数万亿细胞组成。 (Rén tǐ yóu shù wàn yì xìbāo zǔchéng.) — Тело человека состоит из триллионов клеток.',
            '干细胞能分化成多种细胞。 (Gànxìbāo néng fēnhuà chéng duō zhǒng xìbāo.) — Стволовые клетки дифференцируются в разные типы.',
            '癌细胞无限增殖。 (Ái xìbāo wúxiàn zēngzhí.) — Раковые клетки бесконтрольно размножаются.'
        ]
    },
    36: {
        glyph: '细胞膜',
        pinyin: 'xìbāo mó',
        translation: 'клеточная мембрана',
        classifier: '层',
        examples: [
            '细胞膜控制物质进出。 (Xìbāo mó kòngzhì wùzhì jìn chū.) — Клеточная мембрана регулирует вход и выход веществ.',
            '细胞膜由磷脂双分子层构成。 (Xìbāo mó yóu línzhī shuāng fēnzǐ céng gòuchéng.) — Мембрана состоит из бислоя фосфолипидов.',
            '病毒通过细胞膜进入细胞。 (Bìngdú tōngguò xìbāo mó jìnrù xìbāo.) — Вирусы проникают в клетку через мембрану.'
        ]
    },
    37: {
        glyph: '细胞核',
        pinyin: 'xìbāo hé',
        translation: 'ядро клетки',
        classifier: '个',
        examples: [
            '细胞核含有DNA。 (Xìbāo hé hán yǒu DNA.) — Ядро содержит ДНК.',
            '细胞核控制细胞活动。 (Xìbāo hé kòngzhì xìbāo huódòng.) — Ядро управляет деятельностью клетки.',
            '原核细胞没有细胞核。 (Yuán hé xìbāo méiyǒu xìbāo hé.) — Прокариоты не имеют ядра.'
        ]
    },
    38: {
        glyph: '线粒体',
        pinyin: 'xiànlìtǐ',
        translation: 'митохондрии',
        classifier: '个',
        examples: [
            '线粒体是细胞的动力工厂。 (Xiànlìtǐ shì xìbāo de dònglì gōngchǎng.) — Митохондрии — энергетические станции клетки.',
            '线粒体有自己的DNA。 (Xiànlìtǐ yǒu zìjǐ de DNA.) — Митохондрии имеют собственную ДНК.',
            '线粒体功能障碍导致疾病。 (Xiànlìtǐ gōngnéng zhàng\'ài dǎozhì jíbìng.) — Нарушение функции митохондрий вызывает болезни.'
        ]
    },
    39: {
        glyph: '血红蛋白',
        pinyin: 'xuèhóngdànbái',
        translation: 'гемоглобин',
        classifier: '种',
        examples: [
            '血红蛋白运输氧气。 (Xuèhóngdànbái yùnshū yǎngqì.) — Гемоглобин переносит кислород.',
            '缺铁导致血红蛋白减少。 (Quē tiě dǎozhì xuèhóngdànbái jiǎnshǎo.) — Дефицит железа снижает уровень гемоглобина.',
            '一氧化碳与血红蛋白结合。 (Yīyǎnghuàtàn yǔ xuèhóngdànbái jiéhé.) — Угарный газ связывается с гемоглобином.'
        ]
    },
    40: {
        glyph: '葡萄糖',
        pinyin: 'pútáotáng',
        translation: 'глюкоза',
        classifier: '种',
        examples: [
            '葡萄糖是细胞的主要能量来源。 (Pútáotáng shì xìbāo de zhǔyào néngliàng láiyuán.) — Глюкоза — главный источник энергии для клеток.',
            '血糖指血液中的葡萄糖。 (Xuètáng zhǐ xuèyè zhōng de pútáotáng.) — Глюкоза крови — это содержание глюкозы в крови.',
            '胰岛素帮助细胞吸收葡萄糖。 (Yídǎosù bāngzhù xìbāo xīshōu pútáotáng.) — Инсулин помогает клеткам поглощать глюкозу.'
        ]
    }
};

const nounsFeelingsStates: { [key: number]: DictItem } = {
    // === БАЗОВЫЕ ЭМОЦИИ ===
    1: {
        glyph: '爱',
        pinyin: 'ài',
        translation: 'любовь',
        classifier: '种',
        examples: [
            '母爱是伟大的。 (Mǔ ài shì wěidà de.) — Материнская любовь велика.',
            '爱情需要信任。 (Àiqíng xūyào xìnrèn.) — Любовь требует доверия.',
            '他心中充满爱。 (Tā xīnzhōng chōngmǎn ài.) — Его сердце полно любви.'
        ]
    },
    2: {
        glyph: '恨',
        pinyin: 'hèn',
        translation: 'ненависть',
        classifier: '种',
        examples: [
            '恨会摧毁心灵。 (Hèn huì cuīhuǐ xīnlíng.) — Ненависть разрушает душу.',
            '不要让恨控制你。 (Búyào ràng hèn kòngzhì nǐ.) — Не позволяй ненависти управлять тобой.',
            '爱与恨只有一线之隔。 (Ài yǔ hèn zhǐ yǒu yī xiàn zhī gé.) — Любовь и ненависть разделены тонкой гранью.'
        ]
    },
    3: {
        glyph: '快乐',
        pinyin: 'kuàilè',
        translation: 'радость',
        classifier: '种',
        examples: [
            '孩子的笑声带来快乐。 (Háizi de xiàoshēng dài lái kuàilè.) — Детский смех приносит радость.',
            '简单的快乐最珍贵。 (Jiǎndān de kuàilè zuì zhēnguì.) — Простая радость самая ценная.',
            '分享快乐会让它加倍。 (Fēnxiǎng kuàilè huì ràng tā jiā bèi.) — Разделившись радостью, ты удвоишь её.'
        ]
    },
    4: {
        glyph: '悲伤',
        pinyin: 'bēishāng',
        translation: 'горе, печаль',
        classifier: '种',
        examples: [
            '失去亲人带来悲伤。 (Shīqù qīnrén dài lái bēishāng.) — Потеря близкого вызывает горе.',
            '他的眼神充满悲伤。 (Tā de yǎnshén chōngmǎn bēishāng.) — Его взгляд полон печали.',
            '时间能治愈悲伤。 (Shíjiān néng zhìyù bēishāng.) — Время лечит горе.'
        ]
    },
    5: {
        glyph: '愤怒',
        pinyin: 'fènnù',
        translation: 'гнев',
        classifier: '种',
        examples: [
            '不公正引发愤怒。 (Bù gōngzhèng yǐnfā fènnù.) — Несправедливость вызывает гнев.',
            '他强忍愤怒。 (Tā qiáng rěn fènnù.) — Он сдерживает гнев.',
            '愤怒时不要做决定。 (Fènnù shí búyào zuò juédìng.) — Не принимай решений в гневе.'
        ]
    },
    6: {
        glyph: '恐惧',
        pinyin: 'kǒngjù',
        translation: 'страх',
        classifier: '种',
        examples: [
            '黑暗中的恐惧。 (Hēi\'àn zhōng de kǒngjù.) — Страх во тьме.',
            '克服恐惧需要勇气。 (Kèfú kǒngjù xūyào yǒngqì.) — Чтобы преодолеть страх, нужна смелость.',
            '未知带来恐惧。 (Wèizhī dài lái kǒngjù.) — Неизвестность порождает страх.'
        ]
    },
    7: {
        glyph: '惊讶',
        pinyin: 'jīngyà',
        translation: 'удивление',
        classifier: '种',
        examples: [
            '他脸上露出惊讶。 (Tā liǎn shàng lùchū jīngyà.) — На его лице появилось удивление.',
            '这个消息令人惊讶。 (Zhège xiāoxī lìng rén jīngyà.) — Эта новость удивляет всех.',
            '惊讶是好奇心的开始。 (Jīngyà shì hàoqí xīn de kāishǐ.) — Удивление — начало любопытства.'
        ]
    },
    8: {
        glyph: '羞耻',
        pinyin: 'xiūchǐ',
        translation: 'стыд',
        classifier: '种',
        examples: [
            '说谎会感到羞耻。 (Shuōhuǎng huì gǎndào xiūchǐ.) — От лжи чувствуешь стыд.',
            '他因自己的行为感到羞耻。 (Tā yīn zìjǐ de xíngwéi gǎndào xiūchǐ.) — Он стыдится своего поведения.',
            '羞耻感是道德的基础。 (Xiūchǐ gǎn shì dàodé de jīchǔ.) — Чувство стыда — основа морали.'
        ]
    },
    9: {
        glyph: '骄傲',
        pinyin: 'jiāo\'ào',
        translation: 'гордость',
        classifier: '种',
        examples: [
            '为祖国感到骄傲。 (Wèi zǔguó gǎndào jiāo\'ào.) — Гордиться своей страной.',
            '合理的骄傲是健康的。 (Hélǐ de jiāo\'ào shì jiànkāng de.) — Здоровая гордость — это нормально.',
            '过度骄傲导致失败。 (Guòdù jiāo\'ào dǎozhì shībài.) — Чрезмерная гордость ведёт к неудаче.'
        ]
    },
    10: {
        glyph: '内疚',
        pinyin: 'nèijiù',
        translation: 'чувство вины',
        classifier: '种',
        examples: [
            '伤害朋友会感到内疚。 (Shānghài péngyou huì gǎndào nèijiù.) — Причинить боль другу — чувствовать вину.',
            '他心中充满内疚。 (Tā xīnzhōng chōngmǎn nèijiù.) — Его сердце полно чувства вины.',
            '内疚能促使人改正错误。 (Nèijiù néng cùshǐ rén gǎizhèng cuòwù.) — Вина может побудить исправить ошибку.'
        ]
    },

    // === СОСТОЯНИЯ ДУШИ ===
    11: {
        glyph: '幸福',
        pinyin: 'xìngfú',
        translation: 'счастье',
        classifier: '种',
        examples: [
            '家庭带来幸福。 (Jiātíng dài lái xìngfú.) — Семья приносит счастье.',
            '幸福在于知足。 (Xìngfú zàiyú zhīzú.) — Счастье — в умении довольствоваться.',
            '真正的幸福是内心的平静。 (Zhēnzhèng de xìngfú shì nèixīn de píngjìng.) — Истинное счастье — душевное спокойствие.'
        ]
    },
    12: {
        glyph: '孤独',
        pinyin: 'gūdú',
        translation: 'одиночество',
        classifier: '种',
        examples: [
            '住在大城市也会感到孤独。 (Zhù zài dà chéngshì yě huì gǎndào gūdú.) — Даже в большом городе можно чувствовать одиночество.',
            '孤独不等于寂寞。 (Gūdú bú děngyú jìmò.) — Одиночество — не то же самое, что тоска.',
            '学会享受孤独。 (Xuéhuì xiǎngshòu gūdú.) — Научись наслаждаться одиночеством.'
        ]
    },
    13: {
        glyph: '焦虑',
        pinyin: 'jiāolǜ',
        translation: 'тревога',
        classifier: '种',
        examples: [
            '考试前感到焦虑。 (Kǎoshì qián gǎndào jiāolǜ.) — Перед экзаменом чувствуешь тревогу.',
            '现代社会充满焦虑。 (Xiàndài shèhuì chōngmǎn jiāolǜ.) — Современное общество полно тревоги.',
            '深呼吸缓解焦虑。 (Shēn hūxī huǎnjiě jiāolǜ.) — Глубокое дыхание снимает тревогу.'
        ]
    },
    14: {
        glyph: '抑郁',
        pinyin: 'yìyù',
        translation: 'депрессия',
        classifier: '种',
        examples: [
            '长期压力可能导致抑郁。 (Chángqī yālì kěnéng dǎozhì yìyù.) — Хронический стресс может привести к депрессии.',
            '抑郁需要专业治疗。 (Yìyù xūyào zhuānyè zhìliáo.) — Депрессия требует профессионального лечения.',
            '不要忽视抑郁的信号。 (Búyào hūshì yìyù de xìnhào.) — Не игнорируй признаки депрессии.'
        ]
    },
    15: {
        glyph: '平静',
        pinyin: 'píngjìng',
        translation: 'спокойствие',
        classifier: '种',
        examples: [
            '湖面很平静。 (Húmiàn hěn píngjìng.) — Поверхность озера спокойна.',
            '内心平静才能思考清楚。 (Nèixīn píngjìng cái néng sīkǎo qīngchu.) — Только в спокойствии можно ясно мыслить.',
            '冥想带来平静。 (Míngxiǎng dài lái píngjìng.) — Медитация приносит спокойствие.'
        ]
    },
    16: {
        glyph: '希望',
        pinyin: 'xīwàng',
        translation: 'надежда',
        classifier: '种',
        examples: [
            '黑暗中仍存希望。 (Hēi\'àn zhōng réng cún xīwàng.) — Даже во тьме остаётся надежда.',
            '孩子是未来的希望。 (Háizi shì wèilái de xīwàng.) — Дети — надежда будущего.',
            '不要放弃希望。 (Búyào fàngqì xīwàng.) — Не теряй надежду.'
        ]
    },
    17: {
        glyph: '绝望',
        pinyin: 'juéwàng',
        translation: 'отчаяние',
        classifier: '种',
        examples: [
            '失去一切时感到绝望。 (Shīqù yīqiè shí gǎndào juéwàng.) — Когда теряешь всё, охватывает отчаяние.',
            '绝望中也能找到出路。 (Juéwàng zhōng yě néng zhǎo dào chūlù.) — Даже в отчаянии можно найти выход.',
            '他的眼神充满绝望。 (Tā de yǎnshén chōngmǎn juéwàng.) — Его взгляд полон отчаяния.'
        ]
    },
    18: {
        glyph: '安心',
        pinyin: 'ānxīn',
        translation: 'уверенность, душевное спокойствие',
        classifier: '种',
        examples: [
            '知道你安全我就安心了。 (Zhīdào nǐ ānquán wǒ jiù ānxīn le.) — Зная, что ты в безопасности, я спокоен.',
            '有保险让人安心。 (Yǒu bǎoxiǎn ràng rén ānxīn.) — Страховка даёт чувство защищённости.',
            '他的承诺让我安心。 (Tā de chéngnuò ràng wǒ ānxīn.) — Его обещание успокаивает меня.'
        ]
    },
    19: {
        glyph: '不安',
        pinyin: 'bù\'ān',
        translation: 'беспокойство',
        classifier: '种',
        examples: [
            '等待结果时感到不安。 (Děngdài jiéguǒ shí gǎndào bù\'ān.) — Ожидая результат, чувствуешь беспокойство.',
            '他的沉默让我很不安。 (Tā de chénmò ràng wǒ hěn bù\'ān.) — Его молчание сильно тревожит меня.',
            '不安是改变的开始。 (Bù\'ān shì gǎibiàn de kāishǐ.) — Беспокойство — начало перемен.'
        ]
    },
    20: {
        glyph: '满足',
        pinyin: 'mǎnzú',
        translation: 'удовлетворённость',
        classifier: '种',
        examples: [
            '简单的生活带来满足。 (Jiǎndān de shēnghuó dài lái mǎnzú.) — Простая жизнь даёт удовлетворённость.',
            '他脸上露出满足的笑容。 (Tā liǎn shàng lùchū mǎnzú de xiàoróng.) — На его лице — довольная улыбка.',
            '知足常乐。 (Zhīzú cháng lè.) — Довольствуйся тем, что имеешь — и будешь счастлив.'
        ]
    },

    // === ФИЗИЧЕСКИЕ СОСТОЯНИЯ ===
    21: {
        glyph: '疼痛',
        pinyin: 'téngtòng',
        translation: 'боль',
        classifier: '种',
        examples: [
            '头痛很常见。 (Tóuténg hěn chángjiàn.) — Головная боль очень распространена.',
            '慢性疼痛影响生活。 (Mànxìng téngtòng yǐngxiǎng shēnghuó.) — Хроническая боль влияет на жизнь.',
            '止痛药缓解疼痛。 (Zhǐtòng yào huǎnjiě téngtòng.) — Обезболивающие снимают боль.'
        ]
    },
    22: {
        glyph: '疲劳',
        pinyin: 'píláo',
        translation: 'усталость',
        classifier: '种',
        examples: [
            '工作一天后感到疲劳。 (Gōngzuò yī tiān hòu gǎndào píláo.) — После рабочего дня чувствуешь усталость.',
            '精神疲劳比身体疲劳更难恢复。 (Jīngshén píláo bǐ shēntǐ píláo gèng nán huīfù.) — Психологическая усталость восстанавливается труднее физической.',
            '充足睡眠消除疲劳。 (Chōngzú shuìmián xiāochú píláo.) — Хороший сон снимает усталость.'
        ]
    },
    23: {
        glyph: '饥饿',
        pinyin: 'jī\'è',
        translation: 'голод',
        classifier: '种',
        examples: [
            '早餐前感到饥饿。 (Zǎocān qián gǎndào jī\'è.) — Перед завтраком чувствуешь голод.',
            '全球仍有饥饿问题。 (Quánqiú réng yǒu jī\'è wèntí.) — В мире до сих пор существует проблема голода.',
            '饥饿是最好的 приправа。 (Jī\'è shì zuì hǎo de tiáoweì.) — Голод — лучшая приправа.'
        ]
    },
    24: {
        glyph: '口渴',
        pinyin: 'kǒukě',
        translation: 'жажда',
        classifier: '种',
        examples: [
            '运动后感到口渴。 (Yùndòng hòu gǎndào kǒukě.) — После тренировки чувствуешь жажду.',
            '沙漠中口渴是致命的。 (Shāmò zhōng kǒukě shì zhìmìng de.) — В пустыне жажда смертельна.',
            '喝水解口渴。 (Hē shuǐ jiě kǒukě.) — Вода утоляет жажду.'
        ]
    },
    25: {
        glyph: '寒冷',
        pinyin: 'hánlěng',
        translation: 'холод (ощущение)',
        classifier: '种',
        examples: [
            '冬天感到寒冷。 (Dōngtiān gǎndào hánlěng.) — Зимой чувствуешь холод.',
            '他的态度很寒冷。 (Tā de tàidu hěn hánlěng.) — Его отношение очень холодное.',
            '多穿衣服抵御寒冷。 (Duō chuān yīfu dǐyù hánlěng.) — Носи больше одежды, чтобы защититься от холода.'
        ]
    },
    26: {
        glyph: '炎热',
        pinyin: 'yánrè',
        translation: 'жара (ощущение)',
        classifier: '种',
        examples: [
            '夏天非常炎热。 (Xiàtiān fēicháng yánrè.) — Летом очень жарко.',
            '炎热的天气让人烦躁。 (Yánrè de tiānqì ràng rén fáozào.) — Жаркая погода вызывает раздражение.',
            '多喝水防止中暑。 (Duō hē shuǐ fángzhǐ zhòngshǔ.) — Пей больше воды, чтобы избежать теплового удара.'
        ]
    },

    // === ПСИХИЧЕСКИЕ И КОГНИТИВНЫЕ СОСТОЯНИЯ ===
    27: {
        glyph: '注意力',
        pinyin: 'zhùyì lì',
        translation: 'внимание',
        classifier: '种',
        examples: [
            '集中注意力学习。 (Jízhōng zhùyì lì xuéxí.) — Сосредоточь внимание на учёбе.',
            '手机分散注意力。 (Shǒujī fēnsàn zhùyì lì.) — Телефон рассеивает внимание.',
            '注意力是成功的关键。 (Zhùyì lì shì chénggōng de guānjiàn.) — Внимание — ключ к успеху.'
        ]
    },
    28: {
        glyph: '记忆力',
        pinyin: 'jìyì lì',
        translation: 'память',
        classifier: '种',
        examples: [
            '老人记忆力下降。 (Lǎorén jìyì lì xiàjiàng.) — У пожилых людей память ухудшается.',
            '训练提高记忆力。 (Xùnliàn tígāo jìyì lì.) — Тренировки улучшают память.',
            '童年回忆很清晰。 (Tóngnián huíyì hěn qīngxī.) — Воспоминания детства очень чёткие.'
        ]
    },
    29: {
        glyph: '好奇心',
        pinyin: 'hàoqí xīn',
        translation: 'любопытство',
        classifier: '种',
        examples: [
            '孩子有强烈的好奇心。 (Háizi yǒu qiángliè de hàoqí xīn.) — У детей сильное любопытство.',
            '好奇心驱使人探索世界。 (Hàoqí xīn qūshǐ rén tànsuǒ shìjiè.) — Любопытство побуждает исследовать мир.',
            '不要扼杀好奇心。 (Búyào èshā hàoqí xīn.) — Не подавляй любопытство.'
        ]
    },
    30: {
        glyph: '自信',
        pinyin: 'zìxìn',
        translation: 'уверенность в себе',
        classifier: '种',
        examples: [
            '自信让人成功。 (Zìxìn ràng rén chénggōng.) — Уверенность ведёт к успеху.',
            '她说话充满自信。 (Tā shuōhuà chōngmǎn zìxìn.) — Она говорит очень уверенно.',
            '自信来自准备和经验。 (Zìxìn láizì zhǔnbèi hé jīngyàn.) — Уверенность рождается из подготовки и опыта.'
        ]
    },
    31: {
        glyph: '自卑',
        pinyin: 'zìbēi',
        translation: 'низкая самооценка',
        classifier: '种',
        examples: [
            '童年经历可能导致自卑。 (Tóngnián jīnglì kěnéng dǎozhì zìbēi.) — Детские переживания могут вызвать низкую самооценку.',
            '自卑影响人际关系。 (Zìbēi yǐngxiǎng rénjì guānxì.) — Низкая самооценка вредит отношениям.',
            '克服自卑需要时间。 (Kèfú zìbēi xūyào shíjiān.) — Чтобы преодолеть низкую самооценку, нужно время.'
        ]
    },
    32: {
        glyph: '耐心',
        pinyin: 'nàixīn',
        translation: 'терпение',
        classifier: '种',
        examples: [
            '教育孩子需要耐心。 (Jiàoyù háizi xūyào nàixīn.) — Воспитание детей требует терпения.',
            '成功属于有耐心的人。 (Chénggōng shǔyú yǒu nàixīn de rén.) — Успех принадлежит терпеливым.',
            '没有耐心就无法完成复杂任务。 (Méiyǒu nàixīn jiù wúfǎ wánchéng fùzá rènwù.) — Без терпения нельзя выполнить сложную задачу.'
        ]
    },
    33: {
        glyph: '信心',
        pinyin: 'xìnxīn',
        translation: 'уверенность (в результате)',
        classifier: '种',
        examples: [
            '他对考试充满信心。 (Tā duì kǎoshì chōngmǎn xìnxīn.) — Он уверен в успешной сдаче экзамена.',
            '你的支持给了我信心。 (Nǐ de zhīchí gěi le wǒ xìnxīn.) — Твоя поддержка дала мне уверенность.',
            '信心是成功的基石。 (Xìnxīn shì chénggōng de jīshí.) — Уверенность — фундамент успеха.'
        ]
    },
    34: {
        glyph: '勇气',
        pinyin: 'yǒngqì',
        translation: 'смелость',
        classifier: '种',
        examples: [
            '面对困难需要勇气。 (Miànduì kùnnán xūyào yǒngqì.) — Чтобы преодолевать трудности, нужна смелость.',
            '他有说出真相的勇气。 (Tā yǒu shuō chū zhēnxiàng de yǒngqì.) — У него хватило смелости сказать правду.',
            '勇气不是没有恐惧，而是战胜恐惧。 (Yǒngqì bú shì méiyǒu kǒngjù, ér shì zhànshèng kǒngjù.) — Смелость — это не отсутствие страха, а победа над ним.'
        ]
    },
    35: {
        glyph: '毅力',
        pinyin: 'yìlì',
        translation: 'настойчивость, упорство',
        classifier: '种',
        examples: [
            '成功需要毅力。 (Chénggōng xūyào yìlì.) — Успех требует настойчивости.',
            '他凭毅力完成了马拉松。 (Tā píng yìlì wánchéng le mǎlāsōng.) — Он завершил марафон благодаря упорству.',
            '毅力比天赋更重要。 (Yìlì bǐ tiānfù gèng zhòngyào.) — Упорство важнее таланта.'
        ]
    },
    36: {
        glyph: '灵感',
        pinyin: 'línggǎn',
        translation: 'вдохновение',
        classifier: '种',
        examples: [
            '音乐带来灵感。 (Yīnyuè dài lái línggǎn.) — Музыка вдохновляет.',
            '作家在旅行中找到灵感。 (Zuòjiā zài lǚxíng zhōng zhǎo dào línggǎn.) — Писатель находит вдохновение в путешествиях.',
            '灵感来自生活。 (Línggǎn láizì shēnghuó.) — Вдохновение рождается из жизни.'
        ]
    },
    37: {
        glyph: '直觉',
        pinyin: 'zhíjué',
        translation: 'интуиция',
        classifier: '种',
        examples: [
            '她凭直觉做了决定。 (Tā píng zhíjué zuò le juédìng.) — Она приняла решение по интуиции.',
            '直觉往往是正确的。 (Zhíjué wǎngwǎng shì zhèngquè de.) — Интуиция часто оказывается права.',
            '相信你的直觉。 (Xiāngxìn nǐ de zhíjué.) — Доверяй своей интуиции.'
        ]
    },
    38: {
        glyph: '意识',
        pinyin: 'yìshí',
        translation: 'сознание',
        classifier: '种',
        examples: [
            '失去意识很危险。 (Shīqù yìshí hěn wēixiǎn.) — Потеря сознания очень опасна.',
            '提高环保意识。 (Tígāo huánbǎo yìshí.) — Повышать экологическое сознание.',
            '意识决定存在。 (Yìshí juédìng cúnzài.) — Сознание определяет бытие.'
        ]
    },
    39: {
        glyph: '潜意识',
        pinyin: 'qiányìshí',
        translation: 'подсознание',
        classifier: '种',
        examples: [
            '潜意识影响行为。 (Qiányìshí yǐngxiǎng xíngwéi.) — Подсознание влияет на поведение.',
            '梦境来自潜意识。 (Mèngjìng láizì qiányìshí.) — Сны рождаются в подсознании.',
            '心理治疗探索潜意识。 (Xīnlǐ zhìliáo tànsuǒ qiányìshí.) — Психотерапия исследует подсознание.'
        ]
    },
    40: {
        glyph: '精神',
        pinyin: 'jīngshén',
        translation: 'дух, психическое состояние',
        classifier: '种',
        examples: [
            '他精神很好。 (Tā jīngshén hěn hǎo.) — Его дух в порядке.',
            '保持积极的精神状态。 (Bǎochí jījí de jīngshén zhuàngtài.) — Сохраняй позитивный настрой.',
            '精神健康和身体健康同样重要。 (Jīngshén jiànkāng hé shēntǐ jiànkāng tóngyàng zhòngyào.) — Душевное здоровье так же важно, как и физическое.'
        ]
    }
};

const nounsApartmentRooms: { [key: number]: DictItem } = {
    1: {
        glyph: '客厅',
        pinyin: 'kètīng',
        translation: 'гостиная',
        classifier: '间',
        examples: [
            '我们在客厅看电视。 (Wǒmen zài kètīng kàn diànshì.) — Мы смотрим телевизор в гостиной.',
            '客厅很大，可以招待客人。 (Kètīng hěn dà, kěyǐ zhāodài kèrén.) — Гостиная большая, можно принимать гостей.',
            '客厅里有沙发和茶几。 (Kètīng lǐ yǒu shāfā hé chájī.) — В гостиной диван и журнальный столик.'
        ]
    },
    2: {
        glyph: '卧室',
        pinyin: 'wòshì',
        translation: 'спальня',
        classifier: '间',
        examples: [
            '我在卧室睡觉。 (Wǒ zài wòshì shuìjiào.) — Я сплю в спальне.',
            '主卧带卫生间。 (Zhǔ wò dài wèishēngjiān.) — Основная спальня с санузлом.',
            '卧室需要安静。 (Wòshì xūyào ānjìng.) — Спальня должна быть тихой.'
        ]
    },
    3: {
        glyph: '厨房',
        pinyin: 'chúfáng',
        translation: 'кухня',
        classifier: '间',
        examples: [
            '她在厨房做饭。 (Tā zài chúfáng zuò fàn.) — Она готовит на кухне.',
            '厨房有冰箱和炉灶。 (Chúfáng yǒu bīngxiāng hé lúzào.) — На кухне есть холодильник и плита.',
            '开放式厨房很流行。 (Kāifàng shì chúfáng hěn liúxíng.) — Кухня открытого типа очень популярна.'
        ]
    },
    4: {
        glyph: '浴室',
        pinyin: 'yùshì',
        translation: 'ванная комната',
        classifier: '间',
        examples: [
            '浴室里有浴缸。 (Yùshì lǐ yǒu yùgāng.) — В ванной есть ванна.',
            '每天在浴室洗澡。 (Měitiān zài yùshì xǐzǎo.) — Каждый день принимаю душ в ванной.',
            '浴室要保持干燥。 (Yùshì yào bǎochí gānzào.) — В ванной нужно поддерживать сухость.'
        ]
    },
    5: {
        glyph: '卫生间',
        pinyin: 'wèishēngjiān',
        translation: 'туалет / санузел',
        classifier: '间',
        examples: [
            '卫生间在走廊尽头。 (Wèishēngjiān zài zǒuláng jìntóu.) — Туалет в конце коридора.',
            '公共卫生间很干净。 (Gōnggòng wèishēngjiān hěn gānjìng.) — Общественный туалет очень чистый.',
            '家里有两个卫生间。 (Jiā lǐ yǒu liǎng gè wèishēngjiān.) — В доме два санузла.'
        ]
    },
    6: {
        glyph: '餐厅',
        pinyin: 'cāntīng',
        translation: 'столовая',
        classifier: '间',
        examples: [
            '我们在餐厅吃饭。 (Wǒmen zài cāntīng chīfàn.) — Мы едим в столовой.',
            '餐厅和厨房连在一起。 (Cāntīng hé chúfáng lián zài yīqǐ.) — Столовая соединена с кухней.',
            '餐厅里有大餐桌。 (Cāntīng lǐ yǒu dà cānzhuō.) — В столовой большой обеденный стол.'
        ]
    },
    7: {
        glyph: '书房',
        pinyin: 'shūfáng',
        translation: 'кабинет / рабочий кабинет',
        classifier: '间',
        examples: [
            '他在书房工作。 (Tā zài shūfáng gōngzuò.) — Он работает в кабинете.',
            '书房里有很多书。 (Shūfáng lǐ yǒu hěn duō shū.) — В кабинете много книг.',
            '我需要一间安静的书房。 (Wǒ xūyào yī jiān ānjìng de shūfáng.) — Мне нужен тихий кабинет.'
        ]
    },
    8: {
        glyph: '阳台',
        pinyin: 'yángtái',
        translation: 'балкон',
        classifier: '个',
        examples: [
            '在阳台晒衣服。 (Zài yángtái shài yīfu.) — Сушить одежду на балконе.',
            '阳台上有花。 (Yángtái shàng yǒu huā.) — На балконе цветы.',
            '封闭式阳台更保暖。 (Fēngbì shì yángtái gèng bǎonuǎn.) — Застеклённый балкон теплее.'
        ]
    },
    9: {
        glyph: '走廊',
        pinyin: 'zǒuláng',
        translation: 'коридор',
        classifier: '条',
        examples: [
            '走廊很窄。 (Zǒuláng hěn zhǎi.) — Коридор очень узкий.',
            '走廊尽头是楼梯。 (Zǒuláng jìntóu shì lóutī.) — В конце коридора лестница.',
            '不要在走廊大声喧哗。 (Búyào zài zǒuláng dàshēng xuānhuá.) — Не шумите громко в коридоре.'
        ]
    },
    10: {
        glyph: '玄关',
        pinyin: 'xuánguān',
        translation: 'прихожая',
        classifier: '个',
        examples: [
            '在玄关换鞋。 (Zài xuánguān huàn xié.) — Меняй обувь в прихожей.',
            '玄关有衣帽架。 (Xuánguān yǒu yīmào jià.) — В прихожей вешалка для одежды.',
            '玄关是家的第一印象。 (Xuánguān shì jiā de dì yī yìnxiàng.) — Прихожая — первое впечатление о доме.'
        ]
    },
    11: {
        glyph: '储藏室',
        pinyin: 'chǔcáng shì',
        translation: 'кладовая',
        classifier: '间',
        examples: [
            '储藏室放杂物。 (Chǔcáng shì fàng záwù.) — В кладовой хранятся вещи.',
            '储藏室在地下室。 (Chǔcáng shì zài dìxiàshì.) — Кладовая в подвале.',
            '定期清理储藏室。 (Dìngqī qīnglǐ chǔcáng shì.) — Регулярно убирай кладовую.'
        ]
    },
    12: {
        glyph: '衣帽间',
        pinyin: 'yīmào jiān',
        translation: 'гардеробная',
        classifier: '间',
        examples: [
            '她的衣帽间很大。 (Tā de yīmào jiān hěn dà.) — Её гардеробная очень большая.',
            '衣帽间放衣服和鞋子。 (Yīmào jiān fàng yīfu hé xiézi.) — В гардеробной одежда и обувь.',
            '豪华公寓有独立衣帽间。 (Háohuá gōngyù yǒu dúlì yīmào jiān.) — В элитной квартире отдельная гардеробная.'
        ]
    },
    13: {
        glyph: '洗衣房',
        pinyin: 'xǐyī fáng',
        translation: 'прачечная',
        classifier: '间',
        examples: [
            '洗衣房有洗衣机。 (Xǐyī fáng yǒu xǐyī jī.) — В прачечной стиральная машина.',
            '公寓楼有公共洗衣房。 (Gōngyù lóu yǒu gōnggòng xǐyī fáng.) — В доме есть общая прачечная.',
            '在洗衣房洗衣服。 (Zài xǐyī fáng xǐ yīfu.) — Стирать одежду в прачечной.'
        ]
    },
    14: {
        glyph: '阁楼',
        pinyin: 'gélóu',
        translation: 'чердак',
        classifier: '间',
        examples: [
            '阁楼改造成书房。 (Gélóu gǎizào chéng shūfáng.) — Чердак переделали под кабинет.',
            '阁楼很热。 (Gélóu hěn rè.) — На чердаке очень жарко.',
            '老房子里有阁楼。 (Lǎo fángzi lǐ yǒu gélóu.) — В старом доме есть чердак.'
        ]
    },
    15: {
        glyph: '地下室',
        pinyin: 'dìxiàshì',
        translation: 'подвал',
        classifier: '间',
        examples: [
            '地下室放酒。 (Dìxiàshì fàng jiǔ.) — В подвале хранят вино.',
            '地下室潮湿。 (Dìxiàshì cháoshī.) — Подвал сыроват.',
            '有些公寓有地下室停车位。 (Yǒuxiē gōngyù yǒu dìxiàshì tíngchē wèi.) — В некоторых квартирах есть парковка в подвале.'
        ]
    },
    16: {
        glyph: '儿童房',
        pinyin: 'értóng fáng',
        translation: 'детская комната',
        classifier: '间',
        examples: [
            '儿童房有玩具和书。 (Értóng fáng yǒu wánjù hé shū.) — В детской игрушки и книги.',
            '儿童房要安全。 (Értóng fáng yào ānquán.) — Детская должна быть безопасной.',
            '他在儿童房睡觉。 (Tā zài értóng fáng shuìjiào.) — Он спит в детской.'
        ]
    },
    17: {
        glyph: '客房',
        pinyin: 'kèfáng',
        translation: 'гостевая комната',
        classifier: '间',
        examples: [
            '家里有客房。 (Jiā lǐ yǒu kèfáng.) — У нас есть гостевая комната.',
            '朋友来住客房。 (Péngyou lái zhù kèfáng.) — Друзья останавливаются в гостевой.',
            '客房收拾得很干净。 (Kèfáng shōushi de hěn gānjìng.) — Гостевая убрана очень чисто.'
        ]
    },
    18: {
        glyph: '健身房',
        pinyin: 'jiànshēnfáng',
        translation: 'тренажёрный зал (домашний)',
        classifier: '间',
        examples: [
            '别墅里有健身房。 (Biéshù lǐ yǒu jiànshēnfáng.) — В вилле есть тренажёрный зал.',
            '在家里的健身房锻炼。 (Zài jiā lǐ de jiànshēnfáng duànliàn.) — Заниматься в домашнем зале.',
            '健身房有跑步机和哑铃。 (Jiànshēnfáng yǒu pǎobù jī hé yǎlíng.) — В зале беговая дорожка и гантели.'
        ]
    },
    19: {
        glyph: '影音室',
        pinyin: 'yǐngyīn shì',
        translation: 'кинотеатр (домашний)',
        classifier: '间',
        examples: [
            '影音室看电影效果很好。 (Yǐngyīn shì kàn diànyǐng xiàoguǒ hěn hǎo.) — В домашнем кинотеатре отличный эффект от фильмов.',
            '高端住宅有影音室。 (Gāoduān zhùzhái yǒu yǐngyīn shì.) — В элитном жилье есть кинозал.',
            '影音室需要隔音。 (Yǐngyīn shì xūyào gēyīn.) — Кинозал нужно звукоизолировать.'
        ]
    },
    20: {
        glyph: '露台',
        pinyin: 'lùtái',
        translation: 'терраса (открытая)',
        classifier: '个',
        examples: [
            '在露台喝咖啡。 (Zài lùtái hē kāfēi.) — Пить кофе на террасе.',
            '露台可以烧烤。 (Lùtái kěyǐ shāokǎo.) — На террасе можно устроить барбекю.',
            '顶楼有大露台。 (Dǐng lóu yǒu dà lùtái.) — На крыше большая терраса.'
        ]
    },
    21: {
        glyph: '天台',
        pinyin: 'tiāntái',
        translation: 'крыша (для доступа)',
        classifier: '个',
        examples: [
            '天台可以晾衣服。 (Tiāntái kěyǐ liàng yīfu.) — На крыше можно сушить одежду.',
            '小心天台边缘。 (Xiǎoxīn tiāntái biānyuán.) — Осторожно у края крыши.',
            '有些大楼天台是开放的。 (Yǒuxiē dàlóu tiāntái shì kāifàng de.) — В некоторых зданиях крыша открыта для доступа.'
        ]
    },
    22: {
        glyph: 'loggia',
        pinyin: 'loggia',
        translation: 'лоджия',
        classifier: '个',
        examples: [
            'лоджия比阳台大。 (Loggia bǐ yángtái dà.) — Лоджия больше балкона.',
            'лоджия可以改造成房间。 (Loggia kěyǐ gǎizào chéng fángjiān.) — Лоджию можно переделать в комнату.',
            'лоджия通常是封闭的。 (Loggia tōngcháng shì fēngbì de.) — Лоджия обычно застеклена.'
        ]
    },
    23: {
        glyph: '门厅',
        pinyin: 'méntīng',
        translation: 'входной холл (в доме/офисе)',
        classifier: '个',
        examples: [
            '门厅有接待处。 (Méntīng yǒu jiēdài chù.) — В холле стойка ресепшн.',
            '豪华公寓的门厅很气派。 (Háohuá gōngyù de méntīng hěn qìpài.) — Входной холл элитной квартиры очень внушительный.',
            '门厅铺了大理石。 (Méntīng pū le dàlǐshí.) — Холл выложен мрамором.'
        ]
    },
    24: {
        glyph: '工作室',
        pinyin: 'gōngzuò shì',
        translation: 'мастерская / рабочая студия',
        classifier: '间',
        examples: [
            '画家的工作室。 (Huàjiā de gōngzuò shì.) — Мастерская художника.',
            '她在工作室做手工。 (Tā zài gōngzuò shì zuò shǒugōng.) — Она делает поделки в мастерской.',
            '音乐人的工作室。 (Yīnyuè rén de gōngzuò shì.) — Студия музыканта.'
        ]
    },
    25: {
        glyph: '阳光房',
        pinyin: 'yángguāng fáng',
        translation: 'зимний сад / светлая пристройка',
        classifier: '间',
        examples: [
            '阳光房种满了植物。 (Yángguāng fáng zhòng mǎn le zhíwù.) — В зимнем саду полно растений.',
            '阳光房很明亮。 (Yángguāng fáng hěn míngliàng.) — Зимний сад очень светлый.',
            '冬天在阳光房晒太阳。 (Dōngtiān zài yángguāng fáng shài tàiyáng.) — Зимой загорать в зимнем саду.'
        ]
    }
};

const nounsKitchenItems: { [key: number]: DictItem } = {
    // === РЕЖУЩИЕ ИНСТРУМЕНТЫ ===
    1: {
        glyph: '刀',
        pinyin: 'dāo',
        translation: 'нож',
        classifier: '把',
        examples: [
            '用刀切菜。 (Yòng dāo qiē cài.) — Резать овощи ножом.',
            '这把刀很锋利。 (Zhè bǎ dāo hěn fēnglì.) — Этот нож очень острый.',
            '厨房里有水果刀和菜刀。 (Chúfáng lǐ yǒu shuǐguǒ dāo hé càidāo.) — На кухне есть нож для фруктов и поварской нож.'
        ]
    },
    2: {
        glyph: '菜刀',
        pinyin: 'càidāo',
        translation: 'поварской нож',
        classifier: '把',
        examples: [
            '菜刀用来切肉和蔬菜。 (Càidāo yòng lái qiē ròu hé shūcài.) — Поварской нож для резки мяса и овощей.',
            '中式菜刀很重。 (Zhōngshì càidāo hěn zhòng.) — Китайский поварской нож очень тяжёлый.',
            '磨菜刀保持锋利。 (Mó càidāo bǎochí fēnglì.) — Затачивать нож, чтобы он оставался острым.'
        ]
    },
    3: {
        glyph: '剪刀',
        pinyin: 'jiǎndāo',
        translation: 'ножницы',
        classifier: '把',
        examples: [
            '用剪刀剪开包装。 (Yòng jiǎndāo jiǎn kāi bāozhuāng.) — Разрезать упаковку ножницами.',
            '厨房剪刀剪鱼。 (Chúfáng jiǎndāo jiǎn yú.) — Кухонные ножницы для разделки рыбы.',
            '这把剪刀很钝。 (Zhè bǎ jiǎndāo hěn dùn.) — Эти ножницы очень тупые.'
        ]
    },

    // === ПОСУДА ДЛЯ ГОТОВКИ ===
    4: {
        glyph: '锅',
        pinyin: 'guō',
        translation: 'кастрюля / сковорода',
        classifier: '口',
        examples: [
            '用锅煮汤。 (Yòng guō zhǔ tāng.) — Варить суп в кастрюле.',
            '不粘锅很好用。 (Bù zhān guō hěn hǎo yòng.) — Антипригарная сковорода очень удобна.',
            '铁锅炒菜香。 (Tiě guō chǎo cài xiāng.) — В чугунной сковороде еда вкуснее.'
        ]
    },
    5: {
        glyph: '炒锅',
        pinyin: 'chǎoguō',
        translation: 'сковорода для жарки',
        classifier: '口',
        examples: [
            '用炒锅炒菜。 (Yòng chǎoguō chǎo cài.) — Жарить овощи на сковороде.',
            '中式炒锅是圆底的。 (Zhōngshì chǎoguō shì yuán dǐ de.) — Китайская сковорода с круглым дном.',
            '炒锅需要保养。 (Chǎoguō xūyào bǎoyǎng.) — Сковороду нужно ухаживать.'
        ]
    },
    6: {
        glyph: '汤锅',
        pinyin: 'tāngguō',
        translation: 'кастрюля для супа',
        classifier: '口',
        examples: [
            '汤锅有盖子。 (Tāngguō yǒu gàizi.) — У кастрюли есть крышка.',
            '用汤锅煮面条。 (Yòng tāngguō zhǔ miàntiáo.) — Варить лапшу в кастрюле.',
            '不锈钢汤锅很耐用。 (Bùxiùgāng tāngguō hěn nàiyòng.) — Кастрюля из нержавейки очень прочная.'
        ]
    },
    7: {
        glyph: '平底锅',
        pinyin: 'píngdǐ guō',
        translation: 'сковорода с плоским дном',
        classifier: '口',
        examples: [
            '用平底锅煎蛋。 (Yòng píngdǐ guō jiān dàn.) — Жарить яичницу на сковороде.',
            '平底锅适合煎牛排。 (Píngdǐ guō shìhé jiān niúpái.) — Сковорода подходит для стейков.',
            '不粘平底锅容易清洗。 (Bù zhān píngdǐ guō róngyì qīngxǐ.) — Антипригарная сковорода легко моется.'
        ]
    },

    // === ИНСТРУМЕНТЫ ДЛЯ ГОТОВКИ ===
    8: {
        glyph: '铲子',
        pinyin: 'chǎnzi',
        translation: 'ломтик / лопатка для переворачивания',
        classifier: '把',
        examples: [
            '用铲子翻煎饼。 (Yòng chǎnzi fān jiānbǐng.) — Переворачивать блин лопаткой.',
            '木铲子不伤锅。 (Mù chǎnzi bù shāng guō.) — Деревянная лопатка не царапает сковороду.',
            '硅胶铲子耐高温。 (Guījiāo chǎnzi nài gāowēn.) — Силиконовая лопатка термостойкая.'
        ]
    },
    9: {
        glyph: '勺子',
        pinyin: 'sháozi',
        translation: 'ложка (кухонная)',
        classifier: '把',
        examples: [
            '用勺子舀汤。 (Yòng sháozi yǎo tāng.) — Черпать суп ложкой.',
            '木勺子搅拌粥。 (Mù sháozi jiǎobàn zhōu.) — Мешать кашу деревянной ложкой.',
            '不锈钢勺子很亮。 (Bùxiùgāng sháozi hěn liàng.) — Ложка из нержавейки блестит.'
        ]
    },
    10: {
        glyph: '漏勺',
        pinyin: 'lòu sháo',
        translation: 'половник с дырками',
        classifier: '把',
        examples: [
            '用漏勺捞面条。 (Yòng lòu sháo lāo miàntiáo.) — Доставать лапшу из воды половником.',
            '漏勺沥干水。 (Lòu sháo lìgān shuǐ.) — Положить продукт в дуршлаг, чтобы стекла вода.',
            '炸东西用漏勺。 (Zhá dōngxi yòng lòu sháo.) — Для жарки во фритюре используется дырявый половник.'
        ]
    },
    11: {
        glyph: '打蛋器',
        pinyin: 'dǎ dàn qì',
        translation: 'венчик',
        classifier: '个',
        examples: [
            '用打蛋器搅拌鸡蛋。 (Yòng dǎ dàn qì jiǎobàn jīdàn.) — Взбивать яйца венчиком.',
            '电动打蛋器更省力。 (Diàndòng dǎ dàn qì gèng shěng lì.) — Электрический венчик экономит силы.',
            '打蛋器可以打发奶油。 (Dǎ dàn qì kěyǐ dǎfā nuǎn yóu.) — Венчиком можно взбивать сливки.'
        ]
    },

    // === ПОСУДА ДЛЯ ПОДАЧИ ===
    12: {
        glyph: '碗',
        pinyin: 'wǎn',
        translation: 'миска / чашка (для риса, супа)',
        classifier: '个',
        examples: [
            '一碗米饭。 (Yī wǎn mǐfàn.) — Миска риса.',
            '汤在碗里。 (Tāng zài wǎn lǐ.) — Суп в миске.',
            '陶瓷碗很常见。 (Táocí wǎn hěn chángjiàn.) — Керамические миски очень распространены.'
        ]
    },
    13: {
        glyph: '盘子',
        pinyin: 'pánzi',
        translation: 'тарелка',
        classifier: '个',
        examples: [
            '一个盘子放肉。 (Yī gè pánzi fàng ròu.) — На одной тарелке мясо.',
            '大盘子装水果。 (Dà pánzi zhuāng shuǐguǒ.) — Большая тарелка для фруктов.',
            '盘子要洗干净。 (Pánzi yào xǐ gānjìng.) — Тарелки нужно хорошо помыть.'
        ]
    },
    14: {
        glyph: '杯子',
        pinyin: 'bēizi',
        translation: 'стакан / чашка',
        classifier: '个',
        examples: [
            '一杯水。 (Yī bēi shuǐ.) — Стакан воды.',
            '玻璃杯子很透明。 (Bōli bēizi hěn tòumíng.) — Стеклянный стакан очень прозрачный.',
            '用杯子喝茶。 (Yòng bēizi hē chá.) — Пить чай из чашки.'
        ]
    },

    // === ХРАНЕНИЕ И ОРГАНИЗАЦИЯ ===
    15: {
        glyph: '调料瓶',
        pinyin: 'tiáoliào píng',
        translation: 'бутылка для приправ',
        classifier: '个',
        examples: [
            '调料瓶装酱油。 (Tiáoliào píng zhuāng jiàngyóu.) — Бутылка для соевого соуса.',
            '玻璃调料瓶很好看。 (Bōli tiáoliào píng hěn hǎokàn.) — Стеклянные бутылочки красивы.',
            '调料瓶要密封。 (Tiáoliào píng yào mìfēng.) — Бутылки для приправ должны быть герметичными.'
        ]
    },
    16: {
        glyph: '保鲜盒',
        pinyin: 'bǎoxiān hé',
        translation: 'контейнер для хранения',
        classifier: '个',
        examples: [
            '用保鲜盒存剩菜。 (Yòng bǎoxiān hé cún shèng cài.) — Хранить остатки еды в контейнере.',
            '保鲜盒是塑料的。 (Bǎoxiān hé shì sùliào de.) — Контейнеры пластиковые.',
            '保鲜盒可以进微波炉。 (Bǎoxiān hé kěyǐ jìn wéibōlú.) — Контейнеры можно использовать в микроволновке.'
        ]
    },

    // === КУХОННАЯ ТЕХНИКА ===
    17: {
        glyph: '冰箱',
        pinyin: 'bīngxiāng',
        translation: 'холодильник',
        classifier: '台',
        examples: [
            '冰箱里有牛奶。 (Bīngxiāng lǐ yǒu niúnǎi.) — В холодильнике молоко.',
            '双门冰箱容量大。 (Shuāng mén bīngxiāng róngliàng dà.) — Двухдверный холодильник большой ёмкости.',
            '定期清理冰箱。 (Dìngqī qīnglǐ bīngxiāng.) — Регулярно убирай холодильник.'
        ]
    },
    18: {
        glyph: '炉灶',
        pinyin: 'lúzào',
        translation: 'плита',
        classifier: '台',
        examples: [
            '炉灶有四个火眼。 (Lúzào yǒu sì gè huǒ yǎn.) — Плита имеет четыре конфорки.',
            '燃气炉灶火力猛。 (Ránqì lúzào huǒlì měng.) — Газовая плита даёт мощный огонь.',
            '电磁炉灶很安全。 (Diàncí lúzào hěn ānquán.) — Индукционная плита очень безопасна.'
        ]
    },
    19: {
        glyph: '微波炉',
        pinyin: 'wéibōlú',
        translation: 'микроволновая печь',
        classifier: '台',
        examples: [
            '用微波炉热饭。 (Yòng wéibōlú rè fàn.) — Подогревать еду в микроволновке.',
            '微波炉加热很快。 (Wéibōlú jiārè hěn kuài.) — Микроволновка греет очень быстро.',
            '不要用金属碗进微波炉。 (Búyào yòng jīnshǔ wǎn jìn wéibōlú.) — Не клади металлическую посуду в микроволновку.'
        ]
    },
    20: {
        glyph: '烤箱',
        pinyin: 'kǎoxiāng',
        translation: 'духовка',
        classifier: '台',
        examples: [
            '用烤箱烤蛋糕。 (Yòng kǎoxiāng kǎo dàngāo.) — Выпекать торт в духовке.',
            '嵌入式烤箱很节省空间。 (Qiànrù shì kǎoxiāng hěn jiéshěng kōngjiān.) — Встраиваемая духовка экономит место.',
            '烤箱温度可以调节。 (Kǎoxiāng wēndù kěyǐ tiáojié.) — Температуру духовки можно регулироватъ.'
        ]
    },
    21: {
        glyph: '电饭煲',
        pinyin: 'diànfànbāo',
        translation: 'мультиварка / рисоварка',
        classifier: '个',
        examples: [
            '用电饭煲煮饭。 (Yòng diànfànbāo zhǔ fàn.) — Варить рис в рисоварке.',
            '电饭煲也可以煲汤。 (Diànfànbāo yě kěyǐ bāo tāng.) — В мультиварке можно варить суп.',
            '智能电饭煲有预约功能。 (Zhìnéng diànfànbāo yǒu yùyuē gōngnéng.) — Умная рисоварка имеет функцию таймера.'
        ]
    },
    22: {
        glyph: '榨汁机',
        pinyin: 'zhà jiū jī',
        translation: 'соковыжималка',
        classifier: '台',
        examples: [
            '用榨汁机榨橙汁。 (Yòng zhà jiū jī zhà chéng zhī.) — Выжимать апельсиновый сок.',
            '榨汁机清洗有点麻烦。 (Zhà jiū jī qīngxǐ yǒudiǎn máfan.) — Соковыжималку немного сложно мыть.',
            '每天喝鲜榨果汁。 (Měitiān hē xiān zhà guǒzhī.) — Каждый день пить свежевыжатый сок.'
        ]
    },
    23: {
        glyph: '洗碗机',
        pinyin: 'xǐwǎn jī',
        translation: 'посудомоечная машина',
        classifier: '台',
        examples: [
            '洗碗机可以洗很多碗。 (Xǐwǎn jī kěyǐ xǐ hěn duō wǎn.) — Посудомойка может вымыть много тарелок.',
            '洗碗机省水省力。 (Xǐwǎn jī shěng shuǐ shěng lì.) — Посудомойка экономит воду и силы.',
            '高端厨房有洗碗机。 (Gāoduān chúfáng yǒu xǐwǎn jī.) — На кухне премиум-класса есть посудомойка.'
        ]
    },

    // === ПРОЧИЕ ПРЕДМЕТЫ ===
    24: {
        glyph: '砧板',
        pinyin: 'zhēnbǎn',
        translation: 'разделочная доска',
        classifier: '块',
        examples: [
            '用砧板切菜。 (Yòng zhēnbǎn qiē cài.) — Резать овощи на доске.',
            '木砧板要防霉。 (Mù zhēnbǎn yào fáng méi.) — Деревянную доску нужно защищать от плесени.',
            '生熟食要用不同砧板。 (Shēng shú shí yào yòng bùtóng zhēnbǎn.) — Для сырого и готового — разные доски.'
        ]
    },
    25: {
        glyph: '锅盖',
        pinyin: 'guō gài',
        translation: 'крышка от кастрюли',
        classifier: '个',
        examples: [
            '盖上锅盖煮汤。 (Gàishàng guō gài zhǔ tāng.) — Накрывать кастрюлю крышкой при варке.',
            '玻璃锅盖可以看到里面。 (Bōli guō gài kěyǐ kàn dào lǐmiàn.) — Через стеклянную крышку видно содержимое.',
            '锅盖要和锅匹配。 (Guō gài yào hé guō pǐpèi.) — Крышка должна подходить к кастрюле.'
        ]
    },
    26: {
        glyph: '开瓶器',
        pinyin: 'kāi píng qì',
        translation: 'открывалка',
        classifier: '个',
        examples: [
            '用开瓶器开啤酒。 (Yòng kāi píng qì kāi píjiǔ.) — Открывать пиво открывалкой.',
            '红酒开瓶器很精致。 (Hóngjiǔ kāi píng qì hěn jīngzhì.) — Открывалка для вина очень изящная.',
            '厨房抽屉里有开瓶器。 (Chúfáng chōuti lǐ yǒu kāi píng qì.) — В кухонном ящике есть открывалка.'
        ]
    }
};

const nounsFurniture: { [key: number]: DictItem } = {
    // === МЯГКАЯ МЕБЕЛЬ ===
    1: {
        glyph: '沙发',
        pinyin: 'shāfā',
        translation: 'диван',
        classifier: '张',
        examples: [
            '客厅里有一张沙发。 (Kètīng lǐ yǒu yī zhāng shāfā.) — В гостиной один диван.',
            '皮沙发很舒服。 (Pí shāfā hěn shūfu.) — Кожаный диван очень удобный.',
            '沙发需要定期清洁。 (Shāfā xūyào dìngqī qīngjié.) — Диван нужно регулярно чистить.'
        ]
    },
    2: {
        glyph: '扶手椅',
        pinyin: 'fúshǒu yǐ',
        translation: 'кресло с подлокотниками',
        classifier: '把',
        examples: [
            '他在扶手椅上看书。 (Tā zài fúshǒu yǐ shàng kàn shū.) — Он читает в кресле.',
            '扶手椅很舒适。 (Fúshǒu yǐ hěn shūshì.) — Кресло очень комфортное.',
            '阳台放了一把扶手椅。 (Yángtái fàng le yī bǎ fúshǒu yǐ.) — На балконе стоит кресло.'
        ]
    },
    3: {
        glyph: '躺椅',
        pinyin: 'tǎng yǐ',
        translation: 'лежак / шезлонг',
        classifier: '把',
        examples: [
            '在躺椅上晒太阳。 (Zài tǎng yǐ shàng shài tàiyáng.) — Загорать на лежаке.',
            '露台有两把躺椅。 (Lùtái yǒu liǎng bǎ tǎng yǐ.) — На террасе два шезлонга.',
            '躺椅可以调节角度。 (Tǎng yǐ kěyǐ tiáojié jiǎodù.) — Угол наклона лежака регулируется.'
        ]
    },

    // === СТОЛЫ ===
    4: {
        glyph: '桌子',
        pinyin: 'zhuōzi',
        translation: 'стол',
        classifier: '张',
        examples: [
            '餐厅有一张大桌子。 (Cāntīng yǒu yī zhāng dà zhuōzi.) — В столовой большой стол.',
            '写字桌很整洁。 (Xiězì zhuō hěn zhěngjié.) — Письменный стол очень аккуратный.',
            '木桌子很耐用。 (Mù zhuōzi hěn nàiyòng.) — Деревянный стол очень прочный.'
        ]
    },
    5: {
        glyph: '茶几',
        pinyin: 'chájī',
        translation: 'журнальный столик',
        classifier: '张',
        examples: [
            '沙发前有茶几。 (Shāfā qián yǒu chájī.) — Перед диваном журнальный столик.',
            '茶几上放着书和茶杯。 (Chájī shàng fàng zhe shū hé cháybēi.) — На столике лежат книга и чашка чая.',
            '玻璃茶几很现代。 (Bōli chájī hěn xiàndài.) — Стеклянный журнальный столик очень современный.'
        ]
    },
    6: {
        glyph: '餐桌',
        pinyin: 'cānzhuō',
        translation: 'обеденный стол',
        classifier: '张',
        examples: [
            '六人餐桌适合大家庭。 (Liù rén cānzhuō shìhé dà jiātíng.) — Стол на шесть человек подходит большой семье.',
            '可折叠餐桌节省空间。 (Kě zhédié cānzhuō jiéshěng kōngjiān.) — Складной обеденный стол экономит место.',
            '餐桌是实木的。 (Cānzhuō shì shí mù de.) — Обеденный стол из натурального дерева.'
        ]
    },
    7: {
        glyph: '书桌',
        pinyin: 'shūzhuō',
        translation: 'письменный стол',
        classifier: '张',
        examples: [
            '孩子在书桌前写作业。 (Háizi zài shūzhuō qián xiě zuòyè.) — Ребёнок делает уроки за письменным столом.',
            '书桌有抽屉。 (Shūzhuō yǒu chōuti.) — У письменного стола есть ящики.',
            '我的书桌很乱。 (Wǒ de shūzhuō hěn luàn.) — Мой письменный стол очень захламлён.'
        ]
    },
    8: {
        glyph: '咖啡桌',
        pinyin: 'kāfēi zhuō',
        translation: 'кофейный столик',
        classifier: '张',
        examples: [
            '咖啡桌上放着杂志。 (Kāfēi zhuō shàng fàng zhe zázhì.) — На кофейном столике журналы.',
            '小客厅适合放咖啡桌。 (Xiǎo kètīng shìhé fàng kāfēi zhuō.) — В небольшой гостиной уместен кофейный столик.',
            '玻璃咖啡桌显得轻盈。 (Bōli kāfēi zhuō xiǎnde qīngyíng.) — Стеклянный кофейный столик выглядит легко.'
        ]
    },

    // === СТУЛЬЯ ===
    9: {
        glyph: '椅子',
        pinyin: 'yǐzi',
        translation: 'стул',
        classifier: '把',
        examples: [
            '餐厅有六把椅子。 (Cāntīng yǒu liù bǎ yǐzi.) — В столовой шесть стульев.',
            '木椅子很结实。 (Mù yǐzi hěn jiēshi.) — Деревянный стул очень крепкий.',
            '请坐这把椅子。 (Qǐng zuò zhè bǎ yǐzi.) — Пожалуйста, садитесь на этот стул.'
        ]
    },
    10: {
        glyph: '餐椅',
        pinyin: 'cān yǐ',
        translation: 'стул для столовой',
        classifier: '把',
        examples: [
            '餐椅和餐桌配套。 (Cān yǐ hé cānzhuō pèitào.) — Стулья и стол идут в комплекте.',
            '皮餐椅很舒适。 (Pí cān yǐ hěn shūshì.) — Кожаные стулья очень удобны.',
            '儿童餐椅有安全带。 (Értóng cān yǐ yǒu ānquán dài.) — Детские стулья оснащены ремнями безопасности.'
        ]
    },
    11: {
        glyph: '吧台椅',
        pinyin: 'bātái yǐ',
        translation: 'барный стул',
        classifier: '把',
        examples: [
            '厨房吧台有三把吧台椅。 (Chúfáng bātái yǒu sān bǎ bātái yǐ.) — У кухонного барной стойки три барных стула.',
            '吧台椅可以调节高度。 (Bātái yǐ kěyǐ tiáojié gāodù.) — Высота барного стула регулируется.',
            '旋转吧台椅很有趣。 (Xuánzhuǎn bātái yǐ hěn yǒuqù.) — Вращающийся барный стул очень интересен.'
        ]
    },

    // === ШКАФЫ И ХРАНЕНИЕ ===
    12: {
        glyph: '衣柜',
        pinyin: 'yīguì',
        translation: 'гардероб / шкаф для одежды',
        classifier: '个',
        examples: [
            '卧室里有一个大衣柜。 (Wòshì lǐ yǒu yī gè dà yīguì.) — В спальне большой шкаф для одежды.',
            '推拉门衣柜节省空间。 (Tuīlā mén yīguì jiéshěng kōngjiān.) — Шкаф с раздвижными дверями экономит место.',
            '衣柜里挂满了衣服。 (Yīguì lǐ guà mǎn le yīfu.) — В гардеробе полно одежды.'
        ]
    },
    13: {
        glyph: '书柜',
        pinyin: 'shūguì',
        translation: 'книжный шкаф',
        classifier: '个',
        examples: [
            '书房里有书柜。 (Shūfáng lǐ yǒu shūguì.) — В кабинете книжный шкаф.',
            '书柜放满了书。 (Shūguì fàng mǎn le shū.) — Книжный шкаф забит книгами.',
            '玻璃门书柜防尘。 (Bōli mén shūguì fáng chén.) — Шкаф со стеклянными дверцами защищает от пыли.'
        ]
    },
    14: {
        glyph: '橱柜',
        pinyin: 'chúguì',
        translation: 'кухонный шкаф',
        classifier: '个',
        examples: [
            '橱柜里放着碗碟。 (Chúguì lǐ fàng zhe wǎndié.) — В кухонном шкафу посуда.',
            '吊柜是橱柜的一种。 (Diàoguì shì chúguì de yī zhǒng.) — Навесной шкаф — вид кухонного шкафа.',
            '整体橱柜很流行。 (Zhěngtǐ chúguì hěn liúxíng.) — Встроенные кухонные гарнитуры очень популярны.'
        ]
    },
    15: {
        glyph: '鞋柜',
        pinyin: 'xiéguì',
        translation: 'обувница',
        classifier: '个',
        examples: [
            '玄关有鞋柜。 (Xuánguān yǒu xiéguì.) — В прихожей обувница.',
            '鞋柜可以放很多双鞋。 (Xiéguì kěyǐ fàng hěn duō shuāng xié.) — В обувнице помещается много пар обуви.',
            '带镜子的鞋柜很方便。 (Dài jìngzi de xiéguì hěn fāngbiàn.) — Обувница со зеркалом очень удобна.'
        ]
    },
    16: {
        glyph: '储物柜',
        pinyin: 'chǔwù guì',
        translation: 'шкаф для хранения',
        classifier: '个',
        examples: [
            '地下室有储物柜。 (Dìxiàshì yǒu chǔwù guì.) — В подвале шкаф для хранения.',
            '储物柜放杂物。 (Chǔwù guì fàng záwù.) — В шкафу хранятся разные вещи.',
            '塑料储物柜很轻便。 (Sùliào chǔwù guì hěn qīngbiàn.) — Пластиковый шкаф для хранения очень лёгкий.'
        ]
    },

    // === КРОВАТИ ===
    17: {
        glyph: '床',
        pinyin: 'chuáng',
        translation: 'кровать',
        classifier: '张',
        examples: [
            '卧室有一张大床。 (Wòshì yǒu yī zhāng dà chuáng.) — В спальне большая кровать.',
            '双人床适合夫妻。 (Shuāngrén chuáng shìhé fūqī.) — Двуспальная кровать подходит супружеской паре.',
            '床很舒服。 (Chuáng hěn shūfu.) — Кровать очень удобная.'
        ]
    },
    18: {
        glyph: '单人床',
        pinyin: 'dānrén chuáng',
        translation: 'односпальная кровать',
        classifier: '张',
        examples: [
            '儿童房有单人床。 (Értóng fáng yǒu dānrén chuáng.) — В детской односпальная кровать.',
            '宿舍里是单人床。 (Sùshè lǐ shì dānrén chuáng.) — В общежитии односпальные кровати.',
            '单人床节省空间。 (Dānrén chuáng jiéshěng kōngjiān.) — Односпальная кровать экономит место.'
        ]
    },
    19: {
        glyph: '双人床',
        pinyin: 'shuāngrén chuáng',
        translation: 'двуспальная кровать',
        classifier: '张',
        examples: [
            '主卧有双人床。 (Zhǔ wò yǒu shuāngrén chuáng.) — В основной спальне двуспальная кровать.',
            '双人床很宽。 (Shuāngrén chuáng hěn kuān.) — Двуспальная кровать очень широкая.',
            '双人床带床垫。 (Shuāngrén chuáng dài chuángdǎn.) — Двуспальная кровать с матрасом.'
        ]
    },
    20: {
        glyph: '床垫',
        pinyin: 'chuángdǎn',
        translation: 'матрас',
        classifier: '个',
        examples: [
            '新床垫很舒服。 (Xīn chuángdǎn hěn shūfu.) — Новый матрас очень удобный.',
            '记忆棉床垫支撑性好。 (Jìyì mián chuángdǎn zhīchēng xìng hǎo.) — Матрас с мемори-пенным наполнителем хорошо поддерживает тело.',
            '床垫要定期翻面。 (Chuángdǎn yào dìngqī fān miàn.) — Матрас нужно регулярно переворачивать.'
        ]
    },

    // === ПРИСТАВНЫЕ ПРЕДМЕТЫ ===
    21: {
        glyph: '床头柜',
        pinyin: 'chuángtóu guì',
        translation: 'тумбочка',
        classifier: '个',
        examples: [
            '床边有两个床头柜。 (Chuáng biān yǒu liǎng gè chuángtóu guì.) — У кровати две тумбочки.',
            '床头柜上放着台灯。 (Chuángtóu guì shàng fàng zhe táidēng.) — На тумбочке настольная лампа.',
            '床头柜有抽屉。 (Chuángtóu guì yǒu chōuti.) — В тумбочке ящики.'
        ]
    },
    22: {
        glyph: '屏风',
        pinyin: 'píngfēng',
        translation: 'ширма',
        classifier: '个',
        examples: [
            '屏风隔开客厅和餐厅。 (Píngfēng gé kāi kètīng hé cāntīng.) — Ширма разделяет гостиную и столовую.',
            '中式屏风很有艺术感。 (Zhōngshì píngfēng hěn yǒu yìshù gǎn.) — Китайская ширма очень художественна.',
            '折叠屏风方便移动。 (Zhédié píngfēng fāngbiàn yídòng.) — Складная ширма легко перемещается.'
        ]
    },
    23: {
        glyph: '衣帽架',
        pinyin: 'yīmào jià',
        translation: 'вешалка (напольная)',
        classifier: '个',
        examples: [
            '玄关有衣帽架。 (Xuánguān yǒu yīmào jià.) — В прихожей вешалка.',
            '衣帽架挂外套和帽子。 (Yīmào jià guà wàitào hé màozi.) — На вешалке пальто и шляпы.',
            '金属衣帽架很结实。 (Jīnshǔ yīmào jià hěn jiēshi.) — Металлическая вешалка очень прочная.'
        ]
    },
    24: {
        glyph: '鞋架',
        pinyin: 'xié jià',
        translation: 'полка для обуви',
        classifier: '个',
        examples: [
            '鞋架在门后。 (Xié jià zài mén hòu.) — Полка для обуви за дверью.',
            '多层鞋架节省空间。 (Duō céng xié jià jiéshěng kōngjiān.) — Многоярусная полка экономит место.',
            '塑料鞋架很便宜。 (Sùliào xié jià hěn piányi.) — Пластиковая полка для обуви очень дешёвая.'
        ]
    },

    // === КОМПЛЕКТЫ МЕБЕЛИ ===
    25: {
        glyph: '家具',
        pinyin: 'jiājù',
        translation: 'мебель (в целом)',
        classifier: '套',
        examples: [
            '新房子要买家具。 (Xīn fángzi yào mǎi jiājù.) — Для новой квартиры нужно купить мебель.',
            '这套家具很现代。 (Zhè tào jiājù hěn xiàndài.) — Этот комплект мебели очень современный.',
            '实木家具有质感。 (Shí mù jiājù yǒu zhìgǎn.) — Мебель из натурального дерева имеет текстуру.'
        ]
    }
};

const nounsHouseholdItems: { [key: number]: DictItem } = {
    // === КЛЮЧИ И ЗАМКИ ===
    1: {
        glyph: '钥匙',
        pinyin: 'yàoshi',
        translation: 'ключ',
        classifier: '把',
        examples: [
            '我把钥匙忘在家里了。 (Wǒ bǎ yàoshi wàng zài jiā lǐ le.) — Я забыл ключ дома.',
            '这把钥匙开大门。 (Zhè bǎ yàoshi kāi dàmén.) — Этот ключ от входной двери.',
            '备用钥匙放在安全的地方。 (Bèiyòng yàoshi fàng zài ānquán de dìfāng.) — Запасной ключ хранится в безопасном месте.'
        ]
    },
    2: {
        glyph: '锁',
        pinyin: 'suǒ',
        translation: 'замок',
        classifier: '把',
        examples: [
            '门上装了新锁。 (Mén shàng zhuāng le xīn suǒ.) — На дверь поставили новый замок.',
            '电子锁很安全。 (Diànzǐ suǒ hěn ānquán.) — Электронный замок очень безопасен.',
            '不要忘记锁门。 (Búyào wàngjì suǒ mén.) — Не забудь запереть дверь.'
        ]
    },

    // === ОСВЕЩЕНИЕ ===
    3: {
        glyph: '灯',
        pinyin: 'dēng',
        translation: 'лампа / светильник',
        classifier: '盏',
        examples: [
            '天花板上有一盏灯。 (Tiānhuābǎn shàng yǒu yī zhǎn dēng.) — На потолке одна лампа.',
            '台灯放在书桌上。 (Táidēng fàng zài shūzhuō shàng.) — Настольная лампа на письменном столе.',
            '节能灯省电。 (Jiénéng dēng shěng diàn.) — Энергосберегающая лампа экономит электричество.'
        ]
    },
    4: {
        glyph: '台灯',
        pinyin: 'táidēng',
        translation: 'настольная лампа',
        classifier: '盏',
        examples: [
            '晚上用台灯看书。 (Wǎnshàng yòng táidēng kàn shū.) — Читать вечером при настольной лампе.',
            '可调光台灯很实用。 (Kě tiáoguāng táidēng hěn shíyòng.) — Регулируемая по яркости лампа очень практична.',
            '台灯有保护眼睛的功能。 (Táidēng yǒu bǎohù yǎnjīng de gōngnéng.) — Настольная лампа имеет функцию защиты глаз.'
        ]
    },
    5: {
        glyph: '灯泡',
        pinyin: 'dēngpào',
        translation: 'лампочка',
        classifier: '个',
        examples: [
            '灯泡坏了，需要更换。 (Dēngpào huài le, xūyào gēnghuàn.) — Лампочка перегорела, нужно заменить.',
            'LED灯泡寿命长。 (LED dēngpào shòumìng cháng.) — Светодиодные лампочки долго служат.',
            '买一个新灯泡。 (Mǎi yī gè xīn dēngpào.) — Купи новую лампочку.'
        ]
    },

    // === УБОРКА ===
    6: {
        glyph: '扫帚',
        pinyin: 'sàozhou',
        translation: 'метла',
        classifier: '把',
        examples: [
            '用扫帚扫地。 (Yòng sàozhou sǎo dì.) — Подметать пол метлой.',
            '竹扫帚很耐用。 (Zhú sàozhou hěn nàiyòng.) — Бамбуковая метла очень прочная.',
            '扫帚放在厨房角落。 (Sàozhou fàng zài chúfáng jiǎoluò.) — Метла стоит в углу кухни.'
        ]
    },
    7: {
        glyph: '拖把',
        pinyin: 'tuōbǎ',
        translation: 'швабра',
        classifier: '把',
        examples: [
            '用拖把拖地。 (Yòng tuōbǎ tuō dì.) — Мыть пол шваброй.',
            '旋转拖把很方便。 (Xuánzhuǎn tuōbǎ hěn fāngbiàn.) — Вращающаяся швабра очень удобна.',
            '拖把要定期清洗。 (Tuōbǎ yào dìngqī qīngxǐ.) — Швабру нужно регулярно мыть.'
        ]
    },
    8: {
        glyph: '垃圾袋',
        pinyin: 'lājī dài',
        translation: 'мусорный пакет',
        classifier: '个',
        examples: [
            '把垃圾放进垃圾袋。 (Bǎ lājī fàng jìn lājī dài.) — Положи мусор в мусорный пакет.',
            '可降解垃圾袋更环保。 (Kě jiàngjiě lājī dài gèng huánbǎo.) — Биоразлагаемые пакеты экологичнее.',
            '每天换垃圾袋。 (Měitiān huàn lājī dài.) — Меняй мусорный пакет каждый день.'
        ]
    },
    9: {
        glyph: '垃圾桶',
        pinyin: 'lājī tǒng',
        translation: 'мусорное ведро',
        classifier: '个',
        examples: [
            '厨房有一个垃圾桶。 (Chúfáng yǒu yī gè lājī tǒng.) — На кухне одно мусорное ведро.',
            '带盖垃圾桶防臭。 (Dài gài lājī tǒng fáng chòu.) — Мусорное ведро с крышкой предотвращает запах.',
            '分类垃圾桶分三色。 (Fēnlèi lājī tǒng fēn sān sè.) — Раздельный мусорный контейнер трёх цветов.'
        ]
    },
    10: {
        glyph: '抹布',
        pinyin: 'mābù',
        translation: 'тряпка для протирания',
        classifier: '块',
        examples: [
            '用抹布擦桌子。 (Yòng mābù cā zhuōzi.) — Протирать стол тряпкой.',
            '专用抹布擦玻璃。 (Zhuānyòng mābù cā bōli.) — Специальная тряпка для стёкол.',
            '抹布要经常清洗。 (Mābù yào jīngcháng qīngxǐ.) — Тряпку нужно часто стирать.'
        ]
    },

    // === ХРАНЕНИЕ ===
    11: {
        glyph: '衣架',
        pinyin: 'yījià',
        translation: 'вешалка для одежды',
        classifier: '个',
        examples: [
            '衣柜里有很多衣架。 (Yīguì lǐ yǒu hěn duō yījià.) — В шкафу много вешалок.',
            '木质衣架不伤衣服。 (Mù zhì yījià bù shāng yīfu.) — Деревянные вешалки не портят одежду.',
            '折叠衣架节省空间。 (Zhédié yījià jiéshěng kōngjiān.) — Складные вешалки экономят место.'
        ]
    },
    12: {
        glyph: '挂钩',
        pinyin: 'guàgōu',
        translation: 'крючок (настенный)',
        classifier: '个',
        examples: [
            '墙上装了挂钩。 (Qiáng shàng zhuāng le guàgōu.) — На стену повесили крючки.',
            '挂钩挂钥匙和帽子。 (Guàgōu guà yàoshi hé màozi.) — На крючках ключи и шляпы.',
            '不锈钢挂钩很结实。 (Bùxiùgāng guàgōu hěn jiēshi.) — Нержавеющие крючки очень прочные.'
        ]
    },

    // === БЫТОВЫЕ МЕЛОЧИ ===
    13: {
        glyph: '镜子',
        pinyin: 'jìngzi',
        translation: 'зеркало',
        classifier: '面',
        examples: [
            '浴室里有一面镜子。 (Yùshì lǐ yǒu yī miàn jìngzi.) — В ванной одно зеркало.',
            '全身镜挂在卧室。 (Quánshēn jìng guà zài wòshì.) — Зеркало в полный рост висит в спальне.',
            '镜子要保持干净。 (Jìngzi yào bǎochí gānjìng.) — Зеркало нужно держать в чистоте.'
        ]
    },
    14: {
        glyph: '窗帘',
        pinyin: 'chuānglián',
        translation: 'занавески',
        classifier: '副',
        examples: [
            '客厅的窗帘是蓝色的。 (Kètīng de chuānglián shì lán sè de.) — Занавески в гостиной синие.',
            '遮光窗帘保证睡眠。 (Zhēguāng chuānglián bǎozhèng shuìmián.) — Занавески blackout обеспечивают сон.',
            '每天拉开窗帘。 (Měitiān lā kāi chuānglián.) — Каждый день открывай занавески.'
        ]
    },
    15: {
        glyph: '地毯',
        pinyin: 'dìtǎn',
        translation: 'ковёр',
        classifier: '块',
        examples: [
            '客厅有一块大地毯。 (Kètīng yǒu yī kuài dìtǎn.) — В гостиной большой ковёр.',
            '羊毛地毯很柔软。 (Yángmáo dìtǎn hěn róuruǎn.) — Шерстяной ковёр очень мягкий.',
            '地毯要定期吸尘。 (Dìtǎn yào dìngqī xīchén.) — Ковёр нужно регулярно пылесосить.'
        ]
    },
    16: {
        glyph: '时钟',
        pinyin: 'shízhōng',
        translation: 'часы (настенные/настольные)',
        classifier: '个',
        examples: [
            '墙上挂着一个时钟。 (Qiáng shàng guà zhe yī gè shízhōng.) — На стене висят часы.',
            '时钟显示正确时间。 (Shízhōng xiǎnshì zhèngquè shíjiān.) — Часы показывают точное время.',
            '老式时钟很有味道。 (Lǎoshì shízhōng hěn yǒu wèidào.) — Старинные часы очень атмосферные.'
        ]
    },
    17: {
        glyph: '温度计',
        pinyin: 'wēndùjì',
        translation: 'термометр',
        classifier: '个',
        examples: [
            '室内有温度计。 (Shìnèi yǒu wēndùjì.) — В помещении есть термометр.',
            '温度计显示25度。 (Wēndùjì xiǎnshì 25 dù.) — Термометр показывает 25 градусов.',
            '医用温度计测量体温。 (Yīyòng wēndùjì cèliáng tǐwēn.) — Медицинский термометр измеряет температуру тела.'
        ]
    },
    18: {
        glyph: '雨伞',
        pinyin: 'yǔsǎn',
        translation: 'зонт',
        classifier: '把',
        examples: [
            '下雨天带雨伞。 (Xiàyǔ tiān dài yǔsǎn.) — Бери зонт в дождливый день.',
            '折叠雨伞放包里。 (Zhédié yǔsǎn fàng bāo lǐ.) — Складной зонт помещается в сумку.',
            '这把雨伞是新的。 (Zhè bǎ yǔsǎn shì xīn de.) — Этот зонт новый.'
        ]
    },
    19: {
        glyph: '手电筒',
        pinyin: 'shǒudiàntǒng',
        translation: 'фонарик',
        classifier: '个',
        examples: [
            '停电时用手电筒。 (Tíngdiàn shí yòng shǒudiàntǒng.) — При отключении света пользуйся фонариком.',
            '手电筒放抽屉里。 (Shǒudiàntǒng fàng chōuti lǐ.) — Фонарик лежит в ящике.',
            'LED手电筒很亮。 (LED shǒudiàntǒng hěn liàng.) — Светодиодный фонарик очень яркий.'
        ]
    },
    20: {
        glyph: '电池',
        pinyin: 'diànchí',
        translation: 'батарейка',
        classifier: '节',
        examples: [
            '遥控器需要电池。 (Yáokòngqì xūyào diànchí.) — Для пульта нужны батарейки.',
            '买两节新电池。 (Mǎi liǎng jié xīn diànchí.) — Купи две новые батарейки.',
            '废旧电池要回收。 (Fèijiù diànchí yào huíshōu.) — Использованные батарейки нужно сдавать на переработку.'
        ]
    },
    21: {
        glyph: '遥控器',
        pinyin: 'yáokòngqì',
        translation: 'пульт дистанционного управления',
        classifier: '个',
        examples: [
            '电视遥控器在哪里？ (Diànshì yáokòngqì zài nǎlǐ?) — Где пульт от телевизора?',
            '遥控器没电了。 (Yáokòngqì méi diàn le.) — В пульте сели батарейки.',
            '这个遥控器可以控制空调。 (Zhège yáokòngqì kěyǐ kòngzhì kōngtiáo.) — Этот пульт управляет кондиционером.'
        ]
    },
    22: {
        glyph: '工具箱',
        pinyin: 'gōngjù xiāng',
        translation: 'ящик для инструментов',
        classifier: '个',
        examples: [
            '工具箱里有锤子和螺丝刀。 (Gōngjù xiāng lǐ yǒu chuízi hé luósīdāo.) — В ящике молоток и отвёртка.',
            '家用工具箱很实用。 (Jiāyòng gōngjù xiāng hěn shíyòng.) — Бытовой ящик для инструментов очень практичен.',
            '工具箱放在储藏室。 (Gōngjù xiāng fàng zài chǔcáng shì.) — Ящик для инструментов в кладовой.'
        ]
    },
    23: {
        glyph: '针线包',
        pinyin: 'zhēnxiàn bāo',
        translation: 'швейный набор',
        classifier: '个',
        examples: [
            '针线包里有针、线和剪刀。 (Zhēnxiàn bāo lǐ yǒu zhēn, xiàn hé jiǎndāo.) — В швейном наборе иголки, нитки и ножницы.',
            '衣服破了用针线包。 (Yīfu pò le yòng zhēnxiàn bāo.) — Если одежда порвалась — бери швейный набор.',
            '每个家庭都应该有针线包。 (Měi gè jiātíng dōu yīnggāi yǒu zhēnxiàn bāo.) — В каждом доме должен быть швейный набор.'
        ]
    },
    24: {
        glyph: '急救箱',
        pinyin: 'jíjiù xiāng',
        translation: 'аптечка',
        classifier: '个',
        examples: [
            '急救箱里有创可贴和消毒水。 (Jíjiù xiāng lǐ yǒu chuāngkětiē hé xiāodú shuǐ.) — В аптечке пластыри и антисептик.',
            '家中必备急救箱。 (Jiā zhōng bìbèi jíjiù xiāng.) — Аптечка — обязательная вещь в доме.',
            '定期检查急救箱。 (Dìngqī jiǎnchá jíjiù xiāng.) — Проверяй аптечку регулярно.'
        ]
    }
};

const nounsCleaningHygiene: { [key: number]: DictItem } = {
    // === СРЕДСТВА ГИГИЕНЫ ===
    1: {
        glyph: '肥皂',
        pinyin: 'féizào',
        translation: 'мыло',
        classifier: '块',
        examples: [
            '用肥皂洗手。 (Yòng féizào xǐ shǒu.) — Мыть руки мылом.',
            '这块肥皂很香。 (Zhè kuài féizào hěn xiāng.) — Это мыло очень ароматное.',
            '固体肥皂比洗手液更环保。 (Gùtǐ féizào bǐ xǐshǒu yè gèng huánbǎo.) — Твёрдое мыло экологичнее жидких средств.'
        ]
    },
    2: {
        glyph: '洗手液',
        pinyin: 'xǐshǒu yè',
        translation: 'жидкое мыло для рук',
        classifier: '瓶',
        examples: [
            '洗手液能杀菌。 (Xǐshǒu yè néng shājūn.) — Жидкое мыло убивает бактерии.',
            '这瓶洗手液快用完了。 (Zhè píng xǐshǒu yè kuài yòng wán le.) — Эта бутылка жидких средств почти пуста.',
            '公共场所提供洗手液。 (Gōnggòng chǎngsuǒ tígōng xǐshǒu yè.) — В общественных местах предоставляют жидкое мыло.'
        ]
    },
    3: {
        glyph: '洗发水',
        pinyin: 'xǐfà shuǐ',
        translation: 'шампунь',
        classifier: '瓶',
        examples: [
            '用洗发水洗头。 (Yòng xǐfà shuǐ xǐ tóu.) — Мыть голову шампунем.',
            '这个洗发水适合干发。 (Zhège xǐfà shuǐ shìhé gān fà.) — Этот шампунь подходит для сухих волос.',
            '大瓶洗发水更划算。 (Dà píng xǐfà shuǐ gèng huásuàn.) — Большая бутылка шампуня выгоднее.'
        ]
    },
    4: {
        glyph: '沐浴露',
        pinyin: 'mùyù lù',
        translation: 'гель для душа',
        classifier: '瓶',
        examples: [
            '沐浴露比肥皂更滋润。 (Mùyù lù bǐ féizào gèng zīrùn.) — Гель для душа увлажняет лучше мыла.',
            '我喜欢薰衣草味的沐浴露。 (Wǒ xǐhuan xūnyīcǎo wèi de mùyù lù.) — Мне нравится гель для душа с запахом лаванды.',
            '沐浴露要冲洗干净。 (Mùyù lù yào chōngxǐ gānjìng.) — Гель для душа нужно тщательно смывать.'
        ]
    },
    5: {
        glyph: '牙膏',
        pinyin: 'yágāo',
        translation: 'зубная паста',
        classifier: '支',
        examples: [
            '每天用牙膏刷牙。 (Měitiān yòng yágāo shuā yá.) — Чистить зубы пастой каждый день.',
            '这支牙膏含氟。 (Zhè zhī yágāo hán fú.) — Эта паста содержит фтор.',
            '儿童牙膏味道甜甜的。 (Értóng yágāo wèidào tiántián de.) — Детская паста имеет сладкий вкус.'
        ]
    },
    6: {
        glyph: '牙刷',
        pinyin: 'yáshuā',
        translation: 'зубная щётка',
        classifier: '把',
        examples: [
            '电动牙刷清洁效果更好。 (Diàndòng yáshuā qīngjié xiàoguǒ gèng hǎo.) — Электрическая щётка чистит лучше.',
            '三个月换一次牙刷。 (Sān gè yuè huàn yī cì yáshuā.) — Меняй зубную щётку раз в три месяца.',
            '牙刷放在杯子里。 (Yáshuā fàng zài bēizi lǐ.) — Щётка стоит в стакане.'
        ]
    },
    7: {
        glyph: '毛巾',
        pinyin: 'máojīn',
        translation: 'полотенце',
        classifier: '条',
        examples: [
            '洗澡后用毛巾擦干身体。 (Xǐzǎo hòu yòng máojīn cā gān shēntǐ.) — После душа вытираться полотенцем.',
            '这条毛巾很柔软。 (Zhè tiáo máojīn hěn róuruǎn.) — Это полотенце очень мягкое.',
            '每人有自己的毛巾。 (Měi rén yǒu zìjǐ de máojīn.) — У каждого своё полотенце.'
        ]
    },
    8: {
        glyph: '浴巾',
        pinyin: 'yùjīn',
        translation: 'банное полотенце',
        classifier: '条',
        examples: [
            '浴巾比普通毛巾大。 (Yùjīn bǐ pǔtōng máojīn dà.) — Банное полотенце больше обычного.',
            '浴巾吸水性很强。 (Yùjīn xīshuǐ xìng hěn qiáng.) — Банное полотенце отлично впитывает воду.',
            '酒店提供浴巾。 (Jiǔdiàn tígōng yùjīn.) — В отеле предоставляют банное полотенце.'
        ]
    },
    9: {
        glyph: '梳子',
        pinyin: 'shūzi',
        translation: 'расчёска',
        classifier: '把',
        examples: [
            '用梳子梳头发。 (Yòng shūzi shū tóufa.) — Расчёсывать волосы расчёской.',
            '木梳子对头发好。 (Mù shūzi duì tóufa hǎo.) — Деревянная расчёска полезна для волос.',
            '我的梳子断了。 (Wǒ de shūzi duàn le.) — Моя расчёска сломалась.'
        ]
    },
    10: {
        glyph: '剃须刀',
        pinyin: 'tìxū dāo',
        translation: 'бритва',
        classifier: '把',
        examples: [
            '他每天用剃须刀刮胡子。 (Tā měitiān yòng tìxū dāo guā húzi.) — Он бреется каждый день.',
            '电动剃须刀很方便。 (Diàndòng tìxū dāo hěn fāngbiàn.) — Электробритва очень удобна.',
            '一次性剃须刀适合旅行。 (Yīcìxìng tìxū dāo shìhé lǚxíng.) — Одноразовые бритвы удобны в поездках.'
        ]
    },

    // === СРЕДСТВА ДЛЯ УБОРКИ ===
    11: {
        glyph: '洗衣液',
        pinyin: 'xǐyī yè',
        translation: 'жидкое средство для стирки',
        classifier: '瓶',
        examples: [
            '用洗衣液洗衣服。 (Yòng xǐyī yè xǐ yīfu.) — Стирать одежду жидким средством.',
            '这瓶洗衣液有香味。 (Zhè píng xǐyī yè yǒu xiāngwèi.) — У этого средства для стирки приятный аромат.',
            '洗衣液比洗衣粉更易溶解。 (Xǐyī yè bǐ xǐyī fěn gèng yì róngjiě.) — Жидкое средство растворяется лучше порошка.'
        ]
    },
    12: {
        glyph: '洗衣粉',
        pinyin: 'xǐyī fěn',
        translation: 'порошок для стирки',
        classifier: '袋',
        examples: [
            '洗衣粉去污力强。 (Xǐyī fěn qùwū lì qiáng.) — Порошок хорошо удаляет пятна.',
            '一袋洗衣粉可以用很久。 (Yī dài xǐyī fěn kěyǐ yòng hěn jiǔ.) — Одного пакета хватает надолго.',
            '洗衣粉适合洗白色衣物。 (Xǐyī fěn shìhé xǐ báisè yīwù.) — Порошок подходит для белой одежды.'
        ]
    },
    13: {
        glyph: '洗洁精',
        pinyin: 'xǐjié jīng',
        translation: 'средство для мытья посуды',
        classifier: '瓶',
        examples: [
            '用洗洁精洗碗。 (Yòng xǐjié jīng xǐ wǎn.) — Мыть посуду средством для мытья посуды.',
            '洗洁精能去油污。 (Xǐjié jīng néng qù yóuwū.) — Средство удаляет жир.',
            '少量洗洁精就够。 (Shǎoliàng xǐjié jīng jiù gòu.) — Немного средства достаточно.'
        ]
    },
    14: {
        glyph: '消毒液',
        pinyin: 'xiāodú yè',
        translation: 'дезинфицирующее средство',
        classifier: '瓶',
        examples: [
            '用消毒液擦桌面。 (Yòng xiāodú yè cā zhuōmiàn.) — Протирать стол дезинфектором.',
            '消毒液能杀死病毒。 (Xiāodú yè néng shāsǐ bìngdú.) — Дезинфектор убивает вирусы.',
            '家中常备消毒液。 (Jiā zhōng chángbèi xiāodú yè.) — Дезинфектор должен быть в каждом доме.'
        ]
    },
    15: {
        glyph: '空气清新剂',
        pinyin: 'kōngqì qīngxīn jì',
        translation: 'освежитель воздуха',
        classifier: '瓶',
        examples: [
            '卫生间用空气清新剂。 (Wèishēngjiān yòng kōngqì qīngxīn jì.) — В туалете используют освежитель воздуха.',
            '空气清新剂有水果香味。 (Kōngqì qīngxīn jì yǒu shuǐguǒ xiāngwèi.) — Освежитель с фруктовым ароматом.',
            '天然空气清新剂更健康。 (Tiānrán kōngqì qīngxīn jì gèng jiànkāng.) — Натуральные освежители полезнее.'
        ]
    },

    // === ТЕХНИКА ДЛЯ УБОРКИ ===
    16: {
        glyph: '吸尘器',
        pinyin: 'xīchén qì',
        translation: 'пылесос',
        classifier: '台',
        examples: [
            '用吸尘器吸地毯。 (Yòng xīchén qì xī dìtǎn.) — Пылесосить ковёр пылесосом.',
            '无线吸尘器很方便。 (Wúxiàn xīchén qì hěn fāngbiàn.) — Беспроводной пылесос очень удобен.',
            '每周用吸尘器打扫一次。 (Měi zhōu yòng xīchén qì dǎsǎo yī cì.) — Убирать пылесосом раз в неделю.'
        ]
    },
    17: {
        glyph: '洗衣机',
        pinyin: 'xǐyī jī',
        translation: 'стиральная машина',
        classifier: '台',
        examples: [
            '洗衣机在阳台。 (Xǐyī jī zài yángtái.) — Стиральная машина на балконе.',
            '全自动洗衣机省力。 (Quán zìdòng xǐyī jī shěng lì.) — Автоматическая стиральная машина экономит силы.',
            '洗衣机要定期清洁。 (Xǐyī jī yào dìngqī qīngjié.) — Стиральную машину нужно регулярно чистить.'
        ]
    },
    18: {
        glyph: '烘干机',
        pinyin: 'hōnggān jī',
        translation: 'сушильная машина',
        classifier: '台',
        examples: [
            '烘干机可以快速干衣。 (Hōnggān jī kěyǐ kuàisù gān yī.) — Сушилка быстро сушит одежду.',
            '梅雨季节用烘干机。 (Méiyǔ jìjié yòng hōnggān jī.) — В сезон дождей пользуются сушилкой.',
            '烘干机和洗衣机一体。 (Hōnggān jī hé xǐyī jī yī tǐ.) — Сушилка и стиральная машина в одном корпусе.'
        ]
    },

    // === САНИТАРНО-ТЕХНИЧЕСКОЕ ОБОРУДОВАНИЕ ===
    19: {
        glyph: '洗手池',
        pinyin: 'xǐshǒu chí',
        translation: 'умывальник',
        classifier: '个',
        examples: [
            '洗手池在卫生间。 (Xǐshǒu chí zài wèishēngjiān.) — Умывальник в ванной комнате.',
            '洗手池要保持干净。 (Xǐshǒu chí yào bǎochí gānjìng.) — Умывальник нужно держать в чистоте.',
            '陶瓷洗手池很耐用。 (Táocí xǐshǒu chí hěn nàiyòng.) — Керамический умывальник очень прочный.'
        ]
    },
    20: {
        glyph: '马桶',
        pinyin: 'mǎtǒng',
        translation: 'унитаз',
        classifier: '个',
        examples: [
            '智能马桶有加热功能。 (Zhìnéng mǎtǒng yǒu jiārè gōngnéng.) — Умный унитаз имеет функцию подогрева сиденья.',
            '马桶要定期消毒。 (Mǎtǒng yào dìngqī xiāodú.) — Унитаз нужно регулярно дезинфицировать.',
            '节水马桶更环保。 (Jiéshuǐ mǎtǒng gèng huánbǎo.) — Водосберегающий унитаз экологичнее.'
        ]
    },
    21: {
        glyph: '淋浴喷头',
        pinyin: 'lín yù pēntóu',
        translation: 'душевая лейка',
        classifier: '个',
        examples: [
            '淋浴喷头出水很舒服。 (Lín yù pēntóu chūshuǐ hěn shūfu.) — Из душа вода течёт очень приятно.',
            '节水淋浴喷头省水。 (Jiéshuǐ lín yù pēntóu shěng shuǐ.) — Водосберегающая лейка экономит воду.',
            '淋浴喷头需要除垢。 (Lín yù pēntóu xūyào chú gòu.) — Лейку нужно чистить от накипи.'
        ]
    },
    22: {
        glyph: '浴缸',
        pinyin: 'yùgāng',
        translation: 'ванна',
        classifier: '个',
        examples: [
            '泡澡用浴缸。 (Pào zǎo yòng yùgāng.) — Для ванны использовать ванну.',
            '浴缸里放热水。 (Yùgāng lǐ fàng rèshuǐ.) — В ванну налить горячую воду.',
            '亚克力浴缸很轻便。 (Yàkèlì yùgāng hěn qīngbiàn.) — Акриловая ванна очень лёгкая.'
        ]
    },
    23: {
        glyph: '地漏',
        pinyin: 'dì lòu',
        translation: 'сливное отверстие (в полу)',
        classifier: '个',
        examples: [
            '浴室地板有地漏。 (Yùshì dìbǎn yǒu dì lòu.) — В полу ванной есть слив.',
            '地漏要定期清理。 (Dì lòu yào dìngqī qīnglǐ.) — Слив нужно регулярно чистить.',
            '防臭地漏减少异味。 (Fáng chòu dì lòu jiǎnshǎo yìwèi.) — Антизасорный слив уменьшает запахи.'
        ]
    },

    // === ПРОЧИЕ ПРЕДМЕТЫ ГИГИЕНЫ ===
    24: {
        glyph: '卫生纸',
        pinyin: 'wèishēng zhǐ',
        translation: 'туалетная бумага',
        classifier: '卷',
        examples: [
            '卫生纸放在马桶旁边。 (Wèishēng zhǐ fàng zài mǎtǒng pángbiān.) — Туалетная бумага лежит рядом с унитазом.',
            '一卷卫生纸用几天。 (Yī juǎn wèishēng zhǐ yòng jǐ tiān.) — Одного рулона хватает на несколько дней.',
            '柔软的卫生纸更舒服。 (Róuruǎn de wèishēng zhǐ gèng shūfu.) — Мягкая туалетная бумага комфортнее.'
        ]
    },
    25: {
        glyph: '擦手纸',
        pinyin: 'cā shǒu zhǐ',
        translation: 'бумажные полотенца',
        classifier: '包',
        examples: [
            '厨房有擦手纸。 (Chúfáng yǒu cā shǒu zhǐ.) — На кухне есть бумажные полотенца.',
            '擦手纸比毛巾更卫生。 (Cā shǒu zhǐ bǐ máojīn gèng wèishēng.) — Бумажные полотенца гигиеничнее ткани.',
            '一包擦手纸很快用完。 (Yī bāo cā shǒu zhǐ hěn kuài yòng wán.) — Один пакет быстро заканчивается.'
        ]
    },
    26: {
        glyph: '棉签',
        pinyin: 'mián qiān',
        translation: 'ватная палочка',
        classifier: '根',
        examples: [
            '用棉签清洁耳朵。 (Yòng mián qiān qīngjié ěrduo.) — Чистить уши ватными палочками.',
            '棉签也用于化妆。 (Mián qiān yě yòngyú huàzhuāng.) — Ватные палочки также используют для макияжа.',
            '这盒棉签是无菌的。 (Zhè hé mián qiān shì wújūn de.) — Эти ватные палочки стерильны.'
        ]
    },
    27: {
        glyph: '创可贴',
        pinyin: 'chuāngkětiē',
        translation: 'пластырь',
        classifier: '个',
        examples: [
            '手指割破了，贴创可贴。 (Shǒuzhǐ gē pò le, tiē chuāngkětiē.) — Порезал палец — наклей пластырь.',
            '急救箱里有创可贴。 (Jíjiù xiāng lǐ yǒu chuāngkětiē.) — В аптечке есть пластыри.',
            '防水创可贴适合洗澡时用。 (Fángshuǐ chuāngkětiē shìhé xǐzǎo shí yòng.) — Водонепроницаемый пластырь удобен для душа.'
        ]
    }
};

const nounsHouseStructure: { [key: number]: DictItem } = {
    // === ОСНОВНЫЕ КОНСТРУКЦИИ ===
    1: {
        glyph: '地基',
        pinyin: 'dìjī',
        translation: 'фундамент',
        classifier: '个',
        examples: [
            '房子的地基很牢固。 (Fángzi de dìjī hěn láogù.) — Фундамент дома очень прочный.',
            '地震时地基最重要。 (Dìzhèn shí dìjī zuì zhòngyào.) — При землетрясении фундамент — самое важное.',
            '打地基是建房的第一步。 (Dǎ dìjī shì jiànfáng de dì yī bù.) — Устройство фундамента — первый шаг в строительстве.'
        ]
    },
    2: {
        glyph: '墙',
        pinyin: 'qiáng',
        translation: 'стена',
        classifier: '面',
        examples: [
            '这面墙是承重墙。 (Zhè miàn qiáng shì chéngzhòng qiáng.) — Эта стена — несущая.',
            '墙上挂了一幅画。 (Qiáng shàng guà le yī fú huà.) — На стене висит картина.',
            '白墙看起来很干净。 (Bái qiáng kàn qǐlái hěn gānjìng.) — Белые стены выглядят очень чисто.'
        ]
    },
    3: {
        glyph: '天花板',
        pinyin: 'tiānhuābǎn',
        translation: 'потолок',
        classifier: '个',
        examples: [
            '天花板是白色的。 (Tiānhuābǎn shì báisè de.) — Потолок белый.',
            '吊灯装在天花板上。 (Diàodēng zhuāng zài tiānhuābǎn shàng.) — Люстра установлена на потолке.',
            '天花板有裂缝。 (Tiānhuābǎn yǒu lièfèng.) — На потолке трещина.'
        ]
    },
    4: {
        glyph: '地板',
        pinyin: 'dìbǎn',
        translation: 'пол (настил)',
        classifier: '块',
        examples: [
            '木地板很温暖。 (Mù dìbǎn hěn wēnnuǎn.) — Деревянный пол очень тёплый.',
            '这块地板松动了。 (Zhè kuài dìbǎn sōngdòng le.) — Эта доска пола расшаталась.',
            '复合地板容易安装。 (Fùhé dìbǎn róngyì ānzhuāng.) — Ламинат легко укладывать.'
        ]
    },
    5: {
        glyph: '屋顶',
        pinyin: 'wūdǐng',
        translation: 'крыша',
        classifier: '个',
        examples: [
            '屋顶漏水了。 (Wūdǐng lòushuǐ le.) — Крыша протекает.',
            '平屋顶可以改成露台。 (Píng wūdǐng kěyǐ gǎichéng lùtái.) — Плоскую крышу можно переделать в террасу.',
            '斜屋顶适合下雪地区。 (Xié wūdǐng shìhé xià xuě dìqū.) — Скатная крыша подходит для снежных регионов.'
        ]
    },

    // === ДВЕРИ И ОКНА ===
    6: {
        glyph: '门',
        pinyin: 'mén',
        translation: 'дверь',
        classifier: '扇',
        examples: [
            '这扇门是木头的。 (Zhè shàn mén shì mùtou de.) — Эта дверь деревянная.',
            '前门是红色的。 (Qián mén shì hóngsè de.) — Входная дверь красная.',
            '请关上门。 (Qǐng guān shàng mén.) — Пожалуйста, закрой дверь.'
        ]
    },
    7: {
        glyph: '大门',
        pinyin: 'dà mén',
        translation: 'входная дверь / калитка',
        classifier: '扇',
        examples: [
            '大门有门禁系统。 (Dà mén yǒu ménjìn xìtǒng.) — Входная дверь оснащена системой контроля доступа.',
            '晚上要锁好大门。 (Wǎnshàng yào suǒ hǎo dà mén.) — Вечером нужно запирать входную дверь.',
            '铁艺大门很坚固。 (Tiě yì dà mén hěn jiāngù.) — Кованая входная дверь очень надёжна.'
        ]
    },
    8: {
        glyph: '窗户',
        pinyin: 'chuānghu',
        translation: 'окно',
        classifier: '扇',
        examples: [
            '这扇窗户朝南。 (Zhè shàn chuānghu cháo nán.) — Это окно выходит на юг.',
            '打开窗户通风。 (Dǎkāi chuānghu tōng fēng.) — Открой окно для проветривания.',
            '双层玻璃窗户隔音好。 (Shuāng céng bōli chuānghu géyīn hǎo.) — Окна с двойным остеклением хорошо шумоизолируют.'
        ]
    },
    9: {
        glyph: '窗台',
        pinyin: 'chuāngtái',
        translation: 'подоконник',
        classifier: '个',
        examples: [
            '窗台上放着花盆。 (Chuāngtái shàng fàng zhe huāpén.) — На подоконнике стоят цветочные горшки.',
            '木质窗台很温馨。 (Mù zhì chuāngtái hěn wēnxīn.) — Деревянный подоконник создаёт уют.',
            '窗台要定期擦干净。 (Chuāngtái yào dìngqī cā gānjìng.) — Подоконник нужно регулярно мыть.'
        ]
    },

    // === ЛЕСТНИЦЫ И ПЕРЕХОДЫ ===
    10: {
        glyph: '楼梯',
        pinyin: 'lóutī',
        translation: 'лестница',
        classifier: '段',
        examples: [
            '这段楼梯很陡。 (Zhè duàn lóutī hěn dǒu.) — Этот пролёт лестницы очень крутой.',
            '木楼梯有复古感。 (Mù lóutī yǒu fùgǔ gǎn.) — Деревянная лестница выглядит винтажно.',
            '楼梯要装扶手。 (Lóutī yào zhuāng fúshǒu.) — На лестнице нужно установить перила.'
        ]
    },
    11: {
        glyph: '台阶',
        pinyin: 'táijiē',
        translation: 'ступенька',
        classifier: '级',
        examples: [
            '门口有三级台阶。 (Ménkǒu yǒu sān jí táijiē.) — У входа три ступеньки.',
            '石台阶很防滑。 (Shí táijiē hěn fáng huá.) — Каменные ступени не скользят.',
            '小心台阶！ (Xiǎoxīn táijiē!) — Осторожно, ступеньки!'
        ]
    },
    12: {
        glyph: '扶手',
        pinyin: 'fúshǒu',
        translation: 'перила',
        classifier: '个',
        examples: [
            '楼梯扶手是金属的。 (Lóutī fúshǒu shì jīnshǔ de.) — Перила лестницы металлические.',
            '老人需要扶手。 (Lǎorén xūyào fúshǒu.) — Пожилым людям нужны перила.',
            '扶手要定期检查。 (Fúshǒu yào dìngqī jiǎnchá.) — Перила нужно регулярно проверять.'
        ]
    },

    // === ДОПОЛНИТЕЛЬНЫЕ ЭЛЕМЕНТЫ ===
    13: {
        glyph: '阳台',
        pinyin: 'yángtái',
        translation: 'балкон',
        classifier: '个',
        examples: [
            '阳台有栏杆。 (Yángtái yǒu lángān.) — На балконе есть перила.',
            '封闭式阳台更保暖。 (Fēngbì shì yángtái gèng bǎonuǎn.) — Застеклённый балкон теплее.',
            '阳台可以种花。 (Yángtái kěyǐ zhòng huā.) — На балконе можно выращивать цветы.'
        ]
    },
    14: {
        glyph: '栏杆',
        pinyin: 'lángān',
        translation: 'ограждение / перила',
        classifier: '个',
        examples: [
            '阳台栏杆很高。 (Yángtái lángān hěn gāo.) — Ограждение балкона очень высокое.',
            '楼梯栏杆很结实。 (Lóutī lángān hěn jiēshi.) — Перила лестницы очень прочные.',
            '栏杆要防锈处理。 (Lángān yào fángxiù chǔlǐ.) — Ограждение нужно обработать от ржавчины.'
        ]
    },
    15: {
        glyph: '隔断',
        pinyin: 'géduàn',
        translation: 'перегородка',
        classifier: '个',
        examples: [
            '玻璃隔断让空间更通透。 (Bōli géduàn ràng kōngjiān gèng tōngtòu.) — Стеклянная перегородка делает пространство более открытым.',
            '办公室用隔断分隔工位。 (Bàngōngshì yòng géduàn fēngé gōng wèi.) — В офисе перегородки разделяют рабочие места.',
            '可移动隔断很灵活。 (Kě yídòng géduàn hěn línghuó.) — Раздвижные перегородки очень гибкие.'
        ]
    },
    16: {
        glyph: '横梁',
        pinyin: 'héngliáng',
        translation: 'балка (горизонтальная)',
        classifier: '根',
        examples: [
            '老房子有木横梁。 (Lǎo fángzi yǒu mù héngliáng.) — В старом доме деревянные балки.',
            '横梁支撑屋顶。 (Héngliáng zhīchēng wūdǐng.) — Балки поддерживают крышу.',
            '装饰横梁增加风格。 (Zhuāngshì héngliáng zēngjiā fēnggé.) — Декоративные балки добавляют стиля.'
        ]
    },
    17: {
        glyph: '柱子',
        pinyin: 'zhùzi',
        translation: 'колонна / столб',
        classifier: '根',
        examples: [
            '大厅有大理石柱子。 (Dàtīng yǒu dàlǐshí zhùzi.) — В холле мраморные колонны.',
            '柱子是承重结构。 (Zhùzi shì chéngzhòng jiégòu.) — Колонны — несущие элементы.',
            '古希腊建筑以柱子闻名。 (Gǔ Xīlà jiànzhù yǐ zhùzi wénmíng.) — Древнегреческая архитектура знаменита колоннами.'
        ]
    },
    18: {
        glyph: '门框',
        pinyin: 'ménkuàng',
        translation: 'дверная коробка',
        classifier: '个',
        examples: [
            '门框需要和门匹配。 (Ménkuàng xūyào hé mén pǐpèi.) — Дверная коробка должна соответствовать двери.',
            '木质门框很常见。 (Mù zhì ménkuàng hěn chángjiàn.) — Деревянные дверные коробки очень распространены.',
            '安装门框要水平。 (Ānzhuāng ménkuàng yào shuǐpíng.) — Установка дверной коробки должна быть ровной.'
        ]
    },
    19: {
        glyph: '窗框',
        pinyin: 'chuāngkuàng',
        translation: 'оконная рама',
        classifier: '个',
        examples: [
            '铝合金窗框很耐用。 (Lǚ héjīn chuāngkuàng hěn nàiyòng.) — Алюминиевый профиль очень прочен.',
            '老式窗框是木头的。 (Lǎoshì chuāngkuàng shì mùtou de.) — Старые оконные рамы деревянные.',
            '窗框要密封好。 (Chuāngkuàng yào mìfēng hǎo.) — Оконная рама должна быть герметичной.'
        ]
    },
    20: {
        glyph: '门槛',
        pinyin: 'ménkǎn',
        translation: 'порог',
        classifier: '个',
        examples: [
            '跨过门槛进屋。 (Kuàguò ménkǎn jìn wū.) — Переступить порог, чтобы войти в дом.',
            '门槛防止雨水进入。 (Ménkǎn fángzhǐ yǔshuǐ jìnrù.) — Порог предотвращает попадание дождевой воды.',
            '传统婚礼要跨火盆和门槛。 (Chuántǒng hūnlǐ yào kuà huǒpén hé ménkǎn.) — В традиционной свадьбе невеста переступает через огонь и порог.'
        ]
    },
    21: {
        glyph: '屋檐',
        pinyin: 'wūyán',
        translation: 'карниз (свес крыши)',
        classifier: '个',
        examples: [
            '屋檐下可以躲雨。 (Wūyán xià kěyǐ duǒ yǔ.) — Под карнизом можно укрыться от дождя.',
            '屋檐有排水槽。 (Wūyán yǒu páishuǐ cáo.) — У карниза есть водосток.',
            '中式屋檐有飞檐。 (Zhōngshì wūyán yǒu fēiyán.) — У китайского карниза изогнутые концы.'
        ]
    },
    22: {
        glyph: '排水管',
        pinyin: 'páishuǐ guǎn',
        translation: 'водосточная труба',
        classifier: '根',
        examples: [
            '排水管连接屋檐和地面。 (Páishuǐ guǎn liánjiē wūyán hé dìmiàn.) — Водосток соединяет карниз и землю.',
            '排水管堵塞了。 (Páishuǐ guǎn dǔsè le.) — Водосточная труба забилась.',
            'PVC排水管很常用。 (PVC páishuǐ guǎn hěn chángyòng.) — ПВХ-водостоки очень распространены.'
        ]
    },
    23: {
        glyph: '烟囱',
        pinyin: 'yāncōng',
        translation: 'дымоход',
        classifier: '个',
        examples: [
            '老房子有烟囱。 (Lǎo fángzi yǒu yāncōng.) — В старом доме есть дымоход.',
            '烟囱排出烟气。 (Yāncōng páichū yānqì.) — Дымоход выводит дым.',
            '冬季烟囱冒白烟。 (Dōngjì yāncōng mào bái yān.) — Зимой из дымохода идёт белый дым.'
        ]
    },
    24: {
        glyph: '阁楼',
        pinyin: 'gélóu',
        translation: 'чердак',
        classifier: '个',
        examples: [
            '阁楼可以改成书房。 (Gélóu kěyǐ gǎichéng shūfáng.) — Чердак можно переделать под кабинет.',
            '阁楼很热。 (Gélóu hěn rè.) — На чердаке очень жарко.',
            '老房子的阁楼有斜屋顶。 (Lǎo fángzi de gélóu yǒu xié wūdǐng.) — У чердака в старом доме скатная крыша.'
        ]
    },
    25: {
        glyph: '地下室',
        pinyin: 'dìxiàshì',
        translation: 'подвал',
        classifier: '个',
        examples: [
            '地下室做车库。 (Dìxiàshì zuò chēkù.) — Подвал используется как гараж.',
            '地下室要防潮。 (Dìxiàshì yào fángcháo.) — Подвал нужно защищать от влаги.',
            '有些地下室改成酒窖。 (Yǒuxiē dìxiàshì gǎichéng jiǔjiào.) — Некоторые подвалы переделывают в винный погреб.'
        ]
    }
};

const nounsBuildingMaterials: { [key: number]: DictItem } = {
    // === КЛАССИЧЕСКИЕ МАТЕРИАЛЫ ===
    1: {
        glyph: '砖',
        pinyin: 'zhuān',
        translation: 'кирпич',
        classifier: '块',
        examples: [
            '这堵墙用红砖砌成。 (Zhè dǔ qiáng yòng hóng zhuān qì chéng.) — Эта стена сложена из красного кирпича.',
            '一块砖很重。 (Yī kuài zhuān hěn zhòng.) — Один кирпич очень тяжёлый.',
            '古建筑常用青砖。 (Gǔ jiànzhù chángyòng qīng zhuān.) — В старинных зданиях часто использовали синий кирпич.'
        ]
    },
    2: {
        glyph: '混凝土',
        pinyin: 'hùnníngtǔ',
        translation: 'бетон',
        classifier: '方',
        examples: [
            '地基用混凝土浇筑。 (Dìjī yòng hùnníngtǔ jiāozhù.) — Фундамент заливают бетоном.',
            '一立方米混凝土很结实。 (Yī lìfāng mǐ hùnníngtǔ hěn jiēshi.) — Один кубометр бетона очень прочен.',
            '钢筋混凝土用于高层建筑。 (Gāngjīn hùnníngtǔ yòngyú gāocéng jiànzhù.) — Железобетон применяют в высотном строительстве.'
        ]
    },
    3: {
        glyph: '水泥',
        pinyin: 'shuǐní',
        translation: 'цемент',
        classifier: '袋',
        examples: [
            '一袋水泥50公斤。 (Yī dài shuǐní 50 gōngjīn.) — Один мешок цемента — 50 кг.',
            '水泥加水变成砂浆。 (Shuǐní jiā shuǐ biàn chéng shājiāng.) — Цемент с водой превращается в раствор.',
            '工地堆满了水泥。 (Gōngdì duī mǎn le shuǐní.) — На стройке горы цемента.'
        ]
    },
    4: {
        glyph: '沙子',
        pinyin: 'shāzi',
        translation: 'песок',
        classifier: '堆',
        examples: [
            '沙子和水泥混合。 (Shāzi hé shuǐní hùnhé.) — Песок смешивают с цементом.',
            '一堆沙子在工地。 (Yī duī shāzi zài gōngdì.) — На стройке куча песка.',
            '河沙适合建筑用。 (Hé shā shìhé jiànzhù yòng.) — Речной песок подходит для строительства.'
        ]
    },
    5: {
        glyph: '石头',
        pinyin: 'shítou',
        translation: 'камень',
        classifier: '块',
        examples: [
            '用石头砌墙。 (Yòng shítou qì qiáng.) — Строить стену из камня.',
            '这块石头很光滑。 (Zhè kuài shítou hěn guānghuá.) — Этот камень очень гладкий.',
            '花岗岩是一种坚硬的石头。 (Huāgāngyán shì yī zhǒng jiānyìng de shítou.) — Гранит — твёрдый камень.'
        ]
    },

    // === ДРЕВЕСИНА ===
    6: {
        glyph: '木材',
        pinyin: 'mùcái',
        translation: 'пиломатериалы',
        classifier: '根',
        examples: [
            '木材用于做家具。 (Mùcái yòngyú zuò jiājù.) — Пиломатериалы используют для изготовления мебели.',
            '这根木材很干燥。 (Zhè gēn mùcái hěn gānzào.) — Эта доска очень сухая.',
            '优质木材不易变形。 (Yōuzhì mùcái bù yì biànxíng.) — Качественная древесина не деформируется.'
        ]
    },
    7: {
        glyph: '木板',
        pinyin: 'mùbǎn',
        translation: 'доска',
        classifier: '块',
        examples: [
            '用木板铺地板。 (Yòng mùbǎn pū dìbǎn.) — Настилать пол досками.',
            '这块木板有节疤。 (Zhè kuài mùbǎn yǒu jiébā.) — На этой доске сучок.',
            '胶合木板很稳定。 (Jiāohé mùbǎn hěn wěndìng.) — Фанера очень стабильна.'
        ]
    },
    8: {
        glyph: '胶合板',
        pinyin: 'jiāohé bǎn',
        translation: 'фанера',
        classifier: '张',
        examples: [
            '胶合板由多层木片压制而成。 (Jiāohé bǎn yóu duō céng mù piàn yāzhì ér chéng.) — Фанера состоит из склеенных слоёв древесины.',
            '一张胶合板2米长。 (Yī zhāng jiāohé bǎn 2 mǐ cháng.) — Лист фанеры длиной 2 метра.',
            '胶合板用于做隔断。 (Jiāohé bǎn yòngyú zuò géduàn.) — Фанеру используют для перегородок.'
        ]
    },

    // === МЕТАЛЛЫ ===
    9: {
        glyph: '钢铁',
        pinyin: 'gāngtiě',
        translation: 'сталь',
        classifier: '吨',
        examples: [
            '摩天大楼需要大量钢铁。 (Mótiān dàlóu xūyào dàliàng gāngtiě.) — Для небоскрёба нужно много стали.',
            '一吨钢铁很重。 (Yī dùn gāngtiě hěn zhòng.) — Одна тонна стали очень тяжёлая.',
            '钢筋用于加固混凝土。 (Gāngjīn yòngyú jiāgù hùnníngtǔ.) — Арматура укрепляет бетон.'
        ]
    },
    10: {
        glyph: '钢筋',
        pinyin: 'gāngjīn',
        translation: 'арматура',
        classifier: '根',
        examples: [
            '钢筋绑成骨架。 (Gāngjīn bǎng chéng gǔjià.) — Арматуру вяжут в каркас.',
            '这根钢筋直径2厘米。 (Zhè gēn gāngjīn zhíjìng 2 límǐ.) — Диаметр этой арматуры — 2 см.',
            '钢筋防锈处理很重要。 (Gāngjīn fángxiù chǔlǐ hěn zhòngyào.) — Защита арматуры от ржавчины очень важна.'
        ]
    },
    11: {
        glyph: '铝',
        pinyin: 'lǚ',
        translation: 'алюминий',
        classifier: '吨',
        examples: [
            '铝合金用于门窗。 (Lǚ héjīn yòngyú ménchuāng.) — Алюминиевый сплав используют для дверей и окон.',
            '铝比钢铁轻。 (Lǚ bǐ gāngtiě qīng.) — Алюминий легче стали.',
            '回收铝很环保。 (Huíshōu lǚ hěn huánbǎo.) — Переработка алюминия экологична.'
        ]
    },

    // === СТЕКЛО И КЕРАМИКА ===
    12: {
        glyph: '玻璃',
        pinyin: 'bōli',
        translation: 'стекло',
        classifier: '块',
        examples: [
            '窗户用钢化玻璃。 (Chuānghu yòng gāng huà bōli.) — Для окон используют закалённое стекло.',
            '这块玻璃很厚。 (Zhè kuài bōli hěn hòu.) — Это стекло очень толстое.',
            '双层玻璃隔音效果好。 (Shuāng céng bōli géyīn xiàoguǒ hǎo.) — Двухслойное стекло хорошо изолирует звук.'
        ]
    },
    13: {
        glyph: '瓷砖',
        pinyin: 'cízhuān',
        translation: 'керамическая плитка',
        classifier: '块',
        examples: [
            '浴室墙面贴瓷砖。 (Yùshì qiángmiàn tiē cízhuān.) — Стены в ванной облицованы плиткой.',
            '这块瓷砖防滑。 (Zhè kuài cízhuān fáng huá.) — Эта плитка нескользящая.',
            '瓷砖颜色很多。 (Cízhuān yánsè hěn duō.) — Плитка бывает разных цветов.'
        ]
    },
    14: {
        glyph: '大理石',
        pinyin: 'dàlǐshí',
        translation: 'мрамор',
        classifier: '块',
        examples: [
            '地板用大理石铺设。 (Dìbǎn yòng dàlǐshí pūshè.) — Пол выложен мрамором.',
            '这块大理石很贵。 (Zhè kuài dàlǐshí hěn guì.) — Этот кусок мрамора очень дорогой.',
            '大理石台面很美观。 (Dàlǐshí táimiàn hěn měiguān.) — Столешница из мрамора очень красива.'
        ]
    },

    // === ИЗОЛЯЦИОННЫЕ И ОТДЕЛОЧНЫЕ МАТЕРИАЛЫ ===
    15: {
        glyph: '石膏板',
        pinyin: 'shígāo bǎn',
        translation: 'гипсокартон',
        classifier: '张',
        examples: [
            '石膏板用于隔断墙。 (Shígāo bǎn yòngyú géduàn qiáng.) — Гипсокартон используют для перегородок.',
            '一张石膏板2.4米长。 (Yī zhāng shígāo bǎn 2.4 mǐ cháng.) — Лист гипсокартона длиной 2,4 метра.',
            '石膏板防火性能好。 (Shígāo bǎn fánghuǒ xìngnéng hǎo.) — Гипсокартон обладает хорошей огнестойкостью.'
        ]
    },
    16: {
        glyph: '保温材料',
        pinyin: 'bǎowēn cáiliào',
        translation: 'теплоизоляционный материал',
        classifier: '种',
        examples: [
            '外墙用保温材料。 (Wàiqiáng yòng bǎowēn cáiliào.) — Наружные стены утепляют теплоизоляцией.',
            '常见的保温材料有岩棉和聚苯板。 (Chángjiàn de bǎowēn cáiliào yǒu yán mián hé jùběn bǎn.) — Распространённые утеплители — каменная вата и пенополистирол.',
            '保温材料节省能源。 (Bǎowēn cáiliào jiéshěng néngyuán.) — Теплоизоляция экономит энергию.'
        ]
    },
    17: {
        glyph: '防水材料',
        pinyin: 'fángshuǐ cáiliào',
        translation: 'гидроизоляционный материал',
        classifier: '种',
        examples: [
            '屋顶需要防水材料。 (Wūdǐng xūyào fángshuǐ cáiliào.) — Крыша требует гидроизоляции.',
            '卫生间地面做防水。 (Wèishēngjiān dìmiàn zuò fángshuǐ.) — Пол в туалете нужно гидроизолировать.',
            '沥青防水卷材很常用。 (Lìqīng fángshuǐ juǎncái hěn chángyòng.) — Рулонная битумная гидроизоляция очень распространена.'
        ]
    },
    18: {
        glyph: '油漆',
        pinyin: 'yóuqī',
        translation: 'краска (масляная/эмаль)',
        classifier: '桶',
        examples: [
            '一桶油漆可以刷两间房。 (Yī tǒng yóuqī kěyǐ shuā liǎng jiān fáng.) — Одного ведра краски хватит на две комнаты.',
            '墙面用环保油漆。 (Qiángmiàn yòng huánbǎo yóuqī.) — Для стен используют экологичную краску.',
            '油漆要通风晾干。 (Yóuqī yào tōngfēng liàng gān.) — Краску нужно сушить при проветривании.'
        ]
    },
    19: {
        glyph: '涂料',
        pinyin: 'túliào',
        translation: 'водоэмульсионная краска',
        classifier: '桶',
        examples: [
            '内墙用涂料。 (Nèiqiáng yòng túliào.) — Для внутренних стен используют водоэмульсионку.',
            '涂料无味更健康。 (Túliào wú wèi gèng jiànkāng.) — Без запаха — здоровее.',
            '白色涂料最常用。 (Báisè túliào zuì chángyòng.) — Белая краска — самая популярная.'
        ]
    },
    20: {
        glyph: '壁纸',
        pinyin: 'bìzhǐ',
        translation: 'обои',
        classifier: '卷',
        examples: [
            '一卷壁纸可以贴5平米。 (Yī juǎn bìzhǐ kěyǐ tiē 5 píngmǐ.) — Один рулон обоев покрывает 5 кв.м.',
            '壁纸图案很漂亮。 (Bìzhǐ tú\'àn hěn piàoliang.) — Узор обоев очень красив.',
            '防潮壁纸适合南方。 (Fángcháo bìzhǐ shìhé nánfāng.) — Влагостойкие обои подходят для юга.'
        ]
    },

    // === СОВРЕМЕННЫЕ МАТЕРИАЛЫ ===
    21: {
        glyph: '复合材料',
        pinyin: 'fùhé cáiliào',
        translation: 'композитные материалы',
        classifier: '种',
        examples: [
            '复合材料强度高重量轻。 (Fùhé cáiliào qiángdù gāo zhòngliàng qīng.) — Композиты прочные и лёгкие.',
            '碳纤维是一种复合材料。 (Tàn xiānwéi shì yī zhǒng fùhé cáiliào.) — Углеродное волокно — вид композита.',
            '现代建筑用复合材料。 (Xiàndài jiànzhù yòng fùhé cáiliào.) — В современном строительстве используют композиты.'
        ]
    },
    22: {
        glyph: 'PVC',
        pinyin: 'PVC',
        translation: 'ПВХ (поливинилхлорид)',
        classifier: '种',
        examples: [
            'PVC管用于排水。 (PVC guǎn yòngyú páishuǐ.) — Трубы ПВХ используют для водоотведения.',
            'PVC地板防水。 (PVC dìbǎn fángshuǐ.) — ПВХ-полы водонепроницаемы.',
            'PVC材料便宜耐用。 (PVC cáiliào piányi nàiyòng.) — Материал ПВХ дешёвый и долговечный.'
        ]
    },
    23: {
        glyph: '玻璃纤维',
        pinyin: 'bōli xiānwéi',
        translation: 'стекловолокно',
        classifier: '种',
        examples: [
            '玻璃纤维用于隔热。 (Bōli xiānwéi yòngyú gérè.) — Стекловолокно используют для теплоизоляции.',
            '玻璃纤维也用于增强塑料。 (Bōli xiānwéi yě yòngyú zēngqiáng sùliào.) — Стекловолокно также упрочняет пластик.',
            '处理玻璃纤维要戴口罩。 (Chǔlǐ bōli xiānwéi yào dài kǒuzhào.) — При работе со стекловолокном нужно носить маску.'
        ]
    },
    24: {
        glyph: '岩棉',
        pinyin: 'yán mián',
        translation: 'каменная вата',
        classifier: '卷',
        examples: [
            '岩棉是优良的保温材料。 (Yán mián shì yōuliáng de bǎowēn cáiliào.) — Каменная вата — отличный утеплитель.',
            '一卷岩棉用于外墙。 (Yī juǎn yán mián yòngyú wàiqiáng.) — Один рулон каменной ваты — для наружной стены.',
            '岩棉防火性能极好。 (Yán mián fánghuǒ xìngnéng jí hǎo.) — Каменная вата обладает превосходной огнестойкостью.'
        ]
    },
    25: {
        glyph: '聚苯乙烯',
        pinyin: 'jùběnxīxī',
        translation: 'пенополистирол',
        classifier: '块',
        examples: [
            '聚苯乙烯板很轻。 (Jùběnxīxī bǎn hěn qīng.) — Плиты пенополистирола очень лёгкие.',
            '外墙保温用聚苯乙烯。 (Wàiqiáng bǎowēn yòng jùběnxīxī.) — Для утепления фасадов используют пенополистирол.',
            '聚苯乙烯易燃，需加阻燃剂。 (Jùběnxīxī yì rán, xū jiā zǔrán jì.) — Пенополистирол горюч, требует добавления антипиренов.'
        ]
    }
};

const nounsUtilities: { [key: number]: DictItem } = {
    // === ЭЛЕКТРИЧЕСТВО ===
    1: {
        glyph: '电',
        pinyin: 'diàn',
        translation: 'электричество',
        classifier: '度',
        examples: [
            '家里用电做饭。 (Jiā lǐ yòng diàn zuò fàn.) — Дома используют электричество для приготовления пищи.',
            '这个月用了300度电。 (Zhège yuè yòng le 300 dù diàn.) — В этом месяце израсходовали 300 кВт·ч.',
            '停电时用蜡烛。 (Tíngdiàn shí yòng làzhú.) — При отключении электричества пользуются свечами.'
        ]
    },
    2: {
        glyph: '电线',
        pinyin: 'diànxiàn',
        translation: 'электрический провод',
        classifier: '根',
        examples: [
            '墙里埋了电线。 (Qiáng lǐ mái le diànxiàn.) — В стене проложены электрические провода.',
            '这根电线老化了。 (Zhè gēn diànxiàn lǎohuà le.) — Этот провод изношен.',
            '不要乱拉电线。 (Búyào luàn lā diànxiàn.) — Не тяните провода как попало.'
        ]
    },
    3: {
        glyph: '电表',
        pinyin: 'diànbǐao',
        translation: 'счётчик электроэнергии',
        classifier: '个',
        examples: [
            '电表在楼道里。 (Diànbǐao zài lóudào lǐ.) — Счётчик электроэнергии в подъезде.',
            '每月抄电表数。 (Měi yuè chāo diànbǐao shù.) — Каждый месяц снимают показания счётчика.',
            '智能电表可以远程读数。 (Zhìnéng diànbǐao kěyǐ yuǎnchéng dú shù.) — Умный счётчик позволяет дистанционно считывать показания.'
        ]
    },
    4: {
        glyph: '插座',
        pinyin: 'chāzuò',
        translation: 'розетка',
        classifier: '个',
        examples: [
            '墙上装了三个插座。 (Qiáng shàng zhuāng le sān gè chāzuò.) — На стене установлено три розетки.',
            '这个插座没电。 (Zhège chāzuò méi diàn.) — Эта розетка без напряжения.',
            '带USB的插座很方便。 (Dài USB de chāzuò hěn fāngbiàn.) — Розетки с USB очень удобны.'
        ]
    },
    5: {
        glyph: '开关',
        pinyin: 'kāiguān',
        translation: 'выключатель',
        classifier: '个',
        examples: [
            '灯的开关在门口。 (Dēng de kāiguān zài ménkǒu.) — Выключатель света у двери.',
            '触摸式开关很现代。 (Chùmō shì kāiguān hěn xiàndài.) — Сенсорный выключатель очень современный.',
            '请关掉开关。 (Qǐng guān diào kāiguān.) — Пожалуйста, выключите.'
        ]
    },

    // === ВОДА ===
    6: {
        glyph: '水',
        pinyin: 'shuǐ',
        translation: 'вода (холодная/горячая)',
        classifier: '吨',
        examples: [
            '家里用水洗澡。 (Jiā lǐ yòng shuǐ xǐzǎo.) — Дома используют воду для душа.',
            '上个月用了10吨水。 (Shàng gè yuè yòng le 10 dùn shuǐ.) — В прошлом месяце израсходовали 10 тонн воды.',
            '停水时要储水。 (Tíngshuǐ shí yào chǔ shuǐ.) — При отключении воды нужно запасать воду.'
        ]
    },
    7: {
        glyph: '水管',
        pinyin: 'shuǐguǎn',
        translation: 'водопроводная труба',
        classifier: '根',
        examples: [
            '水管漏水了。 (Shuǐguǎn lòushuǐ le.) — Водопроводная труба протекает.',
            '这根水管是PPR材质的。 (Zhè gēn shuǐguǎn shì PPR cáizhì de.) — Эта труба из полипропилена.',
            '冬天要防冻水管。 (Dōngtiān yào fáng dòng shuǐguǎn.) — Зимой нужно защищать трубы от замерзания.'
        ]
    },
    8: {
        glyph: '水表',
        pinyin: 'shuǐbiǎo',
        translation: 'счётчик воды',
        classifier: '个',
        examples: [
            '水表在厨房下面。 (Shuǐbiǎo zài chúfáng xiàmiàn.) — Счётчик воды под кухонной раковиной.',
            '水表数字要定期记录。 (Shuǐbiǎo shùzì yào dìngqī jìlù.) — Показания счётчика воды нужно регулярно записывать.',
            '智能水表防偷水。 (Zhìnéng shuǐbiǎo fáng tōu shuǐ.) — Умный счётчик предотвращает кражу воды.'
        ]
    },
    9: {
        glyph: '水龙头',
        pinyin: 'shuǐlóngtóu',
        translation: 'кран',
        classifier: '个',
        examples: [
            '厨房有一个水龙头。 (Chúfáng yǒu yī gè shuǐlóngtóu.) — На кухне один кран.',
            '节水水龙头省水。 (Jiéshuǐ shuǐlóngtóu shěng shuǐ.) — Водосберегающий кран экономит воду.',
            '水龙头坏了，一直在滴水。 (Shuǐlóngtóu huài le, yìzhí zài dī shuǐ.) — Кран сломался и постоянно капает.'
        ]
    },

    // === ГАЗ ===
    10: {
        glyph: '煤气',
        pinyin: 'méiqì',
        translation: 'газ (бытовой)',
        classifier: '立方米',
        examples: [
            '用煤气做饭。 (Yòng méiqì zuò fàn.) — Готовят на газу.',
            '这个月用了20立方米煤气。 (Zhège yuè yòng le 20 lìfāng mǐ méiqì.) — В этом месяце израсходовали 20 кубометров газа.',
            '闻到煤气味要开窗。 (Wén dào méiqì wèi yào kāi chuāng.) — Если чувствуется запах газа — открой окно.'
        ]
    },
    11: {
        glyph: '煤气管',
        pinyin: 'méiqì guǎn',
        translation: 'газовая труба',
        classifier: '根',
        examples: [
            '煤气管要定期检查。 (Méiqì guǎn yào dìngqī jiǎnchá.) — Газовые трубы нужно регулярно проверять.',
            '这根煤气管是金属的。 (Zhè gēn méiqì guǎn shì jīnshǔ de.) — Эта газовая труба металлическая.',
            '不要私自改动煤气管。 (Búyào sīzì gǎidòng méiqì guǎn.) — Не вносите изменения в газовые трубы без разрешения.'
        ]
    },
    12: {
        glyph: '煤气表',
        pinyin: 'méiqì biǎo',
        translation: 'газовый счётчик',
        classifier: '个',
        examples: [
            '煤气表在厨房墙上。 (Méiqì biǎo zài chúfáng qiáng shàng.) — Газовый счётчик на кухонной стене.',
            '抄煤气表数每月一次。 (Chāo méiqì biǎo shù měi yuè yī cì.) — Показания газового счётчика снимают раз в месяц.',
            '电子煤气表更精准。 (Diànzǐ méiqì biǎo gèng jīngzhǔn.) — Электронный счётчик газа точнее.'
        ]
    },
    13: {
        glyph: '燃气灶',
        pinyin: 'ránqì zào',
        translation: 'газовая плита',
        classifier: '台',
        examples: [
            '燃气灶火力猛。 (Ránqì zào huǒlì měng.) — Газовая плита даёт мощный огонь.',
            '这台燃气灶有三个火眼。 (Zhè tái ránqì zào yǒu sān gè huǒ yǎn.) — У этой плиты три конфорки.',
            '燃气灶要装在通风处。 (Ránqì zào yào zhuāng zài tōngfēng chù.) — Газовую плиту нужно устанавливать в проветриваемом месте.'
        ]
    },

    // === ОТОПЛЕНИЕ ===
    14: {
        glyph: '暖气',
        pinyin: 'nuǎnqì',
        translation: 'центральное отопление',
        classifier: '套',
        examples: [
            '北方冬天有暖气。 (Běifāng dōngtiān yǒu nuǎnqì.) — На севере зимой есть центральное отопление.',
            '这套暖气很热。 (Zhè tào nuǎnqì hěn rè.) — Эта система отопления очень тёплая.',
            '暖气片要放气。 (Nuǎnqì piàn yào fàng qì.) — Радиаторы нужно развоздушивать.'
        ]
    },
    15: {
        glyph: '暖气片',
        pinyin: 'nuǎnqì piàn',
        translation: 'радиатор отопления',
        classifier: '片',
        examples: [
            '墙上装了暖气片。 (Qiáng shàng zhuāng le nuǎnqì piàn.) — На стене установлен радиатор.',
            '这片暖气片不热。 (Zhè piàn nuǎnqì piàn bù rè.) — Этот радиатор не греет.',
            '钢制暖气片很耐用。 (Gāng zhì nuǎnqì piàn hěn nàiyòng.) — Стальные радиаторы очень долговечны.'
        ]
    },
    16: {
        glyph: '地暖',
        pinyin: 'dì nuǎn',
        translation: 'тёплый пол',
        classifier: '套',
        examples: [
            '新房子装了地暖。 (Xīn fángzi zhuāng le dì nuǎn.) — В новой квартире установлен тёплый пол.',
            '地暖比暖气片更舒适。 (Dì nuǎn bǐ nuǎnqì piàn gèng shūshì.) — Тёплый пол комфортнее радиаторов.',
            '地暖管道埋在地板下。 (Dì nuǎn guǎndào mái zài dìbǎn xià.) — Трубы тёплого пола уложены под полом.'
        ]
    },

    // === ИНТЕРНЕТ И СВЯЗЬ ===
    17: {
        glyph: '网络',
        pinyin: 'wǎngluò',
        translation: 'интернет / сеть',
        classifier: '条',
        examples: [
            '家里有宽带网络。 (Jiā lǐ yǒu kuāndài wǎngluò.) — Дома есть широкополосный интернет.',
            '这条网络很稳定。 (Zhè tiáo wǎngluò hěn wěndìng.) — Это сетевое соединение очень стабильно.',
            '网络故障要报修。 (Wǎngluò gùzhàng yào bàoxiū.) — При неполадках в сети нужно вызывать техника.'
        ]
    },
    18: {
        glyph: '网线',
        pinyin: 'wǎngxiàn',
        translation: 'сетевой кабель',
        classifier: '根',
        examples: [
            '电脑用网线连接路由器。 (Diànnǎo yòng wǎngxiàn liánjiē lùyóu qì.) — Компьютер подключён к роутеру сетевым кабелем.',
            '这根网线是超六类的。 (Zhè gēn wǎngxiàn shì chāo liù lèi de.) — Этот кабель категории 6А.',
            '网线要远离电源线。 (Wǎngxiàn yào yuǎnlí diànyuán xiàn.) — Сетевой кабель должен быть вдали от силовых проводов.'
        ]
    },
    19: {
        glyph: '路由器',
        pinyin: 'lùyóu qì',
        translation: 'роутер',
        classifier: '个',
        examples: [
            '路由器在客厅。 (Lùyóu qì zài kètīng.) — Роутер в гостиной.',
            '这个路由器支持WiFi 6。 (Zhège lùyóu qì zhīchí WiFi 6.) — Этот роутер поддерживает WiFi 6.',
            '重启路由器能解决网络问题。 (Chóngqǐ lùyóu qì néng jiějué wǎngluò wèntí.) — Перезагрузка роутера решает проблемы с сетью.'
        ]
    },
    20: {
        glyph: 'WiFi',
        pinyin: 'WiFi',
        translation: 'беспроводной интернет',
        classifier: '个',
        examples: [
            '家里有免费WiFi。 (Jiā lǐ yǒu miǎnfèi WiFi.) — Дома бесплатный WiFi.',
            '这个WiFi信号很强。 (Zhège WiFi xìnhào hěn qiáng.) — Сигнал этого WiFi очень сильный.',
            '连接WiFi需要密码。 (Liánjiē WiFi xūyào mìmǎ.) — Для подключения к WiFi нужен пароль.'
        ]
    },

    // === ВЕНТИЛЯЦИЯ ===
    21: {
        glyph: '通风',
        pinyin: 'tōngfēng',
        translation: 'вентиляция',
        classifier: '套',
        examples: [
            '厨房需要良好通风。 (Chúfáng xūyào liánghǎo tōngfēng.) — Кухня требует хорошей вентиляции.',
            '这套通风系统很安静。 (Zhè tào tōngfēng xìtǒng hěn ānjìng.) — Эта вентиляционная система очень тихая.',
            '通风管道要定期清洗。 (Tōngfēng guǎndào yào dìngqī qīngxǐ.) — Вентиляционные каналы нужно регулярно чистить.'
        ]
    },
    22: {
        glyph: '排气扇',
        pinyin: 'páiqì shàn',
        translation: 'вытяжной вентилятор',
        classifier: '个',
        examples: [
            '浴室有排气扇。 (Yùshì yǒu páiqì shàn.) — В ванной есть вытяжка.',
            '排气扇排出油烟。 (Páiqì shàn páichū yóuyān.) — Вытяжка удаляет кухонный дым.',
            '排气扇要常清理。 (Páiqì shàn yào cháng qīnglǐ.) — Вытяжку нужно часто чистить.'
        ]
    },

    // === ДОПОЛНИТЕЛЬНЫЕ КОММУНИКАЦИИ ===
    23: {
        glyph: '暖气管',
        pinyin: 'nuǎnqì guǎn',
        translation: 'труба отопления',
        classifier: '根',
        examples: [
            '暖气管在地板下。 (Nuǎnqì guǎn zài dìbǎn xià.) — Трубы отопления под полом.',
            '这根暖气管很烫。 (Zhè gēn nuǎnqì guǎn hěn tàng.) — Эта труба отопления очень горячая.',
            '暖气管漏水要马上修。 (Nuǎnqì guǎn lòushuǐ yào mǎshàng xiū.) — При утечке в трубе отопления нужно срочно ремонтировать.'
        ]
    },
    24: {
        glyph: '下水管',
        pinyin: 'xiàshuǐ guǎn',
        translation: 'канализационная труба',
        classifier: '根',
        examples: [
            '下水管堵了。 (Xiàshuǐ guǎn dǔ le.) — Канализационная труба забилась.',
            '厨房和浴室共用下水管。 (Chúfáng hé yùshì gòngyòng xiàshuǐ guǎn.) — Кухня и ванная используют общую канализационную трубу.',
            'PVC下水管很常用。 (PVC xiàshuǐ guǎn hěn chángyòng.) — Канализационные трубы из ПВХ очень распространены.'
        ]
    },
    25: {
        glyph: '智能系统',
        pinyin: 'zhìnéng xìtǒng',
        translation: 'умная система (дома)',
        classifier: '套',
        examples: [
            '新公寓有智能系统。 (Xīn gōngyù yǒu zhìnéng xìtǒng.) — В новой квартире есть умная система.',
            '智能系统控制灯光和温度。 (Zhìnéng xìtǒng kòngzhì dēngguāng hé wēndù.) — Умная система управляет светом и температурой.',
            '通过手机操作智能系统。 (Tōngguò shǒujī cāozuò zhìnéng xìtǒng.) — Управлять умной системой можно через телефон.'
        ]
    }
};

const nounsYard: { [key: number]: DictItem } = {
    // === ЗЕЛЕНЬ И РАСТИТЕЛЬНОСТЬ ===
    1: {
        glyph: '树',
        pinyin: 'shù',
        translation: 'дерево',
        classifier: '棵',
        examples: [
            '院子里有一棵树。 (Yuànzi lǐ yǒu yī kē shù.) — Во дворе одно дерево.',
            '这棵树是桂花树。 (Zhè kē shù shì guìhuā shù.) — Это дерево османтуса.',
            '大树提供阴凉。 (Dà shù tígōng yīnliáng.) — Большие деревья дают тень.'
        ]
    },
    2: {
        glyph: '花',
        pinyin: 'huā',
        translation: 'цветок',
        classifier: '朵',
        examples: [
            '花坛里开满了花。 (Huātán lǐ kāi mǎn le huā.) — В клумбе распустились цветы.',
            '这朵花很香。 (Zhè duǒ huā hěn xiāng.) — Этот цветок очень ароматный.',
            '她喜欢种花。 (Tā xǐhuan zhòng huā.) — Она любит выращивать цветы.'
        ]
    },
    3: {
        glyph: '草坪',
        pinyin: 'cǎopíng',
        translation: 'газон',
        classifier: '片',
        examples: [
            '小区有一片草坪。 (Xiǎoqū yǒu yī piàn cǎopíng.) — Во дворе есть газон.',
            '不要在草坪上踩踏。 (Búyào zài cǎopíng shàng cǎi tà.) — Не наступайте на газон.',
            '自动割草机修剪草坪。 (Zìdòng gēcǎo jī xiūjiǎn cǎopíng.) — Газонокосилка сама стрижёт газон.'
        ]
    },
    4: {
        glyph: '花坛',
        pinyin: 'huātán',
        translation: 'клумба',
        classifier: '个',
        examples: [
            '门口有一个花坛。 (Ménkǒu yǒu yī gè huātán.) — У входа одна клумба.',
            '花坛里种了玫瑰。 (Huātán lǐ zhòng le méiguī.) — В клумбе посажены розы.',
            '物业定期维护花坛。 (Wùyè dìngqī wéihù huātán.) — Управляющая компания регулярно ухаживает за клумбами.'
        ]
    },
    5: {
        glyph: '灌木',
        pinyin: 'guànmù',
        translation: 'кустарник',
        classifier: '丛',
        examples: [
            '围墙边有一丛灌木。 (Wéiqiáng biān yǒu yī cóng guànmù.) — У забора кустарник.',
            '灌木可以做绿篱。 (Guànmù kěyǐ zuò lǜlí.) — Кустарники можно использовать как живую изгородь.',
            '定期修剪灌木。 (Dìngqī xiūjiǎn guànmù.) — Кустарники нужно регулярно подстригать.'
        ]
    },

    // === МЕБЕЛЬ И ОБОРУДОВАНИЕ ДВОРА ===
    6: {
        glyph: '长椅',
        pinyin: 'chángyǐ',
        translation: 'скамейка',
        classifier: '张',
        examples: [
            '树下有一张长椅。 (Shù xià yǒu yī zhāng chángyǐ.) — Под деревом скамейка.',
            '公园里有很多长椅。 (Gōngyuán lǐ yǒu hěn duō chángyǐ.) — В парке много скамеек.',
            '木制长椅很舒适。 (Mù zhì chángyǐ hěn shūshì.) — Деревянные скамейки очень удобны.'
        ]
    },
    7: {
        glyph: '儿童游乐设施',
        pinyin: 'értóng yóulè shèshī',
        translation: 'детская площадка',
        classifier: '套',
        examples: [
            '小区有儿童游乐设施。 (Xiǎoqū yǒu értóng yóulè shèshī.) — Во дворе есть детская площадка.',
            '这套游乐设施很安全。 (Zhè tào yóulè shèshī hěn ānquán.) — Этот комплекс очень безопасен.',
            '孩子们在游乐设施上玩耍。 (Háizimen zài yóulè shèshī shàng wánshuǎ.) — Дети играют на площадке.'
        ]
    },
    8: {
        glyph: '秋千',
        pinyin: 'qiūqiān',
        translation: 'качели',
        classifier: '个',
        examples: [
            '花园里有一个秋千。 (Huāyuán lǐ yǒu yī gè qiūqiān.) — В саду есть качели.',
            '孩子们喜欢荡秋千。 (Háizimen xǐhuan dàng qiūqiān.) — Дети любят качаться на качелях.',
            '秋千要用结实的绳子。 (Qiūqiān yào yòng jiēshi de shéngzi.) — Для качелей нужны прочные верёвки.'
        ]
    },
    9: {
        glyph: '滑梯',
        pinyin: 'huátī',
        translation: 'горка',
        classifier: '个',
        examples: [
            '游乐场有滑梯。 (Yóulèchǎng yǒu huátī.) — На площадке есть горка.',
            '滑梯是塑料做的。 (Huátī shì sùliào zuò de.) — Горка сделана из пластика.',
            '小心滑梯边缘。 (Xiǎoxīn huátī biānyuán.) — Осторожно у края горки.'
        ]
    },
    10: {
        glyph: '沙坑',
        pinyin: 'shākēng',
        translation: 'песочница',
        classifier: '个',
        examples: [
            '沙坑里有玩具。 (Shākēng lǐ yǒu wánjù.) — В песочнице игрушки.',
            '沙坑要定期换沙。 (Shākēng yào dìngqī huàn shā.) — Песок в песочнице нужно регулярно менять.',
            '孩子们在沙坑里玩沙。 (Háizimen zài shākēng lǐ wán shā.) — Дети играют в песочнице.'
        ]
    },

    // === ОСВЕЩЕНИЕ И БЕЗОПАСНОСТЬ ===
    11: {
        glyph: '路灯',
        pinyin: 'lùdēng',
        translation: 'уличный фонарь',
        classifier: '盏',
        examples: [
            '小路两旁有路灯。 (Xiǎo lù liǎng páng yǒu lùdēng.) — По обеим сторонам дорожки уличные фонари.',
            '太阳能路灯很环保。 (Tàiyángnéng lùdēng hěn huánbǎo.) — Солнечные фонари очень экологичны.',
            '路灯晚上自动亮。 (Lùdēng wǎnshàng zìdòng liàng.) — Фонари включаются автоматически ночью.'
        ]
    },
    12: {
        glyph: '摄像头',
        pinyin: 'shèxiàng tóu',
        translation: 'камера видеонаблюдения',
        classifier: '个',
        examples: [
            '小区入口有摄像头。 (Xiǎoqū rùkǒu yǒu shèxiàng tóu.) — У входа во двор камера наблюдения.',
            '摄像头保障安全。 (Shèxiàng tóu bǎozhàng ānquán.) — Камеры обеспечивают безопасность.',
            '不要遮挡摄像头。 (Búyào zhēdǎng shèxiàng tóu.) — Не загораживайте камеру.'
        ]
    },
    13: {
        glyph: '门禁',
        pinyin: 'ménjìn',
        translation: 'система контроля доступа',
        classifier: '套',
        examples: [
            '小区有门禁系统。 (Xiǎoqū yǒu ménjìn xìtǒng.) — Во дворе установлена система контроля доступа.',
            '用门禁卡进入大门。 (Yòng ménjìn kǎ jìnrù dà mén.) — Вход во двор по пропускной карте.',
            '门禁系统防止外人进入。 (Ménjìn xìtǒng fángzhǐ wàirén jìnrù.) — Система не пускает посторонних.'
        ]
    },

    // === ХРАНЕНИЕ И УТИЛИЗАЦИЯ ===
    14: {
        glyph: '垃圾桶',
        pinyin: 'lājī tǒng',
        translation: 'мусорный контейнер',
        classifier: '个',
        examples: [
            '每栋楼前有垃圾桶。 (Měi dòng lóu qián yǒu lājī tǒng.) — Перед каждым подъездом мусорный контейнер.',
            '分类垃圾桶分三色。 (Fēnlèi lājī tǒng fēn sān sè.) — Раздельные контейнеры трёх цветов.',
            '垃圾桶要盖好盖子。 (Lājī tǒng yào gàihǎo gàizi.) — Крышку контейнера нужно плотно закрывать.'
        ]
    },
    15: {
        glyph: '回收站',
        pinyin: 'huíshōu zhàn',
        translation: 'пункт переработки',
        classifier: '个',
        examples: [
            '小区里有回收站。 (Xiǎoqū lǐ yǒu huíshōu zhàn.) — Во дворе есть пункт переработки отходов.',
            '把塑料瓶放进回收站。 (Bǎ sùliào píng fàng jìn huíshōu zhàn.) — Положи пластиковую бутылку в контейнер для переработки.',
            '回收站促进环保。 (Huíshōu zhàn cùjìn huánbǎo.) — Пункты переработки способствуют экологии.'
        ]
    },
    16: {
        glyph: '自行车棚',
        pinyin: 'zìxíngchē péng',
        translation: 'велосипедная парковка',
        classifier: '个',
        examples: [
            '楼下有自行车棚。 (Lóu xià yǒu zìxíngchē péng.) — Под зданием велопарковка.',
            '自行车棚有锁。 (Zìxíngchē péng yǒu suǒ.) — В велопарковке есть замки.',
            '把自行车停在车棚里。 (Bǎ zìxíngchē tíng zài chē péng lǐ.) — Оставляйте велосипед в парковке.'
        ]
    },

    // === ПОКРЫТИЕ И ДОРОЖКИ ===
    17: {
        glyph: '小路',
        pinyin: 'xiǎo lù',
        translation: 'дорожка (пешеходная)',
        classifier: '条',
        examples: [
            '花园里有一条小路。 (Huāyuán lǐ yǒu yī tiáo xiǎo lù.) — В саду есть дорожка.',
            '石板小路很美观。 (Shíbǎn xiǎo lù hěn měiguān.) — Дорожка из брусчатки очень красива.',
            '雨后小路很滑。 (Yǔ hòu xiǎo lù hěn huá.) — После дождя дорожка скользкая.'
        ]
    },
    18: {
        glyph: '地砖',
        pinyin: 'dì zhuān',
        translation: 'тротуарная плитка',
        classifier: '块',
        examples: [
            '院子铺了地砖。 (Yuànzi pū le dì zhuān.) — Двор выложен тротуарной плиткой.',
            '防滑地砖适合雨天。 (Fáng huá dì zhuān shìhé yǔ tiān.) — Противоскользящая плитка подходит для дождливой погоды.',
            '这块地砖松动了。 (Zhè kuài dì zhuān sōngdòng le.) — Эта плитка расшаталась.'
        ]
    },

    // === ПРОЧИЕ ЭЛЕМЕНТЫ ДВОРА ===
    19: {
        glyph: '围墙',
        pinyin: 'wéiqiáng',
        translation: 'забор / ограда',
        classifier: '堵',
        examples: [
            '小区有围墙。 (Xiǎoqū yǒu wéiqiáng.) — Двор окружён забором.',
            '围墙上有铁丝网。 (Wéiqiáng shàng yǒu tiěsī wǎng.) — На заборе колючая проволока.',
            '围墙防止外人进入。 (Wéiqiáng fángzhǐ wàirén jìnrù.) — Забор не пускает посторонних.'
        ]
    },
    20: {
        glyph: '大门',
        pinyin: 'dà mén',
        translation: 'входные ворота',
        classifier: '扇',
        examples: [
            '小区大门有保安。 (Xiǎoqū dà mén yǒu bǎo\'ān.) — У входных ворот охранник.',
            '铁艺大门很坚固。 (Tiě yì dà mén hěn jiāngù.) — Кованые ворота очень прочные.',
            '晚上大门会关闭。 (Wǎnshàng dà mén huì guānbì.) — Ворота закрываются вечером.'
        ]
    },
    21: {
        glyph: '喷泉',
        pinyin: 'pēnquán',
        translation: 'фонтан',
        classifier: '个',
        examples: [
            '广场中央有喷泉。 (Guǎngchǎng zhōngyāng yǒu pēnquán.) — В центре площади фонтан.',
            '喷泉晚上会亮灯。 (Pēnquán wǎnshàng huì liàng dēng.) — Фонтан ночью подсвечивается.',
            '孩子们喜欢在喷泉边玩。 (Háizimen xǐhuan zài pēnquán biān wán.) — Дети любят играть у фонтана.'
        ]
    },
    22: {
        glyph: '凉亭',
        pinyin: 'liángtíng',
        translation: 'беседка',
        classifier: '个',
        examples: [
            '花园里有一个凉亭。 (Huāyuán lǐ yǒu yī gè liángtíng.) — В саду стоит беседка.',
            '老人在凉亭下下棋。 (Lǎorén zài liángtíng xià xià qí.) — Пожилые люди играют в шахматы в беседке.',
            '木制凉亭很传统。 (Mù zhì liángtíng hěn chuántǒng.) — Деревянная беседка очень традиционная.'
        ]
    },
    23: {
        glyph: '晾衣绳',
        pinyin: 'liàng yī shéng',
        translation: 'верёвка для сушки белья',
        classifier: '根',
        examples: [
            '阳台有晾衣绳。 (Yángtái yǒu liàng yī shéng.) — На балконе верёвка для сушки.',
            '把衣服挂在晾衣绳上。 (Bǎ yīfu guà zài liàng yī shéng shàng.) — Повесь одежду на верёвку.',
            '晴天用晾衣绳晒衣服。 (Qíngtiān yòng liàng yī shéng shài yīfu.) — В солнечную погоду сушите бельё на верёвке.'
        ]
    },
    24: {
        glyph: '遮阳棚',
        pinyin: 'zhēyáng péng',
        translation: 'навес от солнца',
        classifier: '个',
        examples: [
            '停车场有遮阳棚。 (Tíngchē chǎng yǒu zhēyáng péng.) — На парковке навес от солнца.',
            '遮阳棚可以挡雨。 (Zhēyáng péng kěyǐ dǎng yǔ.) — Навес защищает и от дождя.',
            '可伸缩遮阳棚很方便。 (Kě shēnsuō zhēyáng péng hěn fāngbiàn.) — Раздвижной навес очень удобен.'
        ]
    },
    25: {
        glyph: '宠物厕所',
        pinyin: 'chǒngwù cèsuǒ',
        translation: 'туалет для собак',
        classifier: '个',
        examples: [
            '小区有宠物厕所。 (Xiǎoqū yǒu chǒngwù cèsuǒ.) — Во дворе есть туалет для собак.',
            '请带宠物使用宠物厕所。 (Qǐng dài chǒngwù shǐyòng chǒngwù cèsuǒ.) — Пожалуйста, пользуйтесь туалетом для питомцев.',
            '宠物厕所减少环境污染。 (Chǒngwù cèsuǒ jiǎnshǎo huánjìng wūrǎn.) — Туалеты для животных снижают загрязнение территории.'
        ]
    }
};

const nounsStreet: { [key: number]: DictItem } = {
    // === ДОРОЖНОЕ ПОКРЫТИЕ И ЭЛЕМЕНТЫ ===
    1: {
        glyph: '路',
        pinyin: 'lù',
        translation: 'дорога',
        classifier: '条',
        examples: [
            '这条路通向市中心。 (Zhè tiáo lù tōng xiàng shì zhōngxīn.) — Эта дорога ведёт в центр города.',
            '柏油路很平整。 (Bólù lù hěn píngzhěng.) — Асфальтовая дорога очень ровная.',
            '雨后路很滑。 (Yǔ hòu lù hěn huá.) — После дождя дорога скользкая.'
        ]
    },
    2: {
        glyph: '人行道',
        pinyin: 'rénxíng dào',
        translation: 'тротуар',
        classifier: '条',
        examples: [
            '请走人行道。 (Qǐng zǒu rénxíng dào.) — Пожалуйста, идите по тротуару.',
            '人行道很宽。 (Rénxíng dào hěn kuān.) — Тротуар очень широкий.',
            '人行道上禁止停车。 (Rénxíng dào shàng jìnzhǐ tíng chē.) — На тротуаре запрещена парковка.'
        ]
    },
    3: {
        glyph: '车道',
        pinyin: 'chē dào',
        translation: 'полоса движения',
        classifier: '条',
        examples: [
            '这条车道是公交专用。 (Zhè tiáo chē dào shì gōngjiāo zhuānyòng.) — Эта полоса — только для автобусов.',
            '高速公路上有三条车道。 (Gāosù gōnglù shàng yǒu sān tiáo chē dào.) — На шоссе три полосы.',
            '不要随意变道。 (Búyào suíyì biàndào.) — Не перестраивайтесь без необходимости.'
        ]
    },
    4: {
        glyph: '斑马线',
        pinyin: 'bānmǎ xiàn',
        translation: 'пешеходный переход',
        classifier: '条',
        examples: [
            '过马路要走斑马线。 (Guò mǎlù yào zǒu bānmǎ xiàn.) — Переходите дорогу по «зебре».',
            '斑马线前车辆要让行。 (Bānmǎ xiàn qián chēliàng yào ràng xíng.) — Автомобили должны уступать на пешеходном переходе.',
            '雨天斑马线很滑。 (Yǔ tiān bānmǎ xiàn hěn huá.) — В дождь «зебра» скользкая.'
        ]
    },
    5: {
        glyph: '路肩',
        pinyin: 'lù jiān',
        translation: 'обочина',
        classifier: '条',
        examples: [
            '紧急时停在路肩。 (Jǐnjí shí tíng zài lù jiān.) — В экстренной ситуации остановитесь на обочине.',
            '路肩不能正常行车。 (Lù jiān bù néng zhèngcháng xíng chē.) — По обочине нельзя ездить в обычном режиме.',
            '高速路肩有救援电话。 (Gāosù lù jiān yǒu jiùyuán diànhuà.) — На обочине шоссе есть телефоны экстренной помощи.'
        ]
    },

    // === ДОРОЖНЫЕ ЗНАКИ И СИГНАЛЫ ===
    6: {
        glyph: '交通信号灯',
        pinyin: 'jiāotōng xìnhào dēng',
        translation: 'светофор',
        classifier: '个',
        examples: [
            '路口有交通信号灯。 (Lùkǒu yǒu jiāotōng xìnhào dēng.) — На перекрёстке светофор.',
            '红灯停，绿灯行。 (Hóng dēng tíng, lǜ dēng xíng.) — Красный — стоп, зелёный — вперёд.',
            '智能交通信号灯调节车流。 (Zhìnéng jiāotōng xìnhào dēng tiáojié chēliú.) — Умные светофоры регулируют поток машин.'
        ]
    },
    7: {
        glyph: '红绿灯',
        pinyin: 'hóng lǜ dēng',
        translation: 'светофор (разг.)',
        classifier: '个',
        examples: [
            '等红绿灯变绿。 (Děng hóng lǜ dēng biàn lǜ.) — Ждите, пока светофор станет зелёным.',
            '红绿灯坏了。 (Hóng lǜ dēng huài le.) — Светофор сломался.',
            '这个路口红绿灯时间很长。 (Zhège lùkǒu hóng lǜ dēng shíjiān hěn cháng.) — На этом перекрёстке долгая смена сигнала.'
        ]
    },
    8: {
        glyph: '交通标志',
        pinyin: 'jiāotōng biāozhì',
        translation: 'дорожный знак',
        classifier: '个',
        examples: [
            '注意前方交通标志。 (Zhùyì qiánfāng jiāotōng biāozhì.) — Обратите внимание на дорожные знаки впереди.',
            '禁止停车标志是圆形的。 (Jìnzhǐ tíngchē biāozhì shì yuánxíng de.) — Знак «Стоянка запрещена» — круглый.',
            '交通标志要清晰可见。 (Jiāotōng biāozhì yào qīngxī kějiàn.) — Дорожные знаки должны быть хорошо видны.'
        ]
    },
    9: {
        glyph: '路标',
        pinyin: 'lùbiāo',
        translation: 'указатель (направления)',
        classifier: '个',
        examples: [
            '路标指示去机场的方向。 (Lùbiāo zhǐshì qù jīchǎng de fāngxiàng.) — Указатель показывает дорогу в аэропорт.',
            '高速公路有电子路标。 (Gāosù gōnglù yǒu diànzǐ lùbiāo.) — На шоссе стоят электронные указатели.',
            '路标上写着地名。 (Lùbiāo shàng xiě zhe dìmíng.) — На указателе написано название места.'
        ]
    },

    // === ОСВЕЩЕНИЕ ===
    10: {
        glyph: '路灯',
        pinyin: 'lùdēng',
        translation: 'уличный фонарь',
        classifier: `盏`,
        examples: [
            '道路两旁有路灯。 (Dàolù liǎng páng yǒu lùdēng.) — По обеим сторонам дороги уличные фонари.',
            '太阳能路灯节能环保。 (Tàiyángnéng lùdēng jié néng huánbǎo.) — Солнечные фонари энергосберегающие и экологичные.',
            '路灯晚上自动开启。 (Lùdēng wǎnshàng zìdòng kāiqǐ.) — Фонари включаются автоматически ночью.'
        ]
    },
    11: {
        glyph: '照明灯',
        pinyin: 'zhàomíng dēng',
        translation: 'осветительная лампа (дорожная)',
        classifier: `盏`,
        examples: [
            '隧道里有照明灯。 (Suìdào lǐ yǒu zhàomíng dēng.) — В тоннеле есть освещение.',
            '照明灯亮度要足够。 (Zhàomíng dēng liàngdù yào zúgòu.) — Яркость ламп должна быть достаточной.',
            '坏的照明灯要及时更换。 (Huài de zhàomíng dēng yào j及时 gēnghuàn.) — Перегоревшие лампы нужно заменять вовремя.'
        ]
    },

    // === ПОВЕРХНОСТЬ И БЕЗОПАСНОСТЬ ===
    12: {
        glyph: '沥青',
        pinyin: 'lìqīng',
        translation: 'асфальт',
        classifier: `层`,
        examples: [
            '新铺的沥青很软。 (Xīn pū de lìqīng hěn ruǎn.) — Свежеуложенный асфальт мягкий.',
            '这层沥青很平整。 (Zhè céng lìqīng hěn píngzhěng.) — Слой асфальта очень ровный.',
            '雨天沥青路面反光。 (Yǔ tiān lìqīng lùmiàn fǎn guāng.) — В дождь асфальт отражает свет.'
        ]
    },
    13: {
        glyph: '减速带',
        pinyin: 'jiǎnsù dài',
        translation: 'лежачий полицейский',
        classifier: `条`,
        examples: [
            '学校门口有减速带。 (Xuéxiào ménkǒu yǒu jiǎnsù dài.) — У входа в школу «лежачий полицейский».',
            '减速带提醒司机慢行。 (Jiǎnsù dài tíxǐng sījī màn xíng.) — «Лежачий полицейский» напоминает водителям снизить скорость.',
            '车辆过减速带要小心。 (Chēliàng guò jiǎnsù dài yào xiǎoxīn.) — Машины должны осторожно проезжать через него.'
        ]
    },
    14: {
        glyph: '护栏',
        pinyin: 'hùlán',
        translation: 'дорожное ограждение',
        classifier: `段`,
        examples: [
            '高速公路有金属护栏。 (Gāosù gōnglù yǒu jīnshǔ hùlán.) — На шоссе металлическое ограждение.',
            '护栏防止车辆冲出道路。 (Hùlán fángzhǐ chēliàng chōng chū dàolù.) — Ограждение предотвращает съезд с дороги.',
            '这段护栏需要维修。 (Zhè duàn hùlán xūyào wéixiū.) — Этот участок ограждения нуждается в ремонте.'
        ]
    },
    15: {
        glyph: '隔离带',
        pinyin: 'gélí dài',
        translation: 'разделительная полоса',
        classifier: `条`,
        examples: [
            '主干道中间有隔离带。 (Zhǔgàn dào zhōngjiān yǒu gélí dài.) — Посередине магистрали разделительная полоса.',
            '隔离带种了灌木。 (Gélí dài zhòng le guànmù.) — На разделительной полосе посажены кусты.',
            '不要跨越隔离带。 (Búyào kuàyuè gélí dài.) — Не пересекайте разделительную полосу.'
        ]
    },

    // === ПРОЧИЕ ЭЛЕМЕНТЫ УЛИЦЫ ===
    16: {
        glyph: '下水道',
        pinyin: 'xiàshuǐ dào',
        translation: 'ливневая канализация',
        classifier: `个`,
        examples: [
            '雨水流入下水道。 (Yǔshuǐ liú rù xiàshuǐ dào.) — Дождевая вода уходит в ливнёвку.',
            '下水道井盖是圆形的。 (Xiàshuǐ dào jǐnggài shì yuánxíng de.) — Крышка люка круглая.',
            '清理下水道防止积水。 (Qīnglǐ xiàshuǐ dào fángzhǐ jīshuǐ.) — Чистка ливнёвки предотвращает подтопление.'
        ]
    },
    17: {
        glyph: '井盖',
        pinyin: 'jǐnggài',
        translation: 'крышка люка',
        classifier: `个`,
        examples: [
            '路上有一个井盖。 (Lù shàng yǒu yī gè jǐnggài.) — На дороге крышка люка.',
            '井盖被盗很危险。 (Jǐnggài bèi dào hěn wēixiǎn.) — Кража крышек люков очень опасна.',
            '井盖上写着“污水”。 (Jǐnggài shàng xiě zhe “wūshuǐ”.) — На крышке написано «сточные воды».'
        ]
    },
    18: {
        glyph: '公交站',
        pinyin: 'gōngjiāo zhàn',
        translation: 'остановка общественного транспорта',
        classifier: `个`,
        examples: [
            '下一个公交站是医院。 (Xià yī gè gōngjiāo zhàn shì yīyuàn.) — Следующая остановка — у больницы.',
            '公交站有遮雨棚。 (Gōngjiāo zhàn yǒu zhē yǔ péng.) — На остановке навес от дождя.',
            '在公交站等车。 (Zài gōngjiāo zhàn děng chē.) — Ждать автобус на остановке.'
        ]
    },
    19: {
        glyph: '站牌',
        pinyin: 'zhànpái',
        translation: 'указатель маршрутов',
        classifier: `个`,
        examples: [
            '站牌上写着路线。 (Zhànpái shàng xiě zhe lùxiàn.) — На табличке указаны маршруты.',
            '电子站牌显示到站时间。 (Diànzǐ zhànpái xiǎnshì dào zhàn shíjiān.) — Электронная табличка показывает время прибытия.',
            '站牌要保持清洁。 (Zhànpái yào bǎochí jié.) — Табличку нужно держать в чистоте.'
        ]
    },
    20: {
        glyph: '人行天桥',
        pinyin: 'rénxíng tiānqiáo',
        translation: 'надземный пешеходный переход',
        classifier: `座`,
        examples: [
            '路口有人行天桥。 (Lùkǒu yǒu rénxíng tiānqiáo.) — На перекрёстке надземный переход.',
            '走人行天桥更安全。 (Zǒu rénxíng tiānqiáo gèng ānquán.) — Надземный переход безопаснее.',
            '这座人行天桥有电梯。 (Zhè zuò rénxíng tiānqiáo yǒu diàntī.) — В этом переходе есть лифт.'
        ]
    },
    21: {
        glyph: '地下通道',
        pinyin: 'dìxià tōngdào',
        translation: 'подземный пешеходный переход',
        classifier: `个`,
        examples: [
            '火车站有地下通道。 (Huǒchē zhàn yǒu dìxià tōngdào.) — У вокзала подземный переход.',
            '地下通道连接两个商场。 (Dìxià tōngdào liánjiē liǎng gè shāngchǎng.) — Подземный переход соединяет два ТЦ.',
            '地下通道有照明和监控。 (Dìxià tōngdào yǒu zhàomíng hé jiānkòng.) — В переходе есть освещение и камеры.'
        ]
    },
    22: {
        glyph: '自行车道',
        pinyin: 'zìxíngchē dào',
        translation: 'велодорожка',
        classifier: `条`,
        examples: [
            '河边有自行车道。 (Hé biān yǒu zìxíngchē dào.) — У реки велодорожка.',
            '请在自行车道骑车。 (Qǐng zài zìxíngchē dào qí chē.) — Езжайте по велодорожке.',
            '自行车道与机动车道分开。 (Zìxíngchē dào yǔ jīdòng chē dào fēnkāi.) — Велодорожка отделена от проезжей части.'
        ]
    },
    23: {
        glyph: '停车位',
        pinyin: 'tíngchē wèi',
        translation: 'парковочное место',
        classifier: `个`,
        examples: [
            '路边有停车位。 (Lù biān yǒu tíngchē wèi.) — У дороги есть парковочные места.',
            '这个停车位是残疾人的。 (Zhège tíngchē wèi shì cánjí rén de.) — Это место для инвалидов.',
            '夜间停车位免费。 (Yèjiān tíngchē wèi miǎnfèi.) — Ночные парковки бесплатные.'
        ]
    },
    24: {
        glyph: '交通摄像头',
        pinyin: 'jiāotōng shèxiàng tóu',
        translation: 'камера фиксации нарушений',
        classifier: `个`,
        examples: [
            '路口有交通摄像头。 (Lùkǒu yǒu jiāotōng shèxiàng tóu.) — На перекрёстке камера ДПС.',
            '摄像头拍超速车辆。 (Shèxiàng tóu pāi chāo sù chēliàng.) — Камера фиксирует превышение скорости.',
            '交通摄像头提高安全性。 (Jiāotōng shèxiàng tóu tígāo ānquán xìng.) — Камеры повышают безопасность.'
        ]
    },
    25: {
        glyph: '道路标线',
        pinyin: 'dàolù biāoxiàn',
        translation: 'дорожная разметка',
        classifier: `条`,
        examples: [
            '白色实线禁止变道。 (Báisè shí xiàn jìnzhǐ biàndào.) — Сплошная белая линия запрещает перестраиваться.',
            '斑马线是道路标线的一种。 (Bānmǎ xiàn shì dàolù biāoxiàn de yī zhǒng.) — «Зебра» — вид дорожной разметки.',
            '雨天道路标线反光。 (Yǔ tiān dàolù biāoxiàn fǎnguāng.) — В дождь разметка светоотражающая.'
        ]
    }
};

const nounsTransportInfrastructure: { [key: number]: DictItem } = {
    // === ОСТАНОВКИ И СТАНЦИИ ===
    1: {
        glyph: '公交站',
        pinyin: 'gōngjiāo zhàn',
        translation: 'автобусная остановка',
        classifier: '个',
        examples: [
            '我在公交站等车。 (Wǒ zài gōngjiāo zhàn děng chē.) — Я жду автобус на остановке.',
            '这个公交站有电子显示屏。 (Zhège gōngjiāo zhàn yǒu diànzǐ xiǎnshì píng.) — На этой остановке электронное табло.',
            '公交站应有遮雨棚。 (Gōngjiāo zhàn yīng yǒu zhē yǔ péng.) — На остановке должен быть навес от дождя.'
        ]
    },
    2: {
        glyph: '地铁站',
        pinyin: 'dìtiě zhàn',
        translation: 'станция метро',
        classifier: '个',
        examples: [
            '地铁站在地下。 (Dìtiě zhàn zài dìxià.) — Станция метро под землёй.',
            '从地铁站到公司步行十分钟。 (Cóng dìtiě zhàn dào gōngsī bùxíng shí fēnzhōng.) — От станции метро до офиса десять минут пешком.',
            '地铁站有安检。 (Dìtiě zhàn yǒu ānjiǎn.) — На станции метро досмотр.'
        ]
    },
    3: {
        glyph: '火车站',
        pinyin: 'huǒchē zhàn',
        translation: 'железнодорожный вокзал',
        classifier: '个',
        examples: [
            '我们从火车站出发。 (Wǒmen cóng huǒchē zhàn chūfā.) — Мы отправляемся с железнодорожного вокзала.',
            '火车站人很多。 (Huǒchē zhàn rén hěn duō.) — На вокзале много людей.',
            '火车站有行李寄存处。 (Huǒchē zhàn yǒu xíngli jìcún chù.) — На вокзале камера хранения.'
        ]
    },
    4: {
        glyph: '机场',
        pinyin: 'jīchǎng',
        translation: 'аэропорт',
        classifier: '个',
        examples: [
            '机场在城市郊区。 (Jīchǎng zài chéngshì jiāoqū.) — Аэропорт находится на окраине города.',
            '从机场到市区坐机场快线。 (Cóng jīchǎng dào shìqū zuò jīchǎng kuàixiàn.) — От аэропорта до центра — аэроэкспресс.',
            '机场安检很严格。 (Jīchǎng ānjiǎn hěn yángé.) — В аэропорту строгий досмотр.'
        ]
    },
    5: {
        glyph: '客运站',
        pinyin: 'kèyùn zhàn',
        translation: 'автовокзал',
        classifier: '个',
        examples: [
            '长途汽车从客运站出发。 (Chángtú qìchē cóng kèyùn zhàn chūfā.) — Междугородние автобусы отправляются с автовокзала.',
            '客运站有售票窗口。 (Kèyùn zhàn yǒu shòupiào chuāngkǒu.) — В автовокзале кассы.',
            '客运站提供行李寄存。 (Kèyùn zhàn tígōng xíngli jìcún.) — В автовокзале можно сдать багаж.'
        ]
    },

    // === ДОРОЖНЫЕ СООРУЖЕНИЯ ===
    6: {
        glyph: '立交桥',
        pinyin: 'lìjiāo qiáo',
        translation: 'эстакада / развязка',
        classifier: '座',
        examples: [
            '城市中心有大型立交桥。 (Chéngshì zhōngxīn yǒu dàxíng lìjiāo qiáo.) — В центре города большая развязка.',
            '立交桥缓解交通拥堵。 (Lìjiāo qiáo huǎnjiě jiāotōng yōngdǔ.) — Эстакада снижает заторы.',
            '这座立交桥有三层。 (Zhè zuò lìjiāo qiáo yǒu sān céng.) — Эта развязка трёхуровневая.'
        ]
    },
    7: {
        glyph: '天桥',
        pinyin: 'tiānqiáo',
        translation: 'надземный пешеходный мост',
        classifier: '座',
        examples: [
            '学校门口有天桥。 (Xuéxiào ménkǒu yǒu tiānqiáo.) — У школы надземный пешеходный мост.',
            '天桥连接两个商场。 (Tiānqiáo liánjiē liǎng gè shāngchǎng.) — Мост соединяет два торговых центра.',
            '这座天桥有电梯。 (Zhè zuò tiānqiáo yǒu diàntī.) — В этом мосте есть лифт.'
        ]
    },
    8: {
        glyph: '地下通道',
        pinyin: 'dìxià tōngdào',
        translation: 'подземный пешеходный переход',
        classifier: '个',
        examples: [
            '火车站前有地下通道。 (Huǒchē zhàn qián yǒu dìxià tōngdào.) — Перед вокзалом подземный переход.',
            '地下通道防止行人乱穿马路。 (Dìxià tōngdào fángzhǐ xíngrén luàn chuān mǎlù.) — Подземный переход не даёт пешеходам перебегать дорогу.',
            '地下通道有照明和监控。 (Dìxià tōngdào yǒu zhàomíng hé jiānkòng.) — В переходе есть освещение и камеры.'
        ]
    },
    9: {
        glyph: '隧道',
        pinyin: 'suìdào',
        translation: 'туннель',
        classifier: '条',
        examples: [
            '山路穿过一条隧道。 (Shānlù chuānguò yī tiáo suìdào.) — Горная дорога проходит через туннель.',
            '海底隧道连接两个岛屿。 (Hǎidǐ suìdào liánjiē liǎng gè dǎoyǔ.) — Подводный тоннель соединяет два острова.',
            '隧道内禁止变道。 (Suìdào nèi jìnzhǐ biàndào.) — В тоннеле запрещено перестраиваться.'
        ]
    },
    10: {
        glyph: '桥梁',
        pinyin: 'qiáoliáng',
        translation: 'мост',
        classifier: '座',
        examples: [
            '长江上有许多桥梁。 (Cháng Jiāng shàng yǒu xǔduō qiáoliáng.) — На реке Янцзы много мостов.',
            '这座桥梁是悬索桥。 (Zhè zuò qiáoliáng shì xuánsuǒ qiáo.) — Этот мост — висячий.',
            '桥梁需要定期检修。 (Qiáoliáng xūyào dìngqī jiǎnxiū.) — Мосты нужно регулярно осматривать.'
        ]
    },

    // === ПАРКОВКА И ДОРОЖНЫЕ ОБЪЕКТЫ ===
    11: {
        glyph: '停车场',
        pinyin: 'tíngchē chǎng',
        translation: 'парковка',
        classifier: '个',
        examples: [
            '商场地下有停车场。 (Shāngchǎng dìxià yǒu tíngchē chǎng.) — Под ТЦ находится парковка.',
            '这个停车场按小时收费。 (Zhège tíngchē chǎng àn xiǎoshí shōufèi.) — Эта парковка почасовая.',
            '停车场有监控和保安。 (Tíngchē chǎng yǒu jiānkòng hé bǎo\'ān.) — На парковке камеры и охрана.'
        ]
    },
    12: {
        glyph: '停车位',
        pinyin: 'tíngchē wèi',
        translation: 'парковочное место',
        classifier: '个',
        examples: [
            '我找到了一个停车位。 (Wǒ zhǎodào le yī gè tíngchē wèi.) — Я нашёл парковочное место.',
            '残疾人停车位有特殊标志。 (Cánjí rén tíngchē wèi yǒu tèshū biāozhì.) — Парковка для инвалидов имеет специальный знак.',
            '夜间路边停车位免费。 (Yèjiān lù biān tíngchē wèi miǎnfèi.) — Ночью парковка у дороги бесплатная.'
        ]
    },
    13: {
        glyph: '加油站',
        pinyin: 'jiāyóu zhàn',
        translation: 'АЗС (заправочная станция)',
        classifier: '个',
        examples: [
            '高速路旁有加油站。 (Gāosù lù páng yǒu jiāyóu zhàn.) — У шоссе есть АЗС.',
            '这个加油站可以刷信用卡。 (Zhège jiāyóu zhàn kěyǐ shuā xìnyòngkǎ.) — На этой заправке можно расплатиться картой.',
            '加油站禁止吸烟。 (Jiāyóu zhàn jìnzhǐ xīyān.) — На АЗС запрещено курить.'
        ]
    },
    14: {
        glyph: '收费站',
        pinyin: 'shōufèi zhàn',
        translation: 'пункт оплаты (на шоссе)',
        classifier: '个',
        examples: [
            '高速公路上有收费站。 (Gāosù gōnglù shàng yǒu shōufèi zhàn.) — На шоссе есть пункт оплаты.',
            '通过收费站要减速。 (Tōngguò shōufèi zhàn yào jiǎnsù.) — Проезжая через пункт, снизьте скорость.',
            'ETC车道不用停车。 (ETC chēdào bú yòng tíngchē.) — В полосе ETC не нужно останавливаться.'
        ]
    },
    15: {
        glyph: '路肩',
        pinyin: 'lù jiān',
        translation: 'обочина (для экстренной остановки)',
        classifier: '条',
        examples: [
            '车辆故障停在路肩。 (Chēliàng gùzhàng tíng zài lù jiān.) — При поломке машина останавливается на обочине.',
            '路肩不能作为行车道。 (Lù jiān bù néng zuòwéi xíngchē dào.) — Обочину нельзя использовать как полосу.',
            '高速路肩有紧急电话。 (Gāosù lù jiān yǒu jǐnjí diànhuà.) — На обочине шоссе — телефоны экстренной связи.'
        ]
    },

    // === ЖЕЛЕЗНОДОРОЖНЫЕ СООРУЖЕНИЯ ===
    16: {
        glyph: '铁路',
        pinyin: 'tiělù',
        translation: 'железная дорога',
        classifier: '条',
        examples: [
            '这条铁路连接北京和上海。 (Zhè tiáo tiělù liánjiē Běijīng hé Shànghǎi.) — Эта железная дорога соединяет Пекин и Шанхай.',
            '铁路经过山区。 (Tiělù jīngguò shānqū.) — Железная дорога проходит через горы.',
            '高铁铁路很平直。 (Gāotiě tiělù hěn píngzhí.) — Ж/д пути скоростного поезда очень ровные.'
        ]
    },
    17: {
        glyph: '轨道',
        pinyin: 'guǐdào',
        translation: 'рельсы',
        classifier: '条',
        examples: [
            '地铁在轨道上运行。 (Dìtiě zài guǐdào shàng yùnxíng.) — Метро движется по рельсам.',
            '不要在轨道上行走。 (Búyào zài guǐdào shàng xíngzǒu.) — Не ходите по рельсам.',
            '轨道需要定期维护。 (Guǐdào xūyào dìngqī wéihù.) — Рельсы нужно регулярно обслуживать.'
        ]
    },
    18: {
        glyph: '道口',
        pinyin: 'dàokǒu',
        translation: 'железнодорожный переезд',
        classifier: '个',
        examples: [
            '道口有栏杆和警报器。 (Dàokǒu yǒu lángān hé jǐngbàoqì.) — На переезде шлагбаум и сирена.',
            '火车来时道口关闭。 (Huǒchē lái shí dàokǒu guānbì.) — При приближении поезда переезд закрывается.',
            '不要抢越道口。 (Búyào qiǎng yuè dàokǒu.) — Не перебегайте переезд в последний момент.'
        ]
    },

    // === АВИАЦИОННАЯ ИНФРАСТРУКТУРА ===
    19: {
        glyph: '跑道',
        pinyin: 'pǎodào',
        translation: 'взлётно-посадочная полоса',
        classifier: '条',
        examples: [
            '机场有两条跑道。 (Jīchǎng yǒu liǎng tiáo pǎodào.) — В аэропорту две ВПП.',
            '跑道正在维修。 (Pǎodào zhèngzài wéixiū.) — ВПП находится на ремонте.',
            '雨天跑道很滑。 (Yǔ tiān pǎodào hěn huá.) — В дождь ВПП скользкая.'
        ]
    },
    20: {
        glyph: '航站楼',
        pinyin: 'hángzhàn lóu',
        translation: 'терминал (аэропорта)',
        classifier: '座',
        examples: [
            '国际航班在T2航站楼。 (Guójì hángbān zài T2 hángzhàn lóu.) — Международные рейсы — в терминале T2.',
            '航站楼内有免税店。 (Hángzhàn lóu nèi yǒu miǎnshuì diàn.) — В терминале есть дьюти-фри.',
            '这座航站楼很现代化。 (Zhè zuò hángzhàn lóu hěn xiàndàihuà.) — Этот терминал очень современный.'
        ]
    },
    21: {
        glyph: '登机口',
        pinyin: 'dēngjī kǒu',
        translation: 'выход на посадку',
        classifier: '个',
        examples: [
            '请到3号登机口登机。 (Qǐng dào 3 hào dēngjī kǒu dēngjī.) — Пройдите к выходу №3 на посадку.',
            '登机口有座位等候区。 (Dēngjī kǒu yǒu zuòwèi děnghòu qū.) — У выхода зона ожидания с сиденьями.',
            '登机口会广播通知。 (Dēngjī kǒu huì guǎngbō tōngzhī.) — У выхода объявления по громкой связи.'
        ]
    },

    // === ВОДНЫЙ ТРАНСПОРТ ===
    22: {
        glyph: '港口',
        pinyin: 'gǎngkǒu',
        translation: 'порт',
        classifier: '个',
        examples: [
            '上海港是世界最大港口。 (Shànghǎi Gǎng shì shìjiè zuì dà gǎngkǒu.) — Порт Шанхая — крупнейший в мире.',
            '游轮停靠在港口。 (Yóulún tīngkào zài gǎngkǒu.) — Лайнер стоит у причала.',
            '港口有海关检查。 (Gǎngkǒu yǒu hǎiguān jiǎnchá.) — В порту таможенный контроль.'
        ]
    },
    23: {
        glyph: '码头',
        pinyin: 'mǎtóu',
        translation: 'причал',
        classifier: '个',
        examples: [
            '渡轮从码头出发。 (Dùlún cóng mǎtóu chūfā.) — Паром отходит от причала.',
            '渔码头很热闹。 (Yú mǎtóu hěn rènao.) — Рыбный причал очень оживлённый.',
            '码头有售票处。 (Mǎtóu yǒu shòupiào chù.) — У причала касса.'
        ]
    },

    // === ВЕЛОИНФРАСТРУКТУРА ===
    24: {
        glyph: '自行车道',
        pinyin: 'zìxíngchē dào',
        translation: 'велодорожка',
        classifier: '条',
        examples: [
            '公园旁有自行车道。 (Gōngyuán páng yǒu zìxíngchē dào.) — У парка велодорожка.',
            '自行车道与机动车道分开。 (Zìxíngchē dào yǔ jīdòng chē dào fēnkāi.) — Велодорожка отделена от проезжей части.',
            '请在自行车道内骑行。 (Qǐng zài zìxíngchē dào nèi qíxíng.) — Езжайте строго по велодорожке.'
        ]
    },
    25: {
        glyph: '共享单车停放点',
        pinyin: 'gòngxiǎng zìxíngchē tíngfàng diǎn',
        translation: 'станция парковки велосипедов',
        classifier: '个',
        examples: [
            '地铁站外有共享单车停放点。 (Dìtiě zhàn wài yǒu gòngxiǎng zìxíngchē tíngfàng diǎn.) — У станции метро — станция велопарковки.',
            '请将单车停放在指定点。 (Qǐng jiāng dānchē tíngfàng zài zhǐdìng diǎn.) — Оставляйте велосипед только в отведённых местах.',
            '停放点有电子锁。 (Tíngfàng diǎn yǒu diànzǐ suǒ.) — В парковке электронные замки.'
        ]
    }
};

const nounsPublicPlaces: { [key: number]: DictItem } = {
    // === ОБРАЗОВАНИЕ ===
    1: {
        glyph: '学校',
        pinyin: 'xuéxiào',
        translation: 'школа',
        classifier: '所',
        examples: [
            '孩子每天去学校。 (Háizi měitiān qù xuéxiào.) — Ребёнок каждый день идёт в школу.',
            '这所学校很有名。 (Zhè suǒ xuéxiào hěn yǒumíng.) — Эта школа очень известна.',
            '学校有操场和图书馆。 (Xuéxiào yǒu cāochǎng hé túshūguǎn.) — В школе есть спортивная площадка и библиотека.'
        ]
    },
    2: {
        glyph: '大学',
        pinyin: 'dàxué',
        translation: 'университет',
        classifier: '所',
        examples: [
            '他在北京大学读书。 (Tā zài Běijīng Dàxué dúshū.) — Он учится в Пекинском университете.',
            '这所大学有百年历史。 (Zhè suǒ dàxué yǒu bǎinián lìshǐ.) — Этому университету сто лет.',
            '大学校园很大。 (Dàxué xiàoyuán hěn dà.) — Университетский кампус очень большой.'
        ]
    },
    3: {
        glyph: '幼儿园',
        pinyin: 'yòu\'ér yuán',
        translation: 'детский сад',
        classifier: '所',
        examples: [
            '三岁孩子上幼儿园。 (Sān suì háizi shàng yòu\'ér yuán.) — Трёхлетние дети ходят в детский сад.',
            '这所幼儿园有室外活动区。 (Zhè suǒ yòu\'ér yuán yǒu shìwài huódòng qū.) — В этом садике есть площадка на улице.',
            '幼儿园老师很耐心。 (Yòu\'ér yuán lǎoshī hěn nàixīn.) — Воспитатели очень терпеливы.'
        ]
    },

    // === ЗДРАВООХРАНЕНИЕ ===
    4: {
        glyph: '医院',
        pinyin: 'yīyuàn',
        translation: 'больница',
        classifier: '所',
        examples: [
            '他生病了，去了医院。 (Tā shēngbìng le, qù le yīyuàn.) — Он заболел и пошёл в больницу.',
            '这所医院有急诊室。 (Zhè suǒ yīyuàn yǒu jízhěn shì.) — В этой больнице есть приёмное отделение.',
            '医院24小时开放。 (Yīyuàn 24 xiǎoshí kāifàng.) — Больница работает круглосуточно.'
        ]
    },
    5: {
        glyph: '诊所',
        pinyin: 'zhěnsuǒ',
        translation: 'поликлиника / частная клиника',
        classifier: '个',
        examples: [
            '牙科诊所在二楼。 (Yákē zhěnsuǒ zài èr lóu.) — Стоматологическая клиника на втором этаже.',
            '这个诊所只看内科。 (Zhège zhěnsuǒ zhǐ kàn nèikē.) — Эта клиника принимает только терапевтов.',
            '社区有小型诊所。 (Shèqū yǒu xiǎoxíng zhěnsuǒ.) — В районе есть небольшая клиника.'
        ]
    },
    6: {
        glyph: '药房',
        pinyin: 'yàofáng',
        translation: 'аптека',
        classifier: '个',
        examples: [
            '药房在医院对面。 (Yàofáng zài yīyuàn duìmiàn.) — Аптека напротив больницы.',
            '这个药房24小时营业。 (Zhège yàofáng 24 xiǎoshí yíngyè.) — Эта аптека работает круглосуточно.',
            '凭处方买药。 (Píng chǔfāng mǎi yào.) — Лекарства по рецепту.'
        ]
    },

    // === КУЛЬТУРА И ОТДЫХ ===
    7: {
        glyph: '公园',
        pinyin: 'gōngyuán',
        translation: 'парк',
        classifier: '个',
        examples: [
            '周末我们去公园。 (Zhōumò wǒmen qù gōngyuán.) — По выходным мы идём в парк.',
            '这个公园有湖和假山。 (Zhège gōngyuán yǒu hú hé jiǎshān.) — В этом парке есть озеро и искусственные горы.',
            '公园里禁止吸烟。 (Gōngyuán lǐ jìnzhǐ xīyān.) — В парке запрещено курить.'
        ]
    },
    8: {
        glyph: '图书馆',
        pinyin: 'túshūguǎn',
        translation: 'библиотека',
        classifier: '所',
        examples: [
            '我在图书馆看书。 (Wǒ zài túshūguǎn kàn shū.) — Я читаю в библиотеке.',
            '这所图书馆藏书百万册。 (Zhè suǒ túshūguǎn cángshū bǎi wàn cè.) — В этой библиотеке миллион книг.',
            '图书馆很安静。 (Túshūguǎn hěn ānjìng.) — В библиотеке очень тихо.'
        ]
    },
    9: {
        glyph: '博物馆',
        pinyin: 'bówùguǎn',
        translation: 'музей',
        classifier: '座',
        examples: [
            '我们参观了历史博物馆。 (Wǒmen cānguān le lìshǐ bówùguǎn.) — Мы посетили исторический музей.',
            '这座博物馆免费开放。 (Zhè zuò bówùguǎn miǎnfèi kāifàng.) — Этот музей бесплатный.',
            '博物馆里禁止拍照。 (Bówùguǎn lǐ jìnzhǐ pāizhào.) — В музее запрещено фотографировать.'
        ]
    },
    10: {
        glyph: '电影院',
        pinyin: 'diànyǐng yuàn',
        translation: 'кинотеатр',
        classifier: '家',
        examples: [
            '我们去看电影吧。 (Wǒmen qù kàn diànyǐng ba.) — Давай сходим в кино.',
            '这家电影院有IMAX厅。 (Zhè jiā diànyǐng yuàn yǒu IMAX tīng.) — В этом кинотеатре зал IMAX.',
            '电影院提供爆米花。 (Diànyǐng yuàn tígōng bàomǐhuā.) — В кино продают попкорн.'
        ]
    },
    11: {
        glyph: '剧院',
        pinyin: 'jùyuàn',
        translation: 'театр',
        classifier: '座',
        examples: [
            '今晚剧院有演出。 (Jīnwǎn jùyuàn yǒu yǎnchū.) — Сегодня вечером в театре спектакль.',
            '这座剧院建于19世纪。 (Zhè zuò jùyuàn jiàn yú 19 shìjì.) — Этот театр построен в XIX веке.',
            '剧院里要关手机。 (Jùyuàn lǐ yào guān shǒujī.) — В театре нужно выключить телефон.'
        ]
    },

    // === ТОРГОВЛЯ И УСЛУГИ ===
    12: {
        glyph: '超市',
        pinyin: 'chāoshì',
        translation: 'супермаркет',
        classifier: '家',
        examples: [
            '我去超市买菜。 (Wǒ qù chāoshì mǎi cài.) — Я иду в супермаркет за овощами.',
            '这家超市24小时营业。 (Zhè jiā chāoshì 24 xiǎoshí yíngyè.) — Этот супермаркет работает круглосуточно.',
            '超市有自助结账机。 (Chāoshì yǒu zìzhù jiézhàng jī.) — В супермаркете кассы самообслуживания.'
        ]
    },
    13: {
        glyph: '商场',
        pinyin: 'shāngchǎng',
        translation: 'торговый центр',
        classifier: '个',
        examples: [
            '周末商场人很多。 (Zhōumò shāngchǎng rén hěn duō.) — По выходным в ТЦ много народу.',
            '这个商场有地下停车场。 (Zhège shāngchǎng yǒu dìxià tíngchē chǎng.) — В этом ТЦ подземная парковка.',
            '商场里有电影院和餐厅。 (Shāngchǎng lǐ yǒu diànyǐng yuàn hé cāntīng.) — В ТЦ есть кинотеатр и рестораны.'
        ]
    },
    14: {
        glyph: '邮局',
        pinyin: 'yóujú',
        translation: 'почта',
        classifier: '个',
        examples: [
            '我去邮局寄信。 (Wǒ qù yóujú jì xìn.) — Я иду на почту отправить письмо.',
            '邮局上午九点开门。 (Yóujú shàngwǔ jiǔ diǎn kāimén.) — Почта открывается в девять утра.',
            '邮局可以寄包裹。 (Yóujú kěyǐ jì bāoguǒ.) — На почте можно отправить посылку.'
        ]
    },
    15: {
        glyph: '银行',
        pinyin: 'yínháng',
        translation: 'банк',
        classifier: '家',
        examples: [
            '我在银行开户。 (Wǒ zài yínháng kāihù.) — Я открываю счёт в банке.',
            '这家银行有ATM机。 (Zhè jiā yínháng yǒu ATM jī.) — В этом банке есть банкомат.',
            '银行工作日营业。 (Yínháng gōngzuò rì yíngyè.) — Банк работает по будням.'
        ]
    },

    // === АДМИНИСТРАЦИЯ И БЕЗОПАСНОСТЬ ===
    16: {
        glyph: '警察局',
        pinyin: 'jǐngchá jú',
        translation: 'полицейский участок',
        classifier: '个',
        examples: [
            '报警要去警察局。 (Bàojǐng yào qù jǐngchá jú.) — Чтобы подать заявление, иди в полицию.',
            '警察局24小时有人值班。 (Jǐngchá jú 24 xiǎoshí yǒu rén zhíbān.) — В участке дежурный круглосуточно.',
            '丢失证件要报警。 (Diūshī zhèngjiàn yào bàojǐng.) — При утере документов нужно обратиться в полицию.'
        ]
    },
    17: {
        glyph: '消防站',
        pinyin: 'xiāofáng zhàn',
        translation: 'пожарная станция',
        classifier: '个',
        examples: [
            '消防站离这里很近。 (Xiāofáng zhàn lí zhèlǐ hěn jìn.) — Пожарная станция совсем рядом.',
            '消防站有云梯车。 (Xiāofáng zhàn yǒu yúntī chē.) — На пожарной станции есть автолестница.',
            '发现火情打119。 (Fāxiàn huǒqíng dǎ 119.) — При пожаре звоните 119.'
        ]
    },
    18: {
        glyph: '政府大楼',
        pinyin: 'zhèngfǔ dàlóu',
        translation: 'здание администрации',
        classifier: '座',
        examples: [
            '政府大楼在市中心。 (Zhèngfǔ dàlóu zài shì zhōngxīn.) — Администрация находится в центре города.',
            '这座政府大楼很庄严。 (Zhè zuò zhèngfǔ dàlóu hěn zhuāngyán.) — Это здание очень торжественное.',
            '市民可以在政府大楼办事。 (Shìmín kěyǐ zài zhèngfǔ dàlóu bànshì.) — Жители могут решать вопросы в администрации.'
        ]
    },

    // === СПОРТ И РЕЛИГИЯ ===
    19: {
        glyph: '体育馆',
        pinyin: 'tǐyùguǎn',
        translation: 'спортивный зал / комплекс',
        classifier: '座',
        examples: [
            '学生在体育馆打球。 (Xuéshēng zài tǐyùguǎn dǎ qiú.) — Студенты играют в зале в мяч.',
            '这座体育馆可容纳万人。 (Zhè zuò tǐyùguǎn kě róngnà wàn rén.) — Этот зал вмещает 10 000 человек.',
            '体育馆每天开放到晚上十点。 (Tǐyùguǎn měitiān kāifàng dào wǎnshàng shí diǎn.) — Зал открыт до 10 вечера.'
        ]
    },
    20: {
        glyph: '体育场',
        pinyin: 'tǐyùchǎng',
        translation: 'стадион',
        classifier: '个',
        examples: [
            '体育场有跑道和足球场。 (Tǐyùchǎng yǒu pǎodào hé zúqiú chǎng.) — На стадионе беговая дорожка и футбольное поле.',
            '这个体育场举办过奥运会。 (Zhège tǐyùchǎng jǔbàn guò Àoyùnhuì.) — На этом стадионе проводили Олимпиаду.',
            '体育场周末对公众开放。 (Tǐyùchǎng zhōumò duì gōngzhòng kāifàng.) — Стадион по выходным открыт для всех.'
        ]
    },
    21: {
        glyph: '寺庙',
        pinyin: 'sìmiào',
        translation: 'буддийский храм',
        classifier: '座',
        examples: [
            '这座寺庙有千年历史。 (Zhè zuò sìmiào yǒu qiānnián lìshǐ.) — Этому храму тысяча лет.',
            '游客可以在寺庙烧香。 (Yóukè kěyǐ zài sìmiào shāo xiāng.) — Туристы могут зажигать благовония в храме.',
            '寺庙里很安静。 (Sìmiào lǐ hěn ānjìng.) — В храме очень тихо.'
        ]
    },
    22: {
        glyph: '教堂',
        pinyin: 'jiàotáng',
        translation: 'церковь',
        classifier: '座',
        examples: [
            '周日人们去教堂。 (Zhōurì rénmen qù jiàotáng.) — По воскресеньям люди идут в церковь.',
            '这座教堂是哥特式建筑。 (Zhè zuò jiàotáng shì gētè shì jiànzhù.) — Эта церковь в готическом стиле.',
            '教堂里有管风琴。 (Jiàotáng lǐ yǒu guǎnfēngqín.) — В церкви орган.'
        ]
    },

    // === ПРОЧИЕ ОБЩЕСТВЕННЫЕ МЕСТА ===
    23: {
        glyph: '广场',
        pinyin: 'guǎngchǎng',
        translation: 'площадь',
        classifier: '个',
        examples: [
            '人民广场在市中心。 (Rénmín Guǎngchǎng zài shì zhōngxīn.) — Площадь Народных Героев в центре города.',
            '广场上有喷泉和鸽子。 (Guǎngchǎng shàng yǒu pēnquán hé gēzi.) — На площади фонтан и голуби.',
            '节日时广场很热闹。 (Jiérì shí guǎngchǎng hěn rènao.) — В праздники площадь очень оживлённая.'
        ]
    },
    24: {
        glyph: '社区中心',
        pinyin: 'shèqū zhōngxīn',
        translation: 'общественный центр района',
        classifier: '个',
        examples: [
            '社区中心有活动室。 (Shèqū zhōngxīn yǒu huódòng shì.) — В общественном центре есть зал для мероприятий.',
            '老人常去社区中心。 (Lǎorén cháng qù shèqū zhōngxīn.) — Пожилые часто ходят в центр района.',
            '社区中心组织兴趣班。 (Shèqū zhōngxīn zǔzhī xìngqù bān.) — Центр организует кружки по интересам.'
        ]
    },
    25: {
        glyph: '公厕',
        pinyin: 'gōngcè',
        translation: 'общественный туалет',
        classifier: '个',
        examples: [
            '公园里有公厕。 (Gōngyuán lǐ yǒu gōngcè.) — В парке есть общественный туалет.',
            '这个公厕很干净。 (Zhège gōngcè hěn gānjìng.) — Этот туалет очень чистый.',
            '公厕通常免费使用。 (Gōngcè tōngcháng miǎnfèi shǐyòng.) — Обычно общественные туалеты бесплатные.'
        ]
    }
};

const nounsVehicles: { [key: number]: DictItem } = {
    // === НАЗЕМНЫЙ ТРАНСПОРТ ===
    1: {
        glyph: '汽车',
        pinyin: 'qìchē',
        translation: 'автомобиль',
        classifier: '辆',
        examples: [
            '我家有一辆汽车。 (Wǒ jiā yǒu yī liàng qìchē.) — У нас дома одна машина.',
            '这辆汽车很省油。 (Zhè liàng qìchē hěn shěng yóu.) — Этот автомобиль очень экономичный.',
            '汽车停在停车场。 (Qìchē tíng zài tíngchē chǎng.) — Машина стоит на парковке.'
        ]
    },
    2: {
        glyph: '自行车',
        pinyin: 'zìxíngchē',
        translation: 'велосипед',
        classifier: '辆',
        examples: [
            '他骑自行车上班。 (Tā qí zìxíngchē shàngbān.) — Он ездит на работу на велосипеде.',
            '共享单车很方便。 (Gòngxiǎng zìxíngchē hěn fāngbiàn.) — Велосипеды проката очень удобны.',
            '这辆自行车是新的。 (Zhè liàng zìxíngchē shì xīn de.) — Этот велосипед новый.'
        ]
    },
    3: {
        glyph: '摩托车',
        pinyin: 'mótuō chē',
        translation: 'мотоцикл',
        classifier: '辆',
        examples: [
            '他骑摩托车很快。 (Tā qí mótuō chē hěn kuài.) — Он очень быстро ездит на мотоцикле.',
            '这辆摩托车很酷。 (Zhè liàng mótuō chē hěn kù.) — Этот мотоцикл очень крутой.',
            '骑摩托车要戴头盔。 (Qí mótuō chē yào dài tóukuī.) — На мотоцикле обязательно нужно носить шлем.'
        ]
    },
    4: {
        glyph: '公交车',
        pinyin: 'gōngjiāo chē',
        translation: 'автобус (городской)',
        classifier: '辆',
        examples: [
            '我每天坐公交车上班。 (Wǒ měitiān zuò gōngjiāo chē shàngbān.) — Я каждый день езжу на автобусе на работу.',
            '这辆公交车是电动的。 (Zhè liàng gōngjiāo chē shì diàndòng de.) — Этот автобус электрический.',
            '公交车有空调。 (Gōngjiāo chē yǒu kōngtiáo.) — В автобусе есть кондиционер.'
        ]
    },
    5: {
        glyph: '出租车',
        pinyin: 'chūzū chē',
        translation: 'такси',
        classifier: '辆',
        examples: [
            '我们打了一辆出租车。 (Wǒmen dǎ le yī liàng chūzū chē.) — Мы вызвали такси.',
            '这辆出租车有计价器。 (Zhè liàng chūzū chē yǒu jìjià qì.) — В этом такси есть счётчик.',
            '出租车可以手机支付。 (Chūzū chē kěyǐ shǒujī zhīfù.) — За такси можно заплатить с телефона.'
        ]
    },
    6: {
        glyph: '地铁',
        pinyin: 'dìtiě',
        translation: 'метро',
        classifier: '列',
        examples: [
            '北京地铁很发达。 (Běijīng dìtiě hěn fādá.) — Пекинское метро очень развито.',
            '这列地铁开往西直门。 (Zhè liè dìtiě kāiwǎng Xīzhímén.) — Этот поезд метро идёт до Сичжимэнь.',
            '地铁不堵车。 (Dìtiě bù dǔ chē.) — В метро нет пробок.'
        ]
    },
    7: {
        glyph: '火车',
        pinyin: 'huǒchē',
        translation: 'поезд',
        classifier: '列',
        examples: [
            '我们坐火车去上海。 (Wǒmen zuò huǒchē qù Shànghǎi.) — Мы едем поездом в Шанхай.',
            '这列火车是高铁。 (Zhè liè huǒchē shì gāotiě.) — Этот поезд — скоростной.',
            '火车上有餐车。 (Huǒchē shàng yǒu cān chē.) — В поезде есть вагон-ресторан.'
        ]
    },
    8: {
        glyph: '电车',
        pinyin: 'diànchē',
        translation: 'трамвай',
        classifier: '辆',
        examples: [
            '这个城市有老式电车。 (Zhège chéngshì yǒu lǎoshì diànchē.) — В этом городе есть старый трамвай.',
            '电车在固定轨道上行驶。 (Diànchē zài gùdìng guǐdào shàng xíngshǐ.) — Трамвай едет по фиксированным рельсам.',
            '电车比公交车安静。 (Diànchē bǐ gōngjiāo chē ānjìng.) — Трамвай тише автобуса.'
        ]
    },
    9: {
        glyph: '卡车',
        pinyin: 'kǎchē',
        translation: 'грузовик',
        classifier: '辆',
        examples: [
            '这辆卡车运家具。 (Zhè liàng kǎchē yùn jiājù.) — Этот грузовик везёт мебель.',
            '大卡车不能进市区。 (Dà kǎchē bú néng jìn shìqū.) — Большие грузовики не могут заезжать в центр.',
            '卡车司机很辛苦。 (Kǎchē sījī hěn xīnkǔ.) — Водителям грузовиков тяжело работать.'
        ]
    },

    // === ВОЗДУШНЫЙ ТРАНСПОРТ ===
    10: {
        glyph: '飞机',
        pinyin: 'fēijī',
        translation: 'самолёт',
        classifier: '架',
        examples: [
            '我们坐飞机去美国。 (Wǒmen zuò fēijī qù Měiguó.) — Мы летим самолётом в Америку.',
            '这架飞机是波音737。 (Zhè jià fēijī shì Bōyīn 737.) — Этот самолёт — Boeing 737.',
            '飞机在云层上飞行。 (Fēijī zài yúncéng shàng fēixíng.) — Самолёт летит над облаками.'
        ]
    },
    11: {
        glyph: '直升机',
        pinyin: 'zhíshēng jī',
        translation: 'вертолёт',
        classifier: '架',
        examples: [
            '直升机在楼顶降落。 (Zhíshēng jī zài lóu dǐng jiàngluò.) — Вертолёт сел на крышу.',
            '这架直升机用于救援。 (Zhè jià zhíshēng jī yòngyú jiùyuán.) — Этот вертолёт используется для спасения.',
            '直升机声音很大。 (Zhíshēng jī shēngyīn hěn dà.) — У вертолёта очень громкий звук.'
        ]
    },
    12: {
        glyph: '无人机',
        pinyin: 'wúrén jī',
        translation: 'дрон',
        classifier: '架',
        examples: [
            '他用无人机拍视频。 (Tā yòng wúrén jī pāi shìpín.) — Он снимает видео на дрон.',
            '这架无人机能飞5公里。 (Zhè jià wúrén jī néng fēi 5 gōnglǐ.) — Этот дрон может летать на 5 км.',
            '无人机用于农业和摄影。 (Wúrén jī yòngyú nóngyè hé shèyǐng.) — Дроны используют в сельском хозяйстве и фотографии.'
        ]
    },

    // === ВОДНЫЙ ТРАНСПОРТ ===
    13: {
        glyph: '船',
        pinyin: 'chuán',
        translation: 'корабль / лодка',
        classifier: '艘',
        examples: [
            '我们坐船游湖。 (Wǒmen zuò chuán yóu hú.) — Мы катались на лодке по озеру.',
            '这艘船很大。 (Zhè sōu chuán hěn dà.) — Этот корабль очень большой.',
            '船上有救生衣。 (Chuán shàng yǒu jiùshēng yī.) — На борту есть спасательные жилеты.'
        ]
    },
    14: {
        glyph: '轮船',
        pinyin: 'lúnchuán',
        translation: 'паром / пассажирское судно',
        classifier: '艘',
        examples: [
            '轮船从上海到日本。 (Lúnchuán cóng Shànghǎi dào Rìběn.) — Паром ходит из Шанхая в Японию.',
            '这艘轮船有餐厅和客舱。 (Zhè sōu lúnchuán yǒu cāntīng hé kècāng.) — На этом судне есть ресторан и каюты.',
            '轮船比快艇慢。 (Lúnchuán bǐ kuàitǐng màn.) — Паром медленнее катера.'
        ]
    },
    15: {
        glyph: '游艇',
        pinyin: 'yóutǐng',
        translation: 'яхта',
        classifier: '艘',
        examples: [
            '富豪有自己的游艇。 (Fùháo yǒu zìjǐ de yóutǐng.) — У богачей есть собственные яхты.',
            '这艘游艇价值百万。 (Zhè sōu yóutǐng jiàzhí bǎi wàn.) — Эта яхта стоит миллион.',
            '他们在海边租游艇。 (Tāmen zài hǎibiān zū yóutǐng.) — Они арендовали яхту у моря.'
        ]
    },
    16: {
        glyph: '快艇',
        pinyin: 'kuàitǐng',
        translation: 'катер',
        classifier: '艘',
        examples: [
            '快艇在海上飞驰。 (Kuàitǐng zài hǎishàng fēichí.) — Катер мчится по морю.',
            '这艘快艇能坐8个人。 (Zhè sōu kuàitǐng néng zuò 8 gè rén.) — На этом катере помещается 8 человек.',
            '快艇用于水上救援。 (Kuàitǐng yòngyú shuǐshàng jiùyuán.) — Катера используют для спасения на воде.'
        ]
    },
    17: {
        glyph: '帆船',
        pinyin: 'fānchuán',
        translation: 'парусник',
        classifier: '艘',
        examples: [
            '帆船靠风力航行。 (Fānchuán kào fēnglì hángxíng.) — Парусник движется за счёт ветра.',
            '这艘帆船很漂亮。 (Zhè sōu fānchuán hěn piàoliang.) — Этот парусник очень красив.',
            '帆船比赛很受欢迎。 (Fānchuán bǐsài hěn shòu huānyíng.) — Гонки на яхтах очень популярны.'
        ]
    },

    // === ЖЕЛЕЗНОДОРОЖНЫЙ ТРАНСПОРТ ===
    18: {
        glyph: '高铁',
        pinyin: 'gāotiě',
        translation: 'скоростной поезд',
        classifier: '列',
        examples: [
            '从北京到上海坐高铁只要5小时。 (Cóng Běijīng dào Shànghǎi zuò gāotiě zhǐ yào 5 xiǎoshí.) — Из Пекина в Шанхай на скоростном поезде всего 5 часов.',
            '这列高铁时速350公里。 (Zhè liè gāotiě shísù 350 gōnglǐ.) — Скорость этого поезда — 350 км/ч.',
            '高铁很准时。 (Gāotiě hěn zhǔnshí.) — Скоростной поезд очень пунктуален.'
        ]
    },
    19: {
        glyph: '地铁列车',
        pinyin: 'dìtiě lièchē',
        translation: 'состав метро',
        classifier: '列',
        examples: [
            '这列地铁列车有8节车厢。 (Zhè liè dìtiě lièchē yǒu 8 jié chēxiāng.) — У этого состава 8 вагонов.',
            '地铁列车每2分钟一班。 (Dìtiě lièchē měi 2 fēnzhōng yī bān.) — Поезда метро идут каждые 2 минуты.',
            '地铁列车空调很足。 (Dìtiě lièchē kōngtiáo hěn zú.) — В метро отлично работает кондиционер.'
        ]
    },

    // === СПЕЦИАЛЬНЫЙ ТРАНСПОРТ ===
    20: {
        glyph: '救护车',
        pinyin: 'jiùhù chē',
        translation: 'машина скорой помощи',
        classifier: '辆',
        examples: [
            '救护车鸣笛开道。 (Jiùhù chē míng dí kāi dào.) — Скорая едет с включённой сиреной.',
            '这辆救护车去最近的医院。 (Zhè liàng jiùhù chē qù zuìjìn de yīyuàn.) — Эта скорая едет в ближайшую больницу.',
            '不要占用应急车道。 (Búyào zhànyòng yìngjí chēdào.) — Не занимайте полосу для машин экстренных служб.'
        ]
    },
    21: {
        glyph: '消防车',
        pinyin: 'xiāofáng chē',
        translation: 'пожарная машина',
        classifier: '辆',
        examples: [
            '消防车喷水灭火。 (Xiāofáng chē pēn shuǐ miè huǒ.) — Пожарная машина тушит водой.',
            '这辆消防车有云梯。 (Zhè liàng xiāofáng chē yǒu yúntī.) — На этой пожарной машине автолестница.',
            '消防车要优先通行。 (Xiāofáng chē yào yōuxiān tōngxíng.) — Пожарной машине должны уступать дорогу.'
        ]
    },
    22: {
        glyph: '警车',
        pinyin: 'jǐngchē',
        translation: 'полицейская машина',
        classifier: '辆',
        examples: [
            '警车追赶逃犯。 (Jǐngchē zhuīgǎn táofàn.) — Полицейская машина преследует преступника.',
            '这辆警车是新能源车。 (Zhè liàng jǐngchē shì xīn néngyuán chē.) — Эта полицейская машина на новом топливе.',
            '警车上有警灯。 (Jǐngchē shàng yǒu jǐng dēng.) — На полицейской машине мигалки.'
        ]
    },

    // === ПРОЧИЙ ТРАНСПОРТ ===
    23: {
        glyph: '电动车',
        pinyin: 'diàndòng chē',
        translation: 'электросамокат / электровелосипед',
        classifier: '辆',
        examples: [
            '他骑电动车送外卖。 (Tā qí diàndòng chē sòng wàimài.) — Он развозит еду на электросамокате.',
            '这辆电动车能跑60公里。 (Zhè liàng diàndòng chē néng pǎo 60 gōnglǐ.) — Этот самокат проезжает 60 км.',
            '不要在人行道上骑电动车。 (Búyào zài rénxíng dào shàng qí diàndòng chē.) — Не катайтесь на самокате по тротуару.'
        ]
    },
    24: {
        glyph: '滑板车',
        pinyin: 'huábǎn chē',
        translation: 'самокат',
        classifier: '辆',
        examples: [
            '孩子玩滑板车。 (Háizi wán huábǎn chē.) — Ребёнок катается на самокате.',
            '这辆滑板车可折叠。 (Zhè liàng huábǎn chē kě zhédié.) — Этот самокат складной.',
            '滑板车适合短途出行。 (Huábǎn chē shìhé duǎntú chūxíng.) — Самокат подходит для коротких поездок.'
        ]
    },
    25: {
        glyph: '马车',
        pinyin: 'mǎchē',
        translation: 'повозка',
        classifier: '辆',
        examples: [
            '古代人坐马车出行。 (Gǔdài rén zuò mǎchē chūxíng.) — В древности люди ездили в повозках.',
            '景区有马车观光项目。 (Jǐngqū yǒu mǎchē guānguāng xiàngmù.) — В парке есть экскурсии на конных упряжках.',
            '这辆马车是仿古的。 (Zhè liàng mǎchē shì fǎnggǔ de.) — Эта повозка — реконструкция.'
        ]
    }
};

const nounsShopsServices: { [key: number]: DictItem } = {
    // === ПРОДОВОЛЬСТВЕННЫЕ МАГАЗИНЫ ===
    1: {
        glyph: '超市',
        pinyin: 'chāoshì',
        translation: 'супермаркет',
        classifier: '家',
        examples: [
            '我去超市买牛奶。 (Wǒ qù chāoshì mǎi niúnǎi.) — Я иду в супермаркет за молоком.',
            '这家超市24小时营业。 (Zhè jiā chāoshì 24 xiǎoshí yíngyè.) — Этот супермаркет работает круглосуточно.',
            '超市有生鲜区。 (Chāoshì yǒu shēngxiān qū.) — В супермаркете есть отдел свежих продуктов.'
        ]
    },
    2: {
        glyph: '便利店',
        pinyin: 'biànlì diàn',
        translation: 'магазин у дома (минимаркет)',
        classifier: '家',
        examples: [
            '楼下有一家便利店。 (Lóu xià yǒu yī jiā biànlì diàn.) — На первом этаже минимаркет.',
            '便利店卖饮料和零食。 (Biànlì diàn mài yǐnliào hé língshí.) — В минимаркете продают напитки и закуски.',
            '这家便利店支持手机支付。 (Zhè jiā biànlì diàn zhīchí shǒujī zhīfù.) — В этом магазине можно расплатиться с телефона.'
        ]
    },
    3: {
        glyph: '菜市场',
        pinyin: 'cài shìchǎng',
        translation: 'рынок (овощной/продуктовый)',
        classifier: '个',
        examples: [
            '妈妈去菜市场买菜。 (Māma qù cài shìchǎng mǎi cài.) — Мама пошла на рынок за овощами.',
            '菜市场的蔬菜很新鲜。 (Cài shìchǎng de shūcài hěn xīnxiān.) — Овощи на рынке очень свежие.',
            '菜市场早上最热闹。 (Cài shìchǎng zǎoshang zuì rènao.) — Рынок самый оживлённый утром.'
        ]
    },
    4: {
        glyph: '面包店',
        pinyin: 'miànbāo diàn',
        translation: 'пекарня',
        classifier: '家',
        examples: [
            '这家面包店的面包很好吃。 (Zhè jiā miànbāo diàn de miànbāo hěn hǎochī.) — Хлеб в этой пекарне очень вкусный.',
            '面包店早上六点开门。 (Miànbāo diàn zǎoshang liù diǎn kāimén.) — Пекарня открывается в шесть утра.',
            '我买了一个刚出炉的面包。 (Wǒ mǎi le yī gè gāng chūlú de miànbāo.) — Я купил хлеб прямо из печи.'
        ]
    },
    5: {
        glyph: '水果店',
        pinyin: 'shuǐguǒ diàn',
        translation: 'фруктовый магазин',
        classifier: '家',
        examples: [
            '水果店有进口水果。 (Shuǐguǒ diàn yǒu jìnkǒu shuǐguǒ.) — В магазине есть импортные фрукты.',
            '这家水果店可以送货上门。 (Zhè jiā shuǐguǒ diàn kěyǐ sòng huò shàngmén.) — Этот магазин доставляет товар на дом.',
            '水果店的草莓很甜。 (Shuǐguǒ diàn de cǎoméi hěn tián.) — Клубника в этом магазине очень сладкая.'
        ]
    },

    // === НЕПРОДОВОЛЬСТВЕННЫЕ МАГАЗИНЫ ===
    6: {
        glyph: '服装店',
        pinyin: 'fúzhuāng diàn',
        translation: 'магазин одежды',
        classifier: '家',
        examples: [
            '她在服装店买了一件外套。 (Tā zài fúzhuāng diàn mǎi le yī jiàn wàitào.) — Она купила пальто в магазине одежды.',
            '这家服装店有试衣间。 (Zhè jiā fúzhuāng diàn yǒu shì yī jiān.) — В этом магазине есть примерочная.',
            '服装店周末打折。 (Fúzhuāng diàn zhōumò dǎzhé.) — В выходные в магазине скидки.'
        ]
    },
    7: {
        glyph: '书店',
        pinyin: 'shūdiàn',
        translation: 'книжный магазин',
        classifier: '家',
        examples: [
            '我在书店买了一本小说。 (Wǒ zài shūdiàn mǎi le yī běn xiǎoshuō.) — Я купил роман в книжном магазине.',
            '这家书店有咖啡角。 (Zhè jiā shūdiàn yǒu kāfēi jiǎo.) — В этом книжном есть кофейный уголок.',
            '书店里很安静。 (Shūdiàn lǐ hěn ānjìng.) — В книжном магазине очень тихо.'
        ]
    },
    8: {
        glyph: '电子产品店',
        pinyin: 'diànzǐ chǎnpǐn diàn',
        translation: 'магазин электроники',
        classifier: '家',
        examples: [
            '他去电子产品店买手机。 (Tā qù diànzǐ chǎnpǐn diàn mǎi shǒujī.) — Он пошёл в магазин электроники за телефоном.',
            '这家电子产品店有保修服务。 (Zhè jiā diànzǐ chǎnpǐn diàn yǒu bǎoxiū fúwù.) — В этом магазине есть гарантийное обслуживание.',
            '电子产品店卖电脑和相机。 (Diànzǐ chǎnpǐn diàn mài diànnǎo hé xiàngjī.) — В магазине продают компьютеры и фотоаппараты.'
        ]
    },
    9: {
        glyph: '家具店',
        pinyin: 'jiājù diàn',
        translation: 'магазин мебели',
        classifier: '家',
        examples: [
            '我们去家具店买沙发。 (Wǒmen qù jiājù diàn mǎi shāfā.) — Мы пошли в мебельный за диваном.',
            '这家家具店可以送货安装。 (Zhè jiā jiājù diàn kěyǐ sòng huò ānzhuāng.) — В этом магазине доставка и сборка.',
            '家具店的样品可以试坐。 (Jiājù diàn de yàngpǐn kěyǐ shì zuò.) — В мебельном можно сесть на образцы.'
        ]
    },
    10: {
        glyph: '花店',
        pinyin: 'huā diàn',
        translation: 'цветочный магазин',
        classifier: '家',
        examples: [
            '我在花店买了一束玫瑰。 (Wǒ zài huā diàn mǎi le yī shù méiguī.) — Я купил букет роз в цветочном.',
            '这家花店有永生花。 (Zhè jiā huā diàn yǒu yǒngshēng huā.) — В этом цветочном есть сухоцветы.',
            '花店提供节日花束定制。 (Huā diàn tígōng jiérì huāshù dìngzhì.) — В цветочном делают букеты под заказ к праздникам.'
        ]
    },

    // === УСЛУГИ ===
    11: {
        glyph: '理发店',
        pinyin: 'lǐfà diàn',
        translation: 'парикмахерская',
        classifier: '家',
        examples: [
            '我去理发店剪头发。 (Wǒ qù lǐfà diàn jiǎn tóufa.) — Я пошёл в парикмахерскую подстричься.',
            '这家理发店有洗头服务。 (Zhè jiā lǐfà diàn yǒu xǐ tóu fúwù.) — В этой парикмахерской есть услуга мытья головы.',
            '理发店周末很忙。 (Lǐfà diàn zhōumò hěn máng.) — В выходные в парикмахерской очень занято.'
        ]
    },
    12: {
        glyph: '美容院',
        pinyin: 'měiróng yuàn',
        translation: 'салон красоты',
        classifier: '家',
        examples: [
            '她在美容院做面部护理。 (Tā zài měiróng yuàn zuò miànbù hùlǐ.) — Она делает уход за лицом в салоне красоты.',
            '这家美容院有美甲服务。 (Zhè jiā měiróng yuàn yǒu měijiǎ fúwù.) — В этом салоне есть маникюр.',
            '美容院需要提前预约。 (Měiróng yuàn xūyào tíqián yùyuē.) — В салон красоты нужно записываться заранее.'
        ]
    },
    13: {
        glyph: '洗衣店',
        pinyin: 'xǐyī diàn',
        translation: 'химчистка / прачечная',
        classifier: '家',
        examples: [
            '我把西装送到洗衣店。 (Wǒ bǎ xīzhuāng sòng dào xǐyī diàn.) — Я отнёс костюм в химчистку.',
            '这家洗衣店可以当天取。 (Zhè jiā xǐyī diàn kěyǐ dāngtiān qǔ.) — В этой химчистке можно забрать в тот же день.',
            '洗衣店提供熨烫服务。 (Xǐyī diàn tígōng yùntàng fúwù.) — В химчистке есть глажка.'
        ]
    },
    14: {
        glyph: '银行',
        pinyin: 'yínháng',
        translation: 'банк',
        classifier: '家',
        examples: [
            '我去银行存钱。 (Wǒ qù yínháng cún qián.) — Я иду в банк положить деньги.',
            '这家银行有外币兑换。 (Zhè jiā yínháng yǒu wàibì duìhuàn.) — В этом банке можно обменять валюту.',
            '银行工作日营业。 (Yínháng gōngzuò rì yíngyè.) — Банк работает по будням.'
        ]
    },
    15: {
        glyph: '邮局',
        pinyin: 'yóujú',
        translation: 'почтовое отделение',
        classifier: '个',
        examples: [
            '我去邮局寄包裹。 (Wǒ qù yóujú jì bāoguǒ.) — Я иду на почту отправить посылку.',
            '邮局可以买邮票。 (Yóujú kěyǐ mǎi yóupiào.) — На почте можно купить марки.',
            '邮局上午九点开门。 (Yóujú shàngwǔ jiǔ diǎn kāimén.) — Почта открывается в девять утра.'
        ]
    },

    // === МЕДИЦИНСКИЕ И ПРОФЕССИОНАЛЬНЫЕ УСЛУГИ ===
    16: {
        glyph: '牙科诊所',
        pinyin: 'yákē zhěnsuǒ',
        translation: 'стоматологическая клиника',
        classifier: '家',
        examples: [
            '我预约了牙科诊所。 (Wǒ yùyuē le yákē zhěnsuǒ.) — Я записался к стоматологу.',
            '这家牙科诊所有无痛治疗。 (Zhè jiā yákē zhěnsuǒ yǒu wútòng zhìliáo.) — В этой клинике безболезненное лечение.',
            '牙科诊所周末也开门。 (Yákē zhěnsuǒ zhōumò yě kāimén.) — Стоматология работает и по выходным.'
        ]
    },
    17: {
        glyph: '眼科诊所',
        pinyin: 'yǎnkē zhěnsuǒ',
        translation: 'офтальмологическая клиника',
        classifier: '家',
        examples: [
            '我去眼科诊所检查视力。 (Wǒ qù yǎnkē zhěnsuǒ jiǎnchá shìlì.) — Я пошёл в офтальмологию проверить зрение.',
            '这家眼科诊所配眼镜。 (Zhè jiā yǎnkē zhěnsuǒ pèi yǎnjìng.) — В этой клинике делают очки.',
            '眼科诊所用先进设备。 (Yǎnkē zhěnsuǒ yòng xiānjìn shèbèi.) — В клинике используется современное оборудование.'
        ]
    },
    18: {
        glyph: '宠物医院',
        pinyin: 'chǒngwù yīyuàn',
        translation: 'ветеринарная клиника',
        classifier: '家',
        examples: [
            '带狗狗去宠物医院。 (Dài gǒugou qù chǒngwù yīyuàn.) — Отвези собачку в ветеринарку.',
            '这家宠物医院24小时急诊。 (Zhè jiā chǒngwù yīyuàn 24 xiǎoshí jízhěn.) — В этой ветеринарке круглосуточный приём.',
            '宠物医院可以打疫苗。 (Chǒngwù yīyuàn kěyǐ dǎ yìmiáo.) — В ветеринарке можно сделать прививку.'
        ]
    },
    19: {
        glyph: '照相馆',
        pinyin: 'zhàoxiàng guǎn',
        translation: 'фотостудия',
        classifier: '家',
        examples: [
            '我们在照相馆拍证件照。 (Wǒmen zài zhàoxiàng guǎn pāi zhèngjiàn zhào.) — Мы делали фото на документы в фотостудии.',
            '这家照相馆拍婚纱照。 (Zhè jiā zhàoxiàng guǎn pāi hūnshā zhào.) — В этой студии делают свадебные фото.',
            '照相馆提供修图服务。 (Zhàoxiàng guǎn tígōng xiū tú fúwù.) — В фотостудии есть ретушь.'
        ]
    },
    20: {
        glyph: '旅行社',
        pinyin: 'lǚxíng shè',
        translation: 'турагентство',
        classifier: '家',
        examples: [
            '我在旅行社订了机票。 (Wǒ zài lǚxíng shè dìng le jīpiào.) — Я заказал билеты в турагентстве.',
            '这家旅行社组织欧洲游。 (Zhè jiā lǚxíng shè zǔzhī Ōuzhōu yóu.) — Это агентство организует туры по Европе.',
            '旅行社提供签证服务。 (Lǚxíng shè tígōng qiānzhèng fúwù.) — В агентстве помогают с визой.'
        ]
    },

    // === ПРОЧИЕ УСЛУГИ ===
    21: {
        glyph: '健身房',
        pinyin: 'jiànshēnfáng',
        translation: 'тренажёрный зал',
        classifier: '家',
        examples: [
            '他每天去健身房锻炼。 (Tā měitiān qù jiànshēnfáng duànliàn.) — Он каждый день ходит в зал тренироваться.',
            '这家健身房有游泳池。 (Zhè jiā jiànshēnfáng yǒu yóuyǒng chí.) — В этом зале есть бассейн.',
            '健身房提供私教课程。 (Jiànshēnfáng tígōng sījiào kèchéng.) — В зале есть персональные тренировки.'
        ]
    },
    22: {
        glyph: '洗衣房',
        pinyin: 'xǐyī fáng',
        translation: 'публичная прачечная (с самообслуживанием)',
        classifier: '家',
        examples: [
            '学生常去洗衣房洗衣服。 (Xuéshēng cháng qù xǐyī fáng xǐ yīfu.) — Студенты часто ходят в прачечную стирать вещи.',
            '这家洗衣房有投币洗衣机。 (Zhè jiā xǐyī fáng yǒu tóubì xǐyī jī.) — В этой прачечной стиральные машины с монетками.',
            '洗衣房24小时开放。 (Xǐyī fáng 24 xiǎoshí kāifàng.) — Прачечная работает круглосуточно.'
        ]
    },
    23: {
        glyph: '咖啡馆',
        pinyin: 'kāfēi guǎn',
        translation: 'кафе / кофейня',
        classifier: '家',
        examples: [
            '我们在咖啡馆见面。 (Wǒmen zài kāfēi guǎn jiànmiàn.) — Встретимся в кофейне.',
            '这家咖啡馆有免费WiFi。 (Zhè jiā kāfēi guǎn yǒu miǎnfèi WiFi.) — В этом кафе бесплатный WiFi.',
            '咖啡馆的拿铁很好喝。 (Kāfēi guǎn de nálì hěn hǎo hē.) — Латте в этом кафе очень вкусный.'
        ]
    },
    24: {
        glyph: '餐厅',
        pinyin: 'cāntīng',
        translation: 'ресторан',
        classifier: '家',
        examples: [
            '我们去餐厅吃晚饭。 (Wǒmen qù cāntīng chī wǎnfàn.) — Мы идём в ресторан поужинать.',
            '这家餐厅有包间。 (Zhè jiā cāntīng yǒu bāojiān.) — В этом ресторане есть отдельные комнаты.',
            '餐厅提供外卖服务。 (Cāntīng tígōng wàimài fúwù.) — В ресторане есть доставка.'
        ]
    },
    25: {
        glyph: '自动售货机',
        pinyin: 'zìdòng shòu huò jī',
        translation: 'автомат по продаже товаров',
        classifier: '台',
        examples: [
            '地铁站有自动售货机。 (Dìtiě zhàn yǒu zìdòng shòu huò jī.) — На станции метро стоит автомат.',
            '这台自动售货机卖饮料和零食。 (Zhè tái zìdòng shòu huò jī mài yǐnliào hé língshí.) — Этот автомат продаёт напитки и закуски.',
            '自动售货机支持扫码支付。 (Zìdòng shòu huò jī zhīchí sǎo mǎ zhīfù.) — В автомате можно оплатить по QR-коду.'
        ]
    }
};

// Общий словарь
export const newNouns1 = {
    nounsBody,
    nounsOrgansSystems,
    nounsBodySubstances,
    nounsFeelingsStates,
    nounsApartmentRooms,
    nounsKitchenItems,
    nounsFurniture,
    nounsHouseholdItems,
    nounsCleaningHygiene,
    nounsHouseStructure,
    nounsBuildingMaterials,
    nounsUtilities,
    nounsYard,
    nounsStreet,
    nounsTransportInfrastructure,
    nounsPublicPlaces,
    nounsVehicles,
    nounsShopsServices
};
