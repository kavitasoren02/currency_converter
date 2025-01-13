import express from 'express'
import cors from 'cors'
import Convert from './Routes/Route.js'

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

//available routes
app.use('/api', Convert)

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
