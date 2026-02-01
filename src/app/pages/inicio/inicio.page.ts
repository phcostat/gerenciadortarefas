import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: false
})
export class InicioPage implements OnInit {

  constructor() { }

  menu = [
    {descricao: "Tarefas", rota: "/tarefa", icone: "list", cor: "dark"},
    {descricao: "Tipos", rota: "/tipo", icone: "grid", cor: "dark"}
  ];

  ngOnInit() {
  }

}

