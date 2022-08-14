import { Safe, Transaction } from '../Safe';

export class GnosisSafe_Optimism implements Safe {
    id: number;
    name: string;
    description: string;
    image: string;
    chainId: number;
    constructor() {
        this.id = 1;
        this.name = 'Gnosis Safe on Optimism';
        this.description = 'Gnosis Safe on Optimism';
        this.image = '';
        this.chainId = 22;
    }
    proposeTransactions(transactions: Transaction[], callback: any): any {
        //todo
        return null;
    }
    isValidSafeAddress(address: string): boolean {
        //todo
        return false;
    }
}