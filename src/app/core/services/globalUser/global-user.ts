import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalUser {
  private uid: string = '';
  private name: string = '';
  private lastName: string = '';
  private email: string = '';
  private password: string = '';
  private country: string = '';
  private gender: string = '';
  private birthDate: string = '';
  private hobbits: string[] = [];
  private images: string[] = [];

  setUid(uid: string){
    this.uid = uid;
  }

  getUid(): string{
    return this.uid;
  }

  setName(name: string){
    this.name = name;
  }

  getName(): string{
    return this.name;
  }

  setLastName(lastName: string){
    this.lastName = lastName;
  }

  getLastName(): string{
    return this.lastName;
  }

  setEmail(email: string){
    this.email = email;
  }

  getEmail(): string{
    return this.email;
  }

  setPassword(password: string){
    this.password = password;
  }

  getPassword(): string{
    return this.password;
  }

  setCountry(country: string){
    this.country = country;
  }

  getCountry(): string{
    return this.country;
  }

  setGender(gender: string){
    this.gender = gender;
  }

  getGender(): string{
    return this.gender;
  }

  setBirthDate(birthDate: string){
    this.birthDate = birthDate;
  }

  getBirthDate(): string{
    return this.birthDate;
  }

  setHobbits(hobbit: string){
   this.hobbits.push(hobbit);
  }
  setAllHobbits(hobbits: string[]){
   this.hobbits = hobbits;
  }

  getHobbits(): string[] {
    return this.hobbits;
  }

  setImages(images: string[]){
    this.images = images;
  }

  addImage(signedUrl: string){
    this.images.push(signedUrl);
  }

  getImages(): string[]{
    return this.images;
  }

}
