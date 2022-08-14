import { Safe, Transaction } from '../Safe';

export class Realms_Solana implements Safe {
    id: number;
    name: string;
    description: string;
    image: string;
    chainId: number;
    constructor() {
        this.id = 1;
        this.name = 'Realms on Solana';
        this.description = 'Realms on Solana';
        this.image = '';
        this.chainId = 9000001;
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