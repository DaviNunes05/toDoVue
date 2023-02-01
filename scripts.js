const todoList = {
    data() {
        return{
            tarefas: [],
            novaTarefa: {
                done:false
            }
        }
    },
    methods: {
        addTarefa: function(){
            if(this.novaTarefa.text){
            this.tarefas.push(this.novaTarefa)
            this.novaTarefa = {
                done:false}
            }else{
                alert('Campo não pode estar vazio')
            };
            localStorage.setItem('tarefas', JSON.stringify(this.tarefas))
        }
    },
    created(){
        this.tarefas = localStorage.getItem('tarefas') ? JSON.parse(localStorage.getItem('tarefas')) : this.tarefas;
    },
    updated(){
        localStorage.setItem('tarefas', JSON.stringify(this.tarefas))
    }
};

Vue.createApp(todoList).mount('#app');