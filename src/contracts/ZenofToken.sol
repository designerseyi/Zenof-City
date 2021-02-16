pragma solidity 0.6.12;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract ZenofToken is ERC20{

    /**
     * @dev Constructor that gives msg.sender all of existing tokens.
     */
    constructor(uint256 initialSupply) public ERC20("Zenof", "ZF") {
        _mint(msg.sender, initialSupply);
    }
}