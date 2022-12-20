type $ = 0x100;
const $: $ = 0x100;

type SuffixTreeNode = Map<string | $, SuffixTree>;
type SuffixTree = SuffixTreeNode | number;

export function suffix_tree(input_arr: (string | $)[]): SuffixTree {
    const stree: SuffixTreeNode = new Map();
    input_arr.push($);
    for (let i = input_arr.length - 1; i >= 0; i--) {
        let subtree = stree;
        const suffix = input_arr.slice(i);
        for (const char of suffix) {
            if (char === $) {
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
        .map<[number, SuffixTree]>(([char, nextree]) => [char === $ ? -1 : char.charCodeAt(0), nextree])
        .sort(([ord, nextree], [ord2, nextree2]) => ord2 - ord);
        for (const [_, nextree] of sorted_entries) {
            if (typeof nextree === "number") result.push(nextree);
            else stack.push(nextree);
        }
    }
    return result;
}

export function burrows_wheeler_transform(input: string): string {
    const ascii_arr = Array(input.length);
    const input_arr: (string | $)[] = input.split("");
    input_arr.push($);
    const suffix_arr = suffix_array(suffix_tree(input_arr));
    let $_ptr;
    for (let i = 0; i <= input.length; i++) {
        if (suffix_arr[i] <= 0) {
            $_ptr = i;
            i++;
        }
        ascii_arr[i - (!!$_ptr as any)] = input[suffix_arr[i] - 1].codePointAt(0);
    }
    $_ptr = $_ptr.toString(2);
    const $_ptr_arr = [];
    for (let i = 0; i < $_ptr.length; i += 4) {
        $_ptr_arr.push(parseInt($_ptr.slice(i, i + 4).split("").map(char => "0" + char).join("").padEnd(8, "1"), 2));
    }
    if ($_ptr_arr.at(-1) ^ 0x02) $_ptr_arr.push(0xFF);
    return ascii_arr.map(ascii => String.fromCodePoint(ascii)).join("");
}
