const { createApp } = Vue;

  createApp({
    data() {
      return {
         homeWork: [
            {
                work : "Fare i compiti",
                fatto : false
            },
            {
                work : "Fare il bagno",
                fatto : false
            },{
                work : "Lavare i vestiti",
                fatto: false
            },
            
         ]

         
      }
    },
    methods: {

    add(){
        tarea = this.$refs.addi.value
        hola= { 
            work: tarea,
            fatto: false
        };
        console.log(tarea);
        if(tarea == ""){
            alert("non hai messo nessun compito")
        } else {

            this.homeWork.push(hola)
            console.log(this.homeWork);
        }

    }
    }
    
  }).mount('#app')