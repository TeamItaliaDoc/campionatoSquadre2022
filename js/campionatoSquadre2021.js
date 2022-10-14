
var calcolaTeamsRun = false;
var calcolaClassificaRun = false;
var classificaTeams = [];

var dataFine = new Date(2022, 08, 1, 0, 0, 0, 0);


var teams = [];
teams['i-nazgul']={"giocatori" : [9], "name":" I Nazgul","club_id":"398283","urlMembri":"https://api.chess.com/pub/club/i-nazgul/members","icon":"https://images.chesscomfiles.com/uploads/v1/group/398283.1b6e8af8.50x50o.8d8a1fc93ba8.png","url":"https://www.chess.com/club/i-nazgul","puntiSpareggio":0, "posizione":0, "matchConclusi":0, "puntiConclusi":0, "puntiMatchConclusi":0, "giocatoriRegistrati":0, "mediaConclusi":0, "finaleConclusi":"","teamVinte" : [], "teamPatte" : [], "penalità":0, "penalitàTotali":0, "daCaricare":true};
teams['gli-elfi']={"giocatori" : [6], "name":"Gli Elfi","club_id":"314359","urlMembri":"https://api.chess.com/pub/club/gli-elfi/members","icon":"https://images.chesscomfiles.com/uploads/v1/group/314359.206070d7.50x50o.b991528c9bc7.jpeg","url":"https://www.chess.com/club/gli-elfi","puntiSpareggio":0, "posizione":0, "matchConclusi":0, "puntiConclusi":0, "puntiMatchConclusi":0, "giocatoriRegistrati":0, "mediaConclusi":0, "finaleConclusi":"","teamVinte" : [], "teamPatte" : [], "penalità":0, "penalitàTotali":0, "daCaricare":true};
teams['gli-orchi']={"giocatori" : [4], "name":"Gli Orchi","club_id":"79540","urlMembri":"https://api.chess.com/pub/club/gli-orchi/members","icon":"https://images.chesscomfiles.com/uploads/v1/group/79540.e255cc72.50x50o.48021d861633.jpeg","url":"https://www.chess.com/club/gli-orchi","puntiSpareggio":0, "posizione":0, "matchConclusi":0, "puntiConclusi":0, "puntiMatchConclusi":0, "giocatoriRegistrati":0, "mediaConclusi":0, "finaleConclusi":"","teamVinte" : [], "teamPatte" : [], "penalità":0, "penalitàTotali":0, "daCaricare":true};
    teams['le-aquile']={"giocatori" : [11], "name":"Le Aquile","club_id":"79510","urlMembri":"https://api.chess.com/pub/club/le-aquile/members","icon":"https://images.chesscomfiles.com/uploads/v1/group/79510.4181dfde.50x50o.184a579f3e5b.jpeg","url":"https://www.chess.com/club/le-aquile","puntiSpareggio":0, "posizione":0, "matchConclusi":0, "puntiConclusi":0, "puntiMatchConclusi":0, "giocatoriRegistrati":0, "mediaConclusi":0, "finaleConclusi":"","teamVinte" : [], "teamPatte" : [], "penalità":0, "penalitàTotali":0, "daCaricare":true};
teams['i-raminghi']={"giocatori" : [11], "name":"I Raminghi","club_id":"314357","urlMembri":"https://api.chess.com/pub/club/i-raminghi/members","icon":"https://images.chesscomfiles.com/uploads/v1/group/314357.e9b24b53.50x50o.dfad8176dedb.jpeg","url":"https://www.chess.com/club/i-raminghi","puntiSpareggio":0, "posizione":0, "matchConclusi":0, "puntiConclusi":0, "puntiMatchConclusi":0, "giocatoriRegistrati":0, "mediaConclusi":0, "finaleConclusi":"","teamVinte" : [], "teamPatte" : [], "penalità":0, "penalitàTotali":0, "daCaricare":true};
teams['la-compagnia-del-pedone']={"giocatori" : [4], "name":"La Compagnia del pedone","club_id":"79546","urlMembri":"https://api.chess.com/pub/club/la-compagnia-del-pedone/members","icon":"https://images.chesscomfiles.com/uploads/v1/group/79546.38e2b340.50x50o.a971b3dfe492.jpeg","url":"https://www.chess.com/club/members/la-compagnia-del-pedone","puntiSpareggio":0, "posizione":0, "matchConclusi":0, "puntiConclusi":0, "puntiMatchConclusi":0, "giocatoriRegistrati":0, "mediaConclusi":0, "finaleConclusi":"","teamVinte" : [], "teamPatte" : [], "penalità":0, "penalitàTotali":0, "daCaricare":true};
    teams['gli-ent']={"giocatori" : [11], "name":"Gli Ent","club_id":"79544","urlMembri":"https://api.chess.com/pub/club/gli-ent/members","icon":"https://images.chesscomfiles.com/uploads/v1/group/79544.44efa9b7.50x50o.d7b6c5f9c44d.jpeg","url":"https://www.chess.com/club/gli-ent","puntiSpareggio":0, "posizione":0, "matchConclusi":0, "puntiConclusi":0, "puntiMatchConclusi":0, "giocatoriRegistrati":0, "mediaConclusi":0, "finaleConclusi":"","teamVinte" : [], "teamPatte" : [], "penalità":0, "penalitàTotali":0, "daCaricare":true};
teams['i-cavalieri-di-rohan']={"giocatori" : [8], "name":"I Cavalieri di Rohan","club_id":"79318","urlMembri":"https://api.chess.com/pub/club/i-cavalieri-di-rohan/members","icon":"https://images.chesscomfiles.com/uploads/v1/group/79318.a6511232.50x50o.be143ab30f5f.jpeg","url":"https://www.chess.com/club/i-cavalieri-di-rohan","puntiSpareggio":0, "posizione":0, "matchConclusi":0, "puntiConclusi":0, "puntiMatchConclusi":0, "giocatoriRegistrati":0, "mediaConclusi":0, "finaleConclusi":"","teamVinte" : [], "teamPatte" : [], "penalità":0, "penalitàTotali":0, "daCaricare":true};

