import React, { useRef, useEffect, useState } from "react";
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Dimensions,
} from "react-native";
import { Video } from "expo-av";
import { LinearGradient } from "expo-linear-gradient";
import HeaderMovie from "../../components/home/MovieList/MovieHeader";
import CategoryHome from "../../components/home/CategoryHome";
import Footer from "../../components/home/Footer";
import { COLORS } from "../../constants/colors";

const { width } = Dimensions.get("window");

const HomeMovie = ({ navigation }) => {
  const videoRefs = useRef([]);
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollInterval = useRef(null);

  useEffect(() => {
    // Auto scroll every 15 seconds
    scrollInterval.current = setInterval(() => {
      const nextIndex = (currentIndex + 1) % trailers.length;
      setCurrentIndex(nextIndex);
      flatListRef.current?.scrollToIndex({
        index: nextIndex,
        animated: true,
      });
    }, 15000); // 15 seconds

    return () => {
      clearInterval(scrollInterval.current);
    };
  }, [currentIndex]);

  useEffect(() => {
    if (videoRefs.current) {
      videoRefs.current.forEach((ref, index) => {
        if (ref) {
          if (index === currentIndex) {
            ref.playAsync();
            // Reset video to beginning when it becomes active
            ref.setPositionAsync(0);
          } else {
            ref.pauseAsync();
          }
        }
      });
    }
  }, [currentIndex]);

  const trailers = [
    {
      id: 1,
      video: require("../../../assets/home/trailer.mp4"),
      title: "Cô Gái Nhỏ 2024",
    },
    {
      id: 2,
      video: require("../../../assets/home/trailer.mp4"),
      title: "Sonic the Hedgehog 3",
    },
    {
      id: 3,
      video: require("../../../assets/home/trailer.mp4"),
      title: "Avengers: Hồi Kết",
    },
  ];

  const renderTrailer = ({ item, index }) => {
    return (
      <View style={styles.posterContainer}>
        <Video
          ref={(ref) => (videoRefs.current[index] = ref)}
          source={item.video}
          style={styles.poster}
          isLooping={true}
          shouldPlay={index === currentIndex}
          resizeMode="cover"
          isMuted={true}
          rate={1.0}
          progressUpdateIntervalMillis={100}
          onPlaybackStatusUpdate={(status) => {
            if (status.didJustFinish) {
              // When video finishes, reset it to beginning
              videoRefs.current[index]?.setPositionAsync(0);
            }
          }}
        />
        <View style={styles.posterContent}>
          <Text style={styles.title}>{item.title}</Text>
          <TouchableOpacity onPress={() => console.log("Play button pressed")}>
            <LinearGradient
              colors={COLORS.gradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.playButton}
            >
              <Image
                style={styles.iconPlay}
                source={require("../../../assets/home/icon-play.png")}
              />
              <Text style={styles.playButtonText}>Xem ngay</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

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

  const handleScroll = (event) => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffset / width);
    setCurrentIndex(index);
  };

  const renderIndicator = () => {
    return (
      <View style={styles.indicatorContainer}>
        {trailers.map((_, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              setCurrentIndex(index);
              flatListRef.current?.scrollToIndex({
                index: index,
                animated: true,
              });
            }}
          >
            <View
              style={[
                styles.indicator,
                currentIndex === index && styles.indicatorActive,
              ]}
            />
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        {/* Header */}
        <HeaderMovie />

        {/* Trailer Section */}
        <View style={styles.posterWrapper}>
          <FlatList
            ref={flatListRef}
            data={trailers}
            renderItem={renderTrailer}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            style={styles.trailerList}
            onScroll={handleScroll}
            scrollEventThrottle={16}
            initialScrollIndex={0}
            onScrollToIndexFailed={() => {
              flatListRef.current?.scrollToIndex({
                index: 0,
                animated: true,
              });
            }}
          />
          {renderIndicator()}
        </View>

        {/* Content Section */}
        <View style={styles.content}>
          <CategoryHome
            title="Xu Hướng"
            component="CategoryTrending"
            data={data}
            navigation={navigation}
          />
          <CategoryHome
            title="Phổ Biến"
            component="CategoryPopular"
            data={data}
            navigation={navigation}
          />
          <CategoryHome
            title="Đánh Giá Cao"
            component="CategoryTopRated"
            data={data}
            navigation={navigation}
          />
          <CategoryHome
            title="Đề Xuất Cho Bạn"
            component="CategoryRecommend"
            data={data}
            navigation={navigation}
          />
          <CategoryHome
            title="Phim Thiếu Nhi"
            component="CategoryKid"
            data={data}
            navigation={navigation}
          />
          <CategoryHome
            title="Phiêu Lưu"
            component="CategoryAdventure"
            data={data}
            navigation={navigation}
          />
          <CategoryHome
            title="Lãng Mạn"
            component="CategoryRomance"
            data={data}
            navigation={navigation}
          />

          {/* Footer */}
          <Footer />
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
  posterWrapper: {
    position: "relative",
    height: 500,
  },
  indicatorContainer: {
    position: "absolute",
    right: 20,
    bottom: 20,
    flexDirection: "row",
    alignItems: "center",
    zIndex: 10,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(255,255,255,0.3)",
    marginHorizontal: 4,
  },
  indicatorActive: {
    backgroundColor: COLORS.primary,
    width: 24, // Active dot is longer
  },
  trailerList: {
    height: 500,
  },
  posterContainer: {
    width: width,
    height: 500,
    position: "relative",
  },
  poster: {
    width: "100%",
    height: "100%",
  },
  posterContent: {
    position: "absolute",
    bottom: 0,
    left: 10,
    padding: 12,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
  },
  playButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 120,
    height: 32,
    borderRadius: 20,
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
  content: {
    paddingTop: 20,
    paddingHorizontal: 16,
  },
});

export default HomeMovie;
