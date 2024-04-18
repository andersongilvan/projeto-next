import User from "../models/User.js";

class UserController {
  
  static async cadastro(req, res) {
    try {
      const { name, email, password } = req.body;
      const emailExist = await User.findOne({ email });
      if (emailExist) {
        return res.status(400).json({ msg: "O e-mail já existe!" });
      }
      await User.create({ name, email, password });
      return res.status(201).json({ msg: "Usuário cadastrado com sucesso!" });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ msg: "Ocorreu um erro ao processar a requisição." });
    }
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email, password });
      if (!user) {
        return res.status(400).json({ msg: "E-mail ou senha incorretos!" });
      }
      return res.status(200).json({ msg: "Login feito com sucesso!" });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ msg: "Ocorreu um erro ao processar a requisição." });
    }
  }
}

export default UserController;
