import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore, private router: Router) { }

  async register(user: any) {
    try {
      console.log('Iniciando processo de registro');

      if (!this.validateUserData(user)) {
        throw new Error('Todos os campos devem ser preenchidos, incluindo CPF ou CNPJ, dependendo do tipo de usuário.');
      }

      const userCredential = await this.afAuth.createUserWithEmailAndPassword(user.email, user.password);
      console.log('Usuário criado:', userCredential.user);

      if (!userCredential.user) {
        throw new Error('Usuário não foi criado corretamente.');
      }

      await userCredential.user.updateProfile({ displayName: user.nomeCompleto });
      console.log('Perfil do usuário atualizado');

      const userData = {
        nomeCompleto: user.nomeCompleto,
        email: user.email,
        telefone: user.telefone,
        cpf: user.tipo === 'comum' ? user.cpf : '',
        cnpj: user.tipo === 'lar' ? user.cnpj : '',
        dataNascimento: user.tipo === 'comum' ? user.dataNascimento : '',
        cep: user.cep,
        endereco: user.endereco,
        numero: user.numero,
        cidade: user.cidade
      };

      console.log('Dados do usuário a serem salvos:', userData);

      await this.firestore.collection('users').doc(userCredential.user.uid).set(userData);
      console.log('Documento do usuário criado no Firestore');
    } catch (error: any) {
      if (error instanceof Error) {
        console.error('Erro durante o registro:', error.message);
      } else {
        console.error('Erro desconhecido durante o registro', error);
      }
    }
  }

  private validateUserData(user: any): boolean {
    const valid = user.nomeCompleto && user.email && user.telefone && 
                  (user.tipo === 'comum' ? user.cpf : user.cnpj) &&
                  (user.tipo === 'comum' ? user.dataNascimento : true) &&
                  user.cep && user.endereco && user.numero && user.cidade;
    if (!valid) {
      console.error('Dados do usuário inválidos:', user);
    }
    return valid;
  }

  async login(email: string, password: string) {
    try {
      await this.afAuth.signInWithEmailAndPassword(email, password);
      this.router.navigate(['/feed']);
    } catch (error) {
      this.router.navigate(['']);
    }
  }

  async googleLogin() {
    try {
      await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
      this.router.navigate(['/feed']);
    } catch (error) {
      this.router.navigate(['home']);
    }
  }

  async logout() {
    try {
      await this.afAuth.signOut();
      this.router.navigate(['']);
    } catch (error) {
      console.error('Error during logout', error);
    }
  }
}
