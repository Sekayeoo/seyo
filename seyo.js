process.on('uncaughtException', console.error)
process.on('unhandledRejection', console.error)

require('./settings');
const fs = require('fs');
const os = require('os');
const util = require('util');
const path = require('path');
const https = require('https');
const axios = require('axios');
const chalk = require('chalk');
const ytdl = require('ytdl-core');
const cron = require('node-cron');
const fetch = require('node-fetch');
const webp = require('node-webpmux');
const moment = require('moment-timezone');
const { exec, spawn, execSync } = require('child_process');


const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, getBinaryNodeChildren, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@whiskeysockets/baileys');

const prem = require('./src/premium');
const { LoadDataBase } = require('./src/message');
const { TelegraPh, UguuSe } = require('./lib/uploader');
const { toAudio, toPTT, toVideo } = require('./lib/converter');
const { imageToWebp, videoToWebp, writeExif } = require('./lib/exif');
const { chatGpt, tiktokDl, facebookDl, instaDl, instaDownload, instaStory, ytMp4, ytMp3, allDl, quotedLyo, Ytdl, cekKhodam, simi, mediafireDl } = require('./lib/screaper');
const { setLimit, addLimit, addUang, setUang } = require('./lib/economy');
const { unixTimestampSeconds, generateMessageTag, processTime, webApi, getRandom, getBuffer, fetchJson, runtime, clockString, sleep, isUrl, getTime, formatDate, tanggal, formatp, jsonformat, reSize, toHD, logic, generateProfilePicture, bytesToSize, checkBandwidth, getSizeMedia, parseMention, getGroupAdmins, readFileTxt, readFileJson, getHashedPassword, generateAuthToken, cekMenfes, generateToken, batasiTeks, randomText, isEmoji, getTypeUrlMedia, pickRandom, getAllHTML } = require('./lib/function');

// Read Database
const sewa = JSON.parse(fs.readFileSync('./database/sewa.json'));
const premium = JSON.parse(fs.readFileSync('./database/premium.json'));

