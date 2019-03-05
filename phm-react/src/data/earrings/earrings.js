const earrings = [
  {
    idString: "earrings_1",
    id: 215,
    type: {
      uk: "Сережки",
      ru: "Серьги"
    },
    name: {
      uk: "Ягоди Сходу",
      ru: "Восточная ягода"
    },
    available: "ORDER",
    price: 120,
    imagesNumber: 4,
    description: {
      uk: [
        "Сережки  у східному стилі виготовлені  з якісних чеських акрилових намистин.",
        "Фурнітура – біжутерний сплав під бронзу.",
        "Сережки у східному стилі з темно-червоними ягідками віднесуть Вас на східний базар, де повно-повнісінько усяких прикрас, але з цими сережками Ви точно будете на висоті і не залишитесь непоміченою.  Вони стануть чудовим доповненням до Вашого вбрання. Сережки прикрасять Ваш образ, зроблять його чарівним, прикують до Вас погляди."
      ],
      ru: [
        "Серьги  в восточном стиле изготовлены  из  качественных чешских акриловых бусин.",
        "Фурнитура – бижутерный сплав под бронзу.",
        "Серьги в восточном стиле с темно-красными ягодками уносят Вас на восточный базар, где полным-полно всяких украшений, но с этими серьгами Вы точно будете на высоте и не останетесь незамеченной.  Они станут  прекрасным дополнением к Вашему  гардеробу. Украшение украсит Ваш образ, сделает его неотразимым, привлечет к Вам взгляды."
      ]
    },
    dimensions: {
      uk: "Довжина прикраси зі швензою – 9,5 см.",
      ru: "Длина украшения со швензой – 9,5 см."
    }
  },
  {
    idString: "earrings_2",
    id: 212,
    type: {
      uk: "Сережки",
      ru: "Серьги"
    },
    name: {
      uk: "Зіркова ніч Персії",
      ru: "Звездная ночь Персии"
    },
    available: "SALE",
    price:120,
    imagesNumber: 5,
    description: {
      uk: [
        "Сережки темно синього кольору таємничі та загадкові. Гарно пасуватимуть не тільки дівчатам. Вони доречно доповнять Ваше вечірнє вбрання та чудово прикрасять Ваш образ.",
        "Сережки розшиті чешським бісером та кришталевими намистинами. Вони стильні та практично невагомі.",
        "Фурнітура - біжутерний сплав"
      ],
      ru: [
        "Серьги темно синего цвета таинственные и загадочные. Хорошо подойдут не только девушкам. Они уместно дополнят Ваш вечерний наряд и прекрасно украсят Ваш образ.",
        "Серьги расшитые чешский бисером и хрустальными бусинами. Они стильные и практически невесомые.",
        "Фурнитура - бижутерный сплав"
      ]
    },
    dimensions: {
      uk: "Довжина прикраси зі швензою – 9,5 см.",
      ru: "Длина украшения со швензой – 9,5 см."
    },
    
  },
  {
    idString: "earrings_3",
    id: 182,
    type: {
      uk: "Сережки для нареченої",
      ru: "Серьги  для  невесты"
    },
    name: {
      uk: "Перлинний дотик",
      ru: "Жемчужное прикосновение"
    },
    available: "SALE",
    price: 80,
    imagesNumber: 4,
    description: {
      uk: [
        "Ці сережки створені для нареченої. Вони ніжні та святкові, наявність перлів робить їх витонченими. З ними Ви точно не залишитесь непоміченою, підкреслите свій образ і будете ловити на собі захоплені погляди!",
        "Крім того, сережки пасуватимуть до будь-якої вечірньої сукні, що дає можливість використовувати їх і після весілля.",
        "Перли сприяють здоров'ю та довголіттю, діють заспокійливо, роблять свого власника м'якішим та чуттєвішим.",
        "Сережки створені з намистин натуральних річкових перлів, скляних намистин «під перли», чешського бісеру."
      ],
      ru: [
        "Эти серьги  созданы для невесты. Они  нежные и праздничные,  наличие жемчуга делает их утонченными.  В них  Вы точно не останетесь незамеченной, подчеркнете свой образ и будете ловить на себе восхищенные взгляды!",
        "Кроме того серьги  подойдут  к любому вечернему наряду, что дает возможность использовать их и после свадьбы.",
        "Жемчуг способствует здоровью и долголетию, оказывает успокаивающее действие, придает своему владельцу качества постоянства, делает его мягче и чувствительнее.",
        "Серьги созданы из бусин  натурального речного жемчуга, стеклянных бусин «под жемчуг»,  чешского  бисера."
      ]
    },
    dimensions: {
      uk: "Довжина прикраси зі швензою – 8 см.",
      ru: "Длина украшения со швензой – 8 см."
    },
	 addCategories: ["beads", "collections", "bridal"],
    related: ["beads_5", "collections_2","bridal_3"]
   
  },
  {
    idString: "earrings_4",
    id: 181,
    type: {
      uk: "Сережки",
      ru: "Серьги"
    },
    name: {
      uk: "Блакитна крапля",
      ru: "Голубая капля"
    },
    available: "SALE",
    price: 50,
    imagesNumber: 4,
    description: {
      uk: [
        "Прикраса виготовлена з чеських кришталевих намистин.",
        "Фурнітура під серебро (біжутерний сплав).",
        "Вони чудово довершать Ваш  образ. Фото не передає всієї краси цих сережок. Ефектні, красиві, мобільні, легкі."
      ],
      ru: [
        "Украшение изготовлено из чешских хрустальных бусин.",
        "Фурнитура под серебро (бижутерный сплав).",
        "Они прекрасно дополнят Ваш  наряд. Летящие и легкие они эффектно украсят Ваш образ.  Фото не передает всей красоты этих сережек. Очень красивые, мобильные, легкие."
      ]
    },
    dimensions: {
      uk: "Довжина прикраси зі швензою – 7,5 см.",
      ru: "Длина украшения со швензой – 7,5 см."
    }
  },
  {
    idString: "earrings_5",
    id: 216,
    type: {
      uk: "Сережки",
      ru: "Серьги"
    },
    name: {
      uk: "Корзинка перлів",
      ru: "Жемчужная корзинка"
    },
    available: "SALE",
    price: 120,
    imagesNumber: 6,
    description: {
      uk: [
        "Прикраса виготовлена з акрилових намистин «під перли». Перлини зібрані в корзинку і скріплені між собою. Завершеність  образу створюють три перлинки-крапельки.",
        "Фурнітура з біжутерного сплаву, під серебро.",
        "Сережки чудово довершать Ваше вбрання, можуть слугувати прикрасою нареченій, а також будь-якій чарівній особі, щоб підкреслити її ніжність та неповторність.  Прикраса прикрасить Ваш образ, зробить його чарівним, прикує до Вас погляди. Фото не передає всієї краси цих сережек. Довгі, рухливі, дуже жіночі. Чудове доповнення до намиста з перлів."
      ],
      ru: [
        "Украшение изготовлено из акриловых бусин «под жемчуг». Жемчужинки собраны в корзинку и скреплены между собой. Завершенность  образу создают три жемчужинки-капельки.",
        "Фурнитура из бижутерного сплава, под серебро.",
        "Серьги прекрасно дополнят Ваш наряд, могут служить украшением невесте, а также любой очаровательной личности, дабы подчеркнуть ее нежность и неповторимость.  Украшение украсит Ваш образ, сделает его неотразимым, привлечет к Вам взгляды. Фото не передает всей красоты этих сережек. Длинные, подвижные, очень женственные. Отличное дополнение  к бусам из жемчуга."
      ]
    },
    dimensions: {
      uk: "Довжина прикраси зі швензою – 9 см.",
      ru: "Длина украшения со швензой – 9 см."
    }
  },
  {
    idString: "earrings_6",
    id: 167,
    type: {
      uk: "Сережки",
      ru: "Серьги"
    },
    name: {
      uk: "Пір‘їнка блакитна плетена",
      ru: "Перышко плетёное синее"
    },
    available: "SALE",
    price: 100,
    imagesNumber: 4,
    description: {
      uk: [
        "Сережки сплетені з якісного чешського бісеру і стіклярусу. Китички з бісеру різної довжини.",
        "Швензи – біжутерний сплав.",
        "Довгі сережки-китички з чешського бісеру підкреслять чудові риси своєї володарки! Будуть гарним доповненням до Вашого літнього вбрання. Легкі, майже невагомі вони чудово довершать Ваш образ. Прикраса прикрасить Ваш образ, зробить його чарівним, прикує до Вас погляди. Блакитний блиск в різних тонах довершено виграє на світлі, тим саммм підкреслюючи Вашу витонченість."
      ],
      ru: [
        "Серьги сплетены из  качественного чешского бисера и стекляруса. Кисточки бисера различной длины.",
        "Швензы – бижутерный сплав.",
        "Длинные серьги-кисти из чешского бисера подчеркнут прекрасные черты своей обладательницы!  Будут прекрасным дополнением к Вашему летнему гардеробу. Легкие, почти невесомые они прекрасно дополнят Ваш  наряд. Серьги украсит ваш образ, сделают его неотразимым, привлекут к вам взгляды. Синий блеск в разных тонах прекрасно играет на свету, тем самым подчеркивая Вашу утонченность."
      ]
    },
    dimensions: {
      uk: "Довжина прикраси зі швензою – 9,5 см.",
      ru: "Длина украшения со швензой – 9,5 см."
    }
  },
  {
    idString: "earrings_7",
    id: 168,
    type: {
      uk: "Сережки",
      ru: "Серьги"
    },
    name: {
      uk: "Крижані краплинки",
      ru: "Сверкающие льдинки"
    },
    available: "SALE",
    price: 100,
    imagesNumber: 2,
    description: {
      uk: [
        "При виготовленні використані чеські кришталеві прозорі намистини, веселкові намистини-крапельки, а також металеві намистини з огранкою.",
        "Фурнітура з бижутерного сплаву, під срібло.",
        "Сережки чудово довершать Ваш стиль, можуть слугувати прикрасою нареченій, а також будь-якій чарівній особі, щоб підкреслити її ніжність та неповторність. Сережки прикрасить Ваш образ, зроблять його чарівним, прикують до Вас погляди. Фото не передає всієї краси цих сережок. Дуже красиві, ніжні, виразні.",
      ],
      ru: [
        "При изготовлении использованы чешские хрустальные прозрачные бусины, радужные бусины-капельки, а также металлические бусины с огранкой.",
        "Фурнитура из бижутерного сплава, под серебро.",
        "Серьги прекрасно дополнят Ваш наряд, могут служить украшением невесте, а также любой очаровательной личности, дабы подчеркнуть ее нежность и неповторимость.  Украшение украсит Ваш образ, сделает его неотразимым, привлечет к Вам взгляды. Фото не передает всей красоты этих сережек. Очень красивые, нежные, выразительные."
      ]
    },
    dimensions: {
      uk: "Довжина прикраси зі швензою – 6 см.",
      ru: "Длина украшения со швензой – 6 см."
    },
    
  },
  {
    idString: "earrings_8",
    id: 214,
    type: {
      uk: "Сережки",
      ru: "Серьги"
    },
    name: {
      uk: "Кармен",
      ru: "Кармен"
    },
    available: "SALE",
    price: 120,
    imagesNumber: 4,
    description: {
      uk: [
        "Прикраса виготовлена з шовкового мережива з використанням чеського бісеру і кришталевих намистин.",
        "Фурнітура під срібло (біжутерний сплав).",
        "Вони чудово довершать Ваш  стиль. Червоний колір розповість про Вашу пристрастність. Леткі і легкі, вони ефектно прикрасять Ваш образ. Гарно тримають форму і не деформуються. Фото не передає всієї краси цих сережек. Дуже красиві, мобільні, легкі.",
      ],
      ru: [
        "Украшение изготовлено из шелкового кружева с использованием чешского бисера и хрустальных бусин.",
        "Фурнитура под серебро (бижутерный сплав).",
        "Они прекрасно дополнят Ваш  наряд. Красный цвет расскажет о Вашей страстности. Летящие и легкие, они эффектно украсят Ваш образ. Хорошо сохраняют форму и не деформируются. Фото не передает всей красоты этих сережек. Очень красивые, мобильные, легкие."
      ]
    },
    dimensions: {
      uk: "Довжина прикраси зі швензою – 8,5 см.",
      ru: "Длина украшения со швензой – 8,5 см."
    }
  },
  {
    idString: "earrings_9",
    id: 209,
    type: {
      uk: "Сережки",
      ru: "Серьги"
    },
    name: {
      uk: "Улюблений аромат",
      ru: "Любимый аромат"
    },
    available: "SALE",
    price: 120,
    imagesNumber: 5,
    description: {
      uk: [
        "Сережки виконані з кришталевих прозорих намистин з доданням біжутерної фурнітури 'під золото'. Квадратні кришталеві намистини вигравають жовтим кольором.Чудово виглядають при освітленні. ",
        "Хіба вони не нагадують Вам флакончик Ваших улюблених парфумів? Чудово підійдуть для урочистих випадків.", 
        "Фурнітура біжутерний сплав під золото",
        
      ],
      ru: [
        "Серьги выполнены из хрустальных прозрачных бусин с добавлением бижутерной фурнитуры ′под золото′. Квадратные хрустальные бусины переливаются желтым цветом.Отлично смотрятся при освещении.",
        "Разве они не напоминают Вам флакончик Ваших любимых духов? Прекрасно подойдут для торжественных случаев.",
        "Фурнитура бижутерный сплав под золото."
      ]
    },
    dimensions: {
      uk: "Довжина прикраси зі швензою – 4,5 см.",
      ru: "Длина украшения со швензой – 4,5 см."
    },    
    
  },
{
    idString: "earrings_10",
    id: 213,
    type: {
      uk: "Сережки",
      ru: "Серьги"
    },
    name: {
      uk: "Смак меду",
      ru: "Медовые"
    },
    available: "SALE",
    price: 95,
    imagesNumber: 5,
    description: {
      uk: [
        "Сережки у вінтажному стилі виготовлені з якісних чеських скляних намистин.Погляньте, які вони чудові, ніби краплинки меду в сотах, так намистини виглядають на бронзовій фурнітурі.",
        "Сережки у вінтажному стилі з жовто-медовими намистинами чудово пасуватимуть до Вашої сукні.З цими сережками Ви точно будете на висоті і не залишитесь непоміченою. Вони стануть чудовим доповненням до Вашого гардеробу.",
        "Фурнітура – біжутерний сплав під бронзу."
      ],
      ru: [
        "Серьги в винтажном стиле изготовлены из качественных чешских стеклянных бусин. Посмотрите, какие прекрасные бусины, словно капельки меда в пчелиных сотах, так они смотрятся на бронзовой фурнитуре.",
        "Серьги в винтажном стиле с желто-медовыми бусинами прекрасно подойдут к Вашему платью. C этими серьгами Вы точно будете на высоте и не останетесь незамеченной. Они станут отличным дополнением к Вашему гардеробу.",
        "Фурнитура - бижутерный сплав под бронзу."
      ]
    },
    dimensions: {
      uk: "Довжина прикраси зі швензою – 9 см.",
      ru: "Длина украшения со швензой – 9 см."
    }
  },
  {
    idString: "earrings_11",
    id: 210,
    type: {
      uk: "Сережки",
      ru: "Серьги"
    },
    name: {
      uk: "Сердечко 'капучіно'",
      ru: "Сердечко 'капучино'"
    },
    available: "SALE",
    price: 80,
    imagesNumber: 5,
    description: {
      uk: [
        "Сережки виплетені гачком на гудзичку з використанням ниток з бавовни. Намистини ′під перли′ гармоніють з меланжевою пряжею в бежево-коричневих кольорах.",
        "Вони майже невагомі. Чудово пасуватимуть дівчатам і створять вишуканий образ.",
        "Фурнітура – біжутерний сплав під срібло."
      ],
      ru: [
        "Серьги сплетенные крючком на пуговичке с использованием  хлопковых нитей. Бусины  под 'жемчуг' прекрасно сочетаются  с меланжевой пряжей в бежево-коричневых тонах.",
        "Они почти невесомые. Отлично  подойдут девушкам и создадут изысканный образ.",
        "Фурнитура – бижутерний сплав под серебро."
      ]
    },
    dimensions: {
      uk: "Довжина прикраси зі швензою – 7,5 см.",
      ru: "Длина украшения со швензой – 7,5 см."
    }
  },
{
    idString: "earrings_12",
    id: 211,
    type: {
      uk: "Сережки",
      ru: "Серьги"
    },
    name: {
      uk: "Рожева мрія",
      ru: "Розовая мечта"
    },
    available: "SALE",
    price: 120,
    imagesNumber: 5,
    description: {
      uk: [
        "Комбіновані сережки з пряжі та металу з додаванням намистин будуть хорошим доповненням до Вашого вбрання. Вони стильні та незвичні, створять Вам хороший настрій та підкреслять Вашу неповторність.",
        "Сережки створені з металевого конектора, обплетені світло рожевою бавовняною пряжею, а панує над цим всім красива,ніжна скляна перлинна намистина в такому ж кольорі,яка додає святковості цій прикрасі.",
        "Фурнітура – біжутерний сплав під срібло."
      ],
      ru: [
        "Комбинированные серьги из пряжи и металла с добавлением бусин будут хорошим дополнением к Вашему наряду. Они стильные и необычные, создадут Вам хорошее настроение и подчеркнут Вашу неповторимость.",
        "Серьги созданы из металлического коннектора, оплетенные светло розовой хлопчатобумажной пряжей, а господствует над всем этим красивая, нежная стеклянная жемчужная бусина в таком же цвете, которая добавляет праздничности этому украшению.",
        "Фурнитура - бижутерный сплав под серебро."
      ]
    },
    dimensions: {
      uk: "Довжина прикраси зі швензою – 8,5 см.",
      ru: "Длина украшения со швензой – 8,5 см."
    }
	},
{
    idString: "earrings_13",
    id: 253,
    type: {
      uk: "Сережки",
      ru: "Серьги"
    },
    name: {
      uk: "Червона калина",
      ru: "Калина красная"
    },
    available: "SALE",
    price: 100,
    imagesNumber: 5,
    description: {
      uk: [
        "Сережки у вінтажному стилі виготовлені з якісних чеських скляних намистин. Червоні намистинки,ніби ягідки калини розташувалися біля листочка.",
        "Сережки у вінтажному стилі з яскравими червоними намистинами чудово пасуватимуть до Вашої сукні.З цими сережками Ви точно будете на висоті і не залишитесь непоміченою. Вони стануть чудовим доповненням до Вашого вбрання.",
        "Фурнітура – біжутерний сплав під бронзу."
      ],
      ru: [
        "Серьги в винтажном стиле изготовлены из качественных чешских стеклянных бусин.Красные бусины, будто ягоды калины разместились возле листочка.",
        "Серьги в винтажном стиле с яркими красными бусинами прекрасно подойдут к Вашему наряду. C этими серьгами Вы точно будете на высоте и не останетесь незамеченной. Они станут отличным дополнением к Вашему гардеробу.",
        "Фурнитура - бижутерный сплав под бронзу."
      ]
    },
    dimensions: {
      uk: "Довжина прикраси зі швензою – 9,5 см.",
      ru: "Длина украшения со швензой – 9,5 см."
    }
	},
{
    idString: "earrings_14",
    id: 164,
    type: {
      uk: "Сережки",
      ru: "Серьги"
    },
    name: {
      uk: "Бісер на планці",
      ru: "Бисер на планке"
    },
    available: "SALE",
    price: 95,
    imagesNumber: 5,
    description: {
      uk: [
        "Такі сережки виготовлені з якісного чеського бісеру та нанизані на металеві піни. При створенні використана фурнітура під срібло.",
        "Вони грайливо коливаються при русі і будуть гарним доповненням до літнього вбрання. Чудово пасуватимуть юним синьооким особам."
        
      ],
      ru: [
        "Такие серьги изготовлены из качественного чешского бисера и нанизанны на металлические пины. При создании использована фурнитура под серебро.",
        "Они игриво колышутся при движении и будут хорошим дополнением к летнему наряду. Прекрасно подойдут юным синеглазым личностям."
        
      ]
    },
    dimensions: {
      uk: "Довжина прикраси зі швензою – 9 см.",
      ru: "Длина украшения со швензой – 9 см."
    }
  },
  {
    idString: "earrings_15",
    id: 255,
    type: {
      uk: "Сережки",
      ru: "Серьги"
    },
    name: {
      uk: "Червоні опакові",
      ru: "Красные опаковые"
    },
    available: "SALE",
    price: 120,
    imagesNumber: 6,
    description: {
      uk: [
        "Сережки у вінтажному стилі виготовлені з якісних чеських опакових намистин. Червоні овальні намистинки гарно виблискують на сонці та при світлі.",
        "Сережки  з яскравими червоними намистинами чудово пасуватимуть до Вашого вбрання.З ними  Ви точно будете на висоті і не залишитесь непоміченою. Вони стануть чудовим доповненням до Вашого образу.",  
		"Фурнітура – біжутерний сплав під срібло."
		
      ],
      ru: [
        "Серьги в винтажном стиле изготовлены из качественных чешских опаковых бусин. Красные овальные бусинки хорошо сверкают на солнце и при свете.",
        "Серьги с яркими красными бусинами прекрасно подойдут к Вашему наряду.С ними Вы точно будете на высоте и не останетесь незамеченной. Они станут отличным дополнением к Вашему образу.",
		"Фурнитура - бижутерный сплав под серебро."
      ]
    },
    dimensions: {
      uk: "Довжина прикраси зі швензою – 6,5 см.",
      ru: "Длина украшения со швензой – 6,5 см."
    }
  },
  {
    idString: "earrings_16",
    id: 254,
    type: {
      uk: "Сережки",
      ru: "Серьги"
    },
    name: {
      uk: "Блакитне віяло",
      ru: "Веер голубой"
    },
    available: "SALE",
    price: 120,
    imagesNumber: 5,
    description: {
      uk: [
        "",
        "",  
		""
		
      ],
      ru: [
        "",
        "",
		""
      ]
    },
    dimensions: {
      uk: "Довжина прикраси зі швензою – 8,5 см.",
      ru: "Длина украшения со швензой – 8,5 см."
    }
	},
  {
    idString: "earrings_17",
    id: 163,
    type: {
      uk: "Сережки",
      ru: "Серьги"
    },
    name: {
      uk: "Рожеві гойдалочки",
      ru: "Розовые качели"
    },
    available: "SALE",
    price: 120,
    imagesNumber: 7,
    description: {
      uk: [
        "",
        "",  
		""
		
      ],
      ru: [
        "",
        "",
		""
      ]
    },
    dimensions: {
      uk: "Довжина прикраси зі швензою – 9 см.",
      ru: "Длина украшения со швензой – 9 см."
    }
	
    	},
{
    idString: "earrings_18",
    id: 162,
    type: {
      uk: "Сережки",
      ru: "Серьги"
    },
    name: {
      uk: "Бісерні китички білі",
      ru: "Бисерные кисточки белые"
    },
    available: "SALE",
    price: 90,
    imagesNumber: 5,
    description: {
      uk: [
        "",
        "",  
		""
		
      ],
      ru: [
        "",
        "",
		""
      ]
    },
    dimensions: {
      uk: "Довжина прикраси зі швензою – 10,5 см.",
      ru: "Длина украшения со швензой – 10,5 см."
    }
	},
  {
    idString: "earrings_19",
    id: 133,
    type: {
      uk: "Сережки",
      ru: "Серьги"
    },
    name: {
      uk: "Краплинка - ягідка",
      ru: "Капелька - ягодка"
    },
    available: "SALE",
    price: 50,
    imagesNumber: 5,
    description: {
      uk: [
        "",
        "",  
		""
		
      ],
      ru: [
        "",
        "",
		""
      ]
    },
    dimensions: {
      uk: "Довжина прикраси зі швензою – 4 см.",
      ru: "Длина украшения со швензой – 4 см."
    }
	},
  {
    idString: "earrings_20",
    id: 161,
    type: {
      uk: "Сережки",
      ru: "Серьги"
    },
    name: {
      uk: "Перлинний хоровод",
      ru: "Жемчужный хоровод"
    },
    available: "SALE",
    price: 120,
    imagesNumber: 6,
    description: {
      uk: [
        "",
        "",  
		""
		
      ],
      ru: [
        "",
        "",
		""
      ]
    },
    dimensions: {
      uk: "Довжина прикраси зі швензою – 6 см.",
      ru: "Длина украшения со швензой – 6 см."
    }
	},
  {
    idString: "earrings_21",
    id: 123,
    type: {
      uk: "Сережки",
      ru: "Серьги"
    },
    name: {
      uk: "Петелечка з перлів",
      ru: "Петелька с жемчужин"
    },
    available: "SALE",
    price: 50,
    imagesNumber: 5,
    description: {
      uk: [
        "",
        "",  
		""
		
      ],
      ru: [
        "",
        "",
		""
      ]
    },
    dimensions: {
      uk: "Довжина прикраси зі швензою – 6,5 см.",
      ru: "Длина украшения со швензой – 6,5 см."
    }
	},
  {
    idString: "earrings_22",
    id: 134,
    type: {
      uk: "Сережки",
      ru: "Серьги"
    },
    name: {
      uk: "Сережки трансформер",
      ru: "Сережки трансформер"
    },
    available: "SALE",
    price: 60,
    imagesNumber: 6,
    description: {
      uk: [
        "",
        "",  
		""
		
      ],
      ru: [
        "",
        "",
		""
      ]
    },
    dimensions: {
      uk: "Довжина прикраси зі швензою – 6,5 см.",
      ru: "Длина украшения со швензой – 6,5 см."
    }
	},
  {
    idString: "earrings_23",
    id: 122,
    type: {
      uk: "Сережки",
      ru: "Серьги"
    },
    name: {
      uk: "Намистина в гніздечку",
      ru: "Бусина в гнездышке"
    },
    available: "SALE",
    price: 60,
    imagesNumber: 7,
    description: {
      uk: [
        "",
        "",  
		""
		
      ],
      ru: [
        "",
        "",
		""
      ]
    },
    dimensions: {
      uk: "Довжина прикраси зі швензою – 6,5 см.",
      ru: "Длина украшения со швензой – 6,5 см."
    }
	},
  {
    idString: "earrings_24",
    id: 256,
    type: {
      uk: "Сережки",
      ru: "Серьги"
    },
    name: {
      uk: "Блакитна далечінь",
      ru: "Голубая даль"
    },
    available: "SALE",
    price: 120,
    imagesNumber: 7,
    description: {
      uk: [
        "",
        "",  
		""
		
      ],
      ru: [
        "",
        "",
		""
      ]
    },
    dimensions: {
      uk: "Довжина прикраси зі швензою – 7 см.",
      ru: "Длина украшения со швензой – 7 см."
    }
	},
  {
    idString: "earrings_25",
    id: 264,
    type: {
      uk: "Сережки",
      ru: "Серьги"
    },
    name: {
      uk: "Червоне мереживо",
      ru: "Красные кружева"
    },
    available: "SALE",
    price: 100,
    imagesNumber: 6,
    description: {
      uk: [
        "",
        "",  
		""
		
      ],
      ru: [
        "",
        "",
		""
      ]
    },
    dimensions: {
      uk: "Довжина прикраси зі швензою – 10 см.",
      ru: "Длина украшения со швензой – 10 см."
    }
	},
  {
    idString: "earrings_26",
    id: 265,
    type: {
      uk: "Сережки",
      ru: "Серьги"
    },
    name: {
      uk: "Бузкова мінливість",
      ru: "Сиреневые переливы"
    },
    available: "SALE",
    price: 100,
    imagesNumber: 5,
    description: {
      uk: [
        "",
        "",  
		""
		
      ],
      ru: [
        "",
        "",
		""
      ]
    },
    dimensions: {
      uk: "Довжина прикраси зі швензою – 10 см.",
      ru: "Длина украшения со швензой – 10 см."
    }
	},
  {
    idString: "earrings_27",
    id: 266,
    type: {
      uk: "Сережки",
      ru: "Серьги"
    },
    name: {
      uk: "Чорне мереживо зі стразами",
      ru: "Черное кружево со стразами"
    },
    available: "SALE",
    price: 120,
    imagesNumber: 6,
    description: {
      uk: [
        "",
        "",  
		""
		
      ],
      ru: [
        "",
        "",
		""
      ]
    },
    dimensions: {
      uk: "Довжина прикраси зі швензою – 7,5 см.",
      ru: "Длина украшения со швензой – 7,5 см."
    }
  }
];
export default earrings;