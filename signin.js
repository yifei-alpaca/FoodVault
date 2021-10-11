Vue.component('vue-recaptcha', VueRecaptcha)


Vue.component('vue_login_form', {
    template: `
    <form 
        class="border px-5 py-5 m-auto" 
        @submit.prevent = "mxSubmit"
        :class= "{form_val: formVal}"
    >
        <h1 style="font-size:30px;" class="mt-2"> Login to Food Vault</h1>
        <br>
        <label for ="user_input"><h5>Enter your Username</h5></label>
        <div class="form__field">
            <input 
            id="user_input"
            type="text"
            class="form__input" 
            v-model = "user"
            :class = "{empty: !user}"
            /><br>
            <small>Please fill in your username!</small>
        </div>
        <br>
        <label for = "pw"><h5>Enter your password</h5></label>
        <div class="form__field">
            <input
            id="pw"
            type="password"
            class="form__input"
            v-model = "pass"
            :class = "{empty: !pass}"
            /><br>
            <small>Please fill in your password!</small>
        </div>
        <br>
        <div
            :class="{recaptcha_fail: !recaptcha}"
        >
            <vue-recaptcha
                sitekey="6LfbTsMcAAAAAE1yuP37PSrBZaZiaEM5XJsugpNW"
                @verify = "verify"
            ></vue-recaptcha>
            <small>Please Check!</small>
        </div>

        <br>
        <button class="btn btn-outline-primary">Login</button>
    </form>
`,
    data() {
        return {
            user: null,
            pass: null,
            formVal: false,
            recaptcha: null
        }
    },
    methods: {
        verify(response){
            this.recaptcha = response
        },

        mxSubmit() {
            if( this.user && this.pass && this.recaptcha){
                console.log('Submit');
            }
            else{
                this.formVal = true
            }
        }
    }
})
var app = new Vue({
    el: '#app'
})