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
      const userCredential = await this.afAuth.createUserWithEmailAndPassword(user.email, user.password);
      await userCredential.user?.updateProfile({ displayName: user.nomeCompleto });
      await this.firestore.collection('users').doc(userCredential.user?.uid).set({
        nomeCompleto: user.nomeCompleto,
        email: user.email,
        telefone: user.telefone,
        cpfCnpj: user.cpfCnpj,
        dataNascimento: user.dataNascimento,
        cep: user.cep,
        endereco: user.endereco,
        numero: user.numero,
        cidade: user.cidade
      });
    } catch (error) {
      console.error('Error during registration', error);
    }
  }

  async login(email: string, password: string) {
    try {
      await this.afAuth.signInWithEmailAndPassword(email, password);
      this.router.navigate(['feed']);
    } catch (error) {
      this.router.navigate(['login']);
    }
  }

  async googleLogin() {
    try {
      await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
      this.router.navigate(['feed']);
    } catch (error) {
      this.router.navigate(['login']);
    }
  }

  async logout() {
    try {
      await this.afAuth.signOut();
      this.router.navigate([''])
    } catch (error) {
      console.error('Error during logout', error);
    }
  }
}
