import ReactDOM from 'react-dom';
import {Navbar} from '../../src/components/Navbar';
import { User } from '../../src/models/user.model';
import {StaticRouter} from 'react-router'


const someUser: User = {
    userName: 'someUser',
    email: 'someEmail'
}

describe('Navbar test suite', () => {

    let container: HTMLDivElement;
    const baseUrl = 'http://localhost';

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    })

    test('renders links correctly with user', () => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(
            <StaticRouter>
                <Navbar user={someUser} />
            </StaticRouter>,
            container
        )

        // i have need reference to the links - using query selector
        const links = container.querySelectorAll('a');
        expect(links[0].href).toBe(`${baseUrl}/`);
        expect(links[1].href).toBe(`${baseUrl}/profile`);
        expect(links[2].href).toBe(`${baseUrl}/spaces`);
        expect(links[3].href).toBe(`${baseUrl}/logout`);

    })
    
    
})
