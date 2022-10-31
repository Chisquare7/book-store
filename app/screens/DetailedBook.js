import React, { useState, useEffect } from "react";
import {
	StyleSheet,
	View,
	Text,
	Image,
	TouchableOpacity,
	ScrollView,
} from "react-native";


export default function DetailedBook({ route, AppState }) {
	const { bookDetails } = AppState;
	// const { bookDetails } = route;
    // const selectedBookData = route.params.selectedBook;

    console.log(route);
	// console.log(bookDetails);
	

	return (
		<View style={styles.container}>
			<View style={styles.navContainer}>
				<Text style={styles.navHome}>Home</Text>
				<View style={styles.navIcons}>
					<Image
						style={styles.navItem}
						source={require("../assets/search.png")}
					/>
					<Image source={require("../assets/basket.png")} />
				</View>
			</View>

			<View>
				<View>
					{/* <Text>{selectedBookData.title}</Text>
					<Text>{selectedBookData.author}</Text> */}
					{/* <Image source={{ uri: allBooks.imgUrl }} style={styles.bookImage} />
					<Text>{allBooks.title}</Text>
					<Text>{allBooks.author}</Text> */}
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 10,
	},

	footerNav: {},

	footerIcons: {},

	navContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginTop: 20,
		marginBottom: 40,
		borderBottomColor: "#eee",
		borderBottomWidth: 5,
		paddingBottom: 10,
	},

	navHome: {
		fontSize: 20,
		fontWeight: "bold",
	},

	navIcons: {
		flexDirection: "row",
	},

	navItem: {
		marginRight: 20,
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