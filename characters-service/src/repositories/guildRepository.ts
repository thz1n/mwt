import  {IGuildModel, GuildModel, IGuildMembersModel, GuildMembersModel  } from '../models/guildModel';

function findGuild(G_Name: string) {

    return GuildModel.findOne<IGuildModel>({where: {G_Name: G_Name}});
}
function findGuildMember(Name: string) {

    return GuildMembersModel.findOne<IGuildMembersModel>({where: {Name: Name}});
}
function findGuildMembers(G_Name: string) {
    
    return GuildMembersModel.findAll<IGuildMembersModel>({where: {G_Name: G_Name}});
}
function findAllGuilds() {
    
    return GuildModel.findAll<IGuildModel>({attributes:['G_Name', 'G_Mark','G_Score']});
}


export default { findGuild, findAllGuilds, findGuildMembers, findGuildMember }