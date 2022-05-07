import { ExtendedError } from "../error";

/**
 * Ошибка, которую выбрасывает персональное API в случае
 * неправильного кода ответа от QIWI
 */
export class DetectorError extends ExtendedError {}
