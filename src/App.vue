<template>
  <div id="app">
    <div id="nav">
      <!--<router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      -->
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">

*,
*::after,
*::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    
}

html {
  font-size: 62.5%;
  
  @media (max-width: 1100px) {
    font-size: 40%;
  }
  @media (max-width: 630px) {
    font-size: 35%;
  }
  @media (max-width: 450px) {
    font-size: 28%;
  }




}

body {
  box-sizing: border-box;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
