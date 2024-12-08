# prysm-ibc-bitcoin
Native Bitcoin and IBC Bitcoin for Prysm Network


```prysm-ibc-bitcoin/
├── .env                     # Environment variables
├── package.json             # Node.js project configuration
├── bitcoinClient.js         # Bitcoin RPC client setup
├── generateAddress.js       # Script to generate Bitcoin deposit addresses
├── monitorDeposits.js       # Script to monitor Bitcoin deposits
├── withdrawFunds.js         # Script to handle Bitcoin withdrawals
├── bridgeToPrysm.js         # IBC bridging logic
├── services/
│   ├── depositHandler.js    # Handles Bitcoin deposit events
│   ├── withdrawalHandler.js # Handles Bitcoin withdrawal requests
└── README.md                # Documentation```
