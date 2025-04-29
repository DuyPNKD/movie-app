import {FlatList, StyleSheet, View} from "react-native";

const CategoryMain = ({data, renderItem}) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={2} // Hiện thị 2 cột
                nestedScrollEnabled={true} // Cho phép cuộn lồng nhau
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
        marginBottom: 50,
    },
});
export default CategoryMain;
