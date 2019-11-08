import React from "react";
import {TouchableOpacity, View, Image, Linking, Text} from "react-native";
import styles from "./styles";
import Button from "../Button/Button";
import {colors} from "../../config/styles";

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props)
        return (
            <View style={styles.LongActivity}>
                {this.props.type !== 'profile' ?
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.push('MyAccount')
                        //console.log(this.props);
                    }}
                                      style={styles.notificationBtn}>

                        <Image style={styles.footerImage}
                               source={require('../../assets/images/Profile.png')}/>


                    </TouchableOpacity> :
                    <View style={styles.notificationBtn}>

                        <Image style={styles.footerImage}
                               source={require('../../assets/images/ProfileActive.png')}/>

                    </View>
                }
                {this.props.type !== 'eventType' ?
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.push('EventType')
                        //console.log(this.props);
                    }}
                                      style={styles.notificationBtn}>
                        <Image style={styles.footerImage}
                               source={require('../../assets/images/Calendar.png')}/>

                    </TouchableOpacity>
                    :
                    <TouchableOpacity
                        style={styles.notificationBtn}>
                        <Image style={styles.footerImage}
                               source={require('../../assets/images/Calendarg.png')}/>
                    </TouchableOpacity>
                }
                <TouchableOpacity onPress={() => {
                    this.props.navigation.push('AddEvent')
                    //console.log(this.props);
                }}
                                  style={styles.imageView}>
                    <View style={styles.notificationBtn}>
                        <Image
                            source={require('../../assets/images/plusBtn.png')}/>
                    </View>
                </TouchableOpacity>

                {this.props.type !== 'search' ?
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.push('Search')
                        //console.log(this.props);
                    }}
                                      style={styles.notificationBtn}>
                        <Image
                            source={require('../../assets/images/SearchBar.png')}/>

                    </TouchableOpacity>
                    :
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.push('Search')
                        //console.log(this.props);
                    }}
                                      style={styles.notificationBtn}>
                        <Image
                            source={require('../../assets/images/SearchBarGreen.png')}/>

                    </TouchableOpacity>}
                {this.props.type !== 'home' ?
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.push('Home')
                    }}
                                      style={styles.notificationBtn}>
                        <Image source={require('../../assets/images/Homew.png')}/>
                    </TouchableOpacity> :

                    <TouchableOpacity onPress={() => {
                        this.props.navigation.push('Home')
                    }}
                                      style={styles.notificationBtn}>
                        <Image source={require('../../assets/images/Home.png')}/>
                    </TouchableOpacity>
                }

            </View>
        );
    }
};


export {Footer}