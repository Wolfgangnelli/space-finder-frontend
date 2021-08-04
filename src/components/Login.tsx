import React, { Component } from 'react'
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

export class Login extends Component<LoginProps, LoginState> {

    state: LoginState = {
        userName: "",
        password: "",
        loginAttenpted: false,
        loginSuccesfull: false
    }

    render() {
        return (
            <div className="container p-6">
                <h2 className="text-center uppercase font-bold text-blue-800 p-2">Please login</h2>
                <form className="mt-8 rounded shadow-md p-6 flex flex-col items-center">
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="userName">Username</label>
                            <input type="text" value={this.state.userName} id="userName" name="userName" className="border rounded ml-1 focus:border-black" />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input type="password" value={this.state.password} name="password" id="password" className="border rounded ml-1 focus:border-black" />
                        </div>
                    </div>
                    <input type="submit" value="LOGIN" className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-500 mt-4 font-semibold" />
                </form>
            </div>
        )
    }
}
