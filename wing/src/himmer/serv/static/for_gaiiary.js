

export default {
    gaiiary_of_user: async (vue, phone_number, _start = 0, _limit = 30, _type = [ 'image', 'video', 'audio', 'file' ]) => {
        let condition = '?phone_number=' + phone_number + '&_start=' + _start + '&_limit=' + _limit
        _type.map(e => {
            condition += ('&type_in=' + e)
        })
        let res = await vue.net._get('message', vue.token(), condition)
        if ( res && res.status == 200 ) {
            res = vue.strapi.data( res )
        }
        return res ? res : [ ]
    },
}