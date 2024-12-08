const { sendToCosmosBlockchain } = require('../bridgeToPrysm');

async function handleBitcoinDeposit(bitcoinTx, cosmosAccount) {
    const event = {
        cosmosAccount,
        bitcoinTxId: bitcoinTx.txid,
        amount: bitcoinTx.amount,
    };
    await sendToCosmosBlockchain(event);
}

module.exports = { handleBitcoinDeposit };
