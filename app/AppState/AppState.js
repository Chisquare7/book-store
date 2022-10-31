import React, { useState, useEffect } from "react";
import bookData from '../data/data.json'
import { Text, View, Image } from "react-native";

import AppNavigation from '../AppNavigation/AppNavigation';



export default function AppState() {
    const [allBooks, setAllBooks] = useState(bookData);
    // const [bookDetails, setBookDetails] = useState({});
    const [bookDetails, setBookDetails] = useState(bookData.id);

    const AppState = {
        allBooks, setAllBooks,
        bookDetails, setBookDetails
    }
    // const DisplayBook = bookData.map(
    //     (book) => {
    //         return (
    //             <View key={book.id}>
    //                 <Image source={book.imgUrl} />
    //                 <Text>{ book.title }</Text>
    //                 <Text>{ book.author }</Text>
    //             </View>
    //         )
    //     }
    // )
    
    return <AppNavigation AppState={AppState} />;
}