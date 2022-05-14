const { defaultTheme } = require('@vuepress/theme-default')
const { docsearchPlugin } = require('@vuepress/plugin-docsearch')

module.exports = {
    lang: 'zh-CN',
    title: 'run4j',
    description: '助力Java开发者技术成长',
    theme: defaultTheme({
        logo: '/images/logo.png',
        navbar: [
            {
                text: 'JDK & JVM',
                children: [
                    {
                        text: '基本类型',
                        link: '#'
                    },
                    {
                        text: '集合工具类',
                        link: '#'
                    },
                    {
                        text: "NIO",
                        link: '#'
                    },
                    {
                        text: 'JVM',
                        link: '#'
                    }
                ]
            },
            {
                text: 'Spring',
                children: [
                    {
                        text: 'Spring Boot',
                        link: '#'
                    },
                    {
                        text: 'Spring Framework',
                        link: '#'
                    },
                    {
                        text: 'Spring Cloud',
                        children: [
                            {
                                text: 'Spring Cloud Gateway',
                                link: '#'
                            },
                            {
                                text: 'Spring Cloud Function',
                                link: '#'
                            }
                        ]
                    },
                ],
            },
            {
                text: 'Serverless',
                link: '/serverless.html'
            },
            {
                text: '计算机网络',
                children: [
                    {
                        text: '网络基础',
                        link: '#'
                    },
                    {
                        text: 'TCP/IP',
                        link: '#'
                    },
                    {
                        text: 'HTTP',
                        link: '#'
                    },
                    {
                        text: 'RPC',
                        link: '#'
                    }
                ]
            },
            {
                text: '操作系统',
                link: '/os.html'
            },
            {
                text: '关于',
                link: '/about.html'
            },
        ],
        notFound: [
            '不知什么缘故，你访问了一个不存在的页面 :(',
            '你当前访问的页面已经不存在了哦 -.-',
            '山重水复疑无路...当前页面消失咯~',
            '要么是你穿越了，当前页面还没有诞生；要么你来晚了，页面丢失了；要么...',
            '当你看到404的时候，不要尝试刷新页面了，想要访问的内容再也出不来了。',
            '“车到山前必有路”，你到这里时已经啥都没有咯~'
        ],
        backToHome: '返回首页看看？好的。'
    }),
    plugins: [
        docsearchPlugin({
            // 配置项
        }),
    ],
}
