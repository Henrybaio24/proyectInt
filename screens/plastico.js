import React, { Component } from 'react';
import { Container, Header, Left, Body, Card, Button, Icon, Title, CardItem, Content, Text, Right, List , View} from 'native-base';
import { StyleSheet} from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default class Plastico extends Component {
    render() {
        return (
            <Container>
                <Header hasSegment style={styles.header}>
                    <Left>
                        <Button transparent>
                            <Icon name="arrow-back"
                                onPress={() => this.props.navigation.navigate('Materiales')} />
                        </Button>
                    </Left>
                    <Body style={styles.texto}>
                        <Title>Plástico</Title>
                    </Body>
                </Header>
                <Content padder>
                <View paddingBottom={20}></View>
                    <Card>
                        <CardItem header bordered>
                            <Text style={styles.texto1}>¿Por qué es importante reciclar?</Text>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <Text>
                                Si reciclamos reducimos el trabajo de extracción, 
                                transporte y elaboración de nuevas materias primas, lo que con lleva una disminución 
                                importante del uso de la energía necesaria para llevar a cabo estos procesos.
                                </Text>
                                <View paddingBottom={20}></View>
                            </Body>
                        </CardItem>
                    </Card>
                    <View paddingBottom={25}></View>
                    <Card>
                        <CardItem header bordered>
                            <Text style={styles.texto1}>Importancia de reciclar plástico</Text>
                        </CardItem>
                        <CardItem bordered>
                            <Body>
                                <List>
                                    <Text>
                                    Una botella de plástico  puede generar energía suficiente.
                                    </Text>
                                </List>
                                <View paddingBottom={20}></View>
                                <List>
                                    <Text>
                                    Nos permite reusar envases y bolsas.
                                    </Text>
                                </List>
                                <View paddingBottom={20}></View>
                                <List>
                                    <Text>
                                    Si reciclamos el plástico estamos contribuyendo con el medio ambiente.
                                    </Text>
                                </List>
                                <View paddingBottom={20}></View>
                            </Body>
                        </CardItem>
                    </Card>
                    <View paddingBottom={20}></View>
                    <CardItem style={styles.botones}>
                        <Left>
                            <Body>
                                <Button small light style={styles.botones1}  onPress={() => this.props.navigation.navigate('Manualidad')}>
                                    <Entypo name='circle-with-plus' size={20} style={styles.icono}></Entypo>
                                    <Text>Nuevo</Text>
                                </Button>
                            </Body>
                        </Left>
                        <Right>
                            <Body>
                                <Button small light style={styles.botones3}  onPress={() => this.props.navigation.navigate('Mapa')}>
                                    <Entypo name='location' size={20} style={styles.icono}></Entypo>
                                    <Text>Mapa</Text>
                                </Button>
                            </Body>
                        </Right>
                    </CardItem>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        marginTop: 30,
        height: 50,
        width: '100%'
    },
    texto: {
        left: 65
    },
    botones: {
        right: 5,
    },
    botones1:{
        width: 100,
        left: 40
    },
    botones3:{
        width: 100,
        right: 30
    },
    icono: {
        left: 10
    },
    texto1: {
        left: 35
    }
});