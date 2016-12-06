'use strict';

const crypto = require('crypto');

let hash = (string, hash) => {
    hash.update(string);
    return hash.digest('hex');
};

module.exports = {
    hash : (string) => {
        return hash(string, crypto.createHash('sha512'));
    },
    hash256 : (string) => {
        return hash(string, crypto.createHash('sha256'));
    },
    hashMD5 : (string) => {
        return hash(string, crypto.createHash('md5'));
    }
};