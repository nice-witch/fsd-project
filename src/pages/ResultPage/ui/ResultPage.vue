<script setup>
const savedData = JSON.parse(localStorage.getItem("formData"));
</script>

<template>
  <h1>Result Page</h1>

  <p>Город: {{savedData[0].name}}</p>
  <p>Цех: {{savedData[1].name}}</p>
  <p>Сотрудник: {{savedData[2].name}}</p>
  <p>Бригада: {{savedData[3].name}}</p>
  <p>Смена: {{savedData[4].name}}</p>
</template>
