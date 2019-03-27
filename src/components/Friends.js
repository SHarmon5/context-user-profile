import React from "react";
import { Card, } from "semantic-ui-react";
import { FriendConsumer } from '../providers/FriendProvider'



const Friends = () => (
  <FriendConsumer>
    {value => (
      <div>
        {value.friends.map(friend => {
          return (
            <Card>
              <Card.Content>
                <Card.Header>First Name: {friend.firstname}</Card.Header>
                <Card.Header>Last Name: {friend.lastname}</Card.Header>
                <Card.Header>How Long: {friend.longevity}</Card.Header>
              </Card.Content>
            </Card>
          )
        })}
      </div>
    )}
  </FriendConsumer>
)


export default Friends