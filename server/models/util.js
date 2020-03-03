export function req(type) {
    return { type, required: true };
}
export function opt(type) {
    return { type, required: false };
}
