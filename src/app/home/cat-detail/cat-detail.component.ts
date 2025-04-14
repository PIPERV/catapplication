import { Component, Input, OnInit } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { Cat } from 'src/app/core/models/cats.model';
import { IonImg, IonContent, IonText, ModalController } from "@ionic/angular/standalone";
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-cat-detail',
  templateUrl: './cat-detail.component.html',
  styleUrls: ['./cat-detail.component.scss'],
  standalone: true,
  imports: [IonText, IonContent, IonImg, HeaderComponent],
})
export class CatDetailComponent  implements OnInit {
  @Input() cat!: Cat;
  imageUrl: string = environment.imagesUrl;

  constructor(
    private _modalCtrl: ModalController
  ) { }

  ngOnInit() {}

  public closeModal() {
    this._modalCtrl.dismiss()
  }

}
