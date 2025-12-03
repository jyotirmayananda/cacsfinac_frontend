const fs = require("fs");
const path = require("path");

function removeTxtFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      removeTxtFiles(fullPath);
    } else if (entry.isFile() && entry.name.endsWith(".txt")) {
      try {
        fs.unlinkSync(fullPath);
        console.log("Removed", fullPath);
      } catch (err) {
        console.error("Failed to remove", fullPath, err.message);
      }
    }
  }
}

const outDir = path.join(__dirname, "..", "out");
if (!fs.existsSync(outDir)) {
  console.error("out directory not found:", outDir);
  process.exit(1);
}
removeTxtFiles(outDir);
console.log("cleanup complete");
