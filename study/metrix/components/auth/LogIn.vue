<template>
    <div class="login-box">
        <div class="greetings">
            <h3>Welcome back!</h3>
            <p>Login to your account</p>
        </div>
        <ul class="form">
            <li class="input-box">
                <i class="icon-box mail-icon"></i>
                <input type="text" placeholder="Email Address">
            </li>
            <li class="password-box input-box">
                <i class="icon-box lock-icon"></i>
                <input :type="visible === false ? 'password' : 'text'" placeholder="Password">
                <button class="eye-off-icon" @click="PasswordType"></button>
            </li>
        </ul>
        <p class="lock-link">Recover Password</p>
        <p class="link-btn">
            <router-link to="/signup">Don’t have an account? <span>Sign Up</span></router-link>
        </p>          
    </div>
</template>

<script>
module.exports = {
    data() {
        return {
            visible : false
        }
    },
    // 로그인 페이지 이동시 nav active되는거 해제(임시)
    mounted() {
        this.$store.commit('isActiveDefault');
    },
    methods: {
        PasswordType(){
            this.visible = !this.visible
        }
    },
}
</script>