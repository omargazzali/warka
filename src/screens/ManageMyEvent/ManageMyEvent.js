import {Picker, Image, View, ImageBackground, TextInput, TouchableOpacity, Text, FlatList} from 'react-native';
import React from "react";
import Container from "../../components/containers/Container";
import {Header} from "../../components/header/Header";
import RoundedTabs from "../../components/RoundedTabs/RoundedTabs";
import {LongActivity} from "../LongActivity/LongActivity";
import styles from "../Home/styles";
import Content from "../../components/containers/Content";
import {Footer} from "../../components/Footer/Footer";
import {InteresetedEvent} from "./InterestedEvent/InteresetedEvent";
import {ManagementEvents} from "./ManagementEvents/ManagementEvents";
import {SharedEvent} from "./SharedEvent/SharedEvent";

const mock = [
    {label:0}, {label:1}, {label:2}
]

const mockTabs = [
    {
        key: 0,
        label: "فعاليات  مشترك فيها"
    },
    {
        key: 1,
        label: "فعاليات معتم بها"
    },
    {
        key: 2,
        label: "إدارة فعالياتي"
    },
];

export default class ManageMyEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 0,

        }
    }


    render() {

        return (
            <Container style={styles.view}>
                <Header type={"type"}
                        navigation={this.props.navigation}
                        children={<RoundedTabs
                            list={mockTabs}
                            onChange={(i) => {
                                this.setState({selectedTab: i.key})
                            }}
                            selected={this.state.selectedTab}
                        />}/>
                <Content style={{marginTop: '5%',marginHorizontal:'5%'}}>
                    <View style={{alignItems: 'center'}}>
                        {this.state.selectedTab === 0 ?
                            <FlatList
                            data={mock}
                            keyExtractor={item => `tab_${item.key}`}
                            renderItem={({item}) => <SharedEvent/>}
                            //contentContainerStyle={styles.list}
                        /> : null}
                        {this.state.selectedTab === 1 ? <FlatList
                            data={mock}
                            keyExtractor={item => `tab_${item.key}`}
                            renderItem={({item}) => <InteresetedEvent/>}
                            //contentContainerStyle={styles.list}
                        /> : null}
                        {this.state.selectedTab === 2 ? <FlatList
                            data={mock}
                            keyExtractor={item => `tab_${item.key}`}
                            renderItem={({item}) => <ManagementEvents item={item}/>}
                            //contentContainerStyle={styles.list}
                        /> : null}
                    </View>

                </Content>
            </Container>


        );
    }
}