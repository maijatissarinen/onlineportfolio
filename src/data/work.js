// All jobs shown under Work Experience, in the order they appear (newest first).
//
// To add a job: copy one { ... } block, paste it where you want it in the list
// and change the text. Each text has an English (en) and a Finnish (fi)
// version. If the Finnish one is missing, the English one is shown instead.
//
// periods: one { from, to } per time you worked there. Use to: null for a job
// you still have; it is shown as "present" / "nyt".
// bullets: as many points as you like, and the two languages can have a
// different number of them.

export const jobs = [
    {
        title: {
            en: "Instructor - Aalto University Junior",
            fi: "Ohjaaja - Aalto-yliopisto Junior",
        },
        periods: [{ from: "9/2025", to: null }],
        bullets: {
            en: [
                "Taught science and technology workshops to groups of 20-30 pupils, adjusting teaching style to suit different groups",
                "Presented complex topics clearly to children and young pupils at events and workshops",
                "Communicated with teachers via email about bookings",
            ],
            fi: [
                "Ohjaaminen ja opettaminen tieteen ja teknologian työpajoissa, joiden tavoitteena on edistää lasten ja nuorten teknologiakasvatusta. Yhteydenpito ja kommunikointi opettajien kanssa varauksista.",
            ],
        },
    },
    {
        title: {
            en: "Cleanroom operator - Varex Imaging",
            fi: "Puhdashuone operaattori - Varex Imaging",
        },
        periods: [{ from: "5/2025", to: "8/2025" }],
        bullets: {
            en: [
                "Performed flip-chip bonding and testing of semiconductor components with and without X-ray in a ISO6 cleanroom environment",
                "Worked as part of an international, multidisciplinary team",
                "Analyzed component quality and test results to maintain production standards",
            ],
            fi: [
                "Flip-chip bondaus ja puolijohdekomponenttien testaaminen röntgensäteellä sekä ilman. ISO6-puhdastilastandardien noudattaminen.",
            ],
        },
    },
    {
        title: {
            en: "Instructor - Aalto University Junior",
            fi: "Ohjaaja - Aalto-yliopisto Junior",
        },
        periods: [{ from: "9/2024", to: "5/2025" }],
        bullets: {
            en: [
                "Taught robotics workshops to mostly elementary school groups",
                "Presented complex topics clearly to children and young pupils at events and workshops",
                "Communicated with teachers via email about bookings",
            ],
            fi: [
                "Ohjaaminen ja opettaminen Robotiikkatuokiot -hankkeessa, jonka tavoitteena on edistää lasten ja nuorten oppilaiden teknologiakasvatusta. Yhteydenpito ja kommunikointi opettajien kanssa varauksista. Muut tehtävät, kuten materiaalien kääntäminen englanniksi ja selkokielelle.",
            ],
        },
    },
    {
        title: {
            en: "Production Worker - GE HealthCare Finland",
            fi: "Tuotantotyöntekijä - GE HealthCare Finland",
        },
        periods: [{ from: "5/2024", to: "8/2024" }],
        bullets: {
            en: [
                "Collecting and delivering materials for the assembly of patient monitoring modules and monitors",
                "Monitoring the quality of the materials used in the assembly",
                "Worked a part of a team to support smooth and timely production",
            ],
            fi: [
                "Materiaalien keräily ja kuljetus potilasvalvontamoduulien ja -monitorien kokoonpanoon. Kokoonpanossa käytettävien materiaalien laadun tarkkailu.",
            ],
        },
    },
    {
        title: {
            en: "Warehouse Worker - Lidl Suomi",
            fi: "Varastotyöntekijä - Lidl Suomi",
        },
        periods: [
            { from: "5/2023", to: "8/2023" },
            { from: "6/2022", to: "8/2022" },
            { from: "4/2021", to: "8/2021" },
        ],
        bullets: {
            en: [
                "Collecting orders in various storage areas of distribution centre using pallet truck",
                "Maintaining the cleanliness of premises and tidiness of collection areas",
            ],
            fi: [
                "Myymälöiden tekemien tilausten keräily jakelukeskuksen eri varastoalueilla lavansiirtovaunua käyttäen. Toimintaympäristön siisteydestä ja keräilyalueiden järjestyksen ylläpidosta huolehtiminen.",
            ],
        },
    },
];
