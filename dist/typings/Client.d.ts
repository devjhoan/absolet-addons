import { Client, Collection, Guild, Invite } from "discord.js";
import { CommandConfig, CommandType } from "./Command";
export declare class ExtendedClient extends Client {
    commandsConfig: CommandConfig;
    cooldowns: Collection<string, number>;
    guildInvites: Collection<string, Collection<string, Invite>>;
    commands: Collection<string, CommandType>;
    giveawayManager: any;
    messages: any;
    config: any;
    distube: any;
    logger: any;
    guild: Guild;
    constructor();
    start(): Promise<never>;
    importFile(filePath: string): Promise<unknown>;
    importAddon(filePath: string): Promise<unknown>;
    loadEvents(): Promise<void>;
    loadCommands(): Promise<void>;
    registerCommands(): Promise<void>;
    checkTemporalRoles(): Promise<void>;
    checkStatsChannels(): Promise<void>;
    loadAddons(): Promise<void>;
    handleErrors(): void;
}
