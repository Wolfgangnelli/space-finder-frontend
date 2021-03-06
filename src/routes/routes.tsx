import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { User } from '../models/user.model'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { Profile } from '../pages/Profile'
import Spaces from '../pages/Spaces'
import { AuthService } from '../services/AuthService'
import { DataService } from '../services/DataService'

interface RoutesProps {
    authService: AuthService,
    dataService: DataService,
    setUser: (user: User) => void
    user: User | undefined
}

export const Routes: React.FC<RoutesProps> = (props) => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/profile">
                <Profile authService={props.authService} user={props.user} />
            </Route>
            <Route path="/login">
                <Login authService={props.authService} setUser={props.setUser} />
            </Route>
            <Route path="/spaces">
                <Spaces dataService={props.dataService} />
            </Route>
        </Switch>
    )
}
