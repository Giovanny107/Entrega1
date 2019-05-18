let cursos = [
    {
        id = 1,
        nombre = 'Node JS',
        duracion = 20,
        valor = 100
    },
    {
        id = 2,
        nombre = 'Angular JS',
        duracion = 30,
        valor = 200
    },
    {
        id = 3,
        nombre = 'React',
        duracion = 40,
        valor = 300
    }
];


    for (var i = 0; i < cursos.length; i++) {
        var myVar = setInterval(myTimer, 2000, cursos[i]);
     }    
     

     function myTimer(curso) {
       console.log(curso);
     }
             
