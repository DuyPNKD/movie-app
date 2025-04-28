import { FlatList, StyleSheet, View } from "react-native";

const CategoryMain = ({ data, renderItem }) => {
  return (
    <View style={styles.container}>
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
    paddingTop: 70,
    marginBottom: 50,
  },
});
export default CategoryMain;
