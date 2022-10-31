import React, { useState, useEffect } from "react";
import {
	StyleSheet,
	View,
	Text,
	Image,
	TouchableOpacity,
	ScrollView,
} from "react-native";

export default function GlobalHeader({ navigation }) {
	return (
		<View style={styles.headerContainer}>
			<Text style={styles.navHome}>Home</Text>
			<Text>Book StoreApp</Text>
			<Image source={require("../assets/basket.png")} />
		</View>
	);
}

const styles = StyleSheet.create({
	headerContainer: {
		flex: 1,
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
});
