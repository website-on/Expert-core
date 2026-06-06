const fs = require('fs');

const headerContent = `
    <!-- Header -->
    <header class="main-header">
        <div class="container header-flex">
            <div class="brand">
                <div class="logo-icon"><i class="fas fa-cubes"></i></div>
                <div class="brand-text">
                    <a href="index.html"><h1>Expert-Core</h1></a>
                    <span>إشراف المهندس / معتصم حمدي</span>
                </div>
            </div>
            
            <nav class="desktop-nav desktop-only">
                <a href="index.html">الرئيسية</a>
                <a href="about.html">من نحن</a>
                <div class="dropdown">
                    <a href="index.html#services" class="dropbtn">خدماتنا <i class="fas fa-caret-down"></i></a>
                    <div class="dropdown-content">
                        <a href="core-drilling.html">تخريم بالكور</a>
                        <a href="concrete-cutting.html">قص بالمنشار</a>
                        <a href="rebar-planting.html">تزريع الأشاير</a>
                        <a href="ventilation.html">تأسيس الشفاطات</a>
                    </div>
                </div>
                <a href="projects.html">أعمالنا</a>
                <a href="pricing.html">أسعارنا</a>
                <a href="blog.html">المدونة</a>
            </nav>

            <div class="header-contact desktop-only">
                <a href="tel:01033831671" class="header-phone">
                    <div class="icon-circle"><i class="fas fa-phone-volume"></i></div>
                    <div class="contact-details">
                        <small>اتصل بنا الآن</small>
                        <span dir="ltr">010 3383 1671</span>
                    </div>
                </a>
                <a href="https://wa.me/201152800018" class="header-whatsapp">
                    <div class="icon-circle"><i class="fab fa-whatsapp"></i></div>
                    <div class="contact-details">
                        <small>واتساب</small>
                        <span dir="ltr">011 5280 0018</span>
                    </div>
                </a>
            </div>
            <button class="mobile-menu-btn"><i class="fas fa-bars"></i></button>
        </div>
    </header>

    <!-- Mobile Contact Menu -->
    <div class="mobile-menu" id="mobileMenu">
        <a href="index.html"><i class="fas fa-home"></i> الرئيسية</a>
        <a href="about.html"><i class="fas fa-info-circle"></i> من نحن</a>
        <a href="core-drilling.html"><i class="fas fa-dot-circle"></i> تخريم بالكور</a>
        <a href="concrete-cutting.html"><i class="fas fa-tools"></i> قص بالمنشار</a>
        <a href="rebar-planting.html"><i class="fas fa-link"></i> تزريع الأشاير</a>
        <a href="ventilation.html"><i class="fas fa-fan"></i> تأسيس الشفاطات</a>
        <a href="projects.html"><i class="fas fa-building"></i> أعمالنا</a>
        <a href="pricing.html"><i class="fas fa-tags"></i> أسعارنا</a>
        <a href="blog.html"><i class="fas fa-blog"></i> المدونة</a>
        <a href="tel:01033831671" class="contact-menu-link"><i class="fas fa-phone"></i> 01033831671</a>
        <a href="https://wa.me/201152800018" class="contact-menu-link"><i class="fab fa-whatsapp"></i> 01152800018</a>
    </div>
`;

