
function cargarDatos(url){
fecth(url)
  .then((response) => {
    return response.json();
  })
  .then((recurso) => {
    console.log(recurso);
  });
}