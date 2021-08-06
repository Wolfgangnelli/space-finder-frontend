import ReactDOM from "react-dom";
import {Login} from "../../src/pages/Login";
import {fireEvent, waitFor} from '@testing-library/react'
import { User } from "../../src/models/user.model";
import history from '../../src/utils/history';


const someUser: User = {
    userName: 'someUser',
    email: 'someEmail'
}

// Test Suite
describe('Login component test suite', () => {

   let container: HTMLDivElement;
   const authServiceMock = {
       login: jest.fn()
   }
   const setUserMock = jest.fn();

   const historyMock = history;
   history.push = jest.fn();


    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(
            <Login authService={authServiceMock as any} setUser={setUserMock} />,
            container
        )
    })

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
        jest.clearAllMocks();
    })

    //test rendering login components correctly
    test('Renders correctly initial document', () => {
        //query the document for verify if the title h2 (Please Login) is rendered correctly
        const title = document.querySelector('h2')!;
        expect(title.textContent).toBe('Please login');

        //test input fields
        const inputs = document.querySelectorAll('input')!;
        expect(inputs).toHaveLength(4);
        expect(inputs[0].value).toBe('');
        expect(inputs[1].value).toBe('');
        expect(inputs[2].value).toBe('LOGIN');
        expect(inputs[3].value).toBe('RESET');

        // verify if the login message isn't visible in the initial document
        const label = document.getElementById('login-message');
        expect(label).not.toBeInTheDocument();

    })

    //test login user interaction with @testing-library/react
    test('Passes credential correctly ', () => {
        const inputs = document.querySelectorAll('input');
        const usernameInput = inputs[0];
        const passwordInput = inputs[1];
        const loginBtn = inputs[2];
        const resetBtn = inputs[3];

        // simulo l'inserimento di valori nei campi input e il click del buttons
        fireEvent.change(usernameInput, {target: {value: 'someUser'}});
        fireEvent.change(passwordInput, {target: {value: 'somePassword'}});
        fireEvent.click(loginBtn);
        fireEvent.click(resetBtn);

        // simulo la verifica dei dati usando la fun login di authService come sarebbe in realtà nell'app
        expect(authServiceMock.login).toBeCalledWith(
            'someUser',
            'somePassword'
        );
    })

    test('Correctly handles login sucess', async () => {
        //simulo la resolve della promise diciamo
        authServiceMock.login.mockResolvedValue(someUser);

        const inputs = document.querySelectorAll('input');
        const usernameInput = inputs[0];
        const passwordInput = inputs[1];
        const loginBtn = inputs[2];
        const resetBtn = inputs[3];

        fireEvent.change(usernameInput, {target: {value: 'someUser'}});
        fireEvent.change(passwordInput, {target: {value: 'somePassword'}});
        fireEvent.click(loginBtn);

        // in questo modo posso aspettare e verificare nell'eventualità che questo elemento appaia nel mio componente
        const statusLabel = await waitFor(() => document.getElementById('login-message'));
        expect(statusLabel).toBeInTheDocument();
        expect(statusLabel).toHaveTextContent('Login successful');
        // testo se viene chiamato setUser
        expect(setUserMock).toBeCalledWith(someUser);
        //verifico che al termine lo user autenticato sia reindirizzato alla pagina /profile
        expect(historyMock.push).toBeCalledWith('/profile');

        fireEvent.click(resetBtn);

    })
    
    test('Correctly handles login failed', async () => {
        //simulo la resolve della promise diciamo, qui fallisce
        authServiceMock.login.mockResolvedValue(undefined);

        const inputs = document.querySelectorAll('input');
        const usernameInput = inputs[0];
        const passwordInput = inputs[1];
        const loginBtn = inputs[2];
        const resetBtn = inputs[3];

        fireEvent.change(usernameInput, {target: {value: 'someUser'}});
        fireEvent.change(passwordInput, {target: {value: 'somePassword'}});
        fireEvent.click(loginBtn);

        // in questo modo posso aspettare e verificare nell'eventualità che questo elemento appaia nel mio componente
        const statusLabel = await waitFor(() => document.getElementById('login-message'));
        expect(statusLabel).toBeInTheDocument();
        expect(statusLabel).toHaveTextContent('Login failed');

        fireEvent.click(resetBtn);

    })
    
})
