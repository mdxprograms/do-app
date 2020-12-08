const clear = require("clear");

const { appChoiceQ, appOptionsQ, appNameQ } = require("./lib/questions");
const { introMsg } = require("./lib/messages");

const run = async () => {
  clear();
  introMsg();
  const { appChoice } = await appChoiceQ();
  const { appOptions } = await appOptionsQ(appChoice.name);
  const { appName } = await appNameQ();

  console.log(appChoice.command(appName, appOptions.join(" ")));
};

run();
