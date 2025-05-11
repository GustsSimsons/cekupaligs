const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());  
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'html', 'authentication.html'));
});

const loginRoute = require('./routes/login');
app.use('/api', loginRoute);

const signupRoute = require('./routes/signup');
app.use('/api', signupRoute);


app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
