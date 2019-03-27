import React from 'react'

const FriendContext = React.createContext()

export const FriendConsumer = FriendContext.Consumer

class FriendProvider extends React.Component {
  state = {
    friends: [
      {
        id: "1",
        firstname: "My",
        lastname: "Dad",
        longevity: "Old Friend"
      },

      {
        id: "2",
        firstname: "",
        lastname: "",
        longevity: ""
      },
    ],
    updateFriend: (friend) => this.updateFriend(friend),
  }

  updateFriend = (friend) => {
    this.setState({ ...friend })
  }

  render() {
    return (
      <FriendContext.Provider value={this.state}>
        {this.props.children}
      </FriendContext.Provider>
    )
  }
}

export default FriendProvider
