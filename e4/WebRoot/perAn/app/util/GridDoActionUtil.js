Ext.define("AM.util.GridDoActionUtil",{
	/**
	 * 列表的批量删除
	 * @param {} grid
	 */
	doDelete:function(grid){
		if(!grid){
			alert("参数传递不正确");
			return;
		}
		//得到数据集合
		var store = grid.getStore(); 
		var records = grid.getSelectionModel().getSelection();
		if(records.length==0){
			Ext.Msg.alert("提示信息","请选择要删除的信息");
			return;
		}
		Ext.Msg.show({
		     title:'提示信息',
		     msg: '确认要删除选择的信息?',
		     buttons: Ext.Msg.YESNO,
		     fn:function(btn){
			 		if(btn=='yes'){
			 			f();
			 		}else{
			 			return;
			 		}
		 		},
		     icon: Ext.window.MessageBox.QUESTION
		});
		var f = function(){
			var data = [];
			Ext.Array.each(records,function(model){
				data.push(Ext.JSON.encode(model.get('id')));
			});		
			if(data.length > 0){
				Ext.Ajax.request({
					url:store.getProxy().api['remove'],
					params:{data:data.join(",")},
					method:'POST',
					timeout:4000,
					success:function(response,opts){
						Ext.Array.each(records,function(model){
							//表格删除数据
							store.remove(model);						
						})
					}
				})
			}
		}
		
	},
	/**
	 * 列表的批量修改
	 * @param {} grid
	 */
	doSave:function(grid){
		if(!grid){
			alert("参数传递不正确");
			return;
		}	
		//得到数据集合
		var store = grid.getStore();
		//records 被修改过的数据
		var records = store.getUpdatedRecords();
		if(records.length==0){
			return;
		}
		Ext.Msg.show({
		     title:'提示信息',
		     msg: '确认要保存修改的数据?',
		     buttons: Ext.Msg.YESNO,
		     fn:function(btn){
			 		if(btn=='yes'){
			 			f();
			 		}else{
			 			return;
			 		}
		 		},
		     icon: Ext.window.MessageBox.QUESTION
		});
		var f = function(){
			var data = [];
			Ext.Array.each(records,function(model){
				data.push(Ext.JSON.encode(model.data));
			});
			//异步的操作数据
//		store.getProxy().update(new Ext.data.Operation({
//			action:'update'
//		}));
			if(data.length > 0){
				Ext.Ajax.request({
					url:store.getProxy().api['update'],
					params:{data:"["+data.join(",")+"]"},
					method:'POST',
					timeout:4000,
					success:function(response,opts){
						console.log(response.responseText);
						Ext.Array.each(records,function(model){
							//取消小箭头
							model.commit();
						});
					}
				});
			}
		}
	}
});

