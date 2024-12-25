export const ValkyrieLegacyToString = {
    writeBool: function(value) {
        process.stdout.write(value);
    },
    
    writeU8: function(value) {
        process.stdout.write(value);
    },
    
    writeU16: function(value) {
        process.stdout.write(value);
    },
    
    writeU32: function(value) {
        process.stdout.write(value);
    },
    
    writeU64: function(value) {
        process.stdout.write(value);
    },
    
    writeI8: function(value) {
        process.stdout.write(value);
    },
    
    writeI16: function(value) {
        process.stdout.write(value);
    },
    
    writeI32: function(value) {
        process.stdout.write(value);
    },
    
    writeI64: function(value) {
        process.stdout.write(value.toString());
    },
    
    writeF32: function(value) {
        process.stdout.write(value);
    },
    
    writeF64: function(value) {
        process.stdout.write(value);
    },
    
    writeChar: function(value) {
        process.stdout.write(value.toString());
    },
    
    writeString: function(value) {
        process.stdout.write(value);
    }
};