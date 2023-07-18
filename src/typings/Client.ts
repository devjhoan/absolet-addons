import { Client, Collection, Guild, Invite } from "discord.js";
import { CommandConfig, CommandType } from "./Command";

declare class Logger {
	emojis: {
		[key: string]: string[];
	};
	constructor();
	private logger;
	warn(args: string): void;
	success(args: string): void;
	error(args: string): void;
	info(args: string): void;
}

export declare class ExtendedClient extends Client {
	commandsConfig: CommandConfig;
	cooldowns: Collection<string, number>;
	guildInvites: Collection<string, Collection<string, Invite>>;
	commands: Collection<string, CommandType>;
	logger: Logger;
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