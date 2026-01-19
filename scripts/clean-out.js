const fs = require("fs");
const path = require("path");

let removedCount = 0;

function removeTxtFiles(dir) {
  if (!fs.existsSync(dir)) {
    return;
  }

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      removeTxtFiles(fullPath);
    } else if (entry.isFile() && entry.name.endsWith(".txt") && entry.name !== "robots.txt") {
      try {
        fs.unlinkSync(fullPath);
        removedCount++;
        console.log("✓ Removed:", fullPath.replace(path.join(__dirname, ".."), "."));
      } catch (err) {
        console.error("✗ Failed to remove", fullPath, err.message);
      }
    }
  }
}

const outDir = path.join(__dirname, "..", "out");
if (!fs.existsSync(outDir)) {
  console.warn("⚠ out directory not found:", outDir);
  console.log("Build may not have completed yet. Skipping cleanup.");
  process.exit(0);
}

console.log("🧹 Cleaning up .txt files from build output...");
removeTxtFiles(outDir);
if (removedCount > 0) {
  console.log(`✅ Cleanup complete! Removed ${removedCount} .txt file(s).`);
} else {
  console.log("✅ No .txt files found. Build is clean!");
}
