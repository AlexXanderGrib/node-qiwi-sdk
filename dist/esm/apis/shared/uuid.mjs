import { v4 } from "uuid";
/**
 * Генерирует UUID
 *
 * @export
 * @return {string}
 */
function generateUUID() {
  return v4();
}
export { generateUUID };
