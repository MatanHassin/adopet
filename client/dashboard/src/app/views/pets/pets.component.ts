import { TokenStorageService } from "./../../services/token-storage.service";
import { Pet } from "./../../models/pet";
import { PetService } from "./../../services/pet.service";
import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-pets",
  templateUrl: "./pets.component.html",
  styleUrls: ["./pets.component.css"],
})
export class PetsComponent implements OnInit {
  pets: Pet[] = [];
  currentPet?: Pet;
  currentIndex = -1;
  title = " ";
  page = 1;
  count = 0;
  pageSize = 3;
  pageSizes = [3, 6, 9];
  isLoggedIn = false;

  constructor(
    private PetService: PetService,
    private tokenStorageService: TokenStorageService
  ) {}

  ngOnInit(): void {
    if (this.tokenStorageService.getToken()) {
      this.isLoggedIn = true;
    }
    this.retrievePets();
  }

  getRequestParams(searchTitle: string, page: number, pageSize: number): any {
    // tslint:disable-next-line:prefer-const
    let params: any = {};

    if (searchTitle) {
      params[`title`] = searchTitle;
    }

    if (page) {
      params[`page`] = page - 1;
    }

    if (pageSize) {
      params[`size`] = pageSize;
    }

    return params;
  }

  retrievePets(): void {
    const params = this.getRequestParams(this.title, this.page, this.pageSize);

    this.PetService.getAll(params).subscribe(
      (response) => {
        this.pets = response.pets;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  handlePageChange(event: number): void {
    this.page = event;
    this.retrievePets();
  }

  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.retrievePets();
  }

  refreshList(): void {
    this.retrievePets();
    this.currentPet = undefined;
    this.currentIndex = -1;
  }

  setActivePet(Pet: Pet, index: number): void {
    this.currentPet = Pet;
    this.currentIndex = index;
  }

  delete(pet: Pet): void {
    if (!pet.isAdopted) {
      this.PetService.delete(pet._id).subscribe();
      this.refreshList();
    } else {
      //todo: add alert from notifcations
      alert(`pet is adopted! can't delete ${pet._id}`);
    }
  }
}
