import { Request, Response } from 'express';
import characterRepository from 'src/repositories/characterRepository';
import guildRepository from '../repositories/guildRepository';

export const getGuildByCharName = async (req: Request, res: Response) => {
  try {
    const { charName } = req.params;

    const findGuildNameByCharName = await guildRepository.findGuildMember(String(charName));

    if (findGuildNameByCharName) {
      const { G_Name } = findGuildNameByCharName;
      const guild = await guildRepository.findGuild(String(G_Name));
      return res.json(guild);
    }

    return res.json({ G_Name:"NOGUILD", G_Mark: [] }).end();

  } catch (error) {

    return console.log(`Get Guild: ${error}`);
  }
}

export const getGuild = async (req: Request, res: Response) => {
  try {
    const { G_Name } = req.params;

    const guild = await guildRepository.findGuild(G_Name);

    return res.json(guild || null);

  } catch (error) {

    console.log(`Get Guild/:G_Name ${error}`);
  }

}

export const getGuildMembers = async (req: Request, res: Response) => {

  try {
    const { G_Name } = req.params;
    const guildMembers = await guildRepository.findGuildMembers(G_Name);
    return res.json(guildMembers || null);

  } catch (error) {

    console.log(`Get Guild/:G_Name ${error}`);
  }

}

export const getAllGuilds = async (req: Request, res: Response) => {
  try {
    const guilds = await guildRepository.findAllGuilds();

    return res.json(guilds || null);

  } catch (error) {

    console.log(`Get Guild/:G_Name ${error}`);
  }
}

export const makeGuildLogo = async (req: Request, res: Response) => {
  try {
    const { G_Mark } = req.body;
    if (G_Mark) {
      const logo = G_Mark.map((item: any) => {
        item = item.toString(16).split("");
        return item;
      }).join();

      const pixel = logo.toString().split(",");

      const GuildLogo = pixel.map((item: string) => {
        if (item == '0') { item = '' }
        if (item == '1') { item = '#000000' }
        if (item == '2') { item = '#8c8a8d' }
        if (item == '3') { item = '#ffff00' }
        if (item == '4') { item = '#fe0000' }
        if (item == '5') { item = '#ff8a00' }
        if (item == '6') { item = '#ffffff' }
        if (item == '7') { item = '#8cff01' }
        if (item == '8') { item = '#00ff00' }
        if (item == '9') { item = '#01ff8d' }
        if (item == 'a') { item = '#00ffff' }
        if (item == 'b') { item = '#008aff' }
        if (item == 'c') { item = '#0000fe' }
        if (item == 'd') { item = '#8c00ff' }
        if (item == 'e') { item = '#ff00fe' }
        if (item == 'f') { item = '#ff008c' }

        return item;
      });

      return res.json({GuildLogo});
    }
    return res.json(null).end();


  } catch (error) {
    console.log(`Make Guild Logo ${error}`);
  }
}
