import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  favicon: '/favicon.ico',
  title: 'TBC',
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/Features', component: '@/pages/features' },
    { path: '/TuringTXID', component: '@/pages/turingtxid' },
    { path: '/Work', component: '@/pages/work' },
    { path: '/Running', component: '@/pages/running' },
    { path: '/Fee', component: '@/pages/fee' },
    { path: '/TuringContract', component: '@/pages/turingContract' },
    { path: '/TBCScales', component: '@/pages/tbcScales' },
    { path: '/TKYCCertification', component: '@/pages/tkyccertification' },
    { path: '/Wallet', component: '@/pages/wallet' },
    {
      path: '/AirDrop',
      component: '@/pages/airdrop',
    },
    {
      path: '/WinnerQuery',
      component: '@/pages/WinnerQuery',
    },
  ],
  fastRefresh: {},
  locale: {
    // 默认使用 src/locales/zh-CN.ts 作为多语言文件
    default: 'en',
    baseSeparator: '-',
  },
  links: [
    {
      rel: 'stylesheet',
      href: './font.css',
    },
    {
      rel: 'stylesheet',
      href: './animate.min.css',
    },
  ],
  proxy: {
    '/api': {
      target: 'https://turingwallet.xyz',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
      secure: false,
    },
  },
});
