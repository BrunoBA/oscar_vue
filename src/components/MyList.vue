<template>
    <ul class="indicated-list">
        <li class="indicated-item" v-for="movie of extractMovies">
            <span class="title">{{ movie.label }}</span>
            <div class="movie">
                <img class="image" :src="movie.path">
            </div>
            <div class="legend">
              <span class="title">{{ movie.name }}</span>
            </div>
            <span class="sublegend">({{ movie.translate }})</span>
        </li>
    </ul>
</template>
<script>
    export default {
        props:['filter'],
        data() {
            return {
                name: 'My list',        
            }
        },
        created() {
            let myList = this.loadInfo();
            this.movies = Object.keys(myList).map(function (key) { return myList[key]; });
        },
        computed: {
            extractMovies() {
                let myList = this.loadInfo();
                let listMovies = Object.keys(myList).map(function (key) { return myList[key]; });
                let regex = new RegExp(this.filter.trim(), 'i');

                return listMovies.filter( movie => {
                    if (regex.test(movie.name) || 
                        regex.test(movie.translate) || 
                        regex.test(movie.category) || 
                        regex.test(movie.label)) {
                        return movie;
                    }
                });
            }
        },
        methods: {
            loadInfo() {
                let myList = localStorage.getItem('myList') || '{}';
                return JSON.parse(myList);
            }
        }

    }
</script>
<style scoped>
    .title {
        font-weight: 650;
    }    

    .image {
        width: 138px;
        height: 188px;
        cursor: pointer;
    }

    .legend {
        font-size: 12px;
        padding: 0px;
        text-align: center;
    }

    .sublegend {
        font-style: italic;
        font-size: 12px;
    }
</style>


