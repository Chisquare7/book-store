import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import DetailedBook from "../screens/DetailedBook";

const Stack = createNativeStackNavigator();

export default function AppNavigation({ AppState }) {
    return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Home" options={{headerShown: false}}>
					{(props) => <HomeScreen {...props} AppState={AppState} />}
                </Stack.Screen>
                
                <Stack.Screen name="DetailedBook" options={{headerShown: true}}>
					{(props) => <DetailedBook {...props} AppState={AppState} />}
                </Stack.Screen>
                
			</Stack.Navigator>
		</NavigationContainer>
	);
}