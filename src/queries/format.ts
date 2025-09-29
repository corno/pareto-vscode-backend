import _easync from 'exupery-core-async'
import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import * as d from "../client_data_types"

import * as t_backend_location from "../transformations/backend_location"


export const $$ = (
	$p: {
		'content': string
		'options': d.Format_Options
	},
): _easync.Unsafe_Query_Result<d.Format_Result, d.Format_Error> => _ea.panic("IMPLEMENT ME")