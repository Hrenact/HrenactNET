// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import { inBrowser, type Theme } from 'vitepress'

import type { EnhanceAppContext } from 'vitepress'

import DefaultTheme from 'vitepress/theme'

import { CopyText } from '@theojs/lumen'

import { Underline } from '@theojs/lumen'

import './style.css'

import '@nolebase/vitepress-plugin-enhanced-mark/client/style.css'

import { 
  NolebaseEnhancedReadabilitiesMenu, 
  NolebaseEnhancedReadabilitiesScreenMenu, 
} from '@nolebase/vitepress-plugin-enhanced-readabilities/client'

import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css'

import type { Options } from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import { InjectionKey } from '@nolebase/vitepress-plugin-enhanced-readabilities/client'

//import './styles/main.css'
import './styles/vars.css'

import './Layout.vue'

import '@theojs/lumen/pic'

import NotFound from './NotFound.vue'
import MyFooter from './MyFooter.vue'

// 用于评论

import GiscusComment from './components/GiscusComment.vue';

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots

      // A enhanced readabilities menu for wider screens
      'nav-bar-content-after': () => h(NolebaseEnhancedReadabilitiesMenu), 
      // A enhanced readabilities menu for narrower screens (usually smaller than iPad Mini)
      'nav-screen-content-after': () => h(NolebaseEnhancedReadabilitiesScreenMenu), 

      'not-found': () => h(NotFound),

      'doc-after': () => [h(MyFooter),h(GiscusComment)]
    })
  },

  enhanceApp({ app, router, siteData }: EnhanceAppContext) {
    // ...

    app.component('Copy', CopyText)

    app.component('Home', Underline)

    app.provide(InjectionKey, {
      locales: { // 配置国际化
        'zh-CN': { // 配置简体中文
          title: { 
            title: '阅读增强插件', 
          } 
        },
      } 
    } as Options)
  },

} satisfies Theme
