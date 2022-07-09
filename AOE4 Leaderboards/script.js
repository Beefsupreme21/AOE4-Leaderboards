const api_url = 'https://aoe4world.com/api/v0/leaderboards/rm_1v1'

async function getInfo() {
    const response = await fetch(api_url);
    const data = await response.json();

    const { players: {0: { name, rank, wins_count, losses_count, max_rating, win_rate }}} = data;

    let table = document.getElementById("myTable");
    let row = table.insertRow(1);
    let rankCell = row.insertCell(0);
    let ratingCell = row.insertCell(1);
    let nameCell = row.insertCell(2);
    let winRateCell = row.insertCell(3);
    let winsCell = row.insertCell(4);
    let lossesCell = row.insertCell(5);
    let totalGamesCell = row.insertCell(6);

    rankCell.innerHTML = rank;
    ratingCell.innerHTML = max_rating;
    nameCell.innerHTML = name;
    winRateCell.innerHTML = win_rate;
    winsCell.innerHTML = wins_count;
    lossesCell.innerHTML = losses_count;
    totalGamesCell.innerHTML = wins_count + losses_count;


    // document.getElementById('rank').textContent = name; 
    // document.getElementById('country').textContent = country; 
    // document.getElementById('temp_c').textContent = temp_c; 
    // document.getElementById('temp_f').textContent = temp_f; 
    // document.getElementById('text').textContent = text; 
    // document.getElementById('icon').textContent = icon; 
}

getInfo();
