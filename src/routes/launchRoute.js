// module.exports = (server) =>{
//     const postController = require('../controllers/postController');

//     server.route('/posts')
//     .get(postController.listAllPosts)
//     .post(postController.createAPost)
//     .delete(postController.deleteAPost)
// }



const express = require('express');
const router  = express.Router();

const launchController = require('../controllers/launchController');


// la route de base : /launches
router
    .route('/launches')
    .get(launchController.listAllLaunches)
    .post(launchController.createALaunch)


// la route de base : /launches/:id
router 
    .route('/launches/:id_launch')
    .get(launchController.getALaunch)
    .put(launchController.updateALaunch)
    .delete(launchController.deleteALaunch)


module.exports = router;