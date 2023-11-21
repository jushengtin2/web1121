<template>
  <div class="block">
    <button class="prev-button" @click="prevBook">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="3em"
        height="3em"
        viewBox="0 0 1024 1024"
      >
        <path
          fill="#888888"
          d="M752.145 0c8.685 0 17.572 3.434 24.237 10.099c13.33 13.33 13.33 35.143 0 48.473L320.126 515.03l449.591 449.591c13.33 13.33 13.33 35.144 0 48.474c-13.33 13.33-35.142 13.33-48.472 0L247.418 539.268c-13.33-13.33-13.33-35.144 0-48.474L727.91 10.1C734.575 3.435 743.46.002 752.146.002z"
        ></path>
      </svg>
    </button>
    <div class="books">
      <div class="books-container" ref="booksContainer">
        <BooksPicture
          :book="books[currentIndex].value"
          @prevBook="prevBook"
          @nextBook="nextBook"
        />
      </div>
    </div>
    <button class="next-button" @click="nextBook">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="3em"
        height="3em"
        viewBox="0 0 1024 1024"
      >
        <path
          fill="#888888"
          d="M271.653 1023.192c-8.685 0-17.573-3.432-24.238-10.097c-13.33-13.33-13.33-35.144 0-48.474L703.67 508.163L254.08 58.573c-13.33-13.331-13.33-35.145 0-48.475c13.33-13.33 35.143-13.33 48.473 0L776.38 483.925c13.33 13.33 13.33 35.143 0 48.473l-480.492 480.694c-6.665 6.665-15.551 10.099-24.236 10.099z"
        ></path>
      </svg>
    </button>
  </div>
</template>

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

function prevBook() {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
}

function nextBook() {
  if (currentIndex.value < books.length - 1) {
    currentIndex.value++;
  }
}
</script>

<style>
@import "~/assets/BooksPicArea.css";
</style>