var matchs = [];


matchs[11] = {"id":"https://api.chess.com/pub/match/1426211", "penalità1":0, "penalità2":0, "boardsPenalità":0, "daCaricare":true,  "concluso": false, "Punti1":0, "Punti2":0,"PuntiBannati":0, "nGiocatori1":0,  "nGiocatori2":0};
matchs[12] = {"id":"https://api.chess.com/pub/match/1426241", "penalità1":0, "penalità2":0, "boardsPenalità":0, "daCaricare":true,  "concluso": false, "Punti1":0, "Punti2":0,"PuntiBannati":0, "nGiocatori1":0,  "nGiocatori2":0};
matchs[13] = {"id":"https://api.chess.com/pub/match/1426235", "penalità1":0, "penalità2":0, "boardsPenalità":0,  "daCaricare":true,  "concluso": false, "Punti1":0, "Punti2":0,"PuntiBannati":0, "nGiocatori1":0,  "nGiocatori2":0};
matchs[14] = {"id":"https://api.chess.com/pub/match/1426213", "penalità1":0, "penalità2":0, "boardsPenalità":0,  "daCaricare":true,  "concluso": false, "Punti1":0, "Punti2":0,"PuntiBannati":0, "nGiocatori1":0,  "nGiocatori2":0};

/*
matchs[21] = {"id":"https://api.chess.com/pub/match/", "penalità1":0, "penalità2":0, "boardsPenalità":0,  "daCaricare":true,  "concluso": false, "Punti1":0, "Punti2":0,"PuntiBannati":0, "nGiocatori1":0,  "nGiocatori2":0};
matchs[22] = {"id":"https://api.chess.com/pub/match/", "penalità1":0, "penalità2":0, "boardsPenalità":0,  "daCaricare":true,  "concluso": false, "Punti1":0, "Punti2":0,"PuntiBannati":0, "nGiocatori1":0,  "nGiocatori2":0};
matchs[23] = {"id":"https://api.chess.com/pub/match/", "penalità1":0, "penalità2":0, "boardsPenalità":0,  "daCaricare":true,  "concluso": false, "Punti1":0, "Punti2":0,"PuntiBannati":0, "nGiocatori1":0,  "nGiocatori2":0};
matchs[24] = {"id":"https://api.chess.com/pub/match/", "penalità1":0, "penalità2":0, "boardsPenalità":0,  "daCaricare":true,  "concluso": false, "Punti1":0, "Punti2":0,"PuntiBannati":0, "nGiocatori1":0,  "nGiocatori2":0};

matchs[31] = {"id":"https://api.chess.com/pub/match/", "penalità1":0, "penalità2":0, "boardsPenalità":0,  "daCaricare":true,  "concluso": false, "Punti1":0, "Punti2":0,"PuntiBannati":0, "nGiocatori1":0,  "nGiocatori2":0};
matchs[32] = {"id":"https://api.chess.com/pub/match/", "penalità1":0, "penalità2":0, "boardsPenalità":0,  "daCaricare":true,  "concluso": false, "Punti1":0, "Punti2":0,"PuntiBannati":0, "nGiocatori1":0,  "nGiocatori2":0};
matchs[33] = {"id":"https://api.chess.com/pub/match/", "penalità1":0, "penalità2":0, "boardsPenalità":0,  "daCaricare":true,  "concluso": false, "Punti1":0, "Punti2":0,"PuntiBannati":0, "nGiocatori1":0,  "nGiocatori2":0};
matchs[34] = {"id":"https://api.chess.com/pub/match/", "penalità1":0, "penalità2":0, "boardsPenalità":0,  "daCaricare":true,  "concluso": false, "Punti1":0, "Punti2":0,"PuntiBannati":0, "nGiocatori1":0,  "nGiocatori2":0};

matchs[41] = {"id":"https://api.chess.com/pub/match/", "penalità1":0, "penalità2":0, "boardsPenalità":0,  "daCaricare":true,  "concluso": false, "Punti1":0, "Punti2":0,"PuntiBannati":0, "nGiocatori1":0,  "nGiocatori2":0};
matchs[42] = {"id":"https://api.chess.com/pub/match/", "penalità1":0, "penalità2":0, "boardsPenalità":0,  "daCaricare":true,  "concluso": false, "Punti1":0, "Punti2":0,"PuntiBannati":0, "nGiocatori1":0,  "nGiocatori2":0};
matchs[43] = {"id":"https://api.chess.com/pub/match/", "penalità1":0, "penalità2":0, "boardsPenalità":0, "daCaricare":true,  "concluso": false, "Punti1":0, "Punti2":0,"PuntiBannati":0, "nGiocatori1":0,  "nGiocatori2":0};
matchs[44] = {"id":"https://api.chess.com/pub/match/", "penalità1":0, "penalità2":0, "boardsPenalità":0, "daCaricare":true,  "concluso": false, "Punti1":0, "Punti2":0,"PuntiBannati":0, "nGiocatori1":0,  "nGiocatori2":0};

matchs[51] = {"id":"https://api.chess.com/pub/match/", "penalità1":0, "penalità2":0, "boardsPenalità":0, "daCaricare":true,  "concluso": false, "Punti1":0, "Punti2":0,"PuntiBannati":0, "nGiocatori1":0,  "nGiocatori2":0};
matchs[52] = {"id":"https://api.chess.com/pub/match/", "penalità1":0, "penalità2":0, "boardsPenalità":0, "daCaricare":true,  "concluso": false, "Punti1":0, "Punti2":0,"PuntiBannati":0, "nGiocatori1":0,  "nGiocatori2":0};
matchs[53] = {"id":"https://api.chess.com/pub/match/", "penalità1":0, "penalità2":0, "boardsPenalità":0, "daCaricare":true,  "concluso": false, "Punti1":0, "Punti2":0,"PuntiBannati":0, "nGiocatori1":0,  "nGiocatori2":0};
matchs[54] = {"id":"https://api.chess.com/pub/match/", "penalità1":0, "penalità2":0, "boardsPenalità":0, "daCaricare":true,  "concluso": false, "Punti1":0, "Punti2":0,"PuntiBannati":0, "nGiocatori1":0,  "nGiocatori2":0};

matchs[61] = {"id":"https://api.chess.com/pub/match/", "penalità1":0, "penalità2":0, "boardsPenalità":0, "daCaricare":true,  "concluso": false, "Punti1":0, "Punti2":0,"PuntiBannati":0, "nGiocatori1":0,  "nGiocatori2":0};
matchs[62] = {"id":"https://api.chess.com/pub/match/", "penalità1":0, "penalità2":0, "boardsPenalità":0, "daCaricare":true,  "concluso": false, "Punti1":0, "Punti2":0,"PuntiBannati":0, "nGiocatori1":0,  "nGiocatori2":0};
matchs[63] = {"id":"https://api.chess.com/pub/match/", "penalità1":0, "penalità2":0, "boardsPenalità":0, "daCaricare":true,  "concluso": false, "Punti1":0, "Punti2":0,"PuntiBannati":0, "nGiocatori1":0,  "nGiocatori2":0};
matchs[64] = {"id":"https://api.chess.com/pub/match/", "penalità1":0, "penalità2":0, "boardsPenalità":0, "daCaricare":true,  "concluso": false, "Punti1":0, "Punti2":0,"PuntiBannati":0, "nGiocatori1":0,  "nGiocatori2":0};

matchs[71] = {"id":"https://api.chess.com/pub/match/", "penalità1":0, "penalità2":0, "boardsPenalità":0, "daCaricare":true,  "concluso": false, "Punti1":0, "Punti2":0,"PuntiBannati":0, "nGiocatori1":0,  "nGiocatori2":0};
matchs[72] = {"id":"https://api.chess.com/pub/match/", "penalità1":0, "penalità2":0, "boardsPenalità":0, "daCaricare":true,  "concluso": false, "Punti1":0, "Punti2":0,"PuntiBannati":0, "nGiocatori1":0,  "nGiocatori2":0};
matchs[73] = {"id":"https://api.chess.com/pub/match/", "penalità1":0, "penalità2":0, "boardsPenalità":0, "daCaricare":true,  "concluso": false, "Punti1":0, "Punti2":0,"PuntiBannati":0, "nGiocatori1":0,  "nGiocatori2":0};
matchs[74] = {"id":"https://api.chess.com/pub/match/", "penalità1":0, "penalità2":0, "boardsPenalità":0, "daCaricare":true,  "concluso": false, "Punti1":0, "Punti2":0,"PuntiBannati":0, "nGiocatori1":0,  "nGiocatori2":0};

matchs[81] = {"id":"https://api.chess.com/pub/match/", "penalità1":0, "penalità2":0, "boardsPenalità":0, "daCaricare":true,  "concluso": false, "Punti1":0, "Punti2":0,"PuntiBannati":0, "nGiocatori1":0,  "nGiocatori2":0};
matchs[82] = {"id":"https://api.chess.com/pub/match/", "penalità1":0, "penalità2":0, "boardsPenalità":1, "daCaricare":true,  "concluso": false, "Punti1":2, "Punti2":0,"PuntiBannati":0, "nGiocatori1":0,  "nGiocatori2":0};
matchs[83] = {"id":"https://api.chess.com/pub/match/", "penalità1":0, "penalità2":0, "boardsPenalità":0, "daCaricare":true,  "concluso": false, "Punti1":0, "Punti2":0,"PuntiBannati":0, "nGiocatori1":0,  "nGiocatori2":0};
matchs[84] = {"id":"https://api.chess.com/pub/match/", "penalità1":0, "penalità2":0, "boardsPenalità":0, "daCaricare":true,  "concluso": false, "Punti1":0, "Punti2":0,"PuntiBannati":0, "nGiocatori1":0,  "nGiocatori2":0};

matchs[91] = {"id":"https://api.chess.com/pub/match/", "penalità1":0, "penalità2":0, "boardsPenalità":0, "daCaricare":true,  "concluso": false, "Punti1":0, "Punti2":0,"PuntiBannati":0, "nGiocatori1":0,  "nGiocatori2":0};
matchs[92] = {"id":"https://api.chess.com/pub/match/", "penalità1":0, "penalità2":0, "boardsPenalità":0, "daCaricare":true,  "concluso": false, "Punti1":0, "Punti2":0,"PuntiBannati":0, "nGiocatori1":0,  "nGiocatori2":0};
matchs[93] = {"id":"https://api.chess.com/pub/match/", "penalità1":0, "penalità2":0, "boardsPenalità":0, "daCaricare":true,  "concluso": false, "Punti1":0, "Punti2":0,"PuntiBannati":0, "nGiocatori1":0,  "nGiocatori2":0};
matchs[94] = {"id":"https://api.chess.com/pub/match/", "penalità1":0, "penalità2":0, "boardsPenalità":0, "daCaricare":true,  "concluso": false, "Punti1":0, "Punti2":0,"PuntiBannati":0, "nGiocatori1":0,  "nGiocatori2":0};
*/


