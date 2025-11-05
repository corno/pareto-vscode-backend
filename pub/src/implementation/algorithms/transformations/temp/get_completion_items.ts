import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'
import * as _ed from 'exupery-core-dev'

import * as d_schema from "pareto/dist/interface/generated/pareto/schemas/schema/data_types/source"
import * as d_in from "pareto/dist/temp/temp_unmashall_result_types"
import * as d_token from "astn/dist/interface/generated/pareto/schemas/token/data_types/source"
import * as d_ast_target from "astn/dist/interface/generated/pareto/schemas/authoring_target/data_types/target"
import * as d_fpblock from "pareto-fountain-pen/dist/interface/generated/pareto/schemas/block/data_types/target"
import * as d_out from "../../../../interface/generated/pareto/schemas/server/data_types/target"

import * as t_astn_target_to_fp from "astn/dist/implementation/algorithms/transformations/authoring_target/fountain_pen_block"
import * as t_default_initialize from "../schema/default_initialize"

import * as s_fp from "pareto-fountain-pen/dist/exceptional/serialize/block"

import { $$ as op_filter_list } from "pareto-standard-operations/dist/implementation/algorithms/operations/pure/list/filter"
import { $$ as op_filter_dictionary } from "pareto-standard-operations/dist/implementation/algorithms/operations/pure/dictionary/filter"
import { $$ as op_cast_list_to_non_empty } from "pareto-standard-operations/dist/implementation/algorithms/operations/impure/list/cast_to_non_empty"
import { $$ as op_cast_dictionary_to_non_empty } from "pareto-standard-operations/dist/implementation/algorithms/operations/impure/dictionary/cast_to_non_empty"
import { $$ as op_expect_1_element } from "pareto-standard-operations/dist/implementation/algorithms/operations/impure/list/expect_exactly_one_element"
import { $$ as op_expect_1_entry } from "pareto-standard-operations/dist/implementation/algorithms/operations/impure/dictionary/expect_exactly_one_entry"

import * as t_ast_to_range from "astn/dist/implementation/algorithms/transformations/authoring_parse_tree/temp_value_range"
import { Signature } from "../../../../interface/algorithms/transformations/temp/get_completion_items"


