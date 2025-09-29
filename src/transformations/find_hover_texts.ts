import * as _et from "exupery-core-types"
import * as _ea from "exupery-core-alg"
import * as _ed from "exupery-core-dev"

import * as s_in from "pareto/dist/temp/temp_unmashall_result_types"

import * as d_token from "astn/dist/generated/interface/schemas/token/data_types/source"

import * as s_out from "../server_data_types"

import { $$ as op_filter_list } from "pareto-standard-operations/dist/pure/list/filter"
import { $$ as op_filter_dictionary } from "pareto-standard-operations/dist/pure/dictionary/filter"
import { $$ as op_cast_list_to_non_empty } from "pareto-standard-operations/dist/impure/list/cast_to_non_empty"
import { $$ as op_cast_dictionary_to_non_empty } from "pareto-standard-operations/dist/impure/dictionary/cast_to_non_empty"
import { $$ as op_expect_1_element } from "pareto-standard-operations/dist/impure/list/expect_exactly_one_element"
import { $$ as op_expect_1_entry } from "pareto-standard-operations/dist/impure/dictionary/expect_exactly_one_entry"

import * as t_ast_to_range from "astn/dist/transformations/ast/temp_value_range"

const is_in_range = (
	$: d_token.Relative_Location,
	$p: {
		'range': d_token.Range

	}
): boolean => {
	return (
		$p.range.start.relative.line < $.line
		||
		($p.range.start.relative.line === $.line && $p.range.start.relative.column <= $.column)
	) && (
			$p.range.end.relative.line > $.line
			||
			($p.range.end.relative.line === $.line && $p.range.end.relative.column >= $.column)
		)
}

const filter_dictionary = ($: _et.Dictionary<s_out.Optional_Hover_Texts>): s_out.Optional_Hover_Texts => {
	return op_cast_dictionary_to_non_empty(
		op_filter_dictionary($)
	).transform<s_out.Optional_Hover_Texts>(
		($) => op_expect_1_entry($).transform<s_out.Optional_Hover_Texts>(
			($) => _ea.set($.value),
			() => _ea.panic("multiple entries match the location, that should not happen"),
		),
		() => _ea.not_set()
	)
}
const filter_list = ($: _et.Array<s_out.Optional_Hover_Texts>): s_out.Optional_Hover_Texts => {
	return op_cast_list_to_non_empty(
		op_filter_list($)
	).transform<s_out.Optional_Hover_Texts>(
		($) => op_expect_1_element($).transform<s_out.Optional_Hover_Texts>(
			($) => _ea.set($),
			() => _ea.panic("multiple entries match the location, that should not happen"),
		),
		() => _ea.not_set()
	)
}

export const Group_Content = (
	$: s_in.Group_Content,
	$p: {
		'location': d_token.Relative_Location
		'full path': string
		'id path': string
	}
): s_out.Optional_Hover_Texts => {
	return filter_dictionary(
		$.properties.map(($, key): s_out.Optional_Hover_Texts => {
			return _ea.cc($, ($) => {
				switch ($[0]) {
					case 'multiple': return _ea.ss($, ($) => _ea.not_set())
					case 'missing': return _ea.ss($, ($) => _ea.not_set())
					case 'unique': return _ea.ss($, ($) => Optional_Node($.node, {
						'location': $p.location,
						'full path': `${$p['full path']} . '${key}'`,
						'id path': $p['id path']
					}))
					default: return _ea.au($[0])
				}
			})
		})
	)
}

