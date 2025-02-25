import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const CategoryMain = ({ topic, data, renderItem, navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <View style={styles.titleCategory}>
          <TouchableOpacity onPress={() => navigation.navigate("HomeMovies")}>
            <Image
              style={styles.iconBack}
              source={require("../../../assets/home/icon-back.png")}
            />
          </TouchableOpacity>
          <Text style={styles.header}>{topic}</Text>
        </View>
        <TouchableOpacity onPress={() => alert("Hello")}>
          <Image
            style={styles.iconSearch}
            source={require("../../../assets/home/icon-search.png")}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2} // Hiện thị 2 cột
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#04152D",
    padding: 10,
    paddingTop: 20,
  },
  heading: {
    flexDirection: "row",
    justifyContent: "space-between",
    top: 15,
    marginBottom: 20,
  },
  titleCategory: {
    flexDirection: "row",
  },
  iconBack: {
    height: 25,
    width: 25,
    margin: 5,
    marginRight: 10,
  },
  header: {
    color: "#fff",
    fontSize: 22,
    marginBottom: 10,
    fontWeight: "bold",
  },
  iconSearch: {
    margin: 15,
  },

  title: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});
export default CategoryMain;
