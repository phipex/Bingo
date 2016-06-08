(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name user.service:Recursos
   *
   * @description
   *
   */
  angular
    .module('user')
    .service('Recursos', Recursos);

  Recursos.$inject = ['$http','Authentification','$q'];

  function Recursos($http,Authentification,$q) {
    //console.log($http,Authentification,$q);

    var self = this;

    var isRequest = false;

    var optMenu = {};

    var roles = [];

    var database = {
      "CUADRE" : {
        "parent" : "Venta",
        "nom" : "Cuadre de Caja",
        "state" : "cuadre"

      },
      "CONFIGURACION" : {
        "parent" : "Parametros",
        "nom" : "Configuracion",
        "state" : "configuracion"

      },
      "FIGURA" : {
        "parent" : "Parametros",
        "nom" : "Figura",
        "state" : "figura"

      },
      "GANADOR" : {
        "parent" : "Sorteo",
        "nom" : "Ganador",
        "state" : "ganador"

      },
      "PERSONA" : {
        "parent" : "Parametros",
        "nom" : "Persona",
        "state" : "persona"

      },
      "PREMIO,PROMOCIONAL" : {
        "parent" : "Parametros",
        "nom" : "Premio Promocional",
        "state" : "premiopromo"

      },
      "PROMOCION" : {
        "parent" : "Sorteo",
        "nom" : "Promociones",
        "state" : "promocion"

      },
      "AUDIO" : {
        "parent" : "Parametros",
        "nom" : "Archivo Audio",
        "state" : "archivoaudio"

      },
      "SORTEO" : {
        "parent" : "Sorteo",
        "nom" : "Sorteo",
        "state" : "sorteo"

      },
      "USUARIO" : {
        "parent" : "Parametros",
        "nom" : "Usuario",
        "state" : "usuario"

      },
      "VENTA" : {
        "parent" : "Venta",
        "nom" : "Vender",
        "state" : "venta"

      },
      "VIDEO" : {
        "parent" : "Parametros",
        "nom" : "Archivo Video",
        "state" : "video"

      },
      "ASIGNACION" : {
        "parent" : "Parametros",
        "nom" : "Asignacion",
        "state" : "asignacion"

      },
      "REPORTE,PROMO" : {
        "parent" : "Reportes",
        "nom" : "Reporte Promociones",
        "state" : "reportpromo"

      },
      "REPORTE,AUDI" : {
        "parent" : "Reportes",
        "nom" : "Reporte Auditoria",
        "state" : "reportaudi"

      },
      "REPORTE" : {
        "parent" : "Reportes",
        "nom" : "Reporte Sorteos",
        "state" : "reporte"

      }
    };

    self.get = function () {
      return 'Recursos';
    };

    self.getRecurses = function () {
      var res = null;
      if(isRequest){
        res = optMenu;
      }else{
        res = requestUsuario();
      }
      return res;
    };

    /**
     * funcion encargada de solicitar los datos del usuario
     */
    function requestUsuario() {

      var deferred = $q.defer();
      //var url = 'http://127.0.0.1:8787/usuario.json';
      var server = "http://localhost:8084/war/jaxrs/seguridad/usuario/";

      var token = Authentification.getCurrentToken();
      if(token){
        console.log("requesusuario:token",token);
        $http.get(server,{
          params: { token: token }})
          .then(function (result) {
          console.log(result);
          roles = result.data.roles;
          //sucess: roles,requestRecursos
            //sucess: optMenu,isRequest=true;
          resquestRecursos(deferred,token);

          //deferred.resolve(result);
        },function () {

        });

        return deferred.promise;
      }



    }

    /**
     * funcion encargada de solicitar los recursos disponibles para el usuario
     */
    function resquestRecursos(deferred,token) {
      //var url = 'http://127.0.0.1:8787/recursos.json';
var url = "http://localhost:8084/war/jaxrs/usuario/recursos?";

      var len = roles.length;
      for (var i = 0; i < len; i++) {
        var rol = roles[i];
        url=url+"id="+rol;
        if(i+1 != len){
          url=url+"&";
        }
      }

      if(token){
        $http.get(url,{
          params: { token: token }})
          .then(function (result) {
          //console.log(result);

          //sucess: roles,requestRecursos
          //sucess: optMenu,isRequest=true;
          //console.log(result);
//TODO verificar los valores de result

          var recurses = convertRecurses(result.data);
          var map = generateMapRecurse(recurses);
          deferred.resolve(map);
        },function () {

        });


      }

    }

    function toTitleCase(str)
    {
      return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    }

    /**
     * funcion encargada de traducir las opciones del menu
     */
    function convertRecurses(data) {
      var recursos = {};

      var len = data.length;
      for (var i = 0; i < len; i++) {
        var recurso = data[i];
        //console.log(recurso);
        //recurso = toTitleCase(recurso);
        //recurso = recurso.split('_').pop().join("_");
        recurso = recurso.split("_");
        var lenrecurso = recurso.length;

        recurso.splice(lenrecurso-1,1);
        recurso.join("_");
        //console.log(recurso);
        recursos[recurso] = null;

      }

      recursos = Object.keys(recursos);

      console.log("RECURSOS",recursos);
      return recursos;
    }

    function generateMapRecurse(recursos) {

      var map = {};
      for (var i = 0,len=recursos.length; i < len; i++) {
        var recurso = recursos[i];
        var objeto = database[recurso];
        var parent = objeto.parent;
        if(!map[parent]){
          map[parent] = [];
        }
        map[parent].push(objeto);
      }

      return map;
    }
  }
}());
