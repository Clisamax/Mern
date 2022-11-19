import React from 'react'

function userController(req, res) {
  const soma = 100 + 1;
  return (
   res.send({soma: soma})
  )
}

export default userController


