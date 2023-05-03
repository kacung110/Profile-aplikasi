    const route = [
        {
            method:'GET',
            path:'/',
            handler: (request,h) =>{
                let path = './public/tugas.html';
                return h.file(path);
            }
        },
        {
            method:'GET',
            path:'/style.css',
            handler: (request,h) =>{
                let path = './public/style.css';
            return h.file(path);
            }
        },
        {
            method:'GET',
            path:'/esa_unggul.jpg',
            handler: (request,h) =>{
                let path = './public/esa_unggul.jpg';
            return h.file(path);
            }
        },
        {
            method:'GET',
            path:'/gambar.jpg',
            handler: (request,h) =>{
                let path = './public/gambar.jpg';
            return h.file(path);
            }
        },
    ];
    module.exports = route;