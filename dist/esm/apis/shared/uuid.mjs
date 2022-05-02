import { v4 } from 'uuid';
import crypto from 'crypto';

/**
 * Генерирует UUID
 *
 * @export
 * @return {string}
 */
function generateUUID() {
    return crypto.randomUUID ? crypto.randomUUID() : v4();
}

export { generateUUID };
