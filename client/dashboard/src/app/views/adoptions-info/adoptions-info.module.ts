import { RouterModule } from "@angular/router";
import { AdoptionsInfoComponent } from "./adoptions-info.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AdoptionsInfoRoutingModule } from "./adoptions-info-routing.module";
import { CreateComponent } from "./create.component";

@NgModule({
  declarations: [CreateComponent, AdoptionsInfoComponent],
  imports: [CommonModule, AdoptionsInfoRoutingModule, RouterModule],
})
export class AdoptionsInfoModule {}
