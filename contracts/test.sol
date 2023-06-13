// SPDX-License-Identifier: MIT
pragma solidity >0.8.0;

contract test {
    uint256 public a = 10;

    function foo() public {
        a = 5;
    }

    function bar() public {
        a = 15;
    }
}
