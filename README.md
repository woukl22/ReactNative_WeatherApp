# ReactNative_WeatherApp
Studying React Native with make Weather Application from Nomad coder.

<br>

2021.09.28 ~ 2021.10.01

## 
I'm start learning react native in order to make application for club activity.<br>
Learning how to make application with react native by [Nomad coders](nomadcoders.co).<br>
I found some errors when I make this weather app.<br>
I want to log these errors. because there is not much information about what I found.

<br>

I use [snack expo](snack.expo.dev) and my phone(SM-G930).

## Errors
#### 1. This error is appear when use ```weatherOptions[condition].gradient```, ```weatherOptions[condition].iconName```, etc.<br>
```
undefined is not an object (evaluating 'weatherOptions[condition].gradient')
```
Check your ```getLocation()``` function  in 'App.js'.<br>
If there is ```this.setState({ isLoading: false });``` in ```try{}```, delete this code.<br>
Then, you can solve this problem.<br><br>


#### 2. This error is appear in my physical device. Computer simulator in snack expo is worked normally. 

```
Error: "Location provider is unavailable. Make sure that location services are enabled."
```
Change ```await Location.getCurrentPositionAsync()``` function to ```await Location.getLastKnownPositionAsync()``` function.<br>
It's solved when I change this code. 

```
getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();
      // Change from 'const {coords: { latitude, longitude }} = await Location.getCurrentPositionAsync();'
      const {coords: { latitude, longitude }} = await Location.getLastKnownPositionAsync();
      this.getWeather(latitude, longitude);
    } catch (error) {
      console.log(error);
      Alert.alert(error)
      Alert.alert("Can't find you.", 'So sad');
    }
  };
```

*I found solution about this problem from this [github issues](https://github.com/expo/expo/issues/9377).*<br>
