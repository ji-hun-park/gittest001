const express = require('express');
const app = express();
const port = 3000; // 사용할 포트 번호

//루트 경로 처리
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

//추가 경로 처리
app.get('/home', (req, res) => {
    res.send('안녕하세요, home 입니다!');
});

/*app.get('/html', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});*/

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/login.html');
});

app.post('/login_check', (req, res) => {
  if(res.body.id == "abc" && res.body.pw == "1234")
  res.send('로그인 성공');
  else res.send('로그인 실패');
});

// 서버 시작
app.listen(port, () => {
  console.log('server is running');
});