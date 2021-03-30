import {
    config
} from '../config.js'

const tips = {
    1: '抱歉，出现了一个错误',
    3000: '期刊不存在'
}

const {
    showToast
} = getApp()

class HTTP {
    request(params) {
        // url, data, method,
        if (!params.method) {
            params.method = "GET"
        }
        wx.request({
            url: config.api_base_url + params.url,
            method: params.method,
            data: params.data,
            header: {
                'content-type': 'application/json',
                'Authorization': 'Basic ZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SjFhV1FpT2pJc0luTmpiM0JsSWpvNExDSnBZWFFpT2pFMk1UY3dPVGs1TmpZc0ltVjRjQ0k2TVRZeE9UWTVNVGsyTm4wLnY1TVhQeGgzc2I1anF0Z1Bucndya2ZIdWxuV2Z4cGM0T2g5SERMTkVVOWM6'
            },
            success: (res) => {
                let code = res.statusCode.toString()
                if (code.startsWith('2')) {
                    params.success && params.success(res.data)
                } else {
                    let error_code = res.data.error_code
                    this._show_error(error_code)
                }
            },
            fail: (err) => {
                this._show_error(1)
            }
        })

    }


    _show_error(error_code) {
        if (!error_code) {
            error_code = 1
        }
        const tip = tips[error_code]
        showToast(tip ? tip : tips[1])
    }


}

export {
    HTTP
}