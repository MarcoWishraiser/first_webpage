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

    let imgLogo = document.getElementById("team-logo");
    imgLogo.setAttribute("src", team.strTeamBadge);

    let h2 = document.getElementById("team-name");
    h2.innerText = team.strTeam;

    let description = document.getElementById("description");
    description.innerText = team.strDescriptionIT;

    let imgStadium = document.getElementById("stadium-image");
    imgStadium.setAttribute("src", team.strStadiumThumb);

    let stadiumDescription = document.getElementById("stadium-description");
    stadiumDescription.innerText = team.strStadiumDescription;

}


let url_events = `https://www.thesportsdb.com/api/v1/json/2/eventslast.php?id=${intId}`;

fetch(url_events)
    .then(response => response.json())
    .then(data => latestResults(data["results"]));


function latestResults(results) {
    console.log(results);

    let table = document.getElementById("latest-results");

    results.map(function(result) {
        let tr = document.createElement("tr");


        let date = document.createElement("td");
        date.innerText = result.dateEvent;
        tr.appendChild(date);

        let home = document.createElement("td");
        home.innerText = result.strHomeTeam;
        tr.appendChild(home);

        let score = document.createElement("td");
        if (result.intHomeScore === null) {
            score.innerText = `0 - 0`
        } else {
            score.innerText = result.intHomeScore + " - " + result.intAwayScore;
        }
        tr.appendChild(score);

        let away = document.createElement("td");
        away.innerText = result.strAwayTeam;
        tr.appendChild(away);

        table.appendChild(tr);
    });
}