import _easync from 'exupery-core-async'
import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import * as d from "../server_data_types"

import { $$ as load_astn_document } from "pareto/dist/queries/load_astn_document"

import * as t_find_hover_texts from "../transformations/find_hover_texts"
import * as t_backend_location from "../transformations/backend_location"




export const $$ = (
	$p: {
		'content': string
		'file path': string
		'tab size': number
	},
): _easync.Safe_Query_Result<d.On_Validate_Document_Result> => _ea.panic("IMPLEMENT ME")
	
	
// 	load_astn_document(
// 	{
// 		'content': $p.content,
// 		'file path': $p['file path'],
// 	}
// ).map(($): d.On_Validate_Document_Result => ({
// 	'contents': {
// 		'hover texts': t_find_hover_texts.Node($, {
// 			'location': t_backend_location.Relative_Location($p.position),
// 			'full path': ``,
// 			'id path': ``,
// 		})
// 	}
// })).catch(($) => {
// 	return _easync.query.safe['create result']({
// 		'contents': {
// 			'hover texts': _ea.not_set()
// 		}
// 	})
// })


// 		($): d.Diagnostics => {
// 	switch ($[0]) {
// 		case 'parse error': return _ea.ss($, ($) => _ea.array_literal<d.Diagnostic>([
// 			{
// 				'severity': ['error', null],
// 				'range': create_frontend_range_from_range($.range),
// 				'message': `${s_parse_result.Parse_Error_Type($.type)}`,
// 				'related information': _ea.not_set()
// 			}
// 		]))
// 		case 'parse success': return _ea.ss($, ($) => _ea.cc($, ($): d.Diagnostics => {
// 			switch ($[0]) {
// 				case 'no schema file': return _ea.ss($, ($) => _ea.array_literal<d.Diagnostic>([
// 					{
// 						'severity': ['error', null],
// 						'range': {
// 							'start': {
// 								'line': 0,
// 								'character': 0,
// 							},
// 							'end': {
// 								'line': 0,
// 								'character': 0,
// 							}
// 						},
// 						'message': `No schema file found`,
// 						'related information': _ea.not_set()
// 					}


// 				]))
// 				case 'schema error': return _ea.ss($, ($) => _ea.array_literal<d.Diagnostic>([
// 					{
// 						'severity': ['error', null],
// 						'range': {
// 							'start': {
// 								'line': 0,
// 								'character': 0,
// 							},
// 							'end': {
// 								'line': 0,
// 								'character': 0,
// 							}
// 						},
// 						'message': `error in schema: ${$}`,
// 						'related information': _ea.set(_ea.array_literal([
// 							{
// 								'location': {
// 									'file path': "FIXME/PATH/TO/SCHEMA",
// 									'range': {
// 										'start': { 'line': 0, 'character': 0 },
// 										'end': { 'line': 0, 'character': 0 }
// 									}
// 								},
// 								'message': 'Dependency declared here'
// 							}
// 						]))

// 					}


// 				]))
// 				case 'unmarshalled': return _ea.ss($, ($) => t_ur_ue.Node($, null).map(($): d.Diagnostic => ({

// 					'severity': _ea.cc($.type, ($) => {
// 						switch ($[0]) {
// 							case 'error': return _ea.ss($, ($) => ['error', null])
// 							case 'warning': return _ea.ss($, ($) => ['warning', null])
// 							default: return _ea.au($[0])
// 						}
// 					}),
// 					'range': create_frontend_range_from_range($.range),
// 					'message': _ea.cc($.type, ($) => {
// 						switch ($[0]) {
// 							case 'error': return _ea.ss($, ($) => _ea.cc($, ($) => _ea.cc($, ($) => {
// 								switch ($[0]) {
// 									case 'duplicate property': return _ea.ss($, ($) => `Duplicate property '${$.name}'`)
// 									case 'invalid value type': return _ea.ss($, ($) => `Invalid type, expected ${op_join($.expected.map(($) => `'${$[0]}'`), { 'separator': " or " })}`)
// 									case 'missing property': return _ea.ss($, ($) => `Missing property '${$.name}'`)
// 									case 'state': return _ea.ss($, ($) => _ea.cc($, ($) => {
// 										switch ($[0]) {
// 											case 'missing state name': return _ea.ss($, ($) => `Missing state name`)
// 											case 'missing value': return _ea.ss($, ($) => `Missing value for state 'XXXX'`)
// 											case 'more than 2 elements': return _ea.ss($, ($) => `State 'XXXX' has more than 2 elements`)
// 											case 'state is not a string': return _ea.ss($, ($) => `State 'XXXX' is not a string`)
// 											case 'unknown state': return _ea.ss($, ($) => `this state does not exist, choose from ${op_join(op_dictionary_to_list($.expected).map(($) => `'${$.key}'`), { 'separator': " or " })}`)
// 											default: return _ea.au($[0])
// 										}
// 									}))
// 									case 'superfluous property': return _ea.ss($, ($) => `Superfluous property '${$.name}'`)
// 									default: return _ea.au($[0])
// 								}
// 							})))
// 							case 'warning': return _ea.ss($, ($) => _ea.cc($, ($) => `${$[0]} (FIXME: more info)`))
// 							default: return _ea.au($[0])
// 						}
// 					}),
// 					'related information': _ea.not_set()
// 				})))
// 				default: return _ea.au($[0])
// 			}
// 		}))
// 		default: return _ea.au($[0])
// 	}
// }