Ext.define('AM.model.usersModel', {
    extend : 'Ext.data.Model',//继承自Ext.data.Model
    fields : ['id', 'userName', 'password']//这个是说有几个字段(对应java中的实体类中的private的各种属性)
});

