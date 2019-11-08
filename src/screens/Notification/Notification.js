import React from 'react';
import {View, Text, Image} from 'react-native';

// project files
import styles from './styles'
import {colors} from "../../config/styles";
import Button from "../../components/Button/Button";

const Notification = (props) => {

    return (

        <View style={styles.Notification}>
            <View style={styles.imageView}>
                <View style={styles.imageV}>
                    <Image style={styles.image}
                           source={require('../../assets/images/green.png')}/>
                </View>
                <View style={styles.imageText}>
                    <View style={styles.description}>
                        <Text style={{fontSize:17 , color : colors.secondary}}>تم نشر فعاليتك باسم</Text>
                        <Text style={{fontSize:10 , color : colors.dateGreen }}>منذ 1 دقيقة</Text>
                    </View>
                    <Text style={{fontSize:17 , textAlign : 'right' , color : colors.secondary}}>المؤتمر الدولي الثقافي</Text>
                </View>
            </View>

        </View>
    )

}

export {Notification}