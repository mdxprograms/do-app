module.exports = [
  {
    name: "react",
    options: {
      npm: "--use-npm",
      typescript: "--template typescript",
    },
    command: (appName, options) => `npx create-react-app ${appName} ${options}`,
  },
  {
    name: "vue",
    options: {},
    command: "",
  },
];
