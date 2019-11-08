import React, {Component} from 'react';
import {View, Modal, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import styles from './styles'
import {Header} from "../../components/header/Header";
import {deviceWidth, deviceHeight} from '../../config/dimensions';
import helpers from "../../utils/helpers";
import {colors} from "../../config/styles";
import {LongActivity} from "../LongActivity/LongActivity";
import Container from "../../components/containers/Container";
import Content from "../../components/containers/Content";
import {AnnouncedActivity} from "../AnnouncedActivity/AnnouncedActivity";
import Button from "../../components/Button/Button";
import {Footer} from "../../components/Footer/Footer";
import InputField from "../../components/InputField/InputField";

const slideHeight = deviceHeight * 0.36;
const slideWidth = helpers.wp(75, deviceWidth);
const itemHorizontalMargin = helpers.wp(2, deviceWidth);
export const sliderWidth = deviceWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

const mock = [
    {}, {}, {}
]
export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sliderActiveSlide: 0,
            announcedActiveSlide: 0,
            loading: true,
            modalVisible: false,
            userName : 'No Name',
            email : '',
            phone : '',
            country : '',
            password : ''

        }
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    onUserNameChanged(newText) {
        this.setState({userName: newText});
    }

    onEmailChanged(newText) {
        this.setState({email: newText});
    }

    onPhoneChanged(newText) {
        this.setState({phone: newText});
    }

    onCountryChanged(newText) {
        this.setState({country: newText});
    }

    onPasswordChanged(newText) {
        this.setState({password: newText});
    }

    render() {
        const {sliderActiveSlide, announcedActiveSlide} = this.state;
        return (
            <Container style={styles.view}>

                <Header type={"account"}
                        navigation={this.props.navigation}/>

                <Content style={{backgroundColor: colors.white}}>
                    <InputField containerStyle = {[styles.inputField , styles.firstInputField]} title = 'User Name' placeholder = 'عمر محمد عبد الله  هادي' onChangeText = {this.onUserNameChanged} />
                    <InputField containerStyle = {styles.inputField} title = 'Email Address' placeholder = 'mail@mail.mail' onChangeText = {this.onEmailChanged} />
                    <InputField containerStyle = {styles.inputField} title = 'Phone Number' placeholder = '0000000000' onChangeText = {this.onPhoneChanged} />
                    <InputField containerStyle = {styles.inputField} title = 'Country' placeholder = 'Saudi Arabia' onChangeText = {this.onCountryChanged} />
                    <InputField containerStyle = {styles.inputField} title = 'Password' placeholder = '*****' onChangeText = {this.onPasswordChanged} />
                    <View style={styles.doneBtnContainer}>
                            <Button title={"save"} color={colors.green} rounded
                                    onPress={() => {
                                        this.setModalVisible(!this.state.modalVisible);
                                    }}/>
                    </View>
                    <Modal
                        style={{
                            flex: 1,
                            backgroundColor: colors.grey0,
                            justifyContent: 'flex-end',

                        }}
                        animationType="fade"
                        transparent={true}
                        visible={this.state.modalVisible}
                        onRequestClose={() => {
                            alert('Modal has been closed.');
                            this.setModalVisible(!this.state.modalVisible);

                        }}
                    >
                        <View style={{height:'100%',backgroundColor: colors.grey2,opacity:0.8}}>
                            <View style={{
                                height: 235.4,
                                marginTop: 400,
                                backgroundColor: colors.white,
                                marginHorizontal: '5%',
                                justifyContent: 'flex-start',
                                padding: '5%',
                                borderRadius: 16
                            }}>
                                <View style={{
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    height: 29,
                                    flexDirection: 'row'
                                }}>
                                    <View style={{
                                        width: 200, height: 29,
                                        justifyContent: 'space-between',
                                        flexDirection: 'row'
                                    }}>
                                        <View style={{width: 54, height: 29, marginHorizontal: 2}}>
                                            <Button color={colors.green} title={"save"} rounded/>
                                        </View>
                                        <View style={{
                                            width: 150, height: 21,
                                            alignItems: 'center', marginHorizontal: 5
                                        }}>
                                            <Text style={{fontSize: 16}}>change Password</Text>
                                        </View>
                                    </View>

                                    <View style={{width: 24, height: 24}}>
                                        <Text></Text>
                                    </View>
                                </View>
                                <View style={{
                                    alignItems: 'center',
                                    height: 100,
                                }}>
                                    <View style={{
                                        width: '100%', height: 72,
                                        alignItems: 'center',
                                        marginTop: '1%'
                                    }}>
                                        <View style={{
                                            width: '90%', height: 72,
                                            backgroundColor: colors.white,
                                        }}>
                                            <View style={styles.headerViewStyle}>
                                                <Text style={styles.text}>Enter last password</Text>
                                            </View>
                                            <TextInput
                                                style={{
                                                    height: 34,
                                                    paddingHorizontal: 5,
                                                    backgroundColor: colors.grey1,
                                                }}
                                                onChangeText={(text) => this.setState({text})}
                                                value={'******'}
                                            />

                                        </View>
                                    </View>
                                    <View style={{
                                        width: '100%', height: 72,
                                        alignItems: 'center',
                                        marginTop: '1%'
                                    }}>
                                        <View style={{
                                            width: '90%', height: 72,
                                            backgroundColor: colors.white,
                                        }}>
                                            <View style={styles.headerViewStyle}>
                                                <Text style={styles.text}>Enter current password</Text>
                                            </View>
                                            <TextInput
                                                style={{
                                                    height: 34,
                                                    paddingHorizontal: 5,
                                                    backgroundColor: colors.grey1,
                                                }}
                                                onChangeText={(text) => this.setState({text})}
                                                value={'*****'}
                                            />

                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </Modal>

                </Content>
            </Container>
        );
    }
}