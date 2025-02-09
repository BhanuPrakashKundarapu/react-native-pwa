import { View, Text, StyleSheet } from 'react-native'
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import React, { createContext, useEffect, useState } from 'react'
import Login from '../Components/Login';
import Register from '../Components/Register';
import Profile from '../Components/Profile';
import Cookies from "js-cookie"
export const contextStore=createContext()
export default function Stack() {
    const [token,setToken]=useState()
    useEffect(()=>{
        const tn=Cookies.get("token")
        setToken(tn)
    },[token])
  return (
    <contextStore.Provider value={{token,setToken}}>
    <Router >
      <View>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/reg" component={Register} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </View>
    </Router>
    </contextStore.Provider>
  )
}
const styles=StyleSheet.create({
  container: {
        flex: 1,
      },
})