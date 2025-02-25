
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import Modal from "react-native-modal";

const ModalCategory = (props) => {
  const [modalVisible, setModalVisible] = props;

  const categories = [
    "Trending",
    "What's Popular",
    "Recommendation",
    "Action",
    "Kid's movie",
    "Adventure",
    "Romance",
  ];

  return (
    <View style={styles.container}>
      {/* Nút mở Modal */}
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.openButton}
      >
        <Text style={styles.openButtonText}>Open Categories</Text>
      </TouchableOpacity>

      {/* Modal hiển thị danh mục */}
      <Modal
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(false)} // Nhấn ra ngoài để đóng modal
        animationIn="slideInUp"
        animationOut="slideOutDown"
        backdropOpacity={0.7} // Làm mờ nền
        style={styles.modal}
      >
        <View style={styles.modalContent}>
          <Text style={styles.title}>Categories</Text>

          <ScrollView>
            <View style={styles.categoryGrid}>
              {categories.map((category, index) => (
                <TouchableOpacity key={index} style={styles.categoryItem}>
                  <Text style={styles.categoryText}>{category}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>

          {/* Nút đóng modal */}
          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            style={styles.closeButton}
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  openButton: {
    backgroundColor: "#e50914",
    padding: 10,
    borderRadius: 5,
  },
  openButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  modal: {
    justifyContent: "flex-end", // Đưa modal xuống dưới màn hình
    margin: 0,
  },
  modalContent: {
    backgroundColor: "#0d0d0d",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
    minHeight: "40%", // Đặt chiều cao tối thiểu cho modal
  },
  title: {
    fontSize: 20,
    color: "#fff",
    marginBottom: 10,
  },
  categoryGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  categoryItem: {
    width: "45%",
    margin: 5,
    backgroundColor: "#222",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  categoryText: {
    color: "#fff",
    fontSize: 14,
  },
  closeButton: {
    marginTop: 15,
    backgroundColor: "#e50914",
    padding: 10,
    borderRadius: 5,
    width: "50%",
    alignItems: "center",
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default ModalCategory;
