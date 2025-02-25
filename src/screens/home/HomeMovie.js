import React from "react";
import {
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import HeaderMovie from "../../components/home/MovieHeader";
import CategoryHome from "../../components/home/CategoryHome";
import CategoryTrending from "../../components/home/MovieTrending";
import CategoryPopular from "../../components/home/MoviePopular";
const HomeMovie = ({ navigation }) => {
  const data = [
    {
      id: 1,
      image: require("../../../assets/home/home.png"),
      title: "Sonic the Hedgehog 3",
    },
    {
      id: 2,
      image: require("../../../assets/home/home.png"),
      title: "Sonic the Hedgehog 3",
    },
    {
      id: 3,
      image: require("../../../assets/home/home.png"),
      title: "Sonic the Hedgehog 3",
    },
    {
      id: 4,
      image: require("../../../assets/home/home.png"),
      title: "Sonic the Hedgehog 3",
    },
    {
      id: 5,
      image: require("../../../assets/home/home.png"),
      title: "Sonic the Hedgehog 3",
    },
    {
      id: 6,
      image: require("../../../assets/home/home.png"),
      title: "Sonic the Hedgehog 3",
    },
  ];

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        {/* Header */}
        <HeaderMovie />

        {/* Poster Section */}
        <View style={styles.posterContainer}>
          <ImageBackground
            source={require("../../../assets/home/home.png")}
            style={styles.poster}
          >
            <View style={styles.posterContent}>
              <Text style={styles.title}>Baby Girl 2024</Text>
              <TouchableOpacity style={styles.playButton}>
                <Image
                  style={styles.iconPlay}
                  source={require("../../../assets/home/icon-play.png")}
                />
                <Text style={styles.playButtonText}>Play</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>

        {/* Content Section */}
        <View style={styles.content}>
          <CategoryHome
            title="Trending"
            component="CategoryTrending"
            data={data}
            navigation={navigation}
          />
          <CategoryHome
            title="What's Popular"
            component="CategoryPopular"
            data={data}
            navigation={navigation}
          />
          <CategoryHome
            title="Top Rated"
            component="CategoryTopRated"
            data={data}
            navigation={navigation}
          />
          <CategoryHome
            title="Recommended for You"
            component="CategoryRecommend"
            data={data}
            navigation={navigation}
          />
          <CategoryHome
            title="Kid's Movie"
            component="CategoryKid"
            data={data}
            navigation={navigation}
          />
          <CategoryHome
            title="Adventure"
            component="CategoryAdventure"
            data={data}
            navigation={navigation}
          />
          <CategoryHome
            title="Romance"
            component="CategoryRomance"
            data={data}
            navigation={navigation}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#04152D",
  },

  /* Poster */
  posterContainer: {
    width: "100%",
    height: 500,
  },
  poster: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingBottom: 40,
    paddingLeft: 16,
  },
  posterContent: {
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 12,
    borderRadius: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
  },
  playButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#C31616",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  iconPlay: {
    width: 18,
    height: 18,
    marginRight: 6,
  },
  playButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },

  /* Content */
  content: {
    paddingTop: 20,
    paddingHorizontal: 16,
  },
});

export default HomeMovie;
