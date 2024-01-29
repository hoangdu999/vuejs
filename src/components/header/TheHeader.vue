<template>
  <div class="header">
    <div class="container">
      <div class="container-top">
        <ul class="list-left">
          <background-item >Kênh Người Bán</background-item>
          <background-item>Trở thành người bán hàng Shoppe</background-item>
          <background-item>
            <hover widthContainerHover="100%">
              <template #mainHover>
                Tải ứng dụng
              </template>
              <template #contentHover>
                <div class="w-100">
                  <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/d91264e165ed6facc6178994d5afae79.png" alt="">
                </div>
                <div >
                  <img class="img-icon-item" src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/39f189e19764dab688d3850742f13718.png" alt="">
                  <img class="img-icon-item" src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/f4f5426ce757aea491dce94201560583.png" alt="">
                </div>
                <img class="img-icon-item" src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/1ae215920a31f2fc75b00d4ee9ae8551.png" alt="">
              </template>
            </hover>
          </background-item>
          
          <BackgroundItem>Kết nối</BackgroundItem>
        </ul>
        <ul class="list-right">
          <BackgroundItem>Thông Báo</BackgroundItem>
          <BackgroundItem>Hỗ Trợ</BackgroundItem>
          <BackgroundItem>
            <hover widthContainerHover="150px">
              <template #mainHover>
                {{ language }}
              </template>
              <template #contentHover>
                  <div class="language-item" :class="{active : language == 'Tiếng việt'}" @click="changeLanguage('Tiếng việt')">Tiếng việt</div>
                  <div class="language-item" :class="{active : language == 'Tiếng anh'}" @click="changeLanguage('Tiếng anh')" >Tiếng anh</div>
              </template>
            </hover>
          </BackgroundItem>
          <BackgroundItem>Đăng Ký</BackgroundItem>
          <BackgroundItem>Đăng Nhập</BackgroundItem>
        </ul>
      </div>
      <div class="container-bottom">
        <a href="" class="logo">
          <div class="logo-img">
            <img class="logo-img-link" src="../../assets/img/logo.png" alt="" />
          </div>
        </a>
        <div class="header-with-search">
          <input-search placeholder="Shopee bao ship 0Đ - Đăng ký ngay!" backgroundColorHover="#c7442a"/>
          <div class="list-search">
            <ul>
              <BackgroundItem><a href="">Áo Len Girl Phố Giá Rẻ</a></BackgroundItem>
              <BackgroundItem><a href="">Săn Sale IPhone 14 Pro Max 1K</a></BackgroundItem>
              <BackgroundItem><a href="">Vợt Cầu Lông 1k Lưới Căng</a></BackgroundItem>
              <BackgroundItem><a href="">Vợt Cầu Lông 10kg Căng Sẵn</a></BackgroundItem>
              <BackgroundItem><a href="">Quần Jean Nam Giá Rẻ 1k</a></BackgroundItem>
              <BackgroundItem><a href="">Ốp</a></BackgroundItem>
            </ul>
          </div>
        </div>
        <div class="header-with-search-cart">
          <div class="icon">
            <i class="fa-solid fa-cart-arrow-down"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BackgroundItem from '../background-tem/BackgroundItem.vue';
import Hover from "../Hover/Hover.vue";
import InputSearch from '../search/InputSearch.vue';
export default {
  name: "TheHeader",
  components: {
    Hover,
    InputSearch,
    BackgroundItem
  },
  data() {
    return {
      language: "Tiếng việt",
    };
  },
  methods: {
    changeLanguage(language){
      this.language = language;

    }
  }
};
</script>
<style scoped>
@import url(./css.css);
</style>
