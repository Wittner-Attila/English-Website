const english = [
    { id: 'nav-lang', content: 'Language:' },
    { id: 'nav-theme', content: 'Theme:' },
    { id: 'nav-name', content: 'Ágnes Bács-Ódry' },
    { id: 'personal', content: 'Personal Information' },
    { id: 'phone', content: '<i style="font-size:24px" class="fa">&#xf095;</i> Phone' },
    { id: 'body-title', content: 'About me' },
    {
        id: 'body-intro',
        content:
            "Hello and good day to you I'm Ágnes Bács-Ódry a passionate linguistics expert and english teacher I studied at the University of Szeged for almost 10 consecutive years, my dream position is being a Freelance Linguistic Editor ever since my childhood I've been fascinated by languages their systems and the secrets they hold.",
    },
    { id: 'education-title', content: 'Education' },
    {
        id: 'first-degree',
        content:
            '<h2><strong>MA English studies and EFL</strong></h2> with Applied Linguistics stream<br>University of Szeged<br>1996-2001<br>Erasmus student: University of Joensuu, Finland',
    },
    {
        id: 'second-degree',
        content:
            '<h2><strong>Post-graduate degree in translation and interpreting (HU-EN)</strong></h2><br>University of Szeged<br>2002-2004',
    },
    {
        id: 'third-degree',
        content:
            '<h2><strong>PhD studies – English Applied Linguistics</strong></h2><br>University of Szeged<br>2004-2007',
    },
    { id: 'experience-title', content: 'Experience' },
    { id: 'first-experience', content: '<strong>Freelance translator</strong><br>2021–' },
    {
        id: 'first-experience-description',
        content:
            '<ul><li> Translated documents mainly for Hungarian translation agencies,</li><li> Handled documents of various extensions and used a CAT tool (MemoQ),</li><li> Working languages: Hungarian, English, Croatian, Serbian</li><li> ran a tiny business as a self-employed</li><li> has done translations since 2004</li>',
    },
    {
        id: 'second-experience',
        content: '<strong>Teacher – English as a Foreign language</strong><br>2006–2021',
    },
    {
        id: 'second-experience-description',
        content:
            '<ul><li> University of Novi Sad, Hungarian Language Teacher Training Faculty in Subotica</li><li> participated in linguistic research projects (”Hungarian Language in the Multilingual Vojvodina” and ”Translation as a form of bilingualism and linguistic landscape as a verbal and visual manifestation of bilingualism”</li><li> wrote articles, participated at conferences</li><li> taught English as a foreign language (levels A2-C1) and EFL methodology,</li><li> designed curricula, administrated exams,</li><li> completed translating and proofreading tasks for the Faculty (e.g. project documents, articles, conference papers).</li></ul>',
    },
    {
        id: 'third-experience',
        content: '<strong>PhD student – Applied linguistics</strong><br>2004–2007',
    },
    {
        id: 'third-experience-description',
        content:
            '<ul><li> trained in doing qualitative and quantitative linguistic research</li><li> did linguistic research</li><li> participated in an international linguistic research project („LINEE – Languages in a Network of European Excellence”)</li><li> wrote articles, participated at conferences</li><li> taught undergraduate students (Writing Skills, Reading Skills)</li></ul>',
    },
];

