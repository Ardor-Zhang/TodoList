<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { mapState, mapMutations } from 'vuex'

@Component({ computed: mapState(['list']), methods: mapMutations(['DELETE_ITEM', 'CHANGE_STATE']) })
class All extends Vue {
  // 删除item
  handleClick(id: number) {
    (this as any).DELETE_ITEM(id)
  }
  
  handleChange(id: number) {
    (this as any).CHANGE_STATE(id)
  }
}

export default All
</script>

<template>
  <div class="list">
    <div class="list-item" v-for="item in this.list" :key="item.id">
      <div class="content">
        <input type="checkbox" :checked="item.isDone" @change="() => handleChange(item.id)">
        <span :class="item.isDone && 'isdone'">{{ item.content }}</span>
      </div>
      <div><button @click="() => handleClick(item.id)">删除</button></div>
    </div>
  </div>
</template>

<style lang="scss">
.list {
  .list-item {
    display: flex;
    margin: 5px 0;
    .content {
      flex: 1;
    }
    .isdone {
      text-decoration: line-through;
      color: #ccc;
    }
  }
}
</style>