import { Component } from '@angular/core';
import { CategoryItemModel } from './categories/category-item.model';
import { mock_category_list } from './categories/mock_category_list';
import { UserInfoComponent } from './user-info/user-info.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';

}
