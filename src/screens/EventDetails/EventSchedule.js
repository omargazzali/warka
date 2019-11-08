import React, {Component} from 'react';
import {View, ScrollView, Text, FlatList, Image} from 'react-native';
import styles from './styles'
import {Header} from "../../components/header/Header";
import {FaliaItem} from "../EventItem/EventItem";
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {deviceWidth, deviceHeight} from '../../config/dimensions';
import helpers from "../../utils/helpers";
import {colors} from "../../config/styles";
import {LongActivity} from "../LongActivity/LongActivity";
import Container from "../../components/containers/Container";
import Content from "../../components/containers/Content";
import {AnnouncedActivity} from "../AnnouncedActivity/AnnouncedActivity";
import {Footer} from "../../components/Footer/Footer";
import {ActionSheetCustom as ActionSheet} from 'react-native-custom-actionsheet'
import {EventDetailsItem} from "./EventDetailsItem";
import {Tab} from "../../components/Tab/Tab";

const slideHeight = deviceHeight * 0.36;
const slideWidth = helpers.wp(75, deviceWidth);
const itemHorizontalMargin = helpers.wp(2, deviceWidth);
export const sliderWidth = deviceWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

const mock = [
    {}, {}, {}
]

const CANCEL_INDEX = 0
const DESTRUCTIVE_INDEX = 4
const options = [
    {
        component: <View
            styles={{
                width: '80%',
                borderRadius: 50,
                borderColor: colors.green,
                marginHorizontal: 5,
                backgroundColor: 'red'
            }}>
            <Text style={{color: colors.green, fontSize: 16}}>حضور</Text>
        </View>,
        height: 80,
    },
    {
        component: <View
            styles={{
                width: '80%',
                borderRadius: 50,
                borderColor: colors.green,
                marginHorizontal: 5,
                backgroundColor: 'red'
            }}>
            <Text style={{color: colors.green, fontSize: 16}}>حضور ومشاركة</Text>
        </View>,
        height: 80,
    },
]
const title = <Text style={{color: colors.black, fontSize: 16}}>الاشتراك في الفعالية</Text>

export default class EventSchedule extends Component {
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
            <EventDetailsItem onPress={this.showActionSheet}/>
        )
    }

    renderAnnouncedActivityItem() {
        return (
            <AnnouncedActivity/>
        )
    }

    showActionSheet = () => this.actionSheet.show()

    getActionSheetRef = ref => (this.actionSheet = ref)

    handlePress = index => this.setState({selected: index})

    render() {
        const {sliderActiveSlide, announcedActiveSlide} = this.state;
        return (
            <Container style={styles.view}>
                <Content>

                    <View style={{width: '100%', height: 392,marginBottom:10, alignItems: 'center'}}>
                        <View style={styles.eventSheet}>
                            <View style={styles.listImage}>
                                <Image style={styles.imageItem2}
                                       source={require('../../assets/images/green.png')}/>
                                <View style={[styles.imageText, {width: '60%'}]}>
                                    <Text style={{fontSize:18}}>البداية</Text>
                                    <Text>21/12/2018</Text>
                                </View>

                            </View>
                            <View style={styles.underline}/>
                            <View style={styles.listImage}>
                                <Image style={styles.imageItem2}
                                       source={require('../../assets/images/green.png')}/>
                                <View style={[styles.imageText, {width: '60%'}]}>
                                    <Text style={{fontSize:18}}>نهايةالفعالية</Text>
                                    <Text>21/12/2018</Text>
                                </View>

                            </View>
                            <View style={styles.underline}/>
                            <View style={styles.listImage}>
                                <Image style={styles.imageItem2}
                                       source={require('../../assets/images/green.png')}/>
                                <View style={[styles.imageText, {width: '60%'}]}>
                                    <Text style={{fontSize:18}}>آخر موعد لتسليم الملخص</Text>
                                    <Text>21/12/2018</Text>
                                </View>

                            </View>
                            <View style={styles.underline}/>
                            <View style={styles.listImage}>
                                <Image style={styles.imageItem2}
                                       source={require('../../assets/images/green.png')}/>
                                <View style={[styles.imageText, {width: '60%'}]}>
                                    <Text style={{fontSize:18}}>الابلاغ بالملخصات المقبولة</Text>
                                    <Text>21/12/2018</Text>
                                </View>

                            </View>
                            <View style={styles.underline}/>
                            <View style={styles.listImage}>
                                <Image style={styles.imageItem2}
                                       source={require('../../assets/images/green.png')}/>
                                <View style={[styles.imageText, {width: '100%'}]}>
                                    <Text style={{fontSize:18}}>آخر موعد لاستقبال المشاركة كاملة</Text>
                                    <Text>21/12/2018</Text>
                                </View>

                            </View>
                            <View style={styles.underline}/>
                            <View style={styles.listImage}>
                                <Image style={styles.imageItem2}
                                       source={require('../../assets/images/green.png')}/>
                                <View style={[styles.imageText, {width: '100%'}]}>
                                    <Text style={{fontSize:18}}>الابلاغ بالمشاركات  المقبولة</Text>
                                    <Text>21/12/2018</Text>
                                </View>

                            </View>
                        </View>
                    </View>

                    <ActionSheet
                        ref={this.getActionSheetRef}
                        title={title}
                        message="تم إضافة الفعالية لقائمة اهتمامك"
                        options={options}
                        onPress={this.handlePress}
                    />

                </Content>

            </Container>
        );
    }
}