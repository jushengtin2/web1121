<template>
  <div>
    <div class="white_area">
      <p>熱門推薦</p>

      <goback></goback>
    </div>

    <div class="recommend">
      <button id="animal">動物</button>
      <button id="family">家庭</button>
      <button id="carton">卡通</button>
      <button id="education">教育</button>
      <button id="funny">搞笑</button>
      <button id="sadness">悲傷</button>
    </div>
  </div>

  <hr />
  <BooksPicArea />
</template>

<style>
.recommend {
  max-width: 100vw;
  display: flex; /* 使用 flexbox 來排列按鈕 */
  overflow-x: auto; /* 允許水平滾動 */
}

.recommend button {
  width: 15%;
  flex: 0 0 auto; /* 按鈕不會伸縮 */
  margin-right: 30px; /* 按鈕之間的間距 */
  background-color: rgb(222, 207, 207);
  border: none;
  font-weight: bold;
}
</style>
<script>
import BooksPicArea from "~/components/BooksPicArea.vue";
</script>
