import { DictItem } from "./types/types";

const nounsNatureGeneral: { [key: number]: DictItem } = {
    1: {
        glyph: '自然',
        pinyin: 'zìrán',
        translation: 'природа (в целом)',
        classifier: '个',
        examples: [
            '我们要保护自然。 (Wǒmen yào bǎohù zìrán.) — Мы должны защищать природу.',
            '自然的力量很强大。 (Zìrán de lìliàng hěn qiángdà.) — Сила природы очень велика.',
            '在自然中感到平静。 (Zài zìrán zhōng gǎndào píngjìng.) — В природе чувствуешь спокойствие.'
        ]
    },
    2: {
        glyph: '环境',
        pinyin: 'huánjìng',
        translation: 'окружающая среда',
        classifier: '个',
        examples: [
            '污染破坏环境。 (Wūrǎn pòhuài huánjìng.) — Загрязнение разрушает окружающую среду.',
            '保护环境人人有责。 (Bǎohù huánjìng rén rén yǒu zé.) — Каждый обязан защищать окружающую среду.',
            '这个地区的环境很好。 (Zhège dìqū de huánjìng hěn hǎo.) — В этом районе очень хорошая экология.'
        ]
    },
    3: {
        glyph: '生态',
        pinyin: 'shēngtài',
        translation: 'экосистема',
        classifier: '个',
        examples: [
            '森林有完整的生态。 (Sēnlín yǒu wánzhěng de shēngtài.) — В лесу целостная экосистема.',
            '破坏生态会导致物种灭绝。 (Pòhuài shēngtài huì dǎozhì wùzhǒng mièjué.) — Разрушение экосистем ведёт к вымиранию видов.',
            '湿地是重要的生态区域。 (Shīdì shì zhòngyào de shēngtài qūyù.) — Водно-болотные угодья — важная экозона.'
        ]
    },
    4: {
        glyph: '生态平衡',
        pinyin: 'shēngtài pínghéng',
        translation: 'экологический баланс',
        classifier: '个',
        examples: [
            '森林火灾破坏生态平衡。 (Sēnlín huǒzāi pòhuài shēngtài pínghéng.) — Лесные пожары нарушают экобаланс.',
            '人类活动影响生态平衡。 (Rénlèi huódòng yǐngxiǎng shēngtài pínghéng.) — Деятельность человека влияет на экобаланс.',
            '保护生态平衡很重要。 (Bǎohù shēngtài pínghéng hěn zhòngyào.) — Очень важно сохранять экологический баланс.'
        ]
    },
    5: {
        glyph: '生物',
        pinyin: 'shēngwù',
        translation: 'живые организмы',
        classifier: '种',
        examples: [
            '这片森林有许多生物。 (Zhè piàn sēnlín yǒu xǔduō shēngwù.) — В этом лесу много живых организмов.',
            '海洋生物种类繁多。 (Hǎiyáng shēngwù zhǒnglèi fán duō.) — Морская фауна очень разнообразна.',
            '保护稀有生物很重要。 (Bǎohù xīyǒu shēngwù hěn zhòngyào.) — Очень важно защищать редкие виды.'
        ]
    },
    6: {
        glyph: '物种',
        pinyin: 'wùzhǒng',
        translation: 'вид (биологический)',
        classifier: '种',
        examples: [
            '大熊猫是濒危物种。 (Dàxióngmāo shì bīnwēi wùzhǒng.) — Большая панда — исчезающий вид.',
            '这个保护区有200多种物种。 (Zhège bǎohùqū yǒu 200 duō zhǒng wùzhǒng.) — В этом заповеднике более 200 видов.',
            '气候变化威胁物种生存。 (Qìhòu biànhuà wēixié wùzhǒng shēngcún.) — Изменение климата угрожает выживанию видов.'
        ]
    },
    7: {
        glyph: '生态系统',
        pinyin: 'shēngtài xìtǒng',
        translation: 'экосистема',
        classifier: '个',
        examples: [
            '珊瑚礁是复杂的生态系统。 (Shānhú jiāo shì fùzá de shēngtài xìtǒng.) — Коралловый риф — сложная экосистема.',
            '湿地生态系统净化水源。 (Shīdì shēngtài xìtǒng jìng huà shuǐyuán.) — Водно-болотные экосистемы очищают воду.',
            '破坏一个环节会影响整个生态系统。 (Pòhuài yī gè huánjié huì yǐngxiǎng zhěng gè shēngtài xìtǒng.) — Разрушение одного звена влияет на всю экосистему.'
        ]
    },
    8: {
        glyph: '自然资源',
        pinyin: 'zìrán zīyuán',
        translation: 'природные ресурсы',
        classifier: '种',
        examples: [
            '水和空气是重要的自然资源。 (Shuǐ hé kōngqì shì zhòngyào de zìrán zīyuán.) — Вода и воздух — важные природные ресурсы.',
            '过度开发自然资源会带来灾难。 (Guòdù kāifā zìrán zīyuán huì dàilái zāinàn.) — Чрезмерная эксплуатация ресурсов ведёт к катастрофам.',
            '可再生自然资源包括太阳能。 (Kě zàishēng zìrán zīyuán bāokuò tàiyángnéng.) — Возобновляемые ресурсы включают солнечную энергию.'
        ]
    },
    9: {
        glyph: '气候',
        pinyin: 'qìhòu',
        translation: 'климат',
        classifier: '个',
        examples: [
            '这里的气候很温和。 (Zhèlǐ de qìhòu hěn wēnhé.) — Здесь очень мягкий климат.',
            '全球气候正在变暖。 (Quánqiú qìhòu zhèngzài biàn nuǎn.) — Глобальный климат становится теплее.',
            '气候影响农业生产。 (Qìhòu yǐngxiǎng nóngyè shēngchǎn.) — Климат влияет на сельское хозяйство.'
        ]
    },
    10: {
        glyph: '天气',
        pinyin: 'tiānqì',
        translation: 'погода',
        classifier: '种',
        examples: [
            '今天的天气很好。 (Jīntiān de tiānqì hěn hǎo.) — Сегодня отличная погода.',
            '这种天气适合散步。 (Zhè zhǒng tiānqì shìhé sànbù.) — Такая погода подходит для прогулки.',
            '天气预报说明天有雨。 (Tiānqì yùbào shuō míngtiān yǒu yǔ.) — Прогноз погоды обещает дождь завтра.'
        ]
    },
    11: {
        glyph: '季节',
        pinyin: 'jìjié',
        translation: 'время года',
        classifier: '个',
        examples: [
            '一年有四个季节。 (Yī nián yǒu sì gè jìjié.) — В году четыре времени года.',
            '我最喜欢春天这个季节。 (Wǒ zuì xǐhuan chūntiān zhège jìjié.) — Больше всего мне нравится весна.',
            '每个季节都有独特的美。 (Měi gè jìjié dōu yǒu dútè de měi.) — Каждое время года по-своему красиво.'
        ]
    },
    12: {
        glyph: '景观',
        pinyin: 'jǐngguān',
        translation: 'ландшафт, пейзаж',
        classifier: '个',
        examples: [
            '这里的自然景观很壮观。 (Zhèlǐ de zìrán jǐngguān hěn zhuàngguān.) — Природный пейзаж здесь очень впечатляющий.',
            '保护自然景观很重要。 (Bǎohù zìrán jǐngguān hěn zhòngyào.) — Очень важно защищать природные ландшафты.',
            '这个公园有人工景观。 (Zhège gōngyuán yǒu réngōng jǐngguān.) — В этом парке есть искусственные ландшафты.'
        ]
    },
    13: {
        glyph: '地貌',
        pinyin: 'dìmào',
        translation: 'рельеф местности',
        classifier: '种',
        examples: [
            '喀斯特地貌很奇特。 (Kāsītè dìmào hěn qítè.) — Карстовый рельеф очень необычный.',
            '这个地区地貌多样。 (Zhège dìqū dìmào duōyàng.) — Рельеф в этом районе разнообразен.',
            '地貌影响交通建设。 (Dìmào yǐngxiǎng jiāotōng jiànshè.) — Рельеф влияет на строительство дорог.'
        ]
    },
    14: {
        glyph: '生物多样性',
        pinyin: 'shēngwù duōyàng xìng',
        translation: 'биоразнообразие',
        classifier: '个',
        examples: [
            '热带雨林有极高的生物多样性。 (Rèdài yǔlín yǒu jí gāo de shēngwù duōyàng xìng.) — В тропических лесах очень высокое биоразнообразие.',
            '保护生物多样性就是保护未来。 (Bǎohù shēngwù duōyàng xìng jiùshì bǎohù wèilái.) — Защищать биоразнообразие — значит защищать будущее.',
            '生物多样性正在减少。 (Shēngwù duōyàng xìng zhèngzài jiǎnshǎo.) — Биоразнообразие сокращается.'
        ]
    },
    15: {
        glyph: '自然保护区',
        pinyin: 'zìrán bǎohù qū',
        translation: 'заповедник',
        classifier: '个',
        examples: [
            '这个自然保护区禁止开发。 (Zhège zìrán bǎohù qū jìnzhǐ kāifā.) — В этом заповеднике запрещено любое освоение.',
            '自然保护区有珍稀动物。 (Zìrán bǎohù qū yǒu zhēnxī dòngwù.) — В заповеднике живут редкие животные.',
            '游客可以在指定区域参观自然保护区。 (Yóukè kěyǐ zài zhǐdìng qūyù cānguān zìrán bǎohù qū.) — Туристы могут посещать заповедник только в отведённых зонах.'
        ]
    },
    16: {
        glyph: '荒野',
        pinyin: 'huāngyě',
        translation: 'дикие земли, нетронутая природа',
        classifier: '片',
        examples: [
            '这片荒野没有人类足迹。 (Zhè piàn huāngyě méiyǒu rénlèi zújì.) — Эта дикая местность не тронута человеком.',
            '荒野是许多动物的家园。 (Huāngyě shì xǔduō dòngwù de jiāyuán.) — Дикая природа — дом для многих животных.',
            '保护荒野对生态很重要。 (Bǎohù huāngyě duì shēngtài hěn zhòngyào.) — Защита дикой природы критически важна для экосистем.'
        ]
    },
    17: {
        glyph: '原生态',
        pinyin: 'yuán shēngtài',
        translation: 'первозданная природа',
        classifier: '个',
        examples: [
            '这个地方保持着原生态。 (Zhège dìfāng bǎochí zhe yuán shēngtài.) — Это место сохранило первозданную природу.',
            '原生态的环境吸引游客。 (Yuán shēngtài de huánjìng xīyǐn yóukè.) — Нетронутая природа привлекает туристов.',
            '不要破坏原生态。 (Búyào pòhuài yuán shēngtài.) — Не разрушайте первозданную природу.'
        ]
    },
    18: {
        glyph: '绿色',
        pinyin: 'lǜsè',
        translation: 'зелёный (в значении экологии)',
        classifier: '个',
        examples: [
            '我们要走绿色发展道路。 (Wǒmen yào zǒu lǜsè fāzhǎn dàolù.) — Мы должны идти по пути зелёного развития.',
            '绿色能源包括太阳能和风能。 (Lǜsè néngyuán bāokuò tàiyángnéng hé fēngnéng.) — Зелёная энергия включает солнечную и ветровую.',
            '绿色生活从节约用水开始。 (Lǜsè shēnghuó cóng jiéyuē yòngshuǐ kāishǐ.) — Зелёный образ жизни начинается с экономии воды.'
        ]
    },
    19: {
        glyph: '可持续发展',
        pinyin: 'kě chíxù fāzhǎn',
        translation: 'устойчивое развитие',
        classifier: '个',
        examples: [
            '可持续发展是未来方向。 (Kě chíxù fāzhǎn shì wèilái fāngxiàng.) — Устойчивое развитие — путь будущего.',
            '经济发展要与环境保护结合，实现可持续发展。 (Jīngjì fāzhǎn yào yǔ huánjìng bǎohù jiéhé, shíxiàn kě chíxù fāzhǎn.) — Экономический рост должен сочетаться с охраной природы ради устойчивого развития.',
            '联合国提倡可持续发展目标。 (Liánhéguó tíchàng kě chíxù fāzhǎn mùbiāo.) — ООН продвигает Цели устойчивого развития.'
        ]
    },
    20: {
        glyph: '碳中和',
        pinyin: 'tàn zhōnghé',
        translation: 'углеродная нейтральность',
        classifier: '个',
        examples: [
            '中国承诺2060年实现碳中和。 (Zhōngguó chéngnuò 2060 nián shíxiàn tàn zhōnghé.) — Китай обещает достичь углеродной нейтральности к 2060 году.',
            '植树造林有助于碳中和。 (Zhíshù zàolín yǒuzhù yú tàn zhōnghé.) — Посадка лесов способствует углеродной нейтральности.',
            '企业需要制定碳中和计划。 (Qǐyè xūyào zhìdìng tàn zhōnghé jìhuà.) — Компаниям нужно разрабатывать планы по достижению нейтральности.'
        ]
    },
    21: {
        glyph: '可再生能源',
        pinyin: 'kě zàishēng néngyuán',
        translation: 'возобновляемые источники энергии',
        classifier: '种',
        examples: [
            '太阳能和风能是可再生能源。 (Tàiyángnéng hé fēngnéng shì kě zàishēng néngyuán.) — Солнечная и ветровая энергия — возобновляемые источники.',
            '发展可再生能源减少污染。 (Fāzhǎn kě zàishēng néngyuán jiǎnshǎo wūrǎn.) — Развитие ВИЭ снижает загрязнение.',
            '许多国家投资可再生能源。 (Xǔduō guójiā tóuzī kě zàishēng néngyuán.) — Многие страны инвестируют в ВИЭ.'
        ]
    },
    22: {
        glyph: '污染',
        pinyin: 'wūrǎn',
        translation: 'загрязнение',
        classifier: '种',
        examples: [
            '空气污染影响健康。 (Kōngqì wūrǎn yǐngxiǎng jiànkāng.) — Загрязнение воздуха вредит здоровью.',
            '海洋塑料污染很严重。 (Hǎiyáng sùliào wūrǎn hěn yánzhòng.) — Загрязнение океана пластиком очень серьёзно.',
            '减少污染人人有责。 (Jiǎnshǎo wūrǎn rén rén yǒu zé.) — Каждый должен сокращать загрязнение.'
        ]
    },
    23: {
        glyph: '温室效应',
        pinyin: 'wēnshì xiàoyìng',
        translation: 'парниковый эффект',
        classifier: '个',
        examples: [
            '温室效应导致全球变暖。 (Wēnshì xiàoyìng dǎozhì quánqiú biàn nuǎn.) — Парниковый эффект вызывает глобальное потепление.',
            '二氧化碳是主要的温室气体。 (Èryǎnghuàtàn shì zhǔyào de wēnshì qìtǐ.) — Углекислый газ — главный парниковый газ.',
            '减少碳排放缓解温室效应。 (Jiǎnshǎo tàn páifàng huǎnjiě wēnshì xiàoyìng.) — Сокращение выбросов углерода смягчает парниковый эффект.'
        ]
    },
    24: {
        glyph: '自然规律',
        pinyin: 'zìrán guīlǜ',
        translation: 'законы природы',
        classifier: '个',
        examples: [
            '人类必须尊重自然规律。 (Rénlèi bìxū zūnzhòng zìrán guīlǜ.) — Люди должны уважать законы природы.',
            '违背自然规律会遭惩罚。 (Wéibèi zìrán guīlǜ huì zāo chéngfá.) — Нарушение законов природы ведёт к наказанию.',
            '生态平衡是自然规律的体现。 (Shēngtài pínghéng shì zìrán guīlǜ de tǐxiàn.) — Экобаланс — проявление законов природы.'
        ]
    },
    25: {
        glyph: '天地',
        pinyin: 'tiāndì',
        translation: 'небо и земля (природа в философском смысле)',
        classifier: '个',
        examples: [
            '天地之间，万物共生。 (Tiāndì zhī jiān, wànwù gòngshēng.) — Между небом и землёй всё живое сосуществует.',
            '古人敬畏天地。 (Gǔrén jìngwèi tiāndì.) — Древние люди благоговели перед небом и землёй.',
            '保护天地就是保护我们自己。 (Bǎohù tiāndì jiùshì bǎohù wǒmen zìjǐ.) — Беречь небо и землю — значит беречь себя.'
        ]
    }
};

const nounsLandscape: { [key: number]: DictItem } = {
    // === ВОЗВЫШЕННОСТИ ===
    1: {
        glyph: '山',
        pinyin: 'shān',
        translation: 'гора',
        classifier: '座',
        examples: [
            '黄山是中国的名山。 (Huángshān shì Zhōngguó de míngshān.) — Хуаншань — знаменитая гора Китая.',
            '这座山很高。 (Zhè zuò shān hěn gāo.) — Эта гора очень высокая.',
            '我们去爬山。 (Wǒmen qù pá shān.) — Мы идём в горы.'
        ]
    },
    2: {
        glyph: '山脉',
        pinyin: 'shānmài',
        translation: 'горная цепь',
        classifier: '条',
        examples: [
            '喜马拉雅山脉是世界最高。 (Xǐmǎlāyǎ shānmài shì shìjiè zuì gāo.) — Гималаи — самая высокая горная цепь в мире.',
            '这条山脉横跨三个省。 (Zhè tiáo shānmài héngkuà sān gè shěng.) — Эта горная цепь пересекает три провинции.',
            '山脉阻挡了冷空气。 (Shānmài zǔdǎng le lěng kōngqì.) — Горная цепь задерживает холодный воздух.'
        ]
    },
    3: {
        glyph: '丘陵',
        pinyin: 'qiūlíng',
        translation: 'холмы',
        classifier: '片',
        examples: [
            '这片丘陵适合种茶。 (Zhè piàn qiūlíng shìhé zhòng chá.) — Эти холмы подходят для выращивания чая.',
            '丘陵地带起伏平缓。 (Qiūlíng dìdài qǐfú píng huǎn.) — Холмистая местность имеет пологие склоны.',
            '丘陵比高山更容易攀登。 (Qiūlíng bǐ gāo shān gèng róngyì pāndēng.) — Холмы легче покорять, чем высокие горы.'
        ]
    },
    4: {
        glyph: '高原',
        pinyin: 'gāoyuán',
        translation: 'плато',
        classifier: '个',
        examples: [
            '青藏高原是世界屋脊。 (Qīngzàng Gāoyuán shì shìjiè wūjǐ.) — Тибетское плато — «крыша мира».',
            '这个高原海拔4000米。 (Zhège gāoyuán hǎibá 4000 mǐ.) — Высота этого плато — 4000 метров.',
            '高原空气稀薄。 (Gāoyuán kōngqì xībó.) — На плато разреженный воздух.'
        ]
    },
    5: {
        glyph: '峰',
        pinyin: 'fēng',
        translation: 'пик (горы)',
        classifier: '座',
        examples: [
            '珠穆朗玛峰是世界最高峰。 (Zhūmùlǎngmǎ Fēng shì shìjiè zuì gāo fēng.) — Эверест — самая высокая вершина мира.',
            '我们登上了主峰。 (Wǒmen dēng shàng le zhǔ fēng.) — Мы взошли на главную вершину.',
            '这座峰终年积雪。 (Zhè zuò fēng zhōng nián jī xuě.) — Эта вершина покрыта снегом круглый год.'
        ]
    },

    // === ВОДОЁМЫ ===
    6: {
        glyph: '河',
        pinyin: 'hé',
        translation: 'река',
        classifier: '条',
        examples: [
            '长江是中国最长的河。 (Cháng Jiāng shì Zhōngguó zuì cháng de hé.) — Янцзы — самая длинная река Китая.',
            '这条河很清澈。 (Zhè tiáo hé hěn qīngchè.) — Эта река очень прозрачная.',
            '河边有很多树。 (Hé biān yǒu hěn duō shù.) — У реки много деревьев.'
        ]
    },
    7: {
        glyph: '江',
        pinyin: 'jiāng',
        translation: 'большая река',
        classifier: '条',
        examples: [
            '黑龙江在东北。 (Hēilóng Jiāng zài dōngběi.) — Амур находится на северо-востоке.',
            '珠江流经广州。 (Zhū Jiāng liú jīng Guǎngzhōu.) — Жемчужная река протекает через Гуанчжоу.',
            '江南水乡有很多江。 (Jiāngnán shuǐxiāng yǒu hěn duō jiāng.) — В южных районах Янцзы много больших рек.'
        ]
    },
    8: {
        glyph: '湖',
        pinyin: 'hú',
        translation: 'озеро',
        classifier: '个',
        examples: [
            '西湖在杭州。 (Xī Hú zài Hángzhōu.) — Озеро Сиху в Ханчжоу.',
            '这个湖很大。 (Zhège hú hěn dà.) — Это озеро очень большое.',
            '湖面平静如镜。 (Húmiàn píngjìng rú jìng.) — Поверхность озера спокойна, как зеркало.'
        ]
    },
    9: {
        glyph: '海',
        pinyin: 'hǎi',
        translation: 'море',
        classifier: '片',
        examples: [
            '这片海很蓝。 (Zhè piàn hǎi hěn lán.) — Это море очень синее.',
            '东海在中国东边。 (Dōng Hǎi zài Zhōngguó dōng biān.) — Восточно-Китайское море к востоку от Китая.',
            '海边有沙滩。 (Hǎibiān yǒu shātān.) — У моря пляж.'
        ]
    },
    10: {
        glyph: '洋',
        pinyin: 'yáng',
        translation: 'океан',
        classifier: '个',
        examples: [
            '太平洋是世界上最大的洋。 (Tàipíng Yáng shì shìjiè shàng zuì dà de yáng.) — Тихий океан — самый большой в мире.',
            '大西洋连接欧美。 (Dàxī Yáng liánjiē Ōu Měi.) — Атлантический океан соединяет Европу и Америку.',
            '印度洋很温暖。 (Yìndù Yáng hěn wēnnuǎn.) — Индийский океан очень тёплый.'
        ]
    },

    // === СУХОПУТНЫЕ ЛАНДШАФТЫ ===
    11: {
        glyph: '沙漠',
        pinyin: 'shāmò',
        translation: 'пустыня',
        classifier: '片',
        examples: [
            '塔克拉玛干沙漠在中国西部。 (Tǎkèlāmǎgān Shāmò zài Zhōngguó xībù.) — Такла-Макан в западном Китае.',
            '这片沙漠很干燥。 (Zhè piàn shāmò hěn gānzào.) — Эта пустыня очень сухая.',
            '沙漠里白天很热，晚上很冷。 (Shāmò lǐ báitiān hěn rè, wǎnshàng hěn lěng.) — В пустыне днём жарко, ночью — холодно.'
        ]
    },
    12: {
        glyph: '草原',
        pinyin: 'cǎoyuán',
        translation: 'степь / прерия',
        classifier: '片',
        examples: [
            '内蒙古有广阔的草原。 (Nèi Měnggǔ yǒu guǎngkuò de cǎoyuán.) — Внутренняя Монголия славится обширными степями.',
            '这片草原适合放牧。 (Zhè piàn cǎoyuán shìhé fàngmù.) — Эта степь подходит для выпаса скота.',
            '草原上牛羊成群。 (Cǎoyuán shàng niú yáng chéng qún.) — В степи стада коров и овец.'
        ]
    },
    13: {
        glyph: '森林',
        pinyin: 'sēnlín',
        translation: 'лес',
        classifier: '片',
        examples: [
            '这片森林是天然氧吧。 (Zhè piàn sēnlín shì tiānrán yǎng bā.) — Этот лес — природный кислородный бар.',
            '热带雨林生物多样性高。 (Rèdài yǔlín shēngwù duōyàng xìng gāo.) — В тропических лесах высокое биоразнообразие.',
            '森林可以防止水土流失。 (Sēnlín kěyǐ fángzhǐ shuǐtǔ liúshī.) — Лес предотвращает эрозию почвы.'
        ]
    },
    14: {
        glyph: '平原',
        pinyin: 'píngyuán',
        translation: 'равнина',
        classifier: '片',
        examples: [
            '华北平原有肥沃的土壤。 (Huáběi Píngyuán yǒu féiwò de tǔrǎng.) — На Северо-Китайской равнине плодородная почва.',
            '这片平原适合耕种。 (Zhè piàn píngyuán shìhé gēngzhòng.) — Эта равнина подходит для сельского хозяйства.',
            '一望无际的平原。 (Yī wàng wújì de píngyuán.) — Равнина, уходящая за горизонт.'
        ]
    },
    15: {
        glyph: '盆地',
        pinyin: 'pén dì',
        translation: 'бассейн (географический)',
        classifier: '个',
        examples: [
            '四川盆地气候湿润。 (Sìchuān Pén Dì qìhòu shīrùn.) — Климат Сычуаньской котловины влажный.',
            '这个盆地四面环山。 (Zhège pén dì sì miàn huán shān.) — Эта котловина окружена горами со всех сторон.',
            '盆地容易积聚污染。 (Pén dì róngyì jījù wūrǎn.) — В котловинах скапливаются загрязнения.'
        ]
    },

    // === БЕРЕГОВЫЕ И ОСТРОВНЫЕ ФОРМЫ ===
    16: {
        glyph: '岛屿',
        pinyin: 'dǎoyǔ',
        translation: 'остров',
        classifier: '个',
        examples: [
            '海南岛是中国第二大岛。 (Hǎinán Dǎo shì Zhōngguó dì èr dà dǎo.) — Хайнань — второй по величине остров Китая.',
            '这个岛屿很美丽。 (Zhège dǎoyǔ hěn měilì.) — Этот остров очень красив.',
            '岛屿四周是海洋。 (Dǎoyǔ sìzhōu shì hǎiyáng.) — Вокруг острова океан.'
        ]
    },
    17: {
        glyph: '半岛',
        pinyin: 'bàndǎo',
        translation: 'полуостров',
        classifier: '个',
        examples: [
            '山东半岛伸入黄海。 (Shāndōng Bàndǎo shēn rù Huáng Hǎi.) — Шаньдунский полуостров вдаётся в Жёлтое море.',
            '这个半岛三面环海。 (Zhège bàndǎo sān miàn huán hǎi.) — Этот полуостров омывается морем с трёх сторон.',
            '雷州半岛在广东。 (Léizhōu Bàndǎo zài Guǎngdōng.) — Лэйчжоуский полуостров в Гуандуне.'
        ]
    },
    18: {
        glyph: '海岸',
        pinyin: 'hǎi\'àn',
        translation: 'побережье',
        classifier: '段',
        examples: [
            '这段海岸有美丽的沙滩。 (Zhè duàn hǎi\'àn yǒu měilì de shātān.) — На этом участке побережья красивый пляж.',
            '海岸线很长。 (Hǎi\'àn xiàn hěn cháng.) — Линия побережья очень длинная.',
            '保护海岸防止侵蚀。 (Bǎohù hǎi\'àn fángzhǐ qīnshí.) — Необходимо защищать побережье от эрозии.'
        ]
    },
    19: {
        glyph: '悬崖',
        pinyin: 'xuányá',
        translation: 'скала / обрыв',
        classifier: '处',
        examples: [
            '这处悬崖很危险。 (Zhè chù xuányá hěn wēixiǎn.) — Этот утёс очень опасен.',
            '悬崖下面是大海。 (Xuányá xiàmiàn shì dàhǎi.) — Под скалой — океан.',
            '不要靠近悬崖边缘。 (Búyào kàojìn xuányá biānyuán.) — Не подходите близко к краю обрыва.'
        ]
    },
    20: {
        glyph: '峡谷',
        pinyin: 'xiágǔ',
        translation: 'ущелье',
        classifier: '个',
        examples: [
            '长江三峡是著名峡谷。 (Cháng Jiāng Sānxiá shì zhùmíng xiágǔ.) — Три ущелья Янцзы — знаменитое ущелье.',
            '这个峡谷很深。 (Zhège xiágǔ hěn shēn.) — Это ущелье очень глубокое.',
            '峡谷中河流湍急。 (Xiágǔ zhōng héliú tuānjí.) — В ущелье бурная река.'
        ]
    },

    // === ВОДНЫЕ И СУХИЕ ДОПОЛНЕНИЯ ===
    21: {
        glyph: '瀑布',
        pinyin: 'pùbù',
        translation: 'водопад',
        classifier: '个',
        examples: [
            '黄果树瀑布很壮观。 (Huángguǒ Shù Pùbù hěn zhuàngguān.) — Водопад Хуангошу очень впечатляющий.',
            '这个瀑布从山顶流下。 (Zhège pùbù cóng shāndǐng liú xià.) — Этот водопад ниспадает с вершины горы.',
            '瀑布的声音很响。 (Pùbù de shēngyīn hěn xiǎng.) — Водопад очень шумный.'
        ]
    },
    22: {
        glyph: '泉水',
        pinyin: 'quánshuǐ',
        translation: 'родник / источник',
        classifier: '眼',
        examples: [
            '这眼泉水很清甜。 (Zhè yǎn quánshuǐ hěn qīng tián.) — Эта вода из родника очень прозрачная и сладкая.',
            '山上有天然泉水。 (Shān shàng yǒu tiānrán quánshuǐ.) — В горах есть природный родник.',
            '泉水可以直接饮用。 (Quánshuǐ kěyǐ zhíjiē yǐnyòng.) — Воду из родника можно пить без кипячения.'
        ]
    },
    23: {
        glyph: '沼泽',
        pinyin: 'zhǎozé',
        translation: 'болото',
        classifier: '片',
        examples: [
            '这片沼泽有很多鸟类。 (Zhè piàn zhǎozé yǒu hěn duō niǎo lèi.) — В этом болоте много птиц.',
            '沼泽是重要的湿地生态系统。 (Zhǎozé shì zhòngyào de shīdì shēngtài xìtǒng.) — Болота — важные водно-болотные экосистемы.',
            '不要进入沼泽，很危险。 (Búyào jìnrù zhǎozé, hěn wēixiǎn.) — Не входите в болото — это опасно.'
        ]
    },
    24: {
        glyph: '冰川',
        pinyin: 'bīngchuān',
        translation: 'ледник',
        classifier: '条',
        examples: [
            '喜马拉雅山有巨大冰川。 (Xǐmǎlāyǎ shān yǒu jùdà bīngchuān.) — В Гималаях огромные ледники.',
            '这条冰川正在融化。 (Zhè tiáo bīngchuān zhèngzài rónghuà.) — Этот ледник тает.',
            '冰川是重要的淡水资源。 (Bīngchuān shì zhòngyào de dànshuǐ zīyuán.) — Ледники — важный источник пресной воды.'
        ]
    },
    25: {
        glyph: '火山',
        pinyin: 'huǒshān',
        translation: 'вулкан',
        classifier: '座',
        examples: [
            '这座火山已经休眠。 (Zhè zuò huǒshān yǐjīng xiūmián.) — Этот вулкан уже в состоянии покоя.',
            '火山喷发会带来灾难。 (Huǒshān pēnfā huì dàilái zāinàn.) — Извержение вулкана приносит бедствия.',
            '火山灰很肥沃，适合种地。 (Huǒshān huī hěn féiwò, shìhé zhòng dì.) — Вулканический пепел очень плодороден.'
        ]
    }
};

