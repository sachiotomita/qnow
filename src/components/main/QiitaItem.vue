<template>
  <li class="item">
    <div class="item__title"><a :href="item.url">{{ item.title }}</a></div>
    <div class="item__created">{{ item.created_at }}</div>
    <div class="item__likescount">いいね：{{ item.likes_count }}</div>
    <button type="button" v-for="tag in item.tags" :key="tag.id" @click="$emit('set', tag.name)">{{ tag.name }}</button>
  </li>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class QiitaItem extends Vue {
  @Prop() private item!: { key: string };
}
</script>

<style lang="scss">
.item {
  width: 100%;
  margin-bottom: 15px;    
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 7px;
  list-style: none;
  box-shadow: 2px 2px 2px #eee; 
  box-sizing: border-box;
  &__title {
    padding-bottom: 10px;
    a {
      color: #2196F3;
      &:visited {
        color: #2196F3;
      }
    }
  }
  &__likescount {
    padding-bottom: 7px;
  }
  button {
    vertical-align: middle;
    height: 30px;
    margin-right: 6px;
    margin-bottom: 5px;
    padding: 6px;
    background-color: #2196F3;
    color: #fff;
    border: none;
    box-sizing: border-box;
  }
}
</style>
