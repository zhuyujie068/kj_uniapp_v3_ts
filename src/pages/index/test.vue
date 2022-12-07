<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <button hover-class="button-hover" @click="request">请求</button>
    </view>
  </view>
</template>

<script setup lang="ts">
import { post_test, get_test } from "/@/api/app";

// 调用 store 中的方法进行修改值
async function request() {
  get_test().then(res => {
    console.log("---", res);
  });

  post_test({
    abs: "1",
    zxa: "2",
  })
    .then(result => {
      console.log("-1111-result-", result);
    })
    .catch(err => {
      console.log("--err-", err);
    });
}
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
