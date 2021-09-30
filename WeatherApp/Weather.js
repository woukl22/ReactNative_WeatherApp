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
    iconName: "weather-lightning-rainy",
    gradient: ["", ""]
  },
  Drizzle: {
    iconName: "weather-hail",
    gradient: ["", ""]
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["", ""]
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["", ""]
  },
  Atmosphere: {
    iconName: "weather-fog",
    gradient: ["", ""]
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["", ""]
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["", ""]
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["", ""]
  },
  Smoke: {
    iconName: "weather-cloudy-alert",
    gradient: ["", ""]
  },
  Dust: {
    iconName: "weather-cloudy-alert",
    gradient: ["", ""]
  },
  Fog: {
    iconName: "weather-fog",
    gradient: ["", ""]
  },
  Sand: {
    iconName: "weather-fog",
    gradient: ["", ""]
  },
  Ash: {
    iconName: "weather-fog",
    gradient: ["", ""]
  },
  Squall: {
    iconName: "weather-pouring",
    gradient: ["", ""]
  },
  Tornado: {
    iconName: "weather-tornado",
    gradient: ["", ""]
  }
}

export default function Weather({temp, condition}) {
  return (
    <LinearGradient 
      colors={weatherOptions[condition].gradient} 
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          size={96}
          name={weatherOptions[condition].iconName}
          color="white" 
        />
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