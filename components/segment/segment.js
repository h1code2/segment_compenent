// components/segment/segment.js
Component({
  options: {
    multipleSlots: true
  },

  /**
   * 组件的属性列表
   */
  properties: {
    tabList: {
      type: Array,
      value: []
    },
    defaultIndex: {
      type: Number,
      value: 0
    }
  },

  lifetimes: {
    attached: function() {
      let self = this
      this.setData({
        currentTabsIndex: self.properties.defaultIndex
      })
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentTabsIndex: 0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * tap切换
     */
    onTabsItemTap: function(event) {
      let index = event.currentTarget.dataset['index'];
      this.setData({
        currentTabsIndex: index
      });
    },
  }
})