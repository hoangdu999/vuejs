<template>
    <li class="list-right-item" :style="{
        backgroundColor : backgroundColor,
        color : color,
        fontSize : fontSize
    }" >
        <slot />
    </li>
</template>
<script>
export default {
    name:"BackgroundItem",
    props:{
        text : String,
        color : String,
        fontSize : Number,
        backgroundColor : String
    }
}
</script>