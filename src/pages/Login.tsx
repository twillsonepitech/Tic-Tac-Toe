import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../theme/index.css'
import bgLoginPage from '../ressources/bgLoginPage.jpg'
import { Input, Button } from '@chakra-ui/react'
import { FaTwitter, FaGoogle } from 'react-icons/fa'

export default class Login extends Component {
  render() {
    return (
      <>

        <div id="parentContainer" className="parent">
          <div id="containerLogin" className="child1">
            <img src={bgLoginPage} alt="bgLoginPage" className="rotation"/>
          </div>

          <div id="containerLogin" className="child2">
            <h1 style={{ fontSize: '30px', fontWeight: 'bold'}}>Login</h1>
            <div id="underline" className="styleUnderline"></div>
            <div id="input" className="styleInput">
              <Input variant='flushed' placeholder='Username' size='lg'/>
              <br/><br/><br/>
              <Input variant='flushed' placeholder='Email' size='lg'/>
              <br/><br/><br/>
              <Input variant='flushed' placeholder='Password' size='lg'/>
            </div>
              <div id="forgotPassword" className="forgotpassword">
                <p style={{fontSize: "12px", color: "gray"}}>Forgot password</p>
              </div>
              <div id="btnLogin" style={{textAlign: "center", paddingTop: "50px"}}>
                <Button colorScheme='purple' size={"lg"} paddingLeft={75} paddingRight={75}>Login</Button>
              </div>
              <div id="btnLogin" style={{textAlign: "center", paddingTop: "50px"}}>
                <Button colorScheme='google' leftIcon={<FaGoogle />} backgroundColor="#AAB8C2" marginLeft="5px"> Google </Button>
                <Button colorScheme='twitter' leftIcon={<FaTwitter />} marginLeft="5px"> Twitter </Button>
              </div>
              <div id="linkSignUp" style={{textAlign: "center", paddingTop: "30px"}}>
                <p style={{fontSize: "12px", color: "gray"}}>Don't have an account: Sign up</p>
              </div>
          </div>

        </div>
      </>
    )
  }
}