const nounsPlants: { [key: number]: DictItem } = {
    // === ДЕРЕВЬЯ И КУСТАРНИКИ ===
    1: {
        glyph: '树',
        pinyin: 'shù',
        translation: 'дерево',
        classifier: '棵',
        examples: [
            '院子里有一棵树。 (Yuànzi lǐ yǒu yī kē shù.) — Во дворе растёт дерево.',
            '这棵树有百年历史。 (Zhè kē shù yǒu bǎinián lìshǐ.) — Этому дереву сто лет.',
            '树能净化空气。 (Shù néng jìnghuà kōngqì.) — Деревья очищают воздух.'
        ]
    },
    2: {
        glyph: '松树',
        pinyin: 'sōngshù',
        translation: 'сосна',
        classifier: '棵',
        examples: [
            '山上有很多松树。 (Shān shàng yǒu hěn duō sōngshù.) — В горах много сосен.',
            '松树四季常青。 (Sōngshù sìjì chángqīng.) — Сосны вечнозелёные.',
            '松树的叶子像针。 (Sōngshù de yèzi xiàng zhēn.) — Листья сосны похожи на иголки.'
        ]
    },
    3: {
        glyph: '竹子',
        pinyin: 'zhúzi',
        translation: 'бамбук',
        classifier: '棵',
        examples: [
            '南方多竹子。 (Nánfāng duō zhúzi.) — На юге много бамбука.',
            '这棵竹子很高。 (Zhè kē zhúzi hěn gāo.) — Этот бамбук очень высокий.',
            '竹子可以做家具。 (Zhúzi kěyǐ zuò jiājù.) — Из бамбука делают мебель.'
        ]
    },
    4: {
        glyph: '柳树',
        pinyin: 'liǔshù',
        translation: 'ива',
        classifier: '棵',
        examples: [
            '河边种了柳树。 (Hé biān zhòng le liǔshù.) — У реки посажены ивы.',
            '柳树的枝条很柔软。 (Liǔshù de zhītiáo hěn róuruǎn.) — Ветви ивы очень гибкие.',
            '春天柳树发芽。 (Chūntiān liǔshù fā yá.) — Весной у ивы распускаются почки.'
        ]
    },
    5: {
        glyph: '灌木',
        pinyin: 'guànmù',
        translation: 'кустарник',
        classifier: '丛',
        examples: [
            '花园里有玫瑰灌木。 (Huāyuán lǐ yǒu méiguī guànmù.) — В саду растут кусты роз.',
            '这丛灌木开花了。 (Zhè cóng guànmù kāi huā le.) — Этот кустарник зацвёл.',
            '灌木可以做绿篱。 (Guànmù kěyǐ zuò lǜlí.) — Кустарники используют как живую изгородь.'
        ]
    },

    // === ЦВЕТЫ ===
    6: {
        glyph: '花',
        pinyin: 'huā',
        translation: 'цветок',
        classifier: '朵',
        examples: [
            '这朵花很香。 (Zhè duǒ huā hěn xiāng.) — Этот цветок очень ароматный.',
            '春天百花盛开。 (Chūntiān bǎihuā shèngkāi.) — Весной расцветают сотни цветов.',
            '她喜欢种花。 (Tā xǐhuan zhòng huā.) — Она любит выращивать цветы.'
        ]
    },
    7: {
        glyph: '玫瑰',
        pinyin: 'méiguī',
        translation: 'роза',
        classifier: '朵',
        examples: [
            '红玫瑰代表爱情。 (Hóng méiguī dàibiǎo àiqíng.) — Красная роза символизирует любовь.',
            "送她一束玫瑰。 (Sòng tā yī shù méiguī.) — Подари ей букет роз.",
            '玫瑰有刺。 (Méiguī yǒu cì.) — У роз есть шипы.'
        ]
    },
    8: {
        glyph: '菊花',
        pinyin: 'júhuā',
        translation: 'хризантема',
        classifier: '朵',
        examples: [
            '秋天是菊花的季节。 (Qiūtiān shì júhuā de jìjié.) — Осень — время хризантем.',
            '这朵菊花是黄色的。 (Zhè duǒ júhuā shì huángsè de.) — Эта хризантема жёлтая.',
            '菊花可以泡茶。 (Júhuā kěyǐ pào chá.) — Из хризантем заваривают чай.'
        ]
    },
    9: {
        glyph: '荷花',
        pinyin: 'héhuā',
        translation: 'лотос',
        classifier: '朵',
        examples: [
            '荷花出淤泥而不染。 (Héhuā chū yūní ér bù rǎn.) — Лотос растёт в грязи, но остаётся чистым.',
            '池塘里开满了荷花。 (Chítáng lǐ kāi mǎn le héhuā.) — В пруду распустились лотосы.',
            '荷花在夏天开放。 (Héhuā zài xiàtiān kāifàng.) — Лотосы цветут летом.'
        ]
    },
    10: {
        glyph: '樱花',
        pinyin: 'yīnghuā',
        translation: 'цветок вишни',
        classifier: '朵',
        examples: [
            '春天看樱花。 (Chūntiān kàn yīnghuā.) — Весной наблюдают за цветением вишни.',
            '这朵樱花很美。 (Zhè duǒ yīnghuā hěn měi.) — Этот цветок вишни очень красив.',
            '樱花花期很短。 (Yīnghuā huāqī hěn duǎn.) — Цветение вишни очень короткое.'
        ]
    },

    // === ТРАВЫ И МЕЛКИЕ РАСТЕНИЯ ===
    11: {
        glyph: '草',
        pinyin: 'cǎo',
        translation: 'трава',
        classifier: '棵',
        examples: [
            '草坪需要修剪。 (Cǎopíng xūyào xiūjiǎn.) — Газон нужно подстригать.',
            '这棵草很绿。 (Zhè kē cǎo hěn lǜ.) — Эта травинка очень зелёная.',
            '野火烧不尽，春风吹又生。 (Yě huǒ shāo bú jìn, chūnfēng chuī yòu shēng.) — Полевой огонь не сожжёт её, весенний ветер вновь оживит.'
        ]
    },
    12: {
        glyph: '青草',
        pinyin: 'qīngcǎo',
        translation: 'зелёная трава',
        classifier: '片',
        examples: [
            '这片青草很嫩。 (Zhè piàn qīngcǎo hěn nèn.) — Эта зелёная трава очень нежная.',
            '牛羊吃青草。 (Niú yáng chī qīngcǎo.) — Коровы и овцы пасутся на зелёной траве.',
            '雨后青草更绿。 (Yǔ hòu qīngcǎo gèng lǜ.) — После дождя трава становится ещё зеленее.'
        ]
    },
    13: {
        glyph: '芦苇',
        pinyin: 'lúwěi',
        translation: 'камыш',
        classifier: '丛',
        examples: [
            '河边长着芦苇。 (Hé biān zhǎng zhe lúwěi.) — У реки растёт камыш.',
            '这丛芦苇很高。 (Zhè cóng lúwěi hěn gāo.) — Этот камыш очень высокий.',
            '芦苇可以造纸。 (Lúwěi kěyǐ zào zhǐ.) — Из камыша делают бумагу.'
        ]
    },
    14: {
        glyph: '苔藓',
        pinyin: 'táixiǎn',
        translation: 'мох',
        classifier: '片',
        examples: [
            '石头上长满了苔藓。 (Shítou shàng zhǎng mǎn le táixiǎn.) — На камне сплошной мох.',
            '这片苔藓很柔软。 (Zhè piàn táixiǎn hěn róuruǎn.) — Этот мох очень мягкий.',
            '苔藓喜欢阴湿环境。 (Táixiǎn xǐhuan yīn shī huánjìng.) — Мох любит тень и влагу.'
        ]
    },
    15: {
        glyph: '蕨类植物',
        pinyin: 'jué lèi zhíwù',
        translation: 'папоротник',
        classifier: '株',
        examples: [
            '森林里有很多蕨类植物。 (Sēnlín lǐ yǒu hěn duō jué lèi zhíwù.) — В лесу много папоротников.',
            '这株蕨类植物长在阴处。 (Zhè zhū jué lèi zhíwù zhǎng zài yīn chù.) — Этот папоротник растёт в тени.',
            '蕨类植物是古老的植物。 (Jué lèi zhíwù shì gǔlǎo de zhíwù.) — Папоротники — древние растения.'
        ]
    },

    // === СЕЛЬСКОХОЗЯЙСТВЕННЫЕ КУЛЬТУРЫ ===
    16: {
        glyph: '水稻',
        pinyin: 'shuǐdào',
        translation: 'рис (на корню)',
        classifier: '株',
        examples: [
            '南方多种水稻。 (Nánfāng duō zhǒng shuǐdào.) — На юге много рисовых полей.',
            '这株水稻快成熟了。 (Zhè zhū shuǐdào kuài chéngshú le.) — Этот рис почти созрел.',
            '水稻需要大量水。 (Shuǐdào xūyào dàliàng shuǐ.) — Рис требует много воды.'
        ]
    },
    17: {
        glyph: '小麦',
        pinyin: 'xiǎomài',
        translation: 'пшеница',
        classifier: '株',
        examples: [
            '北方主要种小麦。 (Běifāng zhǔyào zhǒng xiǎomài.) — На севере в основном выращивают пшеницу.',
            '这株小麦长得很好。 (Zhè zhū xiǎomài zhǎng de hěn hǎo.) — Эта пшеница растёт отлично.',
            '小麦磨成面粉。 (Xiǎomài mó chéng miànfěn.) — Пшеницу мелют в муку.'
        ]
    },
    18: {
        glyph: '玉米',
        pinyin: 'yùmǐ',
        translation: 'кукуруза',
        classifier: '株',
        examples: [
            '这株玉米很高。 (Zhè zhū yùmǐ hěn gāo.) — Эта кукуруза очень высокая.',
            '玉米可以做饲料。 (Yùmǐ kěyǐ zuò sìliào.) — Кукуруза используется как корм.',
            '煮玉米很好吃。 (Zhǔ yùmǐ hěn hǎochī.) — Варёная кукуруза очень вкусная.'
        ]
    },
    19: {
        glyph: '大豆',
        pinyin: 'dàdòu',
        translation: 'соя',
        classifier: '株',
        examples: [
            '大豆是重要的油料作物。 (Dàdòu shì zhòngyào de yóuliào zuòwù.) — Соя — важная масличная культура.',
            '这株大豆结了很多豆荚。 (Zhè zhū dàdòu jiē le hěn duō dòujiá.) — На этой сое много бобов.',
            '豆腐是用大豆做的。 (Dòufu shì yòng dàdòu zuò de.) — Тофу делают из сои.'
        ]
    },
    20: {
        glyph: '棉花',
        pinyin: 'miánhuā',
        translation: 'хлопок',
        classifier: '株',
        examples: [
            '这株棉花开花了。 (Zhè zhū miánhuā kāi huā le.) — На этом хлопке распустились цветы.',
            '棉花用来做衣服。 (Miánhuā yòng lái zuò yīfu.) — Хлопок используют для пошива одежды.',
            '新疆盛产棉花。 (Xīnjiāng shèngchǎn miánhuā.) — В Синьцзяне много хлопка.'
        ]
    },

    // === ГРИБЫ И ВОДОРОСЛИ ===
    21: {
        glyph: '蘑菇',
        pinyin: 'mógu',
        translation: 'гриб',
        classifier: '朵',
        examples: [
            '雨后森林里长出蘑菇。 (Yǔ hòu sēnlín lǐ zhǎng chū mógu.) — После дождя в лесу появляются грибы.',
            '这朵蘑菇有毒。 (Zhè duǒ mógu yǒu dú.) — Этот гриб ядовит.',
            '香菇是美味的蘑菇。 (Xiānggū shì měiwèi de mógu.) — Шиитаке — вкусный гриб.'
        ]
    },
    22: {
        glyph: '木耳',
        pinyin: 'mù\'ěr',
        translation: 'древесный гриб (аурикулярия)',
        classifier: '朵',
        examples: [
            '木耳长在朽木上。 (Mù\'ěr zhǎng zài xiǔmù shàng.) — Древесный гриб растёт на гнилой древесине.',
            '这朵木耳很新鲜。 (Zhè duǒ mù\'ěr hěn xīnxiān.) — Этот гриб очень свежий.',
            '木耳有很高的营养价值。 (Mù\'ěr yǒu hěn gāo de yíngyǎng jiàzhí.) — Древесный гриб очень питателен.'
        ]
    },
    23: {
        glyph: '海藻',
        pinyin: 'hǎizǎo',
        translation: 'морские водоросли',
        classifier: '种',
        examples: [
            '海藻是海洋生态系统的重要部分。 (Hǎizǎo shì hǎiyáng shēngtài xìtǒng de zhòngyào bùfèn.) — Водоросли — важная часть морской экосистемы.',
            '这种海藻可以食用。 (Zhè zhǒng hǎizǎo kěyǐ shíyòng.) — Этот вид водорослей съедобен.',
            '海藻能吸收二氧化碳。 (Hǎizǎo néng xīshōu èryǎnghuàtàn.) — Водоросли поглощают углекислый газ.'
        ]
    },
    24: {
        glyph: '紫菜',
        pinyin: 'zǐcài',
        translation: 'нори (морская капуста)',
        classifier: '片',
        examples: [
            '紫菜用来包寿司。 (Zǐcài yòng lái bāo shòusī.) — Нори используют для заворачивания суши.',
            '这片紫菜很薄。 (Zhè piàn zǐcài hěn báo.) — Эта водоросль очень тонкая.',
            '紫菜富含碘。 (Zǐcài fùhán diǎn.) — Нори богаты йодом.'
        ]
    },
    25: {
        glyph: '浮萍',
        pinyin: 'fúpíng',
        translation: 'ряска',
        classifier: '片',
        examples: [
            '池塘水面漂浮着浮萍。 (Chítáng shuǐmiàn piāofú zhe fúpíng.) — На поверхности пруда плавает ряска.',
            '这片浮萍覆盖了整个水面。 (Zhè piàn fúpíng fùgài le zhěnggè shuǐmiàn.) — Эта ряска покрывает всю поверхность воды.',
            '浮萍生长很快。 (Fúpíng shēngzhǎng hěn kuài.) — Ряска растёт очень быстро.'
        ]
    }
};

const nounsAnimals: { [key: number]: DictItem } = {
    // === ДОМАШНИЕ ЖИВОТНЫЕ ===
    1: {
        glyph: '狗',
        pinyin: 'gǒu',
        translation: 'собака',
        classifier: '只',
        examples: [
            '我家有一只狗。 (Wǒ jiā yǒu yī zhǐ gǒu.) — У нас дома собака.',
            '这只狗很聪明。 (Zhè zhǐ gǒu hěn cōngmíng.) — Эта собака очень умная.',
            '狗是人类最好的朋友。 (Gǒu shì rénlèi zuì hǎo de péngyou.) — Собака — лучший друг человека.'
        ]
    },
    2: {
        glyph: '猫',
        pinyin: 'māo',
        translation: 'кошка',
        classifier: '只',
        examples: [
            '她养了一只猫。 (Tā yǎng le yī zhǐ māo.) — Она завела кошку.',
            '这只猫很懒。 (Zhè zhǐ māo hěn lǎn.) — Эта кошка очень ленивая.',
            '猫喜欢抓老鼠。 (Māo xǐhuan zhuā lǎoshǔ.) — Кошки любят ловить мышей.'
        ]
    },
    3: {
        glyph: '兔子',
        pinyin: 'tùzi',
        translation: 'кролик',
        classifier: '只',
        examples: [
            '孩子喜欢兔子。 (Háizi xǐhuan tùzi.) — Дети любят кроликов.',
            '这只兔子是白色的。 (Zhè zhǐ tùzi shì báisè de.) — Этот кролик белый.',
            '兔子吃胡萝卜。 (Tùzi chī húluóbo.) — Кролики едят морковку.'
        ]
    },
    4: {
        glyph: '鸟',
        pinyin: 'niǎo',
        translation: 'птица',
        classifier: '只',
        examples: [
            '树上有两只鸟。 (Shù shàng yǒu liǎng zhǐ niǎo.) — На дереве две птицы.',
            '这只鸟会唱歌。 (Zhè zhǐ niǎo huì chànggē.) — Эта птица умеет петь.',
            '保护鸟类很重要。 (Bǎohù niǎolèi hěn zhòngyào.) — Очень важно защищать птиц.'
        ]
    },
    5: {
        glyph: '鱼',
        pinyin: 'yú',
        translation: 'рыба',
        classifier: '条',
        examples: [
            '水族箱里有三条鱼。 (Shuǐzú xiāng lǐ yǒu sān tiáo yú.) — В аквариуме три рыбки.',
            '这条鱼是红色的。 (Zhè tiáo yú shì hóngsè de.) — Эта рыбка красная.',
            '鱼在水里游。 (Yú zài shuǐ lǐ yóu.) — Рыба плавает в воде.'
        ]
    },

    // === СЕЛЬСКОХОЗЯЙСТВЕННЫЕ ЖИВОТНЫЕ ===
    6: {
        glyph: '牛',
        pinyin: 'niú',
        translation: 'корова / бык',
        classifier: '头',
        examples: [
            '农场有五头牛。 (Nóngchǎng yǒu wǔ tóu niú.) — На ферме пять коров.',
            '这头牛很大。 (Zhè tóu niú hěn dà.) — Эта корова очень большая.',
            '牛提供牛奶和肉。 (Niú tígōng niúnǎi hé ròu.) — Коровы дают молоко и мясо.'
        ]
    },
    7: {
        glyph: '猪',
        pinyin: 'zhū',
        translation: 'свинья',
        classifier: '头',
        examples: [
            '这头猪很胖。 (Zhè tóu zhū hěn pàng.) — Эта свинья очень толстая.',
            '猪是重要的家畜。 (Zhū shì zhòngyào de jiāchù.) — Свиньи — важный вид домашнего скота.',
            '农村养了很多猪。 (Nóngcūn yǎng le hěn duō zhū.) — В деревнях разводят много свиней.'
        ]
    },
    8: {
        glyph: '羊',
        pinyin: 'yáng',
        translation: 'овца',
        classifier: '只',
        examples: [
            '山坡上有羊群。 (Shānpō shàng yǒu yáng qún.) — На склоне стадо овец.',
            '这只羊很温顺。 (Zhè zhǐ yáng hěn wēnshùn.) — Эта овца очень кроткая.',
            '羊提供羊毛和肉。 (Yáng tígōng yángmáo hé ròu.) — Овцы дают шерсть и мясо.'
        ]
    },
    9: {
        glyph: '马',
        pinyin: 'mǎ',
        translation: 'лошадь',
        classifier: '匹',
        examples: [
            '草原上有一匹马。 (Cǎoyuán shàng yǒu yī pǐ mǎ.) — В степи лошадь.',
            '这匹马跑得很快。 (Zhè pǐ mǎ pǎo de hěn kuài.) — Эта лошадь бегает очень быстро.',
            '古代用马打仗。 (Gǔdài yòng mǎ dǎzhàng.) — В древности лошадей использовали в боях.'
        ]
    },
    10: {
        glyph: '鸡',
        pinyin: 'jī',
        translation: 'курица',
        classifier: '只',
        examples: [
            ' backyard有十只鸡。 (Backyard yǒu shí zhǐ jī.) — Во дворе десять кур.',
            '这只鸡下蛋了。 (Zhè zhǐ jī xià dàn le.) — Эта курица снесла яйцо.',
            '鸡肉是常见的食物。 (Jīròu shì chángjiàn de shíwù.) — Куриное мясо — распространённая еда.'
        ]
    },

    // === ДИКИЕ ЗВЕРИ ===
    11: {
        glyph: '老虎',
        pinyin: 'lǎohǔ',
        translation: 'тигр',
        classifier: '只',
        examples: [
            '老虎是森林之王。 (Lǎohǔ shì sēnlín zhī wáng.) — Тигр — царь зверей.',
            '这只老虎在动物园。 (Zhè zhǐ lǎohǔ zài dòngwùyuán.) — Этот тигр в зоопарке.',
            '野生老虎濒临灭绝。 (Yěshēng lǎohǔ bīnlín mièjué.) — Дикие тигры находятся под угрозой исчезновения.'
        ]
    },
    12: {
        glyph: '狮子',
        pinyin: 'shīzi',
        translation: 'лев',
        classifier: '只',
        examples: [
            '狮子是草原之王。 (Shīzi shì cǎoyuán zhī wáng.) — Лев — царь саванны.',
            '这只狮子很威武。 (Zhè zhǐ shīzi hěn wēiwǔ.) — Этот лев очень величественный.',
            '非洲有野生狮子。 (Fēizhōu yǒu yěshēng shīzi.) — В Африке живут дикие львы.'
        ]
    },
    13: {
        glyph: '熊',
        pinyin: 'xióng',
        translation: 'медведь',
        classifier: '只',
        examples: [
            '森林里有熊。 (Sēnlín lǐ yǒu xióng.) — В лесу живут медведи.',
            '这只熊在冬眠。 (Zhè zhǐ xióng zài dōngmián.) — Этот медведь в спячке.',
            '大熊猫是中国的国宝。 (Dàxióngmāo shì Zhōngguó de guóbǎo.) — Большая панда — национальное сокровище Китая.'
        ]
    },
    14: {
        glyph: '狼',
        pinyin: 'láng',
        translation: 'волк',
        classifier: '只',
        examples: [
            '狼群在夜里嚎叫。 (Láng qún zài yèlǐ háojiào.) — Волчья стая воет ночью.',
            '这只狼很狡猾。 (Zhè zhǐ láng hěn jiǎohuá.) — Этот волк очень хитрый.',
            '狼是群居动物。 (Láng shì qúnjū dòngwù.) — Волки — стайные животные.'
        ]
    },
    15: {
        glyph: '猴子',
        pinyin: 'hóuzi',
        translation: 'обезьяна',
        classifier: '只',
        examples: [
            '山上有猴子。 (Shān shàng yǒu hóuzi.) — В горах обезьяны.',
            '这只猴子很调皮。 (Zhè zhǐ hóuzi hěn tiáopí.) — Эта обезьяна очень озорная.',
            '猴子喜欢吃香蕉。 (Hóuzi xǐhuan chī xiāngjiāo.) — Обезьяны любят бананы.'
        ]
    },

    // === МОРСКИЕ ЖИВОТНЫЕ ===
    16: {
        glyph: '海豚',
        pinyin: 'hǎitún',
        translation: 'дельфин',
        classifier: '只',
        examples: [
            '海豚很聪明。 (Hǎitún hěn cōngmíng.) — Дельфины очень умные.',
            '这只海豚会表演。 (Zhè zhǐ hǎitún huì biǎoyǎn.) — Этот дельфин умеет выступать.',
            '海豚是哺乳动物。 (Hǎitún shì bǔrǔ dòngwù.) — Дельфины — млекопитающие.'
        ]
    },
    17: {
        glyph: '鲸鱼',
        pinyin: 'jīngyú',
        translation: 'кит',
        classifier: '头',
        examples: [
            '蓝鲸是最大的动物。 (Lán jīngyú shì zuì dà de dòngwù.) — Голубой кит — самое большое животное.',
            '这头鲸鱼搁浅了。 (Zhè tóu jīngyú gēqiǎn le.) — Этот кит выбросился на берег.',
            '鲸鱼用肺呼吸。 (Jīngyú yòng fèi hūxī.) — Киты дышат лёгкими.'
        ]
    },
    18: {
        glyph: '鲨鱼',
        pinyin: 'shāyú',
        translation: 'акула',
        classifier: '条',
        examples: [
            '这条鲨鱼很危险。 (Zhè tiáo shāyú hěn wēixiǎn.) — Эта акула очень опасна.',
            '鲨鱼是海洋顶级掠食者。 (Shāyú shì hǎiyáng dǐngjí lüèshízhě.) — Акулы — вершина морской пищевой цепи.',
            '不要在鲨鱼出没的海域游泳。 (Búyào zài shāyú chūmò de hǎiyù yóuyǒng.) — Не купайтесь в районах, где водятся акулы.'
        ]
    },
    19: {
        glyph: '章鱼',
        pinyin: 'zhāngyú',
        translation: 'осьминог',
        classifier: '只',
        examples: [
            '这只章鱼有八条腿。 (Zhè zhǐ zhāngyú yǒu bā tiáo tuǐ.) — У этого осьминога восемь щупалец.',
            '章鱼很聪明。 (Zhāngyú hěn cōngmíng.) — Осьминоги очень умные.',
            '章鱼可以改变颜色。 (Zhāngyú kěyǐ gǎibiàn yánsè.) — Осьминоги умеют менять окраску.'
        ]
    },
    20: {
        glyph: '海星',
        pinyin: 'hǎixīng',
        translation: 'морская звезда',
        classifier: '只',
        examples: [
            '海滩上有海星。 (Hǎitān shàng yǒu hǎixīng.) — На пляже морские звёзды.',
            '这只海星是红色的。 (Zhè zhǐ hǎixīng shì hóngsè de.) — Эта морская звезда красная.',
            '海星有再生能力。 (Hǎixīng yǒu zàishēng nénglì.) — Морские звёзды могут регенерировать.'
        ]
    },

    // === НАСЕКОМЫЕ И РЕПТИЛИИ ===
    21: {
        glyph: '蜜蜂',
        pinyin: 'mìfēng',
        translation: 'пчела',
        classifier: '只',
        examples: [
            '蜜蜂采花蜜。 (Mìfēng cǎi huāmì.) — Пчёлы собирают нектар.',
            '这只蜜蜂在飞。 (Zhè zhǐ mìfēng zài fēi.) — Эта пчела летает.',
            '蜜蜂对农业很重要。 (Mìfēng duì nóngyè hěn zhòngyào.) — Пчёлы очень важны для сельского хозяйства.'
        ]
    },
    22: {
        glyph: '蝴蝶',
        pinyin: 'húdié',
        translation: 'бабочка',
        classifier: '只',
        examples: [
            '花园里有蝴蝶。 (Huāyuán lǐ yǒu húdié.) — В саду летают бабочки.',
            '这只蝴蝶很美丽。 (Zhè zhǐ húdié hěn měilì.) — Эта бабочка очень красива.',
            '蝴蝶从毛毛虫变来。 (Húdié cóng máomáochóng biàn lái.) — Бабочки превращаются из гусениц.'
        ]
    },
    23: {
        glyph: '蚂蚁',
        pinyin: 'mǎyǐ',
        translation: 'муравей',
        classifier: '只',
        examples: [
            '地上有一只蚂蚁。 (Dìshàng yǒu yī zhǐ mǎyǐ.) — На земле муравей.',
            '蚂蚁很勤劳。 (Mǎyǐ hěn qínláo.) — Муравьи очень трудолюбивы.',
            '蚂蚁能搬动比自己重的东西。 (Mǎyǐ néng bāndòng bǐ zìjǐ zhòng de dōngxi.) — Муравьи могут тащить предметы тяжелее себя.'
        ]
    },
    24: {
        glyph: '蛇',
        pinyin: 'shé',
        translation: 'змея',
        classifier: '条',
        examples: [
            '草丛里有蛇。 (Cǎocóng lǐ yǒu shé.) — В траве змея.',
            '这条蛇有毒。 (Zhè tiáo shé yǒu dú.) — Эта змея ядовита.',
            '蛇没有腿。 (Shé méiyǒu tuǐ.) — У змей нет ног.'
        ]
    },
    25: {
        glyph: '青蛙',
        pinyin: 'qīngwā',
        translation: 'лягушка',
        classifier: '只',
        examples: [
            '池塘里有青蛙。 (Chítáng lǐ yǒu qīngwā.) — В пруду лягушки.',
            '这只青蛙是绿色的。 (Zhè zhǐ qīngwā shì lǜsè de.) — Эта лягушка зелёная.',
            '青蛙吃害虫。 (Qīngwā chī hàichóng.) — Лягушки едят вредных насекомых.'
        ]
    }
};

