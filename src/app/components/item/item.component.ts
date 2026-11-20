import { Component, Input, OnInit, OnChanges, Output, EventEmitter, OnDestroy } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges, OnDestroy {

  @Input() item!: Item;
  @Output() emitindoItemParaEditar = new EventEmitter();
  @Output() emitindoItemParaDeletar = new EventEmitter();

  faPen = faPen;
  faTrash = faTrash

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges(): void {
  }

  editarItem(): void {
    this.emitindoItemParaEditar.emit(this.item);
  }

  checarItem(): void {
    this.item.comprado = !this.item.comprado;
  }

  deletarItem(): void {
    this.emitindoItemParaDeletar.emit(this.item);
  }

  ngOnDestroy(): void {
  }
}
