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
        }
    ]
}