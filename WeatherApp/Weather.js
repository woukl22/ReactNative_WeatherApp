import React from "react";
import {View, Text, StyleSheet, StatusBar} from "react-native";
import PropTypes from "prop-types";
import { LinearGradient} from "expo-linear-gradient";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const weatherOptions = {
  Haze: {
    iconName: "weather-hail",
    gradient: ["#3D7EAA", "#FFE47A"]
  },
  Thunderstorm: {
    iconName: "",
    gradient: ["", ""]
  },
  Drizzle: {
    iconName: "",
    gradient: ["", ""]
  },
  Rain: {
    iconName: "",
    gradient: ["", ""]
  },
  Snow: {
    iconName: "",
    gradient: ["", ""]
  },
  Atmosphere: {
    iconName: "",
    gradient: ["", ""]
  },
  Clear: {
    iconName: "",
    gradient: ["", ""]
  },
  Clouds: {
    iconName: "",
    gradient: ["", ""]
  },
  Mist: {
    iconName: "",
    gradient: ["", ""]
  },
  Smoke: {
    iconName: "",
    gradient: ["", ""]
  },
  Dust: {
    iconName: "",
    gradient: ["", ""]
  },
  Fog: {
    iconName: "",
    gradient: ["", ""]
  },
  Sand: {
    iconName: "",
    gradient: ["", ""]
  },
  Ash: {
    iconName: "",
    gradient: ["", ""]
  },
  Squall: {
    iconName: "",
    gradient: ["", ""]
  },
  Tornado: {
    iconName: "",
    gradient: ["", ""]
  }
}

export default function Weather({temp, condition}) {
  return (
    <LinearGradient colors={weatherOptions[condition].gradient} style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
        size={96}
        name={weatherOptions["Haze"].iconName}
        color="white" />
        <Text style={styles.temp}>{temp}˚</Text>
      </View>
      <View style={styles.halfContainer}>
      </View>
    </ LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Mist",
    "Smoke",
    "Haze",
    "Dust",
    "Fog",
    "Sand",
    "Ash",
    "Squall",
    "Tornado"
  ]).isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  temp: {
    fontSize: 42,
    color: "white"
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

// Error: "Location provider is unavailable. Make sure that location services are enabled." in /data/user/0/host.exp.exponent/files/.expo-internal/1f7e9c537baf26a306098eece9b8f9b9:29:1112 << /data/user/0/host.exp.exponent/files/.expo-internal/1f7e9c537baf26a306098eece9b8f9b9:414:566 <<  << l