<template>
  <h3>hey</h3>
  <!-- <button type="button" @click="age++">Update Age</button> -->
  <greeting :age="age"></greeting>
  <user :age="age" @age-change="updateAge" :ageChangeFunc="updateAgeCB"></user>
</template>

<script>
import Greeting from './components/Greeting.vue'
import User from './components/User.vue'

export default {
  name: 'App',
  // child components
  components: {
    Greeting,
    User
  },
  data(){
    return{
      age:20
    }
  },
  methods:{
    updateAge(num){
      this.age += num
    },
    //Callback Func 
    updateAgeCB(num){
      this.age += num
    }
  }
}
</script>

