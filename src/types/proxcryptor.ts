export type Pre = {
    self_encrypt: Function
    self_decrypt: Function
    generate_re_key: Function
}

export type Proxcryptor = {
    pre: Pre
}
