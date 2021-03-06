const { Router } = require("express");
const restoRoutes = require("../routes/resto");
const mesaRoutes = require("../routes/mesa");
const categoriasRoutes = require("../routes/categorias");
const productoRoutes = require("../routes/producto");
const detalleRoutes = require("../routes/detalle");
const modificarMesaRoutes = require("../routes/modificarMesa") 
const clienteRoutes = require('../routes/cliente')
const estadisticas = require('../routes/estadisticas')
const mercadoRoutes = require('../routes/mercadopago')
const bannerRoutes = require('../routes/banner')


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/mesa', mesaRoutes);
router.use("/resto", restoRoutes);
router.use('/modificarmesa', modificarMesaRoutes);
router.use("/detalle", detalleRoutes);
router.use("/categorias", categoriasRoutes);
router.use("/producto", productoRoutes);
router.use("/cliente", clienteRoutes);
router.use("/estadisticas", estadisticas);
router.use("/mercadopago", mercadoRoutes);
router.use("/banner", bannerRoutes);



module.exports = router;
