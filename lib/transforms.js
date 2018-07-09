/*
A transform to drop the 0x off the prefix of an Ethereum Account address
*/


exports.remove0x = function (value) {

    let regex = /^0x/;
    let result = value.replace(regex,'');

    return result ;

};


