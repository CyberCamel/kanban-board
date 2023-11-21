import app from '../app.js';

const PORT = process.env.PORT || 3000;

app.set('port', PORT);

const server = app.listen(PORT);
server.on('listening', () => {
  console.log(`Server is running on port ${PORT}`);
});
