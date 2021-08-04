import React, { Component, SyntheticEvent } from 'react'
import { AuthService } from '../services/AuthService'

interface LoginProps {
    authService: AuthService
}

interface LoginState {
    userName: string,
    password: string,
    loginAttenpted: boolean,
    loginSuccesfull: boolean
}

interface CustomEvent {
    target: HTMLInputElement
}

export class Login extends Component<LoginProps, LoginState> {

    state: LoginState = {
        userName: "",
        password: "",
        loginAttenpted: false,
        loginSuccesfull: false
    }

    private setUserName = (event: CustomEvent) => {
        this.setState({
            userName: event.target.value
        })
    }
    private setUserPassword = (event: CustomEvent) => {
        this.setState({
            password: event.target.value
        })
    }

    private handleSubmit = async (event: SyntheticEvent) => {
        event.preventDefault();
        const result = await this.props.authService.login(this.state.userName, this.state.password);

        if (result) {
            console.log(result);
        } else {
            console.log('wrong login');
        }
    }

    render() {
        return (
            <div className="container p-6">
                <h2 className="text-center uppercase font-bold text-blue-800 p-2">Please login</h2>
                <form className="mt-8 rounded shadow-md p-6 flex flex-col items-center" onSubmit={this.handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="userName">Username</label>
                            <input type="text" value={this.state.userName} onChange={e => this.setUserName(e)} id="userName" name="userName" className="border rounded ml-1 focus:border-black" />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input type="password" value={this.state.password} onChange={e => this.setUserPassword(e)} name="password" id="password" className="border rounded ml-1 focus:border-black" />
                        </div>
                    </div>
                    <input type="submit" value="LOGIN" className="px-4 py-2 cursor-pointer text-white bg-blue-600 hover:bg-blue-500 mt-4 font-semibold" />
                </form>
            </div>
        )
    }
}
