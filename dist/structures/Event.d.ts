import { ClientEvents } from "discord.js";
export declare class Event<Key extends keyof ClientEvents> {
    event: Key;
    run: (...args: ClientEvents[Key]) => void;
    constructor(event: Key, run: (...args: ClientEvents[Key]) => void);
}
