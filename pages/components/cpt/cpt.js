// pages/components/cpt/cpt.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    num: {          // num定义的就是点击每个按钮分别增加的数值,可以在调用组件的时候进行更改
      type: Number,
      value: 1
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    counter: 0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    __incrementCounter(e) {
      var me = this;
      let num = this.data.num
      this.setData({
        counter: this.data.counter + num
      })
      this.triggerEvent('increment', { num: num })  // 将num通过参数的形式传递给父组件
    }
  }
})
