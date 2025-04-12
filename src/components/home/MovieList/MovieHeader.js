import { useNavigation } from "@react-navigation/native";
import { Image, View, StyleSheet, Text, TouchableOpacity } from "react-native";

const HeaderMovie = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <Image
          source={require("../../../../assets/home/icon-video.png")}
          style={styles.logo}
        />
        <Text style={styles.titleBrand}>Phimz</Text>
      </View>
      <View style={styles.headerRight}>
        <TouchableOpacity onPress={() => navigation.navigate("SearchMovie")}>
          <Image
            source={require("../../../../assets/home/icon-search.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image
            source={require("../../../../assets/home/menu-icon.png")}
            style={styles.menuIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  /* Header */
  header: {
    position: "absolute",
    top: 20,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    zIndex: 10,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  logo: {
    width: 35,
    height: 35,
  },
  titleBrand: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    paddingLeft: 8,
  },
  headerRight: {
    flexDirection: "row",
  },
  icon: {
    width: 21,
    height: 21,
    marginHorizontal: 8,
  },
  menuIcon: {
    width: 30,
    height: 24,
    marginHorizontal: 8,
  },
});
export default HeaderMovie;
