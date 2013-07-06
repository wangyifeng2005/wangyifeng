/**
 * ClassName 部门管理控制器
 */
Ext.define("AM.controller.ManagerController",{
	extend:'Ext.app.Controller',
	GridDoActionUtil:Ext.create("AM.util.GridDoActionUtil"),
	init: function(){
		this.gerGridObj = function(buttion){
			return buttion.ownerCt.ownerCt;
		};
		this.control({
			"managerSearchForm button[id=search]":{
				click:function(b,e){
					var grid = b.ownerCt.ownerCt.child('#dept-grid');
					var mystore = grid.getStore();
					var manager = Ext.getCmp('name').getValue(); //获取文本框值
		            if (manager != "") {
		                mystore.load({ params: { name: manager} });//传递参数
		            }
				}			
			},	
			"sysTree button[id=allopen]":{
					click:function(b,e){
						var tree = b.ownerCt.ownerCt;
						tree.expandAll();
					}			
			},			
			"sysTree button[id=allclose]":{
				click:function(b,e){
					var tree = b.ownerCt.ownerCt;
					tree.collapseAll();
				}			
			},
			'sysTree':{
				checkchange : function(node,checked,options){
					if(node.data.leaf == false){//不是叶子
						
						if(checked){
							//打开节点
							node.expand();
							//遍历孩子
							node.eachChild(function(n){
								n.data.checked = true;
								n.updateInfo({checked:true});
							})
						}else{
							node.expand();
							node.eachChild(function(n){
								n.data.checked = false;
								n.updateInfo({checked:false});
							})							
						}
					}else{//单击叶子
						if(!checked){
							node.parentNode.data.checked = false;
							node.parentNode.updateInfo({checked:false});
						}
					}
				},
				'itemclick':function(view, record, items, index, e){
                    if(record.data.leaf==false){
	                        return;
	                }else{
	                	 if(!Ext.isEmpty(record.raw.leaf)){
	                		 var moduleTabId = 'tab_'+record.get('id');
	                		 var tabs = Ext.getCmp('tabpanel');
	                		 var tab = tabs.getComponent(moduleTabId);
	                		 if(!tab){//添加
	             				tab = tabs.add({
	             					xtype:'managerlist',
	             					items:[],
	             					title:record.get('text'),
	             					id:moduleTabId,
	             					closable:true,
	             					moduleId:record.get('id')
	             				});
	             			}
	             			tabs.setActiveTab(tab);
//	                		 var currtabtext = '#'+record.raw.id;
//	                		 var tabs = Ext.getCmp('tabpanel');
//	                		 var vali_curr = tabs.child(currtabtext); 
//	                		 if(Ext.isEmpty(vali_curr)){
//	                			 if(record.raw.id=='0201'){
//	                				 var curr = tabs.add({
//	                					 layout : 'anchor',          
//	                					 itemId : record.raw.id,
//	                					 title : record.raw.text,
//	                					 closable:true,
//	                					 closeAction :'hide',
//	                					 xtype:'managerlist'
//	                				 }); 
//	                				 curr.tab.show();  
//	                				 tabs.setActiveTab(curr);
//	                			 }
//	                		 }else{
//	                    		 //vali_curr.tab.show();
//	                    		 tabs.setActiveTab(vali_curr);
//	                    	 }
	                	 }
	                }
				}
			},
			'managerlist button[id=delete]':{
				click:function(deleteButton){
					var grid  = this.gerGridObj(deleteButton);
					this.GridDoActionUtil.doDelete(grid);
				}
			},
			'performanceList button[id=delete]':{
				click:function(deleteButton){
					var grid  = this.gerGridObj(deleteButton);
					this.GridDoActionUtil.doDelete(grid);
				}
			},
			'managerlist button[id=save]':{
				click:function(saveButton){
					var grid  = this.gerGridObj(saveButton);
					this.GridDoActionUtil.doSave(grid);
				}
			},
			//设定列表添加按钮的事件
			'managerlist button[id=add]':{
				click:function(o){
					//TODO
				}
				
			}
		});
	},
	views:[
		'SysTree',
		'ManagerList',
		'MainLayout',
		'ManagerSearchForm',
		'AddManagerForm'
	],
	stores:[
		'ManagerStore',
		'SysTreeStore'
	],
	models:[
		'ManagerModel'
	],
	refs: [{ref:'managerlist',selector:'managerlist'}]
});