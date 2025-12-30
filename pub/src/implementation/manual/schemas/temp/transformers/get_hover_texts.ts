import * as _pi from 'pareto-core-interface'
import * as _pt from 'pareto-core-transformer'
import * as _pdev from 'pareto-core-dev'
import * as _pinternals from 'pareto-core-internals'

import * as d_in from "pareto/dist/interface/to_be_generated/temp_unmashall_result"

import * as d_token from "astn/dist/interface/generated/pareto/schemas/token/data_types/source"

import * as d_out from "../../../../../interface/generated/pareto/schemas/server/data_types/target"

import { $$ as op_expect_1_element } from "pareto-standard-operations/dist/implementation/operations/impure/list/expect_exactly_one_element"

import * as t_ast_to_range from "astn/dist/implementation/transformers/schemas/authoring_parse_tree/temp_value_range"



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

const filter_dictionary = ($: _pi.Dictionary<d_out.Optional_Hover_Texts>): d_out.Optional_Hover_Texts => {


	const op_expect_1_entry = <T>($: _pi.Dictionary<T>): _pi.Optional_Value<_pi.Deprecated_Key_Value_Pair<T>> => {
		let found: null | _pi.Deprecated_Key_Value_Pair<T> = null
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
			return _pt.not_set()
		}
		if (found === null) {
			//not found
			return _pt.not_set()
		}
		return _pt.set(found)
	}
	return _pt.cc(
		$.filter(($) => $),
		($) => $.is_empty()
			? _pt.not_set()
			: op_expect_1_entry($).transform<d_out.Optional_Hover_Texts>(
				($) => _pt.set($.value),
				() => _pinternals.panic("multiple entries match the location, that should not happen"),
			)
	)
}
const filter_list = ($: _pi.List<d_out.Optional_Hover_Texts>): d_out.Optional_Hover_Texts => {
	return _pt.cc(
		$.filter(($) => $),
		($) => $.is_empty()
			? _pt.not_set()
			: op_expect_1_element($).transform<d_out.Optional_Hover_Texts>(
				($) => _pt.set($),
				() => _pinternals.panic("multiple entries match the location, that should not happen"),
			)
	)
}

