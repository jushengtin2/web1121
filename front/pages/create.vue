<template>
  <div>
  <div class="white_area">
  <button @click="toggleback">
  <svg
  xmlns="http://www.w3.org/2000/svg"
  width="1em"
  height="1em"
  viewBox="0 0 24 24"
  >
  <path
  fill="currentColor"
  d="M11.67 3.87L9.9 2.1L0 12l9.9 9.9l1.77-1.77L3.54 12z"
  ></path>
  </svg>
  </button>
  <p>Picturebookname</p>
  <goback />
  </div>
  
  <div>
  <div class="popout_btn">
  <button :style="{ opacity: isButtonVisible ? 1 : 0 }" @click="editMenu">
  <svg
  xmlns="http://www.w3.org/2000/svg"
  width="1em"
  height="1em"
  viewBox="0 0 24 24"
  >
  <path
  fill="currentColor"
  d="M11.67 3.87L9.9 2.1L0 12l9.9 9.9l1.77-1.77L3.54 12z"
  ></path>
  </svg>
  </button>
  </div>
  </div>
  
  <div class="fixed">
  <div :class="{ popout_book: true, active: bookVisible }">
  <div class="content">
  <div class="stop_edit_title">
  <p>捨棄編輯內容?</p>
  <p>如果現在返回，您所做的</p>
  <p>所有編輯將會遺失</p>
  </div>
  <div class="btzone1">
  <button>儲存草稿</button>
  </div>
  <div class="btzone2">
  <button>繼續編輯</button>
  </div>
  <div class="btzone3">
  <button>捨棄</button>
  </div>
  </div>
  </div>
  
  <div :class="{ halfdarkarea: true, active: bookVisible }">
  <div>
  <div class="halfdarkarea"></div>
  </div>
  </div>
  </div>
  
  <div class="fixed2">
  <div :class="{ popout_edit: true, active: editMenuVisible }">
  <div class="content2">
  <button @click="editMenu">
  <svg
  xmlns="http://www.w3.org/2000/svg"
  width="1em"
  height="1em"
  viewBox="0 0 1024 1024"
  >
  <path
  fill="currentColor"
  d="M271.653 1023.192c-8.685 0-17.573-3.432-24.238-10.097c-13.33-13.33-13.33-35.144 0-48.474L703.67 508.163L254.08 58.573c-13.33-13.331-13.33-35.145 0-48.475c13.33-13.33 35.143-13.33 48.473 0L776.38 483.925c13.33 13.33 13.33 35.143 0 48.473l-480.492 480.694c-6.665 6.665-15.551 10.099-24.236 10.099z"
  ></path>
  </svg>
  </button>
  
  <button>
  <svg
  xmlns="http://www.w3.org/2000/svg"
  width="1em"
  height="1em"
  viewBox="0 0 1024 1024"
  >
  <path
  fill="currentColor"
  d="m896.8 159.024l-225.277.001V71.761c0-40.528-33.008-72.496-73.536-72.496H426.003c-40.528 0-73.52 31.968-73.52 72.496v87.264h-225.28c-17.665 0-32 14.336-32 32s14.335 32 32 32h44.015l74.24 739.92c3.104 34.624 32.608 61.776 67.136 61.776h398.8c34.528 0 64-27.152 67.088-61.472l74.303-740.24h44.016c17.68 0 32-14.336 32-32s-14.32-31.985-32-31.985zM416.482 71.762c0-5.232 4.271-9.505 9.52-9.505h171.984c5.248 0 9.536 4.273 9.536 9.505v87.264h-191.04zm298.288 885.44c-.16 1.777-2.256 3.536-3.376 3.536h-398.8c-1.12 0-3.232-1.744-3.425-3.84l-73.632-733.856H788.45z"
  ></path>
  </svg>
  </button>
  <button>
  <svg
  xmlns="http://www.w3.org/2000/svg"
  width="1em"
  height="1em"
  viewBox="0 0 1024 1024"
  >
  <path
  fill="currentColor"
  d="M960 79.904H64c-35.184 0-64 28.816-64 64v736.192c0 35.184 28.816 64 64 64h896c35.184 0 64-28.816 64-64V143.904c0-35.184-28.816-64-64-64m0 800.193l-895.999-.001v-188.56l256.848-248.912L585.633 707.12c10.912 13.248 30.336 11.568 44.128 1.12l116.88-105.808l210.8 216.384c.8.8 1.695 1.391 2.56 2.08v59.2zm.001-150.305L771.97 537.376c-11.408-11.248-29.28-12.4-41.937-2.752l-120.56 105.024l-264.943-262.08a32.09 32.09 0 0 0-22.688-11.6c-8.816-.32-17.505 2.56-23.969 8.624l-233.872 227.6V143.904h896zM736.002 400.128c35.28 0 63.84-28.608 63.84-63.84c0-35.217-28.56-63.825-63.84-63.825s-63.84 28.608-63.84 63.824c0 35.233 28.56 63.841 63.84 63.841z"
  ></path>
  </svg>
  </button>
  <button>
  <svg
  xmlns="http://www.w3.org/2000/svg"
  width="1em"
  height="1em"
  viewBox="0 0 1024 1024"
  >
  <path
  fill="currentColor"
  d="M0 512c0 282.784 229.232 512 512 512c282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0C229.232 0 0 229.232 0 512m961.008 0c0 247.024-201.969 448-449.009 448s-448-200.976-448-448s200.976-448 448-448s449.009 200.976 449.009 448M479.663 287.68v360.448l-115.76-115.76c-12.496-12.496-32.752-12.496-45.248 0s-12.496 32.752 0 45.248l194.016 189.008l194-189.008c6.256-6.256 9.376-14.432 9.376-22.624s-3.12-16.368-9.376-22.624c-12.496-12.496-32.752-12.496-45.248 0l-117.744 117.76V287.68c0-17.68-14.336-32-32-32s-32.016 14.32-32.016 32z"
  ></path>
  </svg>
  </button>
  
  <button>
  <svg
  xmlns="http://www.w3.org/2000/svg"
  width="1em"
  height="1em"
  viewBox="0 0 1024 1024"
  >
  <path
  fill="currentColor"
  d="M901.84 949.376H69.841v-640h257.6l64.72-62.336l-1.664-1.664H69.84c-35.344 0-64 28.656-64 64v640c0 35.344 28.656 64 64 64h832c35.343 0 64-28.656 64-64V448.704l-64 61.088zm-631.711-256l64.48-.001c44.865-254.496 266.545-448 533.889-448c11.215 0 21.855.096 32.623.176L783.873 362.783c-12.464 12.496-12.464 32.752 0 45.248c6.255 6.256 14.463 9.376 22.656 9.376s16.336-3.12 22.592-9.376l189.024-194L829.12 19.999c-12.464-12.496-32.72-12.496-45.248 0c-12.464 12.496-12.464 32.752 0 45.248l116.176 116.16c-10.033-.016-19.968-.048-30.208-.048c-303.056 0-553.567 221.952-599.711 512.017"
  ></path>
  </svg>
  </button>
  </div>
  </div>
  </div>
  </div>
  </template>
  
  <style>
  .fixed {
  width: 100%;
  height: 100%;
  }
  
  .popout_btn {
  position: fixed;
  right: 5%;
  z-index: 0;
  }
  
  .popout_edit {
  transform: translateX(100%);
  transition: transform 0.5s ease;
  width: 100%;
  position: fixed;
  top: 15%;
  right: 0;
  z-index: 1;
  }
  
  .content2 {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  }
  
  .content2 > button {
  margin: auto;
  }
  
  .popout_edit.active {
  transform: translateX(0);
  }
  
  .popout_book {
  @apply rounded-lg fixed left-0 top-0 bottom-0 z-30 h-full w-full bg-white transform translate-y-full transition-transform duration-500 ease-in-out;
  }
  .halfdarkarea {
  @apply fixed left-0 top-0 bottom-0 z-20 w-full transform translate-y-full transition-transform duration-0 ease-in-out;
  }
  .popout_book.active {
  @apply transform translate-y-1/3;
  }
  .halfdarkarea.active {
  @apply transform translate-y-0 bg-black/50;
  }
  
  .popout_book {
  @apply fixed inset-0 z-30 rounded-lg bg-white transition-transform duration-500 ease-in-out transform translate-y-full;
  }
  
  .halfdarkarea {
  @apply fixed inset-0 z-20 transition-transform duration-0 ease-in-out transform translate-y-full;
  }
  .popout_book.active {
  @apply translate-y-[50%];
  }
  .halfdarkarea.active {
  @apply translate-y-[0%] bg-[rgba(0,0,0,0.5)];
  }
  
  .btzone1,
  .btzone2,
  .btzone3 {
  width: 100%;
  background-color: gray;
  border: 1px solid black; /* 添加黑色边框 */
  display: flex; /* 启用 flex 布局 */
  flex-direction: column; /* 子元素垂直排列 */
  justify-content: center; /* 在主轴方向上居中对齐（此处为垂直方向） */
  align-items: center; /* 在交叉轴方向上居中对齐（此处为水平方向） */
  }
  .stop_edit_title {
  text-align: center; /* 使所有文本居中 */
  }
  
  .stop_edit_title > p {
  margin: 0 auto; /* 使每个 <p> 元素水平居中 */
  width: fit-content; /* 设置 <p> 元素的宽度以适应其内容 */
  }
  </style>
  
  <script setup>
  import { ref } from "vue";
  import BooksPicture from "~/components/BooksPicture.vue";
  
  const sampleBook1 = ref({
  title: "Book Title",
  imageUrl:
  "https://www.friendlyseed.com.tw/sites/default/files/field_opinion_image/feng_mian_.jpg",
  description: "Book description goes here",
  });
  const sampleBook2 = ref({
  title: "Book",
  imageUrl: "https://gpi.culture.tw/pic/news/9953.jpg",
  description: "description goes here",
  });
  const books = [sampleBook1, sampleBook2];
  const booksContainer = ref(null);
  const currentIndex = ref(0);
  const bookVisible = ref(false);
  const editMenuVisible = ref(false);
  const isButtonVisible = ref(true);
  
  function toggleback(event) {
  event.stopPropagation();
  bookVisible.value = !bookVisible.value;
  }
  
  function handleClickOutside(event) {
  if (bookVisible.value && !event.target.closest(".popout_book")) {
  bookVisible.value = false;
  }
  }
  
  onMounted(() => {
  // 监听点击事件
  window.addEventListener("click", handleClickOutside);
  });
  
  onUnmounted(() => {
  // 清除监听器
  window.removeEventListener("click", handleClickOutside);
  });
  
  function editMenu(event) {
  event.stopPropagation();
  editMenuVisible.value = !editMenuVisible.value;
  isButtonVisible.value = !isButtonVisible.value;
  }
  
  function editMenuClickOutside(event) {
  if (editMenuVisible.value && !event.target.closest(".popout_edit")) {
  editMenuVisible.value = false;
  }
  }
  </script>