const nounsWeather: { [key: number]: DictItem } = {
    // === ОСАДКИ ===
    1: {
        glyph: '雨',
        pinyin: 'yǔ',
        translation: 'дождь',
        classifier: '场',
        examples: [
            '今天下了一场大雨。 (Jīntiān xià le yī chǎng dàyǔ.) — Сегодня прошёл сильный дождь.',
            '这场雨下了两个小时。 (Zhè chǎng yǔ xià le liǎng gè xiǎoshí.) — Этот дождь шёл два часа.',
            '雨后空气很清新。 (Yǔ hòu kōngqì hěn qīngxīn.) — После дождя воздух очень свежий.'
        ]
    },
    2: {
        glyph: '雪',
        pinyin: 'xuě',
        translation: 'снег',
        classifier: '场',
        examples: [
            '昨夜下了一场大雪。 (Zuó yè xià le yī chǎng dàxuě.) — Прошлой ночью выпал сильный снег.',
            '这场雪覆盖了整个城市。 (Zhè chǎng xuě fùgài le zhěnggè chéngshì.) — Этот снег покрыл весь город.',
            '孩子们在雪地里玩耍。 (Háizimen zài xuě dì lǐ wánshuǎ.) — Дети играют в снегу.'
        ]
    },
    3: {
        glyph: '冰雹',
        pinyin: 'bīngbáo',
        translation: 'град',
        classifier: '场',
        examples: [
            '夏天有时会下冰雹。 (Xiàtiān yǒushí huì xià bīngbáo.) — Летом иногда бывает град.',
            '这场冰雹打坏了庄稼。 (Zhè chǎng bīngbáo dǎ huài le zhuāngjia.) — Этот град повредил урожай.',
            '冰雹像小石子一样。 (Bīngbáo xiàng xiǎo shízi yíyàng.) — Град похож на маленькие камешки.'
        ]
    },
    4: {
        glyph: '霜',
        pinyin: 'shuāng',
        translation: 'иней',
        classifier: '层',
        examples: [
            '早晨草地有一层霜。 (Zǎochén cǎodì yǒu yī céng shuāng.) — Утром на траве лёгкий иней.',
            '这层霜很薄。 (Zhè céng shuāng hěn báo.) — Этот иней очень тонкий.',
            '霜冻会伤害植物。 (Shuāngdòng huì shānghài zhíwù.) — Заморозки вредят растениям.'
        ]
    },
    5: {
        glyph: '露水',
        pinyin: 'lùshuǐ',
        translation: 'роса',
        classifier: '滴',
        examples: [
            '清晨草叶上有露水。 (Qīngchén cǎo yè shàng yǒu lùshuǐ.) — Утром на траве роса.',
            '一滴露水很清澈。 (Yī dī lùshuǐ hěn qīngchè.) — Капля росы очень прозрачная.',
            '露水在太阳出来后就消失了。 (Lùshuǐ zài tàiyáng chūlái hòu jiù xiāoshī le.) — Роса исчезает после восхода солнца.'
        ]
    },

    // === ВЕТЕР И ТЕМПЕРАТУРА ===
    6: {
        glyph: '风',
        pinyin: 'fēng',
        translation: 'ветер',
        classifier: '阵',
        examples: [
            '刚才刮了一阵大风。 (Gāngcái guā le yī zhèn dàfēng.) — Только что подул сильный порыв ветра.',
            '这阵风很凉快。 (Zhè zhèn fēng hěn liángkuai.) — Этот ветерок очень освежающий.',
            '台风是强烈的热带风暴。 (Táifēng shì qiángliè de rèdài fēngbào.) — Тайфун — мощный тропический шторм.'
        ]
    },
    7: {
        glyph: '台风',
        pinyin: 'táifēng',
        translation: 'тайфун',
        classifier: '个',
        examples: [
            '今年夏天有一个强台风。 (Jīnnián xiàtiān yǒu yī gè qiáng táifēng.) — Этим летом был сильный тайфун.',
            '这个台风带来了暴雨。 (Zhè gè táifēng dàilái le bàoyǔ.) — Этот тайфун принёс ливень.',
            '台风期间不要外出。 (Táifēng qījiān búyào wàichū.) — Во время тайфуна не выходите на улицу.'
        ]
    },
    8: {
        glyph: '寒流',
        pinyin: 'hánliú',
        translation: 'холодный фронт',
        classifier: '股',
        examples: [
            '一股寒流南下。 (Yī gǔ hánliú nánxià.) — Холодный фронт движется на юг.',
            '寒流导致气温骤降。 (Hánliú dǎozhì qìwēn zhòu jiàng.) — Холодный фронт вызвал резкое похолодание.',
            '注意寒流来袭。 (Zhùyì hánliú lái xí.) — Следите за приближением холодного фронта.'
        ]
    },
    9: {
        glyph: '热浪',
        pinyin: 'rèlàng',
        translation: 'волна жары',
        classifier: '波',
        examples: [
            '今年夏天有一波热浪。 (Jīnnián xiàtiān yǒu yī bō rèlàng.) — Этим летом была волна жары.',
            '热浪持续了一周。 (Rèlàng chíxù le yī zhōu.) — Жара длилась неделю.',
            '热浪对老人很危险。 (Rèlàng duì lǎorén hěn wēixiǎn.) — Волна жары опасна для пожилых людей.'
        ]
    },
    10: {
        glyph: '霜冻',
        pinyin: 'shuāngdòng',
        translation: 'заморозки',
        classifier: '次',
        examples: [
            '秋天可能有几次霜冻。 (Qiūtiān kěnéng yǒu jǐ cì shuāngdòng.) — Осенью может быть несколько заморозков.',
            '这次霜冻来得早。 (Zhè cì shuāngdòng lái de zǎo.) — Эти заморозки наступили рано.',
            '农民要防霜冻。 (Nóngmín yào fáng shuāngdòng.) — Фермерам нужно защищать посевы от заморозков.'
        ]
    },

    // === ГРОЗА И СВЕТОВЫЕ ЯВЛЕНИЯ ===
    11: {
        glyph: '雷',
        pinyin: 'léi',
        translation: 'гром',
        classifier: '声',
        examples: [
            '刚才听到一声雷。 (Gāngcái tīng dào yī shēng léi.) — Только что раздался гром.',
            '雷声很大。 (Léishēng hěn dà.) — Гром очень громкий.',
            '雷雨时不要站在树下。 (Léiyǔ shí búyào zhàn zài shù xià.) — Во время грозы не стойте под деревом.'
        ]
    },
    12: {
        glyph: '闪电',
        pinyin: 'shǎndiàn',
        translation: 'молния',
        classifier: '道',
        examples: [
            '天空划过一道闪电。 (Tiānkōng huàguò yī dào shǎndiàn.) — По небу пронеслась молния.',
            '这道闪电很亮。 (Zhè dào shǎndiàn hěn liàng.) — Эта молния очень яркая.',
            '闪电和雷声几乎同时出现。 (Shǎndiàn hé léishēng jīhū tóngshí chūxiàn.) — Молния и гром почти одновременны.'
        ]
    },
    13: {
        glyph: '雷雨',
        pinyin: 'léiyǔ',
        translation: 'гроза',
        classifier: '场',
        examples: [
            '今晚有一场雷雨。 (Jīnwǎn yǒu yī chǎng léiyǔ.) — Сегодня ночью будет гроза.',
            '这场雷雨很猛烈。 (Zhè chǎng léiyǔ hěn měngliè.) — Эта гроза очень сильная.',
            '雷雨后天气变凉。 (Léiyǔ hòu tiānqì biàn liáng.) — После грозы становится прохладнее.'
        ]
    },
    14: {
        glyph: '彩虹',
        pinyin: 'cǎihóng',
        translation: 'радуга',
        classifier: '道',
        examples: [
            '雨后天空出现一道彩虹。 (Yǔ hòu tiānkōng chūxiàn yī dào cǎihóng.) — После дождя на небе появляется радуга.',
            '这道彩虹有七种颜色。 (Zhè dào cǎihóng yǒu qī zhǒng yánsè.) — Эта радуга семицветная.',
            '彩虹象征希望。 (Cǎihóng xiàngzhēng xīwàng.) — Радуга символизирует надежду.'
        ]
    },
    15: {
        glyph: '极光',
        pinyin: 'jíguāng',
        translation: 'северное сияние',
        classifier: '道',
        examples: [
            '在北极能看到极光。 (Zài běijí néng kàn dào jíguāng.) — На Северном полюсе можно увидеть сияние.',
            '这道极光很绚丽。 (Zhè dào jíguāng hěn xuànlì.) — Это сияние очень красиво.',
            '极光是由太阳风引起的。 (Jíguāng shì yóu tàiyáng fēng yǐnqǐ de.) — Сияние вызвано солнечным ветром.'
        ]
    },

    // === ТУМАН И ОБЛАЧНОСТЬ ===
    16: {
        glyph: '雾',
        pinyin: 'wù',
        translation: 'туман',
        classifier: '场',
        examples: [
            '早晨有一场大雾。 (Zǎochén yǒu yī chǎng dàyù.) — Утром был густой туман.',
            '这场雾能见度很低。 (Zhè chǎng wù néngjiàndù hěn dī.) — В этом тумане плохая видимость.',
            '大雾天开车要小心。 (Dàyù tiān kāichē yào xiǎoxīn.) — В туманную погоду нужно осторожно водить.'
        ]
    },
    17: {
        glyph: '霾',
        pinyin: 'mái',
        translation: 'смог',
        classifier: '场',
        examples: [
            '今天有一场霾。 (Jīntiān yǒu yī chǎng mái.) — Сегодня смог.',
            '这场霾污染很严重。 (Zhè chǎng mái wūrǎn hěn yánzhòng.) — Этот смог сильно загрязняет воздух.',
            '霾天要戴口罩。 (Mái tiān yào dài kǒuzhào.) — В смог нужно носить маску.'
        ]
    },
    18: {
        glyph: '云',
        pinyin: 'yún',
        translation: 'облако',
        classifier: '朵',
        examples: [
            '天空飘着一朵白云。 (Tiānkōng piāo zhe yī duǒ báiyún.) — По небу плывёт белое облако.',
            '这朵云像一只兔子。 (Zhè duǒ yún xiàng yī zhǐ tùzi.) — Это облако похоже на кролика.',
            '乌云预示着要下雨。 (Wūyún yùshì zhe yào xiàyǔ.) — Тучи предвещают дождь.'
        ]
    },
    19: {
        glyph: '乌云',
        pinyin: 'wūyún',
        translation: 'туча',
        classifier: '片',
        examples: [
            '天空有一片乌云。 (Tiānkōng yǒu yī piàn wūyún.) — На небе туча.',
            '这片乌云很厚。 (Zhè piàn wūyún hěn hòu.) — Эта туча очень плотная.',
            '乌云密布，要下暴雨了。 (Wūyún mìbù, yào xià bàoyǔ le.) — Небо затянуто тучами, будет ливень.'
        ]
    },
    20: {
        glyph: '晴天',
        pinyin: 'qíngtiān',
        translation: 'ясная погода',
        classifier: '个',
        examples: [
            '今天是个晴天。 (Jīntiān shì gè qíngtiān.) — Сегодня ясный день.',
            '这个晴天适合晒被子。 (Zhège qíngtiān shìhé shài bèizi.) — В такую погоду хорошо просушить одеяла.',
            '连续一周都是晴天。 (Liánxù yī zhōu dōu shì qíngtiān.) — Целую неделю стояла ясная погода.'
        ]
    },

    // === СЕЗОННЫЕ И ЭКСТРЕМАЛЬНЫЕ ЯВЛЕНИЯ ===
    21: {
        glyph: '沙尘暴',
        pinyin: 'shāchénbào',
        translation: 'песчаная буря',
        classifier: '场',
        examples: [
            '春天常有沙尘暴。 (Chūntiān cháng yǒu shāchénbào.) — Весной часто бывают песчаные бури.',
            '这场沙尘暴遮天蔽日。 (Zhè chǎng shāchénbào zhē tiān bì rì.) — Эта буря закрыла собой небо и солнце.',
            '沙尘暴对呼吸系统有害。 (Shāchénbào duì hūxī xìtǒng yǒuhài.) — Песчаные бури вредны для дыхания.'
        ]
    },
    22: {
        glyph: '龙卷风',
        pinyin: 'lóngjuǎnfēng',
        translation: 'торнадо',
        classifier: '个',
        examples: [
            '美国中部常有龙卷风。 (Měiguó zhōngbù cháng yǒu lóngjuǎnfēng.) — В центральной части США часто бывают торнадо.',
            '这个龙卷风破坏力很强。 (Zhè gè lóngjuǎnfēng pòhuài lì hěn qiáng.) — Это торнадо очень разрушительно.',
            '龙卷风来临时要躲到地下室。 (Lóngjuǎnfēng láilín shí yào duǒ dào dìxiàshì.) — При приближении торнадо нужно укрыться в подвале.'
        ]
    },
    23: {
        glyph: '洪水',
        pinyin: 'hóngshuǐ',
        translation: 'наводнение',
        classifier: '场',
        examples: [
            '暴雨引发了洪水。 (Bàoyǔ yǐnfā le hóngshuǐ.) — Ливень вызвал наводнение.',
            '这场洪水冲毁了桥梁。 (Zhè chǎng hóngshuǐ chōng huǐ le qiáoliáng.) — Это наводнение разрушило мосты.',
            '洪水退去后需要重建家园。 (Hóngshuǐ tuì qù hòu xūyào chóngjiàn jiāyuán.) — После отступления воды нужно восстанавливать дома.'
        ]
    },
    24: {
        glyph: '干旱',
        pinyin: 'gānhàn',
        translation: 'засуха',
        classifier: '次',
        examples: [
            '今年发生了严重干旱。 (Jīnnián fāshēng le yánzhòng gānhàn.) — В этом году была сильная засуха.',
            '这次干旱持续了三个月。 (Zhè cì gānhàn chíxù le sān gè yuè.) — Эта засуха длилась три месяца.',
            '干旱导致庄稼枯萎。 (Gānhàn dǎozhì zhuāngjia kūwěi.) — От засухи урожай засох.'
        ]
    },
    25: {
        glyph: '冰冻',
        pinyin: 'bīngdòng',
        translation: 'ледяной дождь / обледенение',
        classifier: '场',
        examples: [
            '一场冰冻让路面很滑。 (Yī chǎng bīngdòng ràng lùmiàn hěn huá.) — Ледяной дождь сделал дороги скользкими.',
            '这场冰冻损坏了电线。 (Zhè chǎng bīngdòng sǔnhuài le diànxiàn.) — Обледенение повредило линии электропередач.',
            '冰冻天气要小心出行。 (Bīngdòng tiānqì yào xiǎoxīn chūxíng.) — В морозную погоду будьте осторожны на улице.'
        ]
    }
};

const nounsTime: { [key: number]: DictItem } = {
    // === ЕДИНИЦЫ ВРЕМЕНИ ===
    1: {
        glyph: '秒',
        pinyin: 'miǎo',
        translation: 'секунда',
        classifier: '秒',
        examples: [
            '等我一分钟！ (Děng wǒ yī fēnzhōng!) — Подожди меня минуту!',
            '比赛以一秒之差分出胜负。 (Bǐsài yǐ yī miǎo zhī chā fēn chū shèngfù.) — Победитель определился с разницей в одну секунду.',
            '一秒钟都不能浪费。 (Yī miǎo zhōng dōu bù néng làngfèi.) — Ни одной секунды нельзя терять.'
        ]
    },
    2: {
        glyph: '分',
        pinyin: 'fēn',
        translation: 'минута',
        classifier: '分',
        examples: [
            '我十分钟后到。 (Wǒ shí fēn zhōng hòu dào.) — Я приду через десять минут.',
            '等你五分钟。 (Děng nǐ wǔ fēn zhōng.) — Подожду тебя пять минут.',
            '时间就是金钱，一分一秒都很重要。 (Shíjiān jiùshì jīnqián, yī fēn yī miǎo dōu hěn zhòngyào.) — Время — деньги, каждая минута и секунда важны.'
        ]
    },
    3: {
        glyph: '小时',
        pinyin: 'xiǎoshí',
        translation: 'час',
        classifier: '小时',
        examples: [
            '飞机飞行了五个小时。 (Fēijī fēixíng le wǔ gè xiǎoshí.) — Самолёт летел пять часов.',
            '我每天工作八小时。 (Wǒ měitiān gōngzuò bā xiǎoshí.) — Я работаю восемь часов в день.',
            '一小时等于六十分钟。 (Yī xiǎoshí děngyú liùshí fēnzhōng.) — Один час равен шестидесяти минутам.'
        ]
    },
    4: {
        glyph: '天',
        pinyin: 'tiān',
        translation: 'день',
        classifier: '天',
        examples: [
            '今天天气很好。 (Jīntiān tiānqì hěn hǎo.) — Сегодня отличная погода.',
            '我三天没睡觉了。 (Wǒ sān tiān méi shuìjiào le.) — Я три дня не спал.',
            '一天有24小时。 (Yī tiān yǒu 24 xiǎoshí.) — В сутках 24 часа.'
        ]
    },
    5: {
        glyph: '周',
        pinyin: 'zhōu',
        translation: 'неделя',
        classifier: '周',
        examples: [
            '我每周去一次图书馆。 (Wǒ měi zhōu qù yī cì túshūguǎn.) — Я хожу в библиотеку раз в неделю.',
            '下周我们要考试。 (Xià zhōu wǒmen yào kǎoshì.) — На следующей неделе у нас экзамен.',
            '一周有七天。 (Yī zhōu yǒu qī tiān.) — В неделе семь дней.'
        ]
    },

    // === МЕСЯЦЫ И СЕЗОНЫ ===
    6: {
        glyph: '月',
        pinyin: 'yuè',
        translation: 'месяц',
        classifier: '月',
        examples: [
            '我每个月都存钱。 (Wǒ měi gè yuè dōu cún qián.) — Я откладываю деньги каждый месяц.',
            '下个月是春节。 (Xià gè yuè shì Chūnjié.) — В следующем месяце Праздник Весны.',
            '一个月有三十天左右。 (Yī gè yuè yǒu sānshí tiān zuǒyòu.) — В месяце примерно тридцать дней.'
        ]
    },
    7: {
        glyph: '季',
        pinyin: 'jì',
        translation: 'сезон / квартал',
        classifier: '季',
        examples: [
            '一年有四季。 (Yī nián yǒu sì jì.) — В году четыре времени года.',
            '第一季度销售额很高。 (Dì yī jì dù xiāoshòu é hěn gāo.) — Объём продаж в первом квартале очень высок.',
            '雨季要来了。 (Yǔjì yào lái le.) — Начинается сезон дождей.'
        ]
    },
    8: {
        glyph: '春天',
        pinyin: 'chūntiān',
        translation: 'весна',
        classifier: '个',
        examples: [
            '春天万物复苏。 (Chūntiān wànwù fùsū.) — Весной всё оживает.',
            '我最喜欢春天。 (Wǒ zuì xǐhuan chūntiān.) — Больше всего я люблю весну.',
            '春天是播种的季节。 (Chūntiān shì bōzhǒng de jìjié.) — Весна — время сеять.'
        ]
    },
    9: {
        glyph: '夏天',
        pinyin: 'xiàtiān',
        translation: 'лето',
        classifier: '个',
        examples: [
            '夏天很热。 (Xiàtiān hěn rè.) — Летом очень жарко.',
            '我们夏天去海边。 (Wǒmen xiàtiān qù hǎibiān.) — Летом мы едем на море.',
            '夏天白天很长。 (Xiàtiān báitiān hěn cháng.) — Летом дни длинные.'
        ]
    },
    10: {
        glyph: '秋天',
        pinyin: 'qiūtiān',
        translation: 'осень',
        classifier: '个',
        examples: [
            '秋天是收获的季节。 (Qiūtiān shì shōuhuò de jìjié.) — Осень — время сбора урожая.',
            '秋天树叶变黄。 (Qiūtiān shùyè biàn huáng.) — Осенью листья желтеют.',
            '我喜欢秋天的凉爽。 (Wǒ xǐhuan qiūtiān de liángshuǎng.) — Мне нравится освежающая прохлада осени.'
        ]
    },

    // === ГОДЫ И ДЛИТЕЛЬНЫЕ ПЕРИОДЫ ===
    11: {
        glyph: '年',
        pinyin: 'nián',
        translation: 'год',
        classifier: '年',
        examples: [
            '我今年25岁。 (Wǒ jīnnián 25 suì.) — Мне в этом году 25 лет.',
            '明年我们要结婚。 (Míngnián wǒmen yào jiéhūn.) — В следующем году мы поженимся.',
            '一年有365天。 (Yī nián yǒu 365 tiān.) — В году 365 дней.'
        ]
    },
    12: {
        glyph: '年代',
        pinyin: 'niándài',
        translation: 'десятилетие',
        classifier: '个',
        examples: [
            '80年代的音乐很经典。 (80 niándài de yīnyuè hěn jīngdiǎn.) — Музыка 80-х очень классическая.',
            '这个年代科技发展很快。 (Zhège niándài kējì fāzhǎn hěn kuài.) — В это десятилетие технологии быстро развиваются.',
            '90年代我出生了。 (90 niándài wǒ chūshēng le.) — Я родился в 90-е.'
        ]
    },
    13: {
        glyph: '世纪',
        pinyin: 'shìjì',
        translation: 'век',
        classifier: '个',
        examples: [
            '21世纪是信息时代。 (21 shìjì shì xìnxī shídài.) — XXI век — эпоха информации.',
            '上个世纪发生了两次世界大战。 (Shàng gè shìjì fāshēng le liǎng cì shìjiè dàzhàn.) — В прошлом веке произошли две мировые войны.',
            '这个世纪将面临气候变化挑战。 (Zhège shìjì jiāng miànlín qìhòu biànhuà tiǎozhàn.) — В этом веке человечество столкнётся с вызовами изменения климата.'
        ]
    },
    14: {
        glyph: ' epoch',
        pinyin: 'shídài',
        translation: 'эпоха',
        classifier: '个',
        examples: [
            '石器时代是人类最早的时期。 (Shíqì shídài shì rénlèi zuì zǎo de shíqī.) — Каменный век — самый ранний период человечества.',
            '我们生活在数字时代。 (Wǒmen shēnghuó zài shùzì shídài.) — Мы живём в цифровую эпоху.',
            '蒸汽时代推动了工业革命。 (Zhēngqì shídài tuīdòng le gōngyè gémìng.) — Эпоха пара способствовала промышленной революции.'
        ]
    },
    15: {
        glyph: '一生',
        pinyin: 'yīshēng',
        translation: 'вся жизнь',
        classifier: '生',
        examples: [
            '他为科学奉献了一生。 (Tā wèi kēxué fèngxiàn le yīshēng.) — Он посвятил всю жизнь науке.',
            '这是我一生中最幸福的时刻。 (Zhè shì wǒ yīshēng zhōng zuì xìngfú de shíkè.) — Это самый счастливый момент в моей жизни.',
            '一生中要不断学习。 (Yīshēng zhōng yào bùduàn xuéxí.) — Всю жизнь нужно учиться.'
        ]
    },

    // === ПОНЯТИЯ ВРЕМЕНИ ===
    16: {
        glyph: '时间',
        pinyin: 'shíjiān',
        translation: 'время (абстрактное)',
        classifier: '个',
        examples: [
            '时间就是生命。 (Shíjiān jiùshì shēngmìng.) — Время — это жизнь.',
            '请给我一点时间思考。 (Qǐng gěi wǒ yīdiǎn shíjiān sīkǎo.) — Пожалуйста, дайте мне немного времени подумать.',
            '时间会证明一切。 (Shíjiān huì zhèngmíng yīqiè.) — Время всё докажет.'
        ]
    },
    17: {
        glyph: '时刻',
        pinyin: 'shíkè',
        translation: 'момент',
        classifier: '个',
        examples: [
            '在危急时刻保持冷静。 (Zài wēijí shíkè bǎochí lěngjìng.) — В критический момент сохраняйте спокойствие.',
            '这个时刻值得纪念。 (Zhège shíkè zhídé jìniàn.) — Этот момент достоин того, чтобы его запомнить.',
            '他随时准备出发。 (Tā suíshí zhǔnbèi chūfā.) — Он готов выступить в любой момент.'
        ]
    },
    18: {
        glyph: '过去',
        pinyin: 'guòqù',
        translation: 'прошлое',
        classifier: '个',
        examples: [
            '不要沉湎于过去。 (Búyào chénmiǎn yú guòqù.) — Не зацикливайся на прошлом.',
            '过去的事情无法改变。 (Guòqù de shìqing wúfǎ gǎibiàn.) — Прошлое нельзя изменить.',
            '从过去中学习。 (Cóng guòqù zhōng xuéxí.) — Учись на прошлом.'
        ]
    },
    19: {
        glyph: '现在',
        pinyin: 'xiànzài',
        translation: 'настоящее',
        classifier: '个',
        examples: [
            '珍惜现在。 (Zhēnxī xiànzài.) — Цени настоящее.',
            '现在是最好的时机。 (Xiànzài shì zuì hǎo de shíjī.) — Сейчас самое лучшее время.',
            '活在当下，就是活在现在。 (Huó zài dāngxià, jiùshì huó zài xiànzài.) — Жить здесь и сейчас — значит жить в настоящем.'
        ]
    },
    20: {
        glyph: '未来',
        pinyin: 'wèilái',
        translation: 'будущее',
        classifier: '个',
        examples: [
            '未来充满希望。 (Wèilái chōngmǎn xīwàng.) — Будущее полно надежды.',
            '为未来做准备。 (Wèi wèilái zuò zhǔnbèi.) — Готовься к будущему.',
            '科技将塑造未来。 (Kējì jiāng sùzào wèilái.) — Технологии будут формировать будущее.'
        ]
    },

    // === СЛОЖНЫЕ ВРЕМЕННЫЕ ПОНЯТИЯ ===
    21: {
        glyph: '永恒',
        pinyin: 'yǒnghéng',
        translation: 'вечность',
        classifier: '个',
        examples: [
            '爱情可以永恒。 (Àiqíng kěyǐ yǒnghéng.) — Любовь может быть вечной.',
            '星星在夜空中闪耀永恒。 (Xīngxing zài yèkōng zhōng shǎnyào yǒnghéng.) — Звёзды вечны в ночном небе.',
            '追求永恒的意义。 (Zhuīqiú yǒnghéng de yìyì.) — Искать вечный смысл.'
        ]
    },
    22: {
        glyph: '瞬间',
        pinyin: 'shùnjiān',
        translation: 'мгновение',
        classifier: '个',
        examples: [
            '成功就在一瞬间。 (Chénggōng jiù zài yī shùnjiān.) — Успех — в одно мгновение.',
            '这个瞬间让我感动。 (Zhège shùnjiān ràng wǒ gǎndòng.) — Этот миг меня тронул.',
            '不要错过重要的瞬间。 (Búyào cuòguò zhòngyào de shùnjiān.) — Не упусти важный момент.'
        ]
    },
    23: {
        glyph: '年代久远',
        pinyin: 'niándài jiǔyuǎn',
        translation: 'давние времена',
        classifier: '个',
        examples: [
            '这个传说来自年代久远。 (Zhège chuánshuō láizì niándài jiǔyuǎn.) — Эта легенда из давних времён.',
            '这些文物年代久远。 (Zhèxiē wénwù niándài jiǔyuǎn.) — Эти артефакты очень древние.',
            '年代久远的历史需要考证。 (Niándài jiǔyuǎn de lìshǐ xūyào kǎozhèng.) — Историю давних времён нужно исследовать.'
        ]
    },
    24: {
        glyph: '当代',
        pinyin: 'dāngdài',
        translation: 'современность',
        classifier: '个',
        examples: [
            '当代艺术很有创意。 (Dāngdài yìshù hěn yǒu chuàngyì.) — Современное искусство очень креативно.',
            '当代社会变化很快。 (Dāngdài shèhuì biànhuà hěn kuài.) — Современное общество быстро меняется.',
            '学习当代科技很重要。 (Xuéxí dāngdài kējì hěn zhòngyào.) — Очень важно изучать современные технологии.'
        ]
    },
    25: {
        glyph: '古代',
        pinyin: 'gǔdài',
        translation: 'древность',
        classifier: '个',
        examples: [
            '中国古代有四大发明。 (Zhōngguó gǔdài yǒu sì dà fāmíng.) — В Древнем Китае было четыре великих изобретения.',
            '古代人用竹简写字。 (Gǔdài rén yòng zhújiǎn xiězì.) — Древние писали на бамбуковых дощечках.',
            '研究古代历史很有意义。 (Yánjiū gǔdài lìshǐ hěn yǒuyìyì.) — Изучать древнюю историю очень важно.'
        ]
    }
};

