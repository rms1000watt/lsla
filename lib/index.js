const spawn = require('child_process').spawn;

function lsla() {
	var bin = spawn("ls", ["-la"]);

    bin.stdout.on('data', (data) => {
      // console.log(`${data}`);
      return `${data}`;
    });

    bin.stderr.on('data', (data) => {
      // console.log(`${data}`);
      return `${data}`;
    });

    // bin.on('close', (code) => {
    //   console.log(`${code}`);
    // });
}

module.exports = lsla;
