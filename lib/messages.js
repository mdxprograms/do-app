const figlet = require("figlet");
const { info } = require("./colorStates");

const introMsg = () =>
  info(
    figlet.textSync("Do App", {
      font: "Arrows",
      horizontalLayout: "fitted",
    })
  );

module.exports = {
  introMsg,
};
