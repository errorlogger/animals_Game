import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  animals = [
    {
      'title': 'Vache',
      'image': 'imgs/animals/cow-icon.png',
      'desc': 'Meugle',
      'file': '/sounds/cow.mp3',
      'playing': false
    },
    {
      'title': 'Dauphin',
      'image': 'imgs/animals/dolphin-icon.png',
      'desc': 'Siffle',
      'file': '/sounds/dolphin.mp3',
      'playing': false
    },
    {
      'title': 'Grenouille',
      'image': 'imgs/animals/frog-icon.png',
      'desc': 'Coasse',
      'file': '/sounds/frog.mp3',
      'playing': false
    },
    {
      'title': 'Oiseau',
      'image': 'imgs/animals/bird-icon.png',
      'desc': 'Chante',
      'file': '/sounds/bird.mp3',
      'playing': false
    },
    {
      'title': 'Cochon',
      'image': 'imgs/animals/pig-icon.png',
      'desc': 'Grogne',
      'file': '/sounds/pig.mp3',
      'playing': false
    },
    {
      'title': 'Chien',
      'image': 'imgs/animals/puppy-icon.png',
      'desc': 'Aboie',
      'file': '/sounds/dog.mp3',
      'playing': false
    },
    {
      'title': 'Chat',
      'image': 'imgs/animals/black-cat-icon.png',
      'desc': 'Miaule',
      'file': '/sounds/cat.mp3',
      'playing': false
    },
    {
      'title': 'Cheval',
      'image': 'imgs/animals/horse-icon.png',
      'desc': 'Hennit',
      'file': '/sounds/horse.wav',
      'playing': false
    },
    {
      'title': 'Ane',
      'image': 'imgs/animals/donkey-icon.png',
      'desc': 'Brait',
      'file': '/sounds/donkey.wav',
      'playing': false
    }
  ];

  private currentAnimal;
  public result: string;
  public showReorder = false;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {

  }
/**
 * choix aléatoire d'un animal
 * retourne l'animal sélectionné (objet)
 */
  pickAnimal(){
    let pos;
    let animal;
    if(!this.currentAnimal){
      pos = Math.floor(Math.random()*this.animals.length);
      animal = this.animals[pos];
    }else{
      animal = this.currentAnimal;
    }
    return animal;
  }

  playSound(){
    //choix d'un son
    this.currentAnimal = this.pickAnimal();
    //instanciation objet audio
    let audio = new Audio();
    //chemin du son
    audio.src = 'assets' + this.currentAnimal.file;
    //chargement
    audio.load;

    audio.play();
  }

  /**
   * teste la validité de la réponse
   */
  guess(animalName){
    if(this.currentAnimal != null){
      if (animalName == this.currentAnimal.title){
        this.result="Bravo! Tu as gagné!!!";
        this.toastCtrl.create({
          message:"Bravo! Tu as gagné!!!",
          duration:3000,
          position: 'top',
          cssClass: 'toastCss'
        }).present();
        this.currentAnimal = null;
      }else{
        this.result="Oups! Essaie encore!!";
        this.toastCtrl.create({
          message:"Oups! Essaie encore!!",
          duration:3000,
          position: 'top',
          cssClass: 'toastCss'
        }).present();
      }
    }else{
      this.result = "veuillez faire votre choix"
    }
  }
/**
 * activation de l'option reorder dans la bar de nav
 */
  activeReorder(){
    this.showReorder=!this.showReorder;
  }

  
}


