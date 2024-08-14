import { AddressLike } from "ethers";

const Assets: { [key: string]: { id:number, name: string, address: AddressLike, holders: AddressLike[], aggregator: AddressLike } } = {
    WETH: {
        id:1,
        name: "WETH",
        address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
        holders: ["0xD1668fB5F690C59Ab4B0CAbAd0f8C1617895052B", "0x9359eCF077186D4543Bd53Bc3528dA4a80938C79", "0x59d779BED4dB1E734D3fDa3172d45bc3063eCD69"],
        aggregator: "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419"
    },
    USDT: {
        id:2,
        name: "USDT",
        address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
        holders: ["0x9E4E147d103deF9e98462884E7Ce06385f8aC540", "0x8558FE88F8439dDcd7453ccAd6671Dfd90657a32", "0xBd55337583699E5f4849e3412Ca2e05C39940a01"],
        aggregator: "0x3E7d1eAB13ad0104d2750B8863b489D65364e32D"
    },
    WBTC: {
        id:3,
        name: "WBTC",
        address: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
        holders: ["0x1d5A591EebB5BcB20F440D121e4f62e8d1689997", "0xb20Fb60E27a1Be799b5e04159eC2024CC3734eD7", "0xf61Be624138D9A6f6317123a1d3b5dBA5f5a3De5"],
        aggregator: "0xF4030086522a5bEEa4988F8cA5B36dbC97BeE88c"
    },
    AAVE: {
        id:4,
        name: "AAVE",
        address: "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9",
        holders: ["0xcFBD46f1536EdC3D19C15Af362f7f7694BbAaF42", "0x5eE84D30c7EE57F63f71c92247Ff31f95E26916B", "0x4FD01341D7AD9592E0627eD20952466aD9bB831F"],
        aggregator: "0x547a514d5e3769680Ce22B2361c10Ea13619e8a9"
    },
    COMP: {
        id:5,
        name: "COMP",
        address: "0xc00e94cb662c3520282e6f5717214004a7f26888",
        holders: ["0x3f4aa3Aa9Fa1AFe43897627A9A964235C0bF9375", "0x0f50D31B3eaefd65236dd3736B863CfFa4c63C4E", "0x4f4A27E2eF06C441a37584c5dd2C4d61FFB61294"],
        aggregator: "0xdbd020CAeF83eFd542f4De03e3cF0C28A4428bd5"
    },
    UNI: {
        id:6,
        name: "UNI",
        address: "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
        holders: ["0x0ec9e8aA56E0425B60DEe347c8EFbaD959579D0F", "0x878f0822A9e77c1dD7883E543747147Be8D63C3B", "0x030d6830dc8FF125850390dA620Fa3E12DEcD437"],
        aggregator: "0x553303d460EE0afB37EdFf9bE42922D8FF63220e"
    },
    LINK: {
        id:7,
        name: "LINK",
        address: "0x514910771af9ca656af840dff83e8264ecf986ca",
        holders: ["0x96B1392f2e9E6849B8598D51f0861adE4fdA2885", "0xF197c6F2aC14d25eE2789A73e4847732C7F16bC9", "0xd072A5d8F322dD59dB173603fBb6CBb61F3F3D28"],
        aggregator: "0x2c1d072e956AFFC0D435Cb7AC38EF18d24d9127c"
    },
    USDC: {
        id:8,
        name: "USDC",
        address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
        holders: ["0xc81374313ea27548b983Df515e385Df94613c32c", "0x688344d10928ADC4BCf846E6Ed5EE0B2cAfE4786", "0x95b8E28F8A2B24b5683bdc09924E6926D3F5f8D3"],
        aggregator: "0x8fFfFfd4AfB6115b954Bd326cbe7B4BA576818f6"
    },
    WBNB: {
        id:9,
        name: "WBNB",
        address: "0x418D75f65a02b3D53B2418FB8E1fe493759c7605",
        holders: ["0xE554C386D25aD8A39E21Ef888c2ebC7E1908fA15", "0x8404BcF90656cB0C63D6d75819456226c45e912a", "0x8c4e952e2Ba612ac920d7E14A96ce37e3c13AcB6"],
        aggregator: "0x14e613AC84a31f709eadbdF89C6CC390fDc9540A"
    },
    DAI: {
        id:10,
        name: "DAI",
        address: "0x6b175474e89094c44da98b954eedeac495271d0f",
        holders: ["0xCBe601f6263e7bA628D698a4CcA3d33752115c90", "0x2A5A1D256744bC09a2469D4Cc558BBd84a35CEFA", "0xe9bE525b40578Fa33AB723D458F6aF9FDA530662"],
        aggregator: "0xAed0c38402a5d19df6E4c03F4E2DceD6e29c1ee9"
    },
    MATIC: {
        id:11,
        name: "MATIC",
        address: "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
        holders: ["0x4c569c1e541A19132AC893748E0ad54C7c989FF4", "0x5d8C776ef1596f8c5FbB19776AbA36e603Ed3757", "0x3F08f17973aB4124C73200135e2B675aB2D263D9"],
        aggregator: "0x7bAC85A8a13A4BcD8abb3eB7d6b4d632c5a57676"
    },

};

export const EthHolders = [
    "0x0a4c79cE84202b03e95B7a692E5D728d83C44c76",
    "0x7d6149aD9A573A6E2Ca6eBf7D4897c1B766841B4",
    "0x4Ed97d6470f5121a8E02498eA37A50987DA0eEC0",
    "0x7f1502605A2f2Cc01f9f4E7dd55e549954A8cD0C",
    "0x4eac9CE57Af61A6fB1f61f0BF1D8586412bE30Bc"
];

export const SepolinaAssets: { [key: string]: { id:number, name: string, address: AddressLike, holders: AddressLike[], aggregator: AddressLike } } = {
    
    USDT: {
        id:1,
        name: "USDT",
        address: "0xf6994372B14e886d2621619be33E67a1Ef19265c",
        holders: [],
        aggregator: "0x3ec8593F930EA45ea58c968260e6e9FF53FC934f"
    },
    BTC: {
        id:2,
        name: "BTC",
        address: "0x3fa08A4F1D647E105514AFd65510C3CB0837397c",
        holders: [],
        aggregator: "0x0FB99723Aee6f420beAD13e6bBB79b7E6F034298"
    },
    ETH: {
        id:3,
        name: "ETH",
        address: "0x64E81a223979911AeDfF3AF96DBDa8aC7355dead",
        holders: [],
        aggregator: "0x4aDC67696bA383F43DD60A9e78F2C97Fbbfc7cb1"
    },
    LINK: {
        id:4,
        name: "LINK",
        address: "0x882066bB344b59b3b072a7F17caE7582FA4Bf660",
        holders: [],
        aggregator: "0xb113F5A928BCfF189C998ab20d753a47F9dE5A61"
    },
    USDC: {
        id:5,
        name: "USDC",
        address: "0xc6ceA2518610e6C0D9bF199F7B4692408649d10E",
        holders: [],
        aggregator: "0xd30e2101a97dcbAeBCBC04F14C3f624E67A35165"
    },
};




export default Assets;