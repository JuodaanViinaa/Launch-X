const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia1.tenor.com%2Fimages%2Ff4dfba6861f151917aa8d895f19b84d9%2Ftenor.gif%3Fitemid%3D16694846&f=1&nofb=1")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            appear();
            pokeImage(pokeImg);
            changeName(data.name);
            changeType(data.types[0].type.name);
            changeStats(data.stats)
            changeMoves(data.moves)
        }
    });
}

function titleCase(str) {
    return str.toLowerCase().split(' ').map(function(word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

function changeName(newName) {
    const pokeName = document.getElementById("name").innerHTML = `${titleCase(newName)}`
}

function changeType(newType) {
    const pokeType = document.getElementById("type").innerHTML = `Type: ${titleCase(newType)}`
}

function changeStats(newStats) {
    for (let i = 0; i <= 5; i++) {
        const pokeStat = document.getElementById(`stat${i}`)
        pokeStat.innerHTML = titleCase(newStats[i].stat.name) + ": " + newStats[i].base_stat
    }
}

function changeMoves(newMoves) {
    const moveNum = document.getElementById("moveNum")
    moveNum.innerHTML = `Can learn ${newMoves.length} moves.`
    const pokeMoves = document.getElementById("moves")
    pokeMoves.innerHTML = "";
    for (let i = 0; i <= newMoves.length; i++) {
        console.log(i + ": " + newMoves[i].move.name)
        if (i == 0) {
            pokeMoves.insertAdjacentHTML("afterbegin", `<p>Moveset: </p>`)
        }
        pokeMoves.insertAdjacentHTML("beforeend", `<p>${titleCase(newMoves[i].move.name)}</p>`)
    }
}

function appear() {
    const rightBox = document.getElementById("right-box")
        rightBox.style.display = "inline"
}