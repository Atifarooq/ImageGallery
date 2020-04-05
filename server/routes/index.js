const base_url = process.env.BASE_URL;

module.exports = app => {
    app.get(`/${base_url}`, (req, res) => res.status(200).send({
        message: 'Welcome to the IMGallery API!',
    }));

    app.get(`/${base_url}/gallery`, (req, res) => res.status(200).send({}));
    app.get(`/${base_url}/image/:id`, (req, res) => res.status(200).send({}));
};
