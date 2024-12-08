const rpc = require('./bitcoinClient');
const { sendToCosmosBlockchain } = require('./bridgeToPrysm');

async function monitorDeposits(address, cosmosAccount) {
    try {
        const transactions = await rpc.listTransactions('*', 100); // Fetch last 100 transactions
        const txsForAddress = transactions.filter(tx => tx.address === address);

        for (const tx of txsForAddress) {
            if (tx.confirmations >= 6) { // Wait for 6 confirmations
                console.log('Confirmed transaction:', tx);
                const event = {
                    cosmosAccount,
                    bitcoinTxId: tx.txid,
                    amount: tx.amount,
                };
                await sendToCosmosBlockchain(event);
            }
        }
    } catch (error) {
        console.error('Error monitoring deposits:', error);
    }
}

(async () => {
    const address = 'your-bitcoin-address'; // Replace with generated Bitcoin address
    const cosmosAccount = 'prysm1...'; // Replace with user's Cosmos account
    setInterval(() => monitorDeposits(address, cosmosAccount), 60000); // Poll every minute
})();
