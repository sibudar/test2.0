import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ParticlesConfig } from './particles-config';

declare let particlesJS: any; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public ngOnInit(): void {
    this.invokeParticles();
  }

  public invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig, function() {});
  }

  title = 'Novelty';
  // public environment = environment.environment;
  // public SomeAPIKey = environment.APIKeys.SomeAPIKey;
  // public SomeOtherAPIKey = environment.APIKeys.SomeOtherAPIKey; 
   constructor(){
    console.log(environment.production);
   
  }


}

