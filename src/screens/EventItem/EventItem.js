import React from 'react';
import {View, Text, Image , TouchableOpacity} from 'react-native';

// project files
import styles from './styles'
import {colors} from "../../config/styles";
import Button from "../../components/Button/Button";
import DatesFormat from "../../components/DatesFormat/DatesFormat";

const EventItem = (props) => {

    return (
        <View style={styles.LongActivity}>
            <View style={styles.imageView}>
                <Image style={styles.image}
                       source={require('../../assets/images/photo1.png')}/>
                <View style={styles.imageText}>
                    <Text numberOfLines={2} style = {styles.imgFirstTxt}>المؤتمر الدولي{"\n"}(الثقافة والتنمية)</Text>
                    <Text style = {styles.imgSecondTxt}>القنطيرة،المغرب</Text>
                </View>
            </View>
            <View style={styles.date}>
                 <DatesFormat   fromDate= '12 فبراير'  toDate= '17 نوفمبر 2019'/> 
            </View>
            
            <View style={styles.address}>
                <Text style = {styles.addressText}>♣ مركز ابن النفيس المركزي</Text>
            </View>
            <View style={styles.btns}>
                <View style={{marginHorizontal: '1%'}}>
                    <Button rounded={true} color={colors.grey1 } textColor={colors.textPrimary} title={"مؤتمر"}/>
                </View>
                <View style={{marginHorizontal: '1%'}}>
                    <Button rounded={true} color={colors.grey1} textColor={colors.textPrimary} title={"برسوم"}/>
                </View>
            </View>
            <View style={styles.footerBtn}>

                <TouchableOpacity onPress={props.onPress}>
                    <View style={styles.notificationBtn}>
                        <Image style={styles.footerImage}
                               source={require('../../assets/images/bell.png')}/>
                    </View>
                </TouchableOpacity>
                <View style={styles.shareBtn}>
                    <Image style={styles.footerImage}
                           source={require('../../assets/images/share.png')}/>
                </View>
            </View>
        </View>
        
    )

}

export {EventItem}