import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Icon } from "react-native-elements";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

import { setToken } from "../../actions/user";

import { URL_LOGIN } from "../../urls";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const dispatch = useDispatch();
  const setUserToken = (token) => dispatch(setToken(token));

  const handleLoginButtonPress = () => {
    console.debug("Login process started");
    fetch(URL_LOGIN, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error("Network response was not ok!");
        }
      })
      .then((json) => {
        setUserToken(json["accessToken"]);
        console.debug("Login process completed successfully");
        setUsername("");
        setPassword("");
        navigation.navigate("Home");
      })
      .catch((error) => {
        console.debug("Error during authorization: " + error);
      });
  };

  return (
    <ImageBackground
      source={require("../../img/background.jpg")}
      style={styles.loginBackground}
      resizeMode='cover'
    >
      <View style={styles.loginContainer} />
      <View style={styles.container}>
        <Text style={styles.loginHeader}> FixMe </Text>

        <View style={styles.inputContainer}>
          <View style={styles.icon}>
            <Icon name='user' type='font-awesome' color='#fff' />
          </View>
          <TextInput
            style={styles.input}
            placeholder='Username'
            placeholderTextColor='#fff'
            value={username}
            onChangeText={(value) => setUsername(value)}
          />
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.icon}>
            <Icon name='lock' type='font-awesome' color='#fff' />
          </View>
          <TextInput
            style={styles.input}
            placeholder='Password'
            placeholderTextColor='#fff'
            secureTextEntry={true}
            value={password}
            onChangeText={(value) => setPassword(value)}
          />
        </View>

        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button}
          onPress={handleLoginButtonPress}
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

export default Login;
