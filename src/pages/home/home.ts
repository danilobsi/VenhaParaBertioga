import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  ItemsToDo = [
    // {
    //     title: "Praia de Boraceia",
    //     description: "Larga faixa de areia plana, boa para caminhadas. Oferece quiosques e campings ao longo da orla.",
    //     distance: "35 km do Centro, 25 km de Indaia",
    // },
    {
      title: "Praia de São Lourenço",
        description: `Cercada por casas, muitos prédios e seguranças. 
          A orla, de areia batida, é acompanhada por um gramado decorado com coqueiros. 
          Mar calmo que atrai famílias com crianças, porém há algumas formações de ondas
          nos arredores do píer, onde ocorrem campeonatos de surf.`,
        location: "16 km do Centro, 6 km de Indaia, em direção a São Sebastião",
    },
    {
        title: "Forte de São João",
        description: `Concluída pelos portugueses em 1547, a fortaleza é considerada a mais antiga do Brasil. 
          Bem conservada, exibe paredes originais e abriga exposição permanente de armas e de ocas indígenas. 
          No entorno fica o Parque dos Tupiniquins, com grande área verde, artefatos históricos e estátuas.`,
        location: "No Centro, 10 km de Indaia em direção ao centro",
    },
    {
        title: "Passeio de Escuna",
        description: `As embarcações partem do Píer de Bertioga e circulam por praias e ilhas, com paradas para banhos. 
          Entre os passeios mais bacanas está o que leva à praia de Iporanga. 
          As embarcações partem da balsa nos finais de semana costeiam o litoral até Iporanga, 
          onde há pausa para banho em alto mar. No caminho, as belas praias da região da Serra do Guararu.`,
        location: "No Centro, 10 km de Indaia em direção ao centro",
    },
    {
        title: "VISITAR A ALDEIA DOS ÍNDIOS GUARANIS",
        description: `A Aldeia do Rio Silveira ocupa uma área de quase mil hectares na praia de Boracéia, 
          na divisa entre Bertioga e São Sebastião. O espaço abriga cerca de 500 índios que cultivam palmito e 
          plantas ornamentais, produzem artesanato e apresentam aos visitantes suas danças, músicas e culinária típica. 
          A aldeia recebe visitas organizadas. É possível comprar artesanato e plantas ornamentais.
          Em abril acontece o Festival Nacional da Cultura Indígena, com debates, apresentações de dança, exposições, 
          atividades esportivas, venda de artesanato e workshop de pintura corporal. 
          O evento acontece sempre em data próxima ao Dia do Índio (19 de abril), no Parque dos Tupiniquins, 
          ao lado do Forte de São João.`,
        location: "No Centro, 10 km de Indaia em direção ao centro",
    } 
  ];

}
