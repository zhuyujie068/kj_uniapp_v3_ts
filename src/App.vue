<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
import { interceptor } from "/@/utils/router/router";

onLaunch(() => {
  console.log("App Launch");
  
  // 对路由进行统一拦截，实现路由导航守卫 router.beforeEach 功能
  interceptor();
});
onShow(() => {
  console.log("App Show");
});
onHide(() => {
  console.log("App Hide");
});
</script>
<style></style>
