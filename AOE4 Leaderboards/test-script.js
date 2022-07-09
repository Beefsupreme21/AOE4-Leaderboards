const api_url = 'https://aoe4world.com/api/v0/leaderboards/rm_1v1'
let i = 0;
let v = 1;
let dark = true; 

function getInfo() {
    let x = 0;
    while (x <= 49) {
        x++;
        createRows() 
    }
}

async function createRows() {
    const response = await fetch(api_url);
    const data = await response.json();
    const { players } = data;
    return players
}

function displayData(players) {
    players.forEach(player => {
        
    });

    let table = document.getElementById("myTable");
    let row = table.insertRow(v);
    let rankCell = row.insertCell(0);
    let ratingCell = row.insertCell(1);
    let nameCell = row.insertCell(2);
    nameCell.classList.add('name');
    let winRateCell = row.insertCell(3);
    let winsCell = row.insertCell(4);
    winsCell.classList.add('wins');
    let lossesCell = row.insertCell(5);
    lossesCell.classList.add('losses');
    let totalGamesCell = row.insertCell(6);

    rankCell.innerHTML = rank;
    ratingCell.innerHTML = max_rating;
    nameCell.innerHTML = name;
    winRateCell.innerHTML = win_rate;
    winsCell.innerHTML = wins_count;
    lossesCell.innerHTML = losses_count;
    totalGamesCell.innerHTML = wins_count + losses_count;
    i++;
    v++;

    if (dark == true) {
        row.classList.add('light') 
        dark = false
    } else {
        row.classList.add('dark') 
        dark = true; 
    }
}


getInfo();
