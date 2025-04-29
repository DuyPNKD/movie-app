import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Modal,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Footer from "../../components/home/Footer";
import { useAuth } from "../../context/AuthContext";
import AuthModal from "../../components/auth/AuthModal";
import { localImages } from "../../utils/localImages";
import CategoryRecommend from "../../components/home/MovieList/MovieRecommend";

const DetailPage = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { item } = route.params;
  const [isFavorite, setIsFavorite] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const { isLoggedIn } = useAuth();

  const cast = [
    {
      id: "1",
      name: "IU",
      image: require("../../../assets/actor/IU.webp"),
    },
    {
      id: "2",
      name: "Park Bo-gum",
      image: require("../../../assets/actor/parkbogum.webp"),
    },
    {
      id: "3",
      name: "Moon Soori",
      image: require("../../../assets/actor/moonsori.webp"),
    },
    {
      id: "4",
      name: "Park Hae-jun",
      image: require("../../../assets/actor/parkhaejun.webp"),
    },
  ];

  const renderCastItem = ({ item }) => (
    <View style={styles.castItem}>
      <Image source={item.image} style={styles.castImage} />
      <Text style={styles.castName}>{item.name}</Text>
    </View>
  );

  const renderHeader = () => (
    <>
      <Image
        source={localImages[item.posterUrl] || item.posterUrl}
        style={styles.poster}
        resizeMode="stretch"
      />

      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <View style={styles.titleSection}>
            <Text style={styles.title} numberOfLines={2}>
              {item.title}
            </Text>
          </View>
          <View style={styles.ratingFavoriteContainer}>
            <View style={styles.ratingContainer}>
              <FontAwesome name="star" size={16} color="#FDC252" />
              <Text style={styles.rating}>{item.rating}</Text>
            </View>
            <TouchableOpacity
              onPress={toggleFavorite}
              style={styles.favoriteButton}
            >
              <FontAwesome
                name={isFavorite ? "heart" : "heart-o"}
                size={24}
                color={isFavorite ? "#FF0000" : "#FFF"}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.overview}>{item.description}</Text>
        <View style={styles.infoRow}>
          <View style={styles.sectionBlock}>
            <Text style={styles.sectionTitle}>Thời lượng: </Text>
          </View>
          <View style={styles.infoBlock}>
            <Text style={styles.info}>{item.duration}</Text>
          </View>
        </View>
        <View style={styles.infoRow}>
          <View style={styles.sectionBlock}>
            <Text style={styles.sectionTitle}>Phát hành:</Text>
          </View>
          <View style={styles.infoBlock}>
            <Text style={styles.info}>{item.year}</Text>
          </View>
        </View>
        <View style={styles.infoRow}>
          <View style={styles.sectionBlock}>
            <Text style={styles.sectionTitle}>Thể loại:</Text>
          </View>
          <View style={styles.infoBlock}>
            <Text style={styles.info}>
              {item.genres ? item.genres.join(", ") : ""}
            </Text>
          </View>
        </View>
        <View style={styles.infoRow}>
          <View style={styles.sectionBlock}>
            <Text style={styles.sectionTitle}>Quốc gia: </Text>
          </View>
          <View style={styles.infoBlock}>
            <Text style={styles.info}>{item.country}</Text>
          </View>
        </View>
        <View style={styles.infoRow}>
          <View style={styles.sectionBlock}>
            <Text style={styles.sectionTitle}>Đạo diễn:</Text>
          </View>
          <View style={styles.infoBlock}>
            <Text style={styles.info}>{item.director}</Text>
          </View>
        </View>
      </View>

      <View style={styles.castSection}>
        <Text style={styles.sectionHeader}>Diễn viên</Text>
        <FlatList
          data={cast}
          renderItem={renderCastItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.castList}
        />
      </View>

      <CategoryRecommend />
    </>
  );

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const handleWatchMovie = () => {
    if (!isLoggedIn) {
      setShowLoginModal(true);
    } else {
      // Xử lý logic xem phim khi đã đăng nhập
    }
  };

  const handleLoginPress = () => {
    setShowLoginModal(false);
    setShowAuthModal(true);
  };

  const handleCloseAuthModal = () => {
    setShowAuthModal(false);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={[1]} // Dummy data để render một lần
        renderItem={() => null}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={Footer}
        showsVerticalScrollIndicator={false}
      />

      {/* Login Modal */}
      <Modal
        visible={showLoginModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => {
          setShowLoginModal(false);
          navigation.goBack();
        }}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Thông báo</Text>
            <Text style={styles.modalText}>
              Vui lòng đăng nhập để tiếp tục xem phim này
            </Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, styles.loginButton]}
                onPress={handleLoginPress}
              >
                <Text style={styles.loginButtonText}>Đăng nhập</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.closeButton]}
                onPress={() => {
                  setShowLoginModal(false);
                  navigation.goBack();
                }}
              >
                <Text style={styles.closeButtonText}>Đóng</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* AuthModal */}
      {showAuthModal && (
        <AuthModal visible={showAuthModal} onClose={handleCloseAuthModal} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#04152D",
  },
  poster: {
    width: "100%",
    height: 350,
    marginTop: 80,
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 15,
    zIndex: 2,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 25,
    padding: 10,
  },
  scrollContainer: {
    backgroundColor: "rgba(4, 21, 45, 0.95)", // Màu nền gần giống tấm poster để tạo hiệu ứng hòa trộn
  },
  content: {
    padding: 15,
    backgroundColor: "#04152D", // Đảm bảo khi kéo lên, nội dung "đi vào" phía sau poster
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 15,
    width: "100%",
  },
  titleSection: {
    width: "70%",
    flexDirection: "column",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    flexWrap: "wrap",
  },
  ratingFavoriteContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  rating: {
    color: "#FDC252",
    marginLeft: 5,
    fontSize: 13,
    fontWeight: "bold",
  },
  favoriteButton: {
    padding: 5,
  },
  subtitle: {
    color: "#aaa",
    marginVertical: 5,
  },
  overview: {
    color: "#ddd",
    marginBottom: 10,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  sectionBlock: {
    flex: 1,
    marginRight: 0, // Khoảng cách giữa sectionBlock và infoBlock
  },
  infoBlock: {
    flex: 2,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  info: {
    color: "#bbb",
  },
  categoryTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
    marginLeft: 20,
  },
  relatedMovies: {
    position: "absolute", // Ban đầu đặt ở vị trí này
    width: "100%",
    backgroundColor: "#04152D",
    paddingVertical: 10,
  },
  sticky: {
    top: 200,
    position: "absolute",
    zIndex: 10,
  },
  castSection: {
    marginTop: 20,
    paddingHorizontal: 15,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 15,
  },
  castList: {
    paddingVertical: 10,
  },
  castItem: {
    marginRight: 15,
    alignItems: "center",
    width: 80,
  },
  castImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 8,
  },
  castName: {
    color: "#FFFFFF",
    fontSize: 12,
    textAlign: "center",
    width: "100%",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#161D41",
    borderRadius: 12,
    padding: 20,
    width: "80%",
    alignItems: "center",
  },
  modalTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  modalText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
  modalButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    minWidth: 100,
    alignItems: "center",
  },
  loginButton: {
    backgroundColor: "#F2B916",
  },
  closeButton: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default DetailPage;
