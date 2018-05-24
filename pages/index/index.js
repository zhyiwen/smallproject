//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    goodsArray:[
      {
        imgSrc:"https://img.alicdn.com/imgextra/i2/2590951958/TB2zU0Xsf9TBuNjy1zbXXXpepXa_!!2590951958.jpg",
        title:"鹤山小区精装修，南北通透 冬天下雨，夏天漏风",
        pattern:"3室2厅1卫",
        acreage:89.00,
        adress:"莱阳市 经济开发区",
        totalPrince: 59,
        prince: 6629,
        icon1:false,
        icon2:true,
        icon3:true
      },
      {
        imgSrc: "https://img.alicdn.com/imgextra/i4/2590951958/TB25uBfseuSBuNjSsziXXbq8pXa_!!2590951958.jpg",
        title: "经典户型南厅双卧！优质好房",
        pattern: "3室2厅2卫",
        acreage: 129.00,
        adress: "莱阳市 文峰学校",
        totalPrince: 66,
        prince: 5116,
        icon1: true,
        icon2: false,
        icon3: true
      },
      {
        imgSrc: "https://img.alicdn.com/imgextra/i4/2590951958/TB2txfLjOCYBuNkSnaVXXcMsVXa_!!2590951958.jpg",
        title: "开泰华府，精装72平，带家具西打头带西窗户",
        pattern: "2室1厅1卫",
        acreage: 72.00,
        adress: "莱阳市 冯格庄街道",
        totalPrince: 37,
        prince: 5139,
        icon1: false,
        icon2: true,
        icon3: false
      },
      {
        imgSrc: "https://img.alicdn.com/imgextra/i3/2590951958/TB2mmdlsb5YBuNjSspoXXbeNFXa_!!2590951958.jpg",
        title: "文化北区，精装二楼，客厅带阳台",
        pattern: "3室2厅1卫",
        acreage: 88.00,
        adress: "莱阳市 东关联中心",
        totalPrince: 65,
        prince: 7386,
        icon1: true,
        icon2: false,
        icon3: false
      }
    ]
  },
})
