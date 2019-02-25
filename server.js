var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

app.get('/scrape', function(req, res) {

  url = 'https://www.moneycontrol.com/india/stockpricequote/banks-private-sector/axisbank/AB16';

  request(url, function(error, response, html) {
        if (!error) {
            var $ = cheerio.load(html);
            var json = [{ bse : "", nse : ""}];
            json[0]['bse'] = $("#Bse_Prc_tick strong").text();
            json[0]['nse'] = $("#Nse_Prc_tick strong").text();
        }
        res.json(json);
    })
})

const port = 5000;
app.listen(port, () => `Server running on port ${port}`);
exports = module.exports = app;