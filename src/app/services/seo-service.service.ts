import { Injectable } from '@angular/core';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoServiceService {

  constructor(private title: Title, private meta: Meta) { }

  updateTitle(title: string){
    this.title.setTitle(title);
  }
  updateMetaTags(metaTags: MetaDefinition[]){
    if (!metaTags || metaTags.length === 0) return;
    metaTags.forEach(m=> this.meta.updateTag(m));
  }
}
