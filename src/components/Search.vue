<template>
    <div>
        <div class="func">
            <select @change="sendCategory($event.target.value)" class="search search_movie_select">
                <option v-for="category of categories" :value="category.value">{{ category.label }}</option>
            </select>
        </div>
        <div class="func">
            <input type="text" @input="sendToParent($event.target.value)" class="search search_movie_text" placeholder="Filme">
            {{ filter }}
        </div>    
    </div>
</template>

<script>
  import { categories } from '../categories.js';

  export default {
      data() {
        return {
          filter: '',
          categories
      }
    },

    methods: {
      sendToParent(value) {
        this.$emit('filterMovies', value);
      },

      sendCategory(value) {
        this.$emit('filterCategories', value);
      }
    }
  }
</script>

<style scoped>
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
</style>

