<script lang="ts">
import { Vue, Component,  } from 'vue-property-decorator'
import { mapMutations } from 'vuex'

@Component({ methods: mapMutations(['ADD_LIST']) })
class App extends Vue {
  // 输入的内容
  content = ""
  
  handleKeyDown() {
    if( this.content.trim() ) {
      (this as any).ADD_LIST(this.content)
    }
    this.content = ""
  }
}

export default App
</script>

<template>
  <div class="app">
    
    <div class="input">
      <input 
        type="text" 
        placeholder="来吧" 
        v-model="content" 
        @keydown.enter="handleKeyDown" 
      >
      <button @click="handleKeyDown">确定</button>
    </div>
    
    <div class="nav">
      <router-link tag="button" to="/all">All</router-link>
      <router-link tag="button" to="/todo">Todo</router-link>
      <router-link tag="button" to="/done">Done</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
.app {
  width: 30%;
  margin: 100px auto;
  .input {
    input {
      height: 20px;
      width: 200px;
      margin-right: 20px;
    }
  }
  .nav {
    margin: 10px 0;
    button {
      margin-right: 10px;
      cursor: pointer;
    }
    .router-link-exact-active.router-link-active {
      background: #df42a3;
    }
  }
}
</style>
