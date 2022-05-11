<template>
 <button type="button" @click="onClickAge">Update Age Event</button>
 <button type="button" @click="ageChangeFunc(3)">Update Age CB</button>
  <p>The user is {{age}} years old</p>
  <p>double Age: {{ageDoubled}}</p>
</template>

<script>
export default {
    // accept property age with props
    // eslint-disable-next-line vue/multi-word-component-names
    name: "User",
    emits: ['age-change'],
    props:{
        age:{
            //required : true,
            //default: 20,
            // Validating Prop Age when the cond is false then get warn
            validator(value){
                return value < 130
            }
        },
        //Callback Func call the func from parent, does the same like events(emit) but its not recommanded
        ageChangeFunc: Function
    },
    computed: {
        // just grab the value, dosent change
        ageDoubled(){
            return this.age *2
        }
    },
    methods:{
        // change in the value in the parent comp 'App' with emitting event
        onClickAge(){
            this.$emit('age-change',3)
        }
       
    }
}
</script>

<style>

</style>