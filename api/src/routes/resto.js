const { Router } = require("express");
const { conn } = require("../db");
const { Resto, Detalle } = conn.models;
const generadorQr = require("../functions/generadorQr")


const router = Router();

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    let info = await Resto.findAll({
      attributes: [
        "image",
        "name",
        "usuario",
        "contraseña",
        "mail",
        "mesa",
      ],
      where: {
        id: id,
      },
    });
    res.send(info);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    let { id, image, name, usuario, contraseña, mail, mesa } = req.body;

    let newUser = await Resto.create({
      id,
      image,
      name,
      usuario,
      contraseña,
      mail,
      mesa,
    });
    console.log(newUser)
    await generadorQr(newUser.dataValues.mesa, newUser.dataValues.id)
    res.send(newUser);
  } catch (err) {
    next(err);
  }
});

router.put("/", async (req, res, next) => {
  try {
    let { id, image, name, usuario, contraseña, mail, mesa } = req.body;

    let updated = await Resto.update(
      {
        image: image,
        name: name,
        usuario: usuario,
        contraseña: contraseña,
        mail: mail,
        mesa: mesa,
      },
      {
        where: {
          id: id,
        },
      }
    );

    res.send(updated);
  } catch (err) {
    next(err);
  }
});

router.delete("/", async (req, res, next) => {
  try {
    const { id, name, precio, plato, estado, seguimiento, comentario } =
      req.body;
    const deleteDetail = await Detalle.destroy(
      {
        name: name,
        precio: precio,
        plato: plato,
        estado: estado,
        seguimiento: seguimiento,
        comentario: comentario,
      },
      {
        where: {
          id: id,
        },
      }
    );
    res.send(deleteDetail);
  } catch (error) {
    next(error);
  }
});
module.exports = router;
