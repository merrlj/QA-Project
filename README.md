## Ultimate QA - Test Cases

Set of automated tests built with Playwright to verify functionalities of the website.

## Installation

To get started with this project, we first need to set up Playwright using:

```bash
npm init playwright@latest
```

This will install the following files:

- **playwright.config.ts**
- **package.json**
- **package-lock.json**
- **tests/**
  - `example.spec.ts`
- **tests-examples/**
  - `demo-todo-app.spec.ts`

## Dependencies

The project depends on external libraries, including the Playwright Library and Browsers for Playwright. To install all dependencies, run:

```bash
npm install
```

## Running Tests

After dependencies are installed, you can run tests using:

```bash
npx playwright test [name-of-test]
```

## Test Structure

Normal and smoke test cases are stored in separate folders, and one folder is reserved for POM.

### Folder Structure

```
QA PROJECT
├── node_modules
├── tests
│   ├── normal
│   │   ├── forgotPasswordFlow.spec.js
│   │   ├── formLoadTime.spec.js
│   │   ├── navigateAndSubmitFormTest.spec.js
│   │   ├── navigationBarTest.spec.js
│   │   ├── pageLoadTime.spec.js
│   │   ├── simpleElementTest.spec.js
│   │   ├── stressTestViewCourses.spec.js
│   │   ├── submitEmptyForm.spec.js
│   │   ├── verifyPageTitle.spec.js
│   │   └── verifySocialMedia.spec.js
│   ├── pages
│   │   ├── BigPage.js
│   │   ├── ComplicatedPage.js
│   │   ├── FakeLandingPage.js
│   │   ├── FormPage.js
│   │   ├── HomePage.js
│   │   ├── LoginPage.js
│   │   ├── NavigationPage.js
│   │   └── SimpleElementPage.js
│   └── smoke
│       ├── bigPageManyElements.spec.js
│       ├── formSubmissionWithBoundaryValues.spec.js
│       ├── loginWithValidCredentials.spec.js
│       ├── verifyHomepageLoad.spec.js
│       ├── verifySearchWithValidInput.spec.js
│       └── playwright-dev-page.js
├── playwright.config.js
├── package-lock.json
└── package.json
```

## Page Object Model

### BigPage.js
Contributing tests:
1. `bigPageManyElements.spec.js`

### ComplicatedPage.js
Contributing tests:
1. `verifySocialMedia.spec.js`

### FakeLandingPage.js
Contributing tests:
1. `stressTestViewCourses.spec.js`

### FormPage.js
Contributing tests:
1. `formLoadTime.spec.js`
2. `submitEmptyForm.spec.js`
3. `formSubmissionWithBoundaryValues.spec.js`

### HomePage.js
Contributing tests:
1. `navigateAndSubmitFormTest.spec.js`
2. `pageLoadTime.spec.js`
3. `verifyPageTitle.spec.js`
4. `bigPageManyElements.spec.js`
5. `verifyHomepageLoad.spec.js`
6. `verifySearchWithValidInput.spec.js`

### LoginPage.js
Contributing tests:
1. `forgotPasswordFlow.spec.js`
2. `loginWithValidCredentials.spec.js`

### NavigationPage.js
Contributing tests:
1. `navigationBarTest.spec.js`

### SimpleElementPage.js
Contributing tests:
1. `simpleElementTest.spec.js`
