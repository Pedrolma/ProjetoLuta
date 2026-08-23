const char = createKnight('Jaiminho');
const monster= littleMonster('monster little');

console.log(char.life);

stage.start (
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster')
);
