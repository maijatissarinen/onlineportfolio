// The text at the top of the page: the big greeting and the "About" section.
//
// Each text has an English (en) and a Finnish (fi) version. If the Finnish one
// is missing, the English one is shown instead.
//
// To make part of a sentence bold, wrap it in double asterisks:
// "I am looking for a **thesis position**."

export const hero = {
    greeting: {
        en: "Hi! I'm Maija",
        fi: "Hei! Olen Maija",
    },
    // Each line is shown on its own row under the greeting.
    lines: {
        en: [
            "Machine learning and data science student.",
            "I like health and human-centered tech :)",
        ],
        fi: [
            "Koneoppimisen ja datatieteen opiskelija.",
            "Pidän terveys- ja ihmiskeskeistä teknologiasta :)",
        ],
    },
};

export const about = {
    heading: {
        en: "Get to know me",
        fi: "Tutustutaan",
    },
    // Each item is one paragraph.
    paragraphs: {
        en: [
            "I'm a master's student in computer science at Aalto University, majoring in Machine Learning, Data Science and Artificial intelligence, with a bachelor's degree in bioinformation technology.",
            "My background combines data analysis, machine learning and information visualization. These skills allow me to turn raw data into understandable insights. I enjoy working on problems where data, technology and human needs meet, that is from analytical dashboards to intelligent applications.",
            // "I'm passionate about continuous learning and developing new skills, as demonstrated by my enthusiasm for new opportunities when they arise. I consider myself to be highly adaptive and efficient learning individuaI. I have the ability to work with a variety of personalities and can easily read the room.",
            "I am currently looking for a **master's thesis opportunity** where I can apply data science and machine learning to real-world problems in industry or research.",
        ],
        fi: [
            "Olen tietotekniikan maisteriopiskelija Aalto-yliopistosta. Pääaineenani opiskelen Koneoppimista, datatiedettä ja tekoälyä. Kandidaatin tutkintoni on bioinformaatioteknologian pääaineesta.",
            "Taustani yhdistää data-analyysin, koneoppimisen ja informaatiovisualisoinnin. Näiden taitojen avulla pystyn muuttamaan raa'an datan helposti ymmärrettäviksi. Minua kiinnostaa ongelmat, joissa data, teknologia ja ihmisen tarpeet kohtaavat. Näitä ovat muun muassa erilaiset analytiikka työkalut, visualisoinnit ja sovellukset.",
            // "Minua innostaa jatkuva oppiminen ja uusien taitojen kehittäminen ja tartunkin uusiin mahdollisuuksiin niiden ilmaantuessa. Pidän itseäni erittäin mukautuvana ja tehokkaana oppivana yksilönä. Minulla on kyky työskennellä erilaisten persoonallisuuksien kanssa ja pystyn helposti lukemaan tilaa.",
            "Etsin tällä hetkellä **diplomityöpaikkaa**, jossa voin soveltaa data-analytiikkaa ja koneoppimista todellisiin käytännön ongelmiin.",
        ],
    },
};

// Skills shown under the About text. Set show: true to display them.
export const skills = {
    show: false,
    intro: {
        en: "Below are listed some technologies I have been working with.",
        fi: "Alla listattuna tekniikkaa, joiden kanssa olen työskennellyt.",
    },
    groups: [
        {
            title: { en: "Programming and data:", fi: "Ohjelmointi ja data:" },
            items: ["Python", "Numpy", "pandas", "Scikit-learn", "seaborn", "PyTorch", "R", "SQL", "HTML", "CSS", "JavaScript", "React"],
        },
        {
            title: { en: "Tools:", fi: "Työkalut:" },
            items: ["PowerBI", "Microsoft O365", "GitHub"],
        },
    ],
};
