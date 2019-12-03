<template>
  <q-page id="details_page" v-if="datas!=null">
  	<div class="row">
  		<div class="col-6 offset-3">
  			<q-img :src="datas.sprites.front_default" placeholder-src="statics/logo.png" width="100%"/>
  		</div>
  	</div>
  	<div class="row">
  		<div class="col-12 q-pa-md details">
  			<q-expansion-item
		        expand-separator
		        icon="landscape"
		        label="Type">
		        <q-card>
		          <q-card-section>
		            <template v-for="(t,index) in datas.types">
	  					<ul>
	  						<li><span class="text-capitalize">{{t.type.name}}</span></li>
	  					</ul>
	  				</template>
		          </q-card-section>
		        </q-card>
	      	</q-expansion-item>
	      	<q-expansion-item
		        expand-separator
		        icon="gesture"
		        label="Moves">
		        <q-card>
		          <q-card-section>
		            <template v-for="(m,index) in datas.moves">
	  					<ul>
	  						<li><span class="text-capitalize">{{m.move.name}}</span></li>
	  					</ul>
	  				</template>
		          </q-card-section>
		        </q-card>
	      	</q-expansion-item>
  		</div>
  	</div>
  	<div class="row fixed-bottom ">
		<q-btn class="col-12" label="CATCH" color="primary" size="md" @click="GetPokemon"/>
  	</div>
  </q-page>
</template>

<script>
import {Dialog, Loading} from 'quasar'
export default {
  name: 'index',
  data(){
  	return{
  		datas:null,
  	}
  },
  mounted(){
  	this.initPokeDesc(this.$route.params.id);
  },
  methods:{
  	initPokeDesc(id){
  		Loading.show()
  		this.$axios.get('https://pokeapi.co/api/v2/pokemon/'+id)
	  	.then(success=>{
	  		if(success.status == 200){
	  			this.datas = success.data
	  			Loading.hide()
	  		}else{
	  			Loading.hide()
	  			Dialog.create({
	                title: '',
	                message: 'Error!!',
	                dark: true,
	                persistent: true
              	})
	  		}
	  	})
	  	.catch(error=>{
	  		Loading.hide()
	  		console.log(error)
	  		Dialog.create({
                title: '',
                message: 'Error!!',
                dark: true,
                persistent: true
          	})
	  	})
  	},
  	GetPokemon(){
  		if (Math.random() >= 0.5){
  			this.gotchaPokemon();
  		}else{
  			Dialog.create({
				dark: true,
				title: 'Failed',
				message: 'You fail to catch a pokemon',
				ok:true,
				persistent: true
			})
  		}
  	},
  	gotchaPokemon(){
		let listPokemon,payload;
		Dialog.create({
			dark: true,
			title: 'Success You Got a Pokemon',
			message: 'Give a nickname',
			prompt: {
				model: '',
				type: 'text' // optional
			},
			ok:'add to my pokemon list',
			persistent: true
		}).onOk(data => {
			console.log(this.idgenerator());
			let listPokemon = this.$store.getters['mypokelist/getMyPokemon']
			if(listPokemon == null){
				payload = [{
					id:this.datas.id,
					my_pokemon:[{
						id:parseInt(this.idgenerator()),
						name:this.datas.name,
						nickname:data,
					}],
					owned:1
				}]
				this.$store.dispatch('mypokelist/insert_pokemonList',payload)
			}else{
				let obj = {
					id:this.datas.id,
					newid:parseInt(this.idgenerator()),
					data:{
						name:this.datas.name,
						nickname:data,
					}
				}
				this.$store.dispatch('mypokelist/update_list',obj)
			}
		})
  	},
  	idgenerator() {
	 
		let length = 8;
		let timestamp = +new Date;

		return this.generate(timestamp,length)
	},
	generate(timestamp,length){
		var ts = timestamp.toString();
		var parts = ts.split( "" ).reverse();
		var id = "";

		for( var i = 0; i < length; ++i ) {
			var index = this.getRandomInt( 0, parts.length - 1 );
			id += parts[index];	 
		}
		return id;
	},
	getRandomInt(min, max){
		return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
	}
  }
}
</script>
