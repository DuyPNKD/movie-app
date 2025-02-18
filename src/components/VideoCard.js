import React from "react";
import {View, Text, Image, StyleSheet} from "react-native";

const MovieCard = ({title, image}) => {
    return (
        <View style={styles.card}>
            <Image source={{uri: image}} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        marginRight: 10,
        width: 150,
    },
    image: {
        width: "100%",
        height: 220,
        borderRadius: 10,
    },
    title: {
        color: "#fff",
        marginTop: 5,
    },
});

export default MovieCard;
