import React from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';
import { Constants } from 'expo';
import { createStackNavigator } from 'react-navigation';


class WelcomePage extends React.Component {
  static navigationOptions: {
    title: 'Welcome',
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Here is the Welcome Page / Splash Screen / Launch Screen (whatever you
          like to call it).
        </Text>
        <Text style={styles.paragraph}>
          Press the button below to continue.
        </Text>
        <TouchableHighlight style={styles.btnContinue} onPress={() => this.props.navigation.navigate('Tabbed')}>
          <Text style={styles.btnText}>Continue</Text>
      </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
    alignItems: 'center'
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
  },
  btnContinue: {
    width: 100,
    height: 30,
    backgroundColor: '#CCF',
  },
  btnText: {
    textAlign: 'center',
    lineHeight: 30
  }
});

export default WelcomePage;
