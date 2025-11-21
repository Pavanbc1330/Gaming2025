# English Vocabulary Game — VS Code Compatible Project

Overview
This is a simple, static, VS Code-friendly web app that helps learners improve English vocabulary by playing a levels-based quiz game. There are 10 levels; each level contains ten words whose difficulty increases as you progress. When a level is successfully completed the next level unlocks. After finishing all levels, a "Fun Final Test" mixes words from across the levels.

How it works
- Each level: 10 multiple-choice questions (word → choose correct meaning).
- To pass a level and unlock the next one: score at least 7/10.
- Progress is saved to localStorage so learners can continue later.
- After completing level 10 you get the Fun Final Test (15 mixed questions from all levels).

Files included (open index.html to run)
- index.html — main page
- style.css — styling for the UI
- app.js — game logic and word data

Run locally in VS Code
1. Open this folder in VS Code.
2. Recommended: Install the "Live Server" extension and click "Go Live" or open index.html in a browser.
3. Play!

Customization
- Words are embedded in app.js in a single structure per level. You can replace or expand words or definitions there.
- You can change pass threshold or number of questions in app.js constants.

License
MIT — feel free to adapt and extend.
