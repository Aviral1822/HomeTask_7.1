import {Component} from '@angular/core'

@Component({
    selector : 'app-manual',
    templateUrl:'./manual.component.html',
    styleUrls:['./manual.component.css']
})

export class manualComponent
{
    toggle = true;
    status = "Enable";
    
    
    enableDisableRule() {
      this.toggle = !this.toggle;
      this.status = this.toggle ? "Enable" : "Disable";
}
}