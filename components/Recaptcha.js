import ReCAPTCHA from "react-google-recaptcha"

const SITEKEY = process.env.SITEKEY

function Recaptchas(props) {

    function onChange(value) {

        fetch(`/api/recaptchaVerify`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                humanKey: value
            })
        }).then(res => res.json())
            .then((json) => {
                if (json.status) {
                    props.setTheCaptcha()
                    return true
                } else {
                    return false
                }
            })
            .catch(err => {
                throw err

            })

    }

    return <div className={'form_group_recaptcha'}>
        <ReCAPTCHA
            sitekey={'6Lfwd1kdAAAAAErrhNEKjaQ12Y0BNkVaomsl2LCC'}
            onChange={onChange} /> <br />
    </div>

}

export default Recaptchas
