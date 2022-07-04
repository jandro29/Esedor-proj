import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-contact-dashboard',
  templateUrl: './contact-dashboard.component.html',
  styleUrls: ['./contact-dashboard.component.css'],
})
export class ContactDashboardComponent implements OnInit {
  paso1 = true;
  paso2 = false;
  paso3 = false;

  formLoading: boolean = false;

  finalStep!: boolean;

  @Output() closeForm = new EventEmitter<any>();

  contactForm = this.formBuilder.group({
    reto: '',
    tecnologias: [],
    descripcion: '',
    nombres: '',
    apellidos: '',
    correo: '',
    telefono: '',
    empresaCargo: '',
    tiempoEntrega: '',
  });

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {}

  messageSent() {
    this.finalStep = !this.finalStep;
  }

  onSubmit() {
    const contactData = {
      reto: this.contactForm.value.reto,
      tecnologias: this.contactForm.value.tecnologias,
      descripcion: this.contactForm.value.descripcion,
      nombres: this.contactForm.value.nombres,
      apellidos: this.contactForm.value.apellidos,
      correo: this.contactForm.value.correo,
      telefono: this.contactForm.value.telefono,
      empresaCargo: this.contactForm.value.empresaCargo,
      tiempoEntrega: this.contactForm.value.tiempoEntrega,
    }

    this.formLoading = true;
    this.http
      .post<any>('https://esedor.com/send-mail.php', contactData)
      .subscribe(
        resp => {
          this.formLoading = false;
          this.messageSent();
          this.resetForm();
        },
        error => {
          alert("Ocurrió un error. Por favor, inténtelo nuevamente en unos minutos.");
          this.formLoading = false;
        }
      );
  }

  resetForm() {
    this.contactForm.controls['reto'].patchValue('');
    this.contactForm.controls['tecnologias'].patchValue([]);
    this.contactForm.controls['descripcion'].patchValue('');
    this.contactForm.controls['nombres'].patchValue('');
    this.contactForm.controls['apellidos'].patchValue('');
    this.contactForm.controls['correo'].patchValue('');
    this.contactForm.controls['telefono'].patchValue('');
    this.contactForm.controls['empresaCargo'].patchValue('');
    this.contactForm.controls['tiempoEntrega'].patchValue('');
  }

  selectChallenge(selectedVal: any) {
    this.contactForm.controls['reto'].patchValue(selectedVal);
  }

  selectTechnologies() {
    const selectedTechnologies = this.secondStepBtn
    .filter((t) => t.state === true)
    .map((t) => t.name);
    
    this.contactForm.controls['tecnologias'].patchValue(selectedTechnologies);
  }

  refresh(): void {
    window.location.reload();
  }

  ngOnInit(): void {}

  firstStepBtn = [
    { name: 'Validar mi idea de producto', state: false },
    { name: 'Creación de un MVP', state: false },
    { name: 'Crear una tienda virtual', state: false },
    { name: 'Escalar un producto existente', state: false },
    { name: 'Desarrollar un software', state: false },
    { name: 'Otra opción', state: false },
  ];

  secondStepBtn = [
    { name: 'iOS', state: false, value: 1, style: 'pr-[2.5rem]' },
    { name: 'Android', state: false, value: 2, style: 'pr-[2.5rem]' },
    { name: 'React Native', state: false, value: 3, style: 'pr-[2.5rem]' },
    { name: 'Flutter', state: false, value: 4, style: 'pr-[2.5rem]' },
    { name: 'Angular', state: false, value: 5, style: 'pr-[2.5rem]' },
    { name: 'Vue', state: false, value: 6, style: 'pr-[2.5rem]' },
    { name: 'React', state: false, value: 7, style: 'pr-[2.5rem]' },
    { name: 'Kotlin', state: false, value: 8, style: 'pr-[2.5rem]' },
    { name: 'Node', state: false, value: 9, style: 'pr-[2.5rem]' },
    { name: 'Java', state: false, value: 10, style: 'pr-[2.5rem]' },
    { name: 'PHP', state: false, value: 11, style: 'pr-[2.5rem]' },
    { name: 'Ruby', state: false, value: 12, style: 'pr-[2.5rem]' },
    {
      name: 'Machine Learning',
      state: false,
      value: 13,
      style: 'lg:col-start-2',
    },
    { name: 'Pyhton', state: false, value: 14, style: 'pr-[2.5rem]' },
    { name: 'Other', state: false, value: 15, style: 'pr-[2.5rem]' },
  ];
}
