<template>
  <p v-if="age > 25">{{ msg }}</p>
  <p v-else>You must be 25 years or older to view this message</p>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Greeting',
    props:["age"],
    data(){
        return{
            msg: "Hello world!"
    }                                                       
  }
}
</script>

// the scoped attribute, its CSS will apply to elements of the current component only
// using SASS to working with CSS 
<style scoped lang="scss">
$color: red;
p{
    color: $color;
}
</style>