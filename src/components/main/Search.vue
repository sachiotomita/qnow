<template>
  <form>
    <input id="search-form" type="text" /><button type="button"><font-awesome-icon icon="search" /></button>
  </form>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Search extends Vue {
}
</script>

<style lang="scss" scoped>
form {
  #search-form {
    width: 90%;
    height: 40px;
    padding: 15px;
    box-sizing: border-box;
  }
  button {
    width: 10%;
    height: 40px;
    border: none;
    box-sizing: border-box;
  }
}
</style>