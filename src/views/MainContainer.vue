<template>
  <main>
    <SearchItems @set="fetchItems" :tagname="tagname" />
    <LoadingAnimation v-if="isLoading" />
    <ul class="items" v-if="!isLoading">
      <QiitaItem v-for="item in items" :key="item.id" :item="item" @set="fetchItems" />
    </ul>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SearchItems from '@/components/main/SearchItems.vue';
import QiitaItem from '@/components/main/QiitaItem.vue';
import LoadingAnimation from '@/components/LoadingAnimation.vue';
import axios from 'axios';
import filterTag from '@/assets/ts/filterItem.ts';

@Component({
  components: {
    SearchItems,
    QiitaItem,
    LoadingAnimation,
  },
})
export default class MainContainer extends Vue {
  public tagname: string = '';
  private items: string[] = [];
  private isLoading: boolean = false;
  public fetchItems(tagname: string) {
    this.tagname = tagname;
    this.isLoading = true;
    const url: string = 'https://qiita.com/api/v2/tags/' + this.tagname + '/items?per_page=50';
    axios.get(url)
    .then((res: any): void => {
      this.items = filterTag(res.data);
    })
    .then((): void => {
      this.isLoading = false;
    })
    .catch(() => {
      this.items = [];
      this.isLoading = false;
    });
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
