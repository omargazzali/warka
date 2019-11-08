import React from "react";
import {TouchableOpacity, View, Image, Linking, Text} from "react-native";
import styles from "./styles";
import Button from "../Button/Button";
import {colors} from "../../config/styles";

class Tab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            press1: false,
            press2: false,
        }
    }

    renderOnPress1() {
       this.props.onPress1;
    }

    render() {
        console.log(this.props)

        if (this.state.press1 === false)
            return (
                <View style={styles.LongActivity}>
                <TouchableOpacity onPress={() => {
                    this.setState({press1: true})
                    this.renderOnPress1;
                    //alert("details")
                }}
                                  style={[styles.notificationBtn]}>
                    <Image source={require('../../assets/images/cyanSquare.png')}/>
                    <Text style={{fontSize: 18, color: colors.grey0}}>التفاصيل</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    this.setState({press1: false})
                }}
                                  style={styles.notificationBtn}>
                    <Image source={require('../../assets/images/greensSquare.png')}/>
                    <Text style={{fontSize: 18, color: colors.green}}>الجدول الزمني</Text>
                </TouchableOpacity>
            </View>
            )
        else {
            return (
                <View style={styles.LongActivity}>
                    <TouchableOpacity onPress={() => {

                    }}
                                      style={[styles.notificationBtn]}>
                        <Image source={require('../../assets/images/greensSquare.png')}/>
                        <Text style={{fontSize: 18, color: colors.green}}>التفاصيل</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        this.setState({press1: false})
                    }}
                                      style={styles.notificationBtn}>
                        <Image source={require('../../assets/images/cyanSquare.png')}/>
                        <Text style={{fontSize: 18, color: colors.grey0}}>الجدول الزمني</Text>
                    </TouchableOpacity>
                </View>
            )
        }
    }


};


export {Tab}