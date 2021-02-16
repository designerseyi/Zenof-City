const {assert} = require('chai');
require('chai')
    .use(require('chai-as-promised'))
    .should()

const  { Contract, BigNumber } = require('ethers');

const GeneScience = artifacts.require("IGeneScience.sol");
const CryptoAlpaca = artifacts.require("AlpacaCore.sol");
const AlpaReward = artifacts.require("AlpaReward.sol");
const AlpaToken = artifacts.require("AlpaToken.sol");
const IERC20 = artifacts.require("IERC20.sol");
const MockCryptoAlpacaReceiver = artifacts.require("MockCryptoAlpacaReceiver.sol");
const MasterChef = require("MasterChef.sol");


    contract('MasterChef',async([deployer,investor,user1,user2])=>{
        const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
        const ALPA_PER_BLOCK = BigNumber.from("100000000000000000000");
        const STARTING_BLOCK = BigNumber.from("0");
        let PER_SHARE_MULTIPLIER;
        let EMPTY_ALPACA_ENERGY;

        before(async()=>{
            // science = await deployMockContract(owner, GeneScience.abi);
            alpaToken = await  AlpaToken.new();
            reward = await AlpaReward.new(alpaToken.address);
            alpaca = await CryptoAlpaca.new( 
                            alpaToken.address,
                            science.address,
                            operator.address,
                            dev.address,
                            reward.address) ;
            masterChef = await deployContract(owner, MasterChef, [
              alpaToken.address,
              alpaca.address,
              dev.address,
              community.address,
              ALPA_PER_BLOCK.toString(),
              STARTING_BLOCK,
            ]);

            PER_SHARE_MULTIPLIER = await masterChef.SAFE_MULTIPLIER();
            EMPTY_ALPACA_ENERGY = await masterChef.EMPTY_ALPACA_ENERGY();
        
            mockCryptoAlpacaReceiver = await deployContract(
              owner,
              MockCryptoAlpacaReceiver
            );
        
            // Transfer alpaca owner to master chef so it can mint
            await alpaToken.transferOwnership(masterChef.address);

        })

    })

