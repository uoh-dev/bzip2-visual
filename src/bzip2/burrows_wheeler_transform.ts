type END = 0x00;
const END: END = 0x00;

type SuffixTreeNode = Map<string | END, SuffixTree>;
type SuffixTree = SuffixTreeNode | number;

export function suffix_tree(input: string): SuffixTree {
    const stree: SuffixTreeNode = new Map();
    const input_arr: (string | END)[] = input.split("");
    input_arr.push(END);
    for (let i = input_arr.length - 1; i >= 0; i--) {
        let subtree = stree;
        const suffix = input_arr.slice(i);
        for (const char of suffix) {
            if (char === END) {
                subtree.set(char, i);
                break;
            }
            if (!subtree.has(char)) {
                subtree.set(char, new Map());
            }
            subtree = <SuffixTreeNode>subtree.get(char);
        }
    }
    return stree;
}

export function suffix_array(stree: SuffixTree): number[] {
    const result = [];
    const stack = [stree];
    let current_node: SuffixTree;
    while (current_node = stack.pop()) {
        const sorted_entries = Array.from((<SuffixTreeNode>current_node).entries())
        .map<[number, SuffixTree]>(([char, nextree]) => [char === END ? -1 : char.charCodeAt(0), nextree])
        .sort(([ord, nextree], [ord2, nextree2]) => ord2 - ord);
        for (const [_, nextree] of sorted_entries) {
            if (typeof nextree === "number") result.push(nextree);
            else stack.push(nextree);
        }
    }
    return result;
}

export function burrows_wheeler_transform(input: string): string {
    const utf32 = input.split("").map(char => char.codePointAt(0));
    utf32.push(END);
    const out = Array(utf32.length);
    return input;
}
