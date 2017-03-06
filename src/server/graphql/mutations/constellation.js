import {
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLID,
} from 'graphql';

import constellationInputType from '../types/constellation-input';
import constellationType from '../types/constellation';
import getProjection from '../get-projection';
import ConstellationModel from '../../models/constellation';

export default {
  addConstellation: {
    type: GraphQLBoolean,
    args: {
      data: {
        name: 'data',
        type: new GraphQLNonNull(constellationInputType)
      }
    },
    async resolve(root, params, context, options) {
      const constellationModel = new ConstellationModel(params.data);
      const newConstellation = await constellationModel.save();

      if (!newConstellation) {
        throw new Error('Error adding new constellation');
      }
      return true;
    }
  },
  removeConstellation: {
    type: constellationType,
    args: {
      _id: {
        name: '_id',
        type: new GraphQLNonNull(GraphQLID)
      }
    },
    async resolve(root, params, context, options) {
      const projection = getProjection(options.fieldNodes[0]);
      const removedConstellation = await ConstellationModel
        .findByIdAndRemove(params._id, {
          select: projection
        })
        .exec();

      if (!removedConstellation) {
        throw new Error('Error removing constellation');
      }

      return removedConstellation;
    }
  },
};
