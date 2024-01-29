<template>
  <div class="header">
    <div class="container">
      <div class="container-top">
        <ul class="list-left">
          <li>Kênh Người Bán</li>
          <li>Trở thành người bán hàng Shoppe</li>
          <li>Tải ứng dụng</li>
          <li>Kết nối</li>
        </ul>
        <ul class="list-right">
          <li>Thông Báo</li>
          <li>Hỗ Trợ</li>
          <li>Tiếng Việt</li>
          <li>Đăng Ký</li>
          <li>Đăng Nhập</li>
        </ul>
      </div>
      <div class="container-bottom">
        <a href="" class="logo">
          <div class="logo-img">
            <img class="logo-img-link" src="../../assets/img/logo.png" alt="" />
          </div>
        </a>
        <div class="header-with-search">
          <div class="search-container">
            <div class="search-box">  
              <input
                type="text"
                placeholder="Shopee bao ship 0Đ - Đăng ký ngay!"
                class="search-input"
              />
              <button class="search-button">
                <i class="fa fa-search"></i>
              </button>
            </div>
          </div>
          <div class="list-search">
            <ul>
              <li><a href="">Áo Len Girl Phố Giá Rẻ</a></li>
              <li><a href="">Săn Sale IPhone 14 Pro Max 1K</a></li>
              <li><a href="">Vợt Cầu Lông 1k Lưới Căng</a></li>
              <li><a href="">Vợt Cầu Lông 10kg Căng Sẵn</a></li>
              <li><a href="">Quần Jean Nam Giá Rẻ 1k</a></li>
              <li><a href="">Ốp</a></li>
            </ul>
          </div>
        </div>
        <div class="header-with-search-cart">
          <div class="icon">
            <i class="fa fa-search"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Hover from "../Hover/Hover.vue";
export default {
  name: "TheHeader",
  components: {
    Hover,
  },
};
</script>
<style scoped>
@import url(./css.css);
</style>
