<template>
    <mu-appbar title="Fate Grand Order">
        <mu-icon-button icon="menu" slot="left" @click="toggle(true)" />
        <mu-drawer :open="open" :docked="docked" @close="toggle()">

                <mu-list @itemClick="docked ? '' : toggle()">
                    <mu-list-item title="菜单">
                        <mu-avatar :src="tx" slot="leftAvatar" />
                        <mu-icon value="grade" slot="right" />
                    </mu-list-item>
                    <mu-list-item title="Menu Item 2" />
                    <mu-list-item title="Menu Item 3" />
                    <mu-list-item v-if="!docked" @click.native="open = false" title="Close" />
                </mu-list>

        </mu-drawer>
        <span>Fate Grand Order</span>
        <mu-icon-menu icon="more_vert" slot="right" :value="theme" @change="changeTheme" title="主题" :anchorOrigin="leftBottom" :targetOrigin="leftTop" v-bind:style="theme=='dark'?{background:'none'}:''">
            <mu-menu-item title="主题(默认)" value="carbon" />
            <mu-menu-item title="夜间模式" value="dark" />
            <mu-menu-item title="湖水蓝" value="light" />
            <mu-menu-item title="水鸭绿" value="teal" />
        </mu-icon-menu>
    </mu-appbar>
</template>
<script>
//导入主题样式
import light from '!raw-loader!muse-ui/dist/theme-default.css'
import dark from '!raw-loader!muse-ui/dist/theme-dark.css'
import carbon from '!raw-loader!muse-ui/dist/theme-carbon.css'
import teal from '!raw-loader!muse-ui/dist/theme-teal.css'

import tx from'../img/tx.png'
export default {
    name: 'mheader',
    data() {
        return {
            open: false,
            docked: true,
            tx,
            // leftPopup: false,
            leftBottom: {
                horizontal: 'left',
                vertical: 'bottom'
            },
            leftTop: {
                horizontal: 'left',
                vertical: 'top'
            },
            theme: 'carbon',
            themes: {
                light,
                dark,
                carbon,
                teal
            },

        }
    },
    methods: {
        changeTheme(theme) {
                this.theme = theme
                const styleEl = this.getThemeStyle()
                styleEl.innerHTML = this.themes[theme] || ''
            },
            getThemeStyle() {
                const themeId = 'muse-theme'
                let styleEl = document.getElementById(themeId)
                if (styleEl) return styleEl
                styleEl = document.createElement('style')
                styleEl.id = themeId
                document.body.appendChild(styleEl)
                return styleEl
            },
            toggle(flag) {
                this.open = !this.open
                this.docked = !flag
            },

    },
    components: {
       
    },
    mounted:{
        // document.body.style.background="url('../img/bg.jpg')"
    }
}
</script>
<style>
body {
    /*background: url('../img/bg.jpg');*/
    /*background: none*/
}

.demo-popup-left {
    display: flex;
    width: 55%;
    max-width: 375px;
    height: 100%;
    align-items: center;
    padding: 24px;
}


</style>
