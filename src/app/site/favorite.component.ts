import { Component, Input } from '@angular/core';

@Component({
    selector: 'favorite-icon',
    template: `
    <div class="favourite-icon">
        <figure [class.active]="isSelected" (click)="favClick()">
            <img src="assets/icons/favorite_border-24px.svg" class="favorite-deactive">
            <img src="assets/icons/favorite-24px.svg" class="favorite-active">
        </figure>
    </div>
    `,
})

export class FavoriteComponent {
    @Input('isFav') isSelected: any;

    favClick() {
        this.isSelected = !this.isSelected;
    }
}