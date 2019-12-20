window.onload = function () {

    var router = new VueRouter({
        routes: [{
            path: '/',
            component: {
                template: "#index",
                data() {
                    return {
                        item_in: [{ title: "医疗PPP有望成后起之秀 概念股早盘活跃", text: "当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网..." }, { title: "医疗PPP有望成后起之秀 概念股早盘活跃", text: "当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网..." }, { title: "医疗PPP有望成后起之秀 概念股早盘活跃", text: "当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网..." }],
                        co2: [{
                            img: 'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNi8wN2I3NjA1NGMyNDA5ZmY3ZjAzYzFlMWUyOWY5OThhNi0yMzB4MjMwLnBuZw_p_p100_p_3D_p_p100_p_3D.png',
                            p1: 'THE PROJECT',
                            p2: 'NAME 01'
                        }, {
                            img: 'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNi85MDE3OWU5MzhmYWExODNmOGIwMWM4ODBmMDM3OTc2Ny0yMzB4MjMwLnBuZw_p_p100_p_3D_p_p100_p_3D.png',
                            p1: 'THE PROJECT',
                            p2: 'NAME 02'
                        }, {
                            img: 'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNi8zYmUyZTI0MWQ1Mzg2MGZmZGQ3MzM2M2I5YmIyN2M1My0yMzB4MjMwLnBuZw_p_p100_p_3D_p_p100_p_3D.png',
                            p1: 'THE PROJECT',
                            p2: 'NAME 03'
                        }, {
                            img: 'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNy9mNmY4MjRjNmU0YmVlZDVkMjRmZGVkZGVkMGRmZjZkOS0yMzB4MjMwLnBuZw_p_p100_p_3D_p_p100_p_3D.png',
                            p2: 'NAME 04'
                        }]
                    }
                }
            }
        }, {
            path: '/list',
            component: {
                template: '#list'
            },
            children: [{
                path: '/',
                component: {
                    data() {
                        return {
                            index: null,
                            arr: [
                                'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvODliOWE1ZWI3YjZhYjZkNWZjZjFiNjEyNDAyOWFhMWYtMjEweDIxMC5qcGc_p_p100_p_3D.jpg',
                                'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvOTQ3M2MwZWI4ODE4ZmYzM2Y5OGFmYWY1ODg2N2I4ZjgtMjEweDIxMC5qcGc_p_p100_p_3D.jpg',
                                'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvY2Y4YzM5NDJmMjU5YThmYmMzMDA3OWNiMTQ2NjE2MWYtMjEweDIxMC5qcGc_p_p100_p_3D.jpg',
                                'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvMDE1MmFkNTI5MjBkOWM3YTY4NmM5MjZjOTNhZTczMmMtMjEweDIxMC5qcGc_p_p100_p_3D.jpg',
                                'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvOTVlZjIxODM2NWUyOGJiODdhNjkwNWE3NDI4N2IxNWQtMjEweDIxMC5qcGc_p_p100_p_3D.jpg',
                                'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvMjZmZDhlZTY1YmM4YTcwZWZkNGNhOWI3OWFmMDg1NWYtMjEweDIxMC5qcGc_p_p100_p_3D.jpg',
                                'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMDYvN2Q4YTg0M2ZjODJjNDE3ODdkNTUxNTI1MGZjOWJjZDQtMjEweDIxMC5qcGc_p_p100_p_3D.jpg',
                                'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMDYvMWM4ODFjMGI3Y2JlMzcwZDUwZjNlOGIzN2U1NzE5ODYtMjEweDIxMC5qcGc_p_p100_p_3D.jpg'
                            ]
                        }
                    },
                    methods: {
                        btn(a) {
                            this.index = a
                        }
                    },
                    template: '#no'

                }
            },
            {
                path: 'shebeifenlei1',
                component: {
                    data() {
                        return {
                            index: null,
                            arr: [
                                'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvODliOWE1ZWI3YjZhYjZkNWZjZjFiNjEyNDAyOWFhMWYtMjEweDIxMC5qcGc_p_p100_p_3D.jpg',
                                'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvOTQ3M2MwZWI4ODE4ZmYzM2Y5OGFmYWY1ODg2N2I4ZjgtMjEweDIxMC5qcGc_p_p100_p_3D.jpg',
                                'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvY2Y4YzM5NDJmMjU5YThmYmMzMDA3OWNiMTQ2NjE2MWYtMjEweDIxMC5qcGc_p_p100_p_3D.jpg',
                            ]
                        }
                    },
                    methods: {
                        btn(a) {
                            this.index = a
                        }
                    },
                    template: '#no1'

                }
            },
            {
                path: 'shebeifenlei2',
                component: {
                    data() {
                        return {
                            index: null,
                            arr: [
                                'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvMDE1MmFkNTI5MjBkOWM3YTY4NmM5MjZjOTNhZTczMmMtMjEweDIxMC5qcGc_p_p100_p_3D.jpg',
                                'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvOTVlZjIxODM2NWUyOGJiODdhNjkwNWE3NDI4N2IxNWQtMjEweDIxMC5qcGc_p_p100_p_3D.jpg',
                                'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvMjZmZDhlZTY1YmM4YTcwZWZkNGNhOWI3OWFmMDg1NWYtMjEweDIxMC5qcGc_p_p100_p_3D.jpg'
                            ]
                        }
                    },
                    methods: {
                        btn(a) {
                            this.index = a
                        }
                    },
                    template: '#no2'

                }
            },
            {
                path: 'shebeifenlei3',
                component: {
                    data() {
                        return {
                            index: null,
                            arr: [
                                'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMDYvN2Q4YTg0M2ZjODJjNDE3ODdkNTUxNTI1MGZjOWJjZDQtMjEweDIxMC5qcGc_p_p100_p_3D.jpg',
                                'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMDYvMWM4ODFjMGI3Y2JlMzcwZDUwZjNlOGIzN2U1NzE5ODYtMjEweDIxMC5qcGc_p_p100_p_3D.jpg'
                            ]
                        }
                    },
                    methods: {
                        btn(a) {
                            this.index = a
                        }
                    },
                    template: '#no3'

                }
            }
            ]
        }, {
            path: '/news',
            component: {
                template: '#news'
            },
            children: [{
                path: 'all',
                template: '#all'
            },
            {
                path: 'hy',
                template: '#news'
            },
            {
                path: 'qy',
                template: '#news'
            },

            ]
        },
        {
            path: '/join',
            component: {
                template: '#join'
            }
        },
        {
            path: '/contact',
            component: {
                template: '#contact'
            }
        }]
    })

    Vue.component('foot', {
        template: "#footer"
    })
    Vue.component('lun', {
        template: "#lun",
        data() {
            return {
                arr: ['https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvZmVkNjAyMDAyZTZiNjRkYjVhZDg0MmEwN2U5Yjg5ODYucG5n.png', 'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvODBkMjY5NjYzNDJmNTM1ZjdkYmEwMjY2OTNmMmQ5ZjcucG5n.png', 'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvNzY5MDExMmQ0MjIzN2Y5YTg0OWVjNjc0N2NmOGMxYWYucG5n.png']
            }
        }
    })
    Vue.component('title-t', {
        template: "#title-t"
    })
    Vue.component('item-in', {
        template: "#item-in"
    })
    Vue.component('co2-item', {
        template: "#co2-item"
    })

    new Vue({
        el: '#box',
        data: {
            nav_a: [{ text: "首页", href: "#/" }, { text: "产品系列", href: "#/list" }, { text: "新闻中心", href: "#/news" }, { text: "加入我们", href: "#/join" }, { text: "联系我们", href: "#/contact" }]
        },
        router
    })

    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: false
    })

    var mySwiper = new Swiper('.box', {
        // direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项
        effect: 'fade',
        autoplay: {
            delay: 2000
        },
        speed: 3000
    })
}

