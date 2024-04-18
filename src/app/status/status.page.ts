import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonItem, IonLabel, IonTitle, IonToolbar, IonList, IonRadio, IonRadioGroup, IonButton, IonBackButton } from '@ionic/angular/standalone';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar,IonBackButton, CommonModule, FormsModule, IonItem, IonLabel, IonList, IonRadio, IonRadioGroup, IonButton]
})
export class StatusPage implements OnInit {
  myStatus:String = "";

  constructor(private storage:Storage,private router:Router) { }

  ngOnInit() {
  }

  async ionViewWillEnter(){
    await this.storage.create();
    this.myStatus = await this.storage.get('status');
  }

  async saveStatus() {
    await this.storage.set('status', this.myStatus)
    .then(
      ()=>{
        this.router.navigate(['/home']);
      }
    )
    .catch(
      (error) => {
        console.log(error);
      }
    );
  }

}
