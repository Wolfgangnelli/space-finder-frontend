import { Space } from '../models/space.model';


export class DataService {

    public async getSpaces(): Promise<Space[]> {
        const data: Space[] = [];
        data.push({
            name: 'Best location',
            location: 'Paris',
            spaceId: Math.floor(Math.random() * 100) + "_" + Date.now()
        });
        data.push({
            name: 'Best location',
            location: 'Madrid',
            spaceId: Math.floor(Math.random() * 100) + "_" + Date.now()
        });
        data.push({
            name: 'Best location',
            location: 'Rome',
            spaceId: Math.floor(Math.random() * 100) + "_" + Date.now()
        });
        data.push({
            name: 'Best location',
            location: 'Porto',
            spaceId: Math.floor(Math.random() * 100) + "_" + Date.now()
        });
        data.push({
            name: 'Best location',
            location: 'Berlin',
            spaceId: Math.floor(Math.random() * 100) + "_" + Date.now()
        });
        return data;
    }
}