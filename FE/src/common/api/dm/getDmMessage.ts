import { DmDTO } from '../../../models/DmDTO';

/**
 * 메시지 목록을 가져옵니다.
 * @returns
 */
export default async function getDmMessage(): Promise<DmDTO[]> {
    const response = await fetch('/api/dm/message');
    return response.json();
}