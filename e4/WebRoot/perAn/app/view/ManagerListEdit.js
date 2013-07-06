Ext.define("AM.view.ManagerList",{
	extend:'Ext.window.Window',
	alias:'widget.managerlistedit',
	buttons:[
		{text:'保存',action:''},
		{text:'取消',scope:this,handler:this.close}
	],
	items:[{xtype:'form',items:[
			{name:'客户经理编号',fieldLabel:'managerId',width:100},
			{name:'姓名',dataIndex:'managerName',width:100},
			{name:'入职时间',dataIndex:'empTime',width:100},
			{name:'级别',dataIndex:'managerGrade',width:100},
			{name:'底薪',dataIndex:'basicSalary',width:100},
			{name:'补助',dataIndex:'subsidy',width:100},
			{name:'绩效列表',dataIndex:'performanceList',width:100}                    
			   ]}
		
	],
	initComponent:function(){
		this.callParent(arguments)
	}
});





