import React, {Component} from 'react';
import {View, ScrollView, Text, FlatList, Image} from 'react-native';
import styles from './styles'
import {Header} from "../../components/header/Header";
import {EventItem, FaliaItem} from "../EventItem/EventItem";
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {deviceWidth, deviceHeight} from '../../config/dimensions';
import helpers from "../../utils/helpers";
import {colors} from "../../config/styles";
import Button from "../../components/Button/Button";
import {LongActivity} from "../LongActivity/LongActivity";
import Container from "../../components/containers/Container";
import Content from "../../components/containers/Content";
import {AnnouncedActivity} from "../AnnouncedActivity/AnnouncedActivity";
import {Footer} from "../../components/Footer/Footer";

const slideHeight = deviceHeight * 0.36;
const slideWidth = helpers.wp(75, deviceWidth);
const itemHorizontalMargin = helpers.wp(2, deviceWidth);
export const sliderWidth = deviceWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

const mock = [
    {}, {}, {}
]
export default class Search extends Component {
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
                <View style={{flex:1}}>
                    <Header type={"search"}
                            navigation={this.props.navigation}/>
                </View>
                <View style={{zIndex:0,width: '100%', height: 80}}/>
                <Content>
                    <View style={{alignItems: 'center'}}>
                        <FlatList
                            data={mock}
                            keyExtractor={item => `tab_${item.key}`}
                            renderItem={({item}) => <EventItem item={item}/>}
                            //contentContainerStyle={styles.list}
                        />

                    </View>
                </Content>
                <Footer navigation={this.props.navigation}
                        type={'search'}/>
            </Container>
        );
    }
}