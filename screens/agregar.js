import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Container, Content, Card, CardItem, Text, Button, Icon, Left, Body, Right, Input, Item } from 'native-base';
import { Entypo } from '@expo/vector-icons';

export default class Agregar extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Card>
                        <CardItem>
                            <Left>
                                <Body>
                                    <Item >
                                        <Entypo name='image' size={20}></Entypo>
                                        <Input
                                            placeholder='Nombre de la Manualidad' />
                                    </Item>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={{ uri: 'Image URL' }} style={{ height: 150, width: null, flex: 1 }}
                            />
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Item >
                                    <Entypo name='new-message' size={20}></Entypo>
                                    <Input
                                        placeholder='Descripción' />
                                </Item>
                            </Body>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Item >
                                    <Entypo name='list' size={20}></Entypo>
                                    <Input
                                        placeholder='Categoria' />
                                </Item>
                            </Left>
                            <Right>
                                <Item >
                                    <Entypo name='price-tag' size={20}></Entypo>
                                    <Input
                                        placeholder='Precio' />
                                </Item>
                            </Right>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Item >
                                    <Entypo name='location' size={20}></Entypo>
                                    <Input
                                        placeholder='Ubicación' />
                                </Item>
                            </Body>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Item >
                                    <Entypo name='mobile' size={20}></Entypo>
                                    <Input
                                        placeholder='Contacto' />
                                </Item>
                            </Body>
                        </CardItem>
                        <CardItem style={styles.botones}>
                            <Left>
                                <Body>
                                    <Button small light style={styles.botones1}>
                                        <Entypo name='edit' size={15} style={styles.icono}></Entypo>
                                        <Text>Editar</Text>
                                    </Button>
                                </Body>
                            </Left>
                            <Body>
                                <Body>
                                <Button small light style={styles.botones2}>
                                    <Entypo name='save' size={15} style={styles.icono}></Entypo>
                                    <Text>Guardar</Text>
                                </Button>
                                </Body>
                            </Body>
                            <Right>
                                <Body>
                                    <Button small light style={styles.botones3}>
                                        <Entypo name='cup' size={15} style={styles.icono}></Entypo>
                                        <Text>Borrar</Text>
                                    </Button>
                                </Body>
                            </Right>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
};


const styles = StyleSheet.create({
    botones: {
      right: 5,
    },
    botones1: {
        right: 9
    },
    botones2: {
        right: 7
    },
    icono: {
        left: 10
    }
})