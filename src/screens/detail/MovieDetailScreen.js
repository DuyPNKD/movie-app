import React, {useRef, useState, useEffect} from "react";
import {View, Text, Image, ScrollView, StyleSheet, Button, TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import RelatedMovies from "../../components/relateMovie/relateMovie";
import {Animated} from "react-native";

const MovieDetailScreen = () => {
    const navigation = useNavigation();
    const relatedMovies = [
        {title: "Breaking Bad", image: require("../../../assets/Breaking Bad/breaking-bad-season-1.jpg")},
        {title: "Breaking Bad", image: require("../../../assets/Breaking Bad/breaking-bad-season-1.jpg")},
        {title: "Breaking Bad", image: require("../../../assets/Breaking Bad/breaking-bad-season-1.jpg")},
        {title: "Breaking Bad", image: require("../../../assets/Breaking Bad/breaking-bad-season-1.jpg")},
        {title: "Breaking Bad", image: require("../../../assets/Breaking Bad/breaking-bad-season-1.jpg")},
        {title: "Breaking Bad", image: require("../../../assets/Breaking Bad/breaking-bad-season-1.jpg")},
        {title: "Breaking Bad", image: require("../../../assets/Breaking Bad/breaking-bad-season-1.jpg")},
        {title: "Breaking Bad", image: require("../../../assets/Breaking Bad/breaking-bad-season-1.jpg")},
        {title: "Breaking Bad", image: require("../../../assets/Breaking Bad/breaking-bad-season-1.jpg")},
        {title: "Breaking Bad", image: require("../../../assets/Breaking Bad/breaking-bad-season-1.jpg")},
        {title: "Breaking Bad", image: require("../../../assets/Breaking Bad/breaking-bad-season-1.jpg")},
        {title: "Breaking Bad", image: require("../../../assets/Breaking Bad/breaking-bad-season-1.jpg")},
        {title: "Breaking Bad", image: require("../../../assets/Breaking Bad/breaking-bad-season-1.jpg")},
        {title: "Breaking Bad", image: require("../../../assets/Breaking Bad/breaking-bad-season-1.jpg")},
        {title: "Breaking Bad", image: require("../../../assets/Breaking Bad/breaking-bad-season-1.jpg")},
        {title: "Breaking Bad", image: require("../../../assets/Breaking Bad/breaking-bad-season-1.jpg")},
        {title: "Breaking Bad", image: require("../../../assets/Breaking Bad/breaking-bad-season-1.jpg")},
        {title: "Breaking Bad", image: require("../../../assets/Breaking Bad/breaking-bad-season-1.jpg")},
        {title: "Breaking Bad", image: require("../../../assets/Breaking Bad/breaking-bad-season-1.jpg")},
        {title: "Breaking Bad", image: require("../../../assets/Breaking Bad/breaking-bad-season-1.jpg")},
        {title: "Breaking Bad", image: require("../../../assets/Breaking Bad/breaking-bad-season-1.jpg")},
        {title: "Breaking Bad", image: require("../../../assets/Breaking Bad/breaking-bad-season-1.jpg")},
        {title: "Breaking Bad", image: require("../../../assets/Breaking Bad/breaking-bad-season-1.jpg")},
        {title: "Breaking Bad", image: require("../../../assets/Breaking Bad/breaking-bad-season-1.jpg")},
        {title: "Breaking Bad", image: require("../../../assets/Breaking Bad/breaking-bad-season-1.jpg")},
        {title: "Breaking Bad", image: require("../../../assets/Breaking Bad/breaking-bad-season-1.jpg")},
        {title: "Breaking Bad", image: require("../../../assets/Breaking Bad/breaking-bad-season-1.jpg")},
        {title: "Breaking Bad", image: require("../../../assets/Breaking Bad/breaking-bad-season-1.jpg")},
        {title: "Breaking Bad", image: require("../../../assets/Breaking Bad/breaking-bad-season-1.jpg")},
        {title: "Breaking Bad", image: require("../../../assets/Breaking Bad/breaking-bad-season-1.jpg")},
    ];
    // const scrollY = useRef(new Animated.Value(0)).current;
    // const [relatedMoviesPosition, setRelatedMoviesPosition] = useState(0);
    // const relatedMoviesRef = useRef(null); // Ref cho RelatedMovies
    // useEffect(() => {
    //     scrollY.addListener(({value}) => {
    //         if (relatedMoviesRef.current) {
    //             relatedMoviesRef.current.measure((x, y, width, height, pageX, pageY) => {
    //                 console.log("Vị trí Related Movies trên màn hình:", pageY);
    //                 setRelatedMoviesPosition(pageY);
    //             });
    //         }
    //     });

    //     return () => {
    //         scrollY.removeAllListeners();
    //     };
    // }, []);
    const handleScroll = (event) => {
        const positionX = event.nativeEvent.contentOffset.x;
        const positionY = event.nativeEvent.contentOffset.y;
        console.log(positionX, positionY);
    };

    return (
        <View style={styles.container}>
            {/* Hình ảnh cố định ở trên cùng */}
            <Image source={require("../../../assets/Breaking Bad/breaking-bad-season-1.jpg")} style={styles.poster} />

            {/* Nút quay trở về */}
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <FontAwesome name="arrow-left" size={28} color="#fff" />
            </TouchableOpacity>

            {/* Nội dung bên dưới */}
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.content}>
                    <Text style={styles.title}>Star Wars: The Last Jedi</Text>
                    <Text style={styles.subtitle}>⭐ 7.0 (IMDb)</Text>
                    <Text style={styles.overview}>Sonic, Knuckles, and Tails reunite against a powerful new adversary, Shadow, a mysterious villain with powers unlike anything they have faced before. With their abilities outmatched in every way, Team Sonic must seek out an unlikely alliance in hopes of stopping Shadow and protecting the planet.</Text>
                    <View style={styles.infoRow}>
                        <View style={styles.sectionBlock}>
                            <Text style={styles.sectionTitle}>Release Date:</Text>
                        </View>
                        <View style={styles.infoBlock}>
                            <Text style={styles.info}>2024</Text>
                        </View>
                    </View>
                    <View style={styles.infoRow}>
                        <View style={styles.sectionBlock}>
                            <Text style={styles.sectionTitle}>Country:</Text>
                        </View>
                        <View style={styles.infoBlock}>
                            <Text style={styles.info}>America</Text>
                        </View>
                    </View>
                    <View style={styles.infoRow}>
                        <View style={styles.sectionBlock}>
                            <Text style={styles.sectionTitle}>Genres:</Text>
                        </View>
                        <View style={styles.infoBlock}>
                            <Text style={styles.info}>Actions</Text>
                        </View>
                    </View>
                    <View style={styles.infoRow}>
                        <View style={styles.sectionBlock}>
                            <Text style={styles.sectionTitle}>Duration:</Text>
                        </View>
                        <View style={styles.infoBlock}>
                            <Text style={styles.info}>158 minutes</Text>
                        </View>
                    </View>
                    <View style={styles.infoRow}>
                        <View style={styles.sectionBlock}>
                            <Text style={styles.sectionTitle}>Director:</Text>
                        </View>
                        <View style={styles.infoBlock}>
                            <Text style={styles.info}>Otto Bathurst</Text>
                        </View>
                    </View>
                    <View style={styles.infoRow}>
                        <View style={styles.sectionBlock}>
                            <Text style={styles.sectionTitle}>Actor:</Text>
                        </View>
                        <View style={styles.infoBlock}>
                            <Text style={styles.info}>Pablo Schreiber, Shabana Azmi, Natasha Culzac</Text>
                        </View>
                    </View>
                </View>

                <RelatedMovies movies={relatedMovies} onScroll={this.handleScroll} scrollEventThrottle={16} />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#04152D",
    },
    poster: {
        width: "100%",
        height: 200,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1, // Giữ hình ảnh trên cùng
    },
    backButton: {
        position: "absolute",
        top: 40,
        left: 15,
        zIndex: 2, // Giữ nút trên cùng
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        borderRadius: 25,
        padding: 5,
    },
    scrollContainer: {
        paddingTop: 200, // Để nội dung bắt đầu dưới tấm poster
        backgroundColor: "rgba(4, 21, 45, 0.95)", // Màu nền gần giống tấm poster để tạo hiệu ứng hòa trộn
    },
    content: {
        padding: 10,
        backgroundColor: "#04152D", // Đảm bảo khi kéo lên, nội dung "đi vào" phía sau poster
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#fff",
    },
    subtitle: {
        color: "#aaa",
        marginVertical: 5,
    },
    overview: {
        color: "#ddd",
        marginBottom: 10,
    },
    infoRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 5,
    },
    sectionBlock: {
        flex: 1,
        marginRight: 0, // Khoảng cách giữa sectionBlock và infoBlock
    },
    infoBlock: {
        flex: 2,
    },
    sectionTitle: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "bold",
    },
    info: {
        color: "#bbb",
    },
    categoryTitle: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
        marginVertical: 10,
        marginLeft: 20,
    },
    relatedMovies: {
        position: "absolute", // Ban đầu đặt ở vị trí này
        width: "100%",
        backgroundColor: "#04152D",
        paddingVertical: 10,
    },
    sticky: {
        top: 200,
        position: "absolute",
        zIndex: 10,
    },
});

export default MovieDetailScreen;
