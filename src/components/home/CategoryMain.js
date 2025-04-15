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
          <TouchableOpacity onPress={() => navigation.navigate("HomeMovie")}>
            <Image
              style={styles.iconBack}
              source={require("../../../assets/home/icon-back.png")}
            />
          </TouchableOpacity>
          <Text style={styles.header}>{topic}</Text>
          <TouchableOpacity onPress={() => navigation.navigate("SearchMovie")}>
            <Image
              style={styles.iconSearch}
              source={require("../../../assets/home/icon-search.png")}
            />
          </TouchableOpacity>
        </View>
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
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconBack: {
    height: 25,
    width: 25,
    margin: 5,
  },
  header: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
  },
  iconSearch: {
    height: 24,
    width: 24,
    margin: 5,
  },

  title: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});
export default CategoryMain;
