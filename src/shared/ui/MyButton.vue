<script setup>
import {defineProps} from 'vue';

defineProps({
  title: String
})
</script>

<template>
  <button>{{title}}</button>
</template>
