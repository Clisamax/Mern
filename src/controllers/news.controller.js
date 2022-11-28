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
      user: "637b134396fa148d14dac064"
    });

    res.send(201);

  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const findAll = (req, res) => {
  const news = [];
  send(news);
};

export { create, findAll };
