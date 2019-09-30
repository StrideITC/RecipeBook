import { Component ,EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';
import { DataStorageService } from '../shared/data-storage-service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    // styleUrl:''
})
export class HeaderComponent implements OnInit,OnDestroy{

    isAuthenticated =false;
    private userSub:Subscription;
    constructor(private dataStorageService:DataStorageService,
        private authService:AuthService){}

    ngOnInit()
    {
        this.userSub = this.authService.user.subscribe(user=>{
            this.isAuthenticated = !!user; //!user ?false:true;
        });
    }
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

    onlogOut()
    {
        this.authService.logout();
    }
    ngOnDestroy()
    {
        this.userSub.unsubscribe();
    }
}