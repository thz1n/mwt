interface ICommonCharacterAttributes {
    AccountID?: string,
    Name: string,
    cLevel?: number,
    LevelUpPoint?: number,
    Class?: number,
    Strength?: number,
    Dexterity?: number,
    Vitality?: number,
    Energy?: number,
    Leadership?: number,
    Life?:number,
    MaxLife?: number,
    Mana?: number,
    MaxMana?: number,
    CtlCode?: number
}
interface ICharacterInventory {
    Inventory?: string
}
interface IResetsCharacterModel {
    Resets?: number,
    SResets?: number,
    MResets?: number
}

interface IResetsOptionalCharacterModel {
    ResetsDay?: number,
    ResetsWeek?: number,
    ResetsMonth?: number,
}

interface IEventCharacterModel {
    QuizEvent?: number,
    DuelEvent?: number,
    PegaEvent?: number,
    SobreEvent?: number,
    BossEvent?: number,
    DeathEvent?: number,
    CoinEvent?: number,
    RaffleEvent?: number,
    TheftEvent?: number
}

type ICharacter = ICommonCharacterAttributes & ICharacterInventory & IResetsCharacterModel & IResetsOptionalCharacterModel & IEventCharacterModel;



export { ICharacter };

