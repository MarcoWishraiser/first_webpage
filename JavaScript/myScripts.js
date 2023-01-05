let url = "https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=Italian%20Lega%20Basket";

fetch(url)
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