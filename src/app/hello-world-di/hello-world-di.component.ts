import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-hello-world-di',
  templateUrl: './hello-world-di.component.html',
  styleUrls: ['./hello-world-di.component.css']
})
export class HelloWorldDiComponent {
  count = 0;
  fontColor = 'red';
  constructor(private logger: LoggerService) {}

  onLogMe() {
    this.logger.writeCount(this.count);
    this.count++;
  }
}
