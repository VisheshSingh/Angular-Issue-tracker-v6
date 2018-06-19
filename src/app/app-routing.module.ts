import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListComponent } from "./components/list/list.component";
import { CreateComponent } from "./components/create/create.component";
import { EditComponent } from "./components/edit/edit.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
const appRoutes = [
  { path: "list", component: ListComponent },
  { path: "create", component: CreateComponent },
  { path: "edit/:id", component: EditComponent },
  { path: "", redirectTo: "list", pathMatch: "full" },
  { path: "**", component: NotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
