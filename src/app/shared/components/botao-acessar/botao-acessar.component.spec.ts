import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoAcessarComponent } from './botao-acessar.component';

describe('BotaoAcessarComponent', () => {
  let component: BotaoAcessarComponent;
  let fixture: ComponentFixture<BotaoAcessarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotaoAcessarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BotaoAcessarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
