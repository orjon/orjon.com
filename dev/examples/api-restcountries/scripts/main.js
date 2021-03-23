$(() => {

  console.log('RESTCountries API')

  // const buttonAction = function(e) {
  //   e.preventDefault()
  //   e.stopPropagation()
  //   $('#id').text('text')
  //}

  const $countries = $('.countries')
  var countries = []
  var worstCase= []

  function getSpecificCountries(filter='all') {
    console.log('getting specific countries')
    $.ajax({
      method: 'GET',
      url: `https://restcountries.eu/rest/v2/${filter}`
    })
      .then(response => {
        countries = response
        console.log(countries)
        displayCountries()
        console.log(countries[9])
      })
  }

  console.log(countries[0])

  function displayCountries() {
    $countries.empty()
    countries.forEach(country => {
      var languages =[]
      country.languages.forEach(language => {
        languages.push(' '+language.name)
      })

      var currencies = []
      country.currencies.forEach(currency => {
        if (currency.symbol !== null) {
          currencies.push(' '+currency.symbol+' '+currency.name)
        } else {
          currencies.push(' '+currency.name)
        }
      })

      var timezones =[]
      country.timezones.forEach(timezone => {
        timezones.push(' '+timezone)
      })

      var area = 'unavailable'
      if (country.area !== null) {
        area = country.area
      }

      $countries.append(`
        <div class='card country'>
          <div class='details'>
            <h3 class='row'><a href='https://en.wikipedia.org/wiki/${country.name}'>${country.name}&nbsp</a>(${country.alpha2Code})</h3>
            <h4 class='row'>${country.nativeName}</h4>
            <div class='row'>
              <img src=${country.flag} alt="Flag of ${country.name}" />
            </div>

            <div class='row'>
              <div class='labels'>
                <p>Capital</p>
              </div>
              <div class='data'>
                <p>${country.capital}</p>
              </div>
            </div>

            <div class='row'>
              <div class='labels'>
                <p>Area</p>
              </div>
              <div class='data'>
                <p>${area.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} km<sup>2</sup></p>
              </div>
            </div>


            <div class='row'>
              <div class='labels'>
                <p>Population</p>
              </div>
              <div class='data'>
                <p>${country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
              </div>
            </div>

            <div class='row'>
              <div class='labels'>
                <p>Languages</p>
              </div>
              <div class='data'>
                <p>[${languages.length}]${languages}</p>
              </div>
            </div>



            <div class='row'>
              <div class='labels'>
                <p>Currencies</p>
              </div>
              <div class='data'>
                <p>[${currencies.length}]${currencies}</p>
              </div>
            </div>

            <div class='row'>
              <div class='labels'>
                <p>Timezones</p>
              </div>
              <div class='data'>
                <p>[${timezones.length}]${timezones}</p>
              </div>
            </div>

            <div class='row'>
              <div class='labels'>
                <p>Domain</p>
              </div>
              <div class='data'>
                <p>${country.topLevelDomain}</p>
              </div>
            </div>

            <div class='row'>
              <div class='labels'>
                <p>Calling Code</p>
              </div>
              <div class='data'>
                <p>+${country.callingCodes}</p>
              </div>
            </div>



          </div>
        </div>
      `)
    })
  }

  getSpecificCountries()

  function findLongest(array) {
    array.forEach(item => {

    })
  }



})




//
// <div class='row'>
//   <div class='labels'>
//     <p>Area</p>
//   </div>
//   <div class='data'>
//     <p>${country.area.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} km<sup>2</sup></p>
//   </div>
// </div>
//
