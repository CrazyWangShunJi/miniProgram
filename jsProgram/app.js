// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null
  },
  /* 小程序生命周期 */
  onLaunch() {
    console.log('小程序初始化');
  },
  onShow() {
    console.log('小程序显示');
  },
  onHide() {
    console.log('小程序隐藏');
  },
  onError(msg) {
    console.log('小程序错误', msg);
  }
})