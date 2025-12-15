import * as _easync from 'exupery-core-async'
import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import * as d from "../../../interface/generated/pareto/schemas/server/data_types/source"
import * as d_token from "astn/dist/interface/generated/pareto/schemas/token/data_types/source"
import * as d_ide from "astn/dist/interface/generated/pareto/schemas/ide/data_types/source"
import * as d_read_file from "exupery-resources/dist/interface/generated/pareto/schemas/read_file/data_types/source"
import * as d_load_pareto_document from "pareto/dist/implementation/queries/load_pareto_document"


import { $$ as load_pareto_document } from "pareto/dist/implementation/queries/load_pareto_document"


import * as t_unmarshall_result_2_unmarshall_errors from "pareto/dist/implementation/transformations/unmarshall_result/unmarshall_errors"

import { $$ as op_join } from "pareto-standard-operations/dist/implementation/algorithms/operations/impure/text/join_list_of_texts_with_separator"
import { $$ as op_dictionary_to_list } from "pareto-standard-operations/dist/implementation/algorithms/operations/impure/dictionary/to_list_sorted_by_insertion"

import * as d_parse_result from "astn/dist/implementation/algorithms/transformers/parse_result/string"

import { Signature } from "../../../interface/algorithms/queries/validate_document"


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


// export const $$: _et.Guaranteed_Query<d.Validate_Document_Parameters, d.On_Validate_Document_Result, Resources> = (
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

// 			'severity': _ea.cc($.type, ($) => {
// 				switch ($[0]) {
// 					case 'error': return _ea.ss($, ($) => ['error', null])
// 					case 'warning': return _ea.ss($, ($) => ['warning', null])
// 					default: return _ea.au($[0])
// 				}
// 			}),
// 			'range': create_frontend_range_from_range($.range),
// 			'message': _ea.cc($.type, ($) => {
// 				switch ($[0]) {
// 					case 'error': return _ea.ss($, ($) => _ea.cc($, ($) => _ea.cc($, ($) => {
// 						switch ($[0]) {
// 							case 'duplicate property': return _ea.ss($, ($) => `Duplicate property '${$.name}'`)
// 							case 'invalid value type': return _ea.ss($, ($) => `Invalid type, expected ${op_join($.expected.map(($) => `'${$[0]}'`), { 'separator': " or " })}`)
// 							case 'missing property': return _ea.ss($, ($) => `Missing property '${$.name}'`)
// 							case 'state': return _ea.ss($, ($) => _ea.cc($, ($) => {
// 								switch ($[0]) {
// 									case 'missing state name': return _ea.ss($, ($) => `Missing state name`)
// 									case 'missing data marker': return _ea.ss($, ($) => `Missing data marker for state 'XXXX'`)
// 									case 'missing value': return _ea.ss($, ($) => `Missing value for state 'XXXX'`)
// 									case 'more than 2 elements': return _ea.ss($, ($) => `State 'XXXX' has more than 2 elements`)
// 									case 'state is not a string': return _ea.ss($, ($) => `State 'XXXX' is not a string`)
// 									case 'unknown state': return _ea.ss($, ($) => `this state does not exist, choose from ${op_join(op_dictionary_to_list($.expected).map(($) => `'${$.key}'`), { 'separator': " or " })}`)
// 									default: return _ea.au($[0])
// 								}
// 							}))
// 							case 'superfluous property': return _ea.ss($, ($) => `Superfluous property '${$.name}'`)
// 							default: return _ea.au($[0])
// 						}
// 					})))
// 					case 'warning': return _ea.ss($, ($) => _ea.cc($, ($) => `${$[0]} (FIXME: more info)`))
// 					default: return _ea.au($[0])
// 				}
// 			}),
// 			'related information': _ea.not_set()
// 		}))
// 	})
// ).catch_(($) => {
// 	return _easync.query.guaranteed['create result']<d.On_Validate_Document_Result>({
// 		'diagnostics': _ea.cc(
// 			$,
// 			($): d.Diagnostics => {
// 				switch ($[0]) {
// 					case 'no schema file': return _ea.ss($, ($) => _ea.list_literal<d.Diagnostic>([
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
// 							'related information': _ea.not_set()
// 						}


