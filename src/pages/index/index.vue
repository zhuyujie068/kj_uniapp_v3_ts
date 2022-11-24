<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <view class="title mb-5 bg-red-200">{{ title }}</view>
    </view>

    <button hover-class="button-hover" @click="changeTitle">修改 title</button>
  </view>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { test } from "/@/utils";
import { useAppStore } from "/@/store/modules/app";

// 获取 store 中的值
const useAppState = useAppStore();
const title = computed(() => useAppState.getTitle);

// 调用 store 中的方法进行修改值
function changeTitle() {
  useAppState.changeTitle();

  // 调用 utils 中的方法
  console.log("utils --> ", test("Hello World"));
}

console.log('使用 .env 环境变量-->',import.meta.env.VITE_APP_TITLE)
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
