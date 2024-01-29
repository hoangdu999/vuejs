<template>
  <div class="search-container">
            <div class="search-box">
              <input
                :type="type"
                :placeholder="placeholder"
                class="search-input"
                :class="classCustom"
                :value="value"
                :tabindex="tabIndex"
              />
              <button class="search-button">
                <i :class="classIcon"></i>
              </button>
            </div>
          </div>
</template>

<script>
export default {
  name:"InputSearch",
  props:{
    type : String,
    placeholder : String,
    classCustom : String,
    value : String,
    tabIndex: Number,
    classIcon : {
        type: String,
        default : "fa fa-search"
    }
  }
}
</script>
<style scoped>

.search-container {
  background-color: white;
  padding :2px ;
  box-sizing: border-box;
  height: 40px;
}
.search-box{
  display: flex;
  justify-content: space-between;
  min-height: 100%;
}
.search-input {
  flex-basis: 93%;
  padding: 5px 10px;
  font-size: 14px;
  border: none;
  border-radius: 4px 0 0 4px; /* Rounded corners on the left side */
  outline: none;
}

.search-button {
  flex-basis: 7%;
  background-color: #e04e39; /* Darker shade for the button */
  color: white;
  border: none;
  border-radius: 1px; /* Rounded corners on the right side */
}
.search-button:hover {
  background-color: #c7442a; /* Even darker shade when hovering */
}
</style>