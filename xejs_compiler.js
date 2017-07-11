const xejs = require('xejs');

const fs = require('fs');

const myRenderer = new xejs({
    options: {
        openTag: "{{",
        closeTag: "}}"
    },
    tokens: [],
    args: {}
});


myRenderer.render(__dirname+"/template.xejs", function(err, file) {
    if(err) console.error(err);
    fs.writeFileSync("build.js", file);
});
