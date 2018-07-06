const Handlebars = require('handlebars');

const fs = require('fs');
const parse = require('csv-parse');
const readline = require('readline');
const stream = require('stream');

const chaindata = '../data/blocks.csv';

const templatefile = '../map/block.map';

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
    let outstream = new stream;
    let rl = readline.createInterface(instream, outstream);

    rl.on('line', function(line) {
        // process line here

        parse(line, (err, data) => {
            if(err) {
                console.log("ERROR: " + err);
                throw new Error(err);
            } else {
                tripleize(data,template);
            }

        });

    });

    rl.on('close', function() {
        // do something on finish here
    });
}



function tripleize(data,template) {

    // console.log("block_number:" + data[0][0] + "'" +
    //     "block_hash" + data[0][1] + "'" +
    //     "block_parent_hash" + data[0][2] + "'" +
    //     "block_nonce" + data[0][3] + "'" +
    //     "block_sha3_uncles" + data[0][4] + "'" +
    //     "block_logs_bloom" + data[0][5] + "'" +
    //     "block_transactions_root" + data[0][6] + "'" +
    //     "block_state_root" + data[0][7] + "'" +
    //     "block_miner" + data[0][8] + "'" +
    //     "block_difficulty" + data[0][9] + "'" +
    //     "block_total_difficulty" + data[0][10] + "'" +
    //     "block_size" + data[0][11] + "'" +
    //     "block_extra_data" + data[0][12] + "'" +
    //     "block_gas_limit" + data[0][13] + "'" +
    //     "block_gas_used" + data[0][14] + "'" +
    //     "block_timestamp" + data[0][15] + "'" +
    //     "block_transaction_count" + data[0][16]) ;


    let properties = {
        block_number: data[0][0],
        block_hash: data[0][1],
        block_parent_hash: data[0][2],
        block_nonce: data[0][3],
        block_sha3_uncles: data[0][4],
        block_logs_bloom: data[0][5],
        block_transactions_root: data[0][6],
        block_state_root: data[0][7],
        block_miner: data[0][8],
        block_difficulty: data[0][9],
        block_total_difficulty: data[0][10],
        block_size: data[0][11],
        block_extra_data: data[0][12],
        block_gas_limit: data[0][13],
        block_gas_used: data[0][14],
        block_timestamp: data[0][15],
        block_transaction_count: data[0][16]
    };


    let result = template (properties);

    console.log(result);

}


