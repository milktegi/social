const express = require('express');
const mongoose = require('mongoose');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express();

//데이터베이스 config
const db = require('./config/keys').mongoURI;

//mongodb에 연결
mongoose.connect(db).then(() => console.log('데이터베이스 연결 됨ㅇㅇ')).catch((err) => console.log('err'));

app.get('/', (req, res) =>
	res.send(`안녕하세요 
이거만드는데 얼마나 걸려요?`)
);

//라우트 사용
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts)


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on port ${port}`));
