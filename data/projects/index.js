import { readFile } from "node:fs/promises";

async function extractLicenses() {
    try {
        const data = await readFile("projects_disk_usage.json", "utf8");
        const projects = JSON.parse(data);

        const dataExtracted = Object.entries(projects)
            .map(([name, diskUsage]) => [name, diskUsage])
            .filter(([_name, disk]) => disk > 10000)
            .sort((a, b) => b[1] - a[1]);

        console.log(JSON.stringify(dataExtracted, null, 1));
    } catch (err) {
        console.error("Error:", err);
    }
}

extractLicenses();
