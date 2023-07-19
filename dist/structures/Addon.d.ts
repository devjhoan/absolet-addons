import { ClientEvents } from "discord.js";
import { Command } from "./Command";
import { Event } from "./Event";
interface AddonType {
    name: string;
    author: string;
    commands: Command[];
    events: Event<any>[];
    version: string;
}
declare class Addon {
    name: string;
    author: string;
    commands?: Command[];
    events?: Event<keyof ClientEvents>[];
    version: string;
    constructor(addon: AddonType);
}
export default Addon;