const nounsAbstractConcepts: { [key: number]: DictItem } = {
    // === ФИЛОСОФСКИЕ ПОНЯТИЯ ===
    1: {
        glyph: '真理',
        pinyin: 'zhēnlǐ',
        translation: 'истина',
        classifier: '个',
        examples: [
            '科学追求真理。 (Kēxué zhuīqiú zhēnlǐ.) — Наука стремится к истине.',
            '他说出了真理。 (Tā shuō chū le zhēnlǐ.) — Он сказал правду.',
            '真理往往令人 uncomfortable。 (Zhēnlǐ wǎngwǎng lìng rén bù shūfu.) — Истина часто бывает неприятной.'
        ]
    },
    2: {
        glyph: '自由',
        pinyin: 'zìyóu',
        translation: 'свобода',
        classifier: '个',
        examples: [
            '自由是基本人权。 (Zìyóu shì jīběn rénquán.) — Свобода — основное право человека.',
            '思想自由很重要。 (Sīxiǎng zìyóu hěn zhòngyào.) — Свобода мысли очень важна.',
            '真正的自由包含责任。 (Zhēnzhèng de zìyóu bāohán zérèn.) — Истинная свобода включает ответственность.'
        ]
    },
    3: {
        glyph: '正义',
        pinyin: 'zhèngyì',
        translation: 'справедливость',
        classifier: '个',
        examples: [
            '法律维护正义。 (Fǎlǜ wéihù zhèngyì.) — Закон защищает справедливость.',
            '人们渴望正义。 (Rénmen kěwàng zhèngyì.) — Люди стремятся к справедливости.',
            '没有正义，社会无法稳定。 (Méiyǒu zhèngyì, shèhuì wúfǎ wěndìng.) — Без справедливости общество не может быть стабильным.'
        ]
    },
    4: {
        glyph: '平等',
        pinyin: 'píngděng',
        translation: 'равенство',
        classifier: '个',
        examples: [
            '男女平等是现代社会的原则。 (Nánnǚ píngděng shì xiàndài shèhuì de yuánzé.) — Гендерное равенство — принцип современного общества.',
            '法律面前人人平等。 (Fǎlǜ miànqián rén rén píngděng.) — Все равны перед законом.',
            '追求真正的平等。 (Zhuīqiú zhēnzhèng de píngděng.) — Стремись к подлинному равенству.'
        ]
    },
    5: {
        glyph: '道德',
        pinyin: 'dàodé',
        translation: 'мораль',
        classifier: '个',
        examples: [
            '他的行为不符合道德。 (Tā de xíngwéi bù fúhé dàodé.) — Его поступок не соответствует морали.',
            '社会需要道德约束。 (Shèhuì xūyào dàodé yuēshù.) — Обществу нужны моральные ограничения.',
            '道德比法律更根本。 (Dàodé bǐ fǎlǜ gèng gēnběn.) — Мораль фундаментальнее закона.'
        ]
    },

    // === СОЦИАЛЬНЫЕ ЦЕННОСТИ ===
    6: {
        glyph: '诚信',
        pinyin: 'chéngxìn',
        translation: 'честность / добросовестность',
        classifier: '个',
        examples: [
            '诚信是做人的根本。 (Chéngxìn shì zuò rén de gēnběn.) — Честность — основа личности.',
            '做生意要讲诚信。 (Zuò shēngyì yào jiǎng chéngxìn.) — В бизнесе нужно быть добросовестным.',
            '失去诚信就失去信任。 (Shīqù chéngxìn jiù shīqù xìnrèn.) — Потеряв честность, теряешь доверие.'
        ]
    },
    7: {
        glyph: '尊重',
        pinyin: 'zūnzhòng',
        translation: 'уважение',
        classifier: '个',
        examples: [
            '互相尊重是友谊的基础。 (Hùxiāng zūnzhòng shì yǒuyì de jīchǔ.) — Взаимное уважение — основа дружбы.',
            '尊重他人就是尊重自己。 (Zūnzhòng tārén jiùshì zūnzhòng zìjǐ.) — Уважая других, уважаешь себя.',
            '文化差异需要尊重。 (Wénhuà chāyì xūyào zūnzhòng.) — К культурным различиям нужно относиться с уважением.'
        ]
    },
    8: {
        glyph: '责任',
        pinyin: 'zérèn',
        translation: 'ответственность',
        classifier: '个',
        examples: [
            '每个人都应承担自己的责任。 (Měi gè rén dōu yīng chéngdān zìjǐ de zérèn.) — Каждый должен нести свою ответственность.',
            '父母对孩子有责任。 (Fùmǔ duì háizi yǒu zérèn.) — Родители ответственны за детей.',
            '责任感让人成长。 (Zérèn gǎn ràng rén chéngzhǎng.) — Чувство ответственности делает человека зрелым.'
        ]
    },
    9: {
        glyph: '信任',
        pinyin: 'xìnrèn',
        translation: 'доверие',
        classifier: '个',
        examples: [
            '信任是合作的基础。 (Xìnrèn shì hézuò de jīchǔ.) — Доверие — основа сотрудничества.',
            '一旦失去信任，很难重建。 (Yīdàn shīqù xìnrèn, hěn nán chóngjiàn.) — Раз доверие потеряно, его трудно вернуть.',
            '用行动赢得信任。 (Yòng xíngdòng yíngdé xìnrèn.) — Заслужи доверие делом.'
        ]
    },
    10: {
        glyph: '团结',
        pinyin: 'tuánjié',
        translation: 'единство',
        classifier: '个',
        examples: [
            '团结就是力量。 (Tuánjié jiùshì lìliàng.) — Единство — это сила.',
            '面对困难，大家要团结。 (Miànduì kùnnán, dàjiā yào tuánjié.) — Перед трудностями нужно быть едиными.',
            '民族团结很重要。 (Mínzú tuánjié hěn zhòngyào.) — Этническое единство очень важно.'
        ]
    },

    // === ЭСТЕТИЧЕСКИЕ ПОНЯТИЯ ===
    11: {
        glyph: '美',
        pinyin: 'měi',
        translation: 'красота',
        classifier: '种',
        examples: [
            '自然之美令人惊叹。 (Zìrán zhī měi lìng rén jīngtàn.) — Красота природы поражает.',
            '美存在于细节中。 (Měi cúnzài yú xìjié zhōng.) — Красота — в деталях.',
            '内在美比外在美更重要。 (Nèizài měi bǐ wàizài měi gèng zhòngyào.) — Внутренняя красота важнее внешней.'
        ]
    },
    12: {
        glyph: '艺术',
        pinyin: 'yìshù',
        translation: 'искусство',
        classifier: '种',
        examples: [
            '艺术来源于生活。 (Yìshù láiyuán yú shēnghuó.) — Искусство рождается из жизни.',
            '音乐是听觉的艺术。 (Yīnyuè shì tīngjué de yìshù.) — Музыка — искусство слуха.',
            '每个人都可以欣赏艺术。 (Měi gè rén dōu kěyǐ xīnshǎng yìshù.) — Искусство доступно каждому.'
        ]
    },
    13: {
        glyph: '和谐',
        pinyin: 'héxié',
        translation: 'гармония',
        classifier: '个',
        examples: [
            '人与自然要和谐相处。 (Rén yǔ zìrán yào héxié xiāngchǔ.) — Человек и природа должны жить в гармонии.',
            '家庭和谐是幸福的基础。 (Jiātíng héxié shì xìngfú de jīchǔ.) — Гармония в семье — основа счастья.',
            '色彩搭配要和谐。 (Sècǎi dāpèi yào héxié.) — Цвета должны быть гармоничными.'
        ]
    },
    14: {
        glyph: '优雅',
        pinyin: 'yōuyǎ',
        translation: 'элегантность',
        classifier: '种',
        examples: [
            '她的举止很优雅。 (Tā de jǔzhǐ hěn yōuyǎ.) — Её манеры очень элегантны.',
            '优雅是一种修养。 (Yōuyǎ shì yī zhǒng xiūyǎng.) — Элегантность — это воспитание.',
            '古典音乐充满优雅。 (Gǔdiǎn yīnyuè chōngmǎn yōuyǎ.) — Классическая музыка полна элегантности.'
        ]
    },
    15: {
        glyph: '朴素',
        pinyin: 'pǔsù',
        translation: 'простота (в хорошем смысле)',
        classifier: '种',
        examples: [
            '他的生活很朴素。 (Tā de shēnghuó hěn pǔsù.) — Его образ жизни очень прост.',
            '朴素的美最持久。 (Pǔsù de měi zuì chíjiǔ.) — Простая красота самая долговечная.',
            '不要追求浮华，要朴素自然。 (Búyào zhuīqiú fúhuá, yào pǔsù zìrán.) — Не гонись за показной роскошью, будь простым и естественным.'
        ]
    },

    // === ОНТОЛОГИЧЕСКИЕ ПОНЯТИЯ ===
    16: {
        glyph: '存在',
        pinyin: 'cúnzài',
        translation: 'существование',
        classifier: '个',
        examples: [
            '人的存在先于本质。 (Rén de cúnzài xiān yú běnzhì.) — Существование человека предшествует его сущности.',
            '宇宙的存在是个谜。 (Yǔzhòu de cúnzài shì gè mí.) — Существование Вселенной — загадка.',
            '思考存在是哲学的核心。 (Sīkǎo cúnzài shì zhéxué de héxīn.) — Размышление о бытии — ядро философии.'
        ]
    },
    17: {
        glyph: '虚无',
        pinyin: 'xūwú',
        translation: 'ничто / небытие',
        classifier: '个',
        examples: [
            '面对虚无，人需要意义。 (Miànduì xūwú, rén xūyào yìyì.) — Столкнувшись с небытием, человек ищет смысл.',
            '虚无主义否定一切价值。 (Xūwú zhǔyì fǒudìng yīqiè jiàzhí.) — Нигилизм отрицает все ценности.',
            '从虚无中创造价值。 (Cóng xūwú zhōng chuàngzào jiàzhí.) — Создавай ценности из небытия.'
        ]
    },
    18: {
        glyph: '意义',
        pinyin: 'yìyì',
        translation: 'смысл',
        classifier: '个',
        examples: [
            '人生的意义是什么？ (Rénshēng de yìyì shì shénme?) — В чём смысл жизни?',
            '每个行动都有其意义。 (Měi gè xíngdòng dōu yǒu qí yìyì.) — Каждое действие имеет свой смысл.',
            '寻找生命的意义。 (Xúnzhǎo shēngmìng de yìyì.) — Ищи смысл жизни.'
        ]
    },
    19: {
        glyph: '秩序',
        pinyin: 'zhìxù',
        translation: 'порядок',
        classifier: '个',
        examples: [
            '社会需要秩序。 (Shèhuì xūyào zhìxù.) — Обществу нужен порядок.',
            '混乱中建立秩序。 (Hùnluàn zhōng jiànlì zhìxù.) — Установи порядок в хаосе.',
            '法律维护社会秩序。 (Fǎlǜ wéihù shèhuì zhìxù.) — Закон поддерживает общественный порядок.'
        ]
    },
    20: {
        glyph: ' chaos',
        pinyin: 'hùnluàn',
        translation: 'хаос',
        classifier: '个',
        examples: [
            '没有规则就会陷入 chaos。 (Méiyǒu guīzé jiù huì xiànrù hùnluàn.) — Без правил наступает хаос.',
            '从 chaos 中诞生新的秩序。 (Cóng hùnluàn zhōng dànshēng xīn de zhìxù.) — Из хаоса рождается новый порядок.',
            '他的生活一团 chaos。 (Tā de shēnghuó yī tuán hùnluàn.) — Его жизнь — сплошной хаос.'
        ]
    },

    // === ЭПИСТЕМОЛОГИЧЕСКИЕ ПОНЯТИЯ ===
    21: {
        glyph: '知识',
        pinyin: 'zhīshi',
        translation: 'знание',
        classifier: '种',
        examples: [
            '知识就是力量。 (Zhīshi jiùshì lìliàng.) — Знание — сила.',
            '通过学习获得知识。 (Tōngguò xuéxí huòdé zhīshi.) — Знания приобретаются через учёбу.',
            '知识需要不断更新。 (Zhīshi xūyào bùduàn gēngxīn.) — Знания нужно постоянно обновлять.'
        ]
    },
    22: {
        glyph: '智慧',
        pinyin: 'zhìhuì',
        translation: 'мудрость',
        classifier: '种',
        examples: [
            '智慧比知识更重要。 (Zhìhuì bǐ zhīshi gèng zhòngyào.) — Мудрость важнее знаний.',
            '老人充满智慧。 (Lǎorén chōngmǎn zhìhuì.) — Старик полон мудрости.',
            '智慧来自经验。 (Zhìhuì láizì jīngyàn.) — Мудрость рождается из опыта.'
        ]
    },
    23: {
        glyph: '理性',
        pinyin: 'lǐxìng',
        translation: 'разум',
        classifier: '种',
        examples: [
            '用理性思考问题。 (Yòng lǐxìng sīkǎo wèntí.) — Решай проблемы разумно.',
            '理性战胜情绪。 (Lǐxìng zhànshèng qíngxù.) — Разум побеждает эмоции.',
            '理性是人类的宝贵品质。 (Lǐxìng shì rénlèi de bǎoguì pǐnzhì.) — Разум — драгоценное качество человека.'
        ]
    },
    24: {
        glyph: '直觉',
        pinyin: 'zhíjué',
        translation: 'интуиция',
        classifier: '种',
        examples: [
            '她的直觉很准。 (Tā de zhíjué hěn zhǔn.) — Её интуиция очень точна.',
            '有时候要相信直觉。 (Yǒu shíhòu yào xiāngxìn zhíjué.) — Иногда нужно доверять интуиции.',
            '直觉和理性同样重要。 (Zhíjué hé lǐxìng tóngyàng zhòngyào.) — Интуиция и разум одинаково важны.'
        ]
    },
    25: {
        glyph: '幻想',
        pinyin: 'huànxiǎng',
        translation: 'воображение / фантазия',
        classifier: '种',
        examples: [
            '孩子有丰富的幻想。 (Háizi yǒu fēngfù de huànxiǎng.) — У детей богатое воображение.',
            '科幻小说源于幻想。 (Kēhuàn xiǎoshuō yuán yú huànxiǎng.) — Научная фантастика рождается из фантазии.',
            '不要让幻想脱离现实。 (Búyào ràng huànxiǎng tuōlí xiànshí.) — Не позволяй фантазии отрываться от реальности.'
        ]
    }
};

const nounsSocialRoles: { [key: number]: DictItem } = {
    // === СЕМЕЙНЫЕ РОЛИ ===
    1: {
        glyph: '父亲',
        pinyin: 'fùqin',
        translation: 'отец',
        classifier: '个',
        examples: [
            '我的父亲是一位老师。 (Wǒ de fùqin shì yī wèi lǎoshī.) — Мой отец — учитель.',
            '父亲是家庭的支柱。 (Fùqin shì jiātíng de zhīzhù.) — Отец — опора семьи.',
            '他是一位慈爱的父亲。 (Tā shì yī wèi cí\'ài de fùqin.) — Он — любящий отец.'
        ]
    },
    2: {
        glyph: '母亲',
        pinyin: 'mǔqin',
        translation: 'мать',
        classifier: '个',
        examples: [
            '我的母亲很温柔。 (Wǒ de mǔqin hěn wēnróu.) — Моя мать очень нежная.',
            '母亲的爱是无私的。 (Mǔqin de ài shì wúsī de.) — Материнская любовь бескорыстна.',
            '她是一位伟大的母亲。 (Tā shì yī wèi wěidà de mǔqin.) — Она — великая мать.'
        ]
    },
    3: {
        glyph: '儿子',
        pinyin: 'érzi',
        translation: 'сын',
        classifier: '个',
        examples: [
            '他们有一个可爱的儿子。 (Tāmen yǒu yī gè kě\'ài de érzi.) — У них есть милый сын.',
            '儿子应该孝顺父母。 (Érzi yīnggāi xiàoshùn fùmǔ.) — Сын должен почитать родителей.',
            '他是家里的独生子。 (Tā shì jiā lǐ de dúshēngzǐ.) — Он единственный ребёнок в семье.'
        ]
    },
    4: {
        glyph: '女儿',
        pinyin: 'nǚ\'ér',
        translation: 'дочь',
        classifier: '个',
        examples: [
            '她的女儿很聪明。 (Tā de nǚ\'ér hěn cōngmíng.) — Её дочь очень умная.',
            '父母都疼爱女儿。 (Fùmǔ dōu téng\'ài nǚ\'ér.) — Родители любят дочерей.',
            '女儿是父母的小棉袄。 (Nǚ\'ér shì fùmǔ de xiǎo mián\'ǎo.) — Дочь — тёплый комочек для родителей.'
        ]
    },
    5: {
        glyph: '兄弟',
        pinyin: 'xiōngdì',
        translation: 'брат',
        classifier: '个',
        examples: [
            '我有一个哥哥。 (Wǒ yǒu yī gè gēge.) — У меня есть старший брат.',
            '兄弟之间要互相帮助。 (Xiōngdì zhī jiān yào hùxiāng bāngzhù.) — Братья должны помогать друг другу.',
            '他们是亲兄弟。 (Tāmen shì qīn xiōngdì.) — Они родные братья.'
        ]
    },

    // === ПРОФЕССИОНАЛЬНЫЕ РОЛИ ===
    6: {
        glyph: '老师',
        pinyin: 'lǎoshī',
        translation: 'учитель',
        classifier: '个',
        examples: [
            '我们的老师很严格。 (Wǒmen de lǎoshī hěn yángé.) — Наш учитель очень строгий.',
            '老师传授知识。 (Lǎoshī chuánshòu zhīshi.) — Учитель передаёт знания.',
            '尊师重道是中国传统。 (Zūn shī zhòng dào shì Zhōngguó chuántǒng.) — Почитание учителя — китайская традиция.'
        ]
    },
    7: {
        glyph: '医生',
        pinyin: 'yīshēng',
        translation: 'врач',
        classifier: '个',
        examples: [
            '医生救死扶伤。 (Yīshēng jiù sǐ fú shāng.) — Врачи спасают жизни и лечат раны.',
            '他是一位著名的医生。 (Tā shì yī wèi zhùmíng de yīshēng.) — Он — известный врач.',
            '疫情期间医生很辛苦。 (Yìqíng qījiān yīshēng hěn xīnkǔ.) — Во время пандемии врачам пришлось очень тяжело.'
        ]
    },
    8: {
        glyph: '警察',
        pinyin: 'jǐngchá',
        translation: 'полицейский',
        classifier: '个',
        examples: [
            '警察维护社会治安。 (Jǐngchá wéihù shèhuì zhì\'ān.) — Полиция поддерживает общественный порядок.',
            '他是一名勇敢的警察。 (Tā shì yī míng yǒnggǎn de jǐngchá.) — Он — храбрый полицейский.',
            '遇到危险请找警察。 (Yù dào wēixiǎn qǐng zhǎo jǐngchá.) — В опасной ситуации обращайтесь к полиции.'
        ]
    },
    9: {
        glyph: '科学家',
        pinyin: 'kēxuéjiā',
        translation: 'учёный',
        classifier: '个',
        examples: [
            '科学家探索自然奥秘。 (Kēxuéjiā tànsuǒ zìrán àomì.) — Учёные исследуют тайны природы.',
            '居里夫人是一位伟大的科学家。 (Jūlǐ Fūrén shì yī wèi wěidà de kēxuéjiā.) — Мария Кюри — великий учёный.',
            '科学研究需要耐心。 (Kēxué yánjiū xūyào nàixīn.) — Научные исследования требуют терпения.'
        ]
    },
    10: {
        glyph: '工程师',
        pinyin: 'gōngchéngshī',
        translation: 'инженер',
        classifier: '个',
        examples: [
            '工程师设计桥梁。 (Gōngchéngshī shèjì qiáoliáng.) — Инженеры проектируют мосты.',
            '他是一名软件工程师。 (Tā shì yī míng ruǎnjiàn gōngchéngshī.) — Он — инженер-программист.',
            '工程师让想法变成现实。 (Gōngchéngshī ràng xiǎngfǎ biàn chéng xiànshí.) — Инженеры воплощают идеи в жизнь.'
        ]
    },

    // === ОБЩЕСТВЕННЫЕ И ПОВСЕДНЕВНЫЕ РОЛИ ===
    11: {
        glyph: '学生',
        pinyin: 'xuéshēng',
        translation: 'ученик / студент',
        classifier: '个',
        examples: [
            '学生的主要任务是学习。 (Xuéshēng de zhǔyào rènwù shì xuéxí.) — Главная задача ученика — учиться.',
            '他是一名大学生。 (Tā shì yī míng dàxuéshēng.) — Он — студент университета.',
            '好学生要勤奋。 (Hǎo xuéshēng yào qínfèn.) — Хороший ученик должен быть прилежным.'
        ]
    },
    12: {
        glyph: '工人',
        pinyin: 'gōngrén',
        translation: 'рабочий',
        classifier: '个',
        examples: [
            '工人建造高楼大厦。 (Gōngrén jiànzào gāolóu dàshà.) — Рабочие строят небоскрёбы.',
            '他是工厂的工人。 (Tā shì gōngchǎng de gōngrén.) — Он — заводской рабочий.',
            '工人阶级是社会的基石。 (Gōngrén jiējí shì shèhuì de jīshí.) — Рабочий класс — основа общества.'
        ]
    },
    13: {
        glyph: '农民',
        pinyin: 'nóngmín',
        translation: 'фермер / крестьянин',
        classifier: '个',
        examples: [
            '农民种植粮食。 (Nóngmín zhòngzhí liángshí.) — Фермеры выращивают продовольствие.',
            '春天是农民最忙的时候。 (Chūntiān shì nóngmín zuì máng de shíhòu.) — Весна — самое загруженное время для фермеров.',
            '农民用汗水换来丰收。 (Nóngmín yòng hànshuǐ huàn lái fēngshōu.) — Фермеры получают урожай ценой своего труда.'
        ]
    },
    14: {
        glyph: '商人',
        pinyin: 'shāngrén',
        translation: 'предприниматель / торговец',
        classifier: '个',
        examples: [
            '商人追求利润。 (Shāngrén zhuīqiú lìrùn.) — Предприниматели стремятся к прибыли.',
            '他是一位成功的商人。 (Tā shì yī wèi chénggōng de shāngrén.) — Он — успешный бизнесмен.',
            '诚信是商人最重要的品质。 (Chéngxìn shì shāngrén zuì zhòngyào de pǐnzhì.) — Честность — главное качество торговца.'
        ]
    },
    15: {
        glyph: '艺术家',
        pinyin: 'yìshùjiā',
        translation: 'художник / артист',
        classifier: '个',
        examples: [
            '艺术家用作品表达思想。 (Yìshùjiā yòng zuòpǐn biǎodá sīxiǎng.) — Художники выражают мысли через свои произведения.',
            '她是一位著名的舞蹈艺术家。 (Tā shì yī wèi zhùmíng de wǔdǎo yìshùjiā.) — Она — известная танцовщица.',
            '真正的艺术家热爱生活。 (Zhēnzhèng de yìshùjiā rè\'ài shēnghuó.) — Настоящий художник любит жизнь.'
        ]
    },

    // === МЕЖЛИЧНОСТНЫЕ РОЛИ ===
    16: {
        glyph: '朋友',
        pinyin: 'péngyou',
        translation: 'друг',
        classifier: '个',
        examples: [
            '朋友之间要互相信任。 (Péngyou zhī jiān yào hùxiāng xìnrèn.) — Друзья должны доверять друг другу.',
            '患难见真情。 (Huànnàn jiàn zhēnqíng.) — В беде видна истинная дружба.',
            '他是我最好的朋友。 (Tā shì wǒ zuì hǎo de péngyou.) — Он мой лучший друг.'
        ]
    },
    17: {
        glyph: '同事',
        pinyin: 'tóngshì',
        translation: 'коллега',
        classifier: '个',
        examples: [
            '我和他是同事。 (Wǒ hé tā shì tóngshì.) — Мы с ним коллеги.',
            '同事之间要互相尊重。 (Tóngshì zhī jiān yào hùxiāng zūnzhòng.) — Коллеги должны уважать друг друга.',
            '好同事让工作更愉快。 (Hǎo tóngshì ràng gōngzuò gèng yúkuài.) — Хорошие коллеги делают работу приятнее.'
        ]
    },
    18: {
        glyph: '邻居',
        pinyin: 'línjū',
        translation: 'сосед',
        classifier: '个',
        examples: [
            '我的邻居很友好。 (Wǒ de línjū hěn yǒuhǎo.) — Мои соседи очень дружелюбны.',
            '远亲不如近邻。 (Yuǎn qīn bùrú jìn lín.) — Ближний сосед лучше дальнего родственника.',
            '邻居之间要互相帮助。 (Línjū zhī jiān yào hùxiāng bāngzhù.) — Соседи должны помогать друг другу.'
        ]
    },
    19: {
        glyph: '陌生人',
        pinyin: 'mòshēngrén',
        translation: 'незнакомец',
        classifier: '个',
        examples: [
            '不要轻易相信陌生人。 (Búyào qīngyì xiāngxìn mòshēngrén.) — Не доверяй незнакомцам безоговорочно.',
            '在街上遇到陌生人问路。 (Zài jiē shàng yù dào mòshēngrén wèn lù.) — На улице незнакомец спросил дорогу.',
            '对陌生人保持礼貌但谨慎。 (Duì mòshēngrén bǎochí lǐmào dàn jǐnshèn.) — Будь вежлив, но осторожен с незнакомцами.'
        ]
    },
    20: {
        glyph: '客人',
        pinyin: 'kèrén',
        translation: 'гость',
        classifier: '个',
        examples: [
            '家里来了客人。 (Jiā lǐ lái le kèrén.) — К нам пришли гости.',
            '热情招待客人。 (Rèqíng zhāodài kèrén.) — Гостей нужно принимать радушно.',
            '客人是上帝。 (Kèrén shì shàngdì.) — Клиент всегда прав.'
        ]
    },

    // === СПЕЦИАЛЬНЫЕ И ФОРМАЛЬНЫЕ РОЛИ ===
    21: {
        glyph: '领导',
        pinyin: 'lǐngdǎo',
        translation: 'руководитель',
        classifier: '个',
        examples: [
            '领导决定公司方向。 (Lǐngdǎo juédìng gōngsī fāngxiàng.) — Руководитель определяет вектор компании.',
            '他是一位有能力的领导。 (Tā shì yī wèi yǒu nénglì de lǐngdǎo.) — Он — компетентный руководитель.',
            '好的领导要以身作则。 (Hǎo de lǐngdǎo yào yǐ shēn zuò zé.) — Хороший руководитель должен подавать пример.'
        ]
    },
    22: {
        glyph: '总统',
        pinyin: 'zǒngtǒng',
        translation: 'президент',
        classifier: '个',
        examples: [
            '美国总统住在白宫。 (Měiguó zǒngtǒng zhù zài Báigōng.) — Президент США живёт в Белом доме.',
            '他当选为国家总统。 (Tā dāng xuǎn wèi guójiā zǒngtǒng.) — Он избран президентом страны.',
            '总统发表新年贺词。 (Zǒngtǒng fābiǎo xīnnián hècí.) — Президент выступил с новогодним обращением.'
        ]
    },
    23: {
        glyph: '法官',
        pinyin: 'fǎguān',
        translation: 'судья',
        classifier: '个',
        examples: [
            '法官主持法庭审判。 (Fǎguān zhǔchí fǎtíng shěnpàn.) — Судья ведёт судебное заседание.',
            '法官必须公正。 (Fǎguān bìxū gōngzhèng.) — Судья должен быть справедливым.',
            '他梦想成为一名法官。 (Tā mèngxiǎng chéngwéi yī míng fǎguān.) — Он мечтает стать судьёй.'
        ]
    },
    24: {
        glyph: '律师',
        pinyin: 'lǜshī',
        translation: 'адвокат',
        classifier: '个',
        examples: [
            '律师为当事人辩护。 (Lǜshī wèi dāngshìrén biànhù.) — Адвокат защищает интересы клиента.',
            '他聘请了著名律师。 (Tā pìnqǐng le zhùmíng lǜshī.) — Он нанял известного адвоката.',
            '律师精通法律。 (Lǜshī jīngtōng fǎlǜ.) — Адвокат отлично знает законодательство.'
        ]
    },
    25: {
        glyph: '公民',
        pinyin: 'gōngmín',
        translation: 'гражданин',
        classifier: '个',
        examples: [
            '每个公民都有权利和义务。 (Měi gè gōngmín dōu yǒu quánlì hé yìwù.) — У каждого гражданина есть права и обязанности.',
            '公民要遵守法律。 (Gōngmín yào zūnshǒu fǎlǜ.) — Граждане должны соблюдать законы.',
            '他是中国公民。 (Tā shì Zhōngguó gōngmín.) — Он — гражданин Китая.'
        ]
    }
};

