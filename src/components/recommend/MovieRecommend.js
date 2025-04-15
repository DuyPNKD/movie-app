import React from "react";
import {View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Dimensions} from "react-native";
import {useNavigation} from "@react-navigation/native";

const {width} = Dimensions.get("window");
const movieWidth = (width - 40) / 2; // 2 movies per row, 20 padding on each side

const MovieRecommend = () => {
    const navigation = useNavigation();

    const recommendedMovies = [
        {
            id: "1",
            title: "The Wild",
            poster_path: require("../../../assets/recommend/poster1.jpg"),
        },
        {
            id: "2",
            title: "The Wild Robot",
            poster_path: require("../../../assets/recommend/poster2.jpg"),
        },
        {
            id: "3",
            title: "Mes Autres Vies De Chien",
            poster_path: require("../../../assets/recommend/poster3.jpg"),
        },
        {
            id: "4",
            title: "Mavka",
            poster_path: require("../../../assets/recommend/poster4.webp"),
        },
        {
            id: "5",
            title: "The Wild",
            poster_path: require("../../../assets/recommend/poster1.jpg"),
        },
        {
            id: "6",
            title: "The Wild Robot",
            poster_path: require("../../../assets/recommend/poster2.jpg"),
        },
        {
            id: "7",
            title: "Mes Autres Vies De Chien",
            poster_path: require("../../../assets/recommend/poster3.jpg"),
        },
        {
            id: "8",
            title: "Mavka",
            poster_path: require("../../../assets/recommend/poster4.webp"),
        },
        {
            id: "9",
            title: "The Wild",
            poster_path: require("../../../assets/recommend/poster1.jpg"),
        },
        {
            id: "10",
            title: "The Wild Robot",
            poster_path: require("../../../assets/recommend/poster2.jpg"),
        },
        // Thêm các phim khác tương tự
    ];

    const renderItem = ({item, index}) => (
        <TouchableOpacity style={styles.movieItem} onPress={() => navigation.navigate("DetailPage", {item})}>
            <Image source={item.poster_path} style={styles.movieImage} resizeMode="cover" />
            <Text style={styles.movieTitle} numberOfLines={2}>
                {item.title}
            </Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>Đề xuất cho bạn</Text>
            <FlatList data={recommendedMovies} renderItem={renderItem} keyExtractor={(item) => item.id} numColumns={2} showsVerticalScrollIndicator={false} scrollEnabled={false} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        paddingHorizontal: 10,
        marginBottom: 40,
        paddingLeft: 15,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#FFFFFF",
        marginBottom: 15,
    },
    movieItem: {
        width: movieWidth,
        marginHorizontal: 5,
        marginBottom: 20,
    },
    movieImage: {
        width: "100%",
        height: movieWidth * 1.5,
        borderRadius: 10,
    },
    movieTitle: {
        color: "#FFFFFF",
        fontSize: 14,
        marginTop: 5,
        textAlign: "center",
    },
});

export default MovieRecommend;
