import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../../constants/colors";

const SearchMovie = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  // Mock data - sau này sẽ thay bằng API call thực tế
  const filters = [
    { id: "all", name: "Tất cả" },
    { id: "movie", name: "Phim lẻ" },
    { id: "series", name: "Phim bộ" },
    { id: "anime", name: "Hoạt hình" },
  ];

  const searchResults = [
    {
      id: 1,
      title: "Avengers: Hồi Kết",
      year: "2019",
      type: "movie",
      rating: "8.4",
      image: require("../../../assets/home/home.png"),
    },
    // Thêm kết quả tìm kiếm khác
    {
      id: 2,
      title: "Avengers: Hồi Kết",
      year: "2019",
      type: "movie",
      rating: "8.4",
      image: require("../../../assets/home/home.png"),
    },
  ];

  const renderFilter = ({ item }) => (
    <TouchableOpacity
      onPress={() => setActiveFilter(item.id)}
      style={[
        styles.filterItem,
        activeFilter === item.id && styles.filterItemActive,
      ]}
    >
      <Text
        style={[
          styles.filterText,
          activeFilter === item.id && styles.filterTextActive,
        ]}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  const renderSearchResult = ({ item }) => (
    <TouchableOpacity
      style={styles.resultItem}
      onPress={() => navigation.navigate("MovieDetail", { id: item.id })}
    >
      <Image source={item.image} style={styles.resultImage} />
      <View style={styles.resultInfo}>
        <Text style={styles.resultTitle}>{item.title}</Text>
        <View style={styles.resultMeta}>
          <Text style={styles.resultYear}>{item.year}</Text>
          {/* <View style={styles.ratingContainer}>
            <Image
              source={require("../../../assets/home/star.png")}
              style={styles.starIcon}
            />
            <Text style={styles.rating}>{item.rating}</Text>
          </View> */}
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Search Header */}
      <View style={styles.searchHeader}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate("HomeMovie")}
        >
          <Image
            source={require("../../../assets/home/icon-back.png")}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <View style={styles.searchInputContainer}>
          <Image
            source={require("../../../assets/home/icon-search.png")}
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Tìm kiếm phim..."
            placeholderTextColor="rgba(255,255,255,0.5)"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity
              onPress={() => setSearchQuery("")}
              style={styles.clearButton}
            >
              <Text style={styles.clearButtonText}>×</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Filters */}
      <View style={styles.filtersContainer}>
        <FlatList
          data={filters}
          renderItem={renderFilter}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>

      {/* Search Results */}
      <FlatList
        data={searchResults}
        renderItem={renderSearchResult}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.resultsList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#04152D",
  },
  searchHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    paddingTop: 45,
    gap: 12,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 20,
  },
  backIcon: {
    width: 24,
    height: 24,
    tintColor: "#ffffff",
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 20,
    paddingHorizontal: 12,
    height: 40,
  },
  searchIcon: {
    width: 20,
    height: 20,
    tintColor: "rgba(255,255,255,0.5)",
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    color: "#ffffff",
    fontSize: 16,
    height: "100%",
    padding: 0,
  },
  clearButton: {
    padding: 4,
  },
  clearButtonText: {
    color: "rgba(255,255,255,0.5)",
    fontSize: 24,
    fontWeight: "bold",
  },
  filtersContainer: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.1)",
  },
  filterItem: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginHorizontal: 4,
    borderRadius: 20,
    backgroundColor: "rgba(255,255,255,0.1)",
  },
  filterItemActive: {
    backgroundColor: COLORS.primary,
  },
  filterText: {
    color: "#ffffff",
    fontSize: 14,
  },
  filterTextActive: {
    fontWeight: "bold",
  },
  resultsList: {
    padding: 16,
  },
  resultItem: {
    flexDirection: "row",
    marginBottom: 16,
    backgroundColor: "rgba(255,255,255,0.05)",
    borderRadius: 8,
    overflow: "hidden",
  },
  resultImage: {
    width: 100,
    height: 150,
    resizeMode: "cover",
  },
  resultInfo: {
    flex: 1,
    padding: 12,
  },
  resultTitle: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  resultMeta: {
    flexDirection: "row",
    alignItems: "center",
  },
  resultYear: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 14,
    marginRight: 12,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  starIcon: {
    width: 16,
    height: 16,
    marginRight: 4,
  },
  rating: {
    color: COLORS.primary,
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default SearchMovie;
