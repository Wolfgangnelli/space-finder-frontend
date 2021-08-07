import React, { Component } from 'react'
import { User } from '../models/user.model'
import { Link } from 'react-router-dom'

export class Navbar extends Component<{ user: User | undefined }> {
    render() {
        let loginLogOut: any;
        if (this.props.user) {
            loginLogOut = <Link data-testid='logout-link' to="/logout" className="h-full py-1 px-2 text-white font-semibold hover:text-indigo-500 flex items-center">{this.props.user.userName}</Link>
        } else {
            loginLogOut = <Link data-testid='login-link' to="/login" className="h-full py-1 px-2 text-white font-semibold hover:text-indigo-500 flex items-center">Login</Link>
        }

        return (
            <div className="h-14 bg-indigo-700 flex items-center justify-evenly">
                <div className="flex items-center justify-self-start">
                    <Link data-testid='home-link' to="/" className="h-full py-1 px-2 text-white font-semibold hover:text-indigo-500 flex items-center">Home</Link>
                    <Link data-testid='profile-link' to="/profile" className="h-full py-1 px-2 text-white font-semibold hover:text-indigo-500 flex items-center">Profile</Link>
                    <Link data-testid='spaces-link' to="/spaces" className="h-full py-1 px-2 text-white font-semibold hover:text-indigo-500 flex items-center">Spaces</Link>
                </div>
                {loginLogOut}
            </div>
        )
    }
}
