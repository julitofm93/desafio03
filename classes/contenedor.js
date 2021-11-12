const fs = require ('fs')

class Contenedor {

    async save (datos) {
        try{
            let data = await fs.promises.readFile('./files/productos.txt', 'utf-8');
            let events = JSON.parse(data)
            let producto = {
                title: datos.title,
                price: datos.price,
                thumbnail: datos.thumbnail,
                id: events.length + 1
                }
            events.push(producto);
            try{
                await fs.promises.writeFile('./files/productos.txt',
                JSON.stringify(events,null,2));
                return {status:"succes", message:"producto creado con exito"};
            }catch(error){
                return {status:"error", message:"No se pudo crear el producto"}
            }
            }catch{
                let producto = {
                    title: datos.title,
                    price: datos.price,
                    thumbnail: datos.thumbnail,
                    id: events.length + 1
                }
                try{
                    await fs.promises.writeFile('./files/productos.txt', JSON.stringify([producto], null, 2));
                    return {status:"succes", message:"producto creado con exito"}
                }catch(error){
                    return {status:"error", message:"no se pudo crear el producto"+error}
                }
        }
    }

    async getAll(){
        try{
            let data = await fs.promises.readFile('./files/productos.txt', 'utf-8');
            let events = JSON.parse(data)
            return {events}
        }catch(error){
            return {status:"error",message:"No se encontraron eventos"}
        }
    }

    async getRandom(){
        try{
            let data =  await fs.promises.readFile('./files/productos.txt','utf-8')
            let events = JSON.parse(data);
            let productoRandom = events[Math.floor(Math.random()*events.length)]
            return {productoRandom};
        }catch(err){
            return {status:"error",message:"No se encontró el evento"}
        }
    }

}


module.exports = Contenedor;