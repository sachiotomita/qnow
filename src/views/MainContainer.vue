<template>
  <main>
    <SearchItems @set="fetchItems" />
    <div v-if="isLoading">Loading...</div>
    <ul class="items" v-if="!isLoading">
      <QiitaItem v-for="item in items" :key="item.id" :item="item" />
    </ul>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SearchItems from '@/components/main/SearchItems.vue';
import QiitaItem from '@/components/main/QiitaItem.vue'
import axios from 'axios';
import filterTag from '@/assets/ts/filterItem.ts';

@Component({
  components: {
    SearchItems,
    QiitaItem,
  },
})
export default class MainContainer extends Vue {
  items: string[] = [];
  isLoading: boolean = false;
  async  fetchItems(tagname: string) {
    this.isLoading = true;
    const url: string = 'https://qiita.com/api/v2/tags/' + tagname + '/items?per_page=50';
    await axios.get(url)
    .then((res: any): void => {
      this.items = filterTag(res.data);
      console.log(this.items);
    })
    .then(():void => {
      this.isLoading = false;
    })
  }
}
</script>

<style lang="scss" scoped>
main {
  margin-top: 90px;
  .items {
    padding: 0;
  }
}
</style>
