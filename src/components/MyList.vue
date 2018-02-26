<template>
    <ul class="indicated-list">
        <li class="indicated-item" v-for="movie of extractMovies">
            <div>
              <span class="title category">{{ movie.label }}</span>  
            </div>
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
                let regex = new RegExp(this.filter.replace(/\W/g, '').trim(), 'i');

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
        
    .indicated-list {
        width: 100%;
    }

    .indicated-item {
        display: inline-block;
        margin: 8px 8px;
    }
    
    .title {
        font-weight: 650;
    }    

    .category {
        font-size: 12px;
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


