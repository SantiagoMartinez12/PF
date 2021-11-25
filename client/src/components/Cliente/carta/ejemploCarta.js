const productos=[
    {
        name: "bebidas",
        productos: [
            {
                id: "572992f7-40f1-4784-b626-1a5f8a1a937c",
                name: "cerveza",
                precio: 250,
                imagen: null,
                detalle: "cerveza fresquita",
                categoriaId: "4f4d887c-12c1-42a5-90b6-d979ab748a0e"
            },
            {
                id: 2,    
                name: 'coca cola',
                precio: 150,
                imagen: null,
                detalle: 'gaseosa fria',
                categoriaId: "4f4d887c-12c1-42a5-90b6-d979ab748a0e"
            },
        ]
    },
    {
        name: "comidas",
        productos: [
            {
                id: 3,    
                name:'pizza',
                precio: 500,
                imagen:'',
                detalle:'pizza muzzarella',
                categoriaId: "4f4d887c-12c1-42a5-90b6-d979ab748a0e"
            },
            {
                id: 4,    
                name:'empanada',
                precio: 50,
                imagen:'',
                detalle:'empanada de carne',
                categoriaId: "4f4d887c-12c1-42a5-90b6-d979ab748a0e"
            }
        ]
    },
    {
        name: "postres",
        productos: [
            {
                id: 5,    
                name:'helado',
                precio: 100,
                imagen:'',
                detalle:'helados distintos sabores',
                categoriaId: "4f4d887c-12c1-42a5-90b6-d979ab748a0e"
                }
        ]
    }
]

export const categorias = [
    {id:'comidasId', name: 'comidas'},
    {id:'bebidasId', name: 'bebidas'},
    {id: 'postresId', name: 'postres'}
]

export default productos;

