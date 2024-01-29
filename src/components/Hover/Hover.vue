<template>
  <div class="hover">
    <div class="main-hover">
      <slot name="mainHover" />
      <div class="content-hover toggle">
        <div
          class="container-content-hover"
          :style="{
            width: widthContainerHover,
            background: colorContainerHover,
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
      type: String,
      default: "100%",
    },
    colorContainerHover: {
      type: String,
      default: "red",
    },
  },
};
</script>
<style scoped>
.toggle {
  display: none;
}
.main-hover{
    position: relative;
    display: inline-block;
    margin-left: 50%;
    transition: all 0.3s ease-out;
}
.content-hover{
    position: absolute;
    background: red;
    padding: 16px;
    left: -50%;
    transition: all 0.5s ease-in-out;
}
.main-hover:hover::after{
  position: absolute;
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid black;
  transform: translateY(-100%);
  left: 70%;
  transition: all 0.5s ease-in-out;
}
.main-hover:hover .toggle {
  display: block !important;
}
</style>
