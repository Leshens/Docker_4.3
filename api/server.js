const express = require('express');
const app = express();

const host = process.env.DB_HOST || 'localhost';
const port = process.env.DB_PORT || '5432';

const { Pool } = require('pg');
const pool = new Pool({
    user: 'dbuser',
    host: host,
    database: 'sample-db',
    password: 'secretpassword',
    port: parseInt(port),
})



app.listen(3000, '0.0.0.0', () => {
    console.log('Application listening at 0.0.0.0:3000');
})
app.get('/', (req, res) => {
    res.send('Hello World');
});
pool.connect();
app.get('/hobbies', async(req, res) => {
    pool.query('SELECT * FROM hobbies', (err, result)=>{
        if (!err){
            res.send(result.rows);
        }
    });
    pool.end;
})
pool.connect();

app.get('/users/:id', (req, res)=>{
    pool.query(`Select * from hobbies where id=${req.params.id}`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    pool.end;
})
pool.connect();