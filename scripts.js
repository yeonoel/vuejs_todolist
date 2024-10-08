


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
            } else {
                alert("Vous n'avez entré de tache")
            }
        },
        addSelection(item){
            item.isDone = !item.isDone;
                
        },
        removeAllItem() {
            this.todos= []
        }
    }
    
};

 
Vue.createApp(todoLite).mount('#app');