import React from "react";
import {View, Text, StyleSheet} from "react-native";
import Svg, {Defs, LinearGradient, Stop, Rect} from "react-native-svg";
import MovieCard from "../../components/MovieCard"; // Đảm bảo bạn đã có component này

const RelatedMovies = ({movies}) => {
    return (
        <View style={styles.container}>
            {/* Dải màu mờ dần */}
            <Svg height="20" width="100%">
                <Defs>
                    <LinearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                        <Stop offset="0" stopColor="white" stopOpacity="0.05" />
                        <Stop offset="1" stopColor="black" stopOpacity="0" />
                    </LinearGradient>
                </Defs>
                <Rect width="100%" height="20" fill="url(#grad)" />
            </Svg>

            <Text style={styles.title}>Related movies</Text>
            <View style={styles.moviesContainer}>
                {movies.map((movie, index) => (
                    <MovieCard key={index} title={movie.title} image={movie.image} />
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingBottom: 20,
        backgroundColor: "#04152D", // Nền đen như trong ảnh
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    moviesContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        paddingHorizontal: 10,
    },
});

export default RelatedMovies;
