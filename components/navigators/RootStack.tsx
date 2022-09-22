import React from 'react'
import Avi from './../../assets/avi/avatar.png'

// screens
import Welcome from "./../../screens/Welcome";
import Home from "./../../screens/Home";

// React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { colors } from '../colors';
import Greeting from '../Header/Greeting';
import Profile from '../Header/Profile';


const Stack = createStackNavigator();

type RootStackParamList = {
    Welcome: undefined;
    Home: undefined;
};

const RootStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: colors.graylight,
                        borderBottomWidth: 0,
                        shadowColor: "transparent",
                        shadowOpacity: 0,
                        elevation: 0,
                        height: 120,
                    },
                    headerTintColor: colors.secondary,
                    headerRightContainerStyle: {
                        paddingRight: 25
                    },
                    headerLeftContainerStyle: {
                        paddingLeft: 10
                    },
                    headerRight: () => (
                        <Profile
                            img={Avi}
                            imgContainerStyle={{ height: 25, width: 25 }} />
                    ),
                }}
                initialRouteName="Home"
            >
                <Stack.Screen
                    name="Welcome"
                    component={Welcome}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerTitle: (props) => (
                            <Greeting
                                mainText="Hey Jag!"
                                subText="Welcome back"
                                {...props} />
                        ),
                        headerLeft: () => <></>,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer >
    )
}

export default RootStack
