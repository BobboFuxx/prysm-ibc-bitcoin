const rpc = require('./bitcoinClient');

async function generateDepositAddress() {
    try {
        const address = await rpc.getNewAddress();
        console.log('New Bitcoin deposit address:', address);
        return address;
    } catch (error) {
        console.error('Error generating address:', error);
    }
}

generateDepositAddress();
