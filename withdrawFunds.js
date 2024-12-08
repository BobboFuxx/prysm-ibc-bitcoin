const rpc = require('./bitcoinClient');

async function createAndSendTransaction(toAddress, amount) {
    try {
        console.log(`Sending ${amount} BTC to ${toAddress}`);
        const txid = await rpc.sendToAddress(toAddress, amount);
        console.log('Transaction broadcasted, TXID:', txid);
        return txid;
    } catch (error) {
        console.error('Error sending transaction:', error);
    }
}

(async () => {
    const toAddress = 'recipient-bitcoin-address'; // Replace with user's withdrawal address
    const amount = 0.001; // Replace with withdrawal amount in BTC
    await createAndSendTransaction(toAddress, amount);
})();
