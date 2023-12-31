<template>
    <div id="regist">
        <div class="wrapper">
            <div class="input-wrap">
                <input type="text" placeholder="请输入账号" v-model="account">
            </div>
            <div class="input-wrap">
                <input type="password" placeholder="请输入密码" v-model="password">
            </div>
            <div class="input-wrap">
                <input type="password" placeholder="请再次输入密码" v-model="password2">
            </div>
            <!-- <div class="input-wrap">
                <input type="text" placeholder="请输入验证码">
            </div> -->
            <div class="button" @click="next" @touchstart="next">注册</div>
            <div class="result" v-show="isShow">
                <div class="tips">{{ tips }}</div>
                <router-link to="/">返回登录</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
axios.defaults.baseURL="http://127.0.0.1:8080";
export default {
    data() {
        return {
            account: '',
            password: '',
            password2: '',
            isShow: false,
            tips: '11'
        }
    },
    methods: {
        next() {
            console.log(this.account)
            axios.post('/user/regist', {
                userName: this.account,
                password: this.password
            })
                .then((response) =>{
                    console.log(1111)
                    console.log(response.data.code);
                    this.isShow = true
                    console.log(this.isShow)
                    if(response.data && response.data.code == 1){
                        this.tips = "注册成功"
                    }else if(response.data && response.data.code == 0 && response.data.msg == '0000'){
                        this.tips = "该用户已注册"
                    }else{
                        this.tips = "注册失败"
                    }
                })
                .catch((error) =>  {
                    console.log('0000')
                    console.log(error);
                });
        }
    },
}
</script>

<style lang="less" scoped>
@import './index.less';
</style>