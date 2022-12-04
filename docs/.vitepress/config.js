export default {
    lang: "en-US",
    title: "Honkai Impact FAQ",
    description: "Compiled list of FAQ from Honkai Impact 3rd Official Discord server",
    appearance: "dark",
    base: "/honkaifaq/",
    lastUpdated: true,

    titleTemplate: false,
    cleanUrls: "without-subfolders",

    themeConfig: {
        sidebar: customBar()
    },

    markdown: {
        toc: {
            level: [2]
        }
    }
}

function customBar() {
    return [
        {
            text: "All faqs",
            items: [
                {text: "Compiled", link: "/all"}
            ]
        },
        {
            text: "Shops",
            collapsible: true,
            collapsed: true,
            items: [
                {text: "What to buy in shops", link: "/faq/35"},
                {text: "Where resources are used", link: "/faq/103"},
                {text: "War Treasury", link: "/faq/1"},
                {text: "Asterite priority", link: "/faq/68"},
                {text: "Gold Pins shop", link: "/faq/96"},
                {text: "Witch Orbs", link: "/faq/106"},
                {text: "Exchange Shop (resonance)", link: "/faq/71"}
            ]
        },
        {
            text: "Valkyrie quick guides",
            collapsible: true,
            collapsed: true,
            items: [
                {text: "Drive Kometa", link: "/faq/73"},
                {text: "Herrscher of Sentience", link: "/faq/117"},
                {text: "Herrscher of Flamescion", link: "/faq/116"},
                {text: "SilverWing", link: "/faq/110"},
                {text: "Herrsher of Thunder", link: "/faq/123"},
            ]
        },
        {
            text: "Mechanics",
            collapsible: true,
            collapsed: true,
            items: [
                {text: "Type counter", link: "/faq/136"},
                {text: "Attack types", link: "/faq/38"},
                {text: "So is it Combo or Charged attack", link: "/faq/42"},
                {text: "Divine keys explained", link: "/faq/108"},
                {text: "How QTE works", link: "/faq/7"},
                {text: "Evasion", link: "/faq/33"},
                {text: "Time Mastery - what is what", link: "/faq/27"},
                {text: "How Newton B works", link: "/faq/8"},
            ]
        },
        {
            text: "Income",
            collapsible: true,
            collapsed: true,
            items: [
                {text: "Crystals income", link: "/faq/62"},
                {text: "Crystals from story", link: "/faq/105"},
                {text: "Ancient Willpower and Legacy", link: "/faq/102"},
                {text: "Torus", link: "/faq/147"},
            ]
        },
        {
            text: "Damage",
            collapsible: true,
            collapsed: true,
            items: [
                {text: "Damage types", link: "/faq/3"},
                {text: "How crit damage works and what's CRT", link: "/faq/28"},
                {text: "ELI5 how damage works", link: "/faq/72"},
                {text: "What's Impair", link: "/faq/85"},
                {text: "What's 'breach' - elemental or physical", link: "/faq/86"},
                {text: "Dorm buffs", link: "/faq/107"},
                {text: "Divine key buffs", link: "/faq/109"},
            ]
        }
    ]
}