function elabora() {

    console.log('inizio elabora');
    //Carico i dati di tutti i teams
    for (var i in teams) {
        //Calcolo i giocatori registrati totoali
        for (var igiocatori in teams[i].giocatori) {
            teams[i].giocatoriRegistrati +=  teams[i].giocatori[igiocatori];
        };

        sleep(50);
        caricaTeams(teams[i].urlMembri);
    };
}

function caricaTeams(urlMembri) {

    console.log('Inzio caricaTeams: ' + urlMembri)

    //Leggo i dati 
    $.getJSON(urlMembri,function(data){

        //Cerco teams, potrebbero non arrivare in ordine corretto
        for (var myTeam in teams) {
            if (this.url.indexOf(myTeam) > -1 && teams[myTeam].urlMembri != '')
            {

                console.log('Letti dati team: ' + myTeam + ' - ' + this.url);

                //Creao lista giocatori tema
                teams[myTeam].giocatori = [];
                //Carico tutti i giocatori
                for (var i in data.weekly) {
                    if (data.weekly[i].username != 'themoonlightknight') {
                        teams[myTeam].giocatori.push(data.weekly[i].username);
                        //Creo giocatore nella lista principale
                        creaGiocatore(data.weekly[i].username, myTeam);
                    }
                }
                for (var i in data.monthly) {
                    if (data.monthly[i].username != 'themoonlightknight') {
                        teams[myTeam].giocatori.push(data.monthly[i].username);
                        //Creo giocatore nella lista principale
                        creaGiocatore(data.monthly[i].username, myTeam);
                    }
                }
                for (var i in data.all_time) {
                    if (data.all_time[i].username != 'themoonlightknight') {
                        teams[myTeam].giocatori.push(data.all_time[i].username);
                        //Creo giocatore nella lista principale
                        creaGiocatore(data.all_time[i].username, myTeam);
                    }
                }
                //Se ho caricato tutti i dati carico le partite
                console.log('caricaTeams. Imposto caricato Team: ' + myTeam)
                teams[myTeam].daCaricare = false;
                for (var i in teams) {
                    if (teams[i].daCaricare) {
                        console.log('caricaTeams. Team non caricato: ' + myTeam)
                        return;
                    }
                }
        
                //controllo di non aver già lanciato fase sucessiva
                if (calcolaTeamsRun)
                    return;  
                calcolaTeamsRun = true;

                console.log('Inizio caricamento match');

                //Carico i dati di tutti i match
                for (var i in matchs) {
                    sleep(50);

                    caricaMatch(i, matchs[i].id);
                };
            }
        }

    }).error(function(jqXhr, textStatus, error) {
        //è andato in errore ricarico i dati
        //Se responseJSON non è valorizzato solo se il record esiste    
        if (! jqXhr.responseJSON)
        {
            console.log('ERRORE ricarico team: ' + this.url);
           //-- var index = 0;
           //     for (var i in teams) {
           //         if (teams[i].urlMembri = this.url)
           //             index = i;
           //     };

                console.log('ERRORE lancio ricarica team: ' + this.url);
                console.log('..............: ' + this.url);
                caricaTeams(this.url);    
            } else {
                console.log('ERRORE Teams non valida. ' + this.url);
                console.log('ERRORE Teams non valida. ' + this.url);
                console.log('ERRORE Teams non valida. ' + this.url);
                console.log('ERRORE Teams non valida. ' + this.url);
                console.log('-------- non ricarico TEAMS');
            }
              
        });
}

