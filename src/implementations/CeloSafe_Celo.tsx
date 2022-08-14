import { Safe, Transaction } from '../Safe';

export class CeloSafe_Celo implements Safe {
    id: number;
    name: string;
    description: string;
    image: string;
    chainId: number;
    constructor() {
        this.id = 1;
        this.name = 'CeloSafe on Celo';
        this.description = 'CeloSafe on Celo';
        this.image = '';
        this.chainId = 42220;
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