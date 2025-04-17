import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PluginPage } from './plugin.page';

describe('PluginPage', () => {
  let component: PluginPage;
  let fixture: ComponentFixture<PluginPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PluginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
