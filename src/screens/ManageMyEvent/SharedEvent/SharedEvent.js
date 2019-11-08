import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

// project files
import styles from './styles'
import {colors} from "../../../config/styles";
import Button from "../../../components/Button/Button";

const SharedEvent = (props) => {
    return (

        <View style={styles.LongActivity}>
            <View style={styles.imageView}>
                <Image style={styles.image}
                       source={require('../../../assets/images/photo1.png')}/>
                <View style={styles.imageText}>
                    <Text>الفعاليات المشاركة فيها</Text>
                    <Text>(الثقافة والتنمية)</Text>
                    <Text>القنطيرة،المغرب</Text>
                </View>
            </View>
            <View style={styles.description}>

            </View>
            <View style={styles.date}>
                <Text>♦ من يناير 2019</Text>
                <Text> إلى 12 سبتمر 2019</Text>
            </View>
            <View style={styles.address}>
                <Text>♣مركز ابن النفيس المركزي</Text>
            </View>
            <View style={styles.btns}>
                <View style={{marginHorizontal: '1%'}}>
                    <Button rounded={true} color={colors.grey1}  title={"مؤتمر"}/>
                </View>
                <View style={{marginHorizontal: '1%'}}>
                    <Button rounded={true} color={colors.grey1} title={"برسوم"}/>
                </View>
            </View>
            <View style={styles.footerBtn}>

                <TouchableOpacity onPress={props.onPress}>
                    <View style={styles.notificationBtn}>
                        <Image style={styles.footerImage}
                               source={require('../../../assets/images/bell.png')}/>
                    </View>
                </TouchableOpacity>
                <View style={styles.shareBtn}>
                    <Image style={styles.footerImage}
                           source={require('../../../assets/images/share.png')}/>
                </View>
            </View>

        </View>
    )

}

export {SharedEvent}