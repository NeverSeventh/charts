const pool = require('../db');



class User {

    static async connectClient() {
        const res = await pool.connect();
    }

    static async endConnection() {
        const res = await pool.end();
    }
    
   static async getAllElements() {
    
    const data = await pool.query('SELECT * FROM users');
    return data.rows;

   }

   static async findUserById(id) {
    
        const data = await pool.query('SELECT id FROM users WHERE id=$1',[id]);
        return data.rows[0];
    
   }

   static async insertNewUser({id,dateReg,dateLast}) {

       try {

        const check = await User.findUserById(id);
        if (!check) {

            const responce = await pool.query('INSERT INTO users(id, date_registration, date_last_activity) VALUES ($1, $2::text, $3::text)',[id,dateReg,dateLast]);
        }
           
       } catch (e) {
            console.log(e.message);
       }

    
   }
}


module.exports = User;
