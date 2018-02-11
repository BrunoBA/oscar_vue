<template>
  <div id="app">
    <header class="header">
      <span>OSCAR 2018</span>
    </header>
    <main>
      <div class="func">
        <select class="search search_movie_select">
          <option v-for="category of categories" :value="category.value">{{ category.label }}</option>
        </select>
      </div>
      <div class="func">
        <input type="text" class="search search_movie_text" placeholder="Filme">
      </div>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      categories:
      [ 
        {
          value:'MY_LIST',
          label: 'Minha Lista'
        },
        {
          value:'BEST_PICTURE',
          label: 'Melhor Filme'
        },
        {
          value:'ACTOR_IN_A_LEADING_ROLE',
          label: 'Melhor Ator'
        },
        {
          value:'ACTRESS_IN_A_LEADING_ROLE',
          label: 'Melhor Atriz'
        },
        {
          value:'ACTOR_IN_A_SUPPORTING_ROLE',
          label: 'Melhor Ator Coadjuvante'
        },
        {
          value:'ACTRESS_IN_A_SUPPORTING_ROLE',
          label: 'Melhor Atriz Coadjuvante'
        },
        {
          value:'ANIMATED_FEATURE_FILM',
          label: 'Melhor Animação'
        },
        {
          value:'CINEMATOGRAPHY',
          label: 'Melhor Fotografia'
        },
        {
          value:'COSTUME_DESIGN',
          label: 'Melhor Figurino'
        },
        {
          value:'DIRECTING',
          label: 'Melhor Direção'
        },
        {
          value:'DOCUMENTARY_FEATURE',
          label: 'Melhor Documentário (longa)'
        },
        {
          value:'DOCUMENTARY_SHORT_SUBJECT',
          label: 'Melhor Documentário (curta)'
        },
        {
          value:'FILM_EDITING',
          label: 'Melhor Edição'
        },
        {
          value:'FOREIGN_LANGUAGE_FILM',
          label: 'Melhor Filme Estrangeiro'
        },
        {
          value:'MAKEUP_AND_HAIRSTYLING',
          label: 'Melhor Maquiagem/Penteado'
        },
        {
          value:'MUSIC_ORIGINAL_SCORE',
          label: 'Melhor Trilha Sonora'
        },
        {
          value:'MUSIC_ORIGINAL_SONG',
          label: 'Melhor Canção'
        },
        {
          value:'PRODUCTION_DESIGN',
          label: 'Melhor Direção de Arte'
        },
        {
          value:'SHORT_FILM_ANIMATED',
          label: 'Melhor Curta em Animação'
        },
        {
          value:'SHORT_FILM_LIVE_ACTION',
          label: 'Melhor Curta'
        },
        {
          value:'SOUND_EDITING',
          label: 'Melhor Edição de Som'
        },
        {
          value:'SOUND_MIXING',
          label: 'Melhor Mixagem de Som'
        },
        {
          value:'VISUAL_EFFECTS',
          label: 'Melhores Efeitos Especiais'
        },
        {
          value:'WRITING_ADAPTED_SCREENPLAY',
          label: 'Melhor Roteiro Adaptado'
        },
        {
          value:'WRITING_ORIGINAL_SCREENPLAY', 
          label: 'Melhor Roteiro Original'
        }
      ]
    }
  }
}
</script>

<style>

body {
  margin: 0;
}

.func {
  width: 100%;
}

.search {
  border: 0.5px solid #ececec;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 650;
}

.search_movie_text {
  width: 63%;
  border-radius: 5px;
}

.search_movie_select {
  border: 0.5px solid #ececec;
  width: 64%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

main {
  text-align: center;
  margin-top: 20px;
}

.header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
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
