export namespace ValkyrieLegacyToString {
  /**
   * Convert boolean value to string
   */
  export function boolToString(value: boolean): string;
  /**
   * Output unsigned 64-bit integer to console
   */
  export function u64ToString(value: bigint, radix: number): string;
  /**
   * Output signed 64-bit integer to console
   */
  export function i64ToString(value: bigint): string;
  /**
   * Output 64-bit float to console
   */
  export function f64ToString(value: number): string;
  /**
   * Output character to console
   */
  export function charToString(value: string): string;
}
