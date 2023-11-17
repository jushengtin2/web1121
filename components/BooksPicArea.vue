<template>
  <div class="block">
    <div class="books">
      <div class="books-container" ref="booksContainer">
        <BooksPicture
          :book="books[currentIndex].value"
          @prevBook="prevBook"
          @nextBook="nextBook"
        />
      </div>
    </div>
    <div class="booksbtn">
      <button class="prev-button" @click="prevBook">上一本</button>
      <button class="next-button" @click="nextBook">下一本</button>
    </div>
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
