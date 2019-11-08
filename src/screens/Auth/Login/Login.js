import React, {Component} from 'react';
import {View, ScrollView, Text, Switch, Image, TextInput, ImageBackground} from 'react-native';
import styles from './styles'
import {Header} from "../../../components/header/Header";
import {deviceWidth, deviceHeight} from '../../../config/dimensions';
import helpers from "../../../utils/helpers";
import {colors} from "../../../config/styles";
import Container from "../../../components/containers/Container";
import Content from "../../../components/containers/Content";
import Button from "../../../components/Button/Button";
import {Footer} from "../../../components/Footer/Footer";
import Background from "../../../components/background";

const slideHeight = deviceHeight * 0.36;
const slideWidth = helpers.wp(75, deviceWidth);
const itemHorizontalMargin = helpers.wp(2, deviceWidth);
export const sliderWidth = deviceWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

const mock = [
    {}, {}, {}
]
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sliderActiveSlide: 0,
            announcedActiveSlide: 0,
            loading: true,
        }
    }

    render() {
        return (
            <Container style={styles.view}>
                <Content>
                    <Background>
                        <ImageBackground style={{
                            width: '100%',
                            height: 364.5,
                            alignItems: 'center',
                            justifyContent: 'center',

                        }}
                                         source={require('../../../assets/images/SignBack.png')}>
                            <Image style={{width: 176, height: 106, zIndex: 0}}
                                   source={require('../../../assets/images/Logo.png')}/>

                        </ImageBackground>
                        <ScrollView style={{
                            width: 330,
                            height: 345,
                            backgroundColor: 'transparent',
                            alignSelf: 'center',
                            zIndex: 0,
                            position: 'absolute',
                            marginTop: '65%',

                        }}>
                            <View style={{
                                alignItems: 'center',
                                backgroundColor: colors.white,
                                borderRadius: 16,
                                paddingVertical: '5%',
                                zIndex: 0
                            }}>
                                <View style={{width:'90%',alignItems:'flex-start',}}>
                                <Text style={{color: colors.green, fontSize: 18,}}>Login</Text>
                                </View>
                                <View style={{marginVertical: '8%'}}>
                                    <Text style={{color: colors.green, fontSize: 20}}>Email</Text>
                                    <View style={[styles.viewInput,]}>
                                        <TextInput
                                            style={[styles.textInput,]}
                                            placeholder={"example@example.example"}
                                            autoCorrect={false}
                                            returnKeyType="next"
                                            ref="password"
                                            placeholderTextColor="#A3A3A3"
                                            onChangeText={(value) => {
                                                this.setState({password: value})
                                            }}
                                        />
                                    </View>
                                </View>

                                <View>
                                    <Text style={{color: colors.green, fontSize: 20}}>Password</Text>
                                    <View style={[styles.viewInput,]}>
                                        <TextInput
                                            style={[styles.textInput,]}
                                            placeholder={"******"}
                                            autoCorrect={false}
                                            returnKeyType="next"
                                            ref="password"
                                            secureTextEntry
                                            placeholderTextColor="#A3A3A3"
                                            onChangeText={(value) => {
                                                this.setState({password: value})
                                            }}
                                        />
                                    </View>
                                </View>

                                <View style={{marginVertical: '2%',width:'90%',alignItems:'flex-start',}}>
                                    <Text style={{color: colors.green, fontSize: 20}}>Forget Password ?</Text>
                                </View>
                                <View style={{
                                    width: 295.5, height: 45,marginBottom:'2%'
                                }}>
                                    <Button title={"دخول"} color={colors.green} rounded/>
                                </View>
                                <Text>ذا لم يكن لديك حساب يمكنك التسجيل من هنا</Text>

                            </View>

                        </ScrollView>
                    </Background>
                </Content>
            </Container>
        );
    }
}