Ext.define('AM.store.userStore', {
    extend : 'Ext.data.Store',
    model : 'AM.model.userModel', //指定需要引用的model的权限定名
    autoLoad : true,//自动加载
    proxy : {//这个是定义一个代理，详见官方API
        type : 'ajax',//ajax异步加载
        api : {//我也不是很理解，就不误人子弟了，在我这个例子中，因为在Ctrl里通过form指定了url了，所以就没进来这个玩意
            update : 'data/updateUsers.json'
        }
    }
});