//vm = View model
const vm = Vue.createApp({ 
    // The data propetry is used to store single values(objects and arrays as well)           
    data(){
        return{
            firstName: 'MON',
            middleName: ' ',
            lastName : 'GO',
            url_go: 'https://google.com',
            url_bi: 'https://bing.com',
            raw_url: '<a href="https://google.com" target="_blank">Google</a>',
            age: 20
        }
    }, 
    // The methods propetry is used to store functions
    methods: {
        increment(){
            this.age++
        },
        updateLastName(msg, event){
            // we can use event modifiers to shorten the amount of code see @input event
            //event.preventDefault()
            console.log(msg)
            this.lastName = event.target.value
        },
        updateMiddleName(event){
            this.middleName = event.target.value
        }
    },
    // The computed propetry is used to store functions that calculates a value
    // The computed propetry can never be asynchronous
    computed: {
        fullName(){
            return `${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}`
        }
    },
    // The watch propetry watch the data for changes and run additional function
    // The watch propetry could be asynchronous
    watch: {
        //reset age 3 sec after change
        age(nweVal, oldVal){
            setTimeout(() => {
                this.age = 20
            },3000)
        }
    }
}).mount('#app')

// setTimeout(() => {          
//     vm.firstName = 'koko'      // proxy mechanism: define auto. the get/set method for the data
// } , 2000)


// Vue.createApp({
//     data(){
//         return{
//             firstName: 'MOMO',
//             lastName : 'Salala'
//         }
//     }
// }).mount('#app2')