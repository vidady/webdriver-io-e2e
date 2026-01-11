This framework provides automation of native apps and webviews through webdriver io.

Instructions:
create .env file once cloned

# WebdriverIO E2E

This framework provides automation of native apps and webviews using WebdriverIO.

**Environment**

- Create a `.env` file in the project root (do not commit local secrets).
- Required keys (the project accepts either form; include both if unsure):

```
# preferred names (used by some configs)
BROWSERSTACK_USERNAME=your_browserstack_username
BROWSERSTACK_ACCESS_KEY=your_browserstack_access_key

# alternate names (commonly used)
BROWSERSTACK_USER=your_browserstack_username
BROWSERSTACK_KEY=your_browserstack_access_key
```

- Important: do not add spaces around `=` — dotenv expects `KEY=value`.

**Loading `.env` for ESM configs**

- If your WDIO config is ESM (module), ensure `.env` is loaded early. Add the following at the very top of your WDIO config (for example `./config/wdio.android.bs.conf.js`):

```js
import 'dotenv/config';
```

- Add a quick check to confirm values are present before services start:

```js
console.log('BROWSERSTACK_USERNAME:', process.env.BROWSERSTACK_USERNAME || process.env.BROWSERSTACK_USER);
```

**Running tests**

- Install dependencies:

```bash
npm ci
```

- Run the test suite (uses `./config/wdio.android.bs.conf.js` by default):

```bash
npm run wdio
```

- Generate Allure report after a run:

```bash
npm run allure:generate
```

**Git / .env guidance**

- If `.env` was already pushed to the remote and you want to keep it on GitHub but prevent local edits from being committed, use one of these local-only options (run from project root):

```bash
# stop committing local changes, keep file tracked on remote
git update-index --assume-unchanged .env

# or use skip-worktree (preferred when you want to locally modify without committing)
git update-index --skip-worktree .env

# to undo either:
git update-index --no-assume-unchanged .env
git update-index --no-skip-worktree .env
```

- If `.env` is not yet in `.gitignore`, you can add it (but if already tracked, you must also stop tracking):

```bash
echo ".env" >> .gitignore
git add .gitignore
git commit -m "Ignore local .env"

# if .env is tracked and you want to stop tracking while keeping it locally
git rm --cached .env
git commit -m "Stop tracking .env"
```

- Security note: if secrets were pushed, rotate the leaked keys immediately. To remove secrets from history use tools like `git filter-repo` or the BFG Repo-Cleaner (this is an irreversible repository rewrite — coordinate with your team).

**Troubleshooting: BrowserStack error "userName or accessKey is not defined"**

- Confirm your `.env` is formatted correctly (no spaces) and located at the project root.
- Ensure `dotenv` is loaded before BrowserStack service initialization (`import 'dotenv/config'` in ESM configs).
- Confirm the code reads the same variable names your config expects. In WDIO config use fallbacks, for example:

```js
user: process.env.BROWSERSTACK_USERNAME || process.env.BROWSERSTACK_USER,
key: process.env.BROWSERSTACK_ACCESS_KEY || process.env.BROWSERSTACK_KEY,
```

- Add a console log at the top of the config to verify values at runtime:

```js
console.log('BS user/key:', process.env.BROWSERSTACK_USERNAME || process.env.BROWSERSTACK_USER, !!(process.env.BROWSERSTACK_ACCESS_KEY || process.env.BROWSERSTACK_KEY));
```

**Further reading / next steps**

- Rotate any keys that were committed to the repository.
- If you want help removing secrets from the git history, ask and I can provide an automated `git filter-repo` or BFG sequence.

---

If you'd like, I can also:
- add the `import 'dotenv/config'` to `./config/wdio.android.bs.conf.js` for you,
- or create a sample `.env.example` file to commit with placeholder values.
