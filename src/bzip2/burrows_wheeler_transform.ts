type SuffixTree = Map<string, SuffixTree>;

export function suffix_tree(input: string): SuffixTree {
    const stree: SuffixTree = new Map();
    const reverse_input = input.split("").reverse().join("");
    for (let i = reverse_input.length; i > 0; i--) {
        const suffix = reverse_input.slice(i);
        for (const char of reverse_input) {
            console.log(char);
            let subtree = stree;
            while (subtree.has(char)) subtree = subtree.get(char);
            subtree.set(char, new Map());
        }
    }
    return stree;
}

export function burrows_wheeler_transform(input: string): string {
    const utf32 = ("\x02" + input + "\x03").split("").map(char => char.codePointAt(0));
    const out = Array(utf32.length);
    return input;
}
