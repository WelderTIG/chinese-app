import { DictItem } from "./types/types";


const verbsBasicMovement: { [key: number]: DictItem } = {
    1: {
        glyph: '走',
        pinyin: 'zǒu',
        translation: 'идти (пешком)',
        examples: [
            '我走路去学校。 (Wǒ zǒulù qù xuéxiào.) — Я иду в школу пешком.',
            '别走了！ (Bié zǒu le!) — Не уходи!'
        ]
    },
    2: {
        glyph: '跑',
        pinyin: 'pǎo',
        translation: 'бежать',
        examples: [
            '他跑得很快。 (Tā pǎo de hěn kuài.) — Он бегает очень быстро.',
            '快跑！ (Kuài pǎo!) — Беги быстро!'
        ]
    },
    3: {
        glyph: '站',
        pinyin: 'zhàn',
        translation: 'стоять',
        examples: [
            '请站好。 (Qǐng zhàn hǎo.) — Встаньте ровно.',
            '他站了整整一小时。 (Tā zhàn le zhěngzhěng yī xiǎoshí.) — Он стоял целый час.'
        ]
    },
    4: {
        glyph: '坐',
        pinyin: 'zuò',
        translation: 'сидеть',
        examples: [
            '请坐。 (Qǐng zuò.) — Садитесь.',
            '猫坐在窗台上。 (Māo zuò zài chuāngtái shàng.) — Кот сидит на подоконнике.'
        ]
    },
    5: {
        glyph: '躺',
        pinyin: 'tǎng',
        translation: 'лежать',
        examples: [
            '我躺在床上看书。 (Wǒ tǎng zài chuáng shàng kàn shū.) — Я лежу на кровати и читаю.',
            '别躺着玩手机！ (Bié tǎng zhe wán shǒujī!) — Не лежи, играя в телефон!'
        ]
    },
    6: {
        glyph: '爬',
        pinyin: 'pá',
        translation: 'ползти / лезть (вверх)',
        examples: [
            '婴儿会爬了。 (Yīng\'ér huì pá le.) — Младенец уже умеет ползать.',
            '他喜欢爬山。 (Tā xǐhuan pá shān.) — Он любит ходить в горы.'
        ]
    },
    7: {
        glyph: '跳',
        pinyin: 'tiào',
        translation: 'прыгать',
        examples: [
            '孩子喜欢跳。 (Háizi xǐhuan tiào.) — Дети любят прыгать.',
            '别从这里跳！ (Bié cóng zhèlǐ tiào!) — Не прыгай отсюда!'
        ]
    },
    8: {
        glyph: '飞',
        pinyin: 'fēi',
        translation: 'летать',
        examples: [
            '鸟能飞。 (Niǎo néng fēi.) — Птицы умеют летать.',
            '我要飞上海。 (Wǒ yào fēi Shànghǎi.) — Я полечу в Шанхай.'
        ]
    },
    9: {
        glyph: '游',
        pinyin: 'yóu',
        translation: 'плавать',
        examples: [
            '我会游泳。 (Wǒ huì yóuyǒng.) — Я умею плавать.',
            '鱼在水里游。 (Yú zài shuǐ lǐ yóu.) — Рыба плывёт в воде.'
        ]
    },
    10: {
        glyph: '骑',
        pinyin: 'qí',
        translation: 'ездить верхом / на велосипеде',
        examples: [
            '他骑自行车上班。 (Tā qí zìxíngchē shàngbān.) — Он ездит на работу на велосипеде.',
            '我小时候骑马。 (Wǒ xiǎoshíhou qí mǎ.) — В детстве я ездил верхом на лошади.'
        ]
    },
    11: {
        glyph: '开车',
        pinyin: 'kāi chē',
        translation: 'вести машину',
        examples: [
            '我爸爸开车送我。 (Wǒ bàba kāi chē sòng wǒ.) — Мой папа везёт меня на машине.',
            '她不会开车。 (Tā bù huì kāi chē.) — Она не умеет водить.'
        ]
    },
    12: {
        glyph: '坐车',
        pinyin: 'zuò chē',
        translation: 'ехать на транспорте',
        examples: [
            '我坐公交车去超市。 (Wǒ zuò gōngjiāo chē qù chāoshì.) — Я еду в супермаркет на автобусе.',
            '我们坐高铁去北京。 (Wǒmen zuò gāotiě qù Běijīng.) — Мы едем в Пекин на скоростном поезде.'
        ]
    },
    13: {
        glyph: '滑',
        pinyin: 'huá',
        translation: 'скользить / кататься (на чём-то)',
        examples: [
            '他在冰上滑。 (Tā zài bīng shàng huá.) — Он скользит по льду.',
            '孩子喜欢滑滑梯。 (Háizi xǐhuan huá huátī.) — Дети любят кататься с горки.'
        ]
    },
    14: {
        glyph: '滚',
        pinyin: 'gǔn',
        translation: 'катиться',
        examples: [
            '球滚下山了。 (Qiú gǔn xià shān le.) — Мяч покатился вниз по склону.',
            '别让瓶子滚走！ (Bié ràng píngzi gǔn zǒu!) — Не дай бутылке укатиться!'
        ]
    },
    15: {
        glyph: '漂',
        pinyin: 'piāo',
        translation: 'плыть по течению / дрейфовать',
        examples: [
            '树叶漂在水上。 (Shùyè piāo zài shuǐ shàng.) — Листья плывут по воде.',
            '小船漂走了。 (Xiǎo chuán piāo zǒu le.) — Лодка уплыла.'
        ]
    },
    16: {
        glyph: '荡',
        pinyin: 'dàng',
        translation: 'качаться / раскачиваться',
        examples: [
            '秋千在荡。 (Qiūqiān zài dàng.) — Качели качаются.',
            '树枝在风中荡。 (Shùzhī zài fēng zhōng dàng.) — Ветки качаются на ветру.'
        ]
    },
    17: {
        glyph: '迈',
        pinyin: 'mài',
        translation: 'делать шаг (вперёд)',
        examples: [
            '他迈了一步。 (Tā mài le yī bù.) — Он сделал шаг.',
            '迈过这道坎。 (Mài guò zhè dào kǎn.) — Перешагни через это препятствие.'
        ]
    },
    18: {
        glyph: '奔',
        pinyin: 'bēn',
        translation: 'мчаться / устремляться',
        examples: [
            '他奔向出口。 (Tā bēn xiàng chūkǒu.) — Он помчался к выходу.',
            '时间奔流不息。 (Shíjiān bēn liú bù xī.) — Время неумолимо течёт.'
        ]
    },
    19: {
        glyph: '溜',
        pinyin: 'liū',
        translation: 'красться / ускользать',
        examples: [
            '他溜走了。 (Tā liū zǒu le.) — Он ускользнул.',
            '别想溜！ (Bié xiǎng liū!) — Не думай улизнуть!'
        ]
    },
    20: {
        glyph: '赶',
        pinyin: 'gǎn',
        translation: 'спешить / догонять',
        examples: [
            '我赶时间。 (Wǒ gǎn shíjiān.) — Я спешу (у меня мало времени).',
            '他赶上了最后一班车。 (Tā gǎn shàng le zuìhòu yī bān chē.) — Он успел на последний автобус.'
        ]
    },
    21: {
        glyph: '登',
        pinyin: 'dēng',
        translation: 'взбираться / подниматься (на гору, башню)',
        examples: [
            '我们登上了长城。 (Wǒmen dēng shàng le Chángchéng.) — Мы поднялись на Великую стену.',
            '他喜欢登山。 (Tā xǐhuan dēng shān.) — Он любит альпинизм.'
        ]
    },
    22: {
        glyph: '渡',
        pinyin: 'dù',
        translation: 'переправляться (через реку, море)',
        examples: [
            '他们渡过了长江。 (Tāmen dù guò le Cháng Jiāng.) — Они переправились через реку Янцзы.',
            '坐船渡河。 (Zuò chuán dù hé.) — Переправиться через реку на лодке.'
        ]
    },
    23: {
        glyph: '散步',
        pinyin: 'sànbù',
        translation: 'гулять (не спеша)',
        examples: [
            '晚饭后我们去散步。 (Wǎnfàn hòu wǒmen qù sànbù.) — После ужина мы пойдём гулять.',
            '公园里很多人在散步。 (Gōngyuán lǐ hěn duō rén zài sànbù.) — В парке много людей гуляют.'
        ]
    },
    24: {
        glyph: '追赶',
        pinyin: 'zhuī gǎn',
        translation: 'догонять / преследовать',
        examples: [
            '狗在追赶猫。 (Gǒu zài zhuī gǎn māo.) — Собака гонится за котом.',
            '快跑！有人在追赶我们！ (Kuài pǎo! Yǒu rén zài zhuī gǎn wǒmen!) — Беги! Кто-то нас преследует!'
        ]
    },
    25: {
        glyph: '潜',
        pinyin: 'qián',
        translation: 'нырять / заниматься дайвингом',
        examples: [
            '他喜欢潜水。 (Tā xǐhuan qiánshuǐ.) — Он любит дайвинг.',
            '潜艇能潜到很深。 (Qiántǐng néng qián dào hěn shēn.) — Подводная лодка может погружаться очень глубоко.'
        ]
    },
    26: {
        glyph: '停',
        pinyin: 'tíng',
        translation: 'останавливаться',
        examples: [
            '车停在路边。 (Chē tíng zài lù biān.) — Машина остановилась у обочины.',
            '请停一下！ (Qǐng tíng yīxià!) — Остановись, пожалуйста!'
        ]
    },
    27: {
        glyph: '落',
        pinyin: 'luò',
        translation: 'падать, опускаться',
        examples: [
            '树叶落下来了。 (Shùyè luò xiàlái le.) — Листья опадают.',
            '太阳落山了。 (Tàiyáng luò shān le.) — Солнце село.'
        ]
    },
    28: {
        glyph: '经过',
        pinyin: 'jīngguò',
        translation: 'проходить мимо, проезжать через',
        examples: [
            '我每天经过这家商店。 (Wǒ měitiān jīngguò zhè jiā shāngdiàn.) — Я прохожу мимо этого магазина каждый день.',
            '去地铁站要经过公园。 (Qù dìtiě zhàn yào jīngguò gōngyuán.) — Чтобы дойти до метро, нужно пройти через парк.'
        ]
    },
    29: {
        glyph: '到达',
        pinyin: 'dàodá',
        translation: 'прибывать, достигать',
        examples: [
            '火车晚上10点到达。 (Huǒchē wǎnshang shí diǎn dàodá.) — Поезд прибывает в 10 вечера.',
            '我们终于到达了山顶。 (Wǒmen zhōngyú dàodá le shāndǐng.) — Мы наконец добрались до вершины горы.'
        ]
    }
};

const verbsBasicAction: { [key: number]: DictItem } = {
    1: {
        glyph: '看',
        pinyin: 'kàn',
        translation: 'смотреть / читать',
        examples: [
            '我看电视。 (Wǒ kàn diànshì.) — Я смотрю телевизор.',
            '他在看书。 (Tā zài kàn shū.) — Он читает книгу.'
        ]
    },
    2: {
        glyph: '听',
        pinyin: 'tīng',
        translation: 'слушать',
        examples: [
            '听音乐。 (Tīng yīnyuè.) — Слушать музыку.',
            '她听老师说话。 (Tā tīng lǎoshī shuōhuà.) — Она слушает, что говорит учитель.'
        ]
    },
    3: {
        glyph: '说',
        pinyin: 'shuō',
        translation: 'говорить',
        examples: [
            '请说中文。 (Qǐng shuō Zhōngwén.) — Говорите, пожалуйста, по-китайски.',
            '他说得很快。 (Tā shuō de hěn kuài.) — Он говорит очень быстро.'
        ]
    },
    4: {
        glyph: '吃',
        pinyin: 'chī',
        translation: 'есть (пищу)',
        examples: [
            '我吃米饭。 (Wǒ chī mǐfàn.) — Я ем рис.',
            '别吃太多糖！ (Bié chī tài duō táng!) — Не ешь слишком много сахара!'
        ]
    },
    5: {
        glyph: '喝',
        pinyin: 'hē',
        translation: 'пить',
        examples: [
            '他喝茶。 (Tā hē chá.) — Он пьёт чай.',
            '多喝水。 (Duō hē shuǐ.) — Пей больше воды.'
        ]
    },
    6: {
        glyph: '拿',
        pinyin: 'ná',
        translation: 'брать / держать в руке',
        examples: [
            '拿你的书。 (Ná nǐ de shū.) — Возьми свою книгу.',
            '她拿着伞。 (Tā ná zhe sǎn.) — Она держит зонт.'
        ]
    },
    7: {
        glyph: '放',
        pinyin: 'fàng',
        translation: 'класть / ставить / отпускать',
        examples: [
            '把书放桌上。 (Bǎ shū fàng zhuō shàng.) — Положи книгу на стол.',
            '别放手！ (Bié fàng shǒu!) — Не отпускай (руку)!'
        ]
    },
    8: {
        glyph: '开',
        pinyin: 'kāi',
        translation: 'открывать',
        examples: [
            '开门！ (Kāi mén!) — Открой дверь!',
            '他开灯了。 (Tā kāi dēng le.) — Он включил свет.'
        ]
    },
    9: {
        glyph: '关',
        pinyin: 'guān',
        translation: 'закрывать / выключать',
        examples: [
            '关窗！ (Guān chuāng!) — Закрой окно!',
            '请关电视。 (Qǐng guān diànshì.) — Выключи телевизор, пожалуйста.'
        ]
    },
    10: {
        glyph: '用',
        pinyin: 'yòng',
        translation: 'использовать',
        examples: [
            '我用筷子吃饭。 (Wǒ yòng kuàizi chīfàn.) — Я ем палочками.',
            '你会用电脑吗？ (Nǐ huì yòng diànnǎo ma?) — Ты умеешь пользоваться компьютером?'
        ]
    },
    11: {
        glyph: '穿',
        pinyin: 'chuān',
        translation: 'носить (одежду, обувь)',
        examples: [
            '她穿红裙子。 (Tā chuān hóng qúnzi.) — Она носит красное платье.',
            '冬天穿厚衣服。 (Dōngtiān chuān hòu yīfu.) — Зимой носят тёплую одежду.'
        ]
    },
    12: {
        glyph: '脱',
        pinyin: 'tuō',
        translation: 'снимать (одежду, обувь)',
        examples: [
            '请脱鞋。 (Qǐng tuō xié.) — Пожалуйста, снимите обувь.',
            '他脱了外套。 (Tā tuō le wàitào.) — Он снял пиджак.'
        ]
    },
    13: {
        glyph: '洗',
        pinyin: 'xǐ',
        translation: 'мыть / стирать',
        examples: [
            '我洗手。 (Wǒ xǐ shǒu.) — Я мою руки.',
            '她在洗衣服。 (Tā zài xǐ yīfu.) — Она стирает вещи.'
        ]
    },
    14: {
        glyph: '切',
        pinyin: 'qiē',
        translation: 'резать',
        examples: [
            '切苹果。 (Qiē píngguǒ.) — Режь яблоко.',
            '小心切到手！ (Xiǎoxīn qiē dào shǒu!) — Осторожно, не порежься!'
        ]
    },
    15: {
        glyph: '写',
        pinyin: 'xiě',
        translation: 'писать',
        examples: [
            '我写中文。 (Wǒ xiě Zhōngwén.) — Я пишу на китайском.',
            '请写下你的名字。 (Qǐng xiě xià nǐ de míngzì.) — Напишите, пожалуйста, ваше имя.'
        ]
    },
    16: {
        glyph: '读',
        pinyin: 'dú',
        translation: 'читать (вслух / изучать)',
        examples: [
            '他每天读书。 (Tā měitiān dú shū.) — Он каждый день читает книги.',
            '我在读新闻。 (Wǒ zài dú xīnwén.) — Я читаю новости.'
        ]
    },
    17: {
        glyph: '画',
        pinyin: 'huà',
        translation: 'рисовать',
        examples: [
            '孩子喜欢画画。 (Háizi xǐhuan huàhuà.) — Дети любят рисовать.',
            '她画了一幅画。 (Tā huà le yī fú huà.) — Она нарисовала картину.'
        ]
    },
    18: {
        glyph: '按',
        pinyin: 'àn',
        translation: 'нажимать',
        examples: [
            '按这个按钮。 (Àn zhège ànniǔ.) — Нажми эту кнопку.',
            '别乱按！ (Bié luàn àn!) — Не жми без дела!'
        ]
    },
    19: {
        glyph: '推',
        pinyin: 'tuī',
        translation: 'толкать',
        examples: [
            '他推开门。 (Tā tuī kāi mén.) — Он толкнул дверь (открыл).',
            '别推我！ (Bié tuī wǒ!) — Не толкай меня!'
        ]
    },
    20: {
        glyph: '拉',
        pinyin: 'lā',
        translation: 'тянуть',
        examples: [
            '拉这个抽屉。 (Lā zhège chōutì.) — Потяни этот ящик.',
            '他拉我一下。 (Tā lā wǒ yīxià.) — Он потянул меня за руку.'
        ]
    },
    21: {
        glyph: '举',
        pinyin: 'jǔ',
        translation: 'поднимать (вверх)',
        examples: [
            '请举手。 (Qǐng jǔ shǒu.) — Поднимите руку, пожалуйста.',
            '他举起了奖杯。 (Tā jǔ qǐ le jiǎngbēi.) — Он поднял кубок.'
        ]
    },
    22: {
        glyph: '扔',
        pinyin: 'rēng',
        translation: 'бросать',
        examples: [
            '别扔垃圾在地上！ (Bié rēng lājī zài dì shàng!) — Не бросай мусор на пол!',
            '他把球扔给我。 (Tā bǎ qiú rēng gěi wǒ.) — Он бросил мне мяч.'
        ]
    },
    23: {
        glyph: '捡',
        pinyin: 'jiǎn',
        translation: 'поднимать с земли',
        examples: [
            '他捡起地上的钱。 (Tā jiǎn qǐ dì shàng de qián.) — Он поднял деньги с земли.',
            '别忘了捡你的东西。 (Bié wàng le jiǎn nǐ de dōngxi.) — Не забудь подобрать свои вещи.'
        ]
    },
    24: {
        glyph: '擦',
        pinyin: 'cā',
        translation: 'вытирать / протирать',
        examples: [
            '擦桌子。 (Cā zhuōzi.) — Вытри стол.',
            '他擦了眼泪。 (Tā cā le yǎnlèi.) — Он вытер слёзы.'
        ]
    },
    25: {
        glyph: '扫',
        pinyin: 'sǎo',
        translation: 'подметать',
        examples: [
            '我扫地。 (Wǒ sǎo dì.) — Я подметаю пол.',
            '每天都要扫地。 (Měitiān dōu yào sǎo dì.) — Нужно подметать каждый день.'
        ]
    },
    26: {
        glyph: '带来',
        pinyin: 'dài lái',
        translation: 'приносить (сюда)',
        examples: [
            '你带伞来了吗？ (Nǐ dài sǎn lái le ma?) — Ты принёс зонт?',
            '他带来了蛋糕。 (Tā dài lái le dàngāo.) — Он принёс торт.',
            '请带来你的作业。 (Qǐng dài lái nǐ de zuòyè.) — Пожалуйста, принеси домашку.'
        ]
    },
    27: {
        glyph: '带走',
        pinyin: 'dài zǒu',
        translation: 'унести / забрать (отсюда)',
        examples: [
            '请把你的东西带走。 (Qǐng bǎ nǐ de dōngxi dài zǒu.) — Забери свои вещи.',
            '别忘了带走钥匙！ (Bié wàng le dài zǒu yàoshi!) — Не забудь забрать ключи!',
            '服务员把盘子带走了。 (Fúwùyuán bǎ pánzi dài zǒu le.) — Официант унёс тарелки.'
        ]
    },
    28: {
        glyph: '送',
        pinyin: 'sòng',
        translation: 'доставлять / дарить / отдавать',
        examples: [
            '我送你回家。 (Wǒ sòng nǐ huí jiā.) — Я провожу тебя домой.',
            '他送我一本书。 (Tā sòng wǒ yī běn shū.) — Он подарил мне книгу.',
            '快递明天送包裹。 (Kuàidì míngtiān sòng bāoguǒ.) — Курьер доставит посылку завтра.'
        ]
    },
    29: {
        glyph: '找',
        pinyin: 'zhǎo',
        translation: 'искать',
        examples: [
            '我在找我的手机。 (Wǒ zài zhǎo wǒ de shǒujī.) — Я ищу свой телефон.',
            '你找什么？ (Nǐ zhǎo shénme?) — Что ты ищешь?'
        ]
    },
    30: {
        glyph: '找到',
        pinyin: 'zhǎo dào',
        translation: 'находить',
        examples: [
            '我终于找到了钥匙！ (Wǒ zhōngyú zhǎo dào le yàoshi!) — Я наконец нашёл ключи!',
            '你找到工作了吗？ (Nǐ zhǎo dào gōngzuò le ma?) — Ты нашёл работу?'
        ]
    },
    31: {
        glyph: '等',
        pinyin: 'děng',
        translation: 'ждать',
        examples: [
            '请等我一下！ (Qǐng děng wǒ yīxià!) — Подожди меня секунду!',
            '我等公交车。 (Wǒ děng gōngjiāo chē.) — Я жду автобус.'
        ]
    },
    32: {
        glyph: '付',
        pinyin: 'fù',
        translation: 'платить (деньги)',
        examples: [
            '我付了100元。 (Wǒ fù le yìbǎi yuán.) — Я заплатил 100 юаней.',
            '谁付账？ (Shéi fù zhàng?) — Кто платит по счёту?'
        ]
    },
    33: {
        glyph: '留',
        pinyin: 'liú',
        translation: 'оставлять (предмет)',
        examples: [
            '我把书留在桌子上。 (Wǒ bǎ shū liú zài zhuōzi shàng.) — Я оставил книгу на столе.',
            '请留个电话号码。 (Qǐng liú gè diànhuà hàomǎ.) — Оставьте, пожалуйста, номер телефона.'
        ]
    },
    34: {
        glyph: '丢',
        pinyin: 'diū',
        translation: 'терять',
        examples: [
            '我丢了钱包。 (Wǒ diū le qiánbāo.) — Я потерял кошелёк.',
            '别丢垃圾在这里！ (Bié diū lājī zài zhèlǐ!) — Не бросай мусор здесь!'
        ]
    },
    35: {
        glyph: '帮助',
        pinyin: 'bāngzhù',
        translation: 'помогать',
        examples: [
            '你能帮我吗？ (Nǐ néng bāng wǒ ma?) — Ты можешь мне помочь?',
            '他经常帮助别人。 (Tā jīngcháng bāngzhù biérén.) — Он часто помогает другим.'
        ]
    },
    36: {
        glyph: '教',
        pinyin: 'jiāo',
        translation: 'учить (кого-то)',
        examples: [
            '她教孩子们中文。 (Tā jiāo háizimen Zhōngwén.) — Она учит детей китайскому.',
            '谁教你俄语？ (Shéi jiāo nǐ Éyǔ?) — Кто учит тебя русскому?'
        ]
    },
    37: {
        glyph: '学习',
        pinyin: 'xuéxí',
        translation: 'учиться / изучать',
        examples: [
            '我每天学习中文。 (Wǒ měitiān xuéxí Zhōngwén.) — Я каждый день изучаю китайский.',
            '他们在学习做饭。 (Tāmen zài xuéxí zuò fàn.) — Они учатся готовить.'
        ]
    },
    38: {
        glyph: '给...看',
        pinyin: 'gěi...kàn',
        translation: 'показывать (дать посмотреть)',
        examples: [
            '给我看看你的照片。 (Gěi wǒ kànkan nǐ de zhàopiàn.) — Покажи мне свои фото.',
            '他给我看了新车。 (Tā gěi wǒ kàn le xīn chē.) — Он показал мне новую машину.'
        ]
    },
    39: {
        glyph: '给',
        pinyin: 'gěi',
        translation: 'давать',
        examples: [
            '他给我一本书。 (Tā gěi wǒ yī běn shū.) — Он дал мне книгу.',
            '请给我一杯水。 (Qǐng gěi wǒ yī bēi shuǐ.) — Дайте мне, пожалуйста, стакан воды.'
        ]
    },
    40: {
        glyph: '问',
        pinyin: 'wèn',
        translation: 'спрашивать',
        examples: [
            '我可以问你一个问题吗？ (Wǒ kěyǐ wèn nǐ yī gè wèntí ma?) — Можно тебя спросить?',
            '他在问路。 (Tā zài wèn lù.) — Он спрашивает дорогу.'
        ]
    },
    41: {
        glyph: '回答',
        pinyin: 'huídá',
        translation: 'отвечать',
        examples: [
            '请回答这个问题。 (Qǐng huídá zhège wèntí.) — Ответьте на этот вопрос.',
            '他不知道怎么回答。 (Tā bù zhīdào zěnme huídá.) — Он не знает, как ответить.'
        ]
    },
    42: {
        glyph: '叫',
        pinyin: 'jiào',
        translation: 'звать, называть',
        examples: [
            '他叫小明。 (Tā jiào Xiǎo Míng.) — Его зовут Сяо Мин.',
            '请叫我一下。 (Qǐng jiào wǒ yīxià.) — Позови меня, пожалуйста.'
        ]
    },
    43: {
        glyph: '接',
        pinyin: 'jiē',
        translation: 'встречать (кого-то), принимать (звонок, предмет)',
        examples: [
            '我去机场接朋友。 (Wǒ qù jīchǎng jiē péngyou.) — Я еду встречать друга в аэропорт.',
            '请接电话！ (Qǐng jiē diànhuà!) — Возьми трубку!'
        ]
    },
    44: {
        glyph: '挂',
        pinyin: 'guà',
        translation: 'вешать, класть трубку',
        examples: [
            '把大衣挂在衣架上。 (Bǎ dàyī guà zài yījià shàng.) — Повесь пальто на вешалку.',
            '他说完就挂了电话。 (Tā shuō wán jiù guà le diànhuà.) — Он сказал и повесил трубку.'
        ]
    },
    45: {
        glyph: '搬',
        pinyin: 'bān',
        translation: 'перемещать, переезжать',
        examples: [
            '请帮我把桌子搬一下。 (Qǐng bāng wǒ bǎ zhuōzi bān yīxià.) — Помоги мне передвинуть стол.',
            '我们下个月要搬家。 (Wǒmen xià gè yuè yào bānjiā.) — Мы переезжаем в следующем месяце.'
        ]
    },
    46: {
        glyph: '提',
        pinyin: 'tí',
        translation: 'нести в руке (сумку), поднимать (тему)',
        examples: [
            '她提着一个很重的箱子。 (Tā tízhe yī gè hěn zhòng de xiāngzi.) — Она несёт очень тяжёлый чемодан.',
            '别在会议上提这件事。 (Bié zài huìyì shàng tí zhè jiàn shì.) — Не поднимай этот вопрос на совещании.'
        ]
    },
    47: {
        glyph: '抱',
        pinyin: 'bào',
        translation: 'обнимать, нести на руках',
        examples: [
            '妈妈抱着孩子。 (Māma bàozhe háizi.) — Мама держит ребёнка на руках.',
            '他们高兴地抱在一起。 (Tāmen gāoxìng de bào zài yīqǐ.) — Они радостно обнялись.'
        ]
    },
    48: {
        glyph: '借',
        pinyin: 'jiè',
        translation: 'одалживать, брать взаймы',
        examples: [
            '我能借你的笔吗？ (Wǒ néng jiè nǐ de bǐ ma?) — Можно взять твою ручку?',
            '他从图书馆借了一本书。 (Tā cóng túshūguǎn jiè le yī běn shū.) — Он взял книгу в библиотеке.'
        ]
    },
    49: {
        glyph: '还',
        pinyin: 'huán',
        translation: 'возвращать (вещь)',
        examples: [
            '请明天还我这本书。 (Qǐng míngtiān huán wǒ zhè běn shū.) — Верни мне эту книгу завтра.',
            '他还没还钱。 (Tā hái méi huán qián.) — Он ещё не вернул деньги.'
        ]
    },
    50: {
        glyph: '买',
        pinyin: 'mǎi',
        translation: 'покупать',
        examples: [
            '我去超市买牛奶。 (Wǒ qù chāoshì mǎi niúnǎi.) — Я иду в супермаркет купить молоко.',
            '这件衣服你是在哪儿买的？ (Zhè jiàn yīfu nǐ shì zài nǎr mǎi de?) — Где ты купил эту одежду?'
        ]
    },
    51: {
        glyph: '卖',
        pinyin: 'mài',
        translation: 'продавать',
        examples: [
            '这家店卖水果。 (Zhè jiā diàn mài shuǐguǒ.) — Этот магазин продаёт фрукты.',
            '他把旧车卖了。 (Tā bǎ jiù chē mài le.) — Он продал старую машину.'
        ]
    },
    52: {
        glyph: '赢',
        pinyin: 'yíng',
        translation: 'выигрывать',
        examples: [
            '我们赢了比赛！ (Wǒmen yíng le bǐsài!) — Мы выиграли матч!',
            '你想赢就得努力。 (Nǐ xiǎng yíng jiù děi nǔlì.) — Если хочешь победить, нужно стараться.'
        ]
    },
    53: {
        glyph: '输',
        pinyin: 'shū',
        translation: 'проигрывать',
        examples: [
            '他们输得很惨。 (Tāmen shū de hěn cǎn.) — Они проиграли с большим отрывом.',
            '比赛输了没关系，下次再来。 (Bǐsài shū le méi guānxi, xiàcì zài lái.) — Не страшно, что проиграли, в следующий раз получится.'
        ]
    }
};

const verbsThinking: { [key: number]: DictItem } = {
    1: {
        glyph: '想',
        pinyin: 'xiǎng',
        translation: 'думать / хотеть',
        examples: [
            '我在想中文语法。 (Wǒ zài xiǎng Zhōngwén yǔfǎ.) — Я думаю о грамматике китайского.',
            '你想吃什么？ (Nǐ xiǎng chī shénme?) — Что ты хочешь поесть?',
            '他不想说话。 (Tā bù xiǎng shuōhuà.) — Он не хочет разговаривать.'
        ]
    },
    2: {
        glyph: '认为',
        pinyin: 'rènwéi',
        translation: 'считать / полагать',
        examples: [
            '我认为这不对。 (Wǒ rènwéi zhè bù duì.) — Я считаю, что это неправильно.',
            '大家都认为他很聪明。 (Dàjiā dōu rènwéi tā hěn cōngmíng.) — Все считают, что он очень умный.'
        ]
    },
    3: {
        glyph: '觉得',
        pinyin: 'juéde',
        translation: 'казаться / чувствовать (мнение)',
        examples: [
            '我觉得很累。 (Wǒ juéde hěn lèi.) — Мне кажется, я очень устал.',
            '你不觉得无聊吗？ (Nǐ bù juéde wúliáo ma?) — Тебе не кажется, что это скучно?'
        ]
    },
    4: {
        glyph: '知道',
        pinyin: 'zhīdào',
        translation: 'знать (факт)',
        examples: [
            '你知道答案吗？ (Nǐ zhīdào dá\'àn ma?) — Ты знаешь ответ?',
            '我不知道他在哪儿。 (Wǒ bù zhīdào tā zài nǎr.) — Я не знаю, где он.'
        ]
    },
    5: {
        glyph: '理解',
        pinyin: 'lǐjiě',
        translation: 'понимать (глубоко)',
        examples: [
            '你能理解我的感受吗？ (Nǐ néng lǐjiě wǒ de gǎnshòu ma?) — Ты можешь понять мои чувства?',
            '我不理解这个理论。 (Wǒ bù lǐjiě zhège lǐlùn.) — Я не понимаю эту теорию.'
        ]
    },
    6: {
        glyph: '明白',
        pinyin: 'míngbái',
        translation: 'понимать (ясно)',
        examples: [
            '你明白我的意思吗？ (Nǐ míngbái wǒ de yìsi ma?) — Ты понимаешь, что я имею в виду?',
            '我明白了！ (Wǒ míngbái le!) — Я понял!'
        ]
    },
    7: {
        glyph: '希望',
        pinyin: 'xīwàng',
        translation: 'надеяться',
        examples: [
            '我希望梦想成真。 (Wǒ xīwàng mèngxiǎng chéngzhēn.) — Я надеюсь, что мечта сбудется.',
            '他希望一切顺利。 (Tā xīwàng yīqiè shùnlì.) — Он надеется, что всё пройдёт гладко.'
        ]
    },
    8: {
        glyph: '相信',
        pinyin: 'xiāngxìn',
        translation: 'верить',
        examples: [
            '我相信你。 (Wǒ xiāngxìn nǐ.) — Я тебе верю.',
            '你相信命运吗？ (Nǐ xiāngxìn mìngyùn ma?) — Ты веришь в судьбу?'
        ]
    },
    9: {
        glyph: '考虑',
        pinyin: 'kǎolǜ',
        translation: 'обдумывать / рассматривать',
        examples: [
            '我正在考虑换工作。 (Wǒ zhèngzài kǎolǜ huàn gōngzuò.) — Я рассматриваю возможность сменить работу.',
            '你需要考虑后果。 (Nǐ xūyào kǎolǜ hòuguǒ.) — Тебе нужно подумать о последствиях.'
        ]
    },
    10: {
        glyph: '决定',
        pinyin: 'juédìng',
        translation: 'решать',
        examples: [
            '他决定出国留学。 (Tā juédìng chūguó liúxué.) — Он решил учиться за границей.',
            '我们决定不去了。 (Wǒmen juédìng bù qù le.) — Мы решили не идти.'
        ]
    },
    11: {
        glyph: '计划',
        pinyin: 'jìhuà',
        translation: 'планировать',
        examples: [
            '你计划明年去旅行吗？ (Nǐ jìhuà míngnián qù lǚxíng ma?) — Ты планируешь поехать в путешествие в следующем году?',
            '我们计划开一家餐厅。 (Wǒmen jìhuà kāi yī jiā cāntīng.) — Мы планируем открыть ресторан.'
        ]
    },
    12: {
        glyph: '怀疑',
        pinyin: 'huáiyí',
        translation: 'сомневаться',
        examples: [
            '我怀疑他骗我。 (Wǒ huáiyí tā piàn wǒ.) — Я сомневаюсь, что он обманывает меня.',
            '没有人怀疑他的能力。 (Méiyǒu rén huáiyí tā de nénglì.) — Никто не сомневается в его способностях.'
        ]
    },
    13: {
        glyph: '猜测',
        pinyin: 'cāicè',
        translation: 'угадывать / предполагать',
        examples: [
            '我猜他在家。 (Wǒ cāi tā zài jiā.) — Я предполагаю, что он дома.',
            '别猜了，我告诉你。 (Bié cāi le, wǒ gàosu nǐ.) — Не гадай, я скажу тебе.'
        ]
    },
    14: {
        glyph: '意识到',
        pinyin: 'yìshí dào',
        translation: 'осознавать',
        examples: [
            '他意识到自己错了。 (Tā yìshí dào zìjǐ cuò le.) — Он осознал, что ошибся.',
            '你意识到危险了吗？ (Nǐ yìshí dào wēixiǎn le ma?) — Ты осознал опасность?'
        ]
    },
    15: {
        glyph: '记得',
        pinyin: 'jìde',
        translation: 'помнить',
        examples: [
            '我记得你的名字。 (Wǒ jìde nǐ de míngzì.) — Я помню твоё имя.',
            '你还记得那天吗？ (Nǐ hái jìde nà tiān ma?) — Ты ещё помнишь тот день?'
        ]
    },
    16: {
        glyph: '忘记',
        pinyin: 'wàngjì',
        translation: 'забывать',
        examples: [
            '我忘记带钥匙了。 (Wǒ wàngjì dài yàoshi le.) — Я забыл взять ключи.',
            '别忘了我们的约定。 (Bié wàng le wǒmen de yuēdìng.) — Не забудь наше соглашение.'
        ]
    },
    17: {
        glyph: '想象',
        pinyin: 'xiǎngxiàng',
        translation: 'воображать',
        examples: [
            '你能想象没有手机的生活吗？ (Nǐ néng xiǎngxiàng méiyǒu shǒujī de shēnghuó ma?) — Ты можешь представить жизнь без телефона?',
            '孩子喜欢想象。 (Háizi xǐhuān xiǎngxiàng.) — Дети любят фантазировать.'
        ]
    },
    18: {
        glyph: '承认',
        pinyin: 'chéngrèn',
        translation: 'признавать',
        examples: [
            '他承认自己错了。 (Tā chéngrèn zìjǐ cuò le.) — Он признал, что ошибся.',
            '没人愿意承认失败。 (Méiyǒu rén yuànyì chéngrèn shībài.) — Никто не хочет признавать поражение.'
        ]
    },
    19: {
        glyph: '反对',
        pinyin: 'fǎnduì',
        translation: 'возражать',
        examples: [
            '我反对这个计划。 (Wǒ fǎnduì zhège jìhuà.) — Я против этого плана.',
            '大家都反对他。 (Dàjiā dōu fǎnduì tā.) — Все против него.'
        ]
    },
    20: {
        glyph: '支持',
        pinyin: 'zhīchí',
        translation: 'поддерживать (мнение)',
        examples: [
            '我支持你的想法。 (Wǒ zhīchí nǐ de xiǎngfǎ.) — Я поддерживаю твою идею.',
            '没有人支持他的观点。 (Méiyǒu rén zhīchí tā de guāndiǎn.) — Никто не поддерживает его точку зрения.'
        ]
    },
    21: {
        glyph: '分析',
        pinyin: 'fēnxī',
        translation: 'анализировать',
        examples: [
            '科学家在分析数据。 (Kēxuéjiā zài fēnxī shùjù.) — Учёные анализируют данные.',
            '你能分析这个问题吗？ (Nǐ néng fēnxī zhège wèntí ma?) — Ты можешь проанализировать эту проблему?'
        ]
    },
    22: {
        glyph: '比较',
        pinyin: 'bǐjiào',
        translation: 'сравнивать',
        examples: [
            '这个手机比那个好。 (Zhège shǒujī bǐ nàge hǎo.) — Этот телефон лучше того.',
            '他们在比较价格。 (Tāmen zài bǐjiào jiàgé.) — Они сравнивают цены.'
        ]
    },
    23: {
        glyph: '设想',
        pinyin: 'shèxiǎng',
        translation: 'представлять себе / планировать заранее',
        examples: [
            '你能设想未来的生活吗？ (Nǐ néng shèxiǎng wèilái de shēnghuó ma?) — Ты можешь представить себе будущую жизнь?',
            '我们设想了几种方案。 (Wǒmen shèxiǎng le jǐ zhǒng fāng\'àn.) — Мы продумали несколько вариантов.'
        ]
    }
};

const verbsFeeling: { [key: number]: DictItem } = {
    1: {
        glyph: '爱',
        pinyin: 'ài',
        translation: 'любить (глубоко)',
        examples: [
            '我爱我的祖国。 (Wǒ ài wǒ de zǔguó.) — Я люблю свою родину.',
            '他爱音乐胜过一切。 (Tā ài yīnyuè shèngguò yīqiè.) — Он любит музыку больше всего на свете.'
        ]
    },
    2: {
        glyph: '喜欢',
        pinyin: 'xǐhuan',
        translation: 'нравиться',
        examples: [
            '我喜欢大自然。 (Wǒ xǐhuan dàzìrán.) — Мне нравится природа.',
            '她不喜欢吵闹。 (Tā bù xǐhuan chǎonào.) — Она не любит шум.'
        ]
    },
    3: {
        glyph: '讨厌',
        pinyin: 'tǎoyàn',
        translation: 'ненавидеть / терпеть не могать',
        examples: [
            '我讨厌谎言。 (Wǒ tǎoyàn huǎnghuà.) — Я ненавижу ложь.',
            '他讨厌等待。 (Tā tǎoyàn děngdài.) — Он не выносит ожидания.'
        ]
    },
    4: {
        glyph: '害怕',
        pinyin: 'hàipà',
        translation: 'бояться',
        examples: [
            '孩子害怕黑暗。 (Háizi hàipà hēi\'àn.) — Дети боятся темноты.',
            '我不怕失败。 (Wǒ bù pà shībài.) — Я не боюсь неудач.'
        ]
    },
    5: {
        glyph: '担心',
        pinyin: 'dānxīn',
        translation: 'волноваться',
        examples: [
            '妈妈总是担心我。 (Māma zǒngshì dānxīn wǒ.) — Мама всегда за меня волнуется.',
            '别担心，一切都会好。 (Bié dānxīn, yīqiè dōu huì hǎo.) — Не волнуйся, всё будет хорошо.'
        ]
    },
    6: {
        glyph: '生气',
        pinyin: 'shēngqì',
        translation: 'сердиться',
        examples: [
            '他生气地走了。 (Tā shēngqì de zǒu le.) — Он ушёл в гневе.',
            '别为小事生气。 (Bié wèi xiǎoshì shēngqì.) — Не злись из-за мелочей.'
        ]
    },
    7: {
        glyph: '开心',
        pinyin: 'kāixīn',
        translation: 'радоваться',
        examples: [
            '听到好消息，我很开心。 (Tīng dào hǎo xiāoxī, wǒ hěn kāixīn.) — Услышав хорошую новость, я обрадовался.',
            '祝你天天开心！ (Zhù nǐ tiāntiān kāixīn!) — Желаю тебе радоваться каждый день!'
        ]
    },
    8: {
        glyph: '难过',
        pinyin: 'nánguò',
        translation: 'грустить',
        examples: [
            '他很难过，因为宠物死了。 (Tā hěn nánguò, yīnwèi chǒngwù sǐ le.) — Он очень грустит, потому что умер питомец.',
            '看到你难过，我也难过。 (Kàn dào nǐ nánguò, wǒ yě nánguò.) — Вижу твою грусть — и мне тоже грустно.'
        ]
    },
    9: {
        glyph: '惊讶',
        pinyin: 'jīngyà',
        translation: 'удивляться',
        examples: [
            '我对他的进步感到惊讶。 (Wǒ duì tā de jìnbù gǎndào jīngyà.) — Я удивлён его прогрессом.',
            '她惊讶地看着我。 (Tā jīngyà de kànzhe wǒ.) — Она с удивлением посмотрела на меня.'
        ]
    },
    10: {
        glyph: '感到',
        pinyin: 'gǎndào',
        translation: 'чувствовать (эмоцию)',
        examples: [
            '我感到非常幸福。 (Wǒ gǎndào fēicháng xìngfú.) — Я чувствую себя очень счастливым.',
            '他感到不安。 (Tā gǎndào bù\'ān.) — Он чувствует тревогу.'
        ]
    },
    11: {
        glyph: '嫉妒',
        pinyin: 'jídù',
        translation: 'ревновать / завидовать',
        examples: [
            '她嫉妒朋友的成功。 (Tā jídù péngyou de chénggōng.) — Она завидует успеху подруги.',
            '不要嫉妒别人。 (Búyào jídù biérén.) — Не завидуй другим.'
        ]
    },
    12: {
        glyph: '想念',
        pinyin: 'xiǎngniàn',
        translation: 'скучать (по кому-то)',
        examples: [
            '我每天都在想念家人。 (Wǒ měitiān dōu zài xiǎngniàn jiārén.) — Я каждый день скучаю по семье.',
            '他想念家乡的味道。 (Tā xiǎngniàn jiāxiāng de wèidào.) — Он скучает по вкусу родного дома.'
        ]
    },
    13: {
        glyph: '后悔',
        pinyin: 'hòuhuǐ',
        translation: 'сожалеть',
        examples: [
            '我后悔没早点开始。 (Wǒ hòuhuǐ méi zǎodiǎn kāishǐ.) — Мне жаль, что я не начал раньше.',
            '他很后悔说了那些话。 (Tā hěn hòuhuǐ shuō le nàxiē huà.) — Он очень сожалеет, что сказал те слова.'
        ]
    },
    14: {
        glyph: '自豪',
        pinyin: 'zìháo',
        translation: 'гордиться',
        examples: [
            '父母为孩子感到自豪。 (Fùmǔ wèi háizi gǎndào zìháo.) — Родители гордятся своими детьми.',
            '我为我的国家自豪。 (Wǒ wèi wǒ de guójiā zìháo.) — Я горжусь своей страной.'
        ]
    },
    15: {
        glyph: '同情',
        pinyin: 'tóngqíng',
        translation: 'сочувствовать',
        examples: [
            '我同情他的遭遇。 (Wǒ tóngqíng tā de zāoyù.) — Я сочувствую его судьбе.',
            '她对穷人充满同情。 (Tā duì qióngrén chōngmǎn tóngqíng.) — Она полна сочувствия к бедным.'
        ]
    },
    16: {
        glyph: '失望',
        pinyin: 'shīwàng',
        translation: 'разочаровываться',
        examples: [
            '我对结果很失望。 (Wǒ duì jiéguǒ hěn shīwàng.) — Я очень разочарован результатом.',
            '别让他失望。 (Bié ràng tā shīwàng.) — Не разочаровывай его.'
        ]
    },
    17: {
        glyph: '安心',
        pinyin: 'ānxīn',
        translation: 'чувствовать спокойствие',
        examples: [
            '知道你安全，我就安心了。 (Zhīdào nǐ ānquán, wǒ jiù ānxīn le.) — Зная, что ты в безопасности, я успокоился.',
            '请安心休息。 (Qǐng ānxīn xiūxi.) — Отдыхай спокойно.'
        ]
    },
    18: {
        glyph: '紧张',
        pinyin: 'jǐnzhāng',
        translation: 'нервничать',
        examples: [
            '我考试前总是很紧张。 (Wǒ kǎoshì qián zǒngshì hěn jǐnzhāng.) — Я всегда нервничаю перед экзаменом.',
            '别紧张，慢慢说。 (Bié jǐnzhāng, mànman shuō.) — Не нервничай, говори спокойно.'
        ]
    },
    19: {
        glyph: '尊重',
        pinyin: 'zūnzhòng',
        translation: 'уважать',
        examples: [
            '我们要尊重别人。 (Wǒmen yào zūnzhòng biérén.) — Мы должны уважать других.',
            '他很尊重他的老师。 (Tā hěn zūnzhòng tā de lǎoshī.) — Он сильно уважает своего учителя.'
        ]
    },
    20: {
        glyph: '可怜',
        pinyin: 'kělián',
        translation: 'жалеть / быть достойным жалости',
        examples: [
            '这孩子真可怜。 (Zhè háizi zhēn kělián.) — Этому ребёнку так жалко.',
            '别可怜我！ (Bié kělián wǒ!) — Не жалей меня!'
        ]
    },
    21: {
        glyph: '着急',
        pinyin: 'zháojí',
        translation: 'волноваться / нервничать',
        examples: [
            '别着急，慢慢来。 (Bié zháojí, mànman lái.) — Не волнуйся, делай медленно.',
            '他很着急，因为要迟到了。 (Tā hěn zháojí, yīnwèi yào chídào le.) — Он очень нервничает, потому что опаздывает.'
        ]
    },
    22: {
        glyph: '放心',
        pinyin: 'fàngxīn',
        translation: 'не волноваться / быть спокойным',
        examples: [
            '你放心，我会准时来。 (Nǐ fàngxīn, wǒ huì zhǔnshí lái.) — Не волнуйся, я приду вовремя.',
            '妈妈不放心他一个人在家。 (Māma bù fàngxīn tā yīgè rén zài jiā.) — Мама не спокойна, когда он один дома.'
        ]
    }
};

const verbsCommunication: { [key: number]: DictItem } = {
    1: {
        glyph: '说',
        pinyin: 'shuō',
        translation: 'говорить',
        examples: [
            '请说中文。 (Qǐng shuō Zhōngwén.) — Пожалуйста, говорите по-китайски.',
            '他说得很快。 (Tā shuō de hěn kuài.) — Он говорит очень быстро.'
        ]
    },
    2: {
        glyph: '告诉',
        pinyin: 'gàosu',
        translation: 'сообщать',
        examples: [
            '他告诉我一个秘密。 (Tā gàosu wǒ yī gè mìmì.) — Он рассказал мне секрет.',
            '请告诉我真相。 (Qǐng gàosu wǒ zhēnxiàng.) — Скажи мне правду.'
        ]
    },
    3: {
        glyph: '问',
        pinyin: 'wèn',
        translation: 'спрашивать',
        examples: [
            '你有什么问题？ (Nǐ yǒu shénme wèntí?) — У тебя есть вопросы?',
            '别问太多。 (Bié wèn tài duō.) — Не задавай слишком много вопросов.'
        ]
    },
    4: {
        glyph: '回答',
        pinyin: 'huídá',
        translation: 'отвечать',
        examples: [
            '你能回答这个问题吗？ (Nǐ néng huídá zhège wèntí ma?) — Ты можешь ответить на этот вопрос?',
            '他立刻回答了。 (Tā lìkè huídá le.) — Он ответил сразу же.'
        ]
    },
    5: {
        glyph: '聊天',
        pinyin: 'liáotiān',
        translation: 'болтать',
        examples: [
            '我们经常一起聊天。 (Wǒmen jīngcháng yīqǐ liáotiān.) — Мы часто болтаем вместе.',
            '他们在咖啡馆聊天。 (Tāmen zài kāfēiguǎn liáotiān.) — Они болтают в кафе.'
        ]
    },
    6: {
        glyph: '讨论',
        pinyin: 'tǎolùn',
        translation: 'обсуждать',
        examples: [
            '我们正在讨论一个重要的问题。 (Wǒmen zhèngzài tǎolùn yī gè zhòngyào de wèntí.) — Мы обсуждаем важный вопрос.',
            '大家热烈地讨论。 (Dàjiā rèliè de tǎolùn.) — Все активно обсуждают.'
        ]
    },
    7: {
        glyph: '解释',
        pinyin: 'jiěshì',
        translation: 'объяснять',
        examples: [
            '请你解释一下。 (Qǐng nǐ jiěshì yīxià.) — Пожалуйста, объясни.',
            '他解释得很清楚。 (Tā jiěshì de hěn qīngchu.) — Он объяснил очень ясно.'
        ]
    },
    8: {
        glyph: '同意',
        pinyin: 'tóngyì',
        translation: 'соглашаться',
        examples: [
            '我完全同意你。 (Wǒ wánquán tóngyì nǐ.) — Я полностью с тобой согласен.',
            '他们不同意这个方案。 (Tāmen bù tóngyì zhège fāng\'àn.) — Они не согласны с этим планом.'
        ]
    },
    9: {
        glyph: '拒绝',
        pinyin: 'jùjué',
        translation: 'отказываться',
        examples: [
            '他拒绝了我的邀请。 (Tā jùjué le wǒ de yāoqǐng.) — Он отказался от моего приглашения.',
            '我不能拒绝他的请求。 (Wǒ bù néng jùjué tā de qǐngqiú.) — Я не могу отказать в его просьбе.'
        ]
    },
    10: {
        glyph: '建议',
        pinyin: 'jiànyì',
        translation: 'предлагать',
        examples: [
            '我建议你多练习。 (Wǒ jiànyì nǐ duō liànxí.) — Я советую тебе больше практиковаться.',
            '他提出了一个好建议。 (Tā tíchū le yī gè hǎo jiànyì.) — Он выдвинул хорошее предложение.'
        ]
    },
    11: {
        glyph: '承诺',
        pinyin: 'chéngnuò',
        translation: 'обещать',
        examples: [
            '他承诺会准时来。 (Tā chéngnuò huì zhǔnshí lái.) — Он обещал прийти вовремя.',
            '不要轻易承诺。 (Búyào qīngyì chéngnuò.) — Не давай обещаний наобещавшись.'
        ]
    },
    12: {
        glyph: '提醒',
        pinyin: 'tíxǐng',
        translation: 'напоминать',
        examples: [
            '请提醒我明天开会。 (Qǐng tíxǐng wǒ míngtiān kāihuì.) — Напомни мне завтра о совещании.',
            '谢谢你的提醒。 (Xièxie nǐ de tíxǐng.) — Спасибо за напоминание.'
        ]
    },
    13: {
        glyph: '警告',
        pinyin: 'jǐnggào',
        translation: 'предупреждать',
        examples: [
            '老师警告学生不要作弊。 (Lǎoshī jǐnggào xuéshēng búyào zuòbì.) — Учитель предупредил учеников не списывать.',
            '气象局发布了暴雨警告。 (Qìxiàngjú fābù le bàoyǔ jǐnggào.) — Метеослужба объявила предупреждение о ливне.'
        ]
    },
    14: {
        glyph: '争论',
        pinyin: 'zhēnglùn',
        translation: 'спорить',
        examples: [
            '他们经常为小事争论。 (Tāmen jīngcháng wèi xiǎoshì zhēnglùn.) — Они часто спорят из-за мелочей.',
            '不要和客人争论。 (Búyào hé kèrén zhēnglùn.) — Не спорь с гостями.'
        ]
    },
    15: {
        glyph: '喊',
        pinyin: 'hǎn',
        translation: 'кричать',
        examples: [
            '别喊！ (Bié hǎn!) — Не кричи!',
            '他在街上大喊我的名字。 (Tā zài jiē shàng dà hǎn wǒ de míngzì.) — Он громко кричал моё имя на улице.'
        ]
    },
    16: {
        glyph: '叫',
        pinyin: 'jiào',
        translation: 'звать / кричать',
        examples: [
            '他叫我吃饭。 (Tā jiào wǒ chīfàn.) — Он зовёт меня поесть.',
            '别叫我！ (Bié jiào wǒ!) — Не зови меня!'
        ]
    },
    17: {
        glyph: ' whisper',
        pinyin: '小声说',
        translation: 'шептать',
        examples: [
            '他们小声说话。 (Tāmen xiǎoshēng shuōhuà.) — Они разговаривают шёпотом.',
            '请小声点！ (Qǐng xiǎoshēng diǎn!) — Пожалуйста, говори тише!'
        ]
    },
    18: {
        glyph: '抱怨',
        pinyin: 'bàoyuàn',
        translation: 'жаловаться',
        examples: [
            '他总是抱怨工作太忙。 (Tā zǒngshì bàoyuàn gōngzuò tài máng.) — Он всё время жалуется, что работа слишком загружена.',
            '别抱怨了！ (Bié bàoyuàn le!) — Хватит жаловаться!'
        ]
    },
    19: {
        glyph: '道歉',
        pinyin: 'dàoqiàn',
        translation: 'извиняться',
        examples: [
            '他向我道歉了。 (Tā xiàng wǒ dàoqiàn le.) — Он извинился передо мной.',
            '你应该立刻道歉。 (Nǐ yīnggāi lìkè dàoqiàn.) — Тебе следует немедленно извиниться.'
        ]
    },
    20: {
        glyph: '安慰',
        pinyin: 'ānwèi',
        translation: 'утешать',
        examples: [
            '她安慰哭泣的朋友。 (Tā ānwèi kūqì de péngyou.) — Она утешает плачущего друга.',
            '别担心，一切都会好 — это слова утешения. (Bié dānxīn, yīqiè dōu huì hǎo — zhè shì huà yǔ ānwèi.) — "Не волнуйся, всё будет хорошо" — это слова утешения.'
        ]
    },
    21: {
        glyph: '发誓',
        pinyin: 'fāshì',
        translation: 'клясться',
        examples: [
            '我发誓我说的是真的。 (Wǒ fāshì wǒ shuō de shì zhēn de.) — Я клянусь, что говорю правду.',
            '他发誓再也不迟到。 (Tā fāshì zài yě bù chídào.) — Он поклялся больше никогда не опаздывать.'
        ]
    },
    22: {
        glyph: '答应',
        pinyin: 'dāying',
        translation: 'соглашаться (на просьбу)',
        examples: [
            '他答应帮我。 (Tā dāying bāng wǒ.) — Он согласился помочь мне.',
            '你答应过我的！ (Nǐ dāying guò wǒ de!) — Ты обещал(а) мне!'
        ]
    },
    23: {
        glyph: '说服',
        pinyin: 'shuōfú',
        translation: 'убеждать',
        examples: [
            '你能说服他吗？ (Nǐ néng shuōfú tā ma?) — Ты можешь его убедить?',
            '我说服了妈妈让我去旅行。 (Wǒ shuōfú le māma ràng wǒ qù lǚxíng.) — Я убедил маму отпустить меня в путешествие.'
        ]
    },
    24: {
        glyph: '请求',
        pinyin: 'qǐngqiú',
        translation: 'просить (формально)',
        examples: [
            '我请求你原谅我。 (Wǒ qǐngqiú nǐ yuánliàng wǒ.) — Я прошу тебя простить меня.',
            '他请求帮助。 (Tā qǐngqiú bāngzhù.) — Он попросил помощи.'
        ]
    },
    25: {
        glyph: '恳求',
        pinyin: 'kěnqiú',
        translation: 'умолять',
        examples: [
            '她恳求他别走。 (Tā kěnqiú tā bié zǒu.) — Она умоляла его не уходить.',
            '我恳求你再给我 шанс。 (Wǒ kěnqiú nǐ zài gěi wǒ yī cì shānjī.) — Я умоляю тебя дать мне ещё один шанс.'
        ]
    }
};

const verbsSocializing: { [key: number]: DictItem } = {
    1: {
        glyph: '邀请',
        pinyin: 'yāoqǐng',
        translation: 'приглашать',
        examples: [
            '他邀请我去吃饭。 (Tā yāoqǐng wǒ qù chīfàn.) — Он пригласил меня поесть.',
            '你邀请谁参加派对？ (Nǐ yāoqǐng shéi cānjiā pàiduì?) — Кого ты пригласил на вечеринку?',
            '谢谢你的邀请。 (Xièxie nǐ de yāoqǐng.) — Спасибо за приглашение.'
        ]
    },
    2: {
        glyph: '见面',
        pinyin: 'jiànmiàn',
        translation: 'встречаться',
        examples: [
            '我们明天见面吧。 (Wǒmen míngtiān jiànmiàn ba.) — Давай встретимся завтра.',
            '他们经常在咖啡馆见面。 (Tāmen jīngcháng zài kāfēiguǎn jiànmiàn.) — Они часто встречаются в кафе.',
            '几点见面？ (Jǐ diǎn jiànmiàn?) — Во сколько встретимся?'
        ]
    },
    3: {
        glyph: '介绍',
        pinyin: 'jièshào',
        translation: 'знакомить',
        examples: [
            '让我介绍一下我的朋友。 (Ràng wǒ jièshào yīxià wǒ de péngyou.) — Позвольте представить моего друга.',
            '他介绍了新同事。 (Tā jièshào le xīn tóngshì.) — Он представил нового коллегу.',
            '你能介绍一下自己吗？ (Nǐ néng jièshào yīxià zìjǐ ma?) — Ты можешь представиться?'
        ]
    },
    4: {
        glyph: '拜访',
        pinyin: 'bàifǎng',
        translation: 'навещать',
        examples: [
            '我想拜访你的家。 (Wǒ xiǎng bàifǎng nǐ de jiā.) — Я хочу навестить твой дом.',
            '他昨天拜访了老师。 (Tā zuótiān bàifǎng le lǎoshī.) — Вчера он навестил учителя.',
            '我们计划拜访亲戚。 (Wǒmen jìhuà bàifǎng qīnqi.) — Мы планируем навестить родственников.'
        ]
    },
    5: {
        glyph: '做客',
        pinyin: 'zuò kè',
        translation: 'гостить',
        examples: [
            '我在朋友家做客。 (Wǒ zài péngyou jiā zuò kè.) — Я гощу у друга.',
            '他们来我家做客。 (Tāmen lái wǒ jiā zuò kè.) — Они пришли ко мне в гости.',
            '你什么时候来做客？ (Nǐ shénme shíhou lái zuò kè?) — Когда ты приедешь в гости?'
        ]
    },
    6: {
        glyph: '打电话',
        pinyin: 'dǎ diànhuà',
        translation: 'звонить по телефону',
        examples: [
            '我每天给妈妈打电话。 (Wǒ měitiān gěi māma dǎ diànhuà.) — Я каждый день звоню маме.',
            '别现在打电话！ (Bié xiànzài dǎ diànhuà!) — Не звони сейчас!',
            '他打了三次电话。 (Tā dǎ le sān cì diànhuà.) — Он позвонил три раза.'
        ]
    },
    7: {
        glyph: '发信息',
        pinyin: 'fā xìnxī',
        translation: 'писать сообщение',
        examples: [
            '我给你发信息了。 (Wǒ gěi nǐ fā xìnxī le.) — Я написал тебе сообщение.',
            '别发信息，打电话！ (Bié fā xìnxī, dǎ diànhuà!) — Не пиши, позвони!',
            '他不回我的信息。 (Tā bù huí wǒ de xìnxī.) — Он не отвечает на мои сообщения.'
        ]
    },
    8: {
        glyph: '拥抱',
        pinyin: 'yōngbào',
        translation: 'обнимать',
        examples: [
            '他们见面时拥抱了。 (Tāmen jiànmiàn shí yōngbào le.) — Они обнялись при встрече.',
            '妈妈拥抱了孩子。 (Māma yōngbào le háizi.) — Мама обняла ребёнка.',
            '在西方，人们经常拥抱。 (Zài xīfāng, rénmen jīngcháng yōngbào.) — На Западе люди часто обнимаются.'
        ]
    },
    9: {
        glyph: '一起',
        pinyin: 'yīqǐ',
        translation: 'делать вместе',
        examples: [
            '我们一起吃饭。 (Wǒmen yīqǐ chīfàn.) — Мы едим вместе.',
            '他喜欢和朋友一起玩。 (Tā xǐhuan hé péngyou yīqǐ wán.) — Ему нравится играть с друзьями.',
            '你能和我一起学习吗？ (Nǐ néng hé wǒ yīqǐ xuéxí ma?) — Ты можешь учиться со мной?'
        ]
    },
    10: {
        glyph: '告别',
        pinyin: 'gàobié',
        translation: 'прощаться',
        examples: [
            '他们告别后离开了。 (Tāmen gàobié hòu líkāi le.) — Они попрощались и ушли.',
            '告别时说“再见”。 (Gàobié shí shuō “zàijiàn”.) — При прощании говорят «до свидания».',
            '我不想告别。 (Wǒ bù xiǎng gàobié.) — Я не хочу прощаться.'
        ]
    },
    11: {
        glyph: '约会',
        pinyin: 'yuēhuì',
        translation: 'назначать свидание',
        examples: [
            '他们今晚有约会。 (Tāmen jīn wǎn yǒu yuēhuì.) — У них сегодня вечером свидание.',
            '你和谁约会？ (Nǐ hé shéi yuēhuì?) — С кем у тебя встреча?',
            '别迟到约会！ (Bié chídào yuēhuì!) — Не опаздывай на свидание!'
        ]
    },
    12: {
        glyph: '送行',
        pinyin: 'sòngxíng',
        translation: 'проводить (до станции)',
        examples: [
            '我去机场送行。 (Wǒ qù jīchǎng sòngxíng.) — Я поеду в аэропорт провожать.',
            '朋友送行到火车站。 (Péngyou sòngxíng dào huǒchē zhàn.) — Друг проводил до вокзала.',
            '谢谢你们来送行。 (Xièxie nǐmen lái sòngxíng.) — Спасибо, что пришли проводить.'
        ]
    },
    13: {
        glyph: '认识',
        pinyin: 'rènshi',
        translation: 'знакомиться',
        examples: [
            '我想和你认识。 (Wǒ xiǎng hé nǐ rènshi.) — Я хочу с тобой познакомиться.',
            '我们去年认识了。 (Wǒmen qùnián rènshi le.) — Мы познакомились в прошлом году.',
            '他认识很多中国人。 (Tā rènshi hěn duō Zhōngguó rén.) — Он знаком со многими китайцами.'
        ]
    },
    14: {
        glyph: '感谢',
        pinyin: 'gǎnxiè',
        translation: 'благодарить',
        examples: [
            '我感谢你的帮助。 (Wǒ gǎnxiè nǐ de bāngzhù.) — Я благодарю тебя за помощь.',
            '他感谢老师。 (Tā gǎnxiè lǎoshī.) — Он поблагодарил учителя.',
            '请不要客气，不用感谢。 (Qǐng búyào kèqi, búyòng gǎnxiè.) — Пожалуйста, не надо благодарностей.'
        ]
    },
    15: {
        glyph: '原谅',
        pinyin: 'yuánliàng',
        translation: 'прощать',
        examples: [
            '你能原谅我吗？ (Nǐ néng yuánliàng wǒ ma?) — Ты можешь меня простить?',
            '我原谅你了。 (Wǒ yuánliàng nǐ le.) — Я тебя простил.',
            '他永远不会原谅欺骗。 (Tā yǒngyuǎn bù huì yuánliàng qīpiàn.) — Он никогда не простит предательства.'
        ]
    },
    16: {
        glyph: '迎接',
        pinyin: 'yíngjiē',
        translation: 'встречать (кого-то)',
        examples: [
            '我去机场迎接他。 (Wǒ qù jīchǎng yíngjiē tā.) — Я поеду в аэропорт встречать его.',
            '孩子们迎接新年。 (Háizimen yíngjiē xīnnián.) — Дети встречают Новый год.',
            '我们热烈迎接客人。 (Wǒmen rèliè yíngjiē kèrén.) — Мы тепло встречаем гостей.'
        ]
    },
    17: {
        glyph: '陪伴',
        pinyin: 'péibàn',
        translation: 'сопровождать, быть рядом',
        examples: [
            '她陪伴我度过困难时期。 (Tā péibàn wǒ dùguò kùnnán shíqī.) — Она была со мной в трудные времена.',
            '父母陪伴孩子成长。 (Fùmǔ péibàn háizi chéngzhǎng.) — Родители сопровождают детей в их росте.',
            '你能陪我一会儿吗？ (Nǐ néng péi wǒ yīhuìr ma?) — Ты можешь побыть со мной немного?'
        ]
    }
};

const verbsHealth: { [key: number]: DictItem } = {
    1: {
        glyph: '病',
        pinyin: 'bìng',
        translation: 'болеть (о человеке)',
        examples: [
            '他病了，不能来。 (Tā bìng le, bù néng lái.) — Он заболел, не может прийти.',
            '我昨天病得很重。 (Wǒ zuótiān bìng de hěn zhòng.) — Вчера я сильно заболел.',
            '小心别病了。 (Xiǎoxīn bié bìng le.) — Осторожно, не заболей.'
        ]
    },
    2: {
        glyph: '疼',
        pinyin: 'téng',
        translation: 'болеть (о части тела)',
        examples: [
            '我头疼。 (Wǒ tóu téng.) — У меня болит голова.',
            '牙疼吗？ (Yá téng ma?) — Зуб болит?',
            '腿疼得走不了。 (Tuǐ téng de zǒu bù liǎo.) — Нога болит так, что не могу идти.'
        ]
    },
    3: {
        glyph: '发烧',
        pinyin: 'fāshāo',
        translation: 'иметь температуру',
        examples: [
            '孩子发烧了。 (Háizi fāshāo le.) — У ребёнка температура.',
            '我发烧到39度。 (Wǒ fāshāo dào 39 dù.) — У меня температура 39 градусов.',
            '别着凉，会发烧。 (Bié zháoliáng, huì fāshāo.) — Не простудись, будет температура.'
        ]
    },
    4: {
        glyph: '咳嗽',
        pinyin: 'késou',
        translation: 'кашлять',
        examples: [
            '他一直在咳嗽。 (Tā yīzhí zài késou.) — Он всё время кашляет.',
            '别对着我咳嗽！ (Bié duìzhe wǒ késou!) — Не кашляй на меня!',
            '感冒了就咳嗽。 (Gǎnmào le jiù késou.) — Когда простужаешься — кашляешь.'
        ]
    },
    5: {
        glyph: '打喷嚏',
        pinyin: 'dǎ pēntì',
        translation: 'чихать',
        examples: [
            '我打喷嚏了。 (Wǒ dǎ pēntì le.) — Я чихнул.',
            '花粉让我打喷嚏。 (Huāfěn ràng wǒ dǎ pēntì.) — Пыльца заставляет меня чихать.',
            '打喷嚏时捂住嘴。 (Dǎ pēntì shí wǔ zhù zuǐ.) — Когда чихаешь — прикрывай рот.'
        ]
    },
    6: {
        glyph: '吃药',
        pinyin: 'chī yào',
        translation: 'принимать лекарство',
        examples: [
            '医生让我吃药。 (Yīshēng ràng wǒ chī yào.) — Врач велел мне принимать лекарство.',
            '按时吃药。 (Ànshí chī yào.) — Принимай лекарство вовремя.',
            '这药苦吗？ (Zhè yào kǔ ma?) — Это лекарство горькое?'
        ]
    },
    7: {
        glyph: '看医生',
        pinyin: 'kàn yīshēng',
        translation: 'идти к врачу',
        examples: [
            '我明天看医生。 (Wǒ míngtiān kàn yīshēng.) — Завтра я пойду к врачу.',
            '头疼需要看医生吗？ (Tóuténg xūyào kàn yīshēng ma?) — Нужно ли идти к врачу при головной боли?',
            '他看医生后好多了。 (Tā kàn yīshēng hòu hǎo duō le.) — После визита к врачу ему стало гораздо лучше.'
        ]
    },
    8: {
        glyph: '休息',
        pinyin: 'xiūxi',
        translation: 'отдыхать',
        examples: [
            '我需要休息。 (Wǒ xūyào xiūxi.) — Мне нужно отдохнуть.',
            '生病了要多休息。 (Shēngbìng le yào duō xiūxi.) — При болезни нужно много отдыхать.',
            '休息五分钟。 (Xiūxi wǔ fēnzhōng.) — Отдохни пять минут.'
        ]
    },
    9: {
        glyph: '恢复',
        pinyin: 'huīfù',
        translation: 'выздоравливать',
        examples: [
            '他正在恢复健康。 (Tā zhèngzài huīfù jiànkāng.) — Он восстанавливает здоровье.',
            '手术后需要 время恢复。 (Shǒushù hòu xūyào shíjiān huīfù.) — После операции нужно время на восстановление.',
            '我很快恢复了。 (Wǒ hěn kuài huīfù le.) — Я быстро поправился.'
        ]
    },
    10: {
        glyph: '量体温',
        pinyin: 'liáng tǐwēn',
        translation: 'измерять температуру',
        examples: [
            '护士给我量体温。 (Hùshi gěi wǒ liáng tǐwēn.) — Медсестра измерила мне температуру.',
            '发烧时要量体温。 (Fāshāo shí yào liáng tǐwēn.) — При температуре нужно измерять температуру тела.',
            '体温正常吗？ (Tǐwēn zhèngcháng ma?) — Температура в норме?'
        ]
    },
    11: {
        glyph: '检查',
        pinyin: 'jiǎnchá',
        translation: 'осматривать (медосмотр)',
        examples: [
            '我需要做身体检查。 (Wǒ xūyào zuò shēntǐ jiǎnchá.) — Мне нужно пройти медицинский осмотр.',
            '医生仔细检查了我的 сердце。 (Yīshēng zǐxì jiǎnchá le wǒ de xīnzàng.) — Врач тщательно осмотрел моё сердце.',
            '每年都要体检。 (Měinián dōu yào tǐjiǎn.) — Нужно проходить осмотр каждый год.'
        ]
    },
    12: {
        glyph: '治疗',
        pinyin: 'zhìliáo',
        translation: 'лечить',
        examples: [
            'Этот врач лечит рак。 (Zhège yīshēng zhìliáo áizhèng.) — Этот врач лечит рак.',
            'Лекарство лечит грипп。 (Zhè yào zhìliáo liúgǎn.) — Это лекарство лечит грипп.',
            'Он проходит лечение в больнице。 (Tā zài yīyuàn jiēshòu zhìliáo.) — Он проходит лечение в больнице.'
        ]
    },
    13: {
        glyph: '呕吐',
        pinyin: 'ǒutù',
        translation: 'рвать',
        examples: [
            'Его всю ночь рвало。 (Tā yī zhěng yè dōu zài ǒutù.) — Его всю ночь рвало.',
            'Не ешь это, иначе будет рвать。 (Bié chī zhège, fǒuzé huì ǒutù.) — Не ешь это, иначе будет рвать.',
            'У ребёнка рвёт от еды。 (Háizi chī le dōngxi jiù ǒutù.) — У ребёнка рвёт от еды.'
        ]
    }
};

const verbsNatureWeather: { [key: number]: DictItem } = {
    1: {
        glyph: '下雨',
        pinyin: 'xiàyǔ',
        translation: 'идти (о дожде)',
        examples: [
            '外面在下雨。 (Wàimiàn zài xiàyǔ.) — На улице идёт дождь.',
            '昨天没下雨。 (Zuótiān méi xiàyǔ.) — Вчера не было дождя.',
            '下雨了，带伞！ (Xiàyǔ le, dài sǎn!) — Дождь пошёл — бери зонт!'
        ]
    },
    2: {
        glyph: '下雪',
        pinyin: 'xiàxuě',
        translation: 'идти (о снеге)',
        examples: [
            '哈尔滨经常下雪。 (Hā\'ěrbīn jīngcháng xiàxuě.) — В Харбине часто идёт снег.',
            '下雪了，真美！ (Xiàxuě le, zhēn měi!) — Поешёл снег — как красиво!',
            '明天会下雪吗？ (Míngtiān huì xiàxuě ma?) — Завтра пойдёт снег?'
        ]
    },
    3: {
        glyph: '刮风',
        pinyin: 'guā fēng',
        translation: 'дуть (о ветре)',
        examples: [
            '今天刮大风。 (Jīntiān guā dà fēng.) — Сегодня дует сильный ветер.',
            '别开门，外面刮风。 (Bié kāi mén, wàimiàn guā fēng.) — Не открывай дверь, на улице ветрено.',
            '风刮得我睁不开眼。 (Fēng guā de wǒ zhēng bù kāi yǎn.) — Ветер такой, что глаза не открыть.'
        ]
    },
    4: {
        glyph: '打雷',
        pinyin: 'dǎ léi',
        translation: 'громыхать',
        examples: [
            '打雷了，别怕！ (Dǎ léi le, bié pà!) — Гремит гром — не бойся!',
            '打雷时别用手机。 (Dǎ léi shí bié yòng shǒujī.) — Во время грозы не пользуйся телефоном.',
            '昨夜打雷下雨。 (Zuó yè dǎ léi xiàyǔ.) — Прошлой ночью была гроза с дождём.'
        ]
    },
    5: {
        glyph: '闪电',
        pinyin: 'shǎn diàn',
        translation: 'сверкать (о молнии)',
        examples: [
            '闪电照亮了天空。 (Shǎn diàn zhào liàng le tiānkōng.) — Молния осветила небо.',
            '先闪电，后打雷。 (Xiān shǎn diàn, hòu dǎ léi.) — Сначала молния, потом гром.',
            '闪电很危险。 (Shǎn diàn hěn wēixiǎn.) — Молния опасна.'
        ]
    },
    6: {
        glyph: '发光',
        pinyin: 'fāguāng',
        translation: 'светиться',
        examples: [
            '太阳在发光。 (Tàiyáng zài fāguāng.) — Солнце светит.',
            '萤火虫会发光。 (Yínghuǒchóng huì fāguāng.) — Светлячки умеют светиться.',
            '这个灯泡不发光了。 (Zhège dēngpào bù fāguāng le.) — Эта лампочка больше не светит.'
        ]
    },
    7: {
        glyph: '开花',
        pinyin: 'kāi huā',
        translation: 'цвести',
        examples: [
            '春天花开了。 (Chūntiān huā kāi le.) — Весной цветы расцвели.',
            '这棵树什么时候开花？ (Zhè kē shù shénme shíhou kāi huā?) — Когда зацветёт это дерево?',
            '茉莉花开了，很香。 (Mòlì huā kāi le, hěn xiāng.) — Жасмин расцвёл — очень ароматно.'
        ]
    },
    8: {
        glyph: '结冰',
        pinyin: 'jiébīng',
        translation: 'замерзать',
        examples: [
            '湖面结冰了。 (Húmiàn jiébīng le.) — Поверхность озера замёрзла.',
            '水在零度结冰。 (Shuǐ zài líng dù jiébīng.) — Вода замерзает при нуле градусов.',
            '小心路结冰！ (Xiǎoxīn lù jiébīng!) — Осторожно, дорога покрыта льдом!'
        ]
    },
    9: {
        glyph: '融化',
        pinyin: 'rónghuà',
        translation: 'таять',
        examples: [
            '雪在融化。 (Xuě zài rónghuà.) — Снег тает.',
            '冰淇淋融化了。 (Bīngqílín rónghuà le.) — Мороженое растаяло.',
            '春天冰雪融化。 (Chūntiān bīngxuě rónghuà.) — Весной лёд и снег тают.'
        ]
    },
    10: {
        glyph: '升起',
        pinyin: 'shēng qǐ',
        translation: 'восходить',
        examples: [
            '太阳升起了。 (Tàiyáng shēng qǐ le.) — Солнце взошло.',
            '月亮升起来了。 (Yuèliang shēng qǐ lái le.) — Луна поднялась.',
            '每天早上太阳从东方升起。 (Měitiān zǎoshang tàiyáng cóng dōngfāng shēng qǐ.) — Каждое утро солнце восходит на востоке.'
        ]
    },
    11: {
        glyph: '落下',
        pinyin: 'luò xià',
        translation: 'заходить / падать',
        examples: [
            '太阳落下了。 (Tàiyáng luò xià le.) — Солнце зашло.',
            '树叶落下了。 (Shùyè luò xià le.) — Листья опали.',
            '雨点落下来了。 (Yǔdiǎn luò xià lái le.) — Капли дождя начали падать.'
        ]
    },
    12: {
        glyph: '照',
        pinyin: 'zhào',
        translation: 'согревать / светить (о солнце)',
        examples: [
            '太阳照得很暖和。 (Tàiyáng zhào de hěn nuǎnhuo.) — Солнце греет очень тепло.',
            '阳光照进房间。 (Yángguāng zhào jìn fángjiān.) — Солнечный свет проникает в комнату.',
            '冬天太阳照得少。 (Dōngtiān tàiyáng zhào de shǎo.) — Зимой солнце светит редко.'
        ]
    },
    13: {
        glyph: '生长',
        pinyin: 'shēngzhǎng',
        translation: 'расти (о растениях)',
        examples: [
            '草在春天快速生长。 (Cǎo zài chūntiān kuàisù shēngzhǎng.) — Трава быстро растёт весной.',
            '这棵树生长得很慢。 (Zhè kē shù shēngzhǎng de hěn màn.) — Это дерево растёт очень медленно.',
            '植物需要水才能生长。 (Zhíwù xūyào shuǐ cái néng shēngzhǎng.) — Растениям нужна вода, чтобы расти.'
        ]
    }
};

const verbsBodyFunctions: { [key: number]: DictItem } = {
    1: {
        glyph: '呼吸',
        pinyin: 'hūxī',
        translation: 'дышать',
        examples: [
            '深呼吸。 (Shēn hūxī.) — Сделай глубокий вдох.',
            '他呼吸困难。 (Tā hūxī kùnnán.) — Ему трудно дышать.',
            '水下不能呼吸。 (Shuǐxià bù néng hūxī.) — Под водой нельзя дышать.'
        ]
    },
    2: {
        glyph: '打哈欠',
        pinyin: 'dǎ hāqian',
        translation: 'зевать',
        examples: [
            '他一直在打哈欠。 (Tā yīzhí zài dǎ hāqian.) — Он всё время зевает.',
            '困了就打哈欠。 (Kùn le jiù dǎ hāqian.) — Когда сонно — зеваешь.',
            '上课时别打哈欠！ (Shàngkè shí bié dǎ hāqian!) — На уроке не зевай!'
        ]
    },
    3: {
        glyph: '眨',
        pinyin: 'zhǎ',
        translation: 'моргать',
        examples: [
            '她眨了眨眼。 (Tā zhǎ le zhǎ yǎn.) — Она моргнула.',
            '别一直眨眼睛！ (Bié yìzhí zhǎ yǎnjīng!) — Не моргай так часто!',
            '强光让我眨眼睛。 (Qiáng guāng ràng wǒ zhǎ yǎnjīng.) — Яркий свет заставляет меня моргать.'
        ]
    },
    4: {
        glyph: '流',
        pinyin: 'liú',
        translation: 'течь (о жидкостях из тела)',
        examples: [
            '鼻子流血了。 (Bízi liú xuè le.) — Из носа пошла кровь.',
            '眼睛流泪。 (Yǎnjing liú lèi.) — Глаза слезятся.',
            '伤口在流血。 (Shāngkǒu zài liú xuè.) — Рана кровоточит.'
        ]
    },
    5: {
        glyph: '出汗',
        pinyin: 'chū hàn',
        translation: 'потеть',
        examples: [
            '跑步后我出汗了。 (Pǎobù hòu wǒ chū hàn le.) — После бега я вспотел.',
            '天热容易出汗。 (Tiān rè róngyì chū hàn.) — В жару легко вспотеть.',
            '别紧张，你出汗了。 (Bié jǐnzhāng, nǐ chū hàn le.) — Не нервничай, ты вспотел.'
        ]
    },
    6: {
        glyph: '吞',
        pinyin: 'tūn',
        translation: 'глотать',
        examples: [
            '慢慢吞。 (Mànmàn tūn.) — Глотай медленно.',
            '他吞了药片。 (Tā tūn le yàopiàn.) — Он проглотил таблетку.',
            '别吞口香ку！ (Bié tūn kǒuxiānggǔ!) — Не глотай жвачку!'
        ]
    },
    7: {
        glyph: '咀嚼',
        pinyin: 'jǔjué',
        translation: 'жевать',
        examples: [
            '慢慢咀嚼食物。 (Mànmàn jǔjué shíwù.) — Жевай пищу медленно.',
            '牛在咀嚼草。 (Niú zài jǔjué cǎo.) — Корова жуёт траву.',
            '别说话，你在咀嚼！ (Bié shuōhuà, nǐ zài jǔjué!) — Не разговаривай, ты жуёшь!'
        ]
    },
    8: {
        glyph: '排尿',
        pinyin: 'páiniào',
        translation: 'мочиться',
        examples: [
            '孩子会自己排尿了。 (Háizi huì zìjǐ páiniào le.) — Ребёнок уже может сам ходить по-маленькому.',
            '这个药会让你多排尿。 (Zhège yào huì ràng nǐ duō páiniào.) — От этого лекарства ты будешь мочиться чаще.',
            '排尿时感到疼痛。 (Páiniào shí gǎndào téngtòng.) — При мочеиспускании ощущается боль.'
        ]
    },
    9: {
        glyph: '排便',
        pinyin: 'páibiàn',
        translation: 'какать',
        examples: [
            '每天排便很重要。 (Měitiān páibiàn hěn zhòngyào.) — Очень важно какать каждый день.',
            '这个食物帮助排便。 (Zhège shíwù bāngzhù páibiàn.) — Эта еда помогает стулу.',
            '他排便困难。 (Tā páibiàn kùnnán.) — У него запор.'
        ]
    },
    10: {
        glyph: '打嗝',
        pinyin: 'dǎ gé',
        translation: 'икать',
        examples: [
            '他吃完饭打嗝了。 (Tā chī wán fàn dǎ gé le.) — Он икнул после еды.',
            '喝水可以停止打嗝。 (Hē shuǐ kěyǐ tíngzhǐ dǎ gé.) — От икоты помогает вода.',
            '别在公共场合打嗝！ (Bié zài gōnggòng chǎnghé dǎ gé!) — Не икай в общественных местах!'
        ]
    },
    11: {
        glyph: '放屁',
        pinyin: 'fàng pì',
        translation: 'пердеть',
        examples: [
            '别在教室放屁！ (Bié zài jiàoshì fàng pì!) — Не перди в классе!',
            '吃豆子容易放屁。 (Chī dòuzi róngyì fàng pì.) — От бобов легко пердеть.',
            '他偷偷放屁了。 (Tā tōutōu fàng pì le.) — Он тихонько пернул.'
        ]
    },
    12: {
        glyph: '哭',
        pinyin: 'kū',
        translation: 'плакать',
        examples: [
            '孩子在哭。 (Háizi zài kū.) — Ребёнок плачет.',
            '别哭，没事的。 (Bié kū, méishì de.) — Не плачь, всё в порядке.',
            '她哭得很伤心。 (Tā kū de hěn shāngxīn.) — Она плакала очень горько.'
        ]
    },
    13: {
        glyph: '笑',
        pinyin: 'xiào',
        translation: 'смеяться',
        examples: [
            '他大声笑。 (Tā dàshēng xiào.) — Он громко смеётся.',
            '这个笑话太好笑了。 (Zhège xiàohuà tài hǎoxiào le.) — Этот анекдот слишком смешной.',
            '她笑得眼睛都眯起来了。 (Tā xiào de yǎnjing dōu mī qǐlái le.) — Она смеялась так, что глаза превратились в щёлочки.'
        ]
    },
    14: {
        glyph: '睡',
        pinyin: 'shuì',
        translation: 'спать',
        examples: [
            '我十一点睡。 (Wǒ shíyī diǎn shuì.) — Я ложусь спать в одиннадцать.',
            '别吵！我在睡！ (Bié chǎo! Wǒ zài shuì!) — Не шуми! Я сплю!',
            '他睡得很香。 (Tā shuì de hěn xiāng.) — Он спит очень крепко.'
        ]
    },
    15: {
        glyph: '醒',
        pinyin: 'xǐng',
        translation: 'просыпаться',
        examples: [
            '我六点就醒了。 (Wǒ liù diǎn jiù xǐng le.) — Я проснулся уже в шесть.',
            '别叫醒他！ (Bié jiào xǐng tā!) — Не буди его!',
            '他还没醒。 (Tā hái méi xǐng.) — Он ещё не проснулся.'
        ]
    }
};

const verbsDailyRoutine: { [key: number]: DictItem } = {
    1: {
        glyph: '起床',
        pinyin: 'qǐchuáng',
        translation: 'вставать с постели',
        examples: [
            '我六点起床。 (Wǒ liù diǎn qǐchuáng.) — Я встаю в шесть.',
            '他起得很早。 (Tā qǐ de hěn zǎo.) — Он встаёт очень рано.',
            '周末你几点起床？ (Zhōumò nǐ jǐ diǎn qǐchuáng?) — Во сколько ты встаёшь по выходным?'
        ]
    },
    2: {
        glyph: '睡觉',
        pinyin: 'shuìjiào',
        translation: 'спать',
        examples: [
            '我十一点睡觉。 (Wǒ shíyī diǎn shuìjiào.) — Я ложусь спать в 11.',
            '小孩需要多睡觉。 (Xiǎohái xūyào duō shuìjiào.) — Детям нужно много спать.',
            '别吵！我在睡觉！ (Bié chǎo! Wǒ zài shuìjiào!) — Не шуми! Я сплю!'
        ]
    },
    3: {
        glyph: '洗漱',
        pinyin: 'xǐshù',
        translation: 'умываться (мыть лицо и чистить зубы)',
        examples: [
            '我每天早上洗漱。 (Wǒ měitiān zǎoshang xǐshù.) — Я умываюсь каждое утро.',
            '洗漱后我感觉很清醒。 (Xǐshù hòu wǒ gǎnjué hěn qīngxǐng.) — После умывания я чувствую себя бодро.',
            '洗漱间在那边。 (Xǐshùjiān zài nàbiān.) — Умывальная комната там.'
        ]
    },
    4: {
        glyph: '刷牙',
        pinyin: 'shuā yá',
        translation: 'чистить зубы',
        examples: [
            '早上要刷牙。 (Zǎoshang yào shuā yá.) — Нужно чистить зубы утром.',
            '我刷完牙了。 (Wǒ shuā wán yá le.) — Я уже почистил зубы.',
            '别忘了刷牙！ (Bié wàng le shuā yá!) — Не забудь почистить зубы!'
        ]
    },
    5: {
        glyph: '洗脸',
        pinyin: 'xǐ liǎn',
        translation: 'умываться (мыть лицо)',
        examples: [
            '起床后我洗脸。 (Qǐchuáng hòu wǒ xǐ liǎn.) — После подъёма я умываюсь.',
            '用冷水洗脸很提神。 (Yòng lěngshuǐ xǐ liǎn hěn tíshén.) — Умываться холодной водой бодрит.',
            '她正在洗脸。 (Tā zhèngzài xǐ liǎn.) — Она сейчас умывается.'
        ]
    },
    6: {
        glyph: '洗澡',
        pinyin: 'xǐzǎo',
        translation: 'принимать душ / мыться',
        examples: [
            '我每天晚上洗澡。 (Wǒ měitiān wǎnshang xǐzǎo.) — Я принимаю душ каждый вечер.',
            '他洗完澡了。 (Tā xǐ wán zǎo le.) — Он уже помылся.',
            '热水没了，不能洗澡。 (Rèshuǐ méi le, bù néng xǐzǎo.) — Горячая вода кончилась, не могу помыться.'
        ]
    },
    7: {
        glyph: '剃胡子',
        pinyin: 'tì húzi',
        translation: 'бриться',
        examples: [
            '他每天早上剃胡子。 (Tā měitiān zǎoshang tì húzi.) — Он бреется каждое утро.',
            '我忘记剃胡子了。 (Wǒ wàngjì tì húzi le.) — Я забыл побриться.',
            '电动剃须刀很方便。 (Diàndòng tìxūdāo hěn fāngbiàn.) — Электробритва очень удобна.'
        ]
    },
    8: {
        glyph: '梳头',
        pinyin: 'shū tóu',
        translation: 'расчёсываться',
        examples: [
            '她喜欢梳头。 (Tā xǐhuan shū tóu.) — Она любит расчёсываться.',
            '我用木梳梳头。 (Wǒ yòng mù shū shū tóu.) — Я расчёсываюсь деревянной расчёской.',
            '梳完头再出门。 (Shū wán tóu zài chūmén.) — Сначала расчешись, потом выходи.'
        ]
    },
    9: {
        glyph: '化妆',
        pinyin: 'huàzhuāng',
        translation: 'наносить макияж',
        examples: [
            '她每天化妆。 (Tā měitiān huàzhuāng.) — Она каждый день наносит макияж.',
            '化完妆再拍照。 (Huà wán zhuāng zài pāizhào.) — Сначала нанеси макияж, потом фотографируйся.',
            '我不喜欢化妆。 (Wǒ bù xǐhuan huàzhuāng.) — Я не люблю макияж.'
        ]
    },
    10: {
        glyph: '刮腿毛',
        pinyin: 'guā tuǐmáo',
        translation: 'брит ноги',
        examples: [
            '夏天她刮腿毛。 (Xiàtiān tā guā tuǐmáo.) — Летом она бреет ноги.',
            '刮腿毛要用剃刀。 (Guā tuǐmáo yào yòng tìdāo.) — Для бритья ног нужен станок.',
            '别刮伤皮肤！ (Bié guā shāng pífū!) — Не порежь кожу!'
        ]
    },
    11: {
        glyph: '穿衣服',
        pinyin: 'chuān yīfu',
        translation: 'одеваться',
        examples: [
            '我穿衣服很快。 (Wǒ chuān yīfu hěn kuài.) — Я одеваюсь очень быстро.',
            '穿好衣服再出门。 (Chuān hǎo yīfu zài chūmén.) — Сначала оденься, потом выходи.',
            '今天穿什么衣服？ (Jīntiān chuān shénme yīfu?) — Во что одеться сегодня?'
        ]
    },
    12: {
        glyph: '扣扣子',
        pinyin: 'kòu kòuzi',
        translation: 'застёгивать пуговицы',
        examples: [
            '请扣好扣子。 (Qǐng kòu hǎo kòuzi.) — Пожалуйста, застегни пуговицы.',
            '他忘了扣扣子。 (Tā wàng le kòu kòuzi.) — Он забыл застегнуть пуговицы.',
            '这件衬衫有很多扣子。 (Zhè jiàn chènshān yǒu hěn duō kòuzi.) — На этой рубашке много пуговиц.'
        ]
    },
    13: {
        glyph: '系鞋带',
        pinyin: 'jì xiédài',
        translation: 'завязывать шнурки',
        examples: [
            '孩子还不会系鞋带。 (Háizi hái bú huì jì xiédài.) — Ребёнок ещё не умеет завязывать шнурки.',
            '别忘了系鞋带！ (Bié wàng le jì xiédài!) — Не забудь завязать шнурки!',
            '鞋带松了。 (Xiédài sōng le.) — Шнурки развязались.'
        ]
    },
    14: {
        glyph: '吃早餐',
        pinyin: 'chī zǎocān',
        translation: 'завтракать',
        examples: [
            '我七点吃早餐。 (Wǒ qī diǎn chī zǎocān.) — Я завтракаю в семь.',
            '不吃早餐对身体不好。 (Bù chī zǎocān duì shēntǐ bù hǎo.) — Пропускать завтрак вредно для здоровья.',
            '早餐吃什么？ (Zǎocān chī shénme?) — Что будешь есть на завтрак?'
        ]
    },
    15: {
        glyph: '吃午餐',
        pinyin: 'chī wǔcān',
        translation: 'обедать',
        examples: [
            '我们十二点吃午餐。 (Wǒmen shí\'èr diǎn chī wǔcān.) — Мы обедаем в двенадцать.',
            '公司提供午餐。 (Gōngsī tígōng wǔcān.) — В компании дают обед.',
            '今天午餐吃什么？ (Jīntiān wǔcān chī shénme?) — Что на обед сегодня?'
        ]
    },
    16: {
        glyph: '吃晚餐',
        pinyin: 'chī wǎncān',
        translation: 'ужинать',
        examples: [
            '我们七点吃晚餐。 (Wǒmen qī diǎn chī wǎncān.) — Мы ужинаем в семь.',
            '晚餐后我散步。 (Wǎncān hòu wǒ sànbù.) — После ужина я гуляю.',
            '不要吃太晚的晚餐。 (Búyào chī tài wǎn de wǎncān.) — Не ешь слишком поздний ужин.'
        ]
    },
    17: {
        glyph: '整理床铺',
        pinyin: 'zhěnglǐ chuángpù',
        translation: 'убирать кровать',
        examples: [
            '起床后要整理床铺。 (Qǐchuáng hòu yào zhěnglǐ chuángpù.) — Нужно заправлять кровать после подъёма.',
            '她每天都整理床铺。 (Tā měitiān dōu zhěnglǐ chuángpù.) — Она каждый день заправляет кровать.',
            '整理完床铺再离开房间。 (Zhěnglǐ wán chuángpù zài líkāi fángjiān.) — Сначала заправь кровать, потом выходи из комнаты.'
        ]
    },
    18: {
        glyph: '叠衣服',
        pinyin: 'dié yīfu',
        translation: 'складывать одежду',
        examples: [
            '洗完衣服要叠好。 (Xǐ wán yīfu yào dié hǎo.) — После стирки одежду нужно сложить.',
            '我会叠衬衫。 (Wǒ huì dié chènshān.) — Я умею складывать рубашки.',
            '别把衣服乱扔！叠起来！ (Bié bǎ yīfu luàn rēng! Dié qǐlái!) — Не бросай одежду! Сложи её!'
        ]
    },
    19: {
        glyph: '熨衣服',
        pinyin: 'yùn yīfu',
        translation: 'гладить одежду',
        examples: [
            '这件衬衫需要熨。 (Zhè jiàn chènshān xūyào yùn.) — Эту рубашку нужно погладить.',
            '我妈妈在熨衣服。 (Wǒ māma zài yùn yīfu.) — Моя мама гладит одежду.',
            '熨斗很烫，小心！ (Yùndǒu hěn tàng, xiǎoxīn!) — Утюг горячий, будь осторожен!'
        ]
    },
    20: {
        glyph: '打扫房间',
        pinyin: 'dǎsǎo fángjiān',
        translation: 'убирать комнату',
        examples: [
            '我每周打扫房间一次。 (Wǒ měi zhōu dǎsǎo fángjiān yī cì.) — Я убираю комнату раз в неделю.',
            '打扫完房间再休息。 (Dǎsǎo wán fángjiān zài xiūxi.) — Сначала убери комнату, потом отдыхай.',
            '房间很脏，需要打扫。 (Fángjiān hěn zāng, xūyào dǎsǎo.) — Комната грязная, её нужно убрать.'
        ]
    },
    21: {
        glyph: '拖地',
        pinyin: 'tuō dì',
        translation: 'мыть пол',
        examples: [
            '我刚拖完地。 (Wǒ gāng tuō wán dì.) — Я только что помыл пол.',
            '拖地要用拖把。 (Tuō dì yào yòng tuōbǎ.) — Для мытья пола нужна швабра.',
            '地板很滑，刚拖过。 (Dìbǎn hěn huá, gāng tuō guò.) — Пол скользкий, только что помыли.'
        ]
    },
    22: {
        glyph: '擦桌子',
        pinyin: 'cā zhuōzi',
        translation: 'вытирать стол',
        examples: [
            '吃饭前要擦桌子。 (Chīfàn qián yào cā zhuōzi.) — Перед едой нужно вытереть стол.',
            '我用湿布擦桌子。 (Wǒ yòng shī bù cā zhuōzi.) — Я вытираю стол влажной тряпкой.',
            '桌子上有灰尘，快擦！ (Zhuōzi shàng yǒu huīchén, kuài cā!) — На столе пыль, скорее вытри!'
        ]
    },
    23: {
        glyph: '倒垃圾',
        pinyin: 'dào lājī',
        translation: 'выносить мусор',
        examples: [
            '垃圾满了，去倒垃圾！ (Lājī mǎn le, qù dào lājī!) — Мусорное ведро полное, иди вынеси мусор!',
            '我每天晚上倒垃圾。 (Wǒ měitiān wǎnshang dào lājī.) — Я выношу мусор каждый вечер.',
            '别忘了倒垃圾！ (Bié wàng le dào lājī!) — Не забудь вынести мусор!'
        ]
    },
    24: {
        glyph: '铺床',
        pinyin: 'pū chuáng',
        translation: 'стелить постель',
        examples: [
            '客人要来，快铺床！ (Kèrén yào lái, kuài pū chuáng!) — Гости придут, скорее застели кровать!',
            '我每天铺床。 (Wǒ měitiān pū chuáng.) — Я каждый день застилаю кровать.',
            '新床单很舒服。 (Xīn chuángdān hěn shūfu.) — Новое постельное бельё очень комфортное.'
        ]
    },
    25: {
        glyph: '关灯',
        pinyin: 'guān dēng',
        translation: 'выключать свет',
        examples: [
            '睡觉前要关灯。 (Shuìjiào qián yào guān dēng.) — Перед сном нужно выключить свет.',
            '请关灯！ (Qǐng guān dēng!) — Пожалуйста, выключи свет!',
            '我忘了关灯。 (Wǒ wàng le guān dēng.) — Я забыл выключить свет.'
        ]
    }
};

const verbsEatingDrinking: { [key: number]: DictItem } = {
    1: {
        glyph: '吃',
        pinyin: 'chī',
        translation: 'есть',
        examples: [
            '我吃米饭。 (Wǒ chī mǐfàn.) — Я ем рис.',
            '别吃太多糖！ (Bié chī tài duō táng!) — Не ешь слишком много сахара!',
            '他正在吃苹果。 (Tā zhèngzài chī píngguǒ.) — Он ест яблоко.'
        ]
    },
    2: {
        glyph: '喝',
        pinyin: 'hē',
        translation: 'пить',
        examples: [
            '他喝茶。 (Tā hē chá.) — Он пьёт чай.',
            '多喝水。 (Duō hē shuǐ.) — Пей больше воды.',
            '我不喝咖啡。 (Wǒ bù hē kāfēi.) — Я не пью кофе.'
        ]
    },
    3: {
        glyph: '点菜',
        pinyin: 'diǎn cài',
        translation: 'заказывать блюда (в ресторане)',
        examples: [
            '我们点菜吧。 (Wǒmen diǎn cài ba.) — Давай закажем еду.',
            '他点了三道菜。 (Tā diǎn le sān dào cài.) — Он заказал три блюда.',
            '菜单上有什么好吃的？ (Càidān shàng yǒu shénme hǎochī de?) — Что вкусного в меню?'
        ]
    },
    4: {
        glyph: '上菜',
        pinyin: 'shàng cài',
        translation: 'подавать еду (официант)',
        examples: [
            '菜上齐了吗？ (Cài shàng qí le ma?) — Все блюда уже подали?',
            '服务员开始上菜了。 (Fúwùyuán kāishǐ shàng cài le.) — Официант начал подавать еду.',
            '这道菜刚上桌就凉了。 (Zhè dào cài gāng shàng zhuō jiù liáng le.) — Это блюдо остыло сразу после подачи.'
        ]
    },
    5: {
        glyph: '做饭',
        pinyin: 'zuò fàn',
        translation: 'готовить еду',
        examples: [
            '妈妈在做饭。 (Māma zài zuò fàn.) — Мама готовит еду.',
            '我会做饭。 (Wǒ huì zuò fàn.) — Я умею готовить.',
            '今天谁做饭？ (Jīntiān shéi zuò fàn?) — Кто сегодня готовит?'
        ]
    },
    6: {
        glyph: '煮',
        pinyin: 'zhǔ',
        translation: 'варить',
        examples: [
            '我煮面条。 (Wǒ zhǔ miàntiáo.) — Я варю лапшу.',
            '水开了再下面。 (Shuǐ kāi le zài xià miàn.) — Когда вода закипит — бросай лапшу.',
            '他煮了一锅汤。 (Tā zhǔ le yī guō tāng.) — Он сварил кастрюлю супа.'
        ]
    },
    7: {
        glyph: '炒',
        pinyin: 'chǎo',
        translation: 'жарить на сковороде',
        examples: [
            '他炒鸡蛋。 (Tā chǎo jīdàn.) — Он жарит яичницу.',
            '我喜欢吃炒饭。 (Wǒ xǐhuan chī chǎofàn.) — Мне нравится жареный рис.',
            '炒菜要用大火。 (Chǎo cài yào yòng dà huǒ.) — Для жарки нужно сильное пламя.'
        ]
    },
    8: {
        glyph: '烤',
        pinyin: 'kǎo',
        translation: 'запекать / жарить на гриле',
        examples: [
            '我们烤肉。 (Wǒmen kǎo ròu.) — Мы жарим мясо (на гриле).',
            '烤箱在厨房。 (Kǎoxiāng zài chúfáng.) — Духовка на кухне.',
            '这个面包是烤的。 (Zhège miànbāo shì kǎo de.) — Этот хлеб запечённый.'
        ]
    },
    9: {
        glyph: '蒸',
        pinyin: 'zhēng',
        translation: 'готовить на пару',
        examples: [
            '她蒸鱼。 (Tā zhēng yú.) — Она готовит рыбу на пару.',
            '包子是蒸的。 (Bāozi shì zhēng de.) — Баньцзы готовят на пару.',
            '蒸菜很健康。 (Zhēng cài hěn jiànkāng.) — Блюда на пару очень полезны.'
        ]
    },
    10: {
        glyph: '切',
        pinyin: 'qiē',
        translation: 'резать',
        examples: [
            '切苹果。 (Qiē píngguǒ.) — Режь яблоко.',
            '小心切到手！ (Xiǎoxīn qiē dào shǒu!) — Осторожно, не порежься!',
            '他把肉切成小块。 (Tā bǎ ròu qiē chéng xiǎo kuài.) — Он нарезал мясо на мелкие кусочки.'
        ]
    },
    11: {
        glyph: '搅拌',
        pinyin: 'jiǎobàn',
        translation: 'перемешивать',
        examples: [
            '搅拌鸡蛋。 (Jiǎobàn jīdàn.) — Перемешай яйца.',
            '煮汤时要搅拌。 (Zhǔ tāng shí yào jiǎobàn.) — При варке супа нужно помешивать.',
            '用筷子搅拌。 (Yòng kuàizi jiǎobàn.) — Перемешивай палочками.'
        ]
    },
    12: {
        glyph: '倒',
        pinyin: 'dào',
        translation: 'наливать',
        examples: [
            '给我倒杯水。 (Gěi wǒ dào bēi shuǐ.) — Налей мне стакан воды.',
            '他倒了一杯茶。 (Tā dào le yī bēi chá.) — Он налил чашку чая.',
            '别倒太多！ (Bié dào tài duō!) — Не наливай слишком много!'
        ]
    },
    13: {
        glyph: '品尝',
        pinyin: 'pǐncháng',
        translation: 'дегустировать',
        examples: [
            '请品尝这道菜。 (Qǐng pǐncháng zhè dào cài.) — Попробуйте это блюдо.',
            '他在品尝红酒。 (Tā zài pǐncháng hóngjiǔ.) — Он дегустирует красное вино.',
            '这道菜值得品尝。 (Zhè dào cài zhídé pǐncháng.) — Это блюдо стоит попробовать.'
        ]
    },
    14: {
        glyph: '尝',
        pinyin: 'cháng',
        translation: 'пробовать (на вкус)',
        examples: [
            '你尝尝这个。 (Nǐ chángchang zhège.) — Попробуй это.',
            '汤太咸了，你尝尝。 (Tāng tài xián le, nǐ chángchang.) — Суп слишком солёный, попробуй.',
            '我没尝过榴莲。 (Wǒ méi cháng guò liúlián.) — Я никогда не пробовал дуриан.'
        ]
    },
    15: {
        glyph: '咽',
        pinyin: 'yàn',
        translation: 'проглатывать',
        examples: [
            '别着急，慢慢咽。 (Bié zháojí, mànman yàn.) — Не торопись, глотай медленно.',
            '药片很难咽。 (Yàopiàn hěn nán yàn.) — Таблетки трудно проглотить.',
            '他咽不下这口气。 (Tā yàn bù xià zhè kǒu qì.) — Он не может с этим смириться (букв. «проглотить этот дух»).'
        ]
    },
    16: {
        glyph: '咀嚼',
        pinyin: 'jǔjué',
        translation: 'жевать',
        examples: [
            '慢慢咀嚼食物。 (Mànmàn jǔjué shíwù.) — Жевай пищу медленно.',
            '牛在咀嚼草。 (Niú zài jǔjué cǎo.) — Корова жуёт траву.',
            '别说话，你在咀嚼！ (Bié shuōhuà, nǐ zài jǔjué!) — Не разговаривай, ты жуёшь!'
        ]
    },
    17: {
        glyph: '吐',
        pinyin: 'tǔ',
        translation: 'выплёвывать',
        examples: [
            '骨头要吐出来。 (Gútou yào tǔ chūlái.) — Кости нужно выплёвывать.',
            '他吐了口香糖。 (Tā tǔ le kǒuxiānggǔ.) — Он выплюнул жвачку.',
            '别随地吐痰！ (Bié suídì tǔ tán!) — Не плюй на землю!'
        ]
    },
    18: {
        glyph: '饿',
        pinyin: 'è',
        translation: 'испытывать голод',
        examples: [
            '我饿了。 (Wǒ è le.) — Я голоден.',
            '他饿得走不动了。 (Tā è de zǒu bù dòng le.) — Он так голоден, что не может идти.',
            '别饿着自己。 (Bié è zhe zìjǐ.) — Не голодай.'
        ]
    },
    19: {
        glyph: '渴',
        pinyin: 'kě',
        translation: 'испытывать жажду',
        examples: [
            '我渴了，想喝水。 (Wǒ kě le, xiǎng hē shuǐ.) — Я хочу пить.',
            '运动后很渴。 (Yùndòng hòu hěn kě.) — После тренировки очень хочется пить.',
            '别渴太久！ (Bié kě tài jiǔ!) — Не терпи жажду слишком долго!'
        ]
    },
    20: {
        glyph: '饱',
        pinyin: 'bǎo',
        translation: 'быть сытым',
        examples: [
            '我吃饱了。 (Wǒ chī bǎo le.) — Я наелся.',
            '吃太饱对胃不好。 (Chī tài bǎo duì wèi bù hǎo.) — Слишком много есть вредно для желудка.',
            '这顿饭很饱。 (Zhè dùn fàn hěn bǎo.) — Этот приём пищи очень сытный.'
        ]
    },
    21: {
        glyph: '剩',
        pinyin: 'shèng',
        translation: 'оставлять еду (не доедать)',
        examples: [
            '别剩饭！ (Bié shèng fàn!) — Не оставляй еду!',
            '盘子里剩了很多菜。 (Pánzi lǐ shèng le hěn duō cài.) — На тарелке осталось много еды.',
            '中国人不喜欢剩菜。 (Zhōngguó rén bù xǐhuan shèng cài.) — Китайцы не любят оставлять еду.'
        ]
    },
    22: {
        glyph: '打包',
        pinyin: 'dǎbāo',
        translation: 'брать еду с собой (в упаковке)',
        examples: [
            '剩下的菜打包。 (Shèng xià de cài dǎbāo.) — Оставшуюся еду упакуйте.',
            '我们打包回家吃。 (Wǒmen dǎbāo huí jiā chī.) — Мы возьмём еду домой.',
            '在餐厅可以打包吗？ (Zài cāntīng kěyǐ dǎbāo ma?) — В ресторане можно взять с собой?'
        ]
    },
    23: {
        glyph: '干杯',
        pinyin: 'gānbēi',
        translation: 'выпить залпом (тост)',
        examples: [
            '为友谊干杯！ (Wèi yǒuyì gānbēi!) — Выпьем за дружбу!',
            '大家一起干杯。 (Dàjiā yīqǐ gānbēi.) — Давайте выпьем все вместе.',
            '干杯后一饮而尽。 (Gānbēi hòu yī yǐn ér jìn.) — После тоста — залпом до дна.'
        ]
    },
    24: {
        glyph: '夹菜',
        pinyin: 'jiā cài',
        translation: 'брать еду палочками (из общего блюда)',
        examples: [
            '用公筷夹菜。 (Yòng gōng kuàizi jiā cài.) — Берите еду общественными палочками.',
            '他给我夹了鱼。 (Tā gěi wǒ jiā le yú.) — Он положил мне рыбу.',
            '别在盘子里翻菜！ (Bié zài pánzi lǐ fān cài!) — Не рыщите в блюде!'
        ]
    },
    25: {
        glyph: '敬酒',
        pinyin: 'jìng jiǔ',
        translation: 'предлагать тост',
        examples: [
            '我敬你一杯。 (Wǒ jìng nǐ yī bēi.) — Я предлагаю тебе тост.',
            '领导敬酒时要站起来。 (Lǐngdǎo jìng jiǔ shí yào zhàn qǐlái.) — Когда начальник предлагает тост, нужно встать.',
            '他向长辈敬酒。 (Tā xiàng zhǎngbèi jìng jiǔ.) — Он предложил тост старшим.'
        ]
    }
};

const verbsLearningStudy: { [key: number]: DictItem } = {
    1: {
        glyph: '学习',
        pinyin: 'xuéxí',
        translation: 'учиться / изучать',
        examples: [
            '我学习中文。 (Wǒ xuéxí Zhōngwén.) — Я изучаю китайский.',
            '孩子们每天学习。 (Háizimen měitiān xuéxí.) — Дети учатся каждый день.',
            '他在学习开车。 (Tā zài xuéxí kāichē.) — Он учится водить машину.'
        ]
    },
    2: {
        glyph: '学',
        pinyin: 'xué',
        translation: 'учить (что-то новое)',
        examples: [
            '我学钢琴。 (Wǒ xué gāngqín.) — Я учу игру на пианино.',
            '她学跳舞。 (Tā xué tiàowǔ.) — Она учится танцевать.',
            '你要学新单词。 (Nǐ yào xué xīn dāncí.) — Тебе нужно выучить новые слова.'
        ]
    },
    3: {
        glyph: '教',
        pinyin: 'jiāo',
        translation: 'учить (кого-то)',
        examples: [
            '她教中文。 (Tā jiāo Zhōngwén.) — Она преподаёт китайский.',
            '谁教你？ (Shéi jiāo nǐ?) — Кто тебя учит?',
            '我想教你俄语。 (Wǒ xiǎng jiāo nǐ Éyǔ.) — Я хочу научить тебя русскому.'
        ]
    },
    4: {
        glyph: '复习',
        pinyin: 'fùxí',
        translation: 'повторять (пройденное)',
        examples: [
            '我每天复习中文。 (Wǒ měitiān fùxí Zhōngwén.) — Я повторяю китайский каждый день.',
            '考试前要复习。 (Kǎoshì qián yào fùxí.) — Перед экзаменом нужно повторять.',
            '他复习到很晚。 (Tā fùxí dào hěn wǎn.) — Он повторял до позднего вечера.'
        ]
    },
    5: {
        glyph: '预习',
        pinyin: 'yùxí',
        translation: 'готовиться заранее (к уроку)',
        examples: [
            '明天有课，今晚要预习。 (Míngtiān yǒu kè, jīnwǎn yào yùxí.) — Завтра занятия, сегодня вечером нужно подготовиться.',
            '预习能帮助你理解新课。 (Yùxí néng bāngzhù nǐ lǐjiě xīn kè.) — Предварительная подготовка помогает понять новый материал.',
            '老师要求我们预习。 (Lǎoshī yāoqiú wǒmen yùxí.) — Учитель требует, чтобы мы готовились заранее.'
        ]
    },
    6: {
        glyph: '背',
        pinyin: 'bèi',
        translation: 'зазубривать / учить наизусть',
        examples: [
            '我背单词。 (Wǒ bèi dāncí.) — Я зубрю слова.',
            '他背了一首诗。 (Tā bèi le yī shǒu shī.) — Он выучил стихотворение наизусть.',
            '背课文很难。 (Bèi kèwén hěn nán.) — Учить текст наизусть трудно.'
        ]
    },
    7: {
        glyph: '记住',
        pinyin: 'jì zhu',
        translation: 'запоминать',
        examples: [
            '请记住这个规则。 (Qǐng jì zhu zhège guīzé.) — Пожалуйста, запомните это правило.',
            '我记住了你的名字。 (Wǒ jì zhu le nǐ de míngzì.) — Я запомнил твоё имя.',
            '很难记住所有 слова。 (Hěn nán jì zhu suǒyǒu dāncí.) — Сложно запомнить все слова.'
        ]
    },
    8: {
        glyph: '忘记',
        pinyin: 'wàngjì',
        translation: 'забывать',
        examples: [
            '我忘记带课本了。 (Wǒ wàngjì dài kèběn le.) — Я забыл принести учебник.',
            '别忘了作业！ (Bié wàng le zuòyè!) — Не забудь про домашку!',
            '他忘记了老师的电话。 (Tā wàngjì le lǎoshī de diànhuà.) — Он забыл телефон учителя.'
        ]
    },
    9: {
        glyph: '理解',
        pinyin: 'lǐjiě',
        translation: 'понимать (смысл)',
        examples: [
            '你能理解这个句子吗？ (Nǐ néng lǐjiě zhège jùzi ma?) — Ты понимаешь это предложение?',
            '我不理解他的解释。 (Wǒ bù lǐjiě tā de jiěshì.) — Я не понимаю его объяснения.',
            '理解比记住更重要。 (Lǐjiě bǐ jì zhu gèng zhòngyào.) — Понимание важнее запоминания.'
        ]
    },
    10: {
        glyph: '明白',
        pinyin: 'míngbái',
        translation: 'понимать (ясно)',
        examples: [
            '你明白我的意思吗？ (Nǐ míngbái wǒ de yìsi ma?) — Ты понимаешь, что я имею в виду?',
            '我明白了！ (Wǒ míngbái le!) — Я понял!',
            '他不明白这个问题。 (Tā bù míngbái zhège wèntí.) — Он не понимает этот вопрос.'
        ]
    },
    11: {
        glyph: '考试',
        pinyin: 'kǎoshì',
        translation: 'сдавать экзамен',
        examples: [
            '明天我们考试。 (Míngtiān wǒmen kǎoshì.) — Завтра у нас экзамен.',
            '他考试得了满分。 (Tā kǎoshì dé le mǎnfēn.) — Он получил 100 баллов на экзамене.',
            '别紧张，考试很简单。 (Bié jǐnzhāng, kǎoshì hěn jiǎndān.) — Не нервничай, экзамен лёгкий.'
        ]
    },
    12: {
        glyph: '通过',
        pinyin: 'tōngguò',
        translation: 'сдать успешно',
        examples: [
            '我通过了中文考试。 (Wǒ tōngguò le Zhōngwén kǎoshì.) — Я сдал экзамен по китайскому.',
            '他通过了驾照考试。 (Tā tōngguò le jiàzhào kǎoshì.) — Он сдал на права.',
            '努力就能通过。 (Nǔlì jiù néng tōngguò.) — Если постараться, сдашь.'
        ]
    },
    13: {
        glyph: '不及格',
        pinyin: 'bù jígé',
        translation: 'провалить экзамен',
        examples: [
            '他数学考试不及格。 (Tā shùxué kǎoshì bù jígé.) — Он провалил экзамен по математике.',
            '如果不及格，要重考。 (Rúguǒ bù jígé, yào chóng kǎo.) — Если провалишь — сдавать заново.',
            '别担心，你不会不及格。 (Bié dānxīn, nǐ bú huì bù jígé.) — Не волнуйся, ты не провалишься.'
        ]
    },
    14: {
        glyph: '做作业',
        pinyin: 'zuò zuòyè',
        translation: 'делать домашнее задание',
        examples: [
            '我在做作业。 (Wǒ zài zuò zuòyè.) — Я делаю домашку.',
            '孩子每天做作业。 (Háizi měitiān zuò zuòyè.) — Ребёнок делает ДЗ каждый день.',
            '作业太多，做不完。 (Zuòyè tài duō, zuò bù wán.) — Домашки слишком много, не успеть.'
        ]
    },
    15: {
        glyph: '检查作业',
        pinyin: 'jiǎnchá zuòyè',
        translation: 'проверять домашнее задание',
        examples: [
            '老师检查作业。 (Lǎoshī jiǎnchá zuòyè.) — Учитель проверяет домашку.',
            '请妈妈检查你的作业。 (Qǐng māma jiǎnchá nǐ de zuòyè.) — Пусть мама проверит твоё ДЗ.',
            '我检查完作业了。 (Wǒ jiǎnchá wán zuòyè le.) — Я уже проверил домашку.'
        ]
    },
    16: {
        glyph: '订正',
        pinyin: 'dìngzhèng',
        translation: 'исправлять ошибки',
        examples: [
            '请订正你的错题。 (Qǐng dìngzhèng nǐ de cuò tí.) — Пожалуйста, исправь ошибки.',
            '他认真订正作业。 (Tā rènzhēn dìngzhèng zuòyè.) — Он внимательно исправляет ДЗ.',
            '考试后要订正试卷。 (Kǎoshì hòu yào dìngzhèng shìjuàn.) — После экзамена нужно исправить ошибки в тесте.'
        ]
    },
    17: {
        glyph: '提问',
        pinyin: 'tí wèn',
        translation: 'задавать вопрос',
        examples: [
            '你可以提问。 (Nǐ kěyǐ tí wèn.) — Ты можешь задать вопрос.',
            '学生经常向老师提问。 (Xuéshēng jīngcháng xiàng lǎoshī tí wèn.) — Ученики часто задают вопросы учителю.',
            '别怕提问！ (Bié pà tí wèn!) — Не бойся спрашивать!'
        ]
    },
    18: {
        glyph: '回答',
        pinyin: 'huídá',
        translation: 'отвечать (на вопрос)',
        examples: [
            '你能回答这个问题吗？ (Nǐ néng huídá zhège wèntí ma?) — Ты можешь ответить на этот вопрос?',
            '他很快回答了。 (Tā hěn kuài huídá le.) — Он ответил очень быстро.',
            '请举手回答。 (Qǐng jǔ shǒu huídá.) — Отвечайте, подняв руку.'
        ]
    },
    19: {
        glyph: '抄写',
        pinyin: 'chāoxiě',
        translation: 'переписывать',
        examples: [
            '抄写生词十遍。 (Chāoxiě shēngcí shí biàn.) — Перепиши новые слова десять раз.',
            '他在抄写课文。 (Tā zài chāoxiě kèwén.) — Он переписывает текст.',
            '别只抄写，要理解！ (Bié zhǐ chāoxiě, yào lǐjiě!) — Не просто переписывай, а понимай!'
        ]
    },
    20: {
        glyph: '朗读',
        pinyin: 'lǎngdú',
        translation: 'читать вслух',
        examples: [
            '请朗读第一段。 (Qǐng lǎngdú dì yī duàn.) — Прочитайте вслух первый абзац.',
            '孩子每天朗读课文。 (Háizi měitiān lǎngdú kèwén.) — Ребёнок каждый день читает текст вслух.',
            '朗读能提高发音。 (Lǎngdú néng tígāo fāyīn.) — Чтение вслух улучшает произношение.'
        ]
    },
    21: {
        glyph: '默读',
        pinyin: 'mòdú',
        translation: 'читать про себя',
        examples: [
            '请默读这篇文章。 (Qǐng mòdú zhè piān wénzhāng.) — Прочитайте эту статью про себя.',
            '默读速度很快。 (Mòdú sùdù hěn kuài.) — Скорость чтения про себя очень высока.',
            '考试时要默读题目。 (Kǎoshì shí yào mòdú tímù.) — На экзамене нужно читать задания про себя.'
        ]
    },
    22: {
        glyph: '参加',
        pinyin: 'cānjiā',
        translation: 'участвовать (в уроке, курсе)',
        examples: [
            '我参加中文课。 (Wǒ cānjiā Zhōngwén kè.) — Я участвую в китайском курсе.',
            '他参加了夏令营。 (Tā cānjiā le xiàlìngyíng.) — Он поучаствовал в летнем лагере.',
            '你参加考试了吗？ (Nǐ cānjiā kǎoshì le ma?) — Ты сдавал экзамен?'
        ]
    },
    23: {
        glyph: '毕业',
        pinyin: 'bìyè',
        translation: 'заканчивать обучение (школу, вуз)',
        examples: [
            '我明年毕业。 (Wǒ míngnián bìyè.) — Я заканчиваю учёбу в следующем году.',
            '他大学毕业了。 (Tā dàxué bìyè le.) — Он окончил университет.',
            '毕业典礼在六月。 (Bìyè diǎnlǐ zài liù yuè.) — Выпускной — в июне.'
        ]
    },
    24: {
        glyph: '留学',
        pinyin: 'liúxué',
        translation: 'учиться за границей',
        examples: [
            '他去中国留学。 (Tā qù Zhōngguó liúxué.) — Он поехал учиться в Китай.',
            '我想留学一年。 (Wǒ xiǎng liúxué yī nián.) — Я хочу год поучиться за границей.',
            '留学能提高语言能力。 (Liúxué néng tígāo yǔyán nénglì.) — Учёба за границей улучшает языковые навыки.'
        ]
    },
    25: {
        glyph: '专心',
        pinyin: 'zhuānxīn',
        translation: 'сосредоточиться',
        examples: [
            '上课要专心。 (Shàngkè yào zhuānxīn.) — На уроке нужно быть внимательным.',
            '他学习时很专心。 (Tā xuéxí shí hěn zhuānxīn.) — Он очень сосредоточен, когда учится.',
            '别打扰我，我在专心看书。 (Bié dǎrǎo wǒ, wǒ zài zhuānxīn kàn shū.) — Не мешай, я читаю внимательно.'
        ]
    }
};

const verbsShopping: { [key: number]: DictItem } = {
    1: {
        glyph: '买',
        pinyin: 'mǎi',
        translation: 'покупать',
        examples: [
            '我想买一件衬衫。 (Wǒ xiǎng mǎi yī jiàn chènshān.) — Я хочу купить рубашку.',
            '他买了新手机。 (Tā mǎi le xīn shǒujī.) — Он купил новый телефон.',
            '别买太多！ (Bié mǎi tài duō!) — Не покупай слишком много!'
        ]
    },
    2: {
        glyph: '购买',
        pinyin: 'gòumǎi',
        translation: 'покупать (формально)',
        examples: [
            '我在网上购买衣服。 (Wǒ zài wǎngshàng gòumǎi yīfu.) — Я покупаю одежду онлайн.',
            '购买前请看说明。 (Gòumǎi qián qǐng kàn shuōmíng.) — Перед покупкой прочитайте инструкцию.',
            '这个软件可以免费购买。 (Zhège ruǎnjiàn kěyǐ miǎnfèi gòumǎi.) — Это приложение можно купить бесплатно.'
        ]
    },
    3: {
        glyph: '卖',
        pinyin: 'mài',
        translation: 'продавать',
        examples: [
            '这家店卖水果。 (Zhè jiā diàn mài shuǐguǒ.) — Этот магазин продаёт фрукты.',
            '他卖旧书。 (Tā mài jiù shū.) — Он продаёт старые книги.',
            '你想卖车吗？ (Nǐ xiǎng mài chē ma?) — Ты хочешь продать машину?'
        ]
    },
    4: {
        glyph: '购物',
        pinyin: 'gòuwù',
        translation: 'ходить по магазинам',
        examples: [
            '周末我们去购物。 (Zhōumò wǒmen qù gòuwù.) — По выходным мы ходим по магазинам.',
            '她喜欢购物。 (Tā xǐhuan gòuwù.) — Она любит шопинг.',
            '网上购物很方便。 (Wǎngshàng gòuwù hěn fāngbiàn.) — Покупки в интернете очень удобны.'
        ]
    },
    5: {
        glyph: '选',
        pinyin: 'xuǎn',
        translation: 'выбирать',
        examples: [
            '你选哪一件？ (Nǐ xuǎn nǎ yī jiàn?) — Какую ты выберешь?',
            '我选了红色的。 (Wǒ xuǎn le hóngsè de.) — Я выбрал красную.',
            '慢慢选，不着急。 (Mànmàn xuǎn, bú zháojí.) — Выбирай спокойно, не торопись.'
        ]
    },
    6: {
        glyph: '挑选',
        pinyin: 'tiāoxuǎn',
        translation: 'тщательно выбирать',
        examples: [
            '她在挑选水果。 (Tā zài tiāoxuǎn shuǐguǒ.) — Она тщательно выбирает фрукты.',
            '买菜要会挑选。 (Mǎi cài yào huì tiāoxuǎn.) — Нужно уметь выбирать овощи при покупке.',
            '我挑选了一件合适的礼物。 (Wǒ tiāoxuǎn le yī jiàn héshì de lǐwù.) — Я выбрал подходящий подарок.'
        ]
    },
    7: {
        glyph: '试',
        pinyin: 'shì',
        translation: 'примерять / пробовать',
        examples: [
            '我想试这件衣服。 (Wǒ xiǎng shì zhè jiàn yīfu.) — Я хочу примерить эту одежду.',
            '试鞋在那边。 (Shì xié zài nàbiān.) — Примерка обуви там.',
            '不试怎么知道合不合适？ (Bù shì zěnme zhīdào hé bù héshì?) — Как узнать, подходит ли, если не примерить?'
        ]
    },
    8: {
        glyph: '试穿',
        pinyin: 'shì chuān',
        translation: 'примерять одежду',
        examples: [
            '请进试衣间试穿。 (Qǐng jìn shìyījiān shì chuān.) — Пожалуйста, пройдите в примерочную.',
            '他试穿了三件外套。 (Tā shì chuān le sān jiàn wàitào.) — Он примерил три куртки.',
            '试穿后可以买。 (Shì chuān hòu kěyǐ mǎi.) — После примерки можно купить.'
        ]
    },
    9: {
        glyph: '试用',
        pinyin: 'shì yòng',
        translation: 'пробовать (товар в действии)',
        examples: [
            '你可以试用这个软件。 (Nǐ kěyǐ shì yòng zhège ruǎnjiàn.) — Ты можешь бесплатно попробовать это ПО.',
            '试用期一个月。 (Shì yòng qī yī gè yuè.) — Пробный период — один месяц.',
            '先试用再决定买不买。 (Xiān shì yòng zài juédìng mǎi bú mǎi.) — Сначала попробуй, потом решай, покупать или нет.'
        ]
    },
    10: {
        glyph: '付钱',
        pinyin: 'fù qián',
        translation: 'платить деньги',
        examples: [
            '我用支付宝付钱。 (Wǒ yòng Zhīfùbǎo fù qián.) — Я плачу через Alipay.',
            '谁付钱？ (Shéi fù qián?) — Кто платит?',
            '付钱后可以拿走商品。 (Fù qián hòu kěyǐ ná zǒu shāngpǐn.) — После оплаты можно забрать товар.'
        ]
    },
    11: {
        glyph: '打折',
        pinyin: 'dǎ zhé',
        translation: 'делать скидку',
        examples: [
            '这件衣服打八折。 (Zhè jiàn yīfu dǎ bā zhé.) — На эту одежду скидка 20% (платишь 80%).',
            '周末商场打折。 (Zhōumò shāngchǎng dǎ zhé.) — В выходные в торговом центре скидки.',
            '不打折的话太贵了。 (Bù dǎ zhé de huà tài guì le.) — Без скидки слишком дорого.'
        ]
    },
    12: {
        glyph: '便宜',
        pinyin: 'piányi',
        translation: 'быть дешёвым (в разговорной речи как глагол: «стать дешевле»)',
        examples: [
            '这个月手机便宜了。 (Zhège yuè shǒujī piányi le.) — В этом месяце телефоны подешевели.',
            '能不能再便宜点？ (Néng bu néng zài piányi diǎn?) — Можно немного дешевле?',
            '网上买更便宜。 (Wǎngshàng mǎi gèng piányi.) — В интернете покупать дешевле.'
        ]
    },
    13: {
        glyph: '还价',
        pinyin: 'huán jià',
        translation: 'торговаться',
        examples: [
            '在市场要会还价。 (Zài shìchǎng yào huì huán jià.) — На рынке нужно уметь торговаться.',
            '他成功还价到50元。 (Tā chénggōng huán jià dào 50 yuán.) — Ему удалось сторговаться до 50 юаней.',
            '不还价就吃亏了。 (Bù huán jià jiù chīkuī le.) — Если не торговаться — переплатишь.'
        ]
    },
    14: {
        glyph: '退',
        pinyin: 'tuì',
        translation: 'возвращать товар',
        examples: [
            '衣服不合适可以退。 (Yīfu bù héshì kěyǐ tuì.) — Если одежда не подходит, её можно вернуть.',
            '我退了那双鞋。 (Wǒ tuì le nà shuāng xié.) — Я вернул ту пару обуви.',
            '七天内可以无理由退货。 (Qī tiān nèi kěyǐ wú lǐyóu tuìhuò.) — В течение 7 дней можно вернуть без объяснения причин.'
        ]
    },
    15: {
        glyph: '换',
        pinyin: 'huàn',
        translation: 'обменять товар',
        examples: [
            '我想换一件大号的。 (Wǒ xiǎng huàn yī jiàn dà hào de.) — Я хочу обменять на больший размер.',
            '有质量问题可以换。 (Yǒu zhìliàng wèntí kěyǐ huàn.) — При проблеме с качеством можно обменять.',
            '换货要带小票。 (Huàn huò yào dài xiǎopiào.) — Для обмена нужен чек.'
        ]
    },
    16: {
        glyph: '排队',
        pinyin: 'pái duì',
        translation: 'стоять в очереди',
        examples: [
            '买票要排队。 (Mǎi piào yào pái duì.) — Чтобы купить билет, нужно встать в очередь.',
            '他在收银台排队。 (Tā zài shōuyíntái pái duì.) — Он стоит в очереди на кассе.',
            '别插队！ (Bié chā duì!) — Не пристраивайся без очереди!'
        ]
    },
    17: {
        glyph: '逛',
        pinyin: 'guàng',
        translation: 'гулять по магазинам (без цели купить)',
        examples: [
            '我们去商场逛逛。 (Wǒmen qù shāngchǎng guàng guang.) — Пойдём прогуляемся по ТЦ.',
            '她喜欢逛超市。 (Tā xǐhuan guàng chāoshì.) — Она любит шататься по супермаркету.',
            '只是逛，不买。 (Zhǐ shì guàng, bù mǎi.) — Просто смотрим, не покупаем.'
        ]
    },
    18: {
        glyph: '比较',
        pinyin: 'bǐjiào',
        translation: 'сравнивать (цены, качество)',
        examples: [
            '买之前要比较价格。 (Mǎi zhīqián yào bǐjiào jiàgé.) — Перед покупкой сравнивай цены.',
            '我在比较两款手机。 (Wǒ zài bǐjiào liǎng kuǎn shǒujī.) — Я сравниваю два смартфона.',
            '这家店比那家便宜。 (Zhè jiā diàn bǐ nà jiā piányi.) — Этот магазин дешевле того.'
        ]
    },
    19: {
        glyph: '下单',
        pinyin: 'xià dān',
        translation: 'оформлять заказ (онлайн)',
        examples: [
            '我在淘宝上下单了。 (Wǒ zài Táobǎo shàng xià dān le.) — Я сделал заказ на Taobao.',
            '下单后多久能到？ (Xià dān hòu duō jiǔ néng dào?) — Сколько ждать доставку после заказа?',
            '确认地址再下单。 (Quèrèn dìzhǐ zài xià dān.) — Сначала подтверди адрес, потом оформляй заказ.'
        ]
    },
    20: {
        glyph: '收货',
        pinyin: 'shōu huò',
        translation: 'получать товар (доставку)',
        examples: [
            '我今天收货了。 (Wǒ jīntiān shōu huò le.) — Сегодня я получил посылку.',
            '收货前先检查包装。 (Shōu huò qián xiān jiǎnchá bāozhuāng.) — Перед получением проверь упаковку.',
            '快递员在门口等你收货。 (Kuàidìyuán zài ménkǒu děng nǐ shōu huò.) — Курьер ждёт у двери, чтобы ты получил товар.'
        ]
    },
    21: {
        glyph: '评价',
        pinyin: 'píngjià',
        translation: 'оставлять отзыв',
        examples: [
            '记得给商品评价。 (Jìde gěi shāngpǐn píngjià.) — Не забудь поставить оценку товару.',
            '我给了五星好评。 (Wǒ gěi le wǔ xīng hǎo píng.) — Я оставил пятёрку и положительный отзыв.',
            '差评会影响卖家。 (Chā píng huì yǐngxiǎng màijiā.) — Негативный отзыв влияет на продавца.'
        ]
    },
    22: {
        glyph: '缺货',
        pinyin: 'quē huò',
        translation: 'не быть в наличии',
        examples: [
            '这个型号缺货了。 (Zhège xínghào quē huò le.) — Эта модель закончилась.',
            '缺货时可以预订。 (Quē huò shí kěyǐ yùdìng.) — Когда нет в наличии, можно предзаказать.',
            '抱歉，您要的商品缺货。 (Bàoqiàn, nín yào de shāngpǐn quē huò.) — Извините, нужного товара нет в наличии.'
        ]
    },
    23: {
        glyph: '预订',
        pinyin: 'yùdìng',
        translation: 'бронировать / предзаказывать',
        examples: [
            '我预订了一双鞋。 (Wǒ yùdìng le yī shuāng xié.) — Я предзаказал пару обуви.',
            '新手机可以提前预订。 (Xīn shǒujī kěyǐ tíqián yùdìng.) — Новый телефон можно предзаказать заранее.',
            '预订商品会先发货。 (Yùdìng shāngpǐn huì xiān fā huò.) — Предзаказанный товар отправят первым.'
        ]
    }
};

const verbsCreationMaking: { [key: number]: DictItem } = {
    1: {
        glyph: '做',
        pinyin: 'zuò',
        translation: 'делать / изготавливать',
        examples: [
            '他在做模型。 (Tā zài zuò móxíng.) — Он делает модель.',
            '我会做中国菜。 (Wǒ huì zuò Zhōngguó cài.) — Я умею готовить китайскую еду.',
            '别做危险的事！ (Bié zuò wēixiǎn de shì!) — Не делай опасных вещей!'
        ]
    },
    2: {
        glyph: '制作',
        pinyin: 'zhìzuò',
        translation: 'изготавливать (формально)',
        examples: [
            '这个玩具是手工制作的。 (Zhège wánjù shì shǒugōng zhìzuò de.) — Эта игрушка сделана вручную.',
            '我们制作了一个视频。 (Wǒmen zhìzuò le yī gè shìpín.) — Мы сделали видео.',
            '工厂制作汽车。 (Gōngchǎng zhìzuò qìchē.) — Завод производит автомобили.'
        ]
    },
    3: {
        glyph: '建造',
        pinyin: 'jiànzào',
        translation: 'строить (здания, мосты)',
        examples: [
            '他们正在建造新学校。 (Tāmen zhèngzài jiànzào xīn xuéxiào.) — Они строят новую школу.',
            '古代中国人建造了长城。 (Gǔdài Zhōngguó rén jiànzào le Chángchéng.) — Древние китайцы построили Великую стену.',
            '这家公司建造了很多房子。 (Zhè jiā gōngsī jiànzào le hěn duō fángzi.) — Эта компания построила много домов.'
        ]
    },
    4: {
        glyph: '建',
        pinyin: 'jiàn',
        translation: 'строить (сокращённая форма)',
        examples: [
            '政府建了新医院。 (Zhèngfǔ jiàn le xīn yīyuàn.) — Правительство построило новую больницу.',
            '我们建了一个网站。 (Wǒmen jiàn le yī gè wǎngzhàn.) — Мы создали сайт.',
            '建房子需要很多钱。 (Jiàn fángzi xūyào hěn duō qián.) — Чтобы построить дом, нужно много денег.'
        ]
    },
    5: {
        glyph: '写',
        pinyin: 'xiě',
        translation: 'писать (текст)',
        examples: [
            '我写中文。 (Wǒ xiě Zhōngwén.) — Я пишу на китайском.',
            '请写下你的名字。 (Qǐng xiě xià nǐ de míngzì.) — Напишите, пожалуйста, ваше имя.',
            '他写了一封信。 (Tā xiě le yī fēng xìn.) — Он написал письмо.'
        ]
    },
    6: {
        glyph: '画',
        pinyin: 'huà',
        translation: 'рисовать',
        examples: [
            '孩子喜欢画画。 (Háizi xǐhuan huàhuà.) — Дети любят рисовать.',
            '她画了一幅画。 (Tā huà le yī fú huà.) — Она нарисовала картину.',
            '用铅笔画草图。 (Yòng qiānbǐ huà cǎotú.) — Нарисуй эскиз карандашом.'
        ]
    },
    7: {
        glyph: '缝',
        pinyin: 'féng',
        translation: 'шить',
        examples: [
            '妈妈在缝衣服。 (Māma zài féng yīfu.) — Мама шьёт одежду.',
            '我会缝纽扣。 (Wǒ huì féng niǔkòu.) — Я умею пришивать пуговицы.',
            '用针线缝。 (Yòng zhēn xiàn féng.) — Шей иголкой и ниткой.'
        ]
    },
    8: {
        glyph: '织',
        pinyin: 'zhī',
        translation: 'вязать / ткать',
        examples: [
            '奶奶在织毛衣。 (Nǎinai zài zhī máoyī.) — Бабушка вяжет свитер.',
            '这布是手工织的。 (Zhè bù shì shǒugōng zhī de.) — Эта ткань соткана вручную.',
            '她会织围巾。 (Tā huì zhī wéijīn.) — Она умеет вязать шарфы.'
        ]
    },
    9: {
        glyph: '煮',
        pinyin: 'zhǔ',
        translation: 'варить',
        examples: [
            '我煮面条。 (Wǒ zhǔ miàntiáo.) — Я варю лапшу.',
            '水开了再下面。 (Shuǐ kāi le zài xià miàn.) — Когда вода закипит — бросай лапшу.',
            '他煮了一锅汤。 (Tā zhǔ le yī guō tāng.) — Он сварил кастрюлю супа.'
        ]
    },
    10: {
        glyph: '炒',
        pinyin: 'chǎo',
        translation: 'жарить на сковороде',
        examples: [
            '他炒鸡蛋。 (Tā chǎo jīdàn.) — Он жарит яичницу.',
            '我喜欢吃炒饭。 (Wǒ xǐhuan chī chǎofàn.) — Мне нравится жареный рис.',
            '炒菜要用大火。 (Chǎo cài yào yòng dà huǒ.) — Для жарки нужно сильное пламя.'
        ]
    },
    11: {
        glyph: '烤',
        pinyin: 'kǎo',
        translation: 'запекать / жарить на гриле',
        examples: [
            '我们烤肉。 (Wǒmen kǎo ròu.) — Мы жарим мясо (на гриле).',
            '烤箱在厨房。 (Kǎoxiāng zài chúfáng.) — Духовка на кухне.',
            '这个面包是烤的。 (Zhège miànbāo shì kǎo de.) — Этот хлеб запечённый.'
        ]
    },
    12: {
        glyph: '蒸',
        pinyin: 'zhēng',
        translation: 'готовить на пару',
        examples: [
            '她蒸鱼。 (Tā zhēng yú.) — Она готовит рыбу на пару.',
            '包子是蒸的。 (Bāozi shì zhēng de.) — Баньцзы готовят на пару.',
            '蒸菜很健康。 (Zhēng cài hěn jiànkāng.) — Блюда на пару очень полезны.'
        ]
    },
    13: {
        glyph: '切',
        pinyin: 'qiē',
        translation: 'резать',
        examples: [
            '切苹果。 (Qiē píngguǒ.) — Режь яблоко.',
            '小心切到手！ (Xiǎoxīn qiē dào shǒu!) — Осторожно, не порежься!',
            '他把肉切成小块。 (Tā bǎ ròu qiē chéng xiǎo kuài.) — Он нарезал мясо на мелкие кусочки.'
        ]
    },
    14: {
        glyph: '组装',
        pinyin: 'zǔzhuāng',
        translation: 'собирать (мебель, технику)',
        examples: [
            '我在组装书架。 (Wǒ zài zǔzhuāng shūjià.) — Я собираю книжную полку.',
            '新电脑需要自己组装。 (Xīn diànnǎo xūyào zìjǐ zǔzhuāng.) — Новый компьютер нужно собрать самому.',
            '说明书教你如何组装。 (Shuōmíngshū jiào nǐ rúhé zǔzhuāng.) — Инструкция покажет, как собрать.'
        ]
    },
    15: {
        glyph: '修理',
        pinyin: 'xiūlǐ',
        translation: 'чинить',
        examples: [
            '他修理自行车。 (Tā xiūlǐ zìxíngchē.) — Он чинит велосипед.',
            '洗衣机坏了，要修理。 (Xǐyījī huài le, yào xiūlǐ.) — Стиральная машина сломалась, нужно чинить.',
            '我会修理电脑。 (Wǒ huì xiūlǐ diànnǎo.) — Я умею чинить компьютеры.'
        ]
    },
    16: {
        glyph: '设计',
        pinyin: 'shèjì',
        translation: 'проектировать / дизайнировать',
        examples: [
            '她设计衣服。 (Tā shèjì yīfu.) — Она дизайнер одежды.',
            '这个建筑是他设计的。 (Zhège jiànzhù shì tā shèjì de.) — Это здание он спроектировал.',
            '我们设计了一个新游戏。 (Wǒmen shèjì le yī gè xīn yóuxì.) — Мы разработали новую игру.'
        ]
    },
    17: {
        glyph: '发明',
        pinyin: 'fāmíng',
        translation: 'изобретать',
        examples: [
            '爱迪生发明了电灯。 (Àidíshēng fāmíng le diàndēng.) — Эдисон изобрёл лампочку.',
            '他发明了一种新药。 (Tā fāmíng le yī zhǒng xīn yào.) — Он изобрёл новое лекарство.',
            '中国人发明了造纸术。 (Zhōngguó rén fāmíng le zàozhǐ shù.) — Китайцы изобрели бумагу.'
        ]
    },
    18: {
        glyph: '创造',
        pinyin: 'chuàngzào',
        translation: 'создавать (что-то новое)',
        examples: [
            '艺术家创造美。 (Yìshùjiā chuàngzào měi.) — Художники создают красоту.',
            '他创造了新纪录。 (Tā chuàngzào le xīn jìlù.) — Он установил новый рекорд.',
            '人类创造了文明。 (Rénlèi chuàngzào le wénmíng.) — Человечество создало цивилизацию.'
        ]
    },
    19: {
        glyph: '雕刻',
        pinyin: 'diāokè',
        translation: 'вырезать / резать по дереву/камню',
        examples: [
            '他在木头上雕刻花纹。 (Tā zài mùtou shàng diāokè huāwén.) — Он вырезает узоры на дереве.',
            '这个石雕很精致。 (Zhège shídiāo hěn jīngzhì.) — Эта каменная резьба очень изящна.',
            '传统工艺包括雕刻。 (Chuántǒng gōngyì bāokuò diāokè.) — Традиционное ремесло включает резьбу.'
        ]
    },
    20: {
        glyph: '编织',
        pinyin: 'biānzhī',
        translation: 'плести (корзины, косы)',
        examples: [
            '她会编织草帽。 (Tā huì biānzhī cǎo mào.) — Она умеет плести соломенные шляпы.',
            '当地人用竹子编织篮子。 (Dāngdì rén yòng zhúzi biānzhī lánzi.) — Местные жители плетут корзины из бамбука.',
            '小女孩在编织花环。 (Xiǎo nǚhái zài biānzhī huāhuán.) — Девочка плетёт венок.'
        ]
    },
    21: {
        glyph: '捏',
        pinyin: 'niē',
        translation: 'лепить (из глины, теста)',
        examples: [
            '孩子在捏泥人。 (Háizi zài niē nírén.) — Ребёнок лепит фигурки из глины.',
            '她捏了一个小兔子。 (Tā niē le yī gè xiǎo tùzi.) — Она слепила зайчика.',
            '用面团捏形状。 (Yòng miàntuán niē xíngzhuàng.) — Лепи формы из теста.'
        ]
    },
    22: {
        glyph: '打印',
        pinyin: 'dǎyìn',
        translation: 'печатать (на принтере)',
        examples: [
            '请帮我打印文件。 (Qǐng bāng wǒ dǎyìn wénjiàn.) — Помоги мне распечатать документ.',
            '打印机没墨了。 (Dǎyìnjī méi mò le.) — В принтере закончился тонер.',
            '我打了三份报告。 (Wǒ dǎ le sān fèn bàogào.) — Я распечатал три копии отчёта.'
        ]
    },
    23: {
        glyph: '录制',
        pinyin: 'lùzhì',
        translation: 'записывать (аудио/видео)',
        examples: [
            '我们录制了一 песню。 (Wǒmen lùzhì le yī shǒu gē.) — Мы записали песню.',
            '他在录制播客。 (Tā zài lùzhì bōkè.) — Он записывает подкаст.',
            '请录制这段对话。 (Qǐng lùzhì zhè duàn duìhuà.) — Запишите, пожалуйста, этот диалог.'
        ]
    },
    24: {
        glyph: '编辑',
        pinyin: 'biānjí',
        translation: 'редактировать (текст, видео)',
        examples: [
            '我在编辑照片。 (Wǒ zài biānjí zhàopiàn.) — Я редактирую фотографии.',
            '他编辑了一本书。 (Tā biānjí le yī běn shū.) — Он отредактировал книгу.',
            '视频需要后期编辑。 (Shìpín xūyào hòuqī biānjí.) — Видео требует постобработки.'
        ]
    },
    25: {
        glyph: '完成',
        pinyin: 'wánchéng',
        translation: 'завершать (создание)',
        examples: [
            '我完成了这幅画。 (Wǒ wánchéng le zhè fú huà.) — Я закончил эту картину.',
            '项目还没完成。 (Xiàngmù hái méi wánchéng.) — Проект ещё не завершён.',
            '完成作业才能出去玩。 (Wánchéng zuòyè cái néng chūqù wán.) — Только закончив ДЗ, можно идти гулять.'
        ]
    }
};

const verbsChangingStates: { [key: number]: DictItem } = {
    1: {
        glyph: '变',
        pinyin: 'biàn',
        translation: 'становиться / меняться',
        examples: [
            '天气变冷了。 (Tiānqì biàn lěng le.) — Погода стала холодной.',
            '他变了，不再像以前。 (Tā biàn le, bú zài xiàng yǐqián.) — Он изменился, уже не такой, как раньше.',
            '价格每天都在变。 (Jiàgé měitiān dōu zài biàn.) — Цены меняются каждый день.'
        ]
    },
    2: {
        glyph: '变成',
        pinyin: 'biàn chéng',
        translation: 'превращаться в',
        examples: [
            '水变成冰。 (Shuǐ biàn chéng bīng.) — Вода превращается в лёд.',
            '他变成了老师。 (Tā biàn chéng le lǎoshī.) — Он стал учителем.',
            '梦想能变成现实吗？ (Mèngxiǎng néng biàn chéng xiànshí ma?) — Могут ли мечты стать реальностью?'
        ]
    },
    3: {
        glyph: '变得',
        pinyin: 'biàn de',
        translation: 'становиться (с прилагательным)',
        examples: [
            '她变得很漂亮。 (Tā biàn de hěn piàoliang.) — Она стала очень красивой.',
            '生活变得更好了。 (Shēnghuó biàn de gèng hǎo le.) — Жизнь стала лучше.',
            '问题变得复杂了。 (Wèntí biàn de fùzá le.) — Проблема стала сложной.'
        ]
    },
    4: {
        glyph: '做',
        pinyin: 'zuò',
        translation: 'становиться (в значении «стать кем-то»)',
        examples: [
            '他想做医生。 (Tā xiǎng zuò yīshēng.) — Он хочет стать врачом.',
            '我可以做你的朋友吗？ (Wǒ kěyǐ zuò nǐ de péngyou ma?) — Могу я стать твоим другом?',
            '她做了妈妈。 (Tā zuò le māma.) — Она стала мамой.'
        ]
    },
    5: {
        glyph: '当',
        pinyin: 'dāng',
        translation: 'работать в качестве / быть (в роли)',
        examples: [
            '他当老师。 (Tā dāng lǎoshī.) — Он работает учителем.',
            '我想当演员。 (Wǒ xiǎng dāng yǎnyuán.) — Я хочу стать актёром.',
            '你愿意当我的翻译吗？ (Nǐ yuànyì dāng wǒ de fānyì ma?) — Ты согласен быть моим переводчиков?'
        ]
    },
    6: {
        glyph: '成为',
        pinyin: 'chéngwéi',
        translation: 'стать (формально, достижение статуса)',
        examples: [
            '他成为了专家。 (Tā chéngwéi le zhuānjiā.) — Он стал экспертом.',
            '努力才能成为成功者。 (Nǔlì cái néng chéngwéi chénggōng zhě.) — Только упорным трудом можно стать успешным.',
            '她终于成为了冠军。 (Tā zhōngyú chéngwéi le guànjūn.) — Она наконец стала чемпионкой.'
        ]
    },
    7: {
        glyph: '转',
        pinyin: 'zhuǎn',
        translation: 'менять (работу, направление, тему)',
        examples: [
            '他转行了。 (Tā zhuǎn háng le.) — Он сменил профессию.',
            '公交车转左。 (Gōngjiāo chē zhuǎn zuǒ.) — Автобус поворачивает налево.',
            '我们转到下一个话题。 (Wǒmen zhuǎn dào xià yī gè huàtí.) — Перейдём к следующей теме.'
        ]
    },
    8: {
        glyph: '换',
        pinyin: 'huàn',
        translation: 'менять (предмет, одежду, решение)',
        examples: [
            '我想换工作。 (Wǒ xiǎng huàn gōngzuò.) — Я хочу сменить работу.',
            '她换了新发型。 (Tā huàn le xīn fàxíng.) — Она сменила причёску.',
            '别换主意！ (Bié huàn zhǔyi!) — Не меняй решение!'
        ]
    },
    9: {
        glyph: '改善',
        pinyin: 'gǎishàn',
        translation: 'улучшать (состояние)',
        examples: [
            '政府想改善环境。 (Zhèngfǔ xiǎng gǎishàn huánjìng.) — Правительство хочет улучшить экологию.',
            '你的中文在改善。 (Nǐ de Zhōngwén zài gǎishàn.) — Твой китайский улучшается.',
            '健康状况有所改善。 (Jiànkāng zhuàngkuàng yǒu suǒ gǎishàn.) — Состояние здоровья улучшилось.'
        ]
    },
    10: {
        glyph: '恶化',
        pinyin: 'èhuà',
        translation: 'ухудшаться',
        examples: [
            '病情恶化了。 (Bìngqíng èhuà le.) — Состояние ухудшилось.',
            '关系正在恶化。 (Guānxì zhèngzài èhuà.) — Отношения ухудшаются.',
            '如果不治疗， всё будет恶化。 (Rúguǒ bù zhìliáo, yīqiè dōu huì èhuà.) — Если не лечиться, всё станет хуже.'
        ]
    },
    11: {
        glyph: '提高',
        pinyin: 'tígāo',
        translation: 'повышать (уровень, качество)',
        examples: [
            '他提高了成绩。 (Tā tígāo le chéngjì.) — Он улучшил свои оценки.',
            '我们需要提高效率。 (Wǒmen xūyào tígāo xiàolǜ.) — Нам нужно повысить эффективность.',
            '工资提高了。 (Gōngzī tígāo le.) — Зарплата повысилась.'
        ]
    },
    12: {
        glyph: '降低',
        pinyin: 'jiàngdī',
        translation: 'снижать',
        examples: [
            '政府降低了税收。 (Zhèngfǔ jiàngdī le shuìshōu.) — Правительство снизило налоги.',
            '请降低音量。 (Qǐng jiàngdī yīnliàng.) — Пожалуйста, уменьшите громкость.',
            '成本降低了。 (Chéngběn jiàngdī le.) — Себестоимость снизилась.'
        ]
    },
    13: {
        glyph: '开始',
        pinyin: 'kāishǐ',
        translation: 'начинать',
        examples: [
            '电影开始了。 (Diànyǐng kāishǐ le.) — Фильм начался.',
            '我开始学习中文。 (Wǒ kāishǐ xuéxí Zhōngwén.) — Я начал изучать китайский.',
            '会议什么时候开始？ (Huìyì shénme shíhou kāishǐ?) — Когда начнётся совещание?'
        ]
    },
    14: {
        glyph: '结束',
        pinyin: 'jiéshù',
        translation: 'заканчивать',
        examples: [
            '课程结束了。 (Kèchéng jiéshù le.) — Занятие закончилось.',
            '我们结束了谈话。 (Wǒmen jiéshù le tánhuà.) — Мы закончили разговор.',
            '战争终于结束了。 (Zhànzhēng zhōngyú jiéshù le.) — Война наконец закончилась.'
        ]
    },
    15: {
        glyph: '停止',
        pinyin: 'tíngzhǐ',
        translation: 'останавливать (процесс)',
        examples: [
            '请停止说话！ (Qǐng tíngzhǐ shuōhuà!) — Прекратите разговаривать!',
            '机器停止了工作。 (Jīqì tíngzhǐ le gōngzuò.) — Машина перестала работать.',
            '不要停止努力！ (Búyào tíngzhǐ nǔlì!) — Не переставай стараться!'
        ]
    },
    16: {
        glyph: '继续',
        pinyin: 'jìxù',
        translation: 'продолжать',
        examples: [
            '请继续。 (Qǐng jìxù.) — Продолжайте, пожалуйста.',
            '他继续学习。 (Tā jìxù xuéxí.) — Он продолжает учиться.',
            '雨继续下了一整夜。 (Yǔ jìxù xià le yī zhěng yè.) — Дождь лил всю ночь без остановки.'
        ]
    },
    17: {
        glyph: '恢复',
        pinyin: 'huīfù',
        translation: 'восстанавливать (прежнее состояние)',
        examples: [
            '他恢复了健康。 (Tā huīfù le jiànkāng.) — Он восстановил здоровье.',
            '电力已经恢复。 (Diànlì yǐjīng huīfù.) — Электричество уже восстановили.',
            '关系能恢复吗？ (Guānxì néng huīfù ma?) — Можно ли восстановить отношения?'
        ]
    },
    18: {
        glyph: '发展',
        pinyin: 'fāzhǎn',
        translation: 'развиваться',
        examples: [
            '这个城市发展很快。 (Zhège chéngshì fāzhǎn hěn kuài.) — Этот город развивается очень быстро.',
            '技术不断发展。 (Jìshù búduàn fāzhǎn.) — Технологии постоянно развиваются.',
            '孩子在全面发展。 (Háizi zài quánmiàn fāzhǎn.) — Ребёнок развивается всесторонне.'
        ]
    },
    19: {
        glyph: '成长',
        pinyin: 'chéngzhǎng',
        translation: 'расти / взрослеть',
        examples: [
            '孩子健康成长。 (Háizi jiànkāng chéngzhǎng.) — Ребёнок растёт здоровым.',
            '他在困难中成长。 (Tā zài kùnnán zhōng chéngzhǎng.) — Он рос в трудностях.',
            '植物需要阳光才能成长。 (Zhíwù xūyào yángguāng cái néng chéngzhǎng.) — Растениям нужен солнечный свет, чтобы расти.'
        ]
    },
    20: {
        glyph: '融化',
        pinyin: 'rónghuà',
        translation: 'таять (физическое изменение состояния)',
        examples: [
            '雪在融化。 (Xuě zài rónghuà.) — Снег тает.',
            '冰淇淋融化了。 (Bīngqílín rónghuà le.) — Мороженое растаяло.',
            '春天冰雪融化。 (Chūntiān bīngxuě rónghuà.) — Весной лёд и снег тают.'
        ]
    },
    21: {
        glyph: '破碎',
        pinyin: 'pòsuì',
        translation: 'разбиваться на осколки',
        examples: [
            '玻璃杯破碎了。 (Bōli bēi pòsuì le.) — Стеклянный бокал разбился.',
            '他的心破碎了。 (Tā de xīn pòsuì le.) — Его сердце разбилось.',
            '小心别让花瓶破碎！ (Xiǎoxīn bié ràng huāpíng pòsuì!) — Осторожно, не разбей вазу!'
        ]
    },
    22: {
        glyph: '消失',
        pinyin: 'xiāoshī',
        translation: 'исчезать',
        examples: [
            '云消失了。 (Yún xiāoshī le.) — Облака исчезли.',
            '问题突然消失了。 (Wèntí tūrán xiāoshī le.) — Проблема внезапно исчезла.',
            '不要让机会消失！ (Búyào ràng jīhuì xiāoshī!) — Не упусти шанс!'
        ]
    },
    23: {
        glyph: '出现',
        pinyin: 'chūxiàn',
        translation: 'появляться',
        examples: [
            '太阳出现了。 (Tàiyáng chūxiàn le.) — Солнце появилось.',
            '新问题出现了。 (Xīn wèntí chūxiàn le.) — Появилась новая проблема.',
            '他突然出现在门口。 (Tā tūrán chūxiàn zài ménkǒu.) — Он внезапно появился в дверях.'
        ]
    },
    24: {
        glyph: '得',
        pinyin: 'de',
        translation: 'становиться (в конструкции: глагол + 得 + прилагательное)',
        examples: [
            '他跑得很快。 (Tā pǎo de hěn kuài.) — Он бегает очень быстро.',
            '她说得清楚。 (Tā shuō de qīngchu.) — Она говорит чётко.',
            '天气冷得我发抖。 (Tiānqì lěng de wǒ fādǒu.) — На улице так холодно, что я дрожу.'
        ]
    },
    25: {
        glyph: '化',
        pinyin: 'huà',
        translation: 'превращать (в составе сложных глаголов)',
        examples: [
            '现代化 (xiàndàihuà) — модернизировать',
            '绿化城市 (lǜhuà chéngshì) — озеленять город',
            '自动化生产 (zìdònghuà shēngchǎn) — автоматизированное производство'
        ]
    }
};

const verbsWorkJobs: { [key: number]: DictItem } = {
    1: {
        glyph: '工作',
        pinyin: 'gōngzuò',
        translation: 'работать',
        examples: [
            '我在公司工作。 (Wǒ zài gōngsī gōngzuò.) — Я работаю в компании.',
            '他每天工作八小时。 (Tā měitiān gōngzuò bā xiǎoshí.) — Он работает восемь часов в день.',
            '我喜欢我的工作。 (Wǒ xǐhuan wǒ de gōngzuò.) — Мне нравится моя работа.'
        ]
    },
    2: {
        glyph: '上班',
        pinyin: 'shàngbān',
        translation: 'идти на работу / начинать рабочий день',
        examples: [
            '我八点上班。 (Wǒ bā diǎn shàngbān.) — Я начинаю работу в восемь.',
            '今天你几点上班？ (Jīntiān nǐ jǐ diǎn shàngbān?) — Во сколько ты сегодня идёшь на работу?',
            '周末不用上班。 (Zhōumò búyòng shàngbān.) — В выходные не нужно идти на работу.'
        ]
    },
    3: {
        glyph: '下班',
        pinyin: 'xiàbān',
        translation: 'заканчивать работу / уходить с работы',
        examples: [
            '我六点下班。 (Wǒ liù diǎn xiàbān.) — Я заканчиваю работу в шесть.',
            '他加班，很晚才下班。 (Tā jiābān, hěn wǎn cái xiàbān.) — Он перерабатывал и ушёл поздно.',
            '下班后我去健身房。 (Xiàbān hòu wǒ qù jiànshēnfáng.) — После работы я иду в спортзал.'
        ]
    },
    4: {
        glyph: '雇佣',
        pinyin: 'gùyōng',
        translation: 'нанимать (о работодателе)',
        examples: [
            '公司雇佣了新员工。 (Gōngsī gùyōng le xīn yuángōng.) — Компания наняла новых сотрудников.',
            '他们想雇佣会中文的人。 (Tāmen xiǎng gùyōng huì Zhōngwén de rén.) — Они хотят нанять тех, кто знает китайский.',
            '小企业很难雇佣人才。 (Xiǎo qǐyè hěn nán gùyōng réncái.) — Малому бизнесу трудно нанимать квалифицированных специалистов.'
        ]
    },
    5: {
        glyph: '应聘',
        pinyin: 'yìngpìn',
        translation: 'устроиться на работу (по отклику)',
        examples: [
            '他去应聘经理职位。 (Tā qù yìngpìn jīnglǐ zhíwèi.) — Он пошёл устраиваться на должность менеджера.',
            '很多人应聘这个岗位。 (Hěn duō rén yìngpìn zhège gǎngwèi.) — Много людей откликнулись на эту вакансию.',
            '你需要准备简历去应聘。 (Nǐ xūyào zhǔnbèi jiǎnlì qù yìngpìn.) — Тебе нужно подготовить резюме, чтобы устроиться.'
        ]
    },
    6: {
        glyph: '解雇',
        pinyin: 'jiěgù',
        translation: 'увольнять',
        examples: [
            '公司解雇了他。 (Gōngsī jiěgù le tā.) — Компания его уволила.',
            '经济不好，很多人被解雇。 (Jīngjì bù hǎo, hěn duō rén bèi jiěgù.) — Из-за плохой экономики многих уволили.',
            '他因为迟到被解雇了。 (Tā yīnwèi chídào bèi jiěgù le.) — Его уволили из-за опозданий.'
        ]
    },
    7: {
        glyph: '辞职',
        pinyin: 'cízhí',
        translation: 'уходить с работы (по собственному желанию)',
        examples: [
            '他辞职了。 (Tā cízhí le.) — Он ушёл с работы.',
            '她因为压力大辞职了。 (Tā yīnwèi yālì dà cízhí le.) — Она ушла из-за сильного стресса.',
            '你想辞职吗？ (Nǐ xiǎng cízhí ma?) — Ты хочешь уволиться?'
        ]
    },
    8: {
        glyph: '升职',
        pinyin: 'shēngzhí',
        translation: 'повышать (в должности)',
        examples: [
            '他升职为部门经理。 (Tā shēngzhí wèi bùmén jīnglǐ.) — Его повысили до менеджера отдела.',
            '努力工作才能升职。 (Nǔlì gōngzuò cái néng shēngzhí.) — Только усердной работой можно добиться повышения.',
            '她去年升职了。 (Tā qùnián shēngzhí le.) — Её повысили в прошлом году.'
        ]
    },
    9: {
        glyph: '加班',
        pinyin: 'jiābān',
        translation: 'работать сверхурочно',
        examples: [
            '今天我要加班。 (Jīntiān wǒ yào jiābān.) — Сегодня я работаю сверхурочно.',
            '经常加班对身体不好。 (Jīngcháng jiābān duì shēntǐ bù hǎo.) — Постоянная переработка вредна для здоровья.',
            '加班有加班费吗？ (Jiābān yǒu jiābān fèi ma?) — За переработку платят дополнительно?'
        ]
    },
    10: {
        glyph: '开会',
        pinyin: 'kāi huì',
        translation: 'проводить совещание',
        examples: [
            '我们每天早上开会。 (Wǒmen měitiān zǎoshang kāi huì.) — Мы проводим совещания каждое утро.',
            '老板要开会。 (Lǎobǎn yào kāi huì.) — Босс хочет собрать совещание.',
            '会议很重要，别迟到！ (Huìyì hěn zhòngyào, bié chídào!) — Совещание важное, не опаздывай!'
        ]
    },
    11: {
        glyph: '汇报',
        pinyin: 'huìbào',
        translation: 'представлять отчёт / докладывать',
        examples: [
            '我向经理汇报工作。 (Wǒ xiàng jīnglǐ huìbào gōngzuò.) — Я докладываю менеджеру о работе.',
            '每周一要汇报进度。 (Měi zhōuyī yào huìbào jìndù.) — Каждый понедельник нужно отчитываться о прогрессе.',
            '请准备PPT来汇报。 (Qǐng zhǔnbèi PPT lái huìbào.) — Подготовьте презентацию для отчёта.'
        ]
    },
    12: {
        glyph: '安排',
        pinyin: 'ānpái',
        translation: 'организовывать / планировать (работу)',
        examples: [
            '经理安排了新任务。 (Jīnglǐ ānpái le xīn rènwù.) — Менеджер распределил новые задачи.',
            '你来安排会议时间。 (Nǐ lái ānpái huìyì shíjiān.) — Ты организуй время совещания.',
            '工作安排得很紧。 (Gōngzuò ānpái de hěn jǐn.) — Рабочий график очень плотный.'
        ]
    },
    13: {
        glyph: '处理',
        pinyin: 'chǔlǐ',
        translation: 'обрабатывать / решать (задачи, документы)',
        examples: [
            '他在处理邮件。 (Tā zài chǔlǐ yóujiàn.) — Он обрабатывает письма.',
            '这个问题需要尽快处理。 (Zhège wèntí xūyào jǐnkuài chǔlǐ.) — Этот вопрос нужно решить как можно скорее.',
            '财务部门处理报销。 (Cáiwù bùmén chǔlǐ bàoxiāo.) — Финансовый отдел занимается возмещением расходов.'
        ]
    },
    14: {
        glyph: '发送',
        pinyin: 'fāsòng',
        translation: 'отправлять (письма, файлы)',
        examples: [
            '我发送了邮件。 (Wǒ fāsòng le yóujiàn.) — Я отправил письмо.',
            '请把文件发送给我。 (Qǐng bǎ wénjiàn fāsòng gěi wǒ.) — Пожалуйста, пришлите мне файл.',
            '邮件发送成功了吗？ (Yóujiàn fāsòng chénggōng le ma?) — Письмо успешно отправлено?'
        ]
    },
    15: {
        glyph: '回复',
        pinyin: 'huífù',
        translation: 'отвечать (на письма, сообщения)',
        examples: [
            '我回复了你的邮件。 (Wǒ huífù le nǐ de yóujiàn.) — Я ответил на твоё письмо.',
            '请尽快回复。 (Qǐng jǐnkuài huífù.) — Пожалуйста, ответьте как можно скорее.',
            '他还没回复我。 (Tā hái méi huífù wǒ.) — Он ещё не ответил мне.'
        ]
    },
    16: {
        glyph: '填写',
        pinyin: 'tiánxiě',
        translation: 'заполнять (формы, документы)',
        examples: [
            '请填写申请表。 (Qǐng tiánxiě shēnqǐng biǎo.) — Пожалуйста, заполните заявку.',
            '他填错了信息。 (Tā tián cuò le xìnxī.) — Он неправильно заполнил данные.',
            '在线填写简历。 (Zàixiàn tiánxiě jiǎnlì.) — Заполните резюме онлайн.'
        ]
    },
    17: {
        glyph: '签署',
        pinyin: 'qiānshǔ',
        translation: 'подписывать (договоры, документы)',
        examples: [
            '老板签署了合同。 (Lǎobǎn qiānshǔ le hétong.) — Босс подписал контракт.',
            '你需要签署这份文件。 (Nǐ xūyào qiānshǔ zhè fèn wénjiàn.) — Вам нужно подписать этот документ.',
            '签署前请仔细阅读。 (Qiānshǔ qián qǐng zǐxì yuèdú.) — Перед подписанием внимательно прочитайте.'
        ]
    },
    18: {
        glyph: '管理',
        pinyin: 'guǎnlǐ',
        translation: 'управлять (отделом, проектом)',
        examples: [
            '她管理整个团队。 (Tā guǎnlǐ zhěnggè tuánduì.) — Она управляет всей командой.',
            '这个项目由他管理。 (Zhège xiàngmù yóu tā guǎnlǐ.) — Этим проектом управляет он.',
            '良好的管理很重要。 (Liánghǎo de guǎnlǐ hěn zhòngyào.) — Хорошее управление очень важно.'
        ]
    },
    19: {
        glyph: '合作',
        pinyin: 'hézuò',
        translation: 'сотрудничать',
        examples: [
            '我们和那家公司合作。 (Wǒmen hé nà jiā gōngsī hézuò.) — Мы сотрудничаем с той компанией.',
            '团队成员需要好好合作。 (Tuánduì chéngyuán xūyào hǎohǎo hézuò.) — Членам команды нужно хорошо взаимодействовать.',
            '他们合作完成了项目。 (Tāmen hézuò wánchéng le xiàngmù.) — Они совместно завершили проект.'
        ]
    },
    20: {
        glyph: '完成',
        pinyin: 'wánchéng',
        translation: 'завершать (задачу, проект)',
        examples: [
            '我完成了报告。 (Wǒ wánchéng le bàogào.) — Я завершил отчёт.',
            '项目按时完成了。 (Xiàngmù ànshí wánchéng le.) — Проект завершили в срок.',
            '你能今天完成吗？ (Nǐ néng jīntiān wánchéng ma?) — Ты сможешь закончить сегодня?'
        ]
    },
    21: {
        glyph: '迟到',
        pinyin: 'chídào',
        translation: 'опаздывать (на работу)',
        examples: [
            '他今天迟到了。 (Tā jīntiān chídào le.) — Он сегодня опоздал.',
            '不要迟到！ (Bié chídào!) — Не опаздывай!',
            '迟到会影响考勤。 (Chídào huì yǐngxiǎng kǎoqín.) — Опоздания повлияют на учёт рабочего времени.'
        ]
    },
    22: {
        glyph: '请假',
        pinyin: 'qǐngjià',
        translation: 'брать отпуск / брать выходной',
        examples: [
            '我明天请假。 (Wǒ míngtiān qǐngjià.) — Завтра я беру выходной.',
            '他生病了，请假三天。 (Tā shēngbìng le, qǐngjià sān tiān.) — Он заболел и берёт три дня отгулов.',
            '请假需要提前申请。 (Qǐngjià xūyào tíqián shēnqǐng.) — Чтобы взять выходной, нужно подать заявку заранее.'
        ]
    },
    23: {
        glyph: '出差',
        pinyin: 'chūchāi',
        translation: 'ехать в командировку',
        examples: [
            '他下周要出差。 (Tā xià zhōu yào chūchāi.) — На следующей неделе он едет в командировку.',
            '出差去上海。 (Chūchāi qù Shànghǎi.) — Командировка в Шанхай.',
            '出差费用公司报销。 (Chūchāi fèiyong gōngsī bàoxiāo.) — Расходы на командировку компенсирует компания.'
        ]
    },
    24: {
        glyph: '面试',
        pinyin: 'miànshì',
        translation: 'проходить собеседование',
        examples: [
            '我明天去面试。 (Wǒ míngtiān qù miànshì.) — Завтра я иду на собеседование.',
            '面试很顺利。 (Miànshì hěn shùnlì.) — Собеседование прошло хорошо.',
            '准备常见面试问题。 (Zhǔnbèi chángjiàn miànshì wèntí.) — Подготовьтесь к типичным вопросам на собеседовании.'
        ]
    },
    25: {
        glyph: '退休',
        pinyin: 'tuìxiū',
        translation: 'уходить на пенсию',
        examples: [
            '他明年退休。 (Tā míngnián tuìxiū.) — Он уходит на пенсию в следующем году.',
            '退休后我想旅行。 (Tuìxiū hòu wǒ xiǎng lǚxíng.) — После пенсии я хочу путешествовать.',
            '公司为他举办了退休仪式。 (Gōngsī wèi tā jǔbàn le tuìxiū yíshì.) — Компания устроила ему прощальную церемонию.'
        ]
    }
};

const verbsEmotionsAdvanced: { [key: number]: DictItem } = {
    1: {
        glyph: '惭愧',
        pinyin: 'cánkuì',
        translation: 'испытывать стыд / чувствовать себя виноватым',
        examples: [
            '我对自己说的话感到惭愧。 (Wǒ duì zìjǐ shuō de huà gǎndào cánkuì.) — Мне стыдно за то, что я сказал.',
            '他惭愧地低下了头。 (Tā cánkuì de dī xià le tóu.) — Он стыдливо опустил голову.',
            '你不应该惭愧，你做得很好。 (Nǐ bú yīnggāi cánkuì, nǐ zuò de hěn hǎo.) — Тебе не за что стыдиться, ты отлично справился.'
        ]
    },
    2: {
        glyph: '尴尬',
        pinyin: 'gāngà',
        translation: 'чувствовать неловкость',
        examples: [
            '当时我很尴尬。 (Dāngshí wǒ hěn gāngà.) — В тот момент мне было очень неловко.',
            '他说错话，场面很尴尬。 (Tā shuō cuò huà, chǎngmiàn hěn gāngà.) — Он сказал не то, и стало неловко.',
            '别让他尴尬！ (Bié ràng tā gāngà!) — Не ставь его в неловкое положение!'
        ]
    },
    3: {
        glyph: '羡慕',
        pinyin: 'xiànmù',
        translation: 'завидовать (в позитивном смысле)',
        examples: [
            '我羡慕你的自由。 (Wǒ xiànmù nǐ de zìyóu.) — Я завидую твоей свободе.',
            '她羡慕别人的好成绩。 (Tā xiànmù biérén de hǎo chéngjì.) — Она восхищается чужими успехами.',
            '别只是羡慕，要努力！ (Bié zhǐ shì xiànmù, yào nǔlì!) — Не просто завидуй, а работай!'
        ]
    },
    4: {
        glyph: '愧疚',
        pinyin: 'kuìjiù',
        translation: 'испытывать глубокое чувство вины',
        examples: [
            '他对朋友的离开感到愧疚。 (Tā duì péngyou de líkāi gǎndào kuìjiù.) — Он чувствует вину из-за ухода друга.',
            '妈妈生病了，他很愧疚。 (Māma shēngbìng le, tā hěn kuìjiù.) — Его мама заболела, и он чувствует себя виноватым.',
            '别太愧疚，不是你的错。 (Bié tài kuìjiù, bú shì nǐ de cuò.) — Не мучайся чувством вины, это не твоя вина.'
        ]
    },
    5: {
        glyph: '委屈',
        pinyin: 'wěiqū',
        translation: 'чувствовать несправедливость / быть обиженным',
        examples: [
            '我觉得很委屈。 (Wǒ juéde hěn wěiqū.) — Я чувствую себя пострадавшим.',
            '他被冤枉了，很委屈。 (Tā bèi yuānwǎng le, hěn wěiqū.) — Его оклеветали, и он очень обижен.',
            '别委屈自己。 (Bié wěiqū zìjǐ.) — Не терпи несправедливости в ущерб себе.'
        ]
    },
    6: {
        glyph: '感动',
        pinyin: 'gǎndòng',
        translation: 'быть тронутым (до слёз)',
        examples: [
            '这个故事让我很感动。 (Zhège gùshi ràng wǒ hěn gǎndòng.) — Эта история меня очень тронула.',
            '她感动得哭了。 (Tā gǎndòng de kū le.) — Она заплакала от волнения.',
            '父母的爱最让人感动。 (Fùmǔ de ài zuì ràng rén gǎndòng.) — Родительская любовь трогает больше всего.'
        ]
    },
    7: {
        glyph: '震惊',
        pinyin: 'zhènjīng',
        translation: 'быть потрясённым / шокированным',
        examples: [
            '听到这个消息，我很震惊。 (Tīng dào zhège xiāoxī, wǒ hěn zhènjīng.) — Услышав эту новость, я был в шоке.',
            '他震惊得说不出话。 (Tā zhènjīng de shuō bù chū huà.) — Он был так потрясён, что не мог вымолвить слова.',
            '这个结果令人震惊。 (Zhège jiéguǒ lìng rén zhènjīng.) — Этот результат шокирует.'
        ]
    },
    8: {
        glyph: '困惑',
        pinyin: 'kùnhuò',
        translation: 'быть озадаченным / растерянным',
        examples: [
            '我对这个问题感到困惑。 (Wǒ duì zhège wèntí gǎndào kùnhuò.) — Я растерян этим вопросом.',
            '他困惑地看着我。 (Tā kùnhuò de kànzhe wǒ.) — Он смотрел на меня с недоумением.',
            '别让复杂的情况让你困惑。 (Bié ràng fùzá de qíngkuàng ràng nǐ kùnhuò.) — Не позволяй сложной ситуации сбить тебя с толку.'
        ]
    },
    9: {
        glyph: '安心',
        pinyin: 'ānxīn',
        translation: 'чувствовать спокойствие / быть уверенным',
        examples: [
            '知道你安全，我就安心了。 (Zhīdào nǐ ānquán, wǒ jiù ānxīn le.) — Зная, что ты в безопасности, я успокоился.',
            '请安心休息。 (Qǐng ānxīn xiūxi.) — Отдыхай спокойно.',
            '有他在，我很安心。 (Yǒu tā zài, wǒ hěn ānxīn.) — Когда он рядом, я чувствую себя в безопасности.'
        ]
    },
    10: {
        glyph: '担心',
        pinyin: 'dānxīn',
        translation: 'волноваться',
        examples: [
            '妈妈总是担心我。 (Māma zǒngshì dānxīn wǒ.) — Мама всегда за меня волнуется.',
            '别担心，一切都会好。 (Bié dānxīn, yīqiè dōu huì hǎo.) — Не волнуйся, всё будет хорошо.',
            '我担心他迟到了。 (Wǒ dānxīn tā chídào le.) — Я волнуюсь, что он опоздал.'
        ]
    },
    11: {
        glyph: '害怕',
        pinyin: 'hàipà',
        translation: 'бояться',
        examples: [
            '孩子害怕黑暗。 (Háizi hàipà hēi\'àn.) — Дети боятся темноты.',
            '我不怕失败。 (Wǒ bù pà shībài.) — Я не боюсь неудач.',
            '他害怕承认错误。 (Tā hàipà chéngrèn cuòwù.) — Он боится признать ошибку.'
        ]
    },
    12: {
        glyph: '羞耻',
        pinyin: 'xiūchǐ',
        translation: 'испытывать глубокий стыд',
        examples: [
            '他的行为让人感到羞耻。 (Tā de xíngwéi ràng rén gǎndào xiūchǐ.) — Его поведение вызывает стыд.',
            '别做让人羞耻的事！ (Bié zuò ràng rén xiūchǐ de shì!) — Не делай того, за что будет стыдно!',
            '她因谎言感到羞耻。 (Tā yīn huǎnghuà gǎndào xiūchǐ.) — Ей было стыдно за ложь.'
        ]
    },
    13: {
        glyph: '厌烦',
        pinyin: 'yànfán',
        translation: 'испытывать раздражение / усталость от чего-то',
        examples: [
            '我对 повторения厌烦了。 (Wǒ duì chóngfù yànfán le.) — Я устал от повторений.',
            '他厌烦了 эту работу。 (Tā yànfán le zhè fèn gōngzuò.) — Он устал от этой работы.',
            '别再说了，我很厌烦！ (Bié zài shuō le, wǒ hěn yànfán!) — Хватит уже, я раздражён!'
        ]
    },
    14: {
        glyph: '满足',
        pinyin: 'mǎnzú',
        translation: 'чувствовать удовлетворение',
        examples: [
            '我对现在的生活很满足。 (Wǒ duì xiànzài de shēnghuó hěn mǎnzú.) — Я доволен своей нынешней жизнью.',
            '他满足地笑了。 (Tā mǎnzú de xiào le.) — Он улыбнулся с удовлетворением.',
            '别满足于现状。 (Bié mǎnzú yú xiànzhuàng.) — Не довольствуйся достигнутым.'
        ]
    },
    15: {
        glyph: '失落',
        pinyin: 'shīluò',
        translation: 'чувствовать опустошённость / разочарование',
        examples: [
            '他看起来很失落。 (Tā kàn qǐlái hěn shīluò.) — Он выглядит подавленным.',
            '梦想破灭后，他感到失落。 (Mèngxiǎng pòmiè hòu, tā gǎndào shīluò.) — После крушения мечты он почувствовал пустоту.',
            '别太失落，还有机会。 (Bié tài shīluò, hái yǒu jīhuì.) — Не унывай, ещё есть шанс.'
        ]
    },
    16: {
        glyph: '孤独',
        pinyin: 'gūdú',
        translation: 'чувствовать одиночество',
        examples: [
            '一个人住，有时会感到孤独。 (Yīgè rén zhù, yǒushí huì gǎndào gūdú.) — Когда живёшь один, иногда чувствуешь одиночество.',
            '他内心很孤独。 (Tā nèixīn hěn gūdú.) — В душе он очень одинок.',
            '孤独不是坏事。 (Gūdú bú shì huài shì.) — Одиночество — не всегда плохо.'
        ]
    },
    17: {
        glyph: '感激',
        pinyin: 'gǎnjī',
        translation: 'испытывать глубокую благодарность',
        examples: [
            '我非常感激你的帮助。 (Wǒ fēicháng gǎnjī nǐ de bāngzhù.) — Я бесконечно благодарен за твою помощь.',
            '她感激得说不出话。 (Tā gǎnjī de shuō bù chū huà.) — Она была так благодарна, что не могла говорить.',
            '别客气，不用这么感激。 (Bié kèqi, búyòng zhème gǎnjī.) — Не надо так благодарить, всё в порядке.'
        ]
    },
    18: {
        glyph: '懊悔',
        pinyin: 'àohuǐ',
        translation: 'горько сожалеть',
        examples: [
            '他懊悔自己说了谎。 (Tā àohuǐ zìjǐ shuō le huǎng.) — Он горько сожалеет, что солгал.',
            '不要等到老了才懊悔。 (Búyào děng dào lǎo le cái àohuǐ.) — Не жди старости, чтобы сожалеть.',
            '他懊悔没珍惜时间。 (Tā àohuǐ méi zhēnxī shíjiān.) — Он сожалеет, что не ценил время.'
        ]
    },
    19: {
        glyph: '欣慰',
        pinyin: 'xīnwèi',
        translation: 'чувствовать облегчение и радость одновременно',
        examples: [
            '看到孩子成功，父母很欣慰。 (Kàn dào háizi chénggōng, fùmǔ hěn xīnwèi.) — Родители рады и спокойны, видя успех ребёнка.',
            '他欣慰地笑了。 (Tā xīnwèi de xiào le.) — Он улыбнулся с облегчением.',
            '你的进步让我很欣慰。 (Nǐ de jìnbù ràng wǒ hěn xīnwèi.) — Твой прогресс меня очень радует.'
        ]
    },
    20: {
        glyph: '纠结',
        pinyin: 'jiūjié',
        translation: 'быть в нерешительности / мучиться выбором',
        examples: [
            '我在纠结要不要辞职。 (Wǒ zài jiūjié yào búyào cízhí.) — Я не могу решить, увольняться ли.',
            '他纠结了很久。 (Tā jiūjié le hěn jiǔ.) — Он долго мучился с выбором.',
            '别太纠结，相信直觉。 (Bié tài jiūjié, xiāngxìn zhíjué.) — Не зацикливайся, доверься интуиции.'
        ]
    }
};

const verbsPoliticsSociety: { [key: number]: DictItem } = {
    1: {
        glyph: '投票',
        pinyin: 'tóu piào',
        translation: 'голосовать',
        examples: [
            '公民有权利投票。 (Gōngmín yǒu quánlì tóu piào.) — Граждане имеют право голоса.',
            '明天是投票日。 (Míngtiān shì tóu piào rì.) — Завтра день выборов.',
            '你打算投给谁？ (Nǐ dǎsuàn tóu gěi shéi?) — За кого ты собираешься голосовать?'
        ]
    },
    2: {
        glyph: '选举',
        pinyin: 'xuǎnjǔ',
        translation: 'избирать / проводить выборы',
        examples: [
            '我们选举新主席。 (Wǒmen xuǎnjǔ xīn zhǔxí.) — Мы выбираем нового председателя.',
            '总统选举每四年一次。 (Zǒngtǒng xuǎnjǔ měi sì nián yī cì.) — Президентские выборы раз в четыре года.',
            '他被选举为班长。 (Tā bèi xuǎnjǔ wèi bānzhǎng.) — Его избрали старостой класса.'
        ]
    },
    3: {
        glyph: '参政',
        pinyin: 'cānzhèng',
        translation: 'участвовать в политике',
        examples: [
            '年轻人应该参政。 (Niánqīng rén yīnggāi cānzhèng.) — Молодёжь должна участвовать в политике.',
            '她决定参政，改变社会。 (Tā juédìng cānzhèng, gǎibiàn shèhuì.) — Она решила заняться политикой, чтобы изменить общество.',
            '参政是公民的责任。 (Cānzhèng shì gōngmín de zérèn.) — Участие в политике — гражданский долг.'
        ]
    },
    4: {
        glyph: '抗议',
        pinyin: 'kàngyì',
        translation: 'протестовать',
        examples: [
            '人们在街上抗议。 (Rénmen zài jiē shàng kàngyì.) — Люди протестуют на улицах.',
            '他们抗议新法律。 (Tāmen kàngyì xīn fǎlǜ.) — Они протестуют против нового закона.',
            '和平抗议是合法的。 (Hépíng kàngyì shì héfǎ de.) — Мирный протест законен.'
        ]
    },
    5: {
        glyph: '示威',
        pinyin: 'shìwēi',
        translation: 'демонстрировать (участвовать в демонстрации)',
        examples: [
            '工人示威要求加薪。 (Gōngrén shìwēi yāoqiú jiā xīn.) — Рабочие устраивают демонстрацию за повышение зарплаты.',
            '政府禁止非法示威。 (Zhèngfǔ jìnzhǐ fēifǎ shìwēi.) — Правительство запрещает незаконные демонстрации.',
            '示威者举着标语。 (Shìwēi zhě jǔ zhe biāoyǔ.) — Демонстранты держат плакаты.'
        ]
    },
    6: {
        glyph: '罢工',
        pinyin: 'bàgōng',
        translation: 'объявлять забастовку',
        examples: [
            '司机罢工了。 (Sījī bàgōng le.) — Водители объявили забастовку.',
            '因为工资问题，老师们罢工。 (Yīnwèi gōngzī wèntí, lǎoshīmen bàgōng.) — Из-за вопроса зарплаты учителя объявили забастовку.',
            '罢工影响了公共交通。 (Bàgōng yǐngxiǎng le gōnggòng jiāotōng.) — Забастовка повлияла на общественный транспорт.'
        ]
    },
    7: {
        glyph: '立法',
        pinyin: 'lìfǎ',
        translation: 'принимать законы',
        examples: [
            '议会正在立法。 (Yìhuì zhèngzài lìfǎ.) — Парламент сейчас принимает законы.',
            '新法律需要立法程序。 (Xīn fǎlǜ xūyào lìfǎ chéngxù.) — Новый закон требует законодательной процедуры.',
            '政府立法保护环境。 (Zhèngfǔ lìfǎ bǎohù huánjìng.) — Правительство принимает законы для защиты окружающей среды.'
        ]
    },
    8: {
        glyph: '执法',
        pinyin: 'zhífǎ',
        translation: 'применять закон (о полиции, судах)',
        examples: [
            '警察负责执法。 (Jǐngchá fùzé zhífǎ.) — Полиция отвечает за исполнение закона.',
            '法律必须公正执法。 (Fǎlǜ bìxū gōngzhèng zhífǎ.) — Законы должны применяться справедливо.',
            '执法部门在调查。 (Zhífǎ bùmén zài diàochá.) — Органы правопорядка проводят расследование.'
        ]
    },
    9: {
        glyph: '违法',
        pinyin: 'wéifǎ',
        translation: 'нарушать закон',
        examples: [
            '超速是违法行为。 (Chāosù shì wéifǎ xíngwéi.) — Превышение скорости — нарушение закона.',
            '他因违法被逮捕。 (Tā yīn wéifǎ bèi dàibǔ.) — Его арестовали за нарушение закона.',
            '任何人都不能违法。 (Rènhé rén dōu bù néng wéifǎ.) — Никто не имеет права нарушать закон.'
        ]
    },
    10: {
        glyph: '守法',
        pinyin: 'shǒufǎ',
        translation: 'соблюдать закон',
        examples: [
            '公民应该守法。 (Gōngmín yīnggāi shǒufǎ.) — Граждане должны соблюдать законы.',
            '守法是每个公民的义务。 (Shǒufǎ shì měi gè gōngmín de yìwù.) — Соблюдение закона — обязанность каждого гражданина.',
            '这家企业一直守法经营。 (Zhè jiā qǐyè yīzhí shǒufǎ jīngyíng.) — Эта компания всегда ведёт законную деятельность.'
        ]
    },
    11: {
        glyph: '改革',
        pinyin: 'gǎigé',
        translation: 'реформировать / проводить реформы',
        examples: [
            '政府正在改革教育系统。 (Zhèngfǔ zhèngzài gǎigé jiàoyù xìtǒng.) — Правительство реформирует систему образования.',
            '经济改革很重要。 (Jīngjì gǎigé hěn zhòngyào.) — Экономические реформы очень важны.',
            '他支持政治改革。 (Tā zhīchí zhèngzhì gǎigé.) — Он поддерживает политические реформы.'
        ]
    },
    12: {
        glyph: '革命',
        pinyin: 'gémìng',
        translation: 'совершать революцию',
        examples: [
            '1911年发生了辛亥革命。 (1911 nián fāshēng le Xīnhài Gémìng.) — В 1911 году произошла Синьхайская революция.',
            '工业革命改变了世界。 (Gōngyè gémìng gǎibiàn le shìjiè.) — Промышленная революция изменила мир.',
            '有些人想发动革命。 (Yǒu xiē rén xiǎng fādòng gémìng.) — Некоторые хотят устроить революцию.'
        ]
    },
    13: {
        glyph: '统治',
        pinyin: 'tǒngzhì',
        translation: 'управлять (страной, народом)',
        examples: [
            '皇帝统治这个国家五十年。 (Huángdì tǒngzhì zhège guójiā wǔshí nián.) — Император правил этой страной пятьдесят лет.',
            '民主制度取代了专制统治。 (Mínzhǔ zhìdù qǔdài le zhuānzhì tǒngzhì.) — Демократия заменила авторитарное правление.',
            '谁在统治这个国家？ (Shéi zài tǒngzhì zhège guójiā?) — Кто правит этой страной?'
        ]
    },
    14: {
        glyph: '独立',
        pinyin: 'dúlì',
        translation: 'объявлять независимость',
        examples: [
            '这个地区想独立。 (Zhège dìqū xiǎng dúlì.) — Этот регион хочет отделиться.',
            '美国在1776年宣布独立。 (Měiguó zài 1776 nián xuānbù dúlì.) — США объявили независимость в 1776 году.',
            '独立运动正在发展。 (Dúlì yùndòng zhèngzài fāzhǎn.) — Движение за независимость набирает силу.'
        ]
    },
    15: {
        glyph: '统一',
        pinyin: 'tǒngyī',
        translation: 'объединять / воссоединять',
        examples: [
            '中国希望和平统一。 (Zhōngguó xīwàng hépíng tǒngyī.) — Китай стремится к мирному воссоединению.',
            '德国在1990年统一。 (Déguó zài 1990 nián tǒngyī.) — Германия воссоединилась в 1990 году.',
            '统一国家是他们的目标。 (Tǒngyī guójiā shì tāmen de mùbiāo.) — Объединение страны — их цель.'
        ]
    },
    16: {
        glyph: '分裂',
        pinyin: 'fēnliè',
        translation: 'раскалывать / сеять раздор',
        examples: [
            '外部势力试图分裂我们。 (Wàibù shìlì shìtú fēnliè wǒmen.) — Внешние силы пытаются нас расколоть.',
            '民族团结，反对分裂。 (Mínzú tuánjié, fǎnduì fēnliè.) — Единство наций, против сепаратизма.',
            '战争导致国家分裂。 (Zhànzhēng dǎozhì guójiā fēnliè.) — Война привела к расколу страны.'
        ]
    },
    17: {
        glyph: '参与',
        pinyin: 'cānyù',
        translation: 'участвовать (в общественной жизни)',
        examples: [
            '每个人都应该参与社区事务。 (Měi gè rén dōu yīnggāi cānyù shèqū shìwù.) — Каждый должен участвовать в делах сообщества.',
            '他积极参与公益活动。 (Tā jījí cānyù gōngyì huódòng.) — Он активно участвует в благотворительности.',
            '年轻人要参与社会建设。 (Niánqīng rén yào cānyù shèhuì jiànshè.) — Молодёжь должна участвовать в построении общества.'
        ]
    },
    18: {
        glyph: '监督',
        pinyin: 'jiāndū',
        translation: 'осуществлять общественный контроль',
        examples: [
            '媒体监督政府行为。 (Méitǐ jiāndū zhèngfǔ xíngwéi.) — СМИ контролируют действия правительства.',
            '公民有权监督公共资金。 (Gōngmín yǒu quán jiāndū gōnggòng zījīn.) — Граждане имеют право контролировать использование общественных средств.',
            '我们监督项目进展。 (Wǒmen jiāndū xiàngmù jìnzhǎn.) — Мы отслеживаем ход проекта.'
        ]
    },
    19: {
        glyph: '维权',
        pinyin: 'wéiquán',
        translation: 'защищать свои права',
        examples: [
            '工人集体维权。 (Gōngrén jítǐ wéiquán.) — Рабочие коллективно защищают свои права.',
            '消费者应该学会维权。 (Xiāofèizhě yīnggāi xuéhuì wéiquán.) — Потребители должны уметь отстаивать свои права.',
            '律师帮助他合法维权。 (Lǜshī bāngzhù tā héfǎ wéiquán.) — Адвокат помог ему законно защитить права.'
        ]
    },
    20: {
        glyph: '抗议',
        pinyin: 'kàngyì',
        translation: 'выражать несогласие официально',
        examples: [
            '大使馆提出正式抗议。 (Dàshǐguǎn tíchū zhèngshì kàngyì.) — Посольство направило официальный протест.',
            '我们抗议不公平的待遇。 (Wǒmen kàngyì bù gōngpíng de dàiyù.) — Мы протестуем против несправедливого обращения.',
            '抗议无效。 (Kàngyì wúxiào.) — Протест не возымел эффекта.'
        ]
    }
};

const verbsTechnology: { [key: number]: DictItem } = {
    1: {
        glyph: '使用',
        pinyin: 'shǐyòng',
        translation: 'использовать (устройство, программу)',
        examples: [
            '我使用手机上网。 (Wǒ shǐyòng shǒujī shàngwǎng.) — Я использую телефон для выхода в интернет.',
            '这个软件很容易使用。 (Zhège ruǎnjiàn hěn róngyì shǐyòng.) — Эта программа очень проста в использовании.',
            '请正确使用设备。 (Qǐng zhèngquè shǐyòng shèbèi.) — Пожалуйста, используйте устройство правильно.'
        ]
    },
    2: {
        glyph: '下载',
        pinyin: 'xiàzǎi',
        translation: 'скачивать',
        examples: [
            '我在下载电影。 (Wǒ zài xiàzǎi diànyǐng.) — Я скачиваю фильм.',
            '你可以从应用商店下载。 (Nǐ kěyǐ cóng yìngyòng shāngdiàn xiàzǎi.) — Ты можешь скачать из магазина приложений.',
            '下载需要几分钟。 (Xiàzǎi xūyào jǐ fēnzhōng.) — Скачивание займёт несколько минут.'
        ]
    },
    3: {
        glyph: '上传',
        pinyin: 'shàngchuán',
        translation: 'загружать (в облако, на сайт)',
        examples: [
            '请上传你的照片。 (Qǐng shàngchuán nǐ de zhàopiàn.) — Пожалуйста, загрузи свои фото.',
            '文件上传成功了。 (Wénjiàn shàngchuán chénggōng le.) — Файл успешно загружен.',
            '上传速度很慢。 (Shàngchuán sùdù hěn màn.) — Скорость загрузки очень медленная.'
        ]
    },
    4: {
        glyph: '安装',
        pinyin: 'ānzhuāng',
        translation: 'устанавливать (программу, приложение)',
        examples: [
            '我正在安装新软件。 (Wǒ zhèngzài ānzhuāng xīn ruǎnjiàn.) — Я устанавливаю новую программу.',
            '你需要安装这个插件。 (Nǐ xūyào ānzhuāng zhège chājiàn.) — Тебе нужно установить этот плагин.',
            '安装完成后重启电脑。 (Ānzhuāng wánchéng hòu chóngqǐ diànnǎo.) — После установки перезагрузи компьютер.'
        ]
    },
    5: {
        glyph: '卸载',
        pinyin: 'xièzǎi',
        translation: 'удалять (программу с устройства)',
        examples: [
            '我不需要这个应用，卸载了。 (Wǒ bú xūyào zhège yìngyòng, xièzǎi le.) — Мне не нужно это приложение, я его удалил.',
            '如何卸载程序？ (Rúhé xièzǎi chéngxù?) — Как удалить программу?',
            '卸载后释放了空间。 (Xièzǎi hòu shìfàng le kōngjiān.) — После удаления освободилось место.'
        ]
    },
    6: {
        glyph: '连接',
        pinyin: 'liánjiē',
        translation: 'подключать / соединять',
        examples: [
            '手机连接到Wi-Fi。 (Shǒujī liánjiē dào Wi-Fi.) — Телефон подключён к Wi-Fi.',
            '请连接蓝牙耳机。 (Qǐng liánjiē lányá ěrjī.) — Подключите Bluetooth-наушники.',
            '电脑无法连接网络。 (Diànnǎo wúfǎ liánjiē wǎngluò.) — Компьютер не может подключиться к сети.'
        ]
    },
    7: {
        glyph: '断开',
        pinyin: 'duànkāi',
        translation: 'отключать (соединение)',
        examples: [
            '我断开了Wi-Fi。 (Wǒ duànkāi le Wi-Fi.) — Я отключился от Wi-Fi.',
            '请断开蓝牙。 (Qǐng duànkāi lányá.) — Отключите Bluetooth.',
            '信号断开了。 (Xìnhào duànkāi le.) — Связь прервалась.'
        ]
    },
    8: {
        glyph: '充电',
        pinyin: 'chōngdiàn',
        translation: 'заряжать (устройство)',
        examples: [
            '手机没电了，要充电。 (Shǒujī méi diàn le, yào chōngdiàn.) — Телефон разрядился, нужно зарядить.',
            '我在给笔记本充电。 (Wǒ zài gěi bǐjìběn chōngdiàn.) — Я заряжаю ноутбук.',
            '充电器在哪里？ (Chōngdiànqì zài nǎlǐ?) — Где зарядное устройство?'
        ]
    },
    9: {
        glyph: '重启',
        pinyin: 'chóngqǐ',
        translation: 'перезагружать',
        examples: [
            '电脑卡了，需要重启。 (Diànnǎo kǎ le, xūyào chóngqǐ.) — Компьютер завис, нужно перезагрузить.',
            '安装后请重启设备。 (Ānzhuāng hòu qǐng chóngqǐ shèbèi.) — После установки перезагрузите устройство.',
            '我重启了路由器。 (Wǒ chóngqǐ le lùyóuqì.) — Я перезагрузил роутер.'
        ]
    },
    10: {
        glyph: '关机',
        pinyin: 'guān jī',
        translation: 'выключать (устройство)',
        examples: [
            '晚上记得关机。 (Wǎnshang jìde guān jī.) — Вечером не забудь выключить устройство.',
            '电脑自动关机了。 (Diànnǎo zìdòng guān jī le.) — Компьютер сам выключился.',
            '关机前保存文件。 (Guān jī qián bǎocún wénjiàn.) — Перед выключением сохрани файлы.'
        ]
    },
    11: {
        glyph: '开机',
        pinyin: 'kāi jī',
        translation: 'включать (устройство)',
        examples: [
            '早上我开机工作。 (Zǎoshang wǒ kāi jī gōngzuò.) — Утром я включаю компьютер и начинаю работать.',
            '按这个键开机。 (Àn zhège jiàn kāi jī.) — Нажми эту кнопку, чтобы включить.',
            '开机需要一分钟。 (Kāi jī xūyào yī fēnzhōng.) — Включение занимает минуту.'
        ]
    },
    12: {
        glyph: '编程',
        pinyin: 'biānchéng',
        translation: 'программировать',
        examples: [
            '他在学习编程。 (Tā zài xuéxí biānchéng.) — Он учится программированию.',
            '我会用Python编程。 (Wǒ huì yòng Python biānchéng.) — Я умею программировать на Python.',
            '编程需要逻辑思维。 (Biānchéng xūyào luójí sīwéi.) — Для программирования нужно логическое мышление.'
        ]
    },
    13: {
        glyph: '开发',
        pinyin: 'kāifā',
        translation: 'разрабатывать (программы, приложения)',
        examples: [
            '他们在开发新游戏。 (Tāmen zài kāifā xīn yóuxì.) — Они разрабатывают новую игру.',
            '公司开发了自己的操作系统。 (Gōngsī kāifā le zìjǐ de cāozuò xìtǒng.) — Компания разработала собственную операционную систему.',
            '他是一名软件开发者。 (Tā shì yī míng ruǎnjiàn kāifā zhě.) — Он разработчик программного обеспечения.'
        ]
    },
    14: {
        glyph: '调试',
        pinyin: 'tiáoshì',
        translation: 'отлаживать (код, программу)',
        examples: [
            '程序员在调试代码。 (Chéngxùyuán zài tiáoshì dàimǎ.) — Программист отлаживает код.',
            '这个错误很难调试。 (Zhège cuòwù hěn nán tiáoshì.) — Эту ошибку трудно отладить.',
            '调试后程序运行正常了。 (Tiáoshì hòu chéngxù yùnxíng zhèngcháng le.) — После отладки программа заработала нормально.'
        ]
    },
    15: {
        glyph: '更新',
        pinyin: 'gēngxīn',
        translation: 'обновлять (программу, систему)',
        examples: [
            '系统需要更新。 (Xìtǒng xūyào gēngxīn.) — Системе нужно обновление.',
            '我刚刚更新了手机。 (Wǒ gānggāng gēngxīn le shǒujī.) — Я только что обновил телефон.',
            '请定期更新软件。 (Qǐng dìngqī gēngxīn ruǎnjiàn.) — Регулярно обновляйте программы.'
        ]
    },
    16: {
        glyph: '同步',
        pinyin: 'tóngbù',
        translation: 'синхронизировать',
        examples: [
            '手机和电脑同步了。 (Shǒujī hé diànnǎo tóngbù le.) — Телефон и компьютер синхронизированы.',
            '照片自动同步到云端。 (Zhàopiàn zìdòng tóngbù dào yúnduān.) — Фото автоматически синхронизируются в облако.',
            '请先同步数据。 (Qǐng xiān tóngbù shùjù.) — Сначала синхронизируйте данные.'
        ]
    },
    17: {
        glyph: '备份',
        pinyin: 'bèifèn',
        translation: 'создавать резервную копию',
        examples: [
            '重要文件要备份。 (Zhòngyào wénjiàn yào bèifèn.) — Важные файлы нужно резервировать.',
            '我每天备份数据。 (Wǒ měitiān bèifèn shùjù.) — Я резервирую данные каждый день.',
            '备份保存在硬盘上。 (Bèifèn bǎocún zài yìngpán shàng.) — Резервная копия хранится на жёстком диске.'
        ]
    },
    18: {
        glyph: '扫码',
        pinyin: 'sǎo mǎ',
        translation: 'сканировать QR-код',
        examples: [
            '请扫码支付。 (Qǐng sǎo mǎ zhīfù.) — Пожалуйста, отсканируйте код для оплаты.',
            '我用手机扫码登录。 (Wǒ yòng shǒujī sǎo mǎ dēnglù.) — Я сканирую код телефоном, чтобы войти.',
            '扫码关注公众号。 (Sǎo mǎ guānzhù gōngzhòng hào.) — Отсканируйте, чтобы подписаться на официальный аккаунт.'
        ]
    },
    19: {
        glyph: '点击',
        pinyin: 'diǎn jī',
        translation: 'щёлкать (мышей или пальцем)',
        examples: [
            '请点击这个按钮。 (Qǐng diǎn jī zhège ànniǔ.) — Пожалуйста, нажмите эту кнопку.',
            '双击打开文件。 (Shuāng jī dǎkāi wénjiàn.) — Дважды щёлкните, чтобы открыть файл.',
            '点击链接查看详情。 (Diǎn jī liànjiē chá kàn xiáqíng.) — Нажмите на ссылку, чтобы увидеть подробности.'
        ]
    },
    20: {
        glyph: '滑动',
        pinyin: 'huádòng',
        translation: 'свайпить / пролистывать',
        examples: [
            '向上滑动查看更多。 (Xiàng shàng huádòng chákàn gèng duō.) — Пролистайте вверх, чтобы увидеть больше.',
            '你可以左右滑动切换图片。 (Nǐ kěyǐ zuǒyòu huádòng qiēhuàn túpiàn.) — Вы можете свайпать влево-вправо, чтобы менять картинки.',
            '滑动屏幕解锁。 (Huádòng píngmù jiěsuǒ.) — Проведите по экрану, чтобы разблокировать.'
        ]
    },
    21: {
        glyph: '输入',
        pinyin: 'shūrù',
        translation: 'вводить (текст, данные)',
        examples: [
            '请输入密码。 (Qǐng shūrù mìmǎ.) — Пожалуйста, введите пароль.',
            '我在输入地址。 (Wǒ zài shūrù dìzhǐ.) — Я ввожу адрес.',
            '输入错误，请重试。 (Shūrù cuòwù, qǐng chóngshì.) — Неправильный ввод, попробуйте ещё раз.'
        ]
    },
    22: {
        glyph: '搜索',
        pinyin: 'sōusuǒ',
        translation: 'искать в интернете',
        examples: [
            '我在百度上搜索信息。 (Wǒ zài Bǎidù shàng sōusuǒ xìnxī.) — Я ищу информацию в Baidu.',
            '搜索“中文学习”。 (Sōusuǒ “Zhōngwén xuéxí”.) — Поищи «изучение китайского».',
            '搜索结果很多。 (Sōusuǒ jiéguǒ hěn duō.) — Результатов поиска много.'
        ]
    },
    23: {
        glyph: '分享',
        pinyin: 'fēnxiǎng',
        translation: 'делиться (контентом)',
        examples: [
            '你可以分享这篇文章。 (Nǐ kěyǐ fēnxiǎng zhè piān wénzhāng.) — Ты можешь поделиться этой статьёй.',
            '他在朋友圈分享了照片。 (Tā zài péngyou quān fēnxiǎng le zhàopiàn.) — Он поделился фото в WeChat Moments.',
            '点击分享按钮。 (Diǎn jī fēnxiǎng ànniǔ.) — Нажмите кнопку «Поделиться».'
        ]
    },
    24: {
        glyph: '直播',
        pinyin: 'zhíbō',
        translation: 'вести прямой эфир',
        examples: [
            '她在抖音直播。 (Tā zài Dǒuyīn zhíbō.) — Она ведёт прямой эфир в Douyin.',
            '比赛将在线直播。 (Bǐsài jiāng zài xiàn zhíbō.) — Матч будет транслироваться онлайн в прямом эфире.',
            '我每天直播一小时。 (Wǒ měitiān zhíbō yī xiǎoshí.) — Я стримлю каждый день по часу.'
        ]
    },
    25: {
        glyph: '黑',
        pinyin: 'hēi',
        translation: 'взламывать (неофиц.)',
        examples: [
            '别黑我的账号！ (Bié hēi wǒ de zhànghào!) — Не взламывай мой аккаунт!',
            '网站被黑了。 (Wǎngzhàn bèi hēi le.) — Сайт взломали.',
            '黑客黑进了系统。 (Hēikè hēi jìn le xìtǒng.) — Хакер проник в систему.'
        ]
    }
};

const verbsEnvironment: { [key: number]: DictItem } = {
    1: {
        glyph: '保护',
        pinyin: 'bǎohù',
        translation: 'защищать (природу, животных)',
        examples: [
            '我们应该保护环境。 (Wǒmen yīnggāi bǎohù huánjìng.) — Мы должны защищать окружающую среду.',
            '这个公园保护珍稀植物。 (Zhège gōngyuán bǎohù zhēnxī zhíwù.) — Этот парк защищает редкие растения.',
            '法律保护濒危动物。 (Fǎlǜ bǎohù bīnwēi dòngwù.) — Закон защищает исчезающих животных.'
        ]
    },
    2: {
        glyph: '污染',
        pinyin: 'wūrǎn',
        translation: 'загрязнять',
        examples: [
            '工厂污染了河流。 (Gōngchǎng wūrǎn le héliú.) — Завод загрязнил реку.',
            '塑料污染海洋。 (Sùliào wūrǎn hǎiyáng.) — Пластик загрязняет океан.',
            '空气污染很严重。 (Kōngqì wūrǎn hěn yánzhòng.) — Загрязнение воздуха очень серьёзное.'
        ]
    },
    3: {
        glyph: '破坏',
        pinyin: 'pòhuài',
        translation: 'наносить ущерб / разрушать (экосистему)',
        examples: [
            '乱砍滥伐破坏森林。 (Luàn kǎn làn fá pòhuài sēnlín.) — Беспорядочная вырубка лесов разрушает экосистему.',
            '人类活动正在破坏自然。 (Rénlèi huódòng zhèngzài pòhuài zìrán.) — Деятельность человека разрушает природу.',
            '不要破坏生态平衡。 (Búyào pòhuài shēngtài pínghéng.) — Не нарушайте экологическое равновесие.'
        ]
    },
    4: {
        glyph: '节约',
        pinyin: 'jiéyuē',
        translation: 'экономить (воду, энергию, ресурсы)',
        examples: [
            '我们要节约用水。 (Wǒmen yào jiéyuē yòng shuǐ.) — Нам нужно экономить воду.',
            '节约能源很重要。 (Jiéyuē néngyuán hěn zhòngyào.) — Экономия энергии очень важна.',
            '关灯可以节约电。 (Guān dēng kěyǐ jiéyuē diàn.) — Выключение света экономит электричество.'
        ]
    },
    5: {
        glyph: '回收',
        pinyin: 'huíshōu',
        translation: 'перерабатывать / собирать на переработку',
        examples: [
            '请回收塑料瓶。 (Qǐng huíshōu sùliào píng.) — Пожалуйста, сдавайте пластиковые бутылки на переработку.',
            '这个小区有垃圾分类回收。 (Zhège xiǎoqū yǒu lājī fēnlèi huíshōu.) — В этом районе есть сортировка мусора для переработки.',
            '纸张可以回收再利用。 (Zhǐzhāng kěyǐ huíshōu zài lìyòng.) — Бумагу можно переработать и использовать повторно.'
        ]
    },
    6: {
        glyph: '种植',
        pinyin: 'zhòngzhí',
        translation: 'сажать (деревья, растения)',
        examples: [
            '每年春天我们种植树苗。 (Měinián chūntiān wǒmen zhòngzhí shùmiáo.) — Каждую весну мы сажаем саженцы.',
            '政府鼓励种植树木。 (Zhèngfǔ gǔlì zhòngzhí shùmù.) — Правительство поощряет посадку деревьев.',
            '屋顶可以种植蔬菜。 (Wūdǐng kěyǐ zhòngzhí shūcài.) — На крышах можно выращивать овощи.'
        ]
    },
    7: {
        glyph: '砍伐',
        pinyin: 'kǎnfá',
        translation: 'вырубать (лес)',
        examples: [
            '禁止非法砍伐森林。 (Jìnzhǐ fēifǎ kǎnfá sēnlín.) — Запрещена незаконная вырубка лесов.',
            '过度砍伐导致沙漠化。 (Guòdù kǎnfá dǎozhì shāmòhuà.) — Чрезмерная вырубка приводит к опустыниванию.',
            '他们砍伐了整片树林。 (Tāmen kǎnfá le zhěng piàn shùlín.) — Они вырубили целый лес.'
        ]
    },
    8: {
        glyph: '排放',
        pinyin: 'páifàng',
        translation: 'выбрасывать (вредные вещества, газы)',
        examples: [
            '汽车排放二氧化碳。 (Qìchē páifàng èryǎnghuàtàn.) — Автомобили выбрасывают углекислый газ.',
            '工厂必须减少排放。 (Gōngchǎng bìxū jiǎnshǎo páifàng.) — Заводы обязаны сократить выбросы.',
            '碳排放影响气候。 (Tàn páifàng yǐngxiǎng qìhòu.) — Углеродные выбросы влияют на климат.'
        ]
    },
    9: {
        glyph: '融化',
        pinyin: 'rónghuà',
        translation: 'таять (льды, ледники)',
        examples: [
            '全球变暖导致冰川融化。 (Quánqiú biànnuǎn dǎozhì bīngchuān rónghuà.) — Глобальное потепление приводит к таянию ледников.',
            '北极冰盖正在融化。 (Běijí bīnggài zhèngzài rónghuà.) — Ледяной покров Арктики тает.',
            '冰川融化引起海平面上升。 (Bīngchuān rónghuà yǐnqǐ hǎi píngmiàn shàngshēng.) — Таяние ледников вызывает повышение уровня моря.'
        ]
    },
    10: {
        glyph: '变暖',
        pinyin: 'biànnuǎn',
        translation: 'теплеть (о климате)',
        examples: [
            '地球正在变暖。 (Dìqiú zhèngzài biànnuǎn.) — Земля становится теплее.',
            '气候变暖影响生态系统。 (Qìhòu biànnuǎn yǐngxiǎng shēngtài xìtǒng.) — Потепление климата влияет на экосистемы.',
            '科学家警告气候变暖。 (Kēxuéjiā jǐnggào qìhòu biànnuǎn.) — Учёные предупреждают о потеплении климата.'
        ]
    },
    11: {
        glyph: '消失',
        pinyin: 'xiāoshī',
        translation: 'исчезать (виды, леса, ледники)',
        examples: [
            '许多动物因环境破坏而消失。 (Xǔduō dòngwù yīn huánjìng pòhuài ér xiāoshī.) — Многие животные исчезли из-за разрушения среды обитания.',
            '热带雨林正在消失。 (Rèdài yǔlín zhèngzài xiāoshī.) — Тропические леса исчезают.',
            '如果不保护，这个物种会消失。 (Rúguǒ bù bǎohù, zhège wùzhǒng huì xiāoshī.) — Если не защищать, этот вид исчезнет.'
        ]
    },
    12: {
        glyph: '净化',
        pinyin: 'jìnghuà',
        translation: 'очищать (воду, воздух)',
        examples: [
            '这个设备可以净化空气。 (Zhège shèbèi kěyǐ jìnghuà kōngqì.) — Это устройство очищает воздух.',
            '湿地能自然净化水源。 (Shīdì néng zìrán jìnghuà shuǐyuán.) — Водно-болотные угодья естественным образом очищают воду.',
            '我们需要净化被污染的河流。 (Wǒmen xūyào jìnghuà bèi wūrǎn de héliú.) — Нам нужно очистить загрязнённую реку.'
        ]
    },
    13: {
        glyph: '分类',
        pinyin: 'fēnlèi',
        translation: 'сортировать (мусор)',
        examples: [
            '请把垃圾分类。 (Qǐng bǎ lājī fēnlèi.) — Пожалуйста, сортируйте мусор.',
            '上海实行垃圾分类制度。 (Shànghǎi shíxíng lājī fēnlèi zhìdù.) — В Шанхае действует система сортировки отходов.',
            '可回收和不可回收要分开。 (Kě huíshōu hé bù kě huíshōu yào fēnkāi.) — Перерабатываемое и неперерабатываемое нужно разделять.'
        ]
    },
    14: {
        glyph: '减少',
        pinyin: 'jiǎnshǎo',
        translation: 'сокращать (выбросы, отходы)',
        examples: [
            '我们应该减少塑料使用。 (Wǒmen yīnggāi jiǎnshǎo sùliào shǐyòng.) — Нам следует сократить использование пластика.',
            '政府努力减少碳排放。 (Zhèngfǔ nǔlì jiǎnshǎo tàn páifàng.) — Правительство стремится сократить выбросы углерода.',
            '减少浪费就是保护资源。 (Jiǎnshǎo làngfèi jiù shì bǎohù zīyuán.) — Сокращение отходов — это защита ресурсов.'
        ]
    },
    15: {
        glyph: '恢复',
        pinyin: 'huīfù',
        translation: 'восстанавливать (экосистему, леса)',
        examples: [
            '植树有助于恢复森林。 (Zhí shù yǒu zhù yú huīfù sēnlín.) — Посадка деревьев помогает восстановить леса.',
            '科学家正在恢复湿地生态。 (Kēxuéjiā zhèngzài huīfù shīdì shēngtài.) — Учёные восстанавливают экосистему водно-болотных угодий.',
            '被破坏的环境能恢复吗？ (Bèi pòhuài de huánjìng néng huīfù ma?) — Можно ли восстановить разрушенную среду?'
        ]
    },
    16: {
        glyph: '威胁',
        pinyin: 'wēixié',
        translation: 'угрожать (видам, экосистемам)',
        examples: [
            'загрязнение угрожает морской жизни。 (Wūrǎn wēixié hǎiyáng shēngmìng.) — Загрязнение угрожает морской жизни.',
            '气候变暖威胁北极熊。 (Qìhòu biànnuǎn wēixié běijí xióng.) — Потепление климата угрожает белым медведям.',
            '这个项目可能威胁环境。 (Zhège xiàngmù kěnéng wēixié huánjìng.) — Этот проект может угрожать окружающей среде.'
        ]
    },
    17: {
        glyph: '依赖',
        pinyin: 'yīlài',
        translation: 'зависеть от (природных ресурсов)',
        examples: [
            '人类依赖清洁的空气和 воду。 (Rénlèi yīlài qīngjié de kōngqì hé shuǐ.) — Человечество зависит от чистого воздуха и воды.',
            '经济过度依赖化石燃料。 (Jīngjì guòdù yīlài huàshí ránliào.) — Экономика слишком зависит от ископаемого топлива.',
            '我们不能永远依赖自然资源。 (Wǒmen bù néng yǒngyuǎn yīlài zìrán zīyuán.) — Мы не можем вечно зависеть от природных ресурсов.'
        ]
    },
    18: {
        glyph: 'рециклировать',
        pinyin: 'xúnhuán lìyòng',
        translation: 'использовать повторно / включать в круговорот',
        examples: [
            '水可以循环利用。 (Shuǐ kěyǐ xúnhuán lìyòng.) — Воду можно использовать повторно.',
            '这个工厂实现资源循环利用。 (Zhège gōngchǎng shíxiàn zīyuán xúnhuán lìyòng.) — Этот завод внедрил повторное использование ресурсов.',
            '循环利用减少浪费。 (Xúnhuán lìyòng jiǎnshǎo làngfèi.) — Повторное использование сокращает отходы.'
        ]
    },
    19: {
        glyph: 'загрязняться',
        pinyin: 'bèi wūrǎn',
        translation: 'становиться загрязнённым',
        examples: [
            'река загрязнилась。 (Héliú bèi wūrǎn le.) — Река загрязнилась.',
            'воздух в городе сильно загрязнён。 (Chéngshì lǐ de kōngqì bèi yánzhòng wūrǎn.) — Воздух в городе сильно загрязнён.',
            'океан загрязняется пластиком。 (Hǎiyáng bèi sùliào wūrǎn.) — Океан загрязняется пластиком.'
        ]
    }
};

const verbsTravel: { [key: number]: DictItem } = {
    1: {
        glyph: '旅行',
        pinyin: 'lǚxíng',
        translation: 'путешествовать',
        examples: [
            '我计划去中国旅行。 (Wǒ jìhuà qù Zhōngguó lǚxíng.) — Я планирую поехать в Китай путешествовать.',
            '他们喜欢背包旅行。 (Tāmen xǐhuan bēibāo lǚxíng.) — Им нравится путешествовать с рюкзаком.',
            '旅行能开阔眼界。 (Lǚxíng néng kāikuò yǎnjiè.) — Путешествия расширяют кругозор.'
        ]
    },
    2: {
        glyph: '旅游',
        pinyin: 'lǚyóu',
        translation: 'ездить в туристическую поездку',
        examples: [
            '我们去云南旅游。 (Wǒmen qù Yúnnán lǚyóu.) — Мы едем в Юньнань как туристы.',
            '暑假是旅游旺季。 (Shǔjià shì lǚyóu wàngjì.) — Летние каникулы — высокий сезон для туризма.',
            '这个城市很适合旅游。 (Zhège chéngshì hěn shìhé lǚyóu.) — Этот город отлично подходит для туризма.'
        ]
    },
    3: {
        glyph: '出发',
        pinyin: 'chūfā',
        translation: 'отправляться в путь',
        examples: [
            '我们明天早上出发。 (Wǒmen míngtiān zǎoshang chūfā.) — Мы отправляемся завтра утром.',
            '飞机几点出发？ (Fēijī jǐ diǎn chūfā?) — Во сколько вылетает самолёт?',
            '准备好就出发！ (Zhǔnbèi hǎo jiù chūfā!) — Как только всё готово — в путь!'
        ]
    },
    4: {
        glyph: '到达',
        pinyin: 'dàodá',
        translation: 'прибывать',
        examples: [
            '我们下午三点到达北京。 (Wǒmen xiàwǔ sān diǎn dàodá Běijīng.) — Мы прибываем в Пекин в 15:00.',
            '火车准时到达。 (Huǒchē zhǔnshí dàodá.) — Поезд прибыл вовремя.',
            '你到达后给我打电话。 (Nǐ dàodá hòu gěi wǒ dǎ diànhuà.) — Позвони мне, как только приедешь.'
        ]
    },
    5: {
        glyph: '预订',
        pinyin: 'yùdìng',
        translation: 'бронировать',
        examples: [
            '我预订了酒店。 (Wǒ yùdìng le jiǔdiàn.) — Я забронировал отель.',
            '最好提前预订机票。 (Zuì hǎo tíqián yùdìng jīpiào.) — Лучше заранее забронировать авиабилеты.',
            '在线预订很方便。 (Zàixiàn yùdìng hěn fāngbiàn.) — Онлайн-бронирование очень удобно.'
        ]
    },
    6: {
        glyph: '买票',
        pinyin: 'mǎi piào',
        translation: 'покупать билет',
        examples: [
            '我在窗口买票。 (Wǒ zài chuāngkǒu mǎi piào.) — Я покупаю билет в кассе.',
            '你可以网上买票。 (Nǐ kěyǐ wǎngshàng mǎi piào.) — Ты можешь купить билет онлайн.',
            '买票要排队吗？ (Mǎi piào yào pái duì ma?) — Нужно ли стоять в очереди за билетом?'
        ]
    },
    7: {
        glyph: '登机',
        pinyin: 'dēng jī',
        translation: 'садиться на борт (самолёта)',
        examples: [
            '请到3号登机口登机。 (Qǐng dào 3 hào dēng jī kǒu dēng jī.) — Пожалуйста, пройдите к выходу на посадку №3.',
            '登机时间是10点。 (Dēng jī shíjiān shì 10 diǎn.) — Посадка в 10 часов.',
            '登机前请关掉手机。 (Dēng jī qián qǐng guān diào shǒujī.) — Перед посадкой выключите телефон.'
        ]
    },
    8: {
        glyph: '安检',
        pinyin: 'ānjiǎn',
        translation: 'проходить досмотр безопасности',
        examples: [
            '登机前要过安检。 (Dēng jī qián yào guò ānjiǎn.) — Перед посадкой нужно пройти досмотр.',
            '液体不能带过安检。 (Yètǐ bù néng dài guò ānjiǎn.) — Жидкости нельзя проносить через досмотр.',
            '安检排队很长。 (Ānjiǎn pái duì hěn cháng.) — Очередь на досмотр очень длинная.'
        ]
    },
    9: {
        glyph: '托运',
        pinyin: 'tuōyùn',
        translation: 'сдавать багаж (в багажное отделение)',
        examples: [
            '你的箱子需要托运。 (Nǐ de xiāngzi xūyào tuōyùn.) — Твой чемодан нужно сдать в багаж.',
            '我托运了两个行李箱。 (Wǒ tuōyùn le liǎng gè xínglǐ xiāng.) — Я сдал два чемодана.',
            '托运行李免费吗？ (Tuōyùn xínglǐ miǎnfèi ma?) — Бесплатно ли сдавать багаж?'
        ]
    },
    10: {
        glyph: '取行李',
        pinyin: 'qǔ xínglǐ',
        translation: 'получать багаж (в аэропорту)',
        examples: [
            '到达后去取行李。 (Dàodá hòu qù qǔ xínglǐ.) — После прилёта идите получать багаж.',
            '我的行李还没出来。 (Wǒ de xínglǐ hái méi chūlái.) — Мой багаж ещё не появился.',
            '行李转盘在那边。 (Xínglǐ zhuǎnpán zài nàbiān.) — Лента выдачи багажа там.'
        ]
    },
    11: {
        glyph: '问路',
        pinyin: 'wèn lù',
        translation: 'спрашивать дорогу',
        examples: [
            '我迷路了，要问路。 (Wǒ mílù le, yào wèn lù.) — Я заблудился, нужно спросить дорогу.',
            '你可以问警察问路。 (Nǐ kěyǐ wèn jǐngchá wèn lù.) — Ты можешь спросить дорогу у полицейского.',
            '别害羞，大胆问路！ (Bié hàixiū, dàdǎn wèn lù!) — Не стесняйся, смело спрашивай!'
        ]
    },
    12: {
        glyph: '迷路',
        pinyin: 'mílù',
        translation: 'теряться / сбиваться с пути',
        examples: [
            '我在小巷里迷路了。 (Wǒ zài xiǎo xiàng lǐ mílù le.) — Я заблудился в переулке.',
            '别担心，用地图就不会迷路。 (Bié dānxīn, yòng dìtú jiù bú huì mílù.) — Не волнуйся, с картой не заблудишься.',
            '孩子迷路了，很害怕。 (Háizi mílù le, hěn hàipà.) — Ребёнок потерялся и очень испугался.'
        ]
    },
    13: {
        glyph: '导航',
        pinyin: 'dǎoháng',
        translation: 'использовать навигатор / прокладывать маршрут',
        examples: [
            '手机可以导航。 (Shǒujī kěyǐ dǎoháng.) — Телефон может служить навигатором.',
            '高德地图在导航。 (Gāodé Dìtú zài dǎoháng.) — Amap прокладывает маршрут.',
            '导航说下个路口左转。 (Dǎoháng shuō xià gè lùkǒu zuǒ zhuǎn.) — Навигатор говорит: «На следующем перекрёстке поверните налево».'
        ]
    },
    14: {
        glyph: '参观',
        pinyin: 'cānguān',
        translation: 'посещать (достопримечательность, музей)',
        examples: [
            '我们参观了故宫。 (Wǒmen cānguān le Gùgōng.) — Мы посетили Запретный город.',
            '学生参观科技馆。 (Xuéshēng cānguān kējì guǎn.) — Студенты посетили музей науки и техники.',
            '这个景点值得参观。 (Zhège jǐngdiǎn zhídé cānguān.) — Эта достопримечательность стоит посещения.'
        ]
    },
    15: {
        glyph: '游览',
        pinyin: 'yóulǎn',
        translation: 'осматривать с гидом / совершать экскурсию',
        examples: [
            '我们乘船游览西湖。 (Wǒmen chéng chuán yóulǎn Xīhú.) — Мы совершили экскурсию по озеру Сиху на лодке.',
            '导游带我们游览古城。 (Dǎoyóu dài wǒmen yóulǎn gǔchéng.) — Гид водил нас по старому городу.',
            '建议游览一个小时。 (Jiànyì yóulǎn yī gè xiǎoshí.) — Рекомендуется экскурсия на час.'
        ]
    },
    16: {
        glyph: '拍照',
        pinyin: 'pāi zhào',
        translation: 'фотографировать',
        examples: [
            '我在长城上拍照。 (Wǒ zài Chángchéng shàng pāi zhào.) — Я фотографирую на Великой стене.',
            '别在这里拍照！ (Bié zài zhèlǐ pāi zhào!) — Здесь нельзя фотографировать!',
            '我们一起拍照吧！ (Wǒmen yīqǐ pāi zhào ba!) — Давайте сфотографируемся вместе!'
        ]
    },
    17: {
        glyph: '兑换',
        pinyin: 'duìhuàn',
        translation: 'обменивать (валюту)',
        examples: [
            '我在机场兑换了人民币。 (Wǒ zài jīchǎng duìhuàn le Rénmínbì.) — Я обменял деньги в аэропорту на юани.',
            '哪里可以兑换外币？ (Nǎlǐ kěyǐ duìhuàn wàibì?) — Где можно обменять иностранную валюту?',
            '兑换汇率是多少？ (Duìhuàn huìlǜ shì duōshǎo?) — Какой курс обмена?'
        ]
    },
    18: {
        glyph: '过海关',
        pinyin: 'guò hǎiguān',
        translation: 'проходить таможенный контроль',
        examples: [
            '入境要过海关。 (Rùjìng yào guò hǎiguān.) — При въезде нужно пройти таможню.',
            '申报物品要走红色通道。 (Shēnbào wùpǐn yào zǒu hóngsè tōngdào.) — Если декларируете товары — идите по красному коридору.',
            '海关检查了我的行李。 (Hǎiguān jiǎnchá le wǒ de xínglì.) — Таможня проверила мой багаж.'
        ]
    },
    19: {
        glyph: '转机',
        pinyin: 'zhuǎn jī',
        translation: 'делать пересадку (на другой рейс)',
        examples: [
            '我在上海转机。 (Wǒ zài Shànghǎi zhuǎn jī.) — Я делаю пересадку в Шанхае.',
            '转机时间只有40分钟。 (Zhuǎn jī shíjiān zhǐyǒu 40 fēnzhōng.) — Время на пересадку всего 40 минут.',
            '转机时不用出机场。 (Zhuǎn jī shí búyòng chū jīchǎng.) — При пересадке не нужно выходить из аэропорта.'
        ]
    },
    20: {
        glyph: '退房',
        pinyin: 'tuì fáng',
        translation: 'освобождать номер (в отеле)',
        examples: [
            '中午12点前要退房。 (Zhōngwǔ 12 diǎn qián yào tuì fáng.) — Нужно освободить номер до 12 часов дня.',
            '我退房时付了钱。 (Wǒ tuì fáng shí fù le qián.) — Я заплатил при выписке из отеля.',
            '可以延迟退房吗？ (Kěyǐ yánchí tuì fáng ma?) — Можно ли позже освободить номер?'
        ]
    },
    21: {
        glyph: '入住',
        pinyin: 'rùzhù',
        translation: 'заселяться (в отель)',
        examples: [
            '我们下午入住酒店。 (Wǒmen xiàwǔ rùzhù jiǔdiàn.) — Мы заселяемся в отель днём.',
            '入住需要护照。 (Rùzhù xūyào hùzhào.) — Для заселения нужен паспорт.',
            '提前在线入住很方便。 (Tíqián zàixiàn rùzhù hěn fāngbiàn.) — Онлайн-заселение заранее очень удобно.'
        ]
    },
    22: {
        glyph: '赶车',
        pinyin: 'gǎn chē',
        translation: 'спешить на транспорт',
        examples: [
            '快点！要赶不上火车了！ (Kuài diǎn! Yào gǎn bù shàng huǒchē le!) — Быстрее! Опоздаем на поезд!',
            '我每天赶早班车。 (Wǒ měitiān gǎn zǎo bān chē.) — Каждый день я ловлю первую маршрутку.',
            '赶车时别忘了行李！ (Gǎn chē shí bié wàng le xínglǐ!) — Когда спешите на транспорт, не забудьте багаж!'
        ]
    },
    23: {
        glyph: '错过',
        pinyin: 'cuòguò',
        translation: 'пропустить (рейс, поезд)',
        examples: [
            '我错过了航班。 (Wǒ cuòguò le hángbān.) — Я пропустил рейс.',
            '因为堵车，他错过了高铁。 (Yīnwèi dǔchē, tā cuòguò le gāotiě.) — Из-за пробки он опоздал на поезд.',
            '别错过末班车！ (Bié cuòguò mòbān chē!) — Не пропусти последний автобус!'
        ]
    },
    24: {
        glyph: '回程',
        pinyin: 'huíchéng',
        translation: 'возвращаться (обратно домой)',
        examples: [
            '回程机票买好了。 (Huíchéng jīpiào mǎi hǎo le.) — Обратные билеты куплены.',
            '回程路上很累。 (Huíchéng lù shàng hěn lèi.) — Дорога обратно очень утомительна.',
            '我们明天回程。 (Wǒmen míngtiān huíchéng.) — Завтра мы возвращаемся домой.'
        ]
    },
    25: {
        glyph: '探索',
        pinyin: 'tànsuǒ',
        translation: 'исследовать / открывать для себя',
        examples: [
            '我想探索中国的乡村。 (Wǒ xiǎng tànsuǒ Zhōngguó de xiāngcūn.) — Я хочу исследовать китайскую глубинку.',
            '背包客喜欢探索未知的地方。 (Bēibāo kè xǐhuan tànsuǒ wèizhī de dìfāng.) — Туристы с рюкзаками любят исследовать неизведанные места.',
            '探索新城市很有趣。 (Tànsuǒ xīn chéngshì hěn yǒuqù.) — Исследовать новый город очень интересно.'
        ]
    }
};

const verbsCrimeLaw: { [key: number]: DictItem } = {
    1: {
        glyph: '偷',
        pinyin: 'tōu',
        translation: 'красть',
        examples: [
            '他偷了钱包。 (Tā tōu le qiánbāo.) — Он украл кошелёк.',
            '商店里有人偷东西。 (Shāngdiàn lǐ yǒu rén tōu dōngxi.) — В магазине кто-то ворует.',
            '偷窃是犯罪。 (Tōuqiè shì fànzuì.) — Кража — это преступление.'
        ]
    },
    2: {
        glyph: '抢',
        pinyin: 'qiǎng',
        translation: 'грабить / отнимать силой',
        examples: [
            '强盗抢了银行。 (Qiángdào qiǎng le yínháng.) — Грабители ограбили банк.',
            '别抢我的手机！ (Bié qiǎng wǒ de shǒujī!) — Не отнимай мой телефон!',
            '他被抢了。 (Tā bèi qiǎng le.) — Его ограбили.'
        ]
    },
    3: {
        glyph: '骗',
        pinyin: 'piàn',
        translation: 'обманывать',
        examples: [
            '他骗了我。 (Tā piàn le wǒ.) — Он меня обманул.',
            '小心网络诈骗。 (Xiǎoxīn wǎngluò zhàpiàn.) — Остерегайтесь мошенничества в интернете.',
            '不要骗人！ (Búyào piàn rén!) — Не обманывай других!'
        ]
    },
    4: {
        glyph: '逮捕',
        pinyin: 'dàibǔ',
        translation: 'арестовывать',
        examples: [
            '警察逮捕了小偷。 (Jǐngchá dàibǔ le xiǎotōu.) — Полиция арестовала вора.',
            '他因贩毒被逮捕。 (Tā yīn fàndú bèi dàibǔ.) — Его арестовали за наркоторговлю.',
            '法院下令逮捕他。 (Fǎyuàn xiàlìng dàibǔ tā.) — Суд выдал ордер на его арест.'
        ]
    },
    5: {
        glyph: '审问',
        pinyin: 'shěnwèn',
        translation: 'допрашивать',
        examples: [
            '警察正在审问嫌疑人。 (Jǐngchá zhèngzài shěnwèn xiányí rén.) — Полиция допрашивает подозреваемого.',
            '他拒绝回答审问。 (Tā jùjué huídá shěnwèn.) — Он отказался отвечать на допросе.',
            '审问持续了三个小时。 (Shěnwèn chíxù le sān gè xiǎoshí.) — Допрос длился три часа.'
        ]
    },
    6: {
        glyph: '审判',
        pinyin: 'shěnpàn',
        translation: 'судить (в суде)',
        examples: [
            '法院明天审判这个案件。 (Fǎyuàn míngtiān shěnpàn zhège ànjiàn.) — Суд рассмотрит это дело завтра.',
            '他被审判有罪。 (Tā bèi shěnpàn yǒuzuì.) — Его признали виновным.',
            '审判必须公开公正。 (Shěnpàn bìxū gōngkāi gōngzhèng.) — Судебный процесс должен быть открытым и справедливым.'
        ]
    },
    7: {
        glyph: '定罪',
        pinyin: 'dìngzuì',
        translation: 'признавать виновным',
        examples: [
            '陪审团定罪了他。 (Péishěntuán dìngzuì le tā.) — Присяжные признали его виновным.',
            '证据不足，无法定罪。 (Zhèngjù bùzú, wúfǎ dìngzuì.) — Недостаточно доказательств для осуждения.',
            '他被定罪为谋杀。 (Tā bèi dìngzuì wèi móushā.) — Его осудили за убийство.'
        ]
    },
    8: {
        glyph: '惩罚',
        pinyin: 'chéngfá',
        translation: 'наказывать',
        examples: [
            '法律惩罚罪犯。 (Fǎlǜ chéngfá zuìfàn.) — Закон наказывает преступников.',
            '他被罚款惩罚。 (Tā bèi fákuǎn chéngfá.) — Его оштрафовали в качестве наказания.',
            '家长不应该体罚孩子。 (Jiāzhǎng bù yīnggāi tǐfá háizi.) — Родители не должны наказывать детей телесно.'
        ]
    },
    9: {
        glyph: '罚款',
        pinyin: 'fákuǎn',
        translation: 'штрафовать',
        examples: [
            '超速被罚款200元。 (Chāosù bèi fákuǎn 200 yuán.) — За превышение скорости оштрафовали на 200 юаней.',
            '乱扔垃圾会被罚款。 (Luàn rēng lājī huì bèi fákuǎn.) — За выброс мусора на штрафуют.',
            '他拒绝交罚款。 (Tā jùjué jiāo fákuǎn.) — Он отказался платить штраф.'
        ]
    },
    10: {
        glyph: '自首',
        pinyin: 'zìshǒu',
        translation: 'сознаваться (добровольно)',
        examples: [
            '小偷去警察局自首了。 (Xiǎotōu qù jǐngchájú zìshǒu le.) — Вор сам явился в полицию с повинной.',
            '自首可以从轻处罚。 (Zìshǒu kěyǐ cóngqīng chǔfá.) — Добровольная явка с повинной смягчает наказание.',
            '他劝儿子去自首。 (Tā quàn érzi qù zìshǒu.) — Он уговорил сына сдаться властям.'
        ]
    },
    11: {
        glyph: '举报',
        pinyin: 'jǔbào',
        translation: 'доносить / сообщать о преступлении',
        examples: [
            '市民举报了贩毒团伙。 (Shìmín jǔbào le fàndú tuánhuǒ.) — Житель сообщил о наркоторговцах.',
            '你可以匿名举报。 (Nǐ kěyǐ nìmíng jǔbào.) — Ты можешь сообщить анонимно.',
            '举报违法网站。 (Jǔbào wéifǎ wǎngzhàn.) — Сообщите о незаконном сайте.'
        ]
    },
    12: {
        glyph: '侵犯',
        pinyin: 'qīnfàn',
        translation: 'нарушать (права, закон)',
        examples: [
            '这侵犯了我的隐私权。 (Zhè qīnfàn le wǒ de yǐnsī quán.) — Это нарушает моё право на приватность.',
            '盗版侵犯版权。 (Dàobǎn qīnfàn bǎnquán.) — Пиратство нарушает авторские права.',
            '禁止侵犯他人权利。 (Jìnzhǐ qīnfàn tārén quánlì.) — Запрещено нарушать права других.'
        ]
    },
    13: {
        glyph: '违法',
        pinyin: 'wéifǎ',
        translation: 'нарушать закон',
        examples: [
            '酒后开车是违法行为。 (Jiǔ hòu kāichē shì wéifǎ xíngwéi.) — Вождение в состоянии опьянения — нарушение закона.',
            '他因违法被拘留。 (Tā yīn wéifǎ bèi jūliú.) — Его задержали за нарушение закона.',
            '任何人都不得违法。 (Rènhé rén dōu bù dé wéifǎ.) — Никто не имеет права нарушать закон.'
        ]
    },
    14: {
        glyph: '守法',
        pinyin: 'shǒufǎ',
        translation: 'соблюдать закон',
        examples: [
            '公民必须守法。 (Gōngmín bìxū shǒufǎ.) — Граждане обязаны соблюдать законы.',
            '守法企业受政府支持。 (Shǒufǎ qǐyè shòu zhèngfǔ zhīchí.) — Законопослушные компании получают поддержку от государства.',
            '从小教育孩子守法。 (Cóngxiǎo jiàoyù háizi shǒufǎ.) — С детства учат детей соблюдать закон.'
        ]
    },
    15: {
        glyph: '释放',
        pinyin: 'shìfàng',
        translation: 'освобождать (из-под стражи)',
        examples: [
            '法院下令释放他。 (Fǎyuàn xiàlìng shìfàng tā.) — Суд постановил его освободить.',
            '他被无罪释放。 (Tā bèi wúzuì shìfàng.) — Его оправдали и отпустили.',
            '人质已被安全释放。 (Rénzhì yǐ bèi ānquán shìfàng.) — Заложники благополучно освобождены.'
        ]
    }
};

const verbsMilitaryDefense: { [key: number]: DictItem } = {
    1: {
        glyph: '保卫',
        pinyin: 'bǎowèi',
        translation: 'защищать (страну, город)',
        examples: [
            '士兵保卫国家。 (Shìbīng bǎowèi guójiā.) — Солдаты защищают страну.',
            '长城曾保卫中国。 (Chángchéng céng bǎowèi Zhōngguó.) — Великая стена некогда защищала Китай.',
            '我们必须保卫和平。 (Wǒmen bìxū bǎowèi hépíng.) — Мы обязаны защищать мир.'
        ]
    },
    2: {
        glyph: '攻击',
        pinyin: 'gōngjī',
        translation: 'атаковать',
        examples: [
            '敌军攻击了我们的阵地。 (Díjūn gōngjī le wǒmen de zhèndì.) — Вражеские войска атаковали наши позиции.',
            '不要先攻击别人。 (Búyào xiān gōngjī biérén.) — Не нападай первым.',
            '黑客攻击了政府网站。 (Hēikè gōngjī le zhèngfǔ wǎngzhàn.) — Хакеры атаковали правительственный сайт.'
        ]
    },
    3: {
        glyph: '防御',
        pinyin: 'fángyù',
        translation: 'обороняться',
        examples: [
            '军队正在加强防御。 (Jūnduì zhèngzài jiāqiáng fángyù.) — Армия усиливает оборону.',
            '这个系统有防火墙防御。 (Zhège xìtǒng yǒu fánghuǒqiáng fángyù.) — Эта система защищена брандмауэром.',
            '防御比攻击更重要。 (Fángyù bǐ gōngjī gèng zhòngyào.) — Оборона важнее атаки.'
        ]
    },
    4: {
        glyph: '参军',
        pinyin: 'cānjūn',
        translation: 'идти в армию',
        examples: [
            '他高中毕业后参军了。 (Tā gāozhōng bìyè hòu cānjūn le.) — После школы он пошёл в армию.',
            '年轻人可以自愿参军。 (Niánqīng rén kěyǐ zìyuàn cānjūn.) — Молодёжь может добровольно пойти служить.',
            '参军是公民的义务。 (Cānjūn shì gōngmín de yìwù.) — Служба в армии — долг гражданина.'
        ]
    },
    5: {
        glyph: '服役',
        pinyin: 'fú yì',
        translation: 'нести военную службу',
        examples: [
            '他在部队服役两年。 (Tā zài bùduì fú yì liǎng nián.) — Он проходил службу в армии два года.',
            '服役期间不能回家。 (Fú yì qījiān bù néng huí jiā.) — Во время службы нельзя вернуться домой.',
            '退役后他当了警察。 (Tuìyì hòu tā dāng le jǐngchá.) — После демобилизации он стал полицейским.'
        ]
    },
    6: {
        glyph: '战斗',
        pinyin: 'zhàndòu',
        translation: 'сражаться',
        examples: [
            '士兵们在前线战斗。 (Shìbīng men zài qiánxiàn zhàndòu.) — Солдаты сражаются на передовой.',
            '我们必须为自由战斗。 (Wǒmen bìxū wèi zìyóu zhàndòu.) — Мы должны бороться за свободу.',
            '他战斗到最后一刻。 (Tā zhàndòu dào zuìhòu yīkè.) — Он сражался до последнего момента.'
        ]
    },
    7: {
        glyph: '占领',
        pinyin: 'zhànlǐng',
        translation: 'захватывать (территорию)',
        examples: [
            '敌军占领了城市。 (Díjūn zhànlǐng le chéngshì.) — Вражеские войска захватили город.',
            '这个岛曾被日本占领。 (Zhège dǎo céng bèi Rìběn zhànlǐng.) — Этот остров ранее был оккупирован Японией.',
            '军队占领了战略要地。 (Jūnduì zhànlǐng le zhànlüè yàodì.) — Армия заняла стратегически важный пункт.'
        ]
    },
    8: {
        glyph: '撤退',
        pinyin: 'chètuì',
        translation: 'отступать',
        examples: [
            '由于伤亡惨重，军队撤退了。 (Yóuyú shāngwáng cǎnzhòng, jūnduì chètuì le.) — Из-за тяжёлых потерь армия отступила.',
            '不要轻易撤退！ (Búyào qīngyì chètuì!) — Не отступайте без необходимости!',
            '撤退是为了重新进攻。 (Chètuì shì wèile chóngxīn jìngōng.) — Отступление — чтобы нанести новый удар.'
        ]
    },
    9: {
        glyph: '侦察',
        pinyin: 'zhēnchá',
        translation: 'вести разведку',
        examples: [
            '特种部队正在侦察敌情。 (Tèzhǒng bùduì zhèngzài zhēnchá díqíng.) — Спецназ ведёт разведку противника.',
            '无人机用于空中侦察。 (Wúrén jī yòngyú kōngzhōng zhēnchá.) — Дроны используются для воздушной разведки.',
            '侦察兵发现了敌人。 (Zhēnchá bīng fāxiàn le dírén.) — Разведчики обнаружили врага.'
        ]
    },
    10: {
        glyph: '部署',
        pinyin: 'bùshǔ',
        translation: 'размещать силы / планировать операцию',
        examples: [
            '将军部署了兵力。 (Jiāngjūn bùshǔ le bīnglì.) — Генерал разместил войска.',
            '导弹已部署在边境。 (Dǎodàn yǐ bùshǔ zài biānjìng.) — Ракеты уже развёрнуты на границе.',
            '需要重新部署防御系统。 (Xūyào chóngxīn bùshǔ fángyù xìtǒng.) — Нужно переразместить систему обороны.'
        ]
    },
    11: {
        glyph: '动员',
        pinyin: 'dòngyuán',
        translation: 'мобилизовать',
        examples: [
            '政府动员了预备役。 (Zhèngfǔ dòngyuán le yùbèiyì.) — Правительство мобилизовало резервистов.',
            '全国动员抗击灾难。 (Quánguó dòngyuán kàngjī zāinàn.) — Вся страна мобилизована на борьбу с бедствием.',
            '战争时期需要全面动员。 (Zhànzhēng shíqī xūyào quánmiàn dòngyuán.) — В военное время требуется полная мобилизация.'
        ]
    },
    12: {
        glyph: '投降',
        pinyin: 'tóuxiáng',
        translation: 'сдаваться',
        examples: [
            '敌军最终投降了。 (Díjūn zuìzhōng tóuxiáng le.) — Вражеские войска в конце концов сдались.',
            '宁死不降！ (Nìng sǐ bù xiáng!) — Лучше умереть, чем сдаться!',
            '投降后被俘虏。 (Tóuxiáng hòu bèi fúlǔ.) — После сдачи их взяли в плен.'
        ]
    },
    13: {
        glyph: '演习',
        pinyin: 'yǎnxí',
        translation: 'проводить учения',
        examples: [
            '军队在边境演习。 (Jūnduì zài biānjìng yǎnxí.) — Армия проводит учения на границе.',
            '海陆空三军联合演习。 (Hǎi lù kōng sān jūn liánhé yǎnxí.) — Совместные учения морских, сухопутных и воздушных сил.',
            '演习提高战斗力。 (Yǎnxí tígāo zhàndòulì.) — Учения повышают боеспособность.'
        ]
    },
    14: {
        glyph: '配备',
        pinyin: 'pèibèi',
        translation: 'оснащать (оружием, техникой)',
        examples: [
            '士兵配备了新步枪。 (Shìbīng pèibèi le xīn bùqiāng.) — Солдаты оснащены новыми винтовками.',
            '这支部队配备先进武器。 (Zhè zhī bùduì pèibèi xiānjìn wǔqì.) — Это подразделение оснащено современным оружием.',
            '医院配备了救护车。 (Yīyuàn pèibèi le jiùhù chē.) — Больница оснащена машинами скорой помощи.'
        ]
    },
    15: {
        glyph: '退役',
        pinyin: 'tuìyì',
        translation: 'демобилизовываться',
        examples: [
            '他服役五年后退役。 (Tā fú yì wǔ nián hòu tuìyì.) — Он демобилизовался после пяти лет службы.',
            '退役军人心系国家。 (Tuìyì jūnrén xīn xì guójiā.) — Ветераны армии преданы стране.',
            '退役后他开了公司。 (Tuìyì hòu tā kāi le gōngsī.) — После демобилизации он открыл компанию.'
        ]
    }
};

const verbsTradeCommerce: { [key: number]: DictItem } = {
    1: {
        glyph: '贸易',
        pinyin: 'màoyì',
        translation: 'вести торговлю',
        examples: [
            '中国和美国有大量贸易。 (Zhōngguó hé Měiguó yǒu dàliàng màoyì.) — Между Китаем и США объём торговли огромен.',
            '两国恢复了正常贸易。 (Liǎng guó huīfù le zhèngcháng màoyì.) — Две страны возобновили нормальную торговлю.',
            '自由贸易区促进经济。 (Zìyóu màoyì qū cùjìn jīngjì.) — Зоны свободной торговли стимулируют экономику.'
        ]
    },
    2: {
        glyph: '买卖',
        pinyin: 'mǎimài',
        translation: 'покупать и продавать',
        examples: [
            '这个市场很热闹，买卖兴隆。 (Zhège shìchǎng hěn rènao, mǎimài xīnglóng.) — Этот рынок оживлённый, идёт brisk торговля.',
            '禁止买卖野生动物。 (Jìnzhǐ mǎimài yěshēng dòngwù.) — Запрещена торговля дикими животными.',
            '股票买卖风险高。 (Gǔpiào mǎimài fēngxiǎn gāo.) — Торговля акциями рискованна.'
        ]
    },
    3: {
        glyph: '供应',
        pinyin: 'gōngyìng',
        translation: 'поставлять (товары)',
        examples: [
            '这家公司供应蔬菜给超市。 (Zhè jiā gōngsī gōngyìng shūcài gěi chāoshì.) — Эта компания поставляет овощи в супермаркеты.',
            '电力供应中断了。 (Diànlì gōngyìng zhōngduàn le.) — Подача электроэнергии прервалась.',
            '我们需要稳定的供应。 (Wǒmen xūyào wěndìng de gōngyìng.) — Нам нужна стабильная поставка.'
        ]
    },
    4: {
        glyph: '进口',
        pinyin: 'jìnkǒu',
        translation: 'импортировать',
        examples: [
            '中国进口大量石油。 (Zhōngguó jìnkǒu dàliàng shíyóu.) — Китай импортирует много нефти.',
            '这个品牌是进口的。 (Zhège pǐnpái shì jìnkǒu de.) — Этот бренд импортный.',
            '进口商品更贵。 (Jìnkǒu shāngpǐn gèng guì.) — Импортные товары дороже.'
        ]
    },
    5: {
        glyph: '出口',
        pinyin: 'chūkǒu',
        translation: 'экспортировать',
        examples: [
            '中国出口电子产品。 (Zhōngguó chūkǒu diànzǐ chǎnpǐn.) — Китай экспортирует электронику.',
            '茶叶是传统出口商品。 (Cháyè shì chuántǒng chūkǒu shāngpǐn.) — Чай — традиционный экспортный товар.',
            '出口增长带动经济。 (Chūkǒu zēngzhǎng dàidòng jīngjì.) — Рост экспорта стимулирует экономику.'
        ]
    },
    6: {
        glyph: '交易',
        pinyin: 'jiāoyì',
        translation: 'совершать сделку',
        examples: [
            '他们在谈一笔大交易。 (Tāmen zài tán yī bǐ dà jiāoyì.) — Они обсуждают крупную сделку.',
            '股票交易在证券交易所进行。 (Gǔpiào jiāoyì zài zhèngquàn jiāoyì suǒ jìnxíng.) — Торговля акциями происходит на бирже.',
            '这笔交易很成功。 (Zhè bǐ jiāoyì hěn chénggōng.) — Эта сделка прошла успешно.'
        ]
    },
    7: {
        glyph: '签约',
        pinyin: 'qiānyuē',
        translation: 'заключать договор',
        examples: [
            '双方今天签约。 (Shuāngfāng jīntiān qiānyuē.) — Стороны подписывают договор сегодня.',
            '签约后不能反悔。 (Qiānyuē hòu bù néng fǎnhuǐ.) — После подписания нельзя передумать.',
            '他代表公司签约。 (Tā dàibiǎo gōngsī qiānyuē.) — Он подписал договор от имени компании.'
        ]
    },
    8: {
        glyph: '投标',
        pinyin: 'tóubiāo',
        translation: 'подавать заявку на тендер',
        examples: [
            '五家公司投标这个项目。 (Wǔ jiā gōngsī tóubiāo zhège xiàngmù.) — Пять компаний подали заявки на этот проект.',
            '我们中标了！ (Wǒmen zhòngbiāo le!) — Мы выиграли тендер!',
            '投标需要资质证明。 (Tóubiāo xūyào zīzhì zhèngmíng.) — Для участия в тендере нужны документы о квалификации.'
        ]
    },
    9: {
        glyph: '代理',
        pinyin: 'dàilǐ',
        translation: 'быть агентом / представлять',
        examples: [
            '我们是这个品牌的中国代理。 (Wǒmen shì zhège pǐnpái de Zhōngguó dàilǐ.) — Мы агенты этого бренда в Китае.',
            '他代理国外产品。 (Tā dàilǐ guówài chǎnpǐn.) — Он представляет иностранные товары.',
            '寻找本地代理。 (Xúnzhǎo běndì dàilǐ.) — Ищем местного представителя.'
        ]
    },
    10: {
        glyph: '批发',
        pinyin: 'pīfā',
        translation: 'оптовая продажа',
        examples: [
            '这个市场做批发。 (Zhège shìchǎng zuò pīfā.) — На этом рынке оптовая торговля.',
            '批发价比零售便宜。 (Pīfā jià bǐ língshòu piányi.) — Оптовая цена дешевле розничной.',
            '我们从厂家批发进货。 (Wǒmen cóng chǎngjiā pīfā jìnhuò.) — Мы закупаем товар оптом у производителя.'
        ]
    },
    11: {
        glyph: '零售',
        pinyin: 'língshòu',
        translation: 'розничная продажа',
        examples: [
            '这家店只做零售。 (Zhè jiā diàn zhǐ zuò língshòu.) — Этот магазин занимается только розницей.',
            '零售利润更高。 (Língshòu lìrùn gèng gāo.) — Розничная торговля приносит больше прибыли.',
            '线上线下零售结合。 (Xiànshàng xiànxià língshòu jiéhé.) — Сочетание онлайн- и офлайн-розницы.'
        ]
    },
    12: {
        glyph: '促销',
        pinyin: 'cùxiāo',
        translation: 'проводить распродажу / стимулировать продажи',
        examples: [
            '双十一大促销。 (Shuāng shíyī dà cùxiāo.) — Большая распродажа на 11.11.',
            '商店在促销打折。 (Shāngdiàn zài cùxiāo dǎzhé.) — В магазине скидки для стимулирования продаж.',
            '这个广告是为了促销。 (Zhège guǎnggào shì wèile cùxiāo.) — Эта реклама — для раскрутки товара.'
        ]
    },
    13: {
        glyph: '广告',
        pinyin: 'guǎnggào',
        translation: 'рекламировать',
        examples: [
            '公司在电视上广告新产品。 (Gōngsī zài diànshì shàng guǎnggào xīn chǎnpǐn.) — Компания рекламирует новый товар по ТВ.',
            '不要相信虚假广告。 (Búyào xiāngxìn xūjiǎ guǎnggào.) — Не верьте ложной рекламе.',
            '广告费很贵。 (Guǎnggào fèi hěn guì.) — Реклама стоит дорого.'
        ]
    },
    14: {
        glyph: '结算',
        pinyin: 'jiésuàn',
        translation: 'рассчитываться / производить расчёт',
        examples: [
            '月底公司要结算工资。 (Yuèdǐ gōngsī yào jiésuàn gōngzī.) — В конце месяца компания выплачивает зарплату.',
            '请到收银台结算。 (Qǐng dào shōuyíntái jiésuàn.) — Пройдите на кассу для оплаты.',
            '跨境交易结算复杂。 (Kuàjìng jiāoyì jiésuàn fùzá.) — Расчёты по трансграничным сделкам сложны.'
        ]
    },
    15: {
        glyph: '盈利',
        pinyin: 'yínglì',
        translation: 'получать прибыль',
        examples: [
            '这家店去年开始盈利。 (Zhè jiā diàn qùnián kāishǐ yínglì.) — Этот магазин начал приносить прибыль в прошлом году.',
            '投资不一定盈利。 (Tóuzī bù yīdìng yínglì.) — Инвестиции не обязательно прибыльны.',
            '企业以盈利为目的。 (Qǐyè yǐ yínglì wéi mùdì.) — Предприятие существует ради прибыли.'
        ]
    }
};

const verbsMediaNews: { [key: number]: DictItem } = {
    1: {
        glyph: '报道',
        pinyin: 'bàodào',
        translation: 'сообщать (в СМИ)',
        examples: [
            '新闻报道了地震事件。 (Xīnwén bàodào le dìzhèn shìjiàn.) — Новости сообщили о землетрясении.',
            '记者正在报道现场情况。 (Jìzhě zhèngzài bàodào xiànchǎng qíngkuàng.) — Репортёр освещает ситуацию на месте.',
            '多家媒体报道了这个故事。 (Duō jiā méitǐ bàodào le zhège gùshi.) — Многие СМИ осветили эту историю.'
        ]
    },
    2: {
        glyph: '发布',
        pinyin: 'fābù',
        translation: 'публиковать / выпускать (новость, заявление)',
        examples: [
            '政府发布了新政策。 (Zhèngfǔ fābù le xīn zhèngcè.) — Правительство опубликовало новую политику.',
            '公司今天发布新产品。 (Gōngsī jīntiān fābù xīn chǎnpǐn.) — Компания сегодня представила новый продукт.',
            '请关注官方发布的消息。 (Qǐng guānzhù guānfāng fābù de xiāoxī.) — Следите за официально опубликованными новостями.'
        ]
    },
    3: {
        glyph: '采访',
        pinyin: 'cǎifǎng',
        translation: 'брать интервью',
        examples: [
            '记者采访了总统。 (Jìzhě cǎifǎng le zǒngtǒng.) — Журналист взял интервью у президента.',
            '我可以采访你吗？ (Wǒ kěyǐ cǎifǎng nǐ ma?) — Могу я взять у тебя интервью?',
            '他接受了媒体的采访。 (Tā jiēshòu le méitǐ de cǎifǎng.) — Он дал интервью СМИ.'
        ]
    },
    4: {
        glyph: '直播',
        pinyin: 'zhíbō',
        translation: 'вести прямую трансляцию',
        examples: [
            '电视台直播奥运会。 (Diànshìtái zhíbō Àoyùnhuì.) — Телеканал ведёт прямую трансляцию Олимпиады.',
            '他在抖音直播旅行。 (Tā zài Dǒuyīn zhíbō lǚxíng.) — Он ведёт стрим путешествия в Douyin.',
            '新闻节目正在直播。 (Xīnwén jiémù zhèngzài zhíbō.) — Новостная программа идёт в эфире.'
        ]
    },
    5: {
        glyph: '转播',
        pinyin: 'zhuǎnbō',
        translation: 'ретранслировать',
        examples: [
            '这个频道转播BBC新闻。 (Zhège píndào zhuǎnbō BBC xīnwén.) — Этот канал ретранслирует новости BBC.',
            '比赛将被多家电视台转播。 (Bǐsài jiāng bèi duō jiā diànshìtái zhuǎnbō.) — Матч будут транслировать несколько телеканалов.',
            '我们有权转播这场演出。 (Wǒmen yǒu quán zhuǎnbō zhè chǎng yǎnchū.) — У нас есть права на ретрансляцию этого выступления.'
        ]
    },
    6: {
        glyph: '引用',
        pinyin: 'yǐnyòng',
        translation: 'цитировать',
        examples: [
            '文章引用了专家的话。 (Wénzhāng yǐnyòng le zhuānjiā de huà.) — В статье процитированы слова эксперта.',
            '请注明出处再引用。 (Qǐng zhùmíng chūchù zài yǐnyòng.) — Цитируйте с указанием источника.',
            '他引用了一句古诗。 (Tā yǐnyòng le yī jù gǔshī.) — Он процитировал древнее стихотворение.'
        ]
    },
    7: {
        glyph: '曝光',
        pinyin: 'bào guāng',
        translation: 'разоблачать / выносить на свет',
        examples: [
            '媒体曝光了腐败案件。 (Méitǐ bàoguāng le fǔbài ànjiàn.) — СМИ раскрыли коррупционное дело.',
            '这个丑闻被彻底曝光。 (Zhège chǒuwén bèi chèdǐ bàoguāng.) — Этот скандал полностью раскрыт.',
            '不要在网上曝光他人隐私。 (Búyào zài wǎngshàng bàoguāng tārén yǐnsī.) — Не выкладывай чужую личную информацию в сеть.'
        ]
    },
    8: {
        glyph: '传播',
        pinyin: 'chuánbō',
        translation: 'распространять (информацию, слухи)',
        examples: [
            '谣言正在快速传播。 (Yáoyán zhèngzài kuàisù chuánbō.) — Слухи быстро распространяются.',
            '社交媒体加速信息传播。 (Shèjiāo méitǐ jiāsù xìnxī chuánbō.) — Соцсети ускоряют распространение информации.',
            '请勿传播假新闻。 (Qǐng wù chuánbō jiǎ xīnwén.) — Не распространяйте фейки.'
        ]
    },
    9: {
        glyph: '核实',
        pinyin: 'héshí',
        translation: 'проверять достоверность',
        examples: [
            '记者正在核实消息来源。 (Jìzhě zhèngzài héshí xiāoxī láiyuán.) — Журналист проверяет источник информации.',
            '在转发前请核实事实。 (Zài zhuǎnfā qián qǐng héshí shìshí.) — Перед репостом проверьте факты.',
            '信息尚未核实。 (Xìnxī shàngwèi héshí.) — Информация ещё не подтверждена.'
        ]
    },
    10: {
        glyph: '评论',
        pinyin: 'pínglùn',
        translation: 'комментировать',
        examples: [
            '专家评论了经济形势。 (Zhuānjiā pínglùn le jīngjì xíngshì.) — Эксперт прокомментировал экономическую ситуацию.',
            '你可以在文章下方评论。 (Nǐ kěyǐ zài wénzhāng xiàfāng pínglùn.) — Ты можешь оставить комментарий под статьёй.',
            '他拒绝评论此事。 (Tā jùjué pínglùn cǐ shì.) — Он отказался комментировать это.'
        ]
    },
    11: {
        glyph: '编辑',
        pinyin: 'biānjí',
        translation: 'редактировать (текст, видео)',
        examples: [
            '编辑修改了新闻稿。 (Biānjí xiūgǎi le xīnwén gǎo.) — Редактор отредактировал новостной текст.',
            '这个视频经过精心编辑。 (Zhège shìpín jīngguò jīngxīn biānjí.) — Это видео тщательно смонтировано.',
            '我们需要编辑来校对内容。 (Wǒmen xūyào biānjí lái jiàoduì nèiróng.) — Нам нужны редакторы для вычитки текста.'
        ]
    },
    12: {
        glyph: '订阅',
        pinyin: 'dìngyuè',
        translation: 'оформлять подписку',
        examples: [
            '我订阅了这份报纸。 (Wǒ dìngyuè le zhè fèn bàozhǐ.) — Я оформил подписку на эту газету.',
            '你可以订阅这个频道。 (Nǐ kěyǐ dìngyuè zhège píndào.) — Ты можешь подписаться на этот канал.',
            '订阅后每周收到邮件。 (Dìngyuè hòu měi zhōu shōu dào yóujiàn.) — После подписки каждую неделю приходит письмо.'
        ]
    },
    13: {
        glyph: '爆料',
        pinyin: 'bàoliào',
        translation: 'раскрывать сенсацию (часто инсайдер)',
        examples: [
            '知情人爆料了内幕。 (Zhīqíngrén bàoliào le nèimù.) — Осведомитель раскрыл детали.',
            '娱乐记者经常爆料明星私事。 (Yúlè jìzhě jīngcháng bàoliào míngxīng sīshì.) — Репортёры шоу-бизнеса часто сливают личную жизнь звёзд.',
            '这个爆料震惊了全网。 (Zhège bàoliào zhènjīng le quánwǎng.) — Этот слив шокировал всю сеть.'
        ]
    },
    14: {
        glyph: '屏蔽',
        pinyin: 'píngbì',
        translation: 'блокировать (контент, пользователя)',
        examples: [
            '平台屏蔽了虚假信息。 (Píngtái píngbì le xūjiǎ xìnxī.) — Платформа заблокировала ложную информацию.',
            '你可以屏蔽不喜欢的账号。 (Nǐ kěyǐ píngbì bù xǐhuan de zhànghào.) — Ты можешь заблокировать нелюбимые аккаунты.',
            '他的评论被屏蔽了。 (Tā de pínglùn bèi píngbì le.) — Его комментарий скрыт.'
        ]
    },
    15: {
        glyph: '推送',
        pinyin: 'tuīsòng',
        translation: 'отправлять уведомление / рекомендацию',
        examples: [
            'APP向我推送了新闻。 (APP xiàng wǒ tuīsòng le xīnwén.) — Приложение прислало мне новости.',
            '系统会自动推送更新。 (Xìtǒng huì zìdòng tuīsòng gēngxīn.) — Система автоматически присылает обновления.',
            '取消消息推送。 (Qǔxiāo xiāoxī tuīsòng.) — Отключите уведомления.'
        ]
    }
};

const verbsTimeDuration: { [key: number]: DictItem } = {
    1: {
        glyph: '等待',
        pinyin: 'děngdài',
        translation: 'ждать',
        examples: [
            '我等了两个小时。 (Wǒ děng le liǎng gè xiǎoshí.) — Я ждал два часа.',
            '别让他久等。 (Bié ràng tā jiǔ děng.) — Не заставляй его долго ждать.',
            '等待结果很煎熬。 (Děngdài jiéguǒ hěn jiān’áo.) — Ждать результатов мучительно.'
        ]
    },
    2: {
        glyph: '持续',
        pinyin: 'chíxù',
        translation: 'длиться / продолжаться',
        examples: [
            '会议持续了三小时。 (Huìyì chíxù le sān xiǎoshí.) — Совещание длилось три часа.',
            '高温天气将持续一周。 (Gāowēn tiānqì jiāng chíxù yī zhōu.) — Жара продлится неделю.',
            '这种状态不能持续太久。 (Zhè zhǒng zhuàngtài bù néng chíxù tài jiǔ.) — Такое состояние не может длиться слишком долго.'
        ]
    },
    3: {
        glyph: '拖延',
        pinyin: 'tuōyán',
        translation: 'откладывать / затягивать',
        examples: [
            '别再拖延工作了！ (Bié zài tuōyán gōngzuò le!) — Хватит тянуть с работой!',
            '拖延会导致更多问题。 (Tuōyán huì dǎozhì gèng duō wèntí.) — Прокрастинация вызовет ещё больше проблем.',
            '他总是拖延交作业。 (Tā zǒngshì tuōyán jiāo zuòyè.) — Он всегда откладывает сдачу домашки.'
        ]
    },
    4: {
        glyph: '提前',
        pinyin: 'tíqián',
        translation: 'делать заранее / раньше срока',
        examples: [
            '请提前十分钟到达。 (Qǐng tíqián shí fēnzhōng dàodá.) — Пожалуйста, приходите за десять минут до начала.',
            '他提前完成了任务。 (Tā tíqián wánchéng le rènwù.) — Он выполнил задание досрочно.',
            '提前预订有优惠。 (Tíqián yùdìng yǒu yōuhuì.) — Раннее бронирование со скидкой.'
        ]
    },
    5: {
        glyph: '推迟',
        pinyin: 'tuīchí',
        translation: 'откладывать (событие на позже)',
        examples: [
            '会议推迟到明天。 (Huìyì tuīchí dào míngtiān.) — Совещание перенесли на завтра.',
            '因天气原因，航班推迟了。 (Yīn tiānqì yuányīn, hángbān tuīchí le.) — Из-за погоды рейс задержали.',
            '不要轻易推迟计划。 (Búyào qīngyì tuīchí jìhuà.) — Не откладывайте планы без веской причины.'
        ]
    },
    6: {
        glyph: '准时',
        pinyin: 'zhǔnshí',
        translation: 'приходить/делать вовремя',
        examples: [
            '他总是准时上班。 (Tā zǒngshì zhǔnshí shàngbān.) — Он всегда приходит на работу вовремя.',
            '火车准时到达。 (Huǒchē zhǔnshí dàodá.) — Поезд прибыл по расписанию.',
            '请准时参加会议。 (Qǐng zhǔnshí cānjiā huìyì.) — Пожалуйста, приходите на встречу вовремя.'
        ]
    },
    7: {
        glyph: '赶',
        pinyin: 'gǎn',
        translation: 'спешить (вовремя успеть)',
        examples: [
            '我赶上了最后一班车。 (Wǒ gǎn shàng le zuìhòu yī bān chē.) — Я успел на последний автобус.',
            '快点！赶时间！ (Kuài diǎn! Gǎn shíjiān!) — Быстрее! У нас мало времени!',
            '他赶在 deadline 前交了报告。 (Tā gǎn zài deadline qián jiāo le bàogào.) — Он успел сдать отчёт до дедлайна.'
        ]
    },
    8: {
        glyph: '错过',
        pinyin: 'cuòguò',
        translation: 'пропустить (событие, момент)',
        examples: [
            '我错过了电影开头。 (Wǒ cuòguò le diànyǐng kāitóu.) — Я пропустил начало фильма.',
            '别错过这个机会！ (Bié cuòguò zhège jīhuì!) — Не упусти этот шанс!',
            '他因迟到错过了面试。 (Tā yīn chídào cuòguò le miànshì.) — Из-за опоздания он пропустил собеседование.'
        ]
    },
    9: {
        glyph: '间隔',
        pinyin: 'jiàngé',
        translation: 'делать перерыв / интервал',
        examples: [
            '工作一小时后要间隔休息。 (Gōngzuò yī xiǎoshí hòu yào jiàngé xiūxi.) — После часа работы нужен перерыв.',
            '两次服药间隔六小时。 (Liǎng cì fú yào jiàngé liù xiǎoshí.) — Между приёмами лекарства шесть часов интервала.',
            '视频中间有广告间隔。 (Shìpín zhōngjiān yǒu guǎnggào jiàngé.) — В видео есть рекламные паузы.'
        ]
    },
    10: {
        glyph: '终止',
        pinyin: 'zhōngzhǐ',
        translation: 'прекращать (длительный процесс)',
        examples: [
            '合同到期后自动终止。 (Hétong dàoqī hòu zìdòng zhōngzhǐ.) — Контракт автоматически прекращается по истечении срока.',
            '他们终止了合作。 (Tāmen zhōngzhǐ le hézuò.) — Они прекратили сотрудничество.',
            '请立即终止危险行为。 (Qǐng lìjí zhōngzhǐ wēixiǎn xíngwéi.) — Немедленно прекратите опасные действия.'
        ]
    },
    11: {
        glyph: '恢复',
        pinyin: 'huīfù',
        translation: 'возобновлять (после перерыва)',
        examples: [
            '交通在事故后恢复了。 (Jiāotōng zài shìgù hòu huīfù le.) — Движение восстановилось после аварии.',
            '课程下周恢复。 (Kèchéng xià zhōu huīfù.) — Занятия возобновятся на следующей неделе.',
            '服务已恢复正常。 (Fúwù yǐ huīfù zhèngcháng.) — Обслуживание вернулось в норму.'
        ]
    },
    12: {
        glyph: '倒计时',
        pinyin: 'dàojìshí',
        translation: 'вести обратный отсчёт',
        examples: [
            '火箭发射进入倒计时。 (Huǒjiàn fāshè jìnrù dàojìshí.) — Запуск ракеты перешёл в обратный отсчёт.',
            '新年倒计时开始了！ (Xīnnián dàojìshí kāishǐ le!) — Начался обратный отсчёт до Нового года!',
            '倒计时十秒！ (Dàojìshí shí miǎo!) — Обратный отсчёт: десять секунд!'
        ]
    },
    13: {
        glyph: '耗时',
        pinyin: 'hàoshí',
        translation: 'занимать (много) времени',
        examples: [
            '这个项目很耗时。 (Zhège xiàngmù hěn hàoshí.) — Этот проект очень трудоёмкий по времени.',
            '准备考试耗时两个月。 (Zhǔnbèi kǎoshì hàoshí liǎng gè yuè.) — Подготовка к экзамену заняла два месяца.',
            '别做太耗时的事。 (Bié zuò tài hàoshí de shì.) — Не трать время на слишком длительные дела.'
        ]
    },
    14: {
        glyph: '珍惜',
        pinyin: 'zhēnxī',
        translation: 'ценить (время, момент)',
        examples: [
            '要珍惜时间。 (Yào zhēnxī shíjiān.) — Нужно ценить время.',
            '珍惜和家人在一起的时光。 (Zhēnxī hé jiārén zài yīqǐ de shíguāng.) — Цени время, проведённое с семьёй.',
            '青春短暂，要珍惜。 (Qīngchūn duǎnzàn, yào zhēnxī.) — Молодость коротка — цени её.'
        ]
    },
    15: {
        glyph: '流逝',
        pinyin: 'liúshì',
        translation: '(о времени) утекать, проходить',
        examples: [
            '时间在悄悄流逝。 (Shíjiān zài qiāoqiāo liúshì.) — Время незаметно утекает.',
            '岁月流逝，青春不再。 (Suìyuè liúshì, qīngchūn bú zài.) — Годы проходят, молодость уходит.',
            '别让时间白白流逝。 (Bié ràng shíjiān báibái liúshì.) — Не позволяй времени уходить впустую.'
        ]
    }
};

const verbsAbstractRelations: { [key: number]: DictItem } = {
    1: {
        glyph: '依赖',
        pinyin: 'yīlài',
        translation: 'зависеть от',
        examples: [
            '成功依赖于努力。 (Chénggōng yīlài yú nǔlì.) — Успех зависит от усердия.',
            '经济过度依赖出口。 (Jīngjì guòdù yīlài chūkǒu.) — Экономика слишком зависит от экспорта.',
            '孩子还依赖父母。 (Háizi hái yīlài fùmǔ.) — Ребёнок ещё зависит от родителей.'
        ]
    },
    2: {
        glyph: '符合',
        pinyin: 'fúhé',
        translation: 'соответствовать',
        examples: [
            '这个方案符合要求。 (Zhège fāng’àn fúhé yāoqiú.) — Этот план соответствует требованиям.',
            '你的答案不符合事实。 (Nǐ de dá’àn bù fúhé shìshí.) — Твой ответ не соответствует фактам.',
            '产品必须符合安全标准。 (Chǎnpǐn bìxū fúhé ānquán biāozhǔn.) — Товар должен соответствовать стандартам безопасности.'
        ]
    },
    3: {
        glyph: '违背',
        pinyin: 'wéibèi',
        translation: 'противоречить / нарушать',
        examples: [
            '这违背了自然规律。 (Zhè wéibèi le zìrán guīlǜ.) — Это противоречит законам природы.',
            '他的行为违背了道德。 (Tā de xíngwéi wéibèi le dàodé.) — Его поведение противоречит морали.',
            '合同不能违背法律。 (Hétong bù néng wéibèi fǎlǜ.) — Контракт не может нарушать закон.'
        ]
    },
    4: {
        glyph: '支持',
        pinyin: 'zhīchí',
        translation: 'поддерживать (аргумент, теорию)',
        examples: [
            '数据支持这个结论。 (Shùjù zhīchí zhège jiélùn.) — Данные подтверждают этот вывод.',
            '他的观点有很多证据支持。 (Tā de guāndiǎn yǒu hěn duō zhèngjù zhīchí.) — Его точку зрения подкрепляют многие доказательства.',
            '我不支持这种说法。 (Wǒ bù zhīchí zhè zhǒng shuōfǎ.) — Я не поддерживаю такое утверждение.'
        ]
    },
    5: {
        glyph: '反对',
        pinyin: 'fǎnduì',
        translation: 'возражать / быть против',
        examples: [
            '大多数人反对这个计划。 (Dàduōshù rén fǎnduì zhège jìhuà.) — Большинство против этого плана.',
            '我反对你的意见。 (Wǒ fǎnduì nǐ de yìjiàn.) — Я не согласен с твоим мнением.',
            '法律反对任何形式的歧视。 (Fǎlǜ fǎnduì rènhé xíngshì de qíshì.) — Закон запрещает любую дискриминацию.'
        ]
    },
    6: {
        glyph: '证明',
        pinyin: 'zhèngmíng',
        translation: 'доказывать',
        examples: [
            '科学家证明了这个理论。 (Kēxuéjiā zhèngmíng le zhège lǐlùn.) — Учёные доказали эту теорию.',
            '你能证明你说的是真的吗？ (Nǐ néng zhèngmíng nǐ shuō de shì zhēn de ma?) — Ты можешь доказать, что говоришь правду?',
            '事实证明他是对的。 (Shìshí zhèngmíng tā shì duì de.) — Факты подтвердили, что он прав.'
        ]
    },
    7: {
        glyph: '解释',
        pinyin: 'jiěshì',
        translation: 'объяснять',
        examples: [
            '请解释这个现象。 (Qǐng jiěshì zhège xiànxiàng.) — Пожалуйста, объясните это явление.',
            '他无法解释自己的行为。 (Tā wúfǎ jiěshì zìjǐ de xíngwéi.) — Он не может объяснить своё поведение.',
            '理论需要实验来解释。 (Lǐlùn xūyào shíyàn lái jiěshì.) — Теорию нужно подкреплять экспериментами.'
        ]
    },
    8: {
        glyph: '假设',
        pinyin: 'jiǎshè',
        translation: 'предполагать (в рассуждении)',
        examples: [
            '假设明天下雨，怎么办？ (Jiǎshè míngtiān xiàyǔ, zěnme bàn?) — Допустим, завтра пойдёт дождь — что делать?',
            '这个结论基于一个错误假设。 (Zhège jiélùn jīyú yī gè cuòwù jiǎshè.) — Этот вывод основан на ошибочном предположении.',
            '科学家提出新假设。 (Kēxuéjiā tíchū xīn jiǎshè.) — Учёные выдвинули новую гипотезу.'
        ]
    },
    9: {
        glyph: '推断',
        pinyin: 'tuīduàn',
        translation: 'делать вывод',
        examples: [
            '从证据可以推断他有罪。 (Cóng zhèngjù kěyǐ tuīduàn tā yǒuzuì.) — Из доказательств можно заключить, что он виновен.',
            '我推断他会同意。 (Wǒ tuīduàn tā huì tóngyì.) — Я предполагаю, что он согласится.',
            '不要凭感觉推断。 (Búyào píng gǎnjué tuīduàn.) — Не делайте выводы на основе чувств.'
        ]
    },
    10: {
        glyph: '适用',
        pinyin: 'shìyòng',
        translation: 'применяться (о правиле, законе)',
        examples: [
            '这条法律适用于所有人。 (Zhè tiáo fǎlǜ shìyòng yú suǒyǒu rén.) — Этот закон применим ко всем.',
            '本规定不适用于学生。 (Běn guīdìng bù shìyòng yú xuéshēng.) — Это правило не распространяется на студентов.',
            '这个理论在现实中适用吗？ (Zhège lǐlùn zài xiànshí zhōng shìyòng ma?) — Применима ли эта теория в реальности?'
        ]
    },
    11: {
        glyph: '关联',
        pinyin: 'guānlián',
        translation: 'быть связанным',
        examples: [
            '这两个问题密切相关。 (Zhè liǎng gè wèntí mìqiè guānlián.) — Эти два вопроса тесно связаны.',
            '他的健康与饮食有关联。 (Tā de jiànkāng yǔ yǐnshí yǒu guānlián.) — Его здоровье связано с питанием.',
            '不要强行建立关联。 (Búyào qiǎngxíng jiànlì guānlián.) — Не навязывайте связь насильно.'
        ]
    },
    12: {
        glyph: '服从',
        pinyin: 'fúcóng',
        translation: 'подчиняться (закону, приказу)',
        examples: [
            '公民必须服从法律。 (Gōngmín bìxū fúcóng fǎlǜ.) — Граждане обязаны подчиняться закону.',
            '士兵要服从命令。 (Shìbīng yào fúcóng mìnglìng.) — Солдаты обязаны выполнять приказы.',
            '孩子要学会服从规则。 (Háizi yào xuéhuì fúcóng guīzé.) — Дети должны научиться подчиняться правилам.'
        ]
    },
    13: {
        glyph: '挑战',
        pinyin: 'tiǎozhàn',
        translation: 'ставить под сомнение / оспаривать',
        examples: [
            '没有人敢挑战他的权威。 (Méiyǒu rén gǎn tiǎozhàn tā de quánwēi.) — Никто не осмеливается оспаривать его авторитет.',
            '这个发现挑战了旧理论。 (Zhège fāxiàn tiǎozhàn le jiù lǐlùn.) — Это открытие бросает вызов старой теории.',
            '你不能挑战法律。 (Nǐ bù néng tiǎozhàn fǎlǜ.) — Ты не можешь идти против закона.'
        ]
    },
    14: {
        glyph: '体现',
        pinyin: 'tǐxiàn',
        translation: 'отражать / демонстрировать (идею, качество)',
        examples: [
            '他的行为体现了诚实。 (Tā de xíngwéi tǐxiàn le chéngshí.) — Его поведение демонстрирует честность.',
            '这个设计体现了创新精神。 (Zhège shèjì tǐxiàn le chuàngxīn jīngshén.) — Этот дизайн отражает дух инноваций.',
            '结果体现了努力的价值。 (Jiéguǒ tǐxiàn le nǔlì de jiàzhí.) — Результат показывает ценность усердия.'
        ]
    },
    15: {
        glyph: '基于',
        pinyin: 'jīyú',
        translation: 'быть основанным на',
        examples: [
            '决定基于事实。 (Juédìng jīyú shìshí.) — Решение основано на фактах.',
            '这个理论基于大量实验。 (Zhège lǐlùn jīyú dàliàng shíyàn.) — Эта теория основана на множестве экспериментов.',
            '不要基于偏见做判断。 (Búyào jīyú piānjiàn zuò pànduàn.) — Не судите, опираясь на предубеждения.'
        ]
    }
};

const verbsPossessionOwnership: { [key: number]: DictItem } = {
    1: {
        glyph: '有',
        pinyin: 'yǒu',
        translation: 'иметь / обладать',
        examples: [
            '我有一本书。 (Wǒ yǒu yī běn shū.) — У меня есть книга.',
            '他有三个孩子。 (Tā yǒu sān gè háizi.) — У него трое детей.',
            '这个城市有很多公园。 (Zhège chéngshì yǒu hěn duō gōngyuán.) — В этом городе много парков.'
        ]
    },
    2: {
        glyph: '属于',
        pinyin: 'shǔyú',
        translation: 'принадлежать (кому-то/чему-то)',
        examples: [
            '这本书属于我。 (Zhè běn shū shǔyú wǒ.) — Эта книга принадлежит мне.',
            '这个岛屿属于中国。 (Zhège dǎo shǔyú Zhōngguó.) — Этот остров принадлежит Китаю.',
            '你的建议属于好想法。 (Nǐ de jiànyì shǔyú hǎo xiǎngfǎ.) — Твоё предложение относится к хорошим идеям.'
        ]
    },
    3: {
        glyph: '拥有',
        pinyin: 'yōngyǒu',
        translation: 'владеть (официально, формально)',
        examples: [
            '他拥有一家公司。 (Tā yōngyǒu yī jiā gōngsī.) — Он владеет компанией.',
            '这个国家拥有丰富的资源。 (Zhège guójiā yōngyǒu fēngfù de zīyuán.) — Эта страна обладает богатыми ресурсами.',
            '你拥有改变命运的权利。 (Nǐ yōngyǒu gǎibiàn mìngyùn de quánlì.) — Ты имеешь право изменить свою судьбу.'
        ]
    },
    4: {
        glyph: '占有',
        pinyin: 'zhànyǒu',
        translation: 'занимать (пространство), обладать (часто негативно)',
        examples: [
            '这张桌子占用了太多地方。 (Zhè zhāng zhuōzi zhànyòng le tài duō dìfāng.) — Этот стол занимает слишком много места.',
            '他非法占有了别人的土地。 (Tā fēifǎ zhànyǒu le biérén de tǔdì.) — Он незаконно завладел чужой землёй.',
            '感情不能占有，只能珍惜。 (Gǎnqíng bù néng zhànyǒu, zhǐ néng zhēnxī.) — Чувства нельзя присваивать — только беречь.'
        ]
    },
    5: {
        glyph: '继承',
        pinyin: 'jìchéng',
        translation: 'наследовать',
        examples: [
            '他继承了父亲的遗产。 (Tā jìchéng le fùqin de yíchǎn.) — Он унаследовал имущество отца.',
            '孩子继承了母亲的聪明。 (Háizi jìchéng le mǔqin de cōngmíng.) — Ребёнок унаследовал ум от матери.',
            '我们要继承传统文化。 (Wǒmen yào jìchéng chuántǒng wénhuà.) — Мы должны сохранять традиционную культуру.'
        ]
    },
    6: {
        glyph: '租赁',
        pinyin: 'zūlìn',
        translation: 'арендовать (формально)',
        examples: [
            '公司租赁了办公楼。 (Gōngsī zūlìn le bàngōng lóu.) — Компания арендовала офисное здание.',
            '他租赁了一辆汽车。 (Tā zūlìn le yī liàng qìchē.) — Он арендовал машину.',
            '这个公寓可以长期租赁。 (Zhège gōngyù kěyǐ chángqī zūlìn.) — Эту квартиру можно арендовать надолго.'
        ]
    },
    7: {
        glyph: '租',
        pinyin: 'zū',
        translation: 'сдавать/брать в аренду',
        examples: [
            '我租了一间房子。 (Wǒ zū le yī jiān fángzi.) — Я снял комнату.',
            '他把车租给别人。 (Tā bǎ chē zū gěi biérén.) — Он сдал машину в аренду другому.',
            '房租每月3000元。 (Fángzū měi yuè 3000 yuán.) — Арендная плата — 3000 юаней в месяц.'
        ]
    },
    8: {
        glyph: '配备',
        pinyin: 'pèibèi',
        translation: 'быть оснащённым (иметь в комплекте)',
        examples: [
            '这台电脑配备了新处理器。 (Zhè tái diànnǎo pèibèi le xīn chǔlǐqì.) — Этот компьютер оснащён новым процессором.',
            '房间配备了空调和Wi-Fi。 (Fángjiān pèibèi le kōngtiáo hé Wi-Fi.) — В номере есть кондиционер и Wi-Fi.',
            '新车配备了安全气囊。 (Xīn chē pèibèi le ānquán qìnáng.) — Новая машина оборудована подушками безопасности.'
        ]
    },
    9: {
        glyph: '缺乏',
        pinyin: 'quēfá',
        translation: 'испытывать недостаток (в чём-то)',
        examples: [
            '他缺乏经验。 (Tā quēfá jīngyàn.) — Ему не хватает опыта.',
            '这个地区缺乏水资源。 (Zhège dìqū quēfá shuǐ zīyuán.) — В этом регионе не хватает воды.',
            '孩子缺乏父母的关爱。 (Háizi quēfá fùmǔ de guān’ài.) — Ребёнку не хватает родительской заботы.'
        ]
    },
    10: {
        glyph: '丢失',
        pinyin: 'diūshī',
        translation: 'потерять (с акцентом на утрату владения)',
        examples: [
            '我丢失了护照。 (Wǒ diūshī le hùzhào.) — Я потерял паспорт.',
            '公司丢失了重要文件。 (Gōngsī diūshī le zhòngyào wénjiàn.) — Компания утратила важные документы.',
            '小心别丢失钥匙。 (Xiǎoxīn bié diūshī yàoshi.) — Осторожно, не потеряй ключи.'
        ]
    },
    11: {
        glyph: '归还',
        pinyin: 'guīhuán',
        translation: 'возвращать (то, что брали во владение)',
        examples: [
            '请归还我的书。 (Qǐng guīhuán wǒ de shū.) — Пожалуйста, верни мою книгу.',
            '图书馆要求按时归还图书。 (Túshūguǎn yāoqiú ànshí guīhuán túshū.) — Библиотека требует возвращать книги вовремя.',
            '他归还了借来的钱。 (Tā guīhuán le jiè lái de qián.) — Он вернул заёмные деньги.'
        ]
    },
    12: {
        glyph: '转让',
        pinyin: 'zhuǎnràng',
        translation: 'передавать право владения',
        examples: [
            '他把专利转让给公司。 (Tā bǎ zhuānlì zhuǎnràng gěi gōngsī.) — Он передал патент компании.',
            '这个账号可以转让吗？ (Zhège zhànghào kěyǐ zhuǎnràng ma?) — Можно ли передать этот аккаунт?',
            '房屋所有权已转让。 (Fángwū suǒyǒuquán yǐ zhuǎnràng.) — Право собственности на дом передано.'
        ]
    },
    13: {
        glyph: '享有',
        pinyin: 'xiǎngyǒu',
        translation: 'пользоваться (правом, привилегией)',
        examples: [
            '公民享有平等权利。 (Gōngmín xiǎngyǒu píngděng quánlì.) — Граждане пользуются равными правами.',
            '学生享有寒暑假。 (Xuéshēng xiǎngyǒu hánshǔjià.) — Студенты имеют право на зимние и летние каникулы.',
            '他享有很高的声誉。 (Tā xiǎngyǒu hěn gāo de shēngyù.) — Он пользуется высокой репутацией.'
        ]
    },
    14: {
        glyph: '占据',
        pinyin: 'zhànjù',
        translation: 'занимать (место, позицию, долю)',
        examples: [
            '中国占据了全球市场30%。 (Zhōngguó zhànjù le quánqiú shìchǎng 30%.) — Китай занимает 30% мирового рынка.',
            '沙发占据了半个客厅。 (Shāfā zhànjù le bàn gè kètīng.) — Диван занимает половину гостиной.',
            '这个问题占据了会议大部分时间。 (Zhège wèntí zhànjù le huìyì dà bùfen shíjiān.) — Этот вопрос занял большую часть совещания.'
        ]
    },
    15: {
        glyph: '放弃',
        pinyin: 'fàngqì',
        translation: 'отказываться от права/владения',
        examples: [
            '他放弃了继承权。 (Tā fàngqì le jìchéng quán.) — Он отказался от права на наследство.',
            '不要轻易放弃你的梦想。 (Búyào qīngyì fàngqì nǐ de mèngxiǎng.) — Не отказывайся легко от своей мечты.',
            '公司放弃了这个项目。 (Gōngsī fàngqì le zhège xiàngmù.) — Компания отказалась от проекта.'
        ]
    }
};

const verbsRelaxationLeisure: { [key: number]: DictItem } = {
    1: {
        glyph: '休息',
        pinyin: 'xiūxi',
        translation: 'отдыхать',
        examples: [
            '工作一小时后要休息。 (Gōngzuò yī xiǎoshí hòu yào xiūxi.) — После часа работы нужно отдохнуть.',
            '周末我好好休息。 (Zhōumò wǒ hǎohǎo xiūxi.) — В выходные я хорошо отдыхаю.',
            '休息是为了走得更远。 (Xiūxi shì wèile zǒu de gèng yuǎn.) — Отдых — чтобы идти дальше.'
        ]
    },
    2: {
        glyph: '放松',
        pinyin: 'fàngsōng',
        translation: 'расслабляться',
        examples: [
            '听音乐能让人放松。 (Tīng yīnyuè néng ràng rén fàngsōng.) — Музыка помогает расслабиться.',
            '深呼吸，放松身体。 (Shēn hūxī, fàngsōng shēntǐ.) — Сделайте глубокий вдох и расслабьте тело.',
            '别紧张，放松点！ (Bié jǐnzhāng, fàngsōng diǎn!) — Не напрягайся, расслабься!'
        ]
    },
    3: {
        glyph: '享受',
        pinyin: 'xiǎngshòu',
        translation: 'наслаждаться',
        examples: [
            '享受阳光和海滩。 (Xiǎngshòu yángguāng hé hǎitān.) — Наслаждайтесь солнцем и пляжем.',
            '他享受独处的时光。 (Tā xiǎngshòu dúchǔ de shíguāng.) — Он наслаждается временем наедине с собой.',
            '慢慢享受这顿饭。 (Mànmàn xiǎngshòu zhè dùn fàn.) — Медленно наслаждайтесь этой едой.'
        ]
    },
    4: {
        glyph: '娱乐',
        pinyin: 'yúlè',
        translation: 'развлекать (себя или других)',
        examples: [
            '电影是用来娱乐的。 (Diànyǐng shì yòng lái yúlè de.) — Фильмы созданы для развлечения.',
            '他喜欢用音乐娱乐朋友。 (Tā xǐhuan yòng yīnyuè yúlè péngyou.) — Ему нравится развлекать друзей музыкой.',
            '这个节目很娱乐。 (Zhège jiémù hěn yúlè.) — Эта передача очень развлекательная.'
        ]
    },
    5: {
        glyph: '消遣',
        pinyin: 'xiāoqiǎn',
        translation: 'коротать время / заниматься досугом',
        examples: [
            '读书是我的消遣方式。 (Dúshū shì wǒ de xiāoqiǎn fāngshì.) — Чтение — мой способ скоротать время.',
            '老年人喜欢下棋消遣。 (Lǎonián rén xǐhuan xiàqí xiāoqiǎn.) — Пожилые люди любят играть в шахматы для досуга.',
            '别用游戏消遣太多时间。 (Bié yòng yóuxì xiāoqiǎn tài duō shíjiān.) — Не трать слишком много времени на игры.'
        ]
    },
    6: {
        glyph: '度假',
        pinyin: 'dùjià',
        translation: 'проводить отпуск',
        examples: [
            '我们去海边度假。 (Wǒmen qù hǎibiān dùjià.) — Мы едем на море в отпуск.',
            '他计划去云南度假。 (Tā jìhuà qù Yúnnán dùjià.) — Он планирует поехать в Юньнань отдыхать.',
            '假期是用来度假的。 (Jiàqī shì yòng lái dùjià de.) — Каникулы созданы для отдыха.'
        ]
    },
    7: {
        glyph: '闲逛',
        pinyin: 'xiánguàng',
        translation: 'бездельничать / гулять без цели',
        examples: [
            '周末我喜欢在公园闲逛。 (Zhōumò wǒ xǐhuan zài gōngyuán xiánguàng.) — По выходным мне нравится без цели гулять по парку.',
            '别闲逛了，该工作了！ (Bié xiánguàng le, gāi gōngzuò le!) — Хватит бездельничать, пора работать!',
            '他们在街上闲逛。 (Tāmen zài jiē shàng xiánguàng.) — Они шатаются по улице.'
        ]
    },
    8: {
        glyph: '泡',
        pinyin: 'pào',
        translation: 'проводить время в (кафе, баре, спа)',
        examples: [
            '他在咖啡馆泡了一下午。 (Tā zài kāfēiguǎn pào le yī xiàwǔ.) — Он провёл весь день в кафе.',
            '周末去温泉泡一泡。 (Zhōumò qù wēnquán pào yī pào.) — В выходные сходи попарься в термальном источнике.',
            '别整天泡在网上！ (Bié zhěngtiān pào zài wǎngshàng!) — Не сиди весь день в интернете!'
        ]
    },
    9: {
        glyph: '冥想',
        pinyin: 'míngxiǎng',
        translation: 'медитировать',
        examples: [
            '每天冥想十分钟。 (Měitiān míngxiǎng shí fēnzhōng.) — Медитируй по десять минут ежедневно.',
            '冥想有助于减压。 (Míngxiǎng yǒu zhù yú jiǎn yā.) — Медитация помогает снять стресс.',
            '他在安静的房间冥想。 (Tā zài ānjìng de fángjiān míngxiǎng.) — Он медитирует в тихой комнате.'
        ]
    },
    10: {
        glyph: '发呆',
        pinyin: 'fādāi',
        translation: 'сидеть в задумчивости / "зависать"',
        examples: [
            '他坐在窗边发呆。 (Tā zuò zài chuāngbiān fādāi.) — Он сидит у окна в задумчивости.',
            '别发呆了，快干活！ (Bié fādāi le, kuài gàn huó!) — Хватит мечтать, работай!',
            '发呆也是一种休息。 (Fādāi yě shì yī zhǒng xiūxi.) — "Зависание" — тоже отдых.'
        ]
    },
    11: {
        glyph: '小憩',
        pinyin: 'xiǎoqì',
        translation: 'вздремнуть / сделать короткий перерыв',
        examples: [
            '午饭后小憩一会儿。 (Wǔfàn hòu xiǎoqì yīhuìr.) — После обеда немного вздремни.',
            '他工作间隙小憩了十分钟。 (Tā gōngzuò jiànxì xiǎoqì le shí fēnzhōng.) — Он сделал десятиминутный перерыв.',
            '小憩能恢复精力。 (Xiǎoqì néng huīfù jīnglì.) — Короткий сон восстанавливает силы.'
        ]
    },
    12: {
        glyph: '自娱自乐',
        pinyin: 'zì yú zì lè',
        translation: 'развлекать самого себя',
        examples: [
            '孩子一个人也能自娱自乐。 (Háizi yīgè rén yě néng zì yú zì lè.) — Ребёнок может развлекать себя и один.',
            '他喜欢在家自娱自乐。 (Tā xǐhuan zài jiā zì yú zì lè.) — Ему нравится развлекаться дома самому.',
            '自娱自乐是一种能力。 (Zì yú zì lè shì yī zhǒng nénglì.) — Умение радовать себя — это навык.'
        ]
    },
    13: {
        glyph: '放空',
        pinyin: 'fàngkōng',
        translation: 'опустошать разум (от мыслей)',
        examples: [
            '散步时我喜欢放空自己。 (Sànbù shí wǒ xǐhuan fàngkōng zìjǐ.) — Во время прогулки я люблю "очищать" разум.',
            '放空几分钟，你会感觉更好。 (Fàngkōng jǐ fēnzhōng, nǐ huì gǎnjué gèng hǎo.) — "Очисти" голову на несколько минут — станет легче.',
            '别想太多，学会放空。 (Bié xiǎng tài duō, xuéhuì fàngkōng.) — Не думай слишком много — научись "выключаться".'
        ]
    },
    14: {
        glyph: '偷闲',
        pinyin: 'tōu xián',
        translation: 'красть время для отдыха',
        examples: [
            '忙里偷闲喝杯茶。 (Máng lǐ tōu xián hē bēi chá.) — В суете найди время выпить чашку чая.',
            '他总能偷闲读几页书。 (Tā zǒng néng tōu xián dú jǐ yè shū.) — Он всегда находит время прочитать несколько страниц.',
            '生活再忙也要偷闲。 (Shēnghuó zài máng yě yào tōu xián.) — Даже в самой суетной жизни нужно находить время для отдыха.'
        ]
    },
    15: {
        glyph: '悠然自得',
        pinyin: 'yōurán zìdé',
        translation: 'чувствовать себя спокойно и наслаждаться моментом',
        examples: [
            '他坐在湖边，悠然自得。 (Tā zuò zài húbiān, yōurán zìdé.) — Он сидел у озера, полностью расслабившись.',
            '喝茶时要悠然自得。 (Hē chá shí yào yōurán zìdé.) — Пей чай в спокойствии и гармонии.',
            '退休后他过得很悠然自得。 (Tuìxiū hòu tā guò de hěn yōurán zìdé.) — После пенсии он живёт в полном умиротворении.'
        ]
    }
};

const verbsAppearanceManner: { [key: number]: DictItem } = {
    1: {
        glyph: '看起来',
        pinyin: 'kàn qǐlái',
        translation: 'выглядеть (казаться на вид)',
        examples: [
            '他看起来很累。 (Tā kàn qǐlái hěn lèi.) — Он выглядит усталым.',
            '这个主意看起来不错。 (Zhège zhǔyi kàn qǐlái búcuò.) — Эта идея выглядит неплохо.',
            '看起来要下雨了。 (Kàn qǐlái yào xiàyǔ le.) — Похоже, скоро пойдёт дождь.'
        ]
    },
    2: {
        glyph: '显得',
        pinyin: 'xiǎnde',
        translation: 'казаться / производить впечатление',
        examples: [
            '她显得很自信。 (Tā xiǎnde hěn zìxìn.) — Она производит впечатление уверенного человека.',
            '房间显得很宽敞。 (Fángjiān xiǎnde hěn kuānchǎng.) — Комната кажется просторной.',
            '他显得不太高兴。 (Tā xiǎnde bú tài gāoxìng.) — Он выглядит не очень довольным.'
        ]
    },
    3: {
        glyph: '打扮',
        pinyin: 'dǎban',
        translation: 'наряжаться / ухаживать за внешностью',
        examples: [
            '她每天早上打扮半小时。 (Tā měitiān zǎoshang dǎban bàn xiǎoshí.) — Каждое утро она тратит полчаса на то, чтобы нарядиться.',
            '节日里大家都打扮得很漂亮。 (Jiérì lǐ dàjiā dōu dǎban de hěn piàoliang.) — В праздники все наряжаются красиво.',
            '别太花哨地打扮！ (Bié tài huāshào de dǎban!) — Не одевайся слишком вычурно!'
        ]
    },
    4: {
        glyph: '穿戴',
        pinyin: 'chuāndài',
        translation: 'носить (одежду и аксессуары)',
        examples: [
            '他穿戴整齐去面试。 (Tā chuāndài zhěngqí qù miànshì.) — Он аккуратно оделся на собеседование.',
            '冬天要穿戴保暖。 (Dōngtiān yào chuāndài bǎonuǎn.) — Зимой нужно тепло одеваться.',
            '她穿戴的都是名牌。 (Tā chuāndài de dōu shì míngpái.) — На ней всё — бренды.'
        ]
    },
    5: {
        glyph: '表现',
        pinyin: 'biǎoxiàn',
        translation: 'вести себя / проявлять себя',
        examples: [
            '他在会议上表现很好。 (Tā zài huìyì shàng biǎoxiàn hěn hǎo.) — Он отлично проявил себя на совещании.',
            '孩子在学校表现怎么样？ (Háizi zài xuéxiào biǎoxiàn zěnme yàng?) — Как ребёнок ведёт себя в школе?',
            '别在公共场合表现粗鲁！ (Bié zài gōnggòng chǎnghé biǎoxiàn cūlǔ!) — Не веди себя грубо в общественных местах!'
        ]
    },
    6: {
        glyph: '举止',
        pinyin: 'jǔzhǐ',
        translation: 'вести себя (вежливо/невежливо)',
        examples: [
            '他的举止很有礼貌。 (Tā de jǔzhǐ hěn yǒu lǐmào.) — Его манеры очень вежливые.',
            '请注意你的举止。 (Qǐng zhùyì nǐ de jǔzhǐ.) — Пожалуйста, следите за своим поведением.',
            '在正式场合要举止得体。 (Zài zhèngshì chǎnghé yào jǔzhǐ détǐ.) — В официальной обстановке нужно вести себя прилично.'
        ]
    },
    7: {
        glyph: '装',
        pinyin: 'zhuāng',
        translation: 'притворяться / делать вид',
        examples: [
            '他装作没听见。 (Tā zhuāng zuò méi tīngjiàn.) — Он сделал вид, что не слышит.',
            '别装了，我知道真相。 (Bié zhuāng le, wǒ zhīdào zhēnxiàng.) — Хватит притворяться, я знаю правду.',
            '她装得很开心。 (Tā zhuāng de hěn kāixīn.) — Она притворяется, что рада.'
        ]
    },
    8: {
        glyph: '模仿',
        pinyin: 'mófǎng',
        translation: 'подражать (в манере, стиле)',
        examples: [
            '孩子喜欢模仿大人。 (Háizi xǐhuan mófǎng dàrén.) — Дети любят подражать взрослым.',
            '他模仿明星的穿搭。 (Tā mófǎng míngxīng de chuāndā.) — Он копирует стиль одежды звёзд.',
            '不要盲目模仿别人。 (Búyào mángmù mófǎng biérén.) — Не подражай другим слепо.'
        ]
    },
    9: {
        glyph: '端庄',
        pinyin: 'duānzhuāng',
        translation: 'вести себя скромно и благопристойно',
        examples: [
            '她举止端庄。 (Tā jǔzhǐ duānzhuāng.) — Она ведёт себя скромно и благородно.',
            '传统观念要求女性端庄。 (Chuántǒng guānniàn yāoqiú nǚxìng duānzhuāng.) — Традиции требуют от женщин скромности.',
            '在正式场合要端庄大方。 (Zài zhèngshì chǎnghé yào duānzhuāng dàfāng.) — В официальной обстановке будь скромным и открытым.'
        ]
    },
    10: {
        glyph: '潇洒',
        pinyin: 'xiāosǎ',
        translation: 'вести себя легко, свободно, элегантно',
        examples: [
            '他走路的样子很潇洒。 (Tā zǒulù de yàngzi hěn xiāosǎ.) — Он ходит очень элегантно.',
            '她说话潇洒自信。 (Tā shuōhuà xiāosǎ zìxìn.) — Она говорит легко и уверенно.',
            '穿风衣显得很潇洒。 (Chuān fēngyī xiǎnde hěn xiāosǎ.) — В тренче выглядишь очень стильно.'
        ]
    },
    11: {
        glyph: '狼狈',
        pinyin: 'lángbèi',
        translation: 'выглядеть в замешательстве / неловко',
        examples: [
            '他摔倒后显得很狼狈。 (Tā shuāi dǎo hòu xiǎnde hěn lángbèi.) — После падения он выглядел очень неловко.',
            '下雨没带伞，我淋得狼狈不堪。 (Xiàyǔ méi dài sǎn, wǒ lín de lángbèi bùkān.) — Из-за дождя без зонта я промок до нитки и выглядел ужасно.',
            '别让他在众人面前狼狈。 (Bié ràng tā zài zhòngrén miànqián lángbèi.) — Не ставь его в неловкое положение перед всеми.'
        ]
    },
    12: {
        glyph: '整洁',
        pinyin: 'zhěngjié',
        translation: 'быть аккуратным (в одежде, внешности)',
        examples: [
            '他总是穿得很整洁。 (Tā zǒng shì chuān de hěn zhěngjié.) — Он всегда одет аккуратно.',
            '保持房间整洁。 (Bǎochí fángjiān zhěngjié.) — Поддерживай чистоту в комнате.',
            '整洁的外表给人好印象。 (Zhěngjié de wàibiǎo gěi rén hǎo yìnxiàng.) — Опрятная внешность производит хорошее впечатление.'
        ]
    },
    13: {
        glyph: '邋遢',
        pinyin: 'lāta',
        translation: 'выглядеть неопрятно',
        examples: [
            '他穿得邋遢。 (Tā chuān de lāta.) — Он одет неопрятно.',
            '别这么邋遢，整理一下！ (Bié zhème lāta, zhěnglǐ yīxià!) — Не будь таким неряхой, приведи себя в порядок!',
            '邋遢的外表会影响机会。 (Lāta de wàibiǎo huì yǐngxiǎng jīhuì.) — Неопрятная внешность вредит карьерным возможностям.'
        ]
    },
    14: {
        glyph: '神气',
        pinyin: 'shénqì',
        translation: 'выглядеть гордым / самодовольным',
        examples: [
            '他考了满分，很神气。 (Tā kǎo le mǎnfēn, hěn shénqì.) — Он получил 100 баллов и очень гордится этим.',
            '别那么神气！ (Bié nàme shénqì!) — Не зазнавайся!',
            '穿上新衣服，他显得特别神气。 (Chuān shàng xīn yīfu, tā xiǎnde tèbié shénqì.) — В новой одежде он выглядит очень самодовольно.'
        ]
    },
    15: {
        glyph: '朴素',
        pinyin: 'pǔsù',
        translation: 'выглядеть скромно, просто',
        examples: [
            '她穿着朴素但很得体。 (Tā chuānzhuó pǔsù dàn hěn détǐ.) — Она одета скромно, но очень прилично.',
            '这位领导生活很朴素。 (Zhè wèi lǐngdǎo shēnghuó hěn pǔsù.) — Этот руководитель живёт очень просто.',
            '朴素的风格永不过时。 (Pǔsù de fēnggé yǒng bù guòshí.) — Простой стиль никогда не выходит из моды.'
        ]
    }
};

const verbsReligionPhilosophy: { [key: number]: DictItem } = {
    1: {
        glyph: '信仰',
        pinyin: 'xìnyǎng',
        translation: 'веровать / исповедовать (религию)',
        examples: [
            '他信仰佛教。 (Tā xìnyǎng Fójiào.) — Он исповедует буддизм.',
            '每个人都有权选择自己的信仰。 (Měi gè rén dōu yǒu quán xuǎnzé zìjǐ de xìnyǎng.) — Каждый имеет право выбрать свою веру.',
            '信仰给人力量。 (Xìnyǎng gěi rén lìliàng.) — Вера даёт человеку силы.'
        ]
    },
    2: {
        glyph: '崇拜',
        pinyin: 'chóngbài',
        translation: 'поклоняться',
        examples: [
            '古人崇拜自然神。 (Gǔrén chóngbài zìrán shén.) — Древние поклонялись божествам природы.',
            '不要盲目崇拜偶像。 (Búyào mángmù chóngbài ǒuxiàng.) — Не нужно слепо обожать идолов.',
            '他在粉丝中被崇拜。 (Tā zài fěnsī zhōng bèi chóngbài.) — Его обожают фанаты.'
        ]
    },
    3: {
        glyph: '祈祷',
        pinyin: 'qídǎo',
        translation: 'молиться',
        examples: [
            '她在教堂里祈祷。 (Tā zài jiàotáng lǐ qídǎo.) — Она молится в церкви.',
            '信徒每天祈祷三次。 (Xìntú měitiān qídǎo sān cì.) — Верующие молятся три раза в день.',
            '我为你的平安祈祷。 (Wǒ wèi nǐ de píng’ān qídǎo.) — Я молюсь за твоё благополучие.'
        ]
    },
    4: {
        glyph: '参悟',
        pinyin: 'cānwù',
        translation: 'постигать (духовную истину)',
        examples: [
            '禅宗强调静坐参悟。 (Chánzōng qiángdiào jìngzuò cānwù.) — Чань-буддизм подчёркивает постижение истины через медитацию.',
            '他用一生参悟生命的意义。 (Tā yòng yīshēng cānwù shēngmìng de yìyì.) — Он всю жизнь постигал смысл жизни.',
            '有些道理需要慢慢参悟。 (Yǒuxiē dàolǐ xūyào mànman cānwù.) — Некоторые истины нужно постигать постепенно.'
        ]
    },
    5: {
        glyph: '修身',
        pinyin: 'xiūshēn',
        translation: 'воспитывать характер / совершенствоваться',
        examples: [
            '儒家强调修身齐家治国平天下。 (Rújiā qiángdiào xiūshēn qí jiā zhì guó píng tiānxià.) — Конфуцианство учит: «Совершенствуй себя, наведи порядок в семье, управляй страной, принеси мир поднебесной».',
            '读书是修身的重要方式。 (Dúshū shì xiūshēn de zhòngyào fāngshì.) — Чтение — важный способ самосовершенствования.',
            '他每天静坐修身。 (Tā měitiān jìngzuò xiūshēn.) — Каждый день он медитирует для духовного роста.'
        ]
    },
    6: {
        glyph: '觉悟',
        pinyin: 'juéwù',
        translation: 'обрести просветление / осознать истину',
        examples: [
            '佛陀在菩提树下觉悟。 (Fótuó zài pútí shù xià juéwù.) — Будда обрёл просветление под деревом бодхи.',
            '经历苦难后他终于觉悟了。 (Jīnglì kǔnàn hòu tā zhōngyú juéwù le.) — После испытаний он наконец осознал истину.',
            '觉悟比知识更重要。 (Juéwù bǐ zhīshi gèng zhòngyào.) — Просветление важнее знаний.'
        ]
    },
    7: {
        glyph: '轮回',
        pinyin: 'lúnhuí',
        translation: 'подвергаться перерождению (в сансаре)',
        examples: [
            '佛教认为众生在六道中轮回。 (Fójiào rènwéi zhòngshēng zài liù dào zhōng lúnhuí.) — Буддизм учит, что все живые существа перерождаются в шести мирах сансары.',
            '只有解脱才能跳出轮回。 (Zhǐyǒu jiětuō cái néng tiào chū lúnhuí.) — Только через освобождение можно выйти из цикла перерождений.',
            '善行能改善下世轮回。 (Shànxíng néng gǎishàn xiàshì lúnhuí.) — Добрые деяния улучшают следующее перерождение.'
        ]
    },
    8: {
        glyph: '超脱',
        pinyin: 'chāotuō',
        translation: 'отрешиться от мирского',
        examples: [
            '道家追求超脱世俗。 (Dàojiā zhuīqiú chāotuō shìsú.) — Даосизм стремится к отрешённости от мирской суеты.',
            '他已超脱名利。 (Tā yǐ chāotuō mínglì.) — Он уже отрёкся от славы и выгоды.',
            '真正的自由是心灵的超脱。 (Zhēnzhèng de zìyóu shì xīnlíng de chāotuō.) — Истинная свобода — это духовное отрешение.'
        ]
    },
    9: {
        glyph: '持戒',
        pinyin: 'chíjiè',
        translation: 'соблюдать религиозные заповеди',
        examples: [
            '佛教徒要持戒修行。 (Fójiàotú yào chíjiè xiūxíng.) — Буддисты должны соблюдать заповеди и практиковать учение.',
            '五戒是佛教的基本戒律。 (Wǔ jiè shì Fójiào de jīběn jièlǜ.) — Пять заповедей — основа буддийской морали.',
            '持戒能净化心灵。 (Chíjiè néng jìnghuà xīnlíng.) — Соблюдение заповедей очищает душу.'
        ]
    },
    10: {
        glyph: '布施',
        pinyin: 'bùshī',
        translation: 'давать милостыню / делать пожертвования',
        examples: [
            '布施是积累功德的方式。 (Bùshī shì jīlěi gōngdé de fāngshì.) — Подаяние — способ накопить заслуги.',
            '他经常向寺庙布施。 (Tā jīngcháng xiàng sìmiào bùshī.) — Он часто жертвует в храм.',
            '真正的布施不求回报。 (Zhēnzhèng de bùshī bù qiú huíbào.) — Истинное подаяние не ждёт награды.'
        ]
    },
    11: {
        glyph: '悟道',
        pinyin: 'wù dào',
        translation: 'постичь Дао / путь',
        examples: [
            '庄子一生追求悟道。 (Zhuāngzǐ yīshēng zhuīqiú wù dào.) — Чжуанцзы всю жизнь стремился постичь Дао.',
            '喝茶也能悟道。 (Hē chá yě néng wù dào.) — Даже через чай можно постичь Путь.',
            '悟道需要放下执着。 (Wù dào xūyào fàngxià zhízhuó.) — Чтобы постичь Дао, нужно отпустить привязанности.'
        ]
    },
    12: {
        glyph: '归依',
        pinyin: 'guīyī',
        translation: 'принять прибежище (в буддизме: в Будду, Дхарму, Сангху)',
        examples: [
            '他正式归依三宝。 (Tā zhèngshì guīyī sānbǎo.) — Он официально принял прибежище в Трёх Драгоценностях.',
            '归依是成为佛教徒的第一步。 (Guīyī shì chéngwéi Fójiàotú de dì yī bù.) — Принятие прибежища — первый шаг к буддизму.',
            '很多人在人生低谷时选择归依。 (Hěn duō rén zài rénshēng dīgǔ shí xuǎnzé guīyī.) — Многие выбирают прибежище в трудные времена жизни.'
        ]
    },
    13: {
        glyph: '参禅',
        pinyin: 'cān chán',
        translation: 'практиковать дзадзэн / чань-медитацию',
        examples: [
            '僧人每天清晨参禅。 (Sēngrén měitiān qīngchén cān chán.) — Монахи практикуют чань каждое утро.',
            '参禅能让人内心平静。 (Cān chán néng ràng rén nèixīn píngjìng.) — Практика чаня успокаивает ум.',
            '他去寺庙参禅一周。 (Tā qù sìmiào cān chán yī zhōu.) — Он уехал в монастырь на неделю медитировать.'
        ]
    },
    14: {
        glyph: '开悟',
        pinyin: 'kāiwù',
        translation: 'обрести мгновенное просветление',
        examples: [
            '六祖慧能一闻即开悟。 (Liùzǔ Huìnéng yī wén jí kāiwù.) — Патриарх Хуэйнэн обрёл просветление сразу после услышанного учения.',
            '开悟不是知识，而是体验。 (Kāiwù bú shì zhīshi, ér shì tǐyàn.) — Просветление — не знание, а опыт.',
            '他一生都在追求开悟。 (Tā yīshēng dōu zài zhuīqiú kāiwù.) — Всю жизнь он стремился к просветлению.'
        ]
    },
    15: {
        glyph: '普度',
        pinyin: 'pǔdù',
        translation: 'спасать всех живых существ (буддийская концепция)',
        examples: [
            '观音菩萨发愿普度众生。 (Guānyīn Púsà fāyuàn pǔdù zhòngshēng.) — Бодхисаттва Гуаньинь дал обет спасти всех живых существ.',
            '大乘佛教强调普度众生。 (Dàchéng Fójiào qiángdiào pǔdù zhòngshēng.) — Махаяна подчёркивает спасение всех существ.',
            '真正的慈悲是普度。 (Zhēnzhèng de cíbēi shì pǔdù.) — Истинное сострадание — это всеобщее спасение.'
        ]
    }
};

const verbsSportsFitness: { [key: number]: DictItem } = {
    1: {
        glyph: '运动',
        pinyin: 'yùndòng',
        translation: 'заниматься спортом / физкультурой',
        examples: [
            '我每天运动一小时。 (Wǒ měitiān yùndòng yī xiǎoshí.) — Я занимаюсь спортом каждый день по часу.',
            '运动有益健康。 (Yùndòng yǒuyì jiànkāng.) — Физическая активность полезна для здоровья.',
            '你喜欢什么运动？ (Nǐ xǐhuan shénme yùndòng?) — Каким спортом ты увлекаешься?'
        ]
    },
    2: {
        glyph: '锻炼',
        pinyin: 'duànliàn',
        translation: 'тренироваться / укреплять (тело)',
        examples: [
            '他每天锻炼身体。 (Tā měitiān duànliàn shēntǐ.) — Он укрепляет здоровье каждый день.',
            '锻炼能增强免疫力。 (Duànliàn néng zēngqiáng miǎnyì lì.) — Тренировки укрепляют иммунитет.',
            '在健身房锻炼。 (Zài jiànshēnfáng duànliàn.) — Тренируйся в спортзале.'
        ]
    },
    3: {
        glyph: '跑步',
        pinyin: 'pǎo bù',
        translation: 'бегать (трусцой)',
        examples: [
            '我每天早上跑步。 (Wǒ měitiān zǎoshang pǎo bù.) — Каждое утро я бегаю.',
            '公园里很多人在跑步。 (Gōngyuán lǐ hěn duō rén zài pǎo bù.) — В парке много людей бегают.',
            '跑步是最好的有氧运动。 (Pǎo bù shì zuì hǎo de yǒuyǎng yùndòng.) — Бег — лучшая аэробная нагрузка.'
        ]
    },
    4: {
        glyph: '游泳',
        pinyin: 'yóuyǒng',
        translation: 'плавать',
        examples: [
            '我夏天喜欢游泳。 (Wǒ xiàtiān xǐhuan yóuyǒng.) — Летом я люблю плавать.',
            '他游泳游得很快。 (Tā yóuyǒng yóu de hěn kuài.) — Он плавает очень быстро.',
            '学游泳很重要。 (Xué yóuyǒng hěn zhòngyào.) — Очень важно научиться плавать.'
        ]
    },
    5: {
        glyph: '打球',
        pinyin: 'dǎ qiú',
        translation: 'играть в мяч (баскетбол, теннис и т.д.)',
        examples: [
            '周末我们去打篮球。 (Zhōumò wǒmen qù dǎ lánqiú.) — В выходные мы идём играть в баскетбол.',
            '他喜欢打乒乓球。 (Tā xǐhuan dǎ pīngpāng qiú.) — Ему нравится играть в пинг-понг.',
            '孩子们在打羽毛球。 (Háizimen zài dǎ yǔmáo qiú.) — Дети играют в бадминтон.'
        ]
    },
    6: {
        glyph: '健身',
        pinyin: 'jiànshēn',
        translation: 'заниматься фитнесом',
        examples: [
            '她在健身房健身。 (Tā zài jiànshēnfáng jiànshēn.) — Она занимается фитнесом в спортзале.',
            '健身能塑形和减脂。 (Jiànshēn néng sùxíng hé jiǎn zhī.) — Фитнес помогает формировать фигуру и сжигать жир.',
            '每周健身三次。 (Měi zhōu jiànshēn sān cì.) — Занимайся фитнесом три раза в неделю.'
        ]
    },
    7: {
        glyph: '拉伸',
        pinyin: 'lāshēn',
        translation: 'делать растяжку',
        examples: [
            '运动前要拉伸。 (Yùndòng qián yào lāshēn.) — Перед тренировкой нужно размяться.',
            '瑜伽包含很多拉伸动作。 (Yújiā bāohán hěn duō lāshēn dòngzuò.) — Йога включает много упражнений на растяжку.',
            '拉伸能防止受伤。 (Lāshēn néng fángzhǐ shòushāng.) — Растяжка предотвращает травмы.'
        ]
    },
    8: {
        glyph: '热身',
        pinyin: 'rèshēn',
        translation: 'разминаться',
        examples: [
            '比赛前运动员要热身。 (Bǐsài qián yùndòngyuán yào rèshēn.) — Перед соревнованиями спортсмены разминаются.',
            '不做热身容易拉伤。 (Bú zuò rèshēn róngyì lāshāng.) — Без разминки легко потянуть мышцу.',
            '热身五分钟。 (Rèshēn wǔ fēnzhōng.) — Разомнитесь пять минут.'
        ]
    },
    9: {
        glyph: '减肥',
        pinyin: 'jiǎnféi',
        translation: 'худеть / снижать вес',
        examples: [
            '她通过运动减肥。 (Tā tōngguò yùndòng jiǎnféi.) — Она худеет с помощью спорта.',
            '健康减肥很重要。 (Jiànkāng jiǎnféi hěn zhòngyào.) — Важно худеть здоровым способом.',
            '别节食减肥！ (Bié jiéshí jiǎnféi!) — Не худей голоданием!'
        ]
    },
    10: {
        glyph: '增肌',
        pinyin: 'zēng jī',
        translation: 'наращивать мышечную массу',
        examples: [
            '他健身是为了增肌。 (Tā jiànshēn shì wèile zēng jī.) — Он занимается, чтобы нарастить мышцы.',
            '增肌需要高蛋白饮食。 (Zēng jī xūyào gāo dànbái yǐnshí.) — Для роста мышц нужна диета с высоким содержанием белка.',
            '力量训练有助于增肌。 (Lìliàng xùnliàn yǒuzhù yú zēng jī.) — Силовые тренировки способствуют росту мышц.'
        ]
    },
    11: {
        glyph: '比赛',
        pinyin: 'bǐsài',
        translation: 'соревноваться',
        examples: [
            '他们明天比赛。 (Tāmen míngtiān bǐsài.) — Они соревнуются завтра.',
            '中国队赢得了比赛。 (Zhōngguó duì yíngdé le bǐsài.) — Китайская команда выиграла соревнование.',
            '参加比赛要遵守规则。 (Cānjiā bǐsài yào zūnshǒu guīzé.) — Участники соревнований должны соблюдать правила.'
        ]
    },
    12: {
        glyph: '赢',
        pinyin: 'yíng',
        translation: 'побеждать',
        examples: [
            '他赢得了金牌。 (Tā yíngdé le jīnpái.) — Он завоевал золотую медаль.',
            '努力才能赢。 (Nǔlì cái néng yíng.) — Только упорство ведёт к победе.',
            '我们赢了！ (Wǒmen yíng le!) — Мы победили!'
        ]
    },
    13: {
        glyph: '输',
        pinyin: 'shū',
        translation: 'проигрывать',
        examples: [
            '我们输了比赛。 (Wǒmen shū le bǐsài.) — Мы проиграли соревнование.',
            '输赢不重要，重要的是参与。 (Shū yíng bù zhòngyào, zhòngyào de shì cānyù.) — Важно не победить, а участвовать.',
            '别因为输了就放弃。 (Bié yīnwèi shū le jiù fàngqì.) — Не сдавайся из-за поражения.'
        ]
    },
    14: {
        glyph: '恢复',
        pinyin: 'huīfù',
        translation: 'восстанавливаться (после тренировки/травмы)',
        examples: [
            '比赛后需要充分恢复。 (Bǐsài hòu xūyào chōngfèn huīfù.) — После соревнований нужно хорошо восстановиться.',
            '他还在恢复训练中。 (Tā hái zài huīfù xùnliàn zhōng.) — Он ещё на этапе восстановительных тренировок.',
            '充足睡眠帮助身体恢复。 (Chōngzú shuìmián bāngzhù shēntǐ huīfù.) — Полноценный сон помогает телу восстановиться.'
        ]
    },
    15: {
        glyph: '坚持',
        pinyin: 'jiānchí',
        translation: 'не сдаваться, упорно продолжать',
        examples: [
            '坚持锻炼才能看到效果。 (Jiānchí duànliàn cái néng kàn dào xiàoguǒ.) — Только регулярные тренировки дадут результат.',
            '他坚持每天跑步。 (Tā jiānchí měitiān pǎo bù.) — Он упрямо бегает каждый день.',
            '成功来自坚持。 (Chénggōng láizì jiānchí.) — Успех рождается из упорства.'
        ]
    }
};

const verbsArtsCulture: { [key: number]: DictItem } = {
    1: {
        glyph: '创作',
        pinyin: 'chuàngzuò',
        translation: 'создавать (художественное произведение)',
        examples: [
            '他正在创作一幅画。 (Tā zhèngzài chuàngzuò yī fú huà.) — Он создаёт картину.',
            '灵感来自生活创作。 (Línggǎn láizì shēnghuó chuàngzuò.) — Вдохновение рождается из жизни.',
            '她用音乐表达情感，进行创作。 (Tā yòng yīnyuè biǎodá gǎnqíng, jìnxíng chuàngzuò.) — Она выражает чувства через музыку и создаёт произведения.'
        ]
    },
    2: {
        glyph: '表演',
        pinyin: 'biǎoyǎn',
        translation: 'выступать / исполнять',
        examples: [
            '他们在舞台上表演舞蹈。 (Tāmen zài wǔtái shàng biǎoyǎn wǔdǎo.) — Они танцуют на сцене.',
            '这位演员表演得很出色。 (Zhè wèi yǎnyuán biǎoyǎn de hěn chūsè.) — Этот актёр играет превосходно.',
            '音乐会今晚表演。 (Yīnyuè huì jīn wǎn biǎoyǎn.) — Концерт состоится сегодня вечером.'
        ]
    },
    3: {
        glyph: '演奏',
        pinyin: 'yǎnzòu',
        translation: 'исполнять (музыку на инструменте)',
        examples: [
            '他演奏钢琴。 (Tā yǎnzòu gāngqín.) — Он играет на пианино.',
            '这位小提琴家演奏得非常动情。 (Zhè wèi xiǎotíqín jiā yǎnzòu de fēicháng dòngqíng.) — Этот скрипач играет очень трогательно.',
            '乐团正在演奏交响曲。 (Yuètuán zhèngzài yǎnzòu jiāoxiǎngqǔ.) — Оркестр исполняет симфонию.'
        ]
    },
    4: {
        glyph: '歌唱',
        pinyin: 'gēchàng',
        translation: 'петь (официально/художественно)',
        examples: [
            '她用歌声歌唱爱情。 (Tā yòng gēshēng gēchàng àiqíng.) — Она поёт о любви.',
            '合唱团在歌唱国歌。 (Héchàngtuán zài gēchàng guógē.) — Хор исполняет гимн.',
            '民歌歌唱劳动和生活。 (Míngē gēchàng láodòng hé shēnghuó.) — Народные песни воспевают труд и жизнь.'
        ]
    },
    5: {
        glyph: '欣赏',
        pinyin: 'xīnshǎng',
        translation: 'наслаждаться (искусством, музыкой)',
        examples: [
            '我们在美术馆欣赏名画。 (Wǒmen zài měishùguǎn xīnshǎng míng huà.) — Мы наслаждаемся шедеврами в музее.',
            '他懂得欣赏古典音乐。 (Tā dǒngde xīnshǎng gǔdiǎn yīnyuè.) — Он умеет ценить классическую музыку.',
            '学会欣赏不同的文化。 (Xuéhuì xīnshǎng bùtóng de wénhuà.) — Научись ценить разные культуры.'
        ]
    },
    6: {
        glyph: '展览',
        pinyin: 'zhǎnlǎn',
        translation: 'выставлять (произведения)',
        examples: [
            '美术馆正在展览新作品。 (Měishùguǎn zhèngzài zhǎnlǎn xīn zuòpǐn.) — В музее проходит выставка новых работ.',
            '他的画被展览在画廊。 (Tā de huà bèi zhǎnlǎn zài huàláng.) — Его картины выставлены в галерее.',
            '国际摄影展每年展览一次。 (Guójì shèyǐng zhǎn měi nián zhǎnlǎn yī cì.) — Международная фотовыставка проводится ежегодно.'
        ]
    },
    7: {
        glyph: '拍摄',
        pinyin: 'pāishè',
        translation: 'снимать (фильм, фото)',
        examples: [
            '导演在拍摄新电影。 (Dǎoyǎn zài pāishè xīn diànyǐng.) — Режиссёр снимает новый фильм.',
            '她喜欢拍摄风景。 (Tā xǐhuan pāishè fēngjǐng.) — Она любит фотографировать пейзажи.',
            '这部纪录片拍摄了三年。 (Zhè bù jìlùpiàn pāishè le sān nián.) — Этот документальный фильм снимали три года.'
        ]
    },
    8: {
        glyph: '导演',
        pinyin: 'dǎoyǎn',
        translation: 'ставить (спектакль, фильм)',
        examples: [
            '张艺谋导演了《英雄》。 (Zhāng Yìmóu dǎoyǎn le 《Yīngxióng》.) — Чжан Имоу поставил фильм «Герой».',
            '她第一次导演话剧。 (Tā dì yī cì dǎoyǎn huàjù.) — Она впервые ставит театральную пьесу.',
            '这位导演很有才华。 (Zhè wèi dǎoyǎn hěn yǒu cáihuá.) — Этот режиссёр очень талантлив.'
        ]
    },
    9: {
        glyph: '演出',
        pinyin: 'yǎnchū',
        translation: 'давать представление',
        examples: [
            '京剧团今晚演出。 (Jīngjù tuán jīn wǎn yǎnchū.) — Сегодня вечером Пекинская опера даёт представление.',
            '他们在国家大剧院演出。 (Tāmen zài Guójiā Dà Jùyuàn yǎnchū.) — Они выступают в Национальном центре исполнительских искусств.',
            '演出很成功。 (Yǎnchū hěn chénggōng.) — Представление прошло успешно.'
        ]
    },
    10: {
        glyph: '传承',
        pinyin: 'chuánchéng',
        translation: 'передавать (традицию, культуру)',
        examples: [
            '我们要传承中华文化。 (Wǒmen yào chuánchéng Zhōnghuá wénhuà.) — Мы должны передавать китайскую культуру.',
            '非遗传承人保护传统技艺。 (Fēiyí chuánchéngrén bǎohù chuántǒng jìyì.) — Носители нематериального наследия сохраняют традиционные ремёсла.',
            '家庭是文化传承的第一课堂。 (Jiātíng shì wénhuà chuánchéng de dì yī kètáng.) — Семья — первый класс для передачи культуры.'
        ]
    },
    11: {
        glyph: '创新',
        pinyin: 'chuàngxīn',
        translation: 'вносить новаторство (в искусство)',
        examples: [
            '他在传统书法中创新。 (Tā zài chuántǒng shūfǎ zhōng chuàngxīn.) — Он вносит новаторство в традиционную каллиграфию.',
            '艺术需要不断创新。 (Yìshù xūyào bùduàn chuàngxīn.) — Искусству нужно постоянное обновление.',
            '这部电影在叙事上很有创新。 (Zhè bù diànyǐng zài xùshì shàng hěn yǒu chuàngxīn.) — Этот фильм очень новаторский в повествовании.'
        ]
    },
    12: {
        glyph: '改编',
        pinyin: 'gǎibiān',
        translation: 'адаптировать (книгу в фильм и т.п.)',
        examples: [
            '这部小说被改编成电影。 (Zhè bù xiǎoshuō bèi gǎibiān chéng diànyǐng.) — Этот роман экранизировали.',
            '他把京剧改编成现代舞。 (Tā bǎ Jīngjù gǎibiān chéng xiàndài wǔ.) — Он адаптировал Пекинскую оперу под современный танец.',
            '改编要尊重原著精神。 (Gǎibiān yào zūnzhòng yuánzhù jīngshén.) — При адаптации нужно уважать дух оригинала.'
        ]
    },
    13: {
        glyph: '鉴赏',
        pinyin: 'jiànshǎng',
        translation: 'анализировать и оценивать (искусство)',
        examples: [
            '这门课教学生如何鉴赏诗歌。 (Zhè mén kè jiāo xuéshēng rúhé jiànshǎng shīgē.) — На этом курсе учат, как анализировать поэзию.',
            '他有很高的艺术鉴赏力。 (Tā yǒu hěn gāo de yìshù jiànshǎng lì.) — У него отличный художественный вкус.',
            '鉴赏需要知识和经验。 (Jiànshǎng xūyào zhīshi hé jīngyàn.) — Для анализа искусства нужны знания и опыт.'
        ]
    },
    14: {
        glyph: '融合',
        pinyin: 'rónghé',
        translation: 'сливать (стили, культуры)',
        examples: [
            '这幅画融合了东西方元素。 (Zhè fú huà rónghé le dōngxīfāng yuánsù.) — Эта картина объединяет восточные и западные элементы.',
            '音乐融合了古典与现代。 (Yīnyuè rónghé le gǔdiǎn yǔ xiàndài.) — Музыка сочетает классику и современность.',
            '文化融合促进创新。 (Wénhuà rónghé cùjìn chuàngxīn.) — Слияние культур способствует новаторству.'
        ]
    },
    15: {
        glyph: '弘扬',
        pinyin: 'hóngyáng',
        translation: 'активно продвигать (культуру, традиции)',
        examples: [
            '我们要弘扬传统文化。 (Wǒmen yào hóngyáng chuántǒng wénhuà.) — Мы должны активно продвигать традиционную культуру.',
            '孔子学院弘扬中华文化。 (Kǒngzǐ Xuéyuàn hóngyáng Zhōnghuá wénhuà.) — Институты Конфуция продвигают китайскую культуру.',
            '弘扬正能量。 (Hóngyáng zhèng néngliàng.) — Пропагандировать позитив.'
        ]
    }
};

const verbsCooking: { [key: number]: DictItem } = {
    1: {
        glyph: '切',
        pinyin: 'qiē',
        translation: 'резать',
        examples: [
            '把胡萝卜切成丝。 (Bǎ húluóbo qiē chéng sī.) — Нарежь морковь соломкой.',
            '切菜时小心手指。 (Qiē cài shí xiǎoxīn shǒuzhǐ.) — Осторожно с пальцами при нарезке.',
            '他刀工很好，切得很快。 (Tā dāogōng hěn hǎo, qiē de hěn kuài.) — Он отлично владеет ножом и режет быстро.'
        ]
    },
    2: {
        glyph: '剁',
        pinyin: 'duò',
        translation: 'рубить (мелко, топориком)',
        examples: [
            '把肉剁成肉馅。 (Bǎ ròu duò chéng ròu xiàn.) — Измельчи мясо в фарш.',
            '用刀背剁蒜。 (Yòng dāo bèi duò suàn.) — Раздави чеснок плоской стороной ножа.',
            '剁椒是湖南菜的重要调料。 (Duòjiāo shì Húnán cài de zhòngyào tiáoliào.) — Рублёный перец — важная приправа в хунаньской кухне.'
        ]
    },
    3: {
        glyph: '削',
        pinyin: 'xuē',
        translation: 'чистить (овощи, фрукты)',
        examples: [
            '削苹果皮。 (Xuē píngguǒ pí.) — Почисти кожуру яблока.',
            '用削皮器削土豆。 (Yòng xuēpí qì xuē tǔdòu.) — Почисти картошку чисткой.',
            '别削太多，浪费！ (Bié xuē tài duō, làngfèi!) — Не чисти слишком много — это расточительство!'
        ]
    },
    4: {
        glyph: '刨',
        pinyin: 'bào',
        translation: 'стругать / снимать стружку (овощи)',
        examples: [
            '用刨丝器刨黄瓜。 (Yòng bàosī qì bào huángguā.) — Натри огурец на тёрке.',
            '刨成薄片。 (Bào chéng báo piàn.) — Сделай тонкие пластины.',
            '刨冰很好吃。 (Bàobīng hěn hǎochī.) — Лёд, стружка — очень вкусно.'
        ]
    },
    5: {
        glyph: '搅',
        pinyin: 'jiǎo',
        translation: 'перемешивать (вручную, ложкой)',
        examples: [
            '慢慢搅，别溅出来。 (Mànmàn jiǎo, bié jiàn chūlái.) — Медленно мешай, не расплёскивай.',
            '搅匀蛋液。 (Jiǎo yún dànyè.) — Хорошо перемешай яичную смесь.',
            '用筷子搅面条。 (Yòng kuàizi jiǎo miàntiáo.) — Перемешивай лапшу палочками.'
        ]
    },
    6: {
        glyph: '拌',
        pinyin: 'bàn',
        translation: 'мешать (ингредиенты вместе)',
        examples: [
            '拌沙拉。 (Bàn shālā.) — Заправь салат.',
            '把调料拌入肉馅。 (Bǎ tiáoliào bàn rù ròu xiàn.) — Добавь приправы в фарш и перемешай.',
            '凉拌黄瓜很开胃。 (Liángbàn huángguā hěn kāiwèi.) — Холодная закуска из огурца отлично возбуждает аппетит.'
        ]
    },
    7: {
        glyph: '腌',
        pinyin: 'yān',
        translation: 'мариновать / солить',
        examples: [
            '用盐腌肉。 (Yòng yán yān ròn.) — Засоли мясо солью.',
            '腌一晚上入味。 (Yān yī wǎnshang rù wèi.) — Замаринуй на ночь, чтобы пропиталось.',
            '四川泡菜是腌制的。 (Sìchuān pàocài shì yānzhì de.) — Сычуаньская квашеная капуста — маринованная.'
        ]
    },
    8: {
        glyph: '焯',
        pinyin: 'chāo',
        translation: 'бланшировать (опускать в кипяток)',
        examples: [
            '先把菠菜焯一下。 (Xiān bǎ bōcài chāo yīxià.) — Сначала бланшируй шпинат.',
            '焯水去腥味。 (Chāo shuǐ qù xīng wèi.) — Бланширование убирает запах сырости.',
            '焯完过冷水。 (Chāo wán guò lěng shuǐ.) — После бланширования обдай холодной водой.'
        ]
    },
    9: {
        glyph: '炸',
        pinyin: 'zhá',
        translation: 'жарить во фритюре',
        examples: [
            '炸鸡腿。 (Zhá jītuǐ.) — Жарь куриные ножки во фритюре.',
            '油温要控制好，别炸糊了。 (Yóuwēn yào kòngzhì hǎo, bié zhá hú le.) — Следи за температурой масла, не сожги.',
            '天妇罗是日式炸物。 (Tiānfùluó shì Rìshì zhá wù.) — Тэмпура — японская фритюрная еда.'
        ]
    },
    10: {
        glyph: '煎',
        pinyin: 'jiān',
        translation: 'жарить на сковороде (с малым количеством масла)',
        examples: [
            '煎蛋。 (Jiān dàn.) — Жарь яичницу.',
            '小火慢煎鱼。 (Xiǎo huǒ màn jiān yú.) — Жарь рыбу на медленном огне.',
            '煎饼果子是北方早餐。 (Jiānbǐng guǒzi shì běifāng zǎocān.) — Цзяньбингоцзы — завтрак на севере Китая.'
        ]
    },
    11: {
        glyph: '炖',
        pinyin: 'dùn',
        translation: 'томить / тушить (долго, на слабом огне)',
        examples: [
            '炖牛肉两小时。 (Dùn niúròu liǎng xiǎoshí.) — Томи говядину два часа.',
            '砂锅炖汤最香。 (Shāguō dùn tāng zuì xiāng.) — Суп, томлёный в глиняном горшке, самый ароматный.',
            '小火慢炖。 (Xiǎo huǒ màn dùn.) — Томи на медленном огне.'
        ]
    },
    12: {
        glyph: '焖',
        pinyin: 'mèn',
        translation: 'тушить под крышкой',
        examples: [
            '焖米饭。 (Mèn mǐfàn.) — Готовь рис под крышкой.',
            '红烧肉要焖40分钟。 (Hóngshāo ròu yào mèn 40 fēnzhōng.) — Мясу по-шанхайски нужно тушиться 40 минут.',
            '焖的时候别开盖！ (Mèn de shíhou bié kāi gài!) — Не открывай крышку во время тушения!'
        ]
    },
    13: {
        glyph: '熏',
        pinyin: 'xūn',
        translation: 'коптить',
        examples: [
            '熏肉。 (Xūn ròu.) — Копти мясо.',
            '湖南腊肉是熏制的。 (Húnán làròu shì xūnzhì de.) — Хунаньская вяленая свинина — копчёная.',
            '用茶叶熏鸭。 (Yòng cháyè xūn yā.) — Копти утку чайными листьями.'
        ]
    },
    14: {
        glyph: '卤',
        pinyin: 'lǔ',
        translation: 'варить в ароматном рассоле',
        examples: [
            '卤鸡蛋。 (Lǔ jīdàn.) — Свари яйца в специальном бульоне.',
            '卤味是街头小吃。 (Lǔwèi shì jiētóu xiǎochī.) — Лювэй — уличная закуска.',
            '卤汁可以重复使用。 (Lǔ zhī kěyǐ chóngfù shǐyòng.) — Рассол можно использовать повторно.'
        ]
    },
    15: {
        glyph: '酿',
        pinyin: 'niàng',
        translation: 'фаршировать / наполнять (и готовить)',
        examples: [
            '酿青椒。 (Niàng qīngjiāo.) — Фаршируй зелёный перец.',
            '酿豆腐。 (Niàng dòufu.) — Начини тофу фаршем.',
            '客家酿豆腐很有名。 (Kèjiā niàng dòufu hěn yǒumíng.) — Фаршированный тофу хакка — знаменитое блюдо.'
        ]
    },
    16: {
        glyph: '勾芡',
        pinyin: 'gōuqiàn',
        translation: 'загущать соус крахмалом',
        examples: [
            '最后勾芡。 (Zuìhòu gōuqiàn.) — В самом конце загусти соус.',
            '勾芡让汤汁浓稠。 (Gōuqiàn ràng tāngzhī nóngchóu.) — Загущение делает соус густым.',
            '淀粉加水调匀再勾芡。 (Diànfěn jiā shuǐ tiáoyún zài gōuqiàn.) — Разведи крахмал в воде перед добавлением.'
        ]
    },
    17: {
        glyph: '摆盘',
        pinyin: 'bǎipán',
        translation: 'укладывать блюдо на тарелку (декоративно)',
        examples: [
            '摆盘要美观。 (Bǎipán yào měiguān.) — Подача должна быть красивой.',
            '厨师精心摆盘。 (Chúshī jīngxīn bǎipán.) — Повар тщательно оформил подачу.',
            '摆盘是烹饪的艺术。 (Bǎipán shì pēngrèn de yìshù.) — Оформление — это часть кулинарного искусства.'
        ]
    }
};

const verbsMetalworking: { [key: number]: DictItem } = {
    1: {
        glyph: '铸造',
        pinyin: 'zhùzào',
        translation: 'лить (металл)',
        examples: [
            '用模具铸造零件。 (Yòng mújù zhùzào língjiàn.) — Отливай детали с помощью формы.',
            '古代用青铜铸造鼎。 (Gǔdài yòng qīngtóng zhùzào dǐng.) — В древности бронзовые котлы отливали из бронзы.',
            '铸造厂生产发动机缸体。 (Zhùzào chǎng shēngchǎn fādòngjī gāngtǐ.) — Литейный завод производит блоки цилиндров.'
        ]
    },
    2: {
        glyph: '锻造',
        pinyin: 'duànzào',
        translation: 'ковать',
        examples: [
            '热锻提高金属强度。 (Rè duàn tígāo jīnshǔ qiángdù.) — Горячая ковка повышает прочность металла.',
            '锻造曲轴。 (Duànzào qūzhóu.) — Куй коленчатый вал.',
            '传统铁匠用锤子锻造。 (Chuántǒng tiějiàng yòng chuízi duànzào.) — Традиционный кузнец куёт молотом.'
        ]
    },
    3: {
        glyph: '焊接',
        pinyin: 'hànjiē',
        translation: 'сваривать',
        examples: [
            '用电弧焊焊接钢板。 (Yòng diànhú hàn hànjiē gāngbǎn.) — Сваривай стальные листы дуговой сваркой.',
            '焊接前要清洁表面。 (Hànjiē qián yào qīngjié biǎomiàn.) — Перед сваркой очисти поверхность.',
            '机器人自动焊接。 (Jīqìrén zìdòng hànjiē.) — Робот автоматически варит швы.'
        ]
    },
    4: {
        glyph: '切割',
        pinyin: 'qiēgē',
        translation: 'резать (металл, промышленно)',
        examples: [
            '用激光切割金属。 (Yòng jīguāng qiēgē jīnshǔ.) — Режь металл лазером.',
            '等离子切割速度快。 (Děnglízǐ qiēgē sùdù kuài.) — Плазменная резка — быстрая.',
            '切割精度很重要。 (Qiēgē jīngdù hěn zhòngyào.) — Точность резки очень важна.'
        ]
    },
    5: {
        glyph: '打磨',
        pinyin: 'dǎmó',
        translation: 'шлифовать / полировать',
        examples: [
            '用砂纸打磨表面。 (Yòng shāzhǐ dǎmó biǎomiàn.) — Шлифуй поверхность наждачной бумагой.',
            '打磨后金属发亮。 (Dǎmó hòu jīnshǔ fāliàng.) — После шлифовки металл блестит.',
            '精密零件需要精细打磨。 (Jīngmì língjiàn xūyào jīngxì dǎmó.) — Прецизионные детали требуют тщательной полировки.'
        ]
    },
    6: {
        glyph: '铣削',
        pinyin: 'xǐ xuē',
        translation: 'фрезеровать',
        examples: [
            '用数控铣床铣削零件。 (Yòng shùkòng xǐ chuáng xǐ xuē língjiàn.) — Фрезеруй детали на станке с ЧПУ.',
            '铣削加工复杂曲面。 (Xǐ xuē jiāgōng fùzá qūmiàn.) — Фрезеровка обрабатывает сложные поверхности.',
            '铣削精度可达0.01毫米。 (Xǐ xuē jīngdù kě dá 0.01 háomǐ.) — Точность фрезеровки — до 0.01 мм.'
        ]
    },
    7: {
        glyph: '车削',
        pinyin: 'chē xuē',
        translation: 'точить (на токарном станке)',
        examples: [
            '用车床车削轴。 (Yòng chēchuáng chē xuē zhóu.) — Точи вал на токарном станке.',
            '车削圆柱形工件。 (Chē xuē yuánzhù xíng gōngjiàn.) — Обрабатывай цилиндрические заготовки.',
            '车削是传统机械加工方法。 (Chē xuē shì chuántǒng jīxiè jiāgōng fāngfǎ.) — Токарная обработка — традиционный метод механической обработки.'
        ]
    },
    8: {
        glyph: '冲压',
        pinyin: 'chōngyā',
        translation: 'прессовать / штамповать',
        examples: [
            '用冲床冲压金属板。 (Yòng chōngchuáng chōngyā jīnshǔ bǎn.) — Штампуй металлические листы на прессе.',
            '汽车外壳是冲压成型的。 (Qìchē wàiké shì chōngyā chéngxíng de.) — Кузов автомобиля формуется штамповкой.',
            '冲压速度快，适合批量生产。 (Chōngyā sùdù kuài, shìhé pīliàng shēngchǎn.) — Штамповка быстрая, подходит для массового производства.'
        ]
    },
    9: {
        glyph: '热处理',
        pinyin: 'rè chǔlǐ',
        translation: 'подвергать термообработке',
        examples: [
            '淬火是热处理的一种。 (Cuìhuǒ shì rè chǔlǐ de yī zhǒng.) — Закалка — вид термообработки.',
            '热处理提高硬度。 (Rè chǔlǐ tígāo yìngdù.) — Термообработка повышает твёрдость.',
            '零件需热处理后使用。 (Língjiàn xū rè chǔlǐ hòu shǐyòng.) — Детали нужно подвергнуть термообработке перед использованием.'
        ]
    },
    10: {
        glyph: '电镀',
        pinyin: 'diàndù',
        translation: 'наносить гальваническое покрытие',
        examples: [
            '电镀锌防锈。 (Diàndù xīn fángxiù.) — Оцинковка защищает от ржавчины.',
            '这个零件需要电镀铬。 (Zhège língjiàn xūyào diàndù gè.) — Эту деталь нужно хромировать.',
            '电镀提高耐腐蚀性。 (Diàndù tígāo nài fǔshí xìng.) — Гальваника повышает коррозионную стойкость.'
        ]
    },
    11: {
        glyph: '抛光',
        pinyin: 'pāoguāng',
        translation: 'полировать до зеркального блеска',
        examples: [
            '用抛光机抛光不锈钢。 (Yòng pāoguāng jī pāoguāng bùxiùgāng.) — Полируй нержавейку полировочной машиной.',
            '抛光后表面如镜。 (Pāoguāng hòu biǎomiàn rú jìng.) — После полировки поверхность — как зеркало.',
            '珠宝需要精细抛光。 (Zhūbǎo xūyào jīngxì pāoguāng.) — Ювелирные изделия требуют тонкой полировки.'
        ]
    },
    12: {
        glyph: '钻孔',
        pinyin: 'zuànkǒng',
        translation: 'сверлить отверстия',
        examples: [
            '在钢板上钻孔。 (Zài gāngbǎn shàng zuànkǒng.) — Сверли отверстия в стальном листе.',
            '数控钻孔精度高。 (Shùkòng zuànkǒng jīngdù gāo.) — Сверление с ЧПУ — высокоточное.',
            '钻孔前要划线定位。 (Zuànkǒng qián yào huà xiàn dìngwèi.) — Перед сверлением наметь линию для позиционирования.'
        ]
    },
    13: {
        glyph: '攻丝',
        pinyin: 'gōngsī',
        translation: 'нарезать внутреннюю резьбу',
        examples: [
            '用丝锥攻丝。 (Yòng sīzhuī gōngsī.) — Нарежь резьбу метчиком.',
            '攻丝前先钻底孔。 (Gōngsī qián xiān zuān dǐ kǒng.) — Перед нарезкой резьбы просверли отверстие.',
            '攻丝要加冷却液。 (Gōngsī yào jiā lěngquè yè.) — При нарезке резьбы используй охлаждающую жидкость.'
        ]
    },
    14: {
        glyph: '套丝',
        pinyin: 'tàosī',
        translation: 'нарезать наружную резьбу',
        examples: [
            '用板牙套丝。 (Yòng bǎnyá tàosī.) — Нарежь резьбу плашкой.',
            '钢管需要套丝连接。 (Gāngguǎn xūyào tàosī liánjiē.) — Стальные трубы соединяются через наружную резьбу.',
            '套丝要均匀用力。 (Tàosī yào jūnyún yònglì.) — При нарезке резьбы дави равномерно.'
        ]
    },
    15: {
        glyph: '校直',
        pinyin: 'jiàozhí',
        translation: 'выпрямлять (металлический прут, вал)',
        examples: [
            '用校直机校直轴。 (Yòng jiàozhí jī jiàozhí zhóu.) — Выпрями вал на правильном станке.',
            '校直后跳动值合格。 (Jiàozhí hòu tiàodòng zhí hégé.) — После выпрямления биение в допуске.',
            '弯曲的钢筋需要校直。 (Wānqū de gāngjīn xūyào jiàozhí.) — Искривлённую арматуру нужно выпрямить.'
        ]
    }
};

const verbsSurveyingCartography: { [key: number]: DictItem } = {
    1: {
        glyph: '测绘',
        pinyin: 'cèhuì',
        translation: 'производить геодезическую съёмку и составлять карты',
        examples: [
            '工程师正在测绘地形。 (Gōngchéngshī zhèngzài cèhuì dìxíng.) — Инженеры сейчас снимают рельеф местности.',
            '国家测绘局负责全国测绘。 (Guójiā Cèhuì Jú fùzé quán guó cèhuì.) — Главное управление геодезии и картографии отвечает за всю страну.',
            '无人机用于快速测绘。 (Wúrén jī yòngyú kuàisù cèhuì.) — Дроны используются для быстрой съёмки.'
        ]
    },
    2: {
        glyph: '测量',
        pinyin: 'cèliáng',
        translation: 'измерять (расстояние, высоту, угол)',
        examples: [
            '用全站仪测量角度。 (Yòng quánzhànyí cèliáng jiǎodù.) — Измеряй углы тахеометром.',
            '测量两点间距离。 (Cèliáng liǎng diǎn jiān jùlí.) — Замерь расстояние между двумя точками.',
            '高精度测量需要校准仪器。 (Gāo jīngdù cèliáng xūyào jiàozhǔn yíqì.) — Для высокоточных измерений нужна калибровка приборов.'
        ]
    },
    3: {
        glyph: '放样',
        pinyin: 'fàng yàng',
        translation: 'переносить проектные точки на местность',
        examples: [
            '施工前要先放样。 (Shīgōng qián yào xiān fàng yàng.) — Перед строительством нужно нанести разбивку.',
            '用GPS放样桩位。 (Yòng GPS fàng yàng zhuāng wèi.) — Нанеси положение свай с помощью GPS.',
            '放样误差不能超过5毫米。 (Fàng yàng wùchā bù néng chāoguò 5 háomǐ.) — Ошибка разбивки не должна превышать 5 мм.'
        ]
    },
    4: {
        glyph: '定线',
        pinyin: 'dìng xiàn',
        translation: 'определять трассу (дороги, трубопровода)',
        examples: [
            '定线要考虑地形和成本。 (Dìng xiàn yào kǎolǜ dìxíng hé chéngběn.) — При прокладке трассы учитывай рельеф и стоимость.',
            '高速公路正在定线。 (Gāosù gōnglù zhèngzài dìng xiàn.) — Сейчас определяют трассу автомагистрали.',
            '定线后开始征地。 (Dìng xiàn hòu kāishǐ zhēng dì.) — После утверждения трассы начинают изымать землю.'
        ]
    },
    5: {
        glyph: '水准测量',
        pinyin: 'shuǐzhǔn cèliáng',
        translation: 'нивелировать (измерять превышения)',
        examples: [
            '用水准仪进行水准测量。 (Yòng shuǐzhǔnyí jìnxíng shuǐzhǔn cèliáng.) — Проводи нивелирование нивелиром.',
            '水准测量确定高程。 (Shuǐzhǔn cèliáng quèdìng gāochéng.) — Нивелирование определяет высотные отметки.',
            '每公里水准测量误差小于1мм。 (Měi gōnglǐ shuǐzhǔn cèliáng wùchā xiǎoyú 1 háomǐ.) — Ошибка нивелирования — менее 1 мм на км.'
        ]
    },
    6: {
        glyph: '导线测量',
        pinyin: 'dǎoxiàn cèliáng',
        translation: 'выполнять теодолитный ход',
        examples: [
            '在密林中做导线测量。 (Zài mìlín zhōng zuò dǎoxiàn cèliáng.) — В густом лесу выполняй теодолитный ход.',
            '导线测量用于控制点加密。 (Dǎoxiàn cèliáng yòngyú kòngzhì diǎn jiāmì.) — Теодолитные ходы используются для сгущения сети пунктов.',
            '闭合导线要平差。 (Bìhé dǎoxiàn yào píngchā.) — Замкнутый ход требует уравнивания.'
        ]
    },
    7: {
        glyph: '制图',
        pinyin: 'zhìtú',
        translation: 'составлять карты',
        examples: [
            '用GIS软件制图。 (Yòng GIS ruǎnjiàn zhìtú.) — Составляй карты в ГИС-программе.',
            '地形图比例尺1:10000。 (Dìxíng tú bǐlìchǐ 1:10000.) — Топокарта в масштабе 1:10000.',
            '制图要符合国家标准。 (Zhìtú yào fúhé guójiā biāozhǔn.) — Картография должна соответствовать национальным стандартам.'
        ]
    },
    8: {
        glyph: '数字化',
        pinyin: 'shùzì huà',
        translation: 'оцифровывать (аналоговые карты)',
        examples: [
            '将纸质地图数字化。 (Jiāng zhǐzhì dìtú shùzì huà.) — Оцифруй бумажную карту.',
            '数字化后可进行空间分析。 (Shùzì huà hòu kě jìnxíng kōngjiān fēnxī.) — После оцифровки можно делать пространственный анализ.',
            '老地图正在数字化存档。 (Lǎo dìtú zhèngzài shùzì huà cúndàng.) — Старые карты сейчас оцифровывают для архивации.'
        ]
    },
    9: {
        glyph: '校正',
        pinyin: 'jiàozhèng',
        translation: 'калибровать / корректировать данные',
        examples: [
            '校正遥感影像几何畸变。 (Jiàozhèng yáogǎn yǐngxiàng jǐhé jībiàn.) — Скорректируй геометрические искажения снимка.',
            'GPS数据需要大气校正。 (GPS shùjù xūyào dàqì jiàozhèng.) — Данные GPS требуют атмосферной коррекции.',
            '仪器每月校正一次。 (Yíqì měi yuè jiàozhèng yī cì.) — Приборы калибруют раз в месяц.'
        ]
    },
    10: {
        glyph: '配准',
        pinyin: 'pèizhǔn',
        translation: 'привязывать (карты, снимки к координатной системе)',
        examples: [
            '将卫星影像配准到地图坐标系。 (Jiāng wèixīng yǐngxiàng pèizhǔn dào dìtú zuòbiāo xì.) — Привяжи спутниковый снимок к системе координат карты.',
            '配准误差要小于1像素。 (Pèizhǔn wùchā yào xiǎoyú 1 xiàngsù.) — Ошибка привязки — менее 1 пикселя.',
            '多源数据需要统一配准。 (Duō yuán shùjù xūyào tǒngyī pèizhǔn.) — Данные из разных источников нужно привести к единой системе.'
        ]
    },
    11: {
        glyph: '解译',
        pinyin: 'jiěyì',
        translation: 'интерпретировать (снимки, данные)',
        examples: [
            '地质学家解译遥感影像。 (Dìzhì xuéjiā jiěyì yáogǎn yǐngxiàng.) — Геолог интерпретирует дистанционные снимки.',
            '自动解译还在发展中。 (Zìdòng jiěyì hái zài fāzhǎn zhōng.) — Автоматическая интерпретация всё ещё развивается.',
            '解译结果要实地验证。 (Jiěyì jiéguǒ yào shídì yànzhèng.) — Результаты интерпретации нужно проверять на местности.'
        ]
    },
    12: {
        glyph: '建模',
        pinyin: 'jiàn mó',
        translation: 'строить пространственную модель',
        examples: [
            '用激光点云建模地形。 (Yòng jīguāng diǎn yún jiàn mó dìxíng.) — Построй модель рельефа по облаку точек лазерного сканирования.',
            '三维建模用于城市规划。 (Sān wéi jiàn mó yòngyú chéngshì guīhuà.) — 3D-моделирование используется в градостроительстве.',
            '数字高程模型简称DEM。 (Shùzì gāochéng móxíng jiǎnchēng DEM.) — Цифровая модель рельефа — DEM.'
        ]
    },
    13: {
        glyph: '投影',
        pinyin: 'tóuyǐng',
        translation: 'проектировать координаты (картографическая проекция)',
        examples: [
            '中国常用高斯-克рюг投影。 (Zhōngguó chángyòng Gāosī-Kèqiú tóuyǐng.) — В Китае часто используется проекция Гаусса-Крюгера.',
            '不同投影会导致面积变形。 (Bùtóng tóuyǐng huì dǎozhì miànjī biànxíng.) — Разные проекции вызывают искажение площадей.',
            '制图前要选择合适的投影。 (Zhìtú qián yào xuǎnzé héshì de tóuyǐng.) — Перед составлением карты выбери подходящую проекцию.'
        ]
    },
    14: {
        glyph: '分幅',
        pinyin: 'fēn fú',
        translation: 'делить карту на листы',
        examples: [
            '1:50000地形图按经纬度分幅。 (1:50000 dìxíng tú àn jīngwěidù fēn fú.) — Топокарты 1:50000 делятся на листы по градусной сетке.',
            '分幅编号有国家标准。 (Fēn fú biānhào yǒu guójiā biāozhǔn.) — Нумерация листов — по национальному стандарту.',
            '电子地图自动分幅。 (Diànzǐ dìtú zìdòng fēn fú.) — Электронные карты делятся на листы автоматически.'
        ]
    },
    15: {
        glyph: '更新',
        pinyin: 'gēngxīn',
        translation: 'обновлять картографические данные',
        examples: [
            '每年更新行政区划界线。 (Měi nián gēngxīn xíngzhèng qūhuà jièxiàn.) — Ежегодно обновляй границы административных единиц.',
            '遥感技术加速地图更新。 (Yáogǎn jìshù jiāsù dìtú gēngxīn.) — Дистанционное зондирование ускоряет обновление карт.',
            '过时的地图会导致导航错误。 (Guòshí de dìtú huì dǎozhì dǎoháng cuòwù.) — Устаревшие карты вызывают ошибки навигации.'
        ]
    }
};

const verbsAgriculture: { [key: number]: DictItem } = {
    1: {
        glyph: '耕',
        pinyin: 'gēng',
        translation: 'вспахивать (землю)',
        examples: [
            '春天要耕地。 (Chūntiān yào gēng dì.) — Весной нужно вспахать землю.',
            '用拖拉机耕地。 (Yòng tuōlājī gēng dì.) — Пашут землю трактором.',
            '休耕地可以恢复地力。 (Xiūgēng dì kěyǐ huīfù dìlì.) — Парование восстанавливает плодородие почвы.'
        ]
    },
    2: {
        glyph: '耙',
        pinyin: 'bà',
        translation: 'бороно́вать / выравнивать почву',
        examples: [
            '耕地后要耙地。 (Gēng dì hòu yào bà dì.) — После пахоты нужно бороновать.',
            '用耙子耙平土地。 (Yòng bàzi bà píng tǔdì.) — Разровняй землю граблями.',
            '耙地能保墒。 (Bà dì néng bǎo shāng.) — Боронование сохраняет влагу в почве.'
        ]
    },
    3: {
        glyph: '播种',
        pinyin: 'bōzhǒng',
        translation: 'сеять семена',
        examples: [
            '清明前后，种瓜点豆。 (Qīngmíng qiánhòu, zhòng guā diǎn dòu.) — До и после Цинмина — сей тыквы и бобы.',
            '用播种机播种小麦。 (Yòng bōzhǒng jī bōzhǒng xiǎomài.) — Сей пшеницу сеялкой.',
            '手工播种适合小菜园。 (Shǒugōng bōzhǒng shìhé xiǎo càiyuán.) — Ручной посев подходит для небольшого огорода.'
        ]
    },
    4: {
        glyph: '移栽',
        pinyin: 'yí zāi',
        translation: 'пересаживать рассаду',
        examples: [
            '番茄苗要移栽到地里。 (Fānqié miáo yào yí zāi dào dì lǐ.) — Рассаду помидоров нужно пересадить в грядку.',
            '移栽时要带土坨。 (Yí zāi shí yào dài tǔ tuó.) — При пересадке сохраняй земляной ком.',
            '水稻秧苗需要移栽。 (Shuǐdào yāngmiáo xūyào yí zāi.) — Саженцы риса требуют пересадки.'
        ]
    },
    5: {
        glyph: '浇水',
        pinyin: 'jiāo shuǐ',
        translation: 'поливать',
        examples: [
            '每天早晚浇水。 (Měitiān zǎowǎn jiāo shuǐ.) — Поливай утром и вечером.',
            '滴灌系统自动浇水。 (Dīguàn xìtǒng zìdòng jiāo shuǐ.) — Система капельного полива поливает автоматически.',
            '别浇太多水，会烂根。 (Bié jiāo tài duō shuǐ, huì làn gēn.) — Не поливай слишком много — корни сгниют.'
        ]
    },
    6: {
        glyph: '施肥',
        pinyin: 'shī féi',
        translation: 'вносить удобрения',
        examples: [
            '种菜前要施肥。 (Zhòng cài qián yào shī féi.) — Перед посадкой овощей внеси удобрения.',
            '有机肥更环保。 (Yǒujī féi gèng huánbǎo.) — Органические удобрения экологичнее.',
            '化肥要按说明施肥。 (Huàféi yào àn shuōmíng shī féi.) — Минеральные удобрения вноси строго по инструкции.'
        ]
    },
    7: {
        glyph: '除草',
        pinyin: 'chú cǎo',
        translation: 'пропалывать сорняки',
        examples: [
            '雨后要赶紧除草。 (Yǔ hòu yào gǎnjǐn chú cǎo.) — После дождя срочно прополи сорняки.',
            '用除草剂除草。 (Yòng chú cǎo jì chú cǎo.) — Используй гербициды для борьбы с сорняками.',
            '手工除草不伤作物。 (Shǒugōng chú cǎo bù shāng zuòwù.) — Ручная прополка не вредит культуре.'
        ]
    },
    8: {
        glyph: '松土',
        pinyin: 'sōng tǔ',
        translation: 'рыхлить почву',
        examples: [
            '浇水后要松土。 (Jiāo shuǐ hòu yào sōng tǔ.) — После полива разрыхли почву.',
            '用锄头松土。 (Yòng chútóu sōng tǔ.) — Рыхли землю мотыгой.',
            '松土能增加透气性。 (Sōng tǔ néng zēngjiā tòuqì xìng.) — Рыхление улучшает воздухопроницаемость почвы.'
        ]
    },
    9: {
        glyph: '间苗',
        pinyin: 'jiàn miáo',
        translation: 'прореживать всходы',
        examples: [
            '萝卜苗太密要间苗。 (Luóbo miáo tài mì yào jiàn miáo.) — Если всходы редиса слишком густые — прореди их.',
            '间苗让作物长得更好。 (Jiàn miáo ràng zuòwù zhǎng de gèng hǎo.) — Прореживание помогает растениям лучше расти.',
            '间下的苗可以吃。 (Jiàn xià de miáo kěyǐ chī.) — Выдернутую рассаду можно съесть.'
        ]
    },
    10: {
        glyph: '搭架',
        pinyin: 'dā jià',
        translation: 'устанавливать опоры (для лиан, помидоров)',
        examples: [
            '黄瓜要搭架。 (Huángguā yào dā jià.) — Огурцам нужны шпалеры.',
            '搭架能让植物通风透光。 (Dā jià néng ràng zhíwù tōngfēng tòu guāng.) — Опоры улучшают проветривание и освещение.',
            '豆角爬满架子。 (Dòujiǎo pá mǎn jiàzi.) — Бобы обвивают всю шпалеру.'
        ]
    },
    11: {
        glyph: '授粉',
        pinyin: 'shòu fěn',
        translation: 'опылять',
        examples: [
            '蜜蜂帮助作物授粉。 (Mìfēng bāngzhù zuòwù shòu fěn.) — Пчёлы помогают растениям опыляться.',
            '大棚里要人工授粉。 (Dàpéng lǐ yào réngōng shòu fěn.) — В теплицах требуется ручное опыление.',
            '授粉不良会导致落花。 (Shòu fěn bùliáng huì dǎozhì luò huā.) — Плохое опыление вызывает опадение цветков.'
        ]
    },
    12: {
        glyph: '防治',
        pinyin: 'fángzhì',
        translation: 'предупреждать и бороться (с вредителями, болезнями)',
        examples: [
            '要提前防治病虫害。 (Yào tíqián fángzhì bìngchónghài.) — Нужно заранее принимать меры против болезней и вредителей.',
            '生物防治更安全。 (Shēngwù fángzhì gèng ānquán.) — Биологическая защита безопаснее.',
            '发现虫害立即防治。 (Fāxiàn chóng hài lìjí fángzhì.) — При обнаружении вредителей немедленно обработай.'
        ]
    },
    13: {
        glyph: '收割',
        pinyin: 'shōu gē',
        translation: 'жать / убирать урожай (зерновые)',
        examples: [
            '麦子熟了，该收割了。 (Màizi shú le, gāi shōu gē le.) — Пшеница созрела — пора жать.',
            '联合收割机一天收百亩。 (Liánhé shōugējī yī tiān shōu bǎi mǔ.) — Комбайн убирает сто му в день.',
            '手工收割很辛苦。 (Shǒugōng shōu gē hěn xīnkǔ.) — Ручная уборка — тяжёлый труд.'
        ]
    },
    14: {
        glyph: '采摘',
        pinyin: 'cǎi zhāi',
        translation: 'собирать (фрукты, овощи, чай)',
        examples: [
            '清晨采摘茶叶最新鲜。 (Qīngchén cǎi zhāi cháyè zuì xīnxiān.) — Чай, собранный утром, самый свежий.',
            '草莓要轻摘轻放。 (Cǎoméi yào qīng zhāi qīng fàng.) — Клубнику собирай и клади аккуратно.',
            '果园开放采摘。 (Guǒyuán kāifàng cǎi zhāi.) — В саду открыта «самоуловка» фруктов.'
        ]
    },
    15: {
        glyph: '晾晒',
        pinyin: 'liàngshài',
        translation: 'сушить на солнце',
        examples: [
            '收割后要晾晒稻谷。 (Shōu gē hòu yào liàngshài dàogǔ.) — После уборки рис нужно просушить на солнце.',
            '晾晒干菜过冬。 (Liàngshài gān cài guòdōng.) — Суши овощи на зиму.',
            '水泥地不适合晾晒粮食。 (Shuǐní dì bú shìhé liàngshài liángshí.) — Бетонная площадка не подходит для сушки зерна.'
        ]
    },
    16: {
        glyph: '脱粒',
        pinyin: 'tuō lì',
        translation: 'обмолачивать (зерно)',
        examples: [
            '用脱粒机脱粒水稻。 (Yòng tuōlì jī tuō lì shuǐdào.) — Обмолоти рис молотилкой.',
            '手工脱粒效率低。 (Shǒugōng tuō lì xiàolǜ dī.) — Ручной обмолот — низкая производительность.',
            '脱粒后要扬场去秕。 (Tuō lì hòu yào yáng chǎng qù bǐ.) — После обмолота провей зерно, чтобы отделить мякину.'
        ]
    },
    17: {
        glyph: '储藏',
        pinyin: 'chǔcáng',
        translation: 'хранить (урожай, семена)',
        examples: [
            '土豆要放在阴凉处储藏。 (Tǔdòu yào fàng zài yīnliáng chù chǔcáng.) — Картофель храни в прохладном месте.',
            '粮仓储藏万吨小麦。 (Liángcāng chǔcáng wàn dūn xiǎomài.) — Элеватор хранит десятки тысяч тонн пшеницы.',
            '种子储藏要防潮防鼠。 (Zhǒngzi chǔcáng yào fáng cháo fáng shǔ.) — Семена нужно хранить в сухом месте, защищая от грызунов.'
        ]
    },
    18: {
        glyph: '轮作',
        pinyin: 'lún zuò',
        translation: 'вводить севооборот',
        examples: [
            '豆类和谷物轮作能养地。 (Dòulèi hé gǔwù lún zuò néng yǎng dì.) — Чередование бобовых и злаков улучшает почву.',
            '连作会导致病害。 (Lián zuò huì dǎozhì bìnghài.) — Монокультура вызывает болезни.',
            '科学轮作提高产量。 (Kēxué lún zuò tígāo chǎnliàng.) — Научный севооборот повышает урожайность.'
        ]
    },
    19: {
        glyph: '灌溉',
        pinyin: 'guàngài',
        translation: 'оросить (системно, промышленно)',
        examples: [
            '新疆靠天山雪水灌溉。 (Xīnjiāng kào Tiānshān xuě shuǐ guàngài.) — Синьцзян орошается талыми водами Тянь-Шаня.',
            '滴灌比漫灌节水70%。 (Dīguàn bǐ màn guàn jié shuǐ 70%.) — Капельный полив экономит 70% воды по сравнению с затоплением.',
            '智能灌溉系统自动控制。 (Zhìnéng guàngài xìtǒng zìdòng kòngzhì.) — Умная система орошения работает автоматически.'
        ]
    },
    20: {
        glyph: '育种',
        pinyin: 'yù zhǒng',
        translation: 'выводить новые сорта',
        examples: [
            '袁隆平育种杂交水稻。 (Yuán Lóngpíng yù zhǒng zájiāo shuǐdào.) — Юань Лунпин вывел гибридный рис.',
            '现代育种用基因技术。 (Xiàndài yù zhǒng yòng jīyīn jìshù.) — Современная селекция использует генную инженерию.',
            '育种需要多年试验。 (Yù zhǒng xūyào duō nián shìyàn.) — Выведение сорта требует многолетних испытаний.'
        ]
    }
};

const verbsPaintingArt: { [key: number]: DictItem } = {
    1: {
        glyph: '画',
        pinyin: 'huà',
        translation: 'рисовать / писать картину',
        examples: [
            '他在画一幅山水画。 (Tā zài huà yī fú shānshuǐ huà.) — Он пишет пейзаж в стиле шаньшуй.',
            '列宾画了《伏尔加河上的纤夫》。 (Lièbīn huà le 《Fú\'ěrjiā Hé shàng de Qiànfū》.) — Репин написал «Бурлаков на Волге».',
            '她用数位板画插画。 (Tā yòng shùwèi bǎn huà chāhuà.) — Она рисует иллюстрации на графическом планшете.'
        ]
    },
    2: {
        glyph: '绘',
        pinyin: 'huì',
        translation: 'создавать изображение (офиц., литературно)',
        examples: [
            '这幅画绘出了江南春色。 (Zhè fú huà huì chū le Jiāngnán chūnsè.) — Эта картина передаёт весну в Цзяннани.',
            '宫廷画师为皇帝绘像。 (Gōngtíng huàshī wèi huángdì huì xiàng.) — Дворцовый художник писал портрет императора.',
            '绘本是给孩子绘的图画书。 (Huìběn shì gěi háizi huì de túhuà shū.) — Книжка с картинками — это книга, иллюстрированная для детей.'
        ]
    },
    3: {
        glyph: '描',
        pinyin: 'miáo',
        translation: 'обводить / прорисовывать контур',
        examples: [
            '先用铅笔描出草图。 (Xiān yòng qiānbǐ miáo chū cǎotú.) — Сначала обведи эскиз карандашом.',
            '描金是传统装饰技法。 (Miáojīn shì chuántǒng zhuāngshì jìfǎ.) — Роспись золотом — традиционный декоративный приём.',
            '数字绘画中用描边工具。 (Shùzì huìhuà zhōng yòng miáobiān gōngjù.) — В цифровой живописи используется инструмент обводки.'
        ]
    },
    4: {
        glyph: '涂',
        pinyin: 'tú',
        translation: 'наносить (краску, цвет)',
        examples: [
            '把颜料涂在画布上。 (Bǎ yánliào tú zài huàbù shàng.) — Нанеси краску на холст.',
            '孩子喜欢涂鸦。 (Háizi xǐhuan túyā.) — Дети любят рисовать каракули.',
            '水彩要薄涂多层。 (Shuǐcǎi yào báo tú duō céng.) — Акварель наносят тонкими слоями.'
        ]
    },
    5: {
        glyph: '染',
        pinyin: 'rǎn',
        translation: 'окрашивать (пропитывая, как в ткачестве или тушью)',
        examples: [
            '水墨画讲究墨分五色，自然渲染。 (Shuǐmò huà jiǎngjiū mò fēn wǔ sè, zìrán xuànrǎn.) — В акварельной живописи важна градация тона и естественная растушёвка.',
            '扎染是中国传统工艺。 (Zārǎn shì Zhōngguó chuántǒng gōngyì.) — Узелковая окраска — традиционное китайское ремесло.',
            '数字绘画中可用“染色”图层。 (Shùzì huìhuà zhōng kě yòng “rǎnsè” túcéng.) — В цифровой живописи можно использовать слой «заливка».'
        ]
    },
    6: {
        glyph: '皴',
        pinyin: 'cūn',
        translation: 'наносить штрихи текстуры (в китайской живописи — для гор, камней)',
        examples: [
            '宋代山水画善用斧劈皴。 (Sòngdài shānshuǐ huà shàn yòng fǔpī cūn.) — Пейзажи эпохи Сун часто использовали технику «топорного штриха».',
            '皴法表现山石质感。 (Cūn fǎ biǎoxiàn shān shí zhìgǎn.) — Приёмы цуня передают фактуру скал.',
            '初学者要练习各种皴法。 (Chūxuézhě yào liànxí gè zhǒng cūn fǎ.) — Начинающим нужно отрабатывать разные техники цуня.'
        ]
    },
    7: {
        glyph: '点',
        pinyin: 'diǎn',
        translation: 'ставить точку / мазок (в китайской живописи — для листвы, цветов)',
        examples: [
            '点苔表现草木生机。 (Diǎn tái biǎoxiàn cǎomù shēngjī.) — Точечные мазки передают жизненную силу растений.',
            '印象派用色点表现光影。 (Yìnxiàng pài yòng sè diǎn biǎoxiàn guāngyǐng.) — Импрессионисты передавали свет и тень цветными точками.',
            '数字笔刷可模拟点彩效果。 (Shùzì bǐshuā kě mónǐ diǎncǎi xiàoguǒ.) — Цифровые кисти могут имитировать пуантилизм.'
        ]
    },
    8: {
        glyph: '勾',
        pinyin: 'gōu',
        translation: 'прорисовывать линию (контуры, детали)',
        examples: [
            '先勾线再上色。 (Xiān gōu xiàn zài shàng sè.) — Сначала прорисуй контуры, потом закрась.',
            '工笔画以精细勾线著称。 (Gōngbǐ huà yǐ jīngxì gōu xiàn zhùchēng.) — Живопись гунби известна тонкой линейной проработкой.',
            '钢笔勾线清晰有力。 (Gāngbǐ gōu xiàn qīngxī yǒulì.) — Линии пером чёткие и выразительные.'
        ]
    },
    9: {
        glyph: '渲染',
        pinyin: 'xuànrǎn',
        translation: 'растушёвывать / создавать градиент',
        examples: [
            '水墨渲染出云雾效果。 (Shuǐmò xuànrǎn chū yúnwù xiàoguǒ.) — Тушевка тушью создаёт эффект тумана.',
            '油画用擦笔渲染过渡。 (Yóuhuà yòng cā bǐ xuànrǎn guòdù.) — В масляной живописи растушёвку делают растиркой.',
            'Photoshop中有渲染滤镜。 (Photoshop zhōng yǒu xuànrǎn lǜjìng.) — В Photoshop есть фильтры растушёвки.'
        ]
    },
    10: {
        glyph: '临摹',
        pinyin: 'línmó',
        translation: 'копировать с оригинала (учебная практика)',
        examples: [
            '学国画要先临摹古画。 (Xué guóhuà yào xiān línmó gǔ huà.) — Учась китайской живописи, сначала копируют старые картины.',
            '美术生临摹大卫雕像。 (Měishù shēng línmó Dàwèi diāoxiàng.) — Студенты-художники копируют статую Давида.',
            '数字绘画也可临摹大师作品。 (Shùzì huìhuà yě kě línmó dàshī zuòpǐn.) — В цифровой живописи тоже можно копировать шедевры.'
        ]
    },
    11: {
        glyph: '创作',
        pinyin: 'chuàngzuò',
        translation: 'создавать оригинальное произведение',
        examples: [
            '他正在创作一幅数字插画。 (Tā zhèngzài chuàngzuò yī fú shùzì chāhuà.) — Он создаёт цифровую иллюстрацию.',
            '列维坦创作了《金色的秋天》。 (Lièwéitǎn chuàngzuò le 《Jīnsè de Qiūtiān》.) — Левитан написал «Золотую осень».',
            '文人画强调即兴创作。 (Wénrén huà qiángdiào jíxìng chuàngzuò.) — Живопись вэньжэнь подчёркивает импровизацию.'
        ]
    },
    12: {
        glyph: '上色',
        pinyin: 'shàng sè',
        translation: 'раскрашивать / наносить цвет',
        examples: [
            '线稿完成后开始上色。 (Xiàn gǎo wánchéng hòu kāishǐ shàng sè.) — После завершения линейного рисунка начинают раскрашивать.',
            '水彩上色要从浅到深。 (Shuǐcǎi shàng sè yào cóng qiǎn dào shēn.) — В акварели краски наносят от светлого к тёмному.',
            '3D模型需要UV上色。 (3D móxíng xūyào UV shàng sè.) — 3D-модели требуют текстурирования по UV-развёртке.'
        ]
    },
    13: {
        glyph: '装裱',
        pinyin: 'zhuāngbiǎo',
        translation: 'оформлять картину (в раму или свиток)',
        examples: [
            '国画装裱成卷轴。 (Guóhuà zhuāngbiǎo chéng juànzhóu.) — Китайскую живопись оформляют в свитки.',
            '油画要装进画框。 (Yóuhuà yào zhuāng jìn huàkuàng.) — Масляную картину вставляют в раму.',
            '数字打印作品也要专业装裱。 (Shùzì dǎyìn zuòpǐn yě yào zhuānyè zhuāngbiǎo.) — Даже цифровые принты требуют профессионального оформления.'
        ]
    },
    14: {
        glyph: '扫描',
        pinyin: 'sǎomiáo',
        translation: 'сканировать (аналоговую работу для цифры)',
        examples: [
            '把水彩画扫描进电脑。 (Bǎ shuǐcǎi huà sǎomiáo jìn diànnǎo.) — Отсканируй акварель и загрузи в компьютер.',
            '高分辨率扫描保留细节。 (Gāo fēnbiàn lǜ sǎomiáo bǎoliú xìjié.) — Сканер высокого разрешения сохраняет детали.',
            '扫描后可在Photoshop中修图。 (Sǎomiáo hòu kě zài Photoshop zhōng xiū tú.) — После сканирования можно ретушировать в Photoshop.'
        ]
    },
    15: {
        glyph: '渲染',
        pinyin: 'rǎn sè', // в контексте цифровой графики
        translation: 'рендерить (в 3D или цифровой живописи)',
        examples: [
            '3D场景需要时间渲染。 (3D chǎngjǐng xūyào shíjiān rǎn sè.) — Рендеринг 3D-сцены требует времени.',
            '渲染引擎模拟光影效果。 (Rǎn sè yǐnqíng mónǐ guāngyǐng xiàoguǒ.) — Рендер-движок имитирует свет и тень.',
            '实时渲染用于游戏开发。 (Shíshí rǎn sè yòngyú yóuxì kāifā.) — Реал-тайм рендеринг используется в разработке игр.'
        ]
    }
};

const verbsMusic: { [key: number]: DictItem } = {
    1: {
        glyph: '演奏',
        pinyin: 'yǎnzòu',
        translation: 'исполнять музыку (на инструменте)',
        examples: [
            '她演奏古筝。 (Tā yǎnzòu gǔzhēng.) — Она играет на гучжэне.',
            '郎朗演奏肖邦夜曲。 (Láng Lǎng yǎnzòu Xiāobāng yèqǔ.) — Ланг Лань исполняет ноктюрны Шопена.',
            '电子音乐人用合成器演奏。 (Diànzǐ yīnyuè rén yòng héchéngqì yǎnzòu.) — Электронщики играют на синтезаторе.'
        ]
    },
    2: {
        glyph: '弹',
        pinyin: 'tán',
        translation: 'играть на клавишных или струнных (щипковых)',
        examples: [
            '他弹钢琴。 (Tā tán gāngqín.) — Он играет на пианино.',
            '她弹琵琶。 (Tā tán pípa.) — Она играет на пипа.',
            '孩子在弹电子琴。 (Háizi zài tán diànzǐ qín.) — Ребёнок играет на электронном пианино.'
        ]
    },
    3: {
        glyph: '拉',
        pinyin: 'lā',
        translation: 'играть на смычковых',
        examples: [
            '他拉小提琴。 (Tā lā xiǎotíqín.) — Он играет на скрипке.',
            '二胡是用弓拉的。 (Èrhú shì yòng gōng lā de.) — Эрху играют смычком.',
            '大提琴声音低沉。 (Dàtíqín shēngyīn dīchén.) — У виолончели глубокий тембр.'
        ]
    },
    4: {
        glyph: '吹',
        pinyin: 'chuī',
        translation: 'играть на духовых',
        examples: [
            '他吹笛子。 (Tā chuī dízi.) — Он играет на бамбуковой флейте.',
            '她吹长笛。 (Tā chuī chángdí.) — Она играет на западной флейте.',
            '唢呐声音嘹亮。 (Suǒnà shēngyīn liáoliàng.) — У суонэ яркий, пронзительный звук.'
        ]
    },
    5: {
        glyph: '打',
        pinyin: 'dǎ',
        translation: 'играть на ударных',
        examples: [
            '他打鼓。 (Tā dǎ gǔ.) — Он играет на барабанах.',
            '打堂鼓是京剧伴奏。 (Dǎ tánggǔ shì Jīngjù bànzòu.) — Удар в тамбурин — аккомпанемент в Пекинской опере.',
            '架子鼓有多个鼓面。 (Jiàzi gǔ yǒu duō gè gǔ miàn.) — На ударной установке несколько барабанов.'
        ]
    },
    6: {
        glyph: '唱',
        pinyin: 'chàng',
        translation: 'петь',
        examples: [
            '她唱民歌。 (Tā chàng míngē.) — Она поёт народные песни.',
            '帕瓦罗蒂唱《今夜无人入睡》。 (Pàwǎluótì chàng 《Jīnyè wúrén rùshuì》.) — Паваротти поёт «Nessun dorma».',
            'K歌时大家轮流唱。 (K gē shí dàjiā lúnliú chàng.) — В караоке все поют по очереди.'
        ]
    },
    7: {
        glyph: '作曲',
        pinyin: 'zuòqǔ',
        translation: 'сочинять музыку',
        examples: [
            '贝多芬晚年作曲失聪。 (Bèiduōfēn wǎnnián zuòqǔ shīcōng.) — Бетховен сочинял музыку в глухоте.',
            '他为电影作曲。 (Tā wèi diànyǐng zuòqǔ.) — Он пишет музыку к фильмам.',
            '数字音频工作站帮助作曲。 (Shùzì yīnpín gōngzuò zhàn bāngzhù zuòqǔ.) — DAW помогает в сочинении музыки.'
        ]
    },
    8: {
        glyph: '编曲',
        pinyin: 'biānqǔ',
        translation: 'аранжировать',
        examples: [
            '编曲师为歌曲配器。 (Biānqǔ shī wèi gēqǔ pèiqì.) — Арранжировщик подбирает инструменты для песни.',
            '传统民歌用现代方式编曲。 (Chuántǒng míngē yòng xiàndài fāngshì biānqǔ.) — Народную песню аранжировали в современном стиле.',
            'MIDI编曲很常见。 (MIDI biānqǔ hěn chángjiàn.) — MIDI-аранжировка — стандарт в индустрии.'
        ]
    },
    9: {
        glyph: '录音',
        pinyin: 'lùyīn',
        translation: 'записывать звук',
        examples: [
            '在录音棚录音。 (Zài lùyīn péng lùyīn.) — Записывают в студии.',
            '用手机也能录音。 (Yòng shǒujī yě néng lùyīn.) — Можно записывать даже на телефон.',
            '录音后要混音。 (Lùyīn hòu yào hùnyīn.) — После записи нужен сведение.'
        ]
    },
    10: {
        glyph: '混音',
        pinyin: 'hùnyīn',
        translation: 'сводить дорожки (аудио)',
        examples: [
            '混音师调整各轨音量。 (Hùnyīn shī tiáozhěng gè guǐ yīnliàng.) — Звукорежиссёр настраивает громкость дорожек.',
            '好的混音让音乐更清晰。 (Hǎo de hùnyīn ràng yīnyuè gèng qīngxī.) — Хорошее сведение делает музыку чёткой.',
            '数字混音用DAW软件。 (Shùzì hùnyīn yòng DAW ruǎnjiàn.) — Цифровое сведение — в DAW.'
        ]
    },
    11: {
        glyph: '母带处理',
        pinyin: 'mǔdài chǔlǐ',
        translation: 'мастеринг',
        examples: [
            '母带处理是最后一步。 (Mǔdài chǔlǐ shì zuìhòu yī bù.) — Мастеринг — финальный этап.',
            '母带处理统一整张专辑音量。 (Mǔdài chǔlǐ tǒngyī zhěng zhāng zhuānjí yīnliàng.) — Мастеринг выравнивает громкость всего альбома.',
            '专业母带处理提升音质。 (Zhuānyè mǔdài chǔlǐ tígāo yīnzhì.) — Профессиональный мастеринг улучшает качество звука.'
        ]
    },
    12: {
        glyph: '调音',
        pinyin: 'tiáoyīn',
        translation: 'настраивать инструмент',
        examples: [
            '弹琴前要调音。 (Tán qín qián yào tiáoyīn.) — Перед игрой настрой инструмент.',
            '吉他用调音器调音。 (Jítā yòng tiáoyīn qì tiáoyīn.) — Гитару настраивают тюнером.',
            '数字调音软件很普及。 (Shùzì tiáoyīn ruǎnjiàn hěn pǔjí.) — Цифровые тюнеры широко распространены.'
        ]
    },
    13: {
        glyph: '视唱',
        pinyin: 'shìchàng',
        translation: 'петь с листа',
        examples: [
            '音乐生要练视唱练耳。 (Yīnyuè shēng yào liàn shìchàng liàn ěr.) — Музыканты тренируют сольфеджио.',
            '视唱能提高音准感。 (Shìchàng néng tígāo yīn zhǔn gǎn.) — Пение с листа развивает чувство тональности.',
            '用固定调或首调视唱。 (Yòng gùdìng diào huò shǒu diào shìchàng.) — Пой с фиксированной или подвижной до.'
        ]
    },
    14: {
        glyph: '打谱',
        pinyin: 'dǎ pǔ',
        translation: 'нотировать музыку (вручную или в программе)',
        examples: [
            '用MuseScore打谱。 (Yòng MuseScore dǎ pǔ.) — Нотируй в MuseScore.',
            '他把旋律打成五线谱。 (Tā bǎ xuánlǜ dǎ chéng wǔxiànpǔ.) — Он записал мелодию в ноты.',
            '打谱软件支持MIDI输入。 (Dǎ pǔ ruǎnjiàn zhīchí MIDI shūrù.) — Программы нотации поддерживают ввод с MIDI-клавиатуры.'
        ]
    },
    15: {
        glyph: '采样',
        pinyin: 'cǎiyàng',
        translation: 'сэмплировать / брать аудиофрагмент',
        examples: [
            '电子音乐常用采样。 (Diànzǐ yīnyuè chángyòng cǎiyàng.) — Электронная музыка часто использует сэмплы.',
            '从老唱片采样鼓点。 (Cóng lǎo chàngpiàn cǎiyàng gǔdiǎn.) — Возьми сэмпл ударных со старой пластинки.',
            '采样需注意版权。 (Cǎiyàng xū zhùyì bǎnquán.) — При сэмплировании соблюдай авторские права.'
        ]
    }
};

// Общий словарь
export const newVerbs = {
    verbsBasicMovement,
    verbsBasicAction,
    verbsThinking,
    verbsFeeling,
    verbsCommunication,
    verbsSocializing,
    verbsHealth,
    verbsNatureWeather,
    verbsBodyFunctions,
    verbsDailyRoutine,
    verbsEatingDrinking,
    verbsLearningStudy,
    verbsShopping,
    verbsCreationMaking,
    verbsChangingStates,
    verbsWorkJobs,
    verbsEmotionsAdvanced,
    verbsPoliticsSociety,
    verbsTechnology,
    verbsEnvironment,
    verbsTravel,
    verbsCrimeLaw,
    verbsMilitaryDefense,
    verbsTradeCommerce,
    verbsMediaNews,
    verbsTimeDuration,
    verbsAbstractRelations,
    verbsPossessionOwnership,
    verbsRelaxationLeisure,
    verbsAppearanceManner,
    verbsReligionPhilosophy,
    verbsSportsFitness,
    verbsArtsCulture,
    verbsCooking,
    verbsMetalworking,
    verbsSurveyingCartography,
    verbsAgriculture,
    verbsPaintingArt,
    verbsMusic
};
