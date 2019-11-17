<template>
  <div id="app">
    <div class="jumbotron">
      <div class='row'>
        <div class='col-2'>
         <img src="./assets/logo.png" class='ml-4' alt="">
        <h1 class='display-4 mt-2'>Solluti Tecnologias</h1>
        </div>
        <div class="col-4 mt-4">
        <h1 class='font-weight-light '>Listar e Cadastrar clientes</h1>
        </div>
    </div>

    </div>
      <button class='btn btn-warning mb-4' @click="exibirMenu = !exibirMenu" ><i class="fas fa-bars"></i></button>
    <div class="container-fluid">
      <div class="row">
        <div class="col-2" v-if='exibirMenu == true' >
          
        <router-link  to='/lista' class='btn btn-secondary ml-4 mt-2'>Listar</router-link>
      <router-link  to='/cadastro' class='btn btn-secondary ml-4 mt-1'>Cadastrar</router-link>
        </div>
        <div class="col-10">
            <router-view></router-view>
            
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  
  },
  data(){
    return {
      exibirMenu: false,
      
    }
  }
}
</script>

<style scoped>

  img {
    width: 40px;
  }
  

  .container-fluid{
    margin: 0;
    padding-left: 10px;
    width: 100%;


  }

  .jumbotron{
    background-color: orange;
    box-shadow: 1px 1px 1px 1px #ddd;
  }
  .display-4 {
    color: white;
    font-size: 14px
  }
  .container-fluid .row .col-2 {
    background-color: #FFC625;
    padding-left: 15px;
    display: flex;
    flex-direction: column;
    height: 200vh;
    border: 3px solid orange;

  }

  .btn {
    
    background-color: white;
    color: #FFC625;
    border: none;
    font-size: 20px;
    border: orange;
    display: block
    
    
    

  }
  .container-fluid .row .col-2 .btn {
    width: 220px;
  }

  .btn:hover {
    background-color: orange;
    color: white;
    border: 1px solid #ddd;
    font-size: 22px;
  }
  .font-weight-light{
    color: #ddd;
  }
</style>