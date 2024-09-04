const Fastify = require('fastify');
const fastifyCors = require('@fastify/cors');

const fastify = Fastify({ logger: true });
const mysql = require('@fastify/mysql'); // updated

// Register the MySQL plugin with the new package name and correct options
fastify.register(mysql, {
  promise: true,
  connectionString: 'mysql://root:542003@localhost/canary'
});

// Register the @fastify/cors plugin before defining routes
fastify.register(fastifyCors, { origin: true });

fastify.post('/api/signup', async (request, reply) => {
  const { firstname, lastname, email, password } = request.body;
  try {
    const connection = await fastify.mysql.getConnection();
    const [rows] = await connection.query('INSERT INTO users (firstname, lastname, email, password) VALUES (?, ?, ?, ?)', [firstname, lastname, email, password]);
    connection.release();
    reply.send({ success: true, message: 'User added successfully!' });
  } catch (err) {
    reply.status(500).send({ success: false, message: 'Error inserting data', error: err.message });
  }
});


// Login route
fastify.post('/api/login', async (request, reply) => {
  const { email, password } = request.body;
  try {
    const connection = await fastify.mysql.getConnection();
    const [rows] = await connection.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password]);
    connection.release();
    if (rows.length > 0) {
      reply.send({ success: true, message: 'Login successful!', user: rows[0] });
    } else {
      reply.status(401).send({ success: false, message: 'Invalid email or password' });
    }
  } catch (err) {
    reply.status(500).send({ success: false, message: 'Error logging in', error: err.message });
  }
});




const start = async () => {
  try {
    await fastify.listen({ port: 8080 });
    fastify.log.info(`Server running at http://localhost:8080`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
