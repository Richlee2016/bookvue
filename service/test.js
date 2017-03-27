var fetch = require('./fetch');


var cityGuess = () => fetch('GET', '/hs/v3/channel/418', {});

cityGuess().then(res => {
    console.log(res);
})