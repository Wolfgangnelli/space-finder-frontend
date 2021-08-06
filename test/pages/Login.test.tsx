import ReactDOM from "react-dom";
import {Login} from "../../src/pages/Login";
import {fireEvent} from '@testing-library/react'

// Test Suite
describe('Login component test suite', () => {

   let container: HTMLDivElement;
   const authServiceMock = {
       login: jest.fn()
   }
   const setUserMock = jest.fn();

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
    
})
