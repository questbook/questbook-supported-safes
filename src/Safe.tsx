import React from 'react';

export interface Transaction {
    to: string,
    amount: string, 
    data: string,
    metadata: any
}

export interface Callback {
    (error: Error, result: any): void;
}

/**
 * A Safe Provider + Chain uniquely identifies a Safe.
 * e.g. "GnosisSafe on Optimism", "GnosisSafe on Arbitrum", "Realms on Solana", "Cashmere on Solana"...
 */

export interface Safe {
    id: number;
    name: string;
    description: string;
    image: string;
    chainId: number;

    /**
     * 
     * @param transactions List of transactions that need to be executed from the safe
     * @param callback Callback function that is called when the transactions are executed/failed
     * Takes a list of parameters and returns a component that can be rendered in the modal on questbook
     * This component must carry out the following functions where relevant :
     *   1. Request the transaction(s) to be signed by an external wallet like metamask or phantom or walletconnect
     *   2. Create the transaction on the safe (gnosis, celosafe, realms etc)
     *   3. Ask the user to approve/execute the transaction safe by providing the UI to go to the safe (e.g. URL that they can click and open gnosis-safe.io/{tx})
     *   4. Wait for the transaction to be mined and return the result to the user
     *   5. Update the transaction on the Questbook smart contract
     *   6. Close the modal using the Callback
     */
    proposeTransactions(transactions : Transaction[], Callback): React.Component;

    /**
     * @param address : Address of the safe
     * This is useful when searching for detecting which network the safe is on (in the onboarding)
     */
    isValidSafeAddress(address: String) : boolean;
}