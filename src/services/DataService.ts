import { Space } from '../models/space.model';


export class DataService {

    private generateRandomLetter() {
        const alphabet = "abcdefghilmnopqrstuvwxyz";

        return alphabet[Math.floor(Math.random() * alphabet.length)]
        
    }
    public async getSpaces(): Promise<Space[]> {
        const data: Space[] = [];
        data.push({
            name: 'Best location',
            location: 'Paris',
            spaceId: Math.floor(Math.random() * 100) + "_" + this.generateRandomLetter()
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
}