<template>
    <div class='page-title'>
        <h1><i v-icon='icon' :class='icon'></i> {{main}}</h1>
        <h2 class='sub-title'>{{sub}}</h2>
    </div>
</template>

<script>
    export default {
        props:  ['icon', 'sub', 'main']
        
        
    }
</script>

<style scoped>
    .page-title h1 {
        margin: 0px;
        font-size: 25px;
        font-weight: bold
      
    }
    .sub-title{
        font-weight: 200;
        font-size: 18px;
    }

    .page-title h2 {
        color: #333;
        margin-top: 10px;
        margin-left: 30px;
    }
</style>