import React from 'react';
import { Grid, Button } from 'semantic-ui-react';

export default class MiddleSection extends React.Component {
  render() {
    const height = { height: '600px' };
    const row1 = { fontSize: '48px', fontWeight: 'bold', paddingBottom: '15px' };
    const row2 = { fontSize: '18px', fontWeight: 'bold', paddingBottom: '15px' };
    const buttonStyle = { backgroundColor: 'white', color: 'red', fontSize: '18px', fontWeight: '400' };
    return (
        <div className="middle-background">
          <Grid textAlign="center" verticalAlign="bottom" container style={height}>
            <Grid.Column rows="3">
              <Grid.Row style={row1}>
                <p>KICK OFF WITH GREAT TASTE</p>
              </Grid.Row>
              <Grid.Row style={row2}>
                <p>DRINK IN THE EXCITEMENT OF THE BIGGEST FOOTBALL GAMES OF THE YEAR WITH COCA-COLA®.</p>
              </Grid.Row>
              <Grid.Row>
                <Button circular style={buttonStyle}>CHECK IT OUT</Button>
              </Grid.Row>
            </Grid.Column>
          </Grid>
        </div>
    );
  }
}
