//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    colorArr: ["#40a851", "#000", "#ca3547", "#2b86e5", "#fdab3e", "#fc4359", "#2b86e5", "#000", "#40a851", "#40a851"],
    stoneArr: [{}]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    let width = wx.getSystemInfoSync().windowWidth - 40;
    let height = wx.getSystemInfoSync().windowHeight - 40;
    let arr = [];
    
    for (let i = 0; i < 10; i++) {
      let x = Math.floor(Math.random() * width);
      let y = Math.floor(Math.random() * height);
      if (i == 0) {
        continue;
      }
      let flag = false;
      while (!flag) {
        let len = arr.length;
        for (let j = 0; j < len; j++) {
          if (Math.abs(arr[j].x - x) < 40 || Math.abs(arr[j].y - y) < 40) flag = true;
        }
      }
      arr.push({ 'x': x, 'y': y });
    }
    console.log(arr);
    this.setData({
      stoneArr: arr
    });
  }
})
