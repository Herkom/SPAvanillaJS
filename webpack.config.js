//ESTO es la configuración de Webpack


// Esto es de Node, permite acceder al arbol de carpetas dentro del proyecto
const path = require('path');

//Esto es lo que necesitamos para trabajar con HTML
const HtmlWebpackPlugin = require('html-webpack-plugin');

const CopyWebpackPlugin= require('copy-webpack-plugin');

//Este modulo exportable es la configuracion de lo que va a suceder
module.exports = {

    //Nuestro punto de entrada será este archivo
    entry: './src/index.js',
    //Nuestro punto de salida, lo que será mandado a producción
    output: {
        //Hacia donde lo vamos a poner. __dirname es donde se encuentra la carpeta y el nombre de esa carpeta será dist
        path: path.resolve(__dirname, 'dist'),
        //El nombre del archivo que se va a generar
        filename: 'main.js'
    },

    //Las extensiones que usará nuestro proyecto
    resolve: {
        //arreglo de las extensiones a usar
        extensions: ['.js'],
    },

    //Módulo con las reglas de trabajo
    module: {
        rules: [
           //Estructura de babel
           {
                //RegEx de los tipos de archivo que queremos filtrar
                test: /\.js?$/,
                //Excluimos la carpeta de node modules porque no queremos que se aplique la regla a eso
                exclude: /node_modules/,
                //va a usar una configuración establecida que es loader de babel loader
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
    //los plug-ins a usar
    plugins: [
        //nos permite trabajar con los archivos HTML
        new HtmlWebpackPlugin(
            {
                inject: true,
                template: './public/index.html',
                filename: './index.html',
            }
        ),
        new CopyWebpackPlugin(
            [{
                from:'./src/styles/styles.css',
                to:''
            }]
        )
    ]
}