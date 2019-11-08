import React, {Component} from 'react';
import {View, Picker, Text, Switch, Image, TouchableOpacity} from 'react-native';
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

const slideHeight = deviceHeight * 0.36;
const slideWidth = helpers.wp(75, deviceWidth);
const itemHorizontalMargin = helpers.wp(2, deviceWidth);
export const sliderWidth = deviceWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

const mock = [
    {}, {}, {}
]
export default class MyAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sliderActiveSlide: 0,
            announcedActiveSlide: 0,
            loading: true,
        }
    }

    renderLongActivityItem() {
        return (
            <LongActivity/>
        )
    }

    renderAnnouncedActivityItem() {
        return (
            <AnnouncedActivity/>
        )
    }

    render() {
        const {sliderActiveSlide, announcedActiveSlide} = this.state;
        return (
            <Container style={styles.view}>

                <Header type={"profile"}
                        navigation={this.props.navigation}/>

                <Content style={{backgroundColor: colors.white}}>

                    <View style={styles.imageView}>
                        <Image style={styles.image}
                               source={require('../../assets/images/photo1.png')}/>
                        <View style={[styles.imageText, {width: '60%'}]}>
                            <Text>عمر محمد عبد الله هادي</Text>
                            <Text>mail@mail.mail</Text>
                        </View>
                        <View style={[styles.imageText,]}>
                            <Text style={{color: colors.green, fontSize: 18}}></Text>
                        </View>
                    </View>

                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.push('Profile')
                            //console.log(this.props);
                        }}
                        style={{
                            width: '100%', height: 50,
                            alignItems: 'center',
                            marginTop: '1%'
                        }}>
                        <View style={styles.listImage}>
                            <Image style={styles.imageItem}
                                   source={require('../../assets/images/blue.png')}/>
                            <View style={[styles.imageText, {width: '60%'}]}>
                                <Text>My Account</Text>
                            </View>
                            <View style={[styles.imageText, {marginHorizontal: '5%'}]}>
                                <Text style={{color: colors.grey3, fontSize: 14}}></Text>
                            </View>
                        </View>
                        <View style={styles.underline}/>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.push('ManageMyEvent')
                            //console.log(this.props);
                        }}
                        style={{
                            width: '100%', height: 50,
                            alignItems: 'center',
                            marginTop: '1%'
                        }}>
                        <View style={styles.listImage}>
                            <Image style={styles.imageItem}
                                   source={require('../../assets/images/green.png')}/>
                            <View style={[styles.imageText, {width: '60%'}]}>
                                <Text>My Activities</Text>
                            </View>
                            <View style={[styles.imageText, {marginHorizontal: '5%'}]}>
                                <Text style={{color: colors.grey3, fontSize: 14}}></Text>
                            </View>
                        </View>
                        <View style={styles.underline}/>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.push('Messages')
                            //console.log(this.props);
                        }}
                        style={{
                            width: '100%', height: 50,
                            alignItems: 'center',
                            marginTop: '1%'
                        }}>
                        <View style={styles.listImage}>
                            <Image style={styles.imageItem}
                                   source={require('../../assets/images/yellow.png')}/>
                            <View style={[styles.imageText, {width: '60%'}]}>
                                <Text>Messages</Text>
                            </View>
                            <View style={[styles.imageText, {marginHorizontal: '5%'}]}>
                                <Text style={{color: colors.grey3, fontSize: 14}}></Text>
                            </View>
                        </View>
                        <View style={styles.underline}/>
                    </TouchableOpacity>

                    <View style={{
                        width: '100%', height: 50,
                        alignItems: 'center',
                        marginTop: '1%'
                    }}>
                        <View style={styles.listImage}>
                            <Image style={styles.imageItem}
                                   source={require('../../assets/images/cyan.png')}/>
                            <View style={[styles.imageText, {width: '60%'}]}>
                                <Text>Settings</Text>
                            </View>
                            <View style={[styles.imageText, {marginHorizontal: '5%'}]}>
                                <Text style={{color: colors.grey3, fontSize: 14}}></Text>
                            </View>
                        </View>
                        <View style={styles.underline}/>
                    </View>
                </Content>
                <Footer type='profile'/>
            </Container>
        );
    }
}