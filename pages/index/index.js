//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    colorArr: ["#40a851", "#000", "#ca3547", "#2b86e5", "#fdab3e"],
    stoneArr: [0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1],
    height:''
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log();
    let width = wx.getSystemInfoSync().windowWidth - 40;
    let height = wx.getSystemInfoSync().windowHeight - 200;
    let leftTop = Math.floor(Math.random() * 5);
    let arrLeftTop = [];
    
    for (let i = 0; i < leftTop; i++) {
      let x = Math.floor(Math.random() * (width / 2));
      let y = Math.floor(Math.random() * (height / 2));
      if (i == 1) {
        arrLeftTop.push({ 'x': x, 'y': y });
        continue;
      }
      let flag = false;
      while (!flag) {
        let rx = Math.floor(Math.random() * (width / 2));
        let ry = Math.floor(Math.random() * (height / 2));
        let len = arrLeftTop.length;
        let count = 0
        for (let j = 0; j < len; j++) {
          if (Math.abs(arrLeftTop[j].x - rx) < 40 || Math.abs(arrLeftTop[j].y - ry) < 40) break;
          count++;
        }
        if (count === len) {
          arrLeftTop.push({ 'x': x, 'y': y });
          flag = true;
        }
      }
    }


    let rightTop = Math.floor(Math.random() * 5);
    let arrRightTop = [];
    console.log('rightTop' + rightTop);

    for (let i = 0; i < 4; i++) {
      let x = Math.floor((width / 2) + Math.random() * (width / 2));
      let y = Math.floor(Math.random() * (height / 2));
      if (i == 0) {
        arrRightTop.push({ 'x': x, 'y': y });
        continue;
      }
      let flag = false;
      while (!flag) {
        let rx = Math.floor((width / 2) + Math.random() * (width / 2));
        let ry = Math.floor(Math.random() * (height / 2));
        let len = arrRightTop.length;
        let count = 0
        for (let j = 0; j < len; j++) {
          if (Math.sqrt(Math.pow(arrRightTop[j].x - rx, 2) + Math.pow(arrRightTop[j].y - ry, 2)) < Math.sqrt(50 * 50 * 2)) break;
          count++;
        }
        if (count === len) {
          arrRightTop.push({ 'x': rx, 'y': ry });
          flag = true;
        }
      }
    }

    
    this.setData({
      // stoneArr: arrRightTop,
      height: height + 200
    });
  }
})
