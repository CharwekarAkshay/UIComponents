'use strict'
const textHolder = document.querySelector('.text-holder');
const dropDownSearch = document.querySelector('#dropdown-search');
const dropDownValueHolder = document.querySelector('#dropdown-value-holder');
const search = document.querySelector('#search');
// const dropdownSearchDiv = document.querySelector('.dropdown-search-div');
let isDropDownOpen = false;

// Initialize the value when value arrives
window.onload =  function(){
    const bondClassification = getBondClassification()['bondClassification'];
    initializeDropDown(bondClassification);
    enableClick();
}
// Open Close dropdown
function toggleDropDown() {
    if (isDropDownOpen) {
        dropDownSearch.classList.remove('open');
        dropDownSearch.classList.add('close');
    } else {
        dropDownSearch.classList.remove('close');
        dropDownSearch.classList.add('open');
    }
    isDropDownOpen = !isDropDownOpen;
}

textHolder.addEventListener('click', function () {
    toggleDropDown();
});

// Function for initializing list
function initializeDropDown(bondClassificationList){
    dropDownValueHolder.innerHTML = '';
    let div = document.createElement('div');
    for( let value of bondClassificationList ){
        let dropDownDiv = document.createElement('div');
        dropDownDiv.className = 'dropdown-search-div';
        let span = document.createElement('span');
        span.innerText = value.classificationName;
        dropDownDiv.appendChild(span);
        div.appendChild(dropDownDiv);
    }   
    dropDownValueHolder.appendChild(div);
}

// Implement debounce to increase performance
search.addEventListener('keyup',function(event){
    const searchValue  = event.target.value;
    const bondClassification = getBondClassification()['bondClassification'];
    let filteredBondClassification = [];
    bondClassification.filter(obj => {
        if(obj.classificationName.toLowerCase().includes(searchValue.toLowerCase()))
            filteredBondClassification.push(obj);
    });
    initializeDropDown(filteredBondClassification);
    enableClick();
});

function clickEvent(event){
    const selectedBond = event.target.innerHTML;
    toggleDropDown();
    const selectedValue = document.querySelector('#selected-value');
    selectedValue.innerText = selectedBond;
}

function enableClick() {
    const dropdownSearchDiv= document.querySelectorAll('.dropdown-search-div');
    for(const element of dropdownSearchDiv){
        element.addEventListener('click', clickEvent);
    }
}

