var productData = {
    namespaced: true,
    state: {
        newOrderItemList: [],
        total : 0,
        items: [{
            id: 1,
            name : 'iPhone 13',
            price : 590000,
            count : 1,    
            sum : 590000,
            src : 'iphone13'
        },{
            id: 2,
            name : 'iPhone 14',
            price : 730000,
            count : 1,    
            sum : 730000,
            src : 'iphone12'
        },{
            id: 3,
            name : 'iPhone 15',
            price : 780000,
            count : 1,    
            sum : 780000,
            src : 'iphone13'
        },{
            id: 4,
            name : 'iPhone 16',
            price : 820000,
            count : 1,    
            sum : 820000,
            src : 'iphone13'
        },{
            id: 5,
            name : 'iPhone 17',
            price : 900000,
            count : 1,    
            sum : 900000,
            src : 'iphone12'
        }],
        recentOrder: [{
            id: 1,
            name : 'iPhone 13',
            src : 'Rectangle4',
            price : 730000,
            count : 1,
            date : '12 Sept 2022',
            state : 'Pending',
            class : 'state-ty04'
        },{
            id: 2,
            name : 'iPhone 13',
            src : 'Rectangle3',
            price : 730000,
            count : 1,
            date : '12 Sept 2022',
            state : 'Completed',
            class : 'state-ty02'
        },{
            id: 3,
            name : 'iPhone 13',
            src : 'Rectangle4',
            price : 730000,
            count : 1,
            date : '12 Sept 2022',
            state : 'Pending',
            class : 'state-ty04'
        },{
            id: 4,
            name : 'iPhone 13',
            src : 'Rectangle3',
            price : 730000,
            count : 1,
            date : '12 Sept 2022',
            state : 'Completed',
            class : 'state-ty02'
        },{
            id: 5,
            name : 'iPhone 13',
            src : 'Rectangle3',
            price : 730000,
            count : 1,
            date : '12 Sept 2022',
            state : 'Completed',
            class : 'state-ty02'
        },{
            id: 6,
            name : 'iPhone 13',
            src : 'Rectangle3',
            price : 730000,
            count : 1,
            date : '12 Sept 2022',
            state : 'Completed',
            class : 'state-ty02'
        },{
            id: 7,
            name : 'iPhone 13',
            src : 'Rectangle4',
            price : 730000,
            count : 1,
            date : '12 Sept 2022',
            state : 'Pending',
            class : 'state-ty04'
        },{
            id: 8,
            name : 'iPhone 13',
            src : 'Rectangle4',
            price : 730000,
            count : 1,
            date : '12 Sept 2022',
            state : 'Pending',
            class : 'state-ty04'
        },]
    },
    mutations: {
        totalItems(state){
            state.total = 0
            for (let i = 0; i < state.newOrderItemList.length; i++) {
                state.total += state.newOrderItemList[i].sum;
            }
        },
        pushItem(state, payload){
            if(state.newOrderItemList.includes(payload) === false){
                state.newOrderItemList.push(payload);
                store.commit('productData/totalItems')
            }
        },
        deleItem(state, payload){
            for(let i = 0; i < state.newOrderItemList.length; i++) {
                if(state.newOrderItemList[i].id === payload) {
                    state.newOrderItemList[i].count = 1
                    state.newOrderItemList.splice(i, 1);
                    i--;
                }
            }
            store.commit('productData/totalItems')
        },
        countPlus(state, payload){
            for(let i = 0; i < state.newOrderItemList.length; i++) {
                if(state.newOrderItemList[i].id === payload) {
                    if(state.newOrderItemList[i].count < 10){
                        ++state.newOrderItemList[i].count
                        state.newOrderItemList[i].sum = state.newOrderItemList[i].price * state.newOrderItemList[i].count
                    }
                }
            }
            store.commit('productData/totalItems')
        },
        countMinus(state, payload){
            for(let i = 0; i < state.newOrderItemList.length; i++) {
                if(state.newOrderItemList[i].id === payload) {
                    if(state.newOrderItemList[i].count > 0){
                        --state.newOrderItemList[i].count
                        state.newOrderItemList[i].sum = state.newOrderItemList[i].price * state.newOrderItemList[i].count
                    }
                }
            }
            store.commit('productData/totalItems')
        },
    },
    getters: {
        newOrderItemList: function newOrderItemList(state) {
            return state.newOrderItemList;
        },
        total: function total(state) {
            return state.total;
        }
    },
}