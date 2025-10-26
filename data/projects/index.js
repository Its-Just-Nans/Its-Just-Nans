import { readFile } from "node:fs/promises";

async function extractLicenses() {
    try {
        const data = await readFile("projects.json", "utf8");
        const projects = JSON.parse(data);

        const dataExtracted = projects
            .map((project) => [project.name, project.diskUsage])
            .filter(([_name, disk]) => disk > 10000)
            .sort((a, b) => b[1] - a[1]);

        console.log(JSON.stringify(dataExtracted, null, 1));
    } catch (err) {
        console.error("Error:", err);
    }
}

extractLicenses();
