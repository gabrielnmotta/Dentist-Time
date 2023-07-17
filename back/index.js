const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'));

app.set('port',  8000);

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})