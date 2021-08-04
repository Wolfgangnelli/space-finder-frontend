import { User, UserAttributes } from "../models/user.model";

export class AuthService {

    public async login(userName: string, password: string): Promise<User | undefined> {
        if (userName === 'user' && password === '1234') {
            return {
                userName,
                email: 'some@email.com'
            }
        } else {
            return undefined
        }
    }

    public async getUserAttributes(user: User): Promise<UserAttributes[]> {
        // inizializzo un array di attributes vuoto
        const attributes: UserAttributes[] = [];
        attributes.push({
            name: 'Description',
            value: 'Best user ever!'
        });
        attributes.push({
            name: 'Job',
            value: 'Engineer'
        });
        attributes.push({
            name: 'age',
            value: '30'
        });
        attributes.push({
            name: 'Experience',
            value: '1'
        })
        return attributes
    }
}