const inquirer = require("inquirer");
const appChoices = require("./appChoices");

const getOptions = async (appName) => {
  const { options } = appChoices.find((a) => a.name === appName);
  return Object.keys(options).map((o) => ({
    name: o,
    value: options[o],
  }));
};

const appChoiceQ = async () =>
  inquirer.prompt({
    name: "appChoice",
    message: "App Type",
    type: "list",
    choices: appChoices.map((c) => ({
      name: c.name,
      value: c,
    })),
  });

const appOptionsQ = async (appName) =>
  inquirer.prompt({
    name: "appOptions",
    message: "App Options",
    type: "checkbox",
    choices: await getOptions(appName),
  });

const appNameQ = async () =>
  inquirer.prompt({
    name: "appName",
    message: "App Name",
    type: "input",
  });

module.exports = {
  appChoiceQ,
  appOptionsQ,
  appNameQ,
};
