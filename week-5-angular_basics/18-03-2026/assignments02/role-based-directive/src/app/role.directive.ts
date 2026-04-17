// // import { Directive } from '@angular/core';

// // @Directive({
// //   selector: '[appRole]'
// // })
// // export class RoleDirective {

// //   constructor() { }

// // }

// import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

// @Directive({
//   selector: '[appRole]',
//   standalone: true
// })
// export class RoleDirective {

//   // current user role (you can change this)
//   userRole: string = 'admin'; // try 'user' also

//   constructor(
//     private templateRef: TemplateRef<any>,
//     private viewContainer: ViewContainerRef
//   ) {}

//   @Input() set appRole(requiredRole: string) {

//     if (this.userRole === requiredRole) {
//       this.viewContainer.createEmbeddedView(this.templateRef);
//     } else {
//       this.viewContainer.clear();
//     }

//   }

// }


import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRole]',
  standalone: true
})
export class RoleDirective {

  private currentUserRole: string = '';

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input() set appRole(requiredRole: string) {
    this.requiredRole = requiredRole;
    this.updateView();
  }

  @Input() set appRoleUser(role: string) {
    this.currentUserRole = role;
    this.updateView();
  }

  private requiredRole: string = '';

  private updateView() {
    this.viewContainer.clear();

    if (this.currentUserRole === this.requiredRole) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }

}