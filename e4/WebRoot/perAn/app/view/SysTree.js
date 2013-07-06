Ext.define("AM.view.SysTree",{
	extend:'Ext.tree.Panel',
	//id:"treeID",
	autoScroll:true,
	alias:'widget.sysTree',
	frame: true,
	collapsible: true, //是否可以收缩
	border : true,
	rootVisible:false,
	title:'基础信息管理',
	animate:true,
	store:'SysTreeStore',
	viewConfig: {
		plugins: {
			ptype: 'treeviewdragdrop'
		}
	}
})