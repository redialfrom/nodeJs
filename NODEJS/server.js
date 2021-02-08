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

// const config = {
//     user: 'SHUSER',
//     password: 'NGAUTOTEST#$5^&',
//     server: '192.168.12.105,1207',
//     database: 'SOHO'
// }

// app.get('/db', async function(req, res){
//     try {
//         let pool = await sql.connect(config);
//         let result1 = await pool.request()
//             .input('input_parameter', sql.Int, value)
//             .query('SELECT * FROM WA_PRODUCT_T WHERE PRODUCT_ID = @input_parameter');
//         res.send(JSON.stringify(result1));
//         console.dir(result1);
//     } catch (err) {
//     }
// });

async () => {
    try {
        // make sure that any items are correctly URL encoded in the connection string
        // await sql.connect('mssql://SHUSER:NGAUTOTEST#$5^&@192.168.12.105,1207/SOHO')
        const result = await sql.query`select * from WA_PRODUCT_T`
        console.dir(result)
    } catch (err) {
        // ... error checks
    }
}