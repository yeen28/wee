import { DmMessageDTO } from "./DmMessageDTO";

export interface DmDTO {
    id: number;
    name: string;
    avatar: string;
    preview: string;
    time: string;
    messages: DmMessageDTO[];
}