// 					]))
// 					case 'schema error': return _ea.ss($, ($) => _ea.list_literal<d.Diagnostic>([
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
// 							'related information': _ea.set(_ea.list_literal([
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
// 					case 'parse error': return _ea.ss($, ($) => _ea.list_literal<d.Diagnostic>([
// 						{
// 							'severity': ['error', null],
// 							'range': create_frontend_range_from_range($.range),
// 							'message': `${d_parse_result.Parse_Error_Type($.type)}`,
// 							'related information': _ea.not_set()
// 						}
// 					]))
// 					default: return _ea.au($[0])
// 				}
// 			}
// 		)
// 	})
// })



export type Resources = {
    'read file': _et.Query<d_read_file.Result, d_read_file.Error, d_read_file.Parameters>
}

export const $$: _et.Query_Function<d.On_Validate_Document_Result, d.On_Validate_Document_Result, d.Validate_Document_Parameters, Resources> = _easync.create_query_function(
    ($p, $qr) => load_pareto_document($qr)(
        {
            'content': $p.content,
            'file path': $p['file path'],
        },
        ($): d.On_Validate_Document_Result => ({
            'diagnostics': _ea.cc(
                $,
                ($): d.Diagnostics => {
                    switch ($[0]) {
                        case 'no schema file': return _ea.ss($, ($) => _ea.list_literal<d.Diagnostic>([
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
                                'related information': _ea.not_set()
                            }


                        ]))
                        case 'schema error': return _ea.ss($, ($) => _ea.list_literal<d.Diagnostic>([
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
                                'related information': _ea.set(_ea.list_literal([
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
                        case 'parse error': return _ea.ss($, ($) => _ea.list_literal<d.Diagnostic>([
                            {
                                'severity': ['error', null],
                                'range': create_frontend_range_from_range($.range),
                                'message': `${d_parse_result.Parse_Error_Type($.type)}`,
                                'related information': _ea.not_set()
                            }
                        ]))
                        case 'unmarshall error': return _ea.ss($, ($) => _ea.list_literal<d.Diagnostic>([
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
                                'related information': _ea.not_set()
                            }
                        ]))
                        default: return _ea.au($[0])
                    }
                }
            )
        }),
    ).transform_result(($): d.On_Validate_Document_Result => ({
        'diagnostics': t_unmarshall_result_2_unmarshall_errors.Node($, null).map(($): d.Diagnostic => ({

            'severity': _ea.cc($.type, ($) => {
                switch ($[0]) {
                    case 'error': return _ea.ss($, ($) => ['error', null])
                    case 'warning': return _ea.ss($, ($) => ['warning', null])
                    default: return _ea.au($[0])
                }
            }),
            'range': create_frontend_range_from_range($.range),
            'message': _ea.cc($.type, ($) => {
                switch ($[0]) {
                    case 'error': return _ea.ss($, ($) => _ea.cc($, ($) => _ea.cc($, ($) => {
                        switch ($[0]) {
                            case 'duplicate property': return _ea.ss($, ($) => `Duplicate property '${$.name}'`)
                            case 'invalid value type': return _ea.ss($, ($) => `Invalid type, expected ${op_join($.expected.map(($) => `'${$[0]}'`), { 'separator': " or " })}`)
                            case 'missing property': return _ea.ss($, ($) => `Missing property '${$.name}'`)
                            case 'state': return _ea.ss($, ($) => _ea.cc($, ($) => {
                                switch ($[0]) {
                                    case 'missing state name': return _ea.ss($, ($) => `Missing state name`)
                                    case 'missing data marker': return _ea.ss($, ($) => `Missing data marker for state 'XXXX'`)
                                    case 'missing value': return _ea.ss($, ($) => `Missing value for state 'XXXX'`)
                                    case 'more than 2 elements': return _ea.ss($, ($) => `State 'XXXX' has more than 2 elements`)
                                    case 'state is not a string': return _ea.ss($, ($) => `State 'XXXX' is not a string`)
                                    case 'unknown state': return _ea.ss($, ($) => `this state does not exist, choose from ${op_join(op_dictionary_to_list($.expected).map(($) => `'${$.key}'`), { 'separator': " or " })}`)
                                    default: return _ea.au($[0])
                                }
                            }))
                            case 'superfluous property': return _ea.ss($, ($) => `Superfluous property '${$.name}'`)
                            default: return _ea.au($[0])
                        }
                    })))
                    case 'warning': return _ea.ss($, ($) => _ea.cc($, ($) => `${$[0]} (FIXME: more info)`))
                    default: return _ea.au($[0])
                }
            }),
            'related information': _ea.not_set()
        }))
    }))
)