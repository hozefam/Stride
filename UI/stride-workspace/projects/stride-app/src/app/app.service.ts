import { BehaviorSubject, Observable, from } from 'rxjs';
import { Injectable, OnInit } from '@angular/core';

import { VersionService } from 'stride-rest';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private versionSubject: BehaviorSubject<string> = new BehaviorSubject<string>(
    ''
  );
  public version$: Observable<string> = this.versionSubject.asObservable();

  constructor(private versionService: VersionService) {
    console.log('AppService ngOnInit');
    this.getVersion();
  }

  private getVersion() {
    console.log('getVersion');
    from(this.versionService.getVersion()).subscribe((version) => {
      console.log('version', version);
      this.versionSubject.next(version);
    });
  }
}
