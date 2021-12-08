const headerMenuConfig = [];

const asideMenuConfig = [
  {
    name: '数据页面',
    path: '/',
    icon: 'chart-pie',
    children: [
      {
        name: '工作台',
        path: '/dashboard',
      },
    ],
  },
  {
    name: '列表页面',
    path: '/table',
    icon: 'chart-bar',
    children: [
      {
        name: '弹窗表格',
        path: '/table/dialog',
      },
    ],
  }
];

export { headerMenuConfig, asideMenuConfig };
