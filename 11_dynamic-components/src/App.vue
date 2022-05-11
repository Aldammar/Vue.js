<template>
  <select v-model="componentName">
    <option value="Home">Home</option>
    <option value="About">About</option>
  </select>
  <!-- load the components dynamically. -->
  <!--keep-alive:keeps the component that's inside of it alive, even if it shouldn't appear in the dom,
   this will make sure the component lives in memory. -->
  <keep-alive>
    <component :is="componentName"></component>
  </keep-alive>
  
</template>

<script>
import Home from "./components/Home.vue"
import About from "./components/About.vue"

export default {
  name: 'App',
  components:{
    Home,
    About,
  },
  data(){
    return{
      componentName: "Home",
    }
  }
  
}
</script>


