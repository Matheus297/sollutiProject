<template>
    <div>
        <PageTitle  icon='fas fa-user-plus' main='Formulario de cadastro' sub='Cadastro'/>
           <form @submit.prevent='criar'>
               <div class="col-8">

                   <div class="form-group">
                     <label for="">Nome</label>
                        <input type="text" class="form-control" v-model='userlocal.name'>
                    </div>
                    
                   <div class="form-group">
                     <label for="">Usuario</label>
                        <input type="text" class="form-control" v-model='userlocal.username'>
                    </div>
                    
                   <div class="form-group">
                     <label for="">Email</label>
                        <input type="text" class="form-control" v-model='userlocal.email'>
                    </div>
                    
                   <div class="form-group">
                     <label for="">Website</label>
                        <input type="text" class="form-control" v-model='userlocal.website'>
                    </div>
               

                     <button class="btn btn-warning" type="submit">Enviar</button>
                     <p v-on="criartarefa"></p>

                     

                    
               </div>
           </form>
    </div>
</template>
<script>


import PageTitle from '../components/PageTitle'
export default {
    components: {
        PageTitle
    },
    props: {
        user: {
            type: String,
            default: null
        },
        
    },
    data(){
        return {
            users:[],
            userlocal: Object.assign({}, {id:'',name:'',username:'',email:'',website:''}, this.user)
        }
    },
    methods: {
        criar(){
            this.$emit('criar', this.userlocal)
            this.userlocal = {id:'',name:'',username:'',email:'',website:''}
        },
        
    }
}
</script>