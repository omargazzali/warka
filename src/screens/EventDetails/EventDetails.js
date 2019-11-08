import React, {Component} from 'react';
import {View, TouchableOpacity, Text, FlatList, Image} from 'react-native';
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
import EventSchedule from "./EventSchedule";

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

export default class EventDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sliderActiveSlide: 0,
            announcedActiveSlide: 0,
            loading: true,
            schedule: 0,
            details: 0,
            press1: false,
            press2: false,
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

    details() {
        this.setState({details: 1})
    }

    schedule() {
        this.setState({schedule: 1})
    }

    showActionSheet = () => this.actionSheet.show()

    getActionSheetRef = ref => (this.actionSheet = ref)

    handlePress = index => this.setState({selected: index})

    render() {
        const {sliderActiveSlide, announcedActiveSlide} = this.state;
        return (
            <Container style={styles.view}>
                <View style={{flex: 1}}>
                    <Header type={"home"}
                            navigation={this.props.navigation}/>
                </View>
                <View style={{zIndex: 0, width: '100%', height: 80}}/>
                {this.state.press1 === true ?
                    <Content>

                        <View style={{width: '100%', height: 320, alignItems: 'center'}}>
                            <EventDetailsItem/>
                        </View>

                        <View style={styles.headerViewStyle}>
                            <TouchableOpacity
                                onPress={() => alert(this.state.schedule)}
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    backgroundColor: colors.white,
                                    width: 314,
                                    height: 55,
                                    borderRadius: 16,
                                    flexDirection: 'row',
                                    paddingHorizontal: '5%'
                                }}>
                                <Image style={styles.nav}
                                       source={require('../../assets/images/greensSquare.png')}/>

                                <Text style={styles.text}>مركز ابن النفيس للدراسات والأبحاث</Text>
                                <Image style={styles.nav}
                                       source={require('../../assets/images/greensSquare.png')}/>
                            </TouchableOpacity>
                        </View>
                        <View style={{width: '100%', height: 270, alignItems: 'center'}}>
                            <View style={styles.eventSheet}>
                                <View style={styles.listImage}>
                                    <Image style={styles.imageItem}
                                           source={require('../../assets/images/greensSquare.png')}/>
                                    <View style={[styles.imageText, {width: '60%'}]}>
                                        <Text>21/12/2018 - 3/1/2019</Text>
                                    </View>

                                </View>
                                <View style={styles.underline}/>
                                <View style={styles.listImage}>
                                    <Image style={styles.imageItem}
                                           source={require('../../assets/images/greensSquare.png')}/>
                                    <View style={[styles.imageText, {width: '60%'}]}>
                                        <Text>6:00 م - 8:00 ص</Text>
                                    </View>

                                </View>
                                <View style={styles.underline}/>
                                <View style={styles.listImage}>
                                    <Image style={styles.imageItem}
                                           source={require('../../assets/images/greensSquare.png')}/>
                                    <View style={[styles.imageText, {width: '60%'}]}>
                                        <Text>اللغويات</Text>
                                    </View>

                                </View>
                                <View style={styles.underline}/>
                                <View style={styles.listImage}>
                                    <Image style={styles.imageItem}
                                           source={require('../../assets/images/greensSquare.png')}/>
                                    <View style={[styles.imageText, {width: '60%'}]}>
                                        <Text>برسوم</Text>
                                    </View>

                                </View>
                                <View style={styles.underline}/>
                                <View style={styles.listImage}>
                                    <Image style={styles.imageItem}
                                           source={require('../../assets/images/greensSquare.png')}/>
                                    <View style={[styles.imageText, {width: '60%'}]}>
                                        <Text>فعالية عامة</Text>
                                    </View>

                                </View>
                                <View style={styles.underline}/>
                                <View style={styles.listImage}>
                                    <Image style={styles.imageItem}
                                           source={require('../../assets/images/greensSquare.png')}/>
                                    <View style={[styles.imageText, {width: '60%'}]}>
                                        <Text>فعالية دولية</Text>
                                    </View>

                                </View>
                            </View>
                        </View>
                        <View style={{width: '100%', height: 169, marginVertical: '2%', alignItems: 'center'}}>
                            <View style={styles.eventSheet}>
                                <Image source={require('../../assets/images/map.png')}/>
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
                    :

                    <Content>

                        <View style={{width: '100%', height: 320, alignItems: 'center'}}>
                            <EventDetailsItem/>
                        </View>
                        <EventSchedule/>
                        <ActionSheet
                            ref={this.getActionSheetRef}
                            title={title}
                            message="تم إضافة الفعالية لقائمة اهتمامك"
                            options={options}
                            onPress={this.handlePress}
                        />

                    </Content>}
                {this.state.press1 === false ?
                    <View style={styles.prevNext}>
                        <TouchableOpacity
                            onPress={() => {
                                this.setState({press1: true})

                            }}
                            activeOpacity={0.8}
                            style={[styles.ctrlBtn, styles.next]}>
                            <Image source={require('../../assets/images/cyanSquare.png')}/>
                            <Text style={[styles.btnText, {color: colors.grey0}]}>التفاصيل</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                this.setState({press1: false})
                                //this.renderOnPress1;
                            }}
                            activeOpacity={0.8}
                            style={[styles.ctrlBtn, styles.prev]}>
                            <Image source={require('../../assets/images/greensSquare.png')}/>
                            <Text style={[styles.btnText, {color: colors.green}]}>الجدول الزمني</Text>
                        </TouchableOpacity>
                    </View>
                    :

                    <View style={styles.prevNext}>
                        <TouchableOpacity
                            onPress={() => {
                                this.setState({press1: true})
                                //this.renderOnPress1;

                            }}
                            activeOpacity={0.8}
                            style={[styles.ctrlBtn, styles.next]}>
                            <Image source={require('../../assets/images/greensSquare.png')}/>
                            <Text style={[styles.btnText, {color: colors.green}]}>التفاصيل</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                this.setState({press1: false})
                                //this.renderOnPress1;
                            }}
                            activeOpacity={0.8}
                            style={[styles.ctrlBtn, styles.prev]}>
                            <Image source={require('../../assets/images/cyanSquare.png')}/>
                            <Text style={[styles.btnText, {color: colors.grey0}]}>الجدول الزمني</Text>
                        </TouchableOpacity>
                    </View>
                }
            </Container>
        );
    }
}