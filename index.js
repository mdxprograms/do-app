const figlet = require("figlet");
const chalk = require("chalk");
const clear = require("clear");
const inquirer = require("inquirer");

const colorStates = {
  normal: (msg) => console.log(chalk.yellow(msg)),
  error: (msg) => console.log(chalk.red(msg)),
  info: (msg) => console.log(chalk.blue(msg)),
  success: (msg) => console.log(chalk.green(msg)),
};

const appChoices = [
  {
    name: "react",
    options: {
      npm: "--use-npm",
      typescript: "--template typescript",
    },
    command: (appName) => `npx create-react-app ${appName}`,
  },
  {
    name: "vue",
    options: {},
    command: "",
  },
];

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
    type: "list",
    choices: appChoices.map((c) => ({
      name: c.name,
      value: c,
    })),
  });

const appOptionsQ = async (appName) =>
  inquirer.prompt({
    name: "appOptions",
    type: "checkbox",
    choices: await getOptions(appName),
  });

const appNameQ = async () =>
  inquirer.prompt({
    name: "appName",
    type: "input",
  });

const introMsg = () =>
  colorStates.info(
    figlet.textSync("Do App", {
      font: "Arrows",
      horizontalLayout: "fitted",
    })
  );

const run = async () => {
  clear();
  introMsg();
  const { appChoice } = await appChoiceQ();
  const { appOptions } = await appOptionsQ(appChoice.name);
  const { appName } = await appNameQ();

  console.log(`${appChoice.command(appName)} ${appOptions.join(" ")}`);
};

run();