module.exports = seyo = async (seyo, m, chatUpdate, store) => {
	try {
		
		await LoadDataBase(seyo, m);
		
		const botNumber = await seyo.decodeJid(seyo.user.id)
		const body = (m.type === 'conversation') ? m.message.conversation : (m.type == 'imageMessage') ? m.message.imageMessage.caption : (m.type == 'videoMessage') ? m.message.videoMessage.caption : (m.type == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.type == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.type == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.type == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.type === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : (m.type === 'editedMessage') ? (m.message.editedMessage.message.protocolMessage.editedMessage.extendedTextMessage ? m.message.editedMessage.message.protocolMessage.editedMessage.extendedTextMessage.text : m.message.editedMessage.message.protocolMessage.editedMessage.conversation) : ''
		const budy = (typeof m.text == 'string' ? m.text : '')
		const prefix = db.set[botNumber].multiprefix ? '' : /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@()#,'"*+÷/\%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@()#,'"*+÷/\%^&.©^]/gi)[0] : /[\uD800-\uDBFF][\uDC00-\uDFFF]/gi.test(body) ? body.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/gi)[0] : '.'
		const isCmd = body.startsWith(prefix)
		const args = body.trim().split(/ +/).slice(1)
		const isCreator = isOwner = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
		const quoted = m.quoted ? m.quoted : m
		const command = isCreator ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : isCmd ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : ''
		const text = q = args.join(' ')
		const mime = (quoted.msg || quoted).mimetype || ''
		const qmsg = (quoted.msg || quoted)
		const hari = moment.tz('Asia/Jakarta').locale('id').format('dddd');
		const tanggal = moment.tz('Asia/Jakarta').locale('id').format('DD/MM/YYYY');
		const jam = moment().tz('Asia/Jakarta').locale('id').format('HH:mm:ss');
		const ucapanWaktu = jam < '05:00:00' ? 'Selamat Pagi 🌉' : jam < '11:00:00' ? 'Selamat Pagi 🌄' : jam < '15:00:00' ? 'Selamat Siang 🏙' : jam < '18:00:00' ? 'Selamat Sore 🌅' : jam < '19:00:00' ? 'Selamat Sore 🌃' : jam < '23:59:00' ? 'Selamat Malam 🌌' : 'Selamat Malam 🌌';
		const almost = 0.72
		const time = Date.now()
		const setv = pickRandom(listv)
		const more = String.fromCharCode(8206)
		const readmore = more.repeat(999)
		
		const isVip = db.users[m.sender] ? db.users[m.sender].vip : false
		const isPremium = isCreator || prem.checkPremiumUser(m.sender, premium) || false
		const isNsfw = m.isGroup ? db.groups[m.chat].nsfw : false
		
		// Fake
		const fkontak = {
			key: {
				remoteJid: '0@s.whatsapp.net',
				participant: '0@s.whatsapp.net',
				fromMe: false,
				id: 'SEYO え'
			},
			message: {
				contactMessage: {
					displayName: (m.pushName || author),
					vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${m.pushName || author},;;;\nFN:${m.pushName || author}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
					sendEphemeral: true
				}
			}
		}
		
		// Reset Limit
		cron.schedule('00 00 * * *', () => {
			let user = Object.keys(db.users)
			for (let jid of user) {
				const limitUser = db.users[jid].vip ? limit.vip : prem.checkPremiumUser(jid, premium) ? limit.premium : limit.free
				db.users[jid].limit = limitUser
				console.log('Reseted Limit')
			}
		}, {
			scheduled: true,
			timezone: 'Asia/Jakarta'
		})

		// Auto Read
		if (m.message && m.key.remoteJid !== 'status@broadcast') {
			console.log(chalk.black.bgWhite('[ PESAN ]:'),chalk.black.bgGreen(new Date), chalk.black.bgHex('#00EAD3')(budy || m.type) + '\n' + chalk.black(chalk.bgCyanBright('[ DARI ] :'),chalk.bgYellow(m.pushName),chalk.bgHex('#FF449F')(m.sender),chalk.bgBlue('(' + (m.isGroup ? m.pushName : 'Private Chat', m.chat) + ')')));
			if (db.set[botNumber].autoread) seyo.readMessages([m.key]);
		}
		
		// Group Settings
		if (m.isGroup) {
			// Mute
			if (db.groups[m.chat].mute && !isCreator) {
				return
			}}
		
		// Filter Bot
		if (m.isBot) return
		
		// Mengetik
		if (db.set[botNumber].autotyping && isCmd) {
			await seyo.sendPresenceUpdate('composing', m.chat)
		}
		
		// Cek Expired
		prem.expiredCheck(seyo, premium);
		
// Fungsi buat nyimpen isi dor ke file
function setIsiDor(isi) {
    fs.writeFileSync('./dor', isi, 'utf-8');
}

// Fungsi buat ambil isi dor dari file
function getIsiDor() {
    if (fs.existsSync('./dor')) {
        return fs.readFileSync('./dor', 'utf-8');
    } else {
        return 'Belum ada isi dor yang disimpan!';
    }
}

async function checkUserExists(id) {
    try {
        let exists = await conn.isOnWhatsApp(id); // Contoh fungsi dari Baileys
        return exists; // Kalau user ada di WhatsApp, return true
    } catch (error) {
        return false; // Kalau gak valid, return false
    }
}

// Fungsi buat format nomor jadi nomor Indonesia
function formatNomorIndo(nomor) {
    // Hilangkan karakter yang bukan digit
    let nomorBersih = nomor.replace(/\D/g, '');
    
    // Pastikan nomor dimulai dengan 62 atau +62
    if (nomorBersih.startsWith('62')) {
        return nomorBersih;
    } else if (nomorBersih.startsWith('0')) {
        return '62' + nomorBersih.slice(1);
    } else if (nomor.startsWith('+62')) {
        return nomorBersih.slice(1); // Hilangkan tanda + dari +62
    }
    return null; // Kalau nomor nggak valid
}
		
		switch(command) {
			// Tempat Add Case
			case '19rujxl1e': {
				console.log('.')
			}
			break
			
			// Gatau RROOOWRRRR
						case 'runtime': case 'tes': case 'bot': {
				if (text && text.startsWith('--') && isCreator) {
					let buttonnya = [{
						name: 'single_select',
						buttonParamsJson: {
							title: 'Pilih',
							sections: [{
								title: 'Bot Settings',
								rows: [
									{ title: 'Anti Call On🟢', description: 'Mengaktifkan Anti Call', id: '.bot anticall on' },
									{ title: 'Anti Call Off🔴', description: 'Mematikan Anti Call', id: '.bot anticall off' },
									{ title: 'Auto Bio On🟢', description: 'Mengaktifkan Auto Bio', id: '.bot autobio on' },
									{ title: 'Auto Bio Off🔴', description: 'Mematikan Auto Bio', id: '.bot autobio off' },
									{ title: 'Auto Read On🟢', description: 'Mengaktifkan Auto Read', id: '.bot autoread on' },
									{ title: 'Auto Read Off🔴', description: 'Mematikan Auto Read', id: '.bot autoread off' },
									{ title: 'Auto Type On🟢', description: 'Mengaktifkan Auto Type', id: '.bot autotype on' },
									{ title: 'Auto Type Off🔴', description: 'Mematikan Auto Type', id: '.bot autotype off' },
									{ title: 'Read SW On🟢', description: 'Mengaktifkan Read SW', id: '.bot readsw on' },
									{ title: 'Read SW Off🔴', description: 'Mematikan Read SW', id: '.bot readsw off' },
									{ title: 'Multi Prefix On🟢', description: 'Mengaktifkan Multi Prefix', id: '.bot multiprefix on' },
									{ title: 'Multi Prefix Off🔴', description: 'Mematikan Multi Prefix', id: '.bot multiprefix off' }
								]
							}]
						}
					}]
					await seyo.sendButtonMsg(m.chat, 'Bot Settings', ucapanWaktu, 'Silahkan dipilih Owner🫡', null, buttonnya, m);
				} else if (text && isCreator) {
					if (text === 'anticall on') db.set[botNumber].anticall = true, m.reply('Sukses Mengaktifkan Anticall');
					if (text === 'anticall off') db.set[botNumber].anticall = false, m.reply('Sukses Mematikan Anticall');
					if (text === 'autobio on') db.set[botNumber].autobio = true, m.reply('Sukses Mengaktifkan Autobio');
					if (text === 'autobio off') db.set[botNumber].autobio = false, m.reply('Sukses Mematikan Autobio');
					if (text === 'autoread on') db.set[botNumber].autoread = true, m.reply('Sukses Mengaktifkan Autoread');
					if (text === 'autoread off') db.set[botNumber].autoread = false, m.reply('Sukses Mematikan Autoread');
					if (text === 'autotype on') db.set[botNumber].autotyping = true, m.reply('Sukses Mengaktifkan Autotype');
					if (text === 'autotype off') db.set[botNumber].autotyping = false, m.reply('Sukses Mematikan Autotype');
					if (text === 'readsw on') db.set[botNumber].readsw = true, m.reply('Sukses Mengaktifkan Read SW');
					if (text === 'readsw off') db.set[botNumber].readsw = false, m.reply('Sukses Mematikan Read SW');
					if (text === 'multiprefix on') db.set[botNumber].multiprefix = true, m.reply('Sukses Mengaktifkan Multiprefix');
					if (text === 'multiprefix off') db.set[botNumber].multiprefix = false, m.reply('Sukses Mematikan Multiprefix');
					let settingsBot = Object.entries(db.set[botNumber]).map(([key, value]) => {
						let qhk = (typeof value === 'boolean') ? (value ? 'on🟢' : 'off🔴') : value;
						return `${key.charAt(0).toUpperCase() + key.slice(1)} : ${qhk}`;
					}).join('\n');
					if (text === 'settings') m.reply(settingsBot);
				} else {
					seyo.sendMessage(m.chat, { text: `*Bot Telah Online Selama*\n*${runtime(process.uptime())}*` }, { quoted: m })
				}
			}
			break
			
			// Owner Menu
			case 'mode': {
				if (!isCreator) return m.reply(mess.owner)
				if (text === 'public') {
					if (seyo.public) return m.reply('*Sudah Aktif Sebelumnya*')
					seyo.public = true
					m.reply('*Sukse Change To Public Usage*')
				} else if (text === 'self') {
					seyo.public = false
					m.reply('*Sukse Change To Self Usage*')
				} else {
					let buttonnya = [{
						name: 'single_select',
						buttonParamsJson: {
							title: 'Pilih',
							sections: [{
								title: 'Mode Bot',
								rows: [
									{ title: 'Mode Public', description: 'Mengaktifkan Mode Public', id: 'mode public' },
									{ title: 'Mode Self', description: 'Mengubah Ke Mode Self', id: 'mode self' },
								]
							}]
						}
					}]
					await seyo.sendButtonMsg(m.chat, 'Mode Bot', ucapanWaktu, 'Silahkan dipilih Owner🫡', null, buttonnya, m);
				}
			}
			break
    case 'dor': {
        if (!isCreator) return m.reply(mess.owner);
        
        let isidornya = getIsiDor();
        
        // Ambil nomor yang ada di isi dor dan jadikan tag
        let nomor = isidornya.match(/@(\d{10,15})@s.whatsapp.net/);
        if (nomor) {
            let nomorTag = nomor[1] + '@s.whatsapp.net'; // Ambil bagian nomornya buat tag
            m.reply(isidornya, null, { mentions: [nomorTag] }); // Mention nomor dalam pesan
        } else {
            m.reply(isidornya)
        }
        }
        break
case 'setdor': {
    if (!isCreator) return m.reply(mess.owner);

    let text = args.join(' '); // Ambil teks setelah command
    if (!text) return m.reply('Ketik isi dor-nya dong!');

    // Cari semua bagian yang dimulai dengan '@' diikuti teks/nama/nomor
    let match = text.match(/@([0-9A-Za-z]+)/g); // Cari semua input setelah '@'
    
    if (match) {
        for (let tag of match) {
            let userId = tag.slice(1); // Ambil teks setelah '@'

            // Cek apakah ini nomor yang valid atau tidak
            let isValid = await checkUserExists(userId + '@s.whatsapp.net'); // Fungsi cek validasi nomor

            if (isValid) {
                // Buat tag mention jika valid
                let mentionTag = `@${userId}@s.whatsapp.net`;

                // Ganti di teks
                text = text.replace(tag, mentionTag);
            }
        }
    }

    setIsiDor(text); // Simpan isi dor
    m.reply(`Isi dor berhasil di-set: ${text}`);
}
break
			case 'setbio': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text) return m.reply('Mana text nya?')
				seyo.setStatus(q)
				m.reply(`*Bio telah di ganti menjadi ${q}*`)
			}
			break
			case 'setppbot': {
				if (!isCreator) return m.reply(mess.owner)
				if (!/image/.test(mime)) return m.reply(`Reply Image Dengan Caption ${prefix + command}`)
				let media = await seyo.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
				if (text.length > 0) {
					let { img } = await generateProfilePicture(media)
					await seyo.query({
						tag: 'iq',
						attrs: {
							to: botNumber,
							type: 'set',
							xmlns: 'w:profile:picture'
						},
						content: [{
							tag: 'picture',
							attrs: { type: 'image' },
							content: img
						}]
					})
					await fs.unlinkSync(media)
					m.reply('Sukses')
				} else {
					await seyo.updateProfilePicture(botNumber, { url: media })
					await fs.unlinkSync(media)
					m.reply('Sukses')
				}
			}
			break
			case 'join': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text) return m.reply('Masukkan Link Group!')
				if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return m.reply('Link Invalid!')
				const result = args[0].split('https://chat.whatsapp.com/')[1]
				m.reply(mess.wait)
				await seyo.groupAcceptInvite(result).catch((res) => {
					if (res.data == 400) return m.reply('Grup Tidak Di Temukan❗');
					if (res.data == 401) return m.reply('Bot Di Kick Dari Grup Tersebut❗');
					if (res.data == 409) return m.reply('Bot Sudah Join Di Grup Tersebut❗');
					if (res.data == 410) return m.reply('Url Grup Telah Di Setel Ulang❗');
					if (res.data == 500) return m.reply('Grup Penuh❗');
				})
			}
			break
			case 'leave': {
				if (!isCreator) return m.reply(mess.owner)
				await seyo.groupLeave(m.chat).then(() => seyo.sendFromOwner(owner, 'Sukses Keluar Dari Grup', m, { contextInfo: { isForwarded: true }}))
			}
			break
			case 'blokir': case 'block': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text && !m.quoted) {
					m.reply(`Contoh: ${prefix + command} 62xxx`)
				} else {
					const numbersOnly = m.isGroup ? (text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender) : m.chat
					await seyo.updateBlockStatus(numbersOnly, 'block').then((a) => m.reply(mess.done)).catch((err) => m.reply('Gagal!'))
				}
			}
			break
			case 'listblock': {
				let anu = await seyo.fetchBlocklist()
				m.reply(`Total Block : ${anu.length}\n` + anu.map(v => '• ' + v.replace(/@.+/, '')).join`\n`)
			}
			break
			case 'openblokir': case 'unblokir': case 'openblock': case 'unblock': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text && !m.quoted) {
					m.reply(`Contoh: ${prefix + command} 62xxx`)
				} else {
					const numbersOnly = m.isGroup ? (text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender) : m.chat
					await seyo.updateBlockStatus(numbersOnly, 'unblock').then((a) => m.reply(mess.done)).catch((err) => m.reply('Gagal!'))
				}
			}
			break
			case 'adduang': case 'addmoney': {
				if (!isCreator) return m.reply(mess.owner)
				if (!args[0] || !args[1]) return m.reply(`Kirim/tag Nomernya!\nExample:\n${prefix + command} 62xxx 10`)
				const nmrnya = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				const onWa = await seyo.onWhatsApp(nmrnya)
				if (!onWa.length > 0) return m.reply('Nomer Tersebut Tidak Terdaftar Di Whatsapp!')
				if (db.users[nmrnya] && db.users[nmrnya].uang) {
					addUang(args[1], nmrnya, db)
					m.reply('Sukses Add Uang')
				} else {
					m.reply('User tidak terdaftar di database!')
				}
			}
			break
			case 'addlimit': {
				if (!isCreator) return m.reply(mess.owner)
				if (!args[0] || !args[1]) return m.reply(`Kirim/tag Nomernya!\nExample:\n${prefix + command} 62xxx 10`)
				const nmrnya = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				const onWa = await seyo.onWhatsApp(nmrnya)
				if (!onWa.length > 0) return m.reply('Nomer Tersebut Tidak Terdaftar Di Whatsapp!')
				if (db.users[nmrnya] && db.users[nmrnya].limit) {
					addLimit(args[1], nmrnya, db)
					m.reply('Sukses Add limit')
				} else {
					m.reply('User tidak terdaftar di database!')
				}
			}
			break
			case 'listpc': {
				if (!isCreator) return m.reply(mess.owner)
				let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
				let teks = `● *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
				if (anu.length === 0) return m.reply(teks)
				for (let i of anu) {
					if (store.messages[i] && store.messages[i].array && store.messages[i].array[0]) {
						let nama = store.messages[i].array[0].pushName
						teks += `${setv} *Nama :* ${nama}\n${setv} *User :* @${i.split('@')[0]}\n${setv} *Chat :* https://wa.me/${i.split('@')[0]}\n\n=====================\n\n`
					}
				}
				await seyo.sendTextMentions(m.chat, teks, m)
			}
			break
			case 'listgc': {
				if (!isCreator) return m.reply(mess.owner)
				let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
				let teks = `● *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
				if (anu.length === 0) return m.reply(teks)
				for (let i of anu) {
					let metadata = store.groupMetadata[i] || await seyo.groupMetadata(i)
					teks += `${setv} *Nama :* ${metadata.subject}\n${setv} *Admin :* ${metadata.owner ? `@${metadata.owner.split('@')[0]}` : '-' }\n${setv} *ID :* ${metadata.id}\n${setv} *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n${setv} *Member :* ${metadata.participants.length}\n\n=====================\n\n`
				}
				await seyo.sendTextMentions(m.chat, teks, m)
			}
			break
			case 'creategc': case 'buatgc': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text) return m.reply(`Example:\n${prefix + command} *Nama Gc*`)
				let group = await seyo.groupCreate(q, [m.sender])
				let res = await seyo.groupInviteCode(group.id)
				await seyo.sendMessage(m.chat, { text: `*Link Group :* *https://chat.whatsapp.com/${res}*\n\n*Nama Group :* *${q}*`, detectLink: true }, { quoted: m });
				await seyo.groupParticipantsUpdate(group.id, [m.sender], 'promote')
				await seyo.sendMessage(group.id, { text: 'Done' })
			}
			break
			case 'addpr': case 'addprem': case 'addpremium': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text) return m.reply(`Example:\n${prefix + command} @tag|waktu\n${prefix + command} @${m.sender.split('@')[0]}|30d\n_d = day_`)
				let [teks1, teks2] = text.split`|`
				const nmrnya = teks1.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				const onWa = await seyo.onWhatsApp(nmrnya)
				if (!onWa.length > 0) return m.reply('Nomer Tersebut Tidak Terdaftar Di Whatsapp!')
				if (teks2) {
					if (!db.users[nmrnya] && !db.users[nmrnya].limit) return m.reply('Nomer tidak terdaftar di BOT !')
					prem.addPremiumUser(nmrnya, teks2, premium);
					m.reply(`Sukses ${command} @${nmrnya.split('@')[0]} Selama ${teks2}`)
					db.users[nmrnya].limit += db.users[nmrnya].vip ? limit.vip : limit.premium
					db.users[nmrnya].uang += db.users[nmrnya].vip ? uang.vip : uang.premium
				} else {
					m.reply(`Masukkan waktunya!\Example:\n${prefix + command} @tag|waktu\n${prefix + command} @${m.sender.split('@')[0]}|30d\n_d = day_`)
				}
			}
			break
			case 'delpr': case 'delprem': case 'delpremium': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text) return m.reply(`Example:\n${prefix + command} @tag`)
				const nmrnya = text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				if (!db.users[nmrnya] && !db.users[nmrnya].limit) return m.reply('Nomer tidak terdaftar di BOT !')
				if (prem.checkPremiumUser(nmrnya, premium)) {
					premium.splice(prem.getPremiumPosition(nmrnya, premium), 1);
					fs.writeFileSync('./database/premium.json', JSON.stringify(premium));
					m.reply(`Sukses ${command} @${nmrnya.split('@')[0]}`)
					db.users[nmrnya].limit += db.users[nmrnya].vip ? limit.vip : limit.free
					db.users[nmrnya].uang += db.users[nmrnya].vip ? uang.vip : uang.free
				} else {
					m.reply(`User @${nmrnya.split('@')[0]} Bukan Premium❗`)
				}
			}
			break
			case 'listpr': case 'listprem': case 'listpremium': {
				if (!isCreator) return m.reply(mess.owner)
				let txt = `*------「 LIST PREMIUM 」------*\n\n`
				for (let userprem of premium) {
					txt += `➸ *Nomer*: @${userprem.id.split('@')[0]}\n➸ *Limit*: ${db.users[userprem.id].limit}\n➸ *Uang*: ${db.users[userprem.id].uang.toLocaleString('id-ID')}\n➸ *Expired*: ${formatDate(userprem.expired)}\n\n`
				}
				m.reply(txt)
			}
			break
			case 'addcase': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text && !text.startsWith('case')) return m.reply('Masukkan Casenya!')
				fs.readFile('seyo.js', 'utf8', (err, data) => {
					if (err) {
						console.error('Terjadi kesalahan saat membaca file:', err);
						return;
					}
					const posisi = data.indexOf("case '19rujxl1e':");
					if (posisi !== -1) {
						const codeBaru = data.slice(0, posisi) + '\n' + `${text}` + '\n' + data.slice(posisi);
						fs.writeFile('seyo.js', codeBaru, 'utf8', (err) => {
							if (err) {
								m.reply('Terjadi kesalahan saat menulis file: ', err);
							} else {
								m.reply('Case berhasil ditambahkan');
							}
						});
					} else {
						m.reply('Gagal Menambahkan case!');
					}
				});
			}
			break
			case 'getcase': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text) return m.reply('Masukkan Nama Casenya!')
				const getCase = (cases) => {
					return "case"+`'${cases}'`+fs.readFileSync("seyo.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
				}
				m.reply(`${getCase(text)}`)
			}
			break
			case 'delcase': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text) return m.reply('Masukkan Nama Casenya!')
				fs.readFile('seyo.js', 'utf8', (err, data) => {
					if (err) {
						console.error('Terjadi kesalahan saat membaca file:', err);
						return;
					}
					const regex = new RegExp(`case\\s+'${text.toLowerCase()}':[\\s\\S]*?break`, 'g');
					const modifiedData = data.replace(regex, '');
					fs.writeFile('seyo.js', modifiedData, 'utf8', (err) => {
						if (err) {
							m.reply('Terjadi kesalahan saat menulis file: ', err);
						} else {
							m.reply('Case berhasil dihapus dari file');
						}
					});
				});
			}
			break
			case 'getsession': {
				if (!isCreator) return m.reply(mess.owner)
				await seyo.sendMessage(m.chat, {
					document: fs.readFileSync('./sekayeoo/creds.json'),
					mimetype: 'application/json',
					fileName: 'creds.json'
				}, { quoted: m });
			}
			break
			case 'deletesession': case 'delsession': {
				if (!isCreator) return m.reply(mess.owner)
				fs.readdir('./sekayeoo', async function (err, files) {
					if (err) {
						console.log('Unable to scan directory: ' + err);
						return m.reply('Unable to scan directory: ' + err);
					}
					let filteredArray = await files.filter(item => item.startsWith('pre-key') || item.startsWith('sender-key') || item.startsWith('session-'));
					let teks = `Terdeteksi ${filteredArray.length} Session file\n\n`
					if(filteredArray.length == 0) return m.reply(teks);
					filteredArray.map(function(e, i) {
						teks += (i+1)+`. ${e}\n`
					})
					if (text && text == 'true') {
						let { key } = await m.reply('Menghapus Session File..')
						await filteredArray.forEach(function (file) {
							fs.unlinkSync('./sekayeoo/' + file)
						});
						sleep(2000)
						m.reply('Berhasil Menghapus Semua Sampah Session', { edit: key })
					} else m.reply(teks + `\nKetik _${prefix + command} true_\nUntuk Menghapus`)
				});
			}
			break
			case 'deletesampah': case 'delsampah': {
				if (!isCreator) return m.reply(mess.owner)
				fs.readdir('./database/sampah', async function (err, files) {
					if (err) {
						console.log('Unable to scan directory: ' + err);
						return m.reply('Unable to scan directory: ' + err);
					}
					let filteredArray = await files.filter(item => item.endsWith('gif') || item.endsWith('png') || item.endsWith('mp3')  || item.endsWith('mp4') || item.endsWith('jpg') ||item.endsWith('webp') ||item.endsWith('webm') || item.endsWith('opus') || item.endsWith('jpeg'));
					let teks = `Terdeteksi ${filteredArray.length} Sampah file\n\n`
					if(filteredArray.length == 0) return m.reply(teks);
					filteredArray.map(function(e, i) {
						teks += (i+1)+`. ${e}\n`
					})
					if (text && text == 'true') {
						let { key } = await m.reply('Menghapus Sampah File..')
						await filteredArray.forEach(function (file) {
							fs.unlinkSync('./database/sampah/' + file)
						});
						sleep(2000)
						m.reply('Berhasil Menghapus Semua Sampah', { edit: key })
					} else m.reply(teks + `\nKetik _${prefix + command} true_\nUntuk Menghapus`)
				});
			}
			break
			case 'promote': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				if (!text && !m.quoted) {
					m.reply(`Contoh: ${prefix + command} 62xxx`)
				} else {
					const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender
					await seyo.groupParticipantsUpdate(m.chat, [numbersOnly], 'promote').catch((err) => m.reply('Gagal!'))
				}
			}
			break
			case 'demote': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				if (!text && !m.quoted) {
					m.reply(`Contoh: ${prefix + command} 62xxx`)
				} else {
					const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender
					await seyo.groupParticipantsUpdate(m.chat, [numbersOnly], 'demote').catch((err) => m.reply('Gagal!'))
				}
			}
			break
			case 'delete': case 'del': case 'd': {
				if (!m.quoted) return m.reply('Reply pesan yang mau di delete')
				await seyo.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: m.isBotAdmin ? false : true, id: m.quoted.id, participant: m.quoted.sender }})
			}
			break
			// Bot Menu
			case 'owner': {
				await seyo.sendContact(m.chat, owner, m);
			}
			break
			case 'profile': case 'cek': {
				const user = Object.keys(db.users)
				const infoUser = db.users[m.sender]
				await m.reply(`*👤Profile @${m.sender.split('@')[0]}* :\n🐋User Bot : ${user.includes(m.sender) ? 'True' : 'False'}\n🔥User : ${isVip ? 'VIP' : isPremium ? 'PREMIUM' : 'FREE'}\n🎫Limit : ${infoUser.limit}\n💰Uang : ${infoUser ? infoUser.uang.toLocaleString('id-ID') : '0'}`)
			}
			break
			// Tools Menu
			case 'fetch': case 'get': {
				if (!/^https?:\/\//.test(text)) return m.reply('Awali dengan http:// atau https://');
				const { data } = await axios.get('https://api.ipify.org?format=json')
				try {
					const res = await axios.get(isUrl(text) ? isUrl(text)[0] : text)
					if (!/json|html|plain/.test(res.headers['content-type'])) {
						await m.reply(text)
					} else {
						m.reply(util.format(res.data).replace(new RegExp(data.ip.replace(/\./g, '\\.'), 'g'), 'xxx-xxx-xxx-xxx'))
					}
				} catch (e) {
					m.reply(util.format(e).replace(new RegExp(data.ip.replace(/\./g, '\\.'), 'g'), 'xxx-xxx-xxx-xxx'))
				}
			}
			break
			case 'toaud': case 'toaudio': {
				if (!/video|audio/.test(mime)) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
				m.reply(mess.wait)
				let media = await (m.quoted ? m.quoted.download() : m.download())
				let audio = await toAudio(media, 'mp4')
				await seyo.sendMessage(m.chat, { audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
			}
			break
			case 'tomp3': {
				if (!/video|audio/.test(mime)) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
				m.reply(mess.wait)
				let media = await (m.quoted ? m.quoted.download() : m.download())
				let audio = await toAudio(media, 'mp4')
				await seyo.sendMessage(m.chat, { document: audio, mimetype: 'audio/mpeg', fileName: `Converter sekayeoo_ yatta.mp3`}, { quoted : m })
			}
			break
			case 'tovn': case 'toptt': case 'tovoice': {
				if (!/video|audio/.test(mime)) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
				m.reply(mess.wait)
				let media = await (m.quoted ? m.quoted.download() : m.download())
				let audio = await toPTT(media, 'mp4')
				await seyo.sendMessage(m.chat, { audio: audio, mimetype: 'audio/ogg; codecs=opus', ptt: true }, { quoted: m })
			}
			break
			case 'togif': {
				if (!/webp|video/.test(mime)) return m.reply(`Reply Video/Stiker dengan caption *${prefix + command}*`)
				m.reply(mess.wait)
				let media = await seyo.downloadAndSaveMediaMessage(qmsg)
				let ran = `./database/sampah/${getRandom('.gif')}`;
				exec(`convert ${media} ${ran}`, (err) => {
					fs.unlinkSync(media)
					if (err) return m.reply('Gagal❗')
					let buffer = fs.readFileSync(ran)
					seyo.sendMessage(m.chat, { video: buffer, gifPlayback: true }, { quoted: m })
					fs.unlinkSync(ran)
				})
			}
			break
			case 'toimage': case 'toimg': {
				if (!/webp|video/.test(mime)) return m.reply(`Reply Video/Stiker dengan caption *${prefix + command}*`)
				m.reply(mess.wait)
				let media = await seyo.downloadAndSaveMediaMessage(qmsg)
				let ran = `./database/sampah/${getRandom('.png')}`;
				exec(`convert ${media}[0] ${ran}`, (err) => {
					fs.unlinkSync(media)
					if (err) return m.reply('Gagal❗')
					let buffer = fs.readFileSync(ran)
					seyo.sendMessage(m.chat, { image: buffer }, { quoted: m })
					fs.unlinkSync(ran)
				})
			}
			break
			case 'toptv': {
				if (!/video/.test(mime)) return m.reply(`Kirim/Reply Video Yang Ingin Dijadikan PTV Message Dengan Caption ${prefix + command}`)
				if ((m.quoted ? m.quoted.type : m.type) === 'videoMessage') {
					const anu = await (m.quoted ? m.quoted.download() : m.download())
					const msg = await generateWAMessageContent({ video: anu }, { upload: seyo.waUploadToServer })
					await seyo.relayMessage(m.chat, { ptvMessage: msg.videoMessage }, {})
				} else {
					m.reply('Reply Video Yang Mau Di Ubah Ke PTV Message!')
				}
			}
			break
			case 'tourl': {
				try {
					let { fileIO, TelegraPh } = require('./lib/uploader')
					if (/jpg|jpeg|png/.test(mime)) {
						m.reply(mess.wait)
						let media = await (m.quoted ? m.quoted.download() : m.download())
						let anu = await TelegraPh(media)
						m.reply('Url : ' + anu)
					} else if (/webp|video|sticker|audio/.test(mime)) {
						m.reply(mess.wait)
						let media = await (m.quoted ? m.quoted.download() : m.download())
						let anu = await UguuSe(media)
						m.reply('Url : ' + anu.url)
					} else {
						m.reply('Send Media yg ingin di Upload!')
					}
				} catch (e) {
					m.reply('Server Uploader sedang offline!')
				}
			}
			break
			case 'texttospech': case 'tts': case 'tospech': {
				if (!text) return m.reply('Mana text yg mau diubah menjadi audio?')
				let { tts } = require('./lib/tts')
				let anu = await tts(text)
				seyo.sendMessage(m.chat, { audio: anu, ptt: true, mimetype: 'audio/mpeg' }, { quoted: m })
			}
			break
			case 'toqr': case 'qr': {
				if (!text) return m.reply(`Ubah Text ke Qr dengan *${prefix + command}* textnya`)
				m.reply(mess.wait)
				await seyo.sendMessage(m.chat, { image: { url: 'https://api.qrserver.com/v1/create-qr-code/?size=256x256&data=' + text }, caption: 'Nih Bro' }, { quoted: m })
			}
			break
			case 'tohd': case 'remini': case 'hd': {
				if (/image/.test(mime)) {
					const { remini } = require('./lib/remini')
					let media = await (m.quoted ? m.quoted.download() : m.download())
					remini(media, 'enhance').then(a => {
						seyo.sendMessage(m.chat, { image: a, caption: 'Done' }, { quoted: m });
					});
				} else {
					m.reply(`Kirim/Reply Gambar dengan format\nExample: ${prefix + command}`)
				}
			}
			break
			case 'ssweb': {
				if (!text) return m.reply(`Example: ${prefix + command} https://www.youtube.com/@sekayeoo_`)
				try {
					if (!text.startsWith('http')) {
						let buf = 'https://image.thum.io/get/width/1900/crop/1000/fullpage/https://' + q;
						await seyo.sendMessage(m.chat, { image: { url: buf }, caption: 'Done' }, { quoted: m })
					} else {
						let buf = 'https://image.thum.io/get/width/1900/crop/1000/fullpage/' + q;
						await seyo.sendMessage(m.chat, { image: { url: buf }, caption: 'Done' }, { quoted: m })
					}
				} catch (e) {
					m.reply('Server SS web Sedang Offline!')
				}
			}
			break
			case 'sticker': case 'stiker': case 's': case 'stickergif': case 'stikergif': case 'sgif': {
				if (!/image|video|sticker/.test(quoted.type)) return m.reply(`Kirim/reply gambar/video/gif dengan caption ${prefix + command}\nDurasi Image/Video/Gif 1-9 Detik`)
				let media = await (m.quoted ? m.quoted.download() : m.download())
				if (/image|webp/.test(mime)) {
					m.reply(mess.wait)
					if (text == 'meta') {
						await seyo.sendAsSticker(m.chat, media, m, { packname: packname, author: author, isAvatar: 1 })
					} else {
						await seyo.sendAsSticker(m.chat, media, m, { packname: packname, author: author })
					}
				} else if (/video/.test(mime)) {
					if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
					m.reply(mess.wait)
					await seyo.sendAsSticker(m.chat, media, m, { packname: packname, author: author })
				} else {
					m.reply(`Kirim/reply gambar/video/gif dengan caption ${prefix + command}\nDurasi Image/Video/Gif 1-9 Detik`)
				}
			}
			break
			case 'stickerwm': case 'swm': case 'curi': case 'colong': case 'take': case 'stickergifwm': case 'sgifwm': {
				if (!/image|video|sticker/.test(quoted.type)) return m.reply(`Kirim/reply gambar/video/gif dengan caption ${prefix + command}\nDurasi Image/Video/Gif 1-9 Detik`)
				let media = await (m.quoted ? m.quoted.download() : m.download())
				let teks1 = text.split`|`[0] ? text.split`|`[0] : ' '
				let teks2 = text.split`|`[1] ? text.split`|`[1] : ' '
				if (/image|webp/.test(mime)) {
					m.reply(mess.wait)
					if (text == 'meta') {
						await seyo.sendAsSticker(m.chat, media, m, { packname: teks1, author: teks2, isAvatar: 1 })
					} else {
						await seyo.sendAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
					}
				} else if (/video/.test(mime)) {
					if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
					m.reply(mess.wait)
					await seyo.sendAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
				} else {
					m.reply(`Kirim/reply gambar/video/gif dengan caption ${prefix + command}\nDurasi Video/Gif 1-9 Detik`)
				}
			}
			break
			// Downloader Menu
			case 'ytmp3': case 'ytaudio': case 'ytplayaudio': {
				if (!text) return m.reply(`Example: ${prefix + command} url_youtube`)
				if (!text.includes('youtu')) return m.reply('Url Tidak Mengandung Result Dari Youtube!')
				m.reply(mess.wait)
				try {
					const hasil = await ytMp3(text);
					await seyo.sendMessage(m.chat, {
						audio: { url: hasil.result },
						mimetype: 'audio/mpeg',
						contextInfo: {
							externalAdReply: {
								title: hasil.title,
								body: hasil.channel,
								previewType: 'PHOTO',
								thumbnailUrl: hasil.thumb,
								mediaType: 1,
								renderLargerThumbnail: true,
								sourceUrl: text
							}
						}
					}, { quoted: m });
				} catch (e) {
					try {
						const anu = new Ytdl()
						const hasil = await anu.play(text);
						const hasil_url = Object.values(hasil.audio).find(v => v.size === '128kbps')?.url || Object.values(hasil.audio)[0]?.url
						await seyo.sendMessage(m.chat, { audio: { url: hasil_url }, mimetype: 'audio/mpeg' }, { quoted: m });
					} catch (e) {
						try {
							const hasil = await allDl(text, { isAudioOnly: true })
							await seyo.sendMessage(m.chat, { audio: { url: hasil.url }, mimetype: 'audio/mpeg' }, { quoted: m });
						} catch (e) {
							m.reply('Gagal Mendownload Audio!')
						}
					}
				}
			}
			break
			case 'ytmp4': case 'ytvideo': case 'ytplayvideo': {
				if (!text) return m.reply(`Example: ${prefix + command} url_youtube`)
				if (!text.includes('youtu')) return m.reply('Url Tidak Mengandung Result Dari Youtube!')
				m.reply(mess.wait)
				try {
					const hasil = await ytMp4(text);
					await seyo.sendMessage(m.chat, { video: { url: hasil.result }, caption: `*📍Title:* ${hasil.title}\n*✏Description:* ${hasil.desc ? hasil.desc : ''}\n*🚀Channel:* ${hasil.channel}\n*🗓Upload at:* ${hasil.uploadDate}` }, { quoted: m });
				} catch (e) {
					try {
						const anu = new Ytdl()
						const hasil = await anu.play(text);
						const hasil_url = Object.values(hasil.video).find(v => v.size === 'auto')?.url || Object.values(hasil.video)[0]?.url
						await seyo.sendMessage(m.chat, { video: { url: hasil_url }}, { quoted: m });
					} catch (e) {
						try {
							const hasil = await allDl(text)
							await seyo.sendMessage(m.chat, { video: { url: hasil.url }}, { quoted: m });
						} catch (e) {
							m.reply('Gagal Mendownload Video!')
						}
					}
				}
			}
			break
			case 'ig': case 'instagram': case 'instadl': case 'igdown': case 'igdl': {
				if (!text) return m.reply(`Example: ${prefix + command} url_instagram`)
				if (!text.includes('instagram.com')) return m.reply('Url Tidak Mengandung Result Dari Instagram!')
				try {
					const hasil = await instaDownload(text);
					if(hasil.length < 1) return m.reply('Postingan Tidak Tersedia atau Privat!')
					m.reply(mess.wait)
					for (let i = 0; i < hasil.length; i++) {
						await seyo.sendFileUrl(m.chat, hasil[i].download, 'Done', m)
					}
				} catch (e) {
					m.reply('Postingan Tidak Tersedia atau Privat!')
				}
			}
			break
			case 'igstory': case 'instagramstory': case 'instastory': case 'storyig': {
				if (!text) return m.reply(`Example: ${prefix + command} usernamenya`)
				try {
					const hasil = await instaStory(text);
					m.reply(mess.wait)
					for (let i = 0; i < hasil.results.length; i++) {
						await seyo.sendFileUrl(m.chat, hasil.results[i].url, 'Done', m)
					}
				} catch (e) {
					m.reply('Username tidak ditemukan atau Privat!');
				}
			}
			break
			case 'tiktok': case 'tiktokdown': case 'ttdown': case 'ttdl': case 'tt': case 'ttmp4': case 'ttvideo': case 'tiktokmp4': case 'tiktokvideo': {
				if (!text) return m.reply(`Example: ${prefix + command} url_tiktok`)
				if (!text.includes('tiktok.com')) return m.reply('Url Tidak Mengandung Result Dari Tiktok!')
				try {
					const hasil = await tiktokDl(text);
					m.reply(mess.wait)
					if (hasil && hasil.size_nowm) {
						await seyo.sendFileUrl(m.chat, hasil.data[1].url, `*📍Title:* ${hasil.title}\n*⏳Duration:* ${hasil.duration}\n*🎃Author:* ${hasil.author.nickname} (@${hasil.author.fullname})`, m)
					} else {
						for (let i = 0; i < hasil.data.length; i++) {
							await seyo.sendFileUrl(m.chat, hasil.data[i].url, `*🚀Image:* ${i+1}`, m)
						}
					}
				} catch (e) {
					m.reply('Gagal/Url tidak valid!')
				}
			}
			break
			case 'ttmp3': case 'tiktokmp3': case 'ttaudio': case 'tiktokaudio': {
				if (!text) return m.reply(`Example: ${prefix + command} url_tiktok`)
				if (!text.includes('tiktok.com')) return m.reply('Url Tidak Mengandung Result Dari Tiktok!')
				try {
					const hasil = await tiktokDl(text);
					m.reply(mess.wait)
					await seyo.sendMessage(m.chat, {
						audio: { url: hasil.music_info.url },
						mimetype: 'audio/mpeg',
						contextInfo: {
							externalAdReply: {
								title: 'TikTok • ' + hasil.author.nickname,
								body: hasil.stats.likes + ' suka, ' + hasil.stats.comment + ' komentar. ' + hasil.title,
								previewType: 'PHOTO',
								thumbnailUrl: hasil.cover,
								mediaType: 1,
								renderLargerThumbnail: true,
								sourceUrl: text
							}
						}
					}, { quoted: m });
				} catch (e) {
					m.reply('Gagal/Url tidak valid!')
				}
			}
			break
			case 'fb': case 'fbdl': case 'fbdown': case 'facebook': case 'facebookdl': case 'facebookdown': case 'fbdownload': case 'fbmp4': case 'fbvideo': {
				if (!text) return m.reply(`Example: ${prefix + command} url_facebook`)
				if (!text.includes('facebook.com')) return m.reply('Url Tidak Mengandung Result Dari Facebook!')
				try {
					const hasil = await facebookDl(text);
					if (hasil.results.length < 1) {
						m.reply('Video Tidak ditemukan!')
					} else {
						m.reply(mess.wait)
						await seyo.sendFileUrl(m.chat, hasil.results[0].url, `*🎐Title:* ${hasil.caption}`, m);
					}
				} catch (e) {
					m.reply('Server downloader facebook sedang offline!')
				}
			}
			break
			case 'mediafire': {
				if (!text) return m.reply(`Example: ${prefix + command} https://www.mediafire.com/file/xxxxxxxxx/xxxxx.zip/file`)
				if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return m.reply('Url Invalid!')
				try {
					const anu = await mediafireDl(text)
					await seyo.sendMessage(m.chat, { document: { url: anu[0].link }, caption: `*MEDIAFIRE DOWNLOADER*\n\n*${setv} Name* : ${anu[0].name}\n*${setv} Size* : ${anu[0].size}\n*${setv} Type* : ${anu[0].type}\n*${setv} Link* : ${anu[0].link}`, fileName: anu[0].name, mimetype: anu[0].type }, { quoted: m })
				} catch (e) {
					m.reply('Server download sedang offline!')
				}
			}
			break		
			// Menu
			case 'allmenu': case 'menu': {
				let profile
				try {
					profile = await seyo.profilePictureUrl(m.sender, 'image');
				} catch (e) {
					profile = fake.anonim
				}
				const menunya = `
╭──❍「 *USER INFO* 」❍
├ *Nama* : ${m.pushName ? m.pushName : 'Tanpa Nama'}
├ *Id* : @${m.sender.split('@')[0]}
├ *User* : ${isVip ? 'VIP' : isPremium ? 'PREMIUM' : 'FREE'}
├ *Limit* : ${isVip ? 'VIP' : db.users[m.sender].limit }
├ *Uang* : ${db.users[m.sender] ? db.users[m.sender].uang.toLocaleString('id-ID') : '0'}
╰─┬────❍
╭─┴─❍「 *BOT INFO* 」❍
├ *Nama Bot* : ${botname}
├ *Powered* : @${'0@s.whatsapp.net'.split('@')[0]}
├ *Owner* : @${owner[0].split('@')[0]}
├ *Mode* : ${seyo.public ? 'Public' : 'Self'}
├ *Prefix* :${db.set[botNumber].multiprefix ? '「 MULTI-PREFIX 」' : ' *'+prefix+'*' }
╰─┬────❍
╭─┴─❍「 *ABOUT* 」❍
├ *Tanggal* : ${tanggal}
├ *Hari* : ${hari}
├ *Jam* : ${jam} WIB
╰──────❍
╭──❍「 *GROUP* 」❍
│${setv} ${prefix}promote (@tag/62xxx)
│${setv} ${prefix}demote (@tag/62xxx)
╰─┬────❍
╭─┴❍「 *DOWNLOAD* 」❍
│${setv} ${prefix}ytmp3 (url)
│${setv} ${prefix}ytmp4 (url)
│${setv} ${prefix}instagram (url)
│${setv} ${prefix}tiktok (url)
│${setv} ${prefix}facebook (url)
│${setv} ${prefix}mediafire (url)
╰─┬────❍
╭─┴❍「 *TOOLS* 」❍
│${setv} ${prefix}get (url)
│${setv} ${prefix}hd (reply chat)
│${setv} ${prefix}toaudio (reply chat)
│${setv} ${prefix}tomp3 (reply chat)
│${setv} ${prefix}tovn (reply chat)
│${setv} ${prefix}toimage (reply chat)
│${setv} ${prefix}toptv (reply chat)
│${setv} ${prefix}tourl (reply chat)
│${setv} ${prefix}tts (text)
│${setv} ${prefix}toqr (text)
│${setv} ${prefix}ssweb (url)
│${setv} ${prefix}sticker (send/reply img)
│${setv} ${prefix}colong (reply sticker)
╰─┬────❍
╭─┴❍「 *OWNER* 」❍
│${setv} ${prefix}mode (public / self)
│${setv} ${prefix}setbio
│${setv} ${prefix}setppbot
│${setv} ${prefix}join
│${setv} ${prefix}leave
│${setv} ${prefix}block
│${setv} ${prefix}listblock
│${setv} ${prefix}openblock
│${setv} ${prefix}listpc
│${setv} ${prefix}listgc
│${setv} ${prefix}creategc
│${setv} ${prefix}addprem
│${setv} ${prefix}delprem
│${setv} ${prefix}listprem
│${setv} ${prefix}addlimit
│${setv} ${prefix}addmoney
│${setv} ${prefix}bot --settings
│${setv} ${prefix}bot settings
│${setv} ${prefix}getsession
│${setv} ${prefix}delsession
│${setv} ${prefix}delsampah
│${setv} $
│${setv} >
│${setv} <
╰──────❍`
				await seyo.sendMessage(m.chat, {
					document: fake.docs,
					fileName: ucapanWaktu,
					mimetype: pickRandom(fake.listfakedocs),
					fileLength: '100000000000000',
					pageCount: '999',
					caption: menunya,
					contextInfo: {
						mentionedJid: [m.sender, '0@s.whatsapp.net', owner[0] + '@s.whatsapp.net'],
						forwardingScore: 10,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: my.ch,
							serverMessageId: null,
							newsletterName: 'Join For More Info'
						},
						externalAdReply: {
							title: author,
							body: packname,
							showAdAttribution: true,
							thumbnailUrl: profile,
							mediaType: 1,
							previewType: 0,
							renderLargerThumbnail: true,
							mediaUrl: my.gh,
							sourceUrl: my.gh,
						}
					}
				}, { quoted: m })
			}
			break

			default:
			if (budy.startsWith('<')) {
    if (!isCreator) return
    try {
        let evaled = await eval(`(async () => { ${budy.slice(2)} })()`)
        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
        await m.reply(evaled)
    } catch (err) {
        await m.reply(String(err))
    }
}

if (budy.startsWith('$')) {
    if (!isCreator) return
    if (!text) return
    exec(budy.slice(2), (err, stdout) => {
        if (err) return m.reply(`${err}`)
        if (stdout) return m.reply(stdout)
    });
      }
   }
} catch (err) {
		console.log(util.format(err));
		//m.reply('*❗ Internal server error️*');
		seyo.sendFromOwner(owner, 'Halo sayang, sepertinya ada yang error nih, jangan lupa diperbaiki ya\n\n*Log error:*\n\n' + util.format(err), m, { contextInfo: { isForwarded: true }})
	}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});