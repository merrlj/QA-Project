##Ultimate QA-test cases 
Set of automated test built with Playwright to verify functionalities of website.
##Installation
To get started this project we fisrtly need to set up playwright using npm init playwright@latest, which will instal following files
playwright.config.ts
package.json
package-lock.json
tests/
  example.spec.ts
tests-examples/
  demo-todo-app.spec.ts
  ##Dependencies 
  Project depend on external libraries, Playwright Library, Browser for Playwright, to install all dependencies run npm install
##Runing tests
After dependencies are installed, you can run test using npx playwright test + name of test
##Test structure
Normal and smoke test cases are stored in separated folders, and also one folder is reserved for POM.
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
    
##Page object model
-BigPage2.js
is contributing:
1.bigPageManyElements.spec 2.js
-ComplicatedPage.js
is contributing:
1.verifySocialMedia.spec 1.js
-FakeLandingPage1.js
is contributing:
1.tressTestViewCourses.spec 1.js
-FormPage3.js
is contributing:
1.formLoadTime.spec 1.js
2.submitEmptyForm.spec 1.js
3.formSubmissionWithBoundaryValues.spec 1.js
-HomePage2.js
is contributing:
1.navigateAndSubmitFormTest.spec 1.js
2.pageLoadTime.spec 1.js
3.verifyPageTitle.spec.js
4.bigPageManyElements.spec 2.js
5.verifyHomepageLoad.spec 2.js
6.verifySearchWithValidInput.spec 1.js
-LoginPage3.js
is contributing:
1.forgotPasswordFlow.spec 2.js
2.loginWithValidCredentials.spec 3.js
-NavigationPage.js
is contributing:
1.navigationBarTest.spec 1.js
-SimpleElementPage.js
is contributing:
1.simpleElementTest.spec 1.js
