// Obtener información de las primeras 50 películas de SWAPI (Star Wars API)
// La estructura inicial es:
// {
//   "results": [
//     {
//       "title": "A New Hope",
//       "url": "https://swapi.dev/api/films/1/"
//     },
//     ...
//   ]
// }

// Luego, para cada película, hacer una consulta a su URL para obtener los géneros (en SWAPI son "species")
// Devolver un objeto que agrupe los títulos de películas por género principal
// Ejemplo:
// {
//   Human: ['A New Hope', 'The Empire Strikes Back'],
//   Droid: ['A New Hope', 'Return of the Jedi'],
//   ...
// }

async function getSWAPIInfo(){
    let apiQuery = await fetch('https://swapi.info/api/films/');
    let parsedRes = await apiQuery.json();
    return parsedRes.slice(0, 50);
}

async function getSpeciesByFilm(){
    let swapiInfo = await getSWAPIInfo();

    let speciesInfo = Promise.all(
        swapiInfo.map(film => {
            let filmSpecies = film['species'];
            return filmSpecies.map(async specie => {
                let specieQuery = await fetch(`${specie}`)
                let parsedSpecie = await specieQuery.json();
                return parsedSpecie;
            });
        })
    );

    let res = Promise.all(await swapiInfo.reduce(async (result, film) => {
        let species = film['species'];
        await species.forEach(async specie => {
            let specieQuery = await fetch(`${specie}`)
            let parsedSpecie = await specieQuery.json();

            if(!result[`${parsedSpecie['name']}`]){
                result[`${parsedSpecie['name']}`] = [];
                
            }
            result[`${parsedSpecie['name']}`].push(film);
        });
        
        return result;
    },{}));
        
    console.log(res);
    
    return res;
}

await getSpeciesByFilm();



