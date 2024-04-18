import PostController from "../../../src/controllers/postController.js";


function handler(req, res) {
    if(req.method === 'GET'){
        return PostController.pegarPost()
    }
    return res.status(405).json({ msg: "Método não permitido." });
}
export default handler