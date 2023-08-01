{\rtf1\ansi\ansicpg1252\cocoartf2580
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 HelveticaNeue-Bold;\f1\fnil\fcharset0 HelveticaNeue;\f2\fnil\fcharset0 HelveticaNeue-Medium;
\f3\fnil\fcharset0 Consolas;}
{\colortbl;\red255\green255\blue255;\red6\green12\blue18;\red237\green239\blue239;\red202\green199\blue155;
\red32\green32\blue32;\red246\green246\blue239;\red211\green184\blue217;\red241\green155\blue41;\red157\green225\blue43;
\red28\green219\blue216;}
{\*\expandedcolortbl;;\cssrgb\c1961\c5490\c9020;\cssrgb\c94510\c94902\c94902;\cssrgb\c83137\c81569\c67059;
\cssrgb\c16863\c16863\c16863;\cssrgb\c97255\c97255\c94902;\cssrgb\c86275\c77647\c87843;\cssrgb\c96078\c67059\c20784;\cssrgb\c67059\c89020\c21961;
\cssrgb\c0\c87843\c87843;}
\paperw11900\paperh16840\margl1440\margr1440\vieww28600\viewh14860\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\b\fs36 \cf2 \cb3 \expnd0\expndtw0\kerning0
server.js
\f1\b0 \
javascript\cb1 \
\pard\pardeftab720\partightenfactor0

\f2 \cf2 \cb3 \

\f3\fs28 \cf4 \cb5 // Setup empty JS object to act as endpoint for all routes\cf6 \
\cf7 const\cf6  projectData = \{\};\
\
\cf4 // Require Express to run server and routes\cf6 \
\cf7 const\cf6  express = \cf8 require\cf6 (\cf9 'express'\cf6 );\
\
\cf4 // Start up an instance of app\cf6 \
\cf7 const\cf6  app = express();\
\
\cf4 /* Dependencies */\cf6 \
\cf7 const\cf6  bodyParser = \cf8 require\cf6 (\cf9 'body-parser'\cf6 );\
\cf7 const\cf6  cors = \cf8 require\cf6 (\cf9 'cors'\cf6 );\
\
\cf4 /* Middleware*/\cf6 \
app.use(bodyParser.urlencoded(\{ extended: \cf8 false\cf6  \}));\
app.use(bodyParser.json());\
app.use(cors());\
\
\cf4 // Initialize the main project folder\cf6 \
app.use(express.static(\cf9 'website'\cf6 ));\
\
\cf4 // Setup Server\cf6 \
\cf7 const\cf6  port = \cf8 3000\cf6 ;\
\cf7 const\cf6  server = app.listen(port, ()=>\{\cf8 console\cf6 .log(\cf9 `running on localhost: $\{port\}`\cf6 )\});\
\
\cf4 // GET route\cf6 \
app.get(\cf9 '/all'\cf6 , sendData);\
\
\cf7 function\cf6  \cf10 sendData\cf6  (\cf8 request, response\cf6 ) \{\
  response.send(projectData);\
\};\
\
\cf4 // POST route\cf6 \
app.post(\cf9 '/add'\cf6 , addData);\
\
\cf7 function\cf6  \cf10 addData\cf6 (\cf8 request, response\cf6 ) \{\
    projectData[\cf9 'date'\cf6 ] = request.body.date;\
    projectData[\cf9 'temp'\cf6 ] = request.body.temp;\
    projectData[\cf9 'content'\cf6 ] = request.body.content;\
    response.end();\
    \cf8 console\cf6 .log(projectData);\
\};\
}