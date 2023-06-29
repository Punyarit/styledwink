const fs = require('fs');

const packageJson = 'package.json';

fs.readFile(packageJson, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const packageData = JSON.parse(data);
  let currentVersion = packageData.version;

  // Split the version number into parts and increment the patch version
  const parts = currentVersion.split('.');
  parts[2] = Number(parts[2]) + 1;
  // Update the version in the package.json file
  packageData.version = parts.join('.');
  fs.writeFile(packageJson, JSON.stringify(packageData, null, 2), 'utf8', (err) => {
    if (err) {
      console.error(err);
    }

    // Run the yarn publish command with the new version
    const exec = require('child_process').exec;
    exec(`yarn publish --new-version ${parts.join('.')}`, (err, stdout, stderr) => {
      if (err) {
        console.error(err);
      }
      console.log(stdout);
      console.error(stderr);
    });
  });
});
