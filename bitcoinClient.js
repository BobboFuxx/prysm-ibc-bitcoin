require('dotenv').config();
const { BitcoinRPC } = require('nomic-bitcoin-js');

const rpc = new BitcoinRPC({
    username: process.env.RPC_USER,
    password: process.env.RPC_PASSWORD,
    host: process.env.RPC_HOST,
    port: parseInt(process.env.RPC_PORT, 10),
});

module.exports = rpc;
