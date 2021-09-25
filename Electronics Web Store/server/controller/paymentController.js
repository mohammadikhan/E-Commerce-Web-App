import paytmchecksum from "../paytm/PaytmChecksum.js"
import formidable from "formidable"
import https from "https"
import { paytmMerchantKey, paytmParams } from "../index.js"

export const addPaymentGateway = async (request, response) => { // paytm params, merchantKey
    let paytmChecksum = await paytmchecksum.generateSignature(paytmParams, paytmMerchantKey)

    try {
        let params = {
            ...paytmParams, 'CHECKSUMHASH': paytmChecksum
        }

        response.json(params)

    } catch (error) {
        console.log(error)
    }

    
}


export const paymentResponse = (request, response) => {
    const form = new formidable.IncomingForm()
    let paytmCheckSum = request.body.CHECKSUMHASH
    delete request.body.CHECKSUMHASH

    let isVerifySignature = paytmchecksum.verifySignature(request.body, 'bKMfNxPPf_QdZppa', paytmCheckSum)

    if (isVerifySignature) {
        paytmParams['MID'] = request.body.MID
        paytmParams['ORDERID'] = request.body.ORDERID
        
        paytmchecksum.generateSignature(paytmParams, 'bKMfNxPPf_QdZppa').then(function(checksum){
            paytmParams['CHECKSUMHASH'] = checksum

            let post_data = JSON.stringify(paytmParams)

            let options = {
                hostname: 'securegw-stage.paytm.in',
                port: 443,
                path: '/order/status',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Content-Length': post_data.length
                }
            };

            let res = ''

            let post_req = https.request(options, function(post_res){
                post_res.on('data', function(chunk) {
                    res += chunk
                })

                post_res.on('end', function() {
                    let result = JSON.parse(res)
                    response.redirect('http://localhost:3000/')
                });
            });

            post_req.write(post_data)
            post_req.end()
        })
    } else {
        console.log("checksum was not matced")
    }


}