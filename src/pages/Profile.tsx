import React, { Component } from 'react'
import { User, UserAttributes } from '../models/user.model'
import { AuthService } from '../services/AuthService'
import { Link } from 'react-router-dom'

interface ProfileState {
    userAttributes: UserAttributes[]
}

interface ProfileProps {
    user: User | undefined,
    authService: AuthService
}

export class Profile extends Component<ProfileProps, ProfileState> {
    render() {
        let profileSpace: any;
        if (this.props.user) {
            profileSpace = <h3>Hello {this.props.user.userName}!</h3>
        } else {
            profileSpace = <div>Please login <Link to="/login" className="px-4 py-2 rounded bg-purple-600 text-white font-semibold">Login</Link></div>
        }

        return (
            <div className="min-h-screen">
                <h1>Welcome to profile</h1>
                <div className="text-center h-full">
                    {profileSpace}
                </div>
            </div>
        )
    }
}
