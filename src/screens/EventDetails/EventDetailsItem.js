import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

// project files
import styles from './styles'
import {colors} from "../../config/styles";
import Button from "../../components/Button/Button";

const EventDetailsItem = (props) => {
    return (

        <View style={styles.LongActivity}>
            <View style={styles.imageView}>
                <Image style={styles.image}
                       source={require('../../assets/images/photo1.png')}/>
                <View style={styles.imageText}>
                    <Text>المؤتمر الدولي</Text>
                    <Text>(الثقافة والتنمية)</Text>
                    <View style={{
                        width: '92%',
                        height: 26,
                        marginVertical:'1%'
                    }}>
                        <Button rounded={true} color={colors.grey1} title={"مؤتمر"}/>
                    </View>
                </View>
            </View>
            <View style={styles.date}>
                <Text>تاريخ نشر الفعالية</Text>
                <Text> ٣٠,ابريل ٢٠١٩</Text>
            </View>
            <View style={styles.address}>
                <Text>♣♣♣♣♣</Text>
                <Text>مركز ابن النفيس المركزي</Text>
            </View>
            <View style={styles.description}>
                <Text style={{fontSize:18}} numberOfLines={3}>ظل مصطلح الثقافة مصطلحات متجذرا ومتعالقا بمختلف العلوم المعرفية، والأنشطة
                    الشعبية والفنية، ذلك أننا نجد في معاجم اللغة أن الثقافة تعني الفهم وضبط المعرفة الواسعة. كما أن
                    الدراسات العلمية قد أحصت أكثر من مائة وعشرين تعريفا للثقافة. وهي تعاريف في مجملها ربطت الثقافة
                    بالموسوعية والشمولية كما نلمس عند إدوار تايلور: “الثقافة هي ذلك الكل المركب المشتمل على المعارف
                    والمعتقدات، والفن،
                    والقانون، والأخلاق، والتقاليد وكل القابليات
                    والعادات الأخرى التي يكتسبها الإنسان في المجتمع”.</Text>

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
                <View style={styles.shareBtn}>
                    <Image style={styles.footerImage}
                           source={require('../../assets/images/square.png')}/>
                </View>
            </View>

        </View>
    )

}

export {EventDetailsItem}