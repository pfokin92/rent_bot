module.exports = {
    buttonHeadMenu: {
        reply_markup: JSON.stringify({
            inline_keyboard: [ 
                [{text: 'Инструкция', callback_data:'/info'}],
                [{text: 'Добавить объявлние', callback_data:'/add'}],
                [{text: 'Поиск по параметрам', callback_data:'/search'}],
                [{text: 'Мои объявления', callback_data:'/myads'}],
                [{text: 'Мои сохраненые объявления', callback_data:'/savedads'}],           
                [{text: 'Удалить объявлениe', callback_data:'/dropad'}],           
            ]
        })
    }

}
