export const ValkyrieLegacyArithmeticF32 = {
    pow: function (base, exponent) {
        return Math.pow(base, exponent);
    },
    
    cbrt: function (value) {
        return Math.cbrt(value);
    },
    
    hypot: function (x, y) {
        return Math.hypot(x, y);
    },
    
    exp: function (value) {
        return Math.exp(value);
    },
    
    expM1: function (value) {
        return Math.exp(value) - 1;
    },
    
    log: function (base, value) {
        return Math.log(value) / Math.log(base);
    },
    
    ln: function (value) {
        return Math.log(value);
    },
    
    lnP1: function (value) {
        return Math.log(1 + value);
    },
    
    log2: function (value) {
        return Math.log2(value);
    },
    
    log10: function (value) {
        return Math.log10(value);
    },
    
    cos: function (value) {
        return Math.cos(value);
    },
    
    cosh: function (value) {
        return Math.cosh(value);
    },
    
    sin: function (value) {
        return Math.sin(value);
    },
    
    sinh: function (value) {
        return Math.sinh(value);
    },
    
    tan: function (value) {
        return Math.tan(value);
    },
    
    tanh: function (value) {
        return Math.tanh(value);
    },
    
    acos: function (value) {
        return Math.acos(value);
    },
    
    acosh: function (value) {
        return Math.acosh(value);
    },
    
    asin: function (value) {
        return Math.asin(value);
    },
    
    asinh: function (value) {
        return Math.asinh(value);
    },
    
    atan: function (value) {
        return Math.atan(value);
    },
    
    atanh: function (value) {
        return Math.atanh(value);
    }
};