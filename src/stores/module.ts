// Pinia Store
import { defineStore } from 'pinia'


interface State {
    firstName: string
 
}

export const useAuthUserStore = defineStore('authUser', {
    // convert to a function
    state: (): State => ({
        firstName: '',  
    }),
    getters: {
        // firstName getter removed, no longer needed
        Name: (state) => `${state.firstName}`,
     
       
    },
    actions: {
        async test(){
            console.log("testststts")
            this.firstName = "khan"
        }
       
    }
})