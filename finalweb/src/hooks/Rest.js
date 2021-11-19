import React from "react";

function cargarDatos(url){
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((recurso) => {
    console.log(recurso);
  });
}
export default cargarDatos;