Ext.define("AM.view.AddManagerForm",{
		extend:'Ext.window.Window',
		alias:'widget.addManagerForm',
	    title:'添加信息',
	    height: 200,
	    width: 300,
	    //padding:'10 5 3 10',
	    layout: 'fit',
	    items: {  
	    	buttonAlign:'center',
	    	frame:true,
	        xtype: 'form',
	        method:'post',
	        url: '/ext4Demo/extjs!saveDept.action',
	        layout: {
	            type: 'vbox',
	            align: 'center'
	        },
	        fieldDefaults:{//统一设置表单字段默认属性
		        labelSeparator :':',//分隔符
		        labelWidth : 60,//标签宽度
		        width : 300,
		        padding:'0 0 0 0',
		    },
		    autoScroll:true,
	        defaultType: 'textfield',
	        //store:'DeptStore',
//					        model:'DeptModel',
	        items: [{
	            fieldLabel: '部门名称',
	            name: 'text',
	            allowBlank: false,
	            width:150
	        },{
	            fieldLabel: '部门经理',
	            name: 'manager',
	            allowBlank: false,
	            width:150
	        },{
	            fieldLabel: '排序字段',
	            xtype : 'numberfield',
	            name: 'orderIndex',
	            allowBlank: false,
	            width:150
	        },{
	            fieldLabel: '职能简介',
	            name: 'info',
	            allowBlank: false,
	            width:150
	        }],

	        buttons: [{
	            text: '重置',
	            handler: function() {
	                this.up('form').getForm().reset();
	            }
	        }, {
	            text: '确认',
	            formBind: true,
	            disabled: true,
	            handler: function() {
	                var form = this.up('form').getForm();
	                if (form.isValid()) {
	                    form.submit({
	                        success: function(form, action) {
	                        	alert(11);
	                        	//var store = form.getStore();
	                        	Ext.Msg.alert('提示信息', '保存成功');
	                        	//var win = form.ownerCt;
	                        	//win.destroy();
	                        	//store.reload();
	                        },
	                        failure: function(form, action) {
	                        	alert(13);
	                            Ext.Msg.alert('Failed', action.result.msg);
	                        }
	                    });
	                }
	            }
	        }]
	    }
})