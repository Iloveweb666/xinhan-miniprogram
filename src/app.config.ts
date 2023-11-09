export default defineAppConfig({
  pages: [
    'pages/home/index',
    'pages/personal/index'
  ],
  tabBar:{
    list: [
      {text: '首页', pagePath: 'pages/home/index'},
      {text: '个人中心', pagePath: 'pages/personal/index'}
    ]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
});
