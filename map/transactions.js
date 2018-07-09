const transform = require('../lib/transforms.js');


module.exports = function(data) {
        return {
            tx_hash:  transform.remove0x(data[0][0]),
            tx_nonce: data[0][1],
            tx_block_hash: data[0][2],
            tx_block_number: data[0][3],
            tx_index: data[0][4],
            tx_from: data[0][5],
            tx_to: data[0][6],
            tx_value: data[0][7],
            tx_gas: data[0][8],
            tx_gas_price: data[0][9],
            tx_input: data[0][10],
        };
       };

