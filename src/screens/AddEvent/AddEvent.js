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
import InputField from "../../components/InputField/InputField";

const slideHeight = deviceHeight * 0.36;
const slideWidth = helpers.wp(75, deviceWidth);
const itemHorizontalMargin = helpers.wp(2, deviceWidth);
export const sliderWidth = deviceWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

const mock = [
    {}, {}, {}
]
export default class AddEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sliderActiveSlide: 0,
            announcedActiveSlide: 0,
            loading: true,
            text : ''
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

    inputChange(entered_text){
    this.setState({text: entered_text })
  }

    render() {
        const {sliderActiveSlide, announcedActiveSlide} = this.state;
        return (
            <Container style={styles.view}>

                <Header title={'Add Event'}
                        type={"add"}
                        navigation={this.props.navigation}/>

                <Content style={{backgroundColor: colors.white}}>
                    <View style={{alignItems: 'center'}}>
                     
                    <InputField title = 'Event Address'  text_ = {this.state.text} onChangeText = {this.inputchange}/>
                    
                        <View style={{
                            width: '90%', height: 65,
                            backgroundColor: colors.white,
                        }}>
                            <View style={styles.headerViewStyle}>
                                <Text style={styles.text}>Event Type</Text>
                            </View>
                            <Picker
                                selectedValue={'enter event type'}
                                onValueChange={(itemValue, itemIndex) =>{} }
                                style={{height: 35,
                                    paddingHorizontal: 5,
                                    backgroundColor: colors.grey1,
                                   }}
                            >

                                <Picker.Item
                                    label={'enter event type'}
                                    value={0}/>

                            </Picker>

                        </View>
                        <View style={{
                            width: '90%', height: 65,
                            backgroundColor: colors.white,
                        }}>
                            <View style={styles.headerViewStyle}>
                                <Text style={styles.text}>Secondary Type</Text>
                            </View>
                            <Picker
                                selectedValue={'enter event type'}
                                onValueChange={(itemValue, itemIndex) =>{} }
                                style={{height: 35,
                                    paddingHorizontal: 5,
                                    backgroundColor: colors.grey1,
                                }}
                            >

                                <Picker.Item
                                    label={'enter event type'}
                                    value={0}/>

                            </Picker>

                        </View>
                        <View style={{
                            width: '90%', height: 65,
                            backgroundColor: colors.white,
                        }}>
                            <View style={styles.headerViewStyle}>
                                <Text style={styles.text}>Event Domain</Text>
                            </View>
                            <Picker
                                selectedValue={'enter event type'}
                                onValueChange={(itemValue, itemIndex) =>{} }
                                style={{height: 35,
                                    paddingHorizontal: 5,
                                    backgroundColor: colors.grey1,
                                }}
                            >

                                <Picker.Item
                                    label={'enter event type'}
                                    value={0}/>

                            </Picker>

                        </View>
                        <View style={{
                            width: '90%', height: 65,
                            backgroundColor: colors.white,
                        }}>
                            <View style={styles.headerViewStyle}>
                                <Text style={styles.text}>Event Specialist</Text>
                            </View>
                            <Picker
                                selectedValue={'enter event type'}
                                onValueChange={(itemValue, itemIndex) =>{} }
                                style={{height: 35,
                                    paddingHorizontal: 5,
                                    backgroundColor: colors.grey1,
                                }}
                            >

                                <Picker.Item
                                    label={'enter event type'}
                                    value={0}/>

                            </Picker>

                        </View>
                        <View style={{
                            width: '90%', height: 65,
                            backgroundColor: colors.white,
                        }}>
                            <View style={styles.headerViewStyle}>
                                <Text style={styles.text}>Event Date</Text>
                            </View>
                            <Picker
                                selectedValue={'enter event type'}
                                onValueChange={(itemValue, itemIndex) =>{} }
                                style={{height: 35,
                                    paddingHorizontal: 5,
                                    backgroundColor: colors.grey1,
                                }}
                            >

                                <Picker.Item
                                    label={'enter event type'}
                                    value={0}/>

                            </Picker>

                        </View>
                        <View style={{
                            width: '90%', height: 40,
                            backgroundColor: colors.white,
                            flexDirection:'row'
                        }}>
                            <View style={styles.headerViewStyle}>
                                <Text style={styles.text}>Public Event</Text>
                            </View>
                            <Switch thumbColor={colors.white}
                                    tintColor={colors.primary}/>

                        </View>
                        <View style={{
                            width: '90%', height: 40,
                            backgroundColor: colors.white,
                            flexDirection:'row'
                        }}>
                            <View style={styles.headerViewStyle}>
                                <Text style={styles.text}>Event Fee</Text>
                            </View>
                            <Switch thumbColor={colors.white}
                                    tintColor={colors.primary}/>

                        </View>
                        <View style={{
                            width: '90%', height: 40,}}>
                            <Button title={"Submit"} color={colors.green} rounded
                            onPress={()=>this.props.navigation.push('EventType')}/>
                        </View>
                    </View>
                </Content>
            </Container>
        );
    }
}