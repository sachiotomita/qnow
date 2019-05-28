<template>
  <form v-on:submit.prevent="$emit('set', tagname)">
    <input id="search-form" type="text" v-model="tagname" /><button type="submit"><font-awesome-icon icon="search" /></button>
  </form>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class SearchItems extends Vue {
  @Prop() tagname !: string;
}
</script>

<style lang="scss" scoped>
form {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 40px;
  #search-form {
    border: 0;
    width: 90%;
    height: 40px;
    padding: 15px;
    font-size: 1.2em;
    border: 1px solid #ccc;
    border-radius: 0;
    box-sizing: border-box;
    &:focus {
      outline: none;
    }
  }
  button {
    width: 50px;
    height:40px;
    padding: 10px;
    border: none;
    background-color: #2196F3;
    color: #fff;
    box-sizing: border-box;
  }
}
</style>