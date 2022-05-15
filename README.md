<!--
Created: Sun May 15 2022 12:05:27 GMT-0400 (hora de Bolivia)
Modified: Sun May 15 2022 15:14:11 GMT-0400 (hora de Bolivia)
-->

# Desafío de Codificación Frontend

## Introducción

Se le ha asignado la tarea de crear una **Aplicación de Monitoreo de Critomonedas** utilizando la última versión de **Angular**. Esta aplicación permitirá a los usuarios ver en tiempo real, mediante un gráfico de velas, los valores de la criptomoneda que se seleccione desde una lista.

La aplicación debe tener una arquitectura (específicamente la estructura de carpetas) que se adapte a una aplicación de tamaño empresarial grande.

> Nota: Esto es puramente con fines de prueba y no se utilizará la aplicación con ninguna otra finalidad.

## Instrucciones

1. Bifurcar este repositorio
1. Incluir en el **README** el diseño de la **interfaz gráfica de usuario**.
1. Generar una aplicación en angular incluyendo la **librería de componentes de UI** [Ng Zorro](https://ng.ant.design/docs/introduce/en) y la **librería para gráficos** [AntV G2Plot](https://g2plot.antv.vision/en/docs/manual/introduction).
1. La aplicación deberá asignar un **ID** a cada **dispositivo** que accese, y guardar esa información junto con la **ubicación geográfica**.
1. Obtener los datos de las criptomonedas utilizando el **endpoint** [https://api.coincap.io/v2/assets/](https://api.coincap.io/v2/assets/). Consultar la documentación en [https://docs.coincap.io/](https://docs.coincap.io/).
1. Mostrar las criptomonedas en una **lista seleccionable**, **ordenable** y **filtrable**.
1. Mostrar en gráfico de velas (**Stock Plot**) los datos en **tiempo real** (1 petición por segundo) de la criptomoneda seleccionada. Revisar el [ejemplo](https://g2plot.antv.vision/en/examples/more-plots/stock#slider).
1. Mostrar los datos del atributo `priceUsd` y `changePercent24Hr` usando el **formato**: `+123,456.78`,  `-123,456.78`. Si el valor es positivo, mostrarlo de color **verde**, si es negativo, mostrarlo de color **rojo**.
1. Cada vez que se haga una petición de datos, se deberá mostrar un mensaje con la información resultante de la solicitud y el **tiempo de respuesta**.

Puntos extra si se usa [NgRx](https://ngrx.io/).

Agregue a los usuarios: **MichaellAlavedraMunayco** y **BrunoCamacho98** como colaboradores del repositorio en **GitHub** una vez que haya terminado.

## Requerimientos

La aplicación debe:

1. Ser presentable.
2. Estar optimizada para el rendimiento.
3. Mostrar un buen conocimiento de los principales conceptos y mejores prácticas de Angular.

También debe cumplir con las [directrices de Angular](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-guidelines) para los mensajes de commit.

¡Buena suerte!

## Tiempo limite

5 horas
