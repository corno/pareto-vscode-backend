import * as _ea from 'exupery-core-alg'

import * as d_ast_target from "astn/dist/generated/interface/schemas/target/data_types/target"
import * as d_schema from "pareto/dist/generated/interface/schemas/schema/data_types/source";


export const Value = (
    $: d_schema.Type_Node,
): d_ast_target.Value => {
    return _ea.cc($, ($): d_ast_target.Value => {
        switch ($[0]) {
            case 'number': return _ea.ss($, ($) => ['text', {
                'delimiter': ['none', null],
                'value': "0"
            }])
            case 'boolean': return _ea.ss($, ($) => ['text', {
                'delimiter': ['none', null],
                'value': "false"
            }])
            case 'nothing': return _ea.ss($, ($) => ['nothing', null])
            case 'text': return _ea.ss($, ($) => ['text', {
                'delimiter': ['quote', null],
                'value': ""
            }])
            case 'list': return _ea.ss($, ($) => ['list', _ea.array_literal([])])
            case 'reference': return _ea.ss($, ($) => ['text', {
                'delimiter': ['backtick', null],
                'value': "..."
            }])
            case 'component': return _ea.ss($, ($) => _ea.cc($, ($) => {
                switch ($[0]) {
                    case 'external': return _ea.ss($, ($) => Value($.type.entry.node))
                    case 'internal': return _ea.ss($, ($) => Value($.entry.node))
                    case 'internal cyclic': return _ea.ss($, ($) => Value($.entry.compute().node))
                    default: return _ea.au($[0])
                }
            }))
            case 'dictionary': return _ea.ss($, ($) => ['dictionary', _ea.dictionary_literal({})])
            case 'group': return _ea.ss($, ($) => ['verbose group', $.map(($) => Value($))])
            case 'identifier value pair': return _ea.ss($, ($) => ['text', {
                'delimiter': ['quote', null],
                'value': "IMPLEMENT ME"
            }])
            case 'optional': return _ea.ss($, ($): d_ast_target.Value => ['nothing', null])
            case 'state group': return _ea.ss($, ($): d_ast_target.Value => ['state', {
                'state': "SDFDS",
                'value': ['text', {
                    'delimiter': ['none', null],
                    'value': "FIX STATE"
                }]
            }])
            case 'type parameter': return _ea.ss($, ($) => ['text', {
                'delimiter': ['quote', null],
                'value': "IMPLEMENT ME"
            }])
            default: return _ea.au($[0])
        }
    })
}