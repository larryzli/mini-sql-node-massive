const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const massive = require("massive");
const controller = require("./controller");

const app = express();
app.use(bodyParser.json());
app.use(cors());
require("dotenv").config();

massive(process.env.CONNECTION_STRING)
    .then(db => {
        // db
        //     .get_planes() // .new_planes()
        //     .then(planes => console.log(planes))
        //     .catch(console.log);

        app.set("db", db);
    })
    .catch(console.log);

app.get("/api/planes/", controller.getPlanes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
