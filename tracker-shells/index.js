const path = require('path');
const isLocal = typeof process.pkg === 'undefined';
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);
const fs = require('fs');
const dataDir = path.join(basePath, '/data');
const axios = require('axios');
const metadataJSON = require('./data/full_metadata.json');

const CAVEMEN_COUNT = 562;
const rarities = [
  'uncommon',
  'rare',
  'epic',
  'legendary',
  'special',
  'unparalleled'
];
let newCavemenArray = [];

// Query blockchain to return holders of the legacy cavemen and format the data. Also runs the weekly shells giveaway
const queryCavemen = async () => {
  try {
    let cavemenArray = [];

    for (let i = 0; i < CAVEMEN_COUNT; i += 100) {
      const { data } = await axios.get(
        `https://api.elrond.com/nfts?from=${i}&size=100&withOwner=true&collection=CAVEMEN-9ab535`
      );
      cavemenArray = [...cavemenArray, ...data];
    }

    const filteredCavemanArray = cavemenArray.filter(
      (caveman) => !isNaN(caveman.name.split(' ')[2])
    );

    filteredCavemanArray.forEach((caveman) => {
      const cavemanMeta = metadataJSON.find(
        (metaCaveman) =>
          caveman.name.split(' ')[2] === metaCaveman.name.substring(1)
      );
      const cavemanOwner = newCavemenArray.find(
        (owner) => owner.address === caveman.owner
      );
      if (!cavemanOwner) {
        newCavemenArray.push({
          address: caveman.owner,
          balance: 1,
          cavemen: [
            {
              identifier: caveman.identifier,
              number: caveman.name.split(' ')[2]
            }
          ],
          highest: cavemanMeta.attributes[0].value
        });
      } else {
        cavemanOwner.balance++;
        cavemanOwner.cavemen = [
          ...cavemanOwner.cavemen,
          {
            identifier: caveman.identifier,
            number: caveman.name.split(' ')[2]
          }
        ];
        cavemanOwner.highest = highestCaveman(
          cavemanOwner.highest,
          cavemanMeta.attributes[0].value
        );
      }
    });

    weeklyShellsWinners(filterSCAddresses(newCavemenArray), 555, 10);

    fs.writeFileSync(
      `${dataDir}/data.json`,
      JSON.stringify(filterSCAddresses(newCavemenArray)),
      null,
      2
    );
  } catch (err) {
    console.error(new Error(err.message));
  }
};

const highestCaveman = (currentHighest, newHighest) => {
  if (rarities.indexOf(currentHighest) < rarities.indexOf(newHighest))
    return newHighest;
  return currentHighest;
};

const filterSCAddresses = (arr) => {
  return arr.filter((owner) => !owner.address.startsWith('erd1qqqqqqq'));
};

const weeklyShellsWinners = (data, count, numberOfWinners) => {
  const myAddress =
    'erd12rajusd5amuea8pepulgdzxrzva2z0gtrswtmrn3cjagqn63hewsytxcy2';
  let allHolders = [];
  let winningAddresses = [];
  let winners = [];
  const payoutValues = {
    legendary: 500,
    epic: 250,
    rare: 100,
    uncommon: 50
  };

  data.forEach((ele) => {
    for (let i = 0; i < ele.balance; i++) {
      allHolders.push(ele.address);
    }
  });

  do {
    let randomNumber = Math.floor(Math.random() * count);
    if (
      !winningAddresses.includes(allHolders[randomNumber]) &&
      allHolders[randomNumber] !== myAddress
    )
      winningAddresses.push(allHolders[randomNumber]);
  } while (winningAddresses.length < numberOfWinners);

  winningAddresses.forEach((address) => {
    data.forEach((ele) => {
      if (address === ele.address) winners.push(ele);
    });
  });

  console.log(`Winning addresses: `);
  winners.forEach((winner) => {
    console.log(
      `${winner.address} : ${winner.highest} : ${payoutValues[winner.highest]}`
    );
  });
};

queryCavemen();
