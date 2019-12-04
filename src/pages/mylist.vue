<template>
  <q-page id="list_page">
  	<div class="list-pokemon-box">
		  <div class="row">
        <template v-if="pokeList == null || pokeList == 'null'">
          <div class="col-6 absolute-center text-center">
            You dont have a pokemon, please catch a pokemon
          </div>
        </template>
        <template v-for="p in pokeList" v-else>
  			  <div 
    				class="col-xs-6 col-sm-3 pokeList relative-position q-pb-lg"
    				:key="p.id+'-'+d.nickname" 
    				:to="'/pokemon/'+p.id" 
    				v-for="d in p.my_pokemon">
			    		<router-link :to="'/pokemon/'+p.id+'/'+d.name.split(' ').join('-').toLowerCase()"><q-img :src="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+p.id+'.png'" placeholder-src="statics/logo.png" width="100%"/></router-link>
              <p class='text-capitalize'>Name : {{d.name}}</p>
			    		<p class='text-capitalize'>Nickname : {{d.nickname}}</p>
              <div class="row btn-group absolute-bottom full-width">
                <q-btn class="bg-primary text-white col-12" flat label="Release" @click="release(p.id,d.id)"/>
              </div>
  		    </div>
        </template>
        
	    </div>
  	</div>
  </q-page>
</template>

<script>
import {Dialog, Loading} from 'quasar'
export default {
  name: 'pokelist',
  data(){
  	return{

  	}
  },
  mounted(){
  },
  computed:{
  	pokeList(){
  		return this.$store.getters['mypokelist/getMyPokemon']
  	}
  },
  methods:{
  	release(id,id_cp){
      Dialog.create({
        dark: true,
        title: 'Confirm',
        message: 'Would you like to release this pokemon ?',
        ok: {
          push: true,
          color:'primary'
        },
        cancel: {
          push: true,
          color: 'secondary'
        },
        persistent: true
      }).onOk(() => {
        this.$store.dispatch('mypokelist/release',{
          id:id,
          id_cp:id_cp
        })
      }).onCancel(() => {
        // console.log('>>>> Cancel')
      })
    }
  }
}
</script>
