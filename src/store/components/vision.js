export default {
    state: {
        // Вкл\Выкл режим адаптированный для слабовидящих
    isBadVision: false,
    //Параметры режима для слабовидящих
    bvParams: {
      bvFont: "medium", //Размер шрифта small, medium, large
      bvBackground: '#f5cdaa', //"blue-grey lighten-5", //Цвет фона white, black, blue accent-1, blue-grey lighten-5
      bvText: "black--text", //Цвет текста black--text, white--text
      bvColor: "black", //Цвет кнопок и пр. black, white
      bvImages: true //Вкл\Выкл изображения
      }
    },
    getters: {
        getBadVision: state => {return state.isBadVision}, //Геттер режима для слабовидящих
        getBvParams: state => {return state.bvParams} // Геттер параметров режима для слабовидящих
    },
    mutations: {
        setBadVision: (state, payload) => {state.isBadVision = payload}, // Мутация режима для слабовидящих
        setBvParams: (state, payload) => {state.bvParams[payload.param] = payload.value} // Мутация параметров режима для слабовидящих
    },
    actions: {
        setBadVision: (context, payload) => {context.commit('setBadVision', payload)}, // Действие для мутации режима для слабовидящих
        setBvParams: (context, payload) => {context.commit('setBvParams', payload)} // Действие для мутации параметров режима для слабовидящих
    }
}