const nounsDocumentsMoney: { [key: number]: DictItem } = {
    // === ЛИЧНЫЕ ДОКУМЕНТЫ ===
    1: {
        glyph: '身份证',
        pinyin: 'shēnfèn zhèng',
        translation: 'удостоверение личности',
        classifier: '个',
        examples: [
            '在中国必须随身携带身份证。 (Zài Zhōngguó bìxū suíshēn xiédài shēnfèn zhèng.) — В Китае обязательно носить с собой удостоверение личности.',
            '办理手续需要身份证。 (Bànlǐ shǒuxù xūyào shēnfèn zhèng.) — Для оформления документов нужно удостоверение личности.',
            '身份证不能借给别人。 (Shēnfèn zhèng bù néng jiè gěi biérén.) — Нельзя давать своё удостоверение личности другим.'
        ]
    },
    2: {
        glyph: '护照',
        pinyin: 'hùzhào',
        translation: 'паспорт',
        classifier: '本',
        examples: [
            '出国需要护照。 (Chūguó xūyào hùzhào.) — Для выезда за границу нужен паспорт.',
            '我的护照快过期了。 (Wǒ de hùzhào kuài guòqī le.) — Мой паспорт скоро истекает.',
            '请保管好你的护照。 (Qǐng bǎoguǎn hǎo nǐ de hùzhào.) — Пожалуйста, берегите свой паспорт.'
        ]
    },
    3: {
        glyph: '签证',
        pinyin: 'qiānzhèng',
        translation: 'виза',
        classifier: '个',
        examples: [
            '去美国需要签证。 (Qù Měiguó xūyào qiānzhèng.) — Для поездки в США нужна виза.',
            '签证申请被批准了。 (Qiānzhèng shēnqǐng bèi pīzhǔn le.) — Заявка на визу одобрена.',
            '旅游签证有效期90天。 (Lǚyóu qiānzhèng yǒuxiào qī 90 tiān.) — Туристическая виза действует 90 дней.'
        ]
    },
    4: {
        glyph: '户口本',
        pinyin: 'hùkǒu běn',
        translation: 'книга домашнего учёта (хукоу)',
        classifier: '本',
        examples: [
            '在中国，户口本很重要。 (Zài Zhōngguó, hùkǒu běn hěn zhòngyào.) — В Китае книга хукоу очень важна.',
            '孩子上户口需要户口本。 (Háizi shàng hùkǒu xūyào hùkǒu běn.) — Для регистрации ребёнка нужна книга хукоу.',
            '户口本记录家庭成员信息。 (Hùkǒu běn jìlù jiātíng chéngyuán xìnxī.) — В книге хукоу записана информация о членах семьи.'
        ]
    },
    5: {
        glyph: '毕业证书',
        pinyin: 'bìyè zhèngshū',
        translation: 'диплом / свидетельство об окончании',
        classifier: '张',
        examples: [
            '他拿到了大学毕业证书。 (Tā ná dào le dàxué bìyè zhèngshū.) — Он получил диплом об окончании университета.',
            '毕业证书证明你的学历。 (Bìyè zhèngshū zhèngmíng nǐ de xuélì.) — Диплом подтверждает ваше образование.',
            '请保管好你的毕业证书。 (Qǐng bǎoguǎn hǎo nǐ de bìyè zhèngshū.) — Сохраните свой диплом.'
        ]
    },

    // === ОФИЦИАЛЬНЫЕ И ЮРИДИЧЕСКИЕ ДОКУМЕНТЫ ===
    6: {
        glyph: '合同',
        pinyin: 'hétong',
        translation: 'контракт / договор',
        classifier: '份',
        examples: [
            '签合同前要仔细阅读。 (Qiān hétong qián yào zǐxì yuèdú.) — Перед подписанием договора внимательно прочитайте его.',
            '这份合同有效期一年。 (Zhè fèn hétong yǒuxiào qī yī nián.) — Этот контракт действителен год.',
            '合同具有法律效力。 (Hétong jùyǒu fǎlǜ xiàolì.) — Договор имеет юридическую силу.'
        ]
    },
    7: {
        glyph: '发票',
        pinyin: 'fāpiào',
        translation: 'счёт-фактура / чек',
        classifier: '张',
        examples: [
            '买东西要索要发票。 (Mǎi dōngxi yào suǒyào fāpiào.) — При покупке требуйте чек.',
            '这张发票可以报销。 (Zhè zhāng fāpiào kěyǐ bàoxiāo.) — Этот чек можно возместить.',
            '公司需要发票做账。 (Gōngsī xūyào fāpiào zuò zhàng.) — Компании нужны чеки для бухгалтерии.'
        ]
    },
    8: {
        glyph: '收据',
        pinyin: 'shōujù',
        translation: 'квитанция',
        classifier: '张',
        examples: [
            '交房租后拿到收据。 (Jiāo fángzū hòu ná dào shōujù.) — После оплаты аренды выдали квитанцию.',
            '请保留这张收据。 (Qǐng bǎoliú zhè zhāng shōujù.) — Сохраните эту квитанцию.',
            '收据是付款的证明。 (Shōujù shì fùkuǎn de zhèngmíng.) — Квитанция — подтверждение оплаты.'
        ]
    },
    9: {
        glyph: '证明',
        pinyin: 'zhèngmíng',
        translation: 'справка / подтверждение',
        classifier: '份',
        examples: [
            '我需要一份收入证明。 (Wǒ xūyào yī fèn shōurù zhèngmíng.) — Мне нужна справка о доходах.',
            '学校出具了在读证明。 (Xuéxiào chūjù le zài dú zhèngmíng.) — Школа выдала справку об обучении.',
            '这份证明很重要。 (Zhè fèn zhèngmíng hěn zhòngyào.) — Эта справка очень важна.'
        ]
    },
    10: {
        glyph: '申请表',
        pinyin: 'shēnqǐng biǎo',
        translation: 'заявление / анкета',
        classifier: '张',
        examples: [
            '请填写这张申请表。 (Qǐng tiánxiě zhè zhāng shēnqǐng biǎo.) — Пожалуйста, заполните эту анкету.',
            '申请签证需要申请表。 (Shēnqǐng qiānzhèng xūyào shēnqǐng biǎo.) — Для подачи на визу нужна анкета.',
            '申请表必须用中文填写。 (Shēnqǐng biǎo bìxū yòng Zhōngwén tiánxiě.) — Анкета должна быть заполнена на китайском языке.'
        ]
    },

    // === ДЕНЬГИ И ВАЛЮТА ===
    11: {
        glyph: '钱',
        pinyin: 'qián',
        translation: 'деньги',
        classifier: '笔',
        examples: [
            '我需要赚更多的钱。 (Wǒ xūyào zhuàn gèng duō de qián.) — Мне нужно зарабатывать больше денег.',
            '这笔钱是给你的。 (Zhè bǐ qián shì gěi nǐ de.) — Эти деньги для тебя.',
            '不要浪费钱。 (Búyào làngfèi qián.) — Не трать деньги впустую.'
        ]
    },
    12: {
        glyph: '人民币',
        pinyin: 'rénmínbì',
        translation: 'китайский юань (RMB)',
        classifier: '元',
        examples: [
            '这本书50元人民币。 (Zhè běn shū 50 yuán rénmínbì.) — Эта книга стоит 50 юаней.',
            '人民币是中国的官方货币。 (Rénmínbì shì Zhōngguó de guānfāng huòbì.) — Юань — официальная валюта Китая.',
            '今天人民币对美元汇率是多少？ (Jīntiān rénmínbì duì měiyuán huìlǜ shì duōshao?) — Какой сегодня курс юаня к доллару?'
        ]
    },
    13: {
        glyph: '美元',
        pinyin: 'měiyuán',
        translation: 'доллар США',
        classifier: '美元',
        examples: [
            '这台电脑1000美元。 (Zhè tái diànnǎo 1000 měiyuán.) — Этот компьютер стоит 1000 долларов.',
            '美元是国际储备货币。 (Měiyuán shì guójì zhǔbèi huòbì.) — Доллар — мировая резервная валюта.',
            '我有100美元现金。 (Wǒ yǒu 100 měiyuán xiànjīn.) — У меня 100 долларов наличными.'
        ]
    },
    14: {
        glyph: '欧元',
        pinyin: 'ōuyuán',
        translation: 'евро',
        classifier: '欧元',
        examples: [
            '去欧洲旅行需要欧元。 (Qù Ōuzhōu lǚxíng xūyào ōuyuán.) — Для поездки в Европу нужны евро.',
            '1欧元约等于8元人民币。 (1 ōuyuán yuē děngyú 8 yuán rénmínbì.) — 1 евро примерно равен 8 юаням.',
            '欧元区包括20个国家。 (Ōuyuán qū bāokuò 20 gè guójiā.) — В еврозону входят 20 стран.'
        ]
    },
    15: {
        glyph: '硬币',
        pinyin: 'yìngbì',
        translation: 'монета',
        classifier: '枚',
        examples: [
            '我有一枚一元硬币。 (Wǒ yǒu yī méi yī yuán yìngbì.) — У меня есть монета в один юань.',
            '硬币可以放进存钱罐。 (Yìngbì kěyǐ fàng jìn cúnqián guàn.) — Монеты можно класть в копилку.',
            '这枚硬币很旧了。 (Zhè méi yìngbì hěn jiù le.) — Эта монета очень старая.'
        ]
    },

    // === БАНКОВСКИЕ ИНСТРУМЕНТЫ ===
    16: {
        glyph: '纸币',
        pinyin: 'zhǐbì',
        translation: 'банкнота',
        classifier: '张',
        examples: [
            '我有五张100元纸币。 (Wǒ yǒu wǔ zhāng 100 yuán zhǐbì.) — У меня пять банкнот по 100 юаней.',
            '小心假纸币。 (Xiǎoxīn jiǎ zhǐbì.) — Остерегайтесь поддельных банкнот.',
            '这张纸币有折痕。 (Zhè zhāng zhǐbì yǒu zhéhén.) — На этой банкноте залом.'
        ]
    },
    17: {
        glyph: '银行卡',
        pinyin: 'yínháng kǎ',
        translation: 'банковская карта',
        classifier: '张',
        examples: [
            '我用银行卡付款。 (Wǒ yòng yínháng kǎ fùkuǎn.) — Я плачу банковской картой.',
            '这张银行卡是借记卡。 (Zhè zhāng yínháng kǎ shì jièjì kǎ.) — Эта карта — дебетовая.',
            '请保管好你的银行卡。 (Qǐng bǎoguǎn hǎo nǐ de yínháng kǎ.) — Берегите свою банковскую карту.'
        ]
    },
    18: {
        glyph: '信用卡',
        pinyin: 'xìnyòng kǎ',
        translation: 'кредитная карта',
        classifier: '张',
        examples: [
            '他用信用卡买了手机。 (Tā yòng xìnyòng kǎ mǎi le shǒujī.) — Он купил телефон кредитной картой.',
            '信用卡可以透支。 (Xìnyòng kǎ kěyǐ tòuzhī.) — Кредитная карта позволяет уходить в минус.',
            '按时还信用卡很重要。 (Ànshí huán xìnyòng kǎ hěn zhòngyào.) — Очень важно вовремя погашать кредитную карту.'
        ]
    },
    19: {
        glyph: '存折',
        pinyin: 'cúnzhé',
        translation: 'сберегательная книжка',
        classifier: '本',
        examples: [
            '老一辈人常用存折。 (Lǎo yībèi rén cháng yòng cúnzhé.) — Старшее поколение часто пользуется сберкнижкой.',
            '我把钱存进存折。 (Wǒ bǎ qián cún jìn cúnzhé.) — Я положил деньги в сберкнижку.',
            '存折记录存款信息。 (Cúnzhé jìlù cúnkuǎn xìnxī.) — В сберкнижке записана информация о вкладах.'
        ]
    },
    20: {
        glyph: '账户',
        pinyin: 'zhànghù',
        translation: 'счёт (банковский)',
        classifier: '个',
        examples: [
            '我在银行开了账户。 (Wǒ zài yínháng kāi le zhànghù.) — Я открыл счёт в банке.',
            '请提供你的银行账户。 (Qǐng tígōng nǐ de yínháng zhànghù.) — Пожалуйста, укажите свой банковский счёт.',
            '这个账户被冻结了。 (Zhège zhànghù bèi dòngjié le.) — Этот счёт заблокирован.'
        ]
    },

    // === ФИНАНСОВЫЕ ОПЕРАЦИИ И ДОКУМЕНТЫ ===
    21: {
        glyph: '账单',
        pinyin: 'zhàngdān',
        translation: 'счёт (официальный)',
        classifier: '张',
        examples: [
            '餐厅账单多少钱？ (Cāntīng zhàngdān duōshao qián?) — Сколько счёт в ресторане?',
            '请查收您的水电费账单。 (Qǐng cháshōu nín de shuǐ diàn fèi zhàngdān.) — Пожалуйста, проверьте счёт за воду и электричество.',
            '账单需要在7天内支付。 (Zhàngdān xūyào zài 7 tiān nèi zhīfù.) — Счёт нужно оплатить в течение 7 дней.'
        ]
    },
    22: {
        glyph: '汇款',
        pinyin: 'huìkuǎn',
        translation: 'денежный перевод',
        classifier: '笔',
        examples: [
            '我收到了一笔汇款。 (Wǒ shōu dào le yī bǐ huìkuǎn.) — Я получил денежный перевод.',
            '国际汇款需要手续费。 (Guójì huìkuǎn xūyào shǒuxù fèi.) — За международный перевод взимается комиссия.',
            '请确认汇款金额。 (Qǐng quèrèn huìkuǎn jīn\'é.) — Пожалуйста, подтвердите сумму перевода.'
        ]
    },
    23: {
        glyph: '收条',
        pinyin: 'shōutiáo',
        translation: 'расписка о получении денег',
        classifier: '张',
        examples: [
            '他写了收条证明收到钱。 (Tā xiě le shōutiáo zhèngmíng shōu dào qián.) — Он написал расписку, что получил деньги.',
            '大额交易要写收条。 (Dà é jiāoyì yào xiě shōutiáo.) — При крупной сделке нужно писать расписку.',
            '这张收条有法律效力。 (Zhè zhāng shōutiáo yǒu fǎlǜ xiàolì.) — Эта расписка имеет юридическую силу.'
        ]
    },
    24: {
        glyph: '预算',
        pinyin: 'yùsuàn',
        translation: 'бюджет',
        classifier: '个',
        examples: [
            '我们需要制定家庭预算。 (Wǒmen xūyào zhìdìng jiātíng yùsuàn.) — Нам нужно составить семейный бюджет.',
            '公司年度预算已批准。 (Gōngsī niándù yùsuàn yǐ pīzhǔn.) — Годовой бюджет компании утверждён.',
            '不要超预算。 (Búyào chāo yùsuàn.) — Не превышайте бюджет.'
        ]
    },
    25: {
        glyph: '零钱',
        pinyin: 'língqián',
        translation: 'мелочь / сдача',
        classifier: '些',
        examples: [
            '你有零钱吗？ (Nǐ yǒu língqián ma?) — У тебя есть мелочь?',
            '我把零钱放进钱包。 (Wǒ bǎ língqián fàng jìn qiánbāo.) — Я положил мелочь в кошелёк.',
            '收银员找给我一些零钱。 (Shōuyín yuán zhǎo gěi wǒ yīxiē língqián.) — Кассир дал мне сдачу.'
        ]
    }
};

const nounsTechDevices: { [key: number]: DictItem } = {
    // === МОБИЛЬНЫЕ УСТРОЙСТВА ===
    1: {
        glyph: '手机',
        pinyin: 'shǒujī',
        translation: 'мобильный телефон',
        classifier: '部',
        examples: [
            '我的手机没电了。 (Wǒ de shǒujī méi diàn le.) — Мой телефон разрядился.',
            '他买了一部新手机。 (Tā mǎi le yī bù xīn shǒujī.) — Он купил новый телефон.',
            '智能手机可以拍照。 (Zhìnéng shǒujī kěyǐ pāizhào.) — Смартфон может фотографировать.'
        ]
    },
    2: {
        glyph: '智能手机',
        pinyin: 'zhìnéng shǒujī',
        translation: 'смартфон',
        classifier: '部',
        examples: [
            '现在人人都有智能手机。 (Xiànzài rén rén dōu yǒu zhìnéng shǒujī.) — Сейчас у всех есть смартфоны.',
            '这部智能手机支持5G。 (Zhè bù zhìnéng shǒujī zhīchí 5G.) — Этот смартфон поддерживает 5G.',
            '智能手机改变了我们的生活。 (Zhìnéng shǒujī gǎibiàn le wǒmen de shēnghuó.) — Смартфоны изменили нашу жизнь.'
        ]
    },
    3: {
        glyph: '平板电脑',
        pinyin: 'píngbǎn diànnǎo',
        translation: 'планшет',
        classifier: '台',
        examples: [
            '她用平板电脑看电子书。 (Tā yòng píngbǎn diànnǎo kàn diànzǐ shū.) — Она читает электронные книги на планшете.',
            '这台平板电脑很轻薄。 (Zhè tái píngbǎn diànnǎo hěn qīng báo.) — Этот планшет очень лёгкий и тонкий.',
            '平板电脑适合画画。 (Píngbǎn diànnǎo shìhé huàhuà.) — Планшет подходит для рисования.'
        ]
    },
    4: {
        glyph: '智能手表',
        pinyin: 'zhìnéng shǒubiǎo',
        translation: 'умные часы',
        classifier: '块',
        examples: [
            '他的智能手表可以测心率。 (Tā de zhìnéng shǒubiǎo kěyǐ cè xīnlǜ.) — Его умные часы измеряют пульс.',
            '这块智能手表支持接电话。 (Zhè kuài zhìnéng shǒubiǎo zhīchí jiē diànhuà.) — Эти часы поддерживают звонки.',
            '智能手表是健康助手。 (Zhìnéng shǒubiǎo shì jiànkāng zhùshǒu.) — Умные часы — помощник для здоровья.'
        ]
    },
    5: {
        glyph: '耳机',
        pinyin: 'ěrjī',
        translation: 'наушники',
        classifier: '副',
        examples: [
            '我用耳机听音乐。 (Wǒ yòng ěrjī tīng yīnyuè.) — Я слушаю музыку в наушниках.',
            '这副耳机音质很好。 (Zhè fù ěrjī yīnzhì hěn hǎo.) — У этих наушников отличное качество звука.',
            '无线耳机很方便。 (Wúxiàn ěrjī hěn fāngbiàn.) — Беспроводные наушники очень удобны.'
        ]
    },

    // === КОМПЬЮТЕРНОЕ ОБОРУДОВАНИЕ ===
    6: {
        glyph: '电脑',
        pinyin: 'diànnǎo',
        translation: 'компьютер',
        classifier: '台',
        examples: [
            '我在电脑上工作。 (Wǒ zài diànnǎo shàng gōngzuò.) — Я работаю за компьютером.',
            '这台电脑很贵。 (Zhè tái diànnǎo hěn guì.) — Этот компьютер очень дорогой.',
            '电脑需要定期杀毒。 (Diànnǎo xūyào dìngqī shā dú.) — Компьютер нужно регулярно проверять на вирусы.'
        ]
    },
    7: {
        glyph: '笔记本电脑',
        pinyin: 'bǐjìběn diànnǎo',
        translation: 'ноутбук',
        classifier: '台',
        examples: [
            '他带着笔记本电脑出差。 (Tā dài zhe bǐjìběn diànnǎo chūchāi.) — Он берёт ноутбук в командировки.',
            '这台笔记本电脑很轻。 (Zhè tái bǐjìběn diànnǎo hěn qīng.) — Этот ноутбук очень лёгкий.',
            '笔记本电脑方便携带。 (Bǐjìběn diànnǎo fāngbiàn xiédài.) — Ноутбук удобно носить с собой.'
        ]
    },
    8: {
        glyph: '台式电脑',
        pinyin: 'táishì diànnǎo',
        translation: 'стационарный компьютер',
        classifier: '台',
        examples: [
            '我家有台式电脑。 (Wǒ jiā yǒu táishì diànnǎo.) — У меня дома стационарный компьютер.',
            '台式电脑性能更强。 (Táishì diànnǎo xìngnéng gèng qiáng.) — Стационарный компьютер мощнее.',
            '台式电脑不适合移动。 (Táishì diànnǎo bù shìhé yídòng.) — Стационарный компьютер не подходит для перемещений.'
        ]
    },
    9: {
        glyph: '显示器',
        pinyin: 'xiǎnshìqì',
        translation: 'монитор',
        classifier: '台',
        examples: [
            '这个显示器是4K的。 (Zhège xiǎnshìqì shì 4K de.) — Этот монитор 4K.',
            '我需要一台新显示器。 (Wǒ xūyào yī tái xīn xiǎnshìqì.) — Мне нужен новый монитор.',
            '显示器越大，看得越清楚。 (Xiǎnshìqì yuè dà, kàn de yuè qīngchu.) — Чем больше монитор, тем чётче видно.'
        ]
    },
    10: {
        glyph: '键盘',
        pinyin: 'jiànpán',
        translation: 'клавиатура',
        classifier: '个',
        examples: [
            '这个键盘是机械的。 (Zhège jiànpán shì jīxiè de.) — Эта клавиатура механическая.',
            '我用键盘打字。 (Wǒ yòng jiànpán dǎzì.) — Я печатаю на клавиатуре.',
            '无线键盘不占地方。 (Wúxiàn jiànpán bù zhàn dìfāng.) — Беспроводная клавиатура не занимает места.'
        ]
    },

    // === ПЕРИФЕРИЙНЫЕ УСТРОЙСТВА ===
    11: {
        glyph: '鼠标',
        pinyin: 'shǔbiāo',
        translation: 'компьютерная мышь',
        classifier: '个',
        examples: [
            '这个鼠标很灵敏。 (Zhège shǔbiāo hěn língmǐn.) — Эта мышь очень чувствительная.',
            '我用鼠标点击图标。 (Wǒ yòng shǔbiāo diǎnjī túbiāo.) — Я кликаю по иконке мышью.',
            '无线鼠标更方便。 (Wúxiàn shǔbiāo gèng fāngbiàn.) — Беспроводная мышь удобнее.'
        ]
    },
    12: {
        glyph: '打印机',
        pinyin: 'dǎyìnjī',
        translation: 'принтер',
        classifier: '台',
        examples: [
            '办公室有一台打印机。 (Bàngōngshì yǒu yī tái dǎyìnjī.) — В офисе есть принтер.',
            '这台打印机支持无线打印。 (Zhè tái dǎyìnjī zhīchí wúxiàn dǎyìn.) — Этот принтер поддерживает беспроводную печать.',
            '打印机没墨了。 (Dǎyìnjī méi mò le.) — В принтере закончился тонер.'
        ]
    },
    13: {
        glyph: '扫描仪',
        pinyin: 'sǎomiáoyí',
        translation: 'сканер',
        classifier: '台',
        examples: [
            '用扫描仪把文件转成电子版。 (Yòng sǎomiáoyí bǎ wénjiàn zhuǎn chéng diànzǐ bǎn.) — Используй сканер, чтобы оцифровать документы.',
            '这台扫描仪速度很快。 (Zhè tái sǎomiáoyí sùdù hěn kuài.) — Этот сканер очень быстрый.',
            '扫描仪对文员很有用。 (Sǎomiáoyí duì wényuán hěn yǒuyòng.) — Сканер очень полезен офисным работникам.'
        ]
    },
    14: {
        glyph: '路由器',
        pinyin: 'lùyóuqì',
        translation: 'роутер',
        classifier: '个',
        examples: [
            '家里有无线路由器。 (Jiā lǐ yǒu wúxiàn lùyóuqì.) — Дома есть беспроводной роутер.',
            '这个路由器信号很强。 (Zhège lùyóuqì xìnhào hěn qiáng.) — У этого роутера очень сильный сигнал.',
            '重启路由器能解决网络问题。 (Chóngqǐ lùyóuqì néng jiějué wǎngluò wèntí.) — Перезагрузка роутера решает проблемы с сетью.'
        ]
    },
    15: {
        glyph: '摄像头',
        pinyin: 'shèxiàngtóu',
        translation: 'веб-камера',
        classifier: '个',
        examples: [
            '视频会议需要摄像头。 (Shìpín huìyì xūyào shèxiàngtóu.) — Для видеоконференции нужна веб-камера.',
            '这个摄像头有1080P高清。 (Zhège shèxiàngtóu yǒu 1080P gāoqīng.) — Эта камера поддерживает Full HD.',
            '笔记本电脑自带摄像头。 (Bǐjìběn diànnǎo zìdài shèxiàngtóu.) — В ноутбуке встроенная камера.'
        ]
    },

    // === НОСИТЕЛИ И ХРАНЕНИЕ ===
    16: {
        glyph: 'U盘',
        pinyin: 'U pán',
        translation: 'флеш-накопитель',
        classifier: '个',
        examples: [
            '我把文件存到U盘里。 (Wǒ bǎ wénjiàn cún dào U pán lǐ.) — Я сохранил файл на флешку.',
            '这个U盘有64GB容量。 (Zhège U pán yǒu 64GB róngliàng.) — Эта флешка объёмом 64 ГБ.',
            'U盘容易丢失，要小心保管。 (U pán róngyì diūshī, yào xiǎoxīn bǎoguǎn.) — Флешки легко терять, берегите их.'
        ]
    },
    17: {
        glyph: '移动硬盘',
        pinyin: 'yídòng yìngpán',
        translation: 'внешний жёсткий диск',
        classifier: '个',
        examples: [
            '我用移动硬盘备份数据。 (Wǒ yòng yídòng yìngpán bèifèn shùjù.) — Я делаю резервную копию данных на внешний диск.',
            '这个移动硬盘有1TB空间。 (Zhège yídòng yìngpán yǒu 1TB kōngjiān.) — У этого диска 1 ТБ памяти.',
            '移动硬盘比U盘容量大。 (Yídòng yìngpán bǐ U pán róngliàng dà.) — Внешний диск объёмнее флешки.'
        ]
    },
    18: {
        glyph: '内存卡',
        pinyin: 'nèicún kǎ',
        translation: 'карта памяти',
        classifier: '张',
        examples: [
            '相机需要内存卡。 (Xiàngjī xūyào nèicún kǎ.) — Для фотоаппарата нужна карта памяти.',
            '这张内存卡是32GB的。 (Zhè zhāng nèicún kǎ shì 32GB de.) — Эта карта памяти на 32 ГБ.',
            '内存卡可以用于手机和相机。 (Nèicún kǎ kěyǐ yòngyú shǒujī hé xiàngjī.) — Карта памяти подходит и для телефона, и для камеры.'
        ]
    },
    19: {
        glyph: '云存储',
        pinyin: 'yún cúnchǔ',
        translation: 'облачное хранилище',
        classifier: '个',
        examples: [
            '我用云存储保存照片。 (Wǒ yòng yún cúnchǔ bǎocún zhàopiàn.) — Я храню фотографии в облаке.',
            '这个云存储提供100GB免费空间。 (Zhège yún cúnchǔ tígōng 100GB miǎnfèi kōngjiān.) — Это облачное хранилище даёт 100 ГБ бесплатно.',
            '云存储可以随时随地访问。 (Yún cúnchǔ kěyǐ suí shí suí dì fǎngwèn.) — К облаку можно получить доступ в любое время и в любом месте.'
        ]
    },
    20: {
        glyph: '充电器',
        pinyin: 'chōngdiàn qì',
        translation: 'зарядное устройство',
        classifier: '个',
        examples: [
            '我的手机充电器坏了。 (Wǒ de shǒujī chōngdiàn qì huài le.) — Мой зарядник сломался.',
            '这个充电器支持快充。 (Zhège chōngdiàn qì zhīchí kuài chōng.) — Это зарядное устройство поддерживает быструю зарядку.',
            '旅行时不要忘记带充电器。 (Lǚxíng shí búyào wàngjì dài chōngdiàn qì.) — Не забудь взять зарядку в поездку.'
        ]
    },

    // === УМНЫЕ И СПЕЦИАЛИЗИРОВАННЫЕ УСТРОЙСТВА ===
    21: {
        glyph: '智能音箱',
        pinyin: 'zhìnéng yīnxiāng',
        translation: 'умная колонка',
        classifier: '个',
        examples: [
            '我对智能音箱说“播放音乐”。 (Wǒ duì zhìnéng yīnxiāng shuō “bōfàng yīnyuè”.) — Я говорю умной колонке: «Включи музыку».',
            '这个智能音箱能控制家电。 (Zhège zhìnéng yīnxiāng néng kòngzhì jiādiàn.) — Эта колонка управляет бытовой техникой.',
            '智能音箱让生活更方便。 (Zhìnéng yīnxiāng ràng shēnghuó gèng fāngbiàn.) — Умная колонка делает жизнь удобнее.'
        ]
    },
    22: {
        glyph: '无人机',
        pinyin: 'wúrén jī',
        translation: 'дрон',
        classifier: '架',
        examples: [
            '他用无人机拍摄风景。 (Tā yòng wúrén jī pāishè fēngjǐng.) — Он снимает пейзажи на дрон.',
            '这架无人机能飞30分钟。 (Zhè jià wúrén jī néng fēi 30 fēnzhōng.) — Этот дрон может летать 30 минут.',
            '无人机用于农业和物流。 (Wúrén jī yòngyú nóngyè hé wùliú.) — Дроны используют в сельском хозяйстве и логистике.'
        ]
    },
    23: {
        glyph: '电子阅读器',
        pinyin: 'diànzǐ yuèdú qì',
        translation: 'ридёр (электронная книга)',
        classifier: '个',
        examples: [
            '我用电子阅读器看书。 (Wǒ yòng diànzǐ yuèdú qì kàn shū.) — Я читаю книги на ридере.',
            '电子阅读器不伤眼睛。 (Diànzǐ yuèdú qì bù shāng yǎnjing.) — Ридер не вредит глазам.',
            '这个电子阅读器支持多种格式。 (Zhège diànzǐ yuèdú qì zhīchí duō zhǒng géshì.) — Этот ридер поддерживает множество форматов.'
        ]
    },
    24: {
        glyph: '游戏机',
        pinyin: 'yóuxì jī',
        translation: 'игровая консоль',
        classifier: '台',
        examples: [
            '他在游戏机上玩电子游戏。 (Tā zài yóuxì jī shàng wán diànzǐ yóuxì.) — Он играет в игры на приставке.',
            '这台游戏机是最新款。 (Zhè tái yóuxì jī shì zuìxīn kuǎn.) — Эта консоль — новейшая модель.',
            '游戏机连接电视使用。 (Yóuxì jī liánjiē diànshì shǐyòng.) — Игровую консоль подключают к телевизору.'
        ]
    },
    25: {
        glyph: '虚拟现实眼镜',
        pinyin: 'xūnǐ xiànshí yǎnjìng',
        translation: 'очки виртуальной реальности',
        classifier: '副',
        examples: [
            '他戴着虚拟现实眼镜玩游戏。 (Tā dài zhe xūnǐ xiànshí yǎnjìng wán yóuxì.) — Он играет в VR-очки.',
            '这副虚拟现实眼镜很舒适。 (Zhè fù xūnǐ xiànshí yǎnjìng hěn shūshì.) — Эти очки очень удобные.',
            '虚拟现实眼镜用于教育和娱乐。 (Xūnǐ xiànshí yǎnjìng yòngyú jiàoyù hé yúlè.) — Очки VR используют в образовании и развлечениях.'
        ]
    }
};

