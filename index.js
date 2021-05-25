const TelegtamApi = require('node-telegram-bot-api');
const {buttonHeadMenu}= require('./buttons');
const token = '1894532330:AAEFsduChANQlHY25YwpOJ4UYaxNT3eX2yQ';
const bot = new TelegtamApi(token, {polling:true});
const mongo = require('./db');







const start = async(client) =>  {

    const db = client.db("renti_bot");
    const collection = db.collection('users');


    bot.setMyCommands(
        [
            {command: '/start', description: 'Начальное приветствие'},
            {command: '/info', description: 'Инструкция'},
            {command: '/add', description: 'Добавить'},
            {command: '/search', description: 'Поиск по параметрам'},
            {command: '/menu', description: 'Меню'}
        ]
    )
    
    bot.on('message', async msg=>{
        const text = msg.text;
        const chatId = msg.chat.id;
        try {
            if(text === '/start'){
                try {

                } catch (e) {
                    console.log(e);
                }
                
                return bot.sendMessage(chatId, 'Добро пожаловать в телеграм бот по подбору и размещению объявлений об аренде транспорта',buttonHeadMenu);
            }
            if(text === '/menu'){
                return bot.sendMessage(chatId, 'Меню канала', buttonHeadMenu)
            }
            if(text==='/info'){
                try {
                } catch (e) {
                    bot.sendMessage('135988328', `Произошла ошибка ${chatId} ${err}`)
                    console.log(e);
                }
                
                return bot.sendMessage(chatId, `Информация дополняется ${user.chatId}`);
            }
            return bot.sendMessage(chatId, 'Я тебя не понимаю');
            
        } catch (e) {
            return bot.sendMessage('135988328', `Произошла ошибка ${e} ${chatId}`);
        }
        // bot.sendMessage(chatId,`Ты написал ${text}`);
        // console.log(msg);
    });

    bot.on('callback_query', async msg=>{
        const data = msg.data;
        const chatId = msg.message.chat.id;
        console.log(msg);
        bot.sendMessage(chatId, `Ты выбрал ${data}`)
        // return ;
    });
}


mongo.connect((err, client) => {
    if (err){
        console.log(err)
    }
    start(client);
    
});






// await mongo.connect(
//     function (err, client) {
//         if(err){
//             console.log(err);
//         }
//         const db = client.db("renti_bot");
//         const collection = db.collection('users');
//         let user = {chat: chatId, firstName: msg.chat.first_name, lastName:msg.chat.last_name };
//         collection.createIndex({chat: chatId},{"unique":true});
//         collection.insertOne(user, function (err, result) {
//             if(err){
//                 return console.log(err);
//             }
//             console.log(result.ops);
//             client.close;
//         })
//     }
// )