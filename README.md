# a-react-visual-testing

Setup automated Visual Testing for React components using Storybook and Jest.

## Step 1 - Prerequisites

- React: `npx create-react-app my-app --template typescript`
- Storybook: `npx sb init`

* Styled Components: `npm i styled-components` and `npm i -D @types/styled-components`

## Step 2 - Setup Jest and Jest-screenshot

- Jest: `npm i -D jest jest-puppeteer jest-screenshot puppeteer`

- Setup Jest: `jest.config.js`
  - Use of `jest-puppeteer`
  - Register `jest-screenshot/reporter` for creating a report
  - Register jest setup script for `jest-screenshot`
- Setup jest-screenshot: `jest.setup.js`

- Setup Tests (And well I hate writing similar tests over-and-over again)

  - `utils/screenshotTest.js`: function that executes tests based on a component-config
  - `Button.test.js`: Create config and run tests

- First run!

  - Start Storybook: `npm run storybook`
  - Run tests: `npm run test`

- Change something

  - Rerun test
  - Check the diff, the report, ..

## Step 3 - Snapshots

Regenerate a base-snapshot for a component

## Step 4 - Automate

- `npm i -D start-server-and-test http-server`
- automation-script: `npm run storybook:build && start-server-and-test 'npx http-server ./storybook-static -s -c-1 -p 9090' http://localhost:9090 'jest -u'`
  - Build Storybook
  - Start an http-server and serve the fresh build Storybook
  - Listen for Port to be ready
  - Run tests if ready
