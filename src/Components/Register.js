import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
// import ToastManager, { Toast } from "toastify-react-native";
export default function Register() {
    const navigate = useHistory();
	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
    
    
	const handleForm=async()=>{
        await axios.post('http://192.168.239.38:9090/signup',{email,name,password}).then((res)=>{
            if(res.data.status===200){
                console.log(res.data.message)
                navigate.navigate("login")
            }else{
                console.log(res.data.message)
            }
        }).catch((err)=>{
            console.log(err.data);
        })
}
	return (
		<View style={styles.Authen}>
			<Text
				style={{
					fontSize: 32,
					fontWeight: "700",
					textAlign: "center",
					marginVertical: "22",
				}}
			>
				Register Page
			</Text>
			<View style={styles.field}>
				<TextInput placeholder='Name' onChangeText={e=>setName(e)} style={styles.inputs}></TextInput>
				<TextInput placeholder='Email' onChangeText={e=>setEmail(e)} style={styles.inputs}></TextInput>
				<TextInput placeholder='Password' onChangeText={e=>setPassword(e)} style={styles.inputs}></TextInput>
				<TouchableOpacity style={styles.btn} onPress={handleForm}>
					<Text style={{ textAlign: "center", fontSize: 26, color: "white" }}>
						Register
					</Text>
				</TouchableOpacity>
				<View style={{ flexDirection: "row", marginVertical: 12 }}>
					<Text style={{ fontSize: 22 }}>Already have an account?</Text>
					<TouchableOpacity onPress={() => navigate.push("/")}>
						<Text style={{ fontSize: 22, color: "blue" }}>Login</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	Authen: {
		height: "100vh",
		justifyContent: "center",
		alignContent: "center",
	},
	field: {
		width: "auto",
        paddingHorizontal:12,
		marginHorizontal: "auto",
	},
	inputs: {
		borderWidth: 1,
		borderColor: "grey",
		borderRadius: 8,
		height: 60,
		marginVertical: 12,
		fontSize: 22,
	},
	btn: {
		backgroundColor: "skyblue",
		height: 60,
		borderWidth: 1,
		borderColor: "grey",
		borderRadius: 8,
		justifyContent: "center",
	},
});
