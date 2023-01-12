const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);
const intId = urlParams.get('id');
console.log(intId);


let url_teams = "https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=Italian%20Lega%20Basket";

fetch(url_teams)
    .then(response => response.json())
    .then(data => printTeamData(data["teams"]));


function printTeamData(teams) {
    const team = teams.find(team => team.idTeam === intId);
    console.log(team);

    let img_logo = document.getElementById("team-logo");
    img_logo.setAttribute("src", team.strTeamBadge);

    let h2 = document.getElementById("team-name");
    h2.innerText = team.strTeam;

    let descrizione = document.getElementById("descrizione");
    descrizione.innerText = team.strDescriptionIT;

}
