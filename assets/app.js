//This is JS code for app from Przemek
//Variables are defined with p_

function Test(){
  console.log('click  from button');
}


let p_destinations = [
    {
        continent:'Europe',
        country:'Poland',
        code:'PL',
        city:'Warsaw',
        coord: {
        lon: 21.01178,
        lat: 52.229771
      }
        },
        {
         continent:'Europe',
         country:'Poland',
         code:'PL',
      	city:'Poznan',
      coord: {
        lon: 16.92993,
        lat: 52.406921
      }
    },
    {
         continent:'Europe',
         country:'Poland',
         code:'PL',
      	city:'Gdansk',
      	coord: {
        lon: 18.689699,
        lat: 54.361099
      }
    },
    {
         continent:'Europe',
         country:'France',
         code:'FR',
      	city:'Paris',
      	coord: {
        lon: 2.35236,
        lat: 48.856461
      }
      },
      
      {
         continent:'Europe',
         country:'France',
         code:'FR',
      	city:'Nice',
      	coord: {
        lon: 7.25,
        lat: 43.700001
      }
      },
      
      {
         continent:'Europe',
         country:'Italy',
         code:'IT',
      	city:'Sciacca',
      	coord: {
        lon: 13.08399,
        lat: 37.506931
      }
      },
      
      {
         continent:'Europe',
         country:'Italy',
         code:'IT',
      	city:'Casarano',
      	coord: {
        lon: 18.163031,
        lat: 40.015018
      }
      },
      
      {
         continent:'North America',
         country:'USA',
         code:'US',
      	city:'New York',
      	coord: {
        lon: -75.499901,
      lat: 43.000351
      }
      },
      
      {
         continent:'North America',
         country:'USA',
         code:'US',
      	city:'Washington',
      	coord: {
        lon: -91.69294,
      lat: 41.299179
      }
      },
      
       {
         continent:'North America',
         country:'USA',
         code:'US',
      	city:'Los Angeles',
      	coord: {
        lon: -118.243683,
      lat: 34.052231
      }
      }
      ,
      
       {
         continent:'North America',
         country:'USA',
         code:'US',
      	city:'California',
      	coord: {
        lon: -76.507446,
      lat: 38.3004
      }
      }
          ,
      
       {
         continent:'North America',
         country:'USA',
         code:'US',
      	city:'Texas',
      	coord: {
        lon: -99.25061,
      lat: 31.250441
      }
      }
      ,
      
       {
         continent:'North America',
         country:'Canada',
         code:'CA',
      	city:'Toronto',
      	coord: {
        lon: -79.416298,
      lat: 43.700111
      }
      }
      ,
      
       {
         continent:'North America',
         country:'Canada',
         code:'CA',
      	city:'Ottawa',
      	coord: {
        lon: -75.69812,
      lat: 45.411171
      }
      }
      ,
      
       {
         continent:'Asia',
         country:'China',
         code:'CN',
      	city:'Jiangchuanlu',
      	coord: {
        lon: 121.407417,
      lat: 31.01392
      }
      }
      
       ,
      
       {
         continent:'Asia',
         country:'China',
         code:'CN',
      	city:'Beijing',
      	coord: {
        lon: 116.397232,
      lat: 39.907501
      }
      }
      
      ,
      
       {
         continent:'Asia',
         country:'Thailand',
         code:'TH',
      	city:'Tha Maka',
      	coord: {
        lon: 99.76667,
      lat: 13.9
      }
      }
       ,
      
       {
         continent:'Asia',
         country:'Thailand',
         code:'TH',
      	city:'Bangkok',
      	coord: {
        lon: 100.51667,
      lat: 13.75
      }
      }
         ,
      
       {
         continent:'Australia',
         country:'Australia',
         code:'AU',
      	city:'Sydney',
      	coord: {
        lon: 151.207321,
      lat: -33.867851
      }
      }
      ,
      
       {
         continent:'Australia',
         country:'Australia',
         code:'AU',
      	city:'Canberra',
      	coord: {
        lon: 149.128067,
      lat: -35.283459
      }
      }
      
      ,
      
       {
         continent:'Australia',
         country:'Australia',
         code:'AU',
      	city:'Carindale',
      	coord: {
        lon: 153.102356,
      lat: -27.505779
      }
      }
      
      ,
      
       {
         continent:'Africa',
         country:'Egypt',
         code:'EG',
      	city:'Cairo',
      	coord: {
        lon: 31.24967,
      lat: 30.06263
      }
      }
      
      ,
      
       {
         continent:'Africa',
         country:'Egypt',
         code:'EG',
      	city:'Alexandria',
      	coord: {
        lon: 29.955271,
      lat: 31.215639
      }
      }
      
      ,
      
       {
         continent:'Africa',
         country:'Gabon',
         code:'GA',
      	city:'Dakar',
      	coord: {
        lon: 10.21667,
      lat: -0.7
      }
      }
      
      ,
      
       {
         continent:'Africa',
         country:'Gabon',
         code:'GA',
      	city:'Gamba',
      	coord: {
        lon: 10,
      lat: -2.65
      }
      }
      
      ,
      
       {
         continent:'South America',
         country:'Brasil',
         code:'BR',
      	city:'Rio de Janeiro',
      	coord: {
        lon: -43.2075,
      lat: -22.902781
      }
      }
      
     ,
      
       {
         continent:'South America',
         country:'Brasil',
         code:'BR',
      	city:'Salto',
      	coord: {
        lon: -47.286942,
      lat: -23.20083
      }
      }
      ,
      
       {
         continent:'Europe',
         country:'Great Britain',
         code:'GB',
      	city:'London',
      	coord: {
        "lon": -0.12574,
      "lat": 51.50853
      }
      }
      ,
      
       {
         continent:'Europe',
         country:'Germany',
         code:'DE',
      	city:'Berlin',
      	coord: {
        "lon": 13.41053,
      "lat": 52.524368
      }
      }
       ,
      
       {
         continent:'Europe',
         country:'Netherlands',
         code:'NL',
      	city:'Amsterdam',
      	coord: {
        "lon": 4.88969,
      "lat": 52.374031
      }
      }
      ,
      
       {
         continent:'Europe',
         country:'Austria',
         code:'AT',
      	city:'Vienna',
      	coord: {
         "lon": 16.37208,
      "lat": 48.208488
      }
      }
       ,
      
       {
         continent:'Europe',
         country:'Czechia',
         code:'CZ',
      	city:'Prague',
      	coord: {
         "lon": 14.42076,
      "lat": 50.088039
      }
      }
      ,
      
       {
         continent:'Europe',
         country:'Hungary',
         code:'HU',
      	city:'Budapest',
      	coord: {
         "lon": 19.039909,
      "lat": 47.498009
      }
      }
      ,
      
       {
         continent:'Europe',
         country:'Spain',
         code:'ES',
      	city:'Barcelona',
      	coord: {
        "lon": 2.12804,
      "lat": 41.399422
      }
      }
      ,
      
       {
         continent:'Europe',
         country:'Spain',
         code:'ES',
      	city:'Madrid',
      	coord: {
        "lon": -3.68275,
      "lat": 40.489349
      }
      }
       ,
      
       {
         continent:'Europe',
         country:'Danmark',
         code:'DK',
      	city:'Copenhagen',
      	coord: {
        "lon": 12.56553,
      "lat": 55.675941
      }
      }
       ,
      
       {
         continent:'Europe',
         country:'Portugal',
         code:'PT',
      	city:'Lisbon',
      	coord: {
        "lon": -9.13333,
      "lat": 38.716671
      }
      }
      ,
      
       {
         continent:'Europe',
         country:'Greece',
         code:'GR',
      	city:'Athens',
      	coord: {
         "lon": 23.716221,
      "lat": 37.97945
      }
      }
      ,
      
       {
         continent:'Europe',
         country:'Sweden',
         code:'SE',
      	city:'Stockholm',
      	coord: {
         "lon": 18.064899,
      "lat": 59.332581
      }
      }
        ,
      
       {
         continent:'Europe',
         country:'Italy',
         code:'IT',
      	city:'Milano',
      	coord: {
         "lon": 9.18951,
      "lat": 45.464272
      }
      }
      ,
      
       {
         continent:'Europe',
         country:'Italy',
         code:'IT',
      	city:'Rome',
      	coord: {
       "lon": 12.4839,
      "lat": 41.894741
      }
      }
      ,
      
       {
         continent:'Europe',
         country:'Italy',
         code:'IT',
      	city:'Venice',
      	coord: {
       "lon": 12.32667,
      "lat": 45.43861
      }
      }
          ,
      
       {
         continent:'Europe',
         country:'Turkey',
         code:'TR',
      	city:'Istanbul',
      	coord: {
        "lon": 28.949659,
      "lat": 41.01384
      }
      }
        ,
      
       {
         continent:'Europe',
         country:'Ireland',
         code:'IE',
      	city:'Dublin',
      	coord: {
       "lon": -6.26719,
      "lat": 53.34399
      }
      }
        ,
      
       {
         continent:'Europe',
         country:'Chroatia',
         code:'HR',
      	city:'Dubrovnik',
      	coord: {
        "lon": 18.092159,
      "lat": 42.648071
      }
      }
      ,
      
       {
         continent:'Asia',
         country:'China',
         code:'CN',
      	city:'Shanghai',
      	coord: {
        "lon": 121.458061,
      "lat": 31.222219
      }
      }
       ,
      
       {
         continent:'Asia',
         country:'Korea',
         code:'KR',
      	city:'Seoul',
      	coord: {
        "lon": 126.977829,
      "lat": 37.56826
      }
      }
       ,
      
       {
         continent:'Asia',
         country:'India',
         code:'IN',
      	city:'Mumbai',
      	coord: {
        "lon": 72.847939,
      "lat": 19.01441
      }
      }
      ,
      
       {
         continent:'Asia',
         country:'Malaysia',
         code:'ML',
      	city:'Kuala Lumpur',
      	coord: {
        "lon": 101.686531,
      "lat": 3.1412
      }
      }
        ,
      
       {
         continent:'Asia',
         country:'China',
         code:'CN',
      	city:'Shenzhen',
      	coord: {
        "lon": 121.339706,
      "lat": 29.415911
      }
      }
       ,
      
       {
         continent:'Asia',
         country:'Indonesia',
         code:'ID',
      	city:'Jakarta',
      	coord: {
        "lon": 106.845131,
      "lat": -6.21462
      }
      }
        ,
      
       {
         continent:'Asia',
         country:'Philipinnes',
         code:'PH',
      	city:'Manila',
      	coord: {
         "lon": 120.982201,
      "lat": 14.6042
      }
      }
      
       ,
      
       {
         continent:'Asia',
         country:'Taiwan',
         code:'TW',
      	city:'Taipei',
      	coord: {
         "lon": 121.531853,
      "lat": 25.04776
      }
      }
       ,
      
       {
         continent:'Asia',
         country:'Taiwan',
         code:'TW',
      	city:'Taipei',
      	coord: {
         "lon": 121.531853,
      "lat": 25.04776
      }
      }
      
        
         
];



