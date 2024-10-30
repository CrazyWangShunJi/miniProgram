
Page({
  data: {
    motto: 'Hello World',
    counter: 1,
  },
  increase() {
    this.setData({
      counter: this.data.counter + 1
    })
  },
  decrease() {
    this.setData({
      counter: this.data.counter - 1
    })
  },
  jumpToTest() {
    console.log(111)
    wx.navigateTo({
      url: '/pages/test/test',
      fail(res) {
        console.log(res)
      }
    })
  },
  onLoad() {
    console.log("页面加载时触发")
  },
  onShow() {
    console.log("页面显示时触发")
  },
  onReady() {
    console.log("页面初次渲染完成时触发")
  },
  onHide() {
    console.log("页面隐藏时触发")
  },
  onUnload() {
    console.log("页面卸载时触发")
  }
})