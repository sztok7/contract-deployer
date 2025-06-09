// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

interface ISpokePool {
    function $processedNonces(address, uint256) external view returns (bool);
}

contract FillChecker {

    error OrderAlreadyFilled();

    function assertNotFilled(address spokePoolAddress, address sponsor, uint256 bundleId) public view {
        ISpokePool spokePool = ISpokePool(spokePoolAddress);

        bool isProcessed = spokePool.$processedNonces(sponsor, bundleId);
        if (isProcessed) revert OrderAlreadyFilled();
    }
}
