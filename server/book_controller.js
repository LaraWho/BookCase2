module.exports = {

    create: (req, res) => {
        const dbInstance = req.app.get('db');
        const { book_title, book_author, book_image, user_notes } = req.body;

        dbInstance.create_book([ book_title, book_author, book_image, user_notes ])
        .then( () => res.sendStatus(200) )
        .catch( err => {
            res.status(500).send({errorMessage: "Sorry!"})
            console.log(err)
        })
    },

    getOne: (req, res) => {
        const dbInstance = req.app.get('db');
        const { params } = req.params;

        dbInstance.see_one(params.id)
        .then( book => res.sendStatus(200).send(book))
        .catch(err => {
            res.status(500).send({errorMessage: "Sorry!"})
            console.log(err)
        })
    },

    getAll: (req, res) => {
        const dbInstance = req.app.get('db');

        dbInstance.get_all()
        .then( booklist => res.sendStatus(200).send(booklist))
        .catch( err => {
            res.status(500).send({errorMessage: "Sorry!"})
            console.log(err)
        })
    },

    update: (req, res) => {
        const dbInstance = req.app.get('db');
        const { params, query } = req.params;

        dbInstance.update_book([ params.id, query.desc ])
        .then( () => res.sendStatus(200) )
        .catch( err => {
            res.status(500).send({errorMessage: "Sorry!"})
            console.log(err)
        })
    },

    delete: (req, res) => {
        const dbInstance = req.app.get('db');
        const { params } = req.params;

        dbInstance.delete_book( params. id) 
        .then( () => res.sendStatus(200) )
        .catch( err => {
            res.status(500).send({errorMessage: "Sorry!"})
            console.log(err)
        })
    }


}