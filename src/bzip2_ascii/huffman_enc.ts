export function huffman_table(input: string): string {
    const counters: number[] = Array(256).fill(0);
    for (const char of input) counters[char.codePointAt(0)]++;
    
}
