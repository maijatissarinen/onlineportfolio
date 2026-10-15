// All projects shown on the home page, in the order they appear.
//
// To add a project: copy one { ... } block, paste it where you want it in the
// list and change the text. Each text has an English (en) and a Finnish (fi)
// version. If the Finnish one is missing, the English one is shown instead.
//
// To hide a project without deleting it, set show: false.
//
// To add a picture: put the image file in the public/projects/ folder and
// write its file name as image: "my-picture.png". Leave image out for a card
// without a picture. Wide pictures (screenshots) work best.

export const projects = [
    {
        show: true,
        title: {
            en: "Exploratory Information Visualization",
            fi: "Informaation visualisointi",
        },
        description: {
            en: "Interactive visualization exhibiting the impact of sea-level rise on population.",
            fi: "Interaktiivinen visualisaatio, joka esittää meren pinnan nousun vaikutusta populaatioon.",
        },
        image: "exploratoryinfovis.png",
        links: [
            { label: "Live demo", url: "https://maijatissarinen.github.io/explorativeinfovis" },
            { label: "GitHub", url: "https://github.com/maijatissarinen/explorativeinfovis" },
        ],
    },
    {
        show: true,
        title: {
            en: "Hospital Patient Flow Dashboard",
            fi: "Sairaalan potilasvirtaus",
        },
        description: {
            en: "Implemented a Power BI semantic model and dashboard for analyzing hospital patient flow and operational metrics.",
            fi: "Toteutin Power BI semanttisen mallin ja visualisoinnin sairaalan potilasvirran ja operatiivisten mittareiden analysointiin.",
        },
        links: [
            { label: "Dashboard", url: "https://app.powerbi.com/reportEmbed?reportId=c0a20728-9d27-4ae5-b003-ae456788baf2&autoAuth=true&ctid=ae1a7724-4041-4462-a6dc-538cb199707e" },
            { label: "GitHub", url: "https://github.com/maijatissarinen/hospitalwaittime" },
        ],
    },
    {
        show: false,
        title: {
            en: "Evaluating mental health trends from Reddit posts",
            fi: "", // TODO: Finnish title
        },
        description: {
            en: "An NLP-based analysis of Reddit posts examining whether changes in posting behavior and discussion topics during the COVID-19 pandemic reflect shifts in mental health needs.",
            fi: "", // TODO: Finnish description
        },
        links: [
            { label: "GitHub", url: "https://github.com/maijatissarinen/digihealth_project" },
        ],
    },
];
