import React, {Component} from 'react';
import {View, Picker, Text, Switch, Image, TextInput, FlatList} from 'react-native';
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
import {FaliaItem} from "../EventItem/EventItem";

const slideHeight = deviceHeight * 0.36;
const slideWidth = helpers.wp(75, deviceWidth);
const itemHorizontalMargin = helpers.wp(2, deviceWidth);
export const sliderWidth = deviceWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

const mock = [
    {}, {}, {}
]
export default class Messages extends Component {
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

    renderItem() {
        return (
            <View style={{
                width: '100%', height: 50,
                alignItems: 'center',
                marginTop: '1%' ,
            }}>
                <View style={styles.listImage}>
                    <Image style={styles.imageItem}
                           source={require('../../assets/images/blue.png')}/>
                    <View style={[styles.imageText, {width: '60%'}]}>
                        <Text>محمد</Text>
                        <Text style={{color: colors.grey3, fontSize: 14}}>12-3-2019</Text>
                    </View>

                </View>
                <View style={styles.underline}/>
            </View>
        )
    }

    render() {
        const {sliderActiveSlide, announcedActiveSlide} = this.state;
        return (
            <Container style={styles.view}>

                <Header type={"add"} title={"Message"}
                        navigation={this.props.navigation}/>

                <Content style={{backgroundColor: colors.white}}>


                    <View style={{alignItems: 'center',flex:1 }}>
                        <FlatList style = {{ width : '100%'}}
                            data={mock}
                            keyExtractor={item => `tab_${item.key}`}
                            renderItem={({item}) => this.renderItem(item)}
                            //contentContainerStyle={styles.list}
                        />
                    </View>

                </Content>
            </Container>
        );
    }
}