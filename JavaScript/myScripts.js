let url_teams = "https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=Italian%20Lega%20Basket";

fetch(url_teams)
    .then(response => response.json())
    .then(data => teamsNames(data["teams"]));


function teamsNames(teams) {
    console.log(teams);

    let list = document.getElementById("teams")

    teams.map(function(team) {
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

let url = "https://www.thesportsdb.com/api/v1/json/2/eventsround.php?id=4433&r=1&s=2022-2023";

fetch(url)
    .then(response => response.json())
    .then(data => ranks(data["events"]));


function ranks(events) {
    console.log(events);

    let giornata = document.getElementById("giornata");

    events.map(function(event) {
        let tr = document.createElement("tr");

        let home = document.createElement("td");
        home.innerText = event.strHomeTeam;
        tr.appendChild(home);

        let result = document.createElement("td");
        result.innerText = event.intHomeScore + " - " + event.intAwayScore;
        tr.appendChild(result);

        let guest = document.createElement("td");
        guest.innerText = event.strAwayTeam;
        tr.appendChild(guest);

        giornata.appendChild(tr);
    })
}