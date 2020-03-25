// import React from "react";
// import { Divider } from "semantic-ui-react";

// function LeftMenuBar() {
//   return (
//     <Divider>
//       <h2>Menu</h2>
//       <ul>
//         <li>Accounts</li>
//         <li>Transfer & Pay</li>
//         <li>Send Money with Zelle</li>
//         <li>Messages</li>
//         <li>Alerts</li>
//         <li>Documents</li>
//         <li>Settings</li>
//         <li>Offers & Products</li>
//       </ul>
//     </Divider>
//   );
// }

// export default LeftMenuBar;
import React from 'react'
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'

const LeftMenuBar = () => (
  <Segment placeholder>
    <Grid columns={2} relaxed='very' stackable>
      <Grid.Column>
        <Form>
          <Form.Input
            icon='user'
            iconPosition='left'
            label='Username'
            placeholder='Username'
          />
          <Form.Input
            icon='lock'
            iconPosition='left'
            label='Password'
            type='password'
          />

          <Button content='Login' primary />
        </Form>
      </Grid.Column>

      <Grid.Column verticalAlign='middle'>
        <Button content='Sign up' icon='signup' size='big' />
      </Grid.Column>
    </Grid>

    <Divider vertical>Or</Divider>
  </Segment>
)

export default LeftMenuBar