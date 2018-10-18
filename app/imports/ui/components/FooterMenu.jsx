import React from 'react';
import { Image, List, Grid } from 'semantic-ui-react';

export default class FooterMenu extends React.Component {
  render() {
    const gridPadding = { paddingTop: '36px', paddingLeft: '160px', paddingRight: '160px', paddingBottom: '25px' };
    const bolded = { fontWeight: 'bold' };
    return (
        <div className="footer-background">
          <Grid container centered style={gridPadding}>
            <Grid.Row columns={4}>
              <Grid.Column rows="2">
                <p style={bolded}>CONNECT WITH US</p>
                <hr/>
                <Grid.Row>
                  <List horizontal>
                    <List.Item>
                      <Image src="https://us.coca-cola.com/content/dam/coke2016/social-images/coke-facebook.png"/>
                    </List.Item>
                    <List.Item>
                      <Image src="https://us.coca-cola.com/content/dam/coke2016/social-images/coke-twitter.png"/>
                    </List.Item>
                    <List.Item>
                      <Image src="https://us.coca-cola.com/content/dam/coke2016/social-images/coke-youtube.png"/>
                    </List.Item>
                    <List.Item>
                      <Image src="https://us.coca-cola.com/content/dam/coke2016/social-images/coke-instagran.png"/>
                    </List.Item>
                  </List>
                </Grid.Row>
                <Grid.Row>
                  <Image src="https://us.coca-cola.com/content/dam/coke2016/social-images/coke-cola.png"/>
                </Grid.Row>
              </Grid.Column>
              <Grid.Column>
                <p style={bolded}>EXPLORE</p>
                <hr/>
                <List>
                  <List.Item>COCA-COLA</List.Item>
                  <List.Item>COKE ZERO SUGAR</List.Item>
                  <List.Item>COKE LIFE</List.Item>
                  <List.Item>DIET COKE</List.Item>
                  <List.Item>REWARDS</List.Item>
                  <List.Item>SIP & SCAN FAQS</List.Item>
                  <List.Item>VENDING</List.Item>
                  <List.Item>EATS</List.Item>
                  <List.Item>GIVE</List.Item>
                  <List.Item>SHOP</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                <p style={bolded}>COKE IN THE USA</p>
                <hr/>
                <List>
                  <List.Item>COCA-COLA JOURNEY</List.Item>
                  <List.Item>SHARE A COKE</List.Item>
                  <List.Item>WORLD OF COCA-COLA</List.Item>
                  <List.Item>COCA-COLA STORE</List.Item>
                  <List.Item>COCA-COLA APP</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                <p style={bolded}>RESOURCES</p>
                <hr/>
                <List>
                  <List.Item>CAREERS</List.Item>
                  <List.Item>COMPANY INFORMATION</List.Item>
                  <List.Item>PARTICIPATING BRANDS</List.Item>
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
    );
  }
}
