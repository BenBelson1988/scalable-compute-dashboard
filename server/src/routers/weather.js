const express = require("express");
const router = new express.Router();
const fetch = require("node-fetch");

// api key = 678bab8756004572a98125524221402

router.get("/:cityName", async (req, res) => {
  try {
    const cityName = req.params.cityName;
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=678bab8756004572a98125524221402&q=${cityName}&days=1&aqi=no&alerts=no`
    );
    const data = await response.json();
    res.send(data);
    console.log(data);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
