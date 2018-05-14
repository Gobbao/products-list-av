#!/usr/bin/env node

const fs = require('fs')
    , [, , moduleName] = process.argv
    , templatePath = `${__dirname}/stubs/module`
    , outputPath = `${__dirname}/../server/modules/${moduleName}`
    , capitalize = word => `${word[0].toUpperCase()}${word.substring(1)}`

if (!moduleName) {
    console.log('\x1b[31m%s\x1b[0m', 'The module name is required\n')
    process.exit()
}
if (fs.existsSync(outputPath)) {
    console.log('\x1b[31m%s\x1b[0m', 'This module already exists\n')
    process.exit()
}

fs.mkdirSync(outputPath)
fs.readdir(templatePath, (err, files) => {
    files.forEach(fileName => {
        fs.readFile(`${templatePath}/${fileName}`, 'utf8', (err, data) => {
            const content = data
                .replace(/{{!!name!!}}/g, moduleName)
                .replace(/{{!!nameCapitalized!!}}/g, capitalize(moduleName))

            fs.writeFile(
                `${outputPath}/${moduleName}.${fileName}.js`,
                content,
                () => {}
            )
        })
    })
})
