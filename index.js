const TelegtamApi = require('node-telegram-bot-api');

const {buttonHeadMenu}= require('./buttons');

const token = '1894532330:AAEFsduChANQlHY25YwpOJ4UYaxNT3eX2yQ';

const bot = new TelegtamApi(token, {polling:true});



const start = () => {
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
        // bot.sendMessage(chatId,`Ты написал ${text}`);
        // console.log(msg);
        if(text === '/menu'){
            return bot.sendMessage(chatId, 'Меню канала', buttonHeadMenu)
        }
        if(text === '/start'){
           return bot.sendMessage(chatId, 'Добро пожаловать в телеграм бот по подбору и размещению объявлений об аренде транспорта',buttonHeadMenu);
        }
        if(text==='/info'){
           return bot.sendMessage(chatId, 'Информация дополняется');
        }
        return bot.sendMessage(chatId, 'Я тебя не понимаю');
    });

    bot.on('callback_query', async msg=>{
        const data = msg.data;
        const chatId = msg.message.chat.id;
        console.log(msg);
        bot.sendMessage(chatId, `Ты выбрал ${data}`)
        // return ;
    });
}


start();