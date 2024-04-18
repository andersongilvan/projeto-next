import Post from "../models/Post.js";

class PostController {
  static async pegarPost(req, res) {
    const posts = await Post.find({});
    return res.status(201).json(posts);
  }
  static async criarPost(req, res) {
    try {
      const newPost = req.body;
      Post.created(newPost);
      return res.status(201).json({ msg: "Post criado com sucesso", newPost });
    } catch (error) {
      return res.status(400).json({ msg: "Falha ao criar post" });
    }
  }

  static async atualizarPost(req, res) {
    try {
      const id = req.params.id;
      await Post.findByIdAndUpdate(id, req.body);
      return res.status(200).json({ msg: "Post atualizado com sucesso" });
    } catch (error) {
        res.status(500).json({msg: `${error.msg} falha na requisicão`})
    }
  }
  static async deletarPost(req, res) {
    try {
        const id = req.params.id;
        await Post.findByIdAndDelete(id)
        return res.status(200).json({msg: 'Post deletado com sucesso'})
    } catch (error) {
       return res.status(500).json({msg: `${error.msg} Falha na requisicao`})
    }
    
  }
}
export default PostController;
