import React, { useState, useEffect } from "react";
// import { useFonts } from "expo-font";
// import { Inter_900Black } from "@expo-google-fonts/inter";
// import * as SplashScreen from "expo-splash-screen";
import {
	StyleSheet,
	View,
	Text,
	Image,
	TouchableOpacity,
	ScrollView,
} from "react-native";
import { Constants } from "expo-constants";

import GlobalFooter from "../Footers/GlobalFooter";
import GlobalHeader from "../Headers/GlobalHeader";

export default function HomeScreen({ navigation, AppState }) {
	const { allBooks, setAllBooks } = AppState;
	const {bookDetails, setBookDetails} = AppState;

	const handlePress = (element) => {
		// setAllBooks(element);
		setBookDetails(element);

		navigation.navigate("DetailedBook", { selectedBook: bookDetails, });
	};
	// const [fontsLoaded] = useFonts({
	// 	Inter_900Black,
	// 	InterSemiBoldItalic:
	// 		"https://rsms.me/inter/font-files/Inter-SemiBoldItalic.otf?v=3.12",
	// 	MontserratBold: require("../app/assets/font/Montserrat-Bold.ttf"),
	// 	MontserratRegular: require("../app/assets/font/Montserrat-Regular.ttf"),
	// });

	// useEffect(() => {
	// 	async function prepare() {
	// 		await SplashScreen.preventAutoHideAsync();
	// 	}
	// 	prepare();
	// }, []);

	// const onLayout = useCallback(async () => {
	// 	if (fontsLoaded) {
	// 		await SplashScreen.hideAsync();
	// 	}
	// }, [fontsLoaded]);

	// if (!fontsLoaded) return null;

	return (
		<ScrollView>
			<View style={styles.container}>
				<GlobalHeader AppState={AppState} navigation={navigation} />
				

				<View style={styles.body}>
					<Text style={styles.titleText}>Welcome back!</Text>
					<Text style={styles.subtitle}>
						We're glad to see you just
						<Text style={styles.subtitleIn}> 16 days</Text> after your last
						visit and can't wait to help you find your next page turner!
					</Text>

					<View>
						<Text style={styles.bookList}>Explore Books</Text>
						<ScrollView horizontal={true} style={{ marginVertical: 20 }}>
							{Object.keys(allBooks).map((element) => {
								return (
									<TouchableOpacity
										activeOpacity={0.6}
										key={element}
										onPress={() => handlePress(element)}
										accessibilityLabel="books"
									>
										<View testID="book">
											<Image
												source={{ uri: allBooks[element].imgUrl }}
												style={styles.bookImage}
											/>
											<Text>{allBooks[element].title}</Text>
											<Text>{allBooks[element].author}</Text>
										</View>
									</TouchableOpacity>
								);
							})}
						</ScrollView>
					</View>
				</View>

				<GlobalFooter AppState={AppState} navigation={navigation} />
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// paddingTop: Constants.statusBarHeight,
	},

	body: {
		flex: 8,
	},

	subtitle: {
		fontSize: 18,
		marginTop: 8,
	},

	subtitleIn: {
		fontWeight: "bold",
	},

	titleText: {
		fontWeight: "bold",
		fontSize: 31,
	},

	// Styling of the Book items

	bookList: {
		fontSize: 20,
		fontWeight: "bold",
		marginTop: 10,
	},

	bookImage: {
		width: 250,
		height: 400,
		marginRight: 20,
		borderRadius: 20,
	},
});
