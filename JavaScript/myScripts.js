const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);
const intRound = urlParams.get('round');
console.log(intRound);

let league_teams = [];

function Team(name, points) {
    this.name = name;
    this.points = points;
}

let url_teams = "https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=Italian%20Lega%20Basket";

fetch(url_teams)
    .then(response => response.json())
    .then(data => teamsNames(data["teams"]));


function teamsNames(teams) {
    console.log(teams);

    let list = document.getElementById("teams")

    teams.map(function(team) {
        league_teams.push(new Team(team.strTeam, 0));

        let li = document.createElement("li");
        
        let p = document.createElement("p");
        p.innerText = team.strTeam;
        li.appendChild(p);

        let img = document.createElement("img");
        img.setAttribute("src", team.strTeamBadge);
        li.appendChild(img);

        list.appendChild(li);
    })

}

let url_round = `https://www.thesportsdb.com/api/v1/json/2/eventsround.php?id=4433&r=${intRound === null ? 1 : intRound}&s=2022-2023`;

fetch(url_round)
    .then(response => response.json())
    .then(data => round(data["events"]));


function round(events) {
    console.log(events);

    let giornata = document.getElementById("giornata");

    events.map(function(event) {
        let tr = document.createElement("tr");

        let home = document.createElement("td");
        home.innerText = event.strHomeTeam;
        tr.appendChild(home);

        let result = document.createElement("td");
        if (event.intHomeScore === null) {
            result.innerText = `0 - 0`
        } else {
            result.innerText = event.intHomeScore + " - " + event.intAwayScore;
        }
        tr.appendChild(result);

        let guest = document.createElement("td");
        guest.innerText = event.strAwayTeam;
        tr.appendChild(guest);

        giornata.appendChild(tr);
    })
}


let url = "https://www.thesportsdb.com/api/v1/json/2/eventsseason.php?id=4433&s=2022-2023";

fetch(url)
    .then(response => response.json())
    .then(data => ranks(data["events"]));


function ranks(events) {
    //console.log(events.filter(x => x.strAwayTeam === "Victoria Libertas" || x.strHomeTeam === "Victoria Libertas"));
    

    events.map(function(event) {
        if (parseInt(event.intHomeScore) > parseInt(event.intAwayScore)) {
            league_teams.find(function(team) {
                if (team.name === event.strHomeTeam) {
                    team.points += 2;
                    //console.log(team.name + team.points);
                }
            });
        } else if (parseInt(event.intAwayScore) > parseInt(event.intHomeScore)) {
            league_teams.find(function(team) {
                if (team.name === event.strAwayTeam) {
                    team.points += 2;
                    //console.log(team.name + team.points);
                }
            });
        }
    });

    league_teams.sort((x, y) => (x.points > y.points ? -1 : x.points < y.points ? 1 : 0));

    let classifica = document.getElementById("classifica");
    
    league_teams.map(function(team) {
        let tr = document.createElement("tr");

        let name = document.createElement("td");
        name.innerText = team.name;
        tr.appendChild(name);

        let points = document.createElement("td");
        points.innerText = team.points;
        tr.appendChild(points);

        classifica.appendChild(tr);
    });
}


function updatePage() {
    let readRound = document.getElementById("round").value;

    window.location.href = `file:///D:/Marco/Desktop/Lavoro/Lessons/first_webpage/JavaScript/index.html?round=${readRound < 1 ? 1 : readRound > 30 ? 1 : readRound}`;
}
