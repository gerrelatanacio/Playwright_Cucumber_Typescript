import { generate } from "cucumber-html-reporter";

generate({
  theme: "bootstrap", // Themes: 'bootstrap', 'hierarchy', 'foundation', 'simple'
  jsonFile: "reports/cucumber-report.json", // Path to the generated JSON file
  output: "reports/generated_cucumber-report.html", // Path to save the generated HTML report
  reportSuiteAsScenarios: true,
  launchReport: true, // Automatically opens the report in your default browser
  metadata: {
    "App Version": "1.0.0",
    "Test Environment": "TEST",
    Browser: "Chromium",
    Platform: "MacOS",
    Parallel: "4",
    Executed: "Remote"
  }
});
