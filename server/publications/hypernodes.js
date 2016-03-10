import {HyperNodes} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('hypernodes.list', function () {
    const selector = {};
    const options = {
      fields: {_id: 1, title: 1},
      sort: {createdAt: -1},
      limit: 10
    };

    return HyperNodes.find(selector, options);
  });

  Meteor.publish('hypernodes.single', function (selectId) {
    check(selectId, String);
    const selector = {_id: selectId};
    return HyperNodes.find(selector);
  });
}
