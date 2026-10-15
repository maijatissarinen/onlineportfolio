// Education, in the order shown (newest first).
//
// To add a degree: copy one { ... } block, paste it where you want it in the
// list and change the text. Each text has an English (en) and a Finnish (fi)
// version. If the Finnish one is missing, the English one is shown instead.
//
// year: shown next to the timeline; leave it as "" for an ongoing degree.
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
                "Courses: Deep Learning, Supervised Machine Learning, Methods of Data Mining"
            ],
            fi: [
                "Machine Learning, Data Science and Artificial Intelligence",
                "Computer, Communications and Information Sciences (CCIS)",
                "Perustieteiden korkeakoulu",
                "Aalto-yliopisto",
                "Kursseja: Deep Learning, Supervised Machine Learning, Methods of Data Mining"
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
                "Bachelor's thesis: Transcranial magnetic stimulation in post-stroke recovery: A systematic review. (Grade 5/5)"
            ],
            fi: [
                "Bioinformaatioteknologia",
                "Sähkötekniikan korkeakoulu",
                "Aalto-yliopisto",
                "Kandidaatin tutkielma: Transkraniaalinen magneettistimulaatio aivohalvauksen jälkeisessä kuntoutuksessa. (Arvosana 5/5)"
            ],
        },
    },
];
