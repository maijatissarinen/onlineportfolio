// Education, in the order shown (newest first).
//
// To add a degree: copy one { ... } block, paste it where you want it in the
// list and change the text. Each text has an English (en) and a Finnish (fi)
// version. If the Finnish one is missing, the English one is shown instead.
//
// year: shown next to the dot on the timeline; leave it as "" for an ongoing
// degree and it is shown as "now" / "nyt".
// details: one line each (major, programme, school, university, ...).

export const education = [
    {
        year: "",
        title: {
            en: "Currently pursuing Master's degree",
            fi: "Tällä hetkellä työstän maisteriopintojani",
        },
        details: {
            en: [
                "Machine Learning, Data Science and Artificial Intelligence",
                "Computer, Communications and Information Sciences (CCIS)",
                "School of Science",
                "Aalto University",
            ],
            fi: [
                "Machine Learning, Data Science and Artificial Intelligence",
                "Computer, Communications and Information Sciences (CCIS)",
                "Perustieteiden korkeakoulu",
                "Aalto-yliopisto",
            ],
        },
    },
    {
        year: "2025",
        title: {
            en: "Bachelor of Science (Tech.)",
            fi: "Tekniikan kandidaatti",
        },
        details: {
            en: [
                "Bioinformation technology",
                "School of Electrical Engineering",
                "Aalto University",
            ],
            fi: [
                "Bioinformaatioteknologia",
                "Sähkötekniikan korkeakoulu",
                "Aalto-yliopisto",
            ],
        },
    },
];
