function sendMail(params) {
    event.preventDefault()
    var tempParams = {
        from_name: document.getElementById('from_name').value,
        to_name: document.getElementById('email_user').value,
        company_name: document.getElementById('company_name').value,
        title_message: document.getElementById('title_message').value,
        message: document.getElementById('message').value,
    };
    emailjs.send('contact_service_landing', 'template_6t1ma4k', tempParams)
        .then(function(res) {
            console.log(res.status);
            Rollbar.info(res)
        })
        .catch(function (error) {
            console.log(error);
            Rollbar.error(error)
        })
}