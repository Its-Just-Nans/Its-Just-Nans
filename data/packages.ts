const pseudo = "n4n5";
const pseudoLong = "Its-Just-Nans";

export const packages = [
    {
        name: "pypi",
        profile: `https://pypi.org/user/${pseudo}/`,
        url: "https://pypi.org/project/:package",
        stats: "https://pypistats.org/packages/:package",
        list: [
            "csv-to-custom-json",
            "array-cache",
            "static-sitemap",
            "figer",
            "docx-asn1",
            "pngtools",
            "tiny-todo",
            "git-migrator",
            "indexage",
        ],
        shields: [
            "https://img.shields.io/pypi/dd/:package",
            "https://img.shields.io/pypi/dw/:package",
            "https://img.shields.io/pypi/dm/:package",
            "https://img.shields.io/pypi/v/:package",
        ],
        repos: {
            "csv-to-custom-json": `https://github.com/${pseudoLong}/csv-to-custom-json-python`,
        },
    },
    {
        name: "npm",
        profile: `https://www.npmjs.com/~${pseudo}`,
        url: "https://www.npmjs.com/package/:package",
        list: [
            "csv-to-custom-json",
            "forem-client",
            "localstorage-supercharged",
            "supercharged-store",
            "events-hook",
            "svelte-number-displayer",
            "astro-barchart",
            "astro-index",
            "plugin-astro-content",
            "astro-simple-carousel",
        ],
        shields: [
            "https://img.shields.io/npm/dw/:package",
            "https://img.shields.io/npm/dm/:package",
            "https://img.shields.io/npm/dy/:package",
            "https://img.shields.io/npm/dt/:package",
            "https://img.shields.io/npm/v/:package",
        ],
    },
    {
        name: "go",
        url: `https://pkg.go.dev/github.com/${pseudoLong}/:package`,
        list: ["go-calendar"],
    },
    {
        name: "rust",
        profile: `https://crates.io/users/${pseudoLong}/`,
        url: "https://crates.io/crates/:package",
        list: ["notox", "spust", "tramex", "types_lte_3gpp", "music-exporter", "n4n5"],
        shields: ["https://img.shields.io/crates/d/:package", "https://img.shields.io/crates/v/:package"],
        repos: {
            tramex: "https://github.com/tramex/tramex",
            types_lte_3gpp: "https://github.com/tramex/types_lte_3gpp",
        },
    },
];
