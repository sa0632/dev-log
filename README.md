# dev-log

![Status](https://img.shields.io/badge/status-active-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![Made with Node.js](https://img.shields.io/badge/Made%20with-Node.js-green)

A lightweight script for logging and syncing development notes. Keeps a running log file up to date and pushes changes automatically.

## Usage

```bash
node run.js
```

## Automate (Windows Task Scheduler)

1. Open **Task Scheduler**
2. Create a new task
   - **Trigger**: Daily at your preferred time
   - **Action**: Start a Program
   - **Program**: `C:\Program Files\nodejs\node.exe`
   - **Arguments**: Full path to `run.js`

## Automate (macOS/Linux cron)

```bash
crontab -e
```

```bash
0 9 * * * /usr/local/bin/node /path/to/run.js
```

## License

MIT