export const Node = (
	$: s_in.Node,
	$p: {
		'location': d_token.Relative_Location
		'full path': string
		'id path': string
	}
): s_out.Optional_Hover_Texts => {
	// if (is_in_range($.value.range))

	// Check if the node is in the specified location
	// if (in_range($)) {

	const node = $
	const node_range = t_ast_to_range.Value($.value)

	const in_range = is_in_range($p.location, { range: node_range })

	const wrap = (): s_out.Optional_Hover_Texts => in_range
		? _ea.set(_ea.array_literal([$p['full path'], $p['id path']]))
		: _ea.not_set()

	if (!in_range) {
		// If not in range, return not set
		return _ea.not_set()
	}



	return _ea.cc($.type, ($): s_out.Optional_Hover_Texts => {
		switch ($[0]) {
			case 'number': return _ea.ss($, ($) => wrap())
			case 'boolean': return _ea.ss($, ($) => wrap())
			case 'type parameter': return _ea.ss($, ($) => _ed.implement_me())
			case 'list': return _ea.ss($, ($) => _ea.cc($['found value type'], ($) => {
				switch ($[0]) {
					case 'valid': return _ea.ss($, ($) => filter_list($.elements.map(($) => Node($, {
						'location': $p.location,
						'full path': `${$p['full path']} [ # ]`,
						'id path': $p['id path']
					}))))
					case 'invalid': return _ea.ss($, ($) => wrap())
					default: return _ea.au($[0])
				}
			}))
			case 'nothing': return _ea.ss($, ($) => wrap())
			case 'reference': return _ea.ss($, ($) => wrap()) //show options?
			case 'component': return _ea.ss($, ($) => Node($.node, {
				'location': $p.location,
				'full path': $p['full path'],
				'id path': $p['id path']
			}))
			case 'dictionary': return _ea.ss($, ($) => {
				return _ea.cc($['found value type'], ($) => {
					switch ($[0]) {
						case 'valid': return _ea.ss($, ($) => filter_dictionary(
							$.entries.map(($, key): s_out.Optional_Hover_Texts => {
								return _ea.cc($, ($) => {
									switch ($[0]) {
										case 'multiple': return _ea.ss($, ($) => filter_list($.map(($) => Optional_Node($.node, {
											'location': $p.location,
											'full path': `${$p['full path']} [ \`${key}\` ]`,
											'id path': `${$p['id path']} > \`${key}\``
										}))))
										case 'unique': return _ea.ss($, ($) => Optional_Node($, {
											'location': $p.location,
											'full path': `${$p['full path']} [ \`${key}\` ]`,
											'id path': `${$p['id path']} > \`${key}\``
										}))
										default: return _ea.au($[0])
									}
								})
							})
						).transform(
							($) => _ea.set($),
							() => wrap()
						))
						case 'invalid': return _ea.ss($, ($) => wrap())
						default: return _ea.au($[0])
					}
				})
			})
			case 'group': return _ea.ss($, ($) => _ea.cc($['found value type'], ($) => {
				switch ($[0]) {
					case 'invalid': return _ea.ss($, ($) => wrap())
					case 'valid': return _ea.ss($, ($) => Group_Content(
						_ea.cc($, ($) => {
							switch ($[0]) {
								case 'ordered': return _ea.ss($, ($) => $.content)
								case 'indexed': return _ea.ss($, ($) => $.content)
								default: return _ea.au($[0])
							}
						}),
						$p
					).transform(
						($) => _ea.set($),
						() => wrap()
					))
					default: return _ea.au($[0])
				}
			}))
			case 'identifier value pair': return _ea.ss($, ($) => {
				return _ea.set(_ea.array_literal(["FIXIDVALUEPAIR"]))
			})
			case 'optional': return _ea.ss($, ($) => {
				return _ea.cc($['found value type'], ($) => {
					switch ($[0]) {
						case 'valid': return _ea.ss($, ($) => _ea.cc($, ($) => {
							switch ($[0]) {
								case 'set': return _ea.ss($, ($) => Node($['child node'], {
									'location': $p.location,
									'full path': `${$p['full path']} *`,
									'id path': $p['id path']
								}))
								case 'not set': return _ea.ss($, ($) => _ea.not_set())
								default: return _ea.au($[0])
							}
						}))
						case 'invalid': return _ea.ss($, ($) => wrap())
						default: return _ea.au($[0])
					}
				})
			})
			case 'state': return _ea.ss($, ($) => {
				return _ea.cc($['found value type'], ($) => {
					switch ($[0]) {
						case 'valid': return _ea.ss($, ($) => {
							const temp: string = _ea.cc($['value type'], ($) => {
								switch ($[0]) {
									case 'state': return _ea.ss($, ($) => $.value.state.value)
									default: return _ea.au($[0])
								}
							})
							return _ea.cc($['value type'], ($) => {
								switch ($[0]) {
									case 'state': return _ea.ss($, ($) => $['found state definition'].transform<s_out.Optional_Hover_Texts>(
										($) => {
											return Node($.node, {
												'location': $p.location,
												'full path': `${$p['full path']} | '${temp}'`,
												'id path': $p['id path']
											}).transform(
												($) => _ea.set($),
												() => wrap()
											)
										},
										() => _ea.not_set()
									))
									default: return _ea.au($[0])
								}
							})
						})
						case 'invalid': return _ea.ss($, ($) => wrap())
						//
						// case 'unknown state': return _ea.ss($, ($) => _ea.set(_ea.array_literal(["FIXUNKNOWNSTATE"])))
						// case 'more than 2 elements': return _ea.ss($, ($) => _ea.set(_ea.array_literal(["FIXMORETHANTWO"])))
						// case 'missing state name': return _ea.ss($, ($) => _ea.set(_ea.array_literal(["FIXMISSINGSTATENAME"])))
						// case 'state is not a string': return _ea.ss($, ($) => _ea.set(_ea.array_literal(["FIXSTATEISNOTSTRING"])))
						// case 'missing value': return _ea.ss($, ($) => _ea.set(_ea.array_literal(["FIXMISSINGVALUE"])))
						default: return _ea.au($[0])
					}
				})
			})
			case 'text': return _ea.ss($, ($) => wrap())

		}
	})

}

export const Optional_Node = (
	$: s_in.Optional_Node,
	$p: {
		'location': d_token.Relative_Location
		'full path': string
		'id path': string
	}
): s_out.Optional_Hover_Texts => {
	return $.transform(
		($) => Node($, {
			'location': $p.location,
			'full path': $p['full path'],
			'id path': $p['id path']
		}),
		() => _ea.not_set()
	)
}