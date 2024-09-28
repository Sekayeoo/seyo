const fs = require('fs');
const chalk = require('chalk');

//~~~~~~~~~~~~< GLOBAL SETTINGS >~~~~~~~~~~~~\\

global.owner = ['6285868755849']
global.packname = 'rowrr'
global.author = 'someone'
global.botname = 'SEYO え'
global.listv = ['•','●','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆']
global.tempatDB = 'database.json'
global.pairing_code = true

global.fake = {
	anonim: 'https://telegra.ph/file/95670d63378f7f4210f03.png',
	thumbnailUrl: 'https://deposit.pictures/p/bc40edd9139f40fab8d6d15e2f2d311e',
	thumbnail: fs.readFileSync('./src/media/seyo.png'),
	docs: fs.readFileSync('./src/media/fake.pdf'),
	listfakedocs: ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','application/vnd.openxmlformats-officedocument.presentationml.presentation','application/vnd.openxmlformats-officedocument.wordprocessingml.document','application/pdf'],
}

global.my = {
	yt: 'https://youtube.com/@sekayeoo_',
	gh: 'https://github.com/Sekayeoo',
	gc: '',
	ch: '120363322142730469@newsletter',
}

global.limit = {
	free: 99,
	premium: 999,
	vip: 'unlimited'
}

global.uang = {
	free: 9999,
	premium: 999999,
	vip: 99999999
}

global.mess = {
	owner: 'fitur ini khusus owner!',
	admin: 'fitur ini khusus admin!',
	botAdmin: 'bot harus menjadi admin!',
	group: 'fitur ini khusus group!',
	private: 'fitur ini khusus private chat!',
	prem: 'fitur ini khusus user premium!',
	wait: 'bntr...',
	error: 'error!',
	done: 'done'
}

global.APIs = {
	zaynn: 'https://api.zaynn.my.id/api',
}
global.APIKeys = {
	'https://api.zaynn.my.id/api': 'Najedev',
}

//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});