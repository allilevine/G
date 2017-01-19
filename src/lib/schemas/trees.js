// import {Mongo} from 'meteor/mongo';
// import Meta from './meta';
// import Admin from './admin';
// import smartMethods from "meteor/utilities:smart-methods";
// import smartPublish from "meteor/utilities:smart-publications";
//
// const isLoggedIn = user => !!user;
// const isEditor = (user, document) => user._id === document.approvedEditors;
//
// Trees = new Mongo.Collection('trees');
// Trees.attachSchema(new SimpleSchema({
//   Meta: {
//     type: Meta
//   },
//   Admin: {
//     type: Admin
//   },
//   constellations: {
//     type: [String],
//     maxCount: 50,
//     index: 1,
//     publish: true,
//     insertableIf: isLoggedIn,
//     editableIf: isEditor,
//     join: {
//       collection: () => Constellations,
//       joinAs: "constellations",
//       fields: ["_id", "name"]
//     }
//   },
//   category: {
//     type: [String],
//     maxCount: 40000,
//     index: 1,
//     publish: true,
//     insertableIf: isLoggedIn,
//     editableIf: isEditor
//   },
//   "category.$.name": {
//     type: String,
//     publish: true,
//     insertableIf: isLoggedIn,
//     editableIf: isEditor
//   },
//   "category.$.parent": {
//     type: String,
//     publish: true,
//     insertableIf: isLoggedIn,
//     editableIf: isEditor
//   }
// }));
//
// export default Trees;