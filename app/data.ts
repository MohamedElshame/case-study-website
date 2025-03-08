export const translations = {
  en: {
    title: "Case Studies in Organizational Improvement",
    subtitle: "A Collection of Success Stories",
    cases: {
      case1: {
        title: "Automating Government Paperwork",
        description: "How automation streamlined government operations and improved citizen services.",
      },
      case2: {
        title: "Optimizing Marketing Budgets",
        description: "Using data analytics to maximize marketing ROI and improve campaign effectiveness.",
      },
      case3: {
        title: "Improving Job Descriptions",
        description: "Modernizing job descriptions to attract diverse talent and improve hiring outcomes.",
      },
      case4: {
        title: "Web Scraping in E-Commerce",
        description:
          "How data extraction techniques helped an Egyptian retailer monitor competitors and optimize pricing.",
      },
    },
    background: "Background",
    challenges: "Key Challenges",
    solution: "Solution",
    results: "Results",
    lessons: "Lessons Learned",
    viewReferences: "View References",
    backToHome: "Back to Home",
    references: "References",
  },
  ar: {
    title: "دراسات حالة في تحسين المؤسسات",
    subtitle: "مجموعة من قصص النجاح",
    cases: {
      case1: {
        title: "أتمتة المعاملات الحكومية",
        description: "كيف ساهمت الأتمتة في تحسين العمليات الحكومية وخدمة المواطنين",
      },
      case2: {
        title: "تحسين ميزانية التسويق",
        description: "استخدام تحليل البيانات لتحسين العائد على الاستثمار في التسويق",
      },
      case3: {
        title: "تحسين توصيف الوظائف",
        description: "تحديث توصيفات الوظائف لجذب المواهب المتنوعة وتحسين نتائج التوظيف",
      },
      case4: {
        title: "استخراج البيانات من الويب في التجارة الإلكترونية",
        description: "كيف ساعدت تقنيات استخراج البيانات متجرًا مصريًا في مراقبة المنافسين وتحسين الأسعار",
      },
    },
    background: "الخلفية",
    challenges: "التحديات الرئيسية",
    solution: "الحل",
    results: "النتائج",
    lessons: "الدروس المستفادة",
    viewReferences: "عرض المصادر",
    backToHome: "العودة للرئيسية",
    references: "المراجع",
  },
}

export const references = {
  en: [
    { title: "IBM AI in Government", url: "https://www.ibm.com/think/topics/ai-in-government" },
    { title: "Data.gov Case Studies", url: "https://resources.data.gov/categories/case-studies-examples/" },
    {
      title: "PwC Marketing Budget Optimization",
      url: "https://www.pwc.ch/en/insights/transformation/optimising-marketing-budgets-b2b.html",
    },
    {
      title: "An Introduction to Web Scraping for Research",
      url: "https://researchdata.wisc.edu/news/an-introduction-to-web-scraping-for-research/",
    },
    { title: "Arabic Natural Language Processing: An Overview", url: "https://dl.acm.org/doi/10.1145/3331164" },
    {
      title: "Web Scraping for Research: Legal, Ethical, Institutional, and Scientific Considerations",
      url: "https://arxiv.org/html/2410.23432v1",
    },
    {
      title: "Web Scraping Techniques and Its Applications: A Review",
      url: "https://www.researchgate.net/publication/376745205_Web_Scraping_Techniques_and_Its_Applications_A_Review",
    },
    {
      title: "iWebScraping Case Study on Retail Price Monitoring",
      url: "https://www.iwebscraping.com/retail-price-monitoring.php",
    },
  ],
  ar: [
    { title: "الذكاء الاصطناعي في الحكومة من IBM", url: "https://www.ibm.com/think/topics/ai-in-government" },
    { title: "دراسات حالة من Data.gov", url: "https://resources.data.gov/categories/case-studies-examples/" },
    {
      title: "تحسين ميزانية التسويق من PwC",
      url: "https://www.pwc.ch/en/insights/transformation/optimising-marketing-budgets-b2b.html",
    },
    {
      title: "مقدمة في استخراج البيانات من الويب للبحث",
      url: "https://researchdata.wisc.edu/news/an-introduction-to-web-scraping-for-research/",
    },
    { title: "معالجة اللغة العربية الطبيعية: نظرة عامة", url: "https://dl.acm.org/doi/10.1145/3331164" },
    {
      title: "استخراج البيانات من الويب للبحث: اعتبارات قانونية وأخلاقية ومؤسسية وعلمية",
      url: "https://arxiv.org/html/2410.23432v1",
    },
    {
      title: "تقنيات استخراج البيانات من الويب وتطبيقاتها: مراجعة",
      url: "https://www.researchgate.net/publication/376745205_Web_Scraping_Techniques_and_Its_Applications_A_Review",
    },
    {
      title: "دراسة حالة iWebScraping حول مراقبة أسعار التجزئة",
      url: "https://www.iwebscraping.com/retail-price-monitoring.php",
    },
  ],
}

