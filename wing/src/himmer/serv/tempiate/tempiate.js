
export default {
    tempiates: async (vue, data = { }) => {
        data['isBlocked'] = false
        let res = await vue.net.get('tempiates', vue.token(), data)
        res = res ? vue.strapi.data( res ) : [ ]
        // console.log('SERVER tempiates =', res)
        return res
    },

    send_Tempiate: async (vue, lang, data = { }) => {
        if (!data.components) { delete data.components }
        try {
            const res = await vue.net.post('send_tempiate', vue.token(), data, { lang })
        } catch(err) {
            console.log('错误 =', err)
        }
    }
}