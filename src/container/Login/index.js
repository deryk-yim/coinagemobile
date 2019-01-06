import React, { Component } from 'react';
import Layout from '../../component/Layout';
import { LoginInput, Button } from '../../component/Input';
import API from '../../api-request';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  onSubmit = () => {
    const { email, password } = this.state;
    const profile = { email, password };
    API.profile.login(profile);
  }

  render() {
    const { navigation } = this.props;
    const { email, password } = this.state;
    return (
      <Layout navigation={navigation}>
        <LoginInput
          value={email}
          placeholder="EMAIL"
          onChangeText={text => this.setState({ email: text })}
        />
        <LoginInput
          value={password}
          placeholder="PASSWORD"
          onChangeText={text => this.setState({ password: text })}
        />
        <Button label="LOGIN" onPress={this.onSubmit} />
      </Layout>
    );
  }
}