// Return the JSON for dropdown
function getBondClassification(){
    return {
        "bondClassification": [
          {
            "id": 275,
            "classificationName": "Abstractors License",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 276,
            "classificationName": "Air Conditioning & Refrigeration Contractors",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 426,
            "classificationName": "Alcohol Beverage Tax  (State Taxes)",
            "creditScore": 700,
            "premiumRate": 0.015,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 424,
            "classificationName": "Alcoholic - Beverage Control Transportation Permits",
            "creditScore": 650,
            "premiumRate": 0.015,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 388,
            "classificationName": "Alcoholic - Manuf, Brewers, Distillers, Winemakers, Warehouses",
            "creditScore": 650,
            "premiumRate": 0.015,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 387,
            "classificationName": "Alcoholic - Retailer for Consumption off premises only",
            "creditScore": 650,
            "premiumRate": 0.015,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 386,
            "classificationName": "Alcoholic - Retailers for Consumption on or both on and off premises",
            "creditScore": 650,
            "premiumRate": 0.015,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 385,
            "classificationName": "Alcoholic - Wholesalers",
            "creditScore": 650,
            "premiumRate": 0.015,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 277,
            "classificationName": "Amusement Permits",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 403,
            "classificationName": "Amusement Taxes",
            "creditScore": 725,
            "premiumRate": 0.015,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 536,
            "classificationName": "Animal Trainer License",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&Pstandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 278,
            "classificationName": "Areaway Permit",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 279,
            "classificationName": "Athletic Events/Contests (excludes Lease Agreements)",
            "creditScore": 700,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 280,
            "classificationName": "Auctioneers other than Livestock",
            "creditScore": 630,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 281,
            "classificationName": "Automatic Vending Machines",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 282,
            "classificationName": "Awnings License",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 384,
            "classificationName": "Beverage Tax Bond",
            "creditScore": 700,
            "premiumRate": 0.015,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 283,
            "classificationName": "Billiard Halls License",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 284,
            "classificationName": "Bingo Halls License",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 285,
            "classificationName": "Bird Nesting",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 286,
            "classificationName": "Blasting Permits",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 287,
            "classificationName": "Boiler License",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 288,
            "classificationName": "Bowling Alleys License",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 289,
            "classificationName": "Boxing/Sports Events (excludes Lease Agreements)",
            "creditScore": 700,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 290,
            "classificationName": "Building Permit",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 292,
            "classificationName": "Canopies License or Permit",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 293,
            "classificationName": "Cemetery Permits",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 294,
            "classificationName": "Cesspools License",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 407,
            "classificationName": "Cigar Taxes",
            "creditScore": 700,
            "premiumRate": 0.015,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 389,
            "classificationName": "Cigar, Cigarette and Tobacco Taxes",
            "creditScore": 700,
            "premiumRate": 0.015,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 408,
            "classificationName": "Cigarette Taxes",
            "creditScore": 700,
            "premiumRate": 0.015,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 375,
            "classificationName": "Collection Agency ",
            "creditScore": 650,
            "premiumRate": 0.015,
            "smallLargeApplication": 2,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 100000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 398,
            "classificationName": "Commission Merchants other than Livestock",
            "creditScore": 700,
            "premiumRate": 0.015,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 412,
            "classificationName": "Concessionaires",
            "creditScore": 650,
            "premiumRate": 0.015,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 295,
            "classificationName": "Consumer Discount Companies",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 296,
            "classificationName": "Contractors License (excludes the State of WA, AK, MD)",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 50000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 297,
            "classificationName": "Curb & Footway Contractors",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 298,
            "classificationName": "Dance Halls/Studio License",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 402,
            "classificationName": "Debt Consolidators and Fund Raisers",
            "creditScore": 700,
            "premiumRate": 0.015,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 299,
            "classificationName": "Dentists License",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 300,
            "classificationName": "Detective & Detective Agencies License",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 301,
            "classificationName": "Dog Racing Permit (Taxes)/License Fees",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 535,
            "classificationName": "Dog Walkers License",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&Pstandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 302,
            "classificationName": "Drain Layers License or Permit",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 303,
            "classificationName": "Draymen (Brewery)",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 304,
            "classificationName": "Driveway Permits - Contractors",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 413,
            "classificationName": "Driving School License",
            "creditScore": 700,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 305,
            "classificationName": "Electricians License or Permit",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 538,
            "classificationName": "Elevator Contractors License or Permit",
            "creditScore": 650,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&Pstandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 306,
            "classificationName": "Employment Agency License",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 307,
            "classificationName": "Excavation Bonds",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 308,
            "classificationName": "Exterminating Contractors",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 430,
            "classificationName": "Fire/Burglar Alarm and Locksmith",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 309,
            "classificationName": "Franchise Taxes",
            "creditScore": 700,
            "premiumRate": 0.015,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 537,
            "classificationName": "Freight Broker BMC-84 License",
            "creditScore": 650,
            "premiumRate": 0.05,
            "smallLargeApplication": 2,
            "premiumRateId": 58,
            "productGroup": "L&Pstandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 100000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 310,
            "classificationName": "Freight Elevators",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 453,
            "classificationName": "Fuel Tax Bond",
            "creditScore": 700,
            "premiumRate": 0.02,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 311,
            "classificationName": "Fumigators License",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 312,
            "classificationName": "Funeral Directors License",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 313,
            "classificationName": "Game Reserve License",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 314,
            "classificationName": "Garage License",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 315,
            "classificationName": "Gas Fitters License",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 390,
            "classificationName": "Gasoline, Diesel Fuel and Kerosene Tax Bonds",
            "creditScore": 700,
            "premiumRate": 0.015,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 399,
            "classificationName": "Grazing and Farming Permits and Leases",
            "creditScore": 600,
            "premiumRate": 0.015,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 316,
            "classificationName": "Guard Service License",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 317,
            "classificationName": "Gutter Contractors",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 318,
            "classificationName": "Hack Drivers License",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 319,
            "classificationName": "Heating & Air Conditioning Contractors",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 320,
            "classificationName": "Highway /Street Permits",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 321,
            "classificationName": "Hoisting License or Permit",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 322,
            "classificationName": "Home Health Care",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 323,
            "classificationName": "Horse Racing License",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 324,
            "classificationName": "House Movers License or Permit",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 325,
            "classificationName": "House Wrecker License or Permit",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 326,
            "classificationName": "Hunters' Licenses",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 327,
            "classificationName": "HVAC License or Permit",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 401,
            "classificationName": "Insurance Adjusters, Agents and Brokers",
            "creditScore": 700,
            "premiumRate": 0.015,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 50000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 328,
            "classificationName": "Junk Dealers License or Permit",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 427,
            "classificationName": "Liquor Tax (State Taxes Shipping to another State)",
            "creditScore": 700,
            "premiumRate": 0.02,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 397,
            "classificationName": "Livestock Dealers excluding Packers and Stockyards Act",
            "creditScore": 700,
            "premiumRate": 0.015,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 454,
            "classificationName": "Lost Car Title/Defective Vehicle Title (Includes Donated Vehicle)",
            "creditScore": 650,
            "premiumRate": 0.02,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": true,
            "productConfig": null
          },
          {
            "id": 329,
            "classificationName": "Magazine & Book Solicitors",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 330,
            "classificationName": "Market Agencies",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 429,
            "classificationName": "Master HVACR Bond",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 394,
            "classificationName": "Milk Dealers License",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 421,
            "classificationName": "Money Transmitters",
            "creditScore": 700,
            "premiumRate": 0.02,
            "smallLargeApplication": 2,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 100000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 374,
            "classificationName": "Mortgage Brokers License",
            "creditScore": 700,
            "premiumRate": 0.02,
            "smallLargeApplication": 2,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 250000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 377,
            "classificationName": "Motor Vehicle - New or New and Used Car Dealers and Salesman",
            "creditScore": 700,
            "premiumRate": 0.02,
            "smallLargeApplication": 2,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 100000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 378,
            "classificationName": "Motor Vehicle Bond - Aircraft",
            "creditScore": 700,
            "premiumRate": 0.02,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 379,
            "classificationName": "Motor Vehicle Bond - COD Shipments",
            "creditScore": 700,
            "premiumRate": 0.02,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 380,
            "classificationName": "Motor Vehicle Bond - Mileage Tax Bonds",
            "creditScore": 700,
            "premiumRate": 0.02,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 450,
            "classificationName": "Motor Vehicle Towing/Storing",
            "creditScore": 700,
            "premiumRate": 0.02,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 383,
            "classificationName": "Newspaper Carrier",
            "creditScore": 600,
            "premiumRate": 0.02,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 381,
            "classificationName": "Newspaper Distributor",
            "creditScore": 600,
            "premiumRate": 0.02,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 382,
            "classificationName": "Newspaper Saleman",
            "creditScore": 600,
            "premiumRate": 0.02,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 332,
            "classificationName": "Newsstand Operators",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 291,
            "classificationName": "Non-Beverage Alcohol Permit",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 334,
            "classificationName": "Nurserymen License/Permit",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 335,
            "classificationName": "Oil Burners License",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 422,
            "classificationName": "Opening Streets",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 456,
            "classificationName": "Operate Nursing Home",
            "creditScore": 700,
            "premiumRate": 0.02,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&Pstandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 336,
            "classificationName": "Ordinance Permit",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 431,
            "classificationName": "Other – Please call the office for an Application.",
            "creditScore": 650,
            "premiumRate": null,
            "smallLargeApplication": null,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": true,
            "productConfig": null
          },
          {
            "id": 337,
            "classificationName": "Overweight Excess Road Permits",
            "creditScore": 630,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 395,
            "classificationName": "Packers and Stockyards Act: Market Agenices or Dealers",
            "creditScore": 700,
            "premiumRate": 0.015,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 396,
            "classificationName": "Packers and Stockyards Act: Packers",
            "creditScore": 650,
            "premiumRate": 0.015,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 338,
            "classificationName": "Pawnbrokers License",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 339,
            "classificationName": "Peddler Permit",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 340,
            "classificationName": "Permanent Merchants",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 341,
            "classificationName": "Pest Control Contractor",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 342,
            "classificationName": "Photographers License",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 343,
            "classificationName": "Physicians",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 344,
            "classificationName": "Pilots License",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 345,
            "classificationName": "Pipeline Permits",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 346,
            "classificationName": "Plumbers License or Permit",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 405,
            "classificationName": "Private Bankers - Purchasers of drafts and exchange",
            "creditScore": 725,
            "premiumRate": 0.02,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 347,
            "classificationName": "Private Guard/Watch Services",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 420,
            "classificationName": "Private Investigator",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 433,
            "classificationName": "Processor Server Bond",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 449,
            "classificationName": "Professional Guardianship Bond",
            "creditScore": 700,
            "premiumRate": 0.015,
            "smallLargeApplication": 2,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 100000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 348,
            "classificationName": "Professional Licenses",
            "creditScore": 700,
            "premiumRate": 0.025,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 434,
            "classificationName": "Professional Photocopiers Bond",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 349,
            "classificationName": "Public Movers",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 400,
            "classificationName": "Real Estate Agents and Brokers",
            "creditScore": 700,
            "premiumRate": 0.015,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 452,
            "classificationName": "Recycling/Trash Hauler",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 350,
            "classificationName": "Refrigeration Contractor",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 419,
            "classificationName": "Retail Electric Agents, Brokers and Consultants (ABC)",
            "creditScore": 700,
            "premiumRate": 0.02,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 352,
            "classificationName": "Retail Services",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 351,
            "classificationName": "Retail Stores",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 432,
            "classificationName": "Sales Finance License",
            "creditScore": 700,
            "premiumRate": 0.02,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 404,
            "classificationName": "Sales Taxes",
            "creditScore": 700,
            "premiumRate": 0.02,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 428,
            "classificationName": "Sales Taxes (Non-Resident and Resident Contractor)",
            "creditScore": 700,
            "premiumRate": 0.02,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 353,
            "classificationName": "Scales License or Permit",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 354,
            "classificationName": "School License Bonds",
            "creditScore": 700,
            "premiumRate": 0.02,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 406,
            "classificationName": "Sellers of Checks/Money Orders and Money Transmitters",
            "creditScore": 725,
            "premiumRate": 0.02,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 355,
            "classificationName": "Sewer Openers License or Permit",
            "creditScore": 630,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 356,
            "classificationName": "Sewer Tappers License or Permit",
            "creditScore": 630,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 359,
            "classificationName": "Sidewalk License Bond - not quaranteeing contract or performance",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 357,
            "classificationName": "Sidewalk Permit - Contractors",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 358,
            "classificationName": "Sign/Sign Hanging Contractors",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 455,
            "classificationName": "Spec. Residential Contractor - No Roofing",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 360,
            "classificationName": "Sport Permits (excludes Lease Agreements)",
            "creditScore": 700,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 410,
            "classificationName": "Stamp Consignment Taxes",
            "creditScore": 700,
            "premiumRate": 0.02,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 362,
            "classificationName": "Street Obstruction",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 361,
            "classificationName": "Street Opening",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 363,
            "classificationName": "Street Permits",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 376,
            "classificationName": "Surplus Lines Agents/Brokers",
            "creditScore": 700,
            "premiumRate": 0.02,
            "smallLargeApplication": 2,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 100000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 364,
            "classificationName": "Tax Preparers",
            "creditScore": 600,
            "premiumRate": 0.005,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 365,
            "classificationName": "Temporary Help Service Firm",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 423,
            "classificationName": "Ticket Broker License",
            "creditScore": 650,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 366,
            "classificationName": "Title Insurance Agents",
            "creditScore": 630,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 409,
            "classificationName": "Tobacco Taxes",
            "creditScore": 700,
            "premiumRate": 0.015,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 367,
            "classificationName": "Toll Lines",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 368,
            "classificationName": "Travel Agencies License",
            "creditScore": 630,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 425,
            "classificationName": "TTB Wine (Federal Tax)",
            "creditScore": 700,
            "premiumRate": 0.015,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 369,
            "classificationName": "Use of Fire Apparatus",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 370,
            "classificationName": "Vaults License",
            "creditScore": 630,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 411,
            "classificationName": "Vending Machine Taxes",
            "creditScore": 700,
            "premiumRate": 0.015,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 371,
            "classificationName": "Veterinarian License",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 391,
            "classificationName": "Warehousing: Grain - Commodity Credit Corp",
            "creditScore": 700,
            "premiumRate": 0.015,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 393,
            "classificationName": "Warehousing: Grain - State",
            "creditScore": 700,
            "premiumRate": 0.015,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 392,
            "classificationName": "Warehousing: Grain - U.S. Warehouse Act",
            "creditScore": 700,
            "premiumRate": 0.015,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 372,
            "classificationName": "Water Well Drillers License or Permit",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          },
          {
            "id": 373,
            "classificationName": "Weighmasters and other Quality Control Inspectors",
            "creditScore": 600,
            "premiumRate": 0.01,
            "smallLargeApplication": 1,
            "premiumRateId": 58,
            "productGroup": "L&PStandard",
            "minimumPremium": 100,
            "callOfficeForQuote": false,
            "productConfig": {
              "minAmount": 1000,
              "maxAmount": 25000,
              "incrementBy": 500,
              "bondTerm": 1
            }
          }
        ]
      }
      ;
}
