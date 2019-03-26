import React from 'react'
import { Card, } from 'semantic-ui-react'
import { UserConsumer } from '../providers/UserProvider'

const User = () => (
  <UserConsumer>
    { value => (
      <Card>
        <Card.Content>
          <Card.Header>{ value.firstname }</Card.Header>
          <Card.Header>{ value.lastname }</Card.Header>
            <Card.Header>{ value.email }</Card.Header>
        </Card.Content>
      </Card>
    )}
  </UserConsumer>
)


export default User