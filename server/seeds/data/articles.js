const db = require('../../dbClients/categoriesDB')

const getIDs = async () => {
  const categories = {
    en: {

    },
    am: {

    },
    ar: {

    }
  }

  categories.en.asylum = (await db.getCategoryByName('Asylum')).category_id
  categories.am.asylum = (await db.getCategoryByName('ጥገኝነት')).category_id
  categories.ar.asylum = (await db.getCategoryByName('اللجوء')).category_id
  categories.en.welcome = (await db.getCategoryByName('Welcome')).category_id
  categories.am.welcome = (await db.getCategoryByName('እንኳን ደህና መጣህ')).category_id
  categories.ar.welcome = (await db.getCategoryByName('مرحبا')).category_id

  return categories
}

const generateArticles = async () => {
  const categories = await getIDs()
  return [
    {
      title: 'Persecution',
      category_id: categories.en.asylum,
      short_content: '',
      full_content: `Persecution, in terms of claiming asylum, is serious, targeted mistreatment of an individual because of who they are, or what they do, or what people think they are or do.
 
            The Refugee Convention itself does not define "persecution". The Refugee Convention is international law. It is translated into EU law as the Qualification Directive. This is part of UK law (though this is likely to change once the UK leaves the EU) under rules known as the Qualification Regulations. The definition of persecution in the Qualification Regulations (and any relevant case law) is what the Home Office should use to assess whether a person is at risk of persecution if removed from the UK.
            
            The Qualification Regulations state:
            5.— (1) In deciding whether a person is a refugee an act of persecution must be:
            
            (a) sufficiently serious by its nature or repetition as to constitute a severe violation of a basic `,
      status: 'approved'
    },
    {
      title: 'Grounds for an asylum claim',
      category_id: categories.en.asylum,
      short_content: '',
      full_content: `To qualify for refugee status, you need to show that the reasons for which you have been persecuted or will be persecuted come under one of the Refugee Convention grounds: reasons of race; religion; nationality; political opinion; or membership of a particular social group.

            You do not need to specify or say in legal language which Refugee Convention grounds you are applying under. Your case may actually come under more than one of these grounds. You tell the Home Office your reasons for fleeing, and they then consider which grounds this comes under. If you feel you have been refused because they applied the wrong grounds, this could be challenged.
            
            Nationality, race, and religion are relatively straightforward grounds (if often difficult to evidence), but imputed beliefs and particular social group require further explanation.
            
            Imputed identity or beliefs: what people think you are or do
            “Imputed” identity or beliefs means what people think you are or do. What people think you are, or do, could put you at risk of persecution even if it’s not true.
            
            For example, if your local community thinks or says you are a Christian or an atheist, this may put you in danger even if you are not actually a Christian or atheist. If your family and neighbours believe you are gay or lesbian, you might be at risk irrespective of whether you are gay or straight. You may not actually be a member of an at-risk political group, but someone might spread rumours that you are, to try and get you in trouble.
            
            Imputed beliefs might be a factor if a family member or friend is politically active or a member of a religious minority, and it is assumed you also hold these beliefs (this often applies to women asylum applicants). It may be because you are a gay rights campaigner, and therefore would be at risk in a homophobic country because people assume you are gay. Or it may be that because of your lifestyle (for example, you are unmarried in a country/culture where this is unusual) people assume you are gay and you would be at risk of persecution because of that.
            
            Imputed beliefs may be assumed because of where you live, the job you do, and many other things outside of your control.
            
            Particular social group (PSG)
            Particular social group is the most complicated area of the Refugee Convention grounds. This is because it is quite vague and can cover a variety of situations. This category is heavily reliant on case law to explain what it currently means. Case law is the body of available writings explaining the verdicts in a case, and is used to explain the meaning of laws and policy.
            
            Gender and sexuality are not distinct Refugee Convention grounds but come under particular social group. Gender as a particular social group needs to be more narrowly defined than just "being a woman" or "being a man". A certain category of women or men who face gender-specific persecution may fall under this category, such as "women at risk of domestic violence in Pakistan".
            
            The category of particular social group is particularly important when dealing with non-state actors of persecution (see below), because it can be argued by the Home Office that while a person may be at risk, it is not for a Refugee Convention reason; therefore the UK has no obligation to offer protection. This may include claims involving domestic violence, honour killings, and gang violence/blood feuds. 
                `,
      status: 'approved'
    },
    {
      title: 'Well founded fear',
      category_id: categories.en.asylum,
      short_content: '',
      full_content: `An asylum claim should be based on a "well-founded fear" of persecution if you were returned to your country of origin/country of residence. This means you do not need to show that the persecution would definitely happen, but that there is a real risk it could happen.

            Having been persecuted in the past does not necessarily mean you will get refugee status. You need to show there is a future risk.
            
            To show this fear is well-founded, you will need to provide evidence.
            
            The evidence that everyone has is their story – what has happened to you, what have you been threatened with, what has happened to your family/colleagues/people you know – do these things mean you are at risk? Why did you leave? Why can't you go back?
            
            testimony
            In most cases, the UK Home Office (the government department who makes the decision on your asylum claim), will not believe your story. If you are able to go to court and appeal the Home Office refusal of your claim, the judge may also not believe your story.
            
            Try and obtain other evidence to support your story. You should not wait for the Home Office or courts to say they do not believe you before you try and get evidence to support what you have said.
            
            Are there witnesses to things that happened to you? Have you got documents that prove any part of your story? These might include arrest warrants, court documents, letters from friends/organisations showing you are in danger. Is there newspaper coverage of an event you are talking about? Are there human rights reports that show the situation in your country is like you say it is? 
                `,
      status: 'approved'
    },
    {
      title: 'اللجوء في بريطانا',
      category_id: categories.ar.asylum,
      short_content: '',
      full_content: `شرح لمراحل طلب اللجوء في بريطانيا 
            طلب اللجوء: ماذا يحدث عندما أقوم بتقديم طلب؟
            سوف تمر بمراحل عديدة وسوف تحدث لك أشياء عديدة أثناء الفترة التى ينظر فيها فى طلبك. ولا تخضع كل طلبات اللجوء لنفس الإجراءات.
            
            من المحتمل ان يحق لك الحصول على العون القانونى مجاناً لمساعدتك فى طلبك اللجوء.
            
            إذا كان يحق لك الحصول على العون القانونى مجاناً فربما لن يكفى ذلك لتسديد تكاليف حضور ممثل قانونى (محام أو مستشار قانونى) أثناء جلسة المقابلة. إذا كنت راشداً فلا يحق لك الحصول على ممثل قانونى مجاناً أثناء المقابلة إلا فى الحالات التالية:
            
            كنت تشكو من مرض نفسى شديد؛ أو
            تم حبسك كجزء من عملية "الطلبات السريعة"؛ أو
            تظن السلطات أنك ربما قد قمت بإقتراف جريمة وتقوم بإجراء مقابلتك تحت حراسة الشرطة؛ أو
            تظن السلطات أنك ربما تمثل خطراً لسلامة الدولة.
            وتلقائياً سوف يحصل الأطفال الذين لا يصطحبهم أشخاص راشدون على ممثل من الخدمات الإجتماعية أو من مجلس اللاجئين.
            
            المقابلة الأولى
            
            تقتضي المرحلة الأولى اجراء مقابلة التى تسمى بمقابلة الفرز. و تهدف هذه المقابلة إلى تسجيل تفاصيلك الشخصية ومعرفة كيفية مجيئك المملكة المتحدة. وتهدف هذه المرحلة جزئياً من التأكد من امكانية إعادتك بسرعة إلى "بلد آمن آخر" غير المملكة المتحدة لأخذ طلب لجوئك. كما تهدف من التأكد أن لديك جواز السفر الذى سافرت به إلى المملكة المتحدة.
            
            وعادة تحدث مقابلة الفرز حين تقديمك طلباً لحق اللجوء ولكن ربما تحدث فى وقت لاحق إذا إحتاجت السلطات الى العثورعلى مترجم لك أو إذا لم تكن بصحة جيدة.
            
            إذا كان هنالك أشخاص يمكنك الإتصال بهم فى المملكة المتحدة فيجب عليك أن تصر على السماح لك بالإتصال بهم قبل المقابلة. لديك الحق فى الإتصال بقريب لك، بصديق أو بخدمة نصح أو بمحام. كما يجب عليك التأكد من أنك تفهم أى مترجم بصورة جيدة.
            
            فى مقابلة الفرز لا يجب أن تطرح عليك أسئلة مفصلة عن أسباب تقديمك طلباً لحق اللجوء.
            
            يجب عليك التأكد من أنه قد تم إعطاؤك بيانا مدوّنا للمقابلة.
            
            الإستقراء
            
            بعد مقابلة الفرز سيكون من المحتمل ان يطلب منك الحضور للإستقراء. ويعنى هذا أنه سوف يتم القيام بإرسالك للعيش فى مركز خاص لمدة أسبوع أو أسبوعين, أو أنه يجب عليك الذهاب هنالك كل يوم. وسوف تحصل فى المركزعلى معلومات من وزارة الداخلية عما سيحدث لطلبك لحق اللجوء وعن الحياة فى المملكة المتحدة. إذا لم تحضر عندما يطلب منك ذلك فربما يرفض طلبك للجوء سريعاً.
            
            مقابلات طلب اللجوء
            
            بعد مقابلة الفرز ربما تكون هناك مقابلة أطول وأكثر تفصيلاً حول أسباب طلبك لحق اللجوء فى المملكة المتحدة. إذا كان لديك ممثل قانونيً لمساعدتك فى طلبك لحق اللجوء فيمكن تحديد موعد المقابلة فى وقت يمكنه الحضور فيه. إذا لم يكن ممثلك القانونى قادراً على حضور المقابلة مثلاً إذا لم يكن لديك مال لتسديد تكاليف حضوره المقابلة فيمكنك أن تطلب أن يتم تسجيل المقابلة فى شريط ممغنط و إعطاءك نسخة من الشريط.
            
            إذا لم يطلب منك ملء إستمارة قبل المقابلة فسوف تشكل المعلومات التى تعطيها للموظف الذييجري المقابلة أساس طلبك لحق اللجوء. إذا قمت بإضافة أو تغيير أى شئ لاحقاً دون الإدلاء بسبب قوى فربما لن تصدق وزارة الداخلية ما تقوله. لذا يجب عليك التأكد من أنك سوف تفهم الأسئلة ومن أنك سوف تحصل على نسخة من سجل المقابلة. تحصل على نصح فى أقرب وقت ممكن.
            
            وثائق إثبات الهوية
            
            سوف يقوم موظفى الهجرة بأخذ بصماتك فى مقابلة الفرز. ربما لن يقرروا أخذ بصمات الأطفال (خاصة الأطفال دون 12 عاماً). كما سوف يقومون بأخذ صور فوتوتغرافية لأى شخص قدم طلباً لحق اللجوء و يشمل ذلك الأطفال. و بعدها سوف يعطونك بطاقة لإثبات هويتك تحمل صورتك. وهذة البطاقة, التى تعرف ببطاقة تسجيل طالبى حق اللجوء (Asylum Registration Card-ARC) مهمة لأنها عادة سوف تكون الإثبات الوحيد لهويتك ولحقك فى البقاء فى المملكة المتحدة. سوف تقوم سلطات الهجرة بالإحتفاظ بأى وثائق هوية أخرى أحضرتها معك وإعادتها لك عند الفصل في قضيتك.
            
            يجب عليك التأكد من صحة التفاصيل المدونة ببطاقة تسجيل طالبى اللجوء. على أن بطاقة تسجيل طالبى اللجوء تحتوى كذلك على معلومات لا يمكن رؤيتها إلا بواسطة آلات مخصصة.
            
            المكان الذى جئت منه
            
            كطالب لحق اللجوء لا يمكن إعادتك لأى بلد ربما قد تتعرض فيه لخطر الإضطهاد. يجب أخذ طلبك بعين الإعتبار كما لا يمكن إعادتك إلى بلدك إلا إذا رفض طلبك للحصول على حق للجوء.
            
            و لكن إذا كنت قد مررت ببلد آخر ولو لمدة وجيزة جداً فربما تحاول وزارة الداخلية إعادتك هنالك إذا كان هذا البلد "بلداً آمناً آخر". لن يقوموا بالنظر فى طلبك اللجوء إذا قاموا بذلك. و يتوقع منك تقديم طلب للجوء فى ذلك البلد.
            
            إذا كان البلد الآمن الآخر من ضمن قائمة الدول الآمنة لدى وزارة الداخلية, فيمكن أن يرفض طلبك لحق اللجوء وربما لن تتمكن من تقديم طلب للإستئناف قبل إرجاعك هنالك. و تشمل القائمة معظم الدول فى أوروبا وكندا والولايات المتحدة الأمريكية. إذا قررت وزارة الداخلية إرجاعك إلى بلد آمن فلا يمكنك تقديم طلب للإستئناف بالمملكة المتحدة إلا كان سبب ترحيلك سوف يشكل إنتهاكاً لحقوقك الإنسانية فى هذا البلد – ولكن سوف يكون إثبات ذلك صعباً وسوف تحتاج إلى مشورة قانونى خبير.
            
            الحبس
            
            يمكن حبسك فى مركزخاص بالهجرة إلا أذا كان لديك مسبقاً الحق فى البقاء فى المملكة المتحدة عند تقديمك طلب اللجوء. و يمكن أن يتم حبسك على الأرجح إذا:
            
            كان هنالك إحتمالاً بإمكانية إعادتك بسرعة إلى بلد آمن آخر؛
            كنت قد جئت هنا بأوراق مزورة ولم تعترف بذلك عند وصولك أول مرة؛
            حضرت بعد إتلافك لجواز سفرك؛
            تم القبض عليك لاحقاً وأنت تستعمل وثائق مزورة؛ أو
            كانت وزارة الداخلية ترى أنه يمكنها إصدار قرار حول طلبك للجوء بسرعة.
            إذا تم حبسك فلديك الحق فى :
            أن تطلب الإفراج عنك على أساس "القبول المؤقت"؛ أو
            تقديم طلب للإفراج عنك بكفالة بعد أن تكون قد قضيت7 ايام فى المملكة المتحدة . "الكفالة" تعنى أنه يجب عليك تسديد مبلغ من المال للمحكمة إذا لم تسلم نفسك عندما يطلب منك ذلك.
            إذا تم حبسك فيجب على موظفى الهجرة إخبارك بأسباب هذا الحبس كتابةً. كما يجب عليهم إخطارك بصورة منتظمة بالأسباب التى يظنون أنه يجب عليك البقاء على أساسها تحت الحبس.
            
            بدلاً عن حبسك يمكن الإفراج عنك فى حالات معينة مثلاً أن تزوّد ببطاقة بيانات معدنية.
            
            الحالات التى ليس لها أساس من الصحة بصورة واضحة
            
            إذا كانت وزارة الداخلية تظن أن طلبك لحق اللجوء ليس له أساس من الصحة فمن الأرجح أن يتم حبسك عند تقديمك طلب حق اللجوء. فى حالات عديدة يكون السبب أن وزارة الداخلية ترى أن البلد الذى جئت منه بلد آمن و لذا لن تحتاج عادة للجوء. ربما يكون السبب کذلك أن وزارة الداخلية لا تظن أنك سوف تتعرض حقيقة للإضطهاد حتى ولو قلت ذلك.
            
            إذا كانت السلطات ترى أن طلبك لللجوء ليس له أساس من الصحة بصورة واضحة فسوف يقومون عادة بارسالك إلى مركز حبس خاص بالهجرة مباشرة بعد تقديمك طلب اللجوء.سوف يتم البث فى طلبك سريعاً أثناء حبسك. يوجد ببعض المراكز مستشارون قانونيون لمساعدتك فى قضيتك. يمكن أن تختار الحصول على مساعدة قانونية مجانية من محام آخر فى الحالات التالية:
            
            قام مستشارك القانونى الأول بتحويل قضيتك له؛ أو
            لديك مستشارك الخاص الذى كان يساعدك أو كان يساعد أسرتك لمدة من الزمن.
            إذا رفضت وزارة الداخلية طلبك للجوء فربما لن يسمح لك بالبقاء فى المملكة المتحدة لتقديم طلب للإستئناف. يمكن إرجاعك إلى وطنك و سوف يستمر الإستئناف بعد مغادرتك.
            
            الحالات السريعة
            
            يتم حبس بعض طالبى اللجوء فى "مراكز الترحيل" عند تقديمهم طلب للحصول على حق اللجوء إذا كانت وزارة الداخلية ترى أنه يمكن البث فيها بسرعة. إذا حدث هذا فيمكن حبسك لمدة أسبوع حتى يتم أخذ قرار حيال قضيتك. إذا تم رفض طلبك فسوف تبقى فى المركز لمدة أسبوع آخر أثناء سماع طلبك للإستئناف. ويوجد ببعض المراكز مستشارون قانونيون لمساعدتك فى قضيتك. يمكن أن تختار الحصول على مساعدة قانونية مجانية من محام آخر فى الحالات التالية:
            
            قام مستشارك القانونى الأول بتحويل قضيتك له؛ أو
            لديك مستشارك الخاص الذى كان يساعدك أو كان يساعد أسرتك لمدة من الزمن.
            يتم البث فى هذه الطلبات فى غاية السرعة وربما يكون صعباً الحصول فى الوقت المناسب على معلومات أو أدلة لتثبت أنك لاجئ. ويجب عليك التأكد من إخبار مستشارك القانونى في اقرب فرصة سانحة على أى شئ تعتقد أنه يمكن أن يساعد قضيتك.
            
            إستمارة بيان الأدلة ( SEF)
            
            ربما يتم إعطاؤك إستمارة بيان الأدلة (SEF) لكى تقوم بملئها. إذا حدث ذلك فيجب عليك أن تكتب بالتفصيل الأسباب التى تطلب على أساسها حق اللجوء. سوف تعتبر وزارة الداخلية أن ما تقوله فى الإستمارة هى أسباب طلبك و لذا يجب عليك ذكر أى شئ تحتاج وزارة الداخلية أن تراه مدوّنا بالإستمارة. يجب عليك دائماً أخذ مشورة قبل ملء إستمارة بيان الأدلة.
            
            يجب عليك ملء الإستمارة و إرجاعها خلال 10 أيام دوام (هنالك فترة أطول للأطفال الين جاءوا بمفردهم). بعد عدة أسابيع على الأرجح سوف تدعى لمقابلة كاملة مع سلطات الهجرة بخصوص طلبك. يمكن لممثلك القانونى ومترجم إصطحابك أثناء المقابلة و لكن لن تقوم الخدمة القانونية لافراد المجتمع عادة بتسديد هذه التكاليف.
            
            إذا لم ترجع إستمارة بيان الأدلة فى الوقت المناسب أو لم تحضر للمقابلة فعادة سوف يتم رفض طلبك للجوء. ربما لن تقوم وزارة الداخلية بالنظر بالتفصيل فى طلبك و لن تقوم بمقابلتك. لذا يجب عليك إخبار وزارة الداخلية فى أقرب فرصة ممكنة إذا لم تقدر على:
            
            ملء الإستمارة؛
            إبراز الوثائق التى طلب منك إحضارها؛ أو
            الحضور للمقابلة`,
      status: 'approved'
    },
    {
      title: 'Transport Museum',
      category_id: categories.en.welcome,
      short_content: `Welcome to Glasgow. I hope you enjoy living in our City. I enjoy going to the transport museum.
            `,
      full_content: `Welcome to Glasgow. I hope you enjoy living in our City. I enjoy going to the transport museum.
 
            `,
      status: 'approved'
    },
    {
      title: 'Welcome to our Beautiful city',
      category_id: categories.en.welcome,
      short_content: `Welcome to Glasgow. Welcome to our beautiful city. We are so happy you are now part of our community and this is now your city too. The sun doesn't always shine, and it may rain quite a lot but the people are happy. Enjoy you new home :)
            `,
      full_content: `Welcome to Glasgow. Welcome to our beautiful city. We are so happy you are now part of our community and this is now your city too. The sun doesn't always shine, and it may rain quite a lot but the people are happy. Enjoy you new home :)
            `,
      status: 'approved'
    },
    {
      title: 'Welcome to our Beautiful city',
      category_id: categories.en.welcome,
      short_content: `Hell, I hope you will find Glasgow full of wonder, hope & inspiration. I know at times a foreign land may seem short of these things but if you look, you will find them. They are all of you, just as everything in Glasgow. 
            `,
      full_content: `Hell, I hope you will find Glasgow full of wonder, hope & inspiration. I know at times a foreign land may seem short of these things but if you look, you will find them. They are all of you, just as everything in Glasgow. 
            `,
      status: 'approved'
    },
    {
      title: 'Hope',
      category_id: categories.en.welcome,
      short_content: `Never give up ... Welcome to Glasgow. A new life awaits. A new adventure. Love, peace. Gayle McNicol 
            `,
      full_content: `Never give up ... Welcome to Glasgow. A new life awaits. A new adventure. Love, peace. Gayle McNicol 
            `,
      status: 'approved'
    },
    {
      title: 'متحف المواصلات',
      category_id: categories.ar.welcome,
      short_content: `مرحبا بك في جلاسجو! أتمنى أن تسمتع بمدينتنا. أنا أحب الذهاب لمتحف المواصلات. 
            `,
      full_content: `مرحبا بك في جلاسجو! أتمنى أن تسمتع بمدينتنا. أنا أحب الذهاب لمتحف المواصلات. 
            `,
      status: 'approved'
    },
    {
      title: 'جلاسجو الأمل',
      category_id: categories.ar.welcome,
      short_content: `أتمنى أن تجد جلاسجو مليئة بالدهشة والأمل والإلهام. أعلم أن مدينة غريبة قد تبدو خاوية من هذه الأشياء، لكن ابحث جيدا وستجدها. وعندما تجدها فهي لك، كما كل شيء آخر في مدينتِك جلاسجو.  
            `,
      full_content: `أتمنى أن تجد جلاسجو مليئة بالدهشة والأمل والإلهام. أعلم أن مدينة غريبة قد تبدو خاوية من هذه الأشياء، لكن ابحث جيدا وستجدها. وعندما تجدها فهي لك، كما كل شيء آخر في مدينتِك جلاسجو.  
            `,
      status: 'approved'
    }
  ]
}

module.exports = generateArticles
