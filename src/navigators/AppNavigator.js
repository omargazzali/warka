import {createAppContainer, createStackNavigator} from "react-navigation";
import Home from "../screens/Home/Home";
import React from "react";
import Search from "../screens/Search/Search";
import AddEvent from "../screens/AddEvent/AddEvent";
import EventType from "../screens/EventType/EventType";
import EventDetails from "../screens/EventDetails/EventDetails";
import MyAccount from "../screens/Profile/MyAccount";
import Profile from "../screens/Profile/Profile";
import ManageMyEvent from "../screens/ManageMyEvent/ManageMyEvent";
import Messages from "../screens/Messages/Messages";
import Notifications from "../screens/Notification/Notifications";


const AppNavigator = createStackNavigator(
    {
        Home: {
            screen: Home,
            navigationOption: {
                title: "Home",
                header: null,

            }
        },
        Search: {
            screen: Search,
            navigationOption: {
                title: "Search",
                header: null,

            }
        },
        AddEvent: {
            screen: AddEvent,
            navigationOption: {
                title: "AddEvent",
                header: null,

            }
        },
        EventType: {
            screen: EventType,
            navigationOption: {
                title: "EventType",
                header: null,

            }
        },
        EventDetails: {
            screen: EventDetails,
            navigationOption: {
                title: "EventDetails",
                header: null,

            }
        },
        MyAccount: {
            screen: MyAccount,
            navigationOption: {
                title: "MyAccount",
                header: null,

            }
        },
        Profile: {
            screen: Profile,
            navigationOption: {
                title: "Profile",
                header: null,

            }
        },
        ManageMyEvent: {
            screen: ManageMyEvent,
            navigationOption: {
                title: "ManageMyEvent",
                header: null,

            }
        },
        Messages: {
            screen: Messages,
            navigationOption: {
                title: "Messages",
                header: null,

            }
        },
        Notifications: {
            screen: Notifications,
            navigationOption: {
                title: "Notifications",
                header: null,

            }
        },
    },
    {
        initialRouteName: "Home",
        headerMode: 'none',

    }
);
export default createAppContainer(AppNavigator);
