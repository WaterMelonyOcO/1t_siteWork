// TO-DO: 1. Сохранять чекбокс в localStorage; 2. обработка ошибок

// карточки
const cards = [

    // БАЙКАЛ
    {
        name: 'Лёд Байкала. Фототур',
        img: '../media/imgCatalog/picture_Baikal.jpg',
        description: 'Бескрайние просторы, заснеженные горы и, конечно же, кристально чистый и звонкий байкальский лед. Профессиональный фотограф станет...',
        date: '15 - 20 фев.',
        countDate: 5,
        rating: '5.0',
        countRating: 126,
        price: 21583,
        loc: 'baikal'
    },
    {
        name: 'Байкал с комфортом',
        img: '../media/imgCatalog/picture_Baikal2.png',
        description: 'Вас ждет незабываемое путешествие, во время которого мы посетим самые популярные места Байкала! Увидим юг и север Ольхона...',
        date: '10 - 20 фев.',
        countDate: 10,
        rating: '5.0',
        countRating: 112,
        price: 118000,
        loc: 'baikal'
    },
    {
        name: 'Зимняя сказка Ольхона',
        img: '../media/imgCatalog/picture_Baikal1.png',
        description: 'Настоящая зимняя сказка, окутанная белоснежным занавесом и потрясающим людом Байкала: Пещеры, ледовые гроты, неповторимый лед...',
        date: '15 - 21 фев.',
        countDate: 6,
        rating: '5.0',
        countRating: 108,
        price: 35780,
        loc: 'baikal'
    },
    {
        name: 'Лед Байкала и величие...',
        img: '../media/imgCatalog/picture_Baikal.png',
        description: 'Всего за 5 дней вы посетите две потрясающие локации. Таинственный и могущественный Байкал, овеянный легендами, непередаваемой...',
        date: '15 - 20 фев.',
        countDate: 5,
        rating: '5.0',
        countRating: 108,
        price: 39000,
        loc: 'baikal'
    },
    {
        name: 'Горячие источники',
        img: '../media/imgCatalog/picture_Baikal3.png',
        description: 'В этом туре есть все, что нужно для отличного зимнего отдыха на Байкале: много солнца, уникального льда, зимних активностей, но...',
        date: '10 - 16 фев.',
        countDate: 6,
        rating: '5.0',
        countRating: 98,
        price: 35500,
        loc: 'baikal'
    },
    {
        name: 'Ледотерапия на Байкале',
        img: '../media/imgCatalog/picture_Baikal4.png',
        description: 'Наше зимнее путешествие по Байкалу приурочено к уникальному Международному фестивалю буерного спорта. Это потрясающее...',
        date: '15-20 фев.',
        countDate: 5,
        rating: '5.0',
        countRating: 96,
        price: 29700,
        loc: 'baikal'
    },
    {
        name: 'Зимний мульти-тур',
        img: '../media/imgCatalog/picture_Baikal5.png',
        description: 'Если вы давно мечтаете увидеть невероятный лед Байкала и хотите активную программу, но с комфортным жильем и переходами...',
        date: '18 - 23 фев.',
        countDate: 6,
        rating: '5.0',
        countRating: 95,
        price: 44500,
        loc: 'baikal'
    },
    {
        name: 'Байкал и Бурятия по...',
        img: '../media/imgCatalog/picture_Baikal6.png',
        description: 'Это познавательный и этнографический  тур. Мы будем любоваться байкальским льдом, много перемещаться в тепле и...',
        date: '5 - 11 март.',
        countDate: 7,
        rating: '5.0',
        countRating: 90,
        price: 68000,
        loc: 'baikal'
    },
    {
        name: 'Космическая жара на...',
        img: '../media/imgCatalog/picture_Baikal7.png',
        description: 'Уникальная программа, где вы – первый гость роскошного ресторана среди льдов. Это настоящая инопланетная станция: территория...',
        date: '12 - 15 фев.',
        countDate: 4,
        rating: '5.0',
        countRating: 87,
        price: 75000,
        loc: 'baikal'
    },

    // ДАГЕСТАН
    {
        name: 'Это Кавказ. Зимний тур по пяти республикам',
        img: '../media/imgCatalog/picture_dages1.png',
        description: 'Наиболее полный и насыщенный зимний маршрут по пяти республикам Кавказа: Дагестану, Чечне, Ингушетии, Северной Осетии и...',
        date: '22 - 31 янв.',
        countDate: 10,
        rating: '5.0',
        countRating: 130,
        price: 61000,
        loc: 'dagestan'
    },
    {
        name: 'Огни Дагестана',
        img: '../media/imgCatalog/picture_dages2.png',
        description: 'Во время этого небольшого путешествия мы увидим каньоны и водопады, заброшенные аулы и древние города, мечети и крепости...',
        date: '2 - 5 апр.',
        countDate: 4,
        rating: '5.0',
        countRating: 127,
        price: 25000,
        loc: 'dagestan'
    },
    {
        name: 'Зимняя красота гор и сила традиций Кавказа',
        img: '../media/imgCatalog/picture_dages3.png',
        description: 'Наш яркий экскурсионный тур по зимним четырем республикам Кавказа: Дагестану, Чечне, Ингушетии и Северной Осетии. Во время...',
        date: '22 - 29 янв.',
        countDate: 8,
        rating: '5.0',
        countRating: 126,
        price: 53400,
        loc: 'dagestan'
    },
    {
        name: 'Яркие образы зимнего Кавказа',
        img: '../media/imgCatalog/picture_dages4.png',
        description: 'Вас ждет двенадцатидневная экскурсионная программа по маршруту: Кавминводы – Кабардино-Балкария – Северная Осетия – Ингушетия...',
        date: '21 фев- 4 март.',
        countDate: 12,
        rating: '5.0',
        countRating: 123,
        price: 68000,
        loc: 'dagestan'
    },
    {
        name: 'Зимний Кавказ: КМВ, Приэльбрусье, Дагестан',
        img: '../media/imgCatalog/picture_dages5.png',
        description: 'В этом туре мы посетим все республики Кавказа. Главная изюминка тура – Дагестан – неизведанный край с удивительной природой и...',
        date: '19 - 25 янв.',
        countDate: 7,
        rating: '5.0',
        countRating: 120,
        price: 34900,
        loc: 'dagestan'
    },
    {
        name: 'Выходные на Кавказе: Дагестан и Чечня',
        img: '../media/imgCatalog/picture_dages6.png',
        description: 'Кавказ – это фантастической красоты горы и чистейшая экология, вкусная еда и целебные воды, волны Каспия и мир открытых людей...',
        date: '10 - 12 март.',
        countDate: 3,
        rating: '5.0',
        countRating: 117,
        price: 28700,
        loc: 'dagestan'
    },
    {
        name: 'Знакомство с Чечней и Дагестаном',
        img: '../media/imgCatalog/picture_dages7.png',
        description: 'Обзорные экскурсии Грозного с современными небоскребами в центре города, уютные горные аулы со старинными башнями, уникальное...',
        date: '23 - 27 фев.',
        countDate: 5,
        rating: '5.0',
        countRating: 112,
        price: 33000,
        loc: 'dagestan'
    },
    {
        name: 'Горный Дагестан - тропой Императора',
        img: '../media/imgCatalog/picture_dages8.png',
        description: 'Всеохватывающее увлекательное путешествие по Северному Кавказу! В одном туре вы совершите: авто- и пешие экскурсии в древний...',
        date: '16 - 23 апр.',
        countDate: 8,
        rating: '5.0',
        countRating: 102,
        price: 62000,
        loc: 'dagestan'
    },
    {
        name: 'Дагестан - в страну гор на выходные',
        img: '../media/imgCatalog/picture_dages9.png',
        description: 'Дагестан – неизведанный край с удивительной природой и древней культурой. Здесь каждый камень – история, а каждый дом – музей...',
        date: '24 - 26 фев.',
        countDate: 3,
        rating: '5.0',
        countRating: 102,
        price: 17400,
        loc: 'dagestan'
    },

    // АЛТАЙ
    {
        name: 'Зимний джип-тур ',
        img: '../media/imgCatalog/alt1.jpg',
        description: 'Зимой на Алтае прекрасно. Мы предлагаем отправиться Вам на Алтай – зимний, сказочный и чарующий. Вы познакомитесь с Уймонской...',
        date: '22 - 28 янв.',
        countDate: 7,
        rating: '5.0',
        countRating: 118,
        price: 48800,
        loc: 'altay'
    },
    {
        name: 'Влюбись в зимний Алтай',
        img: '../media/imgCatalog/alt2.jpg',
        description: 'Зимой на Алтае прекрасно. Мы предлагаем отправиться Вам на Алтай – зимний, сказочный и чарующий. Вы познакомитесь с Уймонской...',
        date: '23 - 28 янв.',
        countDate: 6,
        rating: '5.0',
        countRating: 114,
        price: 28000,
        loc: 'altay'
    },
    {
        name: 'Экспедиция на Алтайский Марс',
        img: '../media/imgCatalog/alt3.jpg',
        description: 'В этом коротком туре вы познакомитесь с удивительным Алтаем. Вас ждет поездка по Чуйскому тракту, посещение Алтайского Марса',
        date: '24 - 26 фев.',
        countDate: 3,
        rating: '5.0',
        countRating: 113,
        price: 21500,
        loc: 'altay'
    },
    {
        name: 'Зимнее знакомство с Алтаем',
        img: '../media/imgCatalog/alt4.jpg',
        description: 'Для зимнего знакомства Алтаем мы собрали ТОП алтайских брендов в одной поездке. Чистый воздух, активные экскурсии, погружение в...',
        date: '30 янв- 4 фев.',
        countDate: 5,
        rating: '5.0',
        countRating: 108,
        price: 52900,
        loc: 'altay'
    },
    {
        name: 'Большое снегоходное путешествие',
        img: '../media/imgCatalog/alt5.jpg',
        description: 'Экспедиция по маршруту от озера Манас до Каракольских озер. С кучей снега, без проторенных трасс, (готовьтесь копать), где...',
        date: '20 - 26 фев.',
        countDate: 7,
        rating: '5.0',
        countRating: 105,
        price: 87900,
        loc: 'altay'
    },
    {
        name: 'Майские праздники на Алтае',
        img: '../media/imgCatalog/alt6.jpg',
        description: 'Весной так хочется быть поближе к природе, видеть ее пробуждение, вместе с ней черпать из земли жизненные силы, ощущать свободу...',
        date: '29 апр- 4 мая',
        countDate: 6,
        rating: '5.0',
        countRating: 103,
        price: 42210,
        loc: 'altay'
    },
    {
        name: 'Весенние символы Алтая',
        img: '../media/imgCatalog/alt7.jpg',
        description: 'Весна на Алтае удивительна! Природа оживает, распускаются первые цветы, с гор сходит снег и проявляется первая зелень. Май...',
        date: '23 - 29 апр.',
        countDate: 7,
        rating: '5.0',
        countRating: 96,
        price: 78500,
        loc: 'altay'
    },
    {
        name: 'Майские выходные на Алтае',
        img: '../media/imgCatalog/alt8.jpg',
        description: 'Весна на Алтае удивительна! Природа оживает, распускаются первые цветы, с гор сходит снег и проявляется первая зелень. Май...',
        date: '1 - 6 мая',
        countDate: 6,
        rating: '5.0',
        countRating: 84,
        price: 53700,
        loc: 'altay'
    },
    {
        name: 'Алтай для любознательных',
        img: '../media/imgCatalog/alt9.jpg',
        description: 'Тур, способный сыграть мелодию на всех ваших чувствах: у него вкус алтайской кухни, запах горных вершин, звук национальных...',
        date: '26 апр-7 мая',
        countDate: 12,
        rating: '5.0',
        countRating: 73,
        price: 79000,
        loc: 'altay'
    },

    // АРХЫЗ
    {
        name: 'Курортный роман',
        img: '../media/imgCatalog/arhz1.jpg',
        description: 'Насыщенная программа включает природные красоты и достопримечательности Северного Кавказа. Вы посетите Железноводск...',
        date: '14 - 21 фев.',
        countDate: 8,
        rating: '5.0',
        countRating: 138,
        price: 78800,
        loc: 'arhiz'
    },
    {
        name: 'Зимние Кавказские минеральные воды',
        img: '../media/imgCatalog/arhz2.jpg',
        description: 'Короткий, но полный ярких приключений тур по знаковым местам Кавказских Минеральных Вод и Карачаево-Черкессии.',
        date: '22 - 25 янв.',
        countDate: 4,
        rating: '5.0',
        countRating: 126,
        price: 19950,
        loc: 'arhiz'
    },
    {
        name: '4 горнолыжных курорта Кавказа',
        img: '../media/imgCatalog/arhz3.jpg',
        description: 'Увлекательное путешествие по Кавказу: катание на горнолыжных курортах, уютные прогулки по городам и термальные источники...',
        date: '4 - 10 фев.',
        countDate: 7,
        rating: '5.0',
        countRating: 126,
        price: 28900,
        loc: 'arhiz'
    },
    {
        name: 'В гости на Кавказ!',
        img: '../media/imgCatalog/arhz4.jpg',
        description: 'Это тур для тех, кто любит сочетать активный отдых с яркими впечатлениями о самобытной культуре, красотой природы и таинством...',
        date: '4 - 10 фев.',
        countDate: 5,
        rating: '5.0',
        countRating: 108,
        price: 33900,
        loc: 'arhiz'
    },
    {
        name: 'Треккинг тур в Архыз',
        img: '../media/imgCatalog/arhz5.jpg',
        description: 'Очень интересный, красивый и несложный активный тур в легендарном месте – горном раю Архыз. Группа будет жить в горном отеле в...',
        date: '5 - 10 авг.',
        countDate: 6,
        rating: '5.0',
        countRating: 106,
        price: 33900,
        loc: 'arhiz'
    },
    {
        name: 'Звездопад в Арыхе',
        img: '../media/imgCatalog/arhz6.jpg',
        description: 'В августе можно будет наблюдать самый интенсивный звездопад года — метеорный поток Персеиды. В этот момент наша планета...',
        date: '11 - 13 авг.',
        countDate: 3,
        rating: '5.0',
        countRating: 105,
        price: 28400,
        loc: 'arhiz'
    },
    {
        name: 'Архыз: сердце Кавказа',
        img: '../media/imgCatalog/arhz7.jpg',
        description: 'Прикоснись к тайнам, скрытым среди древних гор и перевалов – открой для себя сокровища Архыза!В этом путешествии ты...',
        date: '17 - 21 сен.',
        countDate: 5,
        rating: '5.0',
        countRating: 96,
        price: 33000,
        loc: 'arhiz'
    },
    {
        name: 'Горнолыжка для начинающих',
        img: '../media/imgCatalog/arhz8.jpg',
        description: 'Это программа для тех, кто любит острые ощущения, адреналин и готов учиться новому. Полноценное обучение катанию на лыжах или...',
        date: '14 - 20 фев.',
        countDate: 7,
        rating: '5.0',
        countRating: 92,
        price: 69000,
        loc: 'arhiz'
    },
    {
        name: 'На снежной волне',
        img: '../media/imgCatalog/arhz9.jpg',
        description: 'Это уникальная активная зимняя программа для молодежи, в которой вы поучаствуете в потрясающих приключениях, прокатитесь на...',
        date: '15 - 19 фев.',
        countDate: 5,
        rating: '5.0',
        countRating: 83,
        price: 47000,
        loc: 'arhiz'
    },

    // КАЛИНИНГРАД
    {
        name: 'Зимний тур в гостепримный',
        img: '../media/imgCatalog/kali1.jpg',
        description: 'Погрузитесь в удивительный мир самой западной части России. Вас ждут незабываемые прогулки по городам, побываете на местах...',
        date: '15 - 20 фев.',
        countDate: 5,
        rating: '5.0',
        countRating: 144,
        price: 16100,
        loc: 'kaliningrad'
    },
    {
        name: 'Зимние выходные в Калининграде',
        img: '../media/imgCatalog/kali2.jpg',
        description: 'Экскурсионный тур выходного дня в Калининграде зимой – это прекрасная возможность провести свободное время в самой западной...',
        date: '15 - 20 фев.',
        countDate: 3,
        rating: '5.0',
        countRating: 142,
        price: 9400,
        loc: 'kaliningrad'
    },
    {
        name: 'Зима на Балтике',
        img: '../media/imgCatalog/kali3.jpg',
        description: 'Тур для тех, кто хочет насладиться зимней Прибалтикой и отдохнуть перед новогодней суетой.Калининград – медленный город. Здесь...',
        date: '15 - 19 фев.',
        countDate: 4,
        rating: '5.0',
        countRating: 142,
        price: 29900,
        loc: 'kaliningrad'
    },
    {
        name: 'Янтарный Кенигсберг. Тур выходного дня',
        img: '../media/imgCatalog/kali4.jpg',
        description: 'В этом туре вы сможете познакомиться с очаровательным Калининградом. Вас ждет обзорная экскурсия по городу, посещение замка...',
        date: '15 - 18 фев.',
        countDate: 3,
        rating: '5.0',
        countRating: 137,
        price: 10800,
        loc: 'kaliningrad'
    },
    {
        name: 'Балтийская панорама',
        img: '../media/imgCatalog/kali5.jpg',
        description: 'Наш зимний пятидневный тур в Калининградскую область – это возможность отлично отдохнуть, встретить новых друзей и узнать много...',
        date: '15 - 18 фев.',
        countDate: 5,
        rating: '5.0',
        countRating: 130,
        price: 15200,
        loc: 'kaliningrad'
    },
    {
        name: 'К самым западным берегам',
        img: '../media/imgCatalog/kali6.jpg',
        description: 'Наш зимний пятидневный тур в Калининградскую область – это возможность отлично отдохнуть, встретить новых друзей и узнать много...',
        date: '15 - 18 фев.',
        countDate: 5,
        rating: '5.0',
        countRating: 126,
        price: 14200,
        loc: 'kaliningrad'
    },
    {
        name: 'Выходные в Калининграде',
        img: '../media/imgCatalog/kali7.jpg',
        description: 'Экскурсионный тур выходного дня в Калининграде – это прекрасная возможность провести свободное время в самой западной части...',
        date: '3 - 6 март.',
        countDate: 3,
        rating: '5.0',
        countRating: 110,
        price: 10500,
        loc: 'kaliningrad'
    },
    {
        name: 'Весенняя Балтика',
        img: '../media/imgCatalog/kali8.jpg',
        description: 'Погрузитесь в удивительный мир самой западной части России. А 8 марта – это идеальный повод побывать в этом восхитительном...',
        date: '5 - 8 март.',
        countDate: 4,
        rating: '5.0',
        countRating: 102,
        price: 14300,
        loc: 'kaliningrad'
    },
    {
        name: 'Первомай на Балтике',
        img: '../media/imgCatalog/kali9.jpg',
        description: 'В этом весеннем туре вы увидите яркую и гостеприимную Калининградскую область. Вы посетите Куршскую косу, сырную дегустацию и...',
        date: '1 - 3 мая',
        countDate: 3,
        rating: '5.0',
        countRating: 102,
        price: 10550,
        loc: 'kaliningrad'
    },

    // КАРЕЛИЯ
    {
        name: 'Выходные в Карелии',
        img: '../media/imgCatalog/karel.jpg',
        description: 'Короткое, но очень яркое зимнее путешествие в Карелию, которое вы запомните надолго!Это путешествие для тех, кто хочет увидеть...',
        date: '20 - 22 янв.',
        countDate: 3,
        rating: '5.0',
        countRating: 118,
        price: 23900,
        loc: 'kareliya'
    },
    {
        name: 'Снегоходное сафари...',
        img: '../media/imgCatalog/karel2.jpg',
        description: '«Снегоходное сафари» подходит для тех, у кого нет большого запаса времени на полноценные снегоходные туры. Вас ждет 2-х часовая...',
        date: '3 фев.',
        countDate: 1,
        rating: '5.0',
        countRating: 115,
        price: 4000,
        loc: 'kareliya'
    },
    {
        name: 'Легенды Севера. Очарование зимней Карелии',
        img: '../media/imgCatalog/karel3.jpg',
        description: 'Мы предлагаем провести четыре незабываемых дня в настоящей снежной сказке – февральской и мартовской Карелии! Этот тур создан...',
        date: '12 - 15 фев.',
        countDate: 4,
        rating: '5.0',
        countRating: 113,
        price: 28400,
        loc: 'kareliya'
    },
    {
        name: 'Снегоходное путешествие по земле карелов',
        img: '../media/imgCatalog/karel4.jpg',
        description: 'Это тур — прекрасный выбор для знакомства с зимней Карелией, с ее удивительной природой. Прочувствуйте всю прелесть зимы в...',
        date: '13 - 15 фев.',
        countDate: 3,
        rating: '5.0',
        countRating: 108,
        price: 43000,
        loc: 'kareliya'
    },
    {
        name: 'Зима в Карелии',
        img: '../media/imgCatalog/karel5.jpg',
        description: 'Зима в Карелии — удивительная возможность прикоснуться к прекрасной зимней сказке: белый-пребелый снег, веселые забавы... ',
        date: '13 - 15 фев.',
        countDate: 3,
        rating: '5.0',
        countRating: 105,
        price: 14900,
        loc: 'kareliya'
    },
    {
        name: 'Заповедные места',
        img: '../media/imgCatalog/karel6.jpg',
        description: 'Этот тур подарит вам заряд бодрости и хорошего настроения. Вы увидите прекрасные зимние места Сямозерья, проедете по старинным...',
        date: '14 - 15 фев.',
        countDate: 2,
        rating: '5.0',
        countRating: 104,
        price: 37600,
        loc: 'kareliya'
    },
    {
        name: 'Жемчужное ожерелье зимней Карелии',
        img: '../media/imgCatalog/karel7.jpg',
        description: 'Мы предлагаем насыщенный тур, в котором Вы увидите Карелию в новом, белоснежной и очень чистом цвете! Зима в Карелии прекрасна...',
        date: '25 - 29 фев.',
        countDate: 5,
        rating: '5.0',
        countRating: 100,
        price: 49400,
        loc: 'kareliya'
    },
    {
        name: 'На Север! Зимнее путешествие',
        img: '../media/imgCatalog/karel8.jpg',
        description: 'Тур подходит для семей с детьми, которые мечтают о ярких зимних каникулах в Карелии, с массой впечатлений и без гаджетов. Не...',
        date: '31 янв. - 4 фев.',
        countDate: 5,
        rating: '5.0',
        countRating: 98,
        price: 63700,
        loc: 'kareliya'
    },
    {
        name: 'Кинофолк в Карелии',
        img: '../media/imgCatalog/karel9.jpg',
        description: 'Приглашаем посетить Дом полярника, именно здесь живет и готовит свои путешествия известный полярник Виктор Симонов. Вы сможете...',
        date: '12 - 15 фев.',
        countDate: 4,
        rating: '5.0',
        countRating: 73,
        price: 25000,
        loc: 'kareliya'
    },
]


