import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { Redirect } from 'react-router';

const { Header } = Layout;

class Headers extends Component{

    constructor(props) {
        super(props);
        this.state = {
          redirectPage:''
        };
      }
    


 clickedJoinUs = () => {
    this.setState({
      redirectPage: <Redirect to = {{pathname:'/joinus/'}} />
    }) 
  }

   clickedSignin = () => {
    this.setState({
      redirectPage: <Redirect to = {{pathname:'/signin/'}} />
    }) 
  }


  clickedWelcome = () => {
    this.setState({
      redirectPage: <Redirect to = {{pathname:'/welcome/'}} />
      }) 
  }


render(){
return ( 
    <div>
              {this.state.redirectPage}

<Header>
    <div />
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={this.props.selectedKey}
      style={{ lineHeight: '64px'}}
    >
      <Menu.Item key="1" onClick={this.clickedWelcome}>Welcome</Menu.Item>
      <Menu.Item key="2" onClick={this.clickedJoinUs}>Register</Menu.Item>
      <Menu.Item key="3" onClick={this.clickedSignin}>Sign in</Menu.Item>
    </Menu>
  </Header>
  </div>
  )
}



}

export default Headers;