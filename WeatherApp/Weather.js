import React from "react";
import {View, Text, StyleSheet, StatusBar} from "react-native";
import PropTypes from "prop-types";
import { LinearGradient} from "expo-linear-gradient";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const weatherOptions = {
  Haze: {
    iconName: "weather-hail",
    gradient: ["#3D7EAA", "#FFE47A"],
    title: "",
    subtitle: ""
  },
  Thunderstorm: {
    iconName: "weather-lightning-rainy",
    gradient: ["", ""],
    title: "",
    subtitle: ""
  },
  Drizzle: {
    iconName: "weather-hail",
    gradient: ["", ""],
    title: "",
    subtitle: ""
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["", ""],
    title: "",
    subtitle: ""
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["", ""],
    title: "",
    subtitle: ""
  },
  Atmosphere: {
    iconName: "weather-fog",
    gradient: ["", ""],
    title: "",
    subtitle: ""
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["", ""],
    title: "",
    subtitle: ""
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["", ""],
    title: "",
    subtitle: ""
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["", ""],
    title: "",
    subtitle: ""
  },
  Smoke: {
    iconName: "weather-cloudy-alert",
    gradient: ["", ""],
    title: "",
    subtitle: ""
  },
  Dust: {
    iconName: "weather-cloudy-alert",
    gradient: ["", ""],
    title: "",
    subtitle: ""
  },
  Fog: {
    iconName: "weather-fog",
    gradient: ["", ""],
    title: "",
    subtitle: ""
  },
  Sand: {
    iconName: "weather-fog",
    gradient: ["", ""],
    title: "",
    subtitle: ""
  },
  Ash: {
    iconName: "weather-fog",
    gradient: ["", ""],
    title: "",
    subtitle: ""
  },
  Squall: {
    iconName: "weather-pouring",
    gradient: ["", ""],
    title: "",
    subtitle: ""
  },
  Tornado: {
    iconName: "weather-tornado",
    gradient: ["", ""],
    title: "",
    subtitle: ""
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
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
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
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10
  },
  subtitle: {
    fontSize: 24,
    fontWeight: "600",
    color: "white"
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start"
  }
})