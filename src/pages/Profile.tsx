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

    state: ProfileState = {
        userAttributes: []
    }

    async componentDidMount() {
        if (this.props.user) {
            const data = await this.props.authService.getUserAttributes(this.props.user);
            if (data) {
                this.setState({
                    userAttributes: data
                })
            }
        }
    }


    private renderUserAttributes = () => {
        const rows = [];
        for (const attribute of this.state.userAttributes) {
            rows.push(
                <tr key={attribute.name}>
                    <td>{attribute.name}</td>
                    <td>{attribute.value}</td>
                </tr>)
        }
        return (
            <table>
                <tbody>
                    {rows}
                </tbody>
            </table>
        )
    }

    render() {
        let profileSpace: any;
        if (this.props.user) {
            profileSpace = <div><h3>Hello {this.props.user.userName}!</h3>Here are your attributes: {this.renderUserAttributes()}</div>
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