const is_in_range = (
	$: d_token.Relative_Location,
	$p: {
		'range': d_token.Range,
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

const filter_dictionary = ($: _et.Dictionary<d_out.Optional_Completion_Items>): d_out.Optional_Completion_Items => {
	return op_cast_dictionary_to_non_empty(
		op_filter_dictionary($)
	).transform<d_out.Optional_Completion_Items>(
		($) => op_expect_1_entry($).transform<d_out.Optional_Completion_Items>(
			($) => _ea.set($.value),
			() => _ea.deprecated_panic("multiple entries match the location, that should not happen"),
		),
		() => _ea.not_set()
	)
}
const filter_list = ($: _et.Array<d_out.Optional_Completion_Items>): d_out.Optional_Completion_Items => {
	return op_cast_list_to_non_empty(
		op_filter_list($)
	).transform<d_out.Optional_Completion_Items>(
		($) => op_expect_1_element($).transform<d_out.Optional_Completion_Items>(
			($) => _ea.set($),
			() => _ea.deprecated_panic("multiple entries match the location, that should not happen"),
		),
		() => _ea.not_set()
	)
}

export const Group_Content = (
	$: d_in.Group_Content,
	$p: {
		'location': d_token.Relative_Location
		'indent': string
	}
): d_out.Optional_Completion_Items => {
	return filter_dictionary(
		$.properties.map(($, key): d_out.Optional_Completion_Items => {
			return _ea.cc($, ($) => {
				switch ($[0]) {
					case 'multiple': return _ea.ss($, ($) => _ea.not_set())
					case 'missing': return _ea.ss($, ($) => _ea.not_set())
					case 'unique': return _ea.ss($, ($) => Optional_Node($.node, $p))
					default: return _ea.au($[0])
				}
			})
		})
	)
}

export const Node = (
	$: d_in.Node,
	$p: {
		'location': d_token.Relative_Location,
		'indent': string
	}
): d_out.Optional_Completion_Items => {
	// if (is_in_range($.value.range))

	// Check if the node is in the specified location
	// if (in_range($)) {

	const node = $
	const node_range = t_ast_to_range.Value($.value)

	const in_range = is_in_range($p.location, { range: node_range })

	const create_default_value_string = (node: d_schema.Type_Node, write_delimiters: boolean) => {
		const default_initialized_value: d_ast_target.Value = t_default_initialize.Type_Node(node)
		const fp_group: d_fpblock.Group = _ea.array_literal([
			['nested block', _ea.array_literal<d_fpblock.Block_Part>([
				t_astn_target_to_fp.Value(default_initialized_value, {
					'in concise group': false,
					'write delimiters': write_delimiters,
				})
			])]
		])
		return s_fp.Group(fp_group, {

			'indentation': $p.indent,
			'newline': '\n',
		})

	}

	const wrap = (): d_out.Optional_Completion_Items => {

		return in_range
			? _ea.set(_ea.array_literal([
				{
					'label': "verbose group",
					'insert text': create_default_value_string(node.definition, false),
					'documentation': ""
				}
			]))
			: _ea.not_set()
	}

	if (!in_range) {
		// If not in range, return not set
		return _ea.not_set()
	}



	return _ea.cc($.type, ($): d_out.Optional_Completion_Items => {
		switch ($[0]) {
			case 'number': return _ea.ss($, ($) => wrap())
			case 'boolean': return _ea.ss($, ($) => wrap())
			case 'type parameter': return _ea.ss($, ($) => _ed.implement_me())
			case 'list': return _ea.ss($, ($) => _ea.cc($['found value type'], ($) => {
				switch ($[0]) {
					case 'valid': return _ea.ss($, ($) => filter_list($.elements.map(($) => Node($, $p))))
					case 'invalid': return _ea.ss($, ($) => wrap())
					default: return _ea.au($[0])
				}
			}))
			case 'nothing': return _ea.ss($, ($) => wrap())
			case 'reference': return _ea.ss($, ($) => wrap()) //show options?
			case 'component': return _ea.ss($, ($) => Node($.node, $p))
			case 'dictionary': return _ea.ss($, ($) => {
				return _ea.cc($['found value type'], ($) => {
					switch ($[0]) {
						case 'valid': return _ea.ss($, ($) => filter_dictionary(
							$.entries.map(($, key): d_out.Optional_Completion_Items => {
								return _ea.cc($, ($) => {
									switch ($[0]) {
										case 'multiple': return _ea.ss($, ($) => filter_list($.map(($) => Optional_Node($.node, $p))))
										case 'unique': return _ea.ss($, ($) => Optional_Node($, $p))
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
			case 'group': return _ea.ss($, ($) => {
				return _ea.cc($['found value type'], ($) => {
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
				})
			})
			case 'optional': return _ea.ss($, ($) => {
				return _ea.cc($['found value type'], ($) => {
					switch ($[0]) {
						case 'valid': return _ea.ss($, ($) => _ea.cc($, ($) => {
							switch ($[0]) {
								case 'set': return _ea.ss($, ($) => Node($['child node'], $p))
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
				const state_group_definition = $.definition
				return _ea.cc($['found value type'], ($) => {
					switch ($[0]) {
						case 'valid': return _ea.ss($, ($) => _ea.cc($['value type'], ($) => {
							switch ($[0]) {
								case 'state': return _ea.ss($, ($) => {
									return _ea.cc($['value substatus'], ($) => {
										switch ($[0]) {
											case 'missing data': return _ea.ss($, ($) => {
												return _ea.set(state_group_definition.to_array(() => 1).map(($) => {
													return {
														'label': $.key,
														'insert text': `'${$.key}' ${create_default_value_string($.value.node, true)}`,
														'documentation': $.value.description.transform(
															($) => $,
															() => ""
														),
													}
												}))
											})
											case 'set': return _ea.ss($, ($) => {
												const temp = $.value.state.value
												return $['found state definition'].transform<d_out.Optional_Completion_Items>(
													($) => {
														return Node($.node, $p).transform(
															($) => _ea.set($),
															() => wrap()
														)
													},
													() => _ea.not_set()
												)
											})
											default: return _ea.au($[0])
										}
									})
								})
								default: return _ea.au($[0])
							}
						}))
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
	$: d_in.Optional_Node,
	$p: {
		'location': d_token.Relative_Location
		'indent': string
	}
): d_out.Optional_Completion_Items => {
	return $.transform(
		($) => Node($, $p),
		() => _ea.not_set()
	)
}