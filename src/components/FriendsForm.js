import React from 'react'
import { Form, } from 'semantic-ui-react'
import { FriendConsumer } from '../providers/FriendProvider'


class FriendsForm extends React.Component {
  state = { 
    firstname: this.props.firstname,
    lastname: this.props.lastname,
    longevity: this.props.longevity,
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value, });

  handleSubmit = (e) => {
    e.preventDefault()
    const friend = {...this.state, }
    this.props.updateFriend(friend)
  }


  render() {
    const { firstname, lastname, longevity, } = this.state
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
           <Form.Select
          label="Freindship Longevity"
          name="longevity"
          value={longevity}
          onChange={this.handleChange}
          options={friendshipLongevity}
        />
        <Form.Button  color="google plus">Save</Form.Button>
      </Form>
    )
  }
}

const friendshipLongevity = [
  { key: "<5", text: "New Friend", value: "New Friend", },
  { key: ">5", text: "Known a while", value: "Known a while", },
  { key: "<10", text: "Good friend", value: "Good friend", },
  { key: ">10", text: "OLd friend", value: "OLd friend", },
];



const ConnectedFriendsForm = (props) => {
  return ( 
    <FriendConsumer>
      { value => (
        <FriendsForm
        {...props}
        firstname={value.firstname}
        lastname={value.lastname}
        email={value.email}
        updateFriend={value.updateFriend}
        />
      )}
    </FriendConsumer>
  )
}

export default ConnectedFriendsForm