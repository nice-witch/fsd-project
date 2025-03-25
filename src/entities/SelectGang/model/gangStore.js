import { defineStore } from 'pinia';
import { ref } from 'vue'

export const useGangStory = defineStore('gang', () => {
  const selectGang = ref(null);
  const gangs = [
    {id: 1, name: 'Бригада 1'},
    {id: 2, name: 'Бригада 2'},
    {id: 3, name: 'Бригада 3'},
  ];

  function changeGang(gang) {
    selectGang.value = gang;
  }

  return {selectGang, gangs, changeGang}
})
