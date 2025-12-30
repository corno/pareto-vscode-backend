import * as _pq from 'pareto-core-query'
import * as _pi from 'pareto-core-interface'
import * as _pt from 'pareto-core-transformer'
import * as _pinternals from 'pareto-core-internals'

import * as signatures from "../../../interface/signatures"

//data types
import * as d from "../../../interface/generated/pareto/schemas/server/data_types/source"
import * as d_token from "astn/dist/interface/generated/pareto/schemas/token/data_types/source"
import * as d_ide from "astn/dist/interface/generated/pareto/schemas/ide/data_types/source"
import * as d_parse_result from "astn/dist/implementation/serializers/schemas/parse_result"

//dependencies
import * as ds_path from "exupery-resources/dist/implementation/deserializers/schemas/node_path"
import * as t_unmarshall_result_2_unmarshall_errors from "pareto/dist/implementation/transformers/schemas/unmarshall_result/unmarshall_errors"
import { $$ as q_load_pareto_document } from "pareto/dist/implementation/queries/load_pareto_document"
import { $$ as s_list_of_separated_texts } from "pareto-standard-operations/dist/implementation/serializers/schemas/list_of_separated_texts"



const create_frontend_position_from_relative_location = ($: d_token.Relative_Location): d.Position => {
    return {
        line: $.line,
        character: $.column
    }
}

const create_frontend_position_from_location = ($: d_token.Location): d.Position => {
    return create_frontend_position_from_relative_location($.relative)
}

const create_frontend_range_from_relative_range = ($: d_ide.Relative_Range): d.Range => {
    return {
        start: create_frontend_position_from_relative_location($.start),
        end: create_frontend_position_from_relative_location($.end),
    }
}

const create_frontend_range_from_range = ($: d_token.Range): d.Range => {
    return create_frontend_range_from_relative_range({
        'start': $.start.relative,
        'end': $.end.relative,
    })
}


// export const $$: _pi.Guaranteed_Query<d.Validate_Document_Parameters, d.On_Validate_Document_Result, Resources> = (
// 	$p, $r
// ) => load_astn_document(
// 	{
// 		'content': $p.content,
// 		'file path': $p['file path'],
// 	},
// 	$r,
// ).map_(
// 	($): d.On_Validate_Document_Result => ({
// 		'diagnostics': t_unmarshall_result_2_unmarshall_errors.Node($, null).map(($): d.Diagnostic => ({

// 			'severity': _pt.cc($.type, ($) => {
// 				switch ($[0]) {
// 					case 'error': return _pt.ss($, ($) => ['error', null])
// 					case 'warning': return _pt.ss($, ($) => ['warning', null])
// 					default: return _pt.au($[0])
// 				}
// 			}),
// 			'range': create_frontend_range_from_range($.range),
// 			'message': _pt.cc($.type, ($) => {
// 				switch ($[0]) {
// 					case 'error': return _pt.ss($, ($) => _pt.cc($, ($) => _pt.cc($, ($) => {
// 						switch ($[0]) {
// 							case 'duplicate property': return _pt.ss($, ($) => `Duplicate property '${$.name}'`)
// 							case 'invalid value type': return _pt.ss($, ($) => `Invalid type, expected ${s_list_of_separated_texts($.expected.map(($) => `'${$[0]}'`), { 'separator': " or " })}`)
// 							case 'missing property': return _pt.ss($, ($) => `Missing property '${$.name}'`)
// 							case 'state': return _pt.ss($, ($) => _pt.cc($, ($) => {
// 								switch ($[0]) {
// 									case 'missing state name': return _pt.ss($, ($) => `Missing state name`)
// 									case 'missing data marker': return _pt.ss($, ($) => `Missing data marker for state 'XXXX'`)
// 									case 'missing value': return _pt.ss($, ($) => `Missing value for state 'XXXX'`)
// 									case 'more than 2 elements': return _pt.ss($, ($) => `State 'XXXX' has more than 2 elements`)
// 									case 'state is not a string': return _pt.ss($, ($) => `State 'XXXX' is not a string`)
// 									case 'unknown state': return _pt.ss($, ($) => `this state does not exist, choose from ${s_list_of_separated_texts(op_dictionary_to_list($.expected).map(($) => `'${$.key}'`), { 'separator': " or " })}`)
// 									default: return _pt.au($[0])
// 								}
// 							}))
// 							case 'superfluous property': return _pt.ss($, ($) => `Superfluous property '${$.name}'`)
// 							default: return _pt.au($[0])
// 						}
// 					})))
// 					case 'warning': return _pt.ss($, ($) => _pt.cc($, ($) => `${$[0]} (FIXME: more info)`))
// 					default: return _pt.au($[0])
// 				}
// 			}),
// 			'related information': _pt.not_set()
// 		}))
// 	})
// ).catch_(($) => {
// 	return _easync.query.guaranteed['create result']<d.On_Validate_Document_Result>({
// 		'diagnostics': _pt.cc(
// 			$,
// 			($): d.Diagnostics => {
// 				switch ($[0]) {
// 					case 'no schema file': return _pt.ss($, ($) => _pt.list_literal<d.Diagnostic>([
// 						{
// 							'severity': ['error', null],
// 							'range': {
// 								'start': {
// 									'line': 0,
// 									'character': 0,
// 								},
// 								'end': {
// 									'line': 0,
// 									'character': 0,
// 								}
// 							},
// 							'message': `No schema file found`,
// 							'related information': _pt.not_set()
// 						}


