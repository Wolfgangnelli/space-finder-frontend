import React, { Component, SyntheticEvent } from 'react'
import { User } from '../models/user.model'
import { AuthService } from '../services/AuthService'

interface LoginProps {
    authService: AuthService,
    setUser: (user: User) => void
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
        this.setState({
            loginAttenpted: true
        })
        const result = await this.props.authService.login(this.state.userName, this.state.password);

        if (result) {
            this.setState({
                loginSuccesfull: true
            })
            this.props.setUser(result);
        } else {
            this.setState({
                loginSuccesfull: false
            })
        }
    }

    private resetForm = () => {
        this.setState({
            userName: "",
            password: "",
            loginAttenpted: false,
            loginSuccesfull: false
        })
    }

    render() {
        let loginMessage: any;
        if (this.state.loginAttenpted) {
            if (this.state.loginSuccesfull) {
                loginMessage = <p>Login successful</p>
            } else {
                loginMessage = <p>Login failed</p>
            }
        }

        return (
            <div className="container p-6">
                <h2 className="text-center uppercase font-bold text-blue-800 p-2 text-2xl">Please login</h2>
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
                    <div className="flex space-x-2">
                        <input type="submit" value="LOGIN" className="px-4 py-2 cursor-pointer text-white bg-blue-600 hover:bg-blue-500 mt-4 font-semibold" />
                        <input type="button" value="RESET" onClick={this.resetForm} className="px-4 py-2 cursor-pointer text-white bg-yellow-600 hover:bg-yellow-500 mt-4 font-semibold" />
                    </div>
                </form>
                {this.state.loginAttenpted &&
                    <div className="w-full p-6 mt-2 bg-indigo-600 rounded text-white font-semibold">
                        {loginMessage}
                    </div>
                }
            </div>
        )
    }
}
