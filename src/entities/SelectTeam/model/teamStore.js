import { defineStore } from 'pinia';
import { ref } from 'vue'

export const useTeamStory = defineStore('team', () => {
  const selectTeam = ref(null);
  const teams = [
    {id: 1, name: 'Дневная смена'},
    {id: 2, name: 'Ночная смена'},
  ];

  function changeTeam(team) {
    selectTeam.value = team;
  }

  return {selectTeam, teams, changeTeam}
})
