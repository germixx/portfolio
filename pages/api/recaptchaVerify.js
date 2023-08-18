require("es6-promise").polyfill()
require("isomorphic-fetch")

const RECAPTCHA_SERVER_KEY = process.env.RECAPTCHA_SERVER_KEY

const validateHuman = async (humanKey) => {
    let isHuman
    return new Promise((resolve, reject) => {

        // Validate Human
        fetch(`https://www.google.com/recaptcha/api/siteverify`, {
            method: "post",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
            },
            body: `secret=${RECAPTCHA_SERVER_KEY}&response=${humanKey}`
        })
            .then(res => res.json())
            .then(json => {
                isHuman = true
                json.success
                resolve({ status: true })

            })
            .catch(err => {
                throw new Error(`Error in Google Siteverify API. ${err.message}`)
                resolve({ status: false })
            })



    }).catch(e => console.log(e))

    // if (humanKey === null || !isHuman) {
    //     throw new Error(`YOU ARE NOT A HUMAN.`)
    //     resolve({ status: false })
    // }
}

export default async (req, res) => {

    const { method } = req

    const humanKey = req.body.humanKey

    switch (method) {
        case 'GET':
            break
        case 'POST':
            let f = await validateHuman(humanKey)
            res.send(f)
            break
        case 'UPDATE':
            break
        case 'DELETE':
            break
        default:
            res.setHeader('Allow', ['POST'])
            res.status(405).end(`Method ${method} Not Allowed`)
            res.end()
    }

}