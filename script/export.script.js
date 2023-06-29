const fs = require('fs');
const path = require('path');

const componentsDirectory = 'src/components';

fs.readdir(componentsDirectory, (err, componentDirectories) => {
  if (err) throw err;

  componentDirectories.forEach((componentDirectory) => {
    const componentName = path.basename(componentDirectory);
    const exportedJsFilePath = `sw/${componentName}.js`;
    const exportedJsFileCode = `export * from "./components/${componentDirectory}/${componentName}"`;
    const exportedTsFilePath = `sw/${componentName}.d.ts`;
    const exportedTsFileCode = `export * from "./components/${componentDirectory}/${componentName}"`;

    fs.writeFile(exportedJsFilePath, exportedJsFileCode, (err) => {
      if (err) throw err;
      console.log(`${exportedJsFilePath} was created`);
    });

    fs.writeFile(exportedTsFilePath, exportedTsFileCode, (err) => {
      if (err) throw err;
      console.log(`${exportedTsFilePath} was created`);
    });
  });
});
