<template>
  <div>
    <SharedHeader />
    <div id="app">
      <router-view/>
    </div>
    
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SharedHeader from '@/components/SharedHeader.vue';

@Component({
  components: {
    SharedHeader,
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
  width: 30%;
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
