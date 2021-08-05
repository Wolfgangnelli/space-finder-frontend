import { Space } from '../models/space.model';


export class DataService {
    private id1 = Math.floor(Math.random() * 100) + "_" + this.generateRandomLetter();
    
    private generateRandomLetter() {
        const alphabet = "abcdefghilmnopqrstuvwxyz";
          
        return alphabet[Math.floor(Math.random() * alphabet.length)]   
    }
    
    public async getSpaces(): Promise<Space[]> {
        const data: Space[] = [];
        data.push({
            name: 'Best location',
            location: 'Paris',
            spaceId: this.id1
        });
        data.push({
            name: 'Best location',
            location: 'Madrid',
            spaceId: Math.floor(Math.random() * 100) + "_" + this.generateRandomLetter()
        });
        data.push({
            name: 'Best location',
            location: 'Rome',
            spaceId: Math.floor(Math.random() * 100) + "_" + this.generateRandomLetter()
        });
        data.push({
            name: 'Best location',
            location: 'Porto',
            spaceId: Math.floor(Math.random() * 100) + "_" + this.generateRandomLetter()
        });
        data.push({
            name: 'Best location',
            location: 'Berlin',
            spaceId: Math.floor(Math.random() * 100) + "_" + this.generateRandomLetter()
        });
        return data;
    }

    public async reserveSpace(spaceId: string): Promise<string | undefined> {
        if(spaceId === this.id1) {
            return '5555'
        } else {
            return undefined
        }
    }
}