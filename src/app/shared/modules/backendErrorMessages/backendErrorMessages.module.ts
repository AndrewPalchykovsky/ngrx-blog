import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BackendErrorMessages} from 'src/app/shared/modules/backendErrorMessages/components/backendErrorMessages/backendErrorMessages.component';

@NgModule({
  declarations: [BackendErrorMessages],
  imports: [CommonModule],
  exports: [BackendErrorMessages],
})
export class BackendErrorMessagesModule {}
