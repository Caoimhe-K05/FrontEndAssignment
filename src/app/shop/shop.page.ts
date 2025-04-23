import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonButtons, IonBackButton, IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle } from '@ionic/angular/standalone';
import { RouterLinkWithHref} from '@angular/router';//imported
import { RouterLink } from '@angular/router';//imported

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
  standalone: true,
  imports: [RouterLinkWithHref, RouterLink, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonCol, IonGrid,  IonButton, IonButtons, IonBackButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ShopPage {
  products = [//array which holds all the product info
    {
      name: 'Adidas Spezial',
      price: 110.00,
      image: 'https://cdn-images.farfetch-contents.com/20/19/51/09/20195109_50083238_1000.jpg'
    },
    {
      name: 'Platform Doc Martins', 
      price: 210.00,
      image: 'https://cdn.media.amplience.net/i/drmartens/15265001.80.jpg'
    },
    {
      name: 'Adidas Gazelle Bold',
      price: 120.00,
      image: 'https://sutore.com/wp-content/uploads/2024/02/adidas-Gazelle-Bold-Magic-Beige-Collegiate-Green-ID7056.jpg'
    },
    {
      name: 'Platform Converse',
      price: 80.00,
      image: 'https://data.sneakers76.com/images/galleries/7289/converse_36.jpg'
    },
    {
      name: 'Nike Blazers',
      price: 90.00,
      image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3bdcf8a1-b301-4444-8dfd-92601bbf42ac/W+BLAZER+MID+%2777.png'
    },
    {
      name: 'Old School Vans',
      price: 60.00,
      image: 'https://m.media-amazon.com/images/I/71vvH8cJFGL.jpg'
    }
  ];

  selectedItems: any[] = [];//holds selected items for checkout

  toggleSelection(item: any)
  {
    const index = this.selectedItems.indexOf(item);//checks if item is already selected
    if(index > -1) 
    {
      this.selectedItems.splice(index, 1);//if selected remove from selectedItem array
    }
    else{
      this.selectedItems.push(item);//if not - add to array
    }
  }

  isSelected(item: any): boolean{
    return this.selectedItems.includes(item);
  }

  checkout() {
    console.log('Selected items:', this.selectedItems);//logs selected item
    const total = this.selectedItems.reduce((sum, item) => sum + item.price, 0);//calculates price
    alert(`You selected ${this.selectedItems.length} items. Total: $${total.toFixed(2)}`);//shows alert with the total price
  }
}
