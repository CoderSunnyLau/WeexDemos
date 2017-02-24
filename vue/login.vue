<template>
    <ry-navpage
    dataRole="none"
    :height="navBarHeight"
    :title="title"
    backgroundColor="#F50"
    titleColor="white"
    leftItemTitle="More"
    leftItemColor="white"
    rightItemSrc="http://gtms02.alicdn.com/tps/i2/TB1ED7iMpXXXXXEXXXXWA_BHXXX-48-48.png"
    @naviBarLeftItemClick=""
    @naviBarRightItemClick="">
        <div class="login-wrap">
            <image class="main-pic" :src="mainPic"></image>
            <div class="login-cnt">
                <div class="input-item ii1">
                    <image class="login-pic" :src="idPic"></image>
                    <input class="id" type="tel" @change="phnChange" maxlength="11" placeholder="手机号码" :value="phoneNum" />
                </div>
                <div class="input-item ii2">
                    <image class="login-pic" :src="pswPic"></image>
                    <input class="id" type="password" @change="psdChange" placeholder="密码" />
                </div>
                <ry-btn value="登录" @click.native="testFunc"></ry-btn>
                <div class="reg"><text class="reg-text" v-on:click="register">立即注册</text></div>
            </div>
        </div>
    </ry-navpage>
</template>
<style>
.login-wrap{
    flex-direction:column;
    justify-content:flex-start;
    height: 1500px;
}
.login-cnt{
    width: 750px;
    height: 700px;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;
    padding-top: 100px;
    background-image: linear-gradient(to top,#FFF,#FF9600);
}
.main-pic{
    width: 750px;
    height: 342px;
}
.input-item{
    width: 650px;
    height: 100px;
    background-color: #FFF;
    align-items:center;
    justify-content:space-between;
    flex-direction:row;
}
.ii1{
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-width: 2px;
    border-bottom-color: #DDD;
}
.ii2{
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}
.id,.psd{
    width:550px;
    height: 100px;
}
.login-btn{
    width: 650px;
    height: 95px;
    background-color: #F00;
    margin-top: 50px;
    border-width: 0px;
    color: #FFF;
    border-radius: 10px;
}
.reg{
    width: 650px;
    margin-top: 20px;
    align-items:flex-end;
}
.reg-text{
    font-size: 40px;
    color: #F00;
}
.login-pic{
    width: 38px;
    height: 38px;
    margin-left: 25px;
    margin-right: 20px;
}
</style>
<script>
    var navigator = weex.requireModule('navigator');
    var modal = weex.requireModule('modal');
    var stream = weex.requireModule('stream');
    export default {
        data: {
            navBarHeight: 88,
            title: '账号登录',
            mainPic:'http://file.ry600.com/snapshot//files/af/afvnal1p3sa59q79/2017-02-06/c6raznymddkjy4wk.jpg',
            idPic: 'http://file.ry600.com/snapshot/vms/site/di/di70684438lrfavs/du9sks0f7yefy23z/image/user_bac1.png',
            pswPic: 'http://file.ry600.com/snapshot/vms/site/di/di70684438lrfavs/du9sks0f7yefy23z/image/pws_bac.png',
            httpUrl: 'http://58.248.28.209/jsonaction/websiteaction.action?action=VSRetail.getUser&orgTypeId=3&mobile=',
            phoneNum: '',
            psd: '',
            getUrl: '',
            success: '',
            userName:'',
            test:''
        },
        components:{
            ryBtn:require('./ry-btn.vue'),
            ryNavpage:require('./ry-navpage.vue')
        },
        methods: {
            click:function(){
                console.log(this)
            },
            getPhoneNum:function(){
                var url = this.$getConfig().bundleUrl;
                console.log("lllllllllllll" + ((url.split("?")[1]) == undefined));
                if(url.split("?")[1] == undefined){
                    this.phoneNum = "";
                }else{
                    var array = url.split("?")[1].split("=");
                    this.phoneNum = array[0] == "mobile" ? array[1] : ""; 
                }
            },
            phnChange: function(event){
                this.phoneNum = event.value;
            },
            psdChange: function(event){
                this.psd = event.value;
            },
            pop:function(){
                var me = this;
                var params = {
                    'animated':'false'
                }
                navigator.pop(params,function(){});
            },
            alertMsg:function(a){
                var msg = '';
                switch(a){
                    case 1: msg = '请输入11位数手机号';break;
                    case 2: msg = '请输入6~14位密码';break;
                    case 3: msg = '请再次输入密码';break;
                    case 4: msg = '两次输入的密码不一致';break;
                    case 5: msg = '登录成功';break;
                }
                modal.alert({
                    'message':msg,
                    'okTitle':'OK'
                },function(){});
            },
            home:function(){
                var url = this.$getConfig().bundleUrl;
                url = url.split('/').slice(0,-1).join('/')+'/home.js?info=';
                url = url + encodeURIComponent(this.phoneNum + "+" + this.psd);
                this.test = url;
                var params = {
                    'url': url,
                    'animated' : 'true',
                }
                navigator.push(params,function(){});
            },
            testFunc:function(){
                var url = this.$getConfig().bundleUrl;
                console.log(url);
                navigator.push({
                    'url':url,
                    'duration':'true'
                },function(){});
            },
            login: function(){
                console.log(this.title);
                var me = this;
                this.getUrl = this.httpUrl + this.phoneNum + "&password=" + this.psd;
                // var GET_URL_JSONP = 'http://58.248.28.209/jsonaction/websiteaction.action?action=VSRetail.getUser&orgTypeId=3&mobile=13640273085&password=12321';
                if(me.phoneNum.length < 11){
                    me.alertMsg(1);
                }else if(!me.psd){
                    me.alertMsg(2);
                }else{
                    stream.fetch({
                        method: 'GET',
                        url: this.getUrl,
                        type:'json'
                    },function(response) {
                        if(!response.ok){
                            me.getJsonpResult = "request failed";
                        }else{
                            me.getJsonpResult = JSON.stringify(response.data);
                            me.success = response.data.success;
                            if(me.success){
                                modal.toast({
                                    'message':'登录成功',
                                    'duration':'0.5'
                                });
                                me.home();

                                modal.alert({
                                    'message':me.test,
                                    'okTitle': 'OK'
                                },function(){});
                            }else{
                                modal.alert({
                                    'message':response.data.message,
                                    'okTitle': 'OK'
                                },function(){});
                            }
                        }
                    },function(response){
                        me.getJsonpResult = "bytes received:"+response.length;
                    });
                }
            },
            register:function(){
                var url = this.$getConfig().bundleUrl;
                url = url.split('/').slice(0,-1).join('/')+'/register.js';
                var params = {
                    'url': url,
                    'animated' : 'true',
                }
                navigator.push(params,function(){});
            }
        },
        created: function(){
            console.log("llllllll888888888888lllll------"+ this.navBarHeight);
            this.getPhoneNum();
            var env = weex.config.env;
            console.log(env);
            if(env.platform){
            if(env.platform == 'iOS'){
                var scale = env.scale;
                var deviceWidth = env.deviceWidth / scale;
                this.navBarHeight = 64.0 * 750.0 / deviceWidth;
                console.log("height:" + this.navBarHeight);
            }
        }
            console.log(env.platform == 'iOS');
        }
    }
</script>