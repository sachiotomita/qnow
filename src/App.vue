<template>
  <div>
    <Header />
    <div id="app">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-view/>
    </div>
    
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue';

@Component({
  components: {
    Header,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
html, body {
  margin: 0;
  padding: 0;
}
#app {
  width: 40%;
  margin: 0 auto;
}
/*#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}*/
</style>
