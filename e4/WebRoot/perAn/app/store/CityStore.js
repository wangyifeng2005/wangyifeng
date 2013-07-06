Ext.define('AM.store.CityStore', {
    extend : 'Ext.data.Store',
    model : 'AM.model.CityModel',
    autoLoad : true,
    remoteSort:true,
    proxy : {
        type : 'ajax',
        url : 'city.json'
    }
});