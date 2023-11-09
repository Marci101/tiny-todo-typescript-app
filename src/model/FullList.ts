import ListItem from "./ListItem";

interface List {
  list: ListItem[],
  load(): void,
  save(): void,
  clearList(): void,
  addItem(itemObj: ListItem): void,
  removeItem(id: string): void,
}

export default class FullList implements List {

  static instance: FullList = new FullList();    // Singleton is a creational design pattern, which ensures that only one object of its kind exists and provides a single point of access to it
  
  private constructor(private _list: ListItem[] = []) {    // with the "private constructor" we can create a Singleton
    // if we don't need class variables, we can leave empty this function block
  }

  public get list(): ListItem[] {
    return this._list;
  }

  public load(): void {
    const storedList: string | null = localStorage.getItem('myList');
    if (typeof storedList !== 'string') {
      return;
    }
    const parsedList: {_id: string, _item: string, _checked: boolean}[] = JSON.parse(storedList);
    parsedList.forEach((listObj) => {
      const newListItem = new ListItem(listObj._id, listObj._item, listObj._checked);
      FullList.instance.addItem(newListItem);
    });
  }

  public save(): void {
    localStorage.setItem('myList', JSON.stringify(this._list));    // save the list into local storage (memory of the browser)
  }

  public clearList(): void {
    this._list.length = 0;
    this.save();
  }

  public addItem(itemObj: ListItem): void {
    this._list.push(itemObj);
    this.save();
  }

  public removeItem(id: string): void {
    this._list = this._list.filter(item => item.id !== id);
    this.save();
  }
}