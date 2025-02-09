import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity,
} from "react-native";
import Cookies from "js-cookie";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { contextStore } from "../Native/Stack";
export default function Login() {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const {token, setToken} = useContext(contextStore);
	// const [token, setToken] = useState();
	const navigate = useHistory();
    useEffect(()=>{
        const token=Cookies.get('token');
        if(token){
            return navigate.push("/profile")
        }
    },[])
	const handleForm = async () => {
		console.log(email, password);
        // 192.168.239.38
		await axios
			.post("http://192.168.239.38:9090/signin", { email, password })
			.then((res) => {
				console.log(res.data);
				if (res.data.status === 200) {
                    Cookies.set("token",res.data.token);
					setToken(res.data.token);
					navigate.push("/profile");
				} else {
					console.log(res.data.message);
				}
			})
			.catch((err) => {
				console.log(err.data);
			});
	};
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
				Login Page
			</Text>
			<View style={styles.field}>
				<TextInput
					placeholder='Email'
					onChangeText={(e) => setEmail(e)}
					style={styles.inputs}
				></TextInput>
				<TextInput
					placeholder='Password'
					onChangeText={(e) => setPassword(e)}
					style={styles.inputs}
				></TextInput>
				<TouchableOpacity style={styles.btn} onPress={handleForm}>
					<Text style={{ textAlign: "center", fontSize: 26, color: "white" }}>
						Login
					</Text>
				</TouchableOpacity>

				<View style={{ flexDirection: "row", marginVertical: 12 }}>
					<Text style={{ fontSize: 22 }}>Don't have an account? </Text>
					<TouchableOpacity onPress={() => navigate.push("/reg")}>
						<Text style={{ fontSize: 22, color: "blue" }}>Register</Text>
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
