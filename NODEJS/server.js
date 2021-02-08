const express = require('express');
const app = express();
const sql = require('mssql');


const server = app.listen(3000, () =>{
    console.log('Start Server: localhost:3000');
});

// views 폴더에 정의된 내용을 가져오다
app.set('views', __dirname + '/views');
// embedded javascript template
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//
app.get('/', function(req, res) {
    res.render('index.html');
});

// 라우터 설정 
// 페이지 주소 및 내용
app.get('/about', function(req, res) {
    // html 렌더링 
    res.render('about.html');
    
    // 파라미터 보내기 
    // res.send('about page');
});


async () => {
    try{
        await sql.ConnectionError('mssql://SHUSER:NGAUTOTEST#$5^&@192.168.12.105,1207/database')
    }
}