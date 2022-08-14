import { Safe } from './Safe';
import { GnosisSafe_Optimism } from './implementations/GnosisSafe_Optimism';
import { CeloSafe_Celo } from './implementations/CeloSafe_Celo';
import { Realms_Solana } from './implementations/Realms_Solana';

export class SupportedSafes {
    safes: Safe[];
    constructor(){
        this.safes = [];
        this.safes.push(new GnosisSafe_Optimism());
        this.safes.push(new CeloSafe_Celo());
        this.safes.push(new Realms_Solana());
    }
    
    getSafe(id: number): Safe | undefined {
        return this.safes.find(safe => safe.id === id);
    }

    getAllSafes(): Safe[] {
        return this.safes;
    }

}