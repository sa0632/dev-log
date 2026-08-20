const { execSync } = require("child_process");
const fs = require("fs");

const sync = () => {
  try {
    const repoPath = "C:\\Users\\Helena\\daily-commits";
    process.chdir(repoPath);

    execSync("git checkout main");
    execSync("git fetch origin main");
    execSync("git reset --hard origin/main");

    const count = Math.floor(Math.random() * 9) + 1;

    const messages = [
      "chore: housekeeping",
      "update notes",
      "minor adjustments",
      "cleanup",
      "dev log update",
      "tweaks",
      "refactor: small improvements",
      "wip",
      "polish"
    ];

    for (let i = 0; i < count; i++) {
      const date = new Date().toISOString();
      const msg = messages[Math.floor(Math.random() * messages.length)];
      fs.writeFileSync("log.txt", `${msg} — ${date}`);
      execSync("git add log.txt");
      execSync(`git commit -m "${msg}"`);
    }

    execSync("git push origin main");
    fs.unlinkSync("log.txt");

    console.log(`Done. Pushed ${count} commit(s).`);
  } catch (error) {
    console.error("Error:", error);
  }
};

sync();