export const Group_Content = (
	$: d_in.Group_Content,
	$p: {
		'location': d_token.Relative_Location
		'full path': string
		'id path': string
	}
): d_out.Optional_Hover_Texts => {
	return filter_dictionary(
		$.properties.map(($, key): d_out.Optional_Hover_Texts => {
			return _pt.cc($, ($) => {
				switch ($[0]) {
					case 'multiple': return _pt.ss($, ($) => _pt.not_set())
					case 'missing': return _pt.ss($, ($) => _pt.not_set())
					case 'unique': return _pt.ss($, ($) => Optional_Node($.node, {
						'location': $p.location,
						'full path': `${$p['full path']} . '${key}'`,
						'id path': $p['id path']
					}))
					default: return _pt.au($[0])
				}
			})
		})
	)
}

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
		? _pt.set(_pt.list_literal([$p['full path'], $p['id path']]))
		: _pt.not_set()

	if (!in_range) {
		// If not in range, return not set
		return _pt.not_set()
	}



	return _pt.cc($.type, ($): d_out.Optional_Hover_Texts => {
		switch ($[0]) {
			case 'number': return _pt.ss($, ($) => wrap())
			case 'boolean': return _pt.ss($, ($) => wrap())
			case 'type parameter': return _pt.ss($, ($) => _pdev.implement_me("xx"))
			case 'list': return _pt.ss($, ($) => _pt.cc($['found value type'], ($) => {
				switch ($[0]) {
					case 'valid': return _pt.ss($, ($) => filter_list($.elements.map(($) => Node($, {
						'location': $p.location,
						'full path': `${$p['full path']} [ # ]`,
						'id path': $p['id path']
					}))))
					case 'invalid': return _pt.ss($, ($) => wrap())
					default: return _pt.au($[0])
				}
			}))
			case 'nothing': return _pt.ss($, ($) => wrap())
			case 'reference': return _pt.ss($, ($) => wrap()) //show options?
			case 'component': return _pt.ss($, ($) => Node($.node, {
				'location': $p.location,
				'full path': $p['full path'],
				'id path': $p['id path']
			}))
			case 'dictionary': return _pt.ss($, ($) => {
				return _pt.cc($['found value type'], ($) => {
					switch ($[0]) {
						case 'valid': return _pt.ss($, ($) => filter_dictionary(
							$.entries.map(($, key): d_out.Optional_Hover_Texts => {
								return _pt.cc($, ($) => {
									switch ($[0]) {
										case 'multiple': return _pt.ss($, ($) => filter_list($.map(($) => Optional_Node($.node, {
											'location': $p.location,
											'full path': `${$p['full path']} [ \`${key}\` ]`,
											'id path': `${$p['id path']} > \`${key}\``
										}))))
										case 'unique': return _pt.ss($, ($) => Optional_Node($, {
											'location': $p.location,
											'full path': `${$p['full path']} [ \`${key}\` ]`,
											'id path': `${$p['id path']} > \`${key}\``
										}))
										default: return _pt.au($[0])
									}
								})
							})
						).transform(
							($) => _pt.set($),
							() => wrap()
						))
						case 'invalid': return _pt.ss($, ($) => wrap())
						default: return _pt.au($[0])
					}
				})
			})
			case 'group': return _pt.ss($, ($) => _pt.cc($['found value type'], ($) => {
				switch ($[0]) {
					case 'invalid': return _pt.ss($, ($) => wrap())
					case 'valid': return _pt.ss($, ($) => Group_Content(
						_pt.cc($, ($) => {
							switch ($[0]) {
								case 'ordered': return _pt.ss($, ($) => $.content)
								case 'indexed': return _pt.ss($, ($) => $.content)
								default: return _pt.au($[0])
							}
						}),
						$p
					).transform(
						($) => _pt.set($),
						() => wrap()
					))
					default: return _pt.au($[0])
				}
			}))
			case 'optional': return _pt.ss($, ($) => {
				return _pt.cc($['found value type'], ($) => {
					switch ($[0]) {
						case 'valid': return _pt.ss($, ($) => _pt.cc($, ($) => {
							switch ($[0]) {
								case 'set': return _pt.ss($, ($) => Node($['child node'], {
									'location': $p.location,
									'full path': `${$p['full path']} *`,
									'id path': $p['id path']
								}))
								case 'not set': return _pt.ss($, ($) => _pt.not_set())
								default: return _pt.au($[0])
							}
						}))
						case 'invalid': return _pt.ss($, ($) => wrap())
						default: return _pt.au($[0])
					}
				})
			})
			case 'state': return _pt.ss($, ($) => {
				const def = $.definition
				return _pt.cc($['found value type'], ($) => {
					switch ($[0]) {
						case 'valid': return _pt.ss($, ($) => _pt.cc($['value type'], ($) => {
							switch ($[0]) {
								case 'state': return _pt.ss($, ($) => {
									return _pt.cc($['value substatus'], ($) => {
										switch ($[0]) {
											case 'missing data': return _pt.ss($, ($): d_out.Optional_Hover_Texts => {

												return _pt.set(def.to_list(($, key) => key))
											})
											case 'set': return _pt.ss($, ($) => {
												const temp = $.value.state.value
												return $['found state definition'].transform<d_out.Optional_Hover_Texts>(
													($) => {
														return Node($.node, {
															'location': $p.location,
															'full path': `${$p['full path']} | '${temp}'`,
															'id path': $p['id path']
														}).transform(
															($) => _pt.set($),
															() => wrap()
														)
													},
													() => _pt.not_set()
												)
											})
											default: return _pt.au($[0])
										}
									})
								})
								default: return _pt.au($[0])
							}
						}))
						case 'invalid': return _pt.ss($, ($) => wrap())
						//
						// case 'unknown state': return _pt.ss($, ($) => _pt.set(_pt.list_literal(["FIXUNKNOWNSTATE"])))
						// case 'more than 2 elements': return _pt.ss($, ($) => _pt.set(_pt.list_literal(["FIXMORETHANTWO"])))
						// case 'missing state name': return _pt.ss($, ($) => _pt.set(_pt.list_literal(["FIXMISSINGSTATENAME"])))
						// case 'state is not a string': return _pt.ss($, ($) => _pt.set(_pt.list_literal(["FIXSTATEISNOTSTRING"])))
						// case 'missing value': return _pt.ss($, ($) => _pt.set(_pt.list_literal(["FIXMISSINGVALUE"])))
						default: return _pt.au($[0])
					}
				})
			})
			case 'text': return _pt.ss($, ($) => wrap())

		}
	})

}

export const Optional_Node = (
	$: d_in.Optional_Node,
	$p: {
		'location': d_token.Relative_Location
		'full path': string
		'id path': string
	}
): d_out.Optional_Hover_Texts => {
	return $.transform(
		($) => Node($, {
			'location': $p.location,
			'full path': $p['full path'],
			'id path': $p['id path']
		}),
		() => _pt.not_set()
	)
}