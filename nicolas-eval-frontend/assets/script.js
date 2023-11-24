const voitures = [
	{
		"image": "vehicule1.png",
        "model":"Peugeot 208",
        "description": "Diesel, 5 portes, GPS, AutoRadio, Forfait 10000 km (0.5/km supplémentaire)",
        "price": "999 €",
        "agence": "Agence de Paris",
		"thumbnails":[
            "peugeot1.jpeg",
            "peugeot2.jpeg"
        ]
	},
	{
		"image": "vehicule2.png",
        "model": "Ford Focus",
        "description": "Diesel, 5 portes, GPS, AutoRadio, Forfait 10000 km (0.5/km supplémentaire)",
        "price": "999€",
        "agence":"",
		"thumbnails":""
	},
	{
		"image": "vehicule3.png",
        "model": "Audi A1",
        "description": "Diesel, 5 portes, GPS, AutoRadio, Forfait 10000 km (0.5/km supplémentaire)",
        "price": "1100€",
        "agence": "Agence de Paris",
		"thumbnails":""
	},
	{
		"image": "vehicule4.png",
        "model": "Opel Mokka",
        "description": "Diesel, 5 portes, GPS, AutoRadio, Forfait 10000 km (0.5/km supplémentaire)",
        "price": "1150 €",
        "agence": "Agence de Paris",
		"thumbnails":""
	}
]

const menuSlider = document.getElementById('menu-slider');
//console.log(menuSlider);
const btSlider = document.querySelector('.container');
//console.log(btSlider);
let i = 0;
console.log(i);
btSlider.addEventListener('click', (e) => {
    btSlider.classList.toggle('change');
    
    //console.log(e.target);
    if(i === 0) {
        //menuSlider.classList.add('anim-slider-on');
        //menuSlider.classList.remove('anim-slider-off');
        menuSlider.style.animation = "anim-slider-on .7s forwards";
        i = 1;
        // i++;
    } else {
       // menuSlider.classList.add('anim-slider-off');
        //menuSlider.classList.remove('anim-slider-on')
        menuSlider.style.animation = "anim-slider-off .7s forwards";
        i = 0;
    }
    
    console.log(i);
})

const vignette = document.getElementById('vignette');
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const nbreImages = voitures.thumbnails.length;
let indexImage = 0;

for(let voiture in voitures){

}

arrowLeft.addEventListener('click', (e)=> {	
	indexImage--;	
	if(indexImage < 0) {
		indexImage = nbreImages - 1;
	}
	displayVignette(indexImage);	
})

arrowRight.addEventListener('click', (e)=> {
	indexImage++;	
	if(indexImage >= nbreImages) {
		indexImage = 0;
	}
	displayVignette(indexImage);		
})



const displayVignette = (indexImage = 0)=>{
	console.log(indexImage);
	// images
	const img = querySelector('.vignette');
	img.src = `assets/images/${voitures[indexImage].thumbnails}`;
	

	// Modèle
	const ModeleContent = `${voitures.model}`;
	const ModeleElement = querySelector('h2');
	ModeleElement.innerHTML = ModeleContent;
}


const InfiniteScroll = () =>{
    const endOfPage = window.innerHeight + window.pageYOffset >= document.body.offsetHeight;
    if(endOfPage){
        addCards(currentPage +1);
    }
}