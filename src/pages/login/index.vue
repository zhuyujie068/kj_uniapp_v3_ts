<template>
  <div>
    <div class="border-4 border-solid border-light-blue-500 border-opacity-70 rounded-lg w-20 h-10 m-auto mt-10 text-center leading-10" @click="login">登录</div>
  </div>
</template>

<script setup lang="ts">
import { showToast } from "/@/utils/index";
  function login() {
    showToast('登录成功')
    uni.navigateTo({
      url:'/pages/index/index'
    })
  }
</script>

<style scoped lang="sass"></style>
