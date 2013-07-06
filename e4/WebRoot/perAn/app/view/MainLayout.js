	Ext.define('AM.view.MainLayout', {
		extend:'Ext.container.Viewport',
		alias:'widget.mainlayout',
	    title: "table布局的面板",
	    layout:'border',
		items: [{
			collapsible:false,
		    region: 'north',
		    height: 70,
		    cmargins: '0 0 0 0'
		},{
		    title:'系统功能列表',
			region:'west',
			xtype:'panel',
			//margins:'5 2 5 5',
			width: 200,
			id:'west-tree',
			layout:'fit',
			frame:true,
			items:[{
				//title:'系统功能列表',
				autoScroll:true,
				xtype:'sysTree',
				html: 'hello world',
				id:'sys-tree'
			}]
		},{
			region:'center',
			xtype:'tabpanel',
			collapsible:false,
			id:'tabpanel',
			enableTabScroll: true, 
			autoDestroy:false,
			plain: true,
			layout:'anchor',
			items:[{
				title: '欢迎',
				items:[]
			}]
		
//        	title:'客户经理管理',
//			iconCls:'dept_table',
//			region:'center',
//			xtype:'panel',
//			collapsible:false,
//			id:'center-grid',
//			frame:true,
//			//margins:'0 0 0 0',
//			layout:'anchor',
//			items:[{
//				id:'manager-form',
//				xtype:'managerSearchForm'
//			},{
//				id:'manager-grid',
//				xtype:'managerlist'
//			}]
		}]
	});
