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
  margin-bottom: 40px;
  #search-form {
    border: 0;
    width: 90%;
    height: 40px;
    padding: 15px;
    font-size: 1.2em;
    border: 1px solid #ccc;
    box-sizing: border-box;
    &:focus {
      outline: none;
    }
  }
  button {
    width: 10%;
    height: 40px;
    padding: 10px;
    border: none;
    background-color: #2196F3;
    color: #fff;
    box-sizing: border-box;
  }
}
</style>