const nounsInternet: { [key: number]: DictItem } = {
    // === ОСНОВНЫЕ ПОНЯТИЯ ===
    1: {
        glyph: '网络',
        pinyin: 'wǎngluò',
        translation: 'интернет / сеть',
        classifier: '个',
        examples: [
            '家里有无线网络。 (Jiā lǐ yǒu wúxiàn wǎngluò.) — Дома есть Wi-Fi.',
            '网络让世界变小了。 (Wǎngluò ràng shìjiè biàn xiǎo le.) — Интернет сделал мир меньше.',
            '网络不稳定。 (Wǎngluò bù wěndìng.) — Интернет нестабильный.'
        ]
    },
    2: {
        glyph: '网站',
        pinyin: 'wǎngzhàn',
        translation: 'сайт',
        classifier: '个',
        examples: [
            '这是一个新闻网站。 (Zhè shì yī gè xīnwén wǎngzhàn.) — Это новостной сайт.',
            '我每天访问这个网站。 (Wǒ měitiān fǎngwèn zhège wǎngzhàn.) — Я захожу на этот сайт каждый день.',
            '公司有官方网站。 (Gōngsī yǒu guānfāng wǎngzhàn.) — У компании есть официальный сайт.'
        ]
    },
    3: {
        glyph: '网页',
        pinyin: 'wǎngyè',
        translation: 'веб-страница',
        classifier: '页',
        examples: [
            '这个网页加载很慢。 (Zhège wǎngyè jiāzǎi hěn màn.) — Эта страница загружается медленно.',
            '我收藏了这个网页。 (Wǒ shōucáng le zhège wǎngyè.) — Я добавил эту страницу в закладки.',
            '网页设计很美观。 (Wǎngyè shèjì hěn měiguān.) — Дизайн страницы очень красив.'
        ]
    },
    4: {
        glyph: '链接',
        pinyin: 'liànjiē',
        translation: 'ссылка',
        classifier: '个',
        examples: [
            '请点击这个链接。 (Qǐng diǎnjī zhège liànjiē.) — Пожалуйста, нажмите на эту ссылку.',
            '这个链接无效。 (Zhège liànjiē wúxiào.) — Эта ссылка не работает.',
            '分享文章的链接。 (Fēnxiǎng wénzhāng de liànjiē.) — Поделитесь ссылкой на статью.'
        ]
    },
    5: {
        glyph: '密码',
        pinyin: 'mìmǎ',
        translation: 'пароль',
        classifier: '个',
        examples: [
            '请设置一个强密码。 (Qǐng shèzhì yī gè qiáng mìmǎ.) — Пожалуйста, установите надёжный пароль.',
            '不要告诉别人你的密码。 (Búyào gàosu biérén nǐ de mìmǎ.) — Не говорите свой пароль посторонним.',
            '我忘记了密码。 (Wǒ wàngjì le mìmǎ.) — Я забыл пароль.'
        ]
    },

    // === АККАУНТЫ И ПРОФИЛИ ===
    6: {
        glyph: '账号',
        pinyin: 'zhànghào',
        translation: 'аккаунт / учётная запись',
        classifier: '个',
        examples: [
            '注册一个新账号。 (Zhùcè yī gè xīn zhànghào.) — Зарегистрируйте новый аккаунт.',
            '这个账号被封了。 (Zhège zhànghào bèi fēng le.) — Этот аккаунт заблокирован.',
            '请用你的账号登录。 (Qǐng yòng nǐ de zhànghào dēnglù.) — Пожалуйста, войдите в свой аккаунт.'
        ]
    },
    7: {
        glyph: '用户名',
        pinyin: 'yònghù míng',
        translation: 'имя пользователя',
        classifier: '个',
        examples: [
            '用户名不能包含空格。 (Yònghù míng bù néng bāohán kònggé.) — Имя пользователя не может содержать пробелы.',
            '我忘记了用户名。 (Wǒ wàngjì le yònghù míng.) — Я забыл имя пользователя.',
            '请选择一个独特的用户名。 (Qǐng xuǎnzé yī gè dútè de yònghù míng.) — Выберите уникальное имя пользователя.'
        ]
    },
    8: {
        glyph: '个人资料',
        pinyin: 'gèrén zīliào',
        translation: 'профиль / личная информация',
        classifier: '份',
        examples: [
            '请完善你的个人资料。 (Qǐng wánshàn nǐ de gèrén zīliào.) — Пожалуйста, заполните свой профиль.',
            '个人资料包括照片和简介。 (Gèrén zīliào bāokuò zhàopiàn hé jiǎnjiè.) — Профиль включает фото и краткое описание.',
            '不要公开敏感的个人资料。 (Búyào gōngkāi mǐngǎn de gèrén zīliào.) — Не публикуйте конфиденциальную информацию.'
        ]
    },
    9: {
        glyph: '头像',
        pinyin: 'tóuxiàng',
        translation: 'аватар',
        classifier: '个',
        examples: [
            '你可以更换头像。 (Nǐ kěyǐ gēnhuàn tóuxiàng.) — Вы можете сменить аватар.',
            '这个头像很可爱。 (Zhège tóuxiàng hěn kě\'ài.) — Этот аватар очень милый.',
            '头像会显示在评论旁边。 (Tóuxiàng huì xiǎnshì zài pínglùn pángbiān.) — Аватар отображается рядом с комментариями.'
        ]
    },
    10: {
        glyph: '粉丝',
        pinyin: 'fěnsī',
        translation: 'фолловеры / подписчики',
        classifier: '个',
        examples: [
            '他有100万个粉丝。 (Tā yǒu 100 wàn gè fěnsī.) — У него миллион подписчиков.',
            '网红靠粉丝赚钱。 (Wǎnghóng kào fěnsī zhuàn qián.) — Инфлюенсеры зарабатывают на подписчиках.',
            '感谢所有粉丝的支持！ (Gǎnxiè suǒyǒu fěnsī de zhīchí!) — Спасибо всем подписчикам за поддержку!'
        ]
    },

    // === КОНТЕНТ И ВЗАИМОДЕЙСТВИЕ ===
    11: {
        glyph: '帖子',
        pinyin: 'tiězi',
        translation: 'пост / запись',
        classifier: '条',
        examples: [
            '我发了一条新帖子。 (Wǒ fā le yī tiáo xīn tiězi.) — Я опубликовал новый пост.',
            '这个帖子很有趣。 (Zhège tiězi hěn yǒuqù.) — Этот пост очень интересный.',
            '不要转发虚假帖子。 (Búyào zhuǎnfā xūjiǎ tiězi.) — Не репостите ложные записи.'
        ]
    },
    12: {
        glyph: '评论',
        pinyin: 'pínglùn',
        translation: 'комментарий',
        classifier: '条',
        examples: [
            '请发表你的评论。 (Qǐng fābiǎo nǐ de pínglùn.) — Пожалуйста, оставьте комментарий.',
            '这条评论很中肯。 (Zhè tiáo pínglùn hěn zhōngkěn.) — Этот комментарий очень объективный.',
            '删除不当评论。 (Shānchú bùdàng pínglùn.) — Удалите неуместные комментарии.'
        ]
    },
    13: {
        glyph: '点赞',
        pinyin: 'diǎnzàn',
        translation: 'лайк',
        classifier: '个',
        examples: [
            '给这个视频点个赞。 (Gěi zhège shìpín diǎn gè zàn.) — Поставьте лайк этому видео.',
            '他的帖子获得很多点赞。 (Tā de tiězi huòdé hěn duō diǎnzàn.) — Его пост получил много лайков.',
            '点赞表示你喜欢内容。 (Diǎnzàn biǎoshì nǐ xǐhuan nèiróng.) — Лайк означает, что вам понравился контент.'
        ]
    },
    14: {
        glyph: '转发',
        pinyin: 'zhuǎnfā',
        translation: 'репост',
        classifier: '次',
        examples: [
            '请转发这条重要信息。 (Qǐng zhuǎnfā zhè tiáo zhòngyào xìnxī.) — Пожалуйста, сделайте репост этого важного сообщения.',
            '这条新闻被转发了上万次。 (Zhè tiáo xīnwén bèi zhuǎnfā le shàng wàn cì.) — Эта новость была репостнута десятки тысяч раз.',
            '转发前请核实真伪。 (Zhuǎnfā qián qǐng héshí zhēnwěi.) — Перед репостом проверьте достоверность.'
        ]
    },
    15: {
        glyph: '私信',
        pinyin: 'sī xìn',
        translation: 'личное сообщение',
        classifier: '条',
        examples: [
            '他给我发了一条私信。 (Tā gěi wǒ fā le yī tiáo sī xìn.) — Он прислал мне личное сообщение.',
            '私信内容不会公开。 (Sī xìn nèiróng bú huì gōngkāi.) — Содержимое личных сообщений не публикуется.',
            '请不要发垃圾私信。 (Qǐng búyào fā lèsè sī xìn.) — Пожалуйста, не рассылайте спам.'
        ]
    },

    // === СОЦИАЛЬНЫЕ СЕТИ И ПЛАТФОРМЫ ===
    16: {
        glyph: '社交媒体',
        pinyin: 'shèjiāo méitǐ',
        translation: 'социальные сети',
        classifier: '个',
        examples: [
            '年轻人喜欢用社交媒体。 (Niánqīng rén xǐhuan yòng shèjiāo méitǐ.) — Молодёжь любит соцсети.',
            '社交媒体改变了沟通方式。 (Shèjiāo méitǐ gǎibiàn le gōutōng fāngshì.) — Соцсети изменили способ общения.',
            '不要在社交媒体泄露隐私。 (Búyào zài shèjiāo méitǐ xièlòu yǐnsī.) — Не раскрывайте личную информацию в соцсетях.'
        ]
    },
    17: {
        glyph: '朋友圈',
        pinyin: 'péngyou quān',
        translation: 'WeChat Moments',
        classifier: '个',
        examples: [
            '她在朋友圈晒照片。 (Tā zài péngyou quān shài zhàopiàn.) — Она делится фото в Moments.',
            '我很少发朋友圈。 (Wǒ hěn shǎo fā péngyou quān.) — Я редко публикую в Moments.',
            '朋友圈只对好友可见。 (Péngyou quān zhǐ duì hǎoyǒu kějiàn.) — Moments видны только друзьям.'
        ]
    },
    18: {
        glyph: '微博',
        pinyin: 'wēibó',
        translation: 'Weibo (китайский Twitter)',
        classifier: '个',
        examples: [
            '明星在微博发布消息。 (Míngxīng zài wēibó fābù xiāoxī.) — Звёзды публикуют новости в Weibo.',
            '这条微博上了热搜。 (Zhè tiáo wēibó shàng le rèsōu.) — Этот твит попал в тренды.',
            '微博是重要的信息平台。 (Wēibó shì zhòngyào de xìnxī píngtái.) — Weibo — важная информационная платформа.'
        ]
    },
    19: {
        glyph: '直播',
        pinyin: 'zhíbō',
        translation: 'прямая трансляция',
        classifier: '场',
        examples: [
            '他正在看一场游戏直播。 (Tā zhèngzài kàn yī chǎng yóuxì zhíbō.) — Он смотрит прямой эфир игры.',
            '主播通过直播卖货。 (Zhǔbō tōngguò zhíbō mài huò.) — Ведущие продают товары в прямом эфире.',
            '这场直播有10万人观看。 (Zhè chǎng zhíbō yǒu 10 wàn rén guānkàn.) — Эту трансляцию смотрят 100 000 человек.'
        ]
    },
    20: {
        glyph: '弹幕',
        pinyin: 'dànmù',
        translation: 'бегущие комментарии (на видео)',
        classifier: '条',
        examples: [
            '视频上有好多弹幕。 (Shìpín shàng yǒu hǎo duō dànmù.) — На видео много бегущих комментариев.',
            '这条弹幕很搞笑。 (Zhè tiáo dànmù hěn gǎoxiào.) — Этот комментарий очень смешной.',
            '可以关闭弹幕。 (Kěyǐ guānbì dànmù.) — Можно отключить бегущие субтитры.'
        ]
    },

    // === ИНТЕРНЕТ-ЯВЛЕНИЯ ===
    21: {
        glyph: '网红',
        pinyin: 'wǎnghóng',
        translation: 'инфлюенсер / интернет-знаменитость',
        classifier: '个',
        examples: [
            '她是个美食网红。 (Tā shì gè měishí wǎnghóng.) — Она — кулинарный блогер.',
            '网红推荐的产品很畅销。 (Wǎnghóng tuījiàn de chǎnpǐn hěn chàngxiāo.) — Товары, рекомендованные инфлюенсерами, хорошо продаются.',
            '成为网红需要创意和坚持。 (Chéngwéi wǎnghóng xūyào chuàngyì hé jiānchí.) — Чтобы стать инфлюенсером, нужны креативность и упорство.'
        ]
    },
    22: {
        glyph: '表情包',
        pinyin: 'biǎoqíng bāo',
        translation: 'стикеры / мемы',
        classifier: '个',
        examples: [
            '聊天时用表情包更有趣。 (Liáotiān shí yòng biǎoqíng bāo gèng yǒuqù.) — В чате стикеры делают общение интереснее.',
            '这个表情包太可爱了。 (Zhège biǎoqíng bāo tài kě\'ài le.) — Этот мем слишком милый.',
            '自制表情包很流行。 (Zìzhì biǎoqíng bāo hěn liúxíng.) — Самодельные мемы очень популярны.'
        ]
    },
    23: {
        glyph: '热搜',
        pinyin: 'rè sōu',
        translation: 'тренды / горячие поисковые запросы',
        classifier: '个',
        examples: [
            '这个话题上了热搜。 (Zhège huàtí shàng le rè sōu.) — Эта тема в трендах.',
            '热搜反映公众关注点。 (Rè sōu fǎnyìng gōngzhòng guānzhù diǎn.) — Тренды отражают интересы общества.',
            '不要制造虚假热搜。 (Búyào zhìzào xūjiǎ rè sōu.) — Не создавайте искусственные тренды.'
        ]
    },
    24: {
        glyph: '二维码',
        pinyin: 'èrwéi mǎ',
        translation: 'QR-код',
        classifier: '个',
        examples: [
            '扫描二维码关注公众号。 (Sǎomiáo èrwéi mǎ guānzhù gōngzhòng hào.) — Отсканируйте QR-код, чтобы подписаться на официальный аккаунт.',
            '这个二维码链接到网站。 (Zhège èrwéi mǎ liànjiē dào wǎngzhàn.) — Этот QR-код ведёт на сайт.',
            '付款时出示二维码。 (Fùkuǎn shí chūshì èrwéi mǎ.) — При оплате покажите QR-код.'
        ]
    },
    25: {
        glyph: '话题标签',
        pinyin: 'huàtí biāoqiān',
        translation: 'хештег',
        classifier: '个',
        examples: [
            '用#旅行 记录你的旅程。 (Yòng #lǚxíng jìlù nǐ de lǚchéng.) — Используйте #Путешествие, чтобы записать свою поездку.',
            '这个话题标签很热门。 (Zhège huàtí biāoqiān hěn rèmén.) — Этот хештег очень популярный.',
            '话题标签帮助内容分类。 (Huàtí biāoqiān bāngzhù nèiróng fēnlèi.) — Хештеги помогают классифицировать контент.'
        ]
    }
};

const nounsArtObjects: { [key: number]: DictItem } = {
    // === ИЗОБРАЗИТЕЛЬНОЕ ИСКУССТВО ===
    1: {
        glyph: '画',
        pinyin: 'huà',
        translation: 'картина',
        classifier: '幅',
        examples: [
            '博物馆里有一幅名画。 (Bówùguǎn lǐ yǒu yī fú míng huà.) — В музее есть знаменитая картина.',
            '这幅画是梵高的作品。 (Zhè fú huà shì Fàngāo de zuòpǐn.) — Эта картина — работа Ван Гога.',
            '我喜欢这幅山水画。 (Wǒ xǐhuan zhè fú shānshuǐ huà.) — Мне нравится эта пейзажная картина.'
        ]
    },
    2: {
        glyph: '油画',
        pinyin: 'yóuhuà',
        translation: 'масляная живопись',
        classifier: '幅',
        examples: [
            '这幅油画色彩丰富。 (Zhè fú yóuhuà sècǎi fēngfù.) — Эта масляная картина насыщена цветом.',
            '欧洲文艺复兴时期油画很著名。 (Ōuzhōu wényì fùxīng shíqī yóuhuà hěn zhùmíng.) — Масляная живопись эпохи Возрождения очень известна.',
            '他收藏了很多油画。 (Tā shōucáng le hěn duō yóuhuà.) — Он коллекционирует много масляных картин.'
        ]
    },
    3: {
        glyph: '国画',
        pinyin: 'guóhuà',
        translation: 'китайская живопись',
        classifier: '幅',
        examples: [
            '这幅国画很有意境。 (Zhè fú guóhuà hěn yǒu yìjìng.) — Эта китайская картина полна поэтического настроения.',
            '国画常用水墨和宣纸。 (Guóhuà cháng yòng shuǐmò hé xuānzhǐ.) — Китайская живопись обычно делается тушью на рисовой бумаге.',
            '他擅长画花鸟国画。 (Tā shànzhǎng huà huāniǎo guóhuà.) — Он мастер цветочно-птичьей китайской живописи.'
        ]
    },
    4: {
        glyph: '素描',
        pinyin: 'sùmiáo',
        translation: 'рисунок (карандашный)',
        classifier: '幅',
        examples: [
            '这幅素描很写实。 (Zhè fú sùmiáo hěn xiěshí.) — Этот рисунок очень реалистичный.',
            '学画画要从素描开始。 (Xué huàhuà yào cóng sùmiáo kāishǐ.) — Обучение живописи начинается с рисунка.',
            '他的素描技巧很高。 (Tā de sùmiáo jìqiǎo hěn gāo.) — Его техника рисунка очень высока.'
        ]
    },
    5: {
        glyph: '雕塑',
        pinyin: 'diāosù',
        translation: 'скульптура',
        classifier: '件',
        examples: [
            '广场上有一件雕塑。 (Guǎngchǎng shàng yǒu yī jiàn diāosù.) — На площади стоит скульптура.',
            '这件雕塑是青铜做的。 (Zhè jiàn diāosù shì qīngtóng zuò de.) — Эта скульптура сделана из бронзы.',
            '米开朗基罗的雕塑很著名。 (Mǐkāilǎngjīluó de diāosù hěn zhùmíng.) — Скульптуры Микеланджело очень известны.'
        ]
    },

    // === ЛИТЕРАТУРА ===
    6: {
        glyph: '小说',
        pinyin: 'xiǎoshuō',
        translation: 'роман / повесть',
        classifier: '部',
        examples: [
            '我正在读一部小说。 (Wǒ zhèngzài dú yī bù xiǎoshuō.) — Я читаю роман.',
            '这部小说获得了诺贝尔文学奖。 (Zhè bù xiǎoshuō huòdé le Nuòbèi\'ěr wénxué jiǎng.) — Этот роман получил Нобелевскую премию по литературе.',
            '《红楼梦》是中国古典小说的巅峰。 (《Hóng Lóu Mèng》 shì Zhōngguó gǔdiǎn xiǎoshuō de diānfēng.) — «Сон в красном тереме» — вершина классического китайского романа.'
        ]
    },
    7: {
        glyph: '诗歌',
        pinyin: 'shīgē',
        translation: 'стихотворение',
        classifier: '首',
        examples: [
            '李白的诗歌很有名。 (Lǐ Bái de shīgē hěn yǒumíng.) — Стихи Ли Бо очень известны.',
            '这首诗歌表达了思乡之情。 (Zhè shǒu shīgē biǎodá le sī xiāng zhī qíng.) — Это стихотворение выражает тоску по родине.',
            '孩子们在背诵诗歌。 (Háizimen zài bèisòng shīgōng.) — Дети учат стихи наизусть.'
        ]
    },
    8: {
        glyph: '剧本',
        pinyin: 'jùběn',
        translation: 'сценарий / пьеса',
        classifier: '部',
        examples: [
            '他写了一部新剧本。 (Tā xiě le yī bù xīn jùběn.) — Он написал новый сценарий.',
            '这个剧本适合拍电影。 (Zhège jùběn shìhé pāi diànyǐng.) — Этот сценарий подходит для экранизации.',
            '莎士比亚的剧本至今仍在上演。 (Shāshìbǐyǎ de jùběn zhìjīn réng zài shàngyǎn.) — Пьесы Шекспира до сих пор ставят в театрах.'
        ]
    },
    9: {
        glyph: '散文',
        pinyin: 'sǎnwén',
        translation: 'проза (в художественном смысле)',
        classifier: '篇',
        examples: [
            '这篇散文很优美。 (Zhè piān sǎnwén hěn yōuměi.) — Эта проза очень изящна.',
            '鲁迅的散文深刻而犀利。 (Lǔ Xùn de sǎnwén shēnkè ér xīlì.) — Проза Лу Сюня глубока и острая.',
            '我喜欢读抒情散文。 (Wǒ xǐhuan dú shūqíng sǎnwén.) — Мне нравится читать лирическую прозу.'
        ]
    },
    10: {
        glyph: '传记',
        pinyin: 'zhuànjì',
        translation: 'биография',
        classifier: '部',
        examples: [
            '我读了一部爱因斯坦的传记。 (Wǒ dú le yī bù Àiyīnsītǎn de zhuànjì.) — Я прочитал биографию Эйнштейна.',
            '这部传记很真实。 (Zhè bù zhuànjì hěn zhēnshí.) — Эта биография очень достоверна.',
            '名人传记激励年轻人。 (Míngrén zhuànjì jīlì niánqīng rén.) — Биографии знаменитостей вдохновляют молодёжь.'
        ]
    },

    // === МУЗЫКА ===
    11: {
        glyph: '歌曲',
        pinyin: 'gēqǔ',
        translation: 'песня',
        classifier: '首',
        examples: [
            '这首歌很好听。 (Zhè shǒu gē hěn hǎotīng.) — Эта песня очень красивая.',
            '他写了一首新歌。 (Tā xiě le yī shǒu xīn gē.) — Он написал новую песню.',
            '这首歌曲表达了爱情。 (Zhè shǒu gēqǔ biǎodá le àiqíng.) — Эта песня о любви.'
        ]
    },
    12: {
        glyph: '交响曲',
        pinyin: 'jiāoxiǎng qǔ',
        translation: 'симфония',
        classifier: '部',
        examples: [
            '贝多芬的第九交响曲很著名。 (Bèiduōfēn de dì jiǔ jiāoxiǎng qǔ hěn zhùmíng.) — Девятая симфония Бетховена очень известна.',
            '这部交响曲有四个乐章。 (Zhè bù jiāoxiǎng qǔ yǒu sì gè yuèzhāng.) — Эта симфония состоит из четырёх частей.',
            '乐团正在演奏交响曲。 (Yuètuán zhèngzài yǎnzòu jiāoxiǎng qǔ.) — Оркестр исполняет симфонию.'
        ]
    },
    13: {
        glyph: '民歌',
        pinyin: 'míngē',
        translation: 'народная песня',
        classifier: '首',
        examples: [
            '这首民歌来自云南。 (Zhè shǒu míngē láizì Yúnnán.) — Эта народная песня из Юньнани.',
            '民歌反映当地文化。 (Míngē fǎnyìng dāngdì wénhuà.) — Народные песни отражают местную культуру.',
            '她会唱很多民歌。 (Tā huì chàng hěn duō míngē.) — Она умеет петь много народных песен.'
        ]
    },
    14: {
        glyph: '乐章',
        pinyin: 'yuèzhāng',
        translation: 'музыкальная часть (в симфонии и т.д.)',
        classifier: '个',
        examples: [
            '第一乐章很激昂。 (Dì yī yuèzhāng hěn jī\'áng.) — Первая часть очень энергичная.',
            '这首交响曲有三个乐章。 (Zhè shǒu jiāoxiǎng qǔ yǒu sān gè yuèzhāng.) — Эта симфония состоит из трёх частей.',
            '乐章之间不要鼓掌。 (Yuèzhāng zhī jiān búyào gǔzhǎng.) — Не хлопайте между частями.'
        ]
    },
    15: {
        glyph: '专辑',
        pinyin: 'zhuānjí',
        translation: 'музыкальный альбом',
        classifier: '张',
        examples: [
            '他发行了一张新专辑。 (Tā fāxíng le yī zhāng xīn zhuānjí.) — Он выпустил новый альбом.',
            '这张专辑很成功。 (Zhè zhāng zhuānjí hěn chénggōng.) — Этот альбом очень успешен.',
            '专辑包含12首歌。 (Zhuānjí bāohán 12 shǒu gē.) — В альбоме 12 песен.'
        ]
    },

    // === КИНО И ТЕАТР ===
    16: {
        glyph: '电影',
        pinyin: 'diànyǐng',
        translation: 'фильм',
        classifier: '部',
        examples: [
            '我们去看一部新电影。 (Wǒmen qù kàn yī bù xīn diànyǐng.) — Пойдём посмотрим новый фильм.',
            '这部科幻电影很震撼。 (Zhè bù kēhuàn diànyǐng hěn zhènhàn.) — Этот научно-фантастический фильм очень впечатляющий.',
            '《卧虎藏龙》是著名华语电影。 (《Wò Hǔ Cáng Lóng》 shì zhùmíng huáyǔ diànyǐng.) — «Укрощение строптивого тигра» — знаменитый китайский фильм.'
        ]
    },
    17: {
        glyph: '纪录片',
        pinyin: 'jìlùpiàn',
        translation: 'документальный фильм',
        classifier: '部',
        examples: [
            '这部纪录片讲的是野生动物。 (Zhè bù jìlùpiàn jiǎng de shì yěshēng dòngwù.) — Этот документальный фильм о дикой природе.',
            'BBC的纪录片质量很高。 (BBC de jìlùpiàn zhìliàng hěn gāo.) — Документальные фильмы BBC очень высокого качества.',
            '纪录片帮助我们了解世界。 (Jìlùpiàn bāngzhù wǒmen liǎojiě shìjiè.) — Документальные фильмы помогают нам понимать мир.'
        ]
    },
    18: {
        glyph: '动画片',
        pinyin: 'dònghuà piàn',
        translation: 'мультфильм',
        classifier: '部',
        examples: [
            '孩子们喜欢看动画片。 (Háizimen xǐhuan kàn dònghuà piàn.) — Дети любят смотреть мультфильмы.',
            '这部动画片很有创意。 (Zhè bù dònghuà piàn hěn yǒu chuàngyì.) — Этот мультфильм очень креативный.',
            '《哪吒》是中国动画的杰作。 (《Nézhā》 shì Zhōngguó dònghuà de jiézuò.) — «Не Чжа» — шедевр китайской анимации.'
        ]
    },
    19: {
        glyph: '戏剧',
        pinyin: 'xìjù',
        translation: 'пьеса / театральное представление',
        classifier: '部',
        examples: [
            '这部戏剧改编自小说。 (Zhè bù xìjù gǎibiàn zì xiǎoshuō.) — Эта пьеса адаптирована по роману.',
            '莎士比亚的戏剧是经典。 (Shāshìbǐyǎ de xìjù shì jīngdiǎn.) — Пьесы Шекспира — классика.',
            '今晚剧院上演新戏剧。 (Jīnwǎn jùyuàn shàngyǎn xīn xìjù.) — Сегодня вечером в театре премьера новой пьесы.'
        ]
    },
    20: {
        glyph: '歌剧',
        pinyin: 'gējù',
        translation: 'опера',
        classifier: '部',
        examples: [
            '《图兰朵》是普契尼的著名歌剧。 (《Túlánduǒ》 shì Pǔqīní de zhùmíng gējù.) — «Турандот» — знаменитая опера Пуччини.',
            '这部歌剧用意大利语演唱。 (Zhè bù gējù yòng Yìdàlì yǔ yǎnchàng.) — Эта опера исполняется на итальянском языке.',
            '歌剧结合了音乐、戏剧和美术。 (Gējù jiéhé le yīnyuè, xìjù hé měishù.) — Опера объединяет музыку, театр и изобразительное искусство.'
        ]
    },

    // === АРХИТЕКТУРА И ПРОЧЕЕ ===
    21: {
        glyph: '建筑',
        pinyin: 'jiànzhù',
        translation: 'архитектурное сооружение',
        classifier: '座',
        examples: [
            '这座建筑很有设计感。 (Zhè zuò jiànzhù hěn yǒu shèjì gǎn.) — Это здание очень дизайнерское.',
            '故宫是中国古代建筑的代表。 (Gùgōng shì Zhōngguó gǔdài jiànzhù de dàibiǎo.) — Запретный город — образец древнекитайской архитектуры.',
            '现代建筑注重环保。 (Xiàndài jiànzhù zhùzhòng huánbǎo.) — Современная архитектура делает упор на экологичность.'
        ]
    },
    22: {
        glyph: '摄影',
        pinyin: 'shèyǐng',
        translation: 'фотография (как произведение)',
        classifier: '张',
        examples: [
            '这张摄影作品很震撼。 (Zhè zhāng shèyǐng zuòpǐn hěn zhènhàn.) — Это фотографическое произведение очень впечатляет.',
            '他拍了一张获奖的摄影。 (Tā pāi le yī zhāng huòjiǎng de shèyǐng.) — Он сделал снимок, получивший награду.',
            '黑白摄影很有艺术感。 (Hēibái shèyǐng hěn yǒu yìshù gǎn.) — Чёрно-белая фотография очень художественна.'
        ]
    },
    23: {
        glyph: '书法',
        pinyin: 'shūfǎ',
        translation: 'калиграфия',
        classifier: '幅',
        examples: [
            '这幅书法是王羲之的作品。 (Zhè fú shūfǎ shì Wáng Xīzhī de zuòpǐn.) — Эта каллиграфия — работа Ван Си-чжи.',
            '中国书法是独特的艺术形式。 (Zhōngguó shūfǎ shì dútè de yìshù xíngshì.) — Китайская каллиграфия — уникальный вид искусства.',
            '他练习书法十年了。 (Tā liànxí shūfǎ shí nián le.) — Он занимается каллиграфией уже десять лет.'
        ]
    },
    24: {
        glyph: '陶瓷',
        pinyin: 'táocí',
        translation: 'керамика (как искусство)',
        classifier: '件',
        examples: [
            '这件陶瓷是明代的。 (Zhè jiàn táocí shì Míng dài de.) — Эта керамика династии Мин.',
            '景德镇以陶瓷闻名。 (Jǐngdézhèn yǐ táocí wénmíng.) — Цзиндэчжэнь славится керамикой.',
            '陶瓷艺术结合了实用与美观。 (Táocí yìshù jiéhé le shíyòng yǔ měiguān.) — Керамика сочетает практичность и красоту.'
        ]
    },
    25: {
        glyph: '文物',
        pinyin: 'wénwù',
        translation: 'культурное наследие / артефакт',
        classifier: '件',
        examples: [
            '博物馆收藏了很多文物。 (Bówùguǎn shōucáng le hěn duō wénwù.) — Музей хранит множество артефактов.',
            '这件文物有三千多年历史。 (Zhè jiàn wénwù yǒu sān qiān duō nián lìshǐ.) — Этому артефакту более трёх тысяч лет.',
            '保护文物是每个人的责任。 (Bǎohù wénwù shì měi gè rén de zérèn.) — Защита культурного наследия — обязанность каждого.'
        ]
    }
};

