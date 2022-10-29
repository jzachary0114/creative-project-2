    //API: d7774707e55cd2e79df0d2f2fc20564a MMM Do, h a'
    document.getElementById("playerSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  debugger
  const playerSearch = document.getElementById("playerInput").value;
  if (playerSearch === "")
    return;
  console.log(playerSearch);
  const url = "https://www.balldontlie.io/api/v1/players?search=" + playerSearch;
  let playerId = ''
  console.log(url);
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json){

  //STATS URL: https://www.balldontlie.io/api/v1/season_averages?season=2022&player_ids[]=
    debugger
    playerId = json.data[0].id
    let urlStats = 'https://www.balldontlie.io/api/v1/season_averages?season=2022&player_ids[]=' + playerId
    let results = ''
    console.log(json)
    results = '<p>Player Name: ' + json.data[0].first_name + ' ' + json.data[0].last_name + '</p>'
    results += '<p>Position: ' + json.data[0].position + '</p>'
    results += '<p>Team: ' + json.data[0].team.full_name + '</p>'
      document.getElementById("playerResults").innerHTML = results
    
  debugger
  //let urlStats = 'https://www.balldontlie.io/api/v1/season_averages?season=2022&player_ids[]=' + playerId
  console.log(urlStats)
  fetch(urlStats)
   .then(function(response) {
     return response.json();
   }).then(function(json) {
    debugger
    event.preventDefault();
    let statsResults = ''
    console.log(json)
    if(json === {data: Array(0)}){
            document.getElementById("playerStats").innerHTML = statsResults
    }
    
    statsResults += '<p>Games Playes: ' + json.data[0].games_played + '</p></n>'
    statsResults += '<p>Minutes Per Game: ' + json.data[0].min + '</p>'
    statsResults += '<p>Points Per Game: ' + json.data[0].pts + '</p>'
    statsResults += '<p>Assists Per Game: ' + json.data[0].ast + '</p>'
    statsResults += '<p>Rebounds Per Game: ' + json.data[0].reb + '</p>'
    statsResults += '<p>Steals Per Game: ' + json.data[0].stl + '</p>'
    statsResults += '<p>Blocks Per Game: ' + json.data[0].blk + '</p>'
    statsResults += '<p>Turnovers Per Game: ' + json.data[0].turnover + '</p>'
  
    

      document.getElementById("playerStats").innerHTML = statsResults
})
   })
});