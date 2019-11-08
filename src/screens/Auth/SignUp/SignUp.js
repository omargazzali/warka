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
import InputField from "../../../components/InputField/InputField";

const slideHeight = deviceHeight * 0.36;
const slideWidth = helpers.wp(75, deviceWidth);
const itemHorizontalMargin = helpers.wp(2, deviceWidth);
export const sliderWidth = deviceWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

const mock = [
    {}, {}, {}
]
export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sliderActiveSlide: 0,
            announcedActiveSlide: 0,
            loading: true,
            fullName : '',
        }
    }

    onFullNameChanged(newText) {
        this.setState({fullName: newText});
    }

    render() {
        return (
            <Container style={{flex: 1}}>
                <Content>
                    <Background>
                        <ImageBackground style={styles.backimg}
                                         source={require('../../../assets/images/SignBack.png')}>

                        </ImageBackground>
                        <ScrollView style={styles.view}>
                            <Image style={{width: 176, height: 106, alignSelf: 'center', zIndex: 0}}
                                   source={require('../../../assets/images/Logo.png')}/>
                            <View style={styles.viewItem}>
                                <View style={{width: '90%', alignItems: 'flex-start',}}>
                                    <Text style={styles.address}>SignUp</Text>
                                </View>
                                <InputField containerStyle = {[styles.item]} inputStyle = {[styles.textInput,]} titleStyle = {styles.label}  title = 'Full Name' placeholder = 'Enter full name here' onChangeText = {this.onFullNameChanged} />
                                <View style={styles.item}>
                                
                                    <Text style={styles.label}>Full Name</Text>
                                    <View style={[styles.viewInput,]}>
                                        <TextInput
                                            style={[styles.textInput,]}
                                            placeholder={"enter full name here"}
                                            autoCorrect={false}s
                                            returnKeyType="next"
                                            ref="password"
                                            placeholderTextColor="#A3A3A3"
                                            onChangeText={(value) => {
                                                this.setState({password: value})
                                            }}
                                        />
                                    </View>
                                </View>

                                <View style={styles.item}>
                                    <Text style={styles.label}>Phone Number</Text>
                                    <View style={[styles.viewInput,]}>
                                        <TextInput
                                            style={[styles.textInput,]}
                                            placeholder={"0000000"}
                                            keyboardType={'numeric'}
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


                                <View style={styles.item}>
                                    <Text style={styles.label}>Email Address</Text>
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


                                <View style={styles.item}>
                                    <Text style={styles.label}>Password</Text>
                                    <View style={[styles.viewInput,]}>
                                        <TextInput
                                            style={[styles.textInput,]}
                                            placeholder={"******"}
                                            secureTextEntry={true}
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

                                <View style={styles.item}>
                                    <Text style={styles.label}>Confirmation Password</Text>
                                    <View style={[styles.viewInput,]}>
                                        <TextInput
                                            style={[styles.textInput,]}
                                            placeholder={"******"}
                                            secureTextEntry={true}
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


                                <View style={{
                                    width: 295.5, height: 45, marginBottom: '2%'
                                }}>
                                    <Button title={"دخول"} color={colors.green} rounded/>
                                </View>
                                <Text>ذا كان لديك حساب يمكنك الدخول من هنا</Text>

                            </View>
                            <View style={{height: 140}}/>
                        </ScrollView>
                    </Background>
                </Content>
            </Container>
        );
    }
}