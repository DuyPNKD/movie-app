import React from "react";
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  FlatList,
  StyleSheet,
} from "react-native";

const CategoryHome = ({ title, data, component, navigation }) => (
  <View style={styles.category}>
    <View style={styles.groupIntro}>
      <View style={styles.titleContainer}>
        <Text style={styles.categoryTitle}>{title}</Text>
      </View>
      {/* Nút See All */}
      <TouchableOpacity onPress={() => navigation.navigate(component)}>
        <Text style={styles.seeAll}>Xem tất cả</Text>
      </TouchableOpacity>
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
);
const styles = StyleSheet.create({
  category: {
    marginBottom: 20,
  },
  groupIntro: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  titleContainer: {
    flexDirection: "row", // Giúp Image và Text nằm ngang
    alignItems: "center", // Căn giữa chiều dọc
  },
  categoryTitle: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  redLine: {
    height: 30,
    marginRight: 10,
  },
  seeAll: {
    color: "#ccc",
    fontSize: 14,
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
export default CategoryHome;