function caricaMatch(index, url)
{

    console.log('caricaMatch ' + index + ' - ' + url);

    console.log(giocatori);
    //Leggo i dati 
    $.getJSON(url,function(data){


    console.log('caricaMatch. Dati di ' + this.url);

        if (data.status != 'registration') 
        {
            //leggo team
            var team1 = data.teams.team1.url.substr(27, data.teams.team1.url.length-27);
            var team2 = data.teams.team2.url.substr(27, data.teams.team2.url.length-27);

            //salvo bannati della partita
            var bannatiBoard1 = [];
            var bannatiBoard2 = [];
            for (var i in data.teams.team1.players) {
                if (! data.teams.team1.players[i])
                    console.log(data.teams.team1.players[i]);
                    if (! data.teams.team2.players[i])
                    console.log(data.teams.team2.players[i]);
            /* Considero come bannati quelli restituiti nel js
                if (data.teams.team1.players[i].status == 'closed:fair_play_violations' ) {
                    bannatiBoard.push(data.teams.team1.players[i].board);
                    bannati.push(data.teams.team1.players[i].username);
                }
                if (data.teams.team2.players[i].status == 'closed:fair_play_violations' ) {
                    bannatiBoard.push(data.teams.team2.players[i].board);
                    bannati.push(data.teams.team2.players[i].username);
                }
            }
            */
                for (var iBannato in data.teams.team1.fair_play_removals) {
                    var username = data.teams.team1.fair_play_removals[iBannato];
                    bannati.push(username);
                    for (var i in data.teams.team1.players) {
                        if (data.teams.team1.players[i].username == username) {
                            bannatiBoard1.push(data.teams.team1.players[i].board);
                        }
                    }
                }
                for (var iBannato in data.teams.team2.fair_play_removals) {
                    var username = data.teams.team2.fair_play_removals[iBannato];
                    bannati.push(username);
                    for (var i in data.teams.team2.players) {
                        if (data.teams.team2.players[i].username == username) {
                            bannatiBoard2.push(data.teams.team2.players[i].board);
                        }
                    }
                }
            }

            //Calcolo punti
            for (var i in data.teams.team1.players) {
                //Punti Team 1
                //if (data.teams.team1.players[i].status != 'closed:fair_play_violations') { //Se non è stato bannato
                if ( bannatiBoard1.indexOf(data.teams.team1.players[i].board) == -1) {  //Se non stato bannato 
                    if ( bannatiBoard2.indexOf(data.teams.team1.players[i].board) > -1) {  //Se è stato bannato avversario
                        matchs[index].Punti1 += 2;  //Vale per entrambe le partite
                    } else {
                        if (data.teams.team1.players[i].played_as_black == 'win') {
                            matchs[index].Punti1 ++;
                        } else {
                            if ((data.teams.team1.players[i].played_as_black == 'agreed') || (data.teams.team1.players[i].played_as_black == 'repetition')  || (data.teams.team1.players[i].played_as_black == 'timevsinsufficient') || 
                                 (data.teams.team1.players[i].played_as_black == '50move') || (data.teams.team1.players[i].played_as_black == 'insufficient') || (data.teams.team1.players[i].played_as_black == 'stalemate')  ) {
                                    matchs[index].Punti1 += 0.5;
                            }
                        }
                        if (data.teams.team1.players[i].played_as_white ) { //Se la partita non è ancora conclusa non è definito
                            if (data.teams.team1.players[i].played_as_white == 'win') {
                                matchs[index].Punti1 ++;
                            } else {
                                if ((data.teams.team1.players[i].played_as_white == 'agreed') || (data.teams.team1.players[i].played_as_white == 'repetition')  || (data.teams.team1.players[i].played_as_white == 'timevsinsufficient') || 
                                     (data.teams.team1.players[i].played_as_white == '50move') || (data.teams.team1.players[i].played_as_white == 'insufficient') || (data.teams.team1.players[i].played_as_white == 'stalemate')  ) {
                                        matchs[index].Punti1 += 0.5;
                                }
                            }
                        }
                    } 
                /*??? } else {  //è stato bannato
                     if (data.teams.team1.players[i].played_as_black == 'win') {
                        matchs[index].PuntiBannati ++;
                    } else {
                        if ((data.teams.team1.players[i].played_as_black == 'agreed') || (data.teams.team1.players[i].played_as_black == 'repetition')  || (data.teams.team1.players[i].played_as_black == 'timevsinsufficient') || 
                             (data.teams.team1.players[i].played_as_black == '50move') || (data.teams.team1.players[i].played_as_black == 'insufficient') || (data.teams.team1.players[i].played_as_black == 'stalemate')  ) {
                                matchs[index].PuntiBannati += 0.5;
                        }
                    }
                    if (data.teams.team1.players[i].played_as_white ) { //Se la partita non è ancora conclusa non è definito
                        if (data.teams.team1.players[i].played_as_white == 'win') {
                            matchs[index].PuntiBannati ++;
                        } else {
                            if ((data.teams.team1.players[i].played_as_white == 'agreed') || (data.teams.team1.players[i].played_as_white == 'repetition')  || (data.teams.team1.players[i].played_as_white == 'timevsinsufficient') || 
                                 (data.teams.team1.players[i].played_as_white == '50move') || (data.teams.team1.players[i].played_as_white == 'insufficient') || (data.teams.team1.players[i].played_as_white == 'stalemate')  ) {
                                    matchs[index].PuntiBannati += 0.5;
                            }
                        }
                    }
                */
                }
                //Punti Team 2
                //???????if (data.teams.team2.players[i].status != 'closed:fair_play_violations') { //Se non è stato bannato
                    if ( bannatiBoard2.indexOf(data.teams.team1.players[i].board) == -1) {  //Se non stato bannato 
                        if ( bannatiBoard1.indexOf(data.teams.team2.players[i].board) > -1) {  //Se è stato bannato avversario
                        matchs[index].Punti2 += 2;  //Vale per entrambe le partite
                    } else {
                        if (data.teams.team2.players[i].played_as_black == 'win') {
                            matchs[index].Punti2 ++;
                        } else {
                            if ((data.teams.team2.players[i].played_as_black == 'agreed') || (data.teams.team2.players[i].played_as_black == 'repetition')  || (data.teams.team2.players[i].played_as_black == 'timevsinsufficient') || 
                                (data.teams.team2.players[i].played_as_black == '50move') || (data.teams.team2.players[i].played_as_black == 'insufficient') || (data.teams.team2.players[i].played_as_black == 'stalemate')  ) {
                                    matchs[index].Punti2 += 0.5;
                            }
                        }
                        if (data.teams.team2.players[i].played_as_white ) { //Se la partita non è ancora conclusa non è definito
                            if (data.teams.team2.players[i].played_as_white == 'win') {
                                matchs[index].Punti2 ++;
                            } else {
                                if ((data.teams.team2.players[i].played_as_white == 'agreed') || (data.teams.team2.players[i].played_as_white == 'repetition')  || (data.teams.team2.players[i].played_as_white == 'timevsinsufficient') || 
                                    (data.teams.team2.players[i].played_as_white == '50move') || (data.teams.team2.players[i].played_as_white == 'insufficient') || (data.teams.team2.players[i].played_as_white == 'stalemate')  ) {
                                        matchs[index].Punti2 += 0.5;
                                    
                                }
                            }
                        }
                    }
                /* ???} else {
                    if (data.teams.team2.players[i].played_as_black == 'win') {
                        matchs[index].PuntiBannati ++;
                    } else {
                        if ((data.teams.team2.players[i].played_as_black == 'agreed') || (data.teams.team2.players[i].played_as_black == 'repetition')  || (data.teams.team2.players[i].played_as_black == 'timevsinsufficient') || 
                            (data.teams.team2.players[i].played_as_black == '50move') || (data.teams.team2.players[i].played_as_black == 'insufficient') || (data.teams.team2.players[i].played_as_black == 'stalemate')  ) {
                                matchs[index].PuntiBannati += 0.5;
                        }
                    }
                    if (data.teams.team2.players[i].played_as_white ) { //Se la partita non è ancora conclusa non è definito
                        if (data.teams.team2.players[i].played_as_white == 'win') {
                            matchs[index].PuntiBannati ++;
                        } else {
                            if ((data.teams.team2.players[i].played_as_white == 'agreed') || (data.teams.team2.players[i].played_as_white == 'repetition')  || (data.teams.team2.players[i].played_as_white == 'timevsinsufficient') || 
                                (data.teams.team2.players[i].played_as_white == '50move') || (data.teams.team2.players[i].played_as_white == 'insufficient') || (data.teams.team2.players[i].played_as_white == 'stalemate')  ) {
                                    matchs[index].PuntiBannati += 0.5;
                                
                            }
                        }
                    } ?? */

                }   
            }

            //Penalità assegnate
            matchs[index].Punti1 += matchs[index].penalità1;
            matchs[index].Punti2 += matchs[index].penalità2;
            
            
            //Aggiorno partite
            matchs[index].url = data.url;
            matchs[index].boards = data.boards;
            matchs[index].team1 = team1;
            matchs[index].team2 = team2;
            if (data.teams.team1.score > data.teams.team2.score) 
            {
                teams[team1].teamVinte.push(team2);
            }    
            if (data.teams.team1.score < data.teams.team2.score) 
            {
                teams[team2].teamVinte.push(team1);
            }    
            if (data.teams.team1.score == data.teams.team2.score) {
                teams[team1].teamPatte.push(team2);
                teams[team2].teamPatte.push(team1);
            } 
            //Se terminata
            var adesso = new Date();
            if ( ((matchs[index].boards * 2) + (matchs[index].boardsPenalità * 2) + (matchs[index].penalità1 + matchs[index].penalità2) == matchs[index].Punti1 + matchs[index].Punti2) ||
                    (dataFine < adesso) )  //Se ho superato la data di fine
            {
                matchs[index].concluso = true;
                //
                teams[team1].matchConclusi ++;
                teams[team2].matchConclusi ++;
                teams[team1].puntiConclusi += matchs[index].Punti1;
                teams[team2].puntiConclusi += matchs[index].Punti2;
                if (matchs[index].Punti1 > matchs[index].Punti2)
                {
                    teams[team1].puntiMatchConclusi ++;
                }
                if (matchs[index].Punti1 < matchs[index].Punti2)
                {
                    teams[team2].puntiMatchConclusi ++;
                    //Penalità
                    teams[team2].puntiMatchConclusi -= matchs[index].penalità2;
                    teams[team2].penalità += matchs[index].penalità2;
                }
                if (matchs[index].Punti1 == matchs[index].Punti2)
                {
                    teams[team1].puntiMatchConclusi += 0.5;
                    teams[team2].puntiMatchConclusi += 0.5;
                }
            }
            //Controllo giocatori
            var username1 = '';
            var username2 = '';
            var risultato = '';
            for (var i in data.teams.team1.players) {
                username1 = data.teams.team1.players[i].username;
                username2 = data.teams.team2.players[i].username;
                risultato = data.teams.team1.players[i].played_as_white;
                if ( bannatiBoard2.indexOf(data.teams.team1.players[i].board) > -1)   //Se è stato bannato avversario
                    risultato = 'win';
                setPunti(username1, risultato);
                risultato = data.teams.team1.players[i].played_as_black;
                if ( bannatiBoard2.indexOf(data.teams.team1.players[i].board) > -1)   //Se è stato bannato avversario
                    risultato = 'win';
                setPunti(username1, risultato);
                risultato = data.teams.team2.players[i].played_as_white;
                if ( bannatiBoard1.indexOf(data.teams.team2.players[i].board) > -1)  //Se è stato bannato avversario
                    risultato = 'win';
                setPunti(username2, risultato);
                if ( bannatiBoard1.indexOf(data.teams.team2.players[i].board) > -1)  //Se è stato bannato avversario
                    risultato = 'win';
                risultato = data.teams.team2.players[i].played_as_black;
                setPunti(username2, risultato);
                //Confera per aver giocato in questo campionato
                giocatori[username1].giocatoCampionato = true;
                giocatori[username2].giocatoCampionato = true;

            }
        }

        //Se ho caricato tutti i dati calcolo la classifica
        matchs[index].daCaricare = false;
        for (var i in matchs) {
            if (matchs[i].daCaricare) {
                console.log('caricaMatch. Match da caricare: ' + i);
                return;
            }
        }
        
        //controllo di non aver già lanciato fase sucessiva
        if (calcolaClassificaRun)
            return;  
            calcolaClassificaRun = true;

        //Aggiungo partite perse a tavolino - forfait  
        /*  
        //Aggiungo partite perse a tavolino    
        matchs[65] = {"id":"", "penalità1":0, "penalità2":0, "daCaricare":false, "concluso": true, "Punti1":0, "Punti2":-1, "nGiocatori1":0,  "nGiocatori2":0};
        matchs[65].team1 = 'la-compagnia-del-pedone';
        matchs[65].team2 = 'gli-hobbit';
        matchs[65].boards = 0;
        teams['la-compagnia-del-pedone'].matchConclusi ++;
        teams['gli-hobbit'].matchConclusi ++;
        teams['la-compagnia-del-pedone'].puntiConclusi += 0;
        teams['gli-hobbit'].puntiConclusi += -1;
        teams['la-compagnia-del-pedone'].puntiMatchConclusi ++;
        */

        console.log('caricaMatch. Inizio getAvatar');

         //Ricerco elo e stampo classifica giocatori
        getAvatar();
    
    }).error(function(jqXhr, textStatus, error) {
        //è andato in errore ricarico i dati
        //Se responseJSON non è valorizzato solo se il record esiste    
        if (! jqXhr.responseJSON)
        {
            console.log('ERRORE ricarico dati: ' + this.url);
            var index = 0;
                for (var i in matchs) {
                    if (matchs[i].url = this.url)
                        index = i;
                };
                console.log('ERRORE ricarico dati: ricarico match ' + index);
                caricaMatch(index, this.url);    
            } else {
                console.log('ERRORE Match non valida. ' + this.url);
                console.log('ERRORE Match non valida. ' + this.url);
                console.log('ERRORE Match non valida. ' + this.url);
                console.log('ERRORE Match non valida. ' + this.url);
            }
              
        });
};

