const END = 0x00;

type SuffixTree = Map<string, SuffixTree | null>;

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
    const utf32 = input.split("").map(char => char.codePointAt(0));
    utf32.push(END);
    const out = Array(utf32.length);
    return input;
}
