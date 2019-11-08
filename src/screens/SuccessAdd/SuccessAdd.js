import React, {Component} from 'react';
import {View, Picker, Text, Switch, Image, TextInput} from 'react-native';
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

const slideHeight = deviceHeight * 0.36;
const slideWidth = helpers.wp(75, deviceWidth);
const itemHorizontalMargin = helpers.wp(2, deviceWidth);
export const sliderWidth = deviceWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

const mock = [
    {}, {}, {}
]
export default class SuccessAdd extends Component {
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

                <Header type={"add"}
                        navigation={this.props.navigation}/>

                <Content style={{backgroundColor: colors.white}}>
                    <View style={{alignItems: 'center', justifyContent: 'center', marginTop: '20%'}}>
                        <Image source={require('../../assets/images/Success.png')}/>
                        <Text style={{marginTop: '10%', color: colors.green, fontSize: 16}}>تم إنشاء الفعالية
                            بنجاح</Text>
                    </View>
                    <View style={{alignItems: 'center', justifyContent: 'center', marginTop: '10%'}}>
                        <Text style={{color: colors.green, marginBottom: '10%'}}>الرجاء زيارة الموقع الالكتروني لاستكمال
                            متطلبات
                            الموافقة على الفعالية</Text>
                        <View style={{
                            width: '90%', height: 40,
                        }}>
                            <Button title={"اعتماد"} color={colors.green} rounded/>
                        </View>
                    </View>
                </Content>
            </Container>
        );
    }
}