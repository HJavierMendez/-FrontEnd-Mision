const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
   
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./pokemon-sad.gif")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.other.dream_world.front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);
        }
    });
    
    
    
    // .then((data) => {
    //     if (data) {
    //         console.log(data);
    //         let pName = data.species.name;
    //         pokeImage(pName);
    //         console.log(pName);
    //     }
    // });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

// const pName = (Text) => {
//     const pokePhoto = document.getElementById("pName");
//     pokePhoto.id = Text;
// }
