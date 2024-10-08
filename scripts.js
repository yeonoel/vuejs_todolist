


const todoLite = {
    data() {
        return {
            todos: [],
            todosFishix: [],
            isSelected: false,
            newtodo: {
                
            },
            newTodoFihish: {

            }
        }
    },
    methods: {
        addnewToDo(){
            if (this.newtodo.do) {
                this.todos.push({do: this.newtodo.do, isDone: false});
                this.newtodo = { }
                localStorage.setItem('todos', JSON.stringify(this.todos) )
            } else {
                alert("Vous n'avez entré de tache")
            }
        },
        addSelection(item){
            item.isDone = !item.isDone;
                
        },
        
    },
    created() {
        this.todos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : this.todos;
    },
    updated() {
        localStorage.setItem('todos', JSON.stringify(this.todos) )

    },
    
};

 
Vue.createApp(todoLite).mount('#app');