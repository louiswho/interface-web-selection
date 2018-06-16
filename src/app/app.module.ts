import { NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { SelectionModule } from '../../projects/revaturecloud/selection/src/lib/selection.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SelectionModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
