import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AdoptionRequestsRoutingModule } from "./adoption-requests-routing.module";
import { CreateComponent } from "./create.component";
import { AdoptionsInfoComponent } from "../adoptions-info/adoptions-info.component";
import { AdoptionRequestsComponent } from "./adoption-requests.component";

@NgModule({
  declarations: [CreateComponent, AdoptionRequestsComponent],
  imports: [CommonModule, AdoptionRequestsRoutingModule, RouterModule],
})
export class AdoptionRequestsModule {}
