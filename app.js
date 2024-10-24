import express from "express";
import morgan from "morgan"
import cors from "cors"; 
import router from "./src/routes/auth.routes.js";
import routerCli from "./src/routes/cliente.routes.js";
import rundb from "./src/config/dbConfig.js";
import cookieParser from 'cookie-parser';
import routerUser from "./src/routes/usuario.routes.js";
import routerProv from "./src/routes/proveedor.routes.js";
import routerEmp from "./src/routes/empleado.routes.js";
import routerCat from "./src/routes/categoria.routes.js";
import routerProd from "./src/routes/producto.routes.js";
import routerBit from "./src/routes/bitacora.routes.js";

const app = express();
rundb();

app.use(cors({
    origin: 'https://eclectic-fox-653ba4.netlify.app',
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
  }));

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.use("/api",router);
app.use("/api",routerCli);
app.use("/api",routerUser);
app.use("/api",routerProv);
app.use("/api",routerEmp);
app.use("/api",routerCat);
app.use("/api",routerProd);
app.use("/api",routerBit);

export default app;