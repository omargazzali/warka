import React from "react";
import { View, Image, Text} from "react-native";
import styles from "./styles";

class SectionHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props)
        return (
         <View style={[styles.headerViewStyle ]}>
             <Image style={styles.nav}
                               source={require('../../assets/images/blackarrow.png')}/>
            <Text style={[styles.text , {fontSize : this.props.fontSize}]}> {this.props.title}</Text>
        </View>
        );
    }
};


export {SectionHeader}