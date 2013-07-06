Ext.define("AM.controller.usersCtrl",{
	extend:'Ext.app.Controller',
	views:['user.userLogin'],
	stores:['userStore'],
	models:['userModel'],
	init:function(){
		this.control({
			'userLogin button[action=login]' : {
                click : this.login
            },
            'userLogin button[action=register]' : {
                click : this.register
            },
            'userLogin button[action=reset]' : {
                click : this.reset
            }
		});
	}
});