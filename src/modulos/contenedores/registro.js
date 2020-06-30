import React, { Component } from "react";
import { View, Image, StyleSheet } from 'react-native';
import { Container, Content, Card, CardItem, Text, Body, Form, Item, Label, Input, Icon, Header, Button, Row } from "native-base";
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient'

class practica extends Component {

  login = () => {
    this.props.navigation.navigate('Login')
  }

  render() {
    return (
      <Container>
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

        <Content>
          <View style={styles.cabezaDeLogin}>
            <Image
              source={require('../../../assets/logo.png')}
              style={styles.imagenLogin}
            ></Image>
            <Text
              style={styles.tituloLogin}
            >Registro</Text>
          </View>
          <View style={styles.formularioLogin}>
            <Item rounded style={styles.inputUser}>
              <Input placeholder='Correo electrónico' placeholderTextColor='#8982a0' style={styles.inputUserDentro} />
            </Item>
            <Item rounded style={styles.inputUser}>
              <Input placeholder='Nombre de Usuario' placeholderTextColor='#8982a0' style={styles.inputUserDentro} />
            </Item>
            <Item rounded style={styles.inputPass}>
              <Input placeholder='Contraseña' placeholderTextColor='#8982a0' style={styles.inputPassDentro} />
            </Item>
            <Item rounded style={styles.inputPass}>
              <Input placeholder='Confirmar contraseña' placeholderTextColor='#8982a0' style={styles.inputPassDentro} />
            </Item>
          </View>

          <View style={styles.contenedorBoton}>
            <Button block rounded style={styles.botonLogin} >
              <Text>Entrar</Text>
            </Button>
          </View>

          <View style={styles.contenedorRegistro}>
            <Text style={styles.textoRegistro} onPress={this.login}>
              Ya tengo cuenta
                        </Text>
          </View>

        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  //Estilos de cabeza de login

  cabezaDeLogin: {
    paddingTop: 50,
    alignItems: 'center'
  },

  imagenLogin: {
    width: 100,
    height: 100,
    resizeMode: 'contain'
  },

  tituloLogin: {
    padding: 20,
    fontSize: 30,
    color: '#39304b'
  },

  //Estilos del formulario del login

  formularioLogin: {
    padding: 20,
    alignItems: 'center'
  },

  inputUser: {
    marginVertical: 10,
    backgroundColor: '#e1d3ed',
        borderColor: '#e1d3ed'
  },

  inputUserDentro: {
    color: '#fff'
  },

  inputPass: {
    marginVertical: 10,
    backgroundColor: '#e1d3ed',
        borderColor: '#e1d3ed'
  },

  //Estilos del boton de entrar

  contenedorBoton: {
    alignItems: 'center',
    padding: 20
  },

  botonLogin: {
    backgroundColor: '#ff65a3'
  },

  tetoOlvido: {
    marginTop: 20,
    color: '#807996'
  },

  //Estilos de redireccion a registro

  contenedorRegistro: {
    alignItems: 'center',
    padding: 20,
    marginHorizontal: 10,
  },

  textoRegistro: {

    color: '#807996'
  }

})

export default practica