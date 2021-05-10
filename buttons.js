module.exports = {
    buttonHeadMenu: {
        reply_markup: JSON.stringify({
            inline_keyboard: [ 
                [{text: 'Инструкция', callback_data:'/info'}],
                [{text: 'Добавить', callback_data:'/add'}],
                [{text: 'Поиск по параметрам', callback_data:'/search'}],
            ]
        })
    }

}
