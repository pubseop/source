<template>
    <div class="wrapper">
        <main-header></main-header>
        <router-view></router-view>
    </div>
</template>

<script>

import MainHeader from './components/MainHeader.vue';

export default {
    components: { 
        MainHeader
    },

    methods: {
    
    }
};
</script>