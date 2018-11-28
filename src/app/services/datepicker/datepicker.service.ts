import { Injectable } from '@angular/core';
import { BsDatepickerConfig,BsLocaleService } from 'ngx-bootstrap/datepicker';
import { esLocale } from 'ngx-bootstrap/locale';
import { defineLocale } from 'ngx-bootstrap';

@Injectable()
export class DatePickerService {

locale = 'es';

public bsConfig: Partial<BsDatepickerConfig>;

constructor(public localeService:BsLocaleService) {

defineLocale('es', esLocale);

this.localeService.use(this.locale);

this.bsConfig = Object.assign({},
    {
    containerClass: 'theme-dark-blue',
    showWeekNumbers: false,
    }
);
}

getBsConfig() {
    return this.bsConfig;
}
}