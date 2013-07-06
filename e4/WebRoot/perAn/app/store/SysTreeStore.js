Ext.define("AM.store.SysTreeStore",{
	extend:'Ext.data.TreeStore',
	defaultRootId : '-1',
	proxy:{
		type:'ajax',
		url:'check-nodes.json',
		reader:{
			type:'json',
			root: 'children'
		}
	},
	sorters: [{
        property: 'leaf',
        direction: 'ASC'
    }, {
        property: 'text',
        direction: 'ASC'
    }]
});