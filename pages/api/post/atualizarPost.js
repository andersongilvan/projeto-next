import PostController from "../../../src/controllers/postController.js";

function handler(req, res) {
    if(req.method === 'POST') {
        PostController.atualizarPost()
    }
}