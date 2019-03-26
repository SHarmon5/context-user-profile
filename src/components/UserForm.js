import React from 'react'
import { Form, } from 'semantic-ui-react'
import { UserConsumer } from '../providers/UserProvider'


class UserForm extends React.Component {
  state = { 
    firstname: this.props.firstname,
    lastname: this.props.lastname,
    email: this.props.email,
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value, });

  handleSubmit = (e) => {
    e.preventDefault()
    const user = {...this.state, }
    this.props.updateUser(user)
  }


  render() {
    const { firstname, lastname, email, } = this.state
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label="New First Name"
          type="text"
          name="firstname"
          value={firstname}
          onChange={this.handleChange}
          /> 
        <Form.Input
          label="New Last Name"
          type="text"
          name="lastname"
          value={lastname}
          onChange={this.handleChange}
          /> 
        <Form.Input
          label="New email"
          type="text"
          name="email"
          value={email}
          onChange={this.handleChange}
          /> 
        <Form.Button  color="google plus">Save</Form.Button>
      </Form>
    )
  }
}

const ConnectedUserForm = (props) => {
  return ( 
    <UserConsumer>
      { value => (
        <UserForm
        {...props}
        firstname={value.firstname}
        lastname={value.lastname}
        email={value.email}
        updateUser={value.updateUser}
        />
      )}
    </UserConsumer>
  )
}

export default ConnectedUserForm