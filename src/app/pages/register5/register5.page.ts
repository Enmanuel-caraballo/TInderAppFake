import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { File } from 'src/app/core/providers/file/file';
import { Uploader } from 'src/app/core/providers/upLoader/uploader';
import { GlobalUser } from 'src/app/core/services/globalUser/global-user';
import { IImage } from 'src/app/interfaces/image.interface';
import { IUserCreate } from 'src/app/interfaces/user.interface';
import { User } from 'src/app/shared/services/user/user';

@Component({
  selector: 'app-register5',
  templateUrl: './register5.page.html',
  styleUrls: ['./register5.page.scss'],
  standalone: false,
})
export class Register5Page implements OnInit {

  @Input() src: string = '';


  public imgUrl: string[] = [];



  public img!: IImage;
  public image: string = '';
  constructor(
    private readonly fileSrv: File,
    private readonly uploaderSrv: Uploader,
    private readonly globalUserSrv: GlobalUser,
    private readonly navSrv: NavController,
    private readonly userSrv: User
  ) { }

  ngOnInit() {
    console.log(this.globalUserSrv.getHobbits());
  }

  public async pickImage() {
    this.img = await this.fileSrv.pickImage();


    const path = await this.uploaderSrv.upload('images',
      `${Date.now()}-${this.img.name}`,
      this.img.mimeType,
      this.img.data);
    console.log(path);

    //  const hola = await this.uploaderSrv.getUrls('images', path as any);
    //  console.log(hola);

    this.image = await this.uploaderSrv.getUrl('images', path);

    this.imgUrl.push(this.image);

    //this.urlSrv.setUrl(this.image); //Seteamos la url para hacerla global con el servicio

    this.globalUserSrv.addImage(this.image);//Array glodal de imagenes

  }
  async doRegister() {
    const user: IUserCreate = {
      name: this.globalUserSrv.getName(),
      lastName: this.globalUserSrv.getLastName(),
      email: this.globalUserSrv.getEmail(),
      password: this.globalUserSrv.getPassword(),
      country: this.globalUserSrv.getCountry(),
      gender: this.globalUserSrv.getGender(),
      birthDate: this.globalUserSrv.getBirthDate(),
      hobbits: this.globalUserSrv.getHobbits(),
      images: this.globalUserSrv.getImages()
    };
    console.log(user);
    await this.userSrv.create(user);
  }

  async finish() {
    //   const user: IUserCreate = {
    //   name: this.globalUserSrv.getName(),
    //   lastName: this.globalUserSrv.getLastName(),
    //   email: this.globalUserSrv.getEmail(),
    //   password: this.globalUserSrv.getPassword(),
    //   country: this.globalUserSrv.getCountry(),
    //   gender: this.globalUserSrv.getGender(),
    //   birthDate: this.globalUserSrv.getBirthDate(),
    //   hobbits: this.globalUserSrv.getHobbits(),
    //   images: this.globalUserSrv.getImages()
    // };
    // await this.userSrv.create(user);
    // console.log(user);

    this.navSrv.navigateRoot('/home');
  }
}
