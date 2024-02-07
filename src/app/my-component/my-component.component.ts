import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { DxTreeViewComponent } from 'devextreme-angular';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.scss'
})
export class MyComponentComponent {


  @ViewChild(DxTreeViewComponent, { static: false }) treeView: any;
  treeDataSource: any;

  treeBoxValue: string | null;

  isTreeBoxOpened: boolean;

  gridDataSource: any;

  gridBoxValue: number[] = [3];

  isGridBoxOpened: boolean;

  gridColumns: any = ['CompanyName', 'City', 'Phone'];

  constructor(private ref: ChangeDetectorRef) {
    this.treeDataSource = [
      {
        "ID": 1,
        "name": "Stores",
        "expanded": true
      },
      {
        "ID": "1_1",
        "categoryId": 1,
        "name": "Super Mart of the West",
        "expanded": true
      },
      {
        "ID": "1_1_1",
        "categoryId": "1_1",
        "name": "Video Players"
      },
      {
        "ID": "1_1_1_1",
        "categoryId": "1_1_1",
        "name": "HD Video Player",
        "price": 220
      },
      {
        "ID": "1_1_1_2",
        "categoryId": "1_1_1",
        "name": "SuperHD Video Player",
        "price": 270
      },
      {
        "ID": "1_1_2",
        "categoryId": "1_1",
        "name": "Televisions",
        "expanded": true
      },
      {
        "ID": "1_1_2_1",
        "categoryId": "1_1_2",
        "name": "SuperLCD 42",
        "price": 1200
      },
      {
        "ID": "1_1_2_2",
        "categoryId": "1_1_2",
        "name": "SuperLED 42",
        "price": 1450
      },
      {
        "ID": "1_1_2_3",
        "categoryId": "1_1_2",
        "name": "SuperLED 50",
        "price": 1600
      },
      {
        "ID": "1_1_2_4",
        "categoryId": "1_1_2",
        "name": "SuperLCD 55",
        "price": 1750
      },
      {
        "ID": "1_1_2_5",
        "categoryId": "1_1_2",
        "name": "SuperLCD 70",
        "price": 4000
      },
      {
        "ID": "1_1_3",
        "categoryId": "1_1",
        "name": "Monitors"
      },
      {
        "ID": "1_1_3_1",
        "categoryId": "1_1_3",
        "name": "19\""
      },
      {
        "ID": "1_1_3_1_1",
        "categoryId": "1_1_3_1",
        "name": "DesktopLCD 19",
        "price": 160
      },
      {
        "ID": "1_1_4",
        "categoryId": "1_1",
        "name": "Projectors"
      },
      {
        "ID": "1_1_4_1",
        "categoryId": "1_1_4",
        "name": "Projector Plus",
        "price": 550
      },
      {
        "ID": "1_1_4_2",
        "categoryId": "1_1_4",
        "name": "Projector PlusHD",
        "price": 750
      }
    ];
    this.gridDataSource = [];
    // this.treeDataSource = this.makeAsyncDataSource(this.httpClient, 'treeProducts.json');
    this.isTreeBoxOpened = false;
    this.isGridBoxOpened = false;
    this.treeBoxValue = '1_1';
  }

  // makeAsyncDataSource(http, jsonFile) {
  //   return new CustomStore({
  //     loadMode: 'raw',
  //     key: 'ID',
  //     load() {
  //       return lastValueFrom(http.get(`data/${jsonFile}`));
  //     },
  //   });
  // }

  syncTreeViewSelection(e: any) {
    if (!this.treeView) return;

    if (!this.treeBoxValue) {
      this.treeView.instance.unselectAll();
    } else {
      this.treeView.instance.selectItem(this.treeBoxValue);
    }
  }

  treeView_itemSelectionChanged(e: any) {
    // this.treeBoxValue = e.component.getSelectedNodeKeys();
    // const selectedNodes = e.component.getSelectedNodes();
    // if (selectedNodes.length > 0) {
    //   const lastNode = selectedNodes[selectedNodes.length - 1];
    //   this.treeBoxValue = lastNode.key;
    // } else {
    //   this.treeBoxValue = null; // No nodes selected
    // }

    // All Node 
    // const selectedNodes = e.component.getSelectedNodes();
    // if (selectedNodes.length > 0) {
    //   const lastNode = selectedNodes[selectedNodes.length - 1];
    //   this.treeBoxValue = lastNode.key;
    // } else {
    //   this.treeBoxValue = null; // No nodes selected
    // }

    const selectedNodes = e.component.getSelectedNodes();
    if (selectedNodes.length > 0) {
      const lastNode = selectedNodes[selectedNodes.length - 1];
      if (!lastNode.children.length) { // Check if it's a leaf node
        this.treeBoxValue = lastNode.key;
      }
    } else {
      this.treeBoxValue = null; // No nodes selected
    }
  }

  gridBox_displayExpr(item: any) {
    // return item && `${item.CompanyName} <${item.Phone}>`;
  }

  onTreeBoxOptionChanged(e: any) {
    if (e.name === 'value') {
      this.isTreeBoxOpened = false;
      this.ref.detectChanges();
    }
  }

  onGridBoxOptionChanged(e: any) {
    if (e.name === 'value') {
      this.isGridBoxOpened = false;
      this.ref.detectChanges();
    }
  }
}