// 					]))
// 					case 'schema error': return _pt.ss($, ($) => _pt.list_literal<d.Diagnostic>([
// 						{
// 							'severity': ['error', null],
// 							'range': {
// 								'start': {
// 									'line': 0,
// 									'character': 0,
// 								},
// 								'end': {
// 									'line': 0,
// 									'character': 0,
// 								}
// 							},
// 							'message': `error in schema: ${$['file location']}`,
// 							'related information': _pt.set(_pt.list_literal([
// 								{
// 									'location': {
// 										'file path': "FIXME/PATH/TO/SCHEMA",
// 										'range': {
// 											'start': { 'line': 0, 'character': 0 },
// 											'end': { 'line': 0, 'character': 0 }
// 										}
// 									},
// 									'message': 'Dependency declared here'
// 								}
// 							]))

// 						}


// 					]))
// 					case 'parse error': return _pt.ss($, ($) => _pt.list_literal<d.Diagnostic>([
// 						{
// 							'severity': ['error', null],
// 							'range': create_frontend_range_from_range($.range),
// 							'message': `${d_parse_result.Parse_Error_Type($.type)}`,
// 							'related information': _pt.not_set()
// 						}
// 					]))
// 					default: return _pt.au($[0])
// 				}
// 			}
// 		)
// 	})
// })



