import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateComponent } from "../pets/create.component";
import { AdoptionsInfoComponent } from "./adoptions-info.component";

const routes: Routes = [
  {
    path: "",
    component: AdoptionsInfoComponent,
    children: [
      { path: "create", component: CreateComponent },

      // otherwise redirect to home
      { path: "**", redirectTo: "" },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdoptionsInfoRoutingModule {}
