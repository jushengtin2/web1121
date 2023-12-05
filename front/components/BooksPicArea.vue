<template>
  <div class="block">
    <div class="books" @click="togglebook">
      <div class="books-container" ref="booksContainer">
        <BooksPicture
          :book="books[currentIndex].value" 
        />
      </div>
    </div>

  </div>
  <div class="bookzone">
    <div :class="{ popout_book: true, active: bookVisible }">
      <div class="content">
        <BooksPicture :book="books[currentIndex].value" />
        <div>
          <NuxtLink to="/books" class="nuxt-link-no-underline"
            >開始閱讀</NuxtLink
          >
        </div>
      </div>
    </div>

    <div :class="{ halfdarkarea: true, active: bookVisible }">
      <div>
        <div class="halfdarkarea"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref} from "vue";
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
const sampleBook3 = ref({
  title: "我沒有生氣",
  imageUrl: "https://shoplineimg.com/5be1bc0f2cf7f20001422505/61dec2629c6703001db1e566/800x.webp?source_format=jpeg",
  description: "我才沒有生氣",
})
const sampleBook4 = ref({
  title: "我生氣了",
  imageUrl: "https://ewebsstorage.azureedge.net/website/uploads_product/website_1/P0000100032373_3_170272.jpg?_59610",
  description: "description goes here",
})
const sampleBook5 = ref({
  title: "烏鴉",
  imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzN2kc9HscCEUHrI_mEWldYwjIjpModw9pUQ&usqp=CAU",
  description: "description goes here",
})
const sampleBook6 = ref({
  title: "樹懶",
  imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh67Npld0162efpjpDwhoakhv9cZpTf8Lm_Q&usqp=CAU",
  description: "description goes here",
})
const books = [sampleBook1, sampleBook2,sampleBook3,sampleBook4,sampleBook5, sampleBook6];
const booksContainer = ref(null);
defineProps({
  currentIndex: {
    type: Number,
    required: true 
  }  
})
const bookVisible = ref(false);

function togglebook(event) {
  event.stopPropagation();
  bookVisible.value = !bookVisible.value;
}

function handleClickOutside(event) {
  if (bookVisible.value && !event.target.closest(".popout_book")) {
    bookVisible.value = false;
  }
}

onMounted(() => {
  window.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  window.removeEventListener("click", handleClickOutside);
});
</script>

<style scoped>
@import "~/assets/BooksPicArea.css";
</style>
