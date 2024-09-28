require('../settings');
const { sleep, clockString } = require('./function')

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const setLimit = (m, db) => db.users[m.sender].limit -= 1

const addLimit = (jumlah, no, db) => db.users[no].limit += Number(jumlah)

const setUang = (m, db) => db.users[m.sender].uang -= 1000

const addUang = (jumlah, no, db) => db.users[no].uang += Number(jumlah)

module.exports = { setLimit, addLimit, addUang, setUang }