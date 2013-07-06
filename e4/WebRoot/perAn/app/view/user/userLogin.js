Ext.define('AM.view.user.userLogin', {
            extend : 'Ext.window.Window',
            alias : 'widget.userLogin',
            singleton : true,// 单例模式
            title : '用户登录--XXXX管理系统',
            width : 250,

            modal : true,// 窗口时模态的
            closable : false,// 不能关闭
            resizable : false,// 不能调整大小
            clseAction : 'hide',// 关闭模式为隐藏
            hideMode : 'offsets',// 隐藏模式为偏移

            layout : 'auto',// 布局方式为填充
            autoShow : true,// 自动显示出来
            maximizable : false,// 禁止最大化

            buttonAlign : 'center',// button字体居中显示

            initComponent : function() {
                var me = this;
                me.form = Ext.create(Ext.form.Panel, {
                            border : false,//form不加边框，如果想使用边框，则可以设为true或者不写(默认为trhe)
                            bodyPadding : 5,//为了不太靠近边框，留有5像素空隙(即向内压缩5像素)
                            bodyStyle : "background:#DFE9F6",//默认是白色的，加上这个颜色，显得自然一点
                            defaultType : "textfield",//因为都是文本输入框，所以，直接设定默认 为textfield
                            fieldDefaults : {//字段默认属性都是，labelWidth宽50像素
                                labelWidth : 50,
                                allowBlank : false//都不允许为空
                            },
                            items : [{
                                        fieldLabel : '帐号',
                                        name : 'userName', // 就所HTML标记中到name=“”
                                        blankText : '请输入帐号'
                                    }, {
                                        fieldLabel : '密码',
                                        name : 'password',
                                        inputType : 'password', // 密码框需要用*掩饰用户密码，所以需要加上这个属性，否则就是普通的文本输入框
                                        blankText : '请输入密码'
                                    }],
                            dockedItems : [{//这里使用的是ExtJs4的新功能里--dockedItems配置项，挺方便的，
                                xtype : 'toolbar',// 定一了一个工具栏
                                dock : 'bottom',// 停靠在底部(bottom)
                                ui : 'footer',//工具栏的样式使用了ui配置项定义的footer，也就是原来窗口的底部页脚工具栏
                                layout : {
                                    pack : 'center'
                                },// 工具栏的布局将使用居中对齐方式
                                items : [{// 定义三个按钮
                                    text : '登录', // 登录按钮
                                    width : 70,// 宽度80像素
                                    disabled : true,// 禁用登录
                                    formBind : true,//
                                    // 只有在表单内输入符合要求时才使用该按钮，这是在ExtJs是新加入的，很方便不用自己再去写代码实现了
                                    handler:function(button){
                                		var form = button.up('form').getForm();
                                		form.submit({
                                            waitMsg : '正在登录，请等待...',//显示的是等待信息
                                            waitTitle : '正在登录',//弹出的窗口的标题
                                            url : 'login.json',
                                            success : function(form, action) {
                                                document.location='main.jsp';//这里用的是跳转到别的页面
                                            },
                                            failure: function(form, action) {
                                                switch (action.failureType) {
                                                    case Ext.form.action.Action.CLIENT_INVALID:
                                                        Ext.Msg.alert('Failure', 'Form fields may not be submitted with invalid values');
                                                        break;
                                                    case Ext.form.action.Action.CONNECT_FAILURE:
                                                        Ext.Msg.alert('Failure', 'Ajax communication failed');
                                                        break;
                                                    case Ext.form.action.Action.SERVER_INVALID:
                                                       Ext.Msg.alert('Failure', action.result.msg);
                                               }
                                            }
                                        });
                                	}
                                }, {
                                    text : '重置',
                                    width : 70,
                                    handler:function(button) {
                                        var form = button.up('form').getForm();
                                        //使用form的reset方法重置
                                        form.reset();
                                    }
                                }, {
                                    text : '注册',
                                    width : 70,
                                    handler : function(){
                                    	alert();
                                    }
                                }]
                            }]

                        });
                me.items = me.form;

                me.callParent(arguments);
            }
        });