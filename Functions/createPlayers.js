function createPlayers(rules) {
  const players = {};
  for (let i = 0; i < rules.players.length; i++) {
    if (rules.players[i]) {
      players[i] = rules.players[i];
    }
  }
  return players;
}

export { createPlayers };
