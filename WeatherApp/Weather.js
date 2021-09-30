import React from "react";
import {View, Text, StyleSheet, StatusBar} from "react-native";
import PropTypes from "prop-types";
import { LinearGradient} from "expo-linear-gradient";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const weatherOptions = {
  Haze: {
    iconName: "weather-hail",
    gradient: ["#3D7EAA", "#FFE47A"],
    title: "Haze",
    subtitle: "안개가 껴요"
  },
  Thunderstorm: {
    iconName: "weather-lightning-rainy",
    gradient: ["#FFE000", "#799F0C"],
    title: "Thunderstorm",
    subtitle: "천둥 번개를 동반한 폭풍이 와요"
  },
  Drizzle: {
    iconName: "weather-hail",
    gradient: ["#2ebf91", "#8360c3"],
    title: "Drizzle",
    subtitle: "이슬비가 내려요"
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#000046", "#1CB5E0"],
    title: "Rain",
    subtitle: "비가 내려요"
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#E4E5E6", "#00416A"],
    title: "Snow",
    subtitle: "눈이 내려요"
  },
  Atmosphere: {
    iconName: "weather-fog",
    gradient: ["#E8CBC0", "#636FA4"],
    title: "Atmosphere",
    subtitle: ""
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#2980B9", "#6DD5FA", "#FFFFFF"],
    title: "Clear",
    subtitle: "맑은 날이에요"
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#6D6027", "#D3CBB8"],
    title: "Clouds",
    subtitle: "흐린 날이에요"
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#bdc3c7", "#2c3e50"],
    title: "Mist",
    subtitle: "안개가 껴요"
  },
  Smoke: {
    iconName: "weather-cloudy-alert",
    gradient: ["#ffd89b", "#19547b"],
    title: "Smoke",
    subtitle: "연기가 나요"
  },
  Dust: {
    iconName: "weather-cloudy-alert",
    gradient: ["#3b8d99", "#6b6b83", "#aa4b6b"],
    title: "Dust",
    subtitle: "먼지가 많아요"
  },
  Fog: {
    iconName: "weather-fog",
    gradient: ["#1f4037", "#99f2c8"],
    title: "Fog",
    subtitle: "안개가 껴요"
  },
  Sand: {
    iconName: "weather-fog",
    gradient: ["#ffd452", "#544a7d"],
    title: "Sand",
    subtitle: "황사에요"
  },
  Ash: {
    iconName: "weather-fog",
    gradient: ["#659999", "#f4791f"],
    title: "Ash",
    subtitle: "재가 날려요"
  },
  Squall: {
    iconName: "weather-pouring",
    gradient: ["#1565C0", "#b92b27"],
    title: "Squall",
    subtitle: "스콜이 와요"
  },
  Tornado: {
    iconName: "weather-tornado",
    gradient: ["#3E5151", "#DECBA4"],
    title: "Tornado",
    subtitle: "토네이도가 와요"
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
    justifyContent: "flex-start",
    paddingHorizontal: 20
  }
})