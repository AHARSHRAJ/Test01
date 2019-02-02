import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Constants } from 'expo';

class Demo2Page extends React.Component {
  static navigationOptions = {
    title: 'Demo Page 2',
    tabBarLabel: 'Home',
    tabBarIcon: ({ tintColor }) => (
		  	<Image
				source={require('./assets/tab_fav.png')}
				style={[styles.icon]}
			  />
		),
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Demo Page 2
        </Text> 
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
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
  },
});

export default Demo2Page;
