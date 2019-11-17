<template>
  <div class='mt-5'>
    <PageTitle icon="fas fa-list" main="Lista" sub="Lista de clientes" />

      <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">User</th>
            <th scope="col">Email</th>
            <th scope="col">Website</th>
           
          </tr>
        </thead>
        <tbody>
          <tr v-for='(user, i) in users' :key='i'>
            <th scope="row">{{user.id}}</th>
            <td>{{user.name}}</td>
            <td>{{user.username}}</td>
            <td>{{user.email}}</td>
            <td>{{user.website}}</td>
           
            
          </tr>
        </tbody>
      </table>
    <div>
      
    </div>
      <Formsalvo @criar='criarLista'/>
      

   
  </div>
  
</template>

<script>
import axios from 'axios'
import api from '../services/api'
import PageTitle from "../components/PageTitle"
import Formsalvo from './Cadastro'


export default {
  components: {
    PageTitle,
   Formsalvo
  },
  data(){
    return {
      exibirform: false,
      exibirlista: true,
      users:[]
    }
  },
  created(){
     axios.get(`${api.BaseUrl}/users`)
     .then((resp) => {
       this.users = resp.data
    })
  },
  methods:{
    criarLista(user){
      axios.post(`${api.BaseUrl}/users`, user)
      .then((resp) => {
        this.user.push(resp.data)
      })
    }
  }
 
  
};
</script>

<style scoped>
</style>