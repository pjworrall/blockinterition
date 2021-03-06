const transform = require('../lib/transforms.js');

module.exports = function(data) {
        return {
            block_number: data[0][0],
            block_hash: transform.remove0x(data[0][1]),
            block_parent_hash: transform.remove0x(data[0][2]),
            block_nonce: transform.remove0x(data[0][3]),
            block_sha3_uncles: transform.remove0x(data[0][4]),
            block_logs_bloom: transform.remove0x(data[0][5]),
            block_transactions_root: transform.remove0x(data[0][6]),
            block_state_root: transform.remove0x(data[0][7]),
            block_miner: data[0][8],
            block_difficulty: data[0][9],
            block_total_difficulty: data[0][10],
            block_size: data[0][11],
            block_extra_data: transform.remove0x(data[0][12]),
            block_gas_limit: data[0][13],
            block_gas_used: data[0][14],
            block_timestamp: data[0][15],
            block_transaction_count: data[0][16]
        };
       };