// Проверка на 1 включенный чекбокс
let inputs = document.getElementsByName("check");
for (let i = 0; i < inputs.length; i++) {
    inputs[i].onchange = checkboxHandler;
    cards.onchange = checkboxHandler;
}

const sortByPrice = document.getElementById('sortByPrice')

// Получения значения из ползунка "цена" и отображения цены над ползунком
let priceR = 150000
priceLabel = document.getElementById('price_label')
document.getElementById("priceRange").addEventListener("change", function () {
    priceR = this.value
    priceLabel.innerHTML = this.value
})

let daysCount = 15
daysLabel = document.getElementById('days_label')
document.getElementById("daysRange").addEventListener("change", function () {
    daysCount = this.value
    daysLabel.innerHTML = this.value + ' дней'
})


const tourFind = document.getElementById('tourFind')





// обработчик и фильтр параметров(локация, цена и т.д)
function checkboxHandler() {
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].checked && inputs[i] !== this)
            inputs[i].checked = false;
    }


    document.addEventListener('change', () => {

        // Получаем все checkbox
        const checkedValues = [...document.getElementsByName('check')]
            .filter(input => input.checked)
            .map(input => input.value);

        sortByPrice.addEventListener('click', () => {
            cards.sort((a, b) => {
                return parseInt(a.price) - parseInt(b.price)
            })
        })

        // Фильтруем по локации
        const filterLocation = cards.filter(({loc}) => checkedValues.includes(loc));

        // Фильтруем по цене
        let filterPrice = filterLocation.filter(p => p.price < priceR)

        // Фильтруем по дням
        let filterDays = filterPrice.filter(d => d.countDate < daysCount)

        // Сколько найдено туров
        tourFind.innerHTML = `Найдено ${String(filterDays.length)} туров`


        // Чистим прошлые карточки и создаем новые
        clearCards()
        genCard(filterDays)
    });
}

