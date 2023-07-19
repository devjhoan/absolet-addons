import { ApplicationCommandOptionData, LocalizationMap } from "discord.js";
import { CommandType, RunOptions } from "../typings/Command";
export declare class Command {
    name: string;
    description: string;
    descriptionLocalizations?: LocalizationMap;
    run: (options: RunOptions) => unknown;
    options?: ApplicationCommandOptionData[];
    private directory?;
    private permission?;
    constructor(commandOptions: CommandType);
}
