const express = require('express');
const app = express();

const host = process.env.DB_HOST || 'postgres';
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
aapp.get('/hobbies', async (req,res)=>{
    const result = await pool.query('SELECT * FROM hobbies');
    res.send(result.rows);
})

app.get('/hobbies/:id', async (req,res)=>{
    const result = await pool.query('SELECT * FROM hobbies WHERE id=' + req.params.id);
    res.send(result.rows);
})
app.get('/movies/numer/avarage', async (req,res)=>{
    const result = await pool.query('SELECT AVG(numer) FROM movies');
    res.send(result.rows);
})