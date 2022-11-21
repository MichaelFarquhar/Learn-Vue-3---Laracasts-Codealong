export default {
    template: `
        <form @submit.prevent="addToList">
            <input type="text" v-model="input">
            <button type="submit">Add</button>
        </form>
    `,

    data(){
        return {
            input: ''
        }
    },

    methods: {
        addToList(){
            if(this.input !== ''){
                this.$emit('addToList', this.input);
                this.input = '';
            }
        }
    }
}