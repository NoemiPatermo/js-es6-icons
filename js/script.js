//Milestone 1
//Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
//Milestone 2
//Coloriamo le icone per tipo
//Milestone 3
//Creiamo una select con i tipi di icone e usiamola per filtrare le icone
const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];
//Milestone 1
//Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.

//per mostrare la lista utilizza il forEach e genera in maniera dinamica la classe di font Awesome
const containerHTML = document.querySelector('.icons-content');

const arraySpeculare = icons.map((element) =>{
    return element;
})

//creare una funzione che filtra l'array originale e a seconda della scelta, ritorna un nuovo arrray
/**
 * filtra originalList a seconda della scelta
 * @param {*} choice ["all", "animal", "vegetable", "user"]
 * @param {*} originalList 
 */
function filterIcons(choice, originalList){
    const newArray = originalList.filter((icon) =>{
        //ritorna true solo se corrisponde al filtro
        if(choice === "all"){
            return true;
        }
        if(choice === icon.type){
            return true;
        }
        //se non è riuscito ad attivare gli altri return
        return false;
    })
}




//stai ciclando sull'array che ti restituisce il map
arraySpeculare.forEach((icon) => {
    const {name, prefix, family, type } = icon; 
                                                  //destrutturazione oggetto + icone + classe per nome sotto icona
                                                  //inizi a lavorare col type per la milestone 2 e le colori per tipo
    containerHTML.innerHTML += `            
    <div class="icon-card col">
        <div class="icon-card-inner">
                <div class="icon ${type}">          
                    <i class="${family} ${prefix}${name}"></i>
                </div>
                <div class="nome">
                    ${name}
                </div> 
        </div>
    </div>`
});
//Milestone 3
//Creiamo una select con i tipi di icone e usiamola per filtrare le icone

//tutto si attiva quando l'utente cambia l'opzione della select
//abbiamo bisogno di array che cambia di volta in volta a seconda della selezione dell'utente, ne crei uno speculare
// dove attivi dei filter
//ci sono funzioni che vengono richiamate  quando l utente accede in pagina e altre quando avviene la selezione

