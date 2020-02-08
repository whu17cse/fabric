const student = require("indexx.js")


Page({
  data: {
    // text:"这是一个页面"
    tip: '测试',
    userName: '用户名：',
    psw: '密码：'
  },
  formBindsubmit: function (e) {
    this.setData({
      tip: '结果',
      userName: '用户名：' + e.detail.value.userName,
      psw: '密码：' + e.detail.value.psw
    })
  },
  formReset: function () {
    this.setData({
      tip: '清空了',
      userName: '君不见',
      psw: '黄河之水天上来'
    })
    console.log("*******************")
  },
onLoad:function(){
  console.log(student)
  console.log("***********************************")
}
})

