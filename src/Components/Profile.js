import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import Cookies from "js-cookie"
import { useHistory } from "react-router-dom";
import { contextStore } from '../Native/Stack';

export default function Profile() {
    const [data,setData]=useState();
    const navigate = useHistory();
    // const [token,setToken]=useContext(cont)
    // const [token,setToken]=useState()
    const {token, setToken} = useContext(contextStore);
    useEffect(()=>{
        if(token&&!data){
            getHandle()
        }
    },[token,data])
    useEffect(()=>{
        if(!token){
            navigate.push('/')
        }
    },[token])
    const getHandle=async()=>{
        try {
            await axios("http://192.168.239.38:9090/profile",{
                headers:{
                    'x-token':token
                }
            }).then(res=>{
                setData(res.data.user)
            }).catch(err=>{
                console.log(err)
            })
        } catch (error) {
            console.log(error)
        }
    }

    const logout=()=>{
        setToken(null)
        Cookies.remove('token')
    }
  return (
    <View style={{justifyContent:"center",alignItems:"center",backgroundColor:"grey",height:"100vh"}}>
    <Text>User Details</Text>
      <Text style={{fontSize:22,fontWeight:"800"}}>{data?.name}</Text>
      <Text style={{fontSize:22,fontWeight:"800"}}>{data?.email}</Text>

      <TouchableOpacity onPress={logout} style={{backgroundColor:"darkcyan",width:200,height:40,marginVertical:12,justifyContent:"center",alignItems:"center",borderRadius:12}}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}


