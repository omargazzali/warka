import React, {Component} from 'react';
import {View, Picker, Text, Switch, Image, TextInput} from 'react-native';
import styles from './styles'
import {Header} from "../../../components/header/Header";
import {deviceWidth, deviceHeight} from '../../../config/dimensions';
import helpers from "../../../utils/helpers";
import {colors} from "../../../config/styles";
import Container from "../../../components/containers/Container";
import Content from "../../../components/containers/Content";
import Button from "../../../components/Button/Button";
import {Footer} from "../../../components/Footer/Footer";

const slideHeight = deviceHeight * 0.36;
const slideWidth = helpers.wp(75, deviceWidth);
const itemHorizontalMargin = helpers.wp(2, deviceWidth);
export const sliderWidth = deviceWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

const mock = [
    {}, {}, {}
]
export default class NeedLogin extends Component {
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

                <Header type={"profile"}
                        navigation={this.props.navigation}/>

                <Content style={{backgroundColor: colors.white}}>
                    <View style={{alignItems: 'center',justifyContent:'center',marginTop:'20%'}}>
                        <Image source={require('../../../assets/images/NeedLogin.png')}/>
                        <Text style={{marginTop:'10%',color:colors.primary,fontSize:16}}>قم بتسجيل الدخول</Text>
                    </View>
                    <View style={{alignItems:'center',justifyContent:'center',marginTop:'10%',marginHorizontal:'16%'}}>
                        <Text style={{color:colors.green,marginBottom:'10%',fontSize:18}}>
                            منقطة حسابي تحتاج لتسجيل الدخول لكي يتم عرض تفاصيل الخاصة بالحساب
                        </Text>
                        <View style={{
                            width: 171, height: 45,}}>
                            <Button title={"دخول"} color={colors.green} rounded/>
                        </View>
                    </View>
                </Content>
                <Footer type='profile'/>
            </Container>
        );
    }
}