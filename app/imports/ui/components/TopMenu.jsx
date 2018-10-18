import React from 'react';
import { Menu, Image, Dropdown, Grid } from 'semantic-ui-react';

export default class TopMenu extends React.Component {
  render() {
    const navBar = { paddingRight: '32px', paddingLeft: '32px', height: '90px' };
    const gridInline = { display: 'inline-block' };
    const brandsColor = { color: 'red' };
    const logoSize = { height: '50px', width: '90px' };
    return (
        <div className="topmenu">
          <Menu borderless fixed="top" style={navBar} className="topmenu">
            <Menu.Item>
              <Image style={logoSize} src="https://us.coca-cola.com/content/dam/coke2016/navheader/cc-disc-white.png"/>
            </Menu.Item>
            <Dropdown item pointing text="OUR BRANDS" style={brandsColor} icon="caret right">
              <Dropdown.Menu>
                <Dropdown.Item>COCA-COLA</Dropdown.Item>
                <Dropdown.Item>COKE ZERO SUGAR</Dropdown.Item>
                <Dropdown.Item>COKE LIFE</Dropdown.Item>
                <Dropdown.Item>COCA-COLA LOCAL FLAVORS</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item pointing text="SHOP" icon="caret right">
              <Dropdown.Menu>
                <Grid container style={gridInline}>
                  <Grid.Row columns={2}>
                    <Grid.Column>
                      <Image src="https://us.coca-cola.com/content/dam/coke2016/store/nav/nav_coke_store.png"/>
                    </Grid.Column>
                    <Grid.Column>
                      <Image src="https://us.coca-cola.com/content/dam/coke2016/store/nav/nav_amazon.png"/>
                      <Image src="https://us.coca-cola.com/content/dam/coke2016/store/nav/peapod.png"/>
                      <Image src="https://us.coca-cola.com/content/dam/coke2016/store/nav/nav_product_locator.png"/>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item>GIVE</Menu.Item>
            <Menu.Item>REWARDS</Menu.Item>
            <Menu.Item fitted position="right">
              <Dropdown item pointing icon="th">
                <Dropdown.Menu>
                  <Dropdown.Header>VISIT OUR OTHER SITES</Dropdown.Header>
                  <Dropdown.Item>Coca-Cola Store</Dropdown.Item>
                  <Dropdown.Item>Diet Coke</Dropdown.Item>
                  <Dropdown.Item>Coca-Cola Journey</Dropdown.Item>
                  <Dropdown.Item>Coca-Cola Renew</Dropdown.Item>
                  <Dropdown.Item>World of Coca-Cola</Dropdown.Item>
                  <Dropdown.Item>Coca-Cola Product Facts</Dropdown.Item>
                  <Dropdown.Item>Coca-Cola App</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>
            <Dropdown item pointing icon="user">
              <Dropdown.Menu>
                <Dropdown.Item>LOGIN</Dropdown.Item>
                <Dropdown.Item>SIGN UP</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item icon="bell"/>
          </Menu></div>
    );
  }
}
