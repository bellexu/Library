<template>
  <h3>带阴影的盒子</h3>
  <div class="my-box"></div>
</template>

<script lang="ts" setup>

</script>

<style scoped lang="less">
.my-box {
    width: 300px;
    height: 50px;
    background-color: lightskyblue;
    box-shadow: 6px 8px 10px rgb(172, 172, 172);
    border-radius: 15px;
}
</style>