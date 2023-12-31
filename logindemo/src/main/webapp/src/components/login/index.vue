<template>
    <div id="login">
        <div class="wrapper">
            <div class="input-wrap">
                <input type="text" placeholder="请输入账号" v-model="account">
            </div>
            <div class="input-wrap">
                <input type="password" placeholder="请输入密码"  v-model="password">
            </div>
            <!-- <div class="input-wrap">
                <input type="text" placeholder="请输入验证码">
            </div> -->
            <div class="button" @click="next" @touchstart="next">登录</div>
            <div class="regist">
                <div>还没有账号? 请 <router-link to="/regist">注册</router-link> </div>
                <div>忘记密码</div>
            </div>
            <div>{{ tips }}</div>
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
            tips: '',
            isShow: false
        }
    },
    methods: {
        next() {
            console.log(this.account)
            axios.post('/user/login', {
                userName: this.account,
                password: this.password
            })
                .then((response) =>{
                    console.log(response)
                    if(response.data && response.data.code == 1){
                        this.tips = "成功"
                    }else if(response.data && response.data.code == 0 && response.data.msg == '0011'){
                        this.tips = "密码错误"
                    }else{
                        this.tips = "该用户不存在"
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