const english = {
    "nav-title": "Navigation",
    "nav-home": "Homepage",
    "personal": "Personal Information",
    "phone": "Phone",
    "body-title": "About me",
    "body-intro": "Hello and good day to you I'm Ágnes Bács-Ódry a passionate linguistics expert and english teacher I studied at the University of Szeged for almost 10 consecutive years, my dream position is being a Freelance Linguistic Editor ever since my childhood I've been fascinated by languages their systems and the secrets they hold."
}

const magyar = {
    "nav-title": "Navigáció",
    "nav-home": "Főoldal",
    "personal": "Személyes információk",
    "phone": "Telefon",
    "body-title": "Rólam",
    "body-intro": "Üdvözlöm Bács-Ódry Ágnes vagyok szenvedélyes nyelvész és angoltanár. Csaknem 10 évet tanultam a Szegedi Tudományegyetemen. Álommunkám a szabadúszó nyelvi szerkesztő pozíció. Gyermekkorom óta lenyűgöznek a nyelvek rendszereik és a bennük rejlő titkok."
}


if (!localStorage.getItem("language")) {
    localStorage.setItem("language", "magyar")
}

const loadSite = () => {
    const language = localStorage.getItem("language");
    let content = language === "magyar" ? magyar : english
    rawData = JSON.stringify(content).replaceAll('"', "").replaceAll("{", "").replaceAll("}", "")
    console.log(rawData)
    rawData.forEach(line => {
        document.getElementById(`${line.split(":")[0]}`).textContent = line.split(":")[1]
    })
}

loadSite()