import * as _p from 'pareto-core-transformer'
import * as _pdev from 'pareto-core-dev'

import * as d_out from "astn/dist/interface/generated/pareto/schemas/authoring_target/data_types/target"
import * as d_in from "pareto/dist/interface/generated/pareto/schemas/schema/data_types/source";

export const Type_Node = (
    $: d_in.Type_Node,
): d_out.Value => ({
    'type': Type_Node_X($)
})

export const Type_Node_X = (
    $: d_in.Type_Node,
): d_out.Value._type => {
    return _p.cc($, ($): d_out.Value._type => {
        switch ($[0]) {
            case 'number': return _p.ss($, ($) => ['text', {
                'delimiter': ['none', null],
                'value': "0"
            }])
            case 'boolean': return _p.ss($, ($) => ['text', {
                'delimiter': ['none', null],
                'value': "false"
            }])
            case 'nothing': return _p.ss($, ($) => ['nothing', null])
            case 'text': return _p.ss($, ($) => ['text', {
                'delimiter': ['quote', null],
                'value': ""
            }])
            case 'list': return _p.ss($, ($) => ['list', _p.list.literal([])])
            case 'reference': return _p.ss($, ($) => ['text', {
                'delimiter': ['backtick', null],
                'value': "..."
            }])
            case 'component': return _p.ss($, ($) => _p.cc($, ($) => {
                switch ($[0]) {
                    case 'external': return _p.ss($, ($) => Type_Node_X($.type.entry.node))
                    case 'internal': return _p.ss($, ($) => Type_Node_X($.entry.node))
                    case 'internal cyclic': return _p.ss($, ($) => Type_Node_X($.entry['get circular dependent']().node))
                    default: return _p.au($[0])
                }
            }))
            case 'dictionary': return _p.ss($, ($) => ['dictionary', _p.list.literal([])])
            case 'group': return _p.ss($, ($): d_out.Value._type => ['verbose group', $['ordered list'].map(($) => ({
                'key': $.key,
                'value': Type_Node($.value.node)
            }))])
            case 'optional': return _p.ss($, ($) => ['nothing', null])
            case 'state group': return _p.ss($, ($) => ['state', ['missing data', null]])
            // case 'type parameter': return _p.ss($, ($) => ['text', {
            //     'delimiter': ['quote', null],
            //     'value': "IMPLEMENT ME"
            // }])
            default: return _p.au($[0])
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
): d_out.Value._type => _p.cc($, ($) => {
    switch ($[0]) {
        case 'number': return _p.ss($, ($) => ['text', {
            'delimiter': ['none', null],
            'value': "0"
        }])
        case 'boolean': return _p.ss($, ($) => ['text', {
            'delimiter': ['none', null],
            'value': "false"
        }])
        case 'nothing': return _p.ss($, ($) => ['nothing', null])
        case 'text': return _p.ss($, ($) => ['text', {
            'delimiter': ['quote', null],
            'value': ""
        }])
        case 'list': return _p.ss($, ($) => ['list', _p.list.literal([])])
        case 'reference': return _p.ss($, ($) => ['text', {
            'delimiter': ['backtick', null],
            'value': "..."
        }])
        case 'component': return _p.ss($, ($) => _p.cc($.location, ($) => {
            switch ($[0]) {
                case 'external': return _p.ss($, ($) => _pdev.implement_me("xx"))
                case 'internal': return _p.ss($, ($) => _pdev.implement_me("xx"))
                // case 'external': return _p.ss($, ($) => Type_Node_X($.type.entry.node))
                // case 'internal': return _p.ss($, ($) => Type_Node_X($.entry.node))
                // case 'internal cyclic': return _p.ss($, ($) => Type_Node_X($.entry.compute().node))
                default: return _p.au($[0])
            }
        }))
        case 'dictionary': return _p.ss($, ($) => ['dictionary', _p.list.literal([])])
        case 'group': return _p.ss($, ($): d_out.Value._type => ['verbose group', $['ordered list'].map(($) => ({
            'key': $.key,
            'value': Type_Node_Resolver($.value.resolver)
        }))])
        case 'optional': return _p.ss($, ($) => ['nothing', null])
        case 'state group': return _p.ss($, ($) => ['state', ['missing data', null]])
        // case 'type parameter': return _p.ss($, ($) => ['text', {
        //     'delimiter': ['quote', null],
        //     'value': "IMPLEMENT ME"
        // }])

        default: return _p.au($[0])
    }
})
