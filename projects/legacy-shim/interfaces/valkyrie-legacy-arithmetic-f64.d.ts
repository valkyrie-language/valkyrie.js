export namespace ValkyrieLegacyArithmeticF64 {
  /**
   * Raises a number to a floating point power.
   */
  export function pow(base: number, exponent: number): number;
  /**
   * Returns the cube root of a number, more accurate than using pow function
   */
  export function cbrt(value: number): number;
  /**
   * Compute the distance between the origin and a point (x, y) on the Euclidean plane. Equivalently, compute the length of the hypotenuse of a right-angle triangle with other sides having length x.abs() and y.abs().
   */
  export function hypot(x: number, y: number): number;
  /**
   * Returns the exponential e^value, more accurate than using pow function
   */
  export function exp(value: number): number;
  /**
   * Returns e^value - 1 in a way that is accurate even if the number is close to zero.
   */
  export function expM1(value: number): number;
  /**
   * Returns the logarithm of the number with respect to an arbitrary base.
   */
  export function log(base: number, value: number): number;
  /**
   * Returns the natural logarithm of the number, more accurate than using log function
   */
  export function ln(value: number): number;
  /**
   * Returns ln(n+1) (natural logarithm) more accurately than if the operations were performed separately.
   */
  export function lnP1(value: number): number;
  /**
   * Returns the base 2 logarithm of the number, more accurate than using log function
   */
  export function log2(value: number): number;
  /**
   * Returns the base 10 logarithm of the number, more accurate than using log function
   */
  export function log10(value: number): number;
  /**
   * Computes the cosine of a number (in radians).
   */
  export function cos(value: number): number;
  /**
   * Computes the hyperbolic cosine of a number (in radians).
   */
  export function cosh(value: number): number;
  /**
   * Computes the sine of a number (in radians).
   */
  export function sin(value: number): number;
  /**
   * Computes the hyperbolic of a number (in radians).
   */
  export function sinh(value: number): number;
  /**
   * Computes the tangent of a number (in radians).
   */
  export function tan(value: number): number;
  /**
   * Computes the hyperbolic tangent of a number (in radians).
   */
  export function tanh(value: number): number;
  /**
   * Computes the arccosine of a number.
   * 
   * Return value is in radians in the range [0, π] or NaN if the number is outside the range [-1, 1].
   */
  export function acos(value: number): number;
  /**
   * Returns the inverse hyperbolic cosine of a number
   */
  export function acosh(value: number): number;
  /**
   * Computes the arcsine of a number.
   * 
   * Return value is in radians in the range [-π/2, π/2] or NaN if the number is outside the range [-1, 1].
   */
  export function asin(value: number): number;
  /**
   * Returns the inverse hyperbolic sine of a number
   */
  export function asinh(value: number): number;
  /**
   * Computes the arctangent of a number.
   * 
   * Return value is in radians in the range [-π/2, π/2];
   */
  export function atan(value: number): number;
  /**
   * Returns the inverse hyperbolic tangent of a number
   */
  export function atanh(value: number): number;
}
