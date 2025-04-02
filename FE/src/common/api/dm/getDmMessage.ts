import { convertBackendDmToFrontend, DmDTO } from '../../../models/DmDTO';

/**
 * 메시지 목록을 가져옵니다.
 * @returns
 */
export default async function getDmMessage(): Promise<DmDTO[]> {
    return await fetch('/api/dm/message')
        .then(response => response.json())
        .then(data => data.map(convertBackendDmToFrontend));
}