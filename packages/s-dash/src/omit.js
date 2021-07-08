/**
 * https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_omit
 *
 * YOU REALLY DON'T NEED LODASH or other utility func for this case.
 * By using spread operator you can achieve the same in a simpler and faster manner:
 * https://github.com/FormidableLabs/victory/issues/956
 *
 * eg:
 * const object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * // Underscore/Lodash - Rather slow (mentioned in the lodash docs also)
 * const result = _.omit(object, ['a', 'c']);
 * // { 'b': '2' }
 *
 * // 'Native'
 * const { a, c, ...result } = object;
 * // { 'b': '2' }
 */
