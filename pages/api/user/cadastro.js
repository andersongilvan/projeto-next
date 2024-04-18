import UserController from "../../../src/controllers/UserController.js";

function handler(req, res) {
  if (req.method === "POST") {
    return UserController.cadastro(req, res);
  }
  return res.status(405).json({ msg: "Método não permitido." });
}
export default handler;

