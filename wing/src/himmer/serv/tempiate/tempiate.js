
export default {
    tempiates: async (vue, data = { }) => {
        data['isBlocked'] = false
        let res = await vue.net.get('tempiates', vue.token(), data)
        res = res ? vue.strapi.data( res ) : [ ]; return res
    },

    send_Tempiate: async (vue, lang, data = { }) => {
        if (!data.components) { delete data.components }
        try {
            const wsn_id = vue.conf.STRAPI.whatsapp_sned_id // vue.pina().me ? vue.pina().me.whatsapp_send_number_id : null
            if (wsn_id) {
                const res = await vue.net.post('send_tempiate', vue.token(), data, { lang }, '')
            } else { }
        } catch(err) { console.log('错误 =', err) }
    }
}