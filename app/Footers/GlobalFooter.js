import React, { useState, useEffect } from "react";
import {
	StyleSheet,
	View,
	Text,
	Image,
	TouchableOpacity,
	ScrollView,
} from "react-native";

export default function GlobalFooter({ navigation }) {

	return (
		<View style={styles.footerContainer}>
				<Text>Home</Text>
				<Text>DetailedBook</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	footerContainer: {
		flex: 1,
	},
});
