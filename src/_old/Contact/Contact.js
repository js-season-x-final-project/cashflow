import React, { Component, Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Contact extends Component {

  state = {
    email: '',
    subject: '',
    message: '',
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Fragment>
        <form>
          <TextField
            required
            label="Email"
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <TextField
            required
            label="Subject"
            name="subject"
            value={this.state.subject}
            onChange={this.handleChange}
          />
          <TextField
            required
            multiline
            rows={4}
            label="Message"
            name='message'
            value={this.state.message}
            onChange={this.handleChange}
          />
          <Button onClick={() => this.sendEmail()}>Send</Button>
        </form>
      </Fragment >
    )
  }
}

export default Contact;