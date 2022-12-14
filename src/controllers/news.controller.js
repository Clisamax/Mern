import {
  createService,
  findAllService,
  countNews,
} from "../services/news.service.js";

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
      user: req.userId,
    });

    res.send(201);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const findAll = async (req, res) => {
  let { limit, offset } = req.query;

  limit = Number();
  offset = Number();

  if (!limit) {
    limit = 5;
  }

  if (!offset) {
    offset = 0;
  }

  const news = await findAllService(offset, limit);
  const total = await countNews();
  const currentUrl = req.baseUrl;

  const next = offset + limit;
  const nextUrl = next < total ? `${currentUrl}?limit=${limit}&offset=${next}` : null;

  const previous = offset - limit < 0 ? null : offset - limit;

  const previousUrl =
    previous != null ? `${currentUrl}?limit=${limit}&offset=${next}` : null;

  if (news.length === 0) {
    // se não houver usuario cadastrado
    return res.status(400).send({ message: "There are no registered news" });
  }

  res.send({
    nextUrl,
    previousUrl,
    limit,
    offset,
    total,

    results: news.map((item) => ({
      id: item._id,
      title: item.title,
      text: item.text,
      banner: item.banner,
      likes: item.likes,
      comments: item.comments,
      name: item.user.name,
      userName: item.username,
      userAvatar: item.user.avatar,
    })),
  });
};

export { create, findAll };
