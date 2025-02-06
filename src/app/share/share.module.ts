import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input'; 
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRippleModule, MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatStepperModule } from '@angular/material/stepper';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {MatSliderModule} from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

const MATERIAL_MODULES = [
  MatCardModule,
  MatInputModule,
  MatIconModule,
  MatCheckboxModule,
  MatButtonModule,
  MatTabsModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatTooltipModule,
  MatExpansionModule,
  MatTableModule,
  MatPaginatorModule,
  MatMenuModule,
  MatButtonToggleModule,
  MatDialogModule,
  MatSelectModule,
  MatChipsModule,
  MatSnackBarModule,
  MatProgressBarModule,
  MatRippleModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatStepperModule,
  MatProgressSpinnerModule,
  MatAutocompleteModule,
  MatSlideToggleModule,
  MatStepperModule,
  MatSliderModule,
  FormsModule,
  HttpClientModule,
  MatChipsModule,
  MatBadgeModule,
  MatTabsModule,
  DragDropModule,
  MatSliderModule,
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatSlideToggleModule,
  MatMenuModule,
  MatFormFieldModule,
  
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MATERIAL_MODULES,
  ],
  exports: [
    MATERIAL_MODULES,
  ],
  providers: []
})
export class SharedModule { }
