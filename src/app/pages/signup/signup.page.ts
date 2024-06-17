/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CepService } from 'src/app/services/api/cep.service';
import { AuthService } from 'src/app/services/authentication/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  successMessage: boolean = false;
  errorMessage: string = '';

  user: any = {
    nomeCompleto: '',
    email: '',
    telefone: '',
    tipo: 'comum',
    cpf: '',
    cnpj: '',
    password: '',
    confirmPassword: '',
    dataNascimento: '',
    cep: '',
    endereco: '',
    numero: '',
    cidade: ''
  };

  constructor(private router: Router, private authService: AuthService, private cepService: CepService) {}

  buscarEndereco() {
    if (this.user.cep) {
      this.cepService.getAddressByCEP(this.user.cep).subscribe(
        (data: any) => {
          this.user.endereco = data.logradouro;
          this.user.cidade = data.localidade;
        },
        (error) => {
          console.error('Erro ao buscar o endereço:', error);
        }
      );
    }
  }

  async onSubmit() {
    const userData = { ...this.user };
    if (userData.tipo === 'comum') {
      userData.cpfCnpj = userData.cpf;
      delete userData.cnpj;
    } else if (userData.tipo === 'lar') {
      userData.cpfCnpj = userData.cnpj;
      delete userData.cpf;
      delete userData.dataNascimento;
    }
    delete userData.cpf;
    delete userData.cnpj;
    try {
      await this.authService.register(userData);
        this.router.navigateByUrl('');
    } catch (error) {
      console.error('Erro ao registrar:', error);
      this.router.navigateByUrl('')
    }
  };

  validarFormulario() {
    if (!this.user.nomeCompleto || !this.user.email || !this.user.telefone || !this.user.password || !this.user.confirmPassword ||
        !this.user.cep || !this.user.endereco || !this.user.numero || !this.user.cidade) {
      this.errorMessage = 'Todos os campos são obrigatórios.';
      return false;
    }

    if (this.user.tipo === 'comum' && (!this.user.cpf || this.user.cpf.length !== 11)) {
      this.errorMessage = 'CPF inválido.';
      return false;
    }

    if (this.user.tipo === 'lar' && (!this.user.cnpj || this.user.cnpj.length !== 14)) {
      this.errorMessage = 'CNPJ inválido.';
      return false;
    }

    if (this.user.password !== this.user.confirmPassword) {
      this.errorMessage = 'As senhas não coincidem.';
      return false;
    }

    this.errorMessage = '';
    return true;
  }

  async registrar() {
    if (!this.validarFormulario()) {
      return;
    }
      await this.authService.register(this.user);
      this.clearForm();
      this.successMessage = true;
      setTimeout(() => {
        this.successMessage = false;
        this.router.navigate(['/home']);
      }, 3000);
  }

  clearForm() {
    this.user = {
      nomeCompleto: '',
      email: '',
      telefone: '',
      tipo: 'comum',
      cpf: '',
      cnpj: '',
      password: '',
      confirmPassword: '',
      dataNascimento: '',
      cep: '',
      endereco: '',
      numero: '',
      cidade: ''
    };
  }

  ngOnInit() {}
}
