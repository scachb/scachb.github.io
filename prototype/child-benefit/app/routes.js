//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here




router.post('/bank-payment-answer', function(request, response) {

    var payment = request.session.data['payment']

    if (payment == "bank"){
        response.redirect("/bank-account-holder-details")
    } else {
        response.redirect("/start.html")
    }
})


router.post('/your-net-income-answer', function(request, response) {

    var YourNetIncome = request.session.data['your-net-income']
    if (YourNetIncome == "Below 50,100"){
        response.redirect("/below-50k-question")
    }
    else if (YourNetIncome == "£50,100 - £60,000"){
        response.redirect("/50k-60k-question")
    }
    else if (YourNetIncome == "Above £60,000"){
        response.redirect("/above-60k-question")
    }
   
})