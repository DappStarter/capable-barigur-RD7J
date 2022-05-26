require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue blue shadow shock note maze comic harvest desert frame gate'; 
let testAccounts = [
"0x8d21d084794178ca19fa5df58790b0764a6349e2cbea457525b690e01fcd93a9",
"0xf61dffd48629e380a58347eb89ff4c221cfa11c3b96c535e285704989773302c",
"0x7dd414c5112e45f396c59a5354ae8c2edcd8edcd553a6266e285fde292afdd0d",
"0xa8358c028ed3b8e1564ec34a95f6f556dbdd7e2701de6d27257411cc31df52b1",
"0xc9052a6282c4be2493e6b69aac84154ddb9036bda03e1731e4ff53107425d0dc",
"0x29d76aceb62644f72dcfda6b77d3d127087f3e2793c00b95f43091303f680bee",
"0xb367c178cf58cfc2f5fb9ecaae0f20cb5e5b884b476d0dec656cebba22e411ff",
"0x36d2e4496079dc4fc08dd539a6755c04e10626dbbac12152a4bb80a7b53ff4cf",
"0xa078c49a2d5ce627570150ef577f776cd437cc4dc7759f1a531b256c341b05d2",
"0x0681206cc6ac2ed3c9e1f80008d7d7acad56ca4f3099f5acaf3e87b815b719ed"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


