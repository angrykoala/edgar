"use strict";

const xejs = require('xejs');
const yerbamate = require('yerbamate')
const fs = require('fs');

const myRenderer = new xejs({
    options: {
        openTag: "{{",
        closeTag: "}}"
    },
    tokens: [],
    args: {}
});


myRenderer.render(__dirname + "/templates/template_pre.xejs", (err, file) => { //Precompilation
    if (err) console.error(err);
    fs.writeFileSync("build.js", file);
    yerbamate.run('sjs build.js -o build.js ', () => { //sweetjs compilation
        myRenderer.render(__dirname + "/templates/template.xejs", (err, file) => { //postcompilation
            if (err) console.error(err);
            fs.writeFileSync("build.js", file);
        });
    });
});
