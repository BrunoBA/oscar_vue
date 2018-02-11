<template>
  <div class="body">
    <h1>{{ name }}</h1>
    <ul class="indicated-list">
      
      <li class="indicated-item" v-for="movie of movies">
        <indicated-component :path="movie.path" :name="movie.name"/>
      </li>
    </ul>
  </div>
</template>

<script>
  import Indicated from './Indicated.vue';

  export default {

    components: {
      'indicated-component': Indicated
    },

    name: 'movie',
    data () {
      return {
        name: 'Indicados',
        movies: [
        {
            "name":"Call Me by Your Name",
            "path":require('../assets/call_me_by_your_name.jpg'),
            "info":[
                "Peter Spears, Luca Guadagnino, Emilie Georges and Marco Morabito, Producers",
                "Timothée Chalamet",
                "\"Mystery Of Love\" Music and Lyric by Sufjan Stevens",
                "Screenplay by James Ivory"
            ],
            "categories":[
                "BEST_PICTURE",
                "ACTOR_IN_A_LEADING_ROLE",
                "MUSIC_ORIGINAL_SONG",
                "WRITING_ADAPTED_SCREENPLAY"
            ]
        },
        {
            "name":"Darkest Hour",
            "path":require('../assets/darkest_hour.jpg'),
            "info":[
                "Tim Bevan, Eric Fellner, Lisa Bruce, Anthony McCarten and Douglas Urbanski, Producers",
                "Gary Oldman",
                "Bruno Delbonnel",
                "Jacqueline Durran",
                "Kazuhiro Tsuji, David Malinowski and Lucy Sibbick",
                "Production Design: Sarah Greenwood; Set Decoration: Katie Spencer"
            ],
            "categories":[
                "BEST_PICTURE",
                "ACTOR_IN_A_LEADING_ROLE",
                "CINEMATOGRAPHY",
                "COSTUME_DESIGN",
                "MAKEUP_AND_HAIRSTYLING",
                "PRODUCTION_DESIGN"
            ]
        },
        {
            "name":"Dunkirk",
            "path":require('../assets/dunkirk.jpg'),
            "info":[
                "Emma Thomas and Christopher Nolan, Producers",
                "Hoyte van Hoytema",
                "Christopher Nolan",
                "Lee Smith",
                "Hans Zimmer",
                "Production Design: Nathan Crowley; Set Decoration: Gary Fettis",
                "Richard King and Alex Gibson",
                "Mark Weingarten, Gregg Landaker and Gary A. Rizzo"
            ],
            "categories":[
                "BEST_PICTURE",
                "CINEMATOGRAPHY",
                "DIRECTING",
                "FILM_EDITING",
                "MUSIC_ORIGINAL_SCORE",
                "PRODUCTION_DESIGN",
                "SOUND_EDITING",
                "SOUND_MIXING"
            ]
        },
        {
            "name":"Get Out",
            "path":require('../assets/get_out.jpg'),
            "info":[
                "Sean McKittrick, Jason Blum, Edward H. Hamm Jr. and Jordan Peele, Producers",
                "Daniel Kaluuya",
                "Jordan Peele",
                "Written by Jordan Peele"
            ],
            "categories":[
                "BEST_PICTURE",
                "ACTOR_IN_A_LEADING_ROLE",
                "DIRECTING",
                "WRITING_ORIGINAL_SCREENPLAY"
            ]
        },
        {
            "name":"Lady Bird",
            "path":require('../assets/lady_bird.jpg'),
            "info":[
                "Scott Rudin, Eli Bush and Evelyn O'Neill, Producers",
                "Saoirse Ronan",
                "Laurie Metcalf",
                "Greta Gerwig",
                "Written by Greta Gerwig"
            ],
            "categories":[
                "BEST_PICTURE",
                "ACTRESS_IN_A_LEADING_ROLE",
                "ACTRESS_IN_A_SUPPORTING_ROLE",
                "DIRECTING",
                "WRITING_ORIGINAL_SCREENPLAY"
            ]
        },
        {
            "name":"Phantom Thread",
            "path":require('../assets/phatom_thread.jpg'),
            "info":[
                "JoAnne Sellar, Paul Thomas Anderson, Megan Ellison and Daniel Lupi, Producers",
                "Daniel Day-Lewis",
                "Lesley Manville",
                "Mark Bridges",
                "Paul Thomas Anderson",
                "Jonny Greenwood"
            ],
            "categories":[
                "BEST_PICTURE",
                "ACTOR_IN_A_LEADING_ROLE",
                "ACTRESS_IN_A_SUPPORTING_ROLE",
                "COSTUME_DESIGN",
                "DIRECTING",
                "MUSIC_ORIGINAL_SCORE"
            ]
        },
        {
            "name":"The Post",
            "path":require('../assets/the_post.jpg'),
            "info":[
                "Amy Pascal, Steven Spielberg and Kristie Macosko Krieger, Producers",
                "Meryl Streep"
            ],
            "categories":[
                "BEST_PICTURE",
                "ACTRESS_IN_A_LEADING_ROLE"
            ]
        },
        {
            "name":"The Shape of Water",
            "path":require('../assets/the_shape_of_water.jpg'),
            "info":[
                "Guillermo del Toro and J. Miles Dale, Producers",
                "Sally Hawkins",
                "Richard Jenkins",
                "Octavia Spencer",
                "Dan Laustsen",
                "Luis Sequeira",
                "Guillermo del Toro",
                "Sidney Wolinsky",
                "Alexandre Desplat",
                "Production Design: Paul Denham Austerberry; Set Decoration: Shane Vieau and Jeff Melvin",
                "Nathan Robitaille and Nelson Ferreira",
                "Christian Cooke, Brad Zoern and Glen Gauthier",
                "Screenplay by Guillermo del Toro & Vanessa Taylor; Story by Guillermo del Toro"
            ],
            "categories":[
                "BEST_PICTURE",
                "ACTRESS_IN_A_LEADING_ROLE",
                "ACTOR_IN_A_SUPPORTING_ROLE",
                "ACTRESS_IN_A_SUPPORTING_ROLE",
                "CINEMATOGRAPHY",
                "COSTUME_DESIGN",
                "DIRECTING",
                "FILM_EDITING",
                "MUSIC_ORIGINAL_SCORE",
                "PRODUCTION_DESIGN",
                "SOUND_EDITING",
                "SOUND_MIXING",
                "WRITING_ORIGINAL_SCREENPLAY"
            ]
        },
        {
            "name":"Three Billboards outside Ebbing, Missouri",
            "path":require('../assets/three_billboards_outside_ebbing_missouri.jpg'),
            "info":[
                "Graham Broadbent, Pete Czernin and Martin McDonagh, Producers",
                "Frances McDormand",
                "Woody Harrelson",
                "Sam Rockwell",
                "Jon Gregory",
                "Carter Burwell",
                "Written by Martin McDonagh"
            ],
            "categories":[
                "BEST_PICTURE",
                "ACTRESS_IN_A_LEADING_ROLE",
                "ACTOR_IN_A_SUPPORTING_ROLE",
                "ACTOR_IN_A_SUPPORTING_ROLE",
                "FILM_EDITING",
                "MUSIC_ORIGINAL_SCORE",
                "WRITING_ORIGINAL_SCREENPLAY"
            ]
        }
        ],
        category: 'Melhor Filme'
      }
    },
    created() {
      console.log('Essa chamada ainda vai ser muito importante!');
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
