import { parse, stringify } from 'query-string';

/**
 * Разбирает строку запроса, в том формате, который передаёт QIWI
 * @param {string} querystring Строка запроса
 * @return {*}
 */
function parseQuerystring(querystring) {
    // Парсинг строки не используется в тестах
    // Пакет `query-string` уже протестирован
    /* istanbul ignore next */
    return parse(querystring, {
        arrayFormat: "index",
        parseBooleans: true,
        parseNumbers: true
    });
}
/**
 * Создаёт строку запроса, в формате, который понимает QIWI
 *
 * @param {AnyResponse} object Объект для преобразования
 * @return {string}
 */
function formatQuerystring(object) {
    return stringify(object, {
        arrayFormat: "index",
        skipNull: true,
        skipEmptyString: false
    });
}

export { formatQuerystring, parseQuerystring };
