import { ButtonInteraction, ChatInputApplicationCommandData, ChatInputCommandInteraction, GuildMember, TextChannel } from "discord.js";
import { ExtendedClient } from "./Client";

export interface ExtendedInteraction extends ChatInputCommandInteraction {
	member: GuildMember;
	channel: TextChannel;
}

export interface ExtendedButtonInteraction extends ButtonInteraction {
	member: GuildMember;
	channel: TextChannel;
}

export interface RunOptions {
	client: ExtendedClient;
	interaction: ExtendedInteraction;
}

export type CommandType = {
	run: (options: RunOptions) => unknown;
	permission?: string;
	directory?: string;
} & ChatInputApplicationCommandData;

interface CommandConfig {
	[key: string]: {
		Enabled: boolean;
		Cooldown?: string;
		Permissions: string[];
	}
}

export { CommandConfig };