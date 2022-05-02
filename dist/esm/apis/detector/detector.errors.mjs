import { ExtendedError } from '../../error.mjs';

/**
 * Ошибка, которую выбрасывает персональное API в случае
 * неправильного кода ответа от QIWI
 */
class DetectorError extends ExtendedError {
}

export { DetectorError };
