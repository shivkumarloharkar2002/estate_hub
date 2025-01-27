import express from "express"
import cors from "cors"
import dotenv from 'dotenv'
const app = express()

app.use(express.json())
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));



dotenv.config()

app.listen(process.env.PORT, () => {
    console.log(`${process.env.PORT} is connected`)
})


// Middleware for logging method and endpoint
app.use((req, res, next) => {
    const method = req.method;      // HTTP method (GET, POST, etc.)
    const endpoint = req.originalUrl;  // URL of the request (including query params)
    const statusCode = res.statusCode;

    // Log method, endpoint, and timestamp to the console
    console.log(`${method} ${endpoint} ${statusCode} `);

    // Call the next middleware or route handler
    next();
});


app.get("/", (req, res) => {
    res.send("Estate-hub")
})