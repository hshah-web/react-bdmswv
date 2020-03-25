import React from "react";
import '../style.css';
import LeftMenuBar from "./leftmenubar";
import RightPanel from "./rightpanel";
import { Divider, Grid, Segment } from "semantic-ui-react";

function Panel() {
  return (
    <Segment>
      <Grid columns={2} relaxed='very'>
        <Grid.Column>
          <LeftMenuBar />
        </Grid.Column>
        <Grid.Column>
          <RightPanel />
        </Grid.Column>
      </Grid>
    <Divider vertical></Divider>
  </Segment>
  );
}

export default Panel;