type SuffixTree = Map<string, SuffixTree>;

// TODO reserve \x02 and \x03 or similar for control characters.

export function suffix_tree(input: string): SuffixTree {
    const stree: SuffixTree = new Map();
    for (let i = input.length - 1; i >= 0; i--) {
        let subtree = stree;
        const suffix = input.slice(i);
        console.log(suffix);
        for (const char of suffix) {
            if (!subtree.has(char)) {
                subtree.set(char, new Map());
            }
            subtree = subtree.get(char);
        }
    }
    return stree;
}

export function burrows_wheeler_transform(input: string): string {
    const utf32 = ("\x02" + input + "\x03").split("").map(char => char.codePointAt(0));
    const out = Array(utf32.length);
    return input;
}
