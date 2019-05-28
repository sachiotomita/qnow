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
  font-family: YuGothicM; 
}
/**
* sp
*/
@media screen and (max-width: 480px) {
  #app {
    width: 90vw;
  }
}
/**
* sp(横)
*/
@media screen and (min-width: 481px) and (max-width: 600px) {
  #app {
    width: 85vw;
  }
}
/**
* タブレット
*/
@media screen and (min-width: 601px) and (max-width: 960px) {
  #app {
    width: 80vw;
  }
}
/**
* iPad Pro
*/
@media screen and (min-width: 961px) and (max-width: 1024px) {
  #app {
    width: 60vw;
  }
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
