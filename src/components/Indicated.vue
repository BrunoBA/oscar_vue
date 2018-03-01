<template>
    <div>
        <div class="movie">
            <img v-my-select @click="saveToCache()" class="image" v-bind:class="{ selected: isSelected }" :src="getRealPath">
        </div>
        <div class="legend">
          <span class="title">{{ getRealName }}</span>
        </div>
        <span class="sublegend">({{ movie.translate }})</span>
    </div>
</template>

<script>
    import { categories } from '../categories.js';
    import moment from 'moment';

    export default {
        props:['movie', 'category'],
        data() {
            return {
                special_categories: [
                  'ACTOR_IN_A_LEADING_ROLE',
                  'ACTRESS_IN_A_LEADING_ROLE',
                  'ACTOR_IN_A_SUPPORTING_ROLE',
                  'ACTRESS_IN_A_SUPPORTING_ROLE'
                ],
                categories
            }
        },
        computed: {
            isSelected(){
                let myList = localStorage.getItem('myList') || '{}';
                let database = JSON.parse(myList);

                if (database == {} || database[this.category.toLowerCase()] == undefined) {
                    return false;
                }

                return this.movie.translate == database[this.category.toLowerCase()].translate;
            },  

            getRealName(){
                if (this.special_categories.indexOf(this.category) >= 0) {
                    let pos = this.movie.categories.indexOf(this.category);
                    if (pos >= 0) {
                        return this.movie.info[pos];
                    } 
                }

                return this.movie.name;
            },

            getRealPath(){
                if (this.special_categories.indexOf(this.category) >= 0) {
                    let pos = this.movie.categories.indexOf(this.category);
                    if (pos >= 0) {
                        return require(`../assets/${this.removeCharacters(this.movie.info[pos])}.jpg`);
                    } 
                }

                return this.movie.path;
            }
        },
        methods: {
            removeCharacters(string){
              return string.toLowerCase()
                .replace(new RegExp('[ÁÀÂÃ]','gi'), 'a')
                .replace(new RegExp('[ÉÈÊ]','gi'), 'e')
                .replace(new RegExp('[ÍÌÎ]','gi'), 'i')
                .replace(new RegExp('[ÓÒÔÕ]','gi'), 'o')
                .replace(new RegExp('[ÚÙÛ]','gi'), 'u')
                .replace(new RegExp('[Ç]','gi'), 'c')
                .replace(/[.]/g, '')
                .replace(/[ -]/g, '_');
            },

            saveToCache () {
                let oscarDay = moment(new Date("2018","02", "04", "22", "00", "00"));
                let validate = moment(new Date()).isBefore(oscarDay);
                let today = moment(new Date());

                if (validate) {
                    let myList = localStorage.getItem('myList') || '{}';
                    myList = JSON.parse(myList);
                    
                    let movie = {
                        name: this.getRealName,
                        path: this.getRealPath,
                        category: this.category,
                        label: this.translateCategory(this.category),
                        translate: this.movie.translate
                    }

                    myList[this.category.toLowerCase()] = movie;
                    localStorage.setItem('myList', JSON.stringify(myList));

                    console.log(`${today.format('DD/MM/YYYY HH:mm:ss')} uma data anterior ao dia do oscar, ${oscarDay.format('DD/MM/YYYY HH:mm:ss')}`);
                    console.log('Salvo no banco de dados!');
                } else {
                    console.log(`${today.format('DD/MM/YYYY HH:mm:ss')} uma data depois ao dia do oscar, ${oscarDay.format('DD/MM/YYYY HH:mm:ss')}`);
                }
            }, 

            translateCategory (category) {
                return this.categories.reduce((translate, cur) => {
                    if (cur.value == category)
                        return cur.label;
                    return translate;
                }, '');
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

    .image:hover {
        width: 138px;
        height: 188px;
        cursor: pointer;
        border: 4px solid #d8d41c;
    }

    .selected {
        border: 4px solid #d8d41c;
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