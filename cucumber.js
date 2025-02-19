module.exports = {
  default: {
    requireModule: ["ts-node/register"],
    require: [
      "src/test/project_netlify/support/**/*.ts",
      "src/test/project_netlify/step_definitions/**/*.ts"
    ],
    paths: ["src/test/project_netlify/features/**/*.feature"],
    retry: 1,
    parallel: 4,
    format: [
      "progress", // Console output
      "json:reports/cucumber-report.json", // JSON report
      "html:reports/cucumber-report.html", // HTML report (if supported plugin is installed)
      "summary" // Console summary output
    ],
  }
};
