import React from 'react';
import '../index.css';
import { User } from '../models/user.model';
import { AuthService } from '../services/AuthService';

interface AppState {
  user: User | undefined
}

export class App extends React.Component<{}, AppState> {

  private authService: AuthService = new AuthService();

  render() {
    return <div>App works</div>;
  }
}



