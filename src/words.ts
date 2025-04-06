const pronouns: { [key: number]: DictItem } = {
    1: {
        glyph: '我',
        pinyin: 'wǒ',
        translation: 'я',
        examples: [
            '我是学生。 (Wǒ shì xuéshēng.) — Я студент.',
            '我喜欢中国。 (Wǒ xǐhuān Zhōngguó.) — Я люблю Китай.',
            '我住在莫斯科。 (Wǒ zhù zài Mòsīkē.) — Я живу в Москве.'
        ]
    },
    2: {
        glyph: '你',
        pinyin: 'nǐ',
        translation: 'ты',
        examples: [
            '你好吗？ (Nǐ hǎo ma?) — Как дела?',
            '你去哪里？ (Nǐ qù nǎlǐ?) — Куда ты идешь?',
            '你喜欢茶吗？ (Nǐ xǐhuān chá ma?) — Тебе нравится чай?'
        ]
    },
    3: {
        glyph: '他',
        pinyin: 'tā',
        translation: 'он',
        examples: [
            '他是医生。 (Tā shì yīshēng.) — Он врач.',
            '他很高。 (Tā hěn gāo.) — Он высокий.',
            '他喜欢足球。 (Tā xǐhuān zúqiú.) — Он любит футбол.'
        ]
    },
    4: {
        glyph: '她',
        pinyin: 'tā',
        translation: 'она',
        examples: [
            '她很漂亮。 (Tā hěn piàoliang.) — Она красивая.',
            '她是老师。 (Tā shì lǎoshī.) — Она учительница.',
            '她住在北京。 (Tā zhù zài Běijīng.) — Она живет в Пекине.'
        ]
    },
    5: {
        glyph: '它',
        pinyin: 'tā',
        translation: 'оно',
        examples: [
            '它是一只猫。 (Tā shì yī zhī māo.) — Это кот.',
            '它很便宜。 (Tā hěn piányi.) — Это очень дешево.',
            '它在哪里？ (Tā zài nǎlǐ?) — Где это?'
        ]
    },
    6: {
        glyph: '我们',
        pinyin: 'wǒmen',
        translation: 'мы',
        examples: [
            '我们是朋友。 (Wǒmen shì péngyou.) — Мы друзья.',
            '我们学习中文。 (Wǒmen xuéxí Zhōngwén.) — Мы учим китайский.',
            '我们明天见。 (Wǒmen míngtiān jiàn.) — Увидимся завтра.'
        ]
    },
    7: {
        glyph: '你们',
        pinyin: 'nǐmen',
        translation: 'вы',
        examples: [
            '你们好吗？ (Nǐmen hǎo ma?) — Как вы поживаете?',
            '你们去哪里？ (Nǐmen qù nǎlǐ?) — Куда вы идете?',
            '你们是中国人吗？ (Nǐmen shì Zhōngguó rén ma?) — Вы китайцы?'
        ]
    },
    8: {
        glyph: '他们',
        pinyin: 'tāmen',
        translation: 'они (м)',
        examples: [
            '他们是学生。 (Tāmen shì xuéshēng.) — Они студенты.',
            '他们很忙。 (Tāmen hěn máng.) — Они очень заняты.',
            '他们住在上海。 (Tāmen zhù zài Shànghǎi.) — Они живут в Шанхае.'
        ]
    },
    9: {
        glyph: '她们',
        pinyin: 'tāmen',
        translation: 'они (ж)',
        examples: [
            '她们是姐妹。 (Tāmen shì jiěmèi.) — Они сестры.',
            '她们很聪明。 (Tāmen hěn cōngmíng.) — Они очень умные.',
            '她们不喜欢咖啡。 (Tāmen bù xǐhuān kāfēi.) — Они не любят кофе.'
        ]
    },
    10: {
        glyph: '它们',
        pinyin: 'tāmen',
        translation: 'они (неодуш.)',
        examples: [
            '它们是书。 (Tāmen shì shū.) — Это книги.',
            '它们很重。 (Tāmen hěn zhòng.) — Они тяжелые.',
            '它们在哪里？ (Tāmen zài nǎlǐ?) — Где они?'
        ]
    }
};
const verbsBasic: { [key: number]: DictItem & { examples: string[] } } = {
    1: {
        glyph: '是',
        pinyin: 'shì',
        translation: 'быть',
        examples: [
            '我是学生。 (Wǒ shì xuéshēng.) — Я студент.',
            '这是书。 (Zhè shì shū.) — Это книга.',
            '他是医生。 (Tā shì yīshēng.) — Он врач.'
        ]
    },
    2: {
        glyph: '有',
        pinyin: 'yǒu',
        translation: 'иметь',
        examples: [
            '我有钱。 (Wǒ yǒu qián.) — У меня есть деньги.',
            '你有问题吗？ (Nǐ yǒu wèntí ma?) — У тебя есть вопрос?',
            '她有很多朋友。 (Tā yǒu hěn duō péngyou.) — У нее много друзей.'
        ]
    },
    3: {
        glyph: '要',
        pinyin: 'yào',
        translation: 'хотеть',
        examples: [
            '我要喝水。 (Wǒ yào hē shuǐ.) — Я хочу пить воду.',
            '你要去哪里？ (Nǐ yào qù nǎlǐ?) — Куда ты хочешь пойти?',
            '他们要买手机。 (Tāmen yào mǎi shǒujī.) — Они хотят купить телефон.'
        ]
    },
    4: {
        glyph: '知道',
        pinyin: 'zhīdào',
        translation: 'знать',
        examples: [
            '我知道答案。 (Wǒ zhīdào dá\'àn.) — Я знаю ответ.',
            '你知道他的名字吗？ (Nǐ zhīdào tā de míngzì ma?) — Ты знаешь его имя?',
            '他们不知道地址。 (Tāmen bù zhīdào dìzhǐ.) — Они не знают адрес.'
        ]
    },
    5: {
        glyph: '做',
        pinyin: 'zuò',
        translation: 'делать',
        examples: [
            '我在做作业。 (Wǒ zài zuò zuòyè.) — Я делаю домашнее задание.',
            '你做什么工作？ (Nǐ zuò shénme gōngzuò?) — Какую работу ты делаешь?',
            '她喜欢做饭。 (Tā xǐhuan zuò fàn.) — Она любит готовить еду.'
        ]
    },
    6: {
        glyph: '拿',
        pinyin: 'ná',
        translation: 'брать',
        examples: [
            '请拿书。 (Qǐng ná shū.) — Пожалуйста, возьми книгу.',
            '我拿了钥匙。 (Wǒ ná le yàoshi.) — Я взял ключи.',
            '你能拿这个吗？ (Nǐ néng ná zhège ma?) — Ты можешь взять это?'
        ]
    },
    7: {
        glyph: '会',
        pinyin: 'huì',
        translation: 'уметь',
        examples: [
            '我会说中文。 (Wǒ huì shuō Zhōngwén.) — Я умею говорить по-китайски.',
            '你会游泳吗？ (Nǐ huì yóuyǒng ma?) — Ты умеешь плавать?',
            '他不会开车。 (Tā bù huì kāichē.) — Он не умеет водить машину.'
        ]
    },
    8: {
        glyph: '工作',
        pinyin: 'gōngzuò',
        translation: 'работать',
        examples: [
            '我在工作。 (Wǒ zài gōngzuò.) — Я работаю.',
            '他在医院工作。 (Tā zài yīyuàn gōngzuò.) — Он работает в больнице.',
            '你几点工作？ (Nǐ jǐ diǎn gōngzuò?) — Во сколько ты работаешь?'
        ]
    },
    9: {
        glyph: '买',
        pinyin: 'mǎi',
        translation: 'покупать',
        examples: [
            '我要买水果。 (Wǒ yào mǎi shuǐguǒ.) — Я хочу купить фрукты.',
            '你买了什么？ (Nǐ mǎi le shénme?) — Что ты купил?',
            '她在超市买东西。 (Tā zài chāoshì mǎi dōngxi.) — Она покупает вещи в супермаркете.'
        ]
    },
    10: {
        glyph: '得到',
        pinyin: 'dédào',
        translation: 'получать',
        examples: [
            '我得到了礼物。 (Wǒ dédào le lǐwù.) — Я получил подарок.',
            '你想得到什么？ (Nǐ xiǎng dédào shénme?) — Что ты хочешь получить?',
            '他得到了工作。 (Tā dédào le gōngzuò.) — Он получил работу.'
        ]
    },
    11: {
        glyph: '用',
        pinyin: 'yòng',
        translation: 'использовать',
        examples: [
            '我用电脑工作。 (Wǒ yòng diànnǎo gōngzuò.) — Я работаю за компьютером.',
            '你可以用我的笔。 (Nǐ kěyǐ yòng wǒ de bǐ.) — Ты можешь использовать мою ручку.',
            '她不会用这个软件。 (Tā bù huì yòng zhège ruǎnjiàn.) — Она не умеет пользоваться этой программой.'
        ]
    }
};
const verbsAction: { [key: number]: DictItem & { examples: string[] } } = {
    1: {
        glyph: '去',
        pinyin: 'qù',
        translation: 'идти/ехать',
        examples: [
            '我去学校。 (Wǒ qù xuéxiào.) — Я иду в школу.',
            '你明天去哪里？ (Nǐ míngtiān qù nǎlǐ?) — Куда ты завтра пойдешь?',
            '他们去公园散步。 (Tāmen qù gōngyuán sànbù.) — Они идут в парк гулять.'
        ]
    },
    2: {
        glyph: '来',
        pinyin: 'lái',
        translation: 'приходить',
        examples: [
            '请来我家。 (Qǐng lái wǒ jiā.) — Пожалуйста, приходи ко мне домой.',
            '他昨天来了。 (Tā zuótiān lái le.) — Он вчера пришел.',
            '你们什么时候来？ (Nǐmen shénme shíhou lái?) — Когда вы придете?'
        ]
    },
    3: {
        glyph: '走',
        pinyin: 'zǒu',
        translation: 'уходить',
        examples: [
            '我要走了。 (Wǒ yào zǒu le.) — Мне пора уходить.',
            '别走！ (Bié zǒu!) — Не уходи!',
            '他们走得很早。 (Tāmen zǒu de hěn zǎo.) — Они ушли очень рано.'
        ]
    },
    4: {
        glyph: '停',
        pinyin: 'tíng',
        translation: 'останавливать',
        examples: [
            '请停车。 (Qǐng tíng chē.) — Пожалуйста, остановите машину.',
            '雨停了。 (Yǔ tíng le.) — Дождь прекратился.',
            '他停下来休息。 (Tā tíng xiàlái xiūxi.) — Он остановился, чтобы отдохнуть.'
        ]
    },
    5: {
        glyph: '出去',
        pinyin: 'chūqù',
        translation: 'выходить',
        examples: [
            '我想出去。 (Wǒ xiǎng chūqù.) — Я хочу выйти.',
            '别出去！ (Bié chūqù!) — Не выходи!',
            '他们出去吃饭了。 (Tāmen chūqù chīfàn le.) — Они вышли поесть.'
        ]
    },
    6: {
        glyph: '过',
        pinyin: 'guò',
        translation: 'проходить/испытывать',
        examples: [
            '我过马路。 (Wǒ guò mǎlù.) — Я перехожу дорогу.',
            '你去过中国吗？ (Nǐ qù guò Zhōngguó ma?) — Ты был в Китае?',
            '我们过得很开心。 (Wǒmen guò de hěn kāixīn.) — Мы прекрасно провели время.'
        ]
    },
    7: {
        glyph: '明白',
        pinyin: 'míngbái',
        translation: 'понимать',
        examples: [
            '我明白了。 (Wǒ míngbái le.) — Я понял.',
            '你不明白吗？ (Nǐ bù míngbái ma?) — Ты не понимаешь?',
            '她明白这个问题。 (Tā míngbái zhège wèntí.) — Она понимает эту проблему.'
        ]
    },
    8: {
        glyph: '说',
        pinyin: 'shuō',
        translation: 'говорить',
        examples: [
            '他说中文。 (Tā shuō Zhōngwén.) — Он говорит по-китайски.',
            '请说慢一点。 (Qǐng shuō màn yīdiǎn.) — Пожалуйста, говори медленнее.',
            '我不想说这个。 (Wǒ bù xiǎng shuō zhège.) — Я не хочу об этом говорить.'
        ]
    },
    9: {
        glyph: '告诉',
        pinyin: 'gàosu',
        translation: 'сказать/сообщить',
        examples: [
            '告诉我真相。 (Gàosu wǒ zhēnxiàng.) — Скажи мне правду.',
            '他告诉了我一个秘密。 (Tā gàosu le wǒ yīge mìmì.) — Он рассказал мне секрет.',
            '请告诉我时间。 (Qǐng gàosu wǒ shíjiān.) — Пожалуйста, скажите мне время.'
        ]
    },
    10: {
        glyph: '问',
        pinyin: 'wèn',
        translation: 'спрашивать',
        examples: [
            '我可以问问题吗？ (Wǒ kěyǐ wèn wèntí ma?) — Можно задать вопрос?',
            '他问了我很多。 (Tā wèn le wǒ hěn duō.) — Он много у меня спрашивал.',
            '别问这个！ (Bié wèn zhège!) — Не спрашивай об этом!'
        ]
    },
    11: {
        glyph: '吃',
        pinyin: 'chī',
        translation: 'есть',
        examples: [
            '我吃水果。 (Wǒ chī shuǐguǒ.) — Я ем фрукты.',
            '你吃早饭了吗？ (Nǐ chī zǎofàn le ma?) — Ты позавтракал?',
            '她不吃肉。 (Tā bù chī ròu.) — Она не ест мясо.'
        ]
    },
    12: {
        glyph: '喝',
        pinyin: 'hē',
        translation: 'пить',
        examples: [
            '我想喝水。 (Wǒ xiǎng hē shuǐ.) — Я хочу пить воду.',
            '他喝咖啡。 (Tā hē kāfēi.) — Он пьет кофе.',
            '你不喝酒吗？ (Nǐ bù hē jiǔ ma?) — Ты не пьешь алкоголь?'
        ]
    },
    13: {
        glyph: '看',
        pinyin: 'kàn',
        translation: 'смотреть',
        examples: [
            '我看电视。 (Wǒ kàn diànshì.) — Я смотрю телевизор.',
            '你看这本书吗？ (Nǐ kàn zhè běn shū ma?) — Ты читаешь эту книгу?',
            '他们看电影。 (Tāmen kàn diànyǐng.) — Они смотрят фильм.'
        ]
    },
    14: {
        glyph: '见',
        pinyin: 'jiàn',
        translation: 'видеть/встречать',
        examples: [
            '明天见！ (Míngtiān jiàn!) — До завтра!',
            '我见过他。 (Wǒ jiàn guò tā.) — Я видел его раньше.',
            '你几点见朋友？ (Nǐ jǐ diǎn jiàn péngyou?) — Во сколько ты встречаешься с другом?'
        ]
    },
    15: {
        glyph: '给',
        pinyin: 'gěi',
        translation: 'давать',
        examples: [
            '给我书。 (Gěi wǒ shū.) — Дай мне книгу.',
            '他给了我一杯水。 (Tā gěi le wǒ yī bēi shuǐ.) — Он дал мне стакан воды.',
            '你能给我帮忙吗？ (Nǐ néng gěi wǒ bāngmáng ma?) — Ты можешь мне помочь?'
        ]
    },
    16: {
        glyph: '喜欢',
        pinyin: 'xǐhuan',
        translation: 'нравиться',
        examples: [
            '我喜欢茶。 (Wǒ xǐhuan chá.) — Мне нравится чай.',
            '你喜欢中国菜吗？ (Nǐ xǐhuan Zhōngguó cài ma?) — Тебе нравится китайская еда?',
            '他们不喜欢下雨。 (Tāmen bù xǐhuan xiàyǔ.) — Им не нравится дождь.'
        ]
    },
    17: {
        glyph: '记得',
        pinyin: 'jìde',
        translation: 'помнить',
        examples: [
            '我记得你。 (Wǒ jìde nǐ.) — Я помню тебя.',
            '你记得地址吗？ (Nǐ jìde dìzhǐ ma?) — Ты помнишь адрес?',
            '她不记得这件事。 (Tā bù jìde zhè jiàn shì.) — Она не помнит этот случай.'
        ]
    },
    18: {
        glyph: '忘记',
        pinyin: 'wàngjì',
        translation: 'забывать',
        examples: [
            '我忘记了。 (Wǒ wàngjì le.) — Я забыл.',
            '别忘记钥匙！ (Bié wàngjì yàoshi!) — Не забудь ключи!',
            '他忘记了我的生日。 (Tā wàngjì le wǒ de shēngrì.) — Он забыл мой день рождения.'
        ]
    },
    19: {
        glyph: '读',
        pinyin: 'dú',
        translation: 'читать',
        examples: [
            '我读书。 (Wǒ dú shū.) — Я читаю книгу.',
            '你读报纸吗？ (Nǐ dú bàozhǐ ma?) — Ты читаешь газеты?',
            '她正在读邮件。 (Tā zhèngzài dú yóujiàn.) — Она читает письмо.'
        ]
    },
    20: {
        glyph: '写',
        pinyin: 'xiě',
        translation: 'писать',
        examples: [
            '我写日记。 (Wǒ xiě rìjì.) — Я пишу дневник.',
            '你在写什么？ (Nǐ zài xiě shénme?) — Что ты пишешь?',
            '他写了一封信。 (Tā xiě le yī fēng xìn.) — Он написал письмо.'
        ]
    },
    21: {
        glyph: '离开',
        pinyin: 'líkāi',
        translation: 'уходить/покидать',
        examples: [
            '我要离开了。 (Wǒ yào líkāi le.) — Мне пора уходить.',
            '他离开了公司。 (Tā líkāi le gōngsī.) — Он ушел из компании.',
            '别离开我！ (Bié líkāi wǒ!) — Не покидай меня!'
        ]
    },
    22: {
        glyph: '留下',
        pinyin: 'liúxià',
        translation: 'оставаться',
        examples: [
            '请留下来。 (Qǐng liú xiàlái.) — Пожалуйста, останься.',
            '他留下了地址。 (Tā liúxià le dìzhǐ.) — Он оставил адрес.',
            '我们决定留下。 (Wǒmen juédìng liúxià.) — Мы решили остаться.'
        ]
    }
};
const questionWords: { [key: number]: DictItem & { examples: string[] } } = {
    1: {
        glyph: '谁',
        pinyin: 'shéi',
        translation: 'кто',
        examples: [
            '你是谁？ (Nǐ shì shéi?) — Кто ты?',
            '这是谁的书？ (Zhè shì shéi de shū?) — Чья это книга?',
            '谁想去中国？ (Shéi xiǎng qù Zhōngguó?) — Кто хочет поехать в Китай?'
        ]
    },
    2: {
        glyph: '什么',
        pinyin: 'shénme',
        translation: 'что',
        examples: [
            '这是什么？ (Zhè shì shénme?) — Что это?',
            '你在做什么？ (Nǐ zài zuò shénme?) — Что ты делаешь?',
            '你喜欢什么颜色？ (Nǐ xǐhuan shénme yánsè?) — Какой цвет тебе нравится?'
        ]
    },
    3: {
        glyph: '哪里',
        pinyin: 'nǎlǐ',
        translation: 'где',
        examples: [
            '你在哪里？ (Nǐ zài nǎlǐ?) — Где ты?',
            '厕所在哪里？ (Cèsuǒ zài nǎlǐ?) — Где туалет?',
            '我们去哪里吃饭？ (Wǒmen qù nǎlǐ chīfàn?) — Где мы будем есть?'
        ]
    },
    4: {
        glyph: '什么时候',
        pinyin: 'shénme shíhou',
        translation: 'когда',
        examples: [
            '你什么时候来？ (Nǐ shénme shíhou lái?) — Когда ты придешь?',
            '会议什么时候开始？ (Huìyì shénme shíhou kāishǐ?) — Когда начнется собрание?',
            '你什么时候生日？ (Nǐ shénme shíhou shēngrì?) — Когда у тебя день рождения?'
        ]
    },
    5: {
        glyph: '哪个',
        pinyin: 'nǎge',
        translation: 'который',
        examples: [
            '你喜欢哪个？ (Nǐ xǐhuan nǎge?) — Который тебе нравится?',
            '哪个是你的手机？ (Nǎge shì nǐ de shǒujī?) — Который телефон твой?',
            '我们去哪个餐厅？ (Wǒmen qù nǎge cāntīng?) — В какой ресторан мы пойдем?'
        ]
    },
    6: {
        glyph: '为什么',
        pinyin: 'wèishénme',
        translation: 'почему',
        examples: [
            '你为什么学习中文？ (Nǐ wèishénme xuéxí Zhōngwén?) — Почему ты учишь китайский?',
            '他为什么不来？ (Tā wèishénme bù lái?) — Почему он не приходит?',
            '为什么这么贵？ (Wèishénme zhème guì?) — Почему так дорого?'
        ]
    },
    7: {
        glyph: '怎么',
        pinyin: 'zěnme',
        translation: 'как',
        examples: [
            '这个怎么用？ (Zhège zěnme yòng?) — Как это использовать?',
            '你怎么去学校？ (Nǐ zěnme qù xuéxiào?) — Как ты добираешься до школы?',
            '中文怎么说"谢谢"？ (Zhōngwén zěnme shuō "xièxie"?) — Как по-китайски сказать "спасибо"?'
        ]
    },
    8: {
        glyph: '几点',
        pinyin: 'jǐ diǎn',
        translation: 'во сколько',
        examples: [
            '现在几点？ (Xiànzài jǐ diǎn?) — Который час?',
            '你几点起床？ (Nǐ jǐ diǎn qǐchuáng?) — Во сколько ты встаешь?',
            '电影几点开始？ (Diànyǐng jǐ diǎn kāishǐ?) — Во сколько начинается фильм?'
        ]
    },
    9: {
        glyph: '多久',
        pinyin: 'duōjiǔ',
        translation: 'как долго',
        examples: [
            '你要住多久？ (Nǐ yào zhù duōjiǔ?) — Как долго ты будешь жить?',
            '学习中文需要多久？ (Xuéxí Zhōngwén xūyào duōjiǔ?) — Как долго нужно учить китайский?',
            '这个要做多久？ (Zhège yào zuò duōjiǔ?) — Как долго это делать?'
        ]
    },
    10: {
        glyph: '多少',
        pinyin: 'duōshǎo',
        translation: 'сколько (для неисчисляемого)',
        examples: [
            '这个多少钱？ (Zhège duōshǎo qián?) — Сколько это стоит?',
            '你有多少朋友？ (Nǐ yǒu duōshǎo péngyou?) — Сколько у тебя друзей?',
            '水要多少？ (Shuǐ yào duōshǎo?) — Сколько воды нужно?'
        ]
    },
    11: {
        glyph: '怎么样',
        pinyin: 'zěnmeyàng',
        translation: 'как (оценка/состояние)',
        examples: [
            '你怎么样？ (Nǐ zěnmeyàng?) — Как дела?',
            '这个电影怎么样？ (Zhège diànyǐng zěnmeyàng?) — Как тебе этот фильм?',
            '中文难不难？你觉得怎么样？ (Zhōngwén nán bù nán? Nǐ juédé zěnmeyàng?) — Китайский сложный? Как ты думаешь?'
        ]
    }
};
const adverbs: { [key: number]: DictItem & { examples: string[] } } = {
    1: {
        glyph: '是',
        pinyin: 'shì',
        translation: 'да (утверждение)',
        examples: [
            '你是学生吗？是。 (Nǐ shì xuéshēng ma? Shì.) — Ты студент? Да.',
            '这是你的书吗？是。 (Zhè shì nǐ de shū ma? Shì.) — Это твоя книга? Да.',
            '你喜欢咖啡吗？是。 (Nǐ xǐhuan kāfēi ma? Shì.) — Тебе нравится кофе? Да.'
        ]
    },
    2: {
        glyph: '不是',
        pinyin: 'bù shì',
        translation: 'нет (отрицание)',
        examples: [
            '他是医生吗？不是。 (Tā shì yīshēng ma? Bù shì.) — Он врач? Нет.',
            '这是你的手机吗？不是。 (Zhè shì nǐ de shǒujī ma? Bù shì.) — Это твой телефон? Нет.',
            '你明天来吗？不是。 (Nǐ míngtiān lái ma? Bù shì.) — Ты завтра придешь? Нет.'
        ]
    },
    3: {
        glyph: '谢谢',
        pinyin: 'xièxie',
        translation: 'спасибо',
        examples: [
            '谢谢你的帮助。 (Xièxie nǐ de bāngzhù.) — Спасибо за помощь.',
            '谢谢，我明白了。 (Xièxie, wǒ míngbái le.) — Спасибо, я понял.',
            '不用谢。 (Bù yòng xiè.) — Не за что (в ответ на спасибо).'
        ]
    },
    4: {
        glyph: '不客气',
        pinyin: 'bú kèqi',
        translation: 'пожалуйста (в ответ на спасибо)',
        examples: [
            '谢谢！不客气！ (Xièxie! Bú kèqi!) — Спасибо! Пожалуйста!',
            '你太好了！不客气。 (Nǐ tài hǎo le! Bú kèqi.) — Ты такой добрый! Пожалуйста.',
            '不客气，这是我的工作。 (Bú kèqi, zhè shì wǒ de gōngzuò.) — Пожалуйста, это моя работа.'
        ]
    },
    5: {
        glyph: '可能',
        pinyin: 'kěnéng',
        translation: 'может быть',
        examples: [
            '我可能明天来。 (Wǒ kěnéng míngtiān lái.) — Я, возможно, приду завтра.',
            '这可能不对。 (Zhè kěnéng bù duì.) — Это, возможно, неправильно.',
            '他可能不知道。 (Tā kěnéng bù zhīdào.) — Он, возможно, не знает.'
        ]
    },
    6: {
        glyph: '真的吗',
        pinyin: 'zhēn de ma',
        translation: 'правда?',
        examples: [
            '我通过了考试。真的吗？ (Wǒ tōngguò le kǎoshì. Zhēn de ma?) — Я сдал экзамен. Правда?',
            '真的吗？太好了！ (Zhēn de ma? Tài hǎo le!) — Правда? Отлично!',
            '真的吗？我不相信。 (Zhēn de ma? Wǒ bù xiāngxìn.) — Правда? Я не верю.'
        ]
    },
    7: {
        glyph: '这里',
        pinyin: 'zhèlǐ',
        translation: 'здесь',
        examples: [
            '我在这里。 (Wǒ zài zhèlǐ.) — Я здесь.',
            '这里很漂亮。 (Zhèlǐ hěn piàoliang.) — Здесь очень красиво.',
            '请来这里。 (Qǐng lái zhèlǐ.) — Пожалуйста, иди сюда.'
        ]
    },
    8: {
        glyph: '那里',
        pinyin: 'nàlǐ',
        translation: 'там',
        examples: [
            '他在那里。 (Tā zài nàlǐ.) — Он там.',
            '那里有超市。 (Nàlǐ yǒu chāoshì.) — Там есть супермаркет.',
            '我们去那里吧。 (Wǒmen qù nàlǐ ba.) — Пойдем туда.'
        ]
    },
    9: {
        glyph: '现在',
        pinyin: 'xiànzài',
        translation: 'сейчас',
        examples: [
            '现在几点？ (Xiànzài jǐ diǎn?) — Который сейчас час?',
            '我现在很忙。 (Wǒ xiànzài hěn máng.) — Я сейчас очень занят.',
            '现在开始。 (Xiànzài kāishǐ.) — Начинаем сейчас.'
        ]
    },
    10: {
        glyph: '马上',
        pinyin: 'mǎshàng',
        translation: 'прямо сейчас/скоро',
        examples: [
            '我马上来。 (Wǒ mǎshàng lái.) — Я сейчас приду.',
            '请马上做。 (Qǐng mǎshàng zuò.) — Пожалуйста, сделай прямо сейчас.',
            '车马上到。 (Chē mǎshàng dào.) — Машина скоро приедет.'
        ]
    },
    11: {
        glyph: '只',
        pinyin: 'zhǐ',
        translation: 'только',
        examples: [
            '我只有一个。 (Wǒ zhǐ yǒu yī gè.) — У меня только один.',
            '他只说中文。 (Tā zhǐ shuō Zhōngwén.) — Он говорит только по-китайски.',
            '只要十分钟。 (Zhǐ yào shí fēnzhōng.) — Нужно только десять минут.'
        ]
    },
    12: {
        glyph: '先',
        pinyin: 'xiān',
        translation: 'сначала',
        examples: [
            '你先来。 (Nǐ xiān lái.) — Ты приходи сначала.',
            '我先吃饭。 (Wǒ xiān chīfàn.) — Я сначала поем.',
            '先做这个。 (Xiān zuò zhège.) — Сначала сделай это.'
        ]
    },
    13: {
        glyph: '然后',
        pinyin: 'ránhòu',
        translation: 'потом',
        examples: [
            '我先工作，然后休息。 (Wǒ xiān gōngzuò, ránhòu xiūxi.) — Я сначала поработаю, потом отдохну.',
            '吃饭，然后看电影。 (Chīfàn, ránhòu kàn diànyǐng.) — Поедим, потом посмотрим кино.',
            '然后呢？ (Ránhòu ne?) — И что потом?'
        ]
    },
    14: {
        glyph: '之前',
        pinyin: 'zhīqián',
        translation: 'перед',
        examples: [
            '吃饭之前洗手。 (Chīfàn zhīqián xǐ shǒu.) — Мой руки перед едой.',
            '之前我不懂。 (Zhīqián wǒ bù dǒng.) — Раньше я не понимал.',
            '睡觉之前刷牙。 (Shuìjiào zhīqián shuā yá.) — Чисти зубы перед сном.'
        ]
    },
    15: {
        glyph: '之后',
        pinyin: 'zhīhòu',
        translation: 'после',
        examples: [
            '吃饭之后喝茶。 (Chīfàn zhīhòu hē chá.) — После еды пей чай.',
            '之后我回家了。 (Zhīhòu wǒ huí jiā le.) — После этого я пошел домой.',
            '下课之后见。 (Xiàkè zhīhòu jiàn.) — Увидимся после уроков.'
        ]
    },
    16: {
        glyph: '左',
        pinyin: 'zuǒ',
        translation: 'лево',
        examples: [
            '向左转。 (Xiàng zuǒ zhuǎn.) — Поверни налево.',
            '在左边。 (Zài zuǒbian.) — Слева.',
            '左手。 (Zuǒ shǒu.) — Левая рука.'
        ]
    },
    17: {
        glyph: '右',
        pinyin: 'yòu',
        translation: 'право',
        examples: [
            '向右转。 (Xiàng yòu zhuǎn.) — Поверни направо.',
            '在右边。 (Zài yòubian.) — Справа.',
            '右手写字。 (Yòu shǒu xiě zì.) — Пишу правой рукой.'
        ]
    },
    18: {
        glyph: '今天',
        pinyin: 'jīntiān',
        translation: 'сегодня',
        examples: [
            '今天天气好。 (Jīntiān tiānqì hǎo.) — Сегодня хорошая погода.',
            '今天几号？ (Jīntiān jǐ hào?) — Какое сегодня число?',
            '今天我很高兴。 (Jīntiān wǒ hěn gāoxìng.) — Сегодня я очень рад.'
        ]
    },
    19: {
        glyph: '昨天',
        pinyin: 'zuótiān',
        translation: 'вчера',
        examples: [
            '昨天我工作了。 (Zuótiān wǒ gōngzuò le.) — Вчера я работал.',
            '昨天你去了哪里？ (Zuótiān nǐ qù le nǎlǐ?) — Куда ты вчера ходил?',
            '昨天是星期一。 (Zuótiān shì xīngqīyī.) — Вчера был понедельник.'
        ]
    },
    20: {
        glyph: '明天',
        pinyin: 'míngtiān',
        translation: 'завтра',
        examples: [
            '明天见！ (Míngtiān jiàn!) — До завтра!',
            '明天我休息。 (Míngtiān wǒ xiūxi.) — Завтра я отдыхаю.',
            '明天天气怎么样？ (Míngtiān tiānqì zěnmeyàng?) — Какая завтра будет погода?'
        ]
    },
    21: {
        glyph: '一起',
        pinyin: 'yīqǐ',
        translation: 'вместе',
        examples: [
            '我们一起学习。 (Wǒmen yīqǐ xuéxí.) — Мы учимся вместе.',
            '一起去吧！ (Yīqǐ qù ba!) — Пойдем вместе!',
            '一起吃晚饭。 (Yīqǐ chī wǎnfàn.) — Поужинаем вместе.'
        ]
    },
    22: {
        glyph: '别',
        pinyin: 'bié',
        translation: 'не (запрет)',
        examples: [
            '别走！ (Bié zǒu!) — Не уходи!',
            '别担心。 (Bié dānxīn.) — Не волнуйся.',
            '别说话。 (Bié shuōhuà.) — Не разговаривай.'
        ]
    },
    23: {
        glyph: '多',
        pinyin: 'duō',
        translation: 'много',
        examples: [
            '很多人。 (Hěn duō rén.) — Много людей.',
            '多少钱？ (Duōshǎo qián?) — Сколько денег?',
            '多喝水。 (Duō hē shuǐ.) — Пей много воды.'
        ]
    },
    24: {
        glyph: '少',
        pinyin: 'shǎo',
        translation: 'мало',
        examples: [
            '很少人。 (Hěn shǎo rén.) — Мало людей.',
            '少说话。 (Shǎo shuōhuà.) — Говори меньше.',
            '钱太少。 (Qián tài shǎo.) — Денег слишком мало.'
        ]
    },
    25: {
        glyph: '还',
        pinyin: 'hái',
        translation: 'ещё',
        examples: [
            '我还要。 (Wǒ hái yào.) — Я ещё хочу.',
            '你还好吗？ (Nǐ hái hǎo ma?) — Ты ещё в порядке?',
            '还有时间。 (Hái yǒu shíjiān.) — Ещё есть время.'
        ]
    },
    26: {
        glyph: '再',
        pinyin: 'zài',
        translation: 'ещё раз',
        examples: [
            '再见。 (Zàijiàn.) — До свидания (досл. "ещё увидимся").',
            '再说一次。 (Zài shuō yīcì.) — Скажи ещё раз.',
            '再来一杯。 (Zài lái yī bēi.) — Ещё одну чашку.'
        ]
    },
    27: {
        glyph: '其他',
        pinyin: 'qítā',
        translation: 'всё остальное',
        examples: [
            '其他人。 (Qítā rén.) — Остальные люди.',
            '还有其他问题吗？ (Hái yǒu qítā wèntí ma?) — Есть ещё другие вопросы?',
            '我喜欢这个，其他的不要。 (Wǒ xǐhuan zhège, qítā de bù yào.) — Мне нравится это, остальное не надо.'
        ]
    },
    28: {
        glyph: '一起',
        pinyin: 'yīqǐ',
        translation: 'вместе',
        examples: [
            '我们一起学习中文。 (Wǒmen yīqǐ xuéxí Zhōngwén.) — Мы вместе учим китайский.',
            '明天一起吃饭吧！ (Míngtiān yīqǐ chīfàn ba!) — Давай завтра поедим вместе!',
            '他们一起工作。 (Tāmen yīqǐ gōngzuò.) — Они работают вместе.'
        ]
    },
    29: {
        glyph: '分开',
        pinyin: 'fēnkāi',
        translation: 'отдельно',
        examples: [
            '我们分开付。 (Wǒmen fēnkāi fù.) — Мы платим отдельно.',
            '请分开说。 (Qǐng fēnkāi shuō.) — Пожалуйста, говори отдельно.',
            '这个要分开洗。 (Zhège yào fēnkāi xǐ.) — Это нужно стирать отдельно.'
        ]
    }
};
const phrases: { [key: number]: DictItem & { examples: string[] } } = {
    1: {
        glyph: '谢天谢地',
        pinyin: 'xiè tiān xiè dì',
        translation: 'слава богу',
        examples: [
            '谢天谢地，你没事！ (Xiè tiān xiè dì, nǐ méishì!) — Слава богу, ты в порядке!',
            '谢天谢地，考试结束了。 (Xiè tiān xiè dì, kǎoshì jiéshù le.) — Слава богу, экзамен закончился.',
            '谢天谢地，我们赶上了火车。 (Xiè tiān xiè dì, wǒmen gǎnshàng le huǒchē.) — Слава богу, мы успели на поезд.'
        ]
    },
    2: {
        glyph: '真的吗？',
        pinyin: 'zhēn de ma?',
        translation: 'правда?',
        examples: [
            '我找到工作了。真的吗？ (Wǒ zhǎodào gōngzuò le. Zhēn de ma?) — Я нашел работу. Правда?',
            '真的吗？太棒了！ (Zhēn de ma? Tài bàng le!) — Правда? Здорово!',
            '真的吗？我不相信。 (Zhēn de ma? Wǒ bù xiāngxìn.) — Правда? Я не верю.'
        ]
    },
    3: {
        glyph: '现在',
        pinyin: 'xiànzài',
        translation: 'сейчас',
        examples: [
            '现在几点？ (Xiànzài jǐ diǎn?) — Который сейчас час?',
            '我现在很忙。 (Wǒ xiànzài hěn máng.) — Я сейчас очень занят.',
            '现在开始吧。 (Xiànzài kāishǐ ba.) — Давай начнем сейчас.'
        ]
    },
    4: {
        glyph: '马上',
        pinyin: 'mǎshàng',
        translation: 'прямо сейчас/скоро',
        examples: [
            '我马上到。 (Wǒ mǎshàng dào.) — Я сейчас буду.',
            '请马上回答。 (Qǐng mǎshàng huídá.) — Пожалуйста, ответь немедленно.',
            '会议马上开始。 (Huìyì mǎshàng kāishǐ.) — Собрание скоро начнется.'
        ]
    },
    5: {
        glyph: '天啊',
        pinyin: 'tiān a',
        translation: 'боже/ой',
        examples: [
            '天啊，这么贵！ (Tiān a, zhème guì!) — Боже, так дорого!',
            '天啊，我忘了！ (Tiān a, wǒ wàng le!) — Ой, я забыл!',
            '天啊，太好了！ (Tiān a, tài hǎo le!) — Боже, как здорово!'
        ]
    },
    6: {
        glyph: '看看',
        pinyin: 'kànkan',
        translation: 'давайте посмотрим',
        examples: [
            '看看这个！ (Kànkan zhège!) — Посмотри-ка на это!',
            '我们看看菜单。 (Wǒmen kànkan càidān.) — Давайте посмотрим меню.',
            '让我看看。 (Ràng wǒ kànkan.) — Дай мне посмотреть.'
        ]
    },
    7: {
        glyph: '先这样',
        pinyin: 'xiān zhèyàng',
        translation: 'пока что',
        examples: [
            '先这样吧，明天再说。 (Xiān zhèyàng ba, míngtiān zàishuō.) — Пока что хватит, завтра обсудим.',
            '先这样决定。 (Xiān zhèyàng juédìng.) — Пока что решим так.',
            '先这样，有问题再联系。 (Xiān zhèyàng, yǒu wèntí zài liánxì.) — Пока что так, если будут вопросы - свяжемся.'
        ]
    },
    8: {
        glyph: '到时候',
        pinyin: 'dào shíhou',
        translation: 'в таком случае/тогда',
        examples: [
            '到时候再说。 (Dào shíhou zàishuō.) — Тогда обсудим.',
            '到时候你就知道了。 (Dào shíhou nǐ jiù zhīdào le.) — Тогда ты узнаешь.',
            '到时候我来帮你。 (Dào shíhou wǒ lái bāng nǐ.) — В таком случае я тебе помогу.'
        ]
    },
    9: {
        glyph: '可惜',
        pinyin: 'kěxī',
        translation: 'к сожалению',
        examples: [
            '可惜他没来。 (Kěxī tā méi lái.) — К сожалению, он не пришел.',
            '真可惜！ (Zhēn kěxī!) — Очень жаль!',
            '可惜天气不好。 (Kěxī tiānqì bù hǎo.) — К сожалению, погода плохая.'
        ]
    },
    10: {
        glyph: '完了',
        pinyin: 'wánle',
        translation: 'всё/конец',
        examples: [
            '完了，我迟到了。 (Wánle, wǒ chídào le.) — Всё, я опоздал.',
            '手机没电了，完了。 (Shǒujī méi diàn le, wánle.) — Телефон разрядился, конец.',
            '完了，我忘了带钱包。 (Wánle, wǒ wàng le dài qiánbāo.) — Всё, я забыл кошелек.'
        ]
    },
    11: {
        glyph: '没事',
        pinyin: 'méishì',
        translation: 'ничего/всё в порядке',
        examples: [
            '你没事吧？没事。 (Nǐ méishì ba? Méishì.) — Ты в порядке? Всё нормально.',
            '没事，不用担心。 (Méishì, bùyòng dānxīn.) — Ничего, не беспокойся.',
            '没关系，没事的。 (Méi guānxi, méishì de.) — Ничего страшного, всё хорошо.'
        ]
    }
};
const adjectives: { [key: number]: DictItem } = {
    1: { glyph: '大', pinyin: 'dà', translation: 'большой' },
    2: { glyph: '中', pinyin: 'zhōng', translation: 'средний' },
    3: { glyph: '小', pinyin: 'xiǎo', translation: 'маленький' },
    4: { glyph: '好', pinyin: 'hǎo', translation: 'хороший' },
    5: { glyph: '坏', pinyin: 'huài', translation: 'плохой' },
    6: { glyph: '新', pinyin: 'xīn', translation: 'новый' },
    7: { glyph: '旧', pinyin: 'jiù', translation: 'старый' },
    8: { glyph: '高', pinyin: 'gāo', translation: 'высокий' },
    9: { glyph: '矮', pinyin: 'ǎi', translation: 'низкий' },
    10: { glyph: '长', pinyin: 'cháng', translation: 'длинный' },
    11: { glyph: '短', pinyin: 'duǎn', translation: 'короткий' },
    12: { glyph: '热', pinyin: 'rè', translation: 'горячий' },
    13: { glyph: '冷', pinyin: 'lěng', translation: 'холодный' },
    14: { glyph: '不同', pinyin: 'bùtóng', translation: 'другой' },
    15: { glyph: '一样', pinyin: 'yīyàng', translation: 'тот же самый' },
    16: { glyph: '开', pinyin: 'kāi', translation: 'открытый' },
    17: { glyph: '关', pinyin: 'guān', translation: 'закрытый' },
    18: { glyph: '第一个', pinyin: 'dì yī gè', translation: 'первый' },
    19: { glyph: '最后一个', pinyin: 'zuìhòu yī gè', translation: 'последний' },
    20: { glyph: '下一个', pinyin: 'xià yī gè', translation: 'следующий' },
    21: { glyph: '上一个', pinyin: 'shàng yī gè', translation: 'предыдущий' },
    22: { glyph: '喝醉的', pinyin: 'hēzuì de', translation: 'пьяный' },
    23: { glyph: '清醒的', pinyin: 'qīngxǐng de', translation: 'трезвый' },

    // Способы приготовления
    24: { glyph: '生的', pinyin: 'shēng de', translation: 'сырой' },
    25: { glyph: '熟的', pinyin: 'shú de', translation: 'приготовленный' },
    26: { glyph: '热的', pinyin: 'rè de', translation: 'горячий' },
    27: { glyph: '冷的', pinyin: 'lěng de', translation: 'холодный' },
    28: { glyph: '新鲜的', pinyin: 'xīnxiān de', translation: 'свежий' },
    29: { glyph: '变质的', pinyin: 'biànzhì de', translation: 'испорченный' },

    // Термины обработки
    30: { glyph: '煮的', pinyin: 'zhǔ de', translation: 'варёный' },
    31: { glyph: '炒的', pinyin: 'chǎo de', translation: 'жареный (вок)' },
    32: { glyph: '煎的', pinyin: 'jiān de', translation: 'жареный (на сковороде)' },
    33: { glyph: '烤的', pinyin: 'kǎo de', translation: 'запечённый/гриль' },
    34: { glyph: '蒸的', pinyin: 'zhēng de', translation: 'паровой' },
    35: { glyph: '炸的', pinyin: 'zhá de', translation: 'фритюрный' },
    36: { glyph: '熏的', pinyin: 'xūn de', translation: 'копчёный' },

    // Вкусовые качества
    37: { glyph: '甜的', pinyin: 'tián de', translation: 'сладкий' },
    38: { glyph: '咸的', pinyin: 'xián de', translation: 'солёный' },
    39: { glyph: '酸的', pinyin: 'suān de', translation: 'кислый' },
    40: { glyph: '辣的', pinyin: 'là de', translation: 'острый' },
    41: { glyph: '苦的', pinyin: 'kǔ de', translation: 'горький' },
    42: { glyph: '鲜的', pinyin: 'xiān de', translation: 'умами' },
};
const possessive: { [key: number]: DictItem } = {
    1: { glyph: '我的', pinyin: 'wǒ de', translation: 'мой' },
    2: { glyph: '你的', pinyin: 'nǐ de', translation: 'твой' },
    3: { glyph: '他的', pinyin: 'tā de', translation: 'его' },
    4: { glyph: '她的', pinyin: 'tā de', translation: 'её' },
    5: { glyph: '我们的', pinyin: 'wǒmen de', translation: 'наш' },
    6: { glyph: '你们的', pinyin: 'nǐmen de', translation: 'ваш' },
    7: { glyph: '他们的', pinyin: 'tāmen de', translation: 'их' }
};
const pronounsCases: { [key: number]: DictItem } = {
    1: { glyph: '我', pinyin: 'wǒ', translation: 'меня/мне' }, // Контекст зависит от предложения
    2: { glyph: '你', pinyin: 'nǐ', translation: 'тебя/тебе' },
    3: { glyph: '他', pinyin: 'tā', translation: 'его/ему' },
    // ... (аналогично для остальных)
};
const expressions: { [key: number]: DictItem } = {
    1: { glyph: '天啊！', pinyin: 'Tiān a!', translation: 'Боже!' },
    2: { glyph: '太好了！', pinyin: 'Tài hǎo le!', translation: 'Отлично!' },
    3: { glyph: '真的吗？', pinyin: 'Zhēn de ma?', translation: 'Правда?' },
    4: { glyph: '怎么办？', pinyin: 'Zěnme bàn?', translation: 'Что делать?' },
    5: { glyph: '别担心。', pinyin: 'Bié dānxīn.', translation: 'Не волнуйся.' },
    6: { glyph: '慢慢来。', pinyin: 'Mànman lái.', translation: 'Не торопись.' },
    7: { glyph: '太好了！', pinyin: 'Tài hǎo le!', translation: 'Здорово!' },
    8: { glyph: '糟糕！', pinyin: 'Zāogāo!', translation: 'Дерьмо!' },
    9: { glyph: '开玩笑吧？', pinyin: 'Kāi wánxiào ba?', translation: 'Ты шутишь?' },

    10: { glyph: '随你便', pinyin: 'suí nǐ biàn', translation: 'Как хочешь' },
    11: { glyph: '别着急', pinyin: 'bié zháojí', translation: 'Не волнуйся' },
    12: { glyph: '没问题', pinyin: 'méi wèntí', translation: 'Без проблем' },
    13: { glyph: '就这样', pinyin: 'jiù zhèyàng', translation: 'На этом всё' },
    14: { glyph: '太棒了！', pinyin: 'tài bàng le!', translation: 'Отлично!' },
    15: { glyph: '真可惜', pinyin: 'zhēn kěxī', translation: 'Очень жаль' },
    16: { glyph: '我同意', pinyin: 'wǒ tóngyì', translation: 'Я согласен' },
    17: { glyph: '我不同意', pinyin: 'wǒ bù tóngyì', translation: 'Я не согласен' },
    18: { glyph: '等等我', pinyin: 'děng děng wǒ', translation: 'Подожди меня' },
    19: { glyph: '小心！', pinyin: 'xiǎoxīn!', translation: 'Осторожно!' },
    20: { glyph: '快点！', pinyin: 'kuài diǎn!', translation: 'Быстрее!' }
};
const politePhrases: { [key: number]: DictItem } = {
    // Основные вежливые выражения
    1: { glyph: '请', pinyin: 'qǐng', translation: 'пожалуйста' },
    2: { glyph: '谢谢', pinyin: 'xièxie', translation: 'спасибо' },
    3: { glyph: '不客气', pinyin: 'bú kèqi', translation: 'пожалуйста (в ответ на спасибо)' },
    4: { glyph: '对不起', pinyin: 'duìbuqǐ', translation: 'извините' },
    5: { glyph: '没关系', pinyin: 'méi guānxi', translation: 'ничего страшного' },
    6: { glyph: '你好', pinyin: 'nǐ hǎo', translation: 'здравствуйте' },
    7: { glyph: '您好', pinyin: 'nín hǎo', translation: 'здравствуйте (формально)' },
    8: { glyph: '再见', pinyin: 'zàijiàn', translation: 'до свидания' },
    9: { glyph: '明天见', pinyin: 'míngtiān jiàn', translation: 'до завтра' },

    // Обращения к людям
    10: { glyph: '先生', pinyin: 'xiānsheng', translation: 'господин' },
    11: { glyph: '女士', pinyin: 'nǚshì', translation: 'госпожа' },
    12: { glyph: '小姐', pinyin: 'xiǎojiě', translation: 'молодая женщина' },
    13: { glyph: '朋友', pinyin: 'péngyou', translation: 'друг' },
    14: { glyph: '师傅', pinyin: 'shīfu', translation: 'мастер (уважительное к работникам)' },
    15: { glyph: '老板', pinyin: 'lǎobǎn', translation: 'хозяин/шеф' },

    // Просьбы и предложения
    16: { glyph: '可以帮我吗？', pinyin: 'kěyǐ bāng wǒ ma?', translation: 'Не могли бы вы мне помочь?' },
    17: { glyph: '请稍等', pinyin: 'qǐng shāo děng', translation: 'Пожалуйста, подождите' },
    18: { glyph: '你先请', pinyin: 'nǐ xiān qǐng', translation: 'Проходите первым' },
    19: { glyph: '需要帮忙吗？', pinyin: 'xūyào bāngmáng ma?', translation: 'Вам помочь?' },
    20: { glyph: '麻烦您', pinyin: 'máfan nín', translation: 'Беспокою вас (вежливо)' },

    // Устойчивые выражения
    21: { glyph: '辛苦了！', pinyin: 'xīnkǔ le!', translation: 'Спасибо за труд!' },
    22: { glyph: '慢慢来', pinyin: 'mànman lái', translation: 'Не спешите' },
    23: { glyph: '一路顺风', pinyin: 'yīlù shùnfēng', translation: 'Счастливого пути' },
    24: { glyph: '恭喜发财', pinyin: 'gōngxǐ fācái', translation: 'Желаю богатства (праздничное)' },
    25: { glyph: '生日快乐', pinyin: 'shēngrì kuàilè', translation: 'С днём рождения' },
    26: { glyph: '新年快乐', pinyin: 'xīnnián kuàilè', translation: 'С Новым годом' },
    27: { glyph: '祝你好运', pinyin: 'zhù nǐ hǎoyùn', translation: 'Удачи' },
    28: { glyph: '保重', pinyin: 'bǎozhòng', translation: 'Берегите себя' },
    29: { glyph: '我明白了', pinyin: 'wǒ míngbái le', translation: 'Я понял' },
    30: { glyph: '我不懂', pinyin: 'wǒ bù dǒng', translation: 'Я не понимаю' }
};
const prepositions: { [key: number]: DictItem & { examples: string[] } } = {
    1: {
        glyph: '在...上',
        pinyin: 'zài...shàng',
        translation: 'на',
        examples: [
            '书在桌子上。 (Shū zài zhuōzi shàng.) — Книга на столе.',
            '猫在沙发上睡觉。 (Māo zài shāfā shàng shuìjiào.) — Кот спит на диване.',
            '手机在床上了。 (Shǒujī zài chuáng shàng le.) — Телефон уже на кровати.'
        ]
    },
    2: {
        glyph: '在...下',
        pinyin: 'zài...xià',
        translation: 'под',
        examples: [
            '钥匙在椅子下。 (Yàoshi zài yǐzi xià.) — Ключи под стулом.',
            '狗在桌子下玩。 (Gǒu zài zhuōzi xià wán.) — Собака играет под столом.',
            '我的书在床下。 (Wǒ de shū zài chuáng xià.) — Моя книга под кроватью.'
        ]
    },
    3: {
        glyph: '在...里',
        pinyin: 'zài...lǐ',
        translation: 'в',
        examples: [
            '牛奶在冰箱里。 (Niúnǎi zài bīngxiāng lǐ.) — Молоко в холодильнике.',
            '我在房间里工作。 (Wǒ zài fángjiān lǐ gōngzuò.) — Я работаю в комнате.',
            '钱在钱包里。 (Qián zài qiánbāo lǐ.) — Деньги в кошельке.'
        ]
    },
    4: {
        glyph: '在...旁边',
        pinyin: 'zài...pángbiān',
        translation: 'рядом с',
        examples: [
            '超市在学校旁边。 (Chāoshì zài xuéxiào pángbiān.) — Супермаркет рядом со школой.',
            '坐在我旁边吧。 (Zuò zài wǒ pángbiān ba.) — Садись рядом со мной.',
            '公园在河边旁边。 (Gōngyuán zài hé biān pángbiān.) — Парк рядом с рекой.'
        ]
    },
    5: {
        glyph: '从...到',
        pinyin: 'cóng...dào',
        translation: 'от...до',
        examples: [
            '从家到公司要十分钟。 (Cóng jiā dào gōngsī yào shí fēnzhōng.) — От дома до офиса десять минут.',
            '我从星期一到星期五工作。 (Wǒ cóng xīngqīyī dào xīngqīwǔ gōngzuò.) — Я работаю с понедельника по пятницу.',
            '从北京到上海有高铁。 (Cóng Běijīng dào Shànghǎi yǒu gāotiě.) — От Пекина до Шанхая есть скоростной поезд.'
        ]
    },
    6: {
        glyph: '和',
        pinyin: 'hé',
        translation: 'и/с',
        examples: [
            '我和朋友一起去。 (Wǒ hé péngyou yīqǐ qù.) — Я пойду с другом.',
            '茶和咖啡我都喜欢。 (Chá hé kāfēi wǒ dōu xǐhuan.) — Мне нравятся и чай, и кофе.',
            '你要和我吃饭吗？ (Nǐ yào hé wǒ chīfàn ma?) — Ты хочешь поесть со мной?'
        ]
    },
    7: {
        glyph: '对',
        pinyin: 'duì',
        translation: 'к/по отношению к',
        examples: [
            '他对我说“你好”。 (Tā duì wǒ shuō “nǐ hǎo”.) — Он сказал мне "привет".',
            '这个对我很重要。 (Zhège duì wǒ hěn zhòngyào.) — Это очень важно для меня.',
            '对这个问题，我不知道。 (Duì zhège wèntí, wǒ bù zhīdào.) — Насчёт этого вопроса я не знаю.'
        ]
    },
    8: {
        glyph: '关于',
        pinyin: 'guānyú',
        translation: 'о',
        examples: [
            '这是一本关于中国的书。 (Zhè shì yī běn guānyú Zhōngguó de shū.) — Это книга о Китае.',
            '关于工作，我们需要谈谈。 (Guānyú gōngzuò, wǒmen xūyào tántán.) — Нам нужно поговорить о работе.',
            '你知道关于这个电影的事吗？ (Nǐ zhīdào guānyú zhège diànyǐng de shì ma?) — Ты знаешь что-нибудь об этом фильме?'
        ]
    },
    9: {
        glyph: '为了',
        pinyin: 'wèile',
        translation: 'для',
        examples: [
            '为了学习中文，我每天练习。 (Wèile xuéxí Zhōngwén, wǒ měitiān liànxí.) — Чтобы учить китайский, я тренируюсь каждый день.',
            '为了健康，我不抽烟。 (Wèile jiànkāng, wǒ bù chōuyān.) — Ради здоровья я не курю.',
            '为了你，我可以做。 (Wèile nǐ, wǒ kěyǐ zuò.) — Для тебя я могу это сделать.'
        ]
    },
    10: {
        glyph: '跟',
        pinyin: 'gēn',
        translation: 'с (вместе)',
        examples: [
            '我要跟你一起去。 (Wǒ yào gēn nǐ yīqǐ qù.) — Я хочу пойти с тобой.',
            '他跟朋友看电影。 (Tā gēn péngyou kàn diànyǐng.) — Он с друзьями смотрит фильм.',
            '你愿意跟我学习吗？ (Nǐ yuànyì gēn wǒ xuéxí ma?) — Ты хочешь учиться со мной?'
        ]
    },
    11: {
        glyph: '在...前面',
        pinyin: 'zài...qiánmiàn',
        translation: 'перед',
        examples: [
            '车在房子前面。 (Chē zài fángzi qiánmiàn.) — Машина перед домом.',
            '我在你前面排队。 (Wǒ zài nǐ qiánmiàn páiduì.) — Я стою в очереди перед тобой.',
            '学校前面有超市。 (Xuéxiào qiánmiàn yǒu chāoshì.) — Перед школой есть супермаркет.'
        ]
    },
    12: {
        glyph: '在...后面',
        pinyin: 'zài...hòumiàn',
        translation: 'за',
        examples: [
            '猫在门后面。 (Māo zài mén hòumiàn.) — Кот за дверью.',
            '银行在餐厅后面。 (Yínháng zài cāntīng hòumiàn.) — Банк находится за рестораном.',
            '请站在我后面。 (Qǐng zhàn zài wǒ hòumiàn.) — Пожалуйста, встань за мной.'
        ]
    },
    13: {
        glyph: '在...之间',
        pinyin: 'zài...zhījiān',
        translation: 'между',
        examples: [
            '公园在学校和超市之间。 (Gōngyuán zài xuéxiào hé chāoshì zhījiān.) — Парк между школой и супермаркетом.',
            '坐在我们之间吧。 (Zuò zài wǒmen zhījiān ba.) — Садись между нами.',
            '北京和上海之间的距离很远。 (Běijīng hé Shànghǎi zhī jiān de jùlí hěn yuǎn.) — Расстояние между Пекином и Шанхаем большое.'
        ]
    },
    14: {
        glyph: '从',
        pinyin: 'cóng',
        translation: 'из/от',
        examples: [
            '我从俄罗斯来。 (Wǒ cóng Èluósī lái.) — Я из России.',
            '从这儿到地铁站很近。 (Cóng zhèr dào dìtiě zhàn hěn jìn.) — Отсюда до станции метро близко.',
            '请从这里开始。 (Qǐng cóng zhèlǐ kāishǐ.) — Пожалуйста, начни отсюда.'
        ]
    },
    15: {
        glyph: '到',
        pinyin: 'dào',
        translation: 'до',
        examples: [
            '我明天到北京。 (Wǒ míngtiān dào Běijīng.) — Я приеду в Пекин завтра.',
            '工作到五点。 (Gōngzuò dào wǔ diǎn.) — Работаю до пяти.',
            '请把书放到桌子上。 (Qǐng bǎ shū fàng dào zhuōzi shàng.) — Пожалуйста, положи книгу на стол.'
        ]
    }
};
const weekDays: { [key: number]: DictItem } = {
    1: { glyph: '星期一', pinyin: 'xīngqīyī', translation: 'понедельник' },
    2: { glyph: '星期二', pinyin: 'xīngqīèr', translation: 'вторник' },
    3: { glyph: '星期三', pinyin: 'xīngqīsān', translation: 'среда' },
    4: { glyph: '星期四', pinyin: 'xīngqīsì', translation: 'четверг' },
    5: { glyph: '星期五', pinyin: 'xīngqīwǔ', translation: 'пятница' },
    6: { glyph: '星期六', pinyin: 'xīngqīliù', translation: 'суббота' },
    7: { glyph: '星期日', pinyin: 'xīngqīrì', translation: 'воскресенье' }
};
const months: { [key: number]: DictItem } = {
    1: { glyph: '一月', pinyin: 'yī yuè', translation: 'январь' },
    2: { glyph: '二月', pinyin: 'èr yuè', translation: 'февраль' },
    3: { glyph: '三月', pinyin: 'sān yuè', translation: 'март' },
    4: { glyph: '四月', pinyin: 'sì yuè', translation: 'апрель' },
    5: { glyph: '五月', pinyin: 'wǔ yuè', translation: 'май' },
    6: { glyph: '六月', pinyin: 'liù yuè', translation: 'июнь' },
    7: { glyph: '七月', pinyin: 'qī yuè', translation: 'июль' },
    8: { glyph: '八月', pinyin: 'bā yuè', translation: 'август' },
    9: { glyph: '九月', pinyin: 'jiǔ yuè', translation: 'сентябрь' },
    10: { glyph: '十月', pinyin: 'shí yuè', translation: 'октябрь' },
    11: { glyph: '十一月', pinyin: 'shíyī yuè', translation: 'ноябрь' },
    12: { glyph: '十二月', pinyin: 'shíèr yuè', translation: 'декабрь' }
};
const numbers: { [key: number]: DictItem } = {
    0: { glyph: '零', pinyin: 'líng', translation: 'ноль' },
    1: { glyph: '一', pinyin: 'yī', translation: 'один' },
    2: { glyph: '二', pinyin: 'èr', translation: 'два' },
    3: { glyph: '三', pinyin: 'sān', translation: 'три' },
    4: { glyph: '四', pinyin: 'sì', translation: 'четыре' },
    5: { glyph: '五', pinyin: 'wǔ', translation: 'пять' },
    6: { glyph: '六', pinyin: 'liù', translation: 'шесть' },
    7: { glyph: '七', pinyin: 'qī', translation: 'семь' },
    8: { glyph: '八', pinyin: 'bā', translation: 'восемь' },
    9: { glyph: '九', pinyin: 'jiǔ', translation: 'девять' },
    10: { glyph: '十', pinyin: 'shí', translation: 'десять' },
    100: { glyph: '百', pinyin: 'bǎi', translation: 'сто' },
    1000: { glyph: '千', pinyin: 'qiān', translation: 'тысяча' },
    10000: { glyph: '万', pinyin: 'wàn', translation: 'десять тысяч' }
};
const modalVerbs: { [key: number]: DictItem } = {
    1: {
        glyph: '可以',
        pinyin: 'kěyǐ',
        translation: 'можно/иметь разрешение',
        examples: [
            '我可以进来吗？ (Wǒ kěyǐ jìnlái ma?) — Можно мне войти?',
            '这里可以拍照。 (Zhèlǐ kěyǐ pāizhào.) — Здесь можно фотографировать.'
        ]
    },
    2: {
        glyph: '能',
        pinyin: 'néng',
        translation: 'мочь/быть способным',
        examples: [
            '你能帮我吗？ (Nǐ néng bāng wǒ ma?) — Ты можешь мне помочь?',
            '我今天不能来。 (Wǒ jīntiān bù néng lái.) — Я сегодня не смогу прийти.'
        ]
    },
    3: {
        glyph: '会',
        pinyin: 'huì',
        translation: 'уметь/знать (навык)',
        examples: [
            '我会说中文。 (Wǒ huì shuō Zhōngwén.) — Я умею говорить по-китайски.',
            '他不会游泳。 (Tā bù huì yóuyǒng.) — Он не умеет плавать.'
        ]
    },
    4: {
        glyph: '要',
        pinyin: 'yào',
        translation: 'хотеть/намереваться',
        examples: [
            '我要喝水。 (Wǒ yào hē shuǐ.) — Я хочу пить воду.',
            '你要去哪里？ (Nǐ yào qù nǎlǐ?) — Куда ты собираешься идти?'
        ]
    },
    5: {
        glyph: '应该',
        pinyin: 'yīnggāi',
        translation: 'должен/следует',
        examples: [
            '你应该早睡。 (Nǐ yīnggāi zǎo shuì.) — Тебе следует рано ложиться.',
            '不应该说谎。 (Bù yīnggāi shuōhuǎng.) — Не следует лгать.'
        ]
    },
    6: {
        glyph: '必须',
        pinyin: 'bìxū',
        translation: 'обязательно/необходимо',
        examples: [
            '你必须完成作业。 (Nǐ bìxū wánchéng zuòyè.) — Ты обязан закончить домашку.',
            '必须戴口罩。 (Bìxū dài kǒuzhào.) — Обязательно носить маску.'
        ]
    },
    7: {
        glyph: '敢',
        pinyin: 'gǎn',
        translation: 'сметь/осмелиться',
        examples: [
            '我不敢说。 (Wǒ bù gǎn shuō.) — Я не осмеливаюсь сказать.',
            '你敢试试吗？ (Nǐ gǎn shìshi ma?) — Осмелишься попробовать?'
        ]
    },
    8: {
        glyph: '想',
        pinyin: 'xiǎng',
        translation: 'хотеть/думать о',
        examples: [
            '我想去中国。 (Wǒ xiǎng qù Zhōngguó.) — Я хочу поехать в Китай.',
            '你想吃什么？ (Nǐ xiǎng chī shénme?) — Что ты хочешь поесть?'
        ]
    },
    9: {
        glyph: '需要',
        pinyin: 'xūyào',
        translation: 'нуждаться/требоваться',
        examples: [
            '我需要帮助。 (Wǒ xūyào bāngzhù.) — Мне нужна помощь.',
            '你需要休息。 (Nǐ xūyào xiūxi.) — Тебе нужно отдохнуть.'
        ]
    },
    10: {
        glyph: '愿意',
        pinyin: 'yuànyì',
        translation: 'быть готовым/согласиться',
        examples: [
            '你愿意帮我吗？ (Nǐ yuànyì bāng wǒ ma?) — Ты готов мне помочь?',
            '我不愿意去。 (Wǒ bù yuànyì qù.) — Я не хочу идти.'
        ]
    }
};
const nouns: { [key: number]: DictItem & { examples: string[] } } = {
    // Время суток
    1: {
        glyph: '早上',
        pinyin: 'zǎoshang',
        translation: 'утро',
        examples: [
            '我每天早上六点起床。 (Wǒ měitiān zǎoshang liù diǎn qǐchuáng.) — Я встаю в 6 утра каждый день.',
            '早上我喜欢喝茶。 (Zǎoshang wǒ xǐhuan hē chá.) — Утром я люблю пить чай.',
            '明天早上我们有会议。 (Míngtiān zǎoshang wǒmen yǒu huìyì.) — Завтра утром у нас собрание.'
        ]
    },
    2: {
        glyph: '上午',
        pinyin: 'shàngwǔ',
        translation: 'до полудня',
        examples: [
            '上午我通常很忙。 (Shàngwǔ wǒ tōngcháng hěn máng.) — До полудня я обычно занят.',
            '我们上午十点见面吧。 (Wǒmen shàngwǔ shí diǎn jiànmiàn ba.) — Давай встретимся в 10 утра.',
            '上午的课取消了。 (Shàngwǔ de kè qǔxiāo le.) — Утренние занятия отменили.'
        ]
    },
    3: {
        glyph: '中午',
        pinyin: 'zhōngwǔ',
        translation: 'полдень',
        examples: [
            '中午我们一起吃午饭吧。 (Zhōngwǔ wǒmen yīqǐ chī wǔfàn ba.) — Давай вместе пообедаем в полдень.',
            '中午十二点休息。 (Zhōngwǔ shí\'èr diǎn xiūxi.) — В полдень перерыв.',
            '中午的阳光很强烈。 (Zhōngwǔ de yángguāng hěn qiángliè.) — В полдень солнце очень яркое.'
        ]
    },
    4: {
        glyph: '下午',
        pinyin: 'xiàwǔ',
        translation: 'после полудня',
        examples: [
            '下午我要去超市。 (Xiàwǔ wǒ yào qù chāoshì.) — После полудня я пойду в магазин.',
            '下午三点开会。 (Xiàwǔ sān diǎn kāihuì.) — В 3 часа дня будет собрание.',
            '下午的咖啡让我清醒。 (Xiàwǔ de kāfēi ràng wǒ qīngxǐng.) — Послеобеденный кофе помогает мне взбодриться.'
        ]
    },
    5: {
        glyph: '晚上',
        pinyin: 'wǎnshang',
        translation: 'вечер',
        examples: [
            '晚上我看电视放松。 (Wǎnshang wǒ kàn diànshì fàngsōng.) — Вечером я расслабляюсь, смотря телевизор.',
            '今天晚上有电影。 (Jīntiān wǎnshang yǒu diànyǐng.) — Сегодня вечером будет кино.',
            '你晚上几点睡觉？ (Nǐ wǎnshang jǐ diǎn shuìjiào?) — Во сколько ты ложишься спать вечером?'
        ]
    },
    6: {
        glyph: '夜里',
        pinyin: 'yèli',
        translation: 'ночь',
        examples: [
            '夜里很安静。 (Yèli hěn ānjìng.) — Ночью очень тихо.',
            '他夜里工作。 (Tā yèli gōngzuò.) — Он работает по ночам.',
            '昨天夜里下雨了。 (Zuótiān yèli xiàyǔ le.) — Вчера ночью шёл дождь.'
        ]
    },

    // Еда и напитки
    7: {
        glyph: '早餐',
        pinyin: 'zǎocān',
        translation: 'завтрак',
        examples: [
            '我早餐吃面包和鸡蛋。 (Wǒ zǎocān chī miànbāo hé jīdàn.) — На завтрак я ем хлеб и яйца.',
            '酒店的早餐很丰富。 (Jiǔdiàn de zǎocān hěn fēngfù.) — В отеле богатый завтрак.',
            '你早餐通常吃什么？ (Nǐ zǎocān tōngcháng chī shénme?) — Что ты обычно ешь на завтрак?'
        ]
    },
    8: {
        glyph: '午餐',
        pinyin: 'wǔcān',
        translation: 'обед',
        examples: [
            '午餐时间是一小时。 (Wǔcān shíjiān shì yī xiǎoshí.) — Обеденный перерыв длится час.',
            '我们在餐厅吃午餐。 (Wǒmen zài cāntīng chī wǔcān.) — Мы обедаем в ресторане.',
            '今天的午餐很美味。 (Jīntiān de wǔcān hěn měiwèi.) — Сегодняшний обед был очень вкусным.'
        ]
    },
    9: {
        glyph: '晚餐',
        pinyin: 'wǎncān',
        translation: 'ужин',
        examples: [
            '晚餐我们吃中餐。 (Wǎncān wǒmen chī Zhōngcān.) — На ужин у нас китайская еда.',
            '七点吃晚餐。 (Qī diǎn chī wǎncān.) — Ужинаем в 7 часов.',
            '你准备好晚餐了吗？ (Nǐ zhǔnbèi hǎo wǎncān le ma?) — Ты приготовил ужин?'
        ]
    },
    10: {
        glyph: '咖啡',
        pinyin: 'kāfēi',
        translation: 'кофе',
        examples: [
            '我要一杯黑咖啡。 (Wǒ yào yī bēi hēi kāfēi.) — Я хочу чашку чёрного кофе.',
            '咖啡太烫了。 (Kāfēi tài tàng le.) — Кофе слишком горячий.',
            '这家店的咖啡很棒。 (Zhè jiā diàn de kāfēi hěn bàng.) — В этом заведении отличный кофе.'
        ]
    },
    11: {
        glyph: '茶',
        pinyin: 'chá',
        translation: 'чай',
        examples: [
            '我喜欢喝绿茶。 (Wǒ xǐhuan hē lǜchá.) — Я люблю пить зелёный чай.',
            '请给我一杯茶。 (Qǐng gěi wǒ yī bēi chá.) — Дайте мне чашку чая, пожалуйста.',
            '这种茶很香。 (Zhè zhǒng chá hěn xiāng.) — Этот чай очень ароматный.'
        ]
    },
    12: {
        glyph: '水',
        pinyin: 'shuǐ',
        translation: 'вода',
        examples: [
            '请给我一瓶水。 (Qǐng gěi wǒ yī píng shuǐ.) — Дайте мне бутылку воды, пожалуйста.',
            '多喝水对身体好。 (Duō hē shuǐ duì shēntǐ hǎo.) — Пить много воды полезно для здоровья.',
            '这水可以喝吗？ (Zhè shuǐ kěyǐ hē ma?) — Эту воду можно пить?'
        ]
    },
    13: {
        glyph: '面包',
        pinyin: 'miànbāo',
        translation: 'хлеб',
        examples: [
            '我早餐吃面包。 (Wǒ zǎocān chī miànbāo.) — На завтрак я ем хлеб.',
            '请买些面包回来。 (Qǐng mǎi xiē miànbāo huílái.) — Купи, пожалуйста, хлеба по пути.',
            '这面包新鲜吗？ (Zhè miànbāo xīnxiān ma?) — Этот хлеб свежий?'
        ]
    },
    14: {
        glyph: '米饭',
        pinyin: 'mǐfàn',
        translation: 'рис',
        examples: [
            '中国人每天吃米饭。 (Zhōngguó rén měitiān chī mǐfàn.) — Китайцы едят рис каждый день.',
            '这米饭有点硬。 (Zhè mǐfàn yǒudiǎn yìng.) — Этот рис немного твёрдый.',
            '请再给我一碗米饭。 (Qǐng zài gěi wǒ yī wǎn mǐfàn.) — Дайте мне ещё одну порцию риса, пожалуйста.'
        ]
    },
    15: {
        glyph: '面条',
        pinyin: 'miàntiáo',
        translation: 'лапша',
        examples: [
            '我喜欢吃牛肉面。 (Wǒ xǐhuan chī niúròu miàn.) — Я люблю есть лапшу с говядиной.',
            '你会做面条吗？ (Nǐ huì zuò miàntiáo ma?) — Ты умеешь готовить лапшу?',
            '这面条太咸了。 (Zhè miàntiáo tài xián le.) — Эта лапша слишком солёная.'
        ]
    },
    16: {
        glyph: '水果',
        pinyin: 'shuǐguǒ',
        translation: 'фрукты',
        examples: [
            '每天吃水果很健康。 (Měitiān chī shuǐguǒ hěn jiànkāng.) — Есть фрукты каждый день полезно для здоровья.',
            '你喜欢什么水果？ (Nǐ xǐhuan shénme shuǐguǒ?) — Какие фрукты тебе нравятся?',
            '这些水果新鲜吗？ (Zhèxiē shuǐguǒ xīnxiān ma?) — Эти фрукты свежие?'
        ]
    },
    17: {
        glyph: '蔬菜',
        pinyin: 'shūcài',
        translation: 'овощи',
        examples: [
            '多吃蔬菜对身体好。 (Duō chī shūcài duì shēntǐ hǎo.) — Есть много овощей полезно для здоровья.',
            '我不喜欢这种蔬菜。 (Wǒ bù xǐhuan zhè zhǒng shūcài.) — Мне не нравится этот вид овощей.',
            '今天的蔬菜很新鲜。 (Jīntiān de shūcài hěn xīnxiān.) — Сегодняшние овощи очень свежие.'
        ]
    },

    // Места
    18: {
        glyph: '家',
        pinyin: 'jiā',
        translation: 'дом',
        examples: [
            '我五点回家。 (Wǒ wǔ diǎn huí jiā.) — Я возвращаюсь домой в пять.',
            '你家很漂亮。 (Nǐ jiā hěn piàoliang.) — Твой дом очень красивый.',
            '我想在家工作。 (Wǒ xiǎng zài jiā gōngzuò.) — Я хочу работать из дома.'
        ]
    },
    19: {
        glyph: '公司',
        pinyin: 'gōngsī',
        translation: 'офис',
        examples: [
            '我在科技公司工作。 (Wǒ zài kējì gōngsī gōngzuò.) — Я работаю в IT-компании.',
            '公司离我家很近。 (Gōngsī lí wǒ jiā hěn jìn.) — Офис находится близко от моего дома.',
            '今天公司放假。 (Jīntiān gōngsī fàngjià.) — Сегодня в компании выходной.'
        ]
    },
    20: {
        glyph: '学校',
        pinyin: 'xuéxiào',
        translation: 'школа',
        examples: [
            '我的儿子在学校学习。 (Wǒ de érzi zài xuéxiào xuéxí.) — Мой сын учится в школе.',
            '学校八点开始上课。 (Xuéxiào bā diǎn kāishǐ shàngkè.) — Занятия в школе начинаются в 8 утра.',
            '这是最好的学校。 (Zhè shì zuì hǎo de xuéxiào.) — Это лучшая школа.'
        ]
    },
    21: {
        glyph: '餐厅',
        pinyin: 'cāntīng',
        translation: 'ресторан',
        examples: [
            '我们晚上去餐厅吃饭。 (Wǒmen wǎnshang qù cāntīng chīfàn.) — Вечером мы пойдём ужинать в ресторан.',
            '这家餐厅很有名。 (Zhè jiā cāntīng hěn yǒumíng.) — Этот ресторан очень известный.',
            '餐厅需要预订吗？ (Cāntīng xūyào yùdìng ma?) — Нужно бронировать столик в ресторане?'
        ]
    },
    22: {
        glyph: '超市',
        pinyin: 'chāoshì',
        translation: 'супермаркет',
        examples: [
            '我去超市买东西。 (Wǒ qù chāoshì mǎi dōngxi.) — Я иду в супермаркет за покупками.',
            '超市24小时营业。 (Chāoshì èrshísì xiǎoshí yíngyè.) — Супермаркет работает круглосуточно.',
            '最近的超市在哪里？ (Zuìjìn de chāoshì zài nǎlǐ?) — Где находится ближайший супермаркет?'
        ]
    },
    23: {
        glyph: '公园',
        pinyin: 'gōngyuán',
        translation: 'парк',
        examples: [
            '周末我们去公园散步。 (Zhōumò wǒmen qù gōngyuán sànbù.) — В выходные мы пойдём гулять в парк.',
            '这个公园很大。 (Zhège gōngyuán hěn dà.) — Этот парк очень большой.',
            '公园里有很多人。 (Gōngyuán lǐ yǒu hěn duō rén.) — В парке много людей.'
        ]
    },
    24: {
        glyph: '医院',
        pinyin: 'yīyuàn',
        translation: 'больница',
        examples: [
            '我妈妈在医院工作。 (Wǒ māma zài yīyuàn gōngzuò.) — Моя мама работает в больнице.',
            '他昨天去了医院。 (Tā zuótiān qù le yīyuàn.) — Вчера он ходил в больницу.',
            '最近的医院在哪里？ (Zuìjìn de yīyuàn zài nǎlǐ?) — Где ближайшая больница?'
        ]
    },
    25: {
        glyph: '银行',
        pinyin: 'yínháng',
        translation: 'банк',
        examples: [
            '我需要去银行取钱。 (Wǒ xūyào qù yínháng qǔ qián.) — Мне нужно сходить в банк, чтобы снять деньги.',
            '银行九点开门。 (Yínháng jiǔ diǎn kāimén.) — Банк открывается в 9 утра.',
            '哪家银行的汇率最好？ (Nǎ jiā yínháng de huìlǜ zuì hǎo?) — В каком банке лучший курс обмена?'
        ]
    },

    // Транспорт
    26: {
        glyph: '地铁',
        pinyin: 'dìtiě',
        translation: 'метро',
        examples: [
            '我每天坐地铁上班。 (Wǒ měitiān zuò dìtiě shàngbān.) — Я каждый день езжу на работу на метро.',
            '地铁站离这里远吗？ (Dìtiě zhàn lí zhèlǐ yuǎn ma?) — Далеко ли отсюда станция метро?',
            '最后一班地铁是几点？ (Zuìhòu yī bān dìtiě shì jǐ diǎn?) — Во сколько последний поезд метро?'
        ]
    },
    27: {
        glyph: '公共汽车',
        pinyin: 'gōnggòng qìchē',
        translation: 'автобус',
        examples: [
            '坐公共汽车很便宜。 (Zuò gōnggòng qìchē hěn piányi.) — Ездить на автобусе очень дёшево.',
            '这辆公共汽车去火车站吗？ (Zhè liàng gōnggòng qìchē qù huǒchē zhàn ma?) — Этот автобус идёт до вокзала?',
            '公共汽车多久一班？ (Gōnggòng qìchē duōjiǔ yī bān?) — Как часто ходят автобусы?'
        ]
    },
    28: {
        glyph: '出租车',
        pinyin: 'chūzūchē',
        translation: 'такси',
        examples: [
            '我们打车去吧。 (Wǒmen dǎ chē qù ba.) — Давай поедем на такси.',
            '出租车司机很友好。 (Chūzūchē sījī hěn yǒuhǎo.) — Водитель такси очень дружелюбный.',
            '这里的出租车贵吗？ (Zhèlǐ de chūzūchē guì ma?) — Такси здесь дорогое?'
        ]
    },
    29: {
        glyph: '自行车',
        pinyin: 'zìxíngchē',
        translation: 'велосипед',
        examples: [
            '我骑自行车上学。 (Wǒ qí zìxíngchē shàngxué.) — Я езжу в школу на велосипеде.',
            '这座城市适合骑自行车。 (Zhè zuò chéngshì shìhé qí zìxíngchē.) — Этот город удобен для велосипедистов.',
            '你能借我自行车吗？ (Nǐ néng jiè wǒ zìxíngchē ma?) — Ты можешь одолжить мне велосипед?'
        ]
    },
    30: {
        glyph: '飞机',
        pinyin: 'fēijī',
        translation: 'самолёт',
        examples: [
            '我害怕坐飞机。 (Wǒ hàipà zuò fēijī.) — Я боюсь летать на самолёте.',
            '飞机晚点了。 (Fēijī wǎndiǎn le.) — Самолёт задержался.',
            '去上海要坐多久飞机？ (Qù Shànghǎi yào zuò duōjiǔ fēijī?) — Сколько лететь до Шанхая?'
        ]
    },

    // Профессии
    31: {
        glyph: '医生',
        pinyin: 'yīshēng',
        translation: 'врач',
        examples: [
            '我爸爸是医生。 (Wǒ bàba shì yīshēng.) — Мой папа врач.',
            '你需要看医生。 (Nǐ xūyào kàn yīshēng.) — Тебе нужно обратиться к врачу.',
            '医生怎么说？ (Yīshēng zěnme shuō?) — Что сказал врач?'
        ]
    },
    32: {
        glyph: '老师',
        pinyin: 'lǎoshī',
        translation: 'учитель',
        examples: [
            '我的中文老师很好。 (Wǒ de Zhōngwén lǎoshī hěn hǎo.) — Мой учитель китайского очень хороший.',
            '她想当老师。 (Tā xiǎng dāng lǎoshī.) — Она хочет стать учителем.',
            '老师明天请假。 (Lǎoshī míngtiān qǐngjià.) — Завтра учитель не придёт.'
        ]
    },
    33: {
        glyph: '学生',
        pinyin: 'xuéshēng',
        translation: 'студент',
        examples: [
            '我是语言学生。 (Wǒ shì yǔyán xuéshēng.) — Я студент-лингвист.',
            '学生们在教室里。 (Xuéshēngmen zài jiàoshì lǐ.) — Студенты в аудитории.',
            '学生证可以打折吗？ (Xuéshēng zhèng kěyǐ dǎzhé ma?) — Можно получить скидку по студенческому билету?'
        ]
    },
    34: {
        glyph: '工程师',
        pinyin: 'gōngchéngshī',
        translation: 'инженер',
        examples: [
            '我哥哥是软件工程师。 (Wǒ gēge shì ruǎnjiàn gōngchéngshī.) — Мой брат инженер-программист.',
            '工程师解决了这个问题。 (Gōngchéngshī jiějué le zhège wèntí.) — Инженер решил эту проблему.',
            '我们需要一名工程师。 (Wǒmen xūyào yī míng gōngchéngshī.) — Нам нужен инженер.'
        ]
    },
    35: {
        glyph: '厨师',
        pinyin: 'chúshī',
        translation: 'повар',
        examples: [
            '这家餐厅的厨师很有名。 (Zhè jiā cāntīng de chúshī hěn yǒumíng.) — Повар этого ресторана очень известный.',
            '他学习成为一名厨师。 (Tā xuéxí chéngwéi yī míng chúshī.) — Он учится на повара.',
            '厨师正在准备晚餐。 (Chúshī zhèngzài zhǔnbèi wǎncān.) — Повар готовит ужин.'
        ]
    },
    36: {
        glyph: '司机',
        pinyin: 'sījī',
        translation: 'водитель',
        examples: [
            '出租车司机认识路。 (Chūzūchē sījī rènshi lù.) — Водитель такси знает дорогу.',
            '我需要一名司机。 (Wǒ xūyào yī míng sījī.) — Мне нужен водитель.',
            '公交车司机很耐心。 (Gōngjiāochē sījī hěn nàixīn.) — Водитель автобуса очень терпеливый.'
        ]
    },

    // Техника и гаджеты
    37: {
        glyph: '手机',
        pinyin: 'shǒujī',
        translation: 'телефон',
        examples: [
            '我的手机没电了。 (Wǒ de shǒujī méi diàn le.) — У меня сел телефон.',
            '这是最新款的手机。 (Zhè shì zuì xīn kuǎn de shǒujī.) — Это телефон самой новой модели.',
            '请用手机扫描二维码。 (Qǐng yòng shǒujī sǎomiáo èrwéimǎ.) — Пожалуйста, отсканируйте QR-код телефоном.'
        ]
    },
    38: {
        glyph: '电脑',
        pinyin: 'diànnǎo',
        translation: 'компьютер',
        examples: [
            '我用电脑工作。 (Wǒ yòng diànnǎo gōngzuò.) — Я работаю за компьютером.',
            '电脑死机了。 (Diànnǎo sǐjī le.) — Компьютер завис.',
            '这台电脑多少钱？ (Zhè tái diànnǎo duōshǎo qián?) — Сколько стоит этот компьютер?'
        ]
    },
    39: {
        glyph: '电视',
        pinyin: 'diànshì',
        translation: 'телевизор',
        examples: [
            '晚上我看电视。 (Wǎnshang wǒ kàn diànshì.) — Вечером я смотрю телевизор.',
            '新电视太大了。 (Xīn diànshì tài dà le.) — Новый телевизор слишком большой.',
            '请打开电视。 (Qǐng dǎkāi diànshì.) — Включи телевизор, пожалуйста.'
        ]
    },
    40: {
        glyph: '耳机',
        pinyin: 'ěrjī',
        translation: 'наушники',
        examples: [
            '我用耳机听音乐。 (Wǒ yòng ěrjī tīng yīnyuè.) — Я слушаю музыку в наушниках.',
            '无线耳机很方便。 (Wúxiàn ěrjī hěn fāngbiàn.) — Беспроводные наушники очень удобные.',
            '我的耳机坏了。 (Wǒ de ěrjī huài le.) — Мои наушники сломались.'
        ]
    },
    41: {
        glyph: '手表',
        pinyin: 'shǒubiǎo',
        translation: 'часы',
        examples: [
            '这是智能手表。 (Zhè shì zhìnéng shǒubiǎo.) — Это умные часы.',
            '我的手表停了。 (Wǒ de shǒubiǎo tíng le.) — Мои часы остановились.',
            '手表显示几点？ (Shǒubiǎo xiǎnshì jǐ diǎn?) — Который час показывают часы?'
        ]
    },

    // Другие полезные слова
    42: {
        glyph: '钱',
        pinyin: 'qián',
        translation: 'деньги',
        examples: [
            '我没带钱。 (Wǒ méi dài qián.) — Я не взял деньги.',
            '赚钱不容易。 (Zhuàn qián bù róngyì.) — Зарабатывать деньги непросто.',
            '这些钱够吗？ (Zhèxiē qián gòu ma?) — Этих денег хватит?'
        ]
    },
    43: {
        glyph: '时间',
        pinyin: 'shíjiān',
        translation: 'время',
        examples: [
            '我没有时间。 (Wǒ méiyǒu shíjiān.) — У меня нет времени.',
            '现在是什么时间？ (Xiànzài shì shénme shíjiān?) — Который сейчас час?',
            '时间过得真快。 (Shíjiān guò de zhēn kuài.) — Время летит так быстро.'
        ]
    },
    44: {
        glyph: '工作',
        pinyin: 'gōngzuò',
        translation: 'работа',
        examples: [
            '我找到新工作了。 (Wǒ zhǎodào xīn gōngzuò le.) — Я нашёл новую работу.',
            '工作很忙。 (Gōngzuò hěn máng.) — На работе очень занято.',
            '你喜欢你的工作吗？ (Nǐ xǐhuan nǐ de gōngzuò ma?) — Тебе нравится твоя работа?'
        ]
    },
    45: {
        glyph: '朋友',
        pinyin: 'péngyou',
        translation: 'друг',
        examples: [
            '他是我的好朋友。 (Tā shì wǒ de hǎo péngyou.) — Он мой хороший друг.',
            '我和朋友一起旅行。 (Wǒ hé péngyou yīqǐ lǚxíng.) — Я путешествую с другом.',
            '你有很多朋友吗？ (Nǐ yǒu hěn duō péngyou ma?) — У тебя много друзей?'
        ]
    },
    46: {
        glyph: '家庭',
        pinyin: 'jiātíng',
        translation: 'семья',
        examples: [
            '我的家庭很小。 (Wǒ de jiātíng hěn xiǎo.) — Моя семья маленькая.',
            '家庭很重要。 (Jiātíng hěn zhòngyào.) — Семья очень важна.',
            '你家庭有几口人？ (Nǐ jiātíng yǒu jǐ kǒu rén?) — Сколько человек в твоей семье?'
        ]
    },
    47: {
        glyph: '天气',
        pinyin: 'tiānqì',
        translation: 'погода',
        examples: [
            '今天天气很好。 (Jīntiān tiānqì hěn hǎo.) — Сегодня хорошая погода.',
            '天气预报说明天会下雨。 (Tiānqì yùbào shuō míngtiān huì xiàyǔ.) — По прогнозу завтра будет дождь.',
            '你那里的天气怎么样？ (Nǐ nàlǐ de tiānqì zěnmeyàng?) — Какая у вас погода?'
        ]
    },
    48: {
        glyph: '电影',
        pinyin: 'diànyǐng',
        translation: 'фильм',
        examples: [
            '我们去看电影吧。 (Wǒmen qù kàn diànyǐng ba.) — Давай пойдём в кино.',
            '这部电影很有趣。 (Zhè bù diànyǐng hěn yǒuqù.) — Этот фильм очень интересный.',
            '你喜欢看什么类型的电影？ (Nǐ xǐhuan kàn shénme lèixíng de diànyǐng?) — Какие фильмы ты любишь смотреть?'
        ]
    },
    49: {
        glyph: '音乐',
        pinyin: 'yīnyuè',
        translation: 'музыка',
        examples: [
            '我喜欢听音乐。 (Wǒ xǐhuan tīng yīnyuè.) — Я люблю слушать музыку.',
            '这是什么音乐？ (Zhè shì shénme yīnyuè?) — Что это за музыка?',
            '音乐声音太大了。 (Yīnyuè shēngyīn tài dà le.) — Музыка играет слишком громко.'
        ]
    },
    50: {
        glyph: '书',
        pinyin: 'shū',
        translation: 'книга',
        examples: [
            '我正在读这本书。 (Wǒ zhèngzài dú zhè běn shū.) — Я сейчас читаю эту книгу.',
            '请借给我一本书。 (Qǐng jiè gěi wǒ yī běn shū.) — Одолжите мне книгу, пожалуйста.',
            '这本书很有趣。 (Zhè běn shū hěn yǒuqù.) — Эта книга очень интересная.'
        ]
    },

    // Мясо (общее)
    51: {
        glyph: '肉',
        pinyin: 'ròu',
        translation: 'мясо',
        examples: [
            '我不吃生肉。 (Wǒ bù chī shēng ròu.) — Я не ем сырое мясо.',
            '这肉新鲜吗？ (Zhè ròu xīnxiān ma?) — Это мясо свежее?',
            '请少放点肉。 (Qǐng shǎo fàng diǎn ròu.) — Положите поменьше мяса, пожалуйста.'
        ]
    },
    52: {
        glyph: '牛肉',
        pinyin: 'niúròu',
        translation: 'говядина',
        examples: [
            '牛肉面很好吃。 (Niúròu miàn hěn hǎochī.) — Лапша с говядиной очень вкусная.',
            '这块牛肉太老了。 (Zhè kuài niúròu tài lǎo le.) — Этот кусок говядины слишком жёсткий.',
            '清真餐厅有牛肉吗？ (Qīngzhēn cāntīng yǒu niúròu ma?) — В халяльном ресторане есть говядина?'
        ]
    },
    53: {
        glyph: '猪肉',
        pinyin: 'zhūròu',
        translation: 'свинина',
        examples: [
            '猪肉饺子很受欢迎。 (Zhūròu jiǎozi hěn shòu huānyíng.) — Пельмени со свининой очень популярны.',
            '我不吃猪肉。 (Wǒ bù chī zhūròu.) — Я не ем свинину.',
            '这猪肉多少钱一斤？ (Zhè zhūròu duōshǎo qián yī jīn?) — Сколько стоит полкило этой свинины?'
        ]
    },
    54: {
        glyph: '羊肉',
        pinyin: 'yángròu',
        translation: 'баранина',
        examples: [
            '羊肉串很好吃。 (Yángròu chuàn hěn hǎochī.) — Шашлык из баранины очень вкусный.',
            '冬天吃羊肉暖身。 (Dōngtiān chī yángròu nuǎn shēn.) — Зимой баранина согревает.',
            '清真餐厅的羊肉很新鲜。 (Qīngzhēn cāntīng de yángròu hěn xīnxiān.) — В халяльном ресторане очень свежая баранина.'
        ]
    },
    55: {
        glyph: '鸡肉',
        pinyin: 'jīròu',
        translation: 'курятина',
        examples: [
            '鸡肉沙拉很健康。 (Jīròu shālà hěn jiànkāng.) — Салат с курицей очень полезный.',
            '这鸡肉煮多久？ (Zhè jīròu zhǔ duōjiǔ?) — Сколько варить эту курицу?',
            '请给我一份鸡肉炒饭。 (Qǐng gěi wǒ yī fèn jīròu chǎofàn.) — Дайте мне жареный рис с курицей.'
        ]
    },
    56: {
        glyph: '鸭肉',
        pinyin: 'yāròu',
        translation: 'утятина',
        examples: [
            '北京烤鸭很有名。 (Běijīng kǎoyā hěn yǒumíng.) — Пекинская утка очень известна.',
            '我不喜欢鸭肉的味道。 (Wǒ bù xǐhuan yāròu de wèidào.) — Мне не нравится вкус утки.',
            '这鸭肉怎么做？ (Zhè yāròu zěnme zuò?) — Как приготовить эту утку?'
        ]
    },
    57: {
        glyph: '鱼肉',
        pinyin: 'yúròu',
        translation: 'рыба',
        examples: [
            '鱼肉对大脑好。 (Yúròu duì dànǎo hǎo.) — Рыба полезна для мозга.',
            '这鱼肉有刺吗？ (Zhè yúròu yǒu cì ma?) — В этой рыбе есть кости?',
            '清蒸鱼肉很健康。 (Qīngzhēng yúròu hěn jiànkāng.) — Рыба на пару очень полезна.'
        ]
    },
    58: {
        glyph: '香肠',
        pinyin: 'xiāngcháng',
        translation: 'колбаса',
        examples: [
            '德国香肠很有名。 (Déguó xiāngcháng hěn yǒumíng.) — Немецкие колбасы очень известны.',
            '早餐我吃香肠和鸡蛋。 (Zǎocān wǒ chī xiāngcháng hé jīdàn.) — На завтрак я ем колбасу и яйца.',
            '这香肠太咸了。 (Zhè xiāngcháng tài xián le.) — Эта колбаса слишком солёная.'
        ]
    },
    59: {
        glyph: '培根',
        pinyin: 'péigēn',
        translation: 'бекон',
        examples: [
            '培根煎蛋很好吃。 (Péigēn jiāndàn hěn hǎochī.) — Яичница с беконом очень вкусная.',
            '我不吃培根。 (Wǒ bù chī péigēn.) — Я не ем бекон.',
            '请加两片培根。 (Qǐng jiā liǎng piàn péigēn.) — Добавьте два кусочка бекона, пожалуйста.'
        ]
    },

    // Субпродукты
    60: {
        glyph: '肝脏',
        pinyin: 'gānzàng',
        translation: 'печень',
        examples: [
            '炒肝脏很有营养。 (Chǎo gānzàng hěn yǒu yíngyǎng.) — Жареная печень очень питательна.',
            '我不喜欢肝脏的味道。 (Wǒ bù xǐhuan gānzàng de wèidào.) — Мне не нравится вкус печени.',
            '鹅肝酱是法国美食。 (Égān jiàng shì Fǎguó měishí.) — Фуа-гра — это французский деликатес.'
        ]
    },
    61: {
        glyph: '心脏',
        pinyin: 'xīnzàng',
        translation: 'сердце',
        examples: [
            '鸡心脏可以烤着吃。 (Jī xīnzàng kěyǐ kǎo zhe chī.) — Куриные сердца можно жарить.',
            '心脏富含铁质。 (Xīnzàng fù hán tiězhì.) — Сердце богато железом.',
            '这道菜里有猪心脏吗？ (Zhè dào cài lǐ yǒu zhū xīnzàng ma?) — В этом блюде есть свиное сердце?'
        ]
    },

    // Специи и травы
    62: {
        glyph: '盐',
        pinyin: 'yán',
        translation: 'соль',
        examples: [
            '请把盐递给我。 (Qǐng bǎ yán dì gěi wǒ.) — Передайте мне соль, пожалуйста.',
            '汤里需要加盐。 (Tāng lǐ xūyào jiā yán.) — В суп нужно добавить соль.',
            '少吃盐更健康。 (Shǎo chī yán gèng jiànkāng.) — Меньше соли — полезнее для здоровья.'
        ]
    },
    63: {
        glyph: '糖',
        pinyin: 'táng',
        translation: 'сахар',
        examples: [
            '咖啡里要加糖吗？ (Kāfēi lǐ yào jiā táng ma?) — В кофе добавить сахар?',
            '我喝茶不加糖。 (Wǒ hē chá bù jiā táng.) — Я пью чай без сахара.',
            '糖吃太多对牙齿不好。 (Táng chī tài duō duì yáchǐ bù hǎo.) — Слишком много сахара вредно для зубов.'
        ]
    },
    64: {
        glyph: '胡椒',
        pinyin: 'hújiāo',
        translation: 'перец',
        examples: [
            '黑胡椒更辣。 (Hēi hújiāo gèng là.) — Чёрный перец острее.',
            '请撒点胡椒。 (Qǐng sǎ diǎn hújiāo.) — Поперчите немного, пожалуйста.',
            '白胡椒适合做汤。 (Bái hújiāo shìhé zuò tāng.) — Белый перец хорошо подходит для супов.'
        ]
    },
    65: {
        glyph: '辣椒',
        pinyin: 'làjiāo',
        translation: 'чили',
        examples: [
            '四川菜用很多辣椒。 (Sìchuān cài yòng hěn duō làjiāo.) — В сычуаньской кухне используют много перца чили.',
            '这辣椒太辣了！ (Zhè làjiāo tài là le!) — Этот перец слишком острый!',
            '你能吃辣椒吗？ (Nǐ néng chī làjiāo ma?) — Ты можешь есть острое?'
        ]
    },
    66: {
        glyph: '姜',
        pinyin: 'jiāng',
        translation: 'имбирь',
        examples: [
            '姜茶可以暖身。 (Jiāng chá kěyǐ nuǎn shēn.) — Имбирный чай согревает.',
            '炒菜时放点姜。 (Chǎo cài shí fàng diǎn jiāng.) — При жарке добавьте немного имбиря.',
            '我不喜欢姜的味道。 (Wǒ bù xǐhuan jiāng de wèidào.) — Мне не нравится вкус имбиря.'
        ]
    },
    67: {
        glyph: '蒜',
        pinyin: 'suàn',
        translation: 'чеснок',
        examples: [
            '蒜蓉面包很好吃。 (Suànróng miànbāo hěn hǎochī.) — Хлеб с чесночным маслом очень вкусный.',
            '请多放点蒜。 (Qǐng duō fàng diǎn suàn.) — Положите побольше чеснока, пожалуйста.',
            '吃完蒜记得刷牙。 (Chī wán suàn jìde shuā yá.) — После чеснока не забудьте почистить зубы.'
        ]
    },
    68: {
        glyph: '葱',
        pinyin: 'cōng',
        translation: 'зелёный лук',
        examples: [
            '汤上撒些葱花。 (Tāng shàng sǎ xiē cōnghuā.) — Посыпьте суп зелёным луком.',
            '葱爆羊肉很香。 (Cōng bào yángròu hěn xiāng.) — Баранина с зелёным луком очень ароматная.',
            '我不吃生的葱。 (Wǒ bù chī shēng de cōng.) — Я не ем сырой зелёный лук.'
        ]
    },
    69: {
        glyph: '香菜',
        pinyin: 'xiāngcài',
        translation: 'кинза',
        examples: [
            '越南菜用很多香菜。 (Yuènán cài yòng hěn duō xiāngcài.) — Во вьетнамской кухне используют много кинзы.',
            '请别放香菜。 (Qǐng bié fàng xiāngcài.) — Не кладите кинзу, пожалуйста.',
            '香菜的味道很特别。 (Xiāngcài de wèidào hěn tèbié.) — У кинзы очень своеобразный вкус.'
        ]
    },
    70: {
        glyph: '八角',
        pinyin: 'bājiǎo',
        translation: 'бадьян',
        examples: [
            '红烧肉需要八角。 (Hóngshāo ròu xūyào bājiǎo.) — Для тушёной свинины нужен бадьян.',
            '这汤里有八角吗？ (Zhè tāng lǐ yǒu bājiǎo ma?) — В этом супе есть бадьян?',
            '八角让肉更香。 (Bājiǎo ràng ròu gèng xiāng.) — Бадьян делает мясо ароматнее.'
        ]
    },
    71: {
        glyph: '五香粉',
        pinyin: 'wǔxiāng fěn',
        translation: 'смесь пяти специй',
        examples: [
            '五香粉适合做卤味。 (Wǔxiāng fěn shìhé zuò lǔwèi.) — Смесь пяти специй хорошо подходит для маринованных блюд.',
            '这五香粉太辣了。 (Zhè wǔxiāng fěn tài là le.) — Эта смесь пяти специй слишком острая.',
            '自制五香粉更健康。 (Zìzhì wǔxiāng fěn gèng jiànkāng.) — Домашняя смесь пяти специй полезнее.'
        ]
    },

    // Соусы
    72: {
        glyph: '酱油',
        pinyin: 'jiàngyóu',
        translation: 'соевый соус',
        examples: [
            '炒饭加点酱油。 (Chǎofàn jiā diǎn jiàngyóu.) — Добавьте немного соевого соуса в жареный рис.',
            '生抽和老抽有什么区别？ (Shēngchōu hé lǎochōu yǒu shénme qūbié?) — Чем светлый соевый соус отличается от тёмного?',
            '这酱油太咸了。 (Zhè jiàngyóu tài xián le.) — Этот соевый соус слишком солёный.'
        ]
    },
    73: {
        glyph: '醋',
        pinyin: 'cù',
        translation: 'уксус',
        examples: [
            '饺子蘸醋吃。 (Jiǎozi zhàn cù chī.) — Пельмени едят с уксусом.',
            '山西老陈醋很有名。 (Shānxī lǎo chén cù hěn yǒumíng.) — Уксус из Шаньси очень известен.',
            '少放点醋。 (Shǎo fàng diǎn cù.) — Положите поменьше уксуса.'
        ]
    },
    74: {
        glyph: '番茄酱',
        pinyin: 'fānqié jiàng',
        translation: 'кетчуп',
        examples: [
            '薯条要配番茄酱。 (Shǔtiáo yào pèi fānqié jiàng.) — Картофель фри едят с кетчупом.',
            '这番茄酱太甜了。 (Zhè fānqié jiàng tài tián le.) — Этот кетчуп слишком сладкий.',
            '自制番茄酱更健康。 (Zìzhì fānqié jiàng gèng jiànkāng.) — Домашний кетчуп полезнее.'
        ]
    },
    75: {
        glyph: '辣椒酱',
        pinyin: 'làjiāo jiàng',
        translation: 'острый соус',
        examples: [
            '老干妈辣椒酱很受欢迎。 (Lǎogānmā làjiāo jiàng hěn shòu huānyíng.) — Острый соус "Лао Гань Ма" очень популярен.',
            '这辣椒酱太辣了！ (Zhè làjiāo jiàng tài là le!) — Этот острый соус слишком жгучий!',
            '你能吃辣椒酱吗？ (Nǐ néng chī làjiāo jiàng ma?) — Ты можешь есть острый соус?'
        ]
    },
    76: {
        glyph: '豆瓣酱',
        pinyin: 'dòubàn jiàng',
        translation: 'соус из ферментированных бобов',
        examples: [
            '麻婆豆腐需要豆瓣酱。 (Mápó dòufu xūyào dòubàn jiàng.) — Для тофу по-сычуаньски нужен соус из ферментированных бобов.',
            '这豆瓣酱咸度刚好。 (Zhè dòubàn jiàng xiándù gānghǎo.) — Этот соус из бобов идеально солёный.',
            '豆瓣酱让菜更香。 (Dòubàn jiàng ràng cài gèng xiāng.) — Соус из бобов делает блюдо ароматнее.'
        ]
    },
    77: {
        glyph: '沙拉酱',
        pinyin: 'shālà jiàng',
        translation: 'майонез',
        examples: [
            '蔬菜沙拉加点沙拉酱。 (Shūcài shālà jiā diǎn shālà jiàng.) — Добавьте немного майонеза в овощной салат.',
            '这沙拉酱热量很高。 (Zhè shālà jiàng rèliàng hěn gāo.) — Этот майонез очень калорийный.',
            '自制沙拉酱更健康。 (Zìzhì shālà jiàng gèng jiànkāng.) — Домашний майонез полезнее.'
        ]
    },
    78: {
        glyph: '蜂蜜',
        pinyin: 'fēngmì',
        translation: 'мёд',
        examples: [
            '蜂蜜水可以润喉。 (Fēngmì shuǐ kěyǐ rùn hóu.) — Вода с мёдом смягчает горло.',
            '这蜂蜜很纯正。 (Zhè fēngmì hěn chúnzhèng.) — Этот мёд очень натуральный.',
            '面包涂蜂蜜很好吃。 (Miànbāo tú fēngmì hěn hǎochī.) — Хлеб с мёдом очень вкусный.'
        ]
    },

    // Китайские специфичные ингредиенты
    79: {
        glyph: '豆腐',
        pinyin: 'dòufu',
        translation: 'тофу',
        examples: [
            '麻婆豆腐很辣。 (Mápó dòufu hěn là.) — Тофу по-сычуаньски очень острый.',
            '这豆腐很嫩。 (Zhè dòufu hěn nèn.) — Этот тофу очень нежный.',
            '素食者常吃豆腐。 (Sùshí zhě cháng chī dòufu.) — Вегетарианцы часто едят тофу.'
        ]
    },
    80: {
        glyph: '粉丝',
        pinyin: 'fěnsī',
        translation: 'стеклянная лапша',
        examples: [
            '蚂蚁上树用粉丝。 (Mǎyǐ shàng shù yòng fěnsī.) — Блюдо "Муравьи на дереве" готовят из стеклянной лапши.',
            '这粉丝需要泡多久？ (Zhè fěnsī xūyào pào duōjiǔ?) — Сколько нужно замачивать эту лапшу?',
            '凉拌粉丝很好吃。 (Liángbàn fěnsī hěn hǎochī.) — Холодная закуска из стеклянной лапши очень вкусная.'
        ]
    },
    81: {
        glyph: '木耳',
        pinyin: 'mù\'ěr',
        translation: 'древесные грибы',
        examples: [
            '凉拌木耳很爽口。 (Liángbàn mù\'ěr hěn shuǎngkǒu.) — Холодная закуска из древесных грибов очень освежает.',
            '这木耳需要泡发。 (Zhè mù\'ěr xūyào pàofā.) — Эти грибы нужно замачивать.',
            '木耳炒肉片很香。 (Mù\'ěr chǎo ròu piàn hěn xiāng.) — Жареные ломтики мяса с древесными грибами очень ароматные.'
        ]
    },
    82: {
        glyph: '海带',
        pinyin: 'hǎidài',
        translation: 'морская капуста',
        examples: [
            '海带汤很有营养。 (Hǎidài tāng hěn yǒu yíngyǎng.) — Суп из морской капусты очень питательный.',
            '凉拌海带丝很开胃。 (Liángbàn hǎidài sī hěn kāiwèi.) — Холодная закуска из морской капусты возбуждает аппетит.',
            '这海带需要煮多久？ (Zhè hǎidài xūyào zhǔ duōjiǔ?) — Сколько варить эту морскую капусту?'
        ]
    }
};
const colors: { [key: number]: DictItem & { examples: string[] } } = {
    1: {
        glyph: '红色',
        pinyin: 'hóngsè',
        translation: 'красный',
        examples: [
            '红色的苹果很甜。 (Hóngsè de píngguǒ hěn tián.) — Красные яблоки очень сладкие.',
            '春节时人们喜欢穿红色。 (Chūnjié shí rénmen xǐhuān chuān hóngsè.) — На Китайский Новый год люди любят носить красное.',
            '这个红色太亮了。 (Zhège hóngsè tài liàng le.) — Этот красный слишком яркий.'
        ]
    },
    2: {
        glyph: '橙色',
        pinyin: 'chéngsè',
        translation: 'оранжевый',
        examples: [
            '橙色的夕阳很美。 (Chéngsè de xīyáng hěn měi.) — Оранжевый закат очень красивый.',
            '她买了一件橙色的外套。 (Tā mǎi le yī jiàn chéngsè de wàitào.) — Она купила оранжевое пальто.',
            '胡萝卜是橙色的。 (Húluóbo shì chéngsè de.) — Морковь оранжевого цвета.'
        ]
    },
    3: {
        glyph: '黄色',
        pinyin: 'huángsè',
        translation: 'жёлтый',
        examples: [
            '黄色的出租车很显眼。 (Huángsè de chūzūchē hěn xiǎnyǎn.) — Жёлтые такси очень заметные.',
            '香蕉成熟时会变黄色。 (Xiāngjiāo chéngshú shí huì biàn huángsè.) — Бананы становятся жёлтыми, когда созревают.',
            '我不喜欢这个黄色。 (Wǒ bù xǐhuān zhège huángsè.) — Мне не нравится этот оттенок жёлтого.'
        ]
    },
    4: {
        glyph: '绿色',
        pinyin: 'lǜsè',
        translation: 'зелёный',
        examples: [
            '绿色的植物对眼睛好。 (Lǜsè de zhíwù duì yǎnjīng hǎo.) — Зелёные растения полезны для глаз.',
            '红灯停，绿灯行。 (Hóngdēng tíng, lǜdēng xíng.) — На красный свет стой, на зелёный иди.',
            '这件绿色的衬衫很适合你。 (Zhè jiàn lǜsè de chènshān hěn shìhé nǐ.) — Эта зелёная рубашка тебе очень идёт.'
        ]
    },
    5: {
        glyph: '蓝色',
        pinyin: 'lánsè',
        translation: 'синий',
        examples: [
            '蓝色的天空没有云。 (Lánsè de tiānkōng méiyǒu yún.) — На синем небе нет облаков.',
            '他穿着蓝色的牛仔裤。 (Tā chuānzhe lánsè de niúzǎikù.) — На нём синие джинсы.',
            '深蓝色更适合正式场合。 (Shēn lánsè gèng shìhé zhèngshì chǎnghé.) — Тёмно-синий цвет больше подходит для официальных мероприятий.'
        ]
    },
    6: {
        glyph: '紫色',
        pinyin: 'zǐsè',
        translation: 'фиолетовый',
        examples: [
            '紫色的葡萄很甜。 (Zǐsè de pútáo hěn tián.) — Фиолетовый виноград очень сладкий.',
            '她喜欢紫色的连衣裙。 (Tā xǐhuān zǐsè de liányīqún.) — Ей нравится фиолетовое платье.',
            '这种紫色太暗了。 (Zhè zhǒng zǐsè tài àn le.) — Этот фиолетовый слишком тёмный.'
        ]
    },
    7: {
        glyph: '粉色',
        pinyin: 'fěnsè',
        translation: 'розовый',
        examples: [
            '粉色的小花很可爱。 (Fěnsè de xiǎo huā hěn kě\'ài.) — Розовые цветочки очень милые.',
            '我女儿只喜欢粉色。 (Wǒ nǚ\'ér zhǐ xǐhuān fěnsè.) — Моя дочь любит только розовый цвет.',
            '浅粉色更适合这个房间。 (Qiǎn fěnsè gèng shìhé zhège fángjiān.) — Бледно-розовый больше подходит для этой комнаты.'
        ]
    },
    8: {
        glyph: '棕色',
        pinyin: 'zōngsè',
        translation: 'коричневый',
        examples: [
            '棕色的皮鞋很正式。 (Zōngsè de píxié hěn zhèngshì.) — Коричневые кожаные туфли очень официальные.',
            '咖啡通常是棕色的。 (Kāfēi tōngcháng shì zōngsè de.) — Кофе обычно коричневого цвета.',
            '我喜欢棕色的皮沙发。 (Wǒ xǐhuān zōngsè de pí shāfā.) — Мне нравится коричневый кожаный диван.'
        ]
    },
    9: {
        glyph: '黑色',
        pinyin: 'hēisè',
        translation: 'чёрный',
        examples: [
            '黑色的车看起来更商务。 (Hēisè de chē kàn qǐlái gèng shāngwù.) — Чёрные машины выглядят более деловыми.',
            '他总穿黑色的衣服。 (Tā zǒng chuān hēisè de yīfu.) — Он всегда носит чёрную одежду.',
            '黑咖啡不加糖。 (Hēi kāfēi bù jiā táng.) — Чёрный кофе без сахара.'
        ]
    },
    10: {
        glyph: '白色',
        pinyin: 'báisè',
        translation: 'белый',
        examples: [
            '白色的衬衫容易脏。 (Báisè de chènshān róngyì zāng.) — Белые рубашки быстро пачкаются.',
            '新娘通常穿白色婚纱。 (Xīnniáng tōngcháng chuān báisè hūnshā.) — Невесты обычно носят белые свадебные платья.',
            '白墙让房间看起来更大。 (Bái qiáng ràng fángjiān kàn qǐlái gèng dà.) — Белые стены делают комнату визуально больше.'
        ]
    },
    11: {
        glyph: '灰色',
        pinyin: 'huīsè',
        translation: 'серый',
        examples: [
            '灰色的西装很百搭。 (Huīsè de xīzhuāng hěn bǎidā.) — Серый костюм легко сочетается.',
            '阴天时天空是灰色的。 (Yīntiān shí tiānkōng shì huīsè de.) — В пасмурный день небо серое.',
            '浅灰色更适合办公室。 (Qiǎn huīsè gèng shìhé bàngōngshì.) — Светло-серый больше подходит для офиса.'
        ]
    },
    12: {
        glyph: '金色',
        pinyin: 'jīnsè',
        translation: 'золотой',
        examples: [
            '金色的首饰很贵。 (Jīnsè de shǒushì hěn guì.) — Золотые украшения очень дорогие.',
            '奖杯通常是金色的。 (Jiǎngbēi tōngcháng shì jīnsè de.) — Кубки обычно золотого цвета.',
            '夕阳把云染成了金色。 (Xīyáng bǎ yún rǎn chéng le jīnsè.) — Закат окрасил облака в золотой цвет.'
        ]
    },
    13: {
        glyph: '银色',
        pinyin: 'yínsè',
        translation: 'серебряный',
        examples: [
            '银色的车很耐脏。 (Yínsè de chē hěn nài zāng.) — Серебристые машины не так заметна грязь.',
            '她戴着银色的耳环。 (Tā dàizhe yínsè de ěrhuán.) — На ней серебряные серёжки.',
            '银色比金色更低调。 (Yínsè bǐ jīnsè gèng dīdiào.) — Серебряный цвет более сдержанный, чем золотой.'
        ]
    },
    14: {
        glyph: '青色',
        pinyin: 'qīngsè',
        translation: 'бирюзовый/голубой',
        examples: [
            '青色的海水很清澈。 (Qīngsè de hǎishuǐ hěn qīngchè.) — Бирюзовая морская вода очень прозрачная.',
            '这件青色的旗袍很特别。 (Zhè jiàn qīngsè de qípáo hěn tèbié.) — Это бирюзовое ципао очень необычное.',
            '青色介于绿色和蓝色之间。 (Qīngsè jièyú lǜsè hé lánsè zhī jiān.) — Бирюзовый цвет находится между зелёным и синим.'
        ]
    },
    15: {
        glyph: '深色',
        pinyin: 'shēnsè',
        translation: 'тёмный цвет',
        examples: [
            '深色的衣服显瘦。 (Shēnsè de yīfu xiǎn shòu.) — Тёмная одежда стройнит.',
            '冬天我更喜欢深色。 (Dōngtiān wǒ gèng xǐhuān shēnsè.) — Зимой я предпочитаю тёмные цвета.',
            '深色家具不容易显脏。 (Shēnsè jiājù bù róngyì xiǎn zāng.) — На тёмной мебели не так заметна грязь.'
        ]
    },
    16: {
        glyph: '浅色',
        pinyin: 'qiǎnsè',
        translation: 'светлый цвет',
        examples: [
            '浅色的墙壁让房间更明亮。 (Qiǎnsè de qiángbì ràng fángjiān gèng míngliàng.) — Светлые стены делают комнату светлее.',
            '夏天适合穿浅色衣服。 (Xiàtiān shìhé chuān qiǎnsè yīfu.) — Летом лучше носить светлую одежду.',
            '浅色更容易脏。 (Qiǎnsè gèng róngyì zāng.) — Светлые цвета быстрее пачкаются.'
        ]
    },
    17: {
        glyph: '彩色',
        pinyin: 'cǎisè',
        translation: 'разноцветный',
        examples: [
            '儿童房通常是彩色的。 (Értóng fáng tōngcháng shì cǎisè de.) — Детские комнаты обычно разноцветные.',
            '她喜欢彩色的袜子。 (Tā xǐhuān cǎisè de wàzi.) — Она любит разноцветные носки.',
            '彩虹有七种彩色。 (Cǎihóng yǒu qī zhǒng cǎisè.) — В радуге семь цветов.'
        ]
    },
    18: {
        glyph: '透明',
        pinyin: 'tòumíng',
        translation: 'прозрачный',
        examples: [
            '透明的玻璃杯很干净。 (Tòumíng de bōlibēi hěn gānjìng.) — Прозрачные стаканы выглядят чистыми.',
            '雨伞有透明的部分。 (Yǔsǎn yǒu tòumíng de bùfen.) — В зонтике есть прозрачные части.',
            '这种材料是透明的。 (Zhè zhǒng cáiliào shì tòumíng de.) — Этот материал прозрачный.'
        ]
    },
    19: {
        glyph: '米色',
        pinyin: 'mǐsè',
        translation: 'бежевый',
        examples: [
            '米色的外套很百搭。 (Mǐsè de wàitào hěn bǎidā.) — Бежевое пальто легко сочетается.',
            '我们选择了米色的沙发。 (Wǒmen xuǎnzé le mǐsè de shāfā.) — Мы выбрали бежевый диван.',
            '米色比白色更温暖。 (Mǐsè bǐ báisè gèng wēnnuǎn.) — Бежевый цвет теплее, чем белый.'
        ]
    },
    20: {
        glyph: '咖啡色',
        pinyin: 'kāfēisè',
        translation: 'кофейный цвет',
        examples: [
            '咖啡色的皮鞋很经典。 (Kāfēisè de píxié hěn jīngdiǎn.) — Коричневые кожаные туфли - это классика.',
            '她染了咖啡色的头发。 (Tā rǎn le kāfēisè de tóufa.) — Она покрасила волосы в кофейный цвет.',
            '这个包有咖啡色的吗？ (Zhège bāo yǒu kāfēisè de ma?) — Есть ли эта сумка в кофейном цвете?'
        ]
    },
    21: {
        glyph: '肤色',
        pinyin: 'fūsè',
        translation: 'телесный цвет',
        examples: [
            '肤色的丝袜很自然。 (Fūsè de sīwà hěn zìrán.) — Телесные колготки выглядят естественно.',
            '这件内衣是肤色的。 (Zhè jiàn nèiyī shì fūsè de.) — Это бельё телесного цвета.',
            '肤色不适合做墙色。 (Fūsè bù shìhé zuò qiáng sè.) — Телесный цвет не подходит для стен.'
        ]
    },
    22: {
        glyph: '荧光色',
        pinyin: 'yíngguāngsè',
        translation: 'флуоресцентный цвет',
        examples: [
            '荧光色的衣服很显眼。 (Yíngguāngsè de yīfu hěn xiǎnyǎn.) — Флуоресцентная одежда очень заметная.',
            '安全背心通常是荧光色的。 (Ānquán bèixīn tōngcháng shì yíngguāngsè de.) — Предохранительные жилеты обычно флуоресцентные.',
            '我不喜欢荧光色的东西。 (Wǒ bù xǐhuān yíngguāngsè de dōngxi.) — Мне не нравятся флуоресцентные вещи.'
        ]
    },
    23: {
        glyph: '渐变色',
        pinyin: 'jiànbiànsè',
        translation: 'градиент/переход цвета',
        examples: [
            '这件渐变色T恤很时尚。 (Zhè jiàn jiànbiànsè T-xù hěn shíshàng.) — Эта футболка с градиентом очень модная.',
            '夕阳的天空是渐变色的。 (Xīyáng de tiānkōng shì jiànbiànsè de.) — Небо на закате имеет градиент цвета.',
            '设计师喜欢用渐变色。 (Shèjìshī xǐhuān yòng jiànbiànsè.) — Дизайнеры любят использовать цветовые переходы.'
        ]
    }
};

// Тип для элемента словаря
type DictItem = {
    glyph: string;
    pinyin: string;
    translation: string;
    examples?: string[];
};

// Общий словарь
export const ChineseDictionary = {
    pronouns,
    verbsBasic,
    verbsAction,
    questionWords,
    adverbs,
    phrases,
    adjectives,
    possessive,
    pronounsCases,
    expressions,
    politePhrases,
    prepositions,
    weekDays,
    months,
    numbers,
    modalVerbs,
    nouns,
    colors
};