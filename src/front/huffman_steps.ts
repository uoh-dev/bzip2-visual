import * as cytoscape from 'cytoscape';
import { huffman_tree, BinNode } from "../bzip2_enc/huffman_enc";
import { MinHeap } from '../class/MinHeap';

export function show_tree() {
    let dagre = require('cytoscape-dagre');
    cytoscape.use(dagre);

    // --------- Colors ---------

    let accent_color = "#FFF"

    // --------- Colors ---------

    let input: string = "aaabbbcccddd";
    let leafs = [];

    const heap = new MinHeap<BinNode<{ code?: number, count: number }>>(x => x.data.count);

    let stack = [huffman_tree(input)];
    let cur = undefined;
    let counter = 0;
    while (cur = stack.pop()) {
        if (cur.left_child) {
            cur.data.code = 1000 + counter;
            counter += 1;
            heap.insert(cur)
            stack.push(cur.left_child)
            stack.push(cur.right_child)
        }
        else {
            leafs.push(cur)
        }
    }

    let elements: cytoscape.ElementDefinition[] = []
    leafs.forEach((leaf) => {
        elements.push({
            group: 'nodes',
            data: {
                id: String(leaf.data.code),
                label: String.fromCharCode(leaf.data.code) + "\n\n(" + leaf.data.count + ")"
            },
            classes: 'multiline-manual'
        })
    })

    let steps = [elements]
    cur = undefined;
    while (cur = heap.pop()) {
        steps.push(steps[steps.length - 1].concat(
            [
                {
                    group: 'nodes',
                    data: {
                        id: String(cur.data.code),
                        label: "ㅤ\n(" + cur.data.count + ")",
                        color: "#0AC"
                    }
                },
                {
                    group: 'edges',
                    data: {
                        source: String(cur.data.code),
                        target: String(cur.right_child.data.code),
                        id: String(cur.data.code) + String(cur.right_child.data.code),
                    }
                },
                {
                    group: 'edges',
                    data: {
                        source: String(cur.data.code),
                        target: String(cur.left_child.data.code),
                        id: String(cur.data.code) + String(cur.left_child.data.code),
                    }
                }
            ]
        ))
    }

    let cy = undefined;
    cy = cytoscape({
        container: document.getElementById('cy'), // container to render in

        autoungrabify: true,
        autounselectify: true,
        wheelSensitivity: 0.4,
        minZoom: 0.5,
        maxZoom: 10,

        style: [
            {
                selector: 'node',
                style: {
                    'background-color': accent_color,
                    'label': 'data(label)',
                    'text-valign': 'center',
                    'text-halign': 'center',
                    "text-margin-y": 18,
                    'text-wrap': "wrap",
                    "border-width": 2,
                    "border-color": '#000'
                },
            },

            {
                selector: 'edge',
                style: {
                    'width': 3,
                    'line-color': '#ccc',
                    'target-arrow-color': '#ccc',
                    'target-arrow-shape': 'triangle',
                    'curve-style': 'bezier'
                }
            }
        ],
    });

    cy.add(steps[3]);
    cy.layout({
        name: 'dagre'
    }).run();
}
