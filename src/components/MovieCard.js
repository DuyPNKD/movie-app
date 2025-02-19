import React from "react";
import {View, Text, Image, StyleSheet} from "react-native";

const MovieCard = ({title, image}) => {
    return (
        <View style={styles.card}>
            <Image source={image} style={styles.image} />
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        marginRight: 0,
        width: 165,
    },
    image: {
        width: "100%",
        height: 100,
        borderRadius: 10,
        marginTop: 10,
    },
});

export default MovieCard;
