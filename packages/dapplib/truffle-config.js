require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt case area security jar renew script common coral light army gentle'; 
let testAccounts = [
"0xdd12a5d280745afd9f020d2a24c6bf6eece75e09a7b292ac4723e7cb5c8b5d37",
"0xbecbeec1a178cbf763db169bc797276fb45db94a2048a0c1d4a90e889a19830e",
"0xd74c1d462e016a7589a77260acb510079657783c4fd7be50b4c43af3def1a176",
"0xac188ec5135fd77932585676b7664532ceb8ac162a28379f5e8be503a83eaca7",
"0x6ce50f364fca2fb5ea7da46a6789633b94929a24191c5de79021d4d432fbf636",
"0x32984a5a889e1c8da863acdb4705b3617e19a23a0dd823420ef7cdde20af33e3",
"0xd8aa383f14523d16ad279469c53463b92ff94a925953c6190d2954653bd58ee8",
"0x08699961f9b8b4407101567bf2ca12c71d8dd62886d9a377043914ffa1bf2d61",
"0xc108278efc0eac5f6a63136e259e9330b8ffa885179e3c28a666b64d6e61a64c",
"0x9b8025ccc65d2c84e259523d34d2abc6ef2e7bd5827fa10c6ab3d94a489b5440"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

