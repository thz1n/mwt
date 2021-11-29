
import  { IDevilSquareModel, DevilSquareModel } from '../models/devilSquareModel';

function findDevilSquare() {
    return DevilSquareModel.findAll<IDevilSquareModel>();
}


export default { findDevilSquare }
