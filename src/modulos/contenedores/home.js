import React, { Component } from "react";
import { View, Image, StyleSheet } from 'react-native';
import { Container, Content, Card, CardItem, Text, Body, Form, Item, Label, Input, Icon, Header, Button, Row, Footer, FooterTab } from "native-base";
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
                        <View>
                            <View style={styles.saludo}>
                                <Text
                                    style={styles.tituloLogin}
                                >Hola </Text>
                                <Text
                                    style={styles.tituloLogin2}
                                >Usuario</Text>
                            </View>
                            <View >
                                <Text style={styles.direccion}>El Valle, Trujillo</Text>
                            </View>
                        </View>

                    </View>

                    <View style={styles.barraBusqueda}>
                        <Item rounded style={styles.inputUser}>
                            <Input placeholder='¿Que quieres hacer hoy?' placeholderTextColor='#8982a0' style={styles.inputUserDentro} />
                            <FontAwesome name="search" size={24} color="black" style={styles.logobusqueda} />
                        </Item>
                    </View>

                    <View style={styles.contenedorServicios}>
                        <View style={styles.servicio}>
                            <Image
                                source={require('../../../assets/barber.png')}
                                style={styles.imgServicio}
                            ></Image>
                            <Text>Barbería</Text>
                        </View>

                        <View style={styles.servicio}>
                            <Image
                                source={require('../../../assets/pet.png')}
                                style={styles.imgServicio}
                            ></Image>
                            <Text>Veterinaria</Text>
                        </View>

                        <View style={styles.servicio}>
                            <Image
                                source={require('../../../assets/makeup.png')}
                                style={styles.imgServicio}
                            ></Image>
                            <Text>Make Up</Text>
                        </View>

                        <View style={styles.servicio}>
                            <Image
                                source={require('../../../assets/odonto.png')}
                                style={styles.imgServicio}
                            ></Image>
                            <Text>Odontología</Text>
                        </View>
                    </View>

                    <View style={styles.contenedorServicios}>
                        <View style={styles.servicio}>
                            <Image
                                source={require('../../../assets/spa.png')}
                                style={styles.imgServicio}
                            ></Image>
                            <Text>Spa y Masaje</Text>
                        </View>
                    </View>

                </Content>
                <Footer style={{ backgroundColor: 'none' }}>
                    <FooterTab style={styles.pieBlock}>
                        <Button>
                            <Icon name="home" style={styles.iconPie} />
                            <Text style={styles.textoPie}>Inicio</Text>
                        </Button>
                        <Button>
                            <Icon name="star-half" style={styles.iconPie} />
                            <Text style={styles.textoPie}>Favoritos</Text>
                        </Button>
                        <Button>
                            <Icon active name="cart" style={styles.iconPie} />
                            <Text style={styles.textoPie}>Carrito</Text>
                        </Button>
                        <Button>
                            <Icon name="chatbubbles" style={styles.iconPie} />
                            <Text style={styles.textoPie}>Soporte</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

const styles = StyleSheet.create({

    //Estilos de la cabeza de home

    cabezaDeHome: {
        paddingTop: 35,
        paddingLeft: 15,
        flexDirection: 'row'
    },

    imagenHome: {
        width: 40,
        height: 40,
        resizeMode: 'contain'
    },
    tituloLogin: {
        paddingHorizontal: 3,
        fontSize: 28,

    },

    tituloLogin2: {
        fontSize: 28,
        color: '#4f4779',
        fontWeight: 'bold'
    },

    saludo: {
        flexDirection: 'row'
    },

    direccion: {
        fontSize: 18
    },

    //Estilos de la barra de busqueda

    barraBusqueda: {
        padding: 20,
        alignItems: 'center',
    },
    logobusqueda: {
        marginRight: 15,
    },

    //Estilos menu servicios

    contenedorServicios: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        marginHorizontal: 10
        
    },

    servicio: {
        flexDirection: 'column',
        alignItems: 'center',
    },

    imgServicio: {
        width: 65,
        height: 65,
        resizeMode: 'contain'
    },

    //Estilos del pie

    pieBlock: {
        backgroundColor: '#e1d3ed',
        borderTopEndRadius: 20,
        borderTopStartRadius: 20
    },

    iconPie: {
        color: '#4f4779'
    },

    textoPie: {
        color: '#4f4779'
    }

})

export default practica