import { Component, OnInit } from '@angular/core';
import { IonContent, IonCard, IonCardTitle, IonCardContent, IonImg, IonSearchbar, IonToast, ModalController, IonButton, IonText } from '@ionic/angular/standalone';
import { HeaderComponent } from "../shared/header/header.component";
import { ServicesService } from '../core/services/services.service';
import { Cat } from '../core/models/cats.model';
import { environment } from 'src/environments/environment.prod';
import { CatDetailComponent } from './cat-detail/cat-detail.component';
// import { ModalController } from '@ionic/angular'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonText, IonButton, IonToast, IonSearchbar, IonImg, IonCardContent, IonCardTitle, IonCard, IonContent, HeaderComponent],
})
export class HomePage implements OnInit {
  cloneCats: Cat[] = [];
  cats: Cat[] = [];
  isToastOpen: boolean = false;
  imageUrl: string = environment.imagesUrl;
  constructor(
    private catService: ServicesService,
    private _modalCtrl: ModalController
  ) {}

  ngOnInit(): void {
    this.loadCats();
  }

  public loadCats() {
    this.catService.getAllCats().subscribe({
      next: data => {
        this.cats = data,
        this.cloneCats = [...this.cats]
      },
      error: () => {
        this.showError(true);
      }
    })
  }

  public showError(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  public searchCat(evt: any) {
    const term: string = evt.detail.value.toLowerCase();
    this.cats = this.cloneCats.filter(cat =>
      cat.name.toLowerCase().includes(term)
    );
  }

  async openDetails(cat: Cat) {
    const modal = await this._modalCtrl.create({
      component: CatDetailComponent,
      componentProps: {
        cat: cat
      }
    });
    await modal.present();
  }
}
