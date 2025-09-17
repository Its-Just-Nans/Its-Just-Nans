import { readFile } from "fs/promises";

async function extractLicenses() {
    try {
        // Load and parse JSON
        const data = await readFile("projects.json", "utf8");
        const projects = JSON.parse(data);

        // Extract licenseInfo field
        const dataExtracted = projects
            .map((project) => [project.name, project.diskUsage])
            .filter(([n, d]) => d > 10000)
            .sort((a, b) => b[1] - a[1]);

        // Print as JSON
        console.log(JSON.stringify(dataExtracted, null, 1));
    } catch (err) {
        console.error("Error:", err);
    }
}

extractLicenses();
