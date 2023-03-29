<template>
  <header class="header">
    <slot name="title"/>
    <slot name="description"/>
    <slot/>
    <h1>ACESSE OUTROS SITES</h1>
    <li class="listaHome">
      <a href="https://google.com" target="_blank">Acesse o google</a>
      <a href="https://facebook.com" target="_blank">Acesse o facebook</a>
      <a href="https://youtube.com" target="_blank">Acesse o youtube</a>
    </li>
  </header>


</template>

<script>
export default {

}

</script>

<style>
  .header{
    border-radius: 10px;
    background-color: black;
    color: #fff;
    text-align: center;
    padding: 5px 5px 5px;
  }
  .listaHome{
    display: inline;
    font-size: 20px;
  }
  a{
    padding-right: 15px;
    color: #42b983;
    text-align: center;
  }

</style>