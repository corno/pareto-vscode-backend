import * as _ea from 'exupery-core-alg'
import * as _edev from 'exupery-core-dev'

import * as d_out from "astn/dist/interface/generated/pareto/schemas/authoring_target/data_types/target"
import * as d_in from "pareto/dist/interface/generated/pareto/schemas/schema/data_types/source";
import { Signature } from "../../../../interface/algorithms/transformations/schema/default_initialize"



export const Type_Node = (
    $: d_in.Type_Node,
): d_out.Value => ({
    'type': Type_Node_X($)
})

export const Type_Node_X = (
    $: d_in.Type_Node,
): d_out.Value._type => {
    return _ea.cc($, ($): d_out.Value._type => {
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
                    case 'external': return _ea.ss($, ($) => Type_Node_X($.type.entry.node))
                    case 'internal': return _ea.ss($, ($) => Type_Node_X($.entry.node))
                    case 'internal cyclic': return _ea.ss($, ($) => Type_Node_X($.entry['get circular dependent']().node))
                    default: return _ea.au($[0])
                }
            }))
            case 'dictionary': return _ea.ss($, ($) => ['dictionary', _ea.array_literal([])])
            case 'group': return _ea.ss($, ($): d_out.Value._type => ['verbose group', $['ordered list'].map(($) => ({
                'key': $.key,
                'value': Type_Node($.value.node)
            }))])
            case 'optional': return _ea.ss($, ($) => ['nothing', null])
            case 'state group': return _ea.ss($, ($) => ['state', ['missing data', null]])
            // case 'type parameter': return _ea.ss($, ($) => ['text', {
            //     'delimiter': ['quote', null],
            //     'value': "IMPLEMENT ME"
            // }])
            default: return _ea.au($[0])
        }
    })
}

export const Type_Node_Resolver = (
    $: d_in.Node_Resolver,
): d_out.Value => ({
    'type': Type_Node_Resolver_X($)
})


export const Type_Node_Resolver_X = (
    $: d_in.Node_Resolver,
): d_out.Value._type => _ea.cc($, ($) => {
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
        case 'component': return _ea.ss($, ($) => _ea.cc($.location, ($) => {
            switch ($[0]) {
                case 'external': return _ea.ss($, ($) => _edev.implement_me())
                case 'internal': return _ea.ss($, ($) => _edev.implement_me())
                // case 'external': return _ea.ss($, ($) => Type_Node_X($.type.entry.node))
                // case 'internal': return _ea.ss($, ($) => Type_Node_X($.entry.node))
                // case 'internal cyclic': return _ea.ss($, ($) => Type_Node_X($.entry.compute().node))
                default: return _ea.au($[0])
            }
        }))
        case 'dictionary': return _ea.ss($, ($) => ['dictionary', _ea.array_literal([])])
        case 'group': return _ea.ss($, ($): d_out.Value._type => ['verbose group', $['ordered list'].map(($) => ({
            'key': $.key,
            'value': Type_Node_Resolver($.value.resolver)
        }))])
        case 'optional': return _ea.ss($, ($) => ['nothing', null])
        case 'state group': return _ea.ss($, ($) => ['state', ['missing data', null]])
        // case 'type parameter': return _ea.ss($, ($) => ['text', {
        //     'delimiter': ['quote', null],
        //     'value': "IMPLEMENT ME"
        // }])

        default: return _ea.au($[0])
    }
})
