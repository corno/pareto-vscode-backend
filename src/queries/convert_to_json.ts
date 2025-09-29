import _easync from 'exupery-core-async'
import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import * as d from "../server_data_types"

import * as t_backend_location from "../transformations/backend_location"


export const $$ = (
	$p: {
		'content': string
	},
): _easync.Unsafe_Query_Result<string, null> => _ea.panic("IMPLEMENT ME")