const nounsCulturalItems: { [key: number]: DictItem } = {
    // === ПЕЧАТНАЯ ПРОДУКЦИЯ ===
    1: {
        glyph: '书',
        pinyin: 'shū',
        translation: 'книга',
        classifier: '本',
        examples: [
            '我在读一本小说。 (Wǒ zài dú yī běn xiǎoshuō.) — Я читаю роман.',
            '这本书很有名。 (Zhè běn shū hěn yǒumíng.) — Эта книга очень известна.',
            '图书馆里有很多书。 (Túshūguǎn lǐ yǒu hěn duō shū.) — В библиотеке много книг.'
        ]
    },
    2: {
        glyph: '杂志',
        pinyin: 'zázhì',
        translation: 'журнал',
        classifier: '本',
        examples: [
            '她订阅了一本时尚杂志。 (Tā dìngyuè le yī běn shíshàng zázhì.) — Она подписалась на журнал мод.',
            '这本杂志每月出版一次。 (Zhè běn zázhì měi yuè chūbǎn yī cì.) — Этот журнал выходит раз в месяц.',
            '杂志上有最新科技资讯。 (Zázhì shàng yǒu zuìxīn kējì zīxùn.) — В журнале самые свежие технологии.'
        ]
    },
    3: {
        glyph: '报纸',
        pinyin: 'bàozhǐ',
        translation: 'газета',
        classifier: '张',
        examples: [
            '他每天早上看报纸。 (Tā měitiān zǎoshang kàn bàozhǐ.) — Он читает газету каждое утро.',
            '这张报纸是今天的。 (Zhè zhāng bàozhǐ shì jīntiān de.) — Эта газета сегодняшняя.',
            '报纸报道了国际新闻。 (Bàozhǐ bàodào le guójì xīnwén.) — Газета опубликовала международные новости.'
        ]
    },
    4: {
        glyph: '报纸',
        pinyin: 'xuānchuán dān',
        translation: 'листовка',
        classifier: '张',
        examples: [
            '街上有人发宣传单。 (Jiē shàng yǒu rén fā xuānchuán dān.) — На улице раздают листовки.',
            '这张宣传单介绍新电影。 (Zhè zhāng xuānchuán dān jièshào xīn diànyǐng.) — Эта листовка рекламирует новый фильм.',
            '不要乱扔宣传单。 (Búyào luàn rēng xuānchuán dān.) — Не бросайте листовки где попало.'
        ]
    },
    5: {
        glyph: '海报',
        pinyin: 'hǎibào',
        translation: 'афиша / плакат',
        classifier: '张',
        examples: [
            '电影院门口有电影海报。 (Diànyǐng yuàn ménkǒu yǒu diànyǐng hǎibào.) — У кинотеатра афиши фильмов.',
            '这张海报设计得很漂亮。 (Zhè zhāng hǎibào shèjì de hěn piàoliang.) — Эта афиша очень красиво оформлена.',
            '墙上贴着音乐会的海报。 (Qiáng shàng tiē zhe yīnyuè huì de hǎibào.) — На стене афиша концерта.'
        ]
    },

    // === БИЛЕТЫ И ДОКУМЕНТЫ ИСКУССТВА ===
    6: {
        glyph: '票',
        pinyin: 'piào',
        translation: 'билет',
        classifier: '张',
        examples: [
            '我买了一张电影票。 (Wǒ mǎi le yī zhāng diànyǐng piào.) — Я купил билет в кино.',
            '这张票是明天的。 (Zhè zhāng piào shì míngtiān de.) — Этот билет на завтра.',
            '请保管好你的票。 (Qǐng bǎoguǎn hǎo nǐ de piào.) — Пожалуйста, сохраните свой билет.'
        ]
    },
    7: {
        glyph: '入场券',
        pinyin: 'rùchǎng quàn',
        translation: 'входной билет',
        classifier: '张',
        examples: [
            '博物馆的入场券是免费的。 (Bówùguǎn de rùchǎng quàn shì miǎnfèi de.) — Вход в музей бесплатный.',
            '这张入场券可以参观三天。 (Zhè zhāng rùchǎng quàn kěyǐ cānguān sān tiān.) — Этим билетом можно пользоваться три дня.',
            '请出示你的入场券。 (Qǐng chūshì nǐ de rùchǎng quàn.) — Пожалуйста, предъявите входной билет.'
        ]
    },
    8: {
        glyph: '邀请函',
        pinyin: 'yāoqǐng hán',
        translation: 'пригласительное письмо',
        classifier: '封',
        examples: [
            '我收到了一封婚礼邀请函。 (Wǒ shōu dào le yī fēng hūnlǐ yāoqǐng hán.) — Я получил приглашение на свадьбу.',
            '这封邀请函很正式。 (Zhè fēng yāoqǐng hán hěn zhèngshì.) — Это приглашение очень официальное.',
            '请在邀请函上写明是否参加。 (Qǐng zài yāoqǐng hán shàng xiě míng shìfǒu cānjiā.) — Пожалуйста, укажите в приглашении, будете ли вы участвовать.'
        ]
    },
    9: {
        glyph: '节目单',
        pinyin: 'jiémù dān',
        translation: 'афиша (список выступлений)',
        classifier: '张',
        examples: [
            '音乐会的节目单上有十首曲子。 (Yīnyuè huì de jiémù dān shàng yǒu shí shǒu qǔzi.) — В программе концерта десять музыкальных произведений.',
            '请看看节目单。 (Qǐng kàn kàn jiémù dān.) — Посмотрите, пожалуйста, программу.',
            '这张节目单是今晚的。 (Zhè zhāng jiémù dān shì jīnwǎn de.) — Эта программа — на сегодняшний вечер.'
        ]
    },
    10: {
        glyph: '证书',
        pinyin: 'zhèngshū',
        translation: 'сертификат / диплом',
        classifier: '张',
        examples: [
            '他获得了语言证书。 (Tā huòdé le yǔyán zhèngshū.) — Он получил языковой сертификат.',
            '这张证书证明他的能力。 (Zhè zhāng zhèngshū zhèngmíng tā de nénglì.) — Этот сертификат подтверждает его компетенцию.',
            '毕业时学校发证书。 (Bìyè shí xuéxiào fā zhèngshū.) — При выпуске школа выдаёт дипломы.'
        ]
    },

    // === КОЛЛЕКЦИОННЫЕ И ЦЕРЕМОНИАЛЬНЫЕ ПРЕДМЕТЫ ===
    11: {
        glyph: '奖杯',
        pinyin: 'jiǎng bēi',
        translation: 'кубок (приз)',
        classifier: '个',
        examples: [
            '他赢得了世界杯奖杯。 (Tā yíngdé le shìjiè bēi jiǎng bēi.) — Он завоевал кубок чемпиона мира.',
            '这个奖杯是金的。 (Zhège jiǎng bēi shì jīn de.) — Этот кубок золотой.',
            '奖杯放在客厅展示。 (Jiǎng bēi fàng zài kètīng zhǎnshì.) — Кубок выставлен в гостиной.'
        ]
    },
    12: {
        glyph: '奖牌',
        pinyin: 'jiǎng pái',
        translation: 'медаль',
        classifier: '枚',
        examples: [
            '他在奥运会上获得金牌。 (Tā zài Àoyùnhuì shàng huòdé jīnpái.) — Он завоевал золотую медаль на Олимпиаде.',
            '这枚奖牌是银的。 (Zhè méi jiǎng pái shì yín de.) — Эта медаль — серебряная.',
            '奖牌代表荣誉。 (Jiǎng pái dàibiǎo róngyù.) — Медаль символизирует честь.'
        ]
    },
    13: {
        glyph: '奖状',
        pinyin: 'jiǎng zhuàng',
        translation: 'грамота / почётная грамота',
        classifier: '张',
        examples: [
            '学校给他发了奖状。 (Xuéxiào gěi tā fā le jiǎng zhuàng.) — Школа вручила ему грамоту.',
            '这张奖状挂在墙上。 (Zhè zhāng jiǎng zhuàng guà zài qiáng shàng.) — Эта грамота висит на стене.',
            '奖状是对努力的肯定。 (Jiǎng zhuàng shì duì nǔlì de kěndìng.) — Грамота — признание усилий.'
        ]
    },
    14: {
        glyph: '纪念品',
        pinyin: 'jìniànpǐn',
        translation: 'сувенир',
        classifier: '个',
        examples: [
            '我在北京买了一个纪念品。 (Wǒ zài Běijīng mǎi le yī gè jìniànpǐn.) — Я купил сувенир в Пекине.',
            '这个纪念品是长城模型。 (Zhège jìniànpǐn shì Chángchéng móxíng.) — Этот сувенир — макет Великой стены.',
            '纪念品帮助回忆旅行。 (Jìniànpǐn bāngzhù huíyì lǚxíng.) — Сувениры помогают вспоминать путешествия.'
        ]
    },
    15: {
        glyph: '古董',
        pinyin: 'gǔdǒng',
        translation: 'антиквариат',
        classifier: '件',
        examples: [
            '这件古董有三百年历史。 (Zhè jiàn gǔdǒng yǒu sān bǎi nián lìshǐ.) — Этому антиквариату триста лет.',
            '他收藏了很多古董。 (Tā shōucáng le hěn duō gǔdǒng.) — Он коллекционирует антиквариат.',
            '古董店在老城区。 (Gǔdǒng diàn zài lǎo chéngqū.) — Антикварный магазин в старом районе.'
        ]
    },

    // === ОДЕЖДА И РЕКВИЗИТЫ ===
    16: {
        glyph: '戏服',
        pinyin: 'xìfú',
        translation: 'театральный костюм',
        classifier: '套',
        examples: [
            '演员穿上了戏服。 (Yǎnyuán chuān shàng le xìfú.) — Актёры надели костюмы.',
            '这套戏服是唐代风格。 (Zhè tào xìfú shì Táng dài fēnggé.) — Этот костюм в стиле династии Тан.',
            '戏服要符合历史背景。 (Xìfú yào fúhé lìshǐ bèijǐng.) — Костюмы должны соответствовать историческому контексту.'
        ]
    },
    17: {
        glyph: '民族服装',
        pinyin: 'mínzú fúzhuāng',
        translation: 'национальный костюм',
        classifier: '套',
        examples: [
            '她在节日穿民族服装。 (Tā zài jiérì chuān mínzú fúzhuāng.) — Она надевает национальный костюм на праздники.',
            '这套民族服装很华丽。 (Zhè tào mínzú fúzhuāng hěn huálì.) — Этот национальный костюм очень роскошный.',
            '中国有56个民族，各有服装。 (Zhōngguó yǒu 56 gè mínzú, gè yǒu fúzhuāng.) — В Китае 56 национальностей, у каждой — свой костюм.'
        ]
    },
    18: {
        glyph: '面具',
        pinyin: 'miànjù',
        translation: 'маска',
        classifier: '个',
        examples: [
            '川剧变脸用特殊面具。 (Chuānjù biànliǎn yòng tèshū miànjù.) — В сичуаньской опере для смены лиц используют особые маски.',
            '这个面具是木雕的。 (Zhège miànjù shì mù diāo de.) — Эта маска вырезана из дерева.',
            '万圣节人们戴面具。 (Wànhènjié rénmen dài miànjù.) — На Хэллоуин люди носят маски.'
        ]
    },
    19: {
        glyph: '道具',
        pinyin: 'dàojù',
        translation: 'реквизит (театральный/кино)',
        classifier: '件',
        examples: [
            '舞台上有很多道具。 (Wǔtái shàng yǒu hěn duō dàojù.) — На сцене много реквизита.',
            '这把剑是电影道具。 (Zhè bǎ jiàn shì diànyǐng dàojù.) — Этот меч — киношный реквизит.',
            '道具要逼真但安全。 (Dàojù yào bīzhēn dàn ānquán.) — Реквизит должен быть реалистичным, но безопасным.'
        ]
    },
    20: {
        glyph: '剧本',
        pinyin: 'jùběn',
        translation: 'сценарий (как физический объект)',
        classifier: '本',
        examples: [
            '导演手里拿着剧本。 (Dǎoyǎn shǒu lǐ ná zhe jùběn.) — Режиссёр держит в руках сценарий.',
            '这本剧本有很多修改痕迹。 (Zhè běn jùběn yǒu hěn duō xiūgǎi hénjì.) — В этом сценарии много правок.',
            '演员要熟读剧本。 (Yǎnyuán yào shú dú jùběn.) — Актёры должны досконально знать сценарий.'
        ]
    },

    // === РЕЛИКВИИ И СВЯТЫНИ ===
    21: {
        glyph: '文物',
        pinyin: 'wénwù',
        translation: 'культурное наследие (артефакт)',
        classifier: '件',
        examples: [
            '博物馆展出珍贵文物。 (Bówùguǎn zhǎnchū zhēnguì wénwù.) — Музей демонстрирует ценные артефакты.',
            '这件文物是国宝。 (Zhè jiàn wénwù shì guóbǎo.) — Этот артефакт — национальное сокровище.',
            '文物不能买卖。 (Wénwù bù néng mǎimài.) — Артефакты нельзя продавать.'
        ]
    },
    22: {
        glyph: '古籍',
        pinyin: 'gǔjí',
        translation: 'древняя книга / манускрипт',
        classifier: '本',
        examples: [
            '图书馆收藏了宋版古籍。 (Túshūguǎn shōucáng le Sòng bǎn gǔjí.) — Библиотека хранит книги издания династии Сун.',
            '这本古籍有八百年历史。 (Zhè běn gǔjí yǒu bā bǎi nián lìshǐ.) — Этой книге восемьсот лет.',
            '古籍需要特殊保护。 (Gǔjí xūyào tèshū bǎohù.) — Древние книги требуют особой охраны.'
        ]
    },
    23: {
        glyph: '碑文',
        pinyin: 'bēiwén',
        translation: 'надпись на стеле',
        classifier: '篇',
        examples: [
            '这篇碑文记载了历史事件。 (Zhè piān bēiwén jìzǎi le lìshǐ shìjiàn.) — Эта надпись фиксирует историческое событие.',
            '学者在研究碑文。 (Xuézhě zài yánjiū bēiwén.) — Учёные изучают надписи на стелах.',
            '碑文是重要的史料。 (Bēiwén shì zhòngyào de shǐliào.) — Надписи — важный исторический источник.'
        ]
    },
    24: {
        glyph: '印章',
        pinyin: 'yìnzhāng',
        translation: 'печать / клише',
        classifier: '个',
        examples: [
            '古代用印章代替签名。 (Gǔdài yòng yìnzhāng dàitì qiānmíng.) — В древности печать заменяла подпись.',
            '这个印章是玉制的。 (Zhège yìnzhāng shì yù zhì de.) — Эта печать сделана из нефрита.',
            '官方文件需要盖印章。 (Guānfāng wénjiàn xūyào gài yìnzhāng.) — Официальные документы должны быть скреплены печатью.'
        ]
    },
    25: {
        glyph: '手稿',
        pinyin: 'shǒugǎo',
        translation: 'рукопись',
        classifier: '份',
        examples: [
            '作家保存了自己的手稿。 (Zuòjiā bǎocún le zìjǐ de shǒugǎo.) — Писатель сохранил свою рукопись.',
            '这份手稿从未发表。 (Zhè fèn shǒugǎo cóng wèi fābiǎo.) — Эта рукопись никогда не публиковалась.',
            '手稿比印刷版更珍贵。 (Shǒugǎo bǐ yìnshuā bǎn gèng zhēnguì.) — Рукопись ценнее печатного издания.'
        ]
    }
};

const nounsFoodGeneral: { [key: number]: DictItem } = {
    // === ОСНОВНЫЕ ПОНЯТИЯ ===
    1: {
        glyph: '食物',
        pinyin: 'shíwù',
        translation: 'еда / пища',
        classifier: '种',
        examples: [
            '人类需要食物生存。 (Rénlèi xūyào shíwù shēngcún.) — Людям нужна еда для выживания.',
            '这种食物很健康。 (Zhè zhǒng shíwù hěn jiànkāng.) — Эта еда очень полезна.',
            '不要浪费食物。 (Búyào làngfèi shíwù.) — Не трать еду впустую.'
        ]
    },
    2: {
        glyph: '饭菜',
        pinyin: 'fàncài',
        translation: 'приготовленная еда (рис + блюда)',
        classifier: '份',
        examples: [
            '我吃了一份饭菜。 (Wǒ chī le yī fèn fàncài.) — Я съел порцию еды.',
            '食堂的饭菜很便宜。 (Shítáng de fàncài hěn piányi.) — Еда в столовой очень дешёвая.',
            '今天的饭菜很好吃。 (Jīntiān de fàncài hěn hǎochī.) — Сегодняшняя еда очень вкусная.'
        ]
    },
    3: {
        glyph: '餐',
        pinyin: 'cān',
        translation: 'приём пищи',
        classifier: '顿',
        examples: [
            '我们一天吃三餐。 (Wǒmen yī tiān chī sān dùn cān.) — Мы едим три раза в день.',
            '这顿餐很丰盛。 (Zhè dùn cān hěn fēngshèng.) — Эта трапеза очень обильная.',
            '早餐很重要。 (Zǎocān hěn zhòngyào.) — Завтрак очень важен.'
        ]
    },
    4: {
        glyph: '粮食',
        pinyin: 'liángshí',
        translation: 'продовольствие / зерно',
        classifier: '种',
        examples: [
            '中国是粮食生产大国。 (Zhōngguó shì liángshí shēngchǎn dàguó.) — Китай — крупнейший производитель продовольствия.',
            '这种粮食适合做面包。 (Zhè zhǒng liángshí shìhé zuò miànbāo.) — Из этого зерна хорошо печь хлеб.',
            '粮食安全关系国计民生。 (Liángshí ānquán guānxì guójì mínshēng.) — Продовольственная безопасность затрагивает судьбу страны и народ.'
        ]
    },
    5: {
        glyph: '食材',
        pinyin: 'shícái',
        translation: 'ингредиенты / продукты для готовки',
        classifier: '种',
        examples: [
            '做菜需要新鲜食材。 (Zuò cài xūyào xīnxiān shícái.) — Для готовки нужны свежие ингредиенты.',
            '这种食材很难买到。 (Zhè zhǒng shícái hěn nán mǎi dào.) — Эти продукты трудно найти.',
            '厨师挑选优质食材。 (Chúshī tiāoxuǎn yōuzhì shícái.) — Повар выбирает качественные ингредиенты.'
        ]
    },

    // === ОСНОВНЫЕ ПРОДУКТЫ ===
    6: {
        glyph: '米',
        pinyin: 'mǐ',
        translation: 'рис (зерно)',
        classifier: '粒',
        examples: [
            '一粒米也不能浪费。 (Yī lì mǐ yě bù néng làngfèi.) — Ни одного зёрнышка риса нельзя тратить впустую.',
            '南方人主要吃米。 (Nánfāng rén zhǔyào chī mǐ.) — На юге в основном едят рис.',
            '米可以煮饭或做粥。 (Mǐ kěyǐ zhǔ fàn huò zuò zhōu.) — Из риса можно варить и рис, и кашу.'
        ]
    },
    7: {
        glyph: '面',
        pinyin: 'miàn',
        translation: 'мука / лапша (в зависимости от контекста)',
        classifier: '种',
        examples: [
            '这种面是小麦做的。 (Zhè zhǒng miàn shì xiǎomài zuò de.) — Эта мука сделана из пшеницы.',
            '他喜欢吃面。 (Tā xǐhuan chī miàn.) — Он любит есть лапшу.',
            '面食在北方很流行。 (Miànshí zài běifāng hěn liúxíng.) — Блюда из теста очень популярны на севере.'
        ]
    },
    8: {
        glyph: '肉',
        pinyin: 'ròu',
        translation: 'мясо',
        classifier: '种',
        examples: [
            '这种肉很嫩。 (Zhè zhǒng ròu hěn nèn.) — Это мясо очень нежное.',
            '猪肉是中国最常见的肉。 (Zhūròu shì Zhōngguó zuì chángjiàn de ròu.) — Свинина — самое распространённое мясо в Китае.',
            '清真餐厅不卖猪肉。 (Qīngzhēn cāntīng bù mài zhūròu.) — В халяльных ресторанах не продают свинину.'
        ]
    },
    9: {
        glyph: '牛肉',
        pinyin: 'niúròu',
        translation: 'говядина',
        classifier: '种',
        examples: [
            '这道菜用牛肉。 (Zhè dào cài yòng niúròu.) — Это блюдо готовится из говядины.',
            '牛肉富含蛋白质。 (Niúròu fùhán dànbáizhì.) — Говядина богата белком.',
            '我点了一份牛肉面。 (Wǒ diǎn le yī fèn niúròu miàn.) — Я заказал лапшу с говядиной.'
        ]
    },
    10: {
        glyph: '鸡肉',
        pinyin: 'jīròu',
        translation: 'куриное мясо',
        classifier: '种',
        examples: [
            '鸡肉比猪肉更清淡。 (Jīròu bǐ zhūròu gèng qīngdàn.) — Куриное мясо менее жирное, чем свинина.',
            '鸡汤很滋补。 (Jītāng hěn zībǔ.) — Куриный суп очень питателен.',
            '炸鸡用鸡肉。 (Zhá jī yòng jīròu.) — Жареная курица делается из куриного мяса.'
        ]
    },

    // === ОВОЩИ ===
    11: {
        glyph: '蔬菜',
        pinyin: 'shūcài',
        translation: 'овощи',
        classifier: '种',
        examples: [
            '每天要吃蔬菜。 (Měitiān yào chī shūcài.) — Нужно есть овощи каждый день.',
            '这种蔬菜是有机的。 (Zhè zhǒng shūcài shì yǒujī de.) — Эти овощи органические.',
            '蔬菜提供维生素。 (Shūcài tígōng wéishēngsù.) — Овощи дают витамины.'
        ]
    },
    12: {
        glyph: '白菜',
        pinyin: 'báicài',
        translation: 'китайская капуста',
        classifier: '棵',
        examples: [
            '一棵白菜可以吃好几天。 (Yī kē báicài kěyǐ chī hǎo jǐ tiān.) — Одной капусты хватит на несколько дней.',
            '白菜炖豆腐很好吃。 (Báicài dùn dòufu hěn hǎochī.) — Тушёная капуста с тофу очень вкусна.',
            '冬天白菜很便宜。 (Dōngtiān báicài hěn piányi.) — Зимой капуста очень дешёвая.'
        ]
    },
    13: {
        glyph: '土豆',
        pinyin: 'tǔdòu',
        translation: 'картофель',
        classifier: '个',
        examples: [
            '一个土豆可以做很多菜。 (Yī gè tǔdòu kěyǐ zuò hěn duō cài.) — Из одного картофеля можно приготовить много блюд.',
            '土豆泥很受欢迎。 (Tǔdòu ní hěn shòu huānyíng.) — Пюре из картофеля очень популярно.',
            '土豆富含淀粉。 (Tǔdòu fùhán diànfěn.) — Картофель богат крахмалом.'
        ]
    },
    14: {
        glyph: '西红柿',
        pinyin: 'xīhóngshì',
        translation: 'помидор',
        classifier: '个',
        examples: [
            '这个西红柿很红。 (Zhè gè xīhóngshì hěn hóng.) — Этот помидор очень красный.',
            '西红柿炒鸡蛋是家常菜。 (Xīhóngshì chǎo jīdàn shì jiācháng cài.) — Яичница с помидорами — домашнее блюдо.',
            '西红柿含有维生素C。 (Xīhóngshì hán yǒu wéishēngsù C.) — Помидоры содержат витамин C.'
        ]
    },
    15: {
        glyph: '黄瓜',
        pinyin: 'huángguā',
        translation: 'огурец',
        classifier: '根',
        examples: [
            '一根黄瓜很清爽。 (Yī gēn huángguā hěn qīngshuǎng.) — Один огурец очень освежает.',
            '黄瓜可以生吃或凉拌。 (Huángguā kěyǐ shēng chī huò liángbàn.) — Огурцы можно есть сырыми или делать салат.',
            '黄瓜面膜对皮肤好。 (Huángguā miànmó duì pífū hǎo.) — Маска из огурца полезна для кожи.'
        ]
    },

    // === ФРУКТЫ ===
    16: {
        glyph: '水果',
        pinyin: 'shuǐguǒ',
        translation: 'фрукты',
        classifier: '种',
        examples: [
            '每天吃水果对健康有益。 (Měitiān chī shuǐguǒ duì jiànkāng yǒuyì.) — Есть фрукты каждый день полезно для здоровья.',
            '这种水果很甜。 (Zhè zhǒng shuǐguǒ hěn tián.) — Эти фрукты очень сладкие.',
            '水果富含纤维和维生素。 (Shuǐguǒ fùhán xiānwéi hé wéishēngsù.) — Фрукты богаты клетчаткой и витаминами.'
        ]
    },
    17: {
        glyph: '苹果',
        pinyin: 'píngguǒ',
        translation: 'яблоко',
        classifier: '个',
        examples: [
            '一个苹果一天，医生远离我。 (Yī gè píngguǒ yī tiān, yīshēng yuǎnlí wǒ.) — Яблоко в день — и доктор не нужен.',
            '这个苹果很脆。 (Zhè gè píngguǒ hěn cuì.) — Это яблоко очень хрустящее.',
            '红苹果比青苹果甜。 (Hóng píngguǒ bǐ qīng píngguǒ tián.) — Красные яблоки слаще зелёных.'
        ]
    },
    18: {
        glyph: '香蕉',
        pinyin: 'xiāngjiāo',
        translation: 'банан',
        classifier: '根',
        examples: [
            '一根香蕉是很好的零食。 (Yī gēn xiāngjiāo shì hěn hǎo de língshí.) — Один банан — отличная закуска.',
            '香蕉富含钾。 (Xiāngjiāo fùhán jiǎ.) — Бананы богаты калием.',
            '猴子喜欢吃香蕉。 (Hóuzi xǐhuan chī xiāngjiāo.) — Обезьяны любят бананы.'
        ]
    },
    19: {
        glyph: '橙子',
        pinyin: 'chéngzi',
        translation: 'апельсин',
        classifier: '个',
        examples: [
            '这个橙子很甜。 (Zhè gè chéngzi hěn tián.) — Этот апельсин очень сладкий.',
            '橙子汁富含维生素C。 (Chéngzi zhī fùhán wéishēngsù C.) — Апельсиновый сок богат витамином C.',
            '冬天多吃橙子可以预防感冒。 (Dōngtiān duō chī chéngzi kěyǐ yùfáng gǎnmào.) — Зимой апельсины помогают не заболеть.'
        ]
    },
    20: {
        glyph: '葡萄',
        pinyin: 'pútáo',
        translation: 'виноград',
        classifier: '串',
        examples: [
            '一串葡萄很诱人。 (Yī chuàn pútáo hěn yòurén.) — Гроздь винограда очень соблазнительна.',
            '葡萄可以酿酒。 (Pútáo kěyǐ niàng jiǔ.) — Из винограда делают вино.',
            '紫葡萄比绿葡萄甜。 (Zǐ pútáo bǐ lǜ pútáo tián.) — Фиолетовый виноград слаще зелёного.'
        ]
    },

    // === МОЛОЧНЫЕ И ПРОЧИЕ ===
    21: {
        glyph: '鸡蛋',
        pinyin: 'jīdàn',
        translation: 'куриное яйцо',
        classifier: '个',
        examples: [
            '一个鸡蛋有丰富的蛋白质。 (Yī gè jīdàn yǒu fēngfù de dànbáizhì.) — Одно яйцо содержит много белка.',
            '煎鸡蛋很简单。 (Jiān jīdàn hěn jiǎndān.) — Жареные яйца готовятся легко.',
            '鸡蛋可以做蛋糕。 (Jīdàn kěyǐ zuò dàngāo.) — Из яиц можно испечь торт.'
        ]
    },
    22: {
        glyph: '牛奶',
        pinyin: 'niúnǎi',
        translation: 'молоко',
        classifier: '杯',
        examples: [
            '一杯牛奶有助于睡眠。 (Yī bēi niúnǎi yǒuzhù yú shuìmián.) — Стакан молока помогает заснуть.',
            '孩子每天要喝牛奶。 (Háizi měitiān yào hē niúnǎi.) — Дети должны пить молоко каждый день.',
            '牛奶富含钙。 (Niúnǎi fùhán gài.) — Молоко богато кальцием.'
        ]
    },
    23: {
        glyph: '豆腐',
        pinyin: 'dòufu',
        translation: 'тофу',
        classifier: '块',
        examples: [
            '一块豆腐可以做很多菜。 (Yī kuài dòufu kěyǐ zuò hěn duō cài.) — Из одного куска тофу можно приготовить много блюд.',
            '麻婆豆腐是四川名菜。 (Mápó dòufu shì Sìchuān míngcài.) — «Мабо тофу» — знаменитое сычуаньское блюдо.',
            '豆腐是素食者的重要蛋白来源。 (Dòufu shì sùshí zhě de zhòngyào dànbái láiyuán.) — Тофу — важный источник белка для вегетарианцев.'
        ]
    },
    24: {
        glyph: '米饭',
        pinyin: 'mǐfàn',
        translation: 'отварной рис',
        classifier: '碗',
        examples: [
            '一碗米饭配菜很好吃。 (Yī wǎn mǐfàn pèi cài hěn hǎochī.) — Тарелка риса с гарниром очень вкусна.',
            '他吃了两碗米饭。 (Tā chī le liǎng wǎn mǐfàn.) — Он съел две миски риса.',
            '米饭是南方的主食。 (Mǐfàn shì nánfāng de zhǔshí.) — Рис — основной продукт на юге.'
        ]
    },
    25: {
        glyph: '面包',
        pinyin: 'miànbāo',
        translation: 'хлеб',
        classifier: '个',
        examples: [
            '一个面包可以当早餐。 (Yī gè miànbāo kěyǐ dāng zǎocān.) — Один хлеб — полноценный завтрак.',
            '全麦面包更健康。 (Quán mài miànbāo gèng jiànkāng.) — Хлеб из цельнозерновой муки полезнее.',
            '法国面包很硬。 (Fǎguó miànbāo hěn yìng.) — Французский хлеб очень твёрдый.'
        ]
    }
};

