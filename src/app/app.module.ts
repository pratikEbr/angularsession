import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { colors, chartColor} from './appcolors/mycolors';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TeamComponent } from './team/team.component'
import { FlexLayoutModule } from '@angular/flex-layout';
import { ServicesComponent } from './services/services.component';
import { SeoComponent } from './seo/seo.component';
import { PpcComponent } from './ppc/ppc.component';
import { AnimationComponent } from './animation/animation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PipeComponent } from './pipe/pipe.component';
import { SquareRootPipe } from './pipes/square-root.pipe';
import { MultiplyPipe } from './pipes/multiply.pipe';
import { FormComponent } from './form/form.component'
import{FormsModule} from '@angular/forms'


const appRoutes: Routes = [
  { path: '', component: HomeComponent,  },
  { 
    path: 'about', 
    children : [
      { path: '', component: AboutComponent,  },
      { path: 'team', component: TeamComponent,  },
      
    ]
  },
  { path: 'services', component: ServicesComponent,
    children : [
      { path: 'seo', component: SeoComponent,  },
      { path: 'ppc', component: PpcComponent,  },
    ]
  },
  { path: 'animation', component: AnimationComponent,  },
  { path: 'pipe', component: PipeComponent,  },
  { path: 'form', component: FormComponent,  },
  


  { path: '**', component: PagenotfoundComponent,  },
 
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PagenotfoundComponent,
    TeamComponent,
    ServicesComponent,
    SeoComponent,
    PpcComponent,
    AnimationComponent,
    PipeComponent,
    SquareRootPipe,
    MultiplyPipe,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
     RouterModule.forRoot(appRoutes),
     FormsModule

  ],
  providers: [colors, chartColor],
  bootstrap: [AppComponent]
})
export class AppModule { }
