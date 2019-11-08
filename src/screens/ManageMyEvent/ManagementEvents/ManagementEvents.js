import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

// project files
import styles from './styles'
import {colors} from "../../../config/styles";
import Button from "../../../components/Button/Button";

const ManagementEvents = (props) => {
   console.log(props.item['label'])
        if(props.item['label'] === 0) {
            return (

                <View style={styles.LongActivity}>
                    <View style={styles.imageView}>
                        <View style={{marginTop: '10%'}}>
                            <View style={{
                                width: 94, height: 27, backgroundColor: '#11D08E', borderRadius: 16,
                                justifyContent: 'center', alignItems: 'center'
                            }}>
                                <Text>تم النشر</Text>
                            </View>
                            <Image style={styles.image}
                                   source={require('../../../assets/images/photo1.png')}/>
                        </View>
                        <View style={styles.imageText}>
                            <Text>ادارة فعالياتي</Text>
                            <Text>(الثقافة والتنمية)</Text>
                            <Text>القنطيرة،المغرب</Text>
                        </View>
                    </View>

                    <View style={styles.date}>
                        <Text>♦ من يناير 2019</Text>
                        <Text> إلى 12 سبتمر 2019</Text>
                    </View>

                    <View style={styles.btns}>
                        <View style={{marginHorizontal: '1%'}}>
                            <Button rounded={true} color={colors.grey1} title={"مؤتمر"}/>
                        </View>
                        <View style={{marginHorizontal: '1%'}}>
                            <Button rounded={true} color={colors.grey1} title={"برسوم"}/>
                        </View>
                    </View>
                    <View style={styles.footerBtn}>

                        <TouchableOpacity onPress={props.onPress}>
                            <View style={styles.notificationBtn}>
                                <Image style={styles.footerImage}
                                       source={require('../../../assets/images/cyan.png')}/>
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
    else if(props.item['label'] === 1) {
        return (

            <View style={styles.LongActivity}>
                <View style={styles.imageView}>
                    <View style={{marginTop: '10%'}}>
                        <View style={{
                            width: 94, height: 27, backgroundColor: '#1178D0', borderRadius: 16,
                            justifyContent: 'center', alignItems: 'center'
                        }}>
                            <Text>قيد المراجعة</Text>
                        </View>
                        <Image style={styles.image}
                               source={require('../../../assets/images/photo1.png')}/>
                    </View>
                    <View style={styles.imageText}>
                        <Text>ادارة فعالياتي</Text>
                        <Text>(الثقافة والتنمية)</Text>
                        <Text>القنطيرة،المغرب</Text>
                    </View>
                </View>

                <View style={styles.date}>
                    <Text>♦ من يناير 2019</Text>
                    <Text> إلى 12 سبتمر 2019</Text>
                </View>

                <View style={styles.btns}>
                    <View style={{marginHorizontal: '1%'}}>
                        <Button rounded={true} color={colors.grey1} title={"مؤتمر"}/>
                    </View>
                    <View style={{marginHorizontal: '1%'}}>
                        <Button rounded={true} color={colors.grey1} title={"برسوم"}/>
                    </View>
                </View>
                <View style={styles.footerBtn}>

                    <TouchableOpacity onPress={props.onPress}>
                        <View style={styles.notificationBtn}>
                            <Image style={styles.footerImage}
                                   source={require('../../../assets/images/cyan.png')}/>
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
        else if(props.item['label'] === 2) {
            return (

                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>

                    <View style={styles.LongActivity}>
                    <View style={styles.imageView}>
                        <View style={{marginTop: '10%'}}>
                            <View style={{
                                width: 94, height: 27, backgroundColor: '#E89E53', borderRadius: 16,
                                justifyContent: 'center', alignItems: 'center'
                            }}>
                                <Text>مسودة</Text>
                            </View>
                            <Image style={styles.image}
                                   source={require('../../../assets/images/photo1.png')}/>
                        </View>
                        <View style={styles.imageText}>
                            <Text>ادارة فعالياتي</Text>
                            <Text>(الثقافة والتنمية)</Text>
                            <Text>القنطيرة،المغرب</Text>
                        </View>
                    </View>

                    <View style={styles.date}>
                        <Text>♦ من يناير 2019</Text>
                        <Text> إلى 12 سبتمر 2019</Text>
                    </View>

                    <View style={styles.btns}>
                        <View style={{marginHorizontal: '1%'}}>
                            <Button rounded={true} color={colors.grey1} title={"مؤتمر"}/>
                        </View>
                        <View style={{marginHorizontal: '1%'}}>
                            <Button rounded={true} color={colors.grey1} title={"برسوم"}/>
                        </View>
                    </View>
                    <View style={styles.footerBtn}>

                        <TouchableOpacity onPress={props.onPress}>
                            <View style={styles.notificationBtn}>
                                <Image style={styles.footerImage}
                                       source={require('../../../assets/images/cyan.png')}/>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.shareBtn}>
                            <Image style={styles.footerImage}
                                   source={require('../../../assets/images/share.png')}/>
                        </View>
                    </View>

                </View>
                    <Image style={{width:57,height:57}}
                           source={require('../../../assets/images/red.png')}/>
                </View>
            )
        }
        else
            return null

}

export {ManagementEvents}