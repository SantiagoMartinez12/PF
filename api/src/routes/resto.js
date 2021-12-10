const { Router } = require("express");
const { conn } = require("../db");
const { Resto, Detalle } = conn.models;
const generadorQr = require("../functions/generadorQr");
const modificarMesaQr = require("../functions/modificarMesaQr");


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

router.get("/", async (req, res, next) => {
  try {
    let info = await Resto.findAll();
    res.send(info);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    let { id, image, name, usuario, contraseña, mail, mesa } = req.body;
    let newUser = await Resto.findOrCreate({
      id,
      mail,
      where:{
        id:id,
        mail:mail
      }
    });
    
    res.send(newUser);
  } catch (err) {
    next(err);
  }
});

router.put("/", async (req, res, next) => {
  try {
    let { id, image, name, usuario, contraseña, mail, mesa } = req.body;
    let comparar = await Resto.findOne({where:{
      id: id,
    }})

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
    await modificarMesaQr(comparar.dataValues.mesa, mesa ,id)
    
    res.send(updated);
  } catch (err) {
    next(err);
  }
});


router.delete("/:id", async (req, res, next) => {
  try {
    const {id} =req.params;
    const deleteResto = await Resto.destroy(
      {
        where: {
          id: id,
        },
      }
    );
    res.send('El resto se ha eliminado con exito');
  } catch (error) {
    next(error);
  }
});


module.exports = router;
