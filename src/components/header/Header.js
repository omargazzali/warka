import React from "react";
import {TextInput, View, Text, Image, TouchableOpacity, ImageBackground} from "react-native";
import styles from "./styles";
import {colors} from "../../config/styles";
import IconBadge from 'react-native-icon-badge';
import RoundedTabs from "../RoundedTabs/RoundedTabs";


const headerHeight = 230


const Header = (props) => {

    if (props.type === 'home') {
        return (
            <View style={[styles.viewStyle, {backgroundColor: colors.primary, height: headerHeight,}]}>
                <ImageBackground style={{width: '100%', height: '100%'}}
                                 source={require('../../assets/images/headerBackground.png')}>

                    <View style={{
                        flexDirection: 'column',
                        flex: 1
                    }}>
                        <View style={styles.headerViewStyle}>
                            <View style={styles.viewImage}>
                                <TouchableOpacity onPress={() => {
                                      props.navigation.push('Search')

                                }}
                                    style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center',}}>
                                    <Image source={require('../../assets/images/Search.png')}/>
                                </TouchableOpacity>
                            </View>
                            <Image style={[styles.logo,]}
                                   source={require('../../assets/images/Logo.png')}/>
                            <TouchableOpacity onPress={() => {
                                props.navigation.push('Notifications')

                            }}
                                              style={styles.viewImage}>
                                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center',}}>
                                    <IconBadge
                                        MainElement={

                                            <View style={{
                                                margin: 6
                                            }}>
                                                <Image source={require('../../assets/images/notification.png')}/>
                                            </View>}
                                        BadgeElement={
                                            <Text style={{color: '#FFFFFF'}}>1</Text>
                                        }
                                        IconBadgeStyle={
                                            {
                                                width: 20,
                                                height: 14,
                                                backgroundColor: colors.red
                                            }
                                        }/>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.headerViewStyle}>

                        </View>
                    </View>
                </ImageBackground>
            </View>
        );
    } else if (props.type === 'search') {
        return (
            <View style={[styles.viewStyle, {backgroundColor: colors.primary, height: headerHeight,}]}>
                <ImageBackground style={{width: '100%', height: '100%'}}
                                 source={require('../../assets/images/headerBackground.png')}>

                    <View style={{
                        flexDirection: 'column',
                        flex: 1
                    }}>
                        <View style={styles.headerViewStyle}>
                            <TouchableOpacity style={{justifyContent: 'center'}}>
                                <Image source={require('../../assets/images/doSearch.png')}/>
                            </TouchableOpacity>
                            <View style={{width: 261, height: 35, backgroundColor: colors.white, borderRadius: 20}}>
                                <TextInput
                                    style={{height: '100%', paddingHorizontal: 5}}
                                    onChangeText={(text) => this.setState({text})}
                                    value={'ddd'}
                                />
                            </View>
                            <TouchableOpacity onPress={() => {
                                props.navigation.push('Notifications')

                            }} style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center',}}>
                                <IconBadge
                                    MainElement={

                                        <View style={{
                                            margin: 6
                                        }}>
                                            <Image source={require('../../assets/images/notification.png')}/>
                                        </View>}
                                    BadgeElement={
                                        <Text style={{color: '#FFFFFF'}}>1</Text>
                                    }
                                    IconBadgeStyle={
                                        {
                                            width: 20,
                                            height: 14,
                                            backgroundColor: colors.red
                                        }
                                    }/>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.headerViewStyle}>

                        </View>
                    </View>
                </ImageBackground>
            </View>
        )
    } else if (props.type === 'add') {
        return (
            <View style={[styles.viewStyle, {backgroundColor: colors.primary, height: 90,}]}>
                <ImageBackground style={{width: '100%', height: '100%'}}
                                 source={require('../../assets/images/headerBackground.png')}>

                    <View style={{
                        flexDirection: 'column',
                        flex: 1
                    }}>
                        <View style={styles.headerViewStyle}>
                            <View style={{justifyContent: 'center', width: 28, height: 31 , marginTop : 10}}>
                                <Image source={require('../../assets/images/Search.png')}/>
                            </View>
                            <View style={{width: 85, height: 25, marginTop : 10}}>
                                <Text style={{color: 'white', fontSize: 20}}>{props.title}</Text>
                            </View>
                            <TouchableOpacity onPress={() => {
                                props.navigation.push('Notifications')

                            }} style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop : 10}}>
                                <IconBadge
                                    MainElement={

                                        <View style={{
                                            margin: 6
                                        }}>
                                            <Image source={require('../../assets/images/notification.png')}/>
                                        </View>}
                                    BadgeElement={
                                        <Text style={{color: '#FFFFFF'}}>1</Text>
                                    }
                                    IconBadgeStyle={
                                        {
                                            width: 20,
                                            height: 14,
                                            backgroundColor: colors.red
                                        }
                                    }/>
                            </TouchableOpacity>
                        </View>

                    </View>
                </ImageBackground>
            </View>
        )
    } else if (props.type === 'type') {
        return (
            <View style={[styles.viewStyle, {backgroundColor: colors.primary, height: 200 ,}]}>
                <ImageBackground style={{width: '100%', height: '100%'}}
                                 source={require('../../assets/images/headerBackground.png')}>

                    <View style={{
                        flexDirection: 'column',
                        flex: 1
                    }}>
                        <View style={[styles.headerViewStyle , {flex : 2 }]}>
                            <View style={styles.viewImage}>
                                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center',}}>
                                    <Image source={require('../../assets/images/Search.png')}/>
                                </View>
                            </View>
                            <Image style={[styles.logo,]}
                                   source={require('../../assets/images/Logo.png')}/>
                            <TouchableOpacity onPress={() => {
                                props.navigation.push('Notifications')

                            }} style={styles.viewImage}>
                                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center',}}>
                                    <IconBadge
                                        MainElement={

                                            <View style={{
                                                margin: 6
                                            }}>
                                                <Image source={require('../../assets/images/notification.png')}/>
                                            </View>}
                                        BadgeElement={
                                            <Text style={{color: '#FFFFFF'}}>1</Text>
                                        }
                                        IconBadgeStyle={
                                            {
                                                width: 20,
                                                height: 14,
                                                backgroundColor: colors.red
                                            }
                                        }/>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flex: 1,
                            marginHorizontal: '5%',
                        }}>
                            {props.children}
                        </View>
                    </View>
                </ImageBackground>
            </View>
        );
    } else if (props.type === 'profile') {
        return (
            <View style={[styles.viewStyle, {backgroundColor: colors.primary, height: 80,}]}>
                <ImageBackground style={{width: '100%', height: '100%'}}
                                 source={require('../../assets/images/headerBackground.png')}>

                    <View style={{
                        flexDirection: 'column',
                        flex: 1
                    }}>
                        <View style={styles.headerViewStyle}>
                            <View style={{justifyContent: 'center', width: 28, height: 31}}>
                                <Image source={require('../../assets/images/Search.png')}/>
                            </View>
                            <View style={{width: 85, height: 21, alignItems: 'center', justifyContent: 'center'}}>
                                <Image style={styles.logo} source={require('../../assets/images/Logo.png')}/>
                            </View>
                            <TouchableOpacity onPress={() => {
                                props.navigation.push('Notifications')

                            }} style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center',}}>
                                <IconBadge
                                    MainElement={

                                        <View style={{
                                            margin: 6
                                        }}>
                                            <Image source={require('../../assets/images/notification.png')}/>
                                        </View>}
                                    BadgeElement={
                                        <Text style={{color: '#FFFFFF'}}>1</Text>
                                    }
                                    IconBadgeStyle={
                                        {
                                            width: 20,
                                            height: 14,
                                            backgroundColor: colors.red
                                        }
                                    }/>
                            </TouchableOpacity>
                        </View>

                    </View>
                </ImageBackground>
            </View>
        )
    } else if (props.type === 'account') {
        return (
            <View style={[styles.viewStyle, {backgroundColor: colors.primary, height: 260,}]}>
                <ImageBackground style={{width: '100%', height: 260, paddingHorizontal: 10}}
                                 source={require('../../assets/images/accountHeaderBack.png')}>

                    <View style={{
                        flexDirection: 'column',
                        height: 88,
                        width: '100%'
                    }}>
                        <View style={styles.headerViewStyle}>
                            <View style={{justifyContent: 'center', width: 28, height: 31}}>
                                <Image source={require('../../assets/images/cyanSquare.png')}/>
                            </View>
                            <View style={{width: 85, height: 21, alignItems: 'center', justifyContent: 'center'}}>
                                <Text style={{color: colors.white, fontSize: 16}}>My Account</Text>
                            </View>
                            <TouchableOpacity onPress={() => {
                                props.navigation.push('Notifications')

                            }} style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center',}}>
                                <IconBadge
                                    MainElement={

                                        <View style={{
                                            margin: 6
                                        }}>
                                            <Image source={require('../../assets/images/notification.png')}/>
                                        </View>}
                                    BadgeElement={
                                        <Text style={{color: '#FFFFFF'}}>1</Text>
                                    }
                                    IconBadgeStyle={
                                        {
                                            width: 20,
                                            height: 14,
                                            backgroundColor: colors.red
                                        }
                                    }/>
                            </TouchableOpacity>
                        </View>

                    </View>
                    <View style={{
                        flexDirection: 'column',
                        height: 188,
                        width: '100%',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <View style={{
                            width: 100,
                            height: 100,
                            zIndex: 0,
                            borderRadius: 50,
                            backgroundColor: colors.white,
                        }}>
                            <ImageBackground style={{width: 50, height: '100%',}}
                                             source={require('../../assets/images/blackSquare.png')}>
                                <View style={{
                                    width: 38, height: 38,
                                }}>
                                    <Image style={{width: '100%', height: '100%'}}
                                           source={require('../../assets/images/cyan.png')}/>
                                </View>
                            </ImageBackground>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        )
    } else {
        return null
    }


};


export {Header}