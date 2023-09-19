import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class NotifyService {
  constructor(private _snackBar: MatSnackBar) { }
  notify(message: string, bgColor: string) {
    this._snackBar.open(message, '', {
      horizontalPosition: "right",
      verticalPosition: "top",
      duration: 1000,
      panelClass: [bgColor]
    });
  }

}
