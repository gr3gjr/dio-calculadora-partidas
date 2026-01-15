function calculateRank(victories, defeats) {
  const balance = victories - defeats;
  let level = "";

  if (victories < 10) {
    level = "Ferro";
  } else if (victories >= 11 && victories <= 20) {
    level = "Bronze";
  } else if (victories >= 21 && victories <= 50) {
    level = "Prata";
  } else if (victories >= 51 && victories <= 80) {
    level = "Ouro";
  } else if (victories >= 81 && victories <= 90) {
    level = "Diamante";
  } else if (victories >= 91 && victories <= 100) {
    level = "Lendário";
  } else {
    level = "Imortal";
  }

  return {
    balance,
    level
  };
}

const players = [
  { victories: 5, defeats: 12 },
  { victories: 18, defeats: 6 },
  { victories: 35, defeats: 10 },
  { victories: 62, defeats: 20 },
  { victories: 88, defeats: 30 },
  { victories: 120, defeats: 40 }
];

for (let i = 0; i < players.length; i++) {
  const player = players[i];
  const result = calculateRank(player.victories, player.defeats);

  console.log(
    `O Herói tem de saldo de ${result.balance} está no nível de ${result.level}`
  );
}