<template>
  <div class="body">
    <h1>{{ name }}</h1>
    <ul class="indicated-list">
      
      <li class="indicated-item" v-for="movie of movies">
        <indicated-component 
          :path="movie.path" 
          :name="movie.name"
          :translate="movie.translate"/>
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
            "translate": "Me Chame Pelo Seu Nome",
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
            "translate": "O Destino de Uma Nação",
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
            "translate": "Dunkirk",
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
            "translate": "Corra!",
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
            "translate": "Lady Bird - Hora de Voar",
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
            "path":require('../assets/phantom_thread.jpg'),
            "translate": "Trama Fantasma",
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
            "translate": "The Post - A Guerra Secreta",
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
            "translate": "A Forma da Água",
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
            "translate": "Três Anúncios Para um Crime",
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
        },
        {
            "name":"Roman J. Israel, Esq.",
            "path":require('../assets/roman_j_israel_esq.jpg'),
            "translate": "Roman J. Israel, Esq.",
            "info":[
                "Denzel Washington"
            ],
            "categories":[
                "ACTOR_IN_A_LEADING_ROLE"
            ]
        },
        {
            "name":"I, Tonya",
            "path":require('../assets/i_tonya.jpg'),
            "translate": "I, Tonya",
            "info":[
                "Margot Robbie",
                "Allison Janney",
                "Tatiana S. Riegel"
            ],
            "categories":[
                "ACTRESS_IN_A_LEADING_ROLE",
                "ACTRESS_IN_A_SUPPORTING_ROLE",
                "FILM_EDITING"
            ]
        },
        {
            "name":"The Florida Project",
            "path":require('../assets/the_florida_project.jpg'),
            "translate": "Projeto Flórida",
            "info":[
                "Willem Dafoe"
            ],
            "categories":[
                "ACTOR_IN_A_SUPPORTING_ROLE"
            ]
        },
        {
            "name":"All the Money in the World",
            "path":require('../assets/all_the_money_in_the_world.jpg'),
            "translate": "Todo o Dinheiro do Mundo",
            "info":[
                "Christopher Plummer"
            ],
            "categories":[
                "ACTOR_IN_A_SUPPORTING_ROLE"
            ]
        },
        {
            "name":"Mudbound",
            "path":require('../assets/mudbound.jpg'),
            "translate": "Mudbound – Lágrimas sobre o Mississipi",
            "info":[
                "Mary J. Blige",
                "Rachel Morrison",
                "\"Mighty River\" Music and Lyric by Mary J. Blige, Raphael Saadiq and Taura Stinson",
                "Screenplay by Virgil Williams and Dee Rees"
            ],
            "categories":[
                "ACTRESS_IN_A_SUPPORTING_ROLE",
                "CINEMATOGRAPHY",
                "MUSIC_ORIGINAL_SONG",
                "WRITING_ADAPTED_SCREENPLAY"
            ]
        },
        {
            "name":"The Boss Baby",
            "path":require('../assets/the_boss_baby.jpg'),
            "translate": "O Poderoso Chefinho",
            "info":[
                "Tom McGrath and Ramsey Naito"
            ],
            "categories":[
                "ANIMATED_FEATURE_FILM"
            ]
        },
        {
            "name":"The Breadwinner",
            "path":require('../assets/the_breadwinner.jpg'),
            "translate": "The Breadwinner",
            "info":[
                "Nora Twomey and Anthony Leo"
            ],
            "categories":[
                "ANIMATED_FEATURE_FILM"
            ]
        },
        {
            "name":"Coco",
            "path":require('../assets/coco.jpg'),
            "translate": "Viva - A Vida é uma Festa",
            "info":[
                "Lee Unkrich and Darla K. Anderson",
                "\"Remember Me\" Music and Lyric by Kristen Anderson-Lopez and Robert Lopez"
            ],
            "categories":[
                "ANIMATED_FEATURE_FILM",
                "MUSIC_ORIGINAL_SONG"
            ]
        },
        {
            "name":"Ferdinand",
            "path":require('../assets/ferdinand.jpg'),
            "translate": "O Touro Ferdinando",
            "info":[
                "Carlos Saldanha"
            ],
            "categories":[
                "ANIMATED_FEATURE_FILM"
            ]
        },
        {
            "name":"Loving Vincent",
            "path":require('../assets/loving_vincent.jpg'),
            "translate": "Com Amor, Van Gogh",
            "info":[
                "Dorota Kobiela, Hugh Welchman and Ivan Mactaggart"
            ],
            "categories":[
                "ANIMATED_FEATURE_FILM"
            ]
        },
        {
            "name":"Blade Runner 2049",
            "path":require('../assets/blade_runner_2049.jpg'),
            "translate": "Blade Runner 2049",
            "info":[
                "Roger A. Deakins",
                "Production Design: Dennis Gassner; Set Decoration: Alessandra Querzola",
                "Mark Mangini and Theo Green",
                "Ron Bartlett, Doug Hemphill and Mac Ruth",
                "John Nelson, Gerd Nefzer, Paul Lambert and Richard R. Hoover"
            ],
            "categories":[
                "CINEMATOGRAPHY",
                "PRODUCTION_DESIGN",
                "SOUND_EDITING",
                "SOUND_MIXING",
                "VISUAL_EFFECTS"
            ]
        },
        {
            "name":"Beauty and the Beast",
            "path":require('../assets/beauty_and_the_beast.jpg'),
            "translate": "A Bela e a Fera",
            "info":[
                "Jacqueline Durran",
                "Production Design: Sarah Greenwood; Set Decoration: Katie Spencer"
            ],
            "categories":[
                "COSTUME_DESIGN",
                "PRODUCTION_DESIGN"
            ]
        },
        {
            "name":"Victoria & Abdul",
            "path":require('../assets/victoria__abdul.jpg'),
            "translate": "Victoria e Abdul - o Confidente da Rainha",
            "info":[
                "Consolata Boyle",
                "Daniel Phillips and Lou Sheppard"
            ],
            "categories":[
                "COSTUME_DESIGN",
                "MAKEUP_AND_HAIRSTYLING"
            ]
        },
        {
            "name":"Abacus: Small Enough to Jail",
            "path":require('../assets/abacus_small_enough_to_jail.jpg'),
            "translate": "Abacus: Small Enough to Jail",
            "info":[
                "Steve James, Mark Mitten and Julie Goldman"
            ],
            "categories":[
                "DOCUMENTARY_FEATURE"
            ]
        },
        {
            "name":"Faces Places",
            "path":require('../assets/faces_places.jpg'),
            "translate": "Faces Places",
            "info":[
                "Agnès Varda, JR and Rosalie Varda"
            ],
            "categories":[
                "DOCUMENTARY_FEATURE"
            ]
        },
        {
            "name":"Icarus",
            "path":require('../assets/icarus.jpg'),
            "translate": "Icarus",
            "info":[
                "Bryan Fogel and Dan Cogan"
            ],
            "categories":[
                "DOCUMENTARY_FEATURE"
            ]
        },
        {
            "name":"Last Men in Aleppo",
            "path":require('../assets/last_men_in_aleppo.jpg'),
            "translate": "Últimos Homens em Aleppo",
            "info":[
                "Feras Fayyad, Kareem Abeed and Søren Steen Jespersen"
            ],
            "categories":[
                "DOCUMENTARY_FEATURE"
            ]
        },
        {
            "name":"Strong Island",
            "path":require('../assets/strong_island.jpg'),
            "translate": "Strong Island",
            "info":[
                "Yance Ford and Joslyn Barnes"
            ],
            "categories":[
                "DOCUMENTARY_FEATURE"
            ]
        },
        {
            "name":"Edith+Eddie",
            "path":require('../assets/edith_eddie.jpg'),
            "translate": "Edith+Eddie",
            "info":[
                "Laura Checkoway and Thomas Lee Wright"
            ],
            "categories":[
                "DOCUMENTARY_SHORT_SUBJECT"
            ]
        },
        {
            "name":"Heaven Is a Traffic Jam on the 405",
            "path":require('../assets/heaven_is_a_traffic_jam_on_the_405.jpg'),
            "translate": "Heaven is a Traffic Jam on the 405",
            "info":[
                "Frank Stiefel"
            ],
            "categories":[
                "DOCUMENTARY_SHORT_SUBJECT"
            ]
        },
        {
            "name":"Heroin(e)",
            "path":require('../assets/heroine.jpg'),
            "translate": "Heroin(e)",
            "info":[
                "Elaine McMillion Sheldon and Kerrin Sheldon"
            ],
            "categories":[
                "DOCUMENTARY_SHORT_SUBJECT"
            ]
        },
        {
            "name":"Knife Skills",
            "path":require('../assets/knife_skills.jpg'),
            "translate": "Knife Skills",
            "info":[
                "Thomas Lennon"
            ],
            "categories":[
                "DOCUMENTARY_SHORT_SUBJECT"
            ]
        },
        {
            "name":"Traffic Stop",
            "path":require('../assets/traffic_stop.jpg'),
            "translate": "Traffic Stop",
            "info":[
                "Kate Davis and David Heilbroner"
            ],
            "categories":[
                "DOCUMENTARY_SHORT_SUBJECT"
            ]
        },
        {
            "name":"Baby Driver",
            "path":require('../assets/baby_driver.jpg'),
            "translate": "Em Ritmo de Fuga",
            "info":[
                "Paul Machliss and Jonathan Amos",
                "Julian Slater",
                "Julian Slater, Tim Cavagin and Mary H. Ellis"
            ],
            "categories":[
                "FILM_EDITING",
                "SOUND_EDITING",
                "SOUND_MIXING"
            ]
        },
        {
            "name":"A Fantastic Woman",
            "path":require('../assets/a_fantastic_woman.jpg'),
            "translate": "Uma Mulher Fantástica",
            "info":[
                "Chile"
            ],
            "categories":[
                "FOREIGN_LANGUAGE_FILM"
            ]
        },
        {
            "name":"The Insult",
            "path":require('../assets/the_insult.jpg'),
            "translate": "The Insult",
            "info":[
                "Lebanon"
            ],
            "categories":[
                "FOREIGN_LANGUAGE_FILM"
            ]
        },
        {
            "name":"Loveless",
            "path":require('../assets/loveless.jpg'),
            "translate": "Sem Amor",
            "info":[
                "Russia"
            ],
            "categories":[
                "FOREIGN_LANGUAGE_FILM"
            ]
        },
        {
            "name":"On Body and Soul",
            "path":require('../assets/on_body_and_soul.jpg'),
            "translate": "On Body and Soul",
            "info":[
                "Hungary"
            ],
            "categories":[
                "FOREIGN_LANGUAGE_FILM"
            ]
        },
        {
            "name":"The Square",
            "path":require('../assets/the_square.jpg'),
            "translate": "The Square - A Arte da Discórdia",
            "info":[
                "Sweden"
            ],
            "categories":[
                "FOREIGN_LANGUAGE_FILM"
            ]
        },
        {
            "name":"Wonder",
            "path":require('../assets/wonder.jpg'),
            "translate": "Extraordinário",
            "info":[
                "Arjen Tuiten"
            ],
            "categories":[
                "MAKEUP_AND_HAIRSTYLING"
            ]
        },
        {
            "name":"Star Wars: The Last Jedi",
            "path":require('../assets/star_wars_the_last_jedi.jpg'),
            "translate": "Star Wars: Os Últimos Jedi",
            "info":[
                "John Williams",
                "Matthew Wood and Ren Klyce",
                "David Parker, Michael Semanick, Ren Klyce and Stuart Wilson",
                "Ben Morris, Mike Mulholland, Neal Scanlan and Chris Corbould"
            ],
            "categories":[
                "MUSIC_ORIGINAL_SCORE",
                "SOUND_EDITING",
                "SOUND_MIXING",
                "VISUAL_EFFECTS"
            ]
        },
        {
            "name":"Marshall",
            "path":require('../assets/marshall.jpg'),
            "translate": "Marshall",
            "info":[
                "\"Stand Up For Something\" Music by Diane Warren; Lyric by Lonnie R. Lynn and Diane Warren"
            ],
            "categories":[
                "MUSIC_ORIGINAL_SONG"
            ]
        },
        {
            "name":"The Greatest Showman",
            "path":require('../assets/the_greatest_showman.jpg'),
            "translate": "O Rei do Show",
            "info":[
                "\"This Is Me\" Music and Lyric by Benj Pasek and Justin Paul"
            ],
            "categories":[
                "MUSIC_ORIGINAL_SONG"
            ]
        },
        {
            "name":"Dear Basketball",
            "path":require('../assets/dear_basketball.jpg'),
            "translate": "Dear Basketball",
            "info":[
                "Glen Keane and Kobe Bryant"
            ],
            "categories":[
                "SHORT_FILM_ANIMATED"
            ]
        },
        {
            "name":"Garden Party",
            "path":require('../assets/garden_party.jpg'),
            "translate": "Garden Party",
            "info":[
                "Victor Caire and Gabriel Grapperon"
            ],
            "categories":[
                "SHORT_FILM_ANIMATED"
            ]
        },
        {
            "name":"Lou",
            "path":require('../assets/lou.jpg'),
            "translate": "Lou",
            "info":[
                "Dave Mullins and Dana Murray"
            ],
            "categories":[
                "SHORT_FILM_ANIMATED"
            ]
        },
        {
            "name":"Negative Space",
            "path":require('../assets/negative_space.jpg'),
            "translate": "Negative Space",
            "info":[
                "Max Porter and Ru Kuwahata"
            ],
            "categories":[
                "SHORT_FILM_ANIMATED"
            ]
        },
        {
            "name":"Revolting Rhymes",
            "path":require('../assets/revolting_rhymes.jpg'),
            "translate": "Revolting Rhymes",
            "info":[
                "Jakob Schuh and Jan Lachauer"
            ],
            "categories":[
                "SHORT_FILM_ANIMATED"
            ]
        },
        {
            "name":"DeKalb Elementary",
            "path":require('../assets/dekalb_elementary.jpg'),
            "translate": "DeKalb Elementary",
            "info":[
                "Reed Van Dyk"
            ],
            "categories":[
                "SHORT_FILM_LIVE_ACTION"
            ]
        },
        {
            "name":"The Eleven O'Clock",
            "path":require('../assets/the_eleven_oclock.jpg'),
            "translate": "The Eleven O’Clock",
            "info":[
                "Derin Seale and Josh Lawson"
            ],
            "categories":[
                "SHORT_FILM_LIVE_ACTION"
            ]
        },
        {
            "name":"My Nephew Emmett",
            "path":require('../assets/my_nephew_emmett.jpg'),
            "translate": "My Nephew Emmett",
            "info":[
                "Kevin Wilson, Jr."
            ],
            "categories":[
                "SHORT_FILM_LIVE_ACTION"
            ]
        },
        {
            "name":"The Silent Child",
            "path":require('../assets/the_silent_child.jpg'),
            "translate": "The Silent Child",
            "info":[
                "Chris Overton and Rachel Shenton"
            ],
            "categories":[
                "SHORT_FILM_LIVE_ACTION"
            ]
        },
        {
            "name":"Watu Wote/All of Us",
            "path":require('../assets/watu_wote_all_of_us.jpg'),
            "translate": "Watu Wote/All of Us",
            "info":[
                "Katja Benrath and Tobias Rosen"
            ],
            "categories":[
                "SHORT_FILM_LIVE_ACTION"
            ]
        },
        {
            "name":"Guardians of the Galaxy Vol. 2",
            "path":require('../assets/guardians_of_the_galaxy_vol_2.jpg'),
            "translate": "Guardiões da Galáxia Vol.2",
            "info":[
                "Christopher Townsend, Guy Williams, Jonathan Fawkner and Dan Sudick"
            ],
            "categories":[
                "VISUAL_EFFECTS"
            ]
        },
        {
            "name":"Kong: Skull Island",
            "path":require('../assets/kong_skull_island.jpg'),
            "translate": "Kong - A Ilha da Caveira",
            "info":[
                "Stephen Rosenbaum, Jeff White, Scott Benza and Mike Meinardus"
            ],
            "categories":[
                "VISUAL_EFFECTS"
            ]
        },
        {
            "name":"War for the Planet of the Apes",
            "path":require('../assets/war_for_the_planet_of_the_apes.jpg'),
            "translate": "Planeta dos Macacos - A Guerra",
            "info":[
                "Joe Letteri, Daniel Barrett, Dan Lemmon and Joel Whist"
            ],
            "categories":[
                "VISUAL_EFFECTS"
            ]
        },
        {
            "name":"The Disaster Artist",
            "path":require('../assets/the_disaster_artist.jpg'),
            "translate": "Artista do Desastre",
            "info":[
                "Screenplay by Scott Neustadter & Michael H. Weber"
            ],
            "categories":[
                "WRITING_ADAPTED_SCREENPLAY"
            ]
        },
        {
            "name":"Logan",
            "path":require('../assets/logan.jpg'),
            "translate": "Logan",
            "info":[
                "Screenplay by Scott Frank & James Mangold and Michael Green; Story by James Mangold"
            ],
            "categories":[
                "WRITING_ADAPTED_SCREENPLAY"
            ]
        },
        {
            "name":"Molly's Game",
            "path":require('../assets/mollys_game.jpg'),
            "translate": "A Grande Jogada",
            "info":[
                "Written for the screen by Aaron Sorkin"
            ],
            "categories":[
                "WRITING_ADAPTED_SCREENPLAY"
            ]
        },
        {
            "name":"The Big Sick",
            "path":require('../assets/the_big_sick.jpg'),
            "translate": "Doentes de Amor",
            "info":[
                "Written by Emily V. Gordon & Kumail Nanjiani"
            ],
            "categories":[
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
