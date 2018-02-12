<template>
    <div>
        <div class="movie">
            <img class="image" :src="getRealPath">
        </div>
        <div class="legend">
          <span class="title">{{ getRealName }}</span>
        </div>
        <span class="sublegend">({{ movie.translate }})</span>
    </div>
</template>

<script>
    export default {
        props:['movie', 'category'],
        data() {
            return {
                special_categories: [
                  'ACTOR_IN_A_LEADING_ROLE',
                  'ACTRESS_IN_A_LEADING_ROLE',
                  'ACTOR_IN_A_SUPPORTING_ROLE',
                  'ACTRESS_IN_A_SUPPORTING_ROLE'
                ]
            }
        },
        computed: {
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