//calcolo classifica team
function calcolaClassifica()
{
    //calcolo punti totali
    //  Punti match + Punti partite + giocatori registrati
    //  N. giocatori
    for (var i in teams) {
        var puntiMachIntero = 0
        puntiMachIntero = teams[i].puntiMatchConclusi * 10;
        var puntiIntero = 0
        puntiIntero = teams[i].puntiConclusi * 10;
        if (teams[i].puntiMatchConclusi < 0)
        {
           puntiMachIntero = puntiMachIntero * -1;
           teams[i].finaleConclusi = '0' + puntiMachIntero.toString().padStart(3, "0") + puntiIntero.toString().padStart(4, "0") + teams[i].giocatoriRegistrati.toString().padStart(3, "0");
        } else {
            teams[i].finaleConclusi = '1' + puntiMachIntero.toString().padStart(3, "0") + puntiIntero.toString().padStart(4, "0") + teams[i].giocatoriRegistrati.toString().padStart(3, "0");
        }
    }

    //Imposto posizione e salvo posizione in classificaTeams
    var gruppo = '';
    var max = -1;
    var posizione = 0;
    var finaleClassifica = 0;
    while (max > -100000000000000)
    {
        max = -200000000000000;
        for (var i in teams)
        {
            //Scelgo i punti (da conclusi oi in corso)
            // Se il primo carattere è 0, il punteggio è inveriore a 0
            if (teams[i].finaleConclusi.substr(0,1) == '1')
               finaleClassifica = teams[i].finaleConclusi
            else
               finaleClassifica = teams[i].finaleConclusi * -1;

            if ((teams[i].posizione == 0) && (finaleClassifica) > max) {
                gruppo = i;
                max = finaleClassifica;
            }
        }
        if (max > -100000000000000) 
        {
            posizione++;
            teams[gruppo].posizione = posizione;
            //Aggiungo il team nella posizione corretta
            classificaTeams.push(gruppo);
        }
    }

    //Stampo la classifica
    var url  = '';
    var stile = '';
    var stileTD = '';
    var gruppoAvversario = '';
    var risultato = '';
    var boards = '';
    var Punti1 = 0;
    var Punti2 = 0;
    var penalità1 = '';
    var penalità2 = '';
    var partitaConclusa = false;
    //Riga con nomi teams    
    var stRiga = '<tr class="classifica-nameTeam">' +
            '<td style="background-color:gray;"></td><td style="background-color:gray;"></td><td style="background-color:gray;">' + 
            //'</td><td style="background-color:gray;">'+
            '</td><td style="background-color:gray;"></td></td><td style="background-color:gray;"></td></td><td style="background-color:gray;"></td><td style="background-color:gray;"></td>';
    for (var i in classificaTeams)         
        stRiga += '<td class="classifica-nameTeam"> <a style="color:black;text-decoration: none;font-weight: normal;" href="' + teams[classificaTeams[i]].url + '" target=”_blank”> ' + teams[classificaTeams[i]].name + '</a></td>';
    stRiga += '</tr>'
    $("#classifica").append(stRiga);
    //Riga con Icone    
    stRiga = '<tr class="classifica-icon">' +
            '<td class="classifica-icon" style="background-color:#E2E2FF;">Pos.</td> <td style="background-color:#E2E2FF;">Team</td><td style="background-color:#E2E2FF;"></td>'+
            '<td class="classifica-icon">Punti</td>' +
            '<td class="classifica-icon">Punti partita</td><td class="classifica-icon" >Giocatori registrati</td>' +
            '<td class="classifica-col1SEP"></td>'; 
    for (var i in classificaTeams)         
        stRiga += '<td  class="classifica-icon">  <img class="classifica-avatar" src="' + teams[classificaTeams[i]].icon + '">';
    stRiga += '</tr>'
    $("#classifica").append(stRiga);
    //Riga team
    for (var i in classificaTeams)         
    {
        gruppo = classificaTeams[i];
        stRiga = '<tr class="classifica-risultati">' +
            '<td class="classifica-risultati">' + teams[gruppo].posizione + '</td>' +
            '<td class="classifica-risultati" style="border: 0px;"> <a style="color:black;text-decoration: none;font-weight: normal;" href="' + teams[classificaTeams[i]].url + '" target=”_blank”> ' + teams[classificaTeams[i]].name + '</a></td>' +
            '<td class="classifica-risultati" style="border: 0px;"> <img class="classifica-avatar" src="' + teams[classificaTeams[i]].icon + '"></td>' +
            '<td class="classifica-risultati">' + teams[gruppo].puntiMatchConclusi + '</td>' + 
            '<td class="classifica-risultati">' + teams[gruppo].puntiConclusi + '</td>' +
            '<td class="classifica-risultati">' + teams[gruppo].giocatoriRegistrati+ '</td>' +
            '<td class="classifica-col1SEP" style="border: 0px;"></td>'; 
        for (var ii in classificaTeams)         
        {
            gruppoAvversario  = classificaTeams[ii];
            stile = '';
            stileTD = '';
            risultato = '';
            partitaConclusa = false;
            if  (gruppo == gruppoAvversario)
            {
                url = '';
                stile = 'background-color:#b3b3b3;';
            } else {
                //Ricerco partita
                boards = 0;
                boardsPenalità = 0;
                url = '';
                for (var partita in matchs)         
                {
                    //team da stampare sulla riga è team1
                    if (matchs[partita].team1 == gruppo && matchs[partita].team2 == gruppoAvversario)
                    {
                        url = matchs[partita].url;
                        boards = matchs[partita].boards + matchs[partita].boardsPenalità;
                        boardsPenalità = matchs[partita].boardsPenalità;
                        Punti1 = matchs[partita].Punti1;
                        Punti2 = matchs[partita].Punti2;
                        partitaConclusa = matchs[partita].concluso;
                        if (matchs[partita].penalità1 > 0)
                           penalità1 = '* ';
                        else
                            penalità1 = '';
                        if (matchs[partita].penalità2 > 0)
                           penalità2 = ' *';
                        else
                           penalità2 = ''
                  } 
                    //team da stampare sulla riga è team2
                    if (matchs[partita].team2 == gruppo && matchs[partita].team1 == gruppoAvversario)
                    {
                        url = matchs[partita].url;
                        boards = matchs[partita].boards + matchs[partita].boardsPenalità;
                        boardsPenalità = matchs[partita].boardsPenalità;
                        Punti1 = matchs[partita].Punti2;
                        Punti2 = matchs[partita].Punti1;
                        partitaConclusa = matchs[partita].concluso;
                        if (matchs[partita].penalità2 > 0)
                           penalità1 = '* ';
                        else
                           penalità1 = ''
                       if (matchs[partita].penalità1 > 0)
                           penalità2 = ' *';
                        else
                           penalità2 = ''
                   }
                }

                //Se la partita esiste
                if (boards > -1 || Punti1  == -1  || Punti2  == -1)  //SE -1 Forfait
                {
                    //Se terminata
                    if (partitaConclusa)
                    {
                        //Pareggio
                        if (Punti1 == Punti2)
                        {
                            risultato = penalità1 + '0.5 - 0.5' + penalità2 + ' <BR> (' + Punti1 + ' - ' + Punti2 + ')';
                            if (boardsPenalità > 0 ) risultato += ' (P)';
                            stileTD = 'style="background-color:#84b2ed;border: 1px solid black;"';   //PAREGGIO
                            stile = 'color:black;font-weight: bold;';
                        } 
                        //Vinto team 1
                        if (Punti1 > Punti2)
                        {
                            if (Punti2  > -1)  //Se -1 persa a tavolino
                            {
                                risultato = penalità1 + '1 - 0'  + penalità2 +  ' <BR> (' + Punti1 + ' - ' + Punti2 + ')';
                            } else {
                                risultato = penalità1 + '1 - 0'  + penalità2 +  ' <BR> (Forfait)';
                            }
                            if (boardsPenalità > 0 ) risultato += ' (P)';
                            stileTD = 'style="background-color:#4bc74b;border: 1px solid black;"'; //VINTO
                            stile = 'color:black;font-weight: bold;';
                        } 
                        //Vinto team 2
                        if (Punti1 < Punti2)
                        {
                            if (Punti1  > -1)  //Se -1 persa a tavolino
                            {
                                risultato = penalità1 + '0 - 1' + penalità2 + ' <BR> (' + Punti1 + ' - ' + Punti2 + ')';
                            } else {
                                risultato = penalità1 + '0 - 1' + penalità2 + ' <BR> (Forfait)';
                            }
                            if (boardsPenalità > 0 ) risultato += ' (P)';
                            stileTD = 'style="background-color:#f75959;border: 1px solid black;"';  //PERSO
                            stile = 'color:black;font-weight: bold;';
                        } 
                    } else {
                        //Match da terminare
                        risultato = penalità1 + Punti1 + ' - ' + Punti2 + penalità2 + '<BR> ('+ (Punti1+Punti2) + '/' + (boards*2) + ')';
                        if (boardsPenalità > 0 ) risultato += ' (P)';
                        //Pareggio
                        if (Punti1 == Punti2)
                            stile = 'color:blue;';
                        //Vinto team 1
                        if (Punti1 > Punti2)
                            stile = 'color:green;';
                        //Vinto team 2
                        if (Punti1 < Punti2)
                            stile = 'color:red;';
                        stileTD = 'style="border: 1px solid black;"';  //PERSO
                    }
                }
            }
                    

            //Scrivo valori calcolati nella cella
            if (url == '')   //stessa squadra
                stRiga += '<td class="classifica-risultati" style="' + stile + '"> </td>'
            else
               stRiga += '<td ' + stileTD + '> <a style="text-decoration: none;font-weight: normal;' + stile + ' " href="' + url +'" target=”_blank”>' + risultato + '</a></td>';
        }
        stRiga += '</tr>'
        $("#classifica").append(stRiga);

        //Stampo i dettagli della squadra
        stampaSquadre(classificaTeams[i]);
    }

        //Calcolo clasifica dei giocatori
        calcolaClassificaGiocatori();
}

    
function stampaSquadre(index)
{
    //statistiche team
    var elencoGiocatori = "";
    var giocatoriTot = teams[index].giocatori.length;
    var giocatoriAttivi = 0;
    var eloTot = 0;
    for (i in teams[index].giocatori) {
        elencoGiocatori += giocatori[teams[index].giocatori[i]].displayName + '<br>';
        if (giocatori[teams[index].giocatori[i]].giocatoCampionato)
            giocatoriAttivi ++;
        eloTot += giocatori[teams[index].giocatori[i]].elo;
    }
    var eloMedio = eloTot / giocatoriTot;

    //stampo riga    
    $("#squadre").append('<tr class="classifica-giocatori">' +
    '<td class="squadre-colPos">' +  teams[index].posizione + '</td>' +
    '<td class="squadre-col1SEP"></td>' +
    '<td class="squadre-colICO" style="border: 0px;"> <img class="classifica-avatar" src="' + teams[index].icon + '"></td>' +
        '<td class="squadre-col2" style="border: 0px;"> <a style="color:black;text-decoration: none;font-weight: bold;color: #005e94;;" href="' + teams[index].url + '" target=”_blank”> ' + teams[index].name + '</a></td>' +
        '<td class="squadre-col1SEP"></td>' +
        '<td class="squadre-col2">' + elencoGiocatori.substring(0, elencoGiocatori.length-4) + '</td>' +
        '<td class="squadre-col3">' + giocatoriTot + '/' + giocatoriAttivi + '</td>' +
        '<td class="squadre-col3">' + eloTot.toLocaleString() + '</td>' +
        '<td class="squadre-col3">' + parseInt(eloMedio).toLocaleString() + '</td>' +
    '</tr>');


}

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }     
