<template>
  <div class="grid h-full place-items-center">
    <SignIn />
  </div>
</template>

<script setup>
// TODO: 畫面
import { SignIn } from "vue-clerk";

definePageMeta({
  middleware: ["public"]
});
</script>
