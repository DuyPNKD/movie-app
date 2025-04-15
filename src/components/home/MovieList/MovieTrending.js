import {useNavigation} from "@react-navigation/native";
import React from "react";
import {TouchableOpacity} from "react-native";
import {FlatList, View, Text, Image, StyleSheet} from "react-native";
import CategoryMain from "../CategoryMain";

const movies = [
    {
        id: "1",
        title: "Soul",
        year: "2020",
        image: require("../home.png"), // Thay bằng URL hình ảnh thực tế
    },
    {
        id: "2",
        title: "Soul",
        year: "2020",
        image: require("../home.png"),
    },
    {
        id: "3",
        title: "Soul",
        year: "2020",
        image: require("../home.png"),
    },
    {
        id: "4",
        title: "Soul",
        year: "2020",
        image: require("../home.png"),
    },
    {
        id: "5",
        title: "Soul",
        year: "2020",
        image: require("../home.png"),
    },
    {
        id: "6",
        title: "Soul",
        year: "2020",
        image: require("../home.png"),
    },
    {
        id: "7",
        title: "Soul",
        year: "2020",
        image: require("../home.png"),
    },
    {
        id: "8",
        title: "Soul",
        year: "2020",
        image: require("../home.png"),
    },
    {
        id: "9",
        title: "Soul",
        year: "2020",
        image: require("../home.png"),
    },
    {
        id: "10",
        title: "Soul",
        year: "2020",
        image: require("../home.png"),
    },
    // thêm nhiều bộ phim nếu cần
];
const CategoryTrending = ({topic = "Trending"}) => {
    const navigation = useNavigation();
    const renderItem = ({item}) => (
        <TouchableOpacity onPress={() => navigation.navigate("DetailPage", {item})} style={styles.itemContainer}>
            <Image source={require("../home.png")} style={styles.image} />
            <Text style={styles.title}>
                {item.title} ({item.year})
            </Text>
        </TouchableOpacity>
    );

    return <CategoryMain topic={topic} data={movies} renderItem={renderItem} navigation={navigation} />;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#04152D",
        padding: 10,
        paddingTop: 20,
    },
    heading: {
        flexDirection: "row",
        justifyContent: "space-between",
        top: 15,
        marginBottom: 20,
    },
    titleCategory: {
        flexDirection: "row",
    },
    iconBack: {
        height: 25,
        width: 25,
        margin: 5,
        marginRight: 10,
    },
    header: {
        color: "#fff",
        fontSize: 22,
        marginBottom: 10,
        fontWeight: "bold",
    },
    iconSearch: {
        margin: 15,
    },
    itemContainer: {
        flex: 1,
        margin: 10,
        backgroundColor: "#1c1c1c",
        borderRadius: 10,
        padding: 10,
        alignItems: "center",
    },
    image: {
        width: 100, // điều chỉnh kích thước
        height: 150, // điều chỉnh kích thước
        borderRadius: 10,
    },
    title: {
        color: "#fff",
        textAlign: "center",
        fontWeight: "bold",
    },
});

export default CategoryTrending;
