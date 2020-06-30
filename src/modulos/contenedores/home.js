import React, { Component } from "react";
import { View, Image, StyleSheet } from 'react-native';
import { Container, Content, Card, CardItem, Text, Body, Form, Item, Label, Input, Icon, Header, Button, Row } from "native-base";
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient'

class practica extends Component {


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

                    <View style={styles.cabezaDeHome}>
                        <Image
                            source={require('../../../assets/avatar.png')}
                            style={styles.imagenHome}
                        ></Image>
                        <Text
                            style={styles.tituloLogin}
                        >Hola Usuario</Text>
                    </View>

                    <View style={styles.formularioLogin}>
                        <Item rounded style={styles.inputUser}>
                            <Input placeholder='Nombre de Usuario' placeholderTextColor='#8982a0' style={styles.inputUserDentro} />
                        </Item>
                    </View>

                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({

    cabezaDeHome: {
        paddingTop: 35,
        paddingLeft: 15,
        flexDirection: 'row'
    },

    imagenHome: {
        width: 50,
        height: 50,
        resizeMode: 'contain'
    }

})

export default practica