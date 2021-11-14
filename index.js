import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

const app = express();
const __dirname = path.resolve();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
    extended: false
}));


app.get("/", (req, res) => {
    res.sendFile(__dirname + '/form.html');
})

app.post("/", (req, res) => {   
    let username = req.body.Username;
    let password = req.body.Password;
    let email = req.body.Email;
    let gender = req.body.Gender;

    res.send(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
        integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous">
    </script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
        integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous">
    </script>
    <link rel="stylesheet" href="/styles.css">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <table class="result">
        <tr>
            <td><h1><b>Username: </b></h1></td>
            <td><h1>${username}</h1></td>
        </tr>
        <tr>
            <td><h1><b>Password: </b></h1></td>
            <td><h1>${password}</h1></td>
        </tr>
        <tr>
            <td><h1><b>Email: </b></h1></td>
            <td><h1>${email}</h1></td>
        </tr>
        <tr>
            <td><h1><b>Gender: </b></h1></td>
            <td><h1>${gender}</h1></td>
        </tr>
    </table>
</body>
</html>

    `)
})

app.listen(3000 || process.env.PORT, () => {
    console.log("Started at 3000");
});