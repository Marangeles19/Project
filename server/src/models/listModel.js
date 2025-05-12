const con = require('../DB/connection')

// GET ALL TASKS
const getData = async () => {
    const [tasks] = await con.pool.query ('SELECT * FROM tasks'); 
    return tasks;
 }

 // ADD DATA
 const addData = async (description) => {
    await con.pool.query ('INSERT INTO tasks (description) VALUES (?)' , [description] );
 }
 
 module.exports = { getData , addData};