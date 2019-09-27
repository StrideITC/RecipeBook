import { Component ,EventEmitter, Output } from '@angular/core';
import { DataStorageService } from '../shared/data-storage-service';


@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    // styleUrl:''
})
export class HeaderComponent{

    constructor(private dataStorageService:DataStorageService){}
    onSaveData()
    {
        this.dataStorageService.saveRecipe();
    }

    getRecipes()
    {
        this.dataStorageService.getRecipe().subscribe();
        ;
    }
    // @Output() featureSelected = new EventEmitter<string>();

    // onSelect(feature :string)
    // {
    //     this.featureSelected.emit(feature);
    // }
}