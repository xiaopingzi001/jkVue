export default{
    config:{
        imgWenSiteUrl:'http://admin.9kuaiz.com',//图片路径前缀
        telNumber:''      //电话
    },
    getUserId(){
        return this.getCookie('userid');
    },
    getUserId(){
        return this.getCookie('openid');
    },
    getCookie(cookie_name){
        // 定义一个函数，用来读取特定的cookie值。
        var allcookies = document.cookie;
        var cookie_start = allcookies.indexOf(cookie_name); //寻找名第一次出现的位置
        // 如果找到了就代表cookie存在
        // 反之，就说明不存在。  
        if (cookie_start != -1){
            // 把cookie_start放在值的开始，只要给值加1即可。  
            cookie_start += cookie_name.length + 1; 
            var cookie_end = allcookies.indexOf(';', cookie_start);
            if (cookie_end == -1){
                cookie_end = allcookies.length;
            }
            return unescape(allcookies.substring(cookie_start,cookie_end))
        }
    }
}