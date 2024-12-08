const rpc = require('../bitcoinClient');

async function handleBitcoinWithdrawal(toAddress, amount) {
    try {
        const txid = await rpc.sendToAddress(toAddress, amount);
        console.log('Withdrawal broadcasted, TXID:', txid);
        return txid;
    } catch (error) {
        console.error('Error processing withdrawal:', error);
    }
}

module.exports = { handleBitcoinWithdrawal };