function p_getRandomCity(continent){
  let tmp = [];
  p_destinations.forEach(element => {
    element.continent == continent?tmp.push(element):false;
  });
  let ranValue = Math.floor(Math.random()*tmp.length);
  return {
    coord: tmp[ranValue].coord,
    city: tmp[ranValue].city,
    countryCode: tmp[ranValue].code
};
};

//let p_coord = p_getRandomCity('Australia');

console.log(p_getRandomCity('Europe'));


function p_getCityList(continent){
  p_destinations.forEach(element => {
    element.continent == continent?console.log(element.city):false; 
  });
};

//p_getCityList('Europe');

// let dest = [
//   [ //continent
//     [ //country
//       {
//         continent:'Europe',
//         country:'Poland',
//         code:'PL',
//         city:'Warsaw',
//         coord: {
//         lon: 21.01178,
//         lat: 52.229771
//       }
//         },
//         {
//          continent:'Europe',
//          country:'Poland',
//          code:'PL',
//       	city:'Poznan',
//       coord: {
//         lon: 16.92993,
//         lat: 52.406921
//       }
//     },
//     {
//          continent:'Europe',
//          country:'Poland',
//          code:'PL',
//       	city:'Gdansk',
//       	coord: {
//         lon: 18.689699,
//         lat: 54.361099
//       }
//     }
//     ],
//     [  //country
//       {
//         continent:'Europe',
//         country:'France',
//         code:'FR',
//        city:'Paris',
//        coord: {
//        lon: 2.35236,
//        lat: 48.856461
//      }
//      },
     
//      {
//         continent:'Europe',
//         country:'France',
//         code:'FR',
//        city:'Nice',
//        coord: {
//        lon: 7.25,
//        lat: 43.700001
//      }
//      }
//     ]

//   ],
//   [ //continent
//     [
      
//     ]
//   ],
//   ,
//   [

//   ],
//   ,
//   [

//   ],
//   ,
//   [

//   ],
//   ,
//   [

//   ]
// ];


