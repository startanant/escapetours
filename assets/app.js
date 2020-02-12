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
         country:'Japan',
         code:'JP',
      	city:'Tokyo',
      	coord: {
         "lon": 139.691711,
      "lat": 35.689499
      }
      }
       ,
      
       {
         continent:'Asia',
         country:'India',
         code:'IN',
      	city:'Kolkata',
      	coord: {
         "lon": 88.36972,
      "lat": 22.569719
      }
      }
      ,
      
       {
         continent:'Asia',
         country:'Japan',
         code:'JP',
      	city:'Osaka',
      	coord: {
         "lon": 137.266663,
      "lat": 35.950001
      }
      }
      ,
      
       {
         continent:'Asia',
         country:'Vietnam',
         code:'VN',
      	city:'Ha Noi',
      	coord: {
         "lon": 105.841171,
      "lat": 21.0245
      }
      }
        ,
      
       {
         continent:'Asia',
         country:'Pakistan',
         code:'PK',
      	city:'Karachi',
      	coord: {
         "lon": 67.082199,
      "lat": 24.9056
      }
      }
        ,
      
       {
         continent:'Asia',
         country:'United Arab Emirates',
         code:'AE',
      	city:'Dubai',
      	coord: {
         "lon": 55.304722,
      "lat": 25.258169
      }
      }
       ,
      
       {
         continent:'Asia',
         country:'Japan',
         code:'JP',
      	city:'Kyoto',
      	coord: {
         "lon": 135.753845,
      "lat": 35.021069
      }
      }
         ,
      
       {
         continent:'Asia',
         country:'Hong Kong',
         code:'HK',
      	city:'Hong Kong',
      	coord: {
         "lon": 114.157692,
      "lat": 22.285521
      }
      }
        ,
      
       {
         continent:'Australia',
         country:'Australia',
         code:'AU',
      	city:'Melbourne',
      	coord: {
         "lon": 144.963318,
      "lat": -37.813999
      }
      }
      
       ,
      
       {
         continent:'Australia',
         country:'Australia',
         code:'AU',
      	city:'Brisbane',
      	coord: {
         "lon": 153.029938,
      "lat": -27.44573
      }
      }
       ,
      
       {
         continent:'Australia',
         country:'Australia',
         code:'AU',
      	city:'Adelaide',
      	coord: {
         "lon": 138.600586,
      "lat": -34.920502
      }
      }
      ,
      
       {
         continent:'Australia',
         country:'Australia',
         code:'AU',
      	city:'Perth',
      	coord: {
         "lon": 115.833328,
      "lat": -31.933331
      }
      }
      ,
      
       {
         continent:'Australia',
         country:'Australia',
         code:'AU',
      	city:'Gold Coast',
      	coord: {
         "lon": 153.36055,
      "lat": -27.97851
      }
      }
      ,
      
       {
         continent:'Australia',
         country:'Australia',
         code:'AU',
      	city:'Hobart',
      	coord: {
         "lon": 147.329407,
      "lat": -42.87936
      }
      }
       ,
      
       {
         continent:'Australia',
         country:'Australia',
         code:'AU',
      	city:'Darwin',
      	coord: {
        "lon": 130.876846,
      "lat": -12.40189
      }
      }
      
       ,
      
       {
         continent:'Australia',
         country:'Australia',
         code:'AU',
      	city:'Newcastle',
      	coord: {
        "lon": 151.708435,
      "lat": -32.876282
      }
      }
      
        ,
      
       {
         continent:'Australia',
         country:'New Zealand',
         code:'NZ',
      	city:'Auckland',
      	coord: {
        "lon": 174.783325,
      "lat": -36.849998
      }
      }
      
       ,
      
       {
         continent:'Australia',
         country:'New Zealand',
         code:'NZ',
      	city:'Wellington',
      	coord: {
        "lon": 174.766663,
      "lat": -41.283329
      }
      }
      
       ,
      
       {
         continent:'Australia',
         country:'New Zealand',
         code:'NZ',
      	city:'Christchurch',
      	coord: {
        "lon": 172.633331,
      "lat": -43.533329
      }
      }
        ,
      
       {
         continent:'Australia',
         country:'New Zealand',
         code:'NZ',
      	city:'Dunedin',
      	coord: {
        "lon": 170.503616,
      "lat": -45.874161
      }
      }
       ,
      
       {
         continent:'Australia',
         country:'New Zealand',
         code:'NZ',
      	city:'Wanaka',
      	coord: {
        "lon": 169.149994,
      "lat": -44.700001
      }
      }
      ,
      
       {
         continent:'North America',
         country:'USA',
         code:'US',
      	city:'San Francisco',
      	coord: {
        "lon": -122.419418,
      "lat": 37.774929
      }
      }
      ,
      
       {
         continent:'North America',
         country:'USA',
         code:'US',
      	city:'Chicago',
      	coord: {
        "lon": -87.650047,
      "lat": 41.850029
      }
      }
      ,
      
       {
         continent:'North America',
         country:'USA',
         code:'US',
      	city:'Seattle',
      	coord: {
         "lon": -122.332069,
      "lat": 47.606209
      }
      }
      ,
      
       {
         continent:'North America',
         country:'USA',
         code:'US',
      	city:'Boston',
      	coord: {
         "lon": -83.789886,
      "lat": 30.791861
      }
      }
       ,
      
       {
         continent:'North America',
         country:'USA',
         code:'US',
      	city:'Austin',
      	coord: {
         "lon": -85.808029,
      "lat": 38.758389
      }
      }
       ,
      
       {
         continent:'North America',
         country:'USA',
         code:'US',
      	city:'Houston',
      	coord: {
         "lon": -95.363274,
      "lat": 29.763281
      }
      }
       ,
      
       {
         continent:'North America',
         country:'USA',
         code:'US',
      	city:'Philadelphia',
      	coord: {
         "lon": -89.11673,
      "lat": 32.771519
      }
      }
      ,
      
       {
         continent:'North America',
         country:'USA',
         code:'US',
      	city:'Denver',
      	coord: {
         "lon": -92.337402,
      "lat": 42.671371
      }
      }
       ,
      
       {
         continent:'North America',
         country:'USA',
         code:'US',
      	city:'San Diego',
      	coord: {
         "lon": -117.157257,
      "lat": 32.715328
      }
      }
       ,
      
       {
         continent:'North America',
         country:'USA',
         code:'US',
      	city:'Portland',
      	coord: {
         "lon": -122.676208,
      "lat": 45.523449
      }
      }
      
       ,
      
       {
         continent:'North America',
         country:'USA',
         code:'US',
      	city:'Miami',
      	coord: {
         "lon": -94.877457,
      "lat": 36.874512
      }
      }
       ,
      
       {
         continent:'North America',
         country:'USA',
         code:'US',
      	city:'Detroit',
      	coord: {
          "lon": -83.045753,
      "lat": 42.331429
      }
      }
        ,
      
       {
         continent:'North America',
         country:'USA',
         code:'US',
      	city:'Atlanta',
      	coord: {
         "lon": -94.164352,
      "lat": 33.113739
      }
      }
      ,
      
       {
         continent:'North America',
         country:'USA',
         code:'US',
      	city:'Dallas',
      	coord: {
        "lon": -75.963249,
      "lat": 41.336189
      }
      }
       ,
      
       {
         continent:'North America',
         country:'USA',
         code:'US',
      	city:'Las Vegas',
      	coord: {
        "lon": -105.2239,
      "lat": 35.593929
      }
      }
       ,
      
       {
         continent:'North America',
         country:'USA',
         code:'US',
      	city:'San Antonio',
      	coord: {
        "lon": -98.493629,
      "lat": 29.42412
      }
      }
       ,
      
       {
         continent:'North America',
         country:'Canada',
         code:'CA',
      	city:'Vancouver',
      	coord: {
        "lon": -123.119339,
      "lat": 49.24966
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

//console.log(p_coord.lat,p_coord.lon);


function p_getCityList(continent){
  p_destinations.forEach(element => {
    element.continent == continent?console.log(element.city):false; 
  });
};

console.log(p_getCityList('Asia'));

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


