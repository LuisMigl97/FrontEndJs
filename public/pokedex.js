const fetchPokemon = () => {
	const pokeName = document.getElementById("pokeName")
	let pokeInput = pokeName.value.toLowerCase()
	const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`
	fetch(url).then((res)=>{
		if (res.status != "200") {
			console.log(res);
			pokeImage("img/pikachullorando.gif")
		}
		else{
			return res.json()
		}
	}).then((data)=>{
		console.log(data)

		//prueba
		moves(data.moves);

		let pokeImg = data.sprites.other['official-artwork'].front_default;
		console.log(pokeImg)
		pokeImage(pokeImg)

		let pokeNombre = data.name
		console.log(pokeNombre)
		pokenombre(pokeNombre)

		let pokeOrder = data.id
		console.log(pokeOrder)
		pokeId(pokeOrder)



		if (data.types[1] == null) {
		let pokeTipo1 = data.types[0].type.name
		console.log(pokeTipo1)
		pokeType1(pokeTipo1)
		pokeType2(null)
		}
		else{
		let pokeTipo1 = data.types[0].type.name
		console.log(pokeTipo1)
		pokeType1(pokeTipo1)
		let pokeTipo2 = data.types[1].type.name
		console.log(pokeTipo2)
		pokeType2(pokeTipo2)

		}
		//estadisticas
		let stat1 = data.stats[0].base_stat
		console.log(stat1)
		statn1(stat1)

		let stat2 = data.stats[1].base_stat
		console.log(stat2)
		statn2(stat2)

		let stat3 = data.stats[2].base_stat
		console.log(stat3)
		statn3(stat3)

		let stat4 = data.stats[3].base_stat
		console.log(stat4)
		statn4(stat4)

		let stat5 = data.stats[4].base_stat
		console.log(stat5)
		statn5(stat5)

		let stat6 = data.stats[5].base_stat
		console.log(stat6)
		statn6(stat6)

		let idCurrent = 0

		
 	})
}

const pokeImage = (url) => {
	const pokeImg = document.getElementById("pokeImg")
	pokeImg.src = url
}

	
const pokenombre = (url) => {
	const pokeNombre = document.getElementById("pokeNombre")
	pokeNombre.innerHTML = url
}

const pokeId = (url) => {
	const pokeOrder = document.getElementById("pokeOrder")
	pokeOrder.innerHTML = url
}		


const pokeType1 = (url) => {
	const pokeTipo1 = document.getElementById("pokeTipo1")
	pokeTipo1.innerHTML = url
}

const pokeType2 = (url) => {
	const pokeTipo2 = document.getElementById("pokeTipo2")
	pokeTipo2.innerHTML = url
}

const statn1 = (url) => {
	const stat1 = document.getElementById("stat1")
	stat1.innerHTML = url
}

const statn2 = (url) => {
	const stat2 = document.getElementById("stat2")
	stat2.innerHTML = url
}

const statn3 = (url) => {
	const stat3 = document.getElementById("stat3")
	stat3.innerHTML = url
}

const statn4 = (url) => {
	const stat4 = document.getElementById("stat4")
	stat4.innerHTML = url
}

const statn5 = (url) => {
	const stat5 = document.getElementById("stat5")
	stat5.innerHTML = url
}

const statn6 = (url) => {
	const stat6 = document.getElementById("stat6")
	stat6.innerHTML = url
}

const moves = (movesList) => {
    let fragment = document.createDocumentFragment();
    const container = document.querySelector('.list-group');

    while(container.firstChild){
        container.removeChild(container.firstChild);
    }

    for(let move of movesList){
        let item = document.createElement('li');
        item.classList.add('list-group-item');
        item.innerHTML = move.move.name;
        
        fragment.appendChild(item);
    }
    container.appendChild(fragment);
};	



function ocultar(){
document.getElementById('moves').style.display = 'none';
}

function mostrar(){
document.getElementById('moves2').style.display = 'block';
}


