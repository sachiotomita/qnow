<template>
  <main>
    <Search />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Search from '@/components/main/Search.vue';

@Component({
  components: {
    Search,
  },
})
export default class Main extends Vue {

}
</script>

