var store = new Vuex.Store({
    namespaced: true,
    modules: {
        articleData : articleData,
        chartData : chartData,
        navigationData : navigationData,
        breadCrumbData : breadCrumbData,
        tableData : tableData,
        productData : productData,
        selectData : selectData,
        userData : userData,
    },
    state: {
        isActive : false,
        modalActive : [],
        btnActive : [],
        mobileActive : false
    },
    mutations: {
        checkActive(state){
            function detectTabletDevice() {
                const minWidth = 1439
                return window.innerWidth >= minWidth
            }
            const isTablet = detectTabletDevice()
            if(isTablet){
                state.isActive = !state.isActive
            }
        },
        isActiveDefault(state){
            state.isActive = false
        },
        toggleModal(state, payload){
            if(state.modalActive.includes(payload)){ 
                for(let i = 0; i < state.modalActive.length; i++) {
                    if(state.modalActive[i] === payload) {
                        state.modalActive.splice(i, 1);
                        i--;
                        document.body.classList.remove('mobile-active')
                    }
                }
            }else{
                state.modalActive.push(payload);
                document.body.classList.add('mobile-active')
            }
        },
        toggleBtn(state, payload){
            if(state.btnActive.includes(payload)){
                for(let i = 0; i < state.btnActive.length; i++) {
                    if(state.btnActive[i] === payload) {
                        state.btnActive.splice(i, 1);
                        i--;
                    }
                }
            }else{
                state.btnActive.push(payload);
            }
        },
        mobileActive(state){
            state.mobileActive = !state.mobileActive
            document.body.classList.toggle('mobile-active')
        },
    },
    getters: {
        articleData: function articleData(state) {
            return state.articleData;
        },
        chartData: function chartData(state) {
            return state.chartData;
        },
        navigationData: function navigationData(state) {
            return state.navigationData;
        },
        breadCrumbData : function breadCrumbData(state) {
            return state.breadCrumbData;
        },
        tableData: function tableData(state) {
            return state.tableData;
        },
        productData: function productData(state) {
            return state.productData;
        },
        selectData : function selectData(state) {
            return state.selectData;
        },
        userData : function userData(state) {
            return state.userData;
        },
        isActive(state){
            return state.isActive
        },
        modalActive(state){
            return state.modalActive
        },
        btnActive(state){
            return state.btnActive
        }, 
        mobileActive(state){
            return state.mobileActive
        },
    },
});