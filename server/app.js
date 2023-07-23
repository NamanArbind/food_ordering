import express from "express";
import { config } from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import session from "express-session";
import passport from "passport";
import userRoutes from "./routes/user.js";
import orderRoutes from "./routes/order.js";
import { connectPassport } from "./utils/Provider.js";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";

export const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

config({ path: "./config/config.env" });

//using Middlewares
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
      secure: process.env.NODE_ENV === "development" ? false : true,
      httpOnly: process.env.NODE_ENV === "development" ? false : true,
      sameSite: process.env.NODE_ENV === "development" ? false : "none",
    },
  })
);
app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(passport.authenticate("session"));
app.use(passport.initialize());
app.use(passport.session());
app.enable("trust proxy")
connectPassport();

//mounting routes
app.use("/api", userRoutes);
app.use("/api", orderRoutes);

//using error Middlewares
app.use(errorMiddleware);
