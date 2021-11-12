import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
const { height, width } = Dimensions.get("screen");
import { FONTS } from "../constants";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.loginBox}>
        <Text style={styles.welcomeText}>Welcome back!</Text>
        <InputField
          label="Email"
          value={email}
          setValue={setEmail}
          secureTextEntry={false}
        />
        <InputField
          label="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.singinTextContainer} onPress={() => {}}>
          <Text style={styles.signinText}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: { flex: 1 },
  loginBox: {
    backgroundColor: "#EDEDED",
    width: width * 0.9,
    alignSelf: "center",
    marginTop: height * 0.21,
    height: "auto",
  },
  welcomeText: {
    fontFamily: FONTS.Poppins,
    color: "#5E81E0",
    fontSize: 24,
    alignSelf: "center",
    paddingTop: 10,
    fontWeight: "bold",
  },
  label: {
    fontSize: 18,
    fontFamily: FONTS.Poppins,
    color: "#7B7B7B",
    paddingLeft: 25,
    fontWeight: "bold",
  },
  inputField: {
    borderWidth: 2,
    borderColor: "#858585",
    height: 45,
    width: width * 0.78,
    color: "#858585",
    alignSelf: "center",
    borderRadius: 5,
    marginTop: 10,
  },
  signinText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    alignSelf: "center",
    fontFamily: FONTS.Poppins,
    paddingTop: 10,
  },
  singinTextContainer: {
    backgroundColor: "#5E81E0",
    width: width * 0.78,
    alignSelf: "center",
    marginTop: 40,
    height: 45,
    borderRadius: 5,
    marginBottom: 40,
  },
});

const InputField = ({ label, value, setValue, secureTextEntry }) => {
  return (
    <View style={{ marginTop: 20 }}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        onChange={setValue}
        style={styles.inputField}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};
