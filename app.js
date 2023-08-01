{\rtf1\ansi\ansicpg1252\cocoartf2580
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 HelveticaNeue-Bold;\f1\fnil\fcharset0 HelveticaNeue;\f2\fnil\fcharset0 HelveticaNeue-Medium;
\f3\fnil\fcharset0 Consolas;\f4\fmodern\fcharset0 Courier;}
{\colortbl;\red255\green255\blue255;\red6\green12\blue18;\red237\green239\blue239;\red202\green199\blue155;
\red32\green32\blue32;\red246\green246\blue239;\red211\green184\blue217;\red157\green225\blue43;\red241\green155\blue41;
\red28\green219\blue216;}
{\*\expandedcolortbl;;\cssrgb\c1961\c5490\c9020;\cssrgb\c94510\c94902\c94902;\cssrgb\c83137\c81569\c67059;
\cssrgb\c16863\c16863\c16863;\cssrgb\c97255\c97255\c94902;\cssrgb\c86275\c77647\c87843;\cssrgb\c67059\c89020\c21961;\cssrgb\c96078\c67059\c20784;
\cssrgb\c0\c87843\c87843;}
\paperw11900\paperh16840\margl1440\margr1440\vieww28600\viewh14860\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\b\fs36 \cf2 \cb3 \expnd0\expndtw0\kerning0
app.js
\f1\b0 \
javascript\cb1 \
\pard\pardeftab720\partightenfactor0

\f2 \cf2 \cb3 \

\f3\fs28 \cf4 \cb5 /* Global Variables */\cf6 \
\cf7 const\cf6  baseURL = \cf8 'http://api.openweathermap.org/data/2.5/weather?zip='\cf6 ;\
\cf4 // Personal API Key for OpenWeatherMap API\cf6 \
\cf7 const\cf6  apiKey = \cf8 '0e3eeb13de8e10f3826e3a9d0d4539b2&units=imperial'\cf6 ;\
\
\cf4 // Create a new date instance dynamically with JS\cf6 \
\cf7 let\cf6  d = \cf7 new\cf6  \cf9 Date\cf6 ();\
\cf7 let\cf6  newDate = d.getMonth()+\cf8 '.'\cf6 + d.getDate()+\cf8 '.'\cf6 + d.getFullYear();\
\
\cf4 // Event listener to add function to existing HTML DOM element\cf6 \
\cf9 document\cf6 .getElementById(\cf8 'generate'\cf6 ).addEventListener(\cf8 'click'\cf6 , performAction);\
\
\cf7 function\cf6  \cf10 performAction\cf6 (\cf9 e\cf6 )\{\
  \cf7 const\cf6  zip =  \cf9 document\cf6 .getElementById(\cf8 'zip'\cf6 ).value;\
  \cf7 const\cf6  feelings =  \cf9 document\cf6 .getElementById(\cf8 'feelings'\cf6 ).value;\
\
  getWeather(baseURL, zip, apiKey)\
  .then(\cf7 function\cf6 (\cf9 data\cf6 )\{\
    \cf9 console\cf6 .log(data);\
    postData(\cf8 '/add'\cf6 , \{date:newDate, temp:data.main.temp, content:feelings\});\
    updateUI();\
  \});\
\};\
\
\cf7 const\cf6  getWeather = \cf7 async\cf6  (baseURL, zip, key)=>\{\
  \cf7 const\cf6  res = \cf7 await\cf6  fetch(baseURL+zip+key);\
  \cf7 try\cf6  \{\
    \cf7 const\cf6  data = \cf7 await\cf6  res.json();\
    \cf7 return\cf6  data;\
  \}  \cf7 catch\cf6 (error) \{\
    \cf9 console\cf6 .log(\cf8 "error"\cf6 , error);\
  \};\
\};\
\
\cf7 const\cf6  postData = \cf7 async\cf6  ( url = \cf8 ''\cf6 , data = \{\})=>\{\
  \cf7 const\cf6  response = \cf7 await\cf6  fetch(url, \{\
  method: \cf8 'POST'\cf6 ,\
  credentials: \cf8 'same-origin'\cf6 ,\
  headers: \{\
      \cf8 'Content-Type'\cf6 : \cf8 'application/json'\cf6 ,\
  \},\
  body: \cf9 JSON\cf6 .stringify(data),\
  \});\
\
  \cf7 try\cf6  \{\
    \cf7 const\cf6  newData = \cf7 await\cf6  response.json();\
    \cf7 return\cf6  newData;\
  \}\cf7 catch\cf6 (error) \{\
  \cf9 console\cf6 .log(\cf8 "error"\cf6 , error);\
  \};\
\};\
\
\cf7 const\cf6  updateUI = \cf7 async\cf6  () => \{\
  \cf7 const\cf6  request = \cf7 await\cf6  fetch(\cf8 '/all'\cf6 );\
  \cf7 try\cf6 \{\
    \cf7 const\cf6  allData = \cf7 await\cf6  request.json();\
    \cf9 document\cf6 .getElementById(\cf8 'date'\cf6 ).innerHTML = allData.date;\
    \cf9 document\cf6 .getElementById(\cf8 'temp'\cf6 ).innerHTML = allData.temp;\
    \cf9 document\cf6 .getElementById(\cf8 'content'\cf6 ).innerHTML = allData.content;\
  \}\cf7 catch\cf6 (error)\{\
    \cf9 console\cf6 .log(\cf8 "error"\cf6 , error);\
  \};\
\};
\f4 \
}