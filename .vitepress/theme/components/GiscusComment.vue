<template>
    <div style="margin-top: 24px">
        <Giscus
            id="comments"
            repo="Hrenact/HrenactNET"
            repoid="R_kgDONPLRCQ"
            category="General"
            categoryid="DIC_kwDONPLRCc4C5DpY"
            mapping="url"
            term="欢迎评论！"
            reactionsenabled="0"
            emitmetadata="0"
            inputposition="top"
            loading="lazy"
            theme="noborder_dark"
            lang="zh-CN"
            :key="route.path"
        ></Giscus>
    </div>
</template>

<script setup>
import Giscus from '@giscus/vue';
import { useRoute } from 'vitepress';

const route = useRoute();
</script>