

var app = new Vue({
    el: '#site-body',
    data: {
        widthControl:'350',
        show: false,
        pagination: {},
        panel:[true,true,true,true,true,true],
        headers: [
            {
                text: '材料名称',
                align: 'left',
                sortable: false,
                value: 'name'
            },
            { text: '数量', value: 'quantity', sortable: true, },
            { text: '份量', value: 'detail', sortable: true, },
        ],
        material: [
            {
                name: '草鱼',
                quantity: '1条',
                detail: '500克'
            },
            {
                name: '青椒',
                quantity: '1根',
                detail: '50克'
            },
            {
                name: '红椒',
                quantity: '1根',
                detail: '10克'
            },
            {
                name: '油',
                quantity: '4汤匙',
                detail: '36毫升'
            },
            {
                name: '生抽',
                quantity: '2茶匙',
                detail: '11毫升'
            },
            {
                name: '老抽',
                quantity: '2茶匙',
                detail: '2毫升'
            },
            {
                name: '料酒',
                quantity: '2茶匙',
                detail: '9毫升'
            },
            {
                name: '盐',
                quantity: '少许',
                detail: '-'
            },
            {
                name: '白砂糖',
                quantity: '1茶匙',
                detail: '3克'
            },
            {
                name: '鸡精',
                quantity: '少许',
                detail: '-'
            },
            {
                name: '白胡椒粉',
                quantity: '-',
                detail: '1克'
            },
            {
                name: '香辣酱',
                quantity: '1汤匙',
                detail: '15克'
            },
            {
                name: '姜片',
                quantity: '5片',
                detail: '5克'
            },
            {
                name: '蒜瓣',
                quantity: '5瓣',
                detail: '5克'
            },
            {
                name: '水量',
                quantity: '-',
                detail: '200毫升'
            },
        ]
        , messages: [
            {
                avatar: './assets_files/132',
                title: 'linuxer程🏀',
                comment: '这道菜应该不适合孕妇'
            },
            {
                avatar: './assets_files/132',
                title: 'linuxer程🏀',
                comment: '这道菜不适合孕妇，太辣了'
            },
            {
                avatar: './assets_files/132(1)',
                title: '周宗旭 Benny',
                comment: '挺好吃，确实方便，比较便捷'
            },
            {
                avatar: './assets_files/132(2)',
                title: '杨应彬 Ben Yang',
                comment: '觉得在外面吃亏大了，看起来很简单啊'
            },
            {
                avatar: './assets_files/132(3)',
                title: '孟德龙',
                comment: '心服口服~~诶,不说了,跨界当道,我也去厨房写诗了(๑‾ ꇴ ‾๑)'
            },
            {
                avatar: './assets_files/0',
                title: '🚬Dan',
                comment: '这鱼要先用别的锅炸一下吗？'
            },
        ],




    },
    computed: {
        pages() {
            if (this.pagination.rowsPerPage == null ||
                this.pagination.totalItems == null
            ) return 0

            return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
        }
    }



})


app.$vuetify.theme.primary = '#2c76fb';