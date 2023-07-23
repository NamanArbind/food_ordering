import {app} from "./app.js"
import {connectdb} from "./config/db.js"
connectdb()

app.listen(process.env.PORT, () =>
  console.log(
    `Server is working on PORT: ${process.env.PORT}, in ${process.env.NODE_ENV} MODE`
  )
);