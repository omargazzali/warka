import React, {Component} from 'react';
import {View, ScrollView, Text, FlatList, Image} from 'react-native';
import styles from './styles'
import {Header} from "../../components/header/Header";
import {Notification} from "../Notification/Notification";
import {deviceWidth, deviceHeight} from '../../config/dimensions';
import helpers from "../../utils/helpers";
import {LongActivity} from "../LongActivity/LongActivity";
import Container from "../../components/containers/Container";
import Content from "../../components/containers/Content";
import {AnnouncedActivity} from "../AnnouncedActivity/AnnouncedActivity";
import {colors} from "../../config/styles";
import {SectionHeader} from "../../components/SectionHeader/SectionHeader";
import WText from "../../components/WText/WText";

const slideHeight = deviceHeight * 0.36;
const slideWidth = helpers.wp(75, deviceWidth);
const itemHorizontalMargin = helpers.wp(2, deviceWidth);
export const sliderWidth = deviceWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

const mock = [
    {}, {}, {}
]
export default class Notifications extends Component {
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
                <Header type={"add"} title="التنبيهات"
                        navigation={this.props.navigation}/>
                <Content>
                    <View style={{alignItems: 'center', marginTop: '2%'}}>
                        
                        <View style={{alignItems:'flex-end',width:'75%',marginVertical:'2%' , height : 25}}>
                            <WText style={{fontSize: 12,color:colors.green}} text = 'التنبيهات الجديدة'/>
                        </View>
                        <FlatList
                            data={mock}
                            keyExtractor={item => `tab_${item.key}`}
                            renderItem={({item}) => <Notification item={item}/>}
                            //contentContainerStyle={styles.list}
                        />
                        <View style={{alignItems:'flex-end',width:'75%',marginVertical:'2%', height : 25}}>
                            <WText style={{fontSize: 12,color:colors.green}} text = 'التنبيهات المتأخرة'></WText>
                        </View>
                        <FlatList
                            data={mock}
                            keyExtractor={item => `tab_${item.key}`}
                            renderItem={({item}) => <Notification item={item}/>}
                            //contentContainerStyle={styles.list}
                        />

                    </View>
                </Content>
            </Container>
        );
    }
}