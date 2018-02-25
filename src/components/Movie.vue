<template>
  <div class="body">
    <search 
        @filterCategories="changeFilterCategory($event)"
        @filterMovies="changeFilterName($event)"
        />
    <ul class="indicated-list" v-if="category != 'MY_LIST'">
        <li class="indicated-item" v-for="movie of listOfMovies">
            <indicated-component 
              :movie="movie"
              :category="category"/>
        </li>
    </ul>
    <my-list v-else
    :filter="filter"/> 
     
  </div>
</template>

<script>
  import Indicated from './Indicated.vue';
  import Search from './Search.vue';
  import MyList from './MyList.vue';
  import { movies } from '../movies.js';

  export default {

    components: {
      'indicated-component': Indicated,
      search: Search,
      'my-list': MyList
    },

    name: 'movie',
    data () {
      return {
        filter: '',
        category: 'MY_LIST',
        movies,
        
      }
    },
    created() {
      console.log('Essa chamada ainda vai ser muito importante!');
    },
    computed: {
        listOfMovies() {
            let regex = new RegExp(this.filter.replace(/\W/g, '').trim(), 'i');
            return this.movies.filter( movie => {
                let checkName = regex.test(movie.name) || regex.test(movie.translate);
                let checkCategory = true;

                if (this.category !== 'MY_LIST') {
                    checkCategory = (movie.categories.indexOf(this.category) >= 0);
                }

                if (checkName && checkCategory) {
                    return movie;
                }
            });
        }
    },
    methods: {
        changeFilterName($event){
            this.filter = $event;
        },
        changeFilterCategory($event){
            this.category = $event;
        }
    }
  }
</script>

<style scoped>
  .body {
    width: 100%;
  }

  .indicated-list {
    width: 100%;
  }

  .indicated-item {
    display: inline-block;
    margin: 8px 8px;
  }
  
  ul {
    list-style-type: none;
    padding-left: 0px;
  }
</style>
