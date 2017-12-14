module.exports = {
    getPlanes(req, res) {
        const db = req.app.get("db");
        db
            .get_planes([25])
            .then(planes => {
                console.log(planes);
                res.status(200).json(planes);
            })
            .catch(console.log);
    }
};
