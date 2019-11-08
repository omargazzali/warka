import React, {Component} from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Image,  Share,
} from 'react-native';

import {colors} from '../../config/styles';
import styles from './styles';
import {strings} from "../../locales/i18n";

/**
 * Class representing a Login screen.
 * @extends React.Component
 */
class DrawerContent extends Component {

    /**
     * constructor
     * @param {object} props
     */
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',

        };

    }
share(){
    Share.share(
            {
                title: 'from me ',//string
                url:'http://img.gemejo.com/product/8c/099/cf53b3a6008136ef0882197d5f5.jpg',// eg.'http://img.gemejo.com/product/8c/099/cf53b3a6008136ef0882197d5f5.jpg',

                message: "sharing app"

            }).then(result => console.log(result)).catch(errorMsg => console.log(errorMsg));

}
    /**
     * Renders the component.
     * @return {React native element}
     */
    render() {
console.log('this.props')
console.log(this.props)
        return (
            <ScrollView
                contentContainerStyle={styles.drawerContainer}
            >
                <View>
                   <TouchableOpacity onPress={()=> this.props.onClose()}>
                       <View style={{alignItems:'flex-end',marginVertical:10,marginHorizontal:10}}>
                    <Image source={require('../../assets/Images/cancel.png')}
                           style={{width:32,height:32}}/>
                    </View>
                   </TouchableOpacity>
                    <View style={styles.avatarContainer}>

                        <View style={{ backgroundColor: 'transparent'}}>
                            <Image style={{width: 100, height: 100, borderRadius: 50,borderWidth:2,borderColor:colors.primary}}
                                   source={require('../../assets/Images/bg.png')}/>
                            <Text style={{fontSize: 16, fontWeight: 'bold',color:colors.primary}} >Fatma Al_Rubaie</Text>

                        </View>

                    </View>
                    <View style={{ borderBottomWidth: 1,
                    borderBottomColor: colors.grey0,
                    marginHorizontal:25,}}/>
                    <View style={styles.drawerContent}>

                        <View >
                            <View style={styles.navBtn}>
                                <TouchableOpacity style={{flexDirection:'row'}}
                                                  onPress={()=>this.props.navigation.push('Search')
                                                  }>
                                    <Image style={styles.image} source={require('../../assets/Images/home.png')}/>
                                    <Text style={styles.text}>{strings('Search')}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.navBtn}>
                                <TouchableOpacity style={{flexDirection:'row'}}
                                                  onPress={()=>this.props.navigation.push('profile')
                                                  }>
                                    <Image style={styles.image} source={require('../../assets/Images/user.png')}/>
                                    <Text style={styles.text}>{strings('profile')}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.navBtn}>
                                <TouchableOpacity style={{flexDirection:'row'}}
                                onPress={()=>this.props.navigation.push('contact_us')
                                }>
                                    <Image style={styles.image} source={require('../../assets/Images/info.png')}/>
                                    <Text style={styles.text}>{strings('Contact_Us')}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.navBtn}>
                                <TouchableOpacity style={{flexDirection:'row'}}
                                onPress={()=>{
                                    this.props.navigation.push('ChangLanguage')}}>
                                    <Image style={styles.image} source={require('../../assets/Images/language.png')}/>
                                    <Text style={styles.text}>{strings('Change_Language')}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.navBtn}>
                                <TouchableOpacity style={{flexDirection:'row'}}
                                                  onPress={this.share.bind()}>
                                    <Image style={styles.image} source={require('../../assets/Images/network.png')}/>
                                    <Text style={styles.text}>{strings('Share')}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.navBtn}>
                                <TouchableOpacity style={{flexDirection:'row'}}
                                                  onPress={()=>{
                                                      this.props.navigation.push('Login')}}>
                                    <Image style={styles.image} source={require('../../assets/Images/login.png')}/>
                                    <Text style={styles.text}>{strings('Login')}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.navBtn}>
                                <TouchableOpacity style={{flexDirection:'row'}}
                                                  onPress={()=>{
                                    this.props.navigation.push('SignUp')}}>
                                    <Image style={styles.image} source={require('../../assets/Images/register.png')}/>
                                    <Text style={styles.text}>{strings('Sign_Up')}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.navBtn}>
                                <TouchableOpacity style={{flexDirection:'row'}}
                                                  onPress={()=>{
                                    this.props.navigation.push('terms')}}>
                                    <Image style={styles.image} source={require('../../assets/Images/terms.png')}/>
                                    <Text style={styles.text}>{strings('Terms')}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.navBtn}>
                                <TouchableOpacity style={{flexDirection:'row'}}
                                                  onPress={()=>this.props.navigation.push('Search')
                                                  }>
                                    <Image style={styles.image} source={require('../../assets/Images/logout.png')}/>
                                    <Text style={styles.text}>{strings('Logout')}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ borderBottomWidth: 1,
                                borderBottomColor: colors.grey0,
                                marginHorizontal:15,marginVertical:3}}/>

                        </View>
                    </View>
                </View>

            </ScrollView>
        );
    }
}

/**
 * Convert state to props.
 * @param state
 * @returns {object}
 */


export default DrawerContent;