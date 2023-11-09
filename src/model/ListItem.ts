export interface Item {
  id: string,
  item: string,
  checked: boolean,
}

export default class ListItem implements Item {

  /*id: string;    // we don't have to specify class variables if we don't need them
  item: string;
  checked: boolean;*/

  constructor(private _id: string = '', private _item: string = '', private _checked: boolean = false) {
    // if we don't need class variables, we can leave empty this function block
  }

  public get id(): string {
    return this._id;
  }

  public set id(id: string) {
    this._id = id;
  }

  public get item(): string {
    return this._item;
  }

  public set item(item: string) {
    this._item = item;
  }

  public get checked(): boolean {
    return this._checked;
  }

  public set checked(checked: boolean) {
    this._checked = checked;
  }
}