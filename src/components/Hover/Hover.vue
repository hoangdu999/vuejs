<template>
  <div class="hover">
    <div class="main-hover" >
      <slot name="mainHover" />
      <div class="content-hover toggle">
        <div
          class="container-content-hover"
          :style="{
            width: widthContainerHover,
            backgroundColor: colorContainerHover,
          }"
        >
          <slot name="contentHover" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Hover",
  props: {
    widthContainerHover: {
      type: String
    },
    colorContainerHover: {
      type: String,
      default: "white",
    },
    locationHover:{
      type: String,
      default: "50%",
    }
  },
};
</script>
<style scoped>
.toggle {
  display: none;
}
.main-hover{
  position: relative;
}
.content-hover{
  position: absolute;
  background-color: white;
  margin-top: 8px;
  padding: 8px;
  border-radius:4px;
  color: black;
  width: max-content;
  right: 0;
  font-size: 14px;
}
.main-hover:hover::after{
  position: absolute;
  content: "";
  width: 0;
  height: 0;
  left: 50%;
  top: 100%;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 15px solid white;
}
.main-hover:hover .toggle {
  display: block !important;
}
</style>
