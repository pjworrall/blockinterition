const Handlebars = require('handlebars');

const fs = require('fs');
const parse = require('csv-parse');
const readline = require('readline');
const Stream = require('stream');

let argv = require('minimist')(process.argv.slice(2));

if(argv.data === undefined || argv.map === undefined || argv.template === undefined) {
    console.log("usage: node tripleize.js --data <input-file>  --map <mapping-file> --template <template-file>");
    process.exit(1);
}

let map = require(argv.map);

// '../data/input/fragments/blocks.csv'
const chaindata = argv.data;
// '../map/block.map'
const templatefile = argv.template;

fs.readFile(templatefile, 'utf8', function (err,data) {
    if (err) {
        console.log(err);
        throw new Error(err);
    } else {
        render(data);
    }

});

function render(source) {

    let template = Handlebars.compile(source);

    let instream = fs.createReadStream(chaindata);
    let outstream = new Stream;
    let rl = readline.createInterface(instream, outstream);

    rl.on('line', function(line) {
        // process line here

        parse(line, (err, data) => {
            if(err) {
                console.log("ERROR: " + err);
                throw new Error(err);
            } else {
                let result = template (map(data));
                console.log(result);
            }

        });

    });

    rl.on('close', function() {
        // do something on finish here
    });
}


