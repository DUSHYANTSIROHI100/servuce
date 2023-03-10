import { Component } from '@angular/core';
import { EnrollService } from '../Services/enroll.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent {
  title="angular";
  OnEnroll() {
    const enrollService = new EnrollService();
    enrollService.OnEnrollClicked(this.title);
  }
}
