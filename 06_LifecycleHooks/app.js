// we have tow apps the first one is using the compiler
// the second one is manually creating the object

let vm = Vue.createApp({
  data() {
    return {
      message: "Hello world!"
    }
  },
  //template property not recommended
  //template: `{{ message }}`

  // // Lifecycle Hooks
  // ,beforeCreate(){
  //   console.log('beforeCreate() func called',this.message)
  // },
  // created(){
  //   console.log('created() func called',this.message)
  // },
  // beforeMount(){
  //   console.log('beforeMount() func called',this.$el)
  // },
  // mounted(){
  //   console.log('mounted() func called',this.message)
  // },
  // beforeUpdate(){
  //   console.log('beforeUpdate() func called',this.message)
  // },
  // updated(){
  //   console.log('updated() func called',this.message)
  // },beforeUnmount(){
  //   console.log('beforeunmount() func called')
  // },unmounted(){
  //   console.log('unmount() func called')
  // }
})  

vm.component('hello',{
  template: `<h1>{{ message }}</h1>`,
  data(){
    return{
      message:'Hello World'
    }
  }
})

vm.mount('#app')


// let vm2 = Vue.createApp({
//   data() {
//     return {
//       message: "Hello world!"
//     }
//   },
//   //render is not recommended
//   render(){
//     // h() = hyperScript
//     return Vue.h(
//       'h1',
//       this.message
//     )
//   }
// }).mount('#app2') 


// setTimeout(() => {
//   vm.mount('#app')
// },3000)