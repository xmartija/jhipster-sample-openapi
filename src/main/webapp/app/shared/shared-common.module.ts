import { NgModule } from '@angular/core';

import { SimpleBoot2SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [SimpleBoot2SharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [SimpleBoot2SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class SimpleBoot2SharedCommonModule {}
