import { createService, findAllService } from "../services/news.service.js";

const create = async (req, res) => {
  try {
    const { title, text, banner } = req.body;

    if (!title || !text || !banner) {
      res.status(400).send({
        message: "Submit all fields for registration",
      });
    }

    await createService({
      title,
      text,
      banner,
      user: { _id: "637b134396fa148d14dac064" },
    });

    res.send(201);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const findAll = async (req, res) => {
  const news = findAllService();

  if (news.length === 0) {
    // se não houver usuario cadastrado
    return res.status(400).send({ message: "There are no registered news" });
  }

  send(news);
};

export { create, findAll };
