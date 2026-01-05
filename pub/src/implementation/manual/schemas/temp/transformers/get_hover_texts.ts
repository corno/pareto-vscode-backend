import * as _pi from 'pareto-core-interface'
import * as _p from 'pareto-core-transformer'
import * as _pdev from 'pareto-core-dev'
import * as _pinternals from 'pareto-core-internals'

import * as d_in from "pareto/dist/interface/to_be_generated/temp_unmashall_result"

import * as d_token from "astn/dist/interface/generated/pareto/schemas/token/data_types/source"

import * as d_out from "../../../../../interface/generated/pareto/schemas/server/data_types/target"

import { $$ as op_expect_1_element } from "pareto-standard-operations/dist/implementation/operations/impure/list/expect_exactly_one_element"

import * as t_ast_to_range from "astn/dist/implementation/manual/schemas/authoring_parse_tree/transformers/token"



const is_in_range = (
    $: d_token.Relative_Location,
    $p: {
        'range': d_token.Range

    }
): boolean => (
    $p.range.start.relative.line < $.line
    ||
    ($p.range.start.relative.line === $.line && $p.range.start.relative.column <= $.column)
) && (
        $p.range.end.relative.line > $.line
        ||
        ($p.range.end.relative.line === $.line && $p.range.end.relative.column >= $.column)
    )

const filter_dictionary = ($: _pi.Dictionary<d_out.Optional_Hover_Texts>): d_out.Optional_Hover_Texts => {

    type Key_Value_Pair<T> = {
        'key': string,
        'value': T,
    }

    const op_expect_1_entry = <T>($: _pi.Dictionary<T>): _pi.Optional_Value<Key_Value_Pair<T>> => {
        let found: null | Key_Value_Pair<T> = null
        let found_too_many = false
        $.map(($, key) => {
            if (found !== null) {
                found_too_many = true
            }
            found = {
                'key': key,
                'value': $,
            }
        })
        if (found_too_many) {
            //more than one entry
            return _p.optional.not_set()
        }
        if (found === null) {
            //not found
            return _p.optional.not_set()
        }
        return _p.optional.set(found)
    }
    return _p.cc(
        $.filter(($) => $),
        ($) => $.is_empty()
            ? _p.optional.not_set()
            : op_expect_1_entry($).transform<d_out.Optional_Hover_Texts>(
                ($) => _p.optional.set($.value),
                () => _pinternals.panic("multiple entries match the location, that should not happen"),
            )
    )
}
const filter_list = ($: _pi.List<d_out.Optional_Hover_Texts>): d_out.Optional_Hover_Texts => _p.cc(
    $.filter(($) => $),
    ($) => $.is_empty()
        ? _p.optional.not_set()
        : op_expect_1_element($).transform<d_out.Optional_Hover_Texts>(
            ($) => _p.optional.set($),
            () => _pinternals.panic("multiple entries match the location, that should not happen"),
        )
)

export const Group_Content = (
    $: d_in.Group_Content,
    $p: {
        'location': d_token.Relative_Location
        'full path': string
        'id path': string
    }
): d_out.Optional_Hover_Texts => filter_dictionary(
    $.properties.map(($, key): d_out.Optional_Hover_Texts => _p.cc($, ($) => {
        switch ($[0]) {
            case 'multiple': return _p.ss($, ($) => _p.optional.not_set())
            case 'missing': return _p.ss($, ($) => _p.optional.not_set())
            case 'unique': return _p.ss($, ($) => Optional_Node($.node, {
                'location': $p.location,
                'full path': `${$p['full path']} . '${key}'`,
                'id path': $p['id path']
            }))
            default: return _p.au($[0])
        }
    }))
)

