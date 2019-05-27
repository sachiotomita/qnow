<template>
  <main>
    <Search @set="fetchItems" />
    <div v-if="isLoading">Loading...</div>
    <ul class="items" v-if="!isLoading">
      <Item v-for="item in items" :key="item.id" />
    </ul>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Search from '@/components/main/Search.vue';
import Item from '@/components/main/Item.vue'
import axios from 'axios';
import filterTag from '@/assets/ts/filterItem.ts';

@Component({
  components: {
    Search,
    Item,
  },
})
export default class Main extends Vue {
  items: string[] = [];
  isLoading: boolean = false;
  fetchItems(tagname: string) {
    
    this.isLoading = true;
    const url: string = 'https://qiita.com/api/v2/tags/'+tagname+'/items?per_page=50';
    axios.get(url)
    .then((res: any): void => {
      this.items = filterTag(res.data);
      this.isLoading = false;
    })
  }
}
</script>

<style lang="scss" scoped>
main {
  margin-top: 90px;
}
</style>
