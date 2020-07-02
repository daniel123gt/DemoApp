import React, { Component } from "react";
import { View, Image, StyleSheet } from 'react-native';
import { Container, Content, Card, CardItem, Text, Body, Form, Item, Label, Input, Icon, Header, Button, Row } from "native-base";
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient'

class practica extends Component {

    registro = () => {
        this.props.navigation.navigate('Registro')
    }

    home = () => {
        this.props.navigation.navigate('Home')
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
                            source={require('../../../assets/avatar.png')}
                            style={styles.imagenLogin}
                        ></Image>
                        <Text
                            style={styles.tituloLogin}
                        >Iniciar Sesión</Text>
                    </View>
                    <View style={styles.formularioLogin}>
                        <Item rounded style={styles.inputUser}>
                            <Input placeholder='Nombre de Usuario' placeholderTextColor='#8982a0' style={styles.inputUserDentro} />
                        </Item>
                        <Item rounded style={styles.inputPass}>
                            <Input placeholder='Contraseña' placeholderTextColor='#8982a0' style={styles.inputPassDentro} />
                        </Item>
                        <Text
                            style={styles.tetoOlvido}
                        >¿Olvidé mi contraseña?</Text>
                    </View>

                    <View style={styles.contenedorBoton}>
                        <Button block rounded style={styles.botonLogin} onPress={this.home} >
                            <Text>Entrar</Text>
                        </Button>
                    </View>

                    <View style={styles.contenedorRegistro}>
                        <Text style={styles.textoRegistro} onPress={this.registro}>
                            Aun no estoy registrado
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
        padding: 50,
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
        borderColor: '#8982a0',
    },

    inputUserDentro:{
        color: '#fff',
        textAlign: 'center'
    },

    inputPass: {
        marginVertical: 10,
        backgroundColor: '#e1d3ed',
        borderColor: '#8982a0'
    },

    inputPassDentro: {
        textAlign: 'center'
    },

    //Estilos del boton de entrar

    contenedorBoton: {
        alignItems: 'center',
        padding: 20
    },

    botonLogin: {
        backgroundColor: '#ff65a3'
    },

    tetoOlvido:{
        marginTop: 20,
        color: '#807996',
    },

    //Estilos de redireccion a registro

    contenedorRegistro:{
        alignItems: 'center',
        padding: 20,
        marginHorizontal: 10,
    },

    textoRegistro:{
    
        color: '#807996'
    }

})

export default practica