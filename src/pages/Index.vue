<template>
  <q-page id="home_page">
  	<div class="list-pokemon-box">
		<div class="row">
			<router-link 
				class="col-xs-4 col-sm-3"
				:key="p.url.slice(0, -1).split('/').pop()" 
				:to="'/pokemon/'+p.url.slice(0, -1).split('/').pop()+'/'+p.name.split(' ').join('-').toLowerCase()" 
				v-for="p in datas">
			    	<div class="pokeList">
			    		<q-img :src="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+p.url.slice(0, -1).split('/').pop()+'.png'" placeholder-src="statics/logo.png" width="100%"/>
			    		<p class='text-center text-capitalize'>{{p.name}}</p>
			    		<p class="text-center text-caption">Owned {{owning(p.url.slice(0, -1).split('/').pop())}}</p>
			    	</div>
		    </router-link>
	    	<div id="bottomPage"/>
	    </div>
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
  		count:null,
  		start:0,
  		before_start:null,
  		timeout:null,
  		debounce:null,
  	}
  },
  mounted(){
  	this.initPokeList(this.start,15);
  	this.scroll();
  },
  computed:{
  	pokeList(){
  		return this.$store.getters['mypokelist/getMyPokemon']
  	}
  },
  methods:{
  	initPokeList(start,limit,more){
  		Loading.show()
  		this.$axios.get('https://pokeapi.co/api/v2/pokemon?offset='+start+'&limit='+limit)
	  	.then(success=>{
	  		console.log(success);
	  		if(success.status == 200){
	  			if(more){
	  				let arr = success.data.results;
			        let old_arr = this.datas;
			        var newarr = old_arr.concat(arr);
			        this.datas = newarr;
	  			}else{
	  				this.datas = success.data.results
	  			}
	  			this.count = success.data.count
	  			this.start = start + 15;
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
  	owning(id){
  		let obj = this.pokeList.find(x => x.id === parseInt(id));
  		return obj == undefined ? 0 : obj.owned;
  	},
  	isElementInViewport (el) {
		var rect = el.getBoundingClientRect();
		return (
			rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
		);
	},
  	scroll(){
  		let vm = this;
        window.onscroll = () => {
          	let el = document.querySelector('#bottomPage')
            if (vm.isElementInViewport(el) && vm.count > vm.start ) {
            	clearTimeout(vm.debounce)
            	Loading.show();
            	vm.debounce = setTimeout(() => {
	        	  	vm.initPokeList(vm.start,15,true);
		      	}, 500)
        	  	
            }
        }
  	},
  }
}
</script>
