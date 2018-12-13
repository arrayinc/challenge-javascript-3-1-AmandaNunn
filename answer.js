// *** YOUR ANSWER BELOW ***
function beerSong(n){

  let song = "";

  for(let i = n; n > 0; n--){
    let newN = n - 1;
    song += `${n} bottles of beer on the wall, ${n} bottles of beer. Take one down, pass it around. ${newN} bottles of beer on the wall.`;
  }
  return song;
}

beerSong(99);