export const caseStudies = {
  en: [
    {
      title: "Automating Government Paperwork",
      background:
        "Government agencies handle vast amounts of paperwork, including applications, permits, and reports. Manual processing is slow, error-prone, and inefficient.",
      challenges: [
        "High volume of repetitive tasks",
        "Inconsistent data entry leading to errors",
        "Delays due to manual workflows",
        "Difficulty tracking application statuses",
      ],
      solution: [
        "Robotic Process Automation (RPA) for data entry, form filling, and document scanning",
        "Optical Character Recognition (OCR) to digitize paper documents",
        "Centralized digital platform for application submission and tracking",
        "Machine learning algorithms to predict issues and optimize resource allocation",
      ],
      benefits: [
        "Processing times reduced by 50% or more",
        "Improved data accuracy and consistency",
        "Faster, more transparent services",
        "Cost savings through reduced manual labor",
      ],
      lessons: [
        "Change management is critical for automation success",
        "Data security and compliance are essential",
        "Continuous updates and monitoring ensure system efficiency",
      ],
    },
    {
      title: "Optimizing Marketing Budgets",
      background:
        "Businesses must allocate marketing budgets wisely to maximize ROI. This study explores how data analytics can improve marketing efficiency.",
      challenges: [
        "Limited budget with multiple marketing channels",
        "Difficulty measuring campaign effectiveness",
        "Need for precise audience targeting",
      ],
      solution: [
        "Analyzing past campaigns using data analytics tools",
        "Identifying high-performing channels and audiences",
        "Shifting focus to digital marketing",
        "A/B testing to optimize content",
        "Predictive analytics to forecast trends and adjust spending",
      ],
      results: [
        "Increased ROI by prioritizing high-performing channels",
        "30% increase in conversions with lower costs",
        "Improved brand awareness among target demographics",
      ],
      lessons: [
        "Data-driven decisions are key to marketing success",
        "Regular strategy reviews maintain performance",
        "Balancing short-term and long-term goals is crucial",
      ],
    },
    {
      title: "Improving Job Descriptions",
      background:
        "A well-structured job description is vital for hiring the right talent. This study explores how an organization modernized job descriptions to attract diverse candidates.",
      challenges: [
        "Outdated descriptions misaligned with actual roles",
        "Biased language discouraging certain applicants",
        "Lack of clarity on required skills",
      ],
      solution: [
        "Conducting employee surveys",
        "Revising descriptions for clarity and inclusivity",
        "Removing biased language",
        "Adding measurable performance indicators",
        "Highlighting career growth opportunities",
      ],
      results: [
        "40% increase in diverse applicants",
        "Better alignment of roles and expectations",
        "Higher employee satisfaction",
      ],
      lessons: [
        "Job descriptions must be regularly updated",
        "Inclusive language improves recruitment outcomes",
        "Clear expectations enhance employee success",
      ],
    },
    {
      title: "Web Scraping in E-Commerce",
      background:
        "Web scraping, also known as web crawling or data scraping, is the automated process of extracting data from websites using software, transforming unstructured web content into structured formats like spreadsheets or databases for analysis. Its significance lies in enabling access to vast online data, crucial for business intelligence, academic research, and technological advancements, especially in a data-driven world as of March 8, 2025. The process began in the early 1990s with tools like Archie and Gopher for indexing FTP sites, evolving through the 2000s with the rise of e-commerce and social media, and the development of tools like Scrapy (2009) and BeautifulSoup (2006). Today, it is integral to various sectors, with ongoing advancements in AI and machine learning enhancing its capabilities, particularly in diverse linguistic contexts like Arabic.",
      challenges: [
        "Anti-Scraping Measures: Websites increasingly use IP blocking, CAPTCHAs, and rate limiting, requiring scrapers to employ strategies like proxy rotation, particularly for Arabic sites.",
        "Dynamic and Complex Web Pages: Handling JavaScript and AJAX-based content remains complex, with additional challenges for Arabic websites due to encoding and structure.",
        "Language-Specific Issues: Handling Arabic text, right-to-left direction, and local formatting adds complexity, requiring specialized libraries and configurations.",
        "Frequent price changes by competitors",
        "Need for real-time data collection",
      ],
      solution: [
        "BeautifulSoup: A Python library for parsing HTML and XML, ideal for static content, with considerations for handling non-Latin characters like Arabic.",
        "Scrapy: A Python framework for building web crawlers, designed for large-scale scraping, configurable for different languages.",
        "Selenium: Used for automating web browsers, handling dynamic content by rendering pages as a user would, useful for Arabic websites with complex interactions.",
        "Requests: A Python library for HTTP requests, often paired with other tools for data fetching, ensuring proper encoding for Arabic text.",
        "HTML Parsing: Extracting data using tags, attributes, or structure, ensuring proper handling of right-to-left text for Arabic.",
        "API Reverse Engineering: Accessing hidden APIs for structured data, noting that API availability and formats may differ for Arabic sites.",
        "Headless Browsers: Simulating user behavior on complex sites, considering locale-specific settings like Arabic date formats.",
      ],
      results: [
        "TechMart, an e-commerce company in Cairo, used web scraping to monitor prices on competitors like Souq.com and Jumia. They collected data every 6 hours, handling Arabic text and local currency, and saw a 12% sales boost after cutting prices by 7%.",
        "They used Python with BeautifulSoup, Scrapy, and Selenium, facing issues like Arabic encoding, which they solved with proper libraries. They also dealt with website terms and avoided detection with rate limiting.",
        "Handling right-to-left text and local formats added complexity, but it helped TechMart tailor strategies to the Egyptian market, showing how local context matters.",
      ],
      lessons: [
        "AI and Machine Learning Integration: Enhancing scraping with AI to handle CAPTCHAs, understand Arabic natural language, and adapt to site changes.",
        "Headless Browser Technology: Advancements to better simulate user interactions, improving dynamic content handling for Arabic websites.",
        "Blockchain and Decentralized Data: Offering secure storage and access for scraped data, potentially transforming data sharing in Arabic-speaking regions.",
        "Regulatory Developments: Evolving laws may impact scraping practices, requiring continuous adaptation, especially in Arabic countries with emerging data protection frameworks.",
      ],
    },
  ],
  ar: [
    {
      title: "أتمتة المعاملات الحكومية",
      background:
        "تعاني الجهات الحكومية من التعامل مع كميات هائلة من الأوراق مثل الطلبات، والتصاريح، والتقارير، مما يجعل العمليات بطيئة ومعرضة للأخطاء.",
      challenges: [
        "عدد هائل من المهام المتكررة يستهلك الوقت والموارد",
        "إدخال البيانات يدويًا يؤدي إلى أخطاء وعدم اتساق",
        "التأخير في معالجة الطلبات بسبب التعقيد البيروقراطي",
        "صعوبة تتبع حالة المعاملات بشكل دقيق",
      ],
      solution: [
        "استخدام أتمتة العمليات الروبوتية (RPA) لأداء المهام المتكررة مثل إدخال البيانات وملء النماذج ومسح المستندات",
        "تطبيق تقنية التعرف الضوئي على الحروف (OCR) لتحويل المستندات الورقية إلى بيانات رقمية",
        "تطوير منصة رقمية مركزية تتيح للمواطنين تقديم الطلبات وتتبع حالتها",
        "دمج الخوارزميات الذكية للتنبؤ بالمشكلات وتحسين تخصيص الموارد",
      ],
      benefits: [
        "تقليل وقت المعالجة بنسبة 50% أو أكثر",
        "تحسين دقة البيانات وتقليل نسبة الأخطاء البشرية",
        "تعزيز رضا المواطنين عبر خدمات أسرع وأكثر شفافية",
        "توفير التكاليف بتقليل الحاجة إلى العمل اليدوي",
      ],
      lessons: [
        "التغيير الإداري أمر أساسي لضمان نجاح الأتمتة في القطاع الحكومي",
        "يجب الالتزام بمعايير الأمان والخصوصية لضمان الامتثال للقوانين",
        "تحتاج الأنظمة إلى تحديثات ومراقبة مستمرة للحفاظ على كفاءتها",
      ],
    },
    {
      title: "تحسين ميزانية التسويق",
      background:
        "في ظل المنافسة الشرسة، تحتاج الشركات إلى استغلال ميزانيات التسويق بحكمة لتحقيق أقصى عائد على الاستثمار (ROI).",
      challenges: [
        "ميزانية محدودة مع تعدد القنوات التسويقية (السوشيال ميديا، التلفزيون، الصحف، البريد الإلكتروني)",
        "صعوبة قياس فعالية الحملات المختلفة",
        "الحاجة إلى استهداف العملاء المناسبين دون إهدار الموارد",
      ],
      solution: [
        "تحليل أداء الحملات السابقة باستخدام أدوات تحليل البيانات",
        "تحديد القنوات والجماهير الأكثر استجابة من خلال مؤشرات مثل نسب النقرات والتحويلات",
        "التركيز على التسويق الرقمي بسبب كفاءته العالية وتكلفته المنخفضة مقارنةً بالوسائل التقليدية",
        "استخدام اختبارات A/B لتحسين الإعلانات والمحتوى",
        "تطبيق تحليلات تنبؤية لتوقع اتجاهات السوق وتوزيع الميزانية بفعالية",
      ],
      results: [
        "زيادة العائد على الاستثمار عن طريق توجيه الميزانية نحو القنوات الأكثر فاعلية",
        "تحقيق زيادة 30% في معدلات التحويل مع خفض التكاليف",
        "تحسين الوعي بالعلامة التجارية لدى الجمهور المستهدف",
      ],
      lessons: [
        "اتخاذ القرارات بناءً على البيانات ضروري لنجاح التسويق",
        "مراجعة الاستراتيجيات باستمرار يضمن الحفاظ على الأداء الجيد",
        "تحقيق توازن بين المكاسب قصيرة الأجل والنمو طويل الأجل أمر أساسي",
      ],
    },
    {
      title: "تحسين توصيف الوظائف",
      background:
        "يعد توصيف الوظائف عنصرًا أساسيًا في عملية التوظيف، حيث يساعد في تحديد المرشحين المناسبين وتوضيح التوقعات وتحسين تقييم الأداء.",
      challenges: [
        "توصيفات وظيفية قديمة لا تعكس الأدوار الحقيقية للموظفين",
        "استخدام لغة متحيزة تقلل من فرص التقديم لبعض الفئات",
        "عدم وضوح المهارات المطلوبة للوظائف المختلفة",
      ],
      solution: [
        "إجراء استبيانات ومقابلات مع الموظفين للحصول على ملاحظاتهم حول التوصيفات القديمة",
        "إعادة كتابة التوصيفات الوظيفية للتركيز على المسؤوليات الأساسية والمهارات المطلوبة",
        "إزالة المصطلحات المتحيزة لضمان شمولية التوصيفات",
        "إضافة مؤشرات أداء قابلة للقياس لتوضيح التوقعات",
        "إبراز فرص التطور المهني داخل المنظمة",
      ],
      results: [
        "زيادة 40% في تنوع المتقدمين للوظائف",
        "تحسين التوافق بين التوصيفات الوظيفية والعمل الفعلي للموظفين",
        "تعزيز رضا الموظفين بسبب وضوح المسارات المهنية",
      ],
      lessons: [
        "يجب تحديث التوصيفات الوظيفية بانتظام لتظل ملائمة",
        "استخدام لغة شاملة يؤثر بشكل إيجابي على نتائج التوظيف",
        "التواصل الواضح للتوقعات يعزز نجاح الموظفين في وظائفهم",
      ],
    },
    {
      title: "استخراج البيانات من الويب في التجارة الإلكترونية",
      background:
        "استخراج البيانات من الويب، أو الزحف على الويب (Web Crawling)، هو عملية تلقائية لجمع البيانات من المواقع الإلكترونية باستخدام برامج متخصصة، وتحويلها إلى صيغ منظمة مثل جداول البيانات أو قواعد البيانات لتحليلها بسهولة. تكمن أهميته في إتاحة الوصول إلى كميات ضخمة من البيانات عبر الإنترنت، وهو أمر بالغ الأهمية لاستخبارات الأعمال، والبحث الأكاديمي، والتقدم التكنولوجي، خاصة في عالم يعتمد على البيانات. بدأت هذه العملية في أوائل التسعينيات بأدوات مثل Archie وGopher لفهرسة مواقع FTP، وتطورت خلال العقد الأول من القرن الحادي والعشرين مع صعود التجارة الإلكترونية ووسائل التواصل الاجتماعي، وتطوير أدوات مثل Scrapy (2009) وBeautifulSoup (2006). واليوم، أصبح استخراج البيانات جزءًا لا يتجزأ من العديد من القطاعات، مع تطورات مستمرة في الذكاء الاصطناعي والتعلم الآلي لتعزيز قدراته.",
      challenges: [
        "تدابير مكافحة الاستخراج: تستخدم المواقع بشكل متزايد حظر عناوين IP وCAPTCHAs والحد من معدل الطلبات، مما يتطلب من المستخرجين استخدام استراتيجيات مثل تناوب البروكسي، خاصة للمواقع العربية.",
        "صفحات الويب الديناميكية والمعقدة: لا تزال معالجة المحتوى المعتمد على JavaScript وAJAX معقدة، مع تحديات إضافية للمواقع العربية بسبب الترميز والهيكل.",
        "قضايا خاصة باللغة: تضيف معالجة النص العربي واتجاه الكتابة من اليمين إلى اليسار والتنسيق المحلي تعقيدًا، مما يتطلب مكتبات وتكوينات متخصصة.",
        "تغييرات متكررة في أسعار المنافسين",
        "الحاجة إلى جمع البيانات في الوقت الفعلي",
      ],
      solution: [
        "BeautifulSoup: مكتبة Python لتحليل HTML وXML، مثالية للمحتوى الثابت، مع اعتبارات لمعالجة الأحرف غير اللاتينية مثل العربية.",
        "Scrapy: إطار عمل Python لبناء زواحف الويب، مصمم للاستخراج واسع النطاق، ويمكن تهيئته للغات مختلفة.",
        "Selenium: يُستخدم لأتمتة المتصفحات، ومعالجة المحتوى الديناميكي عن طريق محاكاة المستخدم، مفيد للمواقع العربية ذات التفاعلات المعقدة.",
        "Requests: مكتبة Python لإرسال الطلبات HTTP، غالبًا ما يتم دمجها مع أدوات أخرى لضمان التشفير الصحيح للنصوص العربية.",
        "تحليل HTML: استخراج البيانات باستخدام العلامات والسمات والهيكل، مع ضمان المعالجة الصحيحة للنص من اليمين إلى اليسار باللغة العربية.",
        "الهندسة العكسية للـ API: الوصول إلى واجهات برمجة خفية للحصول على بيانات منظمة، مع ملاحظة أن توفر API وتنسيقاتها قد تختلف للمواقع العربية.",
        "المتصفحات غير المرئية: محاكاة سلوك المستخدم على المواقع المعقدة، مع مراعاة إعدادات محددة للغة مثل تنسيقات التاريخ العربية.",
      ],
      benefits: [
        "TechMart، شركة تجارة إلكترونية في القاهرة، استخدمت استخراج البيانات من الويب لمراقبة الأسعار على مواقع المنافسين مثل Souq.com وJumia. قاموا بجمع البيانات كل 6 ساعات، وتعاملوا مع النصوص العربية والعملات المحلية، مما أدى إلى زيادة المبيعات بنسبة 12٪ بعد خفض الأسعار بنسبة 7٪.",
        "استخدموا Python مع BeautifulSoup وScrapy وSelenium، وواجهوا مشكلات مثل ترميز النص العربي، والتي تم حلها باستخدام المكتبات المناسبة. كما تعاملوا مع شروط استخدام المواقع وتجنبوا الاكتشاف عبر الحد من معدل الطلبات.",
        "أدى التعامل مع النصوص المكتوبة من اليمين إلى اليسار والتنسيقات المحلية إلى تعقيد العملية، لكنه ساعد TechMart في تخصيص استراتيجياتها للسوق المصرية، مما يوضح أهمية السياق المحلي.",
      ],
      lessons: [
        "دمج الذكاء الاصطناعي والتعلم الآلي: تعزيز الاستخراج بالذكاء الاصطناعي للتعامل مع CAPTCHAs وفهم اللغة العربية الطبيعية والتكيف مع تغييرات المواقع.",
        "تقنية المتصفحات غير المرئية: تطويرات لمحاكاة تفاعلات المستخدم بشكل أفضل، وتحسين معالجة المحتوى الديناميكي للمواقع العربية.",
        "البلوكتشين والبيانات اللامركزية: توفير تخزين آمن والوصول إلى البيانات المستخرجة، مما قد يغير مشاركة البيانات في المناطق الناطقة بالعربية.",
        "التطورات التنظيمية: قد تؤثر القوانين المتطورة على ممارسات الاستخراج، مما يتطلب تكيفًا مستمرًا، خاصة في البلدان العربية ذات أطر حماية البيانات الناشئة.",
      ],
    },
  ],
}

