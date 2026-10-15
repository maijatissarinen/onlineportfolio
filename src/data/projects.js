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
//
// By default the picture fills its space and the edges may be cropped, which
// suits photos. For charts and figures that must be seen whole, add
// imageFit: "contain" to show the entire picture on a white background.
//
// To link to a file of your own (e.g. a PDF report), put it in
// public/projects/ too and use url: "projects/my-file.pdf".

export const projects = [

    {
        show: true,
        title: {
            en: "Integrating multiomics data to predict clinical outcomes in high-grade serous ovarian cancer",
            fi: "Multiomiikka datan integrointi ja potilastason kliinisten tulosten mallintaminen",
        },
        description: {
            en: "In this project, I integrated clinical, genomic and spatial omics data from ovarian cancer patients to predict progression-free survival. I built a feature selection pipeline (mRMR, LASSO) and trained interpretable regression and survival models, evaluated with patient-grouped cross-validation.",
            fi: "Projektissa yhdistin munasarjasyöpäpotilaiden kliinistä, genomista ja spatiaalista omiikkadataa etenemisvapaan elinajan ennustamiseksi. Rakensin piirrevalintaprosessin (mRMR, LASSO) ja koulutin tulkittavia regressio- ja elinaikamalleja, jotka arvioin potilaittain ryhmitellyllä ristiinvalidoinnilla.",
        },
        image: "research_project_photo.jpg",
        links: [
            { label: "Report", url: "projects/Special_Assignment_Final_report_vol_2.pdf" },
            // { label: "GitHub", url: "https://github.com/maijatissarinen/explorativeinfovis" },
        ],
    },
    {
        show: true,
        title: {
            en: "Visualizing sea level rise and its human impact in Europe",
            fi: "Merenpinnan nousun ja sen ihmisvaikutusten visualisointi Euroopassa",
        },
        description: {
            en: "In this information visualization course project, I built an animated D3.js visualization of a globe sinking as sea levels rise under the IPCC SSP5-8.5 scenario. European countries are colored by the population projected to be exposed to coastal flooding, based on European Commission JRC data.",
            fi: "Informaation visualisoinnin kurssiprojektissa toteutin D3.js:llä animaation maapallosta, joka vajoaa merenpinnan noustessa IPCC:n SSP5-8.5-skenaarion mukaisesti. Euroopan maat väritetään rannikkotulville altistuvan väestön mukaan Euroopan komission JRC:n aineiston pohjalta.",
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
            en: "Trends in cyber incident targeting across societal sectors",
            fi: "Kyberhyökkäysten kohdentumisen trendit yhteiskunnan eri sektoreilla",
        },
        description: {          
            en: "In this Computational Social Science group project, we analyzed 1,245 major cyber incidents from the CSIS database. We classified the incidents by targeted sector with NLP methods and used time-series analysis to link shifts in targeting to geopolitical events. I built the analysis of which sectors each attacker country targets and assessed how the dataset's origin shapes the geopolitical picture it gives.",
            fi: "Computational Social Science -kurssin ryhmäprojektissa analysoimme 1 245 merkittävää kyberhyökkäystä CSIS-tietokannasta. Luokittelimme tapaukset kohdesektorin mukaan luonnollisen kielen käsittelyn (NLP) menetelmillä ja yhdistimme aikasarja-analyysin avulla kohdentumisen muutokset geopoliittisiin tapahtumiin. Toteutin analyysin siitä, mihin sektoreihin eri hyökkääjämaat kohdistavat hyökkäyksiään, ja arvioin, miten aineiston alkuperä vaikuttaa sen antamaan geopoliittiseen kuvaan.",
        },
        image: "sektori_trendit_kokonaisvuodet-2.png",
        imageFit: "contain",
        links: [],
    },
    {
        show: false,
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
