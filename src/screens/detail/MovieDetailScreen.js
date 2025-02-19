import React from "react";
import {View, Text, Image, ScrollView, StyleSheet, Button, TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import VideoCard from "../../components/VideoCard";
import MovieCard from "../../components/MovieCard";

const MovieDetailScreen = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* Hình ảnh cố định ở trên cùng */}
            <Image source={require("../../../assets/Breaking Bad/breaking-bad-season-1.jpg")} style={styles.poster} />

            {/* Nút quay trở về */}
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <FontAwesome name="arrow-left" size={28} color="#fff" />
            </TouchableOpacity>

            {/* Nội dung bên dưới */}
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.details}>
                    <Text style={styles.title}>Star Wars: The Last Jedi</Text>
                    <Text style={styles.subtitle}>⏰ 152 minutes ⭐ 7.0 (IMDB)</Text>
                    <Text style={styles.tagline}>New adventure. New rival.</Text>
                    <Button title="Play" color="#E50914" />
                    <Text style={styles.sectionTitle}>Overview</Text>
                    <Text style={styles.overview}>Sonic, Knuckles, and Tails reunite against a powerful new adversary...</Text>
                    <Text style={styles.info}>Status: Released</Text>
                    <Text style={styles.info}>Release Date: Dec 19, 2024</Text>
                    <Text style={styles.info}>Director: Jeff Fowler</Text>
                    <Text style={styles.info}>Writer: Josh Miller, John Whittington</Text>

                    <Text style={styles.sectionTitle}>Official Videos</Text>
                    <ScrollView horizontal>
                        <VideoCard title="Trailer 1" thumbnail="https://via.placeholder.com/150x100" />
                        <VideoCard title="Trailer 2" thumbnail="https://via.placeholder.com/150x100" />
                    </ScrollView>

                    <Text style={styles.sectionTitle}>Similar Movies</Text>
                    <ScrollView horizontal>
                        <MovieCard title="Sonic the Hedgehog" image="https://via.placeholder.com/150x220" />
                        <MovieCard title="Sonic the Hedgehog 2" image="https://via.placeholder.com/150x220" />
                    </ScrollView>
                </View>
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
    },
    backButton: {
        position: "absolute",
        top: 40,
        left: 15,
        zIndex: 10,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        borderRadius: 25,
        padding: 5,
    },
    scrollContainer: {
        position: "absolute",
        paddingTop: 200, // Để nội dung không bị che bởi hình ảnh
    },
    details: {
        padding: 20,
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
    tagline: {
        fontStyle: "italic",
        color: "#bbb",
        marginBottom: 10,
    },
    sectionTitle: {
        color: "#E50914",
        marginTop: 20,
        marginBottom: 10,
        fontSize: 18,
        fontWeight: "bold",
    },
    overview: {
        color: "#ddd",
    },
    info: {
        color: "#bbb",
        marginTop: 5,
    },
});

export default MovieDetailScreen;
