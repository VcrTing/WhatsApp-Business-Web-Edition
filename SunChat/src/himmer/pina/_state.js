
import me from "../mook/me"
import users from "../mook/users"

export default () => {
    return {
        me,
        jwt: '',
        chatter: null,

        rooms: { },

        tempiates: [ ],
        contacts: [ ],

        // 0 = 非打开，1 = 图片 Gaiiary
        MODAL: 0,

        // 0 = 非打开，1 = 聊天用户详情面板
        PANNER: 0, 
        // 0 = 非打开，1 = 我的详情
        PANNER_LEFT: 0, 

        GALLARY: [  ]
    }
}