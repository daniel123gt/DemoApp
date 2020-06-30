import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, Button, Alert } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

class practica extends Component {

  login = () => {
    this.props.navigation.navigate('Login')
  }

  render() {
    return (
      <View style={styles.container}>

        <LinearGradient
          colors={['#e9e1f9', '#ebebed', '#fbede3']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: '100%',
          }}
        />

        <View style={styles.header}>

          <View style={styles.headerLeft}>
            <Image source={require('../../../assets/logo.png')} style={styles.logo} />
          </View>

        </View>

        <View style={styles.body}>
          <Text style={styles.wel}>Bienvenido</Text>
          <Text style={styles.name}>DemoApp</Text>
          <Text></Text>
        </View>

        <View style={styles.headerRight}>
          <Button title="COMENZAR" color="#ff65a3" onPress={this.login} />
        </View>

        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    flex: 1,
    marginTop: 100
  },
  headerLeft: {
    flex: 1,
    alignItems: 'center'
  },
  headerRight: {
    flex: 0.2,
    marginRight: 20,
    marginLeft: 20,
  },
  body: {
    flex: 1,
    alignItems: 'center'
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain'
  },
  wel: {
    fontSize: 30,
    fontWeight: 'bold',
    color : '#524a65'
  },
  name: {
    fontSize: 18,
    color : '#524a65'
  }
})

export default practica
