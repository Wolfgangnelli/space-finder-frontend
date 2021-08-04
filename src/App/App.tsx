import React from 'react';
import '../index.css';
import { User } from '../models/user.model';
import { AuthService } from '../services/AuthService';
import { Routes } from '../routes/routes';
import { Navbar } from '../components/Navbar';

interface AppState {
  user: User | undefined
}

export class App extends React.Component<{}, AppState> {

  state: AppState = {
    user: undefined
  }

  private authService: AuthService = new AuthService();

  private setUser = (user: User) => {
    this.setState({
      user
    })
  }

  render() {
    return (
      <div className="max-w-7xl mx-auto min-h-screen">
        <Navbar user={this.state.user} />
        <Routes authService={this.authService} setUser={this.setUser} user={this.state.user} />
      </div>
    )
  }
}



