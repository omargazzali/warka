import React, {Component} from 'react';
import {View, ScrollView, Text, FlatList, Image} from 'react-native';
import styles from './styles'
import {Header} from "../../components/header/Header";
import {EventItem, FaliaItem} from "../EventItem/EventItem";
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
import {SectionHeader} from "../../components/SectionHeader/SectionHeader";

const slideHeight = deviceHeight * 0.36;
const slideWidth = helpers.wp(75, deviceWidth);
const itemHorizontalMargin = helpers.wp(5 , deviceWidth);
export const sliderWidth = deviceWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

const mock = [
    {}, {}, {}
];

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

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sliderActiveSlide: 0,
            announcedActiveSlide: 0,
            loading: true,

        }
        console.log(props);
    }

    renderLongActivityItem() {
        return (
            <LongActivity navigation={this.props.navigation}
                          onPress={this.showActionSheet}/>
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
                <View style={{height:80,}}>
                    <Header type={"home"}
                            navigation={this.props.navigation}/>
                </View>
                
                <Content style={{zIndex:0}}>
                    <View style = {{height : 70 , marginHorizontal : 25}}> 
                        <SectionHeader fontSize = {22} title = "الفعاليات الطويلة "/>
                    </View>
                    <View style={{width: '100%', height: 316  }}>
                        <Carousel
                            ref={(c) => {
                                this._carousel = c;
                            }}
                            data={mock}
                            renderItem={(item) => this.renderLongActivityItem(item)}
                            sliderWidth={sliderWidth}
                            itemWidth={itemWidth }
                            type="default"
                            removeClippedSubviews={false}
                            onSnapToItem={(index) => this.setState({sliderActiveSlide: index})}
                        />
                        <Pagination
                            dotsLength={mock.length}
                            activeDotIndex={sliderActiveSlide}
                            containerStyle={styles.paginationContainer}
                            dotColor={colors.primary}
                            dotStyle={styles.paginationDot}
                            inactiveDotColor={colors.grey3}
                            inactiveDotOpacity={0.4}
                            inactiveDotScale={0.6}
                            carouselRef={this._carousel}
                            tappableDots={!!this._carousel}
                        />
                    </View>
                    <View style = {{height : 44 , marginHorizontal : 25}}> 
                        <SectionHeader fontSize = {14} title = "فعاليات معلن عنها" />
                    </View>
                    <View style={{width: '100%', height: 255}}>
                        <Carousel
                            ref={(c) => {
                                this._carousel = c;
                            }}
                            data={mock}
                            renderItem={(item) => this.renderAnnouncedActivityItem(item)}
                            sliderWidth={sliderWidth}
                            itemWidth={itemWidth}
                            type="default"
                            removeClippedSubviews={false}
                            onSnapToItem={(index) => this.setState({sliderActiveSlide: index})}
                        />
                    </View>
                    <View style = {{height : 44 , marginHorizontal : 25 }}> 
                        <SectionHeader fontSize = {14} title = "أحدث الفعاليات" />
                    </View>
                    <View style={{alignItems: 'center' }}>
                        <FlatList
                            data={mock}
                            keyExtractor={item => `tab_${item.key}`}
                            renderItem={({item}) => <EventItem item={item}/>}
                            //contentContainerStyle={styles.list}
                        />
                    </View>
                    <ActionSheet
                        ref={this.getActionSheetRef}
                        title={title}
                        message="تم إضافة الفعالية لقائمة اهتمامك"
                        options={options}
                        onPress={this.handlePress}
                    />

                </Content>
                <Footer type={'home'}
                        navigation={this.props.navigation}/>
            </Container>
        );
    }
}