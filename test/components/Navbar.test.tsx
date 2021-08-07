import ReactDOM from 'react-dom';
import {Navbar} from '../../src/components/Navbar';
import { User } from '../../src/models/user.model';
import {StaticRouter} from 'react-router'
import {getByTestId} from '@testing-library/react'


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

    test('renders link correctly with user using data test', () => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(
            <StaticRouter>
            <Navbar user={someUser} />
            </StaticRouter>,
            container
        );
        const homeLink = getByTestId(container, 'home-link') as HTMLAnchorElement;
        const profileLink = getByTestId(container, 'profile-link') as HTMLAnchorElement;
        const spacesLink = getByTestId(container, 'spaces-link') as HTMLAnchorElement;
        const logoutLink = getByTestId(container, 'logout-link') as HTMLAnchorElement;

        expect(homeLink.href).toBe(`${baseUrl}/`);
        expect(profileLink.href).toBe(`${baseUrl}/profile`);
        expect(spacesLink.href).toBe(`${baseUrl}/spaces`);
        expect(logoutLink.href).toBe(`${baseUrl}/logout`);

    })

    test('renders links correctly without user using data test', () => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(
            <StaticRouter>
            <Navbar user={undefined} />
            </StaticRouter>,
            container
        );

        const homeLink = getByTestId(container, 'home-link') as HTMLAnchorElement;
        const profileLink = getByTestId(container, 'profile-link') as HTMLAnchorElement;
        const spacesLink = getByTestId(container, 'spaces-link') as HTMLAnchorElement;
        const loginLink = getByTestId(container, 'login-link') as HTMLAnchorElement;

        expect(homeLink.href).toBe(`${baseUrl}/`);
        expect(profileLink.href).toBe(`${baseUrl}/profile`);
        expect(spacesLink.href).toBe(`${baseUrl}/spaces`);
        expect(loginLink.href).toBe(`${baseUrl}/login`);
    })
    
    
    
})
