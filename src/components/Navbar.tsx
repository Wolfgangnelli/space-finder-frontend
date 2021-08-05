import React, { Component } from 'react'
import { User } from '../models/user.model'
import { Link } from 'react-router-dom'

export class Navbar extends Component<{ user: User | undefined }> {
    render() {
        let loginLogOut: any;
        if (this.props.user) {
            loginLogOut = <Link to="/logout" className="h-full py-1 px-2 text-white font-semibold hover:text-indigo-500 flex items-center">{this.props.user.userName}</Link>
        } else {
            loginLogOut = <Link to="/login" className="h-full py-1 px-2 text-white font-semibold hover:text-indigo-500 flex items-center">Login</Link>
        }

        return (
            <div className="h-14 bg-indigo-700 flex items-center justify-evenly">
                <div className="flex items-center justify-self-start">
                    <Link to="/" className="h-full py-1 px-2 text-white font-semibold hover:text-indigo-500 flex items-center">Home</Link>
                    <Link to="/profile" className="h-full py-1 px-2 text-white font-semibold hover:text-indigo-500 flex items-center">Profile</Link>
                    <Link to="/spaces" className="h-full py-1 px-2 text-white font-semibold hover:text-indigo-500 flex items-center">Spaces</Link>
                </div>
                {loginLogOut}
            </div>
        )
    }
}