const magyar = [
    { id: 'nav-lang', content: 'Nyelv:' },
    { id: 'nav-theme', content: 'Téma:' },
    { id: 'nav-name', content: 'Bács-Ódry Ágnes' },
    { id: 'personal', content: 'Személyes információk' },
    { id: 'phone', content: '<i style="font-size:24px" class="fa">&#xf095;</i> Telefon' },
    { id: 'body-title', content: 'Rólam' },
    {
        id: 'body-intro',
        content:
            'Üdvözlöm, jó napot kívánok! Bács-Ódry Ágnes vagyok, szenvedélyes nyelvész és angoltanár. Csaknem 10 évet tanultam a Szegedi Tudományegyetemen, álommunkám a szabadúszó nyelvi szerkesztő pozíció. Gyermekkorom óta lenyűgöznek a nyelvek, rendszereik és a bennük rejlő titkok.',
    },
    { id: 'education-title', content: 'Végzettség' },
    {
        id: 'first-degree',
        content:
            '<h2><strong>MA anglisztika és EFL</strong></h2> alkalmazott nyelvészeti szakirány<br>Szegedi Tudományegyetem<br>1996-2001<br>Erasmus hallgató: Joensuu Egyetem, Finnország',
    },
    {
        id: 'second-degree',
        content:
            '<h2><strong>Posztgraduális fordító és tolmács (HU-EN))</strong></h2><br>Szegedi Tudományegyetem<br>2002-2004',
    },
    {
        id: 'third-degree',
        content:
            '<h2><strong>PhD tanulmányok – angol alkalmazott nyelvészet</strong></h2><br>Szegedi Tudományegyetem<br>2004-2007',
    },
    { id: 'experience-title', content: 'Tapasztalat' },
    { id: 'first-experience', content: '<strong>Szabadúszó fordító</strong><br>2021–' },
    {
        id: 'first-experience-description',
        content:
            '<ul><li> Dokumentumokat fordítottam főként magyar fordítóirodáknak,</li><li> Különböző típusú dokumentumokat kezeltem és CAT eszközt (MemoQ) használtam,</li><li> Munkanyelvek: magyar, angol, horvát, szerb</li><li> kis vállalkozást vezettem egyéni vállalkozóként</li><li> 2004 óta fordítok</li></ul>',
    },
    {
        id: 'second-experience',
        content: '<strong>Tanár – angol mint idegen nyelv</strong><br>2006–2021',
    },
    {
        id: 'second-experience-description',
        content:
            '<ul><li> Újvidéki Egyetem, Magyar Tannyelvű Tanítóképző Kar, Szabadka</li><li> részt vettem nyelvészeti kutatási projektekben („A magyar nyelv a többnyelvű Vajdaságban” és „A fordítás mint a kétnyelvűség formája, valamint a nyelvi tájkép mint a kétnyelvűség verbális és vizuális megnyilvánulása”)</li><li> cikkeket írtam, konferenciákon vettem részt</li><li> angolt tanítottam idegen nyelvként (A2-C1 szintek) és EFL módszertant,</li><li> tanterveket terveztem, vizsgákat adminisztráltam,</li><li> fordítási és lektorálási feladatokat végeztem a Kar számára (pl. projekt dokumentumok, cikkek, konferenciaanyagok).</li></ul>',
    },
    {
        id: 'third-experience',
        content: '<strong>PhD hallgató – alkalmazott nyelvészet</strong><br>2004–2007',
    },
    {
        id: 'third-experience-description',
        content:
            '<ul><li> minőségi és mennyiségi nyelvészeti kutatásban képződtem</li><li> nyelvészeti kutatást végeztem</li><li> részt vettem egy nemzetközi nyelvészeti kutatási projektben („LINEE – Languages in a Network of European Excellence”)</li><li> cikkeket írtam, konferenciákon vettem részt</li><li> egyetemi hallgatókat tanítottam (Íráskészség, Olvasáskészség)</li></ul>',
    },
];

if (!localStorage.getItem('language')) {
    localStorage.setItem('language', 'magyar');
}
if (!localStorage.getItem('theme')) {
    localStorage.setItem('theme', 'light');
}

const loadSite = () => {
    const language = localStorage.getItem('language');
    changeTheme();
    let content = language === 'magyar' ? magyar : english;
    content.forEach((line) => {
        document.getElementById(line.id).innerHTML = line.content;
    });
};

function changeLanguage() {
    let language = document.getElementById('languageSwitch').checked ? 'magyar' : 'english';
    localStorage.setItem('language', language);
    loadSite();
}

function changeTheme() {
    console.log('Theme change triggered');
    console.log(document.getElementById('themeSwitch').checked);
    console.log(document.body.classList);
    let theme = document.getElementById('themeSwitch').checked ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    document.body.classList.remove('dark', 'light');
    document.body.classList.add(theme);
}

loadSite();

this.document.getElementById('first-experience-button').addEventListener('click', function () {
    const desc = document.getElementById('first-experience-description');
    if (desc.style.display === 'none' || desc.style.display === '') {
        desc.style.display = 'block';
        document.getElementById('first-experience-arrow').style.transform = 'rotate(180deg)';
    } else {
        desc.style.display = 'none';
        document.getElementById('first-experience-arrow').style.transform = 'rotate(0deg)';
    }
});
this.document.getElementById('second-experience-button').addEventListener('click', function () {
    const desc = document.getElementById('second-experience-description');
    if (desc.style.display === 'none' || desc.style.display === '') {
        desc.style.display = 'block';
        document.getElementById('second-experience-arrow').style.transform = 'rotate(180deg)';
    } else {
        desc.style.display = 'none';
        document.getElementById('second-experience-arrow').style.transform = 'rotate(0deg)';
    }
});
this.document.getElementById('third-experience-button').addEventListener('click', function () {
    const desc = document.getElementById('third-experience-description');
    if (desc.style.display === 'none' || desc.style.display === '') {
        desc.style.display = 'block';
        document.getElementById('third-experience-arrow').style.transform = 'rotate(180deg)';
    } else {
        desc.style.display = 'none';
        document.getElementById('third-experience-arrow').style.transform = 'rotate(0deg)';
    }
});

document.getElementById('menuToggle').addEventListener('click', function () {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('show-menu');
});

// Optional: Hide menu on outside click (for mobile UX)
document.addEventListener('click', function (e) {
    const navbar = document.querySelector('.navbar');
    const menuToggle = document.getElementById('menuToggle');
    // Only handle on small screens
    if (window.innerWidth <= 766) {
        if (!navbar.contains(e.target) && !menuToggle.contains(e.target)) {
            document.body.classList.remove('navbar-open');
        }
    }
});

// Show/hide navbar using body class for mobile CSS
document.getElementById('menuToggle').addEventListener('click', function () {
    if (window.innerWidth <= 766) {
        document.body.classList.toggle('navbar-open');
    }
});
