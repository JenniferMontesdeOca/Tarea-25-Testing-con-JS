const team = {
    _players: [
      { firstName: 'Lionel', lastName: 'Messi', age: 36 },
      { firstName: 'LeBron', lastName: 'James', age: 39 },
      { firstName: 'Serena', lastName: 'Williams', age: 42 }
    ],
    _games: [
      { opponent: 'Sharks', teamPoints: 85, opponentPoints: 80 },
      { opponent: 'Eagles', teamPoints: 72, opponentPoints: 90 },
      { opponent: 'Bulls', teamPoints: 95, opponentPoints: 94 }
    ],
  
    get players() {
      return this._players;
    },
  
    get games() {
      return this._games;
    },
  
    addPlayer(newFirstName, newLastName, newAge) {
      const player = { firstName: newFirstName, lastName: newLastName, age: newAge };
      this._players.push(player);
      renderPlayers();
    },
  
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
      const game = { opponent: newOpponent, teamPoints: newTeamPoints, opponentPoints: newOpponentPoints };
      this._games.push(game);
      renderGames();
    }
  };
  
  function renderPlayers() {
    const list = document.getElementById('playersList');
    list.innerHTML = '';
    team.players.forEach(p => {
      const item = document.createElement('li');
      item.textContent = `${p.firstName} ${p.lastName}, ${p.age} años`;
      list.appendChild(item);
    });
  }
  
  function renderGames() {
    const list = document.getElementById('gamesList');
    list.innerHTML = '';
    team.games.forEach(g => {
      const item = document.createElement('li');
      item.textContent = `Contra ${g.opponent}: Equipo ${g.teamPoints} - ${g.opponentPoints} Oponente`;
      list.appendChild(item);
    });
  }
  
  function addPlayer() {
    const first = document.getElementById('firstName').value;
    const last = document.getElementById('lastName').value;
    const age = parseInt(document.getElementById('age').value);
  
    if (first && last && !isNaN(age)) {
      team.addPlayer(first, last, age);
      document.getElementById('firstName').value = '';
      document.getElementById('lastName').value = '';
      document.getElementById('age').value = '';
    }
  }
  
  function addGame() {
    const opponent = document.getElementById('opponent').value;
    const teamPts = parseInt(document.getElementById('teamPoints').value);
    const oppPts = parseInt(document.getElementById('opponentPoints').value);
  
    if (opponent && !isNaN(teamPts) && !isNaN(oppPts)) {
      team.addGame(opponent, teamPts, oppPts);
      document.getElementById('opponent').value = '';
      document.getElementById('teamPoints').value = '';
      document.getElementById('opponentPoints').value = '';
    }
  }
  
  // Render inicial
  renderPlayers();
  renderGames();
  