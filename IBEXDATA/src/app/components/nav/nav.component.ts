
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  
  items: MenuItem[] | undefined;

  items1!: Array<{label:string,icon:string,routerLink:Array<any>|undefined}>;
  message:string|null=""
  constructor( private activateRoute: ActivatedRoute ,private router: Router){
    // this.message = this.activateRoute.snapshot.queryParamMap.get('GfG')
    console.log(this.message,"this.message");
  }
  ngOnInit() {
      this.items = [
          {
              label: 'דף הבית',
              icon: 'pi pi-home'
          },
          {
              label: 'הפקת אישור זכויות',
              icon: 'pi pi-star'
          },
          {
            label: ' הפקת דוחות',
            icon: 'pi pi-star'
        },
        {
          label: '  מסמכים',
          icon: 'pi pi-star'
      },
      {
        label: '  ממתינים לטיפול',
        icon: 'pi pi-star'
    },
          {
              label: 'מאגר מידע',
              icon: 'pi pi-search',
              items: [
                  {
                      label: 'רשימת בנקים',
                      icon: 'pi pi-bolt'
                  },
                  {
                      label: 'רשימת תעריפים',
                      icon: 'pi pi-server'
                  },
                  {
                      label: 'רשימת משתמשים',
                      icon: 'pi pi-pencil'
                  },
                  {
                      label: 'רשימת קבלנים',
                      icon: 'pi pi-palette',
                   
                  }
              ]
          }
      ]
  }
}
