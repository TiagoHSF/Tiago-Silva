import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
@Component({
  selector: 'app-sobre-mim',
  templateUrl: './sobre-mim.component.html',
  styleUrls: ['./sobre-mim.component.scss'],
})
export class SobreMimComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  abrirModalIDE() {
    Swal.fire({
      title: 'CONHECIMENTO EM IDES',
      confirmButtonText: 'Fechar',
      text: 'Visual Studio Code, IntelliJ, Eclipse',
    });
  }

  abrirModalLinguagens() {
    Swal.fire({
      title: 'LINGUAGENS DE PROGRAMAÇÃO',
      confirmButtonText: 'Fechar',
      text: 'TypeScript, Java, JavaScript && HTML, CSS',
    });
  }

  abrirModalAws() {
    Swal.fire({
      title: 'INFRAESTRUTURA',
      confirmButtonText: 'Fechar',
      text: 'Amazon AWS e serviços, Docker, ApiRest, Kubernetes,',
    });
  }

  abrirModalConhecimentos() {
    Swal.fire({
      title: 'INFRAESTRUTURA',
      confirmButtonText: 'Fechar',
      text: 'Amazon AWS e serviços, Docker, ApiRest, Kubernetes,',
    });
  }
}
