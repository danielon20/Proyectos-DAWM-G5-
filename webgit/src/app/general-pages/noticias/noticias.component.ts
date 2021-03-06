import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";

//import { NewsRss } from "../../news-rss";
import * as xml2js from "xml2js";
//import xml2js from 'xml2js';

//declare const require;
//const xml2js = require("xml2js");

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
  //encapsulation: ViewEncapsulation.None
})
export class NoticiasComponent implements OnInit {
  /*
  RssData: NewsRss;
  aversh: Observable<Array<any>>;
  constructor(private http: HttpClient) {
    this.GetRssFeedData();
  }


  ngOnInit() {
    this.aversh = this.GetRssFeedData();
  }


  GetRssFeedData() {
    const requestOptions: Object = {
      observe: "body",
      responseType: "text"
    };
    this.http
      .get<any>("https://gadgets.ndtv.com/rss/feeds", requestOptions)
      .subscribe(data => {
        let parseString = xml2js.parseString;
        parseString(data, (err, result: NewsRss) => {
          this.RssData = result;
        });
      });
  }
  */
  //constructor() { }

  proxy = 'https://damp-beach-17296.herokuapp.com/'
  url = this.proxy +"https://api.eluniverso.arcpublishing.com/feeds/rss/?website=el-universo&query=taxonomy.sections._id:%22/larevista/tecnologia%22&sort=first_publish_date:desc"

  public xmlItems: any;
  constructor(private http:HttpClient) {
    //console.log("prueba de XML1");
      this.loadXML();
      //console.log("prueba de XML2");
  }

  //getting data function
 loadXML()
 {
   /*Read Data*/
   //console.log("prueba de XML3");
   this.http.get(this.url,
   {
     headers: new HttpHeaders()
       .set('Content-Type', 'text/xml')
       .append('Access-Control-Allow-Methods', 'GET')
       .append('Access-Control-Allow-Origin', '*')
       .append('Access-Control-Allow-Headers', "Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method"),
     responseType: 'text'
   })
   .subscribe((data) => {
     this.parseXML(data)
       .then((data) => {
        //console.log("prueba de XML1");
         this.xmlItems = data;
         //console.log("prueba de XML2");
       });
   });
   /*Read Data*/
 }
 //store xml data into array variable
 parseXML(data: string ) {
     return new Promise(resolve => {
       var k: string | number,
         arr : any = [],
         parser = new xml2js.Parser(
           {
             trim: true,
             explicitArray: true
           });
       parser.parseString(data, function (err: any, result: any) {
        //console.log("prueba de XML3");
        //console.log(result.rss.channel[0].item);
         var obj = result.rss.channel[0].item;
         //console.log("prueba de XML4");
         //console.log(obj);
         for (k in obj) {
           //console.log(k);
           var item = obj[k];
           //console.log(item);
           //console.log();
           arr.push({
             title: item.title[0],
             description: item.description[0],
             link: item.link[0],
             pubDate: item.pubDate[0],
             creator: item['dc:creator'][0]

           });
         }
         resolve(arr);
       });
     });
   }





  filterNews = '';

