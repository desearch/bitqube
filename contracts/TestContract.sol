// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TestContract {
    string public message;
    uint public number;

    constructor(string memory _message, uint _number) {
        message = _message;
        number = _number;
    }

    function setMessage(string memory _message) public {
        message = _message;
    }

    function setNumber(uint _number) public {
        number = _number;
    }

    function getMessage() public view returns (string memory) {
        return message;
    }

    function getNumber() public view returns (uint) {
        return number;
    }
} 