const footerContent = `
    <!-- Value Banner -->
    <section class="value-banner">
        <div class="container text-center">
            <h2>لا تخاطر بسلامة المنشأة! اختر التكنولوجيا الحديثة</h2>
            <p>التكسير اليدوي أو بالمطارق الهوائية يتسبب بتفتيت الترابط بين المادة الأسمنتية والركام وحديد التسليح
                الداخلي والتسبب بشروخ تصدع مستقبلاً. حلولنا تقطع كالمشرط، بنظافة وصمت وقوة.</p>
            <div class="banner-contacts">
                <a href="tel:01033831671" class="btn btn-primary btn-large"><i class="fas fa-phone-alt"></i>
                    01033831671</a>
                <a href="https://wa.me/201152800018" class="btn btn-whatsapp btn-large"><i class="fab fa-whatsapp"></i>
                    01152800018</a>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer-engineered">
        <div class="container footer-grid">
            <div class="footer-col">
                <div class="footer-brand">
                    <i class="fas fa-cubes"></i>
                    <h2>Expert-Core</h2>
                </div>
                <p class="footer-desc">
                    المكتب الهندسي الرائد إشراف المهندس/ معتصم حمدي، لتقديم خدمات الكور والقص الخرساني، بأجهزة ومعدات خالية من الاهتزازات لضمان التميز والموثوقية المطلقة.
                </p>
            </div>
            <div class="footer-col">
                <h3 class="footer-title">تواصل معنا 24/7</h3>
                <ul class="footer-links">
                    <li><i class="fas fa-phone"></i><a href="tel:01033831671" dir="ltr">010 3383 1671</a></li>
                    <li><i class="fab fa-whatsapp" style="color: #25D366;"></i><a href="https://wa.me/201152800018" dir="ltr">011 5280 0018</a></li>
                    <li><i class="fas fa-map-marker-alt"></i> متاحون لخدمتكم وإنجاز الأعمال بأعلى المقاييس الهندسية.</li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2026 جميع الحقوق محفوظة لـ <span>Expert-Core</span>.</p>
        </div>
    </footer>

    <!-- Floating Phones -->
    <a href="tel:01033831671" class="floating-phone" aria-label="اتصال هاتفي">
        <i class="fas fa-phone-alt"></i>
    </a>
    <a href="https://wa.me/201152800018" class="floating-whatsapp" target="_blank" aria-label="تواصل واتساب">
        <div class="wave"></div>
        <i class="fab fa-whatsapp"></i>
    </a>
    <script src="script.js"></script>
`;

function getLayout(title, content) {
    return `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} | Expert-Core</title>
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;800;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="style.css">
    <style>
        .inner-hero { padding: 80px 0 40px; background: var(--bg-dark); border-bottom: 1px solid var(--border-color); text-align: center; }
        .inner-hero h1 { font-size: 2.2rem; color: #fff; margin-bottom: 20px; line-height: 1.4; max-width: 900px; margin: 0 auto; padding: 0 20px;}
        .content-section { padding: 60px 0; background: var(--bg-card); }
        .content-card { background: var(--bg-dark); padding: 40px; border-radius: 12px; border: 1px solid var(--border-color); margin-bottom: 30px; }
        .content-card h2 { color: var(--primary); margin-bottom: 20px; font-size: 1.6rem; }
        .content-card p { font-size: 1.1rem; line-height: 1.8; color: var(--text-main); margin-bottom: 20px; }
        .content-list { list-style: none; padding-right: 0; }
        .content-list li { margin-bottom: 15px; font-size: 1.1rem; padding-right: 30px; position: relative; line-height: 1.6;}
        .content-list li::before { content: '\\f00c'; font-family: 'Font Awesome 6 Free'; font-weight: 900; color: var(--whatsapp); position: absolute; right: 0; top: 5px; }
        .content-list strong { color: var(--secondary); }
        .page-content-grid { display: grid; grid-template-columns: 1fr; gap: 40px; margin-top: 30px;}
        @media (min-width: 900px) { .page-content-grid { grid-template-columns: 1fr 1fr; align-items: start;} }
        .service-image { width: 100%; border-radius: 12px; max-height: 400px; object-fit: cover; border: 1px solid var(--border-color); }
        .blog-post { background: var(--bg-dark); padding: 30px; border-radius: 10px; border: 1px solid var(--border-color); margin-bottom: 30px;}
        .blog-post h3 { color: var(--primary); font-size: 1.5rem; margin-bottom: 15px; line-height: 1.5;}
        .pricing-table { width: 100%; border-collapse: collapse; margin-top: 20px; background: var(--bg-dark); border-radius: 10px; overflow: hidden; border: 1px solid var(--border-color); }
        .pricing-table th, .pricing-table td { padding: 15px 20px; border: 1px solid var(--border-color); text-align: right; }
        .pricing-table th { background-color: rgba(255,106,0,0.1); color: var(--primary); font-size: 1.2rem;}
        .pricing-table td { font-size: 1.1rem; color: var(--text-main); }
    </style>
</head>
<body>
    ${headerContent}
    <section class="inner-hero">
        <div class="container">
            <h1>${title}</h1>
        </div>
    </section>
    <section class="content-section">
        <div class="container">
            ${content}
        </div>
    </section>
    ${footerContent}
</body>
</html>`;
}

const pages = {
    'core-drilling.html': {
        title: 'صنايعي كور وتخريم خرسانة بأقل سعر وأعلى جودة في مصر 01033831671',
        content: \`
            <div class="content-card">
                <p>لو بدور على صنايعي كور وتخريم خرسانة شاطر وسعره على الإيد، Expert-Core بتوفرلك أسرع وأدق خدمات عمل الفتحات الدائرية في الخرسانة المسلحة والطوب بأحدث ماكينات الكور الألمانية، من غير تكسير، ومن غير أي اهتزاز أو شروخ في السقف أو الحيطة، وبأقل تكلفة في السوق.</p>
                <div class="page-content-grid">
                    <div>
                        <h2>تطبيقات الخدمة (بنعمل إيه؟):</h2>
                        <ul class="content-list">
                            <li><strong>فتحات التهوية والشفاطات:</strong> عمل فتحات بمقاسات مظبوطة ع الشعرة لشفاطات المطابخ والحمامات (الشفاط الطارد أو المروحة) وفتحات تهوية الغاز الطبيعي والمداخن.</li>
                            <li><strong>تأسيس السباكة والتكييف:</strong> عمل فتحات مواسير الصرف الصحي، التغذية، وتمديدات التكييف المركزي والـ Split.</li>
                            <li><strong>الكهرباء والحريق:</strong> فتح مسارات خراطيم الكهرباء وكابلات الباور وأنظمة إطفاء الحريق.</li>
                            <li><strong>اختبارات الخرسانة:</strong> أخذ عينات الكور (Concrete Cores) للمكاتب الاستشارية ومعامل اختبار جودة الخرسانة.</li>
                        </ul>
                    </div>
                    <div>
                        <img src="images/core_drilling.png" alt="آلة الكور" class="service-image">
                    </div>
                </div>
            </div>
            <div class="content-card">
                <h2>ليه تشتغل معانا؟</h2>
                <ul class="content-list">
                    <li><strong>أقل سعر في مصر:</strong> بنقدم عروض أسعار تنافسية ومناسبة للمقاولين وأصحاب الشقق والمحلات.</li>
                    <li><strong>شغل نضيف وع السكين:</strong> الفتحة بتطلع دائرية ومستوية تماماً مش محتاجة ترميم وراها، وبنستخدم المية لمنع العفرة والتراب.</li>
                    <li><strong>كل المقاسات موجودة:</strong> فتحات بأقطار تبدأ من 1 بوصة وحتى الأقطار الكبيرة جداً للمشروعات، وبأي عمق مطلوب في أعتى خرسانة مسلحة بحديد.</li>
                </ul>
            </div>
        \`
    },
    'concrete-cutting.html': {
        title: 'مقاول قص خرسانة بالمنشار الماسي بأقل تكلفة وأعلى دقة 01033831671',
        content: \`
            <div class="content-card">
                <p>لو محتاج تعديل في بيتك أو موقعك وتعبت من التكسير التقليدي بالهيلتي اللي بيهز البيت وبيعمل شروخ، Expert-Core بتقدم لك الحل الأنظف والأسرع: قص الخرسانة المسلحة بالمنشار الماسي (القرص والسلك). بنقص لك الحوائط والأسقف والكمرات كأنك بتقطع بالمشرط، بأبعاد مظبوطة ع الشعرة، وبدون أي اهتزازات خطيرة على المبنى، وبسعر يناسب ميزانيتك.</p>
                <div class="page-content-grid">
                    <div>
                        <h2>تطبيقات الخدمة (بنعمل إيه بالمنشار؟):</h2>
                        <ul class="content-list">
                            <li><strong>فتحات الأبواب والشبابيك:</strong> توسيع أو عمل فتحات جديدة للأبواب والنوافذ في الحوائط الخرسانية والمباني بسرعة وبشكل متساوي تماماً.</li>
                            <li><strong>فتحات المصاعد والسلم:</strong> قص وتفريغ بلاطات الأسقف الخرسانية لعمل مسارات الأسانسير أو السلالم الداخلية (الدوبلكس).</li>
                            <li><strong>هدم وإزالة أجزاء إنشائية:</strong> إزالة وتقطيع الكمرات، الأعمدة، الكوابيل، والقواعد الخرسانية القديمة أو المخالفة طبقاً للمخططات الهندسية.</li>
                            <li><strong>فواصل التمدد:</strong> عمل فواصل التمدد والهبوط في الأرضيات الخرسانية للمصانع والمخازن والباركينج بخطوط مستقيمة ونظيفة.</li>
                        </ul>
                    </div>
                    <div>
                        <img src="images/concrete_saw.png" alt="المنشار الخرساني" class="service-image">
                    </div>
                </div>
            </div>
            <div class="content-card">
                <h2>مميزات الشغل معانا:</h2>
                <ul class="content-list">
                    <li><strong>أقل سعر للمتر:</strong> بنوفر تكلفة الترميم والمحارة لأن السطح بيطلع ناعم ومستوي تماماً ومش محتاج تصليح وراه.</li>
                    <li><strong>أمان مطلق على المنشأ:</strong> زيرو اهتزاز (Zero Vibration)، يعني مفيش أي خطورة من حدوث تصدعات أو شروخ في السقف.</li>
                    <li><strong>سرعة ونظافة في الموقع:</strong> المنشار بيشتغل بتبريد المية لمنع غبار الخرسانة والتراب تماماً، وبننجز الشغلانة اللي بتاخد أيام في ساعات.</li>
                </ul>
            </div>
        \`
    },
    'rebar-planting.html': {
        title: 'متخصص تخريم وتزريع أشاير حديد الخرسانة اعلى جودة وأفضل سعر 01033831671',
        content: \`
            <div class="content-card">
                <p>عشان تعلي دور جديد، أو توسع بلاطة، أو ترمم مبنى بأمان مطلق، لازم ربط الحديد القديم بالجديد يتم بأعلى دقة هندسية. في Expert-Core، بنوفر لك خدمة تخريم وتزريع أشاير الحديد والجاكيتات الخرسانية باستخدام أقوى المواد الكيميائية والإيبوكسية المعتمدة عالمياً (زي Hilti وكيماويات البناء الحديث)، عشان نضمن لك تماسك أقوى من الخرسانة نفسها، وبأسعار منافسة جداً.</p>
                <div class="page-content-grid">
                    <div>
                        <h2>تطبيقات الخدمة (بنعمل إيه في التزريع؟):</h2>
                        <ul class="content-list">
                            <li><strong>تعلية الأدوار والتوسعات:</strong> زراعة أشاير الأعمدة والحوائط الخرسانية لاستكمال المباني وتعلية الأدوار بأمان.</li>
                            <li><strong>توسيع البلاطات والكمرات:</strong> تزريع حديد لتمديد السقف، عمل كوابيل (بروز)، أو زيادة مساحة الغرف.</li>
                            <li><strong>تثبيت الجوايط والأنكورز:</strong> زراعة وتثبيت الجوايط الحديدية لتركيب الهناجر والمنشآت المعدنية والماكينات الثقيلة.</li>
                            <li><strong>قمصان الأعمدة والتدعيم:</strong> تخريم وتزريع أشاير لعمل جاكيتات (قمصان خرسانية) لتقوية الأعمدة والقواعد الضعيفة.</li>
                        </ul>
                    </div>
                    <div>
                        <img src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800" alt="تزريع الأشاير" class="service-image">
                    </div>
                </div>
            </div>
            <div class="content-card">
                <h2>خطوات الشغل المظبوطة عندنا (شغل هندسي على أبوه):</h2>
                <ul class="content-list">
                    <li><strong>التخريم بالعمق الهندسي:</strong> بنخرم بالقطر والعمق المناسب لقطر السيخ (حتى الأقطار الكبيرة 25 مم وأكتر).</li>
                    <li><strong>نظافة الثقب ع الشعرة:</strong> بننظف الحفرة تماماً بالبلاور والفرشاة السلكية من أي بودرة خرسانية (أهم خطوة عشان الإيبوكسي يمسك صح).</li>
                    <li><strong>حقن المادة الإيبوكسية:</strong> بنحقن المادة المعتمدة بنسب مظبوطة ونثبت السيخ مع الالتزام بزمن الجفاف قبل صب الخرسانة.</li>
                </ul>
                <h2 style="margin-top: 30px;">ليه تختار Expert-Core؟</h2>
                <ul class="content-list">
                    <li><strong>خبرة في اختيار المادة:</strong> بنستخدم المادة اللي تناسب طبيعة الحمل والضغط سواء Hilti أو غيره.</li>
                    <li><strong>أقل تكلفة وأعلى جودة:</strong> بنوفر في الهدر وبنقدملك سعر للمتر أو لعدد الأشاير يناسب ميزانيتك.</li>
                </ul>
            </div>
        \`
    },
    'ventilation.html': {
        title: 'تأسيس وتوريد وتركيب الشفاطات وأنظمة التهوية أعلى جودة وأفضل سعر 01033831671',
        content: \`
            <div class="content-card">
                <p>في Expert-Core، بنريحك من دوخة الصنايعية واللف على محلات المعدات. بنقدم لك خدمة متكاملة بنستلم منك المكان ع الطوب أو على المحارة، وبنسلمهولك في أفضل حالة تهوية وأعلى كفاءة سحب. بنبدأ معاك من أول خرم الكور في الخرسانة لحد ما تسحب وتجرب الشفاط بنفسك، وكل ده بأعلى جودة خامات وأسعار ملهاش منافس.</p>
                <div class="page-content-grid">
                    <div>
                        <h2>خطوات الخدمة المتكاملة:</h2>
                        <ul class="content-list">
                            <li><strong>المعاينة وتحديد المكان:</strong> تحديد الأماكن الصح هندسياً لعمل الفتحات لأعلى كفاءة لطرد الدخان.</li>
                            <li><strong>عمل فتحة الكور النظيفة:</strong> مقاس مظبوط ع الشعرة ومناسب لقطر ماسورة الطرد، بدون تكسير للحيطة.</li>
                            <li><strong>توريد أفضل خامات الشفاطات:</strong> شفاطات مصانع، مطاعم، أو منازل من ماركات موثوقة.</li>
                            <li><strong>التركيب والتقفيل:</strong> تركيب الشفاط وتثبيته المتين مع عزل الفتحات لمنع المطر والحشرات.</li>
                            <li><strong>التسليم والتشغيل:</strong> بنسلمك المكان شغال بتهوية مثالية وصوت هادي ومريح.</li>
                        </ul>
                    </div>
                    <div>
                        <img src="https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=800" alt="تركيب الشفاطات" class="service-image">
                    </div>
                </div>
            </div>
            <div class="content-card">
                <h2>تطبيقات الخدمة (بنخدم مين؟):</h2>
                <ul class="content-list">
                    <li><strong>المنازل والفيلات:</strong> تأسيس وتركيب شفاطات المطابخ (الـ Hood) وشفاطات الحمامات المخفية والعادية.</li>
                    <li><strong>المطاعم والكافيهات:</strong> تركيب هود المطاعم وخطوط سحب الدخان والزيوت.</li>
                    <li><strong>المصانع والمخازن:</strong> عمل أنظمة تهوية للمساحات المغلقة لطرد الرطوبة وتجديد الهواء.</li>
                </ul>
                <h2 style="margin-top: 30px;">ليه تختارنا؟</h2>
                <ul class="content-list">
                    <li><strong>خدمة على المفتاح:</strong> بتتعامل مع جهة واحدة مسؤولة عن التخريم وتوريد وتركيب الشفاط.</li>
                    <li><strong>أسعار ملهاش منافس:</strong> باقة سعرية شاملة التوريد والتركيب أوفر بكتير من السوق.</li>
                    <li><strong>ضمان وجودة التقفيل:</strong> بنهتم بالفنش النهائي عشان شكل المكان يفضل نظيف.</li>
                </ul>
            </div>
        \`
    },
    'about.html': {
        title: 'من نحن | رواد حلول التعديل الإنشائي وقص وتخريم الخرسانة في مصر',
        content: \`
            <div class="content-card">
                <h2>Expert-Core | هندسة التعديل الإنشائي</h2>
                <p>Expert-Core هي منصة هندسية رائدة ومستقلة، متخصصة في تقديم أحدث الحلول والخدمات التقنية لقص وتخريم الخرسانة المسلحة وتزريع الأشاير وتأسيس أنظمة التهوية في مصر. تأسسنا برؤية واضحة هدفها استبدال طرق التكسير التقليدية (التي تشكل خطراً على سلامة المباني) بتقنيات حديثة وعالمية تضمن أعلى دقة هندسية، وأمان مطلق للمنشأ، وبأقل تكلفة في السوق.</p>
                
                <p>تحت إشراف هندسي دقيق يقوده <strong>البشمهندس معتصم</strong>، نجحنا في كسب ثقة مئات العملاء من أصحاب المنازل، والمقاولين، والمكاتب الاستشارية، بفضل التزامنا بتقديم شغل نظيف ع السكين، والتزامنا الصارم بالمواعيد.</p>

                <h2 style="margin-top:30px;">رؤيتنا</h2>
                <p>أن نكون الخيار الأول والـشريك الأكثر أماناً وموثوقية لكل من يبحث عن الجودة الفنية والسعر العادل في مجال التعديل الإنشائي وتأسيس التهوية في مصر.</p>

                <h2 style="margin-top:30px;">نطاق عملنا</h2>
                <p>نتشرف بخدمة عملائنا وتلبية طلباتهم بمعداتنا الحديثة في مختلف محافظات مصر، وجاهزون للمشروعات الكبيرة والصغيرة بنفس مستوى الاحترافية.</p>
            </div>
        \`
    },
    'projects.html': {
        title: 'من أعمالنا | فخورون بخدمة كبرى المشروعات والمجتمعات العمرانية الجديدة',
        content: \`
            <div class="content-card">
                <p>في Expert-Core، تخطت خدماتنا مجرد العمل التقليدي لنكون جزءاً من حركة البناء والتطوير في كبرى المدن والمشروعات القومية والسياحية. نفذنا عشرات العمليات الناجحة لقص وتخريم الخرسانة وتزريع الأشاير وتأسيس التهوية لعملائنا في:</p>
                <div class="page-content-grid">
                    <div>
                        <h2>مدينة الشيخ زايد و6 أكتوبر:</h2>
                        <ul class="content-list">
                            <li>تنفيذ فتحات كور لتأسيس السباكة والتكييفات المركزي وشبكات الحريق في كبرى كمبوندات وفيلات الشيخ زايد والتوسعات الشمالية بأكتوبر.</li>
                            <li>قص حوائط خرسانية بالمنشار الماسي لعمل تعديلات معمارية وفتحات أبواب وشبابيك وسلالم دوبلكس في فيلات سكنية بدون أي اهتزاز للمنشأ.</li>
                        </ul>

                        <h2 style="margin-top: 30px;">التجمع الخامس والشروق والقاهرة الجديدة:</h2>
                        <ul class="content-list">
                            <li>تخريم الخرسانة المسلحة لعمل فتحات الشفاطات والتهوية للمطابخ والحمامات، وتأسيس خطوط السحب (الهود) للمطاعم والكافيهات.</li>
                            <li>تزريع أشاير حديد للتعلية والتوسعات الإنشائية لفيلا وعمارات سكنية باستخدام مواد إيبوكسية معتمدة.</li>
                        </ul>
                    </div>
                    <div>
                        <h2>العاصمة الإدارية الجديدة:</h2>
                        <ul class="content-list">
                            <li>التعاون مع شركات المقاولات لتنفيذ أعمال قص وتخريم خرسانة تخصصية بالمنشار والكور في الأبراج الإدارية والمولات بحي المال والأعمال والـ MU23.</li>
                            <li>أخذ عينات الكور لاختبارات جودة الخرسانة لصالح المكاتب الاستشارية.</li>
                        </ul>

                        <h2 style="margin-top: 30px;">العين السخنة:</h2>
                        <ul class="content-list">
                            <li>تنفيذ أعمال تزريع الجوايط والأنكورز الحديدية وتدعيم القواعد الخرسانية في عدد من القرى السياحية والشاليهات.</li>
                            <li>تأسيس كامل لأنظمة التهوية وفتحات الكور لشفاطات خطوط المطابخ بالفنادق والمطاعم الساحلية لضمان سحب مثالي.</li>
                        </ul>
                    </div>
                </div>
            </div>
        \`
    },
    'pricing.html': {
        title: 'أسعار الخدمات | أقل تكلفة وأعلى جودة',
        content: \`
            <div class="content-card">
                <p>في Expert-Core، بنحطم معادلة الأسعار المبالغ فيها. بنقدم لك أفضل أسعار لخدمات الكور، المنشار الماسي، تزريع الأشاير، وتأسيس الشفاطات في مصر، مع الالتزام التام بأعلى معايير الدقة والأمان الإنشائي تحت إشراف هندسي.</p>
                <p>لأن كل مشروع وله طبيعته (حسب سمك الخرسانة، أقطار الفتحات، وكثافة حديد التسليح)، بنوفر لك لوحة أسعار استرشادية مرنة ومناسبة للمقاولين وأصحاب العقارات:</p>
                
                <h2 style="margin-top:30px;">جدول الأسعار الاسترشادية لخدماتنا:</h2>
                <div style="overflow-x:auto;">
                    <table class="pricing-table">
                        <thead>
                            <tr>
                                <th>الخدمة</th>
                                <th>طريقة الحساب</th>
                                <th>متوسط السعر</th>
                                <th>ملاحظات</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>تخريم الخرسانة بالكور</td>
                                <td>بالفتحة (حسب القطر والسمك)</td>
                                <td>تبدأ من أقل سعر للفتحة</td>
                                <td>تشمل فتحات الشفاطات، الغاز، السباكة، والتكييف.</td>
                            </tr>
                            <tr>
                                <td>قص الخرسانة بالمنشار الماسي</td>
                                <td>بالمتر الطولي</td>
                                <td>أسعار تنافسية للمتر</td>
                                <td>لعمل فتحات الأبواب، الشبابيك، ومسارات الأسانسير.</td>
                            </tr>
                            <tr>
                                <td>تخريم وتزريع الأشاير والحديد</td>
                                <td>بالإشارة (حسب القطر ونوع المادة)</td>
                                <td>أوفر سعر للأشاير في مصر</td>
                                <td>نستخدم مواد إيبوكسية معتمدة (Hilti / كيماويات البناء).</td>
                            </tr>
                            <tr>
                                <td>تأسيس وتوريد وتركيب الشفاطات</td>
                                <td>باقة متكاملة</td>
                                <td>تسليم على المفتاح</td>
                                <td>باقة شاملة توفر عليك الكثير</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2 style="margin-top:40px;">مميزات وعروض حصرية من Expert-Core:</h2>
                <ul class="content-list">
                    <li><strong>خصومات للمشروعات الكبيرة:</strong> بنقدم أسعار خاصة جداً ومخفضة لشركات المقاولات والمشروعات التي تحتوي على كميات كبيرة.</li>
                    <li><strong>معاينة مجانية للمشروعات:</strong> للمشروعات الكبيرة في التجمع، زايد، أكتوبر، الشروق، العاصمة الإدارية، والسخنة.</li>
                    <li><strong>بدون تكاليف ترميم:</strong> لأن شغلنا بالمنشار والكور بيطلع مستوي "ع السكين"، بنوفر عليك آلاف الجنيهات اللي كنت هتدفعها للمحارة والترميم.</li>
                </ul>

                <div style="background: rgba(255, 106, 0, 0.1); padding: 30px; border-radius: 10px; margin-top: 40px; text-align: center; border: 1px solid var(--primary);">
                    <h2>📞 اطلب مقايستك المجانية فوراً!</h2>
                    <p style="font-size: 1.2rem; margin-bottom: 20px;">السعر النهائي بيتم تحديده بناءً على تفاصيل ومواصفات موقعك عشان نضمن لك أقل تكلفة ممكنة بدون أي مصاريف مخفية.</p>
                    <a href="tel:01033831671" class="btn btn-primary btn-large">اتصل الآن: 01033831671</a>
                    <a href="https://wa.me/201152800018" class="btn btn-whatsapp btn-large">تواصل عبر الواتساب: 01152800018</a>
                </div>
            </div>
        \`
    },
    'blog.html': {
        title: 'المدونة الهندسية والتوعية | Expert-Core',
        content: \`
            <div class="blog-post">
                <h3>المقال الأول: قسم القص والتخريم (Core & Cutting)</h3>
                <h4 style="color: #fff; margin-bottom: 15px;">ليه التكسير بالهيلتي خطر على بيتك؟ ومميزات قص وتخريم الخرسانة بالكور والمنشار</h4>
                <p>عندما يحتاج صاحب عقار أو مقاول عمل تعديل معماري، مثل فتحة أسانسير، أو باب، أو شباك، أو حتى تمرير مواسير السباكة والغاز، يكون التفكير التقليدي هو الاستعانة بالعربات والعمال للتكسير بالهيلتي أو الكومبريسور. لكن هندسياً، هذا الخيار قد يدمر المنشأ بالكامل.</p>
                <p style="color:var(--secondary); font-weight:bold; margin-top:15px; margin-bottom:5px;">الخطر الخفي للتكسير التقليدي (رؤية هندسية):</p>
                <ul class="content-list">
                    <li><strong>تفتيت قوى التماسك (Bond Slip):</strong> تخلخل تماسك حديد التسليح مع الخرسانة المحيطة به في المناطق المجاورة للتكسير.</li>
                    <li><strong>ظهور الشروخ الدقيقة (Micro-cracks):</strong> شروخ غير مرئية تضعف الجساءة الإنشائية (Stiffness) وتسمح بنفاذ الرطوبة للحديد ليصاب بالصدأ.</li>
                </ul>
                <p style="color:var(--secondary); font-weight:bold; margin-top:15px; margin-bottom:5px;">البديل الحديث: قص خرسانة بالمنشار الماسي وتخريم بالكور:</p>
                <p>في Expert-Core، نعتمد على مفهوم زيرو اهتزاز (Zero Vibration) باستخدام الأسلحة الماسية...</p>
            </div>

            <div class="blog-post">
                <h3>المقال الثاني: قسم تزريع الأشاير (Rebar Anchoring)</h3>
                <h4 style="color: #fff; margin-bottom: 15px;">الأخطاء الكارثية في تزريع أشاير الحديد بايبوكسي (كيف تضمن عدم ملوص السيخ؟)</h4>
                <p>عملية تخريم وتزريع حديد التسليح هي عصب التوسعات المعمارية وتعلية الأدوار وقمصان الأعمدة. ورغم سهولتها الظاهرية، إلا أن هناك أخطاء فنية صغيرة يقع فيها الكثير من الفنيين تؤدي لفشل الإشارة (Pull-out failure).</p>
                <p style="color:var(--secondary); font-weight:bold; margin-top:15px; margin-bottom:5px;">الخطوات القياسية للتزريع الصحيح:</p>
                <ul class="content-list">
                    <li><strong>تحديد عمق التنزيل:</strong> العمق الأدنى للتزريع يتراوح بين 10 إلى 12 مرة من قطر السيخ.</li>
                    <li><strong>تنظيف الثقب:</strong> باستخدام البلاور والفرشاة السلكية. خطوة حرجة جداً!</li>
                    <li><strong>حقن المادة الإيبوكسية الصح:</strong> مثل Hilti RE 500 للمواد العالية التحمل.</li>
                </ul>
            </div>

            <div class="blog-post">
                <h3>المقال الثالث: قسم الشفاطات والتهوية (Ventilation)</h3>
                <h4 style="color: #fff; margin-bottom: 15px;">دليلك الشامل لتأسيس وتوريد وتركيب الشفاطات وأنظمة التهوية</h4>
                <p>التهوية ليست مجرد "مروحة تسحب الهواء"، بل هي منظومة هندسية متكاملة تضمن تجديد الهواء وطرد الروائح والزيوت بانتظام.</p>
                <ul class="content-list">
                    <li><strong>حساب معدل التدفق (CFM):</strong> لتحديد قدرة سحب الشفاط وحجم الهود بناءً على مساحة المكان ومعدل تغيير الهواء.</li>
                    <li><strong>عمل فتحات التهوية بالكور:</strong> ثقب بمقاس المواسير بدون تكسير عشوائي لتجنب إفساد الواجهات.</li>
                </ul>
                <p>نحن كمان بنركز على الفنش النهائي بعزل الفراغ المحيط وتأمين الفتحات من الخارج بجريلات أو جيلوز لمنع الحشرات والأمطار.</p>
            </div>

            <div class="blog-post">
                <h3>المقال الرابع: قسم السلامة والموقع (Safety & Cleanliness)</h3>
                <h4 style="color: #fff; margin-bottom: 15px;">السلامة المهنية ونظافة الموقع في عمليات قص وتخريم الخرسانة</h4>
                <p>شغل المقاولات يُعرف بأنه شغل "مبهدل"، لكن في Expert-Core نثبت أن الاحترافية تبدأ من الأمان والنظافة وتطبيق معايير السلامة المهنية.</p>
                <ul class="content-list">
                    <li><strong>التدعيم الإنشائي قبل التعديل (Shoring):</strong> ندرس الأحمال وندعم البلاطات قبل بدء القص و إنزال الكتل بأوناش.</li>
                    <li><strong>التحكم في مياه التبريد:</strong> نستخدم أنظمة شفط وتجميع المياه لتجنب تسرب المياه للشقق السفلية والتشطيب.</li>
                    <li><strong>أدوات حماية الأفراد (PPE):</strong> التزام كامل من العمال بارتداء الخوذات ونظارات الأمان، سدادات الأذن، والسيفتي شوز.</li>
                </ul>
            </div>
        \`
    }
};

for (const [filename, data] of Object.entries(pages)) {
    const filePath = 'd:/ا معتصم/' + filename;
    fs.writeFileSync(filePath, getLayout(data.title, data.content));
    console.log('Created ' + filePath);
}
