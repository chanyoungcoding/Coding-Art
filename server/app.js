const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const multer = require('multer');

const http = require("http");   
const { Server } = require('socket.io');

const app = express();
const mySecretJwtKey = 'my-secret-key';

const upload = multer();

// ReactCookie 를 받아올 때 credentails 를 서버에서도 설정 해주어야 함.
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(upload.any());

const testData = [
  {
    name: 'chan',
    age: 27
  },
  {
    name: 'chan',
    age: 27
  },
  {
    name: 'chan',
    age: 27
  },
]

// Cookie Test

app.get('/test', (req,res) => {
  const myCookie = req.headers.cookie;
  console.log(myCookie);
  res.json(testData)
})

app.post('/formTest', (req,res) => {
  const formData = req.body;
  const files = req.files; // 파일들은 req.files를 통해 접근 가능
  console.log(files);
  console.log(formData);
  res.send('good');
})

// JWT Test

app.get('/jwtTest', (req,res) => {

  const user = {
    id: 1,
    username: 'user123',
  };
  
  const token = jwt.sign(user, mySecretJwtKey, { expiresIn: '1h' });
  res.json({ token });
})

app.post('/acceptJwt', (req, res) => {
  console.log(req.headers.authorization)
  res.json({ message: 'Token verified successfully' });
});

const server = http.createServer(app)

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
})

io.on('connection', socket => {
	socket.on('send message', (item) => {
		const msg = item.name + ' : ' + item.message;
		console.log(msg);
		io.emit('receive message', {name:item.name, message:item.message});
	});
    socket.on('disconnect', function () {
		console.log('user disconnected: ', socket.id);
	});
});

server.listen(4040, () => {
  console.log("server running")
})