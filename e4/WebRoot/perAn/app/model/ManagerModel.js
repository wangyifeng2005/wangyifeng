/**
 * ClassName 部门的实体
 * text : 部门的名称
 * id : id主键
 * info : 信息
 * orderIndex : 排序字段
 * manager : 部门的经理
 * nodeType : 节点类型
 * leaf :  是否叶子
 */
Ext.define("AM.model.ManagerModel",{
	extend:'Ext.data.Model',
	fields:[
		{name:'id',type:'int'},
		{name:'managerId',type:'string'},
		{name:'managerName',type:'string'},
		{name:'empTime',type:'string'},
		{name:'managerGrade',type:'string'},
		{name:'basicSalary',type:'number'},
		{name:'subsidy',type:'number'},
		{name:'performanceList',type:'string'}
	]
});