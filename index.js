const { exec } = require("child_process");
const clear = require("clear");
const { error, info } = require("./lib/colorStates");

const { appChoiceQ, appOptionsQ, appNameQ } = require("./lib/questions");
const { introMsg } = require("./lib/messages");

const run = async () => {
  clear();
  introMsg();
  const { appChoice } = await appChoiceQ();
  const { appOptions } = await appOptionsQ(appChoice.name);
  const { appName } = await appNameQ();

  exec(
    appChoice.command(appName, appOptions.join(" ")),
    (err, stdout, stderr) => {
      if (err) {
        error(err);
        return;
      }
      if (stderr) {
        error(stderr);
        return;
      }
      info(stdout);
    }
  );
};

run();
