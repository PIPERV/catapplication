import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { IonToolbar, IonHeader, IonTitle, IonIcon, IonButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronBack } from 'ionicons/icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonButton, IonHeader, IonToolbar, IonTitle, IonIcon]
})
export class HeaderComponent  implements OnInit {
  @Input() title: string = '';
  @Input() backButton: boolean = false;
  @Output() backButtonAction: EventEmitter<any> = new EventEmitter;
  constructor(
  ) { addIcons({ chevronBack }); }

  ngOnInit() {}

  public onBackButton() {
    this.backButtonAction.emit();
  }
}