export const Node = (
    $: d_in.Node,
    $p: {
        'location': d_token.Relative_Location
        'full path': string
        'id path': string
    }
): d_out.Optional_Hover_Texts => {
    // if (is_in_range($.value.range))

    // Check if the node is in the specified location
    // if (in_range($)) {

    const node = $
    const node_range = t_ast_to_range.Value($.value)

    const in_range = is_in_range($p.location, { range: node_range })

    const wrap = (): d_out.Optional_Hover_Texts => in_range
        ? _p.optional.set(_p.list.literal([$p['full path'], $p['id path']]))
        : _p.optional.not_set()

    if (!in_range) {
        // If not in range, return not set
        return _p.optional.not_set()
    }
    else {
        return _p.cc($.type, ($): d_out.Optional_Hover_Texts => {
            switch ($[0]) {
                case 'number': return _p.ss($, ($) => wrap())
                case 'boolean': return _p.ss($, ($) => wrap())
                case 'type parameter': return _p.ss($, ($) => _pdev.implement_me("xx"))
                case 'list': return _p.ss($, ($) => _p.cc($['found value type'], ($) => {
                    switch ($[0]) {
                        case 'valid': return _p.ss($, ($) => filter_list($.elements.map(($) => Node($, {
                            'location': $p.location,
                            'full path': `${$p['full path']} [ # ]`,
                            'id path': $p['id path']
                        }))))
                        case 'invalid': return _p.ss($, ($) => wrap())
                        default: return _p.au($[0])
                    }
                }))
                case 'nothing': return _p.ss($, ($) => wrap())
                case 'reference': return _p.ss($, ($) => wrap()) //show options?
                case 'component': return _p.ss($, ($) => Node($.node, {
                    'location': $p.location,
                    'full path': $p['full path'],
                    'id path': $p['id path']
                }))
                case 'dictionary': return _p.ss($, ($) => _p.cc($['found value type'], ($) => {
                    switch ($[0]) {
                        case 'valid': return _p.ss($, ($) => filter_dictionary(
                            $.entries.map(($, key): d_out.Optional_Hover_Texts => _p.cc($, ($) => {
                                switch ($[0]) {
                                    case 'multiple': return _p.ss($, ($) => filter_list($.map(($) => Optional_Node($.node, {
                                        'location': $p.location,
                                        'full path': `${$p['full path']} [ \`${key}\` ]`,
                                        'id path': `${$p['id path']} > \`${key}\``
                                    }))))
                                    case 'unique': return _p.ss($, ($) => Optional_Node($, {
                                        'location': $p.location,
                                        'full path': `${$p['full path']} [ \`${key}\` ]`,
                                        'id path': `${$p['id path']} > \`${key}\``
                                    }))
                                    default: return _p.au($[0])
                                }
                            }))
                        ).transform(
                            ($) => _p.optional.set($),
                            () => wrap()
                        ))
                        case 'invalid': return _p.ss($, ($) => wrap())
                        default: return _p.au($[0])
                    }
                }))
                case 'group': return _p.ss($, ($) => _p.cc($['found value type'], ($) => {
                    switch ($[0]) {
                        case 'invalid': return _p.ss($, ($) => wrap())
                        case 'valid': return _p.ss($, ($) => Group_Content(
                            _p.cc($, ($) => {
                                switch ($[0]) {
                                    case 'ordered': return _p.ss($, ($) => $.content)
                                    case 'indexed': return _p.ss($, ($) => $.content)
                                    default: return _p.au($[0])
                                }
                            }),
                            $p
                        ).transform(
                            ($) => _p.optional.set($),
                            () => wrap()
                        ))
                        default: return _p.au($[0])
                    }
                }))
                case 'optional': return _p.ss($, ($) => _p.cc($['found value type'], ($) => {
                    switch ($[0]) {
                        case 'valid': return _p.ss($, ($) => _p.cc($, ($) => {
                            switch ($[0]) {
                                case 'set': return _p.ss($, ($) => Node($['child node'], {
                                    'location': $p.location,
                                    'full path': `${$p['full path']} *`,
                                    'id path': $p['id path']
                                }))
                                case 'not set': return _p.ss($, ($) => _p.optional.not_set())
                                default: return _p.au($[0])
                            }
                        }))
                        case 'invalid': return _p.ss($, ($) => wrap())
                        default: return _p.au($[0])
                    }
                }))
                case 'state': return _p.ss($, ($) => {
                    const def = $.definition
                    return _p.cc($['found value type'], ($) => {
                        switch ($[0]) {
                            case 'valid': return _p.ss($, ($) => _p.cc($['value type'], ($) => {
                                switch ($[0]) {
                                    case 'state': return _p.ss($, ($) => _p.cc($['value substatus'], ($) => {
                                        switch ($[0]) {
                                            case 'missing data': return _p.ss($, ($): d_out.Optional_Hover_Texts => _p.optional.set(def.to_list(($, key) => key)))
                                            case 'set': return _p.ss($, ($) => {
                                                const temp = $.value.state.value
                                                return $['found state definition'].transform<d_out.Optional_Hover_Texts>(
                                                    ($) => {
                                                        return Node($.node, {
                                                            'location': $p.location,
                                                            'full path': `${$p['full path']} | '${temp}'`,
                                                            'id path': $p['id path']
                                                        }).transform(
                                                            ($) => _p.optional.set($),
                                                            () => wrap()
                                                        )
                                                    },
                                                    () => _p.optional.not_set()
                                                )
                                            })
                                            default: return _p.au($[0])
                                        }
                                    }))
                                    default: return _p.au($[0])
                                }
                            }))
                            case 'invalid': return _p.ss($, ($) => wrap())
                            //
                            // case 'unknown state': return _p.ss($, ($) => _p.optional.set(_p.list.literal(["FIXUNKNOWNSTATE"])))
                            // case 'more than 2 elements': return _p.ss($, ($) => _p.optional.set(_p.list.literal(["FIXMORETHANTWO"])))
                            // case 'missing state name': return _p.ss($, ($) => _p.optional.set(_p.list.literal(["FIXMISSINGSTATENAME"])))
                            // case 'state is not a string': return _p.ss($, ($) => _p.optional.set(_p.list.literal(["FIXSTATEISNOTSTRING"])))
                            // case 'missing value': return _p.ss($, ($) => _p.optional.set(_p.list.literal(["FIXMISSINGVALUE"])))
                            default: return _p.au($[0])
                        }
                    })
                })
                case 'text': return _p.ss($, ($) => wrap())

            }
        })
    }

}

export const Optional_Node = (
    $: d_in.Optional_Node,
    $p: {
        'location': d_token.Relative_Location
        'full path': string
        'id path': string
    }
): d_out.Optional_Hover_Texts => $.transform(
    ($) => Node($, {
        'location': $p.location,
        'full path': $p['full path'],
        'id path': $p['id path']
    }),
    () => _p.optional.not_set()
)