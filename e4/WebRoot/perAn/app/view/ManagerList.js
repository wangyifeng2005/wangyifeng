Ext.define("AM.view.ManagerList",{
	extend:'Ext.grid.Panel',
	alias:'widget.managerlist',
	store:'ManagerStore',
//	loadMask: true, //加载提示{ msg: '正在加载数据，请稍侯……' }
//	width:'100%',
//	height:'90%',
//	selModel:{
//		selType:'checkboxmodel'
//	},
//	border:0,
//	multiSelect: true,
//	frame:true,
	tbar:[
	    {xtype:'combo',valueField: 'id',displayField: 'cname',store:["山西","北京"],editable: false},
		{xtype:'button',text:'添加',id:'add',iconCls:'table_add'},
		{xtype:'button',text:'删除',id:'delete',iconCls:'table_remove'},
		{xtype:'button',text:'保存',id:'save',iconCls:'table_save'}
	],
//	dockedItems:[{
//		xtype:'pagingtoolbar',
//		store:'ManagerStore',
//		dock:'bottom',
//		displayInfo:true,
//		displayMsg: '当前显示{0}-{1}条记录 / 共{2}条记录 ',                 
//		beforePageText: '第',                   
//		afterPageText: '页/共{0}页',
//		emptyMsg: '没有数据'
//	}],
//    enableKeyNav:true,
//	columnLines: true,
	columns:[
		{header:'客户经理编号',dataIndex:'managerId',width:100},
		{header:'姓名',dataIndex:'managerName',width:100},
		{header:'入职时间',dataIndex:'empTime',width:100},
		{header:'级别',dataIndex:'managerGrade',width:100},
		{header:'底薪',dataIndex:'basicSalary',width:100},
		{header:'补助',dataIndex:'subsidy',width:100},
		{header:'绩效列表',dataIndex:'performanceList',width:100}
	],
//	plugins:[
//		Ext.create("Ext.grid.plugin.CellEditing",{
//			clicksToEdit : 2
//		})
//	],
	initComponent:function(){
		this.callParent(arguments)
	}
});





