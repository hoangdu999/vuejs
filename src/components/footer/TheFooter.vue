<template>
  <div class="header">
      <hover widthContainerHover="500px">
          <template #mainHover>
              <div>Tiếng việt</div>
          </template>
          <template #contentHover>
              <div>123123123</div>
          </template>
      </hover>
  </div>
</template>

<script>
import Hover from '../Hover/Hover.vue'
export default {
  name:"TheHeader",
  components:{
      Hover
  }
}
</script>
<style scoped>
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.hover-element {
  position: relative;
  padding: 20px;
  background-color: #3498db;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;
}

.hover-element:hover {
  background-color: #2980b9;
}

.hover-element .content {
  display: none;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #2980b9;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.hover-element:hover .content {
  display: block;
}

.hover-element:hover::before {
  content: '';
  position: absolute;
  bottom: -50%; /* Chỉnh giá trị bottom để hướng tam giác lên trên */
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 25px solid #3498db; /* Thay border-bottom thành border-top */
  transition: border-top-color 0.3s; /* Thay border-bottom-color thành border-top-color */
}

.hover-element:hover::before {
  border-top-color: #2980b9; /* Thay border-bottom-color thành border-top-color */
}

</style>