export const environment = {
  production: false,
  serverUrl: {
    base: 'http://localhost:3030',
    login: 'http://localhost:3030/users/login',
    register: 'http://localhost:3030/users/register',
    logout: 'http://localhost:3030/users/logout',
    games: 'http://localhost:3030/data/games',
    gameBuyers: 'http://localhost:3030/data/gameBuyers',
    gamesBuyersGet:'http://localhost:3030/data/gameBuyers?where=_ownerId',
    contactUs: 'http://localhost:3030/jsonstore/contact-us',
  },
};
