<template>
  <view class="content">
    <view class="mt-20">{{ newDate }}</view>
    <view class="text-area mt-2">
      <view class="title mb-5 bg-red-200">{{ title }}</view>
    </view>

    <button hover-class="button-hover" @click="changeTitle">修改 title</button>

    <button class="mt-6" hover-class="button-hover" @click="skip">跳转</button>
  </view>
</template>

<script setup lang="ts">
import dayjs from "dayjs";
import { computed, ref } from "vue";
import { useAppStore } from "/@/store/modules/app";
import { jointUrl } from "/@/utils/index";

// 获取 store 中的值
const useAppState = useAppStore();
const title = computed(() => useAppState.getTitle);

// 调用 store 中的方法进行修改值
function changeTitle() {
  useAppState.changeTitle();
}

// 当前时间
const newDate = ref<string>("");
newDate.value = dayjs().format("YYYY-MM-DD HH:mm:ss");

console.log("使用 .env 环境变量-->", import.meta.env.VITE_APP_TITLE);

function skip() {
  uni.navigateTo({
    url: "/pages/index/test?a=a&b=b&c=c",
  });
}

console.log(jointUrl('/pages/login/login',{a:1,b:2}))

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