// Берем основной div
const cardBlock = document.getElementById('card-blocks')

// Очищаем карточки
function clearCards() {
    cardBlock.innerHTML = ''
}


// Создаем карточки с заданными параметрами
function genCard(card) {

    // Проходимся по эл. массива и выводим каждую карточку
    card.map(m => {
        // Card
        let card = document.createElement('div')
        card.className = 'card'
        cardBlock.append(card)

        ////  Img-content
        let imgContent = document.createElement('div')
        imgContent.className = 'img-cnt'
        card.append(imgContent)

        // Tour img
        let tourImg = document.createElement('img')
        tourImg.className = 'card_img'
        tourImg.src = `${m.img}`
        tourImg.setAttribute('alt', m.name)
        imgContent.append(tourImg)

        // Date
        let date = document.createElement('a')
        date.className = 'card_img-link'
        date.href = '#'
        date.innerHTML = `${m.date}`
        imgContent.append(date)

        //// Card-content
        let cardContent = document.createElement('div')
        cardContent.className = 'card-content'
        card.append(cardContent)

        let stats = document.createElement('div')
        stats.className = 'stats'
        cardContent.append(stats)

        // Card-rating-icon
        let cardRating = document.createElement('img')
        cardRating.className = 'card_rating-img'
        cardRating.src = '../media/imgCatalog/star.svg'
        cardRating.setAttribute('alt', 'card rating')
        stats.append(cardRating)

        // Rating and number of ratings
        let rating = document.createElement('p')
        let countRating = document.createElement('p')
        rating.className = 'card_grade'
        countRating.className = 'card_grade-number'
        rating.innerHTML = `${m.rating}`
        countRating.innerHTML = `(${m.countRating})`
        stats.append(rating, countRating)

        // Name tour
        let nameTour = document.createElement('h3')
        nameTour.className = 'card_title'
        nameTour.innerHTML = `${m.name}`
        cardContent.append(nameTour)

        // Description
        let description = document.createElement('p')
        description.className = 'card_text'
        description.innerHTML = `${m.description}`
        cardContent.append(description)

        // Price and days
        let priceDays = document.createElement('div')
        priceDays.className = 'price-cnt'
        cardContent.append(priceDays)

        let price = document.createElement('p')
        let days = document.createElement('p')

        price.className = 'card_price'
        days.className = 'card_days'

        price.innerHTML = `${m.price} ₽`
        days.innerHTML = `/ ${m.countDate} ${m.countDate === 2 ? 'дня' : ''} ${m.countDate === 3 ? 'дня' : ''} ${m.countDate === 4 ? 'дня' : ''} ${m.countDate === 1 ? 'день' : ''} ${m.countDate >= 5 ? 'дней' : ''}`
        priceDays.append(price, days)

        /// Button
        // Button container
        const buttonContainer = document.createElement('div')
        buttonContainer.className = 'button-cnt'
        cardContent.append(buttonContainer)

        // Watch button
        const watchButton = document.createElement('a')
        watchButton.className = 'card_button'
        watchButton.innerHTML = 'СМОТРЕТЬ'
        watchButton.href = locDetect(m.loc)
        buttonContainer.append(watchButton)

        // Like button
        const like = document.createElement('img')
        like.className = 'favourite'
        like.src = '../media/imgCatalog/heart.svg'
        like.alt = 'favourite'
        buttonContainer.append(like)
    })
}

// (Влад)
// поидее эта функция должна возвращать ссылку на типовую страницу, Ы
function locDetect(loc){
    if ( loc === 'baikal'){
        return "./turCard.html"
    }
    else{
        return false
    }
}

checkboxHandler();


