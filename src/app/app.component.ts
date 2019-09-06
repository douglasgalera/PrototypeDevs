import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController,
    private router: Router
  ) {
    this.initializeApp();
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  goList() {
    console.log('teste');
    this.menu.close('menuId');
    this.router.navigate(['/listas']);
  }

  goGame(msg) {
    console.log(msg);
    const item = [{nome:'Laranja'},{nome:'Roxo'},{nome:'Azul'},{nome:'preto'}];
    sessionStorage.setItem('filmes',JSON.stringify(item));
    this.menu.close('menuId');
    this.router.navigate(['/game']);
  }

  home() {
    this.menu.close('menuId');
    this.router.navigate(['/home']);
  }

}
