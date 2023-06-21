const Flight = require ('../models/flight')

module.exports = {
    new: newFlight,
    create,
    index,
};

async function index (req, res) {
    const allFlights = await Flight.find();
    res.render('flights/', {
        flights: allFlights
    })
} 

function newFlight (req, res){
    res.render('flights/new', {errorMsg: ''});
}

async function create(req, res) {
    try {
        const flightNewData = {
          airline: req.body.airline,
          airport: req.body.airport,
          flightNo: req.body.flightNo,
          departs: new Date(req.body.departs)
        };
    
        await Flight.create(flightNewData);
        res.redirect('/flights');
      } catch (error) {
        console.log(error);
        res.render('flights/new', { errorMsg: error.message });
}
}
