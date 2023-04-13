import Team from './Team';
import Character from './Character';

const char1 = new Character('char1');
const char2 = new Character('char2');
const char3 = new Character('char3');
const team1 = new Team();
team1.add(char1);
team1.add(char2);
team1.add(char3);
console.log(team1);

for (const iterator1 of team1) {
  console.log(iterator1);
}