export const $$: signatures.queries.validate_document = _pq.create_query_function(
    ($p, $qr) => q_load_pareto_document($qr)(
        {
            'content': $p.content,
            'file path': ds_path.Node_Path(
                $p['file path'],
                {
                    'pedantic': true,
                },
                () => _pinternals.panic("Invalid file path"),
            ),
        },
        ($): d.On_Validate_Document_Result => ({
            'diagnostics': _pt.cc(
                $,
                ($): d.Diagnostics => {
                    switch ($[0]) {
                        case 'no schema file': return _pt.ss($, ($) => _pt.list_literal<d.Diagnostic>([
                            {
                                'severity': ['error', null],
                                'range': {
                                    'start': {
                                        'line': 0,
                                        'character': 0,
                                    },
                                    'end': {
                                        'line': 0,
                                        'character': 0,
                                    }
                                },
                                'message': `No schema file found`,
                                'related information': _pt.not_set()
                            }


                        ]))
                        case 'schema error': return _pt.ss($, ($) => _pt.list_literal<d.Diagnostic>([
                            {
                                'severity': ['error', null],
                                'range': {
                                    'start': {
                                        'line': 0,
                                        'character': 0,
                                    },
                                    'end': {
                                        'line': 0,
                                        'character': 0,
                                    }
                                },
                                'message': `error in schema: ${$['file location']}`,
                                'related information': _pt.set(_pt.list_literal([
                                    {
                                        'location': {
                                            'file path': "FIXME/PATH/TO/SCHEMA",
                                            'range': {
                                                'start': { 'line': 0, 'character': 0 },
                                                'end': { 'line': 0, 'character': 0 }
                                            }
                                        },
                                        'message': 'Dependency declared here'
                                    }
                                ]))

                            }


                        ]))
                        case 'parse error': return _pt.ss($, ($) => _pt.list_literal<d.Diagnostic>([
                            {
                                'severity': ['error', null],
                                'range': create_frontend_range_from_range($.range),
                                'message': `${d_parse_result.Parse_Error_Type($.type)}`,
                                'related information': _pt.not_set()
                            }
                        ]))
                        case 'unmarshall error': return _pt.ss($, ($) => _pt.list_literal<d.Diagnostic>([
                            {
                                'severity': ['error', null],
                                'range': {
                                    'start': {
                                        'line': 0,
                                        'character': 0,
                                    },
                                    'end': {
                                        'line': 0,
                                        'character': 0,
                                    }
                                },
                                'message': `unmarshall error (no further information available currently)`,
                                'related information': _pt.not_set()
                            }
                        ]))
                        default: return _pt.au($[0])
                    }
                }
            )
        }),
    ).transform_result(($): d.On_Validate_Document_Result => ({
        'diagnostics': t_unmarshall_result_2_unmarshall_errors.Node($, null).map(($): d.Diagnostic => ({

            'severity': _pt.cc($.type, ($) => {
                switch ($[0]) {
                    case 'error': return _pt.ss($, ($) => ['error', null])
                    case 'warning': return _pt.ss($, ($) => ['warning', null])
                    default: return _pt.au($[0])
                }
            }),
            'range': create_frontend_range_from_range($.range),
            'message': _pt.cc($.type, ($) => {
                switch ($[0]) {
                    case 'error': return _pt.ss($, ($) => _pt.cc($, ($) => _pt.cc($, ($) => {
                        switch ($[0]) {
                            case 'duplicate property': return _pt.ss($, ($) => `Duplicate property '${$.name}'`)
                            case 'invalid value type': return _pt.ss($, ($) => `Invalid type, expected ${s_list_of_separated_texts($.expected.map(($) => `'${$[0]}'`), { 'separator': " or " })}`)
                            case 'missing property': return _pt.ss($, ($) => `Missing property '${$.name}'`)
                            case 'state': return _pt.ss($, ($) => _pt.cc($, ($) => {
                                switch ($[0]) {
                                    case 'missing state name': return _pt.ss($, ($) => `Missing state name`)
                                    case 'missing data marker': return _pt.ss($, ($) => `Missing data marker for state 'XXXX'`)
                                    case 'missing value': return _pt.ss($, ($) => `Missing value for state 'XXXX'`)
                                    case 'more than 2 elements': return _pt.ss($, ($) => `State 'XXXX' has more than 2 elements`)
                                    case 'state is not a string': return _pt.ss($, ($) => `State 'XXXX' is not a string`)
                                    case 'unknown state': return _pt.ss($, ($) => `this state does not exist, choose from ${s_list_of_separated_texts($.expected.to_list(($, key) => `'${key}'`), { 'separator': " or " })}`)
                                    default: return _pt.au($[0])
                                }
                            }))
                            case 'superfluous property': return _pt.ss($, ($) => `Superfluous property '${$.name}'`)
                            default: return _pt.au($[0])
                        }
                    })))
                    case 'warning': return _pt.ss($, ($) => _pt.cc($, ($) => `${$[0]} (FIXME: more info)`))
                    default: return _pt.au($[0])
                }
            }),
            'related information': _pt.not_set()
        }))
    }))
)