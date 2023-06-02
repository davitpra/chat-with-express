exports.success = function (req, res, message, status = 200) {
    res.status(status).send({
        error:'',
        body: message,
    });
}

exports.error = function (req, res, message, status = 500, error) {
    res.status(status).send({
        error: message,
        body: '',
    });
    console.log(error)
}
