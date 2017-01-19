// import Meteor from 'meteor/meteor';
// import check from 'meteor/check';
// import HyperNodes from '/lib/schemas/hypernodes';
//
// import smartMethods from "meteor/utilities:smart-methods";
// 
// const isLoggedIn = user => !!user;
// const isOwner = (user, document) => user._id === document.createdBy;
//
// export default function () {
//   HyperNodes.smartMethods({
//     createCallback: function (user, document) {
//       document = _.extend(document, {
//         createdOn: new Date(),
//         createdBy: Meteor.userId(),
//         editedOn: new Date(),
//         editedBy: Meteor.userId()
//       });
//       return document;
//     },
//     editCallback: function (currentUser, modifier, originalDocument) {
//       modifier.$set.editedOn = new Date();
//       modifier.$set.editedBy = Meteor.userId();
//       return modifier;
//     },
//     deleteCallback: isOwner
//   });
// };