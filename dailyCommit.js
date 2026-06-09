const { execSync } = require("child_process");
const fs = require("fs");

const makeDailyCommit = () => {
  try {
    const repoPath = "C:\\Users\\Helena\\daily-commits";
    process.chdir(repoPath);

    execSync("git checkout main");
    execSync("git fetch origin main");
    execSync("git reset --hard origin/main");

    // Random number of commits: 1–9 (gives all shades of green)
    const count = Math.floor(Math.random() * 9) + 1;

    for (let i = 0; i < count; i++) {
      const date = new Date().toISOString();
      const message = `Daily commit ${i + 1}/${count} for ${date}`;
      fs.writeFileSync("temp.txt", message);
      execSync("git add temp.txt");
      execSync(`git commit -m "${message}"`);
    }

    execSync("git push origin main");
    fs.unlinkSync("temp.txt");

    console.log(`Pushed ${count} commit(s) for today.`);
  } catch (error) {
    console.error("Error during daily commit:", error);
  }
};

// Run the function
makeDailyCommit();
