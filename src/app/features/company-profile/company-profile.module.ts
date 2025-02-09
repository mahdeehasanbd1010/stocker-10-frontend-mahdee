import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyProfileIndexComponent } from './company-profile-index/company-profile-index.component';
import { CompanyProfileRoutingModule } from './company-profile-routing.module';
import { TecIndicatorTableComponent } from './tec-indicator-table/tec-indicator-table.component';
import { ComparisonTableComponent } from './comparison-table/comparison-table.component';
import { DataTablesModule } from 'angular-datatables';
import { NewsComponent } from './news/news.component';
import { MarketSummaryComponent } from './market-summary/market-summary.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { SharePatternComponent } from './share-pattern/share-pattern.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ReportsComponent } from './reports/reports.component';
import { MatTableModule } from '@angular/material/table';
import {
  CandleSeriesService,
  ChartModule,
  LineSeriesService,
  BollingerBandsService,
  DateTimeService,
  RangeAreaSeriesService,
} from '@syncfusion/ej2-angular-charts';
import { MatButtonModule } from '@angular/material/button';
import { HealthSliderComponent } from './health-slider/components/health-slider/health-slider.component';
import { HealthSliderDuplicateDirective } from './health-slider/directives/health-slider-duplicate.directive';
import { HealthSliderInnerContentComponent } from './health-slider/components/health-slider-inner-content/health-slider-inner-content.component';
import { OtherIndicatorsComponent } from './other-indicators/components/other-indicators/other-indicators.component';
import {FormsModule} from "@angular/forms";
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from "@angular/material/icon";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
// @ts-ignore

@NgModule({
  declarations: [
    CompanyProfileIndexComponent,
    TecIndicatorTableComponent,
    ComparisonTableComponent,
    NewsComponent,
    MarketSummaryComponent,
    SharePatternComponent,
    OtherIndicatorsComponent,
    ProfileCardComponent,
    ReportsComponent,
    HealthSliderComponent,
    HealthSliderDuplicateDirective,
    HealthSliderInnerContentComponent,
  ],
  imports: [
    CommonModule,
    CompanyProfileRoutingModule,
    DataTablesModule,
    MatTableModule,
    NgApexchartsModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  exports: [
    CompanyProfileIndexComponent,
    HealthSliderDuplicateDirective,
    ChartModule,
  ],
  providers: [
    CandleSeriesService,
    LineSeriesService,
    BollingerBandsService,
    DateTimeService,
    RangeAreaSeriesService,
  ],
})
export class CompanyProfileModule {}
