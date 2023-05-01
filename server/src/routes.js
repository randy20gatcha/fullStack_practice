module.exports = (app) => {
    app.post("/register", (req, res) => {
        res.send({
            message: `You have registered email: ${req.body.email}`
        });
    });
}