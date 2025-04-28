export const loadMovies = async (jsonFileName) => {
  try {
    let jsonData;
    switch (jsonFileName) {
      case "Xu huong":
        jsonData = require("../../assets/media/Xu huong/xuhuong.json");
        break;
      case "Hai huoc":
        jsonData = require("../../assets/media/Hai huoc/haihuoc.json");
        break;
      case "De xuat cho ban":
        jsonData = require("../../assets/media/De xuat cho ban/dexuatchoban.json");
        break;
      case "Hanh dong":
        jsonData = require("../../assets/media/Hanh dong/hanhdong.json");
        break;
      case "Hoat hinh":
        jsonData = require("../../assets/media/Hoat hinh/hoathinh.json");
        break;
      case "Moi phat hanh":
        jsonData = require("../../assets/media/Moi phat hanh/moiphathanh.json");
        break;
      case "Pho bien":
        jsonData = require("../../assets/media/Pho bien/phobien.json");
        break;
      case "Tinh cam":
        jsonData = require("../../assets/media/Tinh cam/tinhcam.json");
        break;
      default:
        jsonData = require("../../assets/media/Xu huong/xuhuong.json");
    }
    return jsonData;
  } catch (error) {
    console.error(`Error loading movies from ${jsonFileName}:`, error);
    return [];
  }
};
