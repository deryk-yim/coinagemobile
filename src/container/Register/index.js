import React, { Component } from 'react';
import Layout from '../../component/Layout';
import { LoginInput, Button } from '../../component/Input';
import API from '../../api-request';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordConfirm: '',
    };
  }

  onSubmit = () => {
    const { email, password, passwordConfirm } = this.state;
    const profile = {
      email,
      password,
      'password-confirm': passwordConfirm,
    };
    console.log(profile);
    API.profile.register(profile);
  }

  render() {
    const { email, password, passwordConfirm } = this.state;
    return (
      <Layout>
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
        <LoginInput
          value={passwordConfirm}
          placeholder="RETYPE PASSWORD"
          onChangeText={text => this.setState({ passwordConfirm: text })}
        />
        <Button content="REGISTER" onPress={this.onSubmit} />
      </Layout>
    );
  }
}
