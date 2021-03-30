App({
  globalData: {},
  onShow() {},
  showMessage(option) {
    const {
      title = "",
        content = "",
        isRejectable = false,
        cancelText = "取消",
        confirmText = "确定",
        confirmColor = "#dd1d21",
        resolve,
        reject,
        complete,
        fail
    } = option;
    wx.showModal({
      title: title,
      content: content || "不好意思~系统开小差了",
      showCancel: isRejectable,
      cancelText: cancelText,
      confirmText: !content ? "好的" : confirmText,
      confirmColor: confirmColor,
      success(res) {
        if (res.confirm) {
          resolve && resolve();
        } else if (res.cancel) {
          reject && reject();
        }
      },
      fail() {
        fail && fail();
      },
      complete() {
        complete && complete();
      }
    });
  },

  // toast title-提示语 is-是否有icon time-停留时间（ms）
  showToast(title, is, time) {
    wx.showToast({
      title,
      icon: is ? "success" : "none",
      duration: time || 2000,
      image: "",
      mask: false
    });
  },
})