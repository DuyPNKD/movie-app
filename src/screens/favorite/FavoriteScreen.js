import React, {useState} from "react";
import {View, Text, StyleSheet, Image, FlatList, TouchableOpacity, Dimensions} from "react-native";
import {useNavigation} from "@react-navigation/native";

const {width} = Dimensions.get("window");
const movieWidth = (width - 40) / 2;

const FavoriteScreen = () => {
    const navigation = useNavigation();
    const [favorites, setFavorites] = useState([
        {
            id: "1",
            title: "The Wild",
            poster: require("../../../assets/recommend/poster1.jpg"),
        },
        {
            id: "2",
            title: "The Wild Robot",
            poster: require("../../../assets/recommend/poster2.jpg"),
        },
        {
            id: "3",
            title: "Mes Autres Vies De Chien",
            poster: require("../../../assets/recommend/poster3.jpg"),
        },
        {
            id: "4",
            title: "Mavka",
            poster: require("../../../assets/recommend/poster4.webp"),
        },
    ]);

    const renderMovieItem = ({item}) => (
        <TouchableOpacity style={styles.movieItem} onPress={() => navigation.navigate("DetailPage", {id: item.id})}>
            <Image source={item.poster} style={styles.movieImage} />
            <Text style={styles.movieTitle} numberOfLines={2}>
                {item.title}
            </Text>
        </TouchableOpacity>
    );

    if (favorites.length === 0) {
        return (
            <View style={styles.container}>
                <Text style={styles.headerText}>Danh sách yêu thích</Text>
                <View style={styles.emptyContainer}>
                    <Text style={styles.emptyText}>Không có gì</Text>
                    <Text style={styles.emptySubText}>Vào trang chủ để thêm phim mới vào danh sách</Text>
                    <TouchableOpacity
                        style={styles.homeButton}
                        onPress={() => {
                            navigation.reset({
                                index: 0,
                                routes: [{name: "Home"}],
                            });
                        }}
                    >
                        <Text style={styles.homeButtonText}>Trang chủ</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Danh sách yêu thích</Text>
            <FlatList data={favorites} renderItem={renderMovieItem} keyExtractor={(item) => item.id} numColumns={2} contentContainerStyle={styles.listContainer} showsVerticalScrollIndicator={false} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#04152D",
        paddingTop: 80,
        width: "100%",
    },
    headerText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#FFFFFF",
        marginBottom: 20,
        paddingHorizontal: 16,
    },
    emptyContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        transform: [{translateY: -60}],
    },
    emptyText: {
        fontSize: 18,
        color: "#FFFFFF",
        marginBottom: 10,
    },
    emptySubText: {
        fontSize: 14,
        color: "#8E95A5",
        textAlign: "center",
        marginBottom: 20,
    },
    homeButton: {
        backgroundColor: "#FDC252",
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 10,
        marginTop: 10,
        width: "100%",
    },
    homeButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
    },
    listContainer: {
        padding: 8,
    },
    movieItem: {
        flex: 1,
        margin: 8,
        maxWidth: "50%",
    },
    movieImage: {
        width: "100%",
        height: movieWidth * 1.5,
        borderRadius: 10,
        marginBottom: 8,
    },
    movieTitle: {
        color: "#FFFFFF",
        fontSize: 14,
        textAlign: "center",
    },
});

export default FavoriteScreen;
