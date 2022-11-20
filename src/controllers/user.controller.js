const soma = (req, res) => {
  const soma = 119 + 2;

  res.send({
    soma: soma
  });
};
module.exports = { soma };
