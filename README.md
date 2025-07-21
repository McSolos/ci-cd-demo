🔧 What I Did:

✅ Step 1: Set Up a Vite React Project
Use Vite to scaffold a React app

Install basic linting tools

Prepare the app for deployment


add base: '/ci-cd-demo/', to vite.config.js
npm install --save-dev eslint
npx eslint --init

update eslintconfig.js 

"npx eslint src" to test
"npx eslint src --fix" to fix

✅ Step 2: Push to GitHub
Create a public GitHub repo and push your code

✅ Step 3: Set Up GitHub Actions Workflow
Lint (e.g., eslint)

Optional: Run tests

Deploy using peaceiris/actions-gh-pages

✅ Step 3: Set Up GitHub Actions Workflow
We'll now:

Create a GitHub Actions workflow to:

Install dependencies

Lint the code using ESLint

Build the Vite app

Deploy the build to GitHub Pages

