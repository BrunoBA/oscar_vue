<template>
  <div id="app">
    <header>
      <span>OSCAR 2018</span>
    </header>
    <main>
      <div>
        <select class="search_movie">
          <option value="_list">Minha lista</option>
          <option value="category">Melhor Filme</option>
          <option value="category">Melhor Atriz</option>
          <option value="category">Melhor Ator</option>
          <option value="category">Melhor Atriz C.</option>
        </select>
        <input class="search_movie" type="text">
      </div>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
  margin: 0;
}

.search_movie {
  border: 0.5px solid #35495E;
  background-color: #35485d38;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
