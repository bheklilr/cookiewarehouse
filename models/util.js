module.exports = {
    req: function(type) {
        return { type, required: true };
    },
    opt: function(type) {
        return { type, required: false };
    }
}
