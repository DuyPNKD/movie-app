import React from "react";
import {
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";

const HomeScreen = () => {
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
    <SafeAreaView>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          {/* header */}
          <View style={styles.header}>
            <View style={styles.headerLeft}>
              <Image
                source={require("../../../assets/home/icon-video.png")}
                style={styles.logo}
              />
              <Text style={styles.titleBrand}>Animax</Text>
            </View>
            <View style={styles.headerRight}>
              <TouchableOpacity>
                <Image
                  source={require("../../../assets/home/icon-search.png")}
                  style={styles.icon}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require("../../../assets/home/menu-icon.png")}
                  style={styles.menuIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
          {/* video */}
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
          {/* content */}
          {/* trending */}
          <View style={styles.trending}>
            <View style={styles.groupIntro}>
              <Image
                style={styles.redLine}
                source={require("../../../assets/home/redline.png")}
              />
              <Text style={styles.trendingTitle}>Trending</Text>
            </View>
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.movie}
                  onPress={() =>
                    navigation.navigate("MovieDetailScreen", { movie: item })
                  }
                >
                  <Image source={item.image} style={styles.movieImage} />
                  <Text style={styles.movieTitle}>{item.title}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.id.toString()}
              horizontal
            />
          </View>

          {/* popular */}
          <View style={styles.trending}>
            <View style={styles.groupIntro}>
              <Image
                style={styles.redLine}
                source={require("../../../assets/home/redline.png")}
              />
              <Text style={styles.trendingTitle}>What's Popular</Text>
            </View>
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <View style={styles.movie} key={item.id}>
                  <Image source={item.image} style={styles.movieImage} />
                  <Text style={styles.movieTitle}>{item.title}</Text>
                </View>
              )}
              keyExtractor={(item) => item.id.toString()}
              horizontal
            />
          </View>

          {/* Reccommend */}
          <View style={styles.trending}>
            <View style={styles.groupIntro}>
              <Image
                style={styles.redLine}
                source={require("../../../assets/home/redline.png")}
              />
              <Text style={styles.trendingTitle}>Reccommend</Text>
            </View>
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <View style={styles.movie} key={item.id}>
                  <Image source={item.image} style={styles.movieImage} />
                  <Text style={styles.movieTitle}>{item.title}</Text>
                </View>
              )}
              keyExtractor={(item) => item.id.toString()}
              horizontal
            />
          </View>

          {/* Kid movie */}
          <View style={styles.trending}>
            <View style={styles.groupIntro}>
              <Image
                style={styles.redLine}
                source={require("../../../assets/home/redline.png")}
              />
              <Text style={styles.trendingTitle}>Kid's Movie</Text>
            </View>
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <View style={styles.movie} key={item.id}>
                  <Image source={item.image} style={styles.movieImage} />
                  <Text style={styles.movieTitle}>{item.title}</Text>
                </View>
              )}
              keyExtractor={(item) => item.id.toString()}
              horizontal
            />
          </View>

          {/* Adventure */}
          <View style={styles.trending}>
            <View style={styles.groupIntro}>
              <Image
                style={styles.redLine}
                source={require("../../../assets/home/redline.png")}
              />
              <Text style={styles.trendingTitle}>Adventure</Text>
            </View>
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <View style={styles.movie} key={item.id}>
                  <Image source={item.image} style={styles.movieImage} />
                  <Text style={styles.movieTitle}>{item.title}</Text>
                </View>
              )}
              keyExtractor={(item) => item.id.toString()}
              horizontal
            />
          </View>

          {/* Romance */}
          <View style={styles.trending}>
            <View style={styles.groupIntro}>
              <Image
                style={styles.redLine}
                source={require("../../../assets/home/redline.png")}
              />
              <Text style={styles.trendingTitle}>Romance</Text>
            </View>
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <View style={styles.movie} key={item.id}>
                  <Image source={item.image} style={styles.movieImage} />
                  <Text style={styles.movieTitle}>{item.title}</Text>
                </View>
              )}
              keyExtractor={(item) => item.id.toString()}
              horizontal
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    // Style cho SafeAreaView
    flex: 1, // SafeAreaView cần flex: 1
  },
  scrollView: {
    // Style cho ScrollView
    flex: 1, // ScrollView cần flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: "#04152D",
    marginTop: 0,
    paddingTop: 0,
  },
  // header
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
    top: 45,
    zIndex: 2,
  },
  headerLeft: {
    flexDirection: "row",
  },
  logo: {
    width: 24,
    height: 24,
  },
  titleBrand: {
    color: "red",
    fontSize: 17,
    fontWeight: 600,
    paddingLeft: 5,
  },
  headerRight: {
    flexDirection: "row",
  },
  icon: {
    width: 20,
    height: 20,
    marginHorizontal: 8,
  },
  menuIcon: {
    width: 31,
    height: 24,
    marginHorizontal: 8,
  },
  poster: {
    width: "100%",
    height: 539,
  },
  posterContent: {
    top: 490,
    paddingLeft: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
  },
  playButton: {
    width: 100,
    height: 38,
    backgroundColor: "#C31616",
    paddingVertical: 12,
    paddingHorizontal: 24,
    paddingTop: 10,
    borderRadius: 8,
    flexDirection: "row",
  },
  iconPlay: {
    width: 18,
    height: 18,
  },
  playButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 13,
    paddingLeft: 6,
  },
  // content
  trending: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginTop: 40,
  },
  groupIntro: {
    flexDirection: "row",
  },
  redLine: {
    height: 31,
    marginRight: 12,
  },
  trendingTitle: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  movie: {
    marginRight: 16,
  },
  movieImage: {
    width: 120,
    height: 180,
    borderRadius: 10,
  },
  movieTitle: {
    color: "#FFF",
    fontSize: 14,
    marginTop: 8,
  },
});

export default HomeScreen;
