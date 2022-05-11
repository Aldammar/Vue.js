<template>
  <button type="button" @click="flag = !flag">Toggle</button>

<!-- example for CSS Transitions   -->
  <!-- mode = out-in OR in-out -->
  <!--   
  <transition name="fade" mode="out-in">
    <h2 v-if="flag" key="main">Hello World</h2>
    <h2 v-else key="secondary">Another hello!</h2>
  </transition>
  -->

<!-- example for CSS Animations   -->
<!-- 
  <transition name="zoom" type="animation" appear>
    <h2 v-if="flag"> hello world</h2>
  </transition>
 -->

<!-- example for JavaScript Animations   -->
<!-- 
 <transition 
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
    :css="false"
  >
    <h2 v-if="flag"> Hey </h2>
  </transition>
 -->

<button @click="addItem">Add</button>

<ul>
  <transition-group name="fade"
  enter-active-class="animate__animated animate__flipInX"
  leave-active-class="animate__animated animate__flipOutX"
  >
    <li 
      v-for="(number,index) in numbers" 
      :key="number"
      @click="removeItem(index)"
    >
      {{ number }}
    </li>
  </transition-group>
</ul>

</template>


 
<script>


export default {
  name: 'App',
  data(){
    return{
      flag: true,
      numbers: [1,2,3,4,5],
    }
  },
  methods:{
    addItem(){
      const num = Math.floor(Math.random() * 100 + 1)
      const index = Math.floor(Math.random() * this.numbers.length)
      this.numbers.splice(index, 0, num)

    },
    removeItem(index){
      this.numbers.splice(index,1)
    },
    beforeEnter(el){
      console.log('before-enter event fired' , el)
    },
    enter(el, done){
      console.log('enter event fired' , el)

      const animation = el.animate([{ transform: "scale3d(0,0,0)"},{}],{
        duration: 1000,
      })

      animation.onfinish = () =>{
         done()
      }

     
    },
    afterEnter(el){
      console.log('after-enter event fired' , el)
    },
    beforeLeave(el){
      console.log('before-leave event fired' , el)
    },
    leave(el, done){
      console.log('leave event fired' , el)
      const animation = el.animate([{},{ transform: "scale3d(0,0,0)"}],{
        duration: 1000,
      })

      animation.onfinish = () =>{
         done()
      }
    },
    afterLeave(el){
      console.log('after-leave event fired' , el)
    },
  }
  
}
</script>

<style>
.animate__flipInX{
  position: absolute;
}
.animate__animated{
  animation-duration: 1.5s;
}

li {
  font-size: 22px;
  cursor: pointer;
}

h2{
  width: 500px;
  padding: 20px;
  margin: 20px;
  }
/* 
There are six classes applied for enter / leave transitions:
v-enter-from, v-enter-active, v-enter-to
v-leave-from, v-leave-active, v-leave-to 
*/

/* CSS Transition  */
.fade-enter-from{
  opacity: 0;
}

.fade-enter-active{
  transition: all 1s linear;
}

.fade-leave-to{
  transition: all 1s linear;
  opacity: 0;
}

.fade-move{
  transition: all 1s linear;
}

.fade-leave-active{
  position: absolute;
}


/* CSS Animations  */
.zoom-enter-from{
  opacity: 0;
}
.zoom-enter-active{
  animation: zoom-in 1s linear forwards;
  transition: all 2s linear;
}

.zoom-leave-active{
  animation: zoom-out 1s linear forwards;
  transition: all 2s linear;
}
.zoom-leave-to{
  opacity: 0;
}

@keyframes zoom-in {
  from{
    transform: scale(0,0);
  }
  to{
    transform: scale(1,1);
  }
}

@keyframes zoom-out {
  from{
    transform: scale(1,1);
  }
  to{
    transform: scale(0,0);
  }
}

</style>
