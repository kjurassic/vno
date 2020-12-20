import { component } from "./types.ts";

function Component(this: component, label: string, path: string) {
  this.label = label;
  this.path = path;
  this.child = null;
  this.sibling = null;
}

export default Component;

// const komponents: any = ["Green", "Purple", "Orange"];
// "Green"

// function listBuilder(parent: component) {
//   // this = App
//   parent.child = new (SiblingList as any)();
//   while (komponents.length) {
//     const str = komponents.pop(); // <-- currently "Orange"
//     const descendent = Storage[str]; // <-- storage['Orange'] = component {}
//     parent.child?.add(descendent);
//   }
//   console.log("sibling list", parent.child);
// }

// listBuilder(App);

// const current = komponents.pop();
// parent.child.sibling = current;
// const current = storage[komponents.pop()]

// listBuilder(storage.App)
/**
 * parser will contain the components of the tree:: cache will be the tree
 *
 * this.root = App;
 * App.child = Green;
 * Green.sibling = Purple
 * Purple.sibling = Orange
 
 * queue = [ Green, Purple, Orange ]
*/
