
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index","pages/home/news/news","pages/home/psyc-counsel/psyc-counsel","pages/home/things-help/things-help","pages/home/school-things/school-things","pages/mine/minePages/set","pages/mine/minePages/uni_modules/uni-id-pages/pages/userinfo/deactivate/deactivate","pages/mine/minePages/uni_modules/uni-id-pages/pages/userinfo/userinfo","pages/mine/minePages/uni_modules/uni-id-pages/pages/userinfo/bind-mobile/bind-mobile","pages/mine/minePages/uni_modules/uni-id-pages/pages/userinfo/cropImage/cropImage","pages/mine/minePages/uni_modules/uni-id-pages/pages/login/login-withoutpwd","pages/mine/minePages/uni_modules/uni-id-pages/pages/login/login-withpwd","pages/mine/minePages/uni_modules/uni-id-pages/pages/login/login-smscode","pages/mine/minePages/uni_modules/uni-id-pages/pages/register/register","pages/mine/minePages/uni_modules/uni-id-pages/pages/register/register-by-email","pages/mine/minePages/uni_modules/uni-id-pages/pages/retrieve/retrieve","pages/mine/minePages/uni_modules/uni-id-pages/pages/retrieve/retrieve-by-email","pages/mine/minePages/uni_modules/uni-id-pages/pages/common/webview/webview","pages/mine/minePages/uni_modules/uni-id-pages/pages/userinfo/change_pwd/change_pwd","pages/mine/minePages/uni_modules/uni-id-pages/pages/register/register-admin","pages/mine/minePages/uni_modules/uni-id-pages/pages/userinfo/set-pwd/set-pwd"],"window":{"navigationStyle":"custom","navigationBarTextStyle":"black","navigationBarTitleText":"图鸟简约模板","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"darkmode":false,"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"兰讯","compilerVersion":"3.6.9","entryPagePath":"pages/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index","meta":{"isQuit":true},"window":{"bounce":"none"}},{"path":"/pages/home/news/news","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/home/psyc-counsel/psyc-counsel","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/home/things-help/things-help","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/home/school-things/school-things","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/mine/minePages/set","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/mine/minePages/uni_modules/uni-id-pages/pages/userinfo/deactivate/deactivate","meta":{},"window":{"navigationBarTitleText":"注销账号"}},{"path":"/pages/mine/minePages/uni_modules/uni-id-pages/pages/userinfo/userinfo","meta":{},"window":{"navigationBarTitleText":"个人资料"}},{"path":"/pages/mine/minePages/uni_modules/uni-id-pages/pages/userinfo/bind-mobile/bind-mobile","meta":{},"window":{"navigationBarTitleText":"绑定手机号码"}},{"path":"/pages/mine/minePages/uni_modules/uni-id-pages/pages/userinfo/cropImage/cropImage","meta":{},"window":{"navigationBarTitleText":""}},{"path":"/pages/mine/minePages/uni_modules/uni-id-pages/pages/login/login-withoutpwd","meta":{},"window":{"navigationBarTitleText":""}},{"path":"/pages/mine/minePages/uni_modules/uni-id-pages/pages/login/login-withpwd","meta":{},"window":{"navigationBarTitleText":""}},{"path":"/pages/mine/minePages/uni_modules/uni-id-pages/pages/login/login-smscode","meta":{},"window":{"navigationBarTitleText":"手机验证码登录"}},{"path":"/pages/mine/minePages/uni_modules/uni-id-pages/pages/register/register","meta":{},"window":{"navigationBarTitleText":"注册"}},{"path":"/pages/mine/minePages/uni_modules/uni-id-pages/pages/register/register-by-email","meta":{},"window":{"navigationBarTitleText":"邮箱验证码注册"}},{"path":"/pages/mine/minePages/uni_modules/uni-id-pages/pages/retrieve/retrieve","meta":{},"window":{"navigationBarTitleText":"重置密码"}},{"path":"/pages/mine/minePages/uni_modules/uni-id-pages/pages/retrieve/retrieve-by-email","meta":{},"window":{"navigationBarTitleText":"通过邮箱重置密码"}},{"path":"/pages/mine/minePages/uni_modules/uni-id-pages/pages/common/webview/webview","meta":{},"window":{"enablePullDownRefresh":false,"navigationBarTitleText":""}},{"path":"/pages/mine/minePages/uni_modules/uni-id-pages/pages/userinfo/change_pwd/change_pwd","meta":{},"window":{"enablePullDownRefresh":false,"navigationBarTitleText":"修改密码"}},{"path":"/pages/mine/minePages/uni_modules/uni-id-pages/pages/register/register-admin","meta":{},"window":{"enablePullDownRefresh":false,"navigationBarTitleText":"注册管理员账号"}},{"path":"/pages/mine/minePages/uni_modules/uni-id-pages/pages/userinfo/set-pwd/set-pwd","meta":{},"window":{"enablePullDownRefresh":false,"navigationBarTitleText":"设置密码"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});