const nounsDrinks: { [key: number]: DictItem } = {
    // === БЕЗАЛКОГОЛЬНЫЕ НАПИТКИ ===
    1: {
        glyph: '水',
        pinyin: 'shuǐ',
        translation: 'вода',
        classifier: '杯',
        examples: [
            '请给我一杯水。 (Qǐng gěi wǒ yī bēi shuǐ.) — Пожалуйста, дайте мне стакан воды.',
            '每天要喝八杯水。 (Měitiān yào hē bā bēi shuǐ.) — Нужно пить восемь стаканов воды в день.',
            '矿泉水对健康有益。 (Kuàngquán shuǐ duì jiànkāng yǒuyì.) — Минеральная вода полезна для здоровья.'
        ]
    },
    2: {
        glyph: '茶',
        pinyin: 'chá',
        translation: 'чай',
        classifier: '杯',
        examples: [
            '我每天早上喝一杯茶。 (Wǒ měitiān zǎoshang hē yī bēi chá.) — Я пью чашку чая каждое утро.',
            '龙井茶是中国名茶。 (Lóngjǐng chá shì Zhōngguó míngchá.) — «Лунцзин» — знаменитый китайский чай.',
            '绿茶比红茶更清淡。 (Lǜchá bǐ hóngchá gèng qīngdàn.) — Зелёный чай менее насыщенный, чем чёрный.'
        ]
    },
    3: {
        glyph: '咖啡',
        pinyin: 'kāfēi',
        translation: 'кофе',
        classifier: '杯',
        examples: [
            '早上我喝一杯咖啡。 (Zǎoshang wǒ hē yī bēi kāfēi.) — Утром я пью чашку кофе.',
            '美式咖啡很苦。 (Měishì kāfēi hěn kǔ.) — Американо очень горький.',
            '加牛奶的咖啡叫拿铁。 (Jiā niúnǎi de kāfēi jiào nálì.) — Кофе с молоком называется латте.'
        ]
    },
    4: {
        glyph: '果汁',
        pinyin: 'guǒzhī',
        translation: 'фруктовый сок',
        classifier: '杯',
        examples: [
            '这杯果汁是鲜榨的。 (Zhè bēi guǒzhī shì xiān zhà de.) — Этот сок свежевыжатый.',
            '橙汁富含维生素C。 (Chéng zhī fùhán wéishēngsù C.) — Апельсиновый сок богат витамином C.',
            '不要喝太多含糖果汁。 (Búyào hē tài duō hántáng guǒzhī.) — Не пей слишком много сока с сахаром.'
        ]
    },
    5: {
        glyph: '牛奶',
        pinyin: 'niúnǎi',
        translation: 'молоко',
        classifier: '杯',
        examples: [
            '孩子睡前喝一杯牛奶。 (Háizi shuìqián hē yī bēi niúnǎi.) — Дети пьют стакан молока перед сном.',
            '热牛奶有助于睡眠。 (Rè niúnǎi yǒuzhù yú shuìmián.) — Тёплое молоко помогает уснуть.',
            '牛奶可以加到咖啡里。 (Niúnǎi kěyǐ jiā dào kāfēi lǐ.) — Молоко можно добавить в кофе.'
        ]
    },

    // === ГАЗИРОВАННЫЕ И ПРОМЫШЛЕННЫЕ НАПИТКИ ===
    6: {
        glyph: '汽水',
        pinyin: 'qìshuǐ',
        translation: 'газировка / лимонад',
        classifier: '瓶',
        examples: [
            '夏天喝冰汽水很爽。 (Xiàtiān hē bīng qìshuǐ hěn shuǎng.) — Летом ледяная газировка очень освежает.',
            '这瓶汽水是可乐。 (Zhè píng qìshuǐ shì kělè.) — Эта бутылка газировки — кола.',
            '汽水含糖量很高。 (Qìshuǐ hán táng liàng hěn gāo.) — В газировке очень много сахара.'
        ]
    },
    7: {
        glyph: '可乐',
        pinyin: 'kělè',
        translation: 'кола',
        classifier: '罐',
        examples: [
            '我喝了一罐可乐。 (Wǒ hē le yī guàn kělè.) — Я выпил банку колы.',
            '可乐配薯条是经典组合。 (Kělè pèi shǔtiáo shì jīngdiǎn zǔhé.) — Кола с картошкой фри — классика.',
            '无糖可乐更健康。 (Wú táng kělè gèng jiànkāng.) — Кола без сахара полезнее.'
        ]
    },
    8: {
        glyph: '酸奶',
        pinyin: 'suānnǎi',
        translation: 'йогурт (питьевой)',
        classifier: '瓶',
        examples: [
            '这瓶酸奶是草莓味的。 (Zhè píng suānnǎi shì cǎoméi wèi de.) — Этот йогурт со вкусом клубники.',
            '酸奶有助于消化。 (Suānnǎi yǒuzhù yú xiāohuà.) — Йогурт улучшает пищеварение.',
            '每天喝一瓶酸奶对肠道好。 (Měitiān hē yī píng suānnǎi duì chángdào hǎo.) — Ежедневный йогурт полезен для кишечника.'
        ]
    },
    9: {
        glyph: '豆浆',
        pinyin: 'dòujiāng',
        translation: 'соевое молоко',
        classifier: '杯',
        examples: [
            '早餐喝一杯豆浆。 (Zǎocān hē yī bēi dòujiāng.) — На завтрак выпей чашку соевого молока.',
            '豆浆是素食者的好选择。 (Dòujiāng shì sùshí zhě de hǎo xuǎnzé.) — Соевое молоко — отличный выбор для веганов.',
            '热豆浆配油条是传统早餐。 (Rè dòujiāng pèi yóutiáo shì chuántǒng zǎocān.) — Горячее соевое молоко с юйтяо — традиционный завтрак.'
        ]
    },
    10: {
        glyph: '椰子水',
        pinyin: 'yēzi shuǐ',
        translation: 'кокосовая вода',
        classifier: '瓶',
        examples: [
            '这瓶椰子水很解渴。 (Zhè píng yēzi shuǐ hěn jiě kě.) — Эта кокосовая вода отлично утоляет жажду.',
            '椰子水是天然电解质饮料。 (Yēzi shuǐ shì tiānrán diànjiězhì yǐnliào.) — Кокосовая вода — натуральный напиток с электролитами.',
            '运动后喝椰子水很好。 (Yùndòng hòu hē yēzi shuǐ hěn hǎo.) — После тренировки кокосовая вода очень полезна.'
        ]
    },

    // === ГОРЯЧИЕ НАПИТКИ ===
    11: {
        glyph: '热水',
        pinyin: 'rè shuǐ',
        translation: 'горячая вода',
        classifier: '杯',
        examples: [
            '中国人喜欢喝热水。 (Zhōngguó rén xǐhuan hē rè shuǐ.) — Китайцы любят пить горячую воду.',
            '感冒时喝热水有帮助。 (Gǎnmào shí hē rè shuǐ yǒu bāngzhù.) — При простуде горячая вода помогает.',
            '餐厅免费提供热水。 (Cāntīng miǎnfèi tígōng rè shuǐ.) — В ресторанах бесплатно дают горячую воду.'
        ]
    },
    12: {
        glyph: '奶茶',
        pinyin: 'nǎichá',
        translation: 'молочный чай',
        classifier: '杯',
        examples: [
            '这杯奶茶很甜。 (Zhè bēi nǎichá hěn tián.) — Этот молочный чай очень сладкий.',
            '珍珠奶茶很受欢迎。 (Zhēnzhū nǎichá hěn shòu huānyíng.) — bubble tea очень популярен.',
            '少糖奶茶更健康。 (Shǎo táng nǎichá gèng jiànkāng.) — Молочный чай с меньшим количеством сахара полезнее.'
        ]
    },
    13: {
        glyph: '蜂蜜水',
        pinyin: 'fēngmì shuǐ',
        translation: 'вода с мёдом',
        classifier: '杯',
        examples: [
            '早上空腹喝一杯蜂蜜水。 (Zǎoshang kōngfù hē yī bēi fēngmì shuǐ.) — Утром натощак выпей стакан воды с мёдом.',
            '蜂蜜水润肠通便。 (Fēngmì shuǐ rùn cháng tōng biàn.) — Вода с мёдом улучшает перистальтику кишечника.',
            '蜂蜜水不能用热水冲。 (Fēngmì shuǐ bù néng yòng rè shuǐ chōng.) — Мёд нельзя разводить кипятком.'
        ]
    },
    14: {
        glyph: '姜茶',
        pinyin: 'jiāng chá',
        translation: 'имбирный чай',
        classifier: '杯',
        examples: [
            '冬天喝姜茶可以驱寒。 (Dōngtiān hē jiāng chá kěyǐ qū hán.) — Зимой имбирный чай согревает.',
            '感冒时喝姜茶有好处。 (Gǎnmào shí hē jiāng chá yǒu hǎochù.) — При простуде имбирный чай полезен.',
            '姜茶有点辣。 (Jiāng chá yǒudiǎn là.) — Имбирный чай немного острый.'
        ]
    },
    15: {
        glyph: '菊花茶',
        pinyin: 'júhuā chá',
        translation: 'чай из хризантемы',
        classifier: '杯',
        examples: [
            '菊花茶可以清热解毒。 (Júhuā chá kěyǐ qīng rè jiě dú.) — Чай из хризантемы охлаждает и снимает токсины.',
            '这杯菊花茶很香。 (Zhè bēi júhuā chá hěn xiāng.) — Этот чай очень ароматный.',
            '夏天适合喝菊花茶。 (Xiàtiān shìhé hē júhuā chá.) — Летом хорошо пить чай из хризантемы.'
        ]
    },

    // === АЛКОГОЛЬНЫЕ НАПИТКИ ===
    16: {
        glyph: '啤酒',
        pinyin: 'píjiǔ',
        translation: 'пиво',
        classifier: '瓶',
        examples: [
            '夏天喝冰啤酒很舒服。 (Xiàtiān hē bīng píjiǔ hěn shūfu.) — Летом ледяное пиво очень приятно.',
            '这瓶啤酒是青岛的。 (Zhè píng píjiǔ shì Qīngdǎo de.) — Это пиво «Циндао».',
            '不要酒后驾车。 (Búyào jiǔ hòu jià chē.) — Не садитесь за руль после алкоголя.'
        ]
    },
    17: {
        glyph: '葡萄酒',
        pinyin: 'pútáojiǔ',
        translation: 'вино',
        classifier: '瓶',
        examples: [
            '这瓶葡萄酒是法国的。 (Zhè píng pútáojiǔ shì Fǎguó de.) — Это вино из Франции.',
            '红葡萄酒配红肉。 (Hóng pútáojiǔ pèi hóng ròu.) — Красное вино подают к красному мясу.',
            '适量喝葡萄酒有益健康。 (Shìliàng hē pútáojiǔ yǒuyì jiànkāng.) — Умеренное употребление вина полезно для здоровья.'
        ]
    },
    18: {
        glyph: '白酒',
        pinyin: 'báijiǔ',
        translation: 'китайская водка (байцзю)',
        classifier: '瓶',
        examples: [
            '白酒是中国传统烈酒。 (Báijiǔ shì Zhōngguó chuántǒng lièjiǔ.) — Байцзю — традиционный китайский крепкий алкоголь.',
            '这瓶白酒有50度。 (Zhè píng báijiǔ yǒu 50 dù.) — Крепость этого байцзю — 50 градусов.',
            '敬酒时要喝白酒。 (Jìng jiǔ shí yào hē báijiǔ.) — При тостах пьют байцзю.'
        ]
    },
    19: {
        glyph: '黄酒',
        pinyin: 'huángjiǔ',
        translation: 'рисовое вино (хуанцзю)',
        classifier: '瓶',
        examples: [
            '黄酒常用于烹饪。 (Huángjiǔ cháng yòngyú pēngrèn.) — Хуанцзю часто используют в готовке.',
            '绍兴黄酒很有名。 (Shàoxīng huángjiǔ hěn yǒumíng.) — Шаосинское рисовое вино очень известно.',
            '冬天喝热黄酒很暖身。 (Dōngtiān hē rè huángjiǔ hěn nuǎn shēn.) — Зимой тёплое хуанцзю отлично греет.'
        ]
    },
    20: {
        glyph: '米酒',
        pinyin: 'mǐjiǔ',
        translation: 'рисовое вино (сладкое)',
        classifier: '瓶',
        examples: [
            '米酒味道很甜。 (Mǐjiǔ wèidào hěn tián.) — Рисовое вино очень сладкое.',
            '米酒可以做甜品。 (Mǐjiǔ kěyǐ zuò tiánpǐn.) — Из рисового вина делают десерты.',
            '南方人喜欢喝米酒。 (Nánfāng rén xǐhuan hē mǐjiǔ.) — На юге любят пить рисовое вино.'
        ]
    },

    // === СПЕЦИАЛЬНЫЕ И ФУНКЦИОНАЛЬНЫЕ НАПИТКИ ===
    21: {
        glyph: '运动饮料',
        pinyin: 'yùndòng yǐnliào',
        translation: 'спортивный напиток',
        classifier: '瓶',
        examples: [
            '运动后喝运动饮料补充电解质。 (Yùndòng hòu hē yùndòng yǐnliào bǔchōng diànjiězhì.) — После тренировки спортнапитки восполняют электролиты.',
            '这瓶运动饮料含钠和钾。 (Zhè píng yùndòng yǐnliào hán nà hé jiǎ.) — Этот напиток содержит натрий и калий.',
            '不要把运动饮料当水喝。 (Búyào bǎ yùndòng yǐnliào dàng shuǐ hē.) — Не пейте спортнапитки как обычную воду.'
        ]
    },
    22: {
        glyph: '能量饮料',
        pinyin: 'néngliàng yǐnliào',
        translation: 'энергетик',
        classifier: '罐',
        examples: [
            '考试前他喝了一罐能量饮料。 (Kǎoshì qián tā hē le yī guàn néngliàng yǐnliào.) — Перед экзаменом он выпил банку энергетика.',
            '能量饮料含咖啡因。 (Néngliàng yǐnliào hán kāfēiyīn.) — Энергетики содержат кофеин.',
            '不要过量饮用能量饮料。 (Búyào guòliàng yǐnyòng néngliàng yǐnliào.) — Не злоупотребляйте энергетиками.'
        ]
    },
    23: {
        glyph: '凉茶',
        pinyin: 'liáng chá',
        translation: 'охлаждающий травяной чай',
        classifier: '杯',
        examples: [
            '广东人常喝凉茶去火。 (Guǎngdōng rén cháng hē liáng chá qù huǒ.) — Жители Гуандуна пьют лианча, чтобы «снять жар».',
            '这杯凉茶很苦。 (Zhè bēi liáng chá hěn kǔ.) — Этот лианча очень горький.',
            '凉茶是传统中药饮品。 (Liáng chá shì chuántǒng zhōngyào yǐnpǐn.) — Лианча — традиционный напиток на основе китайских трав.'
        ]
    },
    24: {
        glyph: '椰奶',
        pinyin: 'yēnǎi',
        translation: 'кокосовое молоко',
        classifier: '罐',
        examples: [
            '这罐椰奶用于做咖喱。 (Zhè guàn yēnǎi yòngyú zuò gālí.) — Эта банка кокосового молока для карри.',
            '椰奶比椰子水更浓。 (Yēnǎi bǐ yēzi shuǐ gèng nóng.) — Кокосовое молоко гуще кокосовой воды.',
            '椰奶是素食烹饪的重要原料。 (Yēnǎi shì sùshí pēngrèn de zhòngyào yuánliào.) — Кокосовое молоко — важный ингредиент веганской кухни.'
        ]
    },
    25: {
        glyph: '苏打水',
        pinyin: 'sūdá shuǐ',
        translation: 'содовая вода (без сахара)',
        classifier: '瓶',
        examples: [
            '苏打水可以代替汽水。 (Sūdá shuǐ kěyǐ dàitì qìshuǐ.) — Содовую воду можно пить вместо газировки.',
            '这瓶苏打水无糖无卡路里。 (Zhè píng sūdá shuǐ wú táng wú kǎlùlǐ.) — Эта содовая вода без сахара и калорий.',
            '苏打水配柠檬很清爽。 (Sūdá shuǐ pèi níngméng hěn qīngshuǎng.) — Содовая вода с лимоном очень освежает.'
        ]
    }
};

const nounsIngredients: { [key: number]: DictItem } = {
    // === ОСНОВНЫЕ ВКУСЫ ===
    1: {
        glyph: '盐',
        pinyin: 'yán',
        translation: 'соль',
        classifier: '种',
        examples: [
            '做菜要放盐。 (Zuò cài yào fàng yán.) — В блюдо нужно класть соль.',
            '这种盐是海盐。 (Zhè zhǒng yán shì hǎiyán.) — Эта соль — морская.',
            '低钠盐更健康。 (Dī nà yán gèng jiànkāng.) — Соль с пониженным содержанием натрия полезнее.'
        ]
    },
    2: {
        glyph: '糖',
        pinyin: 'táng',
        translation: 'сахар',
        classifier: '种',
        examples: [
            '咖啡里加糖。 (Kāfēi lǐ jiā táng.) — В кофе добавляют сахар.',
            '白砂糖是最常见的糖。 (Bái shātáng shì zuì chángjiàn de táng.) — Сахар-песок — самый распространённый.',
            '少吃糖对牙齿好。 (Shǎo chī táng duì yáchǐ hǎo.) — Меньше сахара — лучше для зубов.'
        ]
    },
    3: {
        glyph: '醋',
        pinyin: 'cù',
        translation: 'уксус',
        classifier: '瓶',
        examples: [
            '饺子蘸醋吃。 (Jiǎozi zhàn cù chī.) — Пельмени едят, макая в уксус.',
            '这瓶醋是米醋。 (Zhè píng cù shì mǐ cù.) — Этот уксус — рисовый.',
            '醋可以去腥。 (Cù kěyǐ qù xīng.) — Уксус устраняет неприятный запах.'
        ]
    },
    4: {
        glyph: '酱油',
        pinyin: 'jiàngyóu',
        translation: 'соевый соус',
        classifier: '瓶',
        examples: [
            '炒菜放酱油调味。 (Chǎo cài fàng jiàngyóu tiáowèi.) — В жаркое добавляют соевый соус для вкуса.',
            '这瓶酱油是生抽。 (Zhè píng jiàngyóu shì shēng chōu.) — Этот соус — «шэнчоу» (светлый).',
            '酱油富含氨基酸。 (Jiàngyóu fùhán ànjī suān.) — Соевый соус богат аминокислотами.'
        ]
    },
    5: {
        glyph: '味精',
        pinyin: 'wèijīng',
        translation: 'глутамат натрия (усилитель вкуса)',
        classifier: '包',
        examples: [
            '有些厨师用味精提鲜。 (Yǒuxiē chúshī yòng wèijīng tí xiān.) — Некоторые повара используют глутамат для усиления вкуса.',
            '这包味精很小。 (Zhè bāo wèijīng hěn xiǎo.) — Этот пакетик глутамата очень маленький.',
            '天然食材不需要味精。 (Tiānrán shícái bú xūyào wèijīng.) — Натуральные продукты не нуждаются в усилителях вкуса.'
        ]
    },

    // === МАСЛА И ЖИРЫ ===
    6: {
        glyph: '油',
        pinyin: 'yóu',
        translation: 'масло / растительное масло',
        classifier: '瓶',
        examples: [
            '炒菜要用油。 (Chǎo cài yào yòng yóu.) — Для жарки нужно масло.',
            '这瓶油是花生油。 (Zhè píng yóu shì huāshēng yóu.) — Это масло — арахисовое.',
            '橄榄油比较健康。 (Gǎnlǎn yóu bǐjiào jiànkāng.) — Оливковое масло полезнее.'
        ]
    },
    7: {
        glyph: '花生油',
        pinyin: 'huāshēng yóu',
        translation: 'арахисовое масло',
        classifier: '瓶',
        examples: [
            '花生油适合高温烹饪。 (Huāshēng yóu shìhé gāo wēn pēngrèn.) — Арахисовое масло подходит для жарки при высокой температуре.',
            '这瓶花生油很香。 (Zhè píng huāshēng yóu hěn xiāng.) — Это арахисовое масло очень ароматное.',
            '南方人常用花生油。 (Nánfāng rén cháng yòng huāshēng yóu.) — На юге часто используют арахисовое масло.'
        ]
    },
    8: {
        glyph: '橄榄油',
        pinyin: 'gǎnlǎn yóu',
        translation: 'оливковое масло',
        classifier: '瓶',
        examples: [
            '橄榄油适合凉拌。 (Gǎnlǎn yóu shìhé liángbàn.) — Оливковое масло подходит для салатов.',
            '特级初榨橄榄油最健康。 (Tèjí chūzhà gǎnlǎn yóu zuì jiànkāng.) — Масло экстра-класса наиболее полезно.',
            '这瓶橄榄油来自意大利。 (Zhè píng gǎnlǎn yóu láizì Yìdàlì.) — Это оливковое масло из Италии.'
        ]
    },
    9: {
        glyph: '芝麻油',
        pinyin: 'zhīma yóu',
        translation: 'кунжутное масло',
        classifier: '瓶',
        examples: [
            '凉拌菜最后加芝麻油。 (Liángbàn cài zuìhòu jiā zhīma yóu.) — В салат в конце добавляют кунжутное масло.',
            '芝麻油很香。 (Zhīma yóu hěn xiāng.) — Кунжутное масло очень ароматное.',
            '这瓶芝麻油是冷榨的。 (Zhè píng zhīma yóu shì lěng zhà de.) — Это кунжутное масло холодного отжима.'
        ]
    },
    10: {
        glyph: '黄油',
        pinyin: 'huángyóu',
        translation: 'сливочное масло',
        classifier: '块',
        examples: [
            '烤面包涂黄油。 (Kǎo miànbāo tú huángyóu.) — На тосты мажут сливочное масло.',
            '这块黄油是无盐的。 (Zhè kuài huángyóu shì wú yán de.) — Этот кусок масла — без соли.',
            '黄油用于西餐烹饪。 (Huángyóu yòngyú xīcān pēngrèn.) — Сливочное масло используется в западной кухне.'
        ]
    },

    // === СПЕЦИИ ===
    11: {
        glyph: '胡椒',
        pinyin: 'hújiāo',
        translation: 'перец',
        classifier: '种',
        examples: [
            '这道菜加了黑胡椒。 (Zhè dào cài jiā le hēi hújiāo.) — В это блюдо добавили чёрный перец.',
            '白胡椒适合做汤。 (Bái hújiāo shìhé zuò tāng.) — Белый перец подходит для супов.',
            '胡椒能去腥增香。 (Hújiāo néng qù xīng zēng xiāng.) — Перец убирает запах и добавляет аромат.'
        ]
    },
    12: {
        glyph: '辣椒',
        pinyin: 'làjiāo',
        translation: 'острый перец',
        classifier: '个',
        examples: [
            '四川菜用很多辣椒。 (Sìchuān cài yòng hěn duō làjiāo.) — В сычуаньской кухне много острого перца.',
            '这个辣椒很辣。 (Zhè gè làjiāo hěn là.) — Этот перец очень острый.',
            '干辣椒可以保存很久。 (Gān làjiāo kěyǐ bǎocún hěn jiǔ.) — Сушёный перец хранится долго.'
        ]
    },
    13: {
        glyph: '八角',
        pinyin: 'bājiǎo',
        translation: 'звёздчатый анис (бадьян)',
        classifier: '个',
        examples: [
            '炖肉放八角去腥。 (Dùn ròu fàng bājiǎo qù xīng.) — При тушении мяса добавляют бадьян, чтобы убрать запах.',
            '这个八角很完整。 (Zhè gè bājiǎo hěn wánzhěng.) — Эта звёздочка целая.',
            '八角是五香粉的成分之一。 (Bājiǎo shì wǔxiāng fěn de chéngfèn zhī yī.) — Бадьян — один из компонентов «усян фэнь».'
        ]
    },
    14: {
        glyph: '桂皮',
        pinyin: 'guìpí',
        translation: 'корица (касию)',
        classifier: '块',
        examples: [
            '红烧肉要放桂皮。 (Hóngshāo ròu yào fàng guìpí.) — В «хуншао жоу» кладут корицу.',
            '这块桂皮很香。 (Zhè kuài guìpí hěn xiāng.) — Эта корица очень ароматная.',
            '桂皮和八角常一起用。 (Guìpí hé bājiǎo cháng yīqǐ yòng.) — Корицу и бадьян часто используют вместе.'
        ]
    },
    15: {
        glyph: '花椒',
        pinyin: 'huājiāo',
        translation: 'сычуаньский перец',
        classifier: '粒',
        examples: [
            '麻婆豆腐必须用花椒。 (Mápó dòufu bìxū yòng huājiāo.) — В «мабо тофу» обязательно нужен сычуаньский перец.',
            '花椒带来麻味。 (Huājiāo dàilái má wèi.) — Сычуаньский перец даёт онемение.',
            '一粒花椒就能调味。 (Yī lì huājiāo jiù néng tiáowèi.) — Одного зёрнышка перца достаточно для аромата.'
        ]
    },

    // === СОСТАВНЫЕ ПРИПРАВЫ ===
    16: {
        glyph: '五香粉',
        pinyin: 'wǔxiāng fěn',
        translation: 'порошок пяти специй',
        classifier: '包',
        examples: [
            '这包五香粉含八角、桂皮等。 (Zhè bāo wǔxiāng fěn hán bājiǎo, guìpí děng.) — В этом пакетике — бадьян, корица и др.',
            '五香粉用于卤味。 (Wǔxiāng fěn yòngyú lǔ wèi.) — Порошок пяти специй используют для приготовления «лу».',
            '自己调配五香粉更香。 (Zìjǐ tiáopèi wǔxiāng fěn gèng xiāng.) — Смешанный самостоятельно порошок ароматнее.'
        ]
    },
    17: {
        glyph: '豆瓣酱',
        pinyin: 'dòubàn jiàng',
        translation: 'ферментированная соевая паста с перцем',
        classifier: '瓶',
        examples: [
            '这瓶豆瓣酱是郫县的。 (Zhè píng dòubàn jiàng shì Píxiàn de.) — Эта паста из уезда Писянь.',
            '豆瓣酱是川菜的灵魂。 (Dòubàn jiàng shì Chuāncài de línghún.) — Паста «дубанцзян» — душа сычуаньской кухни.',
            '炒菜加一勺豆瓣酱很下饭。 (Chǎo cài jiā yī sháo dòubàn jiàng hěn xiàfàn.) — Ложка пасты делает блюдо очень аппетитным.'
        ]
    },
    18: {
        glyph: '蚝油',
        pinyin: 'háoyóu',
        translation: 'устричный соус',
        classifier: '瓶',
        examples: [
            '蚝油炒青菜很鲜。 (Háoyóu chǎo qīngcài hěn xiān.) — Овощи, жареные с устричным соусом, очень вкусны.',
            '这瓶蚝油很浓稠。 (Zhè píng háoyóu hěn nóng chóu.) — Этот соус очень густой.',
            '蚝油能提鲜。 (Háoyóu néng tí xiān.) — Устричный соус усиливает вкус.'
        ]
    },
    19: {
        glyph: '料酒',
        pinyin: 'liàojiǔ',
        translation: 'кулинарное вино',
        classifier: '瓶',
        examples: [
            '炒肉前加料酒去腥。 (Chǎo ròu qián jiā liàojiǔ qù xīng.) — Перед жаркой мяса добавляют вино, чтобы убрать запах.',
            '这瓶料酒是黄酒做的。 (Zhè píng liàojiǔ shì huángjiǔ zuò de.) — Это кулинарное вино сделано из хуанцзю.',
            '料酒不能用白酒代替。 (Liàojiǔ bù néng yòng báijiǔ dàitì.) — Кулинарное вино нельзя заменять байцзю.'
        ]
    },
    20: {
        glyph: '淀粉',
        pinyin: 'diànfěn',
        translation: 'крахмал',
        classifier: '包',
        examples: [
            '这包淀粉是玉米淀粉。 (Zhè bāo diànfěn shì yùmǐ diànfěn.) — Этот крахмал — кукурузный.',
            '勾芡要用淀粉。 (Gōuqiàn yào yòng diànfěn.) — Для загущения соуса нужен крахмал.',
            '淀粉可以让肉更嫩。 (Diànfěn kěyǐ ràng ròu gèng nèn.) — Крахмал делает мясо мягче.'
        ]
    },

    // === ПРОЧИЕ ИНГРЕДИЕНТЫ ===
    21: {
        glyph: '大蒜',
        pinyin: 'dàsuàn',
        translation: 'чеснок',
        classifier: '头',
        examples: [
            '一头大蒜有十瓣。 (Yī tóu dàsuàn yǒu shí bàn.) — В одной головке чеснока десять зубчиков.',
            '炒菜放蒜很香。 (Chǎo cài fàng suàn hěn xiāng.) — Чеснок в жаркое очень ароматен.',
            '大蒜有杀菌作用。 (Dàsuàn yǒu shājūn zuòyòng.) — Чеснок обладает антибактериальным эффектом.'
        ]
    },
    22: {
        glyph: '生姜',
        pinyin: 'shēngjiāng',
        translation: 'имбирь (свежий)',
        classifier: '块',
        examples: [
            '这块生姜很新鲜。 (Zhè kuài shēngjiāng hěn xīnxiān.) — Этот имбирь очень свежий.',
            '煮汤放姜驱寒。 (Zhǔ tāng fàng jiāng qū hán.) — В суп добавляют имбирь для согрева.',
            '生姜可以解鱼腥。 (Shēngjiāng kěyǐ jiě yú xīng.) — Имбирь устраняет запах рыбы.'
        ]
    },
    23: {
        glyph: '葱',
        pinyin: 'cōng',
        translation: 'зелёный лук',
        classifier: '根',
        examples: [
            '一根葱切碎备用。 (Yī gēn cōng qiē suì bèiyòng.) — Один стебель лука мелко нарежьте и отложите.',
            '葱花撒在汤上。 (Cōnghuā sǎ zài tāng shàng.) — Зелень лука посыпают на суп.',
            '葱能去腥增香。 (Cōng néng qù xīng zēng xiāng.) — Лук убирает запах и добавляет аромат.'
        ]
    },
    24: {
        glyph: '姜',
        pinyin: 'jiāng',
        translation: 'имбирь (в общем смысле)',
        classifier: '块',
        examples: [
            '这块姜可以泡茶。 (Zhè kuài jiāng kěyǐ pào chá.) — Этот имбирь можно заварить как чай.',
            '姜茶治感冒。 (Jiāng chá zhì gǎnmào.) — Имбирный чай лечит простуду.',
            '姜是重要调味品。 (Jiāng shì zhòngyào tiáowèipǐn.) — Имбирь — важная приправа.'
        ]
    },
    25: {
        glyph: '香菜',
        pinyin: 'xiāngcài',
        translation: 'кинза / кориандр',
        classifier: '把',
        examples: [
            '这把香菜很新鲜。 (Zhè bǎ xiāngcài hěn xīnxiān.) — Эта пучок кинзы очень свежий.',
            '香菜提味。 (Xiāngcài tí wèi.) — Кинза улучшает вкус.',
            '有些人不喜欢香菜的味道。 (Yǒuxiē rén bù xǐhuan xiāngcài de wèidào.) — Некоторым не нравится вкус кинзы.'
        ]
    }
};

// Общий словарь
export const newNouns2 = {
    nounsNatureGeneral,
    nounsLandscape,
    nounsPlants,
    nounsAnimals,
    nounsWeather,
    nounsTime,
    nounsAbstractConcepts,
    nounsSocialRoles,
    nounsDocumentsMoney,
    nounsTechDevices,
    nounsInternet,
    nounsArtObjects,
    nounsCulturalItems,
    nounsFoodGeneral,
    nounsDrinks,
    nounsIngredients,

};
