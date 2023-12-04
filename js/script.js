const { createApp } = Vue;

createApp({
    data() {
        return {
            newTask: {
                text: '',
                done: true
            },
            todoList:[
                 {
                    text: 'Seguire la lezione',
                    done: true
                },
                 {
                    text: 'Pranzare',
                    done: false
                },
                {
                    text: 'Uscire con gli amici',
                    done: false
                }
            ] 
        }
    }, 
    methods: {
        deleteTask(taskToRemove){
            this.todoList.splice(taskToRemove, 1);
        },
        addTask(taskToAdd){
            this.newTask 
        }
    },

}).mount('#app');