  /*news = [
    {
      "title":"C??mo eliminar autom??ticamente un pantallazo de WhatsApp despu??s de haberlo enviado",
      "link":"https://eluniverso.com/larevista/tecnologia/como-eliminar-automaticamente-un-screenshot-de-whatsapp-despues-de-haberlo-enviado-nota/",
      "creator":"Carla Rodr??guez",
      "pubDate":"Wed, 14 Jul 2021 20:57:47 +0000",
      "description":"Gracias a este truco, los pantallazos de WhatsApp o cualquier otra aplicaci??n se borrar??n solos, luego de que pase un tiempo elegido por ti."
    },
    {
      "title":"Las cuentas gratuitas de Google Meet solo podr??n realizar videollamadas de hasta 60 minutos",
      "link":"https://eluniverso.com/larevista/tecnologia/las-cuentas-gratuitas-de-google-meet-solo-podran-realizar-videollamadas-de-hasta-60-minutos-nota/",
      "creator":"Andres Alejandro",
      "pubDate":"Tue, 13 Jul 2021 15:45:16 +0000",
      "description":"La herramienta permit??a hacer videollamadas en grupo de hasta 24 horas, como las cuentas profesionales."
    },
    {
      "title":"La tecnolog??a OLED se toma las pantallas del mundo",
      "link":"https://eluniverso.com/larevista/tecnologia/la-tecnologia-oled-se-toma-las-pantallas-del-mundo-nota/",
      "creator":"Jaime Freire Garc??a",
      "pubDate":"Tue, 13 Jul 2021 11:00:00 +0000",
      "description":"La tecnolog??a de pixeles autoiluminados marca la diferencia en la experiencia de visualizaci??n."
    },
    {
      "title":"Microsoft presenta nueva opci??n para pymes",
      "link":"https://eluniverso.com/larevista/tecnologia/microsoft-presenta-nueva-opcion-para-pymes-nota",
      "creator":"Jaime Freire Garc??a",
      "pubDate":"Tue, 13 Jul 2021 11:00:00 +0000",
      "description":"Power Platform, de Microsoft, es un paquete de herramientas 'low-code' que permite a todos desarrollar aplicaciones y automatizaciones para acelerar su trabajo."
    },
    {
      "title":"???FIFA 22??? sale el 1 de octubre, usar?? tecnolog??a con ???m??s realismo???",
      "link":"https://eluniverso.com/entretenimiento/videojuegos/fifa-22-sale-el-1-de-octubre-usara-tecnologia-con-mas-realismo-nota/",
      "creator":"Rosa Falconi Johnson",
      "pubDate":"Mon, 12 Jul 2021 18:06:57 +0000",
      "description":"Kylian Mbapp?? en la portada. la nueva tecnolog??a patentada de aprendizaje autom??tico brindar?? la experiencia de f??tbol m??s realista, fluida y receptiva."
    },
    {
      "title":"Si no le gusta Windows 11, Microsoft le dar?? 10 d??as para regresar a Windows 10",
      "link":"https://eluniverso.com/larevista/tecnologia/si-no-le-gusta-windows-11-microsoft-le-dara-10-dias-para-regresar-a-windows-10-nota/",
      "creator":"Andres Alejandro",
      "pubDate":"Mon, 12 Jul 2021 17:47:17 +0000",
      "description":"La posibilidad de actualizar a Windows 11 depender?? de las caracter??sticas del ordenador."
    },
    {
      "title":"Gato gigante en 3D causa asombro entre los habitantes de Tokio",
      "link":"https://eluniverso.com/larevista/tecnologia/gato-gigante-en-3d-causa-asombro-entre-los-habitantes-de-tokio-nota/",
      "creator":"Andres Alejandro",
      "pubDate":"Mon, 12 Jul 2021 14:20:42 +0000",
      "description":"El felino de tonos blancos, negros y naranjas puede ser visto entre dos anuncios."
    },
    {
      "title":"Instagram priorizar?? videos sobre las fotos para intentar competir contra TikTok",
      "link":"https://eluniverso.com/larevista/tecnologia/instagram-priorizara-videos-sobre-las-fotos-para-intentar-competir-contra-tiktok-nota/",
      "creator":"David Mu??oz",
      "pubDate":"Mon, 12 Jul 2021 14:00:00 +0000",
      "description":">Con estos cambios anunciados, Instagram desea distanciarse de su enfoque anterior de solo ser una aplicaci??n para compartir fotos."
    },
    {
      "title":"C??mo saber si tu celular ha sido hackeado y qu?? puedes hacer para evitarlo",
      "link":"https://eluniverso.com/larevista/tecnologia/como-saber-si-tu-celular-ha-sido-hackeado-y-que-puedes-hacer-para-evitarlo-nota/",
      "creator":"Carla Rodr??guez",
      "pubDate":"Sat, 10 Jul 2021 01:00:00 +0000",
      "description":"??Te dura muy poco la bater??a del tel??fono? ??Consumes tus datos en pocos d??as?"
    },
    {
      "title":"Las 9 aplicaciones que robaban contrase??as y que Google las elimin?? de su tienda",
      "link":"https://eluniverso.com/larevista/tecnologia/las-9-aplicaciones-que-robaban-contrasenas-y-que-google-las-elimino-de-su-tienda-nota/",
      "creator":"David Mu??oz",
      "pubDate":"Mon, 12 Jul 2021 15:21:39 +0000",
      "description":"Dr. Web alert?? que, aunque ya han sido eliminadas de Google Play, a??n siguen estando disponibles en plataformas de terceros y agregadores de apps."
    },
    {
      "title":"Microsoft pide a usuarios instalar actualizaci??n de forma inmediata tras problemas de seguridad",
      "link":"https://eluniverso.com/larevista/tecnologia/microsoft-pide-a-usuarios-instalar-actualizacion-de-forma-inmediata-tras-problemas-de-seguridad-nota/",
      "creator":"Andres Alejandro",
      "pubDate":"Thu, 08 Jul 2021 11:15:00 +0000",
      "description":"La falla de seguridad afecta a los sistemas operativos Windows 7 y Windows 10."
    },
    {
      "title":"Cu??les son los mejores navegadores para usar en Internet",
      "link":"https://eluniverso.com/larevista/tecnologia/cuales-son-los-mejores-navegadores-para-usar-en-internet-nota/",
      "creator":"Tammy Armijos",
      "pubDate":"Thu, 08 Jul 2021 19:52:12 +0000",
      "description":"Google Chrome es el navegador m??s utilizado del mundo."
    },
    {
      "title":"Desarrollan tecnolog??a que alerta si los pol??ticos est??n mirando el celular en las sesiones parlamentarias",
      "link":"https://eluniverso.com/larevista/tecnologia/desarrollan-tecnologia-que-alerta-si-los-politicos-estan-mirando-el-celular-en-las-sesiones-parlamentarias-nota/",
      "creator":"Andres Alejandro",
      "pubDate":"Wed, 07 Jul 2021 19:17:27 +0000",
      "description":"La herramienta desarrollada por Deporteer funciona de forma autom??tica."
    },
    {
      "title":"Twitter planea a??adir notificaciones cuando otras personas buscan al usuario por su nombre",
      "link":"https://eluniverso.com/larevista/tecnologia/twitter-planea-anadir-notificaciones-cuando-otras-personas-buscan-al-usuario-por-su-nombre-nota/",
      "creator":"Andres Alejandro",
      "pubDate":"Wed, 07 Jul 2021 19:05:41 +0000",
      "description":"La plataforma ya cuenta con la opci??n de limitar que otras personas puedan encontrar al usuario buscando su n??mero de tel??fono o email."
    },
    {
      "title":"Los hackers nos aventajan porque hay poca gente especializada en ciberseguridad. No damos abasto???: Soledad Antelada, la latina que protege al Departamento de Energ??a de EE.UU.",
      "link":"https://eluniverso.com/larevista/tecnologia/los-hackers-nos-aventajan-porque-hay-poca-gente-especializada-en-ciberseguridad-no-damos-abasto-soledad-antelada-la-latina-que-protege-al-departamento-de-energia-de-eeuu-nota/",
      "creator":"Carla Rodr??guez",
      "pubDate":"Wed, 07 Jul 2021 13:51:00 +0000",
      "description":"Soledad Antelada Toledano se comporta como un hacker, pero de los ???buenos???."
    }

  ]*/



  ngOnInit(): void {
  }
}

//export interface IRssData {}
