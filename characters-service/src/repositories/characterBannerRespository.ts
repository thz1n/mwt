import { ICharacterBannerModel, characterBannerModel } from '../models/characterBannerModel';

const findBannerByCharacterName = async (characterName: string) => {
  return characterBannerModel.findOne<ICharacterBannerModel>({
    where: {
      Name: characterName
    },
  })
}

export { findBannerByCharacterName }