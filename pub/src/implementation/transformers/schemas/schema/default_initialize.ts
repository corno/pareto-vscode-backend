import * as _pt from 'pareto-core-transformer'
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
    return _pt.cc($, ($): d_out.Value._type => {
        switch ($[0]) {
            case 'number': return _pt.ss($, ($) => ['text', {
                'delimiter': ['none', null],
                'value': "0"
            }])
            case 'boolean': return _pt.ss($, ($) => ['text', {
                'delimiter': ['none', null],
                'value': "false"
            }])
            case 'nothing': return _pt.ss($, ($) => ['nothing', null])
            case 'text': return _pt.ss($, ($) => ['text', {
                'delimiter': ['quote', null],
                'value': ""
            }])
            case 'list': return _pt.ss($, ($) => ['list', _pt.list_literal([])])
            case 'reference': return _pt.ss($, ($) => ['text', {
                'delimiter': ['backtick', null],
                'value': "..."
            }])
            case 'component': return _pt.ss($, ($) => _pt.cc($, ($) => {
                switch ($[0]) {
                    case 'external': return _pt.ss($, ($) => Type_Node_X($.type.entry.node))
                    case 'internal': return _pt.ss($, ($) => Type_Node_X($.entry.node))
                    case 'internal cyclic': return _pt.ss($, ($) => Type_Node_X($.entry['get circular dependent']().node))
                    default: return _pt.au($[0])
                }
            }))
            case 'dictionary': return _pt.ss($, ($) => ['dictionary', _pt.list_literal([])])
            case 'group': return _pt.ss($, ($): d_out.Value._type => ['verbose group', $['ordered list'].map(($) => ({
                'key': $.key,
                'value': Type_Node($.value.node)
            }))])
            case 'optional': return _pt.ss($, ($) => ['nothing', null])
            case 'state group': return _pt.ss($, ($) => ['state', ['missing data', null]])
            // case 'type parameter': return _pt.ss($, ($) => ['text', {
            //     'delimiter': ['quote', null],
            //     'value': "IMPLEMENT ME"
            // }])
            default: return _pt.au($[0])
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
): d_out.Value._type => _pt.cc($, ($) => {
    switch ($[0]) {
        case 'number': return _pt.ss($, ($) => ['text', {
            'delimiter': ['none', null],
            'value': "0"
        }])
        case 'boolean': return _pt.ss($, ($) => ['text', {
            'delimiter': ['none', null],
            'value': "false"
        }])
        case 'nothing': return _pt.ss($, ($) => ['nothing', null])
        case 'text': return _pt.ss($, ($) => ['text', {
            'delimiter': ['quote', null],
            'value': ""
        }])
        case 'list': return _pt.ss($, ($) => ['list', _pt.list_literal([])])
        case 'reference': return _pt.ss($, ($) => ['text', {
            'delimiter': ['backtick', null],
            'value': "..."
        }])
        case 'component': return _pt.ss($, ($) => _pt.cc($.location, ($) => {
            switch ($[0]) {
                case 'external': return _pt.ss($, ($) => _pdev.implement_me("xx"))
                case 'internal': return _pt.ss($, ($) => _pdev.implement_me("xx"))
                // case 'external': return _pt.ss($, ($) => Type_Node_X($.type.entry.node))
                // case 'internal': return _pt.ss($, ($) => Type_Node_X($.entry.node))
                // case 'internal cyclic': return _pt.ss($, ($) => Type_Node_X($.entry.compute().node))
                default: return _pt.au($[0])
            }
        }))
        case 'dictionary': return _pt.ss($, ($) => ['dictionary', _pt.list_literal([])])
        case 'group': return _pt.ss($, ($): d_out.Value._type => ['verbose group', $['ordered list'].map(($) => ({
            'key': $.key,
            'value': Type_Node_Resolver($.value.resolver)
        }))])
        case 'optional': return _pt.ss($, ($) => ['nothing', null])
        case 'state group': return _pt.ss($, ($) => ['state', ['missing data', null]])
        // case 'type parameter': return _pt.ss($, ($) => ['text', {
        //     'delimiter': ['quote', null],
        //     'value': "IMPLEMENT ME"
        // }])

        default: return _pt.au($[0])
    }
})
