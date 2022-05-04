let vm = Vue.createApp({
    data(){
        return{
            isPurple: false,
            selectedColor: '',
            size: 150,
            mode: 1
            
        }
    },
    computed: {
        // if isPurple = true => jump to purple class in css file
        circle_classes(){
            return{ purple: this.isPurple}
        },
        styleObject(){
            return {width: this.size + 'px', 
                height: this.size + 'px', 
                lineHeight: this.size +'px'
                }
            }
        
    